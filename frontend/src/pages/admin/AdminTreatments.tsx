import { useState, useEffect, Fragment, useMemo } from "react";
import { Treatment, TreatmentProcessStep } from "@/data/treatments";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Plus,
  Pencil,
  Trash2,
  X,
  PlayCircle,
  Upload,
  Image as ImageIcon,
  Loader2,
  GripVertical,
  Star,
  FolderTree,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  ArrowDown,
  LayoutList,
  Table as TableIcon,
  Search,
  Sparkles,
  Layers,
  Crown,
  Info,
  FolderInput,
  FolderPlus,
  ArrowRightLeft
} from "lucide-react";
import { toast } from "sonner";
import { useTreatments } from "@/hooks/useTreatments";
import { API_BASE_URL, getAuthHeaders, getMediaUrl } from "@/lib/api";

const CATEGORY_ORDER = [
  "SKIN & ADVANCED FACIAL TREATMENTS",
  "HAIR & SCALP TREATMENTS",
  "PANCHKARMA (MAIN DETOX THERAPIES)",
  "OTHER PANCHKARMA & SUPPORTIVE THERAPIES",
  "WEIGHT LOSS & BODY DETOX",
  "WELLNESS, WOMEN & IMMUNITY CARE",
];

const AdminTreatments = () => {
  const { treatments, loading, refetch } = useTreatments();
  const [list, setList] = useState<Treatment[]>([]);
  const [editing, setEditing] = useState<Treatment | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [editLang, setEditLang] = useState<'en' | 'hi'>('en');
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);

  // Active view: 'treatments' (by category) | 'categories' (main categories order) | 'table' (classic table)
  const [activeTab, setActiveTab] = useState<'treatments' | 'categories' | 'table'>('treatments');
  const [searchQuery, setSearchQuery] = useState('');
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});
  const [isSavingReorder, setIsSavingReorder] = useState(false);

  // Drag and Drop State for Treatments
  const [draggedTreatment, setDraggedTreatment] = useState<Treatment | null>(null);
  const [dragOverTreatmentId, setDragOverTreatmentId] = useState<string | null>(null);
  const [dragOverTreatmentPosition, setDragOverTreatmentPosition] = useState<'before' | 'after' | null>(null);
  const [dragOverCategory, setDragOverCategory] = useState<string | null>(null);

  // Drop target state for promoting to Main Category
  const [dragOverMainDropZoneCategory, setDragOverMainDropZoneCategory] = useState<string | null>(null);
  const [dragOverGlobalMainZone, setDragOverGlobalMainZone] = useState<boolean>(false);
  const [dragOverNewCategoryZone, setDragOverNewCategoryZone] = useState<boolean>(false);

  // Move Category / Convert to New Main Category Modal State
  const [moveModalTreatment, setMoveModalTreatment] = useState<Treatment | null>(null);
  const [moveTargetType, setMoveTargetType] = useState<'existing' | 'new'>('existing');
  const [moveSelectedCategory, setMoveSelectedCategory] = useState<string>('');
  const [moveNewCategoryName, setMoveNewCategoryName] = useState<string>('');
  const [moveSetAsMain, setMoveSetAsMain] = useState<boolean>(false);

  // Drag and Drop State for Main Categories
  const [draggedCategory, setDraggedCategory] = useState<string | null>(null);
  const [dragOverCategoryTarget, setDragOverCategoryTarget] = useState<{
    category: string;
    position: 'before' | 'after';
  } | null>(null);

  // Sync internal list with incoming treatments
  useEffect(() => {
    setList(treatments);
  }, [treatments]);

  // Compute dynamically ordered categories based on each category's Main Category treatment sequence
  const orderedCategories = useMemo(() => {
    const allCats = Array.from(new Set([
      ...CATEGORY_ORDER,
      ...list.map(t => t.category).filter(Boolean)
    ]));

    return allCats.sort((catA, catB) => {
      const mainA = list.find(t => t.category === catA && t.isMainCategory);
      const mainB = list.find(t => t.category === catB && t.isMainCategory);

      const seqA = mainA?.sequence !== undefined && mainA.sequence !== null ? mainA.sequence : 999;
      const seqB = mainB?.sequence !== undefined && mainB.sequence !== null ? mainB.sequence : 999;

      if (seqA !== seqB) return seqA - seqB;

      const idxA = CATEGORY_ORDER.indexOf(catA);
      const idxB = CATEGORY_ORDER.indexOf(catB);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;

      return catA.localeCompare(catB);
    });
  }, [list]);

  // Group treatments by category and sort them by sequence
  const treatmentsByCategory = useMemo(() => {
    const groups: Record<string, Treatment[]> = {};

    orderedCategories.forEach(cat => {
      groups[cat] = [];
    });

    list.forEach(item => {
      const cat = item.category || "UNCATEGORIZED";
      if (!groups[cat]) {
        groups[cat] = [];
      }
      groups[cat].push(item);
    });

    // Sort items within each category
    Object.keys(groups).forEach(cat => {
      groups[cat].sort((a, b) => {
        const seqA = a.sequence !== undefined && a.sequence !== null ? a.sequence : 999;
        const seqB = b.sequence !== undefined && b.sequence !== null ? b.sequence : 999;
        if (seqA !== seqB) return seqA - seqB;
        return (a.title || "").localeCompare(b.title || "");
      });
    });

    return groups;
  }, [list, orderedCategories]);

  // Save batch updates to backend
  const persistReorder = async (updatedItems: Treatment[], successMessage?: string) => {
    setIsSavingReorder(true);
    try {
      let headers = getAuthHeaders();
      if (headers.Authorization) {
        headers.Authorization = headers.Authorization.replace(/"/g, "");
      }

      const payload = {
        items: updatedItems.map(t => ({
          _id: t._id,
          sequence: t.sequence,
          category: t.category,
          isMainCategory: !!t.isMainCategory
        }))
      };

      const res = await fetch(`${API_BASE_URL}/api/treatments/reorder`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || "Failed to update sequences");
      }

      if (successMessage) {
        toast.success(successMessage);
      }
      refetch();
    } catch (err: any) {
      console.error("Reorder save error:", err);
      toast.error(err.message || "Failed to save reorder");
      refetch();
    } finally {
      setIsSavingReorder(false);
    }
  };

  // -------------------------------------------------------------
  // PROMOTE ANY TREATMENT TO MAIN CATEGORY (BY DRAG & DROP)
  // -------------------------------------------------------------

  const handleDropMakeMainCategory = async (targetCategory?: string) => {
    if (!draggedTreatment) return;

    const treatment = draggedTreatment;
    const category = targetCategory || treatment.category;

    const itemsToUpdate: Treatment[] = [];

    const updatedList = list.map(item => {
      if (item.category === category) {
        if ((item._id && item._id === treatment._id) || item.treatmentId === treatment.treatmentId) {
          // Promote to main
          const updated = { ...item, category, isMainCategory: true };
          itemsToUpdate.push(updated);
          return updated;
        } else if (item.isMainCategory) {
          // Demote existing main in this category
          const demoted = { ...item, isMainCategory: false };
          itemsToUpdate.push(demoted);
          return demoted;
        }
      } else if ((item._id && item._id === treatment._id) || item.treatmentId === treatment.treatmentId) {
        // If moved from another category into this category as main
        const updated = { ...item, category, isMainCategory: true };
        itemsToUpdate.push(updated);
        return updated;
      }
      return item;
    });

    setList(updatedList);
    handleTreatmentDragEnd();
    setDragOverMainDropZoneCategory(null);
    setDragOverGlobalMainZone(false);

    await persistReorder(
      itemsToUpdate,
      `⭐ "${treatment.title}" is now the Main Category Treatment for ${category}!`
    );
  };

  // Open Move / Re-categorize Modal
  const openMoveCategoryModal = (
    treatment: Treatment,
    defaultToNewCategory: boolean = false,
    defaultNewName?: string
  ) => {
    setMoveModalTreatment(treatment);
    setMoveTargetType(defaultToNewCategory ? 'new' : 'existing');
    setMoveSelectedCategory(treatment.category || orderedCategories[0] || '');
    setMoveNewCategoryName(
      defaultNewName || (treatment.title ? treatment.title.toUpperCase() : '')
    );
    setMoveSetAsMain(defaultToNewCategory ? true : !!treatment.isMainCategory);
  };

  // Execute Category Move (Move to Existing or Create New Main Category)
  const handleExecuteCategoryMove = async () => {
    if (!moveModalTreatment) return;

    const treatment = moveModalTreatment;
    const targetCategory = (
      moveTargetType === 'new' ? moveNewCategoryName : moveSelectedCategory
    ).trim();

    if (!targetCategory) {
      toast.error("Please enter or select a category name");
      return;
    }

    const isNewCategory = moveTargetType === 'new';
    const makeMain = moveSetAsMain;
    const itemsToUpdate: Treatment[] = [];

    let targetSeq = 1;
    if (makeMain) {
      const existingMainSeqs = list
        .filter(t => t.isMainCategory && typeof t.sequence === 'number')
        .map(t => t.sequence as number);
      targetSeq = existingMainSeqs.length > 0 ? Math.max(...existingMainSeqs) + 1 : 1;
    } else {
      const targetCatItems = (treatmentsByCategory[targetCategory] || []).filter(
        t => (t._id ? t._id !== treatment._id : t.treatmentId !== treatment.treatmentId)
      );
      targetSeq = targetCatItems.length + 1;
    }

    const updatedTreatment: Treatment = {
      ...treatment,
      category: targetCategory,
      isMainCategory: makeMain,
      sequence: targetSeq
    };
    itemsToUpdate.push(updatedTreatment);

    const updatedList = list.map(item => {
      const isTarget = (item._id && item._id === treatment._id) || item.treatmentId === treatment.treatmentId;
      if (isTarget) {
        return updatedTreatment;
      }
      if (makeMain && item.category === targetCategory && item.isMainCategory) {
        const demoted = { ...item, isMainCategory: false };
        itemsToUpdate.push(demoted);
        return demoted;
      }
      return item;
    });

    setList(updatedList);
    setMoveModalTreatment(null);

    const msg = isNewCategory
      ? `🎉 "${treatment.title}" is now its own Main Category: "${targetCategory}"!`
      : `Moved "${treatment.title}" to "${targetCategory}"${makeMain ? ' as Main Category' : ''}!`;

    await persistReorder(itemsToUpdate, msg);
  };

  // Toggle Main Category Hero for a treatment (1-Click button)
  const handleToggleMainCategory = async (treatment: Treatment) => {
    const targetCategory = treatment.category;
    const isNowMain = !treatment.isMainCategory;

    const itemsToUpdate: Treatment[] = [];

    const updatedList = list.map(item => {
      if (item.category === targetCategory) {
        if ((item._id && item._id === treatment._id) || item.treatmentId === treatment.treatmentId) {
          const updated = { ...item, isMainCategory: isNowMain };
          itemsToUpdate.push(updated);
          return updated;
        } else if (isNowMain && item.isMainCategory) {
          const demoted = { ...item, isMainCategory: false };
          itemsToUpdate.push(demoted);
          return demoted;
        }
      }
      return item;
    });

    setList(updatedList);

    const message = isNowMain
      ? `⭐ "${treatment.title}" set as Main Category Hero for ${targetCategory}`
      : `Removed Main Category Hero from "${treatment.title}"`;

    await persistReorder(itemsToUpdate, message);
  };

  // -------------------------------------------------------------
  // REORDER MAIN CATEGORIES (Category-Level Drag & Drop / Move)
  // -------------------------------------------------------------

  const handleCategoryDragStart = (e: React.DragEvent, category: string) => {
    e.dataTransfer.setData("type", "category");
    e.dataTransfer.setData("category", category);
    e.dataTransfer.effectAllowed = "move";
    setDraggedCategory(category);
  };

  const handleCategoryDragOver = (e: React.DragEvent, targetCategory: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (!draggedCategory || draggedCategory === targetCategory) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const isBefore = (e.clientY - rect.top) < (rect.height / 2);

    setDragOverCategoryTarget({
      category: targetCategory,
      position: isBefore ? 'before' : 'after'
    });
  };

  const handleCategoryDrop = async (e: React.DragEvent, targetCategory: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (!draggedCategory || draggedCategory === targetCategory) {
      setDraggedCategory(null);
      setDragOverCategoryTarget(null);
      return;
    }

    const currentCats = [...orderedCategories];
    const sourceIndex = currentCats.indexOf(draggedCategory);
    if (sourceIndex === -1) {
      setDraggedCategory(null);
      setDragOverCategoryTarget(null);
      return;
    }

    const [removed] = currentCats.splice(sourceIndex, 1);
    let targetIndex = currentCats.indexOf(targetCategory);
    if (targetIndex === -1) {
      targetIndex = currentCats.length;
    } else if (dragOverCategoryTarget?.position === 'after') {
      targetIndex += 1;
    }

    currentCats.splice(targetIndex, 0, removed);

    // Update sequences of Main Category treatment for each category
    const updatedMainItems: Treatment[] = [];
    const updatedList = list.map(item => {
      if (item.isMainCategory) {
        const catIdx = currentCats.indexOf(item.category);
        if (catIdx !== -1) {
          const updated = { ...item, sequence: (catIdx + 1) * 10 };
          updatedMainItems.push(updated);
          return updated;
        }
      }
      return item;
    });

    setList(updatedList);
    setDraggedCategory(null);
    setDragOverCategoryTarget(null);

    await persistReorder(
      updatedMainItems,
      `Reordered "${draggedCategory}" to position #${targetIndex + 1}`
    );
  };

  const handleMoveCategoryStep = async (category: string, direction: 'up' | 'down') => {
    const currentCats = [...orderedCategories];
    const currentIndex = currentCats.indexOf(category);
    if (currentIndex === -1) return;
    if (direction === 'up' && currentIndex === 0) return;
    if (direction === 'down' && currentIndex === currentCats.length - 1) return;

    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    const temp = currentCats[currentIndex];
    currentCats[currentIndex] = currentCats[targetIndex];
    currentCats[targetIndex] = temp;

    const updatedMainItems: Treatment[] = [];
    const updatedList = list.map(item => {
      if (item.isMainCategory) {
        const catIdx = currentCats.indexOf(item.category);
        if (catIdx !== -1) {
          const updated = { ...item, sequence: (catIdx + 1) * 10 };
          updatedMainItems.push(updated);
          return updated;
        }
      }
      return item;
    });

    setList(updatedList);

    await persistReorder(
      updatedMainItems,
      `Moved "${category}" ${direction === 'up' ? 'up to #' + (targetIndex + 1) : 'down to #' + (targetIndex + 1)}`
    );
  };

  // -------------------------------------------------------------
  // REORDER INDIVIDUAL TREATMENTS (Treatment-Level Drag & Drop)
  // -------------------------------------------------------------

  const handleTreatmentDragStart = (e: React.DragEvent, item: Treatment) => {
    e.dataTransfer.setData("type", "treatment");
    e.dataTransfer.setData("treatmentId", item._id || item.treatmentId);
    e.dataTransfer.effectAllowed = "move";
    setDraggedTreatment(item);
  };

  const handleTreatmentDragEnd = () => {
    setDraggedTreatment(null);
    setDragOverTreatmentId(null);
    setDragOverTreatmentPosition(null);
    setDragOverCategory(null);
    setDragOverMainDropZoneCategory(null);
    setDragOverGlobalMainZone(false);
  };

  const handleTreatmentDragOver = (e: React.DragEvent, targetItem: Treatment, category: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (!draggedTreatment) return;
    const targetId = targetItem._id || targetItem.treatmentId;
    const draggedId = draggedTreatment._id || draggedTreatment.treatmentId;
    if (targetId === draggedId) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const isBefore = (e.clientY - rect.top) < (rect.height / 2);

    setDragOverTreatmentId(targetId);
    setDragOverTreatmentPosition(isBefore ? 'before' : 'after');
    setDragOverCategory(category);
  };

  const handleDropOnTreatment = async (e: React.DragEvent, targetItem: Treatment, targetCategory: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (!draggedTreatment) return;
    const targetId = targetItem._id || targetItem.treatmentId;
    const draggedId = draggedTreatment._id || draggedTreatment.treatmentId;
    if (targetId === draggedId) {
      handleTreatmentDragEnd();
      return;
    }

    const isSameCategory = draggedTreatment.category === targetCategory;

    if (isSameCategory) {
      // Reorder within the same category
      const catItems = [...(treatmentsByCategory[targetCategory] || [])];
      const sourceIndex = catItems.findIndex(t => (t._id && t._id === draggedId) || t.treatmentId === draggedId);
      if (sourceIndex === -1) {
        handleTreatmentDragEnd();
        return;
      }

      const [removed] = catItems.splice(sourceIndex, 1);

      let targetIndex = catItems.findIndex(t => (t._id && t._id === targetId) || t.treatmentId === targetId);
      if (targetIndex === -1) {
        targetIndex = catItems.length;
      } else if (dragOverTreatmentPosition === 'after') {
        targetIndex += 1;
      }

      catItems.splice(targetIndex, 0, removed);

      // Re-index sequences 1 to N
      const updatedCategoryItems = catItems.map((item, idx) => ({
        ...item,
        sequence: idx + 1
      }));

      const updatedList = list.map(item => {
        const found = updatedCategoryItems.find(u => (u._id && u._id === item._id) || u.treatmentId === item.treatmentId);
        return found || item;
      });

      setList(updatedList);
      handleTreatmentDragEnd();

      await persistReorder(
        updatedCategoryItems,
        `Reordered "${draggedTreatment.title}" to position #${targetIndex + 1} in ${targetCategory}`
      );
    } else {
      // Cross-category transfer
      const oldCategory = draggedTreatment.category;

      const oldCatItems = (treatmentsByCategory[oldCategory] || [])
        .filter(t => (t._id ? t._id !== draggedId : t.treatmentId !== draggedId))
        .map((t, idx) => ({ ...t, sequence: idx + 1 }));

      const newCatItems = [...(treatmentsByCategory[targetCategory] || [])];
      let targetIndex = newCatItems.findIndex(t => (t._id && t._id === targetId) || t.treatmentId === targetId);
      if (targetIndex === -1) {
        targetIndex = newCatItems.length;
      } else if (dragOverTreatmentPosition === 'after') {
        targetIndex += 1;
      }

      const transferredItem: Treatment = {
        ...draggedTreatment,
        category: targetCategory,
        isMainCategory: false,
        sequence: targetIndex + 1
      };

      newCatItems.splice(targetIndex, 0, transferredItem);

      const reorderedNewCatItems = newCatItems.map((t, idx) => ({
        ...t,
        sequence: idx + 1
      }));

      const updatedList = list
        .filter(t => (t._id ? t._id !== draggedId : t.treatmentId !== draggedId))
        .map(t => {
          const fromOld = oldCatItems.find(o => (o._id && o._id === t._id) || o.treatmentId === t.treatmentId);
          if (fromOld) return fromOld;
          const fromNew = reorderedNewCatItems.find(n => (n._id && n._id === t._id) || n.treatmentId === t.treatmentId);
          if (fromNew) return fromNew;
          return t;
        });
      updatedList.push(transferredItem);

      setList(updatedList);
      handleTreatmentDragEnd();

      const affected = [...oldCatItems, ...reorderedNewCatItems];
      await persistReorder(
        affected,
        `Moved "${draggedTreatment.title}" to ${targetCategory} at position #${targetIndex + 1}`
      );
    }
  };

  const handleDropOnCategoryBottom = async (e: React.DragEvent, targetCategory: string) => {
    e.preventDefault();
    if (!draggedTreatment) return;

    const draggedId = draggedTreatment._id || draggedTreatment.treatmentId;

    if (draggedTreatment.category === targetCategory) {
      const catItems = [...(treatmentsByCategory[targetCategory] || [])];
      const sourceIndex = catItems.findIndex(t => (t._id && t._id === draggedId) || t.treatmentId === draggedId);
      if (sourceIndex === -1 || sourceIndex === catItems.length - 1) {
        handleTreatmentDragEnd();
        return;
      }

      const [removed] = catItems.splice(sourceIndex, 1);
      catItems.push(removed);

      const updatedCategoryItems = catItems.map((item, idx) => ({
        ...item,
        sequence: idx + 1
      }));

      const updatedList = list.map(item => {
        const found = updatedCategoryItems.find(u => (u._id && u._id === item._id) || u.treatmentId === item.treatmentId);
        return found || item;
      });

      setList(updatedList);
      handleTreatmentDragEnd();

      await persistReorder(
        updatedCategoryItems,
        `Moved "${draggedTreatment.title}" to end of ${targetCategory}`
      );
    } else {
      const oldCategory = draggedTreatment.category;

      const oldCatItems = (treatmentsByCategory[oldCategory] || [])
        .filter(t => (t._id ? t._id !== draggedId : t.treatmentId !== draggedId))
        .map((t, idx) => ({ ...t, sequence: idx + 1 }));

      const newCatItems = [...(treatmentsByCategory[targetCategory] || [])];
      const transferredItem: Treatment = {
        ...draggedTreatment,
        category: targetCategory,
        isMainCategory: false,
        sequence: newCatItems.length + 1
      };
      newCatItems.push(transferredItem);

      const reorderedNewCatItems = newCatItems.map((t, idx) => ({
        ...t,
        sequence: idx + 1
      }));

      const updatedList = list
        .filter(t => (t._id ? t._id !== draggedId : t.treatmentId !== draggedId))
        .map(t => {
          const fromOld = oldCatItems.find(o => (o._id && o._id === t._id) || o.treatmentId === t.treatmentId);
          if (fromOld) return fromOld;
          const fromNew = reorderedNewCatItems.find(n => (n._id && n._id === t._id) || n.treatmentId === t.treatmentId);
          if (fromNew) return fromNew;
          return t;
        });
      updatedList.push(transferredItem);

      setList(updatedList);
      handleTreatmentDragEnd();

      const affected = [...oldCatItems, ...reorderedNewCatItems];
      await persistReorder(
        affected,
        `Moved "${draggedTreatment.title}" to ${targetCategory}`
      );
    }
  };

  // 1-Click Move Step for Treatment
  const handleMoveStep = async (treatment: Treatment, direction: 'up' | 'down') => {
    const cat = treatment.category;
    const catItems = [...(treatmentsByCategory[cat] || [])];
    const currentIndex = catItems.findIndex(t => (t._id && t._id === treatment._id) || t.treatmentId === treatment.treatmentId);

    if (currentIndex === -1) return;
    if (direction === 'up' && currentIndex === 0) return;
    if (direction === 'down' && currentIndex === catItems.length - 1) return;

    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

    const temp = catItems[currentIndex];
    catItems[currentIndex] = catItems[targetIndex];
    catItems[targetIndex] = temp;

    const updatedCategoryItems = catItems.map((item, idx) => ({
      ...item,
      sequence: idx + 1
    }));

    const updatedList = list.map(item => {
      const found = updatedCategoryItems.find(u => (u._id && u._id === item._id) || u.treatmentId === item.treatmentId);
      return found || item;
    });

    setList(updatedList);
    await persistReorder(updatedCategoryItems, `Moved "${treatment.title}" ${direction === 'up' ? 'up to #' + (targetIndex + 1) : 'down to #' + (targetIndex + 1)}`);
  };

  // Transfer treatment directly to another category via dropdown
  const handleDirectTransferCategory = async (treatment: Treatment, targetCategory: string) => {
    if (treatment.category === targetCategory) return;

    const oldCategory = treatment.category;

    const oldCatItems = (treatmentsByCategory[oldCategory] || [])
      .filter(t => (t._id ? t._id !== treatment._id : t.treatmentId !== treatment.treatmentId))
      .map((t, idx) => ({ ...t, sequence: idx + 1 }));

    const targetCatItems = [...(treatmentsByCategory[targetCategory] || [])];
    const transferredItem: Treatment = {
      ...treatment,
      category: targetCategory,
      isMainCategory: false,
      sequence: targetCatItems.length + 1
    };
    targetCatItems.push(transferredItem);

    const reorderedTargetItems = targetCatItems.map((t, idx) => ({
      ...t,
      sequence: idx + 1
    }));

    const updatedList = list
      .filter(t => (t._id ? t._id !== treatment._id : t.treatmentId !== treatment.treatmentId))
      .map(t => {
        const fromOld = oldCatItems.find(o => (o._id && o._id === t._id) || o.treatmentId === t.treatmentId);
        if (fromOld) return fromOld;
        const fromNew = reorderedTargetItems.find(n => (n._id && n._id === t._id) || n.treatmentId === t.treatmentId);
        if (fromNew) return fromNew;
        return t;
      });
    updatedList.push(transferredItem);

    setList(updatedList);

    const affectedItems = [...oldCatItems, ...reorderedTargetItems];
    await persistReorder(affectedItems, `Transferred "${treatment.title}" to ${targetCategory}`);
  };

  const toggleCategoryCollapse = (cat: string) => {
    setCollapsedCategories(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const toggleAllCollapse = (expand: boolean) => {
    const newState: Record<string, boolean> = {};
    orderedCategories.forEach(cat => {
      newState[cat] = !expand;
    });
    setCollapsedCategories(newState);
  };

  // Image Upload handler for Form
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      let headers = getAuthHeaders();
      if (headers.Authorization) {
        headers.Authorization = headers.Authorization.replace(/"/g, "");
      }

      const res = await fetch(`${API_BASE_URL}/api/treatments/upload-image`, {
        method: "POST",
        headers,
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem("kalpvan_token");
          localStorage.removeItem("kalpvan_user");
        }
        throw new Error(data.message || "Failed to upload image");
      }

      setEditing((prev) => (prev ? { ...prev, image: data.imageUrl } : null));
      toast.success("Image uploaded successfully");
    } catch (error: any) {
      toast.error(error.message || "Image upload failed");
    } finally {
      setUploadingImage(false);
      e.target.value = "";
    }
  };

  const emptyTreatment: Treatment = {
    treatmentId: "",
    title: "",
    shortDescription: "",
    description: "",
    benefits: [],
    process: [
      { name: "", description: "" },
      { name: "", description: "" },
      { name: "", description: "" },
      { name: "", description: "" }
    ],
    duration: "",
    image: "",
    category: "",
    videoUrl: "",
    gallery: [],
    isMainCategory: false,
    sequence: 0
  };

  const openNew = () => {
    setEditing({ ...emptyTreatment, treatmentId: `t-${Date.now()}` });
    setIsNew(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openEdit = (t: Treatment) => {
    if (editing?._id === t._id) {
      setEditing(null);
    } else {
      setEditing({ ...t });
      setIsNew(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const close = () => {
    setEditing(null);
    setIsNew(false);
  };

  const handleProcessChange = (index: number, field: keyof TreatmentProcessStep, value: string) => {
    if (!editing) return;
    const newProcess = [...editing.process];
    newProcess[index] = { ...newProcess[index], [field]: value };
    setEditing({ ...editing, process: newProcess });
  };

  const addProcessStep = () => {
    if (!editing) return;
    const newEditing = {
      ...editing,
      process: [...editing.process, { name: "", description: "", image: "" }]
    };
    if (newEditing.processHi && newEditing.processHi.length > 0) {
      newEditing.processHi = [...newEditing.processHi, { name: "", description: "" }];
    }
    setEditing(newEditing);
  };

  const removeProcessStep = (index: number) => {
    if (!editing) return;
    const newProcess = [...editing.process];
    newProcess.splice(index, 1);

    const newEditing = { ...editing, process: newProcess };
    if (newEditing.processHi && newEditing.processHi.length > 0) {
      const newProcessHi = [...newEditing.processHi];
      newProcessHi.splice(index, 1);
      newEditing.processHi = newProcessHi;
    }
    setEditing(newEditing);
  };

  const save = async () => {
    if (!editing?.title) {
      toast.error("Title is required");
      return;
    }
    if (!editing?.category) {
      toast.error("Please select a Category from the dropdown");
      return;
    }

    try {
      const payload = {
        ...editing,
        gallery: (editing.gallery || [])
          .flatMap(s => s.split(/[\n,]+/))
          .map(s => s.trim())
          .filter(Boolean)
      };

      if (isNew) {
        const res = await fetch(`${API_BASE_URL}/api/treatments`, {
          method: "POST",
          headers: { "Content-Type": "application/json", ...getAuthHeaders() },
          body: JSON.stringify(payload)
        });
        if (!res.ok) {
          if (res.status === 401) {
            localStorage.removeItem("kalpvan_token");
            localStorage.removeItem("kalpvan_user");
          }
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || "Failed to create");
        }
        toast.success("Treatment added!");
      } else {
        const res = await fetch(`${API_BASE_URL}/api/treatments/${editing._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json", ...getAuthHeaders() },
          body: JSON.stringify(payload)
        });
        if (!res.ok) {
          if (res.status === 401) {
            localStorage.removeItem("kalpvan_token");
            localStorage.removeItem("kalpvan_user");
          }
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || "Failed to update");
        }
        toast.success("Treatment updated!");
      }
      refetch();
      close();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Are you sure you want to delete this treatment?")) return;
    try {
      const res = await fetch(`${API_BASE_URL}/api/treatments/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders()
      });
      if (!res.ok) throw new Error("Failed to delete");
      toast.success("Treatment deleted!");
      refetch();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const filterMatches = (item: Treatment) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      (item.title || "").toLowerCase().includes(q) ||
      (item.titleHi || "").toLowerCase().includes(q) ||
      (item.treatmentId || "").toLowerCase().includes(q) ||
      (item.category || "").toLowerCase().includes(q)
    );
  };

  // Treatment Form Component
  const renderForm = () => {
    if (!editing) return null;
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
              {isNew ? <Plus size={20} /> : <Pencil size={18} />}
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {isNew ? "Create New Treatment" : "Update Treatment"}
              </h3>
              <p className="text-xs text-muted-foreground">
                {editing.category ? `Category: ${editing.category}` : "Fill in treatment details below"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex bg-muted rounded-full p-1 border border-border">
              <button
                type="button"
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  editLang === 'en'
                    ? 'bg-background shadow text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setEditLang('en')}
              >
                English
              </button>
              <button
                type="button"
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  editLang === 'hi'
                    ? 'bg-background shadow text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setEditLang('hi')}
              >
                Hindi (हिन्दी)
              </button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={close}
              className="rounded-full hover:bg-muted-foreground/10"
            >
              <X size={20} />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Treatment ID</Label>
            <Input
              value={editing.treatmentId}
              disabled={!isNew}
              className="bg-muted/50"
              onChange={e => setEditing({ ...editing, treatmentId: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Title</Label>
            <Input
              value={editLang === 'en' ? editing.title : (editing.titleHi || "")}
              placeholder={editLang === 'en' ? "e.g. Abhyanga Massage" : "उदा. अभ्यंग मालिश"}
              onChange={e =>
                editLang === 'en'
                  ? setEditing({ ...editing, title: e.target.value })
                  : setEditing({ ...editing, titleHi: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-semibold flex justify-between">
              Category
              {isCustomCategory && (
                <button
                  type="button"
                  onClick={() => {
                    setIsCustomCategory(false);
                    setEditing({ ...editing, category: "" });
                  }}
                  className="text-xs text-primary hover:underline"
                >
                  Cancel Custom
                </button>
              )}
            </Label>
            {isCustomCategory ? (
              <Input
                value={editing.category}
                placeholder="Enter custom category name..."
                onChange={e => setEditing({ ...editing, category: e.target.value.toUpperCase() })}
                autoFocus
              />
            ) : (
              <select
                value={orderedCategories.includes(editing.category) ? editing.category : ""}
                onChange={e => {
                  if (e.target.value === "__CUSTOM__") {
                    setIsCustomCategory(true);
                    setEditing({ ...editing, category: "" });
                  } else {
                    setEditing({ ...editing, category: e.target.value });
                  }
                }}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="" disabled>Select a Category...</option>
                {orderedCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
                <option value="__CUSTOM__" className="font-bold text-primary">+ Add Custom Category...</option>
              </select>
            )}
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Duration</Label>
            <Input
              value={editing.duration}
              placeholder="e.g. 60 min"
              onChange={e => setEditing({ ...editing, duration: e.target.value })}
            />
          </div>
          <div className="space-y-3 md:col-span-2 bg-muted/20 p-4 rounded-xl border border-border/80">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-semibold flex items-center gap-2 text-foreground">
                <ImageIcon size={16} className="text-primary" />
                Treatment Image
              </Label>
              <button
                type="button"
                onClick={() => setShowUrlInput(!showUrlInput)}
                className="text-xs text-muted-foreground hover:text-primary transition-colors underline"
              >
                {showUrlInput ? "Hide image URL" : "Or enter image URL"}
              </button>
            </div>

            {editing.image ? (
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-background p-3 rounded-lg border border-border">
                <img
                  src={getMediaUrl(editing.image)}
                  alt={editing.title || "Treatment preview"}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg border shadow-sm flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400";
                  }}
                />
                <div className="space-y-2 flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground truncate font-mono bg-muted/50 px-2 py-1 rounded">
                    {editing.image}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <label className="cursor-pointer inline-flex">
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/avif,image/jpg"
                        className="hidden"
                        onChange={handleImageUpload}
                        disabled={uploadingImage}
                      />
                      <span className="inline-flex items-center justify-center rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-8 px-3">
                        {uploadingImage ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Upload className="w-3.5 h-3.5 mr-1.5" />
                            Change Image
                          </>
                        )}
                      </span>
                    </label>

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:bg-destructive/10 h-8 text-xs"
                      onClick={() => setEditing({ ...editing, image: "" })}
                    >
                      <X className="w-3.5 h-3.5 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center border-2 border-dashed border-border hover:border-primary/60 bg-background/50 hover:bg-primary/5 rounded-xl p-6 cursor-pointer transition-colors group">
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/avif,image/jpg"
                  className="hidden"
                  onChange={handleImageUpload}
                  disabled={uploadingImage}
                />
                {uploadingImage ? (
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    <span className="text-sm font-medium text-foreground">Uploading image...</span>
                    <span className="text-xs text-muted-foreground">Please wait a moment</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Upload className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Click to upload an image from your computer
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Supports JPG, PNG, WEBP, AVIF (Max 10MB)
                      </p>
                    </div>
                  </div>
                )}
              </label>
            )}

            {showUrlInput && (
              <div className="pt-2 animate-in fade-in duration-200">
                <Label className="text-xs text-muted-foreground mb-1 block">Image URL (Optional)</Label>
                <Input
                  value={editing.image}
                  placeholder="https://images.unsplash.com/... or /uploads/..."
                  onChange={e => setEditing({ ...editing, image: e.target.value })}
                  className="text-xs font-mono"
                />
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-semibold flex items-center gap-1">
              <PlayCircle size={14} /> Video URL
            </Label>
            <Input
              value={editing.videoUrl || ""}
              placeholder="YouTube URL"
              onChange={e => setEditing({ ...editing, videoUrl: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-primary">Display Sequence</Label>
            <Input
              type="number"
              min={0}
              value={editing.sequence || 0}
              onChange={e => setEditing({ ...editing, sequence: Number(e.target.value) })}
              className="border-primary/40"
            />
            <p className="text-[11px] text-muted-foreground">
              Tip: You can also drag and drop cards directly to reorder sequence!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 bg-primary/5 p-4 rounded-lg border border-primary/10">
              <input
                type="checkbox"
                id="isFeatured"
                checked={editing.isFeatured || false}
                onChange={e => setEditing({ ...editing, isFeatured: e.target.checked })}
                className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
              />
              <Label htmlFor="isFeatured" className="cursor-pointer font-medium">Feature on Homepage</Label>
            </div>

            <div className="flex items-center space-x-3 bg-amber-500/10 p-4 rounded-lg border border-amber-500/20">
              <input
                type="checkbox"
                id="isMainCategory"
                checked={editing.isMainCategory || false}
                onChange={e => setEditing({ ...editing, isMainCategory: e.target.checked })}
                className="h-5 w-5 rounded border-amber-400 text-amber-600 focus:ring-amber-500 cursor-pointer"
              />
              <div>
                <Label htmlFor="isMainCategory" className="cursor-pointer font-bold text-xs flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
                  <Star size={13} className="fill-amber-500 text-amber-500" />
                  Set as Main Category Showcase Treatment
                </Label>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  Represents this whole category card on the homepage
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label className="text-sm font-semibold">Short Description</Label>
            <Textarea
              value={editLang === 'en' ? editing.shortDescription : (editing.shortDescriptionHi || "")}
              placeholder="A brief summary for the cards..."
              onChange={e =>
                editLang === 'en'
                  ? setEditing({ ...editing, shortDescription: e.target.value })
                  : setEditing({ ...editing, shortDescriptionHi: e.target.value })
              }
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label className="text-sm font-semibold">Gallery (one URL per line)</Label>
            <Textarea
              value={(editing.gallery || []).join("\n")}
              placeholder="https://image1.jpg&#10;https://image2.jpg"
              onChange={e => setEditing({ ...editing, gallery: e.target.value.split("\n") })}
              rows={3}
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label className="text-sm font-semibold">Full Treatment Description</Label>
            <Textarea
              rows={6}
              value={editLang === 'en' ? editing.description : (editing.descriptionHi || "")}
              placeholder="Provide deep details about the therapy..."
              onChange={e =>
                editLang === 'en'
                  ? setEditing({ ...editing, description: e.target.value })
                  : setEditing({ ...editing, descriptionHi: e.target.value })
              }
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label className="text-sm font-semibold">Key Benefits (comma separated)</Label>
            <Input
              value={
                editLang === 'en'
                  ? (editing.benefits || []).join(", ")
                  : (editing.benefitsHi || []).join(", ")
              }
              placeholder="Relaxation, Pain Relief, Detox..."
              onChange={e => {
                const arr = e.target.value.split(",").map(s => s.trim()).filter(Boolean);
                if (editLang === 'en') setEditing({ ...editing, benefits: arr });
                else setEditing({ ...editing, benefitsHi: arr });
              }}
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label className="text-sm font-semibold">Who Can Benefit (comma separated)</Label>
            <Input
              value={
                editLang === 'en'
                  ? (editing.whoCanBenefit || []).join(", ")
                  : (editing.whoCanBenefitHi || []).join(", ")
              }
              placeholder="Acne, Fine Lines, Dull Skin..."
              onChange={e => {
                const arr = e.target.value.split(",").map(s => s.trim()).filter(Boolean);
                if (editLang === 'en') setEditing({ ...editing, whoCanBenefit: arr });
                else setEditing({ ...editing, whoCanBenefitHi: arr });
              }}
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label className="text-sm font-semibold">Why Choose Us (comma separated)</Label>
            <Input
              value={
                editLang === 'en'
                  ? (editing.whyChooseUs || []).join(", ")
                  : (editing.whyChooseUsHi || []).join(", ")
              }
              placeholder="Experienced Doctors, Herbal Treatments..."
              onChange={e => {
                const arr = e.target.value.split(",").map(s => s.trim()).filter(Boolean);
                if (editLang === 'en') setEditing({ ...editing, whyChooseUs: arr });
                else setEditing({ ...editing, whyChooseUsHi: arr });
              }}
            />
          </div>

          <div className="md:col-span-2 mt-4 pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <Label className="text-lg font-bold">Treatment Steps</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addProcessStep}
                className="rounded-full shadow-sm"
              >
                <Plus size={16} className="mr-1" /> Add Phase
              </Button>
            </div>
            <div className="space-y-4">
              {(() => {
                const processArr =
                  editLang === 'en'
                    ? editing.process
                    : editing.processHi?.length > 0
                    ? editing.processHi
                    : editing.process.map(() => ({ name: "", description: "" }));
                return processArr.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 border border-border rounded-xl relative bg-muted/30 group transition-all hover:border-primary/30"
                  >
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeProcessStep(idx)}
                    >
                      <Trash2 size={16} />
                    </Button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-1">
                        <Label className="text-xs font-bold uppercase text-muted-foreground">Phase Name</Label>
                        <Input
                          value={step.name || ""}
                          placeholder="e.g. Preparation"
                          onChange={e => {
                            if (editLang === 'en') {
                              handleProcessChange(idx, "name", e.target.value);
                            } else {
                              const newProcessHi = [
                                ...(editing.processHi?.length > 0
                                  ? editing.processHi
                                  : editing.process.map(() => ({ name: "", description: "" })))
                              ];
                              newProcessHi[idx] = { ...newProcessHi[idx], name: e.target.value };
                              setEditing({ ...editing, processHi: newProcessHi });
                            }
                          }}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs font-bold uppercase text-muted-foreground">Illustration URL</Label>
                        <Input
                          value={
                            editLang === 'en'
                              ? editing.process[idx]?.image || ""
                              : editing.process[idx]?.image || ""
                          }
                          disabled={editLang === 'hi'}
                          placeholder={editLang === 'hi' ? "(Switch to English to edit image)" : "Image URL (Optional)"}
                          onChange={e => handleProcessChange(idx, "image", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs font-bold uppercase text-muted-foreground">Phase Description</Label>
                      <Textarea
                        rows={2}
                        value={step.description || ""}
                        placeholder="Describe this step..."
                        onChange={e => {
                          if (editLang === 'en') {
                            handleProcessChange(idx, "description", e.target.value);
                          } else {
                            const newProcessHi = [
                              ...(editing.processHi?.length > 0
                                  ? editing.processHi
                                  : editing.process.map(() => ({ name: "", description: "" })))
                            ];
                            newProcessHi[idx] = { ...newProcessHi[idx], description: e.target.value };
                            setEditing({ ...editing, processHi: newProcessHi });
                          }
                        }}
                      />
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8 pt-6 border-t">
          <Button onClick={save} size="lg" className="rounded-xl px-8 shadow-lg shadow-primary/20">
            {isNew ? "Create Treatment" : "Update Treatment"}
          </Button>
          <Button variant="outline" onClick={close} size="lg" className="rounded-xl px-8">
            Dismiss
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Top Header & View Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-card p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <div className="flex items-center gap-2.5">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">
              Treatments & Sequence Manager
            </h2>
            {isSavingReorder && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary animate-pulse border border-primary/20">
                <Loader2 size={12} className="animate-spin" />
                Saving sequence...
              </span>
            )}
          </div>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">
            Drag any therapy and drop it onto the <strong>Main Category Hero Zone</strong> to make it the Main Treatment. Reorder with Drag & Drop or 1-Click buttons.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* View Mode Switcher */}
          <div className="flex bg-muted p-1 rounded-xl border border-border">
            <button
              type="button"
              onClick={() => setActiveTab('treatments')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'treatments'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <LayoutList size={14} className="text-primary" />
              Therapies by Category
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('categories')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'categories'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Layers size={14} className="text-primary" />
              Main Categories Order
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('table')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'table'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <TableIcon size={14} />
              Classic Table
            </button>
          </div>

          <Button onClick={openNew} className="rounded-xl shadow-md">
            <Plus size={16} className="mr-1.5" /> Add Treatment
          </Button>
        </div>
      </div>

      {/* Inline Form View when editing or adding */}
      {editing && (
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl border-2 border-primary/30 animate-in slide-in-from-top-4 duration-300">
          {renderForm()}
        </div>
      )}

      {/* TOP DROP ZONES: (1) MAKE NEW MAIN CATEGORY | (2) MAKE MAIN HERO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* DROP ZONE 1: CREATE A NEW MAIN CATEGORY (e.g. Suvarnaprashan) */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (draggedTreatment) setDragOverNewCategoryZone(true);
          }}
          onDragLeave={() => setDragOverNewCategoryZone(false)}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragOverNewCategoryZone(false);
            if (draggedTreatment) {
              openMoveCategoryModal(draggedTreatment, true, draggedTreatment.title.toUpperCase());
            }
          }}
          className={`p-4 rounded-2xl border-2 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
            dragOverNewCategoryZone
              ? 'border-purple-500 bg-purple-500/20 ring-4 ring-purple-500/30 shadow-xl scale-[1.01]'
              : draggedTreatment
              ? 'border-dashed border-purple-500/70 bg-purple-500/10 animate-pulse shadow-md'
              : 'border-dashed border-purple-300/40 dark:border-purple-900/40 bg-purple-500/[0.03]'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all ${
              dragOverNewCategoryZone || draggedTreatment ? 'bg-purple-600 text-white shadow-md' : 'bg-purple-500/15 text-purple-600'
            }`}>
              <Sparkles size={20} className={dragOverNewCategoryZone || draggedTreatment ? 'fill-white' : ''} />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm md:text-base text-foreground flex items-center gap-2">
                Make Treatment a NEW Main Category
                <span className="text-[10px] font-semibold bg-purple-500/20 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/30">
                  e.g. Suvarnaprashan
                </span>
              </h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                Drag <strong>any treatment</strong> and drop here to convert it into its <strong>own separate Main Category</strong>!
              </p>
            </div>
          </div>

          {draggedTreatment && (
            <div className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-purple-600 text-white shadow-md animate-bounce flex items-center gap-1.5 flex-shrink-0">
              <Sparkles size={13} className="fill-white" />
              Drop: Make New Category
            </div>
          )}
        </div>

        {/* DROP ZONE 2: SET AS MAIN CATEGORY HERO */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (draggedTreatment) setDragOverGlobalMainZone(true);
          }}
          onDragLeave={() => setDragOverGlobalMainZone(false)}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleDropMakeMainCategory();
          }}
          className={`p-4 rounded-2xl border-2 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
            dragOverGlobalMainZone
              ? 'border-amber-500 bg-amber-500/20 ring-4 ring-amber-500/30 shadow-xl scale-[1.01]'
              : draggedTreatment
              ? 'border-dashed border-amber-500/70 bg-amber-500/10 animate-pulse shadow-md'
              : 'border-dashed border-border/80 bg-muted/20'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all ${
              dragOverGlobalMainZone || draggedTreatment ? 'bg-amber-500 text-white shadow-md' : 'bg-amber-500/15 text-amber-600'
            }`}>
              <Crown size={20} className={dragOverGlobalMainZone || draggedTreatment ? 'fill-white' : ''} />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm md:text-base text-foreground flex items-center gap-2">
                Make Main Hero in Current Category
                <span className="text-[10px] font-semibold bg-amber-500/20 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                  Main Hero
                </span>
              </h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                Drop here to promote the dragged therapy to the <strong>Main Hero card</strong> of its current category.
              </p>
            </div>
          </div>

          {draggedTreatment && (
            <div className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-white shadow-md animate-bounce flex items-center gap-1.5 flex-shrink-0">
              <Star size={13} className="fill-white" />
              Drop: Make Main Hero
            </div>
          )}
        </div>
      </div>

      {/* Main Search and Quick Action Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-muted/40 p-4 rounded-xl border border-border/70">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by title, Hindi name, ID or category..."
            className="pl-9 bg-background h-9 text-xs md:text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {activeTab === 'treatments' && (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleAllCollapse(true)}
              className="text-xs h-8"
            >
              Expand All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleAllCollapse(false)}
              className="text-xs h-8"
            >
              Collapse All
            </Button>
          </div>
        )}
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center p-16 bg-card rounded-2xl border border-border">
          <Loader2 className="animate-spin text-primary w-10 h-10 mb-3" />
          <span className="text-sm text-muted-foreground">Loading treatments from database...</span>
        </div>
      ) : activeTab === 'categories' ? (
        /* ========================================================================= */
        /* TAB 1: MAIN CATEGORIES ORDER (DRAG & DROP / 1-CLICK CATEGORY REORDER)     */
        /* ========================================================================= */
        <div className="space-y-4">
          <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 flex items-start gap-3">
            <Info size={18} className="text-primary mt-0.5 flex-shrink-0" />
            <div className="text-xs md:text-sm text-foreground">
              <p className="font-bold">Main Category Display Order</p>
              <p className="text-muted-foreground mt-0.5">
                Drag any category card using its handle <GripVertical size={14} className="inline" /> or click the <ArrowUp size={12} className="inline" /> / <ArrowDown size={12} className="inline" /> buttons to change which category appears 1st, 2nd, 3rd, etc. on the homepage and treatments directory.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {orderedCategories.map((category, catIndex) => {
              const mainTreatment = list.find(t => t.category === category && t.isMainCategory);
              const count = (treatmentsByCategory[category] || []).length;
              const isBeingDragged = draggedCategory === category;
              const isTarget = dragOverCategoryTarget?.category === category;
              const isBefore = isTarget && dragOverCategoryTarget?.position === 'before';
              const isAfter = isTarget && dragOverCategoryTarget?.position === 'after';

              return (
                <Fragment key={category}>
                  {isBefore && (
                    <div className="h-1.5 bg-primary rounded-full animate-pulse shadow-md mx-4" />
                  )}

                  <div
                    onDragOver={(e) => handleCategoryDragOver(e, category)}
                    onDrop={(e) => handleCategoryDrop(e, category)}
                    className={`bg-card rounded-2xl border transition-all duration-150 p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                      isBeingDragged
                        ? 'opacity-40 scale-[0.99] border-dashed border-primary bg-primary/5'
                        : 'border-border shadow-sm hover:border-primary/50 hover:shadow-md'
                    }`}
                  >
                    {/* Left: Drag handle, sequence badge, hero thumbnail, category title */}
                    <div className="flex items-center gap-3.5 min-w-0 flex-1">
                      {/* Drag Handle */}
                      <div
                        draggable={true}
                        onDragStart={(e) => handleCategoryDragStart(e, category)}
                        onDragEnd={() => {
                          setDraggedCategory(null);
                          setDragOverCategoryTarget(null);
                        }}
                        className="cursor-grab active:cursor-grabbing p-2 rounded-xl bg-muted/60 hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground flex-shrink-0"
                        title="Drag to reorder this Main Category"
                      >
                        <GripVertical size={20} />
                      </div>

                      {/* Position Badge */}
                      <div className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
                        #{catIndex + 1}
                      </div>

                      {/* Main Category Hero Thumbnail */}
                      {mainTreatment?.image ? (
                        <img
                          src={getMediaUrl(mainTreatment.image)}
                          alt={mainTreatment.title}
                          className="w-14 h-14 rounded-xl object-cover border border-border flex-shrink-0 shadow-sm"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400";
                          }}
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center text-muted-foreground flex-shrink-0">
                          <FolderTree size={22} />
                        </div>
                      )}

                      {/* Titles */}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display font-bold text-base md:text-lg text-foreground">
                            {category}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground border border-border">
                            {count} therapies
                          </span>
                        </div>
                        {mainTreatment && (
                          <p className="text-xs text-amber-700 dark:text-amber-400 font-medium flex items-center gap-1.5 mt-0.5">
                            <Star size={12} className="fill-amber-500 text-amber-500" />
                            Hero: <strong>{mainTreatment.title}</strong>
                            {mainTreatment.titleHi && (
                              <span className="text-muted-foreground font-normal">
                                ({mainTreatment.titleHi})
                              </span>
                            )}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Right: 1-Click Move buttons */}
                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end pt-3 sm:pt-0 border-t sm:border-t-0 border-border/50">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        disabled={catIndex === 0}
                        onClick={() => handleMoveCategoryStep(category, 'up')}
                        className="h-9 px-3 gap-1 rounded-xl text-xs font-semibold"
                        title="Move this Category Up"
                      >
                        <ArrowUp size={14} /> Move Up
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        disabled={catIndex === orderedCategories.length - 1}
                        onClick={() => handleMoveCategoryStep(category, 'down')}
                        className="h-9 px-3 gap-1 rounded-xl text-xs font-semibold"
                        title="Move this Category Down"
                      >
                        <ArrowDown size={14} /> Move Down
                      </Button>

                      {mainTreatment && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => openEdit(mainTreatment)}
                          className="h-9 w-9 p-0 rounded-xl"
                          title="Edit Main Category Card"
                        >
                          <Pencil size={15} />
                        </Button>
                      )}
                    </div>
                  </div>

                  {isAfter && (
                    <div className="h-1.5 bg-primary rounded-full animate-pulse shadow-md mx-4" />
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      ) : activeTab === 'treatments' ? (
        /* ========================================================================= */
        /* TAB 2: THERAPIES BY CATEGORY (WITH MAIN CATEGORY HERO DROP ZONE)          */
        /* ========================================================================= */
        <div className="space-y-6">
          {orderedCategories.map((category, catIndex) => {
            const allCategoryTreatments = treatmentsByCategory[category] || [];
            const categoryTreatments = allCategoryTreatments.filter(filterMatches);
            const isCollapsed = !!collapsedCategories[category];
            const isDragOverThisCategory = dragOverCategory === category;
            const isDragOverHeroZone = dragOverMainDropZoneCategory === category;
            const mainTreatment = allCategoryTreatments.find(t => t.isMainCategory);

            return (
              <div
                key={category}
                onDragOver={(e) => {
                  e.preventDefault();
                  if (draggedTreatment) setDragOverCategory(category);
                }}
                onDrop={(e) => handleDropOnCategoryBottom(e, category)}
                className={`bg-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isDragOverThisCategory
                    ? 'border-primary ring-2 ring-primary/30 shadow-lg bg-primary/[0.02]'
                    : 'border-border shadow-sm hover:border-border/80'
                }`}
              >
                {/* Category Header */}
                <div
                  className="p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-muted/30 border-b border-border/70 select-none"
                >
                  <div className="flex items-center gap-3">
                    {/* Category Drag Handle */}
                    <div
                      draggable={true}
                      onDragStart={(e) => handleCategoryDragStart(e, category)}
                      onDragEnd={() => {
                        setDraggedCategory(null);
                        setDragOverCategoryTarget(null);
                      }}
                      className="cursor-grab active:cursor-grabbing p-1.5 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                      title="Drag to reorder this category among other main categories"
                    >
                      <GripVertical size={18} />
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                      #{catIndex + 1}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display font-bold text-base md:text-lg text-foreground">
                          {category}
                        </h3>
                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground border border-border">
                          {allCategoryTreatments.length} therapies
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        {mainTreatment ? (
                          <span className="inline-flex items-center gap-1 text-xs text-amber-700 dark:text-amber-400 font-medium">
                            <Crown size={12} className="text-amber-500 fill-amber-500" />
                            Main Hero: <strong>{mainTreatment.title}</strong>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground italic">
                            <Info size={12} />
                            No main hero set (drag any therapy into the Hero box below)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-auto">
                    {/* Quick Category Move Up/Down */}
                    <div className="flex items-center bg-muted rounded-lg p-0.5 border border-border">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        disabled={catIndex === 0}
                        onClick={() => handleMoveCategoryStep(category, 'up')}
                        className="h-7 px-2 text-[11px] gap-1"
                        title="Move Category Up"
                      >
                        <ArrowUp size={12} />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        disabled={catIndex === orderedCategories.length - 1}
                        onClick={() => handleMoveCategoryStep(category, 'down')}
                        className="h-7 px-2 text-[11px] gap-1"
                        title="Move Category Down"
                      >
                        <ArrowDown size={12} />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCategoryCollapse(category)}
                      className="rounded-full h-8 w-8 p-0"
                      title={isCollapsed ? "Expand" : "Collapse"}
                    >
                      {isCollapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                    </Button>
                  </div>
                </div>

                {/* Category Content */}
                {!isCollapsed && (
                  <div className="p-4 md:p-5 space-y-4">
                    {/* ------------------------------------------------------------- */}
                    {/* MAIN CATEGORY HERO DROP ZONE & ACTIVE SHOWCASE CARD           */}
                    {/* ------------------------------------------------------------- */}
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (draggedTreatment) setDragOverMainDropZoneCategory(category);
                      }}
                      onDragLeave={() => setDragOverMainDropZoneCategory(null)}
                      onDrop={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleDropMakeMainCategory(category);
                      }}
                      className={`rounded-xl border-2 transition-all duration-200 overflow-hidden ${
                        isDragOverHeroZone
                          ? 'border-amber-500 bg-amber-500/20 ring-4 ring-amber-500/30 shadow-lg scale-[1.01]'
                          : mainTreatment
                          ? 'border-amber-400/60 bg-gradient-to-r from-amber-500/[0.08] to-amber-500/[0.02]'
                          : 'border-dashed border-amber-400/40 bg-amber-500/[0.02]'
                      }`}
                    >
                      <div className="p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold flex-shrink-0 ${
                            mainTreatment ? 'bg-amber-500 text-white shadow-sm' : 'bg-amber-500/20 text-amber-600'
                          }`}>
                            <Crown size={18} className={mainTreatment ? 'fill-white' : ''} />
                          </div>

                          {mainTreatment?.image ? (
                            <img
                              src={getMediaUrl(mainTreatment.image)}
                              alt={mainTreatment.title}
                              className="w-12 h-12 rounded-lg object-cover border border-amber-400/50 flex-shrink-0 shadow-sm"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400";
                              }}
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 flex-shrink-0">
                              <ImageIcon size={18} />
                            </div>
                          )}

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500 text-white shadow-xs">
                                👑 Main Category Hero Card
                              </span>
                              {mainTreatment ? (
                                <h4 className="font-bold text-sm md:text-base text-foreground truncate">
                                  {mainTreatment.title}
                                </h4>
                              ) : (
                                <h4 className="font-semibold text-xs md:text-sm text-amber-800 dark:text-amber-300 italic">
                                  No Main Treatment Assigned Yet
                                </h4>
                              )}
                            </div>
                            <p className="text-[11px] text-muted-foreground mt-0.5">
                              {mainTreatment
                                ? (mainTreatment.titleHi || "Displays on homepage & category showcase card")
                                : "Drag any therapy from the list below and drop here to make it the Main Treatment!"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                          {draggedTreatment ? (
                            <span className="px-3 py-1 rounded-lg text-xs font-bold bg-amber-500 text-white animate-pulse">
                              Drop here to make Main!
                            </span>
                          ) : mainTreatment ? (
                            <>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => handleToggleMainCategory(mainTreatment)}
                                className="h-8 text-xs font-semibold hover:border-destructive hover:text-destructive"
                                title="Demote back to regular treatment"
                              >
                                Remove Main
                              </Button>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => openEdit(mainTreatment)}
                                className="h-8 w-8 p-0 rounded-lg hover:bg-amber-500/10"
                                title="Edit Main Hero Treatment"
                              >
                                <Pencil size={14} />
                              </Button>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    {/* Sub-Treatments List Section */}
                    <div>
                      <div className="flex items-center justify-between mb-2 px-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Therapies in this Category (Drag to reorder sequence):
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          {categoryTreatments.length} therapies
                        </span>
                      </div>

                      {categoryTreatments.length === 0 ? (
                        <div
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => handleDropOnCategoryBottom(e, category)}
                          className="p-8 border-2 border-dashed border-border rounded-xl text-center text-muted-foreground text-xs md:text-sm bg-muted/10 hover:border-primary/50 transition-colors"
                        >
                          {searchQuery ? (
                            "No therapies in this category match your search."
                          ) : (
                            <div className="space-y-1">
                              <p className="font-medium text-foreground">No therapies in this category yet</p>
                              <p className="text-xs">Drag and drop any therapy card from another category here to transfer it.</p>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="space-y-2.5">
                          {categoryTreatments.map((treatment, index) => {
                            const isMain = !!treatment.isMainCategory;
                            const isBeingDragged = (draggedTreatment?._id && draggedTreatment._id === treatment._id) || draggedTreatment?.treatmentId === treatment.treatmentId;
                            const isTarget = dragOverTreatmentId === (treatment._id || treatment.treatmentId);
                            const isBefore = isTarget && dragOverTreatmentPosition === 'before';
                            const isAfter = isTarget && dragOverTreatmentPosition === 'after';

                            return (
                              <Fragment key={treatment._id || treatment.treatmentId}>
                                {/* Visual Drop Line Indicator (Before) */}
                                {isBefore && (
                                  <div className="h-1 bg-primary rounded-full animate-pulse shadow-sm mx-2" />
                                )}

                                <div
                                  onDragOver={(e) => handleTreatmentDragOver(e, treatment, category)}
                                  onDrop={(e) => handleDropOnTreatment(e, treatment, category)}
                                  className={`group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl border transition-all duration-150 ${
                                    isBeingDragged
                                      ? 'opacity-40 scale-[0.99] border-dashed border-primary bg-primary/5'
                                      : isMain
                                      ? 'bg-amber-500/[0.04] border-amber-500/40 hover:border-amber-500 shadow-sm'
                                      : 'bg-background border-border/80 hover:border-primary/50 hover:shadow-sm'
                                  }`}
                                >
                                  {/* Left Section: Drag handle, sequence badge, thumbnail, titles */}
                                  <div className="flex items-center gap-3 min-w-0 flex-1">
                                    {/* Dedicated Drag Handle */}
                                    <div
                                      draggable={true}
                                      onDragStart={(e) => handleTreatmentDragStart(e, treatment)}
                                      onDragEnd={handleTreatmentDragEnd}
                                      className="cursor-grab active:cursor-grabbing text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-muted"
                                      title="Drag this handle to reorder sequence, drag into another category, or drop onto the Hero zone"
                                    >
                                      <GripVertical size={20} />
                                    </div>

                                    {/* Sequence Position Badge */}
                                    <div
                                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                                        isMain
                                          ? 'bg-amber-500 text-white shadow-sm'
                                          : 'bg-primary/10 text-primary font-mono'
                                      }`}
                                      title={`Position #${index + 1} in ${category}`}
                                    >
                                      #{index + 1}
                                    </div>

                                    {/* Thumbnail */}
                                    {treatment.image ? (
                                      <img
                                        src={getMediaUrl(treatment.image)}
                                        alt={treatment.title}
                                        className="w-12 h-12 rounded-lg object-cover border border-border flex-shrink-0"
                                        onError={(e) => {
                                          (e.target as HTMLImageElement).src =
                                            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400";
                                        }}
                                      />
                                    ) : (
                                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground flex-shrink-0">
                                        <ImageIcon size={18} />
                                      </div>
                                    )}

                                    {/* Title & Meta */}
                                    <div className="min-w-0 flex-1">
                                      <div className="flex flex-wrap items-center gap-2">
                                        <h4 className="font-semibold text-sm md:text-base text-foreground truncate">
                                          {treatment.title}
                                        </h4>
                                        {isMain && (
                                          <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-amber-500/30">
                                            <Crown size={10} className="fill-amber-500 text-amber-500" />
                                            Main Hero
                                          </span>
                                        )}
                                        {treatment.duration && (
                                          <span className="text-[11px] text-muted-foreground bg-muted px-2 py-0.5 rounded">
                                            {treatment.duration}
                                          </span>
                                        )}
                                      </div>
                                      {treatment.titleHi && (
                                        <p className="text-xs text-muted-foreground truncate mt-0.5">
                                          {treatment.titleHi}
                                        </p>
                                      )}
                                    </div>
                                  </div>

                                  {/* Right Section: Main Toggle, Move buttons, Transfer dropdown, Edit, Delete */}
                                  <div
                                    className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-border/50"
                                    onMouseDown={(e) => e.stopPropagation()}
                                  >
                                    {/* Toggle Main Category Button */}
                                    <Button
                                      type="button"
                                      variant={isMain ? "default" : "outline"}
                                      size="sm"
                                      onClick={() => handleToggleMainCategory(treatment)}
                                      className={`h-8 text-xs font-semibold rounded-lg ${
                                        isMain
                                          ? 'bg-amber-500 hover:bg-amber-600 text-white'
                                          : 'hover:border-amber-400 hover:text-amber-600'
                                      }`}
                                      title={
                                        isMain
                                          ? "Click to remove as Main Category Hero"
                                          : "Click to set this therapy as the Main Category Hero for " + category
                                      }
                                    >
                                      <Crown
                                        size={13}
                                        className={`mr-1 ${isMain ? 'fill-white text-white' : 'text-amber-500'}`}
                                      />
                                      {isMain ? "Main Hero" : "Make Main"}
                                    </Button>

                                    {/* 1-Click Move Step Buttons */}
                                    <div className="flex items-center bg-muted/60 rounded-lg p-0.5 border border-border">
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        disabled={index === 0}
                                        onClick={() => handleMoveStep(treatment, 'up')}
                                        className="h-7 w-7 p-0 rounded-md hover:bg-background"
                                        title="Move 1 step up"
                                      >
                                        <ArrowUp size={13} />
                                      </Button>
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        disabled={index === categoryTreatments.length - 1}
                                        onClick={() => handleMoveStep(treatment, 'down')}
                                        className="h-7 w-7 p-0 rounded-md hover:bg-background"
                                        title="Move 1 step down"
                                      >
                                        <ArrowDown size={13} />
                                      </Button>
                                    </div>

                                    {/* 1-Click Move / Change Category Modal Trigger */}
                                    <Button
                                      type="button"
                                      variant="outline"
                                      size="sm"
                                      onClick={() => openMoveCategoryModal(treatment)}
                                      className="h-8 text-xs font-semibold rounded-lg gap-1.5 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400"
                                      title="Move to another category or make a new Main Category"
                                    >
                                      <FolderInput size={13} className="text-purple-600" />
                                      <span>Move Category</span>
                                    </Button>

                                    {/* Direct Category Transfer Select */}
                                    <select
                                      value=""
                                      onChange={(e) => {
                                        if (e.target.value === '__NEW__') {
                                          openMoveCategoryModal(treatment, true, treatment.title.toUpperCase());
                                        } else if (e.target.value) {
                                          handleDirectTransferCategory(treatment, e.target.value);
                                        }
                                      }}
                                      className="h-8 rounded-lg border border-border bg-background px-2 text-xs text-muted-foreground hover:text-foreground cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary"
                                      title="Transfer to another category"
                                    >
                                      <option value="" disabled>Transfer to...</option>
                                      <option value="__NEW__" className="font-bold text-purple-600">✨ + Create New Main Category...</option>
                                      {orderedCategories
                                        .filter(c => c !== category)
                                        .map(cat => (
                                          <option key={cat} value={cat}>
                                            → {cat}
                                          </option>
                                        ))}
                                    </select>

                                    {/* Edit Button */}
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => openEdit(treatment)}
                                      className="h-8 w-8 p-0 rounded-lg hover:bg-primary/10 hover:text-primary"
                                      title="Edit treatment details"
                                    >
                                      <Pencil size={14} />
                                    </Button>

                                    {/* Delete Button */}
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => treatment._id && remove(treatment._id)}
                                      className="h-8 w-8 p-0 rounded-lg text-destructive hover:bg-destructive/10"
                                      title="Delete treatment"
                                    >
                                      <Trash2 size={14} />
                                    </Button>
                                  </div>
                                </div>

                                {/* Visual Drop Line Indicator (After) */}
                                {isAfter && (
                                  <div className="h-1 bg-primary rounded-full animate-pulse shadow-sm mx-2" />
                                )}
                              </Fragment>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Quick drop target at end of category */}
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        if (draggedTreatment) setDragOverCategory(category);
                      }}
                      onDrop={(e) => handleDropOnCategoryBottom(e, category)}
                      className={`h-8 rounded-xl border border-dashed transition-all flex items-center justify-center text-[11px] text-muted-foreground ${
                        isDragOverThisCategory && draggedTreatment
                          ? 'border-primary bg-primary/10 text-primary font-semibold'
                          : 'border-transparent opacity-0 hover:opacity-100 hover:border-border'
                      }`}
                    >
                      Drop at end of {category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        /* ========================================================================= */
        /* TAB 3: CLASSIC TABLE VIEW                                                 */
        /* ========================================================================= */
        <div className="bg-card rounded-2xl shadow-md border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left py-4 px-6 text-muted-foreground font-semibold uppercase tracking-wider">
                  Treatment
                </th>
                <th className="text-left py-4 px-6 text-muted-foreground font-semibold uppercase tracking-wider hidden md:table-cell">
                  Category
                </th>
                <th className="text-center py-4 px-6 text-muted-foreground font-semibold uppercase tracking-wider">
                  Sequence Order
                </th>
                <th className="text-right py-4 px-6 text-muted-foreground font-semibold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {list.filter(filterMatches).length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-12 text-center text-muted-foreground italic">
                    No treatments found matching your criteria.
                  </td>
                </tr>
              ) : (
                list.filter(filterMatches).map(t => (
                  <Fragment key={t._id || t.treatmentId}>
                    <tr
                      className={`border-b border-border/50 transition-colors hover:bg-muted/30 ${
                        editing && editing._id === t._id ? 'bg-primary/5' : ''
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          {t.image ? (
                            <img
                              src={getMediaUrl(t.image)}
                              alt={t.title}
                              className="w-10 h-10 rounded-md object-cover border border-border flex-shrink-0"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = "none";
                              }}
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center text-muted-foreground flex-shrink-0">
                              <ImageIcon size={18} />
                            </div>
                          )}
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-foreground font-semibold text-base">{t.title}</span>
                              {t.isMainCategory && (
                                <span className="bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest border border-amber-500/30">
                                  Main Hero
                                </span>
                              )}
                            </div>
                            {t.titleHi && (
                              <span className="text-xs text-muted-foreground block">{t.titleHi}</span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-muted-foreground hidden md:table-cell">
                        <span className="bg-secondary px-2 py-1 rounded-md text-xs font-medium">
                          {t.category}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center text-foreground font-bold text-base font-mono">
                        #{t.sequence || 0}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex justify-end items-center gap-1">
                          <Button
                            variant={t.isMainCategory ? "default" : "ghost"}
                            size="sm"
                            className={`rounded-full h-8 w-8 p-0 ${t.isMainCategory ? 'bg-amber-500 text-white' : ''}`}
                            onClick={() => handleToggleMainCategory(t)}
                            title={t.isMainCategory ? "Remove Main Hero" : "Make Main Hero"}
                          >
                            <Crown size={14} className={t.isMainCategory ? 'fill-white' : ''} />
                          </Button>
                          <Button
                            variant={editing?._id === t._id ? "default" : "ghost"}
                            size="sm"
                            className="rounded-full h-8 w-8 p-0"
                            onClick={() => openEdit(t)}
                            title="Update Treatment"
                          >
                            <Pencil size={14} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-destructive hover:bg-destructive/10 rounded-full"
                            onClick={() => t._id && remove(t._id)}
                            title="Delete Treatment"
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </Fragment>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
      {/* ============================================================= */}
      {/* MOVE CATEGORY / CONVERT TO NEW MAIN CATEGORY MODAL DIALOG     */}
      {/* ============================================================= */}
      {moveModalTreatment && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-card rounded-2xl border border-border max-w-lg w-full p-6 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-border/80">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                  moveTargetType === 'new' ? 'bg-purple-500/15 text-purple-600' : 'bg-primary/10 text-primary'
                }`}>
                  {moveTargetType === 'new' ? <Sparkles size={20} /> : <FolderInput size={20} />}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {moveTargetType === 'new' ? 'Convert to NEW Main Category' : 'Move Treatment to Category'}
                  </h3>
                  <p className="text-xs text-muted-foreground truncate max-w-[260px] sm:max-w-xs font-medium">
                    {moveModalTreatment.title}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMoveModalTreatment(null)}
                className="text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-muted"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4">
              {/* Current category status */}
              <div className="text-xs text-muted-foreground bg-muted/60 p-3 rounded-xl flex items-center justify-between border border-border/60">
                <span className="font-medium">Current Category:</span>
                <span className="font-bold text-foreground bg-background px-2.5 py-1 rounded-md border border-border/60">
                  {moveModalTreatment.category}
                </span>
              </div>

              {/* Destination choice tabs */}
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMoveTargetType('existing');
                    setMoveSetAsMain(false);
                  }}
                  className={`p-3.5 rounded-xl border text-left text-xs transition-all flex flex-col gap-1.5 ${
                    moveTargetType === 'existing'
                      ? 'border-primary bg-primary/10 font-bold text-primary shadow-xs'
                      : 'border-border text-muted-foreground hover:border-border/80 hover:bg-muted/30'
                  }`}
                >
                  <FolderTree size={18} className="text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Existing Category</div>
                    <div className="text-[10px] text-muted-foreground font-normal">Move into Skin, Hair, etc.</div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMoveTargetType('new');
                    setMoveSetAsMain(true);
                    if (!moveNewCategoryName) {
                      setMoveNewCategoryName(moveModalTreatment.title.toUpperCase());
                    }
                  }}
                  className={`p-3.5 rounded-xl border text-left text-xs transition-all flex flex-col gap-1.5 ${
                    moveTargetType === 'new'
                      ? 'border-purple-500 bg-purple-500/10 font-bold text-purple-600 dark:text-purple-400 shadow-xs ring-1 ring-purple-500/30'
                      : 'border-border text-muted-foreground hover:border-border/80 hover:bg-muted/30'
                  }`}
                >
                  <Sparkles size={18} className="text-purple-600" />
                  <div>
                    <div className="font-semibold text-foreground">✨ Brand NEW Category</div>
                    <div className="text-[10px] text-muted-foreground font-normal">e.g. SUVARNAPRASHAN</div>
                  </div>
                </button>
              </div>

              {/* Form Input based on selection */}
              {moveTargetType === 'existing' ? (
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-foreground">Select Destination Category:</Label>
                  <select
                    value={moveSelectedCategory}
                    onChange={(e) => setMoveSelectedCategory(e.target.value)}
                    className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  >
                    {orderedCategories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat} {cat === moveModalTreatment.category ? '(Current Category)' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-foreground flex items-center justify-between">
                    <span>New Main Category Name:</span>
                    <span className="text-[10px] text-purple-600 font-bold uppercase tracking-wider">Top-Level Category</span>
                  </Label>
                  <Input
                    value={moveNewCategoryName}
                    onChange={(e) => setMoveNewCategoryName(e.target.value)}
                    placeholder="Enter category name (e.g. SUVARNAPRASHAN)"
                    className="bg-background text-sm font-semibold tracking-wide"
                    autoFocus
                  />
                  <p className="text-[11px] text-muted-foreground">
                    This will create a new top-level Main Category card with "{moveModalTreatment.title}" as its showcase hero!
                  </p>
                </div>
              )}

              {/* Set as Main Hero Checkbox */}
              <div className="flex items-start gap-2.5 pt-3 border-t border-border/70">
                <input
                  type="checkbox"
                  id="move-make-main"
                  checked={moveSetAsMain}
                  onChange={(e) => setMoveSetAsMain(e.target.checked)}
                  className="rounded text-primary focus:ring-primary h-4 w-4 mt-0.5"
                />
                <label htmlFor="move-make-main" className="text-xs font-medium text-foreground cursor-pointer select-none">
                  <span className="flex items-center gap-1 font-semibold text-foreground">
                    <Crown size={13} className="text-amber-500 fill-amber-500" />
                    Set as Main Category Hero Card
                  </span>
                  <span className="text-[11px] text-muted-foreground block mt-0.5">
                    Displays prominently on the homepage and treatments showcase banner.
                  </span>
                </label>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-border/80">
              <Button
                type="button"
                variant="outline"
                onClick={() => setMoveModalTreatment(null)}
                disabled={isSavingReorder}
              >
                Cancel
              </Button>
              <Button
                type="button"
                disabled={isSavingReorder}
                onClick={handleExecuteCategoryMove}
                className={moveTargetType === 'new' ? 'bg-purple-600 hover:bg-purple-700 text-white font-bold' : ''}
              >
                {isSavingReorder ? <Loader2 className="animate-spin mr-1.5 w-4 h-4" /> : null}
                {moveTargetType === 'new' ? 'Create Main Category & Save' : 'Confirm & Move Treatment'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTreatments;
