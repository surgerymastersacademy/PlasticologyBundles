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

// ─── GROUP DISCOUNT CALCULATOR ───────────────────────────────────────────────

let currentDiscountPrice = 25000;

const discountTiers = [
    { label: 'Partners', members: '3 people',   discount: 15 },
    { label: 'Alliance', members: '5 people',   discount: 25 },
    { label: 'Legends',  members: '10+ people', discount: 35 },
];

function setDiscountPlan(price, button) {
    currentDiscountPrice = price;
    document.querySelectorAll('#discount-plan-selector button').forEach(btn => {
        btn.style.cssText = 'background:rgba(255,255,255,0.1); color:#cbd5e1; border-color:rgba(255,255,255,0.1)';
    });
    button.style.cssText = 'background:white; color:#0f172a; border-color:white; box-shadow:0 1px 3px rgba(0,0,0,0.2)';
    renderDiscountTiers();
}

function renderDiscountTiers() {
    const container = document.getElementById('discount-tiers');
    if (!container) return;
    container.innerHTML = discountTiers.map(g => {
        const savedEGP = Math.round(currentDiscountPrice * g.discount / 100);
        return `
        <div class="rounded-2xl p-4 text-center" style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.08)">
            <p class="text-2xl md:text-3xl font-black text-white leading-none">${g.discount}%</p>
            <p class="text-xs font-black uppercase tracking-wider mt-0.5" style="color:#4ade80">OFF</p>
            <div class="mt-2.5 pt-2.5" style="border-top:1px solid rgba(255,255,255,0.1)">
                <p class="text-base font-black leading-none" style="color:#86efac">${formatPrice(savedEGP)} EGP</p>
                <p class="text-xs mt-0.5" style="color:#94a3b8">saved per person</p>
            </div>
            <p class="text-xs font-bold mt-2" style="color:#cbd5e1">${g.label}</p>
            <p class="text-xs" style="color:#64748b">${g.members}</p>
        </div>`;
    }).join('');
}

function scrollToGroupSection() {
    const el = document.getElementById('group-discount-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
    // 1. Group discount tiers (default plan: Full Curriculum 25,000)
    renderDiscountTiers();

    // 2. Testimonials
    fetchAndRenderTestimonials();

    // 3. FAQ
    const faqContainer = document.getElementById('faq-accordion');
    if(faqContainer) {
        faqContainer.innerHTML = faqData.map(createFaqItemHTML).join('');
        document.querySelectorAll('.accordion-toggle').forEach(button => button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            button.querySelector('i').classList.toggle('rotate-180');
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
        }));
    }

    // 4. Footer year
    const currentYearEl = document.getElementById('current-year');
    if(currentYearEl) currentYearEl.textContent = new Date().getFullYear();

    // 5. Chapters accordion
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

// --- 🔍 SMART SEARCH ASSISTANT ---

function toggleSmartSearch(event) {
    event.stopPropagation();
    const panel = document.getElementById('smart-suggestions-panel');
    panel.classList.toggle('hidden');
}

function closeSmartSearch() {
    const panel = document.getElementById('smart-suggestions-panel');
    if (panel) panel.classList.add('hidden');
}

function handleSuggestion(key) {
    closeSmartSearch();

    function navTo(pageId) {
        const btn = [...document.querySelectorAll('.sub-nav-card')].find(b => b.getAttribute('onclick')?.includes(`'${pageId}'`));
        showPage(pageId, btn || null);
    }

    switch (key) {
        case 'pricing':
            navTo('bundles');
            break;
        case 'free_trial':
            window.open('https://plasticology.surgerymastersacademy.com/', '_blank');
            break;
        case 'reviews':
            navTo('testimonials');
            break;
        case 'book':
            window.open('https://plasticologybooks.surgerymastersacademy.com/', '_blank');
            break;
        case 'group_discount':
            navTo('bundles');
            setTimeout(() => {
                const el = document.getElementById('group-discount-section');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 500);
            break;
        case 'samples':
            setTimeout(() => {
                const el = document.getElementById('plasticology-tv');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            break;
        case 'curriculum':
            navTo('chapters');
            break;
        case 'support':
            window.open('https://t.me/DrBishoyAcademy', '_blank');
            break;
    }
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('#smart-search-bar') && !e.target.closest('#smart-suggestions-panel')) {
        closeSmartSearch();
    }
});

// Init
document.addEventListener('DOMContentLoaded', () => {
    initDOMElements();
    renderAll();
    renderNetflixSlider(); // Added this
});