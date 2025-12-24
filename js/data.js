// --- js/data.js ---

const packagesData = [
    // --- Full Packages ---
    { category: 'full-package', duration: 1, title: 'شهر واحد', price: 10000, priceUSD: 200, theme: 'blue', recommendation: "للمراجعة السريعة" },
    { category: 'full-package', duration: 3, title: '3 شهور', price: 25000, priceUSD: 500, originalPrice: 30000, theme: 'green', highlight: 'BEST SELLER', isScaled: true, recommendation: "الخيار الأمثل للمنهج" },
    { category: 'full-package', duration: 6, title: '6 شهور', price: 45000, priceUSD: 900, originalPrice: 60000, theme: 'purple', recommendation: "للدراسة المتعمقة" },
    
    // --- QBank Packages ---
    { category: 'mcq', duration: 1, title: 'شهر واحد', price: 1000, priceUSD: 20, theme: 'indigo' },
    { category: 'mcq', duration: 3, title: '3 شهور', price: 2500, priceUSD: 50, theme: 'teal' },
    { category: 'mcq', duration: 6, title: '6 شهور', price: 4500, priceUSD: 90, originalPrice: 6000, theme: 'pink' },
    { category: 'mcq', duration: 12, title: '12 شهر', price: 8000, priceUSD: 160, originalPrice: 12000, theme: 'orange' },
    
    // --- Combo Packages (FIXED & DISCOUNTED) ---
    { category: 'combo', duration: 3, title: 'باقة 3 شهور', price: 26000, priceUSD: 520, originalPrice: 27500, theme: 'green', highlight: 'توفير ذكي', isScaled: true },
    { category: 'combo', duration: 6, title: 'باقة 6 شهور', price: 46000, priceUSD: 920, originalPrice: 49500, theme: 'purple' },
];

const chapterGroups = {
    "Fundamentals": { hours: 22 },
    "Burn & Skin Lesions": { hours: 18 },
    "Breast": { hours: 18 },
    "Head & Neck Congenitals": { hours: 28 },
    "Head & Neck Trauma & Tumors": { hours: 28 },
    "Upper Limb Congenitals & Pathologies": { hours: 22 },
    "Upper Limb Trauma & Reconstruction": { hours: 22 },
    "Lower Limb Anatomy, Trauma & Reconstruction": { hours: 17 },
    "Chest, Trunk & Genitourinary": { hours: 17 },
    "Aesthetics (Soon)": { hours: 0, disabled: true }
};

const customChapterPrices = {
    1: { 1: 4000, 3: 10000, 6: 18000 },
    2: { 1: 7000, 3: 18000, 6: 32000 },
    3: { 1: 10000, 3: 25000, 6: 45000 },
};

const groupDiscounts = {
    lectures: [
        { name: 'Partners Bundle', description: 'مجموعة 3 أفراد', discount: 0.15, theme: 'cyan', icon: 'fa-user-friends' },
        { name: 'Alliance Bundle', description: 'مجموعة 5 أفراد', discount: 0.25, theme: 'emerald', icon: 'fa-users' },
        { name: 'Legends Bundle', description: 'مجموعة +10 أفراد', discount: 0.35, theme: 'amber', icon: 'fa-crown' }
    ],
    qbank: [
        { name: 'Buddies QBank', description: 'أسئلة - 3 أفراد', discount: 0.15, theme: 'indigo', icon: 'fa-laptop-code' },
        { name: 'Group QBank', description: 'أسئلة - 5 أفراد', discount: 0.25, theme: 'teal', icon: 'fa-users-cog' },
        { name: 'Batch QBank', description: 'أسئلة - +10 أفراد', discount: 0.35, theme: 'pink', icon: 'fa-school' }
    ],
    combo: [
        { name: 'Partners Combo', description: 'شامل - 3 أفراد', discount: 0.15, theme: 'cyan', icon: 'fa-user-friends' },
        { name: 'Alliance Combo', description: 'شامل - 5 أفراد', discount: 0.25, theme: 'emerald', icon: 'fa-users' },
        { name: 'Legends Combo', description: 'شامل - +10 أفراد', discount: 0.35, theme: 'amber', icon: 'fa-crown' }
    ]
};

const faqData = [
    { q: "كيف يتم تفعيل الاشتراك؟", a: "بعد اختيار الباقة المناسبة والتواصل معنا عبر تيليجرام، سيتم تفعيل اشتراكك يدويًا على بريدك الإلكتروني الخاص فور تأكيد الدفع." },
    { q: "هل يمكنني الترقية من باقة لأخرى؟", a: "نعم، يمكنك في أي وقت الترقية من باقة أقل إلى باقة أعلى (مثلاً من باقة باب واحد إلى المنهج كامل) عن طريق دفع الفرق فقط." },
    { q: "كم يبلغ حجم المحتوى التعليمي؟", a: "أكثر من 120 ساعة من المحاضرات المرئية، وأكثر من 11,000 سؤال MCQ مع شروحات تفصيلية." },
    { q: "هل يمكنني استخدام حسابي على أكثر من جهاز؟", a: "نعم، ولكن ليس في نفس الوقت. النظام يسمح بجلسة نشطة واحدة فقط للحفاظ على أمان الحساب." },
    { q: "ما هو وضع التعلم (Learning Mode)؟", a: "وضع للمذاكرة يظهر الإجابة والشرح فوراً بعد كل سؤال، دون التقيد بوقت." },
    { q: "كيف يعمل منظم المذاكرة (Study Planner)؟", a: "تدخل تاريخ امتحانك، ويقوم النظام تلقائياً بتوزيع المحاضرات والأسئلة على الأيام المتاحة لك." },
];

const chaptersData = {
    "01 Orientation - How to Study": ["Orientation Lecture How to Study"],
    "02 Fundamentals - Wound Healing": ["01 Skin & Wound Healing", "02 Skin Layers & Cancer Embryology Summary", "03 Abnormal Tissue Healing", "04 Other Types of Tissue Healing", "05.1 Nerve Healing", "05.2 Neuroma - Skills"],
    "03 Fundamentals - Basics of Flaps": ["06 Principles of Flaps", "07 Fasciocutaneous Flaps", "08.1 Myocutaneous Flaps", "08.2 Perforator Flaps", "09 Flaps Classifications", "10 Flaps Modifications", "11 Flaps Monitoring"],
    "04 Fundamentals - Grafts Course": ["12.1 Watson Knife for Skin Grafting Illustration - Plasticology Skill Lab", "12.2 Skin Grafts", "12.3 Integra Illustration - Plasticology Skill Lab", "13 Homografts", "14 Bone Grafts", "15 Cartilage Graft", "16 Fat Graft", "17 Tendon Graft", "18.1 Nerve Graft", "18.2 Sural Nerve Graft - Plasticology Skill Lab", "19 Tissue Expansion", "20 Negative Pressure Wound Therapy", "21 Lasers in Plastic Surgery", "22 Biomaterials"],
    "05 Burn": ["01 Principles of Burn Assessment & Resuscitation", "02.1 Burn Debridement, Coverage and Positioning", "02.2 Escharotomy vs Escharectomy - Skills", "03 Burn Nutrition", "04 Electric Burn", "05 Chemical Burn", "06 Frostbite", "07 Drug Burn SJS & TEN", "08 Burn Reconstruction", "09.1 Burn Summary Lecture P1 Principles", "09.2 Burn Summary Lecture P2 Other Types of Burn"],
    "06 Skin Lesions": ["01 Lesion / Skin Lesions Examination", "02 BCC", "03 SCC", "04 Melanoma", "05 Congenital Nevocytic Nevi", "06 Soft Tissue Sarcoma", "07 Hemangioma", "08 Vascular Malformation", "09 Lymphedema", "10 Misc Epithelial & Melanocytic Skin Lesions", "11 Misc Adnexal Skin Lesions", "12 Misc Cysts", "13 Misc Bursa", "14 Misc Lipoma", "15 Misc Neurofibroma", "16 Misc Skin Disorders"],
    "07 Head & Neck - Congenitals": ["01.1 Head & Neck Anatomy & Embryology P1", "01.2 Head & Neck Anatomy & Embryology P2", "01.3 Facial Development Defect Pathological Embryology", "02 Ear Anatomy & Congenital Anomalies", "03 Microtia", "04 Prominent Ear", "05 Misc Congenital Ear Anomalies", "06.1 Ear Trauma", "06.2 Ear Trauma", "07.1 Ear Revision", "07.2 Ear Local Nerve Block - Plasticology Skill Lab", "08 Congenital Nose Deformities", "09 Cleft Lip", "10 Cleft Palate", "11 Velopharyngeal Dysfunction (White Board)", "12.1 Craniofacial Clefts Tessier Classification", "12.2 Craniofacial Clefts Hemifacial Microsomia", "13.1 Craniosynostosis Pathology", "13.2 Craniosynostosis Non Syndromic", "13.3 Craniosynostosis Syndromic"],
    "08 Head & Neck - Acquired Pathologies": ["1. Head & Neck Anatomy", "2 head & Neck Swellings 1.1 Sky View", "2. Head & Neck Swellings 1.2 Congenitals", "3. Salivary Gland Pathologies", "4. Jaw Pathologies", "Squamous cell Carcinoma", "5. PRINCIPLES OF HEAD AND NECK CANCER: STAGING AND MANAGEMENT"],
    "09 Head & Neck - Trauma & Reconstruction": ["17. Trauma Intro Facial Assessment & Trauma Dangerous Zones", "18. Facial soft Tissue Trauma Assessment", "19. Mandibular Fractures", "20. Zygoma Maxilla & ZMC fracture", "21. Orbital Fracture", "22. Nasal & NOE fracture", "23.1 Frontal - Temporal - Palatal - Panfacial Fracture", "23.2 Intro for Orthognathic Surgery", "24. Scalp Reconstruction", "24. Scalp Recon Sum UP", "24. CALVARIAL RECONSTRUCTION", "25.1 Eye Lid Recon 1 Anatomy", "25.2 EYELID RECONSTRUCTION Algorithm", "25.3 Ptosis", "25.4 Ectropion", "25.5 Entropion", "26. NASAL Recon Anatomy & Principles", "26.1 Nasal Anatomy & Nerve Supply Tricks", "27. NASAL RECONSTRUCTION Algorithm", "28. Cheeck Reconstruction", "29. Lip Reconstruction", "30. Surgical Treatment of Migraine Headache ( Audio )", "31 Facial Aesthetic Anatomy - White Board", "32 Aesthetic Facial Canons of Divine Proportions", "33 Facial Palsy - White Board"],
    "10 Breast": ["01 Breast Clinical History & Examination", "02 Breast Anatomy & Embryology", "03 Congenital Breast Deformities", "04 Gynecomastia & Male Breast Cancer", "05 Breast Benign Lesions", "06 Breast Cancer Types & Management", "07 Implant Based Breast Reconstruction", "08 Autologous Breast Reconstruction Latismus Flap", "09 Autologus Breast Reconstruction Abdominal Based Flaps TRAM DIEP SIEA", "10 DIEP Congestion", "11 Autologus Breast Reconstruction Gluteal Flaps SGAP & IGAP", "12 Autologus Breast Reconstruction Thigh Flaps based", "13 Extra Options for Breast Reconstruciton", "14 Breast Reconstruction Follow up", "15 Nipple areolar Reconstruction & Inverted Nipple", "16 Secondary Breast Reconstruction & Patient Disatisfaction", "17 Breast Reduction Introduction", "18 Breast Reduction Pedicle Choice", "19 Breast Reduction Skin Resection Pattern", "20 Breast Augmentation Implant History & Choice Parameters", "21 Breast Augmentation Surgical Incision & Pocket", "22 Breast Augmentation Post Operative Care & Complications", "23 Mastopexy Indications & Contraindications", "24 Mastopexy Surgical Techniques", "25 Mastopexy Augmentation Mastopexy & Explantation", "26 Mastopexy Post Massive Weight Loss Patient General Rules", "27 Mastopexy PMWL Breast + Tuberous + Complications"],
    "11 Trunk": ["01 Chest wall Anatomy", "02 Poland Syndrome", "03 Pectus Excavatum & Carnatum", "04 Aquired Cheast wall Deformities & Reconstruction", "05 Abdominal Wall Anatomy", "06 Abdominal Wall Defects", "07 Abdominal Wall Reconstruction", "08 Pressure Sores Staging & Workup", "09 Pressure Sores Management", "10 Pressure Sores Wound Dressing", "11 Pressure Sores Wound Coverage"],
    "12 Lower Limb": ["01 Lower Extremity Gross Anatomy", "02 Lower Limb NeuroVascular Anatomy", "03 Principles of Lower Limb Salvage", "04 Bone Reconstruction", "05 Soft Tissue Reconstruction Principles & Thigh Reconstruction", "06 Knee - Leg - Foot Reconstruction", "07 Ankle Block Step By Step", "08 Foot Ulcers"],
    "13 Genito-Urinary": ["01 Genitourinary Applied Anatomy", "02 GenitoUrinary Male & Female Congenital Anomalies Intro", "03 Hypospadius Pathophysiology & Classification", "04 Hypospadias Management", "05 Hypospadias Complications & Epispadius", "06 Acquired PenoScrotal Defects 1 Pyrone Disease", "07 Aquired Penoscrotal Defects 2 Circumcision Pitfalls – Phalloplasty & Radial Forearm Flap", "08 Acquired PenoScrotal Defects 3 Scrotal Reconstruction – Fournier Gangrene", "09 Gender Affirmation Surgeries"],
    "14 Hand - Anatomy & Principles": ["01 Flexors", "02 Camper's Chiasm & Pulley System", "03 Extensors", "04 Interensics", "05 Vasculature", "06 Applied NeuroAnatomy Median Ulnar Radial & Anastomosis", "07 Bone Ligaments & Joints", "08 Hand Spaces & Retinacular System", "09 Tourniquet", "10 WALANT Wide Awake", "11 Hand Nerve Blocks", "12 Detailed Wrist Block Plasticology Skills", "13 One Minute Wrist Block Plasticology Skills", "14 Hand Incisions", "15 Hand Splints", "16 Rehabilitation & PhysioTherapy 1 Assesment Tests", "17 Rehabilitation of Hand & Wrist Metacarpal & Phalangeal", "18 Rehabilitation Flexors & Extensors Principles", "19 Rehabilitation MCQ Revision"],
    "15 Hand - Tendon Injuries": ["20 Tendon Injuries Repair Principles with Aplied Anatomy Recap", "21 MCQ 1 Extensors & Flexors Tendon injuries Applied Anatomy", "22 Flexor Tendon Injuries Repair Applied Principles", "23 Tips & tricks in Flexor Tendon Repair Oblique injury & Pulvertaft Repair", "24 Flexors Zone 1 Jersey Finger Reverse Mallet", "25 Flexors Zone 2-3-4-5 & Pulley System", "26 Extensor Tendon Injuries Introduction", "27 Extensors Zone 1", "28 Extensors Zone 2-3", "29 Extensors Zone 4-5", "30 Extensors Zone 6 - 7", "31 Extensors Zone 8-9 + General Post Op Routine", "32 Complications of Tendon Repair", "33 Tendonitis 1 Trigger Finger", "34 Tendonitis 2 Dequervian - Intersection & Others"],
    "16 Hand - Fingertip, Nerves & Trauma": ["35 Nail Bed Injuries", "36 Nail Bed Injuries Summary", "37 Finger Tip Injury 1 Anatomy Classifications & Algorithm", "38 Finger Tip Injury 2 Flaps", "39 Volar Defect Cross Finger Flap - Plasticology Skill Lab", "40 Finger Tip Injuries 3 Summary", "41 Groin Flap Marking - Plasticology Skill Lab", "42 Upper Extremity Compression Syndrome", "43 Upper Extremity Compression Syndrome (Duplicate Title)", "44 Brachial Plexus"],
    "17 Hand - Congenitals & Pathologies": ["01 Failure of Formation", "02 Failure of Differentation", "03 Hand Benign Conditions P1", "04 Hand Benign Conditions P2", "05 Hand Malignant Tumores", "06 Hand Mass Excision - Skill Lab", "07 Hand Cyst Excision Midaxial Incision - Skill Lab", "08 Hand Infections", "09 Dupuytren’s Disease – Rheumatoid Arthritis – OsteoArthritis"],
    "18 Aesthetics": ["Special Audio Edition until Release of Aesthetics Stand Alone Private Course"],
    "19 Misc": ["01 Plastic Anatomy Review", "02 Physiology Revision", "03 Hemostasis", "04 DVT", "05 OncoGenesis", "06 Lipoma", "07 Hypersensitivity", "08 Sterilization"]
};

const featureDetails = {
    smart_planner: { title: "مدربك الدراسي الذكي", features: [ { icon: "fas fa-calendar-alt", title: "خطط دراسية آلية", text: "أدخل تاريخ البدء والانتهاء، وسيقوم النظام بتوزيع المنهج بالكامل عليك بشكل منطقي." }, { icon: "fas fa-tasks", title: "مهام يومية واضحة", text: "كل يوم، ستعرف بالضبط ما هي المحاضرات التي يجب مشاهدتها والاختبارات التي يجب حلها." }, { icon: "fas fa-brain", title: "اختبارات تراكمية ذكية", text: "ينشئ لك اختبارات دورية (Cumulative Review) لمراجعة ما درسته سابقًا، لضمان عدم نسيان المعلومات." }, { icon: "fas fa-chart-pie", title: "تحليل الأداء (Performance Insights)", text: "يحلل نتائجك ويخبرك بالفصول التي تتفوق فيها (Strengths) والتي تحتاج لمزيد من المراجعة (Areas for Review)." } ] },
    exam_simulation: { title: "محاكاة اختبارات واقعية", features: [ { icon: "fas fa-stopwatch", title: "محاكاة كاملة (Full Simulation)", text: "خض تجربة تحاكي الامتحان الحقيقي بـ 100 سؤال ومؤقت زمني إجمالي، مع إخفاء الإجابات حتى النهاية." }, { icon: "fas fa-sliders-h", title: "اختبارات مخصصة (Mock Exam)", text: "تحكم في كل شيء: عدد الأسئلة، الوقت، الفصول، وحتى المصادر التي تريد الاختبار منها." }, { icon: "fas fa-bookmark", title: "اختبار من أسئلتك المحفوظة", text: "أثناء أي اختبار، يمكنك حفظ الأسئلة المهمة، ثم إنشاء اختبار منها لاحقًا للتركيز عليها." }, { icon: "fas fa-history", title: "مراجعة الاختبارات السابقة", text: "يمكنك في أي وقت مراجعة أي اختبار قمت به لترى أسئلتك وإجاباتك والشروحات الكاملة." } ] },
    osce_bank: { title: "بنك حالات إكلينيكية (OSCE)", features: [ { icon: "fas fa-diagnoses", title: "سيناريوهات واقعية", text: "تدرب على مجموعة واسعة من الحالات الإكلينيكية التي تحاكي ما ستواجهه في الامتحانات العملية." }, { icon: "fas fa-random", title: "الوضع الشامل (OSCE Slayer)", text: "ابدأ اختبارًا عشوائيًا يمر على كل الحالات المتاحة لتقييم شامل لجاهزيتك." }, { icon: "fas fa-cogs", title: "جلسات مخصصة (Custom OSCE)", text: "قم ببناء جلستك التدريبية الخاصة عبر تحديد عدد الحالات التي تريدها، مع إمكانية فلترتها حسب الموضوع." } ] },
    practice_mistakes: { title: "مراجعة ذكية للأخطاء", features: [ { icon: "fas fa-target", title: "تركيز على نقاط الضعف", text: "هذه الميزة هي أقوى أداة للتحسن. تجمع كل الأسئلة التي أجبت عليها بشكل خاطئ في مكان واحد." }, { icon: "fas fa-redo-alt", title: "اختبارات الأخطاء", text: "يمكنك إنشاء اختبار جديد من أخطائك السابقة فقط، مما يضمن أنك لن تكرر نفس الخطأ مرة أخرى." }, { icon: "fas fa-check-double", title: "ترسيخ المعلومة", text: "تكرار حل الأسئلة الصعبة عليك هو أسرع طريق لتحويل نقاط ضعفك إلى نقاط قوة." } ] },
    daily_updates: { title: "محتوى متجدد باستمرار", features: [ { icon: "fas fa-sync-alt", title: "تحديثات مستمرة", text: "المحاضرات وبنك الأسئلة يتم تحديثها دوريًا لتواكب أحدث المعلومات والمصادر." }, { icon: "fas fa-chart-line", title: "مواكبة التطورات", text: "تضمن لك المذاكرة دائمًا من أحدث المصادر المعتمدة عالميًا." }, { icon: "fas fa-book", title: "تحسينات دورية", text: "نضيف شروحات وأسئلة جديدة باستمرار بناءً على ملاحظاتكم وتطورات العلم." } ] },
    performance_tracking: { title: "تتبع الأداء والتقدم", features: [ { icon: "fas fa-history", title: "سجل النشاط الكامل", text: "تتبع كل نشاطاتك السابقة من اختبارات ومحاضرات مع نتائجها وتواريخها." }, { icon: "fas fa-chart-bar", title: "رسوم بيانية للأداء", text: "شاهد رسومًا بيانية توضح كثافة مذاكرتك وتقدمك خلال الفترات المختلفة." }, { icon: "fas fa-trophy", title: "لوحة الصدارة (Leaderboard)", text: "شاهد ترتيبك بين أفضل المستخدمين في التطبيق، مما يضيف عنصرًا من المنافسة والتحفيز." } ] },
    integrated_platform: { title: "منصة متكاملة", features: [ { icon: "fas fa-desktop", title: "متاحة على كل الأجهزة", text: "منصتنا تعمل بكفاءة على جميع الأجهزة (كمبيوتر، تابلت، موبيل)." }, { icon: "fas fa-globe", title: "وصول دائم وأونلاين", text: "تكون معك أينما ذهبت لتستطيع المذاكرة في أي وقت ومن أي مكان." }, { icon: "fas fa-tools", title: "أدوات تعليمية مدمجة", text: "تجمع بين المحاضرات، بنك الأسئلة، ومنظم المذاكرة في مكان واحد." } ] },
    smart_tools: { title: "أدوات ذكية", features: [ { icon: "fas fa-check-double", title: "بنك أسئلة شامل", text: "يضم آلاف الأسئلة عالية الجودة مع شروحات مفصلة لكل إجابة." }, { icon: "fas fa-calendar-alt", title: "منظم مذاكرة ذكي", text: "ينشئ لك خطط دراسية مخصصة ويتابع تقدمك بذكاء." }, { icon: "fas fa-poll", title: "تحليل الأداء", text: "يوفر لك إحصائيات دقيقة عن نقاط قوتك وضعفك لمساعدتك على التحسين." } ] },
};