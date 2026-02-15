// --- js/main.js ---

function formatPrice(price) { return new Intl.NumberFormat('ar-EG').format(price); }

// --- Handle Telegram Subscription ---
function sendTelegramMessage(packageName, price, type, details = "") {
    const message = `
السلام عليكم د. بيشوي 👋
أرغب في الاشتراك في الباقة التالية:

📦 *الباقة:* ${packageName}
💰 *السعر:* ${price}
🏷️ *النوع:* ${type}
${details ? `📝 *التفاصيل:* ${details}` : ''}

في انتظار تفاصيل الدفع وتفعيل الحساب. شكراً!
    `.trim();

    navigator.clipboard.writeText(message).then(() => {
        alert("✅ تم نسخ تفاصيل الباقة بنجاح!\n\nسيتم تحويلك الآن إلى تيليجرام.. فقط قم بعمل 'لصق' (Paste) للرسالة في المحادثة.");
        window.open("https://t.me/DrBishoyAcademy", "_blank");
    }).catch(err => {
        console.error('Could not copy text: ', err);
        window.open("https://t.me/DrBishoyAcademy", "_blank");
    });
}

// --- 🎬 PLASTICOLOGY TV LOGIC ---

// 1. All Video IDs from your list
const allVideoIds = [
    "mxJDmg_Bn48", "oqWrMn8FKlQ", "e9g-6VXsUBQ", "iwVLHNyA_Ds", "V2sSOFiWlyE", 
    "EE-JQIiLljE", "ew-MwLxw6tM", "o9u49LjSpX0", "5PiNW9nHNAQ", "rCqgHzki4E4", 
    "NVwcSnAgJ2A", "Rb7h1sVPXdA", "00AWhK1OfE4", "4sP5qg7ei8k", "zqoD4UQDXm0", 
    "kosbGQ6PmtU", "H1VXfIwKFY0", "YcBcwwhsODM", "5qM9Tozue1I", "gPHWeeGMR1A", 
    "uN6u6UgyTK0", "C3wcdlyKB_c", "8oroVa3LHbE", "MC8wHiuiDDk", "lbn8x2HN4oE", 
    "h4N35ZMCcBg", "ehov9qQk9bU", "N9KwJTa5q3s", "NVyVXgk0l9Q", "ifwr8Y_aAgw", 
    "ks3ufXgYj_M", "uPgwkoEtmqw", "5EijQznfF8E", "rOtSSwszF2I", "PxmNsiL9BNw", 
    "kjDii2iygGM", "Xx7hm6BQLqo", "PsCY-E3hnCA", "DO2H3_xaQSs", "87u8HdWG6mY", 
    "eMkIG8Y5DHo", "Z-MNmTlEH78", "owYV3yu_AAg", "FgsdQvMz_5o", "U79bXOJNsWM", 
    "2EqP0P4Hsao", "5tAaThHZ_HE", "PrBf_ymRptY", "YNqenV6BIPI", "NcmH4P2GNes", 
    "Qq9fWWSKj0E", "aGfZEbB3sXU", "99JwgBSohnQ", "RdTrtXmUsSc", "5VyFy7EmUdE", 
    "0toh9eN6mgI", "SjKdvb5EOB0", "CdZ9lGvobEU", "2TXasQdKZrk", "p4WgZE6DggM", 
    "5lo5n26AfD0", "V0gdnHbMp8w", "0ahM94QCJEI", "9mpjbmeU0bY", "QyzCC3KUQuI", 
    "3BlrQm8zXrk", "Qyc3EzFol4k", "5jOwg2MmpBA", "lr7G9tb75dE", "ruMdNKsqZUc", 
    "nDQECWsUWhY", "XFoil6OMkjU", "nS4f1iP6FXU", "lmb-KP4dBlw", "PBxKRmsi4ro", 
    "Kks8MfwR858", "AgzkbUEmFLs", "RDea-9BGpOM", "pe7rn9375vo", "vr4-38PsPjM", 
    "AaaNosGhbWY", "fOzGarRvVDA", "-myls8ZYnXg", "VXF8WmA3c0A", "VIbaS276YXY", 
    "bga-Oxo-vlA", "Gfbw5NAWQeY", "IcmQQzMpAXA", "Iad2cD-I6n8", "Auc504AXMG4", 
    "6OsMbc48ATg", "jDo1hyVkLM4", "saaYIfHVcSE", "bHx9sOId6jg", "vEnEXZvAX5k"
];

// 2. Generic Professional Titles to cycle through (Since we can't fetch real titles without API)
const displayTitles = [
    "Advanced Flap Reconstruction", "Hand Surgery Principles", "Burn Resuscitation Protocols", 
    "Microsurgery Techniques", "Cleft Lip & Palate Repair", "Rhinoplasty Aesthetics", 
    "Breast Reconstruction Strategies", "Skin Grafting Masterclass", "Nerve Repair & Grafting", 
    "Facial Trauma Management", "Lower Limb Salvage", "Abdominal Wall Reconstruction", 
    "Tendons Repair Algorithms", "Congenital Hand Anomalies", "Head & Neck Tumors",
    "Blepharoplasty Techniques", "Otoplasty & Ear Reconstruction", "Liposuction & Body Contouring",
    "Tissue Expansion Principles", "Laser Surgery Fundamentals"
];

// 3. Shuffle Function (Fisher-Yates Algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderNetflixSlider() {
    const slider = document.getElementById('video-slider');
    if(!slider) return;
    
    // Shuffle the video IDs
    const shuffledVideos = shuffleArray([...allVideoIds]);
    
    // Take the first 20 videos to display in the slider (for performance)
    const videosToDisplay = shuffledVideos.slice(0, 20);

    // Generate HTML
    slider.innerHTML = videosToDisplay.map((videoId, index) => {
        // Assign a title from our list (looping if necessary)
        const title = displayTitles[index % displayTitles.length];
        
        return `
        <div class="video-card" onclick="openVideoModal('${videoId}')">
            <img src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg" alt="Plasticology Video" loading="lazy">
            <div class="video-info">
                <h4 class="text-white text-xs font-bold text-shadow">${title}</h4>
                <div class="mt-1 flex items-center gap-2">
                    <i class="fas fa-play-circle text-red-600 text-lg"></i>
                    <span class="text-[10px] text-gray-300">Watch Sample</span>
                </div>
            </div>
        </div>`;
    }).join('');
}

function slideLeft() {
    const slider = document.getElementById('video-slider');
    slider.scrollBy({ left: -300, behavior: 'smooth' });
}

function slideRight() {
    const slider = document.getElementById('video-slider');
    slider.scrollBy({ left: 300, behavior: 'smooth' });
}

function openVideoModal(id) { 
    if(!videoModal) initDOMElements();
    player.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`; 
    videoModal.classList.remove('hidden'); 
    document.body.style.overflow = 'hidden'; 
}

// --- CARD CREATION LOGIC ---

function createFullPackageCardHTML(pkg) {
    const isScaled = pkg.isScaled || false;
    const saving = pkg.originalPrice ? pkg.originalPrice - pkg.price : 0;
    const savingText = saving > 0 ? `<span class="bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full animate-pulse">🎁 توفير ${formatPrice(saving)}</span>` : '';
    const scaleClass = isScaled ? 'transform md:scale-105 z-10 border-2 border-purple-300' : 'opacity-90 hover:opacity-100';
    
    const qBankGiftHTML = pkg.includesQBank ? 
        `<li class="flex items-center p-2 rounded-lg bg-gradient-to-r from-pink-50 to-white border border-pink-100"><div class="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center ml-3 shadow-md animate-pulse"><i class="fas fa-gift text-sm"></i></div><span class="font-bold text-pink-600">Free QBank Gift Included!</span></li>` 
        : '';

    return `
        <div class="glass-card p-8 flex flex-col h-full ${scaleClass}">
            ${pkg.highlight ? `<div class="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-bl-2xl shadow-md">🔥 ${pkg.highlight}</div>` : ''}
            
            <div class="mb-4">
                <h3 class="text-2xl font-black text-gray-800">${pkg.duration === 1 ? 'Start' : (pkg.duration === 3 ? 'Pro' : 'Elite')} Plan</h3>
                <p class="text-sm font-bold text-purple-600 uppercase tracking-wider">${pkg.title} - مراجعة مكثفة</p>
            </div>

            <div class="mb-6">
                <p class="text-5xl font-black text-gray-900 tracking-tight">${formatPrice(pkg.price)}<span class="text-lg text-gray-500 font-medium"> ج.م</span></p>
                ${pkg.originalPrice ? `<p class="text-gray-400 line-through text-sm mt-1">${formatPrice(pkg.originalPrice)} ج.م</p>` : ''}
            </div>
            
            <div class="mb-6">
                ${savingText}
            </div>

            <ul class="space-y-4 mb-8 flex-grow text-gray-600 text-sm font-medium">
                ${qBankGiftHTML}
                <li class="flex items-center gap-2"><i class="fas fa-headset text-purple-600"></i>دعم فني وعلمي 24/7</li>
                <li class="flex items-center gap-2"><i class="fas fa-search text-purple-600"></i>محرك بحث شامل (Global Search)</li>
                <li class="flex items-center"><div class="w-6 h-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center ml-3"><i class="fas fa-video text-xs"></i></div>شرح مكثف للمنهج (Revision)</li>
                <li class="flex items-center"><div class="w-6 h-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center ml-3"><i class="fas fa-check text-xs"></i></div>+200 محاضرة HD</li>
                <li class="flex items-center"><div class="w-6 h-6 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center ml-3"><i class="fas fa-star text-xs"></i></div>${pkg.recommendation}</li>
            </ul>

            <div class="flex gap-2">
                <button onclick="sendTelegramMessage('${pkg.title} (${pkg.duration === 1 ? 'Start' : (pkg.duration === 3 ? 'Pro' : 'Elite')})', '${formatPrice(pkg.price)} ج.م', 'شرح ومراجعة مكثفة')" class="btn-candy flex-grow py-4 font-bold text-lg shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group">
                    <span>اشترك الآن</span>
                    <i class="fas fa-arrow-right group-hover:-translate-x-1 transition-transform"></i>
                </button>
                <button onclick="document.getElementById('plasticology-tv').scrollIntoView({behavior: 'smooth'})" class="w-12 rounded-full border border-gray-200 hover:bg-red-50 hover:text-red-600 text-gray-400 flex items-center justify-center transition-colors" title="Watch Samples">
                    <i class="fab fa-youtube text-xl"></i>
                </button>
            </div>
        </div>`;
}

function createQBankCardHTML(pkg) {
    const isScaled = pkg.duration === 6; 
    const scaleClass = isScaled ? 'border-2 border-teal-300' : '';
    
    return `
        <div class="glass-card p-6 flex flex-col h-full ${scaleClass}">
            <div class="w-12 h-12 rounded-2xl bg-${pkg.theme}-100 text-${pkg.theme}-600 flex items-center justify-center text-xl mb-4 shadow-sm">
                <i class="fas fa-laptop-code"></i>
            </div>
            
            <h3 class="text-xl font-bold text-gray-800 mb-1">QBank ${pkg.title}</h3>
            <p class="text-3xl font-black text-gray-900 mb-2">${formatPrice(pkg.price)}<span class="text-sm font-medium text-gray-500"> ج.م</span></p>
            
            <div class="mb-4 bg-purple-50 p-3 rounded-lg border border-purple-100">
                <p class="text-xs font-bold text-purple-700 mb-1">🎁 هدية مجانية:</p>
                <div class="flex items-center gap-2 text-sm text-gray-700 font-bold">
                    <i class="fas fa-broadcast-tower text-pink-500 animate-pulse"></i> Plasticology Radio
                </div>
                <p class="text-[10px] text-gray-500 mt-1">مراجعة صوتية مركزة (مختلفة عن الشرح التفصيلي)</p>
            </div>

            <ul class="space-y-2 mb-6 flex-grow text-gray-600 text-xs font-medium">
                <li class="flex items-center gap-2"><i class="fas fa-headset text-teal-600"></i>دعم فني وعلمي 24/7</li>
                <li class="flex items-center gap-2"><i class="fas fa-search text-teal-600"></i>محرك بحث شامل (Global Search)</li>
                <li class="border-t border-gray-100 my-2 pt-2 text-gray-400 text-[10px] font-bold">أنماط المذاكرة:</li>
                <li class="flex items-center gap-2"><i class="fas fa-layer-group text-blue-500"></i>نظام الكروت (Anki Flashcards Style)</li>
                <li class="flex items-center gap-2"><i class="fas fa-check-double text-blue-500"></i>Matching & MCQ Styles</li>
                <li class="flex items-center gap-2"><i class="fas fa-eye text-blue-500"></i>القراءة المباشرة (Read Answered)</li>
                <li class="flex items-center gap-2"><i class="fas fa-play-circle text-blue-500"></i>نظام سؤال بسؤال (Study Mode)</li>
                <li class="border-t border-gray-100 my-2 pt-2 text-gray-400 text-[10px] font-bold">أدوات الفلترة والتقييم:</li>
                <li class="flex items-center gap-2"><i class="fas fa-filter text-orange-500"></i>فلترة ذكية (أخطائي، المؤجلات)</li>
                <li class="flex items-center gap-2"><i class="fas fa-history text-orange-500"></i>امتحانات سابقة (Past Exams)</li>
                <li class="flex items-center gap-2"><i class="fas fa-fist-raised text-red-500"></i>Battle Arena Mode</li>
            </ul>

            <div class="flex gap-2">
                <button onclick="sendTelegramMessage('QBank ${pkg.title}', '${formatPrice(pkg.price)} ج.م', 'بنك أسئلة فقط')" class="flex-grow py-2.5 rounded-xl bg-gray-50 hover:bg-${pkg.theme}-50 text-gray-700 hover:text-${pkg.theme}-600 font-bold transition-colors text-center border border-gray-200">
                    اشتراك
                </button>
                 <button onclick="document.getElementById('plasticology-tv').scrollIntoView({behavior: 'smooth'})" class="w-10 rounded-xl border border-gray-200 hover:bg-red-50 hover:text-red-600 text-gray-400 flex items-center justify-center transition-colors">
                    <i class="fab fa-youtube"></i>
                </button>
            </div>
        </div>`;
}

function createGroupCardHTML(group, type) {
    const basePackages = packagesData.filter(p => p.category === type);
    const sortedPackages = basePackages.sort((a,b) => a.duration - b.duration);
    
    let priceDetailsHTML = sortedPackages.map(pkg => {
        const newPrice = pkg.price * (1 - group.discount);
        return `
        <div class="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
            <span class="text-gray-600 font-medium">${pkg.duration} ${pkg.duration === 1 ? 'شهر' : 'شهور'}</span>
            <div class="text-left">
                <span class="block font-bold text-${group.theme}-600">${formatPrice(newPrice)} ج.م</span>
                <span class="text-xs text-gray-500 font-bold">(للفرد)</span>
                <span class="text-xs text-gray-400 line-through block">${formatPrice(pkg.price)}</span>
            </div>
        </div>`
    }).join('');

    return `
        <div class="glass-card p-6 border-t-4 border-${group.theme}-500">
            <div class="w-16 h-16 rounded-full bg-${group.theme}-100 text-${group.theme}-600 flex items-center justify-center text-2xl mb-4 mx-auto">
                <i class="fas ${group.icon}"></i>
            </div>
            
            <div class="text-center mb-6">
                <h4 class="text-xl font-bold text-gray-800">${group.name}</h4>
                <p class="text-sm text-gray-500 mt-1">${group.description}</p>
                <div class="mt-3 inline-block bg-${group.theme}-50 text-${group.theme}-700 px-4 py-1 rounded-full font-bold text-sm">
                    خصم ${group.discount * 100}%
                </div>
            </div>
            
            <div class="bg-gray-50 rounded-xl p-4 mb-6">
                ${priceDetailsHTML}
            </div>
            
            <button onclick="sendTelegramMessage('${group.name}', 'خصم ${group.discount * 100}%', 'مجموعة (${group.description})')" class="w-full block bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors text-center">
                تكوين مجموعة
            </button>
        </div>`;
}

function renderChapterBasedCard() {
    const container = document.getElementById('chapter-based-card-container');
    if (!container) return;
    container.innerHTML = `
        <div class="glass-card p-8 text-center flex flex-col h-full border-2 border-purple-200 bg-gradient-to-b from-white to-purple-50 shadow-xl relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-bl-xl shadow-sm">
                Recommended for Residents 👨‍⚕️
            </div>
            
            <div class="w-20 h-20 bg-white rounded-full mx-auto shadow-md flex items-center justify-center text-3xl text-purple-600 mb-6">
                <i class="fas fa-user-md"></i>
            </div>
            <h3 class="text-2xl font-black text-gray-800 mb-2">Residents Bundles</h3>
            <p class="text-purple-700 font-bold text-sm mb-4">نظام النواب والزمالة</p>
            
            <div class="text-right bg-white/60 p-4 rounded-xl mb-6 text-sm leading-relaxed text-gray-600 border border-purple-100">
                <p class="font-bold mb-2">لماذا هذا النظام هو الأنسب لك؟</p>
                <p>صُمم خصيصاً للنواب (Residents) ومتدربي الزمالة الذين يرغبون في تعلم مهارات جراحة التجميل دون ضغط الامتحانات.</p>
                <p class="mt-2">اختر الباب الخاص بالـ <span class="font-bold text-purple-600">Rotation</span> الحالي وركز عليه تماماً. مدة <span class="font-bold text-purple-600">شهر كامل</span> لكل باب هي مدة كافية جداً علمياً وعملياً ومادياً لإتقان المهارات المطلوبة.</p>
                <ul class="mt-4 space-y-2 text-xs font-bold text-purple-800">
                    <li class="flex items-center gap-2"><i class="fas fa-search"></i> Global Search Included</li>
                    <li class="flex items-center gap-2"><i class="fas fa-headset"></i> 24/7 Scientific Support</li>
                </ul>
            </div>
            
            <button onclick="openChapterSelectionModal()" class="btn-candy w-full py-4 mt-auto shadow-lg hover:shadow-xl">
                <i class="fas fa-sliders-h ml-2"></i>تخصيص الباقة
            </button>
        </div>`;
}

function createTestimonialHTML(testimonial) {
    const countryCode = (testimonial.country || '').toLowerCase();
    const flagHtml = countryCode ? `<img src="https://flagcdn.com/w20/${countryCode}.png" alt="${countryCode}" class="inline-block w-4 h-auto mr-1 opacity-80">` : ''; 

    return `
    <div class="glass-card p-6 flex flex-col hover:-translate-y-1 transition-transform">
        <div class="flex items-center gap-4 mb-4">
            <img src="${testimonial.avatarUrl}" alt="User" class="w-12 h-12 rounded-full object-cover ring-2 ring-purple-100">
            <div>
                <h4 class="font-bold text-gray-800 text-sm">د. ${testimonial.initials}</h4>
                <p class="text-xs text-gray-500 flex items-center">${flagHtml} ${testimonial.title}</p>
            </div>
        </div>
        <p class="text-gray-600 text-sm leading-relaxed italic">"${testimonial.quote}"</p>
        <div class="mt-4 flex text-yellow-400 text-xs">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
    </div>`;
}

function createFaqItemHTML(faqItem) {
    return `
    <div class="glass-card overflow-hidden">
        <button class="w-full text-left p-5 flex justify-between items-center accordion-toggle hover:bg-gray-50 transition-colors">
            <h3 class="font-bold text-gray-800">${faqItem.q}</h3>
            <i class="fas fa-chevron-down text-gray-400 transition-transform duration-300"></i>
        </button>
        <div class="accordion-content">
            <div class="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                ${faqItem.a}
            </div>
        </div>
    </div>`;
}

function createChapterAccordionHTML(chapterTitle, lectures) {
    const lecturesHTML = lectures.map(lecture =>
        `<li class="flex items-center p-3 rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700 transition-colors cursor-pointer group">
            <span class="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-purple-200 flex items-center justify-center text-xs mr-3 text-gray-500 group-hover:text-purple-700 transition-colors"><i class="fas fa-play"></i></span>
            <span class="text-sm font-medium">${lecture}</span>
        </li>`
    ).join('');
    
    return `
        <div class="glass-card overflow-hidden">
            <button class="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors chapter-title" onclick="toggleAccordion(this)">
                <h3 class="font-bold text-gray-800 flex items-center gap-3">
                    <i class="fas fa-folder text-yellow-400"></i> ${chapterTitle}
                </h3>
                <i class="fas fa-chevron-down text-gray-400 transition-transform duration-300"></i>
            </button>
            <div class="accordion-content bg-gray-50/50">
                <ul class="p-4 space-y-1">
                    ${lecturesHTML}
                </ul>
            </div>
        </div>
    `;
}

async function fetchAndRenderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonials-grid');
    if (!testimonialsGrid) return;

    testimonialsGrid.innerHTML = '<p class="text-center col-span-full text-gray-500">جاري تحميل آراء الأبطال...</p>';
    const reviewsApiUrl = 'https://script.google.com/macros/s/AKfycbwFOrAT-iglbDfcilsB3fNFiF0iLhV_HUAQB8KevdhXh8Y-JQv2izZBP7xlYhWNxOOmRA/exec';

    try {
        const response = await fetch(reviewsApiUrl);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
                testimonialsGrid.innerHTML = data.map(createTestimonialHTML).join('');
        } else {
                testimonialsGrid.innerHTML = '<p class="text-center col-span-full text-gray-500">لا توجد آراء حاليًا.</p>';
        }
    } catch (error) {
        console.error('Failed to fetch testimonials:', error);
        testimonialsGrid.innerHTML = '<p class="text-center col-span-full text-red-500">حدث خطأ أثناء تحميل الآراء. يرجى المحاولة مرة أخرى لاحقًا.</p>';
    }
}

// --- RENDER LOGIC ---
function renderAll() {
    // 1. Full Packages
    const fullPackageContainer = document.getElementById('full-package-cards');
    if (fullPackageContainer) {
        const fullPackages = packagesData.filter(p => p.category === 'full-package').sort((a, b) => a.duration - b.duration);
        fullPackageContainer.innerHTML = fullPackages.map(createFullPackageCardHTML).join('');
    }

    // 2. MCQ Packages
    const mcqContainer = document.getElementById('mcq-cards');
    if (mcqContainer) {
        const mcqPackages = packagesData.filter(p => p.category === 'mcq').sort((a, b) => a.duration - b.duration);
        mcqContainer.innerHTML = mcqPackages.map(createQBankCardHTML).join('');
    }

    // 3. Chapter Based
    renderChapterBasedCard();
    
    // 4. Groups Tab
    const groupsTabContainer = document.getElementById('groups-tab');
    if (groupsTabContainer) {
        groupsTabContainer.innerHTML = `
        <div class="flex justify-center gap-2 mb-8">
            <button class="filter-pill active" onclick="showSubTab('group-lectures', this)">مجموعات الشرح</button>
            <button class="filter-pill" onclick="showSubTab('group-qbank', this)">مجموعات الأسئلة</button>
        </div>
        
        <div>
            <div id="group-lectures-content" class="sub-tab-content active">
                <div id="group-lectures-cards" class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"></div>
            </div>
            <div id="group-qbank-content" class="sub-tab-content">
                <div id="group-qbank-cards" class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"></div>
            </div>
        </div>`;

        document.getElementById('group-lectures-cards').innerHTML = groupDiscounts.lectures.map(group => createGroupCardHTML(group, 'full-package')).join('');
        document.getElementById('group-qbank-cards').innerHTML = groupDiscounts.qbank.map(group => createGroupCardHTML(group, 'mcq')).join('');
    }
    
    // 5. Others
    fetchAndRenderTestimonials();
    const faqContainer = document.getElementById('faq-accordion');
    if(faqContainer) {
        faqContainer.innerHTML = faqData.map(createFaqItemHTML).join('');
        document.querySelectorAll('.accordion-toggle').forEach(button => button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            button.querySelector('i').classList.toggle('rotate-180');
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
        }));
    }
    
    const currentYearEl = document.getElementById('current-year');
    if(currentYearEl) currentYearEl.textContent = new Date().getFullYear();

    const chaptersListContainer = document.getElementById('chapters-accordion-list');
    if (chaptersListContainer) {
        chaptersListContainer.innerHTML = Object.keys(chaptersData).map(chapter => createChapterAccordionHTML(chapter, chaptersData[chapter])).join('');
    }
}

// --- UTILITIES ---
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('i:last-child');
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.classList.remove('rotate-180');
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add('rotate-180');
    }
}

function showPage(pageId, button) {
    document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sub-nav-card').forEach(el => el.classList.remove('active'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: targetPage.offsetTop - 100, behavior: 'smooth' });
    }
    if (button) button.classList.add('active');
}

function showMainTab(tabId, button) {
    button.parentElement.querySelectorAll('.tab-pill').forEach(el => el.classList.remove('active'));
    button.classList.add('active');
    button.closest('#pricing').querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

function showSubTab(tabId, button) {
    const parent = button.closest('.tab-content');
    parent.querySelectorAll('.sub-tab-content').forEach(el => el.classList.remove('active'));
    parent.querySelector(`#${tabId}-content`).classList.add('active');
    parent.querySelectorAll('.filter-pill').forEach(el => el.classList.remove('active'));
    button.classList.add('active');
}

// --- MODALS ---
let featureModal, modalTitle, modalContent, videoModal, player, videoId;
let chapterModal, chaptersListContainer, customPackagePriceEl, customPackageSubscribeBtn;

function initDOMElements() {
    featureModal = document.getElementById('featureModal');
    modalTitle = document.getElementById('modalTitle');
    modalContent = document.getElementById('modalContent');
    videoModal = document.getElementById('videoModal');
    player = document.getElementById('youtube-player');
    videoId = "AJH8-imQxJA";
    chapterModal = document.getElementById('chapter-selection-modal');
    chaptersListContainer = document.getElementById('chapters-list-container');
    customPackagePriceEl = document.getElementById('custom-package-price');
    customPackageSubscribeBtn = document.getElementById('custom-package-subscribe-btn');
}

function openFeatureModal(featureKey) {
    if(!featureModal) initDOMElements();
    const data = featureDetails[featureKey];
    modalTitle.innerText = data.title;
    modalContent.innerHTML = '';
    data.features.forEach(feature => { modalContent.innerHTML += `<div class="bg-gray-50 p-4 rounded-xl flex items-start gap-4"><div class="text-2xl text-purple-500"><i class="${feature.icon}"></i></div><div><h4 class="font-bold text-gray-800 mb-1">${feature.title}</h4><p class="text-gray-500 text-sm">${feature.text}</p></div></div>`; });
    featureModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}
function closeFeatureModal() { featureModal.classList.add('hidden'); document.body.style.overflow = 'auto'; }

function openVideoModal() { 
    if(!videoModal) initDOMElements();
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`; 
    videoModal.classList.remove('hidden'); 
    document.body.style.overflow = 'hidden'; 
}
function closeVideoModal() { 
    if(!videoModal) initDOMElements();
    player.src = ""; 
    videoModal.classList.add('hidden'); 
    document.body.style.overflow = 'auto'; 
}

function openChapterSelectionModal() {
    if(!chapterModal) initDOMElements();
    let chapterHtml = '';
    Object.keys(chapterGroups).forEach((groupName, index) => {
        const group = chapterGroups[groupName];
        chapterHtml += `
            <label class="glass-card p-4 flex items-center justify-between cursor-pointer hover:border-purple-300 transition-colors ${group.disabled ? 'opacity-50 cursor-not-allowed' : ''}">
                <div class="flex items-center gap-3">
                    <input type="checkbox" id="chapter-group-${index}" class="w-5 h-5 accent-purple-600 chapter-checkbox" value="${groupName}" ${group.disabled ? 'disabled' : ''}>
                    <span class="font-bold text-gray-700">${groupName}</span>
                </div>
                ${group.hours > 0 ? `<span class="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-500">${group.hours}h</span>` : ''}
            </label>
        `;
    });
    chaptersListContainer.innerHTML = chapterHtml;
    updateCustomPackagePrice();
    chaptersListContainer.querySelectorAll('.chapter-checkbox').forEach(checkbox => checkbox.addEventListener('change', updateCustomPackagePrice));
    chapterModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}
function closeChapterSelectionModal() { chapterModal.classList.add('hidden'); document.body.style.overflow = 'auto'; }

function updateCustomPackagePrice() {
    if(!chaptersListContainer) initDOMElements();
    const checkedBoxes = chaptersListContainer.querySelectorAll('.chapter-checkbox:checked');
    const selectedCount = checkedBoxes.length;
    // Hardcoded to 1 Month for Residents
    const selectedDuration = 1; 
    
    let price = 0;
    if (selectedCount > 0 && selectedCount <= 3) {
            price = customChapterPrices[selectedCount] ? customChapterPrices[selectedCount][selectedDuration] || 0 : 0;
    } else if (selectedCount > 3) {
            const fullPackage = packagesData.find(p => p.category === 'full-package' && p.duration == selectedDuration);
            if(fullPackage) price = fullPackage.price;
    }
    customPackagePriceEl.textContent = `${formatPrice(price)} ج.م`;
    
    // Update the Subscribe Button in the Modal to use the Telegram Function
    if (selectedCount > 0) {
        customPackageSubscribeBtn.classList.remove('opacity-50', 'pointer-events-none');
        
        // Collect Chapter Names
        const chapterNames = Array.from(checkedBoxes).map(cb => cb.value).join(', ');
        
        customPackageSubscribeBtn.removeAttribute('href'); // Remove default href
        customPackageSubscribeBtn.onclick = () => {
            sendTelegramMessage(
                'Residents Bundle', 
                `${formatPrice(price)} ج.م`, 
                'باقة نواب (فصول مختارة)', 
                `عدد الأبواب: ${selectedCount} - الفصول: ${chapterNames}`
            );
        };
    } else {
        customPackageSubscribeBtn.classList.add('opacity-50', 'pointer-events-none');
        customPackageSubscribeBtn.onclick = null;
    }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    initDOMElements();
    renderAll();
    renderNetflixSlider(); // Added this
});