export interface TreatmentProcessStep {
  name: string;
  description: string;
  image?: string;
}

export interface Treatment {
  _id?: string;
  treatmentId: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  process: TreatmentProcessStep[];
  duration: string;
  image: string;
  videoUrl?: string;
  category: string;
  gallery?: string[];
  isMainCategory?: boolean;
  isFeatured?: boolean;
  whoCanBenefit?: string[];
  whyChooseUs?: string[];
  sequence?: number;
  
  // Hindi Localization Fields (Optional)
  titleHi?: string;
  shortDescriptionHi?: string;
  descriptionHi?: string;
  benefitsHi?: string[];
  processHi?: TreatmentProcessStep[];
  whoCanBenefitHi?: string[];
  whyChooseUsHi?: string[];
}

export const treatments: Treatment[] = [
  {
    "_id": "6a80a32921baf12be0319736",
    "treatmentId": "microdermabrasion",
    "title": "Microdermabrasion",
    "shortDescription": "Microdermabrasion is a gentle skin resurfacing treatment that removes dead skin cells, improves skin texture, and restores a healthy natural glow. It is a safe, non-invasive procedure suitable for maintaining smoother, fresher, and more youthful-looking skin.",
    "description": "Microdermabrasion is a professional exfoliation treatment designed to gently remove the outer layer of dead skin cells while stimulating natural skin renewal. This treatment helps improve skin texture, reduce the appearance of fine lines, minimize clogged pores, and enhance overall skin brightness. Suitable for most skin types, it offers a safe and comfortable solution for achieving healthier, smoother, and more radiant skin with little to no downtime. When combined with personalized skincare guidance, the results become more effective and long-lasting.",
    "benefits": [
      "Gentle Skin Exfoliation",
      "Smoother Skin Texture",
      "Brighter Complexion",
      "Refined Pores",
      "Supports Natural Skin Renewal",
      "Improves Product Absorption"
    ],
    "process": [
      {
        "name": "Skin Assessment",
        "description": "A detailed skin evaluation is performed to understand your skin type, concerns, and treatment goals before creating a personalized care plan.",
        "_id": "6ae9a38cedacd842a50322f3"
      },
      {
        "name": "Skin Preparation",
        "description": "The skin is thoroughly cleansed to remove impurities and prepare the surface for a safe, comfortable, and effective exfoliation treatment.",
        "_id": "6ae9a38cedacd842a50322f4"
      },
      {
        "name": "Microdermabrasion Therapy",
        "description": "A controlled exfoliation process gently removes dead skin cells, stimulates healthy skin renewal, and improves overall skin texture and radiance.",
        "_id": "6ae9a38cedacd842a50322f5"
      },
      {
        "name": "Skin Nourishment & Aftercare",
        "description": "The treatment concludes with soothing skincare, sun protection, and personalized aftercare guidance to help maintain healthy, glowing skin.",
        "_id": "6ae9a38cedacd842a50322f6"
      }
    ],
    "duration": "45 min",
    "image": "/uploads/treatment-1793699615724.png",
    "gallery": [],
    "videoUrl": "",
    "category": "SKIN & ADVANCED FACIAL TREATMENTS",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Dull Skin",
      "Uneven Skin Texture",
      "Mild Acne Scars",
      "Fine Lines",
      "Enlarged Pores",
      "Sun- Damaged Skin",
      "Blackheads",
      "Oily Skin"
    ],
    "whyChooseUs": [
      "Experienced Skin Specialists",
      "Personalized Treatment Plans",
      "Safe & Hygienic Environment",
      "Advanced Skin Care Technology",
      "Premium Quality Products",
      "Holistic Skin Wellness"
    ],
    "sequence": 1,
    "titleHi": "माइक्रोडर्माब्रेशन",
    "shortDescriptionHi": "माइक्रोडर्माब्रेशन त्वचा की ऊपरी सतह से मृत कोशिकाओं को धीरे-धीरे हटाने वाली प्रक्रिया है। इससे त्वचा अधिक मुलायम, साफ और चमकदार दिखने में मदद मिल सकती है।",
    "descriptionHi": "माइक्रोडर्माब्रेशन एक पेशेवर एक्सफोलिएशन उपचार है, जिसमें त्वचा की बाहरी परत पर जमा मृत कोशिकाओं को नियंत्रित तरीके से हटाया जाता है। यह त्वचा की बनावट को बेहतर बनाने, महीन रेखाओं की दिखाई देने वाली तीव्रता कम करने, बंद रोमछिद्रों को साफ करने और त्वचा की चमक निखारने में सहायक हो सकता है। उपचार का चयन त्वचा की स्थिति और संवेदनशीलता के अनुसार किया जाता है। उचित त्वचा-देखभाल और धूप से सुरक्षा के साथ त्वचा अधिक ताज़ा, मुलायम और स्वस्थ दिख सकती है।",
    "benefitsHi": [
      "त्वचा की कोमल एक्सफोलिएशन",
      "अधिक मुलायम त्वचा बनावट",
      "अधिक चमकदार रंगत",
      "निखरे हुए रोमछिद्र",
      "सहायता करता है त्वचा का प्राकृतिक नवीनीकरण",
      "सुधारता है उत्पाद अवशोषण"
    ],
    "whoCanBenefitHi": [
      "बेजान त्वचा",
      "असमान त्वचा बनावट",
      "हल्का मुंहासे दाग",
      "महीन रेखाएं",
      "बड़े रोमछिद्र",
      "Sun- क्षतिग्रस्त त्वचा",
      "ब्लैकहेड्स",
      "तैलीय त्वचा"
    ],
    "whyChooseUsHi": [
      "अनुभवी त्वचा विशेषज्ञ",
      "व्यक्तिगत उपचार योजनाएं",
      "सुरक्षित और स्वच्छ वातावरण",
      "उन्नत त्वचा-देखभाल तकनीक",
      "उच्च गुणवत्ता वाले उत्पाद",
      "समग्र त्वचा स्वास्थ्य"
    ],
    "processHi": [
      {
        "name": "त्वचा का मूल्यांकन",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38cedacd842a50322ef"
      },
      {
        "name": "त्वचा की तैयारी",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38cedacd842a50322f0"
      },
      {
        "name": "माइक्रोडर्माब्रेशन चिकित्सा",
        "description": "चुनी गई माइक्रोडर्माब्रेशन प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38cedacd842a50322f1"
      },
      {
        "name": "त्वचा का पोषण और उपचार-पश्चात देखभाल",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38cedacd842a50322f2"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.405Z",
    "updatedAt": "2026-11-03T09:53:42.273Z"
  },
  {
    "_id": "6a80a32921baf12be031974a",
    "treatmentId": "light-therapy",
    "title": "Light Therapy (LED Light Therapy)",
    "shortDescription": "LED Light Therapy is a safe, non-invasive skin treatment that uses therapeutic light wavelengths to reduce acne, improve skin tone, stimulate collagen production, and accelerate natural skin healing. It delivers healthier, brighter skin without discomfort or downtime.",
    "description": "LED Light Therapy is an advanced skin rejuvenation treatment that uses carefully selected wavelengths of light to address a variety of skin concerns. Different light colors penetrate the skin at specific depths to reduce acne-causing bacteria, stimulate collagen production, calm inflammation, and promote healthy cell regeneration. The treatment is painless, relaxing, and suitable for most skin types. It helps improve overall skin texture, restore a youthful appearance, and enhance the skin's natural healing process without damaging surrounding tissues or requiring recovery time.",
    "benefits": [
      "Reduces Acne-Causing Bacteria",
      "Stimulates Collagen Production",
      "Improves Skin Elasticity",
      "Accelerates Skin Healing",
      "Reduces Inflammation",
      "Minimizes Redness",
      "Brightens Skin Tone",
      "Improves Skin Texture",
      "Supports Natural Cell Regeneration",
      "Softens Fine Lines",
      "Promotes Even Skin Tone",
      "Enhances Skin Radiance",
      "Non-Invasive & Painless",
      "No Downtime",
      "Suitable for Most Skin Types"
    ],
    "process": [
      {
        "name": "Skin Consultation",
        "description": "Our specialist carefully evaluates your skin condition and selects the most suitable LED light wavelength based on your skin concerns and treatment goals.",
        "_id": "6ae9a38cedacd842a503230d"
      },
      {
        "name": "Skin Preparation",
        "description": "The skin is thoroughly cleansed to remove impurities and prepare the treatment area, ensuring optimal light absorption and maximum effectiveness.",
        "_id": "6ae9a38cedacd842a503230e"
      },
      {
        "name": "LED Light Therapy",
        "description": "Targeted LED light is applied to stimulate collagen production, reduce acne-causing bacteria, calm inflammation, and support the skin's natural repair process.",
        "_id": "6ae9a38cedacd842a503230f"
      },
      {
        "name": "Post-Treatment Care",
        "description": "The session concludes with soothing skincare and personalized aftercare guidance to help protect your skin and maintain long-lasting treatment results.",
        "_id": "6ae9a38cedacd842a5032310"
      }
    ],
    "duration": "20–30 min",
    "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/4a/13/bc/vasuki-ayurveda-dermalux.jpg?w=900&h=-1&s=1",
    "gallery": [],
    "videoUrl": "",
    "category": "SKIN & ADVANCED FACIAL TREATMENTS",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Acne-Prone Skin",
      "Oily Skin",
      "Inflamed Skin",
      "Fine Lines & Wrinkles",
      "Uneven Skin Tone",
      "Mild Pigmentation",
      "Sensitive Skin",
      "Dull Complexion",
      "Redness & Irritation",
      "Sun- Damaged Skin"
    ],
    "whyChooseUs": [
      "Experienced Skin Specialists",
      "Personalized Treatment Plans",
      "Advanced LED Technology",
      "Safe & Hygienic Environment",
      "Holistic Skin Care Approach"
    ],
    "sequence": 2,
    "titleHi": "लाइट थेरेपी (एलईडी लाइट थेरेपी)",
    "shortDescriptionHi": "एलईडी लाइट थेरेपी में विशेष प्रकाश तरंगों का उपयोग करके त्वचा की देखभाल की जाती है। यह मुंहासों, लालिमा और त्वचा की असमान बनावट जैसी चिंताओं में सहायक हो सकती है।",
    "descriptionHi": "एलईडी लाइट थेरेपी एक गैर-आक्रामक त्वचा उपचार है, जिसमें अलग-अलग तरंगदैर्घ्य वाली रोशनी का उपयोग त्वचा की विशिष्ट समस्याओं के लिए किया जाता है। चुनी गई रोशनी त्वचा की स्थिति के अनुसार मुंहासों से जुड़े बैक्टीरिया, सूजन और लालिमा को कम करने में सहायता कर सकती है तथा कोलेजन निर्माण और त्वचा की प्राकृतिक मरम्मत प्रक्रिया को प्रोत्साहित कर सकती है। यह सामान्यतः आरामदायक प्रक्रिया है और कई त्वचा-प्रकारों के लिए उपयुक्त हो सकती है। सही प्रकाश और सत्रों का चयन विशेषज्ञ द्वारा त्वचा का आकलन करने के बाद किया जाता है।",
    "benefitsHi": [
      "कम करने में मदद मुंहासे-कारक बैक्टीरिया",
      "उत्तेजित करता है कोलेजन उत्पादन",
      "सुधारता है त्वचा लचीलापन",
      "तेज़ करता है त्वचा उपचार",
      "सूजन कम करने में मदद",
      "कम करता है लालिमा",
      "निखारता है त्वचा रंगत",
      "त्वचा की बनावट में सुधार",
      "सहायता करता है प्राकृतिक कोशिका Regeneration",
      "मुलायम बनाता है महीन रेखाएं",
      "बढ़ावा देता है समान त्वचा रंगत",
      "बढ़ाता है त्वचा चमक",
      "गैर-आक्रामक & दर्दरहित",
      "नहीं रिकवरी का समय",
      "उपयुक्त के लिए अधिकांश त्वचा प्रकार"
    ],
    "whoCanBenefitHi": [
      "मुंहासे-प्रवृत्त त्वचा",
      "तैलीय त्वचा",
      "सूजन वाली त्वचा",
      "महीन रेखाएं & झुर्रियां",
      "असमान त्वचा रंगत",
      "हल्का पिग्मेंटेशन",
      "संवेदनशील त्वचा",
      "बेजान रंगत",
      "लालिमा & जलन",
      "Sun- क्षतिग्रस्त त्वचा"
    ],
    "whyChooseUsHi": [
      "अनुभवी त्वचा विशेषज्ञ",
      "व्यक्तिगत उपचार योजनाएं",
      "उन्नत एलईडी तकनीक",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र त्वचा देखभाल दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "त्वचा परामर्श",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38cedacd842a5032309"
      },
      {
        "name": "त्वचा की तैयारी",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38cedacd842a503230a"
      },
      {
        "name": "LED Light Therapy",
        "description": "चुनी गई लाइट थेरेपी (एलईडी लाइट थेरेपी) प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38cedacd842a503230b"
      },
      {
        "name": "उपचार के बाद की देखभाल",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38cedacd842a503230c"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.406Z",
    "updatedAt": "2026-11-03T09:04:12.893Z"
  },
  {
    "_id": "6a80a32921baf12be0319746",
    "treatmentId": "jet-peel",
    "title": "Jet Peel",
    "shortDescription": "Jet Peel is an advanced, needle-free skin rejuvenation treatment that deeply cleanses, gently exfoliates, and infuses nourishing serums into the skin using high-pressure jet technology. It delivers smoother, healthier, and naturally radiant skin without discomfort or downtime.",
    "description": "Jet Peel is a non-invasive facial treatment that combines high-pressure air, oxygen, and specialized serums to cleanse, exfoliate, hydrate, and rejuvenate the skin in a single session. The technology gently removes impurities while delivering active ingredients deep into the skin to improve hydration, texture, elasticity, and overall skin health. It is suitable for treating dull skin, enlarged pores, dehydration, pigmentation, and early signs of aging. The procedure is painless, requires no needles or recovery time, and provides an instantly refreshed and glowing complexion. Regular sessions help maintain long-lasting skin vitality and natural radiance.",
    "benefits": [
      "Deep Skin Cleansing",
      "Gentle Exfoliation",
      "Intense Skin Hydration",
      "Improves Skin Texture",
      "Enhances Natural Glow",
      "Stimulates Skin Renewal",
      "Refines Enlarged Pores",
      "Reduces Fine Lines",
      "Improves Skin Elasticity",
      "Brightens Uneven Skin Tone",
      "Removes Surface Impurities",
      "Supports Better Serum Absorption",
      "Needle-Free & Non-Invasive",
      "Comfortable & Painless Procedure",
      "Zero Downtime"
    ],
    "process": [
      {
        "name": "Skin Assessment",
        "description": "Our specialist carefully evaluates your skin type, hydration level, and specific concerns to customize the most suitable Jet Peel treatment.",
        "_id": "6ae9a38cedacd842a5032327"
      },
      {
        "name": "Deep Cleansing",
        "description": "The skin is thoroughly cleansed to remove excess oil, makeup, and impurities, preparing the surface for effective exfoliation and nutrient infusion.",
        "_id": "6ae9a38cedacd842a5032328"
      },
      {
        "name": "Jet Peel Therapy",
        "description": "High-pressure jet technology gently exfoliates the skin while delivering oxygen and nutrient-rich serums to improve hydration, texture, and overall skin vitality.",
        "_id": "6ae9a38cedacd842a5032329"
      },
      {
        "name": "Skin Nourishment & Aftercare",
        "description": "The treatment concludes with soothing skincare and personalized aftercare recommendations to protect the skin and maintain long-lasting hydration and radiance.",
        "_id": "6ae9a38cedacd842a503232a"
      }
    ],
    "duration": "45 min",
    "image": "https://www.clinikally.com/cdn/shop/articles/Garima_Blog_Banner_90_c69ef114-8f6d-4696-b3da-06fbc58c7da6_1200x1200_crop_center.jpg?v=1765307262",
    "gallery": [],
    "videoUrl": "",
    "category": "SKIN & ADVANCED FACIAL TREATMENTS",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Dull & Dehydrated Skin",
      "Uneven Skin Tone",
      "Enlarged Pores",
      "Fine Lines & Early Aging",
      "Mild Pigmentation",
      "Dry Skin",
      "Congested Skin",
      "Blackheads & Whiteheads",
      "Tired Looking Skin",
      "Individuals Seeking Regular Skin Maintenance"
    ],
    "whyChooseUs": [
      "Experienced Skin Specialists",
      "Personalized Treatment Plans",
      "Advanced Jet Peel Technology",
      "Safe & Hygienic Environment",
      "Holistic Skin Care Approach"
    ],
    "sequence": 3,
    "titleHi": "जेट पील",
    "shortDescriptionHi": "जेट पील एक आधुनिक त्वचा-देखभाल प्रक्रिया है, जिसमें नियंत्रित दबाव से त्वचा को साफ किया जाता है और नमी देने वाले सीरम लगाए जाते हैं। इससे त्वचा अधिक ताज़ा, मुलायम और चमकदार दिखने में मदद मिल सकती है।",
    "descriptionHi": "जेट पील एक गैर-आक्रामक फेशियल प्रक्रिया है, जिसमें विशेष उपकरण की सहायता से हवा और तरल की तेज़ लेकिन नियंत्रित धारा त्वचा की सतह पर पहुंचाई जाती है। यह सतही अशुद्धियां हटाने, हल्का एक्सफोलिएशन करने और चुने हुए सीरम लगाने में मदद करती है। उपचार का उद्देश्य त्वचा की सफाई, नमी और ताज़गी को बढ़ावा देना है। त्वचा की संवेदनशीलता, वर्तमान स्थिति और उपचार के लक्ष्य के अनुसार सीरम तथा प्रक्रिया की तीव्रता तय की जाती है।",
    "benefitsHi": [
      "गहरा त्वचा सफाई",
      "कोमल एक्सफोलिएशन",
      "तीव्र त्वचा नमी",
      "त्वचा की बनावट में सुधार",
      "बढ़ाता है प्राकृतिक निखार",
      "उत्तेजित करता है त्वचा नवीनीकरण",
      "निखारता है बड़े रोमछिद्र",
      "कम करने में मदद महीन रेखाएं",
      "सुधारता है त्वचा लचीलापन",
      "निखारता है असमान त्वचा रंगत",
      "हटाता है Surface अशुद्धियां",
      "सहायता करता है बेहतर सीरम अवशोषण",
      "बिना सुई वाला & गैर-आक्रामक",
      "आरामदायक & दर्दरहित प्रक्रिया",
      "Zero रिकवरी का समय"
    ],
    "whoCanBenefitHi": [
      "बेजान & नमी की कमी वाली त्वचा",
      "असमान त्वचा रंगत",
      "बड़े रोमछिद्र",
      "महीन रेखाएं & प्रारंभिक उम्र बढ़ने",
      "हल्का पिग्मेंटेशन",
      "रूखा त्वचा",
      "जाम त्वचा",
      "ब्लैकहेड्स & व्हाइटहेड्स",
      "थकी हुई चाहने वाले त्वचा",
      "व्यक्ति चाहने वाले नियमित त्वचा देखभाल"
    ],
    "whyChooseUsHi": [
      "अनुभवी त्वचा विशेषज्ञ",
      "व्यक्तिगत उपचार योजनाएं",
      "उन्नत जेट Peel तकनीक",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र त्वचा देखभाल दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "त्वचा का मूल्यांकन",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38cedacd842a5032323"
      },
      {
        "name": "Deep Cleansing",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38cedacd842a5032324"
      },
      {
        "name": "Jet Peel Therapy",
        "description": "चुनी गई जेट पील प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38cedacd842a5032325"
      },
      {
        "name": "त्वचा का पोषण और उपचार-पश्चात देखभाल",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38cedacd842a5032326"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.406Z",
    "updatedAt": "2026-11-03T09:04:12.905Z"
  },
  {
    "_id": "6a80a32921baf12be0319742",
    "treatmentId": "ultrasonic",
    "title": "Ultrasonic Treatment",
    "shortDescription": "Ultrasonic Treatment is a gentle, non-invasive facial therapy that uses high- frequency sound waves to deeply cleanse, exfoliate, and enhance the absorption of nourishing skincare products. It helps restore smoother, healthier, and naturally radiant skin without discomfort or downtime.",
    "description": "Ultrasonic Treatment is an advanced skincare procedure that utilizes high-frequency ultrasonic vibrations to remove dead skin cells, unclog pores, and eliminate impurities while stimulating healthy skin renewal. The treatment enhances blood circulation and improves the penetration of active skincare ingredients, allowing the skin to absorb nutrients more effectively. It helps refine skin texture, restore hydration, improve elasticity, and promote a naturally brighter complexion. Suitable for most skin types, Ultrasonic Treatment is painless, relaxing, and an excellent option for maintaining healthy, youthful-looking skin with no recovery time required.",
    "benefits": [
      "Deep Skin Cleansing",
      "Gentle Exfoliation",
      "Removes Dead Skin Cells",
      "Unclogs Pores",
      "Improves Skin Texture",
      "Enhances Product Absorption",
      "Boosts Blood Circulation",
      "Improves Skin Hydration",
      "Brightens Skin Tone",
      "Supports Natural Skin Renewal",
      "Reduces Dullness",
      "Refines Skin Texture",
      "Non-Invasive & Painless",
      "Suitable for Most Skin Types",
      "No Downtime"
    ],
    "process": [
      {
        "name": "Skin Assessment",
        "description": "Our specialist carefully evaluates your skin type, concerns, and overall skin condition to determine the most suitable ultrasonic treatment approach.",
        "_id": "6ae9a38cedacd842a5032341"
      },
      {
        "name": "Skin Preparation",
        "description": "The skin is thoroughly cleansed to remove surface impurities, preparing it for effective ultrasonic exfoliation and enhanced treatment results.",
        "_id": "6ae9a38cedacd842a5032342"
      },
      {
        "name": "Ultrasonic Therapy",
        "description": "High-frequency ultrasonic waves gently exfoliate the skin, cleanse clogged pores, improve circulation, and enhance the absorption of nourishing skincare ingredients.",
        "_id": "6ae9a38cedacd842a5032343"
      },
      {
        "name": "Skin Nourishment & Aftercare",
        "description": "The treatment concludes with hydrating skincare and personalized aftercare recommendations to help maintain smooth, healthy, and naturally radiant skin.",
        "_id": "6ae9a38cedacd842a5032344"
      }
    ],
    "duration": "45 min",
    "image": "https://catwalksalon.com.au/wp-content/uploads/2018/12/Ultrasonic-machine-1-300x300.png",
    "gallery": [],
    "videoUrl": "",
    "category": "SKIN & ADVANCED FACIAL TREATMENTS",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Dull Skin",
      "Clogged Pores",
      "Oily Skin",
      "Dry & Dehydrated Skin",
      "Uneven Skin Texture",
      "Mild Pigmentation",
      "Blackheads & Whiteheads",
      "Enlarged Pores",
      "Sensitive Skin",
      "Individuals Seeking Regular Skin Maintenance"
    ],
    "whyChooseUs": [
      "Experienced Skin Specialists",
      "Personalized Treatment Plans",
      "Advanced Ultrasonic Technology",
      "Safe & Hygienic Environment",
      "Holistic Skin Care Approach"
    ],
    "sequence": 4,
    "titleHi": "अल्ट्रासोनिक उपचार",
    "shortDescriptionHi": "अल्ट्रासोनिक ट्रीटमेंट में उच्च आवृत्ति वाली ध्वनि तरंगों का उपयोग करके त्वचा की देखभाल की जाती है। यह त्वचा की सफाई और त्वचा-देखभाल उत्पादों के उपयोग में सहायक हो सकता है।",
    "descriptionHi": "अल्ट्रासोनिक त्वचा उपचार में विशेष उपकरण द्वारा उच्च आवृत्ति वाली ध्वनि तरंगों का उपयोग किया जाता है। उपचार के उद्देश्य के अनुसार इसका उपयोग त्वचा की सफाई, चुने हुए त्वचा-देखभाल उत्पादों के उपयोग और त्वचा को ताज़ा महसूस कराने के लिए किया जा सकता है। प्रक्रिया की तकनीक और उत्पाद व्यक्ति की त्वचा के प्रकार, संवेदनशीलता तथा आवश्यकता के अनुसार चुने जाते हैं। यह उपचार व्यक्तिगत त्वचा-देखभाल योजना का हिस्सा हो सकता है और इसके परिणाम त्वचा की स्थिति तथा नियमित देखभाल पर निर्भर करते हैं।",
    "benefitsHi": [
      "गहरा त्वचा सफाई",
      "कोमल एक्सफोलिएशन",
      "हटाता है मृत त्वचा कोशिकाएं",
      "अवरोध हटाता है रोमछिद्र",
      "त्वचा की बनावट में सुधार",
      "बढ़ाता है उत्पाद अवशोषण",
      "बढ़ाता है रक्त रक्त संचार",
      "सुधारता है त्वचा नमी",
      "निखारता है त्वचा रंगत",
      "सहायता करता है त्वचा का प्राकृतिक नवीनीकरण",
      "कम करने में मदद बेजानपन",
      "निखारता है त्वचा बनावट",
      "गैर-आक्रामक & दर्दरहित",
      "उपयुक्त के लिए अधिकांश त्वचा प्रकार",
      "नहीं रिकवरी का समय"
    ],
    "whoCanBenefitHi": [
      "बेजान त्वचा",
      "बंद रोमछिद्र",
      "तैलीय त्वचा",
      "रूखा & नमी की कमी वाली त्वचा",
      "असमान त्वचा बनावट",
      "हल्का पिग्मेंटेशन",
      "ब्लैकहेड्स & व्हाइटहेड्स",
      "बड़े रोमछिद्र",
      "संवेदनशील त्वचा",
      "व्यक्ति चाहने वाले नियमित त्वचा देखभाल"
    ],
    "whyChooseUsHi": [
      "अनुभवी त्वचा विशेषज्ञ",
      "व्यक्तिगत उपचार योजनाएं",
      "उन्नत Ultrasonic तकनीक",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र त्वचा देखभाल दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "त्वचा का मूल्यांकन",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38cedacd842a503233d"
      },
      {
        "name": "त्वचा की तैयारी",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38cedacd842a503233e"
      },
      {
        "name": "Ultrasonic Therapy",
        "description": "चुनी गई अल्ट्रासोनिक उपचार प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38cedacd842a503233f"
      },
      {
        "name": "त्वचा का पोषण और उपचार-पश्चात देखभाल",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38cedacd842a5032340"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.405Z",
    "updatedAt": "2026-11-03T09:04:12.914Z"
  },
  {
    "_id": "6a80a32921baf12be031973e",
    "treatmentId": "ozone-face",
    "title": "Ozone Therapy (Face)",
    "shortDescription": "Ozone Therapy for the face is a refreshing, non-invasive skincare treatment that uses ozone-enriched steam to deeply cleanse the skin, reduce impurities, improve oxygen supply, and promote a clearer, healthier complexion. It is ideal for maintaining fresh, balanced, and naturally radiant skin.",
    "description": "Ozone Therapy (Face) is an advanced facial treatment that utilizes ozone-enriched steam to deeply cleanse the skin, eliminate impurities, and support healthy skin function. The treatment helps reduce excess oil, minimize acne-causing bacteria, improve blood circulation, and enhance oxygen delivery to skin cells. It also prepares the skin for better absorption of nourishing skincare products, promoting improved texture, hydration, and natural radiance. Suitable for most skin types, Ozone Therapy is a relaxing, non-invasive procedure that supports healthy, refreshed, and revitalized skin with minimal downtime.",
    "benefits": [
      "Deep Skin Cleansing",
      "Controls Excess Oil",
      "Reduces Acne-Causing Bacteria",
      "Purifies Skin",
      "Improves Blood Circulation",
      "Enhances Oxygen Supply",
      "Brightens Skin Tone",
      "Supports Healthy Skin Renewal",
      "Refines Skin Texture",
      "Unclogs Pores",
      "Improves Product Absorption",
      "Refreshes Tired Skin",
      "Non-Invasive Treatment",
      "Suitable for Most Skin Types",
      "Promotes Naturally Radiant Skin"
    ],
    "process": [
      {
        "name": "Skin Assessment",
        "description": "Our specialist evaluates your skin type, current concerns, and treatment goals to determine the most suitable ozone facial protocol.",
        "_id": "6ae9a38cedacd842a503235b"
      },
      {
        "name": "Skin Cleansing",
        "description": "The face is gently cleansed to remove makeup, excess oil, and surface impurities, preparing the skin for effective ozone therapy.",
        "_id": "6ae9a38cedacd842a503235c"
      },
      {
        "name": "Ozone Therapy Session",
        "description": "Ozone-enriched steam is carefully applied to purify the skin, reduce impurities, improve circulation, and promote a healthier, refreshed complexion.",
        "_id": "6ae9a38cedacd842a503235d"
      },
      {
        "name": "Hydration & Aftercare",
        "description": "The treatment concludes with soothing skincare products and personalized aftercare guidance to maintain hydration, protect the skin, and enhance long-lasting results.",
        "_id": "6ae9a38cedacd842a503235e"
      }
    ],
    "duration": "30 min",
    "image": "https://m.media-amazon.com/images/I/812pPZhD1+L._AC_UF350,350_QL80_.jpg",
    "gallery": [],
    "videoUrl": "",
    "category": "SKIN & ADVANCED FACIAL TREATMENTS",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Acne-Prone Skin",
      "Oily Skin",
      "Clogged Pores",
      "Blackheads & Whiteheads",
      "Dull Skin",
      "Uneven Skin Tone",
      "Mild Acne Marks",
      "Enlarged Pores",
      "Congested Skin",
      "Individuals Seeking Regular Facial Care"
    ],
    "whyChooseUs": [
      "Experienced Skin Specialists",
      "Personalized Treatment Plans",
      "Advanced Ozone Therapy Equipment",
      "Safe & Hygienic Environment",
      "Holistic Skin Care Approach"
    ],
    "sequence": 5,
    "titleHi": "ओज़ोन थेरेपी (चेहरा)",
    "shortDescriptionHi": "फेशियल ओज़ोन थेरेपी में त्वचा की देखभाल के लिए नियंत्रित ओज़ोन-आधारित तकनीक का उपयोग किया जाता है। इसे त्वचा की सफाई और ताज़गी बढ़ाने वाली व्यक्तिगत फेशियल योजना के हिस्से के रूप में चुना जा सकता है।",
    "descriptionHi": "फेशियल ओज़ोन थेरेपी त्वचा-देखभाल की एक विशेष प्रक्रिया है, जिसमें प्रशिक्षित पेशेवर द्वारा नियंत्रित उपकरण और उपयुक्त प्रोटोकॉल का उपयोग किया जाता है। उपचार का उद्देश्य त्वचा की सफाई और समग्र त्वचा-देखभाल को सहारा देना है। ओज़ोन का उपयोग केवल उपयुक्त उपकरण, सुरक्षित तरीके और निर्धारित सीमा में किया जाना चाहिए; इसे सीधे सांस में लेना हानिकारक हो सकता है। त्वचा की स्थिति, संवेदनशीलता और स्वास्थ्य इतिहास की जांच के बाद ही यह तय किया जाता है कि यह प्रक्रिया उपयुक्त है या नहीं।",
    "benefitsHi": [
      "गहरा त्वचा सफाई",
      "नियंत्रित करता है अधिक तेल",
      "कम करने में मदद मुंहासे-कारक बैक्टीरिया",
      "शुद्ध करता है त्वचा",
      "रक्त संचार में सुधार",
      "बढ़ाता है ऑक्सीजन Supply",
      "निखारता है त्वचा रंगत",
      "सहायता करता है स्वस्थ त्वचा नवीनीकरण",
      "निखारता है त्वचा बनावट",
      "अवरोध हटाता है रोमछिद्र",
      "सुधारता है उत्पाद अवशोषण",
      "ताज़गी देता है थकी हुई त्वचा",
      "गैर-आक्रामक उपचार",
      "उपयुक्त के लिए अधिकांश त्वचा प्रकार",
      "बढ़ावा देता है प्राकृतिक रूप से दमकती त्वचा"
    ],
    "whoCanBenefitHi": [
      "मुंहासे-प्रवृत्त त्वचा",
      "तैलीय त्वचा",
      "बंद रोमछिद्र",
      "ब्लैकहेड्स & व्हाइटहेड्स",
      "बेजान त्वचा",
      "असमान त्वचा रंगत",
      "हल्का मुंहासे निशान",
      "बड़े रोमछिद्र",
      "जाम त्वचा",
      "व्यक्ति चाहने वाले नियमित फेशियल देखभाल"
    ],
    "whyChooseUsHi": [
      "अनुभवी त्वचा विशेषज्ञ",
      "व्यक्तिगत उपचार योजनाएं",
      "उन्नत ओज़ोन चिकित्सा उपकरण",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र त्वचा देखभाल दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "त्वचा का मूल्यांकन",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38cedacd842a5032357"
      },
      {
        "name": "Skin Cleansing",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38cedacd842a5032358"
      },
      {
        "name": "ओज़ोन थेरेपी सत्र",
        "description": "चुनी गई ओज़ोन थेरेपी (चेहरा) प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38cedacd842a5032359"
      },
      {
        "name": "Hydration & Aftercare",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38cedacd842a503235a"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.405Z",
    "updatedAt": "2026-11-03T09:04:12.921Z"
  },
  {
    "_id": "6ae9971e4fbd13c8c553f0d5",
    "treatmentId": "Galvanic Treatment",
    "benefits": [
      "Device-assisted facial care",
      "Controlled current application",
      "Can be paired with compatible products",
      "Personalized settings",
      "Non-surgical approach",
      "No incision",
      "Can complement a facial routine",
      "Skin suitability screening",
      "Structured session protocol",
      "Professional supervision",
      "Aftercare instructions",
      "Treatment plan tailored to client"
    ],
    "benefitsHi": [
      "व्यक्तिगत आवश्यकता के अनुसार प्रक्रिया",
      "उपचार से पहले उपयुक्तता की जाँच",
      "प्रक्रिया की पहले से स्पष्ट जानकारी",
      "व्यक्तिगत देखभाल योजना",
      "प्रशिक्षित विशेषज्ञ की निगरानी",
      "स्वच्छता और सुरक्षा पर ध्यान",
      "प्रक्रिया की सीमाओं की जानकारी",
      "वास्तविक अपेक्षाओं पर चर्चा",
      "सत्र के दौरान आराम का ध्यान",
      "उपचार के बाद देखभाल के निर्देश",
      "आवश्यकता अनुसार फॉलो-अप",
      "व्यापक देखभाल योजना के साथ समन्वय"
    ],
    "category": "SKIN & ADVANCED FACIAL TREATMENTS",
    "createdAt": "2026-11-03T08:11:10.759Z",
    "description": "Galvanic facial treatments use a low-level direct electrical current with compatible products and equipment. The procedure and product selection depend on skin type and device instructions. It is not suitable for everyone, including some people with implanted electronic devices or other contraindications; screening is required.",
    "descriptionHi": "गैल्वैनिक फेशियल में उपयुक्त उपकरण और उत्पादों के साथ कम स्तर के डायरेक्ट इलेक्ट्रिकल करंट का उपयोग किया जाता है। प्रक्रिया का चयन त्वचा और डिवाइस के निर्देशों के अनुसार होता है। कुछ लोगों, जैसे इलेक्ट्रॉनिक इम्प्लांट वाले व्यक्तियों, के लिए यह उपयुक्त नहीं हो सकता; पहले जाँच आवश्यक है।",
    "duration": "",
    "gallery": [],
    "image": "https://melocare.com/wp-content/uploads/2023/09/Untitled-design-70.jpg",
    "isFeatured": false,
    "isMainCategory": false,
    "process": [
      {
        "name": "Consultation & Assessment",
        "description": "The practitioner discusses the concern, medical history, expectations and possible contraindications, then confirms whether the service is suitable.",
        "_id": "6ae9971e36a3fdb8139a0318"
      },
      {
        "name": "Preparation",
        "description": "The treatment area is prepared, the procedure and products are explained, consent is obtained, and hygiene and safety checks are completed.",
        "_id": "6ae9971e36a3fdb8139a0319"
      },
      {
        "name": "Treatment Session",
        "description": "The selected procedure is performed according to the agreed protocol, device instructions and the client's comfort and response.",
        "_id": "6ae9971e36a3fdb8139a031a"
      },
      {
        "name": "Aftercare & Follow-up",
        "description": "The practitioner explains home-care instructions, possible temporary reactions, warning signs and whether another session or medical review is appropriate.",
        "_id": "6ae9971e36a3fdb8139a031b"
      }
    ],
    "processHi": [
      {
        "name": "परामर्श और जाँच",
        "description": "विशेषज्ञ समस्या, मेडिकल हिस्ट्री, अपेक्षाओं और संभावित सावधानियों पर चर्चा करके तय करते हैं कि प्रक्रिया उपयुक्त है या नहीं।",
        "_id": "6ae9971e36a3fdb8139a0314"
      },
      {
        "name": "तैयारी",
        "description": "उपचार क्षेत्र तैयार किया जाता है, प्रक्रिया और उत्पाद समझाए जाते हैं, सहमति ली जाती है तथा स्वच्छता और सुरक्षा की जाँच की जाती है।",
        "_id": "6ae9971e36a3fdb8139a0315"
      },
      {
        "name": "उपचार सत्र",
        "description": "चुनी हुई प्रक्रिया तय प्रोटोकॉल, उपकरण के निर्देशों और व्यक्ति के आराम को ध्यान में रखकर की जाती है।",
        "_id": "6ae9971e36a3fdb8139a0316"
      },
      {
        "name": "आफ्टरकेयर और फॉलो-अप",
        "description": "विशेषज्ञ घर पर देखभाल, संभावित अस्थायी प्रतिक्रियाएँ, चेतावनी संकेत और अगले सत्र या चिकित्सकीय जाँच की आवश्यकता समझाते हैं।",
        "_id": "6ae9971e36a3fdb8139a0317"
      }
    ],
    "sequence": 6,
    "shortDescription": "A device-assisted facial treatment using controlled galvanic current as part of a cosmetic skincare routine.",
    "shortDescriptionHi": "नियंत्रित गैल्वैनिक करंट का उपयोग करने वाला डिवाइस-आधारित कॉस्मेटिक फेशियल।",
    "title": "Galvanic Treatment",
    "titleHi": "गैल्वैनिक ट्रीटमेंट",
    "updatedAt": "2026-11-03T08:11:10.759Z",
    "whoCanBenefit": [
      "People seeking device-based facial care",
      "Adults cleared after screening",
      "Those seeking a structured facial session",
      "People with suitable skin condition",
      "Those without electrical-device contraindications",
      "People wanting cosmetic skincare",
      "Clients able to follow instructions",
      "People with realistic expectations"
    ],
    "whoCanBenefitHi": [
      "इस प्रक्रिया के लिए उपयुक्त पाए गए व्यक्ति",
      "व्यक्तिगत देखभाल चाहने वाले वयस्क",
      "वास्तविक अपेक्षाएँ रखने वाले लोग",
      "जिनकी मेडिकल हिस्ट्री की जाँच हो चुकी हो",
      "जिनमें संबंधित निषेध या जोखिम न हों",
      "व्यक्तिगत उपचार योजना चाहने वाले लोग",
      "तैयारी और आफ्टरकेयर के निर्देश मान सकने वाले लोग",
      "योग्य विशेषज्ञ की सलाह प्राप्त व्यक्ति"
    ],
    "whyChooseUs": [
      "Personalized consultation and suitability assessment",
      "Treatment plan explained before the session",
      "Qualified and trained professionals",
      "Attention to hygiene, safety and client comfort",
      "Clear aftercare guidance and follow-up when needed"
    ],
    "whyChooseUsHi": [
      "व्यक्तिगत परामर्श और उपयुक्तता की जाँच",
      "सत्र से पहले प्रक्रिया की स्पष्ट जानकारी",
      "योग्य और प्रशिक्षित विशेषज्ञ",
      "स्वच्छता, सुरक्षा और आराम पर ध्यान",
      "उचित आफ्टरकेयर और आवश्यकता अनुसार फॉलो-अप"
    ]
  },
  {
    "_id": "6ae998224fbd13c8c553f0e2",
    "treatmentId": "galvanic-treatment",
    "benefits": [
      "Deep Skin Cleansing",
      "Improves Product Absorption",
      "Removes Excess Oil",
      "Unclogs Pores",
      "Refines Skin Texture",
      "Enhances Skin Hydration",
      "Improves Blood Circulation",
      "Supports Healthy Skin Renewal",
      "Brightens Dull Complexion",
      "Softens Fine Lines",
      "Promotes Firmer Looking Skin",
      "Restores Natural Glow",
      "Non-Invasive & Comfortable",
      "Suitable for Most Skin Types",
      "Minimal Downtime"
    ],
    "benefitsHi": [
      "गहरा त्वचा सफाई",
      "सुधारता है उत्पाद अवशोषण",
      "हटाता है अधिक तेल",
      "अवरोध हटाता है रोमछिद्र",
      "निखारता है त्वचा बनावट",
      "बढ़ाता है त्वचा नमी",
      "रक्त संचार में सुधार",
      "सहायता करता है स्वस्थ त्वचा नवीनीकरण",
      "निखारता है बेजान रंगत",
      "मुलायम बनाता है महीन रेखाएं",
      "बढ़ावा देता है अधिक दृढ़ चाहने वाले त्वचा",
      "बहाल करता है प्राकृतिक निखार",
      "गैर-आक्रामक & आरामदायक",
      "उपयुक्त के लिए अधिकांश त्वचा प्रकार",
      "न्यूनतम रिकवरी का समय"
    ],
    "category": "SKIN & ADVANCED FACIAL TREATMENTS",
    "createdAt": "2026-11-03T08:15:30.128Z",
    "description": "Galvanic Treatment is an advanced skincare procedure that uses low-level electrical currents to deeply cleanse the skin and enhance the penetration of active skincare ingredients. The treatment helps remove excess oil, impurities, and dead skin cells while improving circulation and supporting healthy skin function. It also promotes better hydration, refines skin texture, and leaves the skin looking smoother, fresher, and more radiant. Suitable for most skin types, Galvanic Treatment is a comfortable, non-invasive procedure that supports long-term skin health with little to no downtime.",
    "descriptionHi": "गैल्वेनिक ट्रीटमेंट एक सौंदर्य-देखभाल प्रक्रिया है, जिसमें नियंत्रित कम तीव्रता वाले विद्युत प्रवाह की सहायता से चुने हुए त्वचा-देखभाल उत्पादों का उपयोग किया जाता है। प्रक्रिया का उद्देश्य त्वचा की सफाई, उत्पादों के उपयोग और त्वचा को मुलायम तथा ताज़ा महसूस कराने में सहायता करना है। उपकरण की सेटिंग और उत्पाद त्वचा के प्रकार तथा संवेदनशीलता के अनुसार चुने जाते हैं। पेसमेकर या कुछ चिकित्सकीय स्थितियों वाले व्यक्तियों के लिए यह उपयुक्त नहीं हो सकता, इसलिए पहले विशेषज्ञ से मूल्यांकन आवश्यक है।",
    "duration": "",
    "gallery": [],
    "image": "https://melocare.com/wp-content/uploads/2023/09/Untitled-design-70.jpg",
    "isFeatured": false,
    "isMainCategory": false,
    "process": [
      {
        "name": "Skin Consultation",
        "description": "Our specialist evaluates your skin condition, concerns, and treatment goals to determine the most suitable galvanic facial approach.",
        "_id": "6ae9a38cedacd842a5032375"
      },
      {
        "name": "Deep Skin Preparation",
        "description": "The skin is thoroughly cleansed to remove surface impurities and prepare it for effective galvanic treatment and optimal ingredient absorption.",
        "_id": "6ae9a38cedacd842a5032376"
      },
      {
        "name": "Galvanic Therapy",
        "description": "Gentle galvanic currents are applied to deeply cleanse the skin and enhance the penetration of nourishing skincare ingredients for healthier, revitalized skin.",
        "_id": "6ae9a38cedacd842a5032377"
      },
      {
        "name": "Skin Nourishment & Aftercare",
        "description": "The treatment concludes with hydrating skincare products and personalized aftercare guidance to maintain smooth, refreshed, and naturally glowing skin.",
        "_id": "6ae9a38cedacd842a5032378"
      }
    ],
    "processHi": [
      {
        "name": "त्वचा परामर्श",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38cedacd842a5032371"
      },
      {
        "name": "Deep Skin Preparation",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38cedacd842a5032372"
      },
      {
        "name": "Galvanic Therapy",
        "description": "चुनी गई गैल्वेनिक उपचार प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38cedacd842a5032373"
      },
      {
        "name": "त्वचा का पोषण और उपचार-पश्चात देखभाल",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38cedacd842a5032374"
      }
    ],
    "sequence": 6,
    "shortDescription": "Galvanic Treatment is a non-invasive facial therapy that uses gentle electrical currents to deeply cleanse the skin, improve the absorption of nourishing ingredients, and restore a healthier, more radiant complexion. It is a safe and effective solution for improving overall skin health.",
    "shortDescriptionHi": "गैल्वेनिक ट्रीटमेंट में हल्के विद्युत प्रवाह और उपयुक्त त्वचा-देखभाल उत्पादों का उपयोग किया जाता है। यह त्वचा की सफाई, पोषण और ताज़गी को बढ़ावा देने वाली फेशियल प्रक्रिया है।",
    "title": "Galvanic Treatment",
    "titleHi": "गैल्वेनिक उपचार",
    "updatedAt": "2026-11-03T09:04:12.929Z",
    "whoCanBenefit": [
      "Dull Skin",
      "Oily Skin",
      "Dry & Dehydrated Skin",
      "Clogged Pores",
      "Uneven Skin Texture",
      "Fine Lines",
      "Enlarged Pores",
      "Mild Pigmentation",
      "Tired Looking Skin",
      "Individuals Seeking Deep Skin Nourishment"
    ],
    "whoCanBenefitHi": [
      "बेजान त्वचा",
      "तैलीय त्वचा",
      "रूखा & नमी की कमी वाली त्वचा",
      "बंद रोमछिद्र",
      "असमान त्वचा बनावट",
      "महीन रेखाएं",
      "बड़े रोमछिद्र",
      "हल्का पिग्मेंटेशन",
      "थकी हुई चाहने वाले त्वचा",
      "व्यक्ति चाहने वाले गहरा त्वचा पोषण"
    ],
    "whyChooseUs": [
      "Experienced Skin Specialists",
      "Personalized Treatment Plans",
      "Advanced Galvanic Technology",
      "Safe & Hygienic Environment",
      "Holistic Skin Care Approach"
    ],
    "whyChooseUsHi": [
      "अनुभवी त्वचा विशेषज्ञ",
      "व्यक्तिगत उपचार योजनाएं",
      "उन्नत गैल्वेनिक तकनीक",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र त्वचा देखभाल दृष्टिकोण"
    ]
  },
  {
    "_id": "6a80a32921baf12be031974e",
    "treatmentId": "cat-hair",
    "title": "Hair & Scalp Treatments",
    "shortDescription": "Our Hair & Scalp Treatments are designed to improve scalp health, strengthen hair roots, and support healthy hair growth through personalized care. Using advanced techniques and therapeutic solutions, we help address common hair and scalp concerns while promoting stronger, healthier, and more vibrant hair.",
    "description": "Healthy hair begins with a healthy scalp. Our Hair & Scalp Treatments combine advanced clinical care with personalized treatment plans to improve scalp health, strengthen hair follicles, and support natural hair growth. These treatments help manage hair fall, dandruff, excess oil, dryness, scalp irritation, thinning hair, and weakened hair roots. Every treatment is customized according to your hair type, scalp condition, and individual concerns to achieve long-lasting improvements in hair strength, density, and overall scalp wellness. Our goal is to restore healthier, fuller-looking hair while maintaining optimal scalp health.",
    "benefits": [
      "Strengthens Hair Roots",
      "Promotes Healthy Hair Growth",
      "Improves Scalp Health",
      "Reduces Hair Fall",
      "Controls Dandruff",
      "Balances Excess Oil Production",
      "Hydrates Dry Scalp",
      "Nourishes Hair Follicles",
      "Improves Hair Density",
      "Enhances Hair Texture",
      "Supports Stronger Hair Growth",
      "Reduces Scalp Irritation",
      "Improves Blood Circulation",
      "Restores Natural Shine",
      "Personalized Hair Care Solutions"
    ],
    "process": [
      {
        "name": "Hair & Scalp Assessment",
        "description": "Our specialist carefully examines your scalp condition, hair quality, and lifestyle factors to identify the underlying cause and develop a personalized treatment plan.",
        "image": ""
      },
      {
        "name": "Scalp Cleansing & Preparation",
        "description": "The scalp is gently cleansed to remove excess oil, product buildup, and impurities, creating an ideal foundation for effective treatment.",
        "image": ""
      },
      {
        "name": "Personalized Hair Therapy",
        "description": "Customized therapies and nourishing formulations are applied to strengthen hair follicles, improve scalp health, and support healthy, natural hair growth.",
        "image": ""
      },
      {
        "name": "Hair Care Guidance",
        "description": "Personalized home care recommendations, nutritional guidance, and follow-up advice are provided to help maintain long-term scalp health and stronger, healthier hair.",
        "image": ""
      }
    ],
    "duration": "Variable",
    "image": "https://www.shutterstock.com/image-photo/woman-ayurveda-head-massage-260nw-2698281157.jpg",
    "gallery": [],
    "videoUrl": "",
    "category": "HAIR & SCALP TREATMENTS",
    "isMainCategory": true,
    "isFeatured": false,
    "whoCanBenefit": [
      "Strengthens Hair Roots",
      "Promotes Healthy Hair Growth",
      "Improves Scalp Health",
      "Reduces Hair Fall",
      "Controls Dandruff",
      "Balances Excess Oil Production",
      "Hydrates Dry Scalp",
      "Nourishes Hair Follicles",
      "Improves Hair Density",
      "Enhances Hair Texture",
      "Supports Stronger Hair Growth",
      "Reduces Scalp Irritation",
      "Improves Blood Circulation",
      "Restores Natural Shine",
      "Personalized Hair Care Solutions"
    ],
    "whyChooseUs": [
      "Experienced Hair Care Specialists",
      "Personalized Treatment Plans",
      "Advanced Hair & Scalp Technology",
      "Safe & Hygienic Environment",
      "Holistic Hair Care Approach"
    ],
    "sequence": 7,
    "titleHi": "हेयर एवं स्कैल्प ट्रीटमेंट",
    "shortDescriptionHi": "हेयर एवं स्कैल्प ट्रीटमेंट एक समग्र उपचार है, जिसमें बालों और स्कैल्प की समस्याओं का मूल कारण जानकर आयुर्वेदिक और आधुनिक तकनीकों की सहायता से उपचार किया जाता है। यह उपचार बालों की जड़ों को पोषण देता है, हेयर फॉल को नियंत्रित करने में मदद करता है और बालों की प्राकृतिक मजबूती, घनत्व एवं चमक को बढ़ावा देता है।",
    "descriptionHi": "हेयर एवं स्कैल्प ट्रीटमेंट उन लोगों के लिए विशेष रूप से तैयार किया गया है जो हेयर फॉल, डैंड्रफ, रूखी या तैलीय स्कैल्प, कमजोर बाल, बालों का पतला होना या स्कैल्प से जुड़ी अन्य समस्याओं से परेशान हैं। उपचार की शुरुआत स्कैल्प और बालों के विस्तृत विश्लेषण से की जाती है, जिसके आधार पर प्रत्येक व्यक्ति के लिए व्यक्तिगत उपचार योजना बनाई जाती है। इसमें आयुर्वेदिक हर्बल ऑयल, औषधीय हेयर पैक, स्कैल्प थेरेपी, डीप क्लेंजिंग और आवश्यकतानुसार आधुनिक हेयर ट्रीटमेंट तकनीकों का उपयोग किया जाता है। यह उपचार स्कैल्प में रक्त संचार को बेहतर बनाकर बालों की जड़ों को आवश्यक पोषण प्रदान करता है, जिससे बाल मजबूत, घने, स्वस्थ और प्राकृतिक रूप से चमकदार बनने में सहायता मिलती है। नियमित उपचार से स्कैल्प का स्वास्थ्य बेहतर होता है और बालों की गुणवत्ता में स्पष्ट सुधार दिखाई देता है।",
    "benefitsHi": [
      "हेयर फॉल को नियंत्रित करने में सहायक",
      "बालों की जड़ों को मजबूत बनाता है",
      "स्कैल्प को गहराई से साफ करता है",
      "डैंड्रफ कम करने में मदद",
      "स्कैल्प का अतिरिक्त तेल संतुलित करता है",
      "बालों को आवश्यक पोषण प्रदान करता है",
      "बालों की प्राकृतिक वृद्धि को बढ़ावा देता है",
      "बालों को घना और मजबूत बनाता है",
      "बालों की चमक बढ़ाता है",
      "रूखी स्कैल्प में नमी बनाए रखता है",
      "स्कैल्प का ब्लड सर्कुलेशन बेहतर करता है",
      "बालों के टूटने को कम करने में सहायक",
      "स्वस्थ स्कैल्प बनाए रखता है",
      "सुरक्षित और दर्दरहित उपचार"
    ],
    "whoCanBenefitHi": [
      "अत्यधिक हेयर फॉल वाले",
      "डैंड्रफ की समस्या वाले",
      "पतले बाल वाले",
      "कमजोर बालों वाले",
      "रूखी स्कैल्प वाले",
      "तैलीय स्कैल्प वाले",
      "दोमुंहे बालों वाले",
      "बेजान बालों वाले",
      "स्कैल्प में खुजली या जलन वाले",
      "स्वस्थ और मजबूत बाल चाहने वाले"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "हेयर एवं स्कैल्प का विस्तृत विश्लेषण",
      "व्यक्तिगत उपचार योजना",
      "शुद्ध आयुर्वेदिक औषधियों एवं हर्बल उत्पादों का उपयोग",
      "आधुनिक हेयर केयर तकनीक",
      "सुरक्षित एवं स्वच्छ वातावरण",
      "प्राकृतिक और लंबे समय तक प्रभावी परिणाम"
    ],
    "processHi": [
      {
        "name": "हेयर एवं स्कैल्प जाँच",
        "description": "हमारे विशेषज्ञ आपके बालों और स्कैल्प की स्थिति का विस्तृत परीक्षण करते हैं तथा समस्या के मूल कारण को समझकर आपके लिए उपयुक्त उपचार योजना तैयार करते हैं।",
        "image": ""
      },
      {
        "name": "स्कैल्प की सफाई एवं तैयारी",
        "description": "स्कैल्प को गहराई से साफ किया जाता है ताकि अतिरिक्त तेल, गंदगी और मृत त्वचा हट जाए। इसके बाद उपचार के लिए स्कैल्प को पूरी तरह तैयार किया जाता है।",
        "image": ""
      },
      {
        "name": "हेयर एवं स्कैल्प थेरेपी",
        "description": "आपकी आवश्यकता के अनुसार आयुर्वेदिक हर्बल ऑयल, औषधीय हेयर पैक, स्कैल्प मसाज और आधुनिक हेयर थेरेपी का उपयोग किया जाता है। यह प्रक्रिया बालों की जड़ों को पोषण देती है, रक्त संचार को बेहतर बनाती है और बालों के प्राकृतिक विकास को बढ़ावा देती है।",
        "image": ""
      },
      {
        "name": "उपचार के बाद देखभाल एवं मार्गदर्शन",
        "description": "उपचार के बाद हमारे विशेषज्ञ आपकी स्कैल्प और बालों के अनुसार उचित हेयर केयर, आहार और जीवनशैली संबंधी आवश्यक सलाह देते हैं, ताकि उपचार का लाभ लंबे समय तक बना रहे और आपके बाल स्वस्थ, मजबूत एवं घने बने रहें।",
        "image": ""
      }
    ],
    "createdAt": "2026-08-15T17:34:33.406Z",
    "updatedAt": "2026-11-03T10:46:51.228Z"
  },
  {
    "_id": "6a80a32921baf12be0319762",
    "treatmentId": "air-hair",
    "title": "Advanced Hair Regrowth (AIR)",
    "shortDescription": "Advanced Hair Regrowth (AIR) is a comprehensive hair restoration treatment designed to strengthen hair follicles, improve scalp health, and support natural hair growth. Using advanced therapeutic techniques and personalized care, it helps reduce hair thinning and promotes healthier, fuller-looking hair.",
    "description": "Advanced Hair Regrowth (AIR) is a customized hair restoration program developed to address the underlying causes of hair thinning and excessive hair fall. The treatment focuses on improving scalp health, nourishing weakened hair follicles, and creating an ideal environment for healthy hair growth. By combining advanced technologies with targeted therapeutic solutions, AIR helps strengthen existing hair, improve hair density, and support long-term scalp wellness. Every treatment plan is tailored according to individual hair concerns, scalp condition, and hair growth goals, ensuring safe, comfortable, and effective care for both men and women.",
    "benefits": [
      "Promotes Healthy Hair Growth",
      "Strengthens Hair Follicles",
      "Reduces Hair Fall",
      "Improves Hair Density",
      "Enhances Scalp Health",
      "Nourishes Hair Roots",
      "Supports Natural Hair Regrowth",
      "Improves Blood Circulation to the Scalp",
      "Revitalizes Weak Hair",
      "Increases Hair Thickness",
      "Improves Hair Strength",
      "Reduces Hair Breakage",
      "Encourages Healthier Hair Growth Cycle",
      "Non-Surgical Hair Restoration",
      "Personalized Treatment Approach"
    ],
    "process": [
      {
        "name": "Hair & Scalp Analysis",
        "description": "A comprehensive evaluation of your scalp condition, hair density, and hair growth pattern is performed to identify the underlying causes of hair loss.",
        "_id": "6ae9a38cedacd842a50323a9"
      },
      {
        "name": "Personalized Treatment Planning",
        "description": "Based on the assessment, a customized Advanced Hair Regrowth program is designed to address your specific scalp condition and hair restoration goals.",
        "_id": "6ae9a38cedacd842a50323aa"
      },
      {
        "name": "Hair Regrowth Therapy",
        "description": "Advanced therapeutic techniques and specialized formulations are applied to nourish hair follicles, improve scalp health, and support stronger, healthier hair growth.",
        "_id": "6ae9a38cedacd842a50323ab"
      },
      {
        "name": "Maintenance & Follow-Up",
        "description": "Regular progress assessments, personalized home care guidance, and ongoing support help maintain scalp health and encourage long-term hair growth results.",
        "_id": "6ae9a38cedacd842a50323ac"
      }
    ],
    "duration": "90 min",
    "image": "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "HAIR & SCALP TREATMENTS",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Hair Thinning",
      "Excessive Hair Fall",
      "Weak Hair Roots",
      "Early Hair Loss",
      "Receding Hairline",
      "Reduced Hair Density",
      "Brittle Hair",
      "Slow Hair Growth",
      "Post-Illness Hair Shedding",
      "Individuals Seeking Hair Restoration"
    ],
    "whyChooseUs": [
      "Experienced Hair Restoration Specialists",
      "Personalized Hair Regrowth Programs",
      "Advanced Hair Care Technology",
      "Safe & Hygienic Environment",
      "Holistic Hair Wellness Approach"
    ],
    "sequence": 8,
    "titleHi": "एडवांस्ड हेयर रिग्रोथ (AIR)",
    "shortDescriptionHi": "एडवांस्ड हेयर रिग्रोथ (AIR) एक व्यक्तिगत हेयर-रिस्टोरेशन कार्यक्रम है, जिसका उद्देश्य स्कैल्प के स्वास्थ्य और बालों के रोमों को सहारा देना है। उपचार का चयन बाल झड़ने के कारण और स्कैल्प की स्थिति के अनुसार किया जाता है।",
    "descriptionHi": "एडवांस्ड हेयर रिग्रोथ (AIR) कार्यक्रम में बालों और स्कैल्प का विस्तृत मूल्यांकन करके व्यक्ति के लिए उपयुक्त उपचार विकल्प चुने जाते हैं। योजना में आवश्यकतानुसार उन्नत स्कैल्प प्रक्रियाएं, पोषण देने वाले समाधान और जीवनशैली संबंधी मार्गदर्शन शामिल हो सकते हैं। इसका उद्देश्य बालों के रोमों को सहारा देना, स्कैल्प की स्थिति बेहतर करना और बालों के पतले होने की समस्या का समग्र प्रबंधन करना है। उपचार का परिणाम बाल झड़ने के कारण, उसकी अवधि, स्वास्थ्य स्थिति और चुनी गई प्रक्रिया पर निर्भर करता है; बालों की दोबारा वृद्धि की गारंटी नहीं दी जा सकती।",
    "benefitsHi": [
      "स्वस्थ बाल-वृद्धि को बढ़ावा देता है",
      "मजबूत करता है बाल रोमकूप",
      "बाल झड़ना कम करने में मदद करता है",
      "सुधारता है बाल घनत्व",
      "बढ़ाता है स्कैल्प स्वास्थ्य",
      "पोषण देता है बाल जड़ें",
      "सहायता करता है प्राकृतिक बाल दोबारा वृद्धि",
      "रक्त संचार में सुधार के लिए स्कैल्प",
      "नई ऊर्जा देता है कमजोर बाल",
      "बढ़ाता है बाल मोटाई",
      "सुधारता है बाल मजबूती",
      "कम करने में मदद बाल टूटना",
      "प्रोत्साहित करता है अधिक स्वस्थ बाल वृद्धि चक्र",
      "बिना सर्जरी वाला बाल पुनर्स्थापन",
      "व्यक्तिगत उपचार दृष्टिकोण"
    ],
    "whoCanBenefitHi": [
      "बाल पतले होना",
      "अत्यधिक बाल झड़ना",
      "कमजोर बाल जड़ें",
      "प्रारंभिक बाल हानि",
      "पीछे हटती हुई हेयरलाइन",
      "कम हुआ बाल घनत्व",
      "भंगुर बाल",
      "धीमा बाल वृद्धि",
      "Post-Illness बाल Shedding",
      "व्यक्ति चाहने वाले बाल पुनर्स्थापन"
    ],
    "whyChooseUsHi": [
      "अनुभवी बाल पुनर्स्थापन विशेषज्ञ",
      "व्यक्तिगत बाल दोबारा वृद्धि कार्यक्रम",
      "उन्नत बाल देखभाल तकनीक",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र बाल स्वास्थ्य दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "Hair & Scalp Analysis",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38cedacd842a50323a5"
      },
      {
        "name": "Personalized Treatment Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38cedacd842a50323a6"
      },
      {
        "name": "Hair Regrowth Therapy",
        "description": "चुनी गई एडवांस्ड हेयर रिग्रोथ (AIR) प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38cedacd842a50323a7"
      },
      {
        "name": "Maintenance & Follow-Up",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38cedacd842a50323a8"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.407Z",
    "updatedAt": "2026-11-03T09:04:12.948Z"
  },
  {
    "_id": "6a80a32921baf12be031975e",
    "treatmentId": "ozone-hair",
    "title": "Ozone Hair Therapy",
    "shortDescription": "Ozone Hair Therapy is an advanced scalp rejuvenation treatment that uses ozone- enriched technology to deeply cleanse the scalp, improve oxygen circulation, and strengthen hair follicles. It helps create a healthier scalp environment for stronger, healthier, and naturally vibrant hair.",
    "description": "Ozone Hair Therapy is a non-invasive scalp treatment designed to improve overall scalp health and support healthy hair growth. Ozone-enriched therapy helps cleanse the scalp, reduce excess oil and impurities, improve oxygen supply, and stimulate healthy blood circulation around the hair follicles. The treatment nourishes the scalp, promotes stronger hair roots, and helps manage common scalp concerns such as dandruff, itching, and dryness. Suitable for both men and women, Ozone Hair Therapy provides a refreshing and comfortable experience while supporting healthier, fuller-looking hair through personalized treatment plans.",
    "benefits": [
      "Deep Scalp Cleansing",
      "Improves Scalp Oxygenation",
      "Strengthens Hair Follicles",
      "Promotes Healthy Hair Growth",
      "Reduces Hair Fall",
      "Controls Excess Oil",
      "Helps Manage Dandruff",
      "Relieves Scalp Itching",
      "Improves Blood Circulation",
      "Nourishes Hair Roots",
      "Supports Healthy Scalp Environment",
      "Enhances Hair Strength",
      "Refreshes the Scalp",
      "Non-Invasive & Comfortable",
      "Suitable for Most Hair Types"
    ],
    "process": [
      {
        "name": "Hair & Scalp Assessment",
        "description": "Our specialist carefully examines your scalp condition, hair quality, and specific concerns to create a personalized ozone therapy treatment plan.",
        "_id": "6ae9a38cedacd842a50323c3"
      },
      {
        "name": "Scalp Preparation",
        "description": "The scalp is gently cleansed to remove excess oil, impurities, and product buildup, ensuring optimal effectiveness of the ozone therapy.",
        "_id": "6ae9a38cedacd842a50323c4"
      },
      {
        "name": "Ozone Hair Therapy",
        "description": "Ozone-enriched therapy is applied to the scalp to improve oxygen circulation, cleanse the scalp, nourish hair follicles, and promote a healthier environment for hair growth.",
        "_id": "6ae9a38cedacd842a50323c5"
      },
      {
        "name": "Hair Care & Maintenance",
        "description": "Personalized scalp care recommendations and follow-up guidance are provided to maintain scalp health, strengthen hair, and support long-term treatment results.",
        "_id": "6ae9a38cedacd842a50323c6"
      }
    ],
    "duration": "30 min",
    "image": "https://images.jdmagicbox.com/quickquotes/listicle/crop_1755862236606_5bodb_1124x530.jpg",
    "gallery": [],
    "videoUrl": "",
    "category": "HAIR & SCALP TREATMENTS",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Hair Fall",
      "Thinning Hair",
      "Weak Hair Roots",
      "Oily Scalp",
      "Dry Scalp",
      "Dandruff",
      "Itchy Scalp",
      "Scalp Irritation",
      "Dull Hair",
      "Individuals Seeking Healthier Hair & Scalp"
    ],
    "whyChooseUs": [
      "Experienced Hair Care Specialists",
      "Personalized Treatment Plans",
      "Advanced Ozone Therapy Technology",
      "Safe & Hygienic Environment",
      "Holistic Hair & Scalp Care"
    ],
    "sequence": 9,
    "titleHi": "ओज़ोन हेयर थेरेपी",
    "shortDescriptionHi": "ओज़ोन हेयर थेरेपी एक विशेष स्कैल्प-केयर प्रक्रिया है, जिसमें नियंत्रित ओज़ोन तकनीक का उपयोग किया जाता है। इसका उद्देश्य स्कैल्प की स्वच्छता और बालों की समग्र देखभाल को सहारा देना है।",
    "descriptionHi": "ओज़ोन हेयर थेरेपी में विशेष उपकरण के माध्यम से नियंत्रित तरीके से ओज़ोन-आधारित प्रक्रिया का उपयोग स्कैल्प की देखभाल के लिए किया जाता है। उपचार का चयन स्कैल्प की स्थिति, बालों की समस्या और व्यक्ति के स्वास्थ्य इतिहास के आधार पर किया जाता है। इसका उद्देश्य स्कैल्प को साफ-सुथरा रखने और बालों की देखभाल की योजना को सहारा देना है। ओज़ोन गैस को सांस के माध्यम से लेना हानिकारक हो सकता है, इसलिए प्रक्रिया प्रशिक्षित पेशेवर द्वारा सुरक्षित उपकरण और उचित सावधानियों के साथ ही की जानी चाहिए।",
    "benefitsHi": [
      "गहरा स्कैल्प सफाई",
      "सुधारता है स्कैल्प Oxygenation",
      "मजबूत करता है बाल रोमकूप",
      "स्वस्थ बाल-वृद्धि को बढ़ावा देता है",
      "बाल झड़ना कम करने में मदद करता है",
      "नियंत्रित करता है अधिक तेल",
      "मदद करता है प्रबंधन करना रूसी",
      "राहत देता है स्कैल्प खुजली",
      "रक्त संचार में सुधार",
      "पोषण देता है बाल जड़ें",
      "सहायता करता है स्वस्थ स्कैल्प वातावरण",
      "बढ़ाता है बाल मजबूती",
      "ताज़गी देता है स्कैल्प",
      "गैर-आक्रामक & आरामदायक",
      "उपयुक्त के लिए अधिकांश बाल प्रकार"
    ],
    "whoCanBenefitHi": [
      "बाल झड़ना",
      "पतले होना बाल",
      "कमजोर बाल जड़ें",
      "तैलीय स्कैल्प",
      "रूखा स्कैल्प",
      "रूसी",
      "खुजली वाली स्कैल्प",
      "स्कैल्प जलन",
      "बेजान बाल",
      "व्यक्ति चाहने वाले अधिक स्वस्थ बाल & स्कैल्प"
    ],
    "whyChooseUsHi": [
      "अनुभवी हेयर-केयर विशेषज्ञ",
      "व्यक्तिगत उपचार योजनाएं",
      "उन्नत ओज़ोन चिकित्सा तकनीक",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र बाल & स्कैल्प देखभाल"
    ],
    "processHi": [
      {
        "name": "बालों और स्कैल्प का मूल्यांकन",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38cedacd842a50323bf"
      },
      {
        "name": "स्कैल्प की तैयारी",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38cedacd842a50323c0"
      },
      {
        "name": "Ozone Hair Therapy",
        "description": "चुनी गई ओज़ोन हेयर थेरेपी प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38cedacd842a50323c1"
      },
      {
        "name": "Hair Care & Maintenance",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38cedacd842a50323c2"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.406Z",
    "updatedAt": "2026-11-03T09:04:12.958Z"
  },
  {
    "_id": "6a80a32921baf12be031975a",
    "treatmentId": "lllt",
    "title": "LLLT (Low-Level Laser Therapy)",
    "shortDescription": "Low-Level Laser Therapy (LLLT) is a safe, non-invasive hair restoration treatment that uses low-intensity laser light to stimulate hair follicles, improve scalp circulation, and support healthier hair growth. It is a comfortable, painless solution for individuals experiencing hair thinning and early hair loss.",
    "description": "LLLT (Low-Level Laser Therapy) is an advanced hair restoration treatment that utilizes low-intensity laser light to stimulate inactive hair follicles and improve scalp circulation. The therapy enhances cellular activity within the scalp, helping create a healthier environment for natural hair growth while strengthening existing hair. Regular sessions may help reduce hair thinning, improve hair density, and support healthier, stronger-looking hair. Suitable for both men and women, LLLT is a painless, non-surgical treatment that can be integrated into a personalized hair care program for long-term scalp and hair wellness.",
    "benefits": [
      "Stimulates Hair Follicles",
      "Supports Natural Hair Growth",
      "Improves Scalp Blood Circulation",
      "Strengthens Hair Roots",
      "Reduces Hair Thinning",
      "Promotes Healthier Hair Density",
      "Enhances Cellular Activity",
      "Improves Scalp Health",
      "Non-Invasive Treatment",
      "Completely Painless Procedure",
      "No Downtime Required",
      "Suitable for Men & Women",
      "Supports Stronger Hair Growth Cycle",
      "Safe for Regular Sessions",
      "Personalized Hair Restoration Support"
    ],
    "process": [
      {
        "name": "Hair & Scalp Evaluation",
        "description": "Our specialist performs a detailed assessment of your scalp condition, hair density, and hair loss pattern to determine whether LLLT is suitable for your needs.",
        "_id": "6ae9a38cedacd842a50323dd"
      },
      {
        "name": "Personalized Treatment Planning",
        "description": "A customized treatment plan is developed based on your scalp health, hair growth goals, and the severity of hair thinning for optimal treatment outcomes.",
        "_id": "6ae9a38cedacd842a50323de"
      },
      {
        "name": "Low-Level Laser Therapy",
        "description": "Low-intensity laser light is delivered to the scalp to stimulate hair follicles, improve circulation, and support the natural hair growth cycle in a safe and comfortable manner.",
        "_id": "6ae9a38cedacd842a50323df"
      },
      {
        "name": "Progress Monitoring & Hair Care",
        "description": "Regular follow-up assessments and personalized hair care recommendations help monitor progress and support healthier, long-term hair growth results.",
        "_id": "6ae9a38cedacd842a50323e0"
      }
    ],
    "duration": "20–30 min",
    "image": "https://vaestheticshairgrow.com.sg/wp-content/uploads/2025/04/understanding-side-effects-of-low-level-laser-for-hair-growth.jpg",
    "gallery": [],
    "videoUrl": "",
    "category": "HAIR & SCALP TREATMENTS",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Hair Thinning",
      "Early Hair Loss",
      "Weak Hair Roots",
      "Reduced Hair Density",
      "Receding Hairline",
      "Excessive Hair Fall",
      "Slow Hair Growth",
      "Men & Women with Pattern Hair Loss",
      "Individuals Seeking Non-Surgical Hair Restoration",
      "People Looking to Improve Scalp Health"
    ],
    "whyChooseUs": [
      "Experienced Hair Restoration Specialists",
      "Personalized Treatment Programs",
      "Advanced LLLT Technology",
      "Safe & Hygienic Environment",
      "Comprehensive Hair Care Approach"
    ],
    "sequence": 10,
    "titleHi": "एलएलएलटी (लो-लेवल लेज़र थेरेपी)",
    "shortDescriptionHi": "लो-लेवल लेज़र थेरेपी एक गैर-आक्रामक स्कैल्प उपचार है, जिसमें कम तीव्रता वाली प्रकाश ऊर्जा का उपयोग किया जाता है। यह बालों के रोमों की गतिविधि और स्वस्थ बाल-वृद्धि को सहारा देने के लिए चुना जा सकता है।",
    "descriptionHi": "लो-लेवल लेज़र थेरेपी (LLLT) में कम तीव्रता वाली लाल या निकट-अवरक्त प्रकाश ऊर्जा का उपयोग स्कैल्प पर किया जाता है। इसका उद्देश्य बालों के रोमों की गतिविधि को सहारा देना और कुछ प्रकार के बाल पतले होने की स्थिति में बालों की गुणवत्ता तथा घनत्व को बेहतर बनाने में मदद करना है। उपचार का चयन बाल झड़ने के प्रकार, स्कैल्प की स्थिति और चिकित्सकीय मूल्यांकन के आधार पर किया जाता है। नियमित सत्रों की आवश्यकता हो सकती है और परिणाम व्यक्ति के अनुसार अलग-अलग होते हैं; यह सभी प्रकार के बाल झड़ने के लिए उपयुक्त नहीं है।",
    "benefitsHi": [
      "उत्तेजित करता है बाल रोमकूप",
      "प्राकृतिक बाल-वृद्धि को सहारा देता है",
      "सुधारता है स्कैल्प रक्त रक्त संचार",
      "बालों की जड़ों को मजबूत करता है",
      "कम करने में मदद बाल पतले होना",
      "बढ़ावा देता है अधिक स्वस्थ बाल घनत्व",
      "बढ़ाता है कोशिकीय गतिविधि",
      "स्कैल्प का स्वास्थ्य बेहतर करता है",
      "गैर-आक्रामक उपचार",
      "पूरी तरह दर्दरहित प्रक्रिया",
      "नहीं रिकवरी का समय Required",
      "उपयुक्त के लिए पुरुष & महिला",
      "सहायता करता है अधिक मजबूत बाल वृद्धि चक्र",
      "सुरक्षित के लिए नियमित सत्र",
      "व्यक्तिगत बाल पुनर्स्थापन सहयोग"
    ],
    "whoCanBenefitHi": [
      "बाल पतले होना",
      "प्रारंभिक बाल हानि",
      "कमजोर बाल जड़ें",
      "कम हुआ बाल घनत्व",
      "पीछे हटती हुई हेयरलाइन",
      "अत्यधिक बाल झड़ना",
      "धीमा बाल वृद्धि",
      "पुरुष & महिला के साथ प्रकार बाल हानि",
      "व्यक्ति चाहने वाले बिना सर्जरी वाला बाल पुनर्स्थापन",
      "लोग चाहने वाले के लिए सुधारना स्कैल्प स्वास्थ्य"
    ],
    "whyChooseUsHi": [
      "अनुभवी बाल पुनर्स्थापन विशेषज्ञ",
      "व्यक्तिगत उपचार कार्यक्रम",
      "उन्नत एलएलएलटी तकनीक",
      "सुरक्षित और स्वच्छ वातावरण",
      "व्यापक बाल देखभाल दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "Hair & Scalp Evaluation",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38cedacd842a50323d9"
      },
      {
        "name": "Personalized Treatment Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38cedacd842a50323da"
      },
      {
        "name": "Low-Level Laser Therapy",
        "description": "चुनी गई एलएलएलटी (लो-लेवल लेज़र थेरेपी) प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38cedacd842a50323db"
      },
      {
        "name": "Progress Monitoring & Hair Care",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38cedacd842a50323dc"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.406Z",
    "updatedAt": "2026-11-03T09:04:12.968Z"
  },
  {
    "_id": "6a80a32921baf12be0319756",
    "treatmentId": "mesotherapy",
    "title": "Mesotherapy",
    "shortDescription": "Mesotherapy is an advanced hair restoration treatment that delivers a customized blend of essential nutrients, vitamins, minerals, and growth-supporting ingredients directly into the scalp. It helps nourish hair follicles, improve scalp health, and support stronger, healthier hair growth.",
    "description": "Mesotherapy is a minimally invasive hair treatment designed to improve scalp health and nourish weakened hair follicles. The procedure involves delivering a customized combination of vitamins, amino acids, minerals, and other beneficial nutrients into the scalp to support healthy hair growth and strengthen existing hair. It helps improve blood circulation, reduce excessive hair fall, enhance hair density, and promote healthier, thicker-looking hair. Suitable for both men and women, Mesotherapy is performed according to individual scalp conditions and hair concerns, making it an effective component of a personalized hair restoration program.",
    "benefits": [
      "Nourishes Hair Follicles",
      "Promotes Healthy Hair Growth",
      "Strengthens Hair Roots",
      "Reduces Hair Fall",
      "Improves Hair Density",
      "Enhances Scalp Health",
      "Stimulates Blood Circulation",
      "Supports Hair Follicle Function",
      "Improves Hair Thickness",
      "Revitalizes Weak Hair",
      "Encourages Healthy Hair Growth Cycle",
      "Personalized Nutrient Delivery",
      "Minimally Invasive Procedure",
      "Suitable for Men & Women",
      "Supports Long-Term Hair Wellness"
    ],
    "process": [
      {
        "name": "Hair & Scalp Assessment",
        "description": "Our specialist performs a detailed evaluation of your scalp health, hair condition, and hair loss pattern to determine the most suitable Mesotherapy treatment plan.",
        "_id": "6ae9a38cedacd842a50323f7"
      },
      {
        "name": "Personalized Formula Preparation",
        "description": "A customized blend of vitamins, minerals, amino acids, and other nourishing ingredients is selected according to your scalp condition and hair restoration goals.",
        "_id": "6ae9a38cedacd842a50323f8"
      },
      {
        "name": "Mesotherapy Session",
        "description": "The customized nutrient solution is carefully delivered into targeted areas of the scalp to nourish hair follicles, improve circulation, and support healthier hair growth.",
        "_id": "6ae9a38cedacd842a50323f9"
      },
      {
        "name": "Recovery & Hair Care Guidance",
        "description": "After the treatment, personalized scalp care instructions and follow-up recommendations are provided to help maintain scalp health and support long-term hair wellness.",
        "_id": "6ae9a38cedacd842a50323fa"
      }
    ],
    "duration": "45 min",
    "image": "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "HAIR & SCALP TREATMENTS",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Hair Thinning",
      "Excessive Hair Fall",
      "Weak Hair Roots",
      "Reduced Hair Density",
      "Early Hair Loss",
      "Slow Hair Growth",
      "Brittle Hair",
      "Nutrient-Deficient Hair",
      "Men & Women with Hair Thinning",
      "Individuals Seeking Hair Restoration"
    ],
    "whyChooseUs": [
      "Experienced Hair Restoration Specialists",
      "Personalized Mesotherapy Programs",
      "Advanced Treatment Techniques",
      "Safe & Hygienic Environment",
      "Comprehensive Hair Care Approach"
    ],
    "sequence": 11,
    "titleHi": "मेसोथेरेपी",
    "shortDescriptionHi": "हेयर मेसोथेरेपी में स्कैल्प की त्वचा में चुने हुए पोषक या चिकित्सकीय घोल की छोटी मात्रा पहुंचाई जाती है। इसे कुछ प्रकार के बाल पतले होने में सहायक उपचार विकल्प के रूप में विचार किया जा सकता है।",
    "descriptionHi": "हेयर मेसोथेरेपी एक प्रक्रिया है जिसमें प्रशिक्षित चिकित्सक स्कैल्प की निर्धारित सतही परत में चुने हुए घोल की छोटी मात्रा इंजेक्शन द्वारा पहुंचाते हैं। घोल की संरचना और उपचार योजना व्यक्ति की समस्या तथा चिकित्सकीय आकलन के अनुसार तय की जाती है। इसका उद्देश्य स्कैल्प और बालों के रोमों को सहारा देना है। प्रक्रिया में दर्द, सूजन, संक्रमण, एलर्जी या अन्य दुष्प्रभाव हो सकते हैं, इसलिए उपचार से पहले लाभ, सीमाओं और जोखिमों पर चर्चा तथा उचित स्वच्छता और निगरानी आवश्यक है।",
    "benefitsHi": [
      "पोषण देता है बाल रोमकूप",
      "स्वस्थ बाल-वृद्धि को बढ़ावा देता है",
      "बालों की जड़ों को मजबूत करता है",
      "बाल झड़ना कम करने में मदद करता है",
      "सुधारता है बाल घनत्व",
      "बढ़ाता है स्कैल्प स्वास्थ्य",
      "उत्तेजित करता है रक्त रक्त संचार",
      "सहायता करता है बाल रोमकूप कार्यप्रणाली",
      "सुधारता है बाल मोटाई",
      "नई ऊर्जा देता है कमजोर बाल",
      "प्रोत्साहित करता है स्वस्थ बाल वृद्धि चक्र",
      "व्यक्तिगत पोषक तत्व प्रसव",
      "न्यूनतम रूप से आक्रामक प्रक्रिया",
      "उपयुक्त के लिए पुरुष & महिला",
      "सहायता करता है दीर्घकालिक बाल स्वास्थ्य"
    ],
    "whoCanBenefitHi": [
      "बाल पतले होना",
      "अत्यधिक बाल झड़ना",
      "कमजोर बाल जड़ें",
      "कम हुआ बाल घनत्व",
      "प्रारंभिक बाल हानि",
      "धीमा बाल वृद्धि",
      "भंगुर बाल",
      "पोषक तत्व-Deficient बाल",
      "पुरुष & महिला के साथ बाल पतले होना",
      "व्यक्ति चाहने वाले बाल पुनर्स्थापन"
    ],
    "whyChooseUsHi": [
      "अनुभवी बाल पुनर्स्थापन विशेषज्ञ",
      "व्यक्तिगत मेसोथेरेपी कार्यक्रम",
      "उन्नत उपचार Techniques",
      "सुरक्षित और स्वच्छ वातावरण",
      "व्यापक बाल देखभाल दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "बालों और स्कैल्प का मूल्यांकन",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38cedacd842a50323f3"
      },
      {
        "name": "Personalized Formula Preparation",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38cedacd842a50323f4"
      },
      {
        "name": "मेसोथेरेपी सत्र",
        "description": "चुनी गई मेसोथेरेपी प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38cedacd842a50323f5"
      },
      {
        "name": "Recovery & Hair Care Guidance",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38cedacd842a50323f6"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.406Z",
    "updatedAt": "2026-11-03T09:04:12.976Z"
  },
  {
    "_id": "6a80a32921baf12be0319752",
    "treatmentId": "prp",
    "title": "PRP Therapy",
    "shortDescription": "PRP (Platelet-Rich Plasma) Therapy is an advanced hair restoration treatment that utilizes the healing properties of your own blood to nourish hair follicles, improve scalp health, and support natural hair growth. It is a safe, minimally invasive procedure designed to strengthen existing hair and reduce hair thinning.",
    "description": "PRP Therapy is an innovative hair restoration treatment that uses platelet-rich plasma prepared from a small sample of your own blood. The concentrated plasma contains natural growth factors that are carefully introduced into targeted areas of the scalp to support healthy hair follicles and improve scalp health. The treatment helps strengthen existing hair, reduce excessive hair fall, improve hair density, and encourage healthier hair growth over time. PRP Therapy is suitable for both men and women experiencing early to moderate hair thinning and is often incorporated into personalized hair restoration programs for optimal long-term results.",
    "benefits": [
      "Supports Natural Hair Growth",
      "Strengthens Hair Follicles",
      "Reduces Hair Fall",
      "Improves Hair Density",
      "Enhances Scalp Health",
      "Utilizes Your Body's Natural Growth Factors",
      "Stimulates Hair Follicle Activity",
      "Improves Hair Thickness",
      "Supports Healthier Hair Growth Cycle",
      "Improves Scalp Circulation",
      "Minimally Invasive Procedure",
      "Safe & Natural Treatment",
      "Personalized Hair Restoration",
      "Suitable for Men & Women",
      "Little to No Downtime"
    ],
    "process": [
      {
        "name": "Hair & Scalp Evaluation",
        "description": "Our specialist carefully evaluates your scalp condition, hair density, and medical history to determine whether PRP Therapy is the most suitable treatment for your hair restoration goals.",
        "_id": "6ae9a38cedacd842a5032411"
      },
      {
        "name": "PRP Preparation",
        "description": "A small sample of your blood is collected and processed using specialized equipment to separate platelet-rich plasma containing concentrated natural growth factors.",
        "_id": "6ae9a38cedacd842a5032412"
      },
      {
        "name": "PRP Therapy Session",
        "description": "The prepared platelet-rich plasma is carefully introduced into targeted areas of the scalp to support healthy hair follicles, improve scalp health, and encourage natural hair growth.",
        "_id": "6ae9a38cedacd842a5032413"
      },
      {
        "name": "Recovery & Follow-Up Care",
        "description": "After the procedure, personalized scalp care instructions and scheduled follow-up sessions are provided to monitor progress and support long-term hair restoration.",
        "_id": "6ae9a38cedacd842a5032414"
      }
    ],
    "duration": "60 min",
    "image": "https://www.orangetreehealth.com/blog/wp-content/uploads/2025/06/benefits-of-prp-hair-treatment-1.jpg.webp",
    "gallery": [],
    "videoUrl": "",
    "category": "HAIR & SCALP TREATMENTS",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Hair Thinning",
      "Excessive Hair Fall",
      "Early Hair Loss",
      "Weak Hair Roots",
      "Reduced Hair Density",
      "Receding Hairline",
      "Slow Hair Growth",
      "Men & Women with Pattern Hair Loss",
      "Individuals Seeking Natural Hair Restoration",
      "People Looking to Improve Scalp Health"
    ],
    "whyChooseUs": [
      "Experienced Hair Restoration Specialists",
      "Personalized PRP Treatment Plans",
      "Advanced PRP Technology",
      "Safe & Hygienic Environment",
      "Comprehensive Hair Care Approach"
    ],
    "sequence": 12,
    "titleHi": "पीआरपी थेरेपी",
    "shortDescriptionHi": "पीआरपी थेरेपी में व्यक्ति के अपने रक्त से प्लेटलेट-समृद्ध प्लाज़्मा तैयार करके स्कैल्प में लगाया जाता है। इसे कुछ प्रकार के बाल पतले होने के प्रबंधन में सहायक विकल्प के रूप में चुना जा सकता है।",
    "descriptionHi": "प्लेटलेट-रिच प्लाज़्मा (PRP) थेरेपी में व्यक्ति से थोड़ी मात्रा में रक्त लेकर उसे विशेष प्रक्रिया से संसाधित किया जाता है, ताकि प्लेटलेट्स से समृद्ध प्लाज़्मा अलग किया जा सके। इसके बाद चिकित्सक इसे स्कैल्प के चुने हुए क्षेत्रों में लगाते हैं। प्लेटलेट्स में मौजूद वृद्धि-संबंधी तत्व ऊतक की प्राकृतिक मरम्मत प्रक्रिया को सहारा दे सकते हैं। PRP कुछ प्रकार के बाल पतले होने में उपयोग किया जाता है, लेकिन परिणाम व्यक्ति के अनुसार बदलते हैं और इसकी प्रभावशीलता हर कारण में समान नहीं होती।",
    "benefitsHi": [
      "प्राकृतिक बाल-वृद्धि को सहारा देता है",
      "मजबूत करता है बाल रोमकूप",
      "बाल झड़ना कम करने में मदद करता है",
      "सुधारता है बाल घनत्व",
      "बढ़ाता है स्कैल्प स्वास्थ्य",
      "Utilizes Your शरीर's प्राकृतिक वृद्धि कारक",
      "उत्तेजित करता है बाल रोमकूप गतिविधि",
      "सुधारता है बाल मोटाई",
      "सहायता करता है अधिक स्वस्थ बाल वृद्धि चक्र",
      "सुधारता है स्कैल्प रक्त संचार",
      "न्यूनतम रूप से आक्रामक प्रक्रिया",
      "सुरक्षित & प्राकृतिक उपचार",
      "व्यक्तिगत बाल पुनर्स्थापन",
      "उपयुक्त के लिए पुरुष & महिला",
      "बहुत कम के लिए नहीं रिकवरी का समय"
    ],
    "whoCanBenefitHi": [
      "बाल पतले होना",
      "अत्यधिक बाल झड़ना",
      "प्रारंभिक बाल हानि",
      "कमजोर बाल जड़ें",
      "कम हुआ बाल घनत्व",
      "पीछे हटती हुई हेयरलाइन",
      "धीमा बाल वृद्धि",
      "पुरुष & महिला के साथ प्रकार बाल हानि",
      "व्यक्ति चाहने वाले प्राकृतिक बाल पुनर्स्थापन",
      "लोग चाहने वाले के लिए सुधारना स्कैल्प स्वास्थ्य"
    ],
    "whyChooseUsHi": [
      "अनुभवी बाल पुनर्स्थापन विशेषज्ञ",
      "व्यक्तिगत पीआरपी उपचार योजनाएं",
      "उन्नत पीआरपी तकनीक",
      "सुरक्षित और स्वच्छ वातावरण",
      "व्यापक बाल देखभाल दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "Hair & Scalp Evaluation",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38cedacd842a503240d"
      },
      {
        "name": "PRP Preparation",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38cedacd842a503240e"
      },
      {
        "name": "PRP Therapy Session",
        "description": "चुनी गई पीआरपी थेरेपी प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38cedacd842a503240f"
      },
      {
        "name": "Recovery & Follow-Up Care",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38cedacd842a5032410"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.406Z",
    "updatedAt": "2026-11-03T09:04:12.984Z"
  },
  {
    "_id": "6a80a32921baf12be0319766",
    "treatmentId": "cat-panchkarma",
    "title": "Panchkarma (Main Detox Therapies)",
    "shortDescription": "Panchakarma is the cornerstone of Ayurvedic detoxification, designed to eliminate accumulated toxins, restore the body's natural balance, and promote overall health. Through personalized cleansing therapies, it supports long-term wellness, improved vitality, and holistic rejuvenation.",
    "description": "Panchakarma is a comprehensive Ayurvedic detoxification and rejuvenation program that helps cleanse the body of accumulated toxins while restoring the natural balance of the doshas (Vata, Pitta, and Kapha). Every treatment plan is personalized according to an individual's body constitution, health condition, and wellness goals. Panchakarma combines traditional Ayurvedic therapies with herbal preparations, therapeutic massages, and dietary guidance to support healthy digestion, improve circulation, strengthen immunity, and promote physical as well as mental well-being. It is an effective approach for preventive healthcare, stress management, and long-term wellness through natural healing.",
    "benefits": [
      "Supports Natural Detoxification",
      "Restores Dosha Balance",
      "Regrowth Of Hair",
      "Improves Digestion",
      "Enhances Metabolism",
      "Strengthens Immunity",
      "Promotes Healthy Circulation",
      "Relieves Physical & Mental Stress",
      "Improves Energy Levels",
      "Supports Joint & Muscle Health",
      "Enhances Skin Health",
      "Encourages Better Sleep",
      "Improves Mental Clarity",
      "Supports Long-Term Wellness",
      "Personalized Ayurvedic Care",
      "Holistic Mind & Body Rejuvenation"
    ],
    "process": [
      {
        "name": "Ayurvedic Consultation",
        "description": "Our Ayurvedic physician evaluates your body constitution (Prakriti), current health condition, and wellness goals to design a personalized Panchakarma treatment plan.",
        "image": ""
      },
      {
        "name": "Preparatory Therapies",
        "description": "The body is gently prepared through Ayurvedic therapies such as internal oleation, external oil massage, and herbal steam to loosen and mobilize accumulated toxins.",
        "image": ""
      },
      {
        "name": "Detoxification Therapy",
        "description": "Personalized Panchakarma procedures are performed according to your health condition to support natural detoxification, restore dosha balance, and promote overall well-being.",
        "image": ""
      },
      {
        "name": "Rejuvenation & Lifestyle Guidance",
        "description": "Following detoxification, personalized dietary advice, herbal support, and lifestyle recommendations are provided to help maintain lasting health and prevent toxin accumulation.",
        "image": ""
      }
    ],
    "duration": "10-30 Days",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMF-kh1e0ay4nrb4LZAFPsTAyulFJhPTOsWnH2WC1kg&s=10",
    "gallery": [],
    "videoUrl": "",
    "category": "PANCHKARMA (MAIN DETOX THERAPIES)",
    "isMainCategory": true,
    "isFeatured": false,
    "whoCanBenefit": [
      "Individuals Seeking Detoxification",
      "Chronic Fatigue",
      "Hairloss",
      "Digestive Discomfort",
      "High Stress Levels",
      "Lifestyle Disorders",
      "Joint & Muscle Stiffness",
      "Poor Lifestyle Habits",
      "Low Immunity",
      "Sleep Disturbances",
      "Skin Health Concerns",
      "Individuals Seeking Preventive WellnessifestyledisordersL"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Authentic Panchakarma Therapies",
      "Personalized Wellness Programs",
      "Safe & Hygienic Treatment Environment",
      "Holistic Ayurvedic Healing"
    ],
    "sequence": 13,
    "titleHi": "पंचकर्म (मुख्य डिटॉक्स उपचार)",
    "shortDescriptionHi": "पंचकर्म आयुर्वेद की प्रमुख शोधन चिकित्सा है, जिसका उद्देश्य शरीर में जमा विषैले तत्वों (टॉक्सिन्स) को बाहर निकालकर शरीर का संतुलन बहाल करना है। यह उपचार पाचन शक्ति, रोग प्रतिरोधक क्षमता और संपूर्ण स्वास्थ्य को बेहतर बनाने में सहायक माना जाता है।",
    "descriptionHi": "पंचकर्म आयुर्वेद की एक प्राचीन एवं वैज्ञानिक उपचार पद्धति है, जिसे शरीर की गहराई से शुद्धि और संतुलन स्थापित करने के लिए विकसित किया गया है। आधुनिक जीवनशैली, गलत खान-पान, तनाव और प्रदूषण के कारण शरीर में विषैले तत्व जमा होने लगते हैं, जो अनेक स्वास्थ्य समस्याओं का कारण बन सकते हैं। पंचकर्म उपचार के माध्यम से इन अवांछित तत्वों को शरीर से बाहर निकालने का प्रयास किया जाता है। प्रत्येक मरीज की प्रकृति (वात, पित्त, कफ), आयु, स्वास्थ्य स्थिति और रोग के अनुसार उपचार की योजना तैयार की जाती है। इसमें आवश्यकता अनुसार स्नेहन (तेल चिकित्सा), स्वेदन (भाप चिकित्सा) तथा विभिन्न पंचकर्म प्रक्रियाओं का समावेश किया जाता है। यह उपचार शरीर को भीतर से शुद्ध करने, ऊर्जा बढ़ाने, पाचन तंत्र को बेहतर बनाने, रोग प्रतिरोधक क्षमता को मजबूत करने और संपूर्ण स्वास्थ्य एवं मानसिक संतुलन बनाए रखने में सहायक माना जाता है।",
    "benefitsHi": [
      "शरीर का प्राकृतिक शुद्धिकरण",
      "विषैले तत्वों को बाहर निकालने में सहायक",
      "पाचन शक्ति में सुधार",
      "रोग प्रतिरोधक क्षमता को मजबूत बनाने में मदद",
      "शरीर में ऊर्जा और स्फूर्ति बढ़ाता है",
      "वात-पित्त-कफ का संतुलन बनाए रखने में सहायक",
      "तनाव कम करने में मदद",
      "बेहतर नींद का समर्थन",
      "त्वचा के स्वास्थ्य में सुधार",
      "जोड़ों और मांसपेशियों को आराम",
      "संपूर्ण स्वास्थ्य एवं वेलनेस को बढ़ावा",
      "आयुर्वेदिक एवं प्राकृतिक उपचार"
    ],
    "whoCanBenefitHi": [
      "शारीरिक थकान से परेशान व्यक्ति",
      "बार-बार बीमार होने वाले",
      "पाचन संबंधी समस्याओं वाले",
      "तनावग्रस्त व्यक्ति",
      "जोड़ों के दर्द से परेशान व्यक्ति",
      "त्वचा संबंधी समस्याओं वाले",
      "मोटापा नियंत्रित करना चाहने वाले",
      "शरीर की प्राकृतिक शुद्धि चाहने वाले",
      "स्वस्थ जीवनशैली अपनाने वाले",
      "पुरुष एवं महिलाएँ"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "व्यक्तिगत प्रकृति विश्लेषण",
      "पारंपरिक पंचकर्म पद्धति",
      "शुद्ध आयुर्वेदिक औषधियों एवं तेलों का उपयोग",
      "सुरक्षित एवं स्वच्छ वातावरण",
      "प्रशिक्षित पंचकर्म विशेषज्ञ",
      "व्यक्तिगत उपचार योजना",
      "समग्र स्वास्थ्य पर विशेष ध्यान"
    ],
    "processHi": [
      {
        "name": "स्वास्थ्य जाँच एवं आयुर्वेदिक परामर्श",
        "description": "हमारे आयुर्वेद विशेषज्ञ आपकी प्रकृति (वात, पित्त, कफ), स्वास्थ्य स्थिति, जीवनशैली और समस्या का विस्तृत मूल्यांकन करते हैं, ताकि आपके लिए सबसे उपयुक्त पंचकर्म उपचार योजना तैयार की जा सके।",
        "image": ""
      },
      {
        "name": "पूर्व तैयारी (स्नेहन एवं स्वेदन)",
        "description": "उपचार से पहले शरीर को पंचकर्म के लिए तैयार किया जाता है। इसमें आवश्यकता अनुसार औषधीय तेलों से मालिश (स्नेहन) और भाप चिकित्सा (स्वेदन) दी जाती है, जिससे शरीर में जमा दोष और विषैले तत्व बाहर निकलने के लिए तैयार होते हैं।",
        "image": ""
      },
      {
        "name": "मुख्य पंचकर्म उपचार",
        "description": "विशेषज्ञ द्वारा आपकी स्वास्थ्य स्थिति के अनुसार उपयुक्त पंचकर्म प्रक्रिया जैसे वमन, विरेचन, बस्ती, नस्य या रक्तमोक्षण में से आवश्यक उपचार किया जाता है। यह प्रक्रिया शरीर की गहराई से शुद्धि कर प्राकृतिक संतुलन स्थापित करने में सहायक होती है।",
        "image": ""
      },
      {
        "name": "उपचार के बाद देखभाल एवं जीवनशैली मार्गदर्शन",
        "description": "उपचार पूर्ण होने के बाद आपकी रिकवरी और बेहतर परिणामों के लिए उचित आहार, दिनचर्या, योग, जीवनशैली और आवश्यक आयुर्वेदिक औषधियों संबंधी सलाह दी जाती है, जिससे पंचकर्म का लाभ लंबे समय तक बना रहे और संपूर्ण स्वास्थ्य बेहतर हो।",
        "image": ""
      }
    ],
    "createdAt": "2026-08-15T17:34:33.407Z",
    "updatedAt": "2026-11-03T10:46:51.239Z"
  },
  {
    "_id": "6a80a32921baf12be031976a",
    "treatmentId": "vaman",
    "title": "Vamana (Therapeutic Emesis)",
    "shortDescription": "Vamana is a classical Panchakarma detoxification therapy that involves a carefully supervised therapeutic cleansing process to eliminate excess Kapha dosha and accumulated toxins from the body. It helps restore internal balance, improve respiratory health, support digestion, and promote overall well-being.",
    "description": "Vamana is one of the principal Panchakarma therapies in Ayurveda, performed under the close supervision of an experienced Ayurvedic physician. The treatment is designed to eliminate excess Kapha dosha through a carefully controlled therapeutic emesis after proper preparatory procedures. It is recommended for selected individuals based on their body constitution, health condition, and clinical assessment. Vamana supports natural detoxification, improves digestion and metabolism, promotes respiratory wellness, and helps restore the body's natural balance. Every treatment plan is personalized to ensure safety, comfort, and optimal therapeutic benefits.",
    "benefits": [
      "Supports Natural Detoxification",
      "Helps Balance Kapha Dosha",
      "Promotes Respiratory Wellness",
      "Improves Digestion",
      "Enhances Metabolism",
      "Supports Healthy Skin",
      "Improves Energy Levels",
      "Helps Reduce Toxin Accumulation",
      "Promotes Mental Clarity",
      "Supports Healthy Immune Function",
      "Encourages Internal Cleansing",
      "Improves Overall Well- Being",
      "Personalized Ayurvedic Care",
      "Traditional Panchakarma Therapy",
      "Holistic Body Rejuvenation"
    ],
    "process": [
      {
        "name": "Ayurvedic Consultation",
        "description": "A detailed Ayurvedic assessment is performed to evaluate your body constitution, dosha imbalance, medical history, and suitability for Vamana therapy.",
        "_id": "6ae9a38cedacd842a5032445"
      },
      {
        "name": "Preparatory Therapies",
        "description": "The body is prepared using internal oleation, therapeutic oil massage, and herbal steam therapy to mobilize toxins before the cleansing procedure.",
        "_id": "6ae9a38cedacd842a5032446"
      },
      {
        "name": "Vamana Procedure",
        "description": "The therapeutic cleansing procedure is performed under strict medical supervision using carefully selected Ayurvedic formulations to eliminate excess Kapha dosha safely and effectively.",
        "_id": "6ae9a38cedacd842a5032447"
      },
      {
        "name": "Recovery & Rejuvenation",
        "description": "Following the procedure, a personalized recovery plan including diet, herbal support, and lifestyle guidance is provided to restore strength and maintain long- term wellness.",
        "_id": "6ae9a38cedacd842a5032448"
      }
    ],
    "duration": "1 day",
    "image": "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "PANCHKARMA (MAIN DETOX THERAPIES)",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Individuals with Excess Kapha Imbalance",
      "Recurrent Respiratory Discomfort",
      "Frequent Allergic Tendencies",
      "Digestive Sluggishness",
      "Excess Mucus Accumulation",
      "Feeling of Heaviness",
      "Individuals Seeking Ayurvedic Detoxification",
      "People Following Panchakarma Programs",
      "Individuals Seeking Preventive Wellness",
      "Suitable Candidates as Advised by an Ayurvedic Physician"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Authentic Panchakarma Procedures",
      "Personalized Treatment Protocols",
      "Safe & Hygienic Environment",
      "Holistic Ayurvedic Care"
    ],
    "sequence": 14,
    "titleHi": "वमन (चिकित्सीय वमन)",
    "shortDescriptionHi": "वमन पंचकर्म की एक पारंपरिक प्रक्रिया है, जिसमें चिकित्सकीय निगरानी में नियंत्रित तरीके से चिकित्सीय वमन कराया जाता है। यह केवल चयनित व्यक्तियों में योग्य आयुर्वेदिक चिकित्सक की सलाह पर किया जाता है।",
    "descriptionHi": "वमन आयुर्वेद की प्रमुख पंचकर्म प्रक्रियाओं में से एक है। इसमें उचित पूर्व-तैयारी के बाद चिकित्सकीय निगरानी में नियंत्रित चिकित्सीय वमन कराया जाता है, जिसे पारंपरिक रूप से अतिरिक्त कफ दोष के शोधन के लिए वर्णित किया गया है। यह प्रक्रिया केवल चयनित व्यक्तियों में, विस्तृत स्वास्थ्य जांच और जोखिम मूल्यांकन के बाद की जाती है। तैयारी, प्रक्रिया के दौरान निगरानी तथा बाद की आहार-संबंधी देखभाल अत्यंत महत्वपूर्ण हैं। इसे घर पर या बिना योग्य चिकित्सक की देखरेख के कभी नहीं करना चाहिए।",
    "benefitsHi": [
      "प्राकृतिक विषहरण प्रक्रिया को सहारा",
      "मदद करता है संतुलन कफ दोष",
      "बढ़ावा देता है श्वसन संबंधी स्वास्थ्य",
      "पाचन में सुधार",
      "चयापचय को बेहतर बनाने में मदद",
      "सहायता करता है स्वस्थ त्वचा",
      "सुधारता है ऊर्जा स्तर",
      "मदद करता है कम करना विषाक्त पदार्थ जमाव",
      "बढ़ावा देता है मानसिक स्पष्टता",
      "सहायता करता है स्वस्थ प्रतिरक्षा कार्यप्रणाली",
      "प्रोत्साहित करता है आंतरिक सफाई",
      "सुधारता है समग्र Well- होना",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "पारंपरिक पंचकर्म चिकित्सा",
      "समग्र शरीर कायाकल्प"
    ],
    "whoCanBenefitHi": [
      "व्यक्ति के साथ अधिक कफ असंतुलन",
      "Recurrent श्वसन संबंधी असुविधा",
      "बार-बार होने वाला एलर्जी संबंधी प्रवृत्तियां",
      "पाचन संबंधी Sluggishness",
      "अधिक बलगम जमाव",
      "महसूस होना का भारीपन",
      "व्यक्ति चाहने वाले आयुर्वेदिक विषहरण",
      "लोग अनुसरण करने वाले पंचकर्म कार्यक्रम",
      "व्यक्ति चाहने वाले निवारक स्वास्थ्य",
      "उपयुक्त व्यक्ति के रूप में सलाह दिए गए द्वारा एक आयुर्वेदिक चिकित्सक"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "प्रामाणिक पंचकर्म प्रक्रियाएं",
      "व्यक्तिगत उपचार प्रोटोकॉल",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र आयुर्वेदिक देखभाल"
    ],
    "processHi": [
      {
        "name": "आयुर्वेदिक परामर्श",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38cedacd842a5032441"
      },
      {
        "name": "पूर्व-तैयारी उपचार",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38cedacd842a5032442"
      },
      {
        "name": "वमन प्रक्रिया",
        "description": "चुनी गई वमन (चिकित्सीय वमन) प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38cedacd842a5032443"
      },
      {
        "name": "स्वास्थ्य-लाभ और पुनर्जीवन",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38cedacd842a5032444"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.407Z",
    "updatedAt": "2026-11-03T09:04:12.998Z"
  },
  {
    "_id": "6ae9971e4fbd13c8c553f0d8",
    "treatmentId": "microneedling-treatment-for-hair",
    "benefits": [
      "Personalized approach to controlled scalp micro-needling performed by trained professionals",
      "Initial suitability assessment",
      "Procedure explained before starting",
      "Treatment plan tailored to individual needs",
      "Professional supervision",
      "Attention to hygiene and safety",
      "Clear discussion of limitations",
      "Realistic outcome expectations",
      "Comfort monitored during the session",
      "Aftercare instructions provided",
      "Follow-up when clinically appropriate",
      "Can be considered alongside a broader care plan"
    ],
    "benefitsHi": [
      "व्यक्तिगत आवश्यकता के अनुसार प्रक्रिया",
      "उपचार से पहले उपयुक्तता की जाँच",
      "प्रक्रिया की पहले से स्पष्ट जानकारी",
      "व्यक्तिगत देखभाल योजना",
      "प्रशिक्षित विशेषज्ञ की निगरानी",
      "स्वच्छता और सुरक्षा पर ध्यान",
      "प्रक्रिया की सीमाओं की जानकारी",
      "वास्तविक अपेक्षाओं पर चर्चा",
      "सत्र के दौरान आराम का ध्यान",
      "उपचार के बाद देखभाल के निर्देश",
      "आवश्यकता अनुसार फॉलो-अप",
      "व्यापक देखभाल योजना के साथ समन्वय"
    ],
    "category": "HAIR & SCALP TREATMENTS",
    "createdAt": "2026-11-03T08:11:10.821Z",
    "description": "Scalp microneedling uses fine needles to create controlled micro-injuries. It may be considered in selected hair-loss plans, often alongside other clinician-directed care, but evidence and protocols vary. It carries risks such as infection, irritation, bleeding and scarring. It must not be performed on an infected or inflamed scalp.",
    "descriptionHi": "स्कैल्प माइक्रोनीडलिंग में विशेष उपकरण से त्वचा पर नियंत्रित सूक्ष्म छिद्र बनाए जाते हैं। कुछ मामलों में इसे अन्य चिकित्सकीय देखभाल के साथ विचार किया जा सकता है, लेकिन प्रमाण और प्रोटोकॉल अलग-अलग हैं। संक्रमण, जलन, रक्तस्राव और निशान जैसे जोखिम हो सकते हैं।",
    "duration": "",
    "gallery": [],
    "image": "",
    "isFeatured": false,
    "isMainCategory": false,
    "process": [
      {
        "name": "Consultation & Assessment",
        "description": "The practitioner discusses the concern, medical history, expectations and possible contraindications, then confirms whether the service is suitable.",
        "_id": "6ae9971e36a3fdb8139a03b7"
      },
      {
        "name": "Preparation",
        "description": "The treatment area is prepared, the procedure and products are explained, consent is obtained, and hygiene and safety checks are completed.",
        "_id": "6ae9971e36a3fdb8139a03b8"
      },
      {
        "name": "Treatment Session",
        "description": "The selected procedure is performed according to the agreed protocol, device instructions and the client's comfort and response.",
        "_id": "6ae9971e36a3fdb8139a03b9"
      },
      {
        "name": "Aftercare & Follow-up",
        "description": "The practitioner explains home-care instructions, possible temporary reactions, warning signs and whether another session or medical review is appropriate.",
        "_id": "6ae9971e36a3fdb8139a03ba"
      }
    ],
    "processHi": [
      {
        "name": "परामर्श और जाँच",
        "description": "विशेषज्ञ समस्या, मेडिकल हिस्ट्री, अपेक्षाओं और संभावित सावधानियों पर चर्चा करके तय करते हैं कि प्रक्रिया उपयुक्त है या नहीं।",
        "_id": "6ae9971e36a3fdb8139a03b3"
      },
      {
        "name": "तैयारी",
        "description": "उपचार क्षेत्र तैयार किया जाता है, प्रक्रिया और उत्पाद समझाए जाते हैं, सहमति ली जाती है तथा स्वच्छता और सुरक्षा की जाँच की जाती है।",
        "_id": "6ae9971e36a3fdb8139a03b4"
      },
      {
        "name": "उपचार सत्र",
        "description": "चुनी हुई प्रक्रिया तय प्रोटोकॉल, उपकरण के निर्देशों और व्यक्ति के आराम को ध्यान में रखकर की जाती है।",
        "_id": "6ae9971e36a3fdb8139a03b5"
      },
      {
        "name": "आफ्टरकेयर और फॉलो-अप",
        "description": "विशेषज्ञ घर पर देखभाल, संभावित अस्थायी प्रतिक्रियाएँ, चेतावनी संकेत और अगले सत्र या चिकित्सकीय जाँच की आवश्यकता समझाते हैं।",
        "_id": "6ae9971e36a3fdb8139a03b6"
      }
    ],
    "sequence": 14,
    "shortDescription": "A procedure using a specialized device to create controlled micro-injuries in the scalp under professional supervision.",
    "shortDescriptionHi": "प्रशिक्षित विशेषज्ञ द्वारा स्कैल्प पर नियंत्रित माइक्रो-नीडलिंग करने की प्रक्रिया।",
    "title": "Microneedling Treatment for Hair",
    "titleHi": "हेयर के लिए माइक्रोनीडलिंग",
    "updatedAt": "2026-11-03T08:11:10.821Z",
    "whoCanBenefit": [
      "People seeking support for controlled scalp micro-needling performed by trained professionals",
      "Adults assessed as suitable",
      "People with realistic expectations",
      "Those who have discussed relevant medical history",
      "People without procedure-specific contraindications",
      "Those seeking a personalized care plan",
      "People able to follow preparation and aftercare advice",
      "Those advised by a qualified practitioner"
    ],
    "whoCanBenefitHi": [
      "इस प्रक्रिया के लिए उपयुक्त पाए गए व्यक्ति",
      "व्यक्तिगत देखभाल चाहने वाले वयस्क",
      "वास्तविक अपेक्षाएँ रखने वाले लोग",
      "जिनकी मेडिकल हिस्ट्री की जाँच हो चुकी हो",
      "जिनमें संबंधित निषेध या जोखिम न हों",
      "व्यक्तिगत उपचार योजना चाहने वाले लोग",
      "तैयारी और आफ्टरकेयर के निर्देश मान सकने वाले लोग",
      "योग्य विशेषज्ञ की सलाह प्राप्त व्यक्ति"
    ],
    "whyChooseUs": [
      "Personalized consultation and suitability assessment",
      "Treatment plan explained before the session",
      "Qualified and trained professionals",
      "Attention to hygiene, safety and client comfort",
      "Clear aftercare guidance and follow-up when needed"
    ],
    "whyChooseUsHi": [
      "व्यक्तिगत परामर्श और उपयुक्तता की जाँच",
      "सत्र से पहले प्रक्रिया की स्पष्ट जानकारी",
      "योग्य और प्रशिक्षित विशेषज्ञ",
      "स्वच्छता, सुरक्षा और आराम पर ध्यान",
      "उचित आफ्टरकेयर और आवश्यकता अनुसार फॉलो-अप"
    ]
  },
  {
    "_id": "6a80a32921baf12be031976f",
    "treatmentId": "virechan",
    "title": "Virechana (Therapeutic Purgation)",
    "shortDescription": "Virechana is a classical Panchakarma detoxification therapy that gently eliminates excess Pitta dosha and accumulated toxins through a carefully supervised cleansing process. It supports healthy digestion, improves liver function, purifies the body, and promotes long-term wellness.",
    "description": "Virechana is one of the five principal Panchakarma therapies in Ayurveda, designed to eliminate excess Pitta dosha and accumulated toxins from the body through a controlled therapeutic purgation process. Performed under the supervision of an experienced Ayurvedic physician, the treatment begins with personalized preparatory therapies to ensure safe and effective detoxification. Virechana helps improve digestive function, supports liver health, promotes healthy metabolism, enhances skin health, and restores the body's natural balance. Every treatment is customized according to the individual's body constitution, health condition, and wellness goals, ensuring a safe and holistic healing experience.",
    "benefits": [
      "Supports Natural Detoxification",
      "Helps Balance Pitta Dosha",
      "Improves Digestive Health",
      "Supports Healthy Liver Function",
      "Enhances Metabolism",
      "Promotes Healthy Skin",
      "Improves Gut Health",
      "Reduces Toxin Accumulation",
      "Supports Healthy Bowel Function",
      "Improves Energy Levels",
      "Promotes Mental Clarity",
      "Strengthens Overall Wellness",
      "Personalized Ayurvedic Care",
      "Traditional Panchakarma Therapy",
      "Holistic Body Rejuvenation"
    ],
    "process": [
      {
        "name": "Ayurvedic Consultation",
        "description": "A comprehensive Ayurvedic evaluation is performed to assess your body constitution, dosha imbalance, digestive health, and suitability for Virechana therapy.",
        "_id": "6ae9a38dedacd842a503245f"
      },
      {
        "name": "Preparatory Therapies",
        "description": "The body is prepared through internal oleation, therapeutic massage, and herbal steam therapy to mobilize toxins and optimize the effectiveness of the cleansing process.",
        "_id": "6ae9a38dedacd842a5032460"
      },
      {
        "name": "Virechana Procedure",
        "description": "A carefully selected Ayurvedic formulation is administered under medical supervision to facilitate controlled therapeutic purgation and eliminate excess Pitta dosha safely.",
        "_id": "6ae9a38dedacd842a5032461"
      },
      {
        "name": "Recovery & Rejuvenation",
        "description": "Following the therapy, a personalized diet, herbal support, and lifestyle recommendations are provided to aid recovery, restore digestive balance, and maintain long-term wellness.",
        "_id": "6ae9a38dedacd842a5032462"
      }
    ],
    "duration": "1 day",
    "image": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "PANCHKARMA (MAIN DETOX THERAPIES)",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Individuals with Pitta Imbalance",
      "Digestive Discomfort",
      "Skin Concerns",
      "Sluggish Metabolism",
      "Chronic Acidity",
      "Constipation",
      "Individuals Seeking Ayurvedic Detoxification",
      "People Following Panchakarma Programs",
      "Individuals Seeking Preventive Wellness",
      "Suitable Candidates as Advised by an Ayurvedic Physician"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Authentic Panchakarma Procedures",
      "Personalized Treatment Protocols",
      "Safe & Hygienic Environment",
      "Holistic Ayurvedic Care"
    ],
    "sequence": 15,
    "titleHi": "विरेचन (चिकित्सीय विरेचन)",
    "shortDescriptionHi": "विरेचन पंचकर्म की पारंपरिक शोधन प्रक्रिया है, जिसमें चिकित्सक की देखरेख में उपयुक्त औषधियों द्वारा नियंत्रित विरेचन कराया जाता है। इसकी उपयुक्तता व्यक्ति की प्रकृति और स्वास्थ्य स्थिति पर निर्भर करती है।",
    "descriptionHi": "विरेचन आयुर्वेद की प्रमुख पंचकर्म प्रक्रियाओं में शामिल है। इसमें चिकित्सक द्वारा चुनी गई औषधियों के माध्यम से नियंत्रित विरेचन कराया जाता है, जिसे पारंपरिक रूप से पित्त दोष के शोधन से जोड़ा जाता है। प्रक्रिया से पहले व्यक्ति की प्रकृति, पाचन क्षमता, वर्तमान रोग, दवाओं और अन्य जोखिमों का आकलन किया जाता है। उपचार के दौरान तथा बाद में तरल पदार्थ, आहार और विश्राम संबंधी निर्देशों का पालन आवश्यक है। यह प्रक्रिया केवल योग्य आयुर्वेदिक चिकित्सक की निगरानी में ही की जानी चाहिए।",
    "benefitsHi": [
      "प्राकृतिक विषहरण प्रक्रिया को सहारा",
      "मदद करता है संतुलन पित्त दोष",
      "सुधारता है पाचन संबंधी स्वास्थ्य",
      "सहायता करता है स्वस्थ यकृत कार्यप्रणाली",
      "चयापचय को बेहतर बनाने में मदद",
      "बढ़ावा देता है स्वस्थ त्वचा",
      "सुधारता है आंत स्वास्थ्य",
      "कम करने में मदद विषाक्त पदार्थ जमाव",
      "सहायता करता है स्वस्थ आंतों कार्यप्रणाली",
      "सुधारता है ऊर्जा स्तर",
      "बढ़ावा देता है मानसिक स्पष्टता",
      "मजबूत करता है समग्र स्वास्थ्य",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "पारंपरिक पंचकर्म चिकित्सा",
      "समग्र शरीर कायाकल्प"
    ],
    "whoCanBenefitHi": [
      "व्यक्ति के साथ पित्त असंतुलन",
      "पाचन संबंधी असुविधा",
      "त्वचा समस्याएं",
      "धीमा चयापचय",
      "दीर्घकालिक एसिडिटी",
      "कब्ज",
      "व्यक्ति चाहने वाले आयुर्वेदिक विषहरण",
      "लोग अनुसरण करने वाले पंचकर्म कार्यक्रम",
      "व्यक्ति चाहने वाले निवारक स्वास्थ्य",
      "उपयुक्त व्यक्ति के रूप में सलाह दिए गए द्वारा एक आयुर्वेदिक चिकित्सक"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "प्रामाणिक पंचकर्म प्रक्रियाएं",
      "व्यक्तिगत उपचार प्रोटोकॉल",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र आयुर्वेदिक देखभाल"
    ],
    "processHi": [
      {
        "name": "आयुर्वेदिक परामर्श",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a503245b"
      },
      {
        "name": "पूर्व-तैयारी उपचार",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a503245c"
      },
      {
        "name": "विरेचन प्रक्रिया",
        "description": "चुनी गई विरेचन (चिकित्सीय विरेचन) प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a503245d"
      },
      {
        "name": "स्वास्थ्य-लाभ और पुनर्जीवन",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a503245e"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.407Z",
    "updatedAt": "2026-11-03T09:04:13.010Z"
  },
  {
    "_id": "6a80a32921baf12be0319774",
    "treatmentId": "basti",
    "title": "Basti (Medicated Enema)",
    "shortDescription": "Basti is one of the most important Panchakarma therapies in Ayurveda, involving the administration of specially prepared herbal oils or decoctions through the rectal route under expert supervision. It is primarily used to balance Vata dosha, support digestive health, improve joint mobility, and promote overall well-being.",
    "description": "Basti is regarded as one of the most effective Panchakarma therapies for balancing Vata dosha and restoring the body's natural harmony. The therapy involves the careful administration of medicated herbal oils or herbal decoctions under the supervision of an experienced Ayurvedic physician. Basti helps nourish body tissues, support digestive and colon health, improve joint flexibility, and promote healthy nervous system function. Every treatment plan is customized according to an individual's body constitution, health condition, and therapeutic needs, ensuring safe, comfortable, and holistic care. Regularly performed as part of a personalized Panchakarma program, Basti supports long-term wellness and natural rejuvenation.",
    "benefits": [
      "Supports Natural Detoxification",
      "Helps Balance Vata Dosha",
      "Nourishes Body Tissues",
      "Promotes Colon Health",
      "Improves Digestive Function",
      "Supports Healthy Joint Mobility",
      "Enhances Nervous System Function",
      "Improves Flexibility",
      "Reduces Body Stiffness",
      "Supports Healthy Elimination",
      "Promotes Better Energy Levels",
      "Encourages Overall Rejuvenation",
      "Personalized Ayurvedic Care",
      "Traditional Panchakarma Therapy",
      "Holistic Mind & Body Wellness"
    ],
    "process": [
      {
        "name": "Ayurvedic Consultation",
        "description": "A detailed Ayurvedic assessment is conducted to evaluate your body constitution, dosha imbalance, digestive health, and suitability for Basti therapy.",
        "_id": "6ae9a38dedacd842a5032479"
      },
      {
        "name": "Preparatory Therapies",
        "description": "Preparatory treatments such as herbal oil massage and therapeutic steam are performed to relax the body, improve circulation, and prepare for the Basti procedure.",
        "_id": "6ae9a38dedacd842a503247a"
      },
      {
        "name": "Basti Administration",
        "description": "Specially prepared medicated herbal oil or decoction is administered under expert supervision using traditional Ayurvedic methods to balance Vata dosha and support internal healing.",
        "_id": "6ae9a38dedacd842a503247b"
      },
      {
        "name": "Recovery & Lifestyle Guidance",
        "description": "After the therapy, personalized dietary recommendations, herbal support, and lifestyle guidance are provided to enhance recovery and maintain long-term health benefits.",
        "_id": "6ae9a38dedacd842a503247c"
      }
    ],
    "duration": "1–7 days",
    "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "PANCHKARMA (MAIN DETOX THERAPIES)",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Individuals with Vata Imbalance",
      "Joint Stiffness",
      "Chronic Constipation",
      "Digestive Discomfort",
      "Dryness in the Body",
      "Lower Back Discomfort",
      "Muscle Weakness",
      "Individuals Seeking Ayurvedic Detoxification",
      "People Following Panchakarma Programs",
      "Suitable Candidates as Advised by an Ayurvedic Physician"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Authentic Panchakarma Procedures",
      "Personalized Treatment Protocols",
      "Safe & Hygienic Environment",
      "Holistic Ayurvedic Healing"
    ],
    "sequence": 16,
    "titleHi": "बस्ती (औषधीय बस्ती)",
    "shortDescriptionHi": "बस्ती पंचकर्म की पारंपरिक प्रक्रिया है, जिसमें चिकित्सकीय रूप से चुने गए औषधीय द्रव को निर्धारित विधि से दिया जाता है। यह प्रक्रिया व्यक्ति की स्थिति के अनुसार तय की जाती है।",
    "descriptionHi": "बस्ती आयुर्वेद की प्रमुख पंचकर्म चिकित्सा है, जिसमें औषधीय तेल या काढ़े जैसे निर्धारित द्रव को चिकित्सक द्वारा चुनी गई विधि से दिया जाता है। पारंपरिक आयुर्वेद में इसे विशेष रूप से वात दोष के संतुलन से जोड़ा जाता है। द्रव, मात्रा, समय और प्रक्रिया व्यक्ति की आयु, स्वास्थ्य स्थिति तथा चिकित्सकीय आवश्यकता के अनुसार तय किए जाते हैं। पेट या आंतों की कुछ स्थितियों, गर्भावस्था और अन्य जोखिमों में विशेष सावधानी आवश्यक है। इसे केवल प्रशिक्षित चिकित्सक की देखरेख में ही कराया जाना चाहिए।",
    "benefitsHi": [
      "प्राकृतिक विषहरण प्रक्रिया को सहारा",
      "मदद करता है संतुलन वात दोष",
      "पोषण देता है शरीर ऊतक",
      "बढ़ावा देता है बड़ी आंत स्वास्थ्य",
      "सुधारता है पाचन संबंधी कार्यप्रणाली",
      "सहायता करता है स्वस्थ जोड़ गतिशीलता",
      "बढ़ाता है तंत्रिका तंत्र कार्यप्रणाली",
      "सुधारता है लचीलापन",
      "कम करने में मदद शरीर अकड़न",
      "सहायता करता है स्वस्थ निष्कासन",
      "बढ़ावा देता है बेहतर ऊर्जा स्तर",
      "प्रोत्साहित करता है समग्र कायाकल्प",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "पारंपरिक पंचकर्म चिकित्सा",
      "समग्र मन & शरीर स्वास्थ्य"
    ],
    "whoCanBenefitHi": [
      "व्यक्ति के साथ वात असंतुलन",
      "जोड़ अकड़न",
      "दीर्घकालिक कब्ज",
      "पाचन संबंधी असुविधा",
      "रूखापन में शरीर",
      "निचला पीठ असुविधा",
      "मांसपेशी Weakness",
      "व्यक्ति चाहने वाले आयुर्वेदिक विषहरण",
      "लोग अनुसरण करने वाले पंचकर्म कार्यक्रम",
      "उपयुक्त व्यक्ति के रूप में सलाह दिए गए द्वारा एक आयुर्वेदिक चिकित्सक"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "प्रामाणिक पंचकर्म प्रक्रियाएं",
      "व्यक्तिगत उपचार प्रोटोकॉल",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र आयुर्वेदिक उपचार"
    ],
    "processHi": [
      {
        "name": "आयुर्वेदिक परामर्श",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a5032475"
      },
      {
        "name": "पूर्व-तैयारी उपचार",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a5032476"
      },
      {
        "name": "Basti Administration",
        "description": "चुनी गई बस्ती (औषधीय बस्ती) प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a5032477"
      },
      {
        "name": "Recovery & Lifestyle Guidance",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a5032478"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.407Z",
    "updatedAt": "2026-11-03T09:04:13.019Z"
  },
  {
    "_id": "6a80a32921baf12be0319779",
    "treatmentId": "nasya",
    "title": "Nasya (Nasal Therapy)",
    "shortDescription": "Nasya is a classical Panchakarma therapy in which specially prepared herbal oils or medicines are gently administered through the nasal passages under expert supervision. It helps cleanse the head and neck region, balance the doshas, and support healthy respiratory, sinus, and mental well-being.",
    "description": "Nasya is one of the five principal Panchakarma therapies in Ayurveda, specifically designed to cleanse and rejuvenate the head, neck, and nasal passages. During the treatment, carefully selected herbal oils or medicated formulations are administered through the nostrils under the guidance of an experienced Ayurvedic physician. This therapy helps eliminate accumulated impurities, supports healthy sinus function, promotes clear breathing, enhances mental clarity, and contributes to overall wellness. Every Nasya treatment is customized according to the individual's body constitution, health condition, and therapeutic needs, ensuring a safe, comfortable, and holistic healing experience.",
    "benefits": [
      "Supports Nasal Cleansing",
      "Helps Balance Doshas",
      "Promotes Healthy Sinus Function",
      "Encourages Clear Breathing",
      "Supports Respiratory Wellness",
      "Enhances Mental Clarity",
      "Helps Relieve Head Heaviness",
      "Supports Healthy Sleep",
      "Promotes Head & Neck Wellness",
      "Improves Overall Well-Being",
      "Supports Natural Detoxification",
      "Encourages Relaxation",
      "Personalized Ayurvedic Care",
      "Traditional Panchakarma Therapy",
      "Holistic Mind & Body Wellness"
    ],
    "process": [
      {
        "name": "Ayurvedic Consultation",
        "description": "Our Ayurvedic physician evaluates your body constitution, symptoms, and overall health to determine whether Nasya therapy is appropriate for your individual needs.",
        "_id": "6ae9a38dedacd842a5032493"
      },
      {
        "name": "Preparatory Therapies",
        "description": "A gentle facial massage and herbal steam therapy are performed to relax the tissues, improve circulation, and prepare the nasal passages for the treatment.",
        "_id": "6ae9a38dedacd842a5032494"
      },
      {
        "name": "Nasya Therapy",
        "description": "Specially selected herbal oils or medicated formulations are carefully administered through the nasal passages under expert supervision to support cleansing and overall wellness.",
        "_id": "6ae9a38dedacd842a5032495"
      },
      {
        "name": "Recovery & Lifestyle Guidance",
        "description": "Following the therapy, personalized dietary advice, herbal recommendations, and lifestyle guidance are provided to support recovery and maintain long-term health benefits.",
        "_id": "6ae9a38dedacd842a5032496"
      }
    ],
    "duration": "20–30 min",
    "image": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "PANCHKARMA (MAIN DETOX THERAPIES)",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Individuals with Sinus Discomfort",
      "Nasal Congestion",
      "Allergic Tendencies",
      "Frequent Head Heaviness",
      "Respiratory Discomfort",
      "Mental Fatigue",
      "Stress",
      "Sleep Disturbances",
      "Individuals Seeking Ayurvedic Detoxification",
      "Suitable Candidates as Advised by an Ayurvedic Physician"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Authentic Panchakarma Procedures",
      "Personalized Treatment Protocols",
      "Safe & Hygienic Environment",
      "Holistic Ayurvedic Healing"
    ],
    "sequence": 17,
    "titleHi": "नस्य (नासिका चिकित्सा)",
    "shortDescriptionHi": "नस्य आयुर्वेद की पारंपरिक प्रक्रिया है, जिसमें उपयुक्त औषधीय तेल या द्रव नाक के मार्ग से दिया जाता है। इसे नाक और सिर से संबंधित कुछ स्थितियों में चिकित्सकीय सलाह के अनुसार चुना जाता है।",
    "descriptionHi": "नस्य पंचकर्म की एक पारंपरिक प्रक्रिया है, जिसमें व्यक्ति की स्थिति के अनुसार चुना गया औषधीय तेल, घृत या अन्य निर्धारित द्रव नासिका मार्ग से दिया जाता है। आयुर्वेद में इसे नाक, सिर और इंद्रियों से संबंधित देखभाल के लिए वर्णित किया गया है। द्रव का चयन, मात्रा और समय व्यक्ति की आयु, स्वास्थ्य स्थिति और लक्षणों के आधार पर योग्य चिकित्सक तय करते हैं। नाक में संक्रमण, रक्तस्राव या कुछ अन्य स्थितियों में यह उपयुक्त नहीं हो सकता, इसलिए पहले मूल्यांकन आवश्यक है।",
    "benefitsHi": [
      "सहायता करता है नाक संबंधी सफाई",
      "मदद करता है संतुलन दोषों",
      "बढ़ावा देता है स्वस्थ साइनस कार्यप्रणाली",
      "प्रोत्साहित करता है साफ श्वास",
      "सहायता करता है श्वसन संबंधी स्वास्थ्य",
      "बढ़ाता है मानसिक स्पष्टता",
      "मदद करता है Relieve सिर भारीपन",
      "सहायता करता है स्वस्थ नींद",
      "बढ़ावा देता है सिर & गर्दन स्वास्थ्य",
      "सुधारता है समग्र कल्याण",
      "प्राकृतिक विषहरण प्रक्रिया को सहारा",
      "प्रोत्साहित करता है विश्राम",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "पारंपरिक पंचकर्म चिकित्सा",
      "समग्र मन & शरीर स्वास्थ्य"
    ],
    "whoCanBenefitHi": [
      "व्यक्ति के साथ साइनस असुविधा",
      "नाक संबंधी जकड़न",
      "एलर्जी संबंधी प्रवृत्तियां",
      "बार-बार होने वाला सिर भारीपन",
      "श्वसन संबंधी असुविधा",
      "मानसिक थकान",
      "तनाव",
      "नींद गड़बड़ी",
      "व्यक्ति चाहने वाले आयुर्वेदिक विषहरण",
      "उपयुक्त व्यक्ति के रूप में सलाह दिए गए द्वारा एक आयुर्वेदिक चिकित्सक"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "प्रामाणिक पंचकर्म प्रक्रियाएं",
      "व्यक्तिगत उपचार प्रोटोकॉल",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र आयुर्वेदिक उपचार"
    ],
    "processHi": [
      {
        "name": "आयुर्वेदिक परामर्श",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a503248f"
      },
      {
        "name": "पूर्व-तैयारी उपचार",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a5032490"
      },
      {
        "name": "Nasya Therapy",
        "description": "चुनी गई नस्य (नासिका चिकित्सा) प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a5032491"
      },
      {
        "name": "Recovery & Lifestyle Guidance",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a5032492"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.407Z",
    "updatedAt": "2026-11-03T09:04:13.028Z"
  },
  {
    "_id": "6a80a32921baf12be031977e",
    "treatmentId": "raktamokshan",
    "title": "Raktamokshan (Blood Purification)",
    "shortDescription": "Raktamokshan is a specialized Panchakarma therapy aimed at supporting blood purification and restoring the natural balance of the body. Performed under the guidance of an experienced Ayurvedic physician, this therapy is recommended only for suitable individuals based on a detailed clinical assessment.",
    "description": "Raktamokshan is one of the classical Panchakarma therapies in Ayurveda, traditionally performed to support blood purification and help maintain doshic balance. The therapy is recommended only after a comprehensive Ayurvedic evaluation and is carried out using appropriate traditional techniques under strict professional supervision. It is often included as part of a personalized treatment plan for selected health conditions where blood purification is considered beneficial according to Ayurvedic principles. Every treatment is customized according to the individual's body constitution, medical history, and therapeutic requirements to ensure a safe, comfortable, and holistic healing experience.",
    "benefits": [
      "Supports Blood Purification",
      "Helps Balance Pitta Dosha",
      "Supports Natural Detoxification",
      "Promotes Healthy Skin",
      "Encourages Better Circulation",
      "Supports Tissue Health",
      "Enhances Overall Well-Being",
      "Promotes Internal Cleansing",
      "Supports Healthy Metabolism",
      "Encourages Natural Healing",
      "Improves Vitality",
      "Personalized Ayurvedic Care",
      "Traditional Panchakarma Therapy",
      "Holistic Mind & Body Wellness",
      "Physician-Supervised Treatment"
    ],
    "process": [
      {
        "name": "Ayurvedic Consultation",
        "description": "A comprehensive Ayurvedic assessment is conducted to evaluate your body constitution, health condition, and determine whether Raktamokshan is appropriate for your personalized treatment plan.",
        "_id": "6ae9a38dedacd842a50324ad"
      },
      {
        "name": "Treatment Preparation",
        "description": "The body is carefully prepared using appropriate Ayurvedic therapies and supportive measures to ensure the treatment is performed safely and effectively.",
        "_id": "6ae9a38dedacd842a50324ae"
      },
      {
        "name": "Raktamokshan Therapy",
        "description": "The selected blood purification procedure is performed by an experienced Ayurvedic physician using appropriate traditional methods while maintaining strict hygiene and patient safety.",
        "_id": "6ae9a38dedacd842a50324af"
      },
      {
        "name": "Recovery & Rejuvenation",
        "description": "Following the therapy, personalized dietary guidance, herbal support, and lifestyle recommendations are provided to promote recovery, maintain balance, and support long-term wellness.",
        "_id": "6ae9a38dedacd842a50324b0"
      }
    ],
    "duration": "45–60 min",
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "PANCHKARMA (MAIN DETOX THERAPIES)",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Individuals Seeking Ayurvedic Blood Purification",
      "Certain Skin Conditions",
      "Pitta Imbalance",
      "Individuals Following Panchakarma Programs",
      "People Seeking Natural Detoxification",
      "Individuals Seeking Holistic Wellness",
      "Suitable Candidates After Ayurvedic Evaluation",
      "Adults Eligible for Panchakarma",
      "Preventive Wellness Seekers",
      "Patients as Advised by an Ayurvedic Physician"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Authentic Panchakarma Procedures",
      "Personalized Treatment Protocols",
      "Safe & Hygienic Environment",
      "Holistic Ayurvedic Healing"
    ],
    "sequence": 18,
    "titleHi": "रक्तमोक्षण (रक्त शोधन)",
    "shortDescriptionHi": "रक्तमोक्षण आयुर्वेद की पारंपरिक शोधन प्रक्रिया है, जिसमें चयनित परिस्थितियों में रक्त निकालने की विधि का उपयोग किया जाता है। यह केवल प्रशिक्षित चिकित्सक द्वारा सख्त स्वच्छता और सुरक्षा मानकों के साथ किया जाना चाहिए।",
    "descriptionHi": "रक्तमोक्षण आयुर्वेद की पारंपरिक पंचकर्म-संबंधी प्रक्रियाओं में वर्णित है, जिसमें चयनित स्थितियों में नियंत्रित तरीके से रक्त निकालने की विधि अपनाई जाती है। इसकी विधि और उपयुक्तता व्यक्ति की समस्या, रक्त संबंधी स्वास्थ्य, दवाओं तथा अन्य जोखिमों के मूल्यांकन के बाद तय की जाती है। रक्तस्राव, संक्रमण, चक्कर, कमजोरी और अन्य जटिलताओं का जोखिम हो सकता है। इसलिए यह प्रक्रिया केवल योग्य एवं प्रशिक्षित चिकित्सक द्वारा, उचित स्वच्छता, सहमति और चिकित्सकीय निगरानी के साथ ही की जानी चाहिए।",
    "benefitsHi": [
      "सहायता करता है रक्त शुद्धिकरण",
      "मदद करता है संतुलन पित्त दोष",
      "प्राकृतिक विषहरण प्रक्रिया को सहारा",
      "बढ़ावा देता है स्वस्थ त्वचा",
      "प्रोत्साहित करता है बेहतर रक्त संचार",
      "सहायता करता है ऊतक स्वास्थ्य",
      "बढ़ाता है समग्र कल्याण",
      "बढ़ावा देता है आंतरिक सफाई",
      "सहायता करता है स्वस्थ चयापचय",
      "प्रोत्साहित करता है प्राकृतिक उपचार",
      "सुधारता है जीवनशक्ति",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "पारंपरिक पंचकर्म चिकित्सा",
      "समग्र मन & शरीर स्वास्थ्य",
      "चिकित्सक-निगरानी में उपचार"
    ],
    "whoCanBenefitHi": [
      "व्यक्ति चाहने वाले आयुर्वेदिक रक्त शुद्धिकरण",
      "कुछ त्वचा स्थितियां",
      "पित्त असंतुलन",
      "व्यक्ति अनुसरण करने वाले पंचकर्म कार्यक्रम",
      "लोग चाहने वाले प्राकृतिक विषहरण",
      "व्यक्ति चाहने वाले समग्र स्वास्थ्य",
      "उपयुक्त व्यक्ति बाद आयुर्वेदिक मूल्यांकन",
      "वयस्क पात्र के लिए पंचकर्म",
      "निवारक स्वास्थ्य चाहने वाले",
      "Patients के रूप में सलाह दिए गए द्वारा एक आयुर्वेदिक चिकित्सक"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "प्रामाणिक पंचकर्म प्रक्रियाएं",
      "व्यक्तिगत उपचार प्रोटोकॉल",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र आयुर्वेदिक उपचार"
    ],
    "processHi": [
      {
        "name": "आयुर्वेदिक परामर्श",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a50324a9"
      },
      {
        "name": "Treatment Preparation",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a50324aa"
      },
      {
        "name": "Raktamokshan Therapy",
        "description": "चुनी गई रक्तमोक्षण (रक्त शोधन) प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a50324ab"
      },
      {
        "name": "स्वास्थ्य-लाभ और पुनर्जीवन",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a50324ac"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.407Z",
    "updatedAt": "2026-11-03T09:04:13.035Z"
  },
  {
    "_id": "6a80a32921baf12be0319783",
    "treatmentId": "cat-supportive",
    "title": "Panchakarma & Supportive Therapies",
    "shortDescription": "Our Other Panchakarma & Supportive Therapies complement the main detoxification treatments by promoting relaxation, improving circulation, relieving stress, and enhancing the body's natural healing process. Each therapy is personalized to support overall health, recovery, and long-term wellness.",
    "description": "In addition to the five principal Panchakarma therapies, Ayurveda offers a variety of supportive treatments that help prepare the body for detoxification, enhance therapeutic outcomes, and promote overall well-being. These therapies include specialized oil massages, herbal steam therapy, localized treatments, relaxation therapies, and rejuvenation procedures tailored to each individual's health condition and body constitution. Our experienced Ayurvedic physicians carefully select the most appropriate supportive therapies to improve circulation, nourish body tissues, reduce stress, relieve muscular discomfort, and support the body's natural healing mechanisms. Every treatment is delivered with authentic Ayurvedic principles, ensuring a safe, comfortable, and holistic wellness experience.",
    "benefits": [
      "Supports Natural Detoxification",
      "Promotes Deep Relaxation",
      "Improves Blood Circulation",
      "Relieves Muscle & Joint Stiffness",
      "Nourishes Body Tissues",
      "Supports Healthy Digestion",
      "Enhances Panchakarma Results",
      "Helps Reduce Stress",
      "Promotes Better Sleep",
      "Supports Healthy Mobility",
      "Improves Energy Levels",
      "Encourages Mental Calmness",
      "Personalized Ayurvedic Care",
      "Holistic Mind & Body Wellness",
      "Complements Main Panchakarma Therapies"
    ],
    "process": [
      {
        "name": "Ayurvedic Consultation",
        "description": "A detailed consultation is conducted to understand your body constitution, health concerns, and wellness goals before selecting the most suitable supportive therapies.",
        "_id": "6ae9a38dedacd842a50324c7"
      },
      {
        "name": "Personalized Therapy Planning",
        "description": "Based on the assessment, our Ayurvedic physician designs a customized therapy plan that complements your Panchakarma treatment or individual wellness requirements.",
        "_id": "6ae9a38dedacd842a50324c8"
      },
      {
        "name": "Supportive Ayurvedic Therapy",
        "description": "Selected supportive therapies are performed using authentic Ayurvedic techniques, herbal oils, and therapeutic procedures to promote relaxation, rejuvenation, and natural healing.",
        "_id": "6ae9a38dedacd842a50324c9"
      },
      {
        "name": "Wellness & Lifestyle Guidance",
        "description": "Personalized dietary advice, herbal recommendations, and healthy lifestyle practices are provided to help maintain the benefits of therapy and support long- term wellness.",
        "_id": "6ae9a38dedacd842a50324ca"
      }
    ],
    "duration": "Variable",
    "image": "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "OTHER PANCHKARMA & SUPPORTIVE THERAPIES",
    "isMainCategory": true,
    "isFeatured": false,
    "whoCanBenefit": [
      "Individuals Undergoing Panchakarma",
      "Stress & Fatigue",
      "Muscle Stiffness",
      "Joint Discomfort",
      "Poor Circulation",
      "Sedentary Lifestyle",
      "Digestive Imbalance",
      "Individuals Seeking Relaxation",
      "Preventive Wellness Seekers",
      "Anyone Looking for Holistic Ayurvedic Care"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Authentic Ayurvedic Therapies",
      "Personalized Wellness Programs",
      "Safe & Hygienic Environment",
      "Holistic Healing Approach"
    ],
    "sequence": 19,
    "titleHi": "पंचकर्म और सहायक चिकित्सा",
    "shortDescriptionHi": "पंचकर्म की सहायक प्रक्रियाओं में व्यक्ति की आवश्यकता के अनुसार स्थानीय उपचार, मालिश, स्वेदन और अन्य पारंपरिक विधियां शामिल हो सकती हैं।",
    "descriptionHi": "पंचकर्म की मुख्य प्रक्रियाओं के अतिरिक्त आयुर्वेद में कई सहायक उपचारों का उपयोग व्यक्ति की प्रकृति, लक्षणों और उपचार योजना के अनुसार किया जाता है। इनमें स्थानीय तेल-धारण, अभ्यंग, स्वेदन, शिरोधारा तथा अन्य पारंपरिक विधियां शामिल हो सकती हैं। इनका उद्देश्य मुख्य उपचार योजना को सहारा देना, आराम प्रदान करना और व्यक्ति की समग्र देखभाल करना है। प्रत्येक प्रक्रिया का चयन योग्य आयुर्वेदिक चिकित्सक द्वारा किया जाना चाहिए तथा तापमान, तेल, अवधि और व्यक्ति की सहनशीलता का ध्यान रखना आवश्यक है।",
    "benefitsHi": [
      "प्राकृतिक विषहरण प्रक्रिया को सहारा",
      "बढ़ावा देता है गहरा विश्राम",
      "रक्त संचार में सुधार",
      "राहत देता है मांसपेशी & जोड़ अकड़न",
      "पोषण देता है शरीर ऊतक",
      "सहायता करता है स्वस्थ पाचन",
      "बढ़ाता है पंचकर्म परिणाम",
      "मदद करता है कम करना तनाव",
      "बढ़ावा देता है बेहतर नींद",
      "सहायता करता है स्वस्थ गतिशीलता",
      "सुधारता है ऊर्जा स्तर",
      "प्रोत्साहित करता है मानसिक शांति",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "समग्र मन & शरीर स्वास्थ्य",
      "पूरक है मुख्य पंचकर्म चिकित्साएं"
    ],
    "whoCanBenefitHi": [
      "व्यक्ति करवा रहे पंचकर्म",
      "तनाव & थकान",
      "मांसपेशी अकड़न",
      "जोड़ असुविधा",
      "कमजोर रक्त संचार",
      "निष्क्रिय दिनचर्या वाले जीवनशैली",
      "पाचन संबंधी असंतुलन",
      "व्यक्ति चाहने वाले विश्राम",
      "निवारक स्वास्थ्य चाहने वाले",
      "कोई भी व्यक्ति चाहने वाले के लिए समग्र आयुर्वेदिक देखभाल"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "प्रामाणिक आयुर्वेदिक चिकित्साएं",
      "व्यक्तिगत स्वास्थ्य कार्यक्रम",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र उपचार दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "आयुर्वेदिक परामर्श",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a50324c3"
      },
      {
        "name": "Personalized Therapy Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a50324c4"
      },
      {
        "name": "Supportive Ayurvedic Therapy",
        "description": "चुनी गई अन्य पंचकर्म और सहायक उपचार प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a50324c5"
      },
      {
        "name": "Wellness & Lifestyle Guidance",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a50324c6"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.407Z",
    "updatedAt": "2026-11-03T09:04:13.041Z"
  },
  {
    "_id": "6a80a32921baf12be0319797",
    "treatmentId": "joint-basti",
    "title": "Kati Basti / Janu Basti",
    "shortDescription": "Kati Basti and Janu Basti are specialized Ayurvedic therapies in which warm medicated herbal oil is retained over the lower back or knee using a specially prepared herbal dough ring. These therapies help nourish the affected area, support joint health, relieve stiffness, and promote natural mobility and comfort.",
    "description": "Kati Basti and Janu Basti are traditional Ayurvedic therapies designed to provide localized nourishment and rejuvenation to the lower back and knee joints. During the treatment, a reservoir made from herbal dough is placed over the affected area and filled with warm medicated herbal oil, allowing the therapeutic properties to penetrate deeply into the tissues. These therapies help support healthy joints, improve flexibility, promote circulation, and relieve muscle stiffness. Every treatment is customized according to the individual's body constitution, health condition, and therapeutic needs, ensuring safe, comfortable, and holistic care under the supervision of experienced Ayurvedic physicians.",
    "benefits": [
      "Supports Joint Health",
      "Nourishes Muscles & Ligaments",
      "Improves Joint Flexibility",
      "Helps Reduce Stiffness",
      "Promotes Healthy Circulation",
      "Supports Lower Back Wellness",
      "Supports Knee Health",
      "Encourages Natural Mobility",
      "Relaxes Surrounding Muscles",
      "Enhances Tissue Nourishment",
      "Promotes Comfort During Movement",
      "Personalized Ayurvedic Care",
      "Traditional Localized Therapy",
      "Holistic Pain Management Support",
      "Complements Panchakarma Programs"
    ],
    "process": [
      {
        "name": "Ayurvedic Consultation",
        "description": "A detailed assessment is conducted to evaluate your body constitution, affected joints, mobility, and overall health before selecting the most appropriate localized therapy.",
        "_id": "6ae9a38dedacd842a50324e1"
      },
      {
        "name": "Treatment Preparation",
        "description": "The treatment area is prepared, and a specially designed herbal dough ring is carefully placed over the lower back or knee to hold the warm medicated oil.",
        "_id": "6ae9a38dedacd842a50324e2"
      },
      {
        "name": "Kati Basti / Janu Basti Therapy",
        "description": "Warm medicated herbal oil is retained within the herbal reservoir for a specified duration, allowing deep nourishment to the muscles, joints, and surrounding tissues.",
        "_id": "6ae9a38dedacd842a50324e3"
      },
      {
        "name": "Recovery & Lifestyle Guidance",
        "description": "Following the therapy, gentle massage, personalized lifestyle recommendations, therapeutic exercises, and Ayurvedic guidance are provided to help maintain joint health and long-term mobility.",
        "_id": "6ae9a38dedacd842a50324e4"
      }
    ],
    "duration": "45 min",
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "OTHER PANCHKARMA & SUPPORTIVE THERAPIES",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Lower Back Discomfort",
      "Knee Joint Discomfort",
      "Muscle Stiffness",
      "Joint Stiffness",
      "Reduced Mobility",
      "Age-Related Joint Changes",
      "Sports-Related Muscle Fatigue",
      "Sedentary Lifestyle",
      "Individuals Seeking Joint Wellness",
      "People Undergoing Panchakarma Therapy"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Authentic Herbal Oil Therapies",
      "Personalized Treatment Plans",
      "Safe & Hygienic Environment",
      "Holistic Musculoskeletal Care"
    ],
    "sequence": 20,
    "titleHi": "कटि बस्ती / जानु बस्ती",
    "shortDescriptionHi": "कटि बस्ती और जानु बस्ती में कमर या घुटने के निर्धारित क्षेत्र पर कुछ समय तक गुनगुना औषधीय तेल रखा जाता है। इसका उपयोग सहायक आराम और स्थानीय देखभाल के लिए किया जाता है।",
    "descriptionHi": "कटि बस्ती और जानु बस्ती आयुर्वेद की स्थानीय तेल-धारण प्रक्रियाएं हैं। कटि बस्ती में कमर के निचले हिस्से और जानु बस्ती में घुटने के आसपास आटे की सीमा बनाकर उसमें निर्धारित अवधि तक गुनगुना औषधीय तेल रखा जाता है। तेल का तापमान लगातार जांचना आवश्यक है ताकि जलन न हो। इन प्रक्रियाओं का उपयोग स्थानीय आराम और सहायक देखभाल के लिए किया जा सकता है, लेकिन लगातार दर्द, सूजन, चोट या नसों से जुड़े लक्षणों में चिकित्सकीय जांच जरूरी है।",
    "benefitsHi": [
      "सहायता करता है जोड़ स्वास्थ्य",
      "पोषण देता है मांसपेशियां & लिगामेंट",
      "सुधारता है जोड़ लचीलापन",
      "मदद करता है कम करना अकड़न",
      "बढ़ावा देता है स्वस्थ रक्त संचार",
      "सहायता करता है निचला पीठ स्वास्थ्य",
      "सहायता करता है घुटना स्वास्थ्य",
      "प्रोत्साहित करता है प्राकृतिक गतिशीलता",
      "Relaxes Surrounding मांसपेशियां",
      "बढ़ाता है ऊतक पोषण",
      "बढ़ावा देता है आराम के दौरान गतिविधि",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "पारंपरिक स्थानीय चिकित्सा",
      "समग्र दर्द प्रबंधन सहयोग",
      "पूरक है पंचकर्म कार्यक्रम"
    ],
    "whoCanBenefitHi": [
      "निचला पीठ असुविधा",
      "घुटना जोड़ असुविधा",
      "मांसपेशी अकड़न",
      "जोड़ अकड़न",
      "कम हुआ गतिशीलता",
      "आयु-से संबंधित जोड़ बदलाव",
      "खेल-कूद-से संबंधित मांसपेशी थकान",
      "निष्क्रिय दिनचर्या वाले जीवनशैली",
      "व्यक्ति चाहने वाले जोड़ स्वास्थ्य",
      "लोग करवा रहे पंचकर्म चिकित्सा"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "प्रामाणिक हर्बल तेल चिकित्साएं",
      "व्यक्तिगत उपचार योजनाएं",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र मांसपेशियों और हड्डियों से संबंधित देखभाल"
    ],
    "processHi": [
      {
        "name": "आयुर्वेदिक परामर्श",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a50324dd"
      },
      {
        "name": "Treatment Preparation",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a50324de"
      },
      {
        "name": "Kati Basti / Janu Basti Therapy",
        "description": "चुनी गई कटि बस्ती / जानु बस्ती प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a50324df"
      },
      {
        "name": "Recovery & Lifestyle Guidance",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a50324e0"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.409Z",
    "updatedAt": "2026-11-03T09:04:13.047Z"
  },
  {
    "_id": "6a80a32921baf12be031979b",
    "treatmentId": "netra-tarpan",
    "title": "Netra / Akshi Tarpan",
    "shortDescription": "Netra (Akshi) Tarpan is a specialized Ayurvedic eye rejuvenation therapy in which medicated herbal ghee is retained around the eyes for a prescribed duration. The treatment helps nourish the eyes, relieve fatigue, improve lubrication, and promote overall eye comfort and wellness.",
    "description": "Netra Tarpan, also known as Akshi Tarpan, is a classical Ayurvedic therapy designed to nourish and rejuvenate the eyes. During the treatment, a protective reservoir made from herbal dough is placed around the eyes and filled with warm medicated ghee, allowing the therapeutic ingredients to gently nourish the eye tissues. This therapy helps relieve eye strain, dryness, and fatigue while supporting healthy lubrication and overall eye comfort. Every treatment is personalized according to the individual's Ayurvedic constitution and eye health requirements, ensuring a safe, relaxing, and holistic wellness experience under the supervision of experienced Ayurvedic physicians.",
    "benefits": [
      "Nourishes Eye Tissues",
      "Relieves Eye Fatigue",
      "Supports Eye Lubrication",
      "Helps Reduce Dryness",
      "Promotes Eye Comfort",
      "Refreshes Tired Eyes",
      "Supports Healthy Vision",
      "Improves Eye Relaxation",
      "Enhances Overall Eye Wellness",
      "Helps Soothe Eye Strain",
      "Supports Natural Eye Hydration",
      "Encourages Healthy Eye Function",
      "Personalized Ayurvedic Eye Care",
      "Traditional Ayurvedic Therapy",
      "Holistic Eye Rejuvenation"
    ],
    "process": [
      {
        "name": "Eye Assessment",
        "description": "A detailed Ayurvedic evaluation is performed to understand your eye health, symptoms, lifestyle, and suitability for Netra Tarpan therapy.",
        "_id": "6ae9a38dedacd842a50324fb"
      },
      {
        "name": "Treatment Preparation",
        "description": "A soft herbal dough ring is carefully placed around the eyes to create a secure reservoir for the medicated herbal ghee used during the therapy.",
        "_id": "6ae9a38dedacd842a50324fc"
      },
      {
        "name": "Netra Tarpan Therapy",
        "description": "Warm medicated herbal ghee is gently retained around the eyes for a prescribed duration to nourish the eye tissues, promote relaxation, and support overall eye wellness.",
        "_id": "6ae9a38dedacd842a50324fd"
      },
      {
        "name": "Post-Treatment Care",
        "description": "After the therapy, personalized eye care guidance, lifestyle recommendations, and follow-up advice are provided to help maintain eye comfort and long-term wellness.",
        "_id": "6ae9a38dedacd842a50324fe"
      }
    ],
    "duration": "30 min",
    "image": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "OTHER PANCHKARMA & SUPPORTIVE THERAPIES",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Digital Eye Strain",
      "Dry Eyes",
      "Tired Eyes",
      "Frequent Screen Users",
      "Eye Fatigue",
      "Mild Eye Discomfort",
      "Students & Professionals",
      "Individuals Seeking Preventive Eye Care",
      "Individuals Seeking Ayurvedic Eye Wellness",
      "Suitable Candidates as Advised by an Ayurvedic Physician"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Authentic Ayurvedic Eye Therapies",
      "Personalized Treatment Plans",
      "Safe & Hygienic Environment",
      "Holistic Eye Wellness Approach"
    ],
    "sequence": 21,
    "titleHi": "नेत्र / अक्षि तर्पण",
    "shortDescriptionHi": "नेत्र तर्पण आयुर्वेद की पारंपरिक नेत्र-देखभाल प्रक्रिया है, जिसमें आंखों के आसपास निर्धारित तरीके से औषधीय घृत रखा जाता है। इसे केवल उपयुक्त स्थिति में विशेषज्ञ की देखरेख में किया जाता है।",
    "descriptionHi": "नेत्र तर्पण या अक्षि तर्पण आयुर्वेद की पारंपरिक नेत्र-देखभाल प्रक्रिया है। इसमें आंखों के चारों ओर सुरक्षित सीमा बनाकर निर्धारित अवधि तक उपयुक्त औषधीय घृत रखा जाता है। प्रक्रिया का उद्देश्य आंखों के आसपास आराम और पारंपरिक पोषण-संबंधी देखभाल प्रदान करना है। आंखों में संक्रमण, चोट, लालिमा, दर्द, दृष्टि में बदलाव या अन्य नेत्र रोग होने पर पहले नेत्र विशेषज्ञ से जांच आवश्यक है। उपयोग की जाने वाली सामग्री की शुद्धता और प्रक्रिया की स्वच्छता अत्यंत महत्वपूर्ण है।",
    "benefitsHi": [
      "पोषण देता है आंखों ऊतक",
      "राहत देता है आंखों थकान",
      "सहायता करता है आंखों चिकनाई",
      "मदद करता है कम करना रूखापन",
      "बढ़ावा देता है आंखों आराम",
      "ताज़गी देता है थकी हुई आंखें",
      "सहायता करता है स्वस्थ Vision",
      "सुधारता है आंखों विश्राम",
      "बढ़ाता है समग्र आंखों स्वास्थ्य",
      "मदद करता है Soothe आंखों तनाव",
      "सहायता करता है प्राकृतिक आंखों नमी",
      "प्रोत्साहित करता है स्वस्थ आंखों कार्यप्रणाली",
      "व्यक्तिगत आयुर्वेदिक आंखों देखभाल",
      "पारंपरिक आयुर्वेदिक चिकित्सा",
      "समग्र आंखों कायाकल्प"
    ],
    "whoCanBenefitHi": [
      "डिजिटल आंखों तनाव",
      "रूखा आंखें",
      "थकी हुई आंखें",
      "बार-बार होने वाला Screen Users",
      "आंखों थकान",
      "हल्का आंखों असुविधा",
      "विद्यार्थी & पेशेवर",
      "व्यक्ति चाहने वाले निवारक आंखों देखभाल",
      "व्यक्ति चाहने वाले आयुर्वेदिक आंखों स्वास्थ्य",
      "उपयुक्त व्यक्ति के रूप में सलाह दिए गए द्वारा एक आयुर्वेदिक चिकित्सक"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "प्रामाणिक आयुर्वेदिक आंखों चिकित्साएं",
      "व्यक्तिगत उपचार योजनाएं",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र आंखों स्वास्थ्य दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "Eye Assessment",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a50324f7"
      },
      {
        "name": "Treatment Preparation",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a50324f8"
      },
      {
        "name": "Netra Tarpan Therapy",
        "description": "चुनी गई नेत्र / अक्षि तर्पण प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a50324f9"
      },
      {
        "name": "उपचार के बाद की देखभाल",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a50324fa"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.409Z",
    "updatedAt": "2026-11-03T09:04:13.054Z"
  },
  {
    "_id": "6a80a32921baf12be0319787",
    "treatmentId": "abhyanga",
    "title": "Abhyanga (Full Body Oil Massage)",
    "shortDescription": "Abhyanga is a traditional Ayurvedic full-body massage performed with warm medicated herbal oils selected according to your body constitution. This deeply nourishing therapy helps improve circulation, relax muscles, reduce stress, and promote overall physical and mental well-being.",
    "description": "Abhyanga is one of Ayurveda's most valued rejuvenation therapies, involving a synchronized full-body massage using warm herbal oils carefully selected according to an individual's dosha and health condition. The rhythmic massage techniques help improve blood circulation, nourish the skin and body tissues, promote relaxation, and support the body's natural detoxification process. Abhyanga also helps relieve muscular stiffness, reduce daily stress, improve flexibility, and restore a sense of balance and vitality. Performed under the guidance of experienced Ayurvedic therapists, this therapy offers a deeply relaxing and holistic wellness experience suitable for individuals seeking preventive care and overall rejuvenation.",
    "benefits": [
      "Promotes Deep Relaxation",
      "Nourishes Skin & Body Tissues",
      "Improves Blood Circulation",
      "Helps Reduce Stress",
      "Relieves Muscle Stiffness",
      "Supports Natural Detoxification",
      "Improves Joint Flexibility",
      "Enhances Skin Hydration",
      "Promotes Better Sleep",
      "Improves Energy Levels",
      "Encourages Mental Calmness",
      "Supports Healthy Lymphatic Circulation",
      "Helps Reduce Physical Fatigue",
      "Personalized Ayurvedic Care",
      "Holistic Mind & Body Rejuvenation"
    ],
    "process": [
      {
        "name": "Ayurvedic Consultation",
        "description": "Our Ayurvedic physician evaluates your body constitution, lifestyle, and wellness goals to select the most suitable herbal oils and massage techniques.",
        "_id": "6ae9a38dedacd842a5032515"
      },
      {
        "name": "Herbal Oil Preparation",
        "description": "Warm medicated herbal oils are carefully prepared and selected according to your individual dosha balance and therapeutic requirements.",
        "_id": "6ae9a38dedacd842a5032516"
      },
      {
        "name": "Abhyanga Massage Therapy",
        "description": "A rhythmic full-body massage is performed using warm herbal oils to nourish the tissues, improve circulation, relax the muscles, and promote complete physical and mental relaxation.",
        "_id": "6ae9a38dedacd842a5032517"
      },
      {
        "name": "Relaxation & Wellness Guidance",
        "description": "After the therapy, personalized lifestyle recommendations, hydration advice, and Ayurvedic wellness guidance are provided to enhance the long-term benefits of the treatment.",
        "_id": "6ae9a38dedacd842a5032518"
      }
    ],
    "duration": "60 min",
    "image": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "OTHER PANCHKARMA & SUPPORTIVE THERAPIES",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Stress & Fatigue",
      "Muscle Stiffness",
      "Joint Discomfort",
      "Dry Skin",
      "Sedentary Lifestyle",
      "Poor Circulation",
      "Individuals Seeking Relaxation",
      "Active Professionals",
      "Senior Adults",
      "Individuals Seeking Preventive Wellness"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Authentic Herbal Oil Therapies",
      "Personalized Treatment Plans",
      "Safe & Hygienic Environment",
      "Holistic Wellness Approach"
    ],
    "sequence": 22,
    "titleHi": "अभ्यंग (पूरे शरीर की तेल मालिश)",
    "shortDescriptionHi": "अभ्यंग आयुर्वेद की पारंपरिक पूरे शरीर की तेल मालिश है, जिसमें व्यक्ति की प्रकृति और आवश्यकता के अनुसार तेल तथा मालिश की विधि चुनी जाती है।",
    "descriptionHi": "अभ्यंग आयुर्वेद की पारंपरिक पूर्ण-शरीर तेल मालिश है, जिसमें चुने हुए औषधीय या वनस्पति तेलों का उपयोग करके निर्धारित क्रम में मालिश की जाती है। तेल का प्रकार, तापमान और दबाव व्यक्ति की प्रकृति, त्वचा की संवेदनशीलता, एलर्जी, चोट और स्वास्थ्य स्थिति के अनुसार समायोजित किया जाता है। यह प्रक्रिया आराम और अस्थायी शारीरिक सहजता को बढ़ावा दे सकती है। यह किसी रोग या लगातार दर्द के लिए आवश्यक चिकित्सकीय उपचार का विकल्प नहीं है।",
    "benefitsHi": [
      "बढ़ावा देता है गहरा विश्राम",
      "पोषण देता है त्वचा & शरीर ऊतक",
      "रक्त संचार में सुधार",
      "मदद करता है कम करना तनाव",
      "राहत देता है मांसपेशी अकड़न",
      "प्राकृतिक विषहरण प्रक्रिया को सहारा",
      "सुधारता है जोड़ लचीलापन",
      "बढ़ाता है त्वचा नमी",
      "बढ़ावा देता है बेहतर नींद",
      "सुधारता है ऊर्जा स्तर",
      "प्रोत्साहित करता है मानसिक शांति",
      "सहायता करता है स्वस्थ लसीका संबंधी रक्त संचार",
      "मदद करता है कम करना शारीरिक थकान",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "समग्र मन & शरीर कायाकल्प"
    ],
    "whoCanBenefitHi": [
      "तनाव & थकान",
      "मांसपेशी अकड़न",
      "जोड़ असुविधा",
      "रूखा त्वचा",
      "निष्क्रिय दिनचर्या वाले जीवनशैली",
      "कमजोर रक्त संचार",
      "व्यक्ति चाहने वाले विश्राम",
      "सक्रिय पेशेवर",
      "वरिष्ठ वयस्क",
      "व्यक्ति चाहने वाले निवारक स्वास्थ्य"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "प्रामाणिक हर्बल तेल चिकित्साएं",
      "व्यक्तिगत उपचार योजनाएं",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र स्वास्थ्य-केंद्रित दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "आयुर्वेदिक परामर्श",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a5032511"
      },
      {
        "name": "Herbal Oil Preparation",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a5032512"
      },
      {
        "name": "Abhyanga Massage Therapy",
        "description": "चुनी गई अभ्यंग (पूरे शरीर की तेल मालिश) प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a5032513"
      },
      {
        "name": "Relaxation & Wellness Guidance",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a5032514"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.407Z",
    "updatedAt": "2026-11-03T09:04:13.060Z"
  },
  {
    "_id": "6a80a32921baf12be031978b",
    "treatmentId": "swedan",
    "title": "Swedan (Steam Therapy)",
    "shortDescription": "Swedan is a traditional Ayurvedic steam therapy that uses warm herbal steam to promote sweating, open the body's channels, and support natural detoxification. This relaxing therapy helps relieve muscle stiffness, improve circulation, and prepare the body for Panchakarma treatments while enhancing overall wellness.",
    "description": "Swedan, also known as Ayurvedic Steam Therapy, is a classical treatment that gently exposes the body to medicated herbal steam to encourage natural sweating and detoxification. The therapy helps open the body's channels (Srotas), improve blood circulation, relax muscles, and support the elimination of accumulated toxins. Often performed before Panchakarma procedures, Swedan enhances the effectiveness of detoxification therapies by preparing the body for deeper cleansing. It also helps reduce physical fatigue, improve joint flexibility, promote relaxation, and support overall physical and mental well-being. Every session is customized according to the individual's body constitution and therapeutic requirements under the guidance of experienced Ayurvedic professionals.",
    "benefits": [
      "Supports Natural Detoxification",
      "Promotes Healthy Sweating",
      "Improves Blood Circulation",
      "Relieves Muscle Stiffness",
      "Supports Joint Flexibility",
      "Opens Body Channels (Srotas)",
      "Helps Reduce Physical Fatigue",
      "Encourages Muscle Relaxation",
      "Supports Panchakarma Preparation",
      "Promotes Stress Relief",
      "Improves Skin Health",
      "Enhances Overall Wellness",
      "Personalized Ayurvedic Therapy",
      "Traditional Herbal Steam Treatment",
      "Holistic Mind & Body Rejuvenation"
    ],
    "process": [
      {
        "name": "Ayurvedic Consultation",
        "description": "Our Ayurvedic physician evaluates your body constitution, health condition, and wellness goals to determine the most suitable steam therapy protocol.",
        "_id": "6ae9a38dedacd842a503252f"
      },
      {
        "name": "Therapy Preparation",
        "description": "The body is prepared with appropriate Ayurvedic techniques, and medicated herbal steam is carefully selected according to your individual therapeutic needs.",
        "_id": "6ae9a38dedacd842a5032530"
      },
      {
        "name": "Swedan Therapy",
        "description": "Warm herbal steam is applied in a controlled manner to encourage natural sweating, improve circulation, relax muscles, and support the body's natural detoxification process.",
        "_id": "6ae9a38dedacd842a5032531"
      },
      {
        "name": "Recovery & Wellness Guidance",
        "description": "Following the therapy, hydration advice, dietary recommendations, and personalized lifestyle guidance are provided to maximize the benefits of the treatment.",
        "_id": "6ae9a38dedacd842a5032532"
      }
    ],
    "duration": "30 min",
    "image": "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "OTHER PANCHKARMA & SUPPORTIVE THERAPIES",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Muscle Stiffness",
      "Joint Discomfort",
      "Stress & Fatigue",
      "Poor Circulation",
      "Sedentary Lifestyle",
      "Individuals Undergoing Panchakarma",
      "Active Professionals",
      "Sports Recovery",
      "Individuals Seeking Detoxification",
      "People Seeking Holistic Wellness"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Authentic Herbal Steam Therapy",
      "Personalized Treatment Plans",
      "Safe & Hygienic Environment",
      "Holistic Wellness Approach"
    ],
    "sequence": 23,
    "titleHi": "स्वेदन (भाप चिकित्सा)",
    "shortDescriptionHi": "स्वेदन एक पारंपरिक आयुर्वेदिक ऊष्मा-आधारित प्रक्रिया है, जिसमें नियंत्रित भाप या गर्माहट का उपयोग किया जाता है। तापमान और अवधि व्यक्ति की स्थिति के अनुसार तय की जाती है।",
    "descriptionHi": "स्वेदन आयुर्वेद की पारंपरिक प्रक्रिया है, जिसमें शरीर को नियंत्रित गर्माहट या भाप दी जाती है। इसे कई बार अन्य आयुर्वेदिक उपचारों के सहायक भाग के रूप में उपयोग किया जाता है। तापमान और अवधि व्यक्ति की आयु, स्वास्थ्य स्थिति, सहनशीलता और चिकित्सकीय योजना के अनुसार तय की जानी चाहिए। हृदय रोग, रक्तचाप, श्वसन संबंधी समस्या, निर्जलीकरण या गर्मी से परेशानी होने वाले व्यक्तियों में विशेष सावधानी आवश्यक है। चक्कर, घबराहट या असहजता होने पर प्रक्रिया तुरंत रोकनी चाहिए।",
    "benefitsHi": [
      "प्राकृतिक विषहरण प्रक्रिया को सहारा",
      "बढ़ावा देता है स्वस्थ Sweating",
      "रक्त संचार में सुधार",
      "राहत देता है मांसपेशी अकड़न",
      "सहायता करता है जोड़ लचीलापन",
      "खोलता है शरीर मार्ग (Srotas)",
      "मदद करता है कम करना शारीरिक थकान",
      "प्रोत्साहित करता है मांसपेशी विश्राम",
      "सहायता करता है पंचकर्म Preparation",
      "बढ़ावा देता है तनाव राहत",
      "सुधारता है त्वचा स्वास्थ्य",
      "बढ़ाता है समग्र स्वास्थ्य",
      "व्यक्तिगत आयुर्वेदिक चिकित्सा",
      "पारंपरिक हर्बल भाप उपचार",
      "समग्र मन & शरीर कायाकल्प"
    ],
    "whoCanBenefitHi": [
      "मांसपेशी अकड़न",
      "जोड़ असुविधा",
      "तनाव & थकान",
      "कमजोर रक्त संचार",
      "निष्क्रिय दिनचर्या वाले जीवनशैली",
      "व्यक्ति करवा रहे पंचकर्म",
      "सक्रिय पेशेवर",
      "खेल-कूद स्वास्थ्य-लाभ",
      "व्यक्ति चाहने वाले विषहरण",
      "लोग चाहने वाले समग्र स्वास्थ्य"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "प्रामाणिक हर्बल भाप चिकित्सा",
      "व्यक्तिगत उपचार योजनाएं",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र स्वास्थ्य-केंद्रित दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "आयुर्वेदिक परामर्श",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a503252b"
      },
      {
        "name": "Therapy Preparation",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a503252c"
      },
      {
        "name": "Swedan Therapy",
        "description": "चुनी गई स्वेदन (भाप चिकित्सा) प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a503252d"
      },
      {
        "name": "Recovery & Wellness Guidance",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a503252e"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.407Z",
    "updatedAt": "2026-11-03T09:04:13.068Z"
  },
  {
    "_id": "6a80a32921baf12be031978f",
    "treatmentId": "shirodhara",
    "title": "Shirodhara",
    "shortDescription": "Shirodhara is a classical Ayurvedic therapy in which a continuous stream of warm medicated oil, herbal decoction, or other therapeutic liquid is gently poured over the forehead. This deeply relaxing treatment helps calm the mind, reduce stress, promote mental clarity, and support overall physical and emotional well-being.",
    "description": "Shirodhara is one of Ayurveda's most renowned rejuvenation therapies, designed to promote deep relaxation and restore harmony between the mind and body. During the treatment, a continuous stream of warm medicated oil or specially selected herbal liquid is gently poured over the forehead in a rhythmic manner. This soothing therapy helps relax the nervous system, ease mental fatigue, improve sleep quality, and encourage emotional balance. It also supports concentration, promotes inner calm, and enhances overall wellness. Every Shirodhara session is personalized according to the individual's body constitution, health condition, and therapeutic needs, ensuring a safe, comfortable, and holistic healing experience.",
    "benefits": [
      "Promotes Deep Relaxation",
      "Helps Reduce Stress",
      "Calms the Mind",
      "Supports Better Sleep",
      "Encourages Mental Clarity",
      "Relieves Mental Fatigue",
      "Supports Emotional Balance",
      "Promotes Nervous System Relaxation",
      "Enhances Overall Well-Being",
      "Improves Focus & Concentration",
      "Encourages Inner Calm",
      "Supports Holistic Wellness",
      "Personalized Ayurvedic Care",
      "Traditional Rejuvenation Therapy",
      "Mind & Body Harmony"
    ],
    "process": [
      {
        "name": "Ayurvedic Consultation",
        "description": "Our Ayurvedic physician evaluates your body constitution, lifestyle, stress levels, and wellness goals to customize the most suitable Shirodhara therapy.",
        "_id": "6ae9a38dedacd842a5032549"
      },
      {
        "name": "Treatment Preparation",
        "description": "Appropriate medicated oil or herbal liquid is selected according to your individual needs, and you are comfortably positioned to ensure a relaxing treatment experience.",
        "_id": "6ae9a38dedacd842a503254a"
      },
      {
        "name": "Shirodhara Therapy",
        "description": "A continuous stream of warm medicated oil or herbal liquid is gently poured over the forehead in a rhythmic manner to promote deep relaxation, mental calmness, and overall rejuvenation.",
        "_id": "6ae9a38dedacd842a503254b"
      },
      {
        "name": "Recovery & Wellness Guidance",
        "description": "Following the therapy, personalized lifestyle advice, hydration recommendations, and Ayurvedic wellness guidance are provided to help maintain long-term physical and mental balance.",
        "_id": "6ae9a38dedacd842a503254c"
      }
    ],
    "duration": "60 min",
    "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "OTHER PANCHKARMA & SUPPORTIVE THERAPIES",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Stress & Anxiety",
      "Mental Fatigue",
      "Busy Professionals",
      "Sleep Disturbances",
      "Individuals Seeking Relaxation",
      "Students",
      "Emotional Exhaustion",
      "Sedentary Lifestyle",
      "Individuals Seeking Holistic Wellness",
      "People Following Panchakarma Programs"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Authentic Shirodhara Therapy",
      "Personalized Treatment Plans",
      "Safe & Hygienic Environment",
      "Holistic Mind & Body Care"
    ],
    "sequence": 24,
    "titleHi": "शिरोधारा",
    "shortDescriptionHi": "शिरोधारा में माथे पर निर्धारित समय तक गुनगुने तेल या अन्य उपयुक्त द्रव की नियंत्रित धारा प्रवाहित की जाती है। यह पारंपरिक रूप से आराम और मानसिक शांति के लिए दी जाने वाली चिकित्सा है।",
    "descriptionHi": "शिरोधारा आयुर्वेद की पारंपरिक आरामदायक चिकित्सा है, जिसमें व्यक्ति की स्थिति के अनुसार चुने गए तेल या अन्य उपयुक्त द्रव की नियंत्रित धारा माथे पर प्रवाहित की जाती है। द्रव का प्रकार, तापमान, प्रवाह और अवधि चिकित्सक द्वारा तय किए जाते हैं। इसका उपयोग विश्राम और मानसिक शांति को बढ़ावा देने के लिए किया जाता है। सिर या त्वचा की संवेदनशीलता, एलर्जी और अन्य स्वास्थ्य स्थितियों को ध्यान में रखना आवश्यक है। यह न्यूरोलॉजिकल या मानसिक रोगों के उपचार का विकल्प नहीं है।",
    "benefitsHi": [
      "बढ़ावा देता है गहरा विश्राम",
      "मदद करता है कम करना तनाव",
      "शांत करता है मन",
      "सहायता करता है बेहतर नींद",
      "प्रोत्साहित करता है मानसिक स्पष्टता",
      "राहत देता है मानसिक थकान",
      "सहायता करता है भावनात्मक संतुलन",
      "बढ़ावा देता है तंत्रिका तंत्र विश्राम",
      "बढ़ाता है समग्र कल्याण",
      "सुधारता है ध्यान & एकाग्रता",
      "प्रोत्साहित करता है आंतरिक शांति",
      "सहायता करता है समग्र स्वास्थ्य",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "पारंपरिक कायाकल्प चिकित्सा",
      "मन & शरीर सामंजस्य"
    ],
    "whoCanBenefitHi": [
      "तनाव & चिंता",
      "मानसिक थकान",
      "व्यस्त पेशेवर",
      "नींद गड़बड़ी",
      "व्यक्ति चाहने वाले विश्राम",
      "विद्यार्थी",
      "भावनात्मक अत्यधिक थकान",
      "निष्क्रिय दिनचर्या वाले जीवनशैली",
      "व्यक्ति चाहने वाले समग्र स्वास्थ्य",
      "लोग अनुसरण करने वाले पंचकर्म कार्यक्रम"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "प्रामाणिक शिरोधारा चिकित्सा",
      "व्यक्तिगत उपचार योजनाएं",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र मन & शरीर देखभाल"
    ],
    "processHi": [
      {
        "name": "आयुर्वेदिक परामर्श",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a5032545"
      },
      {
        "name": "Treatment Preparation",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a5032546"
      },
      {
        "name": "शिरोधारा चिकित्सा",
        "description": "चुनी गई शिरोधारा प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a5032547"
      },
      {
        "name": "Recovery & Wellness Guidance",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a5032548"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.407Z",
    "updatedAt": "2026-11-03T09:04:13.078Z"
  },
  {
    "_id": "6a80a32921baf12be0319793",
    "treatmentId": "udwartan",
    "title": "Udwartan (Herbal Powder Massage)",
    "shortDescription": "Udwartan is a traditional Ayurvedic therapy that uses specially selected herbal powders for a stimulating full-body massage. This revitalizing treatment helps exfoliate the skin, improve circulation, support natural detoxification, and promote healthier skin while enhancing overall body wellness.",
    "description": "Udwartan is a classical Ayurvedic dry powder massage performed using specially formulated herbal powders selected according to an individual's body constitution and wellness goals. The therapy involves rhythmic upward massage strokes that help stimulate circulation, exfoliate dead skin cells, improve lymphatic drainage, and encourage natural detoxification. Udwartan also supports healthy metabolism, promotes smoother and healthier-looking skin, and provides a refreshing sense of lightness and vitality. Frequently included in Ayurvedic wellness and body care programs, this therapy is customized to each individual's needs and performed under the guidance of experienced Ayurvedic professionals for a safe and rejuvenating experience.",
    "benefits": [
      "Supports Natural Detoxification",
      "Exfoliates Dead Skin Cells",
      "Improves Blood Circulation",
      "Stimulates Lymphatic Drainage",
      "Promotes Healthy Metabolism",
      "Helps Improve Skin Texture",
      "Supports Body Toning",
      "Reduces Excess Oil on Skin",
      "Encourages Healthy Skin Renewal",
      "Promotes Smooth & Radiant Skin",
      "Relieves Body Fatigue",
      "Refreshes the Body",
      "Personalized Ayurvedic Care",
      "Traditional Herbal Powder Therapy",
      "Holistic Body Rejuvenation"
    ],
    "process": [
      {
        "name": "Ayurvedic Consultation",
        "description": "Our Ayurvedic physician evaluates your body constitution, skin condition, and wellness goals to select the most suitable herbal powders and treatment approach.",
        "_id": "6ae9a38dedacd842a5032563"
      },
      {
        "name": "Herbal Powder Preparation",
        "description": "Specially formulated Ayurvedic herbal powders are selected and prepared according to your individual therapeutic needs to ensure safe and effective treatment.",
        "_id": "6ae9a38dedacd842a5032564"
      },
      {
        "name": "Udwartan Therapy",
        "description": "A rhythmic full-body massage is performed using herbal powders with upward strokes to exfoliate the skin, stimulate circulation, support detoxification, and promote body rejuvenation.",
        "_id": "6ae9a38dedacd842a5032565"
      },
      {
        "name": "Post-Treatment Wellness",
        "description": "Following the therapy, personalized hydration, dietary, and lifestyle recommendations are provided to help maintain healthy skin, improve overall wellness, and enhance the long-term benefits of the treatment.",
        "_id": "6ae9a38dedacd842a5032566"
      }
    ],
    "duration": "45 min",
    "image": "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "OTHER PANCHKARMA & SUPPORTIVE THERAPIES",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Dull Skin",
      "Oily Skin",
      "Rough Skin Texture",
      "Sedentary Lifestyle",
      "Individuals Seeking Detoxification",
      "Individuals Seeking Body Toning",
      "Poor Blood Circulation",
      "Physical Fatigue",
      "Wellness Enthusiasts",
      "Individuals Seeking Holistic Ayurvedic Care"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Authentic Herbal Powder Therapies",
      "Personalized Treatment Plans",
      "Safe & Hygienic Environment",
      "Holistic Wellness Approach"
    ],
    "sequence": 25,
    "titleHi": "उद्वर्तन (हर्बल पाउडर मालिश)",
    "shortDescriptionHi": "उद्वर्तन में चुने हुए हर्बल पाउडर से शरीर पर पारंपरिक मालिश की जाती है। यह त्वचा की सतही सफाई और मालिश का अनुभव प्रदान कर सकती है।",
    "descriptionHi": "उद्वर्तन आयुर्वेद की पारंपरिक मालिश प्रक्रिया है, जिसमें चुने हुए हर्बल पाउडर को शरीर पर विशेष मालिश विधि से लगाया जाता है। पाउडर की सामग्री और मालिश का दबाव त्वचा की स्थिति तथा व्यक्ति की सहनशीलता के अनुसार चुना जाना चाहिए। यह त्वचा की सतही एक्सफोलिएशन और मालिश से संबंधित लाभ दे सकती है। इससे वजन घटने, किसी विशेष स्थान की चर्बी कम होने या मेटाबॉलिक रोग ठीक होने की गारंटी नहीं दी जा सकती। त्वचा में जलन या एलर्जी की संभावना रहती है।",
    "benefitsHi": [
      "प्राकृतिक विषहरण प्रक्रिया को सहारा",
      "मृत कोशिकाएं हटाता है मृत त्वचा कोशिकाएं",
      "रक्त संचार में सुधार",
      "उत्तेजित करता है लसीका संबंधी निकासी",
      "बढ़ावा देता है स्वस्थ चयापचय",
      "मदद करता है सुधारना त्वचा बनावट",
      "सहायता करता है शरीर टोनिंग",
      "कम करने में मदद अधिक तेल on त्वचा",
      "प्रोत्साहित करता है स्वस्थ त्वचा नवीनीकरण",
      "बढ़ावा देता है मुलायम & दमकती त्वचा",
      "राहत देता है शरीर थकान",
      "ताज़गी देता है शरीर",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "पारंपरिक हर्बल पाउडर चिकित्सा",
      "समग्र शरीर कायाकल्प"
    ],
    "whoCanBenefitHi": [
      "बेजान त्वचा",
      "तैलीय त्वचा",
      "Rough त्वचा बनावट",
      "निष्क्रिय दिनचर्या वाले जीवनशैली",
      "व्यक्ति चाहने वाले विषहरण",
      "व्यक्ति चाहने वाले शरीर टोनिंग",
      "कमजोर रक्त रक्त संचार",
      "शारीरिक थकान",
      "स्वास्थ्य रुचि रखने वाले",
      "व्यक्ति चाहने वाले समग्र आयुर्वेदिक देखभाल"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "प्रामाणिक हर्बल पाउडर चिकित्साएं",
      "व्यक्तिगत उपचार योजनाएं",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र स्वास्थ्य-केंद्रित दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "आयुर्वेदिक परामर्श",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a503255f"
      },
      {
        "name": "Herbal Powder Preparation",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a5032560"
      },
      {
        "name": "Udwartan Therapy",
        "description": "चुनी गई उद्वर्तन (हर्बल पाउडर मालिश) प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a5032561"
      },
      {
        "name": "Post-Treatment Wellness",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a5032562"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.409Z",
    "updatedAt": "2026-11-03T09:04:13.088Z"
  },
  {
    "_id": "6a80a32921baf12be031979f",
    "treatmentId": "cat-weightloss",
    "title": "Weight Loss & Body Detox",
    "shortDescription": "Our Weight Loss & Body Detox program combines authentic Ayurvedic therapies, personalized nutrition, and lifestyle guidance to support healthy weight management, improve metabolism, and promote natural detoxification. Every treatment plan is tailored to your individual body constitution and wellness goals for sustainable, long-term results.",
    "description": "Weight Loss & Body Detox is a comprehensive Ayurvedic wellness program designed to support healthy weight management while restoring the body's natural balance. The program combines personalized Panchakarma therapies, herbal treatments, body detoxification techniques, therapeutic massages, dietary counseling, and lifestyle modifications to improve metabolism, promote healthy digestion, and assist the body's natural detoxification process. Rather than focusing on rapid weight loss, our approach emphasizes sustainable wellness, improved energy levels, enhanced mobility, and long-term healthy living. Every treatment plan is carefully customized according to your body constitution (Prakriti), health condition, and individual wellness goals under the guidance of experienced Ayurvedic physicians.",
    "benefits": [
      "Supports Healthy Weight Management",
      "Promotes Natural Detoxification",
      "Improves Metabolism",
      "Enhances Digestive Health",
      "Encourages Healthy Fat Metabolism",
      "Reduces Water Retention",
      "Improves Energy Levels",
      "Supports Better Mobility",
      "Promotes Healthy Circulation",
      "Encourages Better Lifestyle Habits",
      "Helps Improve Body Tone",
      "Supports Natural Elimination of Toxins",
      "Personalized Ayurvedic Care",
      "Holistic Wellness Approach",
      "Long-Term Weight Management Support"
    ],
    "process": [
      {
        "name": "Health & Body Assessment",
        "description": "Our Ayurvedic physician performs a detailed assessment of your body constitution, lifestyle, dietary habits, metabolism, and wellness goals to create a personalized treatment plan.",
        "_id": "6ae9a38dedacd842a503257d"
      },
      {
        "name": "Personalized Detox Planning",
        "description": "A customized detoxification and weight management program is designed using appropriate Ayurvedic therapies, dietary recommendations, herbal support, and lifestyle modifications.",
        "_id": "6ae9a38dedacd842a503257e"
      },
      {
        "name": "Ayurvedic Detox Therapy",
        "description": "Selected Ayurvedic therapies, herbal treatments, body massages, and detoxification procedures are performed to support metabolism, improve digestion, and promote overall wellness.",
        "_id": "6ae9a38dedacd842a503257f"
      },
      {
        "name": "Lifestyle & Wellness Guidance",
        "description": "Personalized nutrition advice, physical activity recommendations, and healthy lifestyle practices are provided to help maintain long-term wellness and sustainable weight management.",
        "_id": "6ae9a38dedacd842a5032580"
      }
    ],
    "duration": "Variable",
    "image": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "WEIGHT LOSS & BODY DETOX",
    "isMainCategory": true,
    "isFeatured": false,
    "whoCanBenefit": [
      "Individuals Seeking Healthy Weight Management",
      "Slow Metabolism",
      "Sedentary Lifestyle",
      "Digestive Imbalance",
      "Excess Body Fat",
      "Water Retention",
      "Low Energy Levels",
      "Individuals Seeking Natural Detoxification",
      "Wellness Enthusiasts",
      "People Seeking Holistic Lifestyle Improvement"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Personalized Weight Management Programs",
      "Authentic Ayurvedic Detox Therapies",
      "Safe & Hygienic Environment",
      "Holistic Wellness Approach"
    ],
    "sequence": 26,
    "titleHi": "वजन प्रबंधन और बॉडी डिटॉक्स",
    "shortDescriptionHi": "वजन प्रबंधन और बॉडी डिटॉक्स कार्यक्रम व्यक्तिगत आयुर्वेदिक उपचार, आहार और जीवनशैली मार्गदर्शन के माध्यम से स्वस्थ वजन तथा समग्र स्वास्थ्य को सहारा देते हैं।",
    "descriptionHi": "वजन प्रबंधन और बॉडी डिटॉक्स एक समग्र आयुर्वेदिक स्वास्थ्य कार्यक्रम है, जिसका उद्देश्य स्वस्थ वजन बनाए रखने और शरीर के प्राकृतिक संतुलन को सहारा देना है। इसमें व्यक्ति की प्रकृति और स्वास्थ्य स्थिति के अनुसार पंचकर्म की उपयुक्त प्रक्रियाएं, हर्बल उपचार, मालिश, आहार परामर्श और जीवनशैली में बदलाव शामिल हो सकते हैं। यह कार्यक्रम तेजी से वजन घटाने के बजाय पाचन, ऊर्जा, गतिशीलता और दीर्घकालिक स्वस्थ आदतों पर ध्यान देता है। उपचार योजना योग्य आयुर्वेदिक चिकित्सक की सलाह और आवश्यकता अनुसार आधुनिक चिकित्सकीय जांच के साथ बनाई जानी चाहिए।",
    "benefitsHi": [
      "सहायता करता है स्वस्थ वजन प्रबंधन",
      "बढ़ावा देता है प्राकृतिक विषहरण",
      "सुधारता है चयापचय",
      "बढ़ाता है पाचन संबंधी स्वास्थ्य",
      "प्रोत्साहित करता है स्वस्थ वसा चयापचय",
      "कम करने में मदद पानी रुकावट",
      "सुधारता है ऊर्जा स्तर",
      "सहायता करता है बेहतर गतिशीलता",
      "बढ़ावा देता है स्वस्थ रक्त संचार",
      "प्रोत्साहित करता है बेहतर जीवनशैली आदतें",
      "मदद करता है सुधारना शरीर रंगत",
      "सहायता करता है प्राकृतिक निष्कासन का विषाक्त पदार्थ",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "समग्र स्वास्थ्य-केंद्रित दृष्टिकोण",
      "दीर्घकालिक वजन प्रबंधन सहयोग"
    ],
    "whoCanBenefitHi": [
      "व्यक्ति चाहने वाले स्वस्थ वजन प्रबंधन",
      "धीमा चयापचय",
      "निष्क्रिय दिनचर्या वाले जीवनशैली",
      "पाचन संबंधी असंतुलन",
      "अधिक शरीर वसा",
      "पानी रुकावट",
      "कम ऊर्जा स्तर",
      "व्यक्ति चाहने वाले प्राकृतिक विषहरण",
      "स्वास्थ्य रुचि रखने वाले",
      "लोग चाहने वाले समग्र जीवनशैली सुधार"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "व्यक्तिगत वजन प्रबंधन कार्यक्रम",
      "प्रामाणिक आयुर्वेदिक डिटॉक्स चिकित्साएं",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र स्वास्थ्य-केंद्रित दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "Health & Body Assessment",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a5032579"
      },
      {
        "name": "Personalized Detox Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a503257a"
      },
      {
        "name": "Ayurvedic Detox Therapy",
        "description": "चुनी गई वजन प्रबंधन और बॉडी डिटॉक्स प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a503257b"
      },
      {
        "name": "Lifestyle & Wellness Guidance",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a503257c"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.409Z",
    "updatedAt": "2026-11-03T09:04:13.098Z"
  },
  {
    "_id": "6a80a32921baf12be03197a3",
    "treatmentId": "fat-reduction",
    "title": "Fat Reduction Therapies",
    "shortDescription": "Our Fat Reduction Therapies are designed to support body contouring, improve body shape, and reduce stubborn fat deposits through personalized, non-surgical treatment plans. Combined with healthy lifestyle guidance, these therapies help you achieve a more toned, balanced, and confident appearance.",
    "description": "Fat Reduction Therapies combine advanced wellness techniques with personalized Ayurvedic care to support healthy body contouring and improve overall body composition. These therapies focus on reducing localized fat deposits, improving circulation, supporting healthy metabolism, and enhancing skin firmness while promoting overall wellness. Depending on your individual body type, health condition, and goals, your treatment plan may include specialized body therapies, herbal treatments, detoxification procedures, therapeutic massages, and lifestyle recommendations. Our holistic approach emphasizes gradual, sustainable body transformation while supporting long-term health and confidence.",
    "benefits": [
      "Supports Body Contouring",
      "Helps Reduce Localized Fat Deposits",
      "Improves Body Shape",
      "Supports Healthy Metabolism",
      "Promotes Natural Detoxification",
      "Improves Blood Circulation",
      "Enhances Skin Firmness",
      "Supports Body Toning",
      "Encourages Healthy Lifestyle Habits",
      "Improves Energy Levels",
      "Promotes Better Mobility",
      "Personalized Treatment Plans",
      "Non-Surgical Body Contouring",
      "Holistic Wellness Approach",
      "Long- Term Body Management Support"
    ],
    "process": [
      {
        "name": "Body Assessment",
        "description": "Our specialist evaluates your body composition, lifestyle, target areas, and wellness goals to create a personalized fat reduction and body contouring plan.",
        "_id": "6ae9a38dedacd842a5032597"
      },
      {
        "name": "Customized Treatment Planning",
        "description": "A tailored treatment program is developed using appropriate body therapies, detoxification techniques, and lifestyle recommendations to address your individual needs.",
        "_id": "6ae9a38dedacd842a5032598"
      },
      {
        "name": "Body Contouring Therapy",
        "description": "Selected therapies are performed to support healthy fat reduction, improve circulation, enhance body tone, and promote a smoother, more sculpted appearance.",
        "_id": "6ae9a38dedacd842a5032599"
      },
      {
        "name": "Lifestyle & Maintenance",
        "description": "Personalized nutrition guidance, physical activity recommendations, and follow-up support are provided to help maintain long-term body wellness and treatment results.",
        "_id": "6ae9a38dedacd842a503259a"
      }
    ],
    "duration": "60 min",
    "image": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "WEIGHT LOSS & BODY DETOX",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Localized Fat Deposits",
      "Body Contouring Goals",
      "Excess Abdominal Fat",
      "Thigh & Hip Fat",
      "Arm Fat",
      "Sedentary Lifestyle",
      "Slow Metabolism",
      "Individuals Seeking Non- Surgical Fat Reduction",
      "Wellness Enthusiasts",
      "People Seeking Healthy Body Transformation"
    ],
    "whyChooseUs": [
      "Experienced Wellness Specialists",
      "Personalized Body Contouring Programs",
      "Advanced Non-Surgical Therapies",
      "Safe & Hygienic Environment",
      "Holistic Wellness Approach"
    ],
    "sequence": 27,
    "titleHi": "फैट रिडक्शन उपचार",
    "shortDescriptionHi": "फैट रिडक्शन उपचार व्यक्तिगत बॉडी-कंटूरिंग योजनाओं के माध्यम से शरीर की बनावट और स्वस्थ जीवनशैली को सहारा देने के लिए तैयार किए जाते हैं। परिणाम व्यक्ति की शारीरिक स्थिति और आदतों पर निर्भर करते हैं।",
    "descriptionHi": "फैट रिडक्शन उपचारों में शरीर की बनावट और समग्र स्वास्थ्य को सहारा देने के लिए व्यक्तिगत वेलनेस तकनीकों तथा आयुर्वेदिक देखभाल का संयोजन किया जा सकता है। उपचार योजना का उद्देश्य कुछ क्षेत्रों में जमा वसा, रक्त-संचार, त्वचा की दृढ़ता और स्वस्थ मेटाबॉलिज्म से संबंधित लक्ष्यों पर काम करना है। व्यक्ति की शारीरिक बनावट, स्वास्थ्य स्थिति और लक्ष्यों के अनुसार विशेष बॉडी थेरेपी, हर्बल उपचार, मालिश तथा जीवनशैली संबंधी सुझाव चुने जा सकते हैं। यह उपचार स्वस्थ आहार और गतिविधि का विकल्प नहीं है और किसी विशेष स्थान की चर्बी घटने की गारंटी नहीं देता।",
    "benefitsHi": [
      "सहायता करता है शरीर शरीर की आकृति सुधार",
      "मदद करता है कम करना स्थानीय वसा जमा वसा",
      "सुधारता है शरीर Shape",
      "सहायता करता है स्वस्थ चयापचय",
      "बढ़ावा देता है प्राकृतिक विषहरण",
      "रक्त संचार में सुधार",
      "बढ़ाता है त्वचा दृढ़ता",
      "सहायता करता है शरीर टोनिंग",
      "प्रोत्साहित करता है स्वस्थ जीवनशैली आदतें",
      "सुधारता है ऊर्जा स्तर",
      "बढ़ावा देता है बेहतर गतिशीलता",
      "व्यक्तिगत उपचार योजनाएं",
      "बिना सर्जरी वाला शरीर शरीर की आकृति सुधार",
      "समग्र स्वास्थ्य-केंद्रित दृष्टिकोण",
      "Long- Term शरीर प्रबंधन सहयोग"
    ],
    "whoCanBenefitHi": [
      "स्थानीय वसा जमा वसा",
      "शरीर शरीर की आकृति सुधार लक्ष्य",
      "अधिक पेट संबंधी वसा",
      "Thigh & कूल्हा वसा",
      "बांह वसा",
      "निष्क्रिय दिनचर्या वाले जीवनशैली",
      "धीमा चयापचय",
      "व्यक्ति चाहने वाले Non- शल्य-चिकित्सकीय वसा Reduction",
      "स्वास्थ्य रुचि रखने वाले",
      "लोग चाहने वाले स्वस्थ शरीर Transformation"
    ],
    "whyChooseUsHi": [
      "अनुभवी स्वास्थ्य विशेषज्ञ",
      "व्यक्तिगत शरीर शरीर की आकृति सुधार कार्यक्रम",
      "उन्नत बिना सर्जरी वाला चिकित्साएं",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र स्वास्थ्य-केंद्रित दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "Body Assessment",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a5032593"
      },
      {
        "name": "Customized Treatment Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a5032594"
      },
      {
        "name": "Body Contouring Therapy",
        "description": "चुनी गई फैट रिडक्शन उपचार प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a5032595"
      },
      {
        "name": "Lifestyle & Maintenance",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a5032596"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.409Z",
    "updatedAt": "2026-11-03T09:04:13.113Z"
  },
  {
    "_id": "6a80a32921baf12be03197a7",
    "treatmentId": "body-detox",
    "title": "Body Detox Programs",
    "shortDescription": "Our Body Detox Programs are designed to support the body's natural cleansing processes through personalized Ayurvedic therapies, herbal treatments, and lifestyle guidance. These programs help improve digestion, enhance metabolism, boost energy levels, and promote long-term health and wellness.",
    "description": "Body Detox Programs are comprehensive Ayurvedic wellness plans that focus on restoring the body's natural balance by supporting healthy digestion, improving metabolism, and encouraging natural detoxification. Each program combines personalized Panchakarma therapies, herbal formulations, therapeutic massages, dietary guidance, and healthy lifestyle practices based on your individual body constitution and wellness goals. Rather than offering a temporary cleanse, our holistic approach helps improve vitality, enhance immunity, promote healthy circulation, and support long-term physical and mental well-being. Every program is carefully supervised by experienced Ayurvedic physicians to ensure a safe, comfortable, and effective wellness journey.",
    "benefits": [
      "Supports Natural Detoxification",
      "Improves Digestive Health",
      "Enhances Metabolism",
      "Promotes Healthy Liver Function",
      "Boosts Energy Levels",
      "Supports Healthy Gut Function",
      "Improves Blood Circulation",
      "Strengthens Natural Immunity",
      "Encourages Better Nutrient Absorption",
      "Promotes Healthy Skin",
      "Supports Mental Well-Being",
      "Helps Reduce Physical Fatigue",
      "Personalized Ayurvedic Care",
      "Holistic Wellness Approach",
      "Long-Term Health Support"
    ],
    "process": [
      {
        "name": "Ayurvedic Health Assessment",
        "description": "A comprehensive consultation is conducted to assess your body constitution, digestive health, lifestyle, and wellness goals before creating a personalized detoxification program.",
        "_id": "6ae9a38dedacd842a50325b1"
      },
      {
        "name": "Personalized Detox Planning",
        "description": "A customized wellness plan is developed using appropriate Panchakarma therapies, herbal support, dietary recommendations, and lifestyle modifications tailored to your individual needs.",
        "_id": "6ae9a38dedacd842a50325b2"
      },
      {
        "name": "Detox & Rejuvenation Therapy",
        "description": "Selected Ayurvedic therapies and detoxification procedures are performed to support natural cleansing, improve metabolism, restore balance, and promote overall physical and mental well-being.",
        "_id": "6ae9a38dedacd842a50325b3"
      },
      {
        "name": "Lifestyle & Wellness Support",
        "description": "Personalized nutrition guidance, healthy lifestyle recommendations, and follow-up care are provided to help maintain long-term wellness and maximize the benefits of your detox program.",
        "_id": "6ae9a38dedacd842a50325b4"
      }
    ],
    "duration": "3–21 days",
    "image": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "WEIGHT LOSS & BODY DETOX",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Individuals Seeking Detoxification",
      "Digestive Discomfort",
      "Low Energy Levels",
      "Poor Lifestyle Habits",
      "Stress & Fatigue",
      "Sluggish Metabolism",
      "Sedentary Lifestyle",
      "Individuals Seeking Preventive Wellness",
      "Wellness Enthusiasts",
      "People Looking for Holistic Health Improvement"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Personalized Detox Programs",
      "Authentic Panchakarma Therapies",
      "Safe & Hygienic Environment",
      "Holistic Wellness Approach"
    ],
    "sequence": 28,
    "titleHi": "बॉडी डिटॉक्स कार्यक्रम",
    "shortDescriptionHi": "बॉडी डिटॉक्स कार्यक्रम व्यक्तिगत आयुर्वेदिक उपचार, हर्बल देखभाल, आहार और जीवनशैली मार्गदर्शन के माध्यम से पाचन तथा समग्र स्वास्थ्य को सहारा देते हैं।",
    "descriptionHi": "बॉडी डिटॉक्स कार्यक्रम आयुर्वेदिक वेलनेस योजनाएं हैं, जिनका उद्देश्य पाचन, मेटाबॉलिज्म और शरीर की सामान्य कार्यप्रणाली को सहारा देना है। इनमें व्यक्ति की प्रकृति और स्वास्थ्य लक्ष्यों के अनुसार पंचकर्म की उपयुक्त प्रक्रियाएं, हर्बल फॉर्मूलेशन, चिकित्सीय मालिश, आहार संबंधी मार्गदर्शन और स्वस्थ दिनचर्या शामिल हो सकती है। कार्यक्रम का उद्देश्य केवल अस्थायी क्लीनज़ नहीं, बल्कि ऊर्जा, जीवनशैली और समग्र शारीरिक तथा मानसिक स्वास्थ्य पर ध्यान देना है। प्रत्येक कार्यक्रम योग्य आयुर्वेदिक चिकित्सक की निगरानी में व्यक्ति के अनुसार बनाया जाना चाहिए।",
    "benefitsHi": [
      "प्राकृतिक विषहरण प्रक्रिया को सहारा",
      "सुधारता है पाचन संबंधी स्वास्थ्य",
      "चयापचय को बेहतर बनाने में मदद",
      "बढ़ावा देता है स्वस्थ यकृत कार्यप्रणाली",
      "बढ़ाता है ऊर्जा स्तर",
      "सहायता करता है स्वस्थ आंत कार्यप्रणाली",
      "रक्त संचार में सुधार",
      "मजबूत करता है प्राकृतिक रोग-प्रतिरोधक क्षमता",
      "प्रोत्साहित करता है बेहतर पोषक तत्व अवशोषण",
      "बढ़ावा देता है स्वस्थ त्वचा",
      "सहायता करता है मानसिक कल्याण",
      "मदद करता है कम करना शारीरिक थकान",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "समग्र स्वास्थ्य-केंद्रित दृष्टिकोण",
      "दीर्घकालिक स्वास्थ्य सहयोग"
    ],
    "whoCanBenefitHi": [
      "व्यक्ति चाहने वाले विषहरण",
      "पाचन संबंधी असुविधा",
      "कम ऊर्जा स्तर",
      "कमजोर जीवनशैली आदतें",
      "तनाव & थकान",
      "धीमा चयापचय",
      "निष्क्रिय दिनचर्या वाले जीवनशैली",
      "व्यक्ति चाहने वाले निवारक स्वास्थ्य",
      "स्वास्थ्य रुचि रखने वाले",
      "लोग चाहने वाले के लिए समग्र स्वास्थ्य सुधार"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "व्यक्तिगत डिटॉक्स कार्यक्रम",
      "प्रामाणिक पंचकर्म चिकित्साएं",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र स्वास्थ्य-केंद्रित दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "Ayurvedic Health Assessment",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a50325ad"
      },
      {
        "name": "Personalized Detox Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a50325ae"
      },
      {
        "name": "Detox & Rejuvenation Therapy",
        "description": "चुनी गई बॉडी डिटॉक्स कार्यक्रम प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a50325af"
      },
      {
        "name": "Lifestyle & Wellness Support",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a50325b0"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.409Z",
    "updatedAt": "2026-11-03T09:04:13.126Z"
  },
  {
    "_id": "6ae9971e4fbd13c8c553f0dd",
    "treatmentId": "potli-massage-herbal-poultice-therapy",
    "benefits": [
      "Personalized approach to massage using warmed herbal bundles or poultices",
      "Initial suitability assessment",
      "Procedure explained before starting",
      "Treatment plan tailored to individual needs",
      "Professional supervision",
      "Attention to hygiene and safety",
      "Clear discussion of limitations",
      "Realistic outcome expectations",
      "Comfort monitored during the session",
      "Aftercare instructions provided",
      "Follow-up when clinically appropriate",
      "Can be considered alongside a broader care plan"
    ],
    "benefitsHi": [
      "व्यक्तिगत आवश्यकता के अनुसार प्रक्रिया",
      "उपचार से पहले उपयुक्तता की जाँच",
      "प्रक्रिया की पहले से स्पष्ट जानकारी",
      "व्यक्तिगत देखभाल योजना",
      "प्रशिक्षित विशेषज्ञ की निगरानी",
      "स्वच्छता और सुरक्षा पर ध्यान",
      "प्रक्रिया की सीमाओं की जानकारी",
      "वास्तविक अपेक्षाओं पर चर्चा",
      "सत्र के दौरान आराम का ध्यान",
      "उपचार के बाद देखभाल के निर्देश",
      "आवश्यकता अनुसार फॉलो-अप",
      "व्यापक देखभाल योजना के साथ समन्वय"
    ],
    "category": "OTHER PANCHKARMA & SUPPORTIVE THERAPIES",
    "createdAt": "2026-11-03T08:11:10.914Z",
    "description": "Potli massage uses warmed herbal bundles applied with controlled pressure. Temperature must be checked to prevent burns, and ingredients must be reviewed for allergies or irritation. It may be offered for relaxation and temporary comfort; it is not a substitute for assessment of persistent pain or injury.",
    "descriptionHi": "पोटली मसाज में चुनी हुई जड़ी-बूटियों या सामग्री से बनी गर्म पोटली को नियंत्रित दबाव के साथ लगाया जाता है। जलने से बचाने के लिए तापमान जाँचना और एलर्जी की जाँच करना आवश्यक है। यह आराम के लिए सहायक हो सकती है, लेकिन लगातार दर्द या चोट का विकल्पी उपचार नहीं।",
    "duration": "",
    "gallery": [],
    "image": "",
    "isFeatured": false,
    "isMainCategory": false,
    "process": [
      {
        "name": "Consultation & Assessment",
        "description": "The practitioner discusses the concern, medical history, expectations and possible contraindications, then confirms whether the service is suitable.",
        "_id": "6ae9971e36a3fdb8139a04d0"
      },
      {
        "name": "Preparation",
        "description": "The treatment area is prepared, the procedure and products are explained, consent is obtained, and hygiene and safety checks are completed.",
        "_id": "6ae9971e36a3fdb8139a04d1"
      },
      {
        "name": "Treatment Session",
        "description": "The selected procedure is performed according to the agreed protocol, device instructions and the client's comfort and response.",
        "_id": "6ae9971e36a3fdb8139a04d2"
      },
      {
        "name": "Aftercare & Follow-up",
        "description": "The practitioner explains home-care instructions, possible temporary reactions, warning signs and whether another session or medical review is appropriate.",
        "_id": "6ae9971e36a3fdb8139a04d3"
      }
    ],
    "processHi": [
      {
        "name": "परामर्श और जाँच",
        "description": "विशेषज्ञ समस्या, मेडिकल हिस्ट्री, अपेक्षाओं और संभावित सावधानियों पर चर्चा करके तय करते हैं कि प्रक्रिया उपयुक्त है या नहीं।",
        "_id": "6ae9971e36a3fdb8139a04cc"
      },
      {
        "name": "तैयारी",
        "description": "उपचार क्षेत्र तैयार किया जाता है, प्रक्रिया और उत्पाद समझाए जाते हैं, सहमति ली जाती है तथा स्वच्छता और सुरक्षा की जाँच की जाती है।",
        "_id": "6ae9971e36a3fdb8139a04cd"
      },
      {
        "name": "उपचार सत्र",
        "description": "चुनी हुई प्रक्रिया तय प्रोटोकॉल, उपकरण के निर्देशों और व्यक्ति के आराम को ध्यान में रखकर की जाती है।",
        "_id": "6ae9971e36a3fdb8139a04ce"
      },
      {
        "name": "आफ्टरकेयर और फॉलो-अप",
        "description": "विशेषज्ञ घर पर देखभाल, संभावित अस्थायी प्रतिक्रियाएँ, चेतावनी संकेत और अगले सत्र या चिकित्सकीय जाँच की आवश्यकता समझाते हैं।",
        "_id": "6ae9971e36a3fdb8139a04cf"
      }
    ],
    "sequence": 28,
    "shortDescription": "A traditional massage technique using warmed bundles containing selected herbs or other materials.",
    "shortDescriptionHi": "गर्म हर्बल पोटली से की जाने वाली पारंपरिक मसाज प्रक्रिया।",
    "title": "Potli Massage (Herbal Poultice Therapy)",
    "titleHi": "पोटली मसाज (हर्बल पोटली उपचार)",
    "updatedAt": "2026-11-03T08:11:10.914Z",
    "whoCanBenefit": [
      "People seeking support for massage using warmed herbal bundles or poultices",
      "Adults assessed as suitable",
      "People with realistic expectations",
      "Those who have discussed relevant medical history",
      "People without procedure-specific contraindications",
      "Those seeking a personalized care plan",
      "People able to follow preparation and aftercare advice",
      "Those advised by a qualified practitioner"
    ],
    "whoCanBenefitHi": [
      "इस प्रक्रिया के लिए उपयुक्त पाए गए व्यक्ति",
      "व्यक्तिगत देखभाल चाहने वाले वयस्क",
      "वास्तविक अपेक्षाएँ रखने वाले लोग",
      "जिनकी मेडिकल हिस्ट्री की जाँच हो चुकी हो",
      "जिनमें संबंधित निषेध या जोखिम न हों",
      "व्यक्तिगत उपचार योजना चाहने वाले लोग",
      "तैयारी और आफ्टरकेयर के निर्देश मान सकने वाले लोग",
      "योग्य विशेषज्ञ की सलाह प्राप्त व्यक्ति"
    ],
    "whyChooseUs": [
      "Personalized consultation and suitability assessment",
      "Treatment plan explained before the session",
      "Qualified and trained professionals",
      "Attention to hygiene, safety and client comfort",
      "Clear aftercare guidance and follow-up when needed"
    ],
    "whyChooseUsHi": [
      "व्यक्तिगत परामर्श और उपयुक्तता की जाँच",
      "सत्र से पहले प्रक्रिया की स्पष्ट जानकारी",
      "योग्य और प्रशिक्षित विशेषज्ञ",
      "स्वच्छता, सुरक्षा और आराम पर ध्यान",
      "उचित आफ्टरकेयर और आवश्यकता अनुसार फॉलो-अप"
    ]
  },
  {
    "_id": "6a80a32921baf12be03197ab",
    "treatmentId": "metabolism-boost",
    "title": "Metabolism Boost Therapies",
    "shortDescription": "Our Metabolism Boost Therapies combine personalized Ayurvedic treatments, herbal support, and lifestyle guidance to help improve metabolic function, enhance digestion, and support healthy energy levels. Designed according to your unique body constitution, these therapies promote long-term wellness and sustainable health.",
    "description": "Metabolism Boost Therapies are personalized Ayurvedic wellness programs designed to support the body's natural metabolic processes and improve overall vitality. By combining traditional Ayurvedic therapies, herbal formulations, dietary counseling, and healthy lifestyle practices, these treatments help optimize digestion, encourage efficient nutrient utilization, and promote balanced energy levels. The program also supports healthy circulation, natural detoxification, and long-term metabolic wellness. Every treatment plan is carefully customized according to your body constitution (Prakriti), current health condition, and individual wellness goals, ensuring a safe, holistic, and sustainable approach to better health.",
    "benefits": [
      "Supports Healthy Metabolism",
      "Improves Digestive Function",
      "Enhances Nutrient Absorption",
      "Boosts Natural Energy Levels",
      "Promotes Healthy Circulation",
      "Supports Natural Detoxification",
      "Encourages Healthy Weight Management",
      "Improves Gut Health",
      "Helps Reduce Physical Fatigue",
      "Promotes Balanced Body Functions",
      "Supports Hormonal Balance",
      "Encourages Better Lifestyle Habits",
      "Personalized Ayurvedic Care",
      "Holistic Wellness Approach",
      "Long-Term Metabolic Support"
    ],
    "process": [
      {
        "name": "Ayurvedic Health Assessment",
        "description": "A detailed consultation is conducted to evaluate your body constitution, metabolism, digestive health, lifestyle habits, and wellness goals before designing your personalized therapy plan.",
        "_id": "6ae9a38dedacd842a50325cb"
      },
      {
        "name": "Personalized Wellness Planning",
        "description": "A customized treatment program is created using Ayurvedic therapies, herbal support, nutritional guidance, and lifestyle recommendations tailored to your individual metabolic needs.",
        "_id": "6ae9a38dedacd842a50325cc"
      },
      {
        "name": "Metabolism Support Therapy",
        "description": "Selected Ayurvedic treatments and wellness therapies are performed to support healthy metabolism, improve digestion, enhance circulation, and promote natural energy production.",
        "_id": "6ae9a38dedacd842a50325cd"
      },
      {
        "name": "Lifestyle & Long-Term Care",
        "description": "Personalized dietary advice, daily wellness practices, physical activity recommendations, and follow-up guidance are provided to help maintain long-term metabolic health and overall well-being.",
        "_id": "6ae9a38dedacd842a50325ce"
      }
    ],
    "duration": "30–45 min",
    "image": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "WEIGHT LOSS & BODY DETOX",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Slow Metabolism",
      "Low Energy Levels",
      "Digestive Discomfort",
      "Sedentary Lifestyle",
      "Individuals Seeking Healthy Weight Management",
      "Physical Fatigue",
      "Poor Eating Habits",
      "Wellness Enthusiasts",
      "Individuals Seeking Preventive Healthcare",
      "People Looking for Holistic Wellness"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Personalized Metabolic Wellness Programs",
      "Authentic Ayurvedic Therapies",
      "Safe & Hygienic Environment",
      "Holistic Wellness Approach"
    ],
    "sequence": 29,
    "titleHi": "मेटाबॉलिज्म सपोर्ट उपचार",
    "shortDescriptionHi": "मेटाबॉलिज्म सपोर्ट उपचार आयुर्वेदिक देखभाल, हर्बल मार्गदर्शन, आहार और जीवनशैली में सुधार के माध्यम से पाचन तथा ऊर्जा संतुलन को सहारा देते हैं।",
    "descriptionHi": "मेटाबॉलिज्म सपोर्ट उपचार व्यक्तिगत आयुर्वेदिक वेलनेस कार्यक्रम हैं, जिनका उद्देश्य शरीर की प्राकृतिक चयापचय प्रक्रियाओं और ऊर्जा स्तर को सहारा देना है। इनमें पारंपरिक उपचार, हर्बल फॉर्मूलेशन, आहार परामर्श और स्वस्थ जीवनशैली की आदतों का संयोजन किया जा सकता है। योजना पाचन, पोषक तत्वों के उपयोग, ऊर्जा संतुलन और समग्र स्वास्थ्य पर ध्यान देती है। प्रत्येक उपचार व्यक्ति की प्रकृति, वर्तमान स्वास्थ्य स्थिति और लक्ष्यों के अनुसार तैयार किया जाता है।",
    "benefitsHi": [
      "सहायता करता है स्वस्थ चयापचय",
      "सुधारता है पाचन संबंधी कार्यप्रणाली",
      "बढ़ाता है पोषक तत्व अवशोषण",
      "बढ़ाता है प्राकृतिक ऊर्जा स्तर",
      "बढ़ावा देता है स्वस्थ रक्त संचार",
      "प्राकृतिक विषहरण प्रक्रिया को सहारा",
      "प्रोत्साहित करता है स्वस्थ वजन प्रबंधन",
      "सुधारता है आंत स्वास्थ्य",
      "मदद करता है कम करना शारीरिक थकान",
      "बढ़ावा देता है संतुलित शरीर कार्य",
      "सहायता करता है हार्मोनल संतुलन",
      "प्रोत्साहित करता है बेहतर जीवनशैली आदतें",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "समग्र स्वास्थ्य-केंद्रित दृष्टिकोण",
      "दीर्घकालिक चयापचय संबंधी सहयोग"
    ],
    "whoCanBenefitHi": [
      "धीमा चयापचय",
      "कम ऊर्जा स्तर",
      "पाचन संबंधी असुविधा",
      "निष्क्रिय दिनचर्या वाले जीवनशैली",
      "व्यक्ति चाहने वाले स्वस्थ वजन प्रबंधन",
      "शारीरिक थकान",
      "कमजोर खान-पान आदतें",
      "स्वास्थ्य रुचि रखने वाले",
      "व्यक्ति चाहने वाले निवारक स्वास्थ्य देखभाल",
      "लोग चाहने वाले के लिए समग्र स्वास्थ्य"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "व्यक्तिगत चयापचय संबंधी स्वास्थ्य कार्यक्रम",
      "प्रामाणिक आयुर्वेदिक चिकित्साएं",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र स्वास्थ्य-केंद्रित दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "Ayurvedic Health Assessment",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a50325c7"
      },
      {
        "name": "Personalized Wellness Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a50325c8"
      },
      {
        "name": "Metabolism Support Therapy",
        "description": "चुनी गई मेटाबॉलिज्म सपोर्ट उपचार प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a50325c9"
      },
      {
        "name": "Lifestyle & Long-Term Care",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a50325ca"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.409Z",
    "updatedAt": "2026-11-03T09:04:13.136Z"
  },
  {
    "_id": "6a80a32921baf12be03197af",
    "treatmentId": "cat-wellness",
    "title": "Wellness, Women & Immunity Care",
    "shortDescription": "Our Wellness, Women & Immunity Care programs are designed to support overall health through personalized Ayurvedic therapies, herbal care, and lifestyle guidance. These holistic programs help promote hormonal balance, strengthen natural immunity, improve vitality, and enhance long-term physical and emotional well-being.",
    "description": "Wellness, Women & Immunity Care is a comprehensive Ayurvedic health program focused on promoting preventive healthcare and long-term wellness. The program combines authentic Ayurvedic therapies, herbal formulations, nutritional guidance, and healthy lifestyle practices to support hormonal balance, strengthen the body's natural defense system, improve energy levels, and enhance overall quality of life. Whether your goal is to improve daily wellness, support women's health, or build natural immunity, every treatment plan is carefully personalized according to your body constitution, age, lifestyle, and wellness objectives. Our holistic approach emphasizes sustainable health, balance, and vitality for every stage of life.",
    "benefits": [
      "Supports Natural Immunity",
      "Promotes Women's Wellness",
      "Encourages Hormonal Balance",
      "Improves Energy Levels",
      "Supports Healthy Digestion",
      "Enhances Stress Management",
      "Promotes Better Sleep",
      "Supports Emotional Well-Being",
      "Improves Overall Vitality",
      "Encourages Healthy Lifestyle Habits",
      "Supports Preventive Healthcare",
      "Promotes Natural Detoxification",
      "Personalized Ayurvedic Care",
      "Holistic Mind & Body Wellness",
      "Long-Term Health Support"
    ],
    "process": [
      {
        "name": "Comprehensive Health Assessment",
        "description": "Our Ayurvedic physician carefully evaluates your body constitution, lifestyle, health concerns, and wellness goals to develop a personalized care plan.",
        "_id": "6ae9a38dedacd842a50325e5"
      },
      {
        "name": "Personalized Wellness Planning",
        "description": "A customized treatment program is created using Ayurvedic therapies, herbal support, nutritional guidance, and lifestyle recommendations based on your individual health needs.",
        "_id": "6ae9a38dedacd842a50325e6"
      },
      {
        "name": "Holistic Wellness Therapy",
        "description": "Selected Ayurvedic treatments and rejuvenation therapies are performed to support immunity, improve vitality, promote hormonal balance, and enhance overall physical and emotional well-being.",
        "_id": "6ae9a38dedacd842a50325e7"
      },
      {
        "name": "Long-Term Wellness Support",
        "description": "Personalized diet plans, daily wellness practices, herbal guidance, and regular follow-up care help maintain long-term health, resilience, and overall wellness.",
        "_id": "6ae9a38dedacd842a50325e8"
      }
    ],
    "duration": "Variable",
    "image": "https://images.unsplash.com/photo-1527799822394-46e730304675?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "WELLNESS, WOMEN & IMMUNITY CARE",
    "isMainCategory": true,
    "isFeatured": false,
    "whoCanBenefit": [
      "Women Seeking Holistic Wellness",
      "Individuals with Low Energy Levels",
      "People Looking to Strengthen Immunity",
      "Busy Professionals",
      "Stress & Fatigue",
      "Lifestyle Imbalances",
      "Individuals Seeking Preventive Healthcare",
      "Adults of All Age Groups",
      "Wellness Enthusiasts",
      "Individuals Seeking Natural Health Support"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Personalized Wellness Programs",
      "Authentic Ayurvedic Therapies",
      "Safe & Hygienic Environment",
      "Holistic Healthcare Approach"
    ],
    "sequence": 30,
    "titleHi": "वेलनेस, महिला स्वास्थ्य और इम्युनिटी केयर",
    "shortDescriptionHi": "महिला स्वास्थ्य, रोग-प्रतिरोधक क्षमता और सामान्य वेलनेस कार्यक्रम व्यक्तिगत आयुर्वेदिक देखभाल, हर्बल मार्गदर्शन और जीवनशैली सुझावों के माध्यम से समग्र स्वास्थ्य को सहारा देते हैं।",
    "descriptionHi": "वेलनेस, महिला स्वास्थ्य और इम्युनिटी केयर एक समग्र आयुर्वेदिक स्वास्थ्य कार्यक्रम है, जिसका उद्देश्य रोकथाम-आधारित देखभाल और दीर्घकालिक स्वास्थ्य को बढ़ावा देना है। इसमें उपयुक्त आयुर्वेदिक उपचार, हर्बल फॉर्मूलेशन, पोषण संबंधी मार्गदर्शन और स्वस्थ जीवनशैली शामिल हो सकती है। कार्यक्रम महिला स्वास्थ्य, हार्मोनल संतुलन, शरीर की प्राकृतिक प्रतिरक्षा और ऊर्जा स्तर को सहारा देने पर केंद्रित है। प्रत्येक योजना व्यक्ति की प्रकृति, आयु, जीवनशैली और स्वास्थ्य आवश्यकताओं के अनुसार बनाई जाती है।",
    "benefitsHi": [
      "सहायता करता है प्राकृतिक रोग-प्रतिरोधक क्षमता",
      "बढ़ावा देता है महिला's स्वास्थ्य",
      "प्रोत्साहित करता है हार्मोनल संतुलन",
      "सुधारता है ऊर्जा स्तर",
      "सहायता करता है स्वस्थ पाचन",
      "बढ़ाता है तनाव प्रबंधन",
      "बढ़ावा देता है बेहतर नींद",
      "सहायता करता है भावनात्मक कल्याण",
      "सुधारता है समग्र जीवनशक्ति",
      "प्रोत्साहित करता है स्वस्थ जीवनशैली आदतें",
      "सहायता करता है निवारक स्वास्थ्य देखभाल",
      "बढ़ावा देता है प्राकृतिक विषहरण",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "समग्र मन & शरीर स्वास्थ्य",
      "दीर्घकालिक स्वास्थ्य सहयोग"
    ],
    "whoCanBenefitHi": [
      "महिला चाहने वाले समग्र स्वास्थ्य",
      "व्यक्ति के साथ कम ऊर्जा स्तर",
      "लोग चाहने वाले के लिए Strengthen रोग-प्रतिरोधक क्षमता",
      "व्यस्त पेशेवर",
      "तनाव & थकान",
      "जीवनशैली असंतुलन",
      "व्यक्ति चाहने वाले निवारक स्वास्थ्य देखभाल",
      "वयस्क का सभी आयु समूह",
      "स्वास्थ्य रुचि रखने वाले",
      "व्यक्ति चाहने वाले प्राकृतिक स्वास्थ्य सहयोग"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "व्यक्तिगत स्वास्थ्य कार्यक्रम",
      "प्रामाणिक आयुर्वेदिक चिकित्साएं",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र स्वास्थ्य देखभाल दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "Comprehensive Health Assessment",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a50325e1"
      },
      {
        "name": "Personalized Wellness Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a50325e2"
      },
      {
        "name": "Holistic Wellness Therapy",
        "description": "चुनी गई वेलनेस, महिला स्वास्थ्य और इम्युनिटी केयर प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a50325e3"
      },
      {
        "name": "Long-Term Wellness Support",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a50325e4"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.409Z",
    "updatedAt": "2026-11-03T09:04:13.150Z"
  },
  {
    "_id": "6a80a32921baf12be03197b7",
    "treatmentId": "infertility",
    "title": "Infertility Treatment",
    "shortDescription": "Our Ayurvedic Infertility Treatment focuses on supporting reproductive health through personalized therapies, herbal care, and lifestyle guidance. By promoting hormonal balance, improving reproductive wellness, and enhancing overall health, we help couples prepare for a healthy conception journey naturally.",
    "description": "Infertility Treatment in Ayurveda takes a holistic approach to supporting reproductive health by addressing the underlying factors that may influence fertility. Our personalized treatment plans combine authentic Ayurvedic therapies, carefully selected herbal formulations, dietary counseling, stress management, and lifestyle modifications to promote hormonal balance, reproductive wellness, and overall physical health. Both male and female fertility factors are carefully evaluated to provide individualized care. Every treatment program is designed according to the individual's body constitution, medical history, and reproductive health goals, offering compassionate support throughout the fertility journey under the guidance of experienced Ayurvedic physicians.",
    "benefits": [
      "Supports Reproductive Wellness",
      "Promotes Hormonal Balance",
      "Improves Overall Health",
      "Supports Healthy Menstrual Cycle",
      "Enhances Male & Female Reproductive Health",
      "Encourages Healthy Lifestyle Habits",
      "Supports Stress Management",
      "Improves Energy & Vitality",
      "Personalized Ayurvedic Care",
      "Holistic Fertility Support",
      "Promotes Natural Body Balance",
      "Supports Healthy Digestion",
      "Enhances Overall Well-Being",
      "Individualized Treatment Programs",
      "Compassionate Patient Care"
    ],
    "process": [
      {
        "name": "Comprehensive Fertility Assessment",
        "description": "Our Ayurvedic physician carefully evaluates your medical history, lifestyle, reproductive health, and body constitution to understand your individual fertility needs and treatment goals.",
        "_id": "6ae9a38dedacd842a50325ff"
      },
      {
        "name": "Personalized Treatment Planning",
        "description": "A customized fertility support program is designed using Ayurvedic therapies, herbal formulations, nutritional guidance, and lifestyle recommendations tailored to your specific health condition.",
        "_id": "6ae9a38dedacd842a5032600"
      },
      {
        "name": "Holistic Fertility Therapy",
        "description": "Selected Ayurvedic treatments and wellness therapies are performed to support reproductive health, promote hormonal balance, improve overall vitality, and encourage natural reproductive wellness.",
        "_id": "6ae9a38dedacd842a5032601"
      },
      {
        "name": "Ongoing Care & Wellness Support",
        "description": "Regular follow-up consultations, dietary guidance, stress management techniques, and lifestyle recommendations are provided to support long-term reproductive health and overall well-being.",
        "_id": "6ae9a38dedacd842a5032602"
      }
    ],
    "duration": "Ongoing",
    "image": "https://images.unsplash.com/photo-1527799822394-46e730304675?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "WELLNESS, WOMEN & IMMUNITY CARE",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Couples Planning Pregnancy",
      "Women with Irregular Menstrual Cycles",
      "Individuals Seeking Fertility Support",
      "Men with Reproductive Health Concerns",
      "Couples Preparing for Conception",
      "Lifestyle-Related Fertility Challenges",
      "Individuals Seeking Holistic Reproductive Care",
      "Women Seeking Hormonal Balance",
      "Couples Seeking Preventive Reproductive Wellness",
      "Individuals Looking for Personalized Fertility Care"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Personalized Fertility Care Plans",
      "Authentic Ayurvedic Therapies",
      "Safe & Confidential Environment",
      "Holistic Reproductive Wellness Approach"
    ],
    "sequence": 31,
    "titleHi": "इनफर्टिलिटी उपचार",
    "shortDescriptionHi": "आयुर्वेदिक फर्टिलिटी केयर प्रजनन स्वास्थ्य को सहारा देने के लिए व्यक्तिगत उपचार, आहार, हर्बल देखभाल और जीवनशैली मार्गदर्शन प्रदान करती है। महिला और पुरुष दोनों से जुड़े कारकों का मूल्यांकन आवश्यक है।",
    "descriptionHi": "आयुर्वेद में प्रजनन स्वास्थ्य की देखभाल के लिए समग्र दृष्टिकोण अपनाया जाता है। व्यक्तिगत योजना में उपयुक्त आयुर्वेदिक उपचार, चयनित हर्बल फॉर्मूलेशन, आहार परामर्श, तनाव प्रबंधन और जीवनशैली में बदलाव शामिल हो सकते हैं। प्रजनन क्षमता पर महिला और पुरुष दोनों से जुड़े कई कारक प्रभाव डाल सकते हैं, इसलिए दोनों की उचित चिकित्सकीय जांच और इतिहास का मूल्यांकन महत्वपूर्ण है। उपचार योजना योग्य चिकित्सक के मार्गदर्शन में बनाई जानी चाहिए और इसे आधुनिक प्रजनन चिकित्सा, जांच या विशेषज्ञ उपचार का विकल्प नहीं समझना चाहिए।",
    "benefitsHi": [
      "सहायता करता है प्रजनन संबंधी स्वास्थ्य",
      "बढ़ावा देता है हार्मोनल संतुलन",
      "सुधारता है समग्र स्वास्थ्य",
      "सहायता करता है स्वस्थ मासिक धर्म संबंधी चक्र",
      "बढ़ाता है पुरुष & महिला प्रजनन संबंधी स्वास्थ्य",
      "प्रोत्साहित करता है स्वस्थ जीवनशैली आदतें",
      "सहायता करता है तनाव प्रबंधन",
      "सुधारता है ऊर्जा & जीवनशक्ति",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "समग्र प्रजनन क्षमता सहयोग",
      "बढ़ावा देता है प्राकृतिक शरीर संतुलन",
      "सहायता करता है स्वस्थ पाचन",
      "बढ़ाता है समग्र कल्याण",
      "व्यक्तिगत उपचार कार्यक्रम",
      "संवेदनशील Patient देखभाल"
    ],
    "whoCanBenefitHi": [
      "दंपति योजना बना रहे गर्भावस्था",
      "महिला के साथ अनियमित मासिक धर्म संबंधी चक्र",
      "व्यक्ति चाहने वाले प्रजनन क्षमता सहयोग",
      "पुरुष के साथ प्रजनन संबंधी स्वास्थ्य समस्याएं",
      "दंपति Preparing के लिए गर्भधारण",
      "जीवनशैली-से संबंधित प्रजनन क्षमता चुनौतियां",
      "व्यक्ति चाहने वाले समग्र प्रजनन संबंधी देखभाल",
      "महिला चाहने वाले हार्मोनल संतुलन",
      "दंपति चाहने वाले निवारक प्रजनन संबंधी स्वास्थ्य",
      "व्यक्ति चाहने वाले के लिए व्यक्तिगत प्रजनन क्षमता देखभाल"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "व्यक्तिगत प्रजनन क्षमता देखभाल योजनाएं",
      "प्रामाणिक आयुर्वेदिक चिकित्साएं",
      "सुरक्षित & गोपनीय वातावरण",
      "समग्र प्रजनन संबंधी स्वास्थ्य दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "Comprehensive Fertility Assessment",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a50325fb"
      },
      {
        "name": "Personalized Treatment Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a50325fc"
      },
      {
        "name": "Holistic Fertility Therapy",
        "description": "चुनी गई इनफर्टिलिटी उपचार प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a50325fd"
      },
      {
        "name": "Ongoing Care & Wellness Support",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a50325fe"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.409Z",
    "updatedAt": "2026-11-03T09:04:13.178Z"
  },
  {
    "_id": "6a80a32921baf12be03197b3",
    "treatmentId": "pcod",
    "title": "PCOD / PCOS Treatment",
    "shortDescription": "Our Ayurvedic PCOD / PCOS Treatment focuses on supporting hormonal balance, promoting menstrual wellness, and improving overall reproductive health through personalized therapies, herbal care, nutrition, and lifestyle guidance. Every treatment plan is designed according to your individual health needs and wellness goals.",
    "description": "PCOD / PCOS Treatment in Ayurveda follows a holistic approach that focuses on supporting hormonal balance, improving metabolic health, and promoting reproductive wellness. Our personalized treatment programs combine authentic Ayurvedic therapies, herbal formulations, dietary counseling, stress management, and healthy lifestyle practices to address the individual needs of each patient. The program aims to support regular menstrual health, improve overall vitality, encourage healthy weight management, and enhance long-term well-being. Every treatment plan is carefully customized according to your body constitution, symptoms, and medical history under the guidance of experienced Ayurvedic physicians.",
    "benefits": [
      "Supports Hormonal Balance",
      "Promotes Menstrual Wellness",
      "Improves Reproductive Health",
      "Supports Healthy Metabolism",
      "Encourages Healthy Weight Management",
      "Improves Digestive Health",
      "Supports Stress Management",
      "Enhances Energy Levels",
      "Promotes Healthy Lifestyle Habits",
      "Supports Skin & Hair Wellness",
      "Encourages Better Sleep",
      "Personalized Ayurvedic Care",
      "Holistic Women's Health Approach",
      "Long-Term Wellness Support",
      "Individualized Treatment Programs"
    ],
    "process": [
      {
        "name": "Women's Health Assessment",
        "description": "Our Ayurvedic physician evaluates your menstrual history, hormonal health, lifestyle, symptoms, and body constitution to create a personalized treatment strategy.",
        "_id": "6ae9a38dedacd842a5032619"
      },
      {
        "name": "Personalized Treatment Planning",
        "description": "A customized wellness program is developed using Ayurvedic therapies, herbal formulations, nutritional guidance, and lifestyle recommendations tailored to your individual health needs.",
        "_id": "6ae9a38dedacd842a503261a"
      },
      {
        "name": "Holistic PCOD / PCOS Therapy",
        "description": "Selected Ayurvedic treatments and supportive therapies are performed to promote hormonal balance, improve metabolic wellness, support reproductive health, and enhance overall well-being.",
        "_id": "6ae9a38dedacd842a503261b"
      },
      {
        "name": "Long-Term Wellness Support",
        "description": "Regular follow-up consultations, dietary guidance, healthy lifestyle practices, and ongoing Ayurvedic support help maintain hormonal wellness and long-term health.",
        "_id": "6ae9a38dedacd842a503261c"
      }
    ],
    "duration": "Ongoing",
    "image": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "WELLNESS, WOMEN & IMMUNITY CARE",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Women with PCOD or PCOS",
      "Irregular Menstrual Cycles",
      "Hormonal Imbalance",
      "Weight Management Challenges",
      "Acne Associated with PCOS",
      "Excess Hair Growth Related to PCOS",
      "Women Planning Pregnancy",
      "Lifestyle-Related Health Concerns",
      "Women Seeking Holistic Hormonal Care",
      "Individuals Seeking Preventive Women's Wellness"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Personalized PCOD / PCOS Care Plans",
      "Authentic Ayurvedic Therapies",
      "Safe & Hygienic Environment",
      "Holistic Women's Wellness Approach"
    ],
    "sequence": 32,
    "titleHi": "पीसीओडी / पीसीओएस उपचार",
    "shortDescriptionHi": "पीसीओडी/पीसीओएस के लिए आयुर्वेदिक देखभाल का उद्देश्य व्यक्तिगत उपचार, पोषण और जीवनशैली मार्गदर्शन के माध्यम से मासिक धर्म तथा प्रजनन स्वास्थ्य को सहारा देना है।",
    "descriptionHi": "पीसीओडी/पीसीओएस के लिए आयुर्वेदिक देखभाल में हार्मोनल और मेटाबॉलिक स्वास्थ्य, मासिक धर्म की नियमितता तथा प्रजनन स्वास्थ्य को ध्यान में रखकर व्यक्तिगत योजना बनाई जाती है। इसमें उपयुक्त आयुर्वेदिक उपचार, हर्बल फॉर्मूलेशन, आहार परामर्श, तनाव प्रबंधन और स्वस्थ जीवनशैली शामिल हो सकते हैं। उपचार योजना लक्षणों, स्वास्थ्य इतिहास और व्यक्ति की आवश्यकताओं के अनुसार तैयार की जाती है। पीसीओएस के निदान और निगरानी के लिए स्त्रीरोग विशेषज्ञ की सलाह तथा आवश्यक आधुनिक जांच भी महत्वपूर्ण हैं।",
    "benefitsHi": [
      "सहायता करता है हार्मोनल संतुलन",
      "बढ़ावा देता है मासिक धर्म संबंधी स्वास्थ्य",
      "सुधारता है प्रजनन संबंधी स्वास्थ्य",
      "सहायता करता है स्वस्थ चयापचय",
      "प्रोत्साहित करता है स्वस्थ वजन प्रबंधन",
      "सुधारता है पाचन संबंधी स्वास्थ्य",
      "सहायता करता है तनाव प्रबंधन",
      "बढ़ाता है ऊर्जा स्तर",
      "बढ़ावा देता है स्वस्थ जीवनशैली आदतें",
      "सहायता करता है त्वचा & बाल स्वास्थ्य",
      "प्रोत्साहित करता है बेहतर नींद",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "समग्र महिला's स्वास्थ्य दृष्टिकोण",
      "दीर्घकालिक स्वास्थ्य सहयोग",
      "व्यक्तिगत उपचार कार्यक्रम"
    ],
    "whoCanBenefitHi": [
      "महिला के साथ पीसीओडी या पीसीओएस",
      "अनियमित मासिक धर्म संबंधी चक्र",
      "हार्मोनल असंतुलन",
      "वजन प्रबंधन चुनौतियां",
      "मुंहासे से जुड़ा के साथ पीसीओएस",
      "अधिक बाल वृद्धि से संबंधित के लिए पीसीओएस",
      "महिला योजना बना रहे गर्भावस्था",
      "जीवनशैली-से संबंधित स्वास्थ्य समस्याएं",
      "महिला चाहने वाले समग्र हार्मोनल देखभाल",
      "व्यक्ति चाहने वाले निवारक महिला's स्वास्थ्य"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "व्यक्तिगत पीसीओडी / पीसीओएस देखभाल योजनाएं",
      "प्रामाणिक आयुर्वेदिक चिकित्साएं",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र महिला's स्वास्थ्य दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "Women's Health Assessment",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a5032615"
      },
      {
        "name": "Personalized Treatment Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a5032616"
      },
      {
        "name": "Holistic PCOD / PCOS Therapy",
        "description": "चुनी गई पीसीओडी / पीसीओएस उपचार प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a5032617"
      },
      {
        "name": "Long-Term Wellness Support",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a5032618"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.409Z",
    "updatedAt": "2026-11-03T09:04:13.195Z"
  },
  {
    "_id": "6a80a32921baf12be03197bb",
    "treatmentId": "garbhasanskar",
    "title": "Garbhasanskar (Pregnancy Care)",
    "shortDescription": "Garbhasanskar is a holistic Ayurvedic pregnancy wellness program designed to support the health of both mother and baby through personalized nutrition, Ayurvedic care, yoga, meditation, and positive lifestyle practices. The program promotes a healthy, balanced, and joyful pregnancy journey.",
    "description": "Garbhasanskar is a traditional Ayurvedic prenatal wellness program that focuses on supporting maternal health and fetal well-being throughout pregnancy. Based on classical Ayurvedic principles, the program combines personalized dietary guidance, safe Ayurvedic therapies where appropriate, yoga, meditation, relaxation techniques, music therapy, and healthy lifestyle practices to promote physical, mental, and emotional wellness during pregnancy. Every care plan is customized according to the mother's stage of pregnancy, body constitution, and individual health needs. Our experienced Ayurvedic physicians provide compassionate guidance to help mothers enjoy a healthy, comfortable, and confident pregnancy journey.",
    "benefits": [
      "Supports Maternal Wellness",
      "Promotes Healthy Pregnancy",
      "Encourages Balanced Nutrition",
      "Supports Emotional Well-Being",
      "Promotes Relaxation",
      "Helps Manage Pregnancy-Related Stress",
      "Encourages Healthy Lifestyle Habits",
      "Supports Better Sleep",
      "Promotes Mind-Body Balance",
      "Personalized Pregnancy Care",
      "Holistic Prenatal Wellness",
      "Supports Overall Maternal Vitality",
      "Encourages Positive Pregnancy Experience",
      "Traditional Ayurvedic Pregnancy Care",
      "Compassionate Maternal Support"
    ],
    "process": [
      {
        "name": "Prenatal Health Assessment",
        "description": "A comprehensive consultation is conducted to understand your pregnancy stage, health status, lifestyle, nutritional needs, and wellness goals before creating a personalized care plan.",
        "_id": "6ae9a38dedacd842a5032633"
      },
      {
        "name": "Personalized Wellness Planning",
        "description": "A customized pregnancy wellness program is developed with appropriate Ayurvedic guidance, nutrition planning, relaxation techniques, yoga recommendations, and healthy lifestyle practices.",
        "_id": "6ae9a38dedacd842a5032634"
      },
      {
        "name": "Holistic Pregnancy Care",
        "description": "Personalized prenatal wellness sessions, safe Ayurvedic support where appropriate, guided relaxation, meditation, and healthy daily routines help promote comfort and overall maternal well-being.",
        "_id": "6ae9a38dedacd842a5032635"
      },
      {
        "name": "Ongoing Pregnancy Support",
        "description": "Regular follow-up consultations, nutritional guidance, emotional wellness support, and lifestyle recommendations are provided throughout pregnancy to encourage long- term maternal health.",
        "_id": "6ae9a38dedacd842a5032636"
      }
    ],
    "duration": "Ongoing",
    "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "WELLNESS, WOMEN & IMMUNITY CARE",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Expectant Mothers",
      "Women Planning a Healthy Pregnancy Journey",
      "First-Time Mothers",
      "Women Seeking Holistic Prenatal Care",
      "Mothers Looking for Stress Management During Pregnancy",
      "Women Seeking Nutritional Guidance",
      "Women Interested in Ayurvedic Pregnancy Care",
      "Families Seeking Pregnancy Wellness Support",
      "Mothers Seeking Emotional Well-Being",
      "Women Looking for Personalized Prenatal Care"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Personalized Pregnancy Care Plans",
      "Authentic Ayurvedic Wellness Programs",
      "Safe & Supportive Environment",
      "Holistic Maternal Care"
    ],
    "sequence": 33,
    "titleHi": "गर्भसंस्कार (गर्भावस्था देखभाल)",
    "shortDescriptionHi": "गर्भसंस्कार गर्भावस्था के दौरान मां और शिशु के स्वास्थ्य को सहारा देने वाला पारंपरिक कार्यक्रम है, जिसमें पोषण, सुरक्षित योग, ध्यान और सकारात्मक जीवनशैली मार्गदर्शन शामिल हो सकते हैं।",
    "descriptionHi": "गर्भसंस्कार आयुर्वेद पर आधारित पारंपरिक प्रसवपूर्व वेलनेस कार्यक्रम है, जिसका उद्देश्य गर्भावस्था के दौरान मां के स्वास्थ्य और भ्रूण के कल्याण को सहारा देना है। इसमें व्यक्तिगत आहार मार्गदर्शन, उपयुक्त होने पर सुरक्षित आयुर्वेदिक देखभाल, चिकित्सकीय अनुमति के अनुसार योग, ध्यान, विश्राम तकनीक, संगीत और स्वस्थ दिनचर्या शामिल हो सकती है। प्रत्येक योजना गर्भावस्था के चरण, मां की स्वास्थ्य स्थिति और व्यक्तिगत आवश्यकताओं के अनुसार बनाई जाती है। गर्भावस्था में किसी भी औषधि या उपचार से पहले प्रसूति विशेषज्ञ की सलाह आवश्यक है।",
    "benefitsHi": [
      "सहायता करता है मातृ स्वास्थ्य",
      "बढ़ावा देता है स्वस्थ गर्भावस्था",
      "प्रोत्साहित करता है संतुलित पोषण",
      "सहायता करता है भावनात्मक कल्याण",
      "विश्राम को बढ़ावा",
      "मदद करता है प्रबंधन करना गर्भावस्था-से संबंधित तनाव",
      "प्रोत्साहित करता है स्वस्थ जीवनशैली आदतें",
      "सहायता करता है बेहतर नींद",
      "बढ़ावा देता है मन-शरीर संतुलन",
      "व्यक्तिगत गर्भावस्था देखभाल",
      "समग्र प्रसवपूर्व स्वास्थ्य",
      "सहायता करता है समग्र मातृ जीवनशक्ति",
      "प्रोत्साहित करता है Positive गर्भावस्था अनुभव",
      "पारंपरिक आयुर्वेदिक गर्भावस्था देखभाल",
      "संवेदनशील मातृ सहयोग"
    ],
    "whoCanBenefitHi": [
      "गर्भवती माताएं",
      "महिला योजना बना रहे a स्वस्थ गर्भावस्था यात्रा",
      "पहली बार माताएं",
      "महिला चाहने वाले समग्र प्रसवपूर्व देखभाल",
      "माताएं चाहने वाले के लिए तनाव प्रबंधन के दौरान गर्भावस्था",
      "महिला चाहने वाले पोषण संबंधी मार्गदर्शन",
      "महिला इच्छुक में आयुर्वेदिक गर्भावस्था देखभाल",
      "परिवार चाहने वाले गर्भावस्था स्वास्थ्य सहयोग",
      "माताएं चाहने वाले भावनात्मक कल्याण",
      "महिला चाहने वाले के लिए व्यक्तिगत प्रसवपूर्व देखभाल"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "व्यक्तिगत गर्भावस्था देखभाल योजनाएं",
      "प्रामाणिक आयुर्वेदिक स्वास्थ्य कार्यक्रम",
      "सुरक्षित & सहायक वातावरण",
      "समग्र मातृ देखभाल"
    ],
    "processHi": [
      {
        "name": "Prenatal Health Assessment",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a503262f"
      },
      {
        "name": "Personalized Wellness Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a5032630"
      },
      {
        "name": "Holistic Pregnancy Care",
        "description": "चुनी गई गर्भसंस्कार (गर्भावस्था देखभाल) प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a5032631"
      },
      {
        "name": "Ongoing Pregnancy Support",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a5032632"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.410Z",
    "updatedAt": "2026-11-03T09:04:13.212Z"
  },
  {
    "_id": "6a80a32921baf12be03197bf",
    "treatmentId": "suvarnaprashan",
    "title": "Suvarnaprashan (Child Immunity)",
    "shortDescription": "Suvarnaprashan is a traditional Ayurvedic wellness practice for children that combines specially prepared herbal formulations with Swarna Bhasma (purified gold ash) under expert supervision. It is designed to support natural immunity, healthy growth, cognitive development, and overall well-being as part of a balanced lifestyle.",
    "description": "Suvarnaprashan is a classical Ayurvedic pediatric wellness therapy described in traditional Ayurvedic texts. The therapy involves administering a carefully prepared formulation containing Swarna Bhasma along with selected herbs under the supervision of a qualified Ayurvedic physician. It is traditionally used to support a child's natural immunity, healthy digestion, growth, cognitive development, and overall vitality. Every child receives personalized guidance based on age, health condition, and individual needs. Along with proper nutrition, healthy lifestyle habits, and regular medical care, Suvarnaprashan can be incorporated into a comprehensive child wellness program to encourage healthy physical and mental development.",
    "benefits": [
      "Supports Natural Immunity",
      "Promotes Healthy Growth & Development",
      "Encourages Healthy Digestion",
      "Supports Cognitive Development",
      "Helps Improve Appetite",
      "Promotes Overall Vitality",
      "Supports Healthy Memory & Learning",
      "Encourages Better Physical Development",
      "Supports General Wellness",
      "Promotes Balanced Growth",
      "Personalized Ayurvedic Child Care",
      "Traditional Ayurvedic Wellness Practice",
      "Holistic Child Health Support",
      "Safe Administration Under Professional Guidance",
      "Long-Term Wellness Approach"
    ],
    "process": [
      {
        "name": "Child Health Assessment",
        "description": "Our Ayurvedic physician carefully evaluates your child's age, growth, health history, and overall wellness before recommending a personalized Suvarnaprashan program.",
        "_id": "6ae9a38dedacd842a503264d"
      },
      {
        "name": "Personalized Wellness Planning",
        "description": "An individualized wellness plan is created based on your child's developmental stage, nutritional needs, and overall health to ensure safe and appropriate care.",
        "_id": "6ae9a38dedacd842a503264e"
      },
      {
        "name": "Suvarnaprashan Administration",
        "description": "The specially prepared Suvarnaprashan formulation is administered under expert supervision using traditional Ayurvedic principles to support overall child wellness.",
        "_id": "6ae9a38dedacd842a503264f"
      },
      {
        "name": "Growth & Wellness Guidance",
        "description": "Parents receive personalized advice on nutrition, daily routines, seasonal care, and healthy lifestyle practices to support their child's long-term growth and well- being.",
        "_id": "6ae9a38dedacd842a5032650"
      }
    ],
    "duration": "10–15 min",
    "image": "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "WELLNESS, WOMEN & IMMUNITY CARE",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Infants",
      "Toddlers",
      "Preschool Children",
      "School-Age Children",
      "Children with Low Appetite",
      "Children Seeking Immune Support",
      "Growing Children",
      "Parents Seeking Preventive Child Wellness",
      "Children Requiring Holistic Health Support",
      "Children Under Ayurvedic Supervision"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Authentic Suvarnaprashan Formulations",
      "Personalized Child Wellness Programs",
      "Safe & Child-Friendly Environment",
      "Holistic Pediatric Care"
    ],
    "sequence": 34,
    "titleHi": "सुवर्णप्राशन (बाल स्वास्थ्य और प्रतिरक्षा)",
    "shortDescriptionHi": "सुवर्णप्राशन बच्चों के लिए वर्णित पारंपरिक आयुर्वेदिक अभ्यास है, जिसमें स्वर्ण भस्म और चयनित जड़ी-बूटियों से तैयार फॉर्मूलेशन योग्य चिकित्सक की देखरेख में दिया जाता है।",
    "descriptionHi": "सुवर्णप्राशन पारंपरिक आयुर्वेदिक बाल-स्वास्थ्य अभ्यास है, जिसका वर्णन आयुर्वेदिक ग्रंथों में मिलता है। इसमें स्वर्ण भस्म और चुनी हुई जड़ी-बूटियों से तैयार फॉर्मूलेशन योग्य आयुर्वेदिक चिकित्सक की निगरानी में दिया जाता है। सामग्री की गुणवत्ता, शुद्धता, मात्रा और बच्चे की आयु तथा स्वास्थ्य स्थिति का आकलन अत्यंत महत्वपूर्ण है। इसे संतुलित पोषण, टीकाकरण, नियमित बाल-चिकित्सा और स्वस्थ दिनचर्या का विकल्प नहीं माना जाना चाहिए। माता-पिता को संभावित लाभ, सीमाओं और सुरक्षा संबंधी जानकारी चिकित्सक से प्राप्त करनी चाहिए।",
    "benefitsHi": [
      "सहायता करता है प्राकृतिक रोग-प्रतिरोधक क्षमता",
      "बढ़ावा देता है स्वस्थ वृद्धि & विकास",
      "प्रोत्साहित करता है स्वस्थ पाचन",
      "सहायता करता है संज्ञानात्मक विकास",
      "मदद करता है सुधारना भूख",
      "बढ़ावा देता है समग्र जीवनशक्ति",
      "सहायता करता है स्वस्थ स्मरण शक्ति & सीखना",
      "प्रोत्साहित करता है बेहतर शारीरिक विकास",
      "सहायता करता है सामान्य स्वास्थ्य",
      "बढ़ावा देता है संतुलित वृद्धि",
      "व्यक्तिगत आयुर्वेदिक बच्चे देखभाल",
      "पारंपरिक आयुर्वेदिक स्वास्थ्य Practice",
      "समग्र बच्चे स्वास्थ्य सहयोग",
      "सुरक्षित प्रदान करना के अंतर्गत पेशेवर मार्गदर्शन",
      "दीर्घकालिक स्वास्थ्य दृष्टिकोण"
    ],
    "whoCanBenefitHi": [
      "शिशु",
      "Toddlers",
      "Preschool बच्चे",
      "School-आयु बच्चे",
      "बच्चे के साथ कम भूख",
      "बच्चे चाहने वाले प्रतिरक्षा सहयोग",
      "बढ़ते हुए बच्चे",
      "माता-पिता चाहने वाले निवारक बच्चे स्वास्थ्य",
      "बच्चे Requiring समग्र स्वास्थ्य सहयोग",
      "बच्चे के अंतर्गत आयुर्वेदिक Supervision"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "प्रामाणिक सुवर्णप्राशन फॉर्मूलेशन",
      "व्यक्तिगत बच्चे स्वास्थ्य कार्यक्रम",
      "सुरक्षित & बच्चों के अनुकूल वातावरण",
      "समग्र बाल-चिकित्सा संबंधी देखभाल"
    ],
    "processHi": [
      {
        "name": "Child Health Assessment",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a5032649"
      },
      {
        "name": "Personalized Wellness Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a503264a"
      },
      {
        "name": "Suvarnaprashan Administration",
        "description": "चुनी गई सुवर्णप्राशन (बाल स्वास्थ्य और प्रतिरक्षा) प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a503264b"
      },
      {
        "name": "Growth & Wellness Guidance",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a503264c"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.410Z",
    "updatedAt": "2026-11-03T09:04:13.226Z"
  },
  {
    "_id": "6a80a32921baf12be03197c3",
    "treatmentId": "stress-mgmt",
    "title": "Stress Management",
    "shortDescription": "Our Stress Management program combines authentic Ayurvedic therapies, relaxation techniques, herbal support, yoga, meditation, and lifestyle guidance to help you manage everyday stress, improve emotional well-being, and restore balance between the mind and body.",
    "description": "Stress Management in Ayurveda focuses on restoring harmony between the mind and body through a personalized, holistic approach. Our program combines traditional Ayurvedic therapies, herbal formulations, yoga, meditation, breathing techniques, nutritional guidance, and healthy lifestyle practices to promote relaxation and emotional well-being. These therapies help calm the nervous system, improve sleep quality, enhance mental clarity, and support resilience to everyday stress. Every treatment plan is carefully customized according to your body constitution, lifestyle, and wellness goals, providing a safe, natural, and comprehensive approach to long-term mental and physical wellness.",
    "benefits": [
      "Promotes Deep Relaxation",
      "Helps Manage Everyday Stress",
      "Supports Emotional Well- Being",
      "Improves Sleep Quality",
      "Encourages Mental Clarity",
      "Promotes Inner Calm",
      "Supports Nervous System Wellness",
      "Enhances Energy Levels",
      "Helps Reduce Mental Fatigue",
      "Improves Focus & Concentration",
      "Encourages Mind-Body Balance",
      "Supports Healthy Lifestyle Habits",
      "Personalized Ayurvedic Care",
      "Holistic Wellness Approach",
      "Long-Term Stress Management Support"
    ],
    "process": [
      {
        "name": "Wellness Consultation",
        "description": "Our Ayurvedic physician evaluates your lifestyle, stress levels, sleep patterns, and overall health to create a personalized stress management plan.",
        "_id": "6ae9a38dedacd842a5032667"
      },
      {
        "name": "Personalized Wellness Planning",
        "description": "A customized program is developed using Ayurvedic therapies, herbal support, yoga, meditation, breathing techniques, and lifestyle guidance tailored to your individual needs.",
        "_id": "6ae9a38dedacd842a5032668"
      },
      {
        "name": "Holistic Stress Relief Therapy",
        "description": "Selected Ayurvedic treatments and relaxation therapies are performed to promote mental calmness, physical relaxation, emotional balance, and overall well-being.",
        "_id": "6ae9a38dedacd842a5032669"
      },
      {
        "name": "Long-Term Wellness Support",
        "description": "Regular follow-up consultations, healthy lifestyle recommendations, relaxation practices, and ongoing wellness guidance help maintain long-term emotional and physical balance.",
        "_id": "6ae9a38dedacd842a503266a"
      }
    ],
    "duration": "60 min",
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "WELLNESS, WOMEN & IMMUNITY CARE",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Working Professionals",
      "Students",
      "Busy Parents",
      "Individuals with High Stress Levels",
      "Mental Fatigue",
      "Lifestyle Imbalance",
      "Sleep Disturbances",
      "Individuals Seeking Relaxation",
      "Wellness Enthusiasts",
      "People Seeking Holistic Mental Wellness"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Personalized Stress Management Programs",
      "Authentic Ayurvedic Therapies",
      "Safe & Peaceful Environment",
      "Holistic Mind & Body Care"
    ],
    "sequence": 35,
    "titleHi": "तनाव प्रबंधन",
    "shortDescriptionHi": "तनाव प्रबंधन कार्यक्रम आयुर्वेदिक उपचार, विश्राम तकनीक, योग, ध्यान और जीवनशैली मार्गदर्शन के माध्यम से मानसिक शांति तथा भावनात्मक स्वास्थ्य को सहारा देता है।",
    "descriptionHi": "आयुर्वेद में तनाव प्रबंधन का उद्देश्य मन और शरीर के बीच संतुलन को बढ़ावा देना है। व्यक्तिगत कार्यक्रम में उपयुक्त पारंपरिक उपचार, हर्बल मार्गदर्शन, योग, ध्यान, श्वास अभ्यास, पोषण और स्वस्थ दिनचर्या शामिल हो सकती है। ये उपाय विश्राम, नींद की गुणवत्ता, मानसिक स्पष्टता और रोजमर्रा के तनाव से निपटने की क्षमता को सहारा दे सकते हैं। योजना व्यक्ति की जीवनशैली, स्वास्थ्य स्थिति और आवश्यकताओं के अनुसार बनाई जाती है। गंभीर या लगातार मानसिक स्वास्थ्य लक्षणों में योग्य मानसिक स्वास्थ्य विशेषज्ञ से सहायता लेना आवश्यक है।",
    "benefitsHi": [
      "बढ़ावा देता है गहरा विश्राम",
      "मदद करता है प्रबंधन करना रोजमर्रा का तनाव",
      "सहायता करता है भावनात्मक Well- होना",
      "सुधारता है नींद गुणवत्ता",
      "प्रोत्साहित करता है मानसिक स्पष्टता",
      "बढ़ावा देता है आंतरिक शांति",
      "सहायता करता है तंत्रिका तंत्र स्वास्थ्य",
      "बढ़ाता है ऊर्जा स्तर",
      "मदद करता है कम करना मानसिक थकान",
      "सुधारता है ध्यान & एकाग्रता",
      "प्रोत्साहित करता है मन-शरीर संतुलन",
      "सहायता करता है स्वस्थ जीवनशैली आदतें",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "समग्र स्वास्थ्य-केंद्रित दृष्टिकोण",
      "दीर्घकालिक तनाव प्रबंधन सहयोग"
    ],
    "whoCanBenefitHi": [
      "Working पेशेवर",
      "विद्यार्थी",
      "व्यस्त माता-पिता",
      "व्यक्ति के साथ उच्च तनाव स्तर",
      "मानसिक थकान",
      "जीवनशैली असंतुलन",
      "नींद गड़बड़ी",
      "व्यक्ति चाहने वाले विश्राम",
      "स्वास्थ्य रुचि रखने वाले",
      "लोग चाहने वाले समग्र मानसिक स्वास्थ्य"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "व्यक्तिगत तनाव प्रबंधन कार्यक्रम",
      "प्रामाणिक आयुर्वेदिक चिकित्साएं",
      "सुरक्षित & शांत वातावरण",
      "समग्र मन & शरीर देखभाल"
    ],
    "processHi": [
      {
        "name": "Wellness Consultation",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a5032663"
      },
      {
        "name": "Personalized Wellness Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a5032664"
      },
      {
        "name": "Holistic Stress Relief Therapy",
        "description": "चुनी गई तनाव प्रबंधन प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a5032665"
      },
      {
        "name": "Long-Term Wellness Support",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a5032666"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.410Z",
    "updatedAt": "2026-11-03T09:04:13.237Z"
  },
  {
    "_id": "6a80a32921baf12be03197c7",
    "treatmentId": "rejuvenation",
    "title": "Rejuvenation Therapy",
    "shortDescription": "Our Rejuvenation Therapy is a holistic Ayurvedic wellness program designed to restore vitality, improve energy levels, and promote healthy aging through personalized therapies, herbal formulations, and lifestyle guidance. The program helps revitalize both body and mind while supporting long-term health and overall well-being.",
    "description": "Rejuvenation Therapy, also known as Rasayana Chikitsa in Ayurveda, is a comprehensive wellness program focused on restoring the body's natural vitality and enhancing overall quality of life. The therapy combines authentic Ayurvedic treatments, herbal formulations, therapeutic massages, detoxification procedures, nutritional guidance, and healthy lifestyle practices to nourish body tissues, improve immunity, promote healthy aging, and support physical as well as mental wellness. Every treatment plan is carefully personalized according to your body constitution, health condition, and wellness goals, providing a safe, holistic, and sustainable approach to long-term vitality and rejuvenation.",
    "benefits": [
      "Promotes Natural Rejuvenation",
      "Boosts Energy Levels",
      "Supports Healthy Aging",
      "Strengthens Natural Immunity",
      "Improves Physical Vitality",
      "Enhances Mental Well- Being",
      "Promotes Better Sleep",
      "Supports Healthy Digestion",
      "Improves Blood Circulation",
      "Nourishes Body Tissues",
      "Encourages Stress Relief",
      "Promotes Healthy Skin & Hair",
      "Personalized Ayurvedic Care",
      "Holistic Wellness Approach",
      "Long-Term Health & Vitality Support"
    ],
    "process": [
      {
        "name": "Comprehensive Wellness Assessment",
        "description": "Our Ayurvedic physician evaluates your body constitution, lifestyle, overall health, and wellness goals to develop a personalized rejuvenation program.",
        "_id": "6ae9a38dedacd842a5032681"
      },
      {
        "name": "Personalized Therapy Planning",
        "description": "A customized treatment plan is created using Ayurvedic therapies, herbal formulations, nutritional guidance, and lifestyle recommendations tailored to your individual needs.",
        "_id": "6ae9a38dedacd842a5032682"
      },
      {
        "name": "Rejuvenation Therapy",
        "description": "Selected Ayurvedic therapies, herbal treatments, and wellness procedures are performed to nourish the body, restore vitality, improve overall wellness, and promote healthy aging.",
        "_id": "6ae9a38dedacd842a5032683"
      },
      {
        "name": "Long-Term Wellness Support",
        "description": "Regular follow-up consultations, personalized dietary advice, healthy lifestyle practices, and ongoing Ayurvedic guidance help maintain long-term vitality and overall well-being.",
        "_id": "6ae9a38dedacd842a5032684"
      }
    ],
    "duration": "45–90 min",
    "image": "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "WELLNESS, WOMEN & IMMUNITY CARE",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Individuals Experiencing Fatigue",
      "Busy Professionals",
      "Senior Adults",
      "Stress & Lifestyle Imbalance",
      "Individuals Recovering from Physical Exhaustion",
      "People Seeking Healthy Aging Support",
      "Individuals Looking to Improve Vitality",
      "Wellness Enthusiasts",
      "Individuals Seeking Preventive Healthcare",
      "People Interested in Holistic Wellness"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Personalized Rejuvenation Programs",
      "Authentic Ayurvedic Therapies",
      "Safe & Hygienic Environment",
      "Holistic Wellness Approach"
    ],
    "sequence": 36,
    "titleHi": "रीजुवेनेशन थेरेपी",
    "shortDescriptionHi": "रसायन या रीजुवेनेशन थेरेपी एक समग्र आयुर्वेदिक वेलनेस कार्यक्रम है, जिसका उद्देश्य ऊर्जा, जीवनशक्ति और स्वस्थ उम्र बढ़ने की प्रक्रिया को सहारा देना है।",
    "descriptionHi": "रीजुवेनेशन थेरेपी, जिसे आयुर्वेद में रसायन चिकित्सा भी कहा जाता है, शरीर की प्राकृतिक जीवनशक्ति और समग्र स्वास्थ्य को सहारा देने वाली पारंपरिक वेलनेस पद्धति है। इसमें व्यक्ति की आवश्यकता के अनुसार आयुर्वेदिक उपचार, हर्बल फॉर्मूलेशन, चिकित्सीय मालिश, उपयुक्त शोधन प्रक्रियाएं, पोषण मार्गदर्शन और स्वस्थ जीवनशैली शामिल हो सकती है। इसका उद्देश्य शरीर और मन के स्वास्थ्य, ऊर्जा और स्वस्थ उम्र बढ़ने को बढ़ावा देना है। प्रत्येक योजना व्यक्ति की प्रकृति, स्वास्थ्य स्थिति और लक्ष्यों के अनुसार बनाई जाती है।",
    "benefitsHi": [
      "बढ़ावा देता है प्राकृतिक कायाकल्प",
      "बढ़ाता है ऊर्जा स्तर",
      "सहायता करता है स्वस्थ उम्र बढ़ने",
      "मजबूत करता है प्राकृतिक रोग-प्रतिरोधक क्षमता",
      "सुधारता है शारीरिक जीवनशक्ति",
      "बढ़ाता है मानसिक Well- होना",
      "बढ़ावा देता है बेहतर नींद",
      "सहायता करता है स्वस्थ पाचन",
      "रक्त संचार में सुधार",
      "पोषण देता है शरीर ऊतक",
      "प्रोत्साहित करता है तनाव राहत",
      "बढ़ावा देता है स्वस्थ त्वचा & बाल",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "समग्र स्वास्थ्य-केंद्रित दृष्टिकोण",
      "दीर्घकालिक स्वास्थ्य & जीवनशक्ति सहयोग"
    ],
    "whoCanBenefitHi": [
      "व्यक्ति अनुभव कर रहे थकान",
      "व्यस्त पेशेवर",
      "वरिष्ठ वयस्क",
      "तनाव & जीवनशैली असंतुलन",
      "व्यक्ति Recovering से शारीरिक अत्यधिक थकान",
      "लोग चाहने वाले स्वस्थ उम्र बढ़ने सहयोग",
      "व्यक्ति चाहने वाले के लिए सुधारना जीवनशक्ति",
      "स्वास्थ्य रुचि रखने वाले",
      "व्यक्ति चाहने वाले निवारक स्वास्थ्य देखभाल",
      "लोग इच्छुक में समग्र स्वास्थ्य"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "व्यक्तिगत कायाकल्प कार्यक्रम",
      "प्रामाणिक आयुर्वेदिक चिकित्साएं",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र स्वास्थ्य-केंद्रित दृष्टिकोण"
    ],
    "processHi": [
      {
        "name": "Comprehensive Wellness Assessment",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a503267d"
      },
      {
        "name": "Personalized Therapy Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a503267e"
      },
      {
        "name": "Rejuvenation Therapy",
        "description": "चुनी गई रीजुवेनेशन थेरेपी प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a503267f"
      },
      {
        "name": "Long-Term Wellness Support",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a5032680"
      }
    ],
    "createdAt": "2026-08-15T17:34:33.410Z",
    "updatedAt": "2026-11-03T09:04:13.250Z"
  },
  {
    "_id": "6ae9971f4fbd13c8c553f0df",
    "treatmentId": "agnikarma",
    "benefits": [
      "Supports Pain Management",
      "Improves Joint Mobility",
      "Helps Reduce Muscle Stiffness",
      "Promotes Healthy Circulation",
      "Supports Natural Healing Response",
      "Encourages Tissue Recovery",
      "Improves Functional Movement",
      "Localized Ayurvedic Therapy",
      "Minimally Invasive Procedure",
      "Personalized Treatment Planning",
      "Traditional Ayurvedic Para- Surgical Technique",
      "Supports Musculoskeletal Wellness",
      "Safe Physician-Supervised Procedure",
      "Holistic Pain Care",
      "Promotes Long-Term Joint Wellness"
    ],
    "benefitsHi": [
      "सहायता करता है दर्द प्रबंधन",
      "सुधारता है जोड़ गतिशीलता",
      "मदद करता है कम करना मांसपेशी अकड़न",
      "बढ़ावा देता है स्वस्थ रक्त संचार",
      "सहायता करता है प्राकृतिक उपचार प्रतिक्रिया",
      "प्रोत्साहित करता है ऊतक स्वास्थ्य-लाभ",
      "सुधारता है कार्यात्मक गतिविधि",
      "स्थानीय आयुर्वेदिक चिकित्सा",
      "न्यूनतम रूप से आक्रामक प्रक्रिया",
      "व्यक्तिगत उपचार योजना बना रहे",
      "पारंपरिक आयुर्वेदिक Para- शल्य-चिकित्सकीय तकनीक",
      "सहायता करता है मांसपेशियों और हड्डियों से संबंधित स्वास्थ्य",
      "सुरक्षित चिकित्सक-निगरानी में प्रक्रिया",
      "समग्र दर्द देखभाल",
      "बढ़ावा देता है दीर्घकालिक जोड़ स्वास्थ्य"
    ],
    "category": "OTHER PANCHKARMA & SUPPORTIVE THERAPIES",
    "createdAt": "2026-11-03T08:11:11.015Z",
    "description": "Agnikarma is a classical Ayurvedic para-surgical procedure in which controlled therapeutic heat is applied to specific points of the body using specialized instruments. The therapy is traditionally recommended for selected musculoskeletal conditions involving localized pain, stiffness, and restricted movement. It helps support healthy circulation, relax surrounding tissues, and encourage the body's natural healing response. Every Agnikarma treatment is carefully planned after a detailed clinical evaluation and is performed under the supervision of experienced Ayurvedic physicians using appropriate safety protocols. The procedure is personalized according to the individual's condition, ensuring safe, effective, and holistic care.",
    "descriptionHi": "अग्निकर्म आयुर्वेद की पारंपरिक पैरासर्जिकल प्रक्रिया है, जिसमें विशेष उपकरणों द्वारा शरीर के चयनित बिंदुओं या क्षेत्रों पर नियंत्रित ऊष्मा लगाई जाती है। इसका उपयोग कुछ चुनिंदा मांसपेशीय और जोड़ों से संबंधित स्थितियों में स्थानीय दर्द, अकड़न और गति की परेशानी के प्रबंधन के लिए पारंपरिक रूप से किया जाता है। जलने, संक्रमण, दाग और दर्द का जोखिम हो सकता है। इसलिए प्रक्रिया से पहले चिकित्सकीय मूल्यांकन, सूचित सहमति और सुरक्षा उपाय आवश्यक हैं तथा इसे केवल योग्य एवं प्रशिक्षित चिकित्सक द्वारा ही किया जाना चाहिए।",
    "duration": "",
    "gallery": [],
    "image": "",
    "isFeatured": false,
    "isMainCategory": false,
    "process": [
      {
        "name": "Clinical Assessment",
        "description": "Our Ayurvedic physician performs a detailed evaluation of your symptoms, medical history, and affected area to determine whether Agnikarma is the most appropriate treatment option.",
        "_id": "6ae9a38dedacd842a503269b"
      },
      {
        "name": "Treatment Planning",
        "description": "A personalized treatment protocol is developed based on your condition, pain location, and overall health while ensuring maximum safety and therapeutic effectiveness.",
        "_id": "6ae9a38dedacd842a503269c"
      },
      {
        "name": "Agnikarma Procedure",
        "description": "Controlled therapeutic heat is carefully applied to selected treatment points using specialized Ayurvedic instruments to support pain relief, improve mobility, and encourage natural healing.",
        "_id": "6ae9a38dedacd842a503269d"
      },
      {
        "name": "Recovery & Follow-Up Care",
        "description": "Post-procedure care instructions, Ayurvedic medicines where appropriate, and lifestyle recommendations are provided to support recovery and maintain long-term musculoskeletal health.",
        "_id": "6ae9a38dedacd842a503269e"
      }
    ],
    "processHi": [
      {
        "name": "Clinical Assessment",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a5032697"
      },
      {
        "name": "Treatment Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a5032698"
      },
      {
        "name": "Agnikarma Procedure",
        "description": "चुनी गई अग्निकर्म प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a5032699"
      },
      {
        "name": "Recovery & Follow-Up Care",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a503269a"
      }
    ],
    "sequence": 37,
    "shortDescription": "Agnikarma is a specialized Ayurvedic para-surgical therapy that uses controlled therapeutic heat to support pain management and improve musculoskeletal function. Performed under expert supervision, this treatment helps relieve localized discomfort, improve mobility, and promote natural healing without major surgery.",
    "shortDescriptionHi": "अग्निकर्म आयुर्वेद की पारंपरिक प्रक्रिया है, जिसमें शरीर के चुने हुए स्थानों पर नियंत्रित चिकित्सीय ऊष्मा का उपयोग किया जाता है। यह केवल प्रशिक्षित चिकित्सक द्वारा उचित सुरक्षा के साथ किया जाना चाहिए।",
    "title": "Agnikarma",
    "titleHi": "अग्निकर्म",
    "updatedAt": "2026-11-03T09:04:13.265Z",
    "whoCanBenefit": [
      "Chronic Joint Discomfort",
      "Knee Pain",
      "Lower Back Discomfort",
      "Neck Stiffness",
      "Shoulder Discomfort",
      "Heel Pain",
      "Tennis Elbow",
      "Musculoskeletal Pain",
      "Individuals Seeking Non-SSurgical Pain Management",
      "Suitable Candidates as Advised by an Ayurvedic Physician"
    ],
    "whoCanBenefitHi": [
      "दीर्घकालिक जोड़ असुविधा",
      "घुटना दर्द",
      "निचला पीठ असुविधा",
      "गर्दन अकड़न",
      "कंधा असुविधा",
      "एड़ी दर्द",
      "टेनिस कोहनी",
      "मांसपेशियों और हड्डियों से संबंधित दर्द",
      "व्यक्ति चाहने वाले गैर-SSurgical दर्द प्रबंधन",
      "उपयुक्त व्यक्ति के रूप में सलाह दिए गए द्वारा एक आयुर्वेदिक चिकित्सक"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Specialized Agnikarma Procedures",
      "Personalized Treatment Plans",
      "Safe & Hygienic Clinical Environment",
      "Holistic Pain Management Approach"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "विशेषीकृत अग्निकर्म प्रक्रियाएं",
      "व्यक्तिगत उपचार योजनाएं",
      "सुरक्षित और स्वच्छ क्लिनिकल वातावरण",
      "समग्र दर्द प्रबंधन दृष्टिकोण"
    ]
  },
  {
    "_id": "6ae998224fbd13c8c553f0e4",
    "treatmentId": "potli-massage",
    "benefits": [
      "Supports Joint Health",
      "Relieves Muscle Stiffness",
      "Promotes Healthy Circulation",
      "Encourages Natural Healing",
      "Improves Joint Flexibility",
      "Helps Reduce Physical Fatigue",
      "Supports Pain Management",
      "Promotes Deep Relaxation",
      "Nourishes Muscles & Soft Tissues",
      "Supports Natural Detoxification",
      "Enhances Mobility",
      "Improves Overall Well-Being",
      "Personalized Ayurvedic Care",
      "Traditional Herbal Heat Therapy",
      "Holistic Body Rejuvenation"
    ],
    "benefitsHi": [
      "सहायता करता है जोड़ स्वास्थ्य",
      "राहत देता है मांसपेशी अकड़न",
      "बढ़ावा देता है स्वस्थ रक्त संचार",
      "प्रोत्साहित करता है प्राकृतिक उपचार",
      "सुधारता है जोड़ लचीलापन",
      "मदद करता है कम करना शारीरिक थकान",
      "सहायता करता है दर्द प्रबंधन",
      "बढ़ावा देता है गहरा विश्राम",
      "पोषण देता है मांसपेशियां & Soft ऊतक",
      "प्राकृतिक विषहरण प्रक्रिया को सहारा",
      "बढ़ाता है गतिशीलता",
      "सुधारता है समग्र कल्याण",
      "व्यक्तिगत आयुर्वेदिक देखभाल",
      "पारंपरिक हर्बल गर्मी चिकित्सा",
      "समग्र शरीर कायाकल्प"
    ],
    "category": "OTHER PANCHKARMA & SUPPORTIVE THERAPIES",
    "createdAt": "2026-11-03T08:15:30.341Z",
    "description": "Potli Massage, also known as Pinda Sweda or Herbal Poultice Therapy, is a classical Ayurvedic treatment in which warm herbal bundles are gently massaged over the body or targeted areas using rhythmic movements. The combination of therapeutic heat, herbal ingredients, and medicated oils helps relax muscles, improve circulation, support joint mobility, and encourage the body's natural healing process. Depending on your health condition and body constitution, customized herbal poultices are selected to maximize therapeutic benefits. This therapy is widely used as part of Ayurvedic pain management, rejuvenation, and wellness programs, providing a deeply relaxing and holistic healing experience. :chatgpt-content-reference{index=\"0\"}",
    "descriptionHi": "पोटली मसाज, जिसे पिंड स्वेद या हर्बल पॉल्टिस थेरेपी भी कहा जाता है, आयुर्वेद की पारंपरिक प्रक्रिया है। इसमें औषधीय जड़ी-बूटियों से भरी गर्म पोटलियों को शरीर या चयनित हिस्सों पर लयबद्ध तरीके से लगाया और मालिश किया जाता है। नियंत्रित गर्माहट, हर्बल सामग्री और उपयुक्त तेलों का संयोजन मांसपेशियों को आराम देने तथा स्थानीय सहजता को बढ़ावा देने के लिए उपयोग किया जाता है। पोटली की सामग्री और तापमान व्यक्ति की त्वचा, स्वास्थ्य स्थिति और सहनशीलता के अनुसार तय किए जाते हैं।",
    "duration": "",
    "gallery": [],
    "image": "",
    "isFeatured": false,
    "isMainCategory": false,
    "process": [
      {
        "name": "Ayurvedic Consultation",
        "description": "Our Ayurvedic physician evaluates your body constitution, health concerns, and affected areas to select the most appropriate herbal poultice and therapy plan.",
        "_id": "6ae9a38dedacd842a50326b5"
      },
      {
        "name": "Herbal Potli Preparation",
        "description": "Freshly prepared herbal poultices are warmed with medicated oils or herbal decoctions to achieve the ideal therapeutic temperature before the massage begins.",
        "_id": "6ae9a38dedacd842a50326b6"
      },
      {
        "name": "Potli Massage Therapy",
        "description": "Warm herbal poultices are rhythmically applied over the body or targeted areas to relax muscles, support circulation, improve flexibility, and promote natural healing and rejuvenation. :chatgpt-content-reference{index=\"1\"}",
        "_id": "6ae9a38dedacd842a50326b7"
      },
      {
        "name": "Recovery & Wellness Guidance",
        "description": "After the therapy, personalized lifestyle advice, hydration guidance, and Ayurvedic recommendations are provided to help maintain long-term musculoskeletal health and overall wellness.",
        "_id": "6ae9a38dedacd842a50326b8"
      }
    ],
    "processHi": [
      {
        "name": "आयुर्वेदिक परामर्श",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a50326b1"
      },
      {
        "name": "Herbal Potli Preparation",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a50326b2"
      },
      {
        "name": "Potli Massage Therapy",
        "description": "चुनी गई पोटली मसाज (हर्बल पॉल्टिस थेरेपी) प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a50326b3"
      },
      {
        "name": "Recovery & Wellness Guidance",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a50326b4"
      }
    ],
    "sequence": 38,
    "shortDescription": "Potli Massage is a traditional Ayurvedic therapy that uses warm herbal poultices filled with carefully selected medicinal herbs to relax muscles, support joint health, improve circulation, and promote natural healing. This deeply soothing therapy helps restore comfort, flexibility, and overall well-being.",
    "shortDescriptionHi": "पोटली मसाज में औषधीय जड़ी-बूटियों से भरी गर्म पोटलियों द्वारा शरीर या चुने हुए हिस्सों की मालिश की जाती है। यह मांसपेशियों को आराम और जोड़ों की सहजता को सहारा दे सकती है।",
    "title": "Potli Massage (Herbal Poultice Therapy)",
    "titleHi": "पोटली मसाज (हर्बल पॉल्टिस थेरेपी)",
    "updatedAt": "2026-11-03T09:04:13.276Z",
    "whoCanBenefit": [
      "Muscle Stiffness",
      "Joint Discomfort",
      "Sports Recovery",
      "Lower Back Discomfort",
      "Neck & Shoulder Tension",
      "Knee Discomfort",
      "Physical Fatigue",
      "Sedentary Lifestyle",
      "Individuals Seeking Relaxation",
      "People Seeking Holistic Musculoskeletal Wellness"
    ],
    "whoCanBenefitHi": [
      "मांसपेशी अकड़न",
      "जोड़ असुविधा",
      "खेल-कूद स्वास्थ्य-लाभ",
      "निचला पीठ असुविधा",
      "गर्दन & कंधा Tension",
      "घुटना असुविधा",
      "शारीरिक थकान",
      "निष्क्रिय दिनचर्या वाले जीवनशैली",
      "व्यक्ति चाहने वाले विश्राम",
      "लोग चाहने वाले समग्र मांसपेशियों और हड्डियों से संबंधित स्वास्थ्य"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Authentic Herbal Potli Therapy",
      "Personalized Treatment Plans",
      "Safe & Hygienic Environment",
      "Holistic Pain & Wellness Care"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "प्रामाणिक हर्बल पोटली चिकित्सा",
      "व्यक्तिगत उपचार योजनाएं",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र दर्द & स्वास्थ्य देखभाल"
    ]
  },
  {
    "_id": "6ae9971e4fbd13c8c553f0d7",
    "treatmentId": "ayurvedic-hair-spa",
    "benefits": [
      "Deeply Nourishes Hair & Scalp",
      "Strengthens Hair Roots",
      "Improves Scalp Blood Circulation",
      "Promotes Healthy Hair Growth Environment",
      "Reduces Dryness",
      "Improves Hair Texture",
      "Enhances Natural Shine",
      "Helps Control Frizz",
      "Supports Scalp Hydration",
      "Relieves Scalp Stress",
      "Improves Hair Manageability",
      "Promotes Relaxation",
      "Personalized Ayurvedic Hair Care",
      "Suitable for Most Hair Types",
      "Holistic Hair & Scalp Wellness"
    ],
    "benefitsHi": [
      "गहराई से पोषण देता है बाल & स्कैल्प",
      "बालों की जड़ों को मजबूत करता है",
      "सुधारता है स्कैल्प रक्त रक्त संचार",
      "स्वस्थ बाल-वृद्धि को बढ़ावा देता है वातावरण",
      "कम करने में मदद रूखापन",
      "सुधारता है बाल बनावट",
      "बढ़ाता है प्राकृतिक चमक",
      "मदद करता है नियंत्रण बालों का रूखापन",
      "सहायता करता है स्कैल्प नमी",
      "राहत देता है स्कैल्प तनाव",
      "सुधारता है बाल आसानी से संभालने योग्य",
      "विश्राम को बढ़ावा",
      "व्यक्तिगत आयुर्वेदिक बाल देखभाल",
      "उपयुक्त के लिए अधिकांश बाल प्रकार",
      "समग्र बाल & स्कैल्प स्वास्थ्य"
    ],
    "category": "HAIR & SCALP TREATMENTS",
    "createdAt": "2026-11-03T08:11:10.814Z",
    "description": "Ayurvedic Hair Spa is a traditional hair wellness therapy designed to restore the health of your scalp and hair using authentic Ayurvedic principles. The treatment combines customized herbal oils, gentle scalp massage, herbal cleansing, steam therapy, and nourishing hair masks to improve scalp circulation, strengthen hair follicles, and deeply condition the hair. It helps reduce dryness, improve hair texture, manage frizz, and support overall scalp wellness. Every session is personalized according to your hair type, scalp condition, and wellness goals, providing a relaxing experience while promoting naturally healthy, soft, and lustrous hair.",
    "descriptionHi": "आयुर्वेदिक हेयर स्पा पारंपरिक सिद्धांतों पर आधारित बाल और स्कैल्प की देखभाल है। इसमें व्यक्ति के बालों के प्रकार और स्कैल्प की स्थिति के अनुसार चुने गए हर्बल तेल, हल्की मालिश, हर्बल क्लींजिंग, उपयुक्त होने पर भाप और पोषण देने वाले हेयर मास्क शामिल हो सकते हैं। यह रूखेपन और फ्रिज़ को कम दिखाने, बालों की बनावट सुधारने तथा स्कैल्प को आराम देने में मदद कर सकता है। प्रत्येक सत्र व्यक्तिगत जरूरतों के अनुसार किया जाता है।",
    "duration": "",
    "gallery": [],
    "image": "",
    "isFeatured": false,
    "isMainCategory": false,
    "process": [
      {
        "name": "Hair & Scalp Analysis",
        "description": "Our specialist carefully evaluates your hair type, scalp condition, and specific concerns to create a personalized Ayurvedic Hair Spa treatment plan.",
        "_id": "6ae9a38dedacd842a50326cf"
      },
      {
        "name": "Herbal Oil Application",
        "description": "Customized warm herbal oils are gently applied to the scalp and hair to nourish the roots, improve circulation, and prepare the hair for deep rejuvenation.",
        "_id": "6ae9a38dedacd842a50326d0"
      },
      {
        "name": "Ayurvedic Hair Spa Therapy",
        "description": "A relaxing scalp massage, herbal steam, and nourishing Ayurvedic hair mask are performed to deeply condition the hair, revitalize the scalp, and enhance overall hair health.",
        "_id": "6ae9a38dedacd842a50326d1"
      },
      {
        "name": "Hair Care & Maintenance",
        "description": "Personalized hair care advice, herbal product recommendations, and healthy lifestyle guidance are provided to maintain stronger, healthier, and naturally beautiful hair.",
        "_id": "6ae9a38dedacd842a50326d2"
      }
    ],
    "processHi": [
      {
        "name": "Hair & Scalp Analysis",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a50326cb"
      },
      {
        "name": "Herbal Oil Application",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a50326cc"
      },
      {
        "name": "Ayurvedic Hair Spa Therapy",
        "description": "चुनी गई आयुर्वेदिक हेयर स्पा प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a50326cd"
      },
      {
        "name": "Hair Care & Maintenance",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a50326ce"
      }
    ],
    "sequence": 39,
    "shortDescription": "Ayurvedic Hair Spa is a holistic hair and scalp rejuvenation treatment that combines herbal oils, therapeutic massage, and natural hair care techniques to deeply nourish the scalp, strengthen hair roots, improve circulation, and promote healthy, vibrant hair.",
    "shortDescriptionHi": "आयुर्वेदिक हेयर स्पा में हर्बल तेल, स्कैल्प मसाज और प्राकृतिक हेयर-केयर तकनीकों का उपयोग करके बालों और सिर की त्वचा को पोषण दिया जाता है।",
    "title": "Ayurvedic Hair Spa",
    "titleHi": "आयुर्वेदिक हेयर स्पा",
    "updatedAt": "2026-11-03T09:04:13.285Z",
    "whoCanBenefit": [
      "Dry Hair",
      "Damaged Hair",
      "Dull Hair",
      "Frizzy Hair",
      "Dry Scalp",
      "Oily Scalp",
      "Mild Hair Fall",
      "Weak Hair Roots",
      "Individuals Seeking Healthy Hair",
      "People Looking for Relaxing Hair Care"
    ],
    "whoCanBenefitHi": [
      "रूखा बाल",
      "क्षतिग्रस्त बाल",
      "बेजान बाल",
      "उलझे हुए बाल",
      "रूखा स्कैल्प",
      "तैलीय स्कैल्प",
      "हल्का बाल झड़ना",
      "कमजोर बाल जड़ें",
      "व्यक्ति चाहने वाले स्वस्थ बाल",
      "लोग चाहने वाले के लिए Relaxing बाल देखभाल"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Hair Specialists",
      "Personalized Herbal Hair Care",
      "Premium Ayurvedic Oils & Herbs",
      "Safe & Hygienic Environment",
      "Holistic Hair & Scalp Wellness"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक बाल विशेषज्ञ",
      "व्यक्तिगत हर्बल बाल देखभाल",
      "प्रीमियम आयुर्वेदिक तेल & जड़ी-बूटियां",
      "सुरक्षित और स्वच्छ वातावरण",
      "समग्र बाल & स्कैल्प स्वास्थ्य"
    ]
  },
  {
    "_id": "6ae998224fbd13c8c553f0e5",
    "treatmentId": "pushyavarna-karma",
    "benefits": [
      "Promotes Natural Skin Radiance",
      "Nourishes Skin Tissues",
      "Improves Skin Texture",
      "Enhances Natural Glow",
      "Supports Healthy Blood Circulation",
      "Improves Skin Hydration",
      "Encourages Even-Looking Skin Tone",
      "Promotes Healthy Complexion",
      "Supports Skin Rejuvenation",
      "Improves Skin Softness",
      "Reduces Dullness",
      "Encourages Healthy Skin Renewal",
      "Personalized Ayurvedic Skin Care",
      "Holistic Skin Wellness",
      "Long-Term Skin Health Support"
    ],
    "benefitsHi": [
      "बढ़ावा देता है प्राकृतिक त्वचा चमक",
      "पोषण देता है त्वचा ऊतक",
      "त्वचा की बनावट में सुधार",
      "बढ़ाता है प्राकृतिक निखार",
      "सहायता करता है स्वस्थ रक्त रक्त संचार",
      "सुधारता है त्वचा नमी",
      "प्रोत्साहित करता है समान-चाहने वाले त्वचा रंगत",
      "बढ़ावा देता है स्वस्थ रंगत",
      "सहायता करता है त्वचा कायाकल्प",
      "सुधारता है त्वचा Softness",
      "कम करने में मदद बेजानपन",
      "प्रोत्साहित करता है स्वस्थ त्वचा नवीनीकरण",
      "व्यक्तिगत आयुर्वेदिक त्वचा देखभाल",
      "समग्र त्वचा स्वास्थ्य",
      "दीर्घकालिक त्वचा स्वास्थ्य सहयोग"
    ],
    "category": "OTHER PANCHKARMA & SUPPORTIVE THERAPIES",
    "createdAt": "2026-11-03T08:15:30.499Z",
    "description": "Pushyavarna Karma is a specialized Ayurvedic skin wellness therapy focused on enhancing the skin's natural radiance and overall health through holistic care. The treatment combines personalized herbal applications, medicated oils, facial therapies, detoxification support, dietary guidance, and healthy lifestyle practices based on an individual's body constitution and skin condition. It helps improve skin texture, support healthy circulation, nourish skin tissues, and promote a naturally refreshed appearance. Every treatment plan is carefully customized by experienced Ayurvedic physicians to provide safe, gentle, and long- lasting skin wellness while preserving your skin's natural beauty.",
    "descriptionHi": "पुष्यवर्ण कर्म को पारंपरिक आयुर्वेदिक त्वचा-कल्याण प्रक्रिया के रूप में प्रस्तुत किया जाता है। इसमें व्यक्ति की त्वचा और प्रकृति के अनुसार चुने गए हर्बल लेप, औषधीय तेल, फेशियल प्रक्रियाएं, आहार संबंधी मार्गदर्शन और जीवनशैली सुझाव शामिल हो सकते हैं। उपचार का उद्देश्य त्वचा की बनावट, पोषण और स्वस्थ दिखावट को सहारा देना है। इस नाम से अलग-अलग स्थानों पर अलग प्रक्रियाएं बताई जा सकती हैं, इसलिए क्लिनिक को वास्तविक विधि, सामग्री और सुरक्षा की पुष्टि करके ही विवरण प्रकाशित करना चाहिए। त्वचा का रंग बदलने या किसी रोग के उपचार की गारंटी नहीं दी जानी चाहिए।",
    "duration": "",
    "gallery": [],
    "image": "",
    "isFeatured": false,
    "isMainCategory": false,
    "process": [
      {
        "name": "Skin Assessment",
        "description": "Our Ayurvedic physician carefully evaluates your skin type, body constitution, lifestyle, and skin concerns to create a personalized Pushyavarna Karma treatment plan.",
        "_id": "6ae9a38dedacd842a50326e9"
      },
      {
        "name": "Personalized Therapy Planning",
        "description": "A customized skin wellness program is designed using appropriate herbal formulations, Ayurvedic therapies, dietary guidance, and lifestyle recommendations based on your individual skin needs.",
        "_id": "6ae9a38dedacd842a50326ea"
      },
      {
        "name": "Pushyavarna Karma Therapy",
        "description": "Selected Ayurvedic herbal applications, therapeutic massage techniques, and rejuvenation procedures are performed to nourish the skin, improve circulation, and promote a naturally healthy, radiant complexion.",
        "_id": "6ae9a38dedacd842a50326eb"
      },
      {
        "name": "Skin Care & Wellness Guidance",
        "description": "Personalized skincare advice, Ayurvedic dietary recommendations, hydration guidance, and healthy lifestyle practices are provided to help maintain long-term skin health and natural radiance.",
        "_id": "6ae9a38dedacd842a50326ec"
      }
    ],
    "processHi": [
      {
        "name": "त्वचा का मूल्यांकन",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a50326e5"
      },
      {
        "name": "Personalized Therapy Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a50326e6"
      },
      {
        "name": "Pushyavarna Karma Therapy",
        "description": "चुनी गई पुष्यवर्ण कर्म थेरेपी प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a50326e7"
      },
      {
        "name": "Skin Care & Wellness Guidance",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a50326e8"
      }
    ],
    "sequence": 40,
    "shortDescription": "Pushyavarna Karma is a traditional Ayurvedic skin rejuvenation therapy designed to nourish the skin from within, improve complexion, and restore its natural glow. Using customized herbal formulations, therapeutic massages, and holistic Ayurvedic care, the therapy promotes healthy, radiant, and revitalized skin.",
    "shortDescriptionHi": "पुष्यवर्ण कर्म एक पारंपरिक आयुर्वेदिक त्वचा-देखभाल प्रक्रिया है, जिसमें त्वचा को पोषण देने और प्राकृतिक निखार को सहारा देने के लिए व्यक्तिगत हर्बल देखभाल का उपयोग किया जाता है।",
    "title": "Pushyavarna Karma Therapy",
    "titleHi": "पुष्यवर्ण कर्म थेरेपी",
    "updatedAt": "2026-11-03T09:04:13.297Z",
    "whoCanBenefit": [
      "Dull Skin",
      "Uneven Skin Tone",
      "Dry Skin",
      "Tired-Looking Skin",
      "Dehydrated Skin",
      "Individuals Seeking Natural Skin Rejuvenation",
      "People Looking for Healthy Skin Glow",
      "Wellness Enthusiasts",
      "Individuals Seeking Preventive Skin Care",
      "People Interested in Holistic Beauty Care"
    ],
    "whoCanBenefitHi": [
      "बेजान त्वचा",
      "असमान त्वचा रंगत",
      "रूखा त्वचा",
      "थकी हुई-चाहने वाले त्वचा",
      "नमी की कमी वाली त्वचा",
      "व्यक्ति चाहने वाले प्राकृतिक त्वचा कायाकल्प",
      "लोग चाहने वाले के लिए स्वस्थ त्वचा निखार",
      "स्वास्थ्य रुचि रखने वाले",
      "व्यक्ति चाहने वाले निवारक त्वचा देखभाल",
      "लोग इच्छुक में समग्र सौंदर्य देखभाल"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Personalized Skin Wellness Programs",
      "Authentic Ayurvedic Herbal Therapies",
      "Premium Quality Herbal Ingredients",
      "Safe & Hygienic Environment"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "व्यक्तिगत त्वचा स्वास्थ्य कार्यक्रम",
      "प्रामाणिक आयुर्वेदिक हर्बल चिकित्साएं",
      "प्रीमियम गुणवत्ता हर्बल सामग्री",
      "सुरक्षित और स्वच्छ वातावरण"
    ]
  },
  {
    "_id": "6ae9971e4fbd13c8c553f0de",
    "treatmentId": "pumsavana-karma",
    "benefits": [
      "Supports Maternal Wellness",
      "Promotes Healthy Fetal Development",
      "Encourages Balanced Nutrition",
      "Supports Healthy Pregnancy",
      "Promotes Emotional Well-Being",
      "Encourages Mind-Body Balance",
      "Supports Healthy Digestion",
      "Helps Manage Everyday Pregnancy Stress",
      "Promotes Healthy Lifestyle Habits",
      "Supports Overall Maternal Vitality",
      "Personalized Ayurvedic Prenatal Care",
      "Holistic Pregnancy Wellness",
      "Traditional Ayurvedic Pregnancy Support",
      "Safe Physician-Guided Care",
      "Long-Term Maternal Wellness"
    ],
    "benefitsHi": [
      "सहायता करता है मातृ स्वास्थ्य",
      "बढ़ावा देता है स्वस्थ भ्रूण संबंधी विकास",
      "प्रोत्साहित करता है संतुलित पोषण",
      "सहायता करता है स्वस्थ गर्भावस्था",
      "बढ़ावा देता है भावनात्मक कल्याण",
      "प्रोत्साहित करता है मन-शरीर संतुलन",
      "सहायता करता है स्वस्थ पाचन",
      "मदद करता है प्रबंधन करना रोजमर्रा का गर्भावस्था तनाव",
      "बढ़ावा देता है स्वस्थ जीवनशैली आदतें",
      "सहायता करता है समग्र मातृ जीवनशक्ति",
      "व्यक्तिगत आयुर्वेदिक प्रसवपूर्व देखभाल",
      "समग्र गर्भावस्था स्वास्थ्य",
      "पारंपरिक आयुर्वेदिक गर्भावस्था सहयोग",
      "सुरक्षित चिकित्सक-मार्गदर्शित देखभाल",
      "दीर्घकालिक मातृ स्वास्थ्य"
    ],
    "category": "WELLNESS, WOMEN & IMMUNITY CARE",
    "createdAt": "2026-11-03T08:11:10.979Z",
    "description": "Pumsavana Karma is a classical Ayurvedic prenatal care practice performed during the early stages of pregnancy under the guidance of a qualified Ayurvedic physician. The therapy focuses on supporting maternal well-being, healthy fetal development, and overall pregnancy wellness through individualized Ayurvedic principles. Depending on the mother's health condition and stage of pregnancy, the program may include Ayurvedic consultation, safe herbal support where appropriate, nutritional guidance, daily routine recommendations, stress management, and holistic lifestyle practices. Every treatment plan is carefully personalized to promote a healthy pregnancy while ensuring the comfort, safety, and well-being of both the mother and the developing baby.",
    "descriptionHi": "पुंसवन कर्म आयुर्वेद में वर्णित पारंपरिक प्रसवपूर्व देखभाल अभ्यास है, जिसे गर्भावस्था के शुरुआती चरणों से जोड़ा जाता है। आधुनिक क्लिनिकल देखभाल में मां और गर्भस्थ शिशु की सुरक्षा सर्वोपरि है। किसी भी औषधि, जड़ी-बूटी या प्रक्रिया का उपयोग केवल योग्य आयुर्वेदिक चिकित्सक और प्रसूति विशेषज्ञ की सलाह के बाद ही किया जाना चाहिए। कार्यक्रम में परामर्श, पोषण, दिनचर्या और तनाव प्रबंधन संबंधी मार्गदर्शन शामिल हो सकता है। इसका उपयोग भ्रूण का लिंग चुनने या प्रभावित करने के लिए नहीं किया जा सकता; भारत में लिंग-चयन संबंधी गतिविधियां कानूनन प्रतिबंधित हैं।",
    "duration": "",
    "gallery": [],
    "image": "",
    "isFeatured": false,
    "isMainCategory": false,
    "process": [
      {
        "name": "Prenatal Consultation",
        "description": "Our Ayurvedic physician carefully evaluates your pregnancy stage, medical history, body constitution, lifestyle, and overall health to develop a personalized prenatal wellness plan.",
        "_id": "6ae9a38dedacd842a5032703"
      },
      {
        "name": "Personalized Pregnancy Planning",
        "description": "A customized Ayurvedic care program is designed with appropriate nutritional guidance, safe herbal support where suitable, wellness practices, and lifestyle recommendations for your stage of pregnancy.",
        "_id": "6ae9a38dedacd842a5032704"
      },
      {
        "name": "Pumsavana Wellness Therapy",
        "description": "Selected Ayurvedic prenatal wellness practices are provided under expert supervision to support maternal health, fetal well-being, and a balanced pregnancy experience.",
        "_id": "6ae9a38dedacd842a5032705"
      },
      {
        "name": "Ongoing Pregnancy Support",
        "description": "Regular follow-up consultations, nutritional advice, healthy daily routine guidance, and emotional wellness support help maintain maternal health throughout pregnancy.",
        "_id": "6ae9a38dedacd842a5032706"
      }
    ],
    "processHi": [
      {
        "name": "Prenatal Consultation",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a50326ff"
      },
      {
        "name": "Personalized Pregnancy Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a5032700"
      },
      {
        "name": "Pumsavana Wellness Therapy",
        "description": "चुनी गई पुंसवन कर्म प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a5032701"
      },
      {
        "name": "Ongoing Pregnancy Support",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a5032702"
      }
    ],
    "sequence": 41,
    "shortDescription": "Pumsavana Karma is a traditional Ayurvedic prenatal wellness therapy designed to support maternal health and healthy fetal development during the early stages of pregnancy. Through personalized Ayurvedic guidance, herbal support where appropriate, nutrition, and lifestyle recommendations, the therapy promotes a healthy and balanced pregnancy journey.",
    "shortDescriptionHi": "पुंसवन कर्म गर्भावस्था के शुरुआती चरणों से जुड़ी पारंपरिक आयुर्वेदिक प्रसवपूर्व देखभाल है। इसका उपयोग केवल योग्य चिकित्सक के मार्गदर्शन में सुरक्षित मातृ-स्वास्थ्य और गर्भावस्था संबंधी सलाह के रूप में किया जाना चाहिए।",
    "title": "Pumsavana Karma",
    "titleHi": "पुंसवन कर्म",
    "updatedAt": "2026-11-03T09:04:13.312Z",
    "whoCanBenefit": [
      "Pregnant Women in Early Pregnancy",
      "Expectant Mothers Seeking Holistic Prenatal Care",
      "First-Time Mothers",
      "Women Seeking Ayurvedic Pregnancy Support",
      "Mothers Looking for Personalized Wellness Programs",
      "Women Seeking Nutritional Guidance During Pregnancy",
      "Families Interested in Traditional Ayurvedic Prenatal Care",
      "Women Seeking Emotional Wellness During Pregnancy",
      "Mothers Looking for Preventive Pregnancy Care",
      "Suitable Candidates as Advised by an Ayurvedic Physician"
    ],
    "whoCanBenefitHi": [
      "Pregnant महिला में प्रारंभिक गर्भावस्था",
      "गर्भवती माताएं चाहने वाले समग्र प्रसवपूर्व देखभाल",
      "पहली बार माताएं",
      "महिला चाहने वाले आयुर्वेदिक गर्भावस्था सहयोग",
      "माताएं चाहने वाले के लिए व्यक्तिगत स्वास्थ्य कार्यक्रम",
      "महिला चाहने वाले पोषण संबंधी मार्गदर्शन के दौरान गर्भावस्था",
      "परिवार इच्छुक में पारंपरिक आयुर्वेदिक प्रसवपूर्व देखभाल",
      "महिला चाहने वाले भावनात्मक स्वास्थ्य के दौरान गर्भावस्था",
      "माताएं चाहने वाले के लिए निवारक गर्भावस्था देखभाल",
      "उपयुक्त व्यक्ति के रूप में सलाह दिए गए द्वारा एक आयुर्वेदिक चिकित्सक"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Personalized Prenatal Wellness Programs",
      "Authentic Ayurvedic Pregnancy Care",
      "Safe & Supportive Environment",
      "Holistic Maternal Wellness Approach"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "व्यक्तिगत प्रसवपूर्व स्वास्थ्य कार्यक्रम",
      "प्रामाणिक आयुर्वेदिक गर्भावस्था देखभाल",
      "सुरक्षित & सहायक वातावरण",
      "समग्र मातृ स्वास्थ्य दृष्टिकोण"
    ]
  },
  {
    "_id": "6ae9971f4fbd13c8c553f0e0",
    "treatmentId": "pushyavarna-karma-therapy",
    "benefits": [
      "Personalized approach to a traditional named therapy whose exact protocol must be confirmed by the clinic",
      "Initial suitability assessment",
      "Procedure explained before starting",
      "Treatment plan tailored to individual needs",
      "Professional supervision",
      "Attention to hygiene and safety",
      "Clear discussion of limitations",
      "Realistic outcome expectations",
      "Comfort monitored during the session",
      "Aftercare instructions provided",
      "Follow-up when clinically appropriate",
      "Can be considered alongside a broader care plan"
    ],
    "benefitsHi": [
      "व्यक्तिगत आवश्यकता के अनुसार प्रक्रिया",
      "उपचार से पहले उपयुक्तता की जाँच",
      "प्रक्रिया की पहले से स्पष्ट जानकारी",
      "व्यक्तिगत देखभाल योजना",
      "प्रशिक्षित विशेषज्ञ की निगरानी",
      "स्वच्छता और सुरक्षा पर ध्यान",
      "प्रक्रिया की सीमाओं की जानकारी",
      "वास्तविक अपेक्षाओं पर चर्चा",
      "सत्र के दौरान आराम का ध्यान",
      "उपचार के बाद देखभाल के निर्देश",
      "आवश्यकता अनुसार फॉलो-अप",
      "व्यापक देखभाल योजना के साथ समन्वय"
    ],
    "category": "OTHER PANCHKARMA & SUPPORTIVE THERAPIES",
    "createdAt": "2026-11-03T08:11:11.024Z",
    "description": "The name Pushyavarna Karma may be used differently across providers. Before publishing, the clinic must verify the classical reference, exact procedure, ingredients, intended use and safety profile. Do not make claims about complexion change, disease treatment or guaranteed results unless supported and legally permissible. A qualified practitioner must assess suitability.",
    "descriptionHi": "पुष्यवर्ण कर्म नाम का उपयोग अलग-अलग संस्थानों में अलग अर्थों में हो सकता है। वेबसाइट पर प्रकाशित करने से पहले इसकी पारंपरिक संदर्भ सामग्री, वास्तविक प्रक्रिया, सामग्री, उद्देश्य और सुरक्षा की पुष्टि आवश्यक है। रंग बदलने या रोग ठीक करने जैसे अप्रमाणित दावे न करें।",
    "duration": "",
    "gallery": [],
    "image": "",
    "isFeatured": false,
    "isMainCategory": false,
    "process": [
      {
        "name": "Consultation & Assessment",
        "description": "The practitioner discusses the concern, medical history, expectations and possible contraindications, then confirms whether the service is suitable.",
        "_id": "6ae9971f36a3fdb8139a05ed"
      },
      {
        "name": "Preparation",
        "description": "The treatment area is prepared, the procedure and products are explained, consent is obtained, and hygiene and safety checks are completed.",
        "_id": "6ae9971f36a3fdb8139a05ee"
      },
      {
        "name": "Treatment Session",
        "description": "The selected procedure is performed according to the agreed protocol, device instructions and the client's comfort and response.",
        "_id": "6ae9971f36a3fdb8139a05ef"
      },
      {
        "name": "Aftercare & Follow-up",
        "description": "The practitioner explains home-care instructions, possible temporary reactions, warning signs and whether another session or medical review is appropriate.",
        "_id": "6ae9971f36a3fdb8139a05f0"
      }
    ],
    "processHi": [
      {
        "name": "परामर्श और जाँच",
        "description": "विशेषज्ञ समस्या, मेडिकल हिस्ट्री, अपेक्षाओं और संभावित सावधानियों पर चर्चा करके तय करते हैं कि प्रक्रिया उपयुक्त है या नहीं।",
        "_id": "6ae9971f36a3fdb8139a05e9"
      },
      {
        "name": "तैयारी",
        "description": "उपचार क्षेत्र तैयार किया जाता है, प्रक्रिया और उत्पाद समझाए जाते हैं, सहमति ली जाती है तथा स्वच्छता और सुरक्षा की जाँच की जाती है।",
        "_id": "6ae9971f36a3fdb8139a05ea"
      },
      {
        "name": "उपचार सत्र",
        "description": "चुनी हुई प्रक्रिया तय प्रोटोकॉल, उपकरण के निर्देशों और व्यक्ति के आराम को ध्यान में रखकर की जाती है।",
        "_id": "6ae9971f36a3fdb8139a05eb"
      },
      {
        "name": "आफ्टरकेयर और फॉलो-अप",
        "description": "विशेषज्ञ घर पर देखभाल, संभावित अस्थायी प्रतिक्रियाएँ, चेतावनी संकेत और अगले सत्र या चिकित्सकीय जाँच की आवश्यकता समझाते हैं।",
        "_id": "6ae9971f36a3fdb8139a05ec"
      }
    ],
    "sequence": 42,
    "shortDescription": "A traditional Ayurvedic service that should be described according to its exact ingredients, method and intended purpose.",
    "shortDescriptionHi": "पुष्यवर्ण कर्म नाम से बताई जाने वाली पारंपरिक आयुर्वेदिक सेवा, जिसकी सही विधि और सामग्री क्लिनिक द्वारा स्पष्ट की जानी चाहिए।",
    "title": "Pushyavarna Karma Therapy",
    "titleHi": "पुष्यवर्ण कर्म थेरेपी",
    "updatedAt": "2026-11-03T08:11:11.024Z",
    "whoCanBenefit": [
      "People seeking support for a traditional named therapy whose exact protocol must be confirmed by the clinic",
      "Adults assessed as suitable",
      "People with realistic expectations",
      "Those who have discussed relevant medical history",
      "People without procedure-specific contraindications",
      "Those seeking a personalized care plan",
      "People able to follow preparation and aftercare advice",
      "Those advised by a qualified practitioner"
    ],
    "whoCanBenefitHi": [
      "इस प्रक्रिया के लिए उपयुक्त पाए गए व्यक्ति",
      "व्यक्तिगत देखभाल चाहने वाले वयस्क",
      "वास्तविक अपेक्षाएँ रखने वाले लोग",
      "जिनकी मेडिकल हिस्ट्री की जाँच हो चुकी हो",
      "जिनमें संबंधित निषेध या जोखिम न हों",
      "व्यक्तिगत उपचार योजना चाहने वाले लोग",
      "तैयारी और आफ्टरकेयर के निर्देश मान सकने वाले लोग",
      "योग्य विशेषज्ञ की सलाह प्राप्त व्यक्ति"
    ],
    "whyChooseUs": [
      "Personalized consultation and suitability assessment",
      "Treatment plan explained before the session",
      "Qualified and trained professionals",
      "Attention to hygiene, safety and client comfort",
      "Clear aftercare guidance and follow-up when needed"
    ],
    "whyChooseUsHi": [
      "व्यक्तिगत परामर्श और उपयुक्तता की जाँच",
      "सत्र से पहले प्रक्रिया की स्पष्ट जानकारी",
      "योग्य और प्रशिक्षित विशेषज्ञ",
      "स्वच्छता, सुरक्षा और आराम पर ध्यान",
      "उचित आफ्टरकेयर और आवश्यकता अनुसार फॉलो-अप"
    ]
  },
  {
    "_id": "6ae9971f4fbd13c8c553f0e1",
    "treatmentId": "viddha-karma",
    "benefits": [
      "Supports Pain Management",
      "Promotes Healthy Circulation",
      "Helps Reduce Muscle Stiffness",
      "Supports Joint Mobility",
      "Encourages Natural Healing Response",
      "Improves Functional Movement",
      "Minimally Invasive Procedure",
      "Localized Ayurvedic Therapy",
      "Supports Musculoskeletal Wellness",
      "Personalized Treatment Planning",
      "Traditional Ayurvedic Para-Surgical Technique",
      "Safe Physician-Supervised Procedure",
      "Holistic Pain Care",
      "Supports Everyday Mobility",
      "Non-Surgical Therapeutic Approach"
    ],
    "benefitsHi": [
      "सहायता करता है दर्द प्रबंधन",
      "बढ़ावा देता है स्वस्थ रक्त संचार",
      "मदद करता है कम करना मांसपेशी अकड़न",
      "सहायता करता है जोड़ गतिशीलता",
      "प्रोत्साहित करता है प्राकृतिक उपचार प्रतिक्रिया",
      "सुधारता है कार्यात्मक गतिविधि",
      "न्यूनतम रूप से आक्रामक प्रक्रिया",
      "स्थानीय आयुर्वेदिक चिकित्सा",
      "सहायता करता है मांसपेशियों और हड्डियों से संबंधित स्वास्थ्य",
      "व्यक्तिगत उपचार योजना बना रहे",
      "पारंपरिक आयुर्वेदिक Para-शल्य-चिकित्सकीय तकनीक",
      "सुरक्षित चिकित्सक-निगरानी में प्रक्रिया",
      "समग्र दर्द देखभाल",
      "सहायता करता है रोजमर्रा का गतिशीलता",
      "बिना सर्जरी वाला Therapeutic दृष्टिकोण"
    ],
    "category": "OTHER PANCHKARMA & SUPPORTIVE THERAPIES",
    "createdAt": "2026-11-03T08:11:11.034Z",
    "description": "Viddha Karma, also known as Suchi Vedhana or Vedhana Chikitsa, is a classical Ayurvedic para-surgical procedure described in the Sushruta Samhita. The therapy involves the precise stimulation of selected therapeutic points using a sterile fine needle under the supervision of an experienced Ayurvedic physician. It is traditionally recommended for selected musculoskeletal and pain-related conditions to support healthy circulation, relieve localized discomfort, reduce stiffness, and promote functional recovery. Every treatment is carefully planned according to the individual's body constitution, health condition, and clinical assessment, ensuring a safe, personalized, and holistic approach to care.",
    "descriptionHi": "विद्ध कर्म, जिसे सूचि वेधन या वेधन चिकित्सा भी कहा जाता है, आयुर्वेद की पारंपरिक पैरासर्जिकल प्रक्रिया है। इसमें योग्य चिकित्सक द्वारा चयनित बिंदुओं पर स्टेराइल महीन सुई से नियंत्रित प्रक्रिया की जाती है। इसका उपयोग कुछ चुनिंदा मांसपेशीय और दर्द-संबंधी स्थितियों में स्थानीय असुविधा तथा अकड़न के प्रबंधन के लिए किया जाता है। संक्रमण, रक्तस्राव, दर्द या ऊतक को चोट पहुंचने का जोखिम हो सकता है, इसलिए उचित शारीरिक ज्ञान, स्वच्छता, सहमति और बाद की देखभाल आवश्यक है। इसे स्वयं नहीं करना चाहिए।",
    "duration": "",
    "gallery": [],
    "image": "",
    "isFeatured": false,
    "isMainCategory": false,
    "process": [
      {
        "name": "Clinical Assessment",
        "description": "Our Ayurvedic physician performs a detailed evaluation of your symptoms, medical history, and affected area to determine whether Viddha Karma is the most suitable treatment for your condition.",
        "_id": "6ae9a38dedacd842a503271d"
      },
      {
        "name": "Personalized Treatment Planning",
        "description": "A customized treatment protocol is prepared based on your condition, body constitution, and therapeutic goals while ensuring maximum safety and effectiveness.",
        "_id": "6ae9a38dedacd842a503271e"
      },
      {
        "name": "Viddha Karma Procedure",
        "description": "Sterile fine needles are carefully applied to selected therapeutic points using traditional Ayurvedic principles to support pain relief, improve mobility, and encourage the body's natural healing response.",
        "_id": "6ae9a38dedacd842a503271f"
      },
      {
        "name": "Recovery & Follow-Up Care",
        "description": "Post-treatment guidance, appropriate Ayurvedic medicines where required, and personalized lifestyle recommendations are provided to support recovery and maintain long-term musculoskeletal wellness.",
        "_id": "6ae9a38dedacd842a5032720"
      }
    ],
    "processHi": [
      {
        "name": "Clinical Assessment",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a5032719"
      },
      {
        "name": "Personalized Treatment Planning",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a503271a"
      },
      {
        "name": "Viddha Karma Procedure",
        "description": "चुनी गई विद्ध कर्म प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a503271b"
      },
      {
        "name": "Recovery & Follow-Up Care",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a503271c"
      }
    ],
    "sequence": 42,
    "shortDescription": "Viddha Karma is a specialized Ayurvedic para-surgical therapy in which specific therapeutic points are gently stimulated using a sterile fine needle under expert supervision. This minimally invasive procedure is traditionally used to support pain management, improve mobility, and encourage the body's natural healing response.",
    "shortDescriptionHi": "विद्ध कर्म आयुर्वेद की पारंपरिक प्रक्रिया है, जिसमें प्रशिक्षित चिकित्सक द्वारा चयनित बिंदुओं पर स्टेराइल महीन सुई से नियंत्रित उत्तेजना दी जाती है। यह कुछ स्थितियों में दर्द और गतिशीलता के प्रबंधन के लिए विचार किया जा सकता है।",
    "title": "Viddha Karma",
    "titleHi": "विद्ध कर्म",
    "updatedAt": "2026-11-03T09:04:13.326Z",
    "whoCanBenefit": [
      "Joint Discomfort",
      "Neck Stiffness",
      "Lower Back Discomfort",
      "Shoulder Pain",
      "Knee Pain",
      "Heel Pain",
      "Tennis Elbow",
      "Sciatica",
      "Muscle Tightness",
      "Suitable Candidates as Advised by an Ayurvedic Physician"
    ],
    "whoCanBenefitHi": [
      "जोड़ असुविधा",
      "गर्दन अकड़न",
      "निचला पीठ असुविधा",
      "कंधा दर्द",
      "घुटना दर्द",
      "एड़ी दर्द",
      "टेनिस कोहनी",
      "Sciatica",
      "मांसपेशी Tightness",
      "उपयुक्त व्यक्ति के रूप में सलाह दिए गए द्वारा एक आयुर्वेदिक चिकित्सक"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Physicians",
      "Specialized Viddha Karma Procedures",
      "Personalized Treatment Plans",
      "Sterile & Hygienic Clinical Environment",
      "Holistic Pain Management Approach"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "विशेषीकृत विद्ध कर्म प्रक्रियाएं",
      "व्यक्तिगत उपचार योजनाएं",
      "स्टेराइल और स्वच्छ क्लिनिकल वातावरण",
      "समग्र दर्द प्रबंधन दृष्टिकोण"
    ]
  },
  {
    "_id": "6ae998224fbd13c8c553f0e3",
    "treatmentId": "microneedling-hair",
    "benefits": [
      "Supports Natural Hair Growth",
      "Stimulates Hair Follicles",
      "Improves Scalp Blood Circulation",
      "Enhances Collagen Production",
      "Improves Absorption of Hair Serums",
      "Strengthens Hair Roots",
      "Reduces Hair Thinning",
      "Supports Healthier Hair Density",
      "Promotes Scalp Rejuvenation",
      "Minimally Invasive Procedure",
      "Suitable for Men & Women",
      "Personalized Hair Restoration",
      "Little to No Downtime",
      "Safe & Comfortable Treatment",
      "Complements Advanced Hair Therapies"
    ],
    "benefitsHi": [
      "प्राकृतिक बाल-वृद्धि को सहारा देता है",
      "उत्तेजित करता है बाल रोमकूप",
      "सुधारता है स्कैल्प रक्त रक्त संचार",
      "बढ़ाता है कोलेजन उत्पादन",
      "सुधारता है अवशोषण का बाल Serums",
      "बालों की जड़ों को मजबूत करता है",
      "कम करने में मदद बाल पतले होना",
      "सहायता करता है अधिक स्वस्थ बाल घनत्व",
      "बढ़ावा देता है स्कैल्प कायाकल्प",
      "न्यूनतम रूप से आक्रामक प्रक्रिया",
      "उपयुक्त के लिए पुरुष & महिला",
      "व्यक्तिगत बाल पुनर्स्थापन",
      "बहुत कम के लिए नहीं रिकवरी का समय",
      "सुरक्षित & आरामदायक उपचार",
      "पूरक है उन्नत बाल चिकित्साएं"
    ],
    "category": "HAIR & SCALP TREATMENTS",
    "createdAt": "2026-11-03T08:15:30.180Z",
    "description": "Microneedling Treatment for Hair is a modern scalp rejuvenation procedure designed to support natural hair restoration by creating controlled micro-channels in the scalp using sterile fine needles. This process stimulates the scalp's natural repair mechanisms, improves blood circulation, enhances collagen production, and increases the absorption of topical hair growth solutions. The therapy helps strengthen existing hair follicles, reduce hair thinning, and promote healthier hair growth over time. It is suitable for both men and women experiencing early to moderate hair loss and can be combined with treatments such as PRP Therapy, Mesotherapy, or Growth Factor Therapy for a comprehensive hair restoration program.",
    "descriptionHi": "हेयर माइक्रोनीडलिंग एक आधुनिक स्कैल्प प्रक्रिया है, जिसमें स्टेराइल महीन सुइयों वाले उपकरण से त्वचा में नियंत्रित सूक्ष्म चैनल बनाए जाते हैं। यह प्रक्रिया स्कैल्प की प्राकृतिक मरम्मत प्रतिक्रिया को सक्रिय कर सकती है और कुछ टॉपिकल हेयर सॉल्यूशन के अवशोषण को बढ़ा सकती है। इसका उपयोग कुछ प्रकार के बाल पतले होने में सहायक उपचार के रूप में किया जाता है। संक्रमण, जलन, रक्तस्राव या अन्य दुष्प्रभाव संभव हैं, इसलिए स्कैल्प की जांच, उचित उपकरण, स्वच्छ तकनीक और उपचार के बाद की देखभाल आवश्यक है।",
    "duration": "",
    "gallery": [],
    "image": "",
    "isFeatured": false,
    "isMainCategory": false,
    "process": [
      {
        "name": "Hair & Scalp Assessment",
        "description": "Our specialist carefully evaluates your scalp condition, hair density, hair loss pattern, and medical history to determine whether microneedling is the most suitable treatment for your hair restoration goals.",
        "_id": "6ae9a38dedacd842a5032737"
      },
      {
        "name": "Scalp Preparation",
        "description": "The scalp is thoroughly cleansed, and the treatment area is prepared using sterile techniques to ensure a safe, comfortable, and effective microneedling session.",
        "_id": "6ae9a38dedacd842a5032738"
      },
      {
        "name": "Microneedling Therapy",
        "description": "A specialized microneedling device with sterile fine needles is gently moved across the scalp to create controlled micro-channels that stimulate natural healing, improve circulation, and enhance the absorption of therapeutic hair solutions.",
        "_id": "6ae9a38dedacd842a5032739"
      },
      {
        "name": "Post-Treatment Hair Care",
        "description": "After the procedure, personalized scalp care instructions, follow-up recommendations, and a customized hair care plan are provided to support recovery and maximize long-term treatment benefits.",
        "_id": "6ae9a38dedacd842a503273a"
      }
    ],
    "processHi": [
      {
        "name": "बालों और स्कैल्प का मूल्यांकन",
        "description": "विशेषज्ञ आपकी समस्या, स्वास्थ्य इतिहास, वर्तमान स्थिति और उपचार के लक्ष्य का आकलन करते हैं। इस मूल्यांकन के आधार पर उपचार की उपयुक्तता तय की जाती है और आपके लिए व्यक्तिगत योजना बनाई जाती है।",
        "_id": "6ae9a38dedacd842a5032733"
      },
      {
        "name": "स्कैल्प की तैयारी",
        "description": "उपचार क्षेत्र और आवश्यक सामग्री को निर्धारित प्रक्रिया के अनुसार तैयार किया जाता है। विशेषज्ञ प्रक्रिया, उपयोग होने वाले उत्पादों और आवश्यक सावधानियों की जानकारी देते हैं तथा स्वच्छता और सुरक्षा की जांच करते हैं।",
        "_id": "6ae9a38dedacd842a5032734"
      },
      {
        "name": "माइक्रोनीडलिंग चिकित्सा",
        "description": "चुनी गई बालों के लिए माइक्रोनीडलिंग उपचार प्रक्रिया को आपकी स्थिति और सहनशीलता के अनुसार प्रशिक्षित पेशेवर द्वारा सावधानीपूर्वक किया जाता है। पूरी प्रक्रिया के दौरान आराम, स्वच्छता और सुरक्षा का ध्यान रखा जाता है।",
        "_id": "6ae9a38dedacd842a5032735"
      },
      {
        "name": "उपचार के बाद बालों की देखभाल",
        "description": "सत्र के बाद आपको घर पर देखभाल, आहार या जीवनशैली संबंधी आवश्यक निर्देश और फॉलो-अप की जानकारी दी जाती है। किसी असामान्य प्रतिक्रिया या परेशानी का अनुभव होने पर विशेषज्ञ से संपर्क करने की सलाह दी जाती है।",
        "_id": "6ae9a38dedacd842a5032736"
      }
    ],
    "sequence": 43,
    "shortDescription": "Microneedling Treatment for Hair is an advanced, minimally invasive scalp therapy that uses fine sterile micro-needles to stimulate the scalp's natural healing response. The treatment supports healthier hair follicles, improves nutrient absorption, and creates an optimal environment for stronger, fuller-looking hair.",
    "shortDescriptionHi": "हेयर माइक्रोनीडलिंग एक न्यूनतम इनवेसिव स्कैल्प प्रक्रिया है, जिसमें स्टेराइल महीन सुइयों से नियंत्रित सूक्ष्म चैनल बनाए जाते हैं। इसका उद्देश्य स्कैल्प की प्राकृतिक मरम्मत प्रक्रिया और बालों की देखभाल को सहारा देना है।",
    "title": "Microneedling Treatment for Hair",
    "titleHi": "बालों के लिए माइक्रोनीडलिंग उपचार",
    "updatedAt": "2026-11-03T09:04:13.343Z",
    "whoCanBenefit": [
      "Hair Thinning",
      "Early Hair Loss",
      "Weak Hair Follicles",
      "Reduced Hair Density",
      "Receding Hairline",
      "Excessive Hair Fall",
      "Men & Women with Pattern Hair Loss",
      "Individuals Seeking Non-Surgical Hair Restoration",
      "People Combining PRP or Mesotherapy",
      "Individuals Looking to Improve Scalp Health"
    ],
    "whoCanBenefitHi": [
      "बाल पतले होना",
      "प्रारंभिक बाल हानि",
      "कमजोर बाल रोमकूप",
      "कम हुआ बाल घनत्व",
      "पीछे हटती हुई हेयरलाइन",
      "अत्यधिक बाल झड़ना",
      "पुरुष & महिला के साथ प्रकार बाल हानि",
      "व्यक्ति चाहने वाले बिना सर्जरी वाला बाल पुनर्स्थापन",
      "लोग संयोजन पीआरपी या मेसोथेरेपी",
      "व्यक्ति चाहने वाले के लिए सुधारना स्कैल्प स्वास्थ्य"
    ],
    "whyChooseUs": [
      "Experienced Hair Restoration Specialists",
      "Advanced Microneedling Technology",
      "Personalized Hair Treatment Plans",
      "Safe & Hygienic Clinical Environment",
      "Comprehensive Hair Care Approach"
    ],
    "whyChooseUsHi": [
      "अनुभवी बाल पुनर्स्थापन विशेषज्ञ",
      "उन्नत माइक्रोनीडलिंग तकनीक",
      "व्यक्तिगत बाल उपचार योजनाएं",
      "सुरक्षित और स्वच्छ क्लिनिकल वातावरण",
      "व्यापक बाल देखभाल दृष्टिकोण"
    ]
  },
  {
    "_id": "6a80a32921baf12be0319731",
    "treatmentId": "cat-skin",
    "title": "Skin & Advanced Facial Treatments",
    "shortDescription": "Customized Treatment • Ayurvedic Care • Safe for All Skin Types",
    "description": "Restore your skin's natural beauty with safe and effective Ayurvedic facial therapies. Our customized treatments help reduce acne, pigmentation, dullness, fine lines, and uneven skin tone while improving overall skin health—without harsh chemicals.",
    "benefits": [
      "Deep Skin Rejuvenation",
      "Acne & Pigmentation Control",
      "Natural Glow Enhancement",
      "Anti-Ageing Support",
      "Improved Skin Texture",
      "Pore Tightening & Hydration"
    ],
    "process": [
      {
        "name": "Comprehensive Skin Assessment",
        "description": "We carefully assess your skin condition, lifestyle, and concerns to identify the most suitable treatment approach.",
        "image": ""
      },
      {
        "name": "Personalized Ayurvedic Protocol",
        "description": "A customized combination of Ayurvedic therapies and herbal formulations is selected to meet your skin's specific needs.",
        "image": ""
      },
      {
        "name": "Expert Treatment",
        "description": "Your therapy is carried out in a clean, comfortable environment using safe, high-quality Ayurvedic products and modern techniques where appropriate.",
        "image": ""
      },
      {
        "name": "Recovery & Skin Maintenance",
        "description": "We provide personalized aftercare instructions and skincare recommendations to help you achieve healthy, glowing, long-lasting results.",
        "image": ""
      }
    ],
    "duration": "Variable",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMzZmyP1SPQFNNpxsnmk9_OCTusA33evzzbTolMTxldo-hU10W-BTCARi&s=10",
    "gallery": [],
    "videoUrl": "",
    "category": "SKIN & ADVANCED FACIAL TREATMENTS",
    "isMainCategory": true,
    "isFeatured": false,
    "whoCanBenefit": [
      "Acne & Pimples",
      "Pigmentation & Dark Spots",
      "Dull Skin",
      "Fine Lines & Wrinkles",
      "Uneven Skin Tone",
      "Open Pores",
      "Sun Damage",
      "Dry or Oily Skin"
    ],
    "whyChooseUs": [
      "Experienced Ayurvedic Specialists",
      "Personalized Treatment Plans",
      "Safe & Hygienic Environment",
      "Premium Herbal Products",
      "Modern Diagnostic Approach",
      "Holistic Skin Care with Long-Term Results"
    ],
    "sequence": 0,
    "titleHi": "त्वचा की देखभाल एवं उन्नत फेशियल उपचार",
    "shortDescriptionHi": "आयुर्वेदिक स्किन एवं एडवांस फेशियल ट्रीटमेंट एक संपूर्ण त्वचा देखभाल उपचार है, जिसमें आयुर्वेदिक जड़ी-बूटियों, प्राकृतिक तत्वों और आधुनिक स्किन केयर तकनीकों का संतुलित उपयोग किया जाता है। यह उपचार त्वचा की गहराई से सफाई, पोषण, हाइड्रेशन और प्राकृतिक निखार प्रदान करते हुए उसे लंबे समय तक स्वस्थ, मुलायम और चमकदार बनाए रखने में मदद करता है।",
    "descriptionHi": "आयुर्वेदिक स्किन एवं एडवांस फेशियल ट्रीटमेंट उन लोगों के लिए एक विशेष उपचार है, जो बिना किसी कठोर केमिकल के अपनी त्वचा की प्राकृतिक सुंदरता को बनाए रखना चाहते हैं। इस उपचार में सबसे पहले त्वचा का विस्तृत विश्लेषण किया जाता है, जिसके आधार पर त्वचा के प्रकार और उसकी आवश्यकताओं के अनुसार उपचार निर्धारित किया जाता है। आयुर्वेदिक हर्बल क्लेंजिंग, एक्सफोलिएशन, फेस मसाज, हर्बल फेस पैक, स्टीम और आवश्यकतानुसार आधुनिक स्किन थेरेपी का उपयोग करके त्वचा की गहराई से सफाई और पोषण किया जाता है। यह उपचार त्वचा की नमी बनाए रखने, ब्लड सर्कुलेशन को बेहतर करने, मृत कोशिकाओं को हटाने, रोमछिद्रों की सफाई करने और त्वचा की प्राकृतिक चमक बढ़ाने में सहायक होता है। नियमित उपचार से त्वचा अधिक स्वस्थ, साफ, मुलायम और आकर्षक दिखाई देती है तथा उम्र बढ़ने के शुरुआती लक्षणों को कम करने में भी सहायता मिलती है। यह उपचार अधिकांश त्वचा प्रकारों के लिए सुरक्षित और प्रभावी है। ",
    "benefitsHi": [
      "त्वचा की गहराई से सफाई",
      "प्राकृतिक निखार बढ़ाता है",
      "त्वचा को गहराई तक पोषण प्रदान करता है",
      "त्वचा को हाइड्रेट रखता है",
      "मृत त्वचा कोशिकाओं को हटाने में सहायक",
      "त्वचा को मुलायम और कोमल बनाता है",
      "ब्लड सर्कुलेशन में सुधार",
      "रोमछिद्रों की सफाई",
      "अतिरिक्त तेल को नियंत्रित करने में मदद",
      "त्वचा की रंगत को समान बनाता है",
      "हल्के दाग-धब्बों को कम करने में सहायक",
      "शुरुआती झुर्रियों में सुधार",
      "त्वचा की प्राकृतिक चमक बढ़ाता है",
      "तनाव कम करने में सहायक",
      "अधिकांश त्वचा प्रकारों के लिए सुरक्षित"
    ],
    "whoCanBenefitHi": [
      "बेजान त्वचा वाले",
      "रूखी त्वचा वाले",
      "तैलीय त्वचा वाले",
      "मुंहासों की समस्या वाले",
      "असमान त्वचा रंगत वाले",
      "हल्के दाग-धब्बों वाले",
      "खुले रोमछिद्रों वाले",
      "शुरुआती झुर्रियों वाले",
      "संवेदनशील त्वचा वाले",
      "स्वस्थ और प्राकृतिक रूप से दमकती त्वचा चाहने वाले"
    ],
    "whyChooseUsHi": [
      "अनुभवी आयुर्वेदिक चिकित्सक",
      "त्वचा के अनुसार व्यक्तिगत उपचार योजना",
      "शुद्ध आयुर्वेदिक हर्बल उत्पादों का उपयोग",
      "आधुनिक स्किन केयर तकनीकों का समावेश",
      "सुरक्षित एवं स्वच्छ वातावरण",
      "प्राकृतिक और संतुलित उपचार पद्धति",
      "गुणवत्तापूर्ण देखभाल एवं संतोषजनक परिणाम"
    ],
    "processHi": [
      {
        "name": "त्वचा की जाँच एवं व्यक्तिगत परामर्श",
        "description": "हमारे विशेषज्ञ आपकी त्वचा के प्रकार, उसकी समस्याओं और आवश्यकताओं का विस्तृत मूल्यांकन करते हैं, ताकि आपके लिए सबसे उपयुक्त आयुर्वेदिक एवं एडवांस फेशियल उपचार का चयन किया जा सके।",
        "image": ""
      },
      {
        "name": "हर्बल क्लेंजिंग एवं त्वचा की तैयारी",
        "description": "त्वचा को प्राकृतिक हर्बल क्लेंजर से अच्छी तरह साफ किया जाता है। इसके बाद हल्के एक्सफोलिएशन और आवश्यकतानुसार स्टीम द्वारा रोमछिद्रों की सफाई की जाती है, जिससे त्वचा उपचार के लिए पूरी तरह तैयार हो जाती है।",
        "image": ""
      },
      {
        "name": "आयुर्वेदिक फेशियल एवं स्किन थेरेपी",
        "description": "त्वचा की आवश्यकता के अनुसार हर्बल मसाज, फेस पैक, पौष्टिक सीरम और आधुनिक स्किन थेरेपी का उपयोग किया जाता है। यह प्रक्रिया त्वचा को गहराई से पोषण देती है, रक्त संचार को बेहतर बनाती है और त्वचा की प्राकृतिक चमक एवं स्वास्थ्य को बढ़ाने में मदद करती है।",
        "image": ""
      },
      {
        "name": "त्वचा संरक्षण एवं देखभाल सलाह",
        "description": "उपचार के अंत में त्वचा को आवश्यक मॉइस्चराइजिंग और सुरक्षा प्रदान की जाती है। साथ ही हमारी टीम आपकी त्वचा के अनुसार दैनिक स्किन केयर, आहार और जीवनशैली संबंधी आवश्यक सलाह देती है, जिससे उपचार का लाभ लंबे समय तक बना रहे और आपकी त्वचा स्वस्थ एवं दमकती रहे।",
        "image": ""
      }
    ],
    "createdAt": "2026-08-15T17:34:33.403Z",
    "updatedAt": "2026-11-03T10:46:51.213Z"
  },
  {
    "_id": "6a80a32921baf12be031973a",
    "treatmentId": "chemical-peel",
    "title": "Chemical Peel",
    "shortDescription": "Clinical skin rejuvenation using specialized acids to resurface and renew skin.",
    "description": "Chemical peels use specially formulated acids to remove damaged outer layers of skin, triggering growth of new, healthier skin cells. They effectively treat hyperpigmentation, acne scars, and uneven skin texture.",
    "benefits": [
      "Reduces hyperpigmentation",
      "Smooths skin texture",
      "Clears acne scars",
      "Anti-aging effects",
      "Even skin tone",
      "Boosts radiance"
    ],
    "process": [
      {
        "name": "Skin Prep",
        "description": "Cleansing and prepping the skin with a pH balancer.",
        "_id": "6a80a32921baf12be031973b"
      },
      {
        "name": "Peel Application",
        "description": "Careful application of the appropriate peel for your skin type.",
        "_id": "6a80a32921baf12be031973c"
      },
      {
        "name": "Neutralization",
        "description": "Neutralizing the peel and applying soothing post-care.",
        "_id": "6a80a32921baf12be031973d"
      }
    ],
    "duration": "30–60 min",
    "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "gallery": [],
    "videoUrl": "",
    "category": "SKIN & ADVANCED FACIAL TREATMENTS",
    "isMainCategory": false,
    "isFeatured": false,
    "whoCanBenefit": [
      "Dummy Audience 1",
      "Dummy Audience 2",
      "Dummy Audience 3",
      "Dummy Audience 4"
    ],
    "whyChooseUs": [
      "Premium Care",
      "Expert Doctors",
      "Modern Facilities",
      "Holistic Approach"
    ],
    "sequence": 0,
    "titleHi": "",
    "shortDescriptionHi": "",
    "descriptionHi": "",
    "benefitsHi": [],
    "whoCanBenefitHi": [],
    "whyChooseUsHi": [],
    "processHi": [],
    "createdAt": "2026-08-15T17:34:33.405Z",
    "updatedAt": "2026-08-15T17:34:33.405Z"
  }
];
