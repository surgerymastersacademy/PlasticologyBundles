// --- js/data.js ---

const packagesData = [
    // --- Full Packages (Exam/Revision Focus) ---
    { category: 'full-package', duration: 1, title: 'شهر واحد', price: 10000, priceUSD: 200, theme: 'blue', recommendation: "مراجعة مكثفة قبل الامتحان", includesQBank: true },
    { category: 'full-package', duration: 3, title: '3 شهور', price: 25000, priceUSD: 500, originalPrice: 30000, theme: 'green', highlight: 'BEST SELLER', isScaled: true, recommendation: "دورة مكثفة + حل أسئلة", includesQBank: true },
    { category: 'full-package', duration: 6, title: '6 شهور', price: 45000, priceUSD: 900, originalPrice: 60000, theme: 'purple', recommendation: "تأسيس ومراجعة شاملة", includesQBank: true },
    
    // --- QBank Packages ---
    { category: 'mcq', duration: 1, title: 'شهر واحد', price: 1000, priceUSD: 20, theme: 'indigo' },
    { category: 'mcq', duration: 3, title: '3 شهور', price: 2500, priceUSD: 50, theme: 'teal' },
    { category: 'mcq', duration: 6, title: '6 شهور', price: 4500, priceUSD: 90, originalPrice: 6000, theme: 'pink' },
    { category: 'mcq', duration: 12, title: '12 شهر', price: 8000, priceUSD: 160, originalPrice: 12000, theme: 'orange' },
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
    1: { 1: 4000 },
    2: { 1: 7000 },
    3: { 1: 10000 },
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
    ]
};

const faqData = [
    { q: "ما الفرق بين باقات النواب (Residents) وباقات الامتحانات؟", a: "باقات النواب مخصصة للتركيز على موضوع محدد أثناء الـ Rotation لمدة شهر، وهي مثالية للتعلم العميق واكتساب المهارات. أما باقات الامتحانات فهي شاملة ومكثفة ومصممة للمراجعة السريعة وحل الأسئلة قبل الامتحانات (ماجستير/دكتوراه/زمالة)." },
    { q: "كيف أحصل على بنك الأسئلة مجاناً؟", a: "عند اشتراكك في أي من باقات الشرح المكثف (Exam Bundles)، يتم تفعيل بنك الأسئلة لك تلقائياً كهدية مجانية طوال فترة اشتراكك." },
    { q: "ما هو Global Search وكيف يفيدني؟", a: "هو محرك بحث متطور داخل المنصة. إذا واجهت حالة إكلينيكية ولا تتذكر تفاصيلها، فقط اكتب اسم الحالة وسيظهر لك كل الأسئلة والمحاضرات المتعلقة بها فوراً." },
    { q: "هل يمكنني الترقية من باقة لأخرى؟", a: "نعم، يمكنك في أي وقت الترقية من باقة أقل إلى باقة أعلى (مثلاً من باقة باب واحد إلى المنهج كامل) عن طريق دفع الفرق فقط." },
    { q: "كم يبلغ حجم المحتوى التعليمي؟", a: "أكثر من 120 ساعة من المحاضرات المرئية عالية الجودة، وأكثر من 11,000 سؤال MCQ مع شروحات تفصيلية لكل إجابة." },
    { q: "هل يعمل التطبيق على الموبايل والتابلت؟", a: "بالتأكيد. المنصة متجاوبة بالكامل (Responsive) وتعمل بكفاءة على جميع الأجهزة." },
    { q: "كيف أستفيد من نظام Anki Flashcards؟", a: "هذا النظام يساعدك على المراجعة المتباعدة (Spaced Repetition). الأسئلة التي تخطئ فيها ستظهر لك بشكل متكرر في أوقات مدروسة علمياً لضمان حفظها وعدم نسيانها." },
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
    qbank_system: { title: "QBank — 11,000+ سؤال", features: [
        { icon: "fas fa-stopwatch", title: "Exam Simulator", text: "خض تجربة تحاكي الامتحان الحقيقي بـ 100 سؤال ومؤقت زمني إجمالي مع إخفاء الإجابات حتى النهاية." },
        { icon: "fas fa-sliders-h", title: "Custom Mock Exam", text: "تحكم في كل شيء: عدد الأسئلة، الوقت، الفصول، والمصادر — ابنِ امتحانك المخصص تماماً." },
        { icon: "fas fa-bug", title: "Mistake Hunter", text: "المنصة تتعلم من أخطائك وتجمع لك الأسئلة الصعبة لمراجعتها مجدداً وضمان عدم تكرارها." },
        { icon: "fas fa-bookmark", title: "Saved Questions", text: "احفظ أي سؤال مهم أثناء المذاكرة وابنِ منه اختباراً مخصصاً لاحقاً للتركيز على النقاط الحرجة." }
    ]},
    radio_fm: { title: "Plasticology Radio", features: [
        { icon: "fas fa-headphones", title: "Audio Recaps", text: "مكتبة صوتية شاملة لكل المواضيع. راجع المحتوى بأذنيك وأنت في المواصلات أو الجيم أو في أي مكان." },
        { icon: "fas fa-mobile-alt", title: "On-the-Go Learning", text: "الوضع الصوتي لا يحتاج شاشة — استغل الوقت الضائع يومياً وحوّله لمراجعة علمية حقيقية." },
        { icon: "fas fa-sync-alt", title: "محتوى متجدد", text: "يُضاف Audio Recap لكل موضوع جديد يُضاف للمنهج، لتبقى دائماً محدثاً بأحدث المحتوى." }
    ]},
    flashcards: { title: "Flashcard Mode — Spaced Repetition", features: [
        { icon: "fas fa-redo-alt", title: "Spaced Repetition", text: "الكروت التعليمية تتتبع ما تنساه وتعيد عرضه في التوقيت المثالي علمياً لتثبيت المعلومة نهائياً." },
        { icon: "fas fa-tasks", title: "مراجعة يومية ذكية", text: "كل يوم يُحدد لك عدد الكروت المطلوب مراجعتها بناءً على سجل أدائك السابق." },
        { icon: "fas fa-chart-line", title: "تتبع التقدم", text: "شاهد كيف تتحسن نسب إجاباتك الصحيحة على مدار الوقت وتراقب تطورك الفعلي." }
    ]},
    battle_arena: { title: "Battle Arena — منافسات علمية", features: [
        { icon: "fas fa-bolt", title: "Real-time Battles", text: "تحدي أي زميل في منافسة علمية مباشرة. الأسئلة تأتي لكليكما في نفس الوقت — من يجيب أسرع وأصح يفوز." },
        { icon: "fas fa-trophy", title: "Leaderboard", text: "كل انتصار يرفع نقاطك في لوحة المتصدرين العامة. تنافس على المراكز الأولى وأثبت نفسك." },
        { icon: "fas fa-eye", title: "Battle Spectator Mode", text: "شاهد معارك الآخرين بث مباشر وتعلم من أسلوبهم وسرعتهم في الإجابة." }
    ]},
    live_sessions: { title: "Live Broadcast Sessions", features: [
        { icon: "fas fa-signal", title: "جلسات تفاعلية مباشرة", text: "انضم للجلسة وأجب على أسئلة المحاضر مباشرة. ترى إجاباتك وإجابات زملائك في نفس اللحظة." },
        { icon: "fas fa-chart-bar", title: "إحصائياتك آنية", text: "بعد كل سؤال ترى نسبة الإجابات الصحيحة والخاطئة من كل الحضور فوراً — لتعرف أين أنت." },
        { icon: "fas fa-history", title: "تسجيلات ومراجعة", text: "لم تتمكن من الحضور؟ راجع الجلسة كاملة مع كل الأسئلة والشروحات في أي وقت بعدها." }
    ]},
    masterslog: { title: "MastersLog — دفتر العمليات الذكي", features: [
        { icon: "fas fa-file-medical-alt", title: "تسجيل كامل للحالات", text: "سجل كل عملية بتفاصيلها: التشخيص، الإجراء، الاختلاطات، التوقيت — كل شيء منظم ومصنف." },
        { icon: "fas fa-chart-pie", title: "تحليل بياني لتطورك", text: "رسوم بيانية تظهر توزيع عملياتك، معدل الاختلاطات، وتطورك المهني مع الزمن." },
        { icon: "fas fa-file-export", title: "CV Builder", text: "صدّر CV جاهز للتقديم على Fellowship أو Residency بضغطة واحدة — مبني تلقائياً من بيانات عملياتك." }
    ]},
    clinical_toolbox: { title: "Clinical Toolbox — حاسبات طبية", features: [
        { icon: "fas fa-fire", title: "Burn Calculator & Nutrition", text: "احسب نسبة الحروق، تقدير السوائل (Parkland)، والاحتياج الغذائي بدقة لكل مريض." },
        { icon: "fas fa-cut", title: "Z-Plasty & Graft Calculators", text: "حاسبات جراحية دقيقة لـ Z-Plasty، تقدير مساحة الـ Graft، وتخطيط الـ Flaps." },
        { icon: "fas fa-heartbeat", title: "Caprini VTE & Lipo Safety", text: "احسب مخاطر الـ VTE لكل مريض، وتقدير الحد الآمن للـ Liposuction بدقة." }
    ]},
    study_squad: { title: "Study Squad — جلسات تعاونية", features: [
        { icon: "fas fa-users", title: "جلسة مذاكرة جماعية", text: "ادخل مع زملائك في جلسة أسئلة تعاونية مباشرة. اتفقوا على المواضيع وابدأوا معاً." },
        { icon: "fas fa-tasks", title: "Exam Challenges", text: "أرسل تحدياً اختبارياً لكل أفراد Squad واتابع أداء كل شخص في لحظته بعد الانتهاء." },
        { icon: "fas fa-medal", title: "Squad Leaderboard", text: "كل Squad لها لوحة صدارة داخلية. تنافسوا بشكل صحي ومحفز للوصول للقمة معاً." }
    ]},
};