// --- js/main.js ---

function formatPrice(price) { return new Intl.NumberFormat('ar-EG').format(price); }

function createFullPackageCardHTML(pkg) {
    const isScaled = pkg.isScaled || false;
    const saving = pkg.originalPrice ? pkg.originalPrice - pkg.price : 0;
    const savingText = saving > 0 ? `<span class="bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full animate-pulse">🎁 توفير ${formatPrice(saving)}</span>` : '';
    const scaleClass = isScaled ? 'transform md:scale-105 z-10 border-2 border-purple-300' : 'opacity-90 hover:opacity-100';
    
    return `
        <div class="glass-card p-8 flex flex-col h-full ${scaleClass}">
            ${pkg.highlight ? `<div class="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-bl-2xl shadow-md">🔥 ${pkg.highlight}</div>` : ''}
            
            <div class="mb-4">
                <h3 class="text-2xl font-black text-gray-800">${pkg.duration === 1 ? 'Start' : (pkg.duration === 3 ? 'Pro' : 'Elite')} Plan</h3>
                <p class="text-sm font-bold text-purple-600 uppercase tracking-wider">${pkg.title}</p>
            </div>

            <div class="mb-6">
                <p class="text-5xl font-black text-gray-900 tracking-tight">${formatPrice(pkg.price)}<span class="text-lg text-gray-500 font-medium"> ج.م</span></p>
                ${pkg.originalPrice ? `<p class="text-gray-400 line-through text-sm mt-1">${formatPrice(pkg.originalPrice)} ج.م</p>` : ''}
            </div>
            
            <div class="mb-6">
                ${savingText}
            </div>

            <ul class="space-y-4 mb-8 flex-grow text-gray-600 text-sm font-medium">
                <li class="flex items-center"><div class="w-6 h-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center ml-3"><i class="fas fa-check text-xs"></i></div>وصول كامل للمنهج</li>
                <li class="flex items-center"><div class="w-6 h-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center ml-3"><i class="fas fa-check text-xs"></i></div>+200 محاضرة HD</li>
                <li class="flex items-center"><div class="w-6 h-6 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center ml-3"><i class="fas fa-star text-xs"></i></div>${pkg.recommendation}</li>
            </ul>

            <a href="https://t.me/DrBishoyAcademy" target="_blank" class="btn-candy w-full py-4 font-bold text-lg shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group">
                <span>اشترك الآن</span>
                <i class="fas fa-arrow-right group-hover:-translate-x-1 transition-transform"></i>
            </a>
        </div>`;
}

function createQBankCardHTML(pkg) {
    const isScaled = pkg.duration === 6; // Highlight 6 months for QBank
    const scaleClass = isScaled ? 'border-2 border-teal-300' : '';
    
    return `
        <div class="glass-card p-6 flex flex-col h-full ${scaleClass}">
            <div class="w-12 h-12 rounded-2xl bg-${pkg.theme}-100 text-${pkg.theme}-600 flex items-center justify-center text-xl mb-4 shadow-sm">
                <i class="fas fa-laptop-code"></i>
            </div>
            
            <h3 class="text-xl font-bold text-gray-800 mb-1">QBank ${pkg.title}</h3>
            <p class="text-3xl font-black text-gray-900 mb-2">${formatPrice(pkg.price)}<span class="text-sm font-medium text-gray-500"> ج.م</span></p>
            
            <ul class="space-y-2 mb-6 flex-grow text-gray-500 text-sm">
                <li class="flex items-center"><i class="fas fa-check text-green-500 ml-2"></i>+11000 MCQ</li>
                <li class="flex items-center"><i class="fas fa-check text-green-500 ml-2"></i>وضع الامتحانات</li>
            </ul>

            <a href="https://t.me/DrBishoyAcademy" target="_blank" class="w-full py-2.5 rounded-xl bg-gray-50 hover:bg-${pkg.theme}-50 text-gray-700 hover:text-${pkg.theme}-600 font-bold transition-colors text-center border border-gray-200">
                اختيار
            </a>
        </div>`;
}

function createComboCardHTML(pkg) {
    const isScaled = pkg.isScaled || false;
    const saving = pkg.originalPrice ? pkg.originalPrice - pkg.price : 0;
    const scaleClass = isScaled ? 'transform md:scale-105 z-10 border-2 border-yellow-400 shadow-yellow-200' : '';

    return `
        <div class="glass-card p-8 flex flex-col h-full relative overflow-hidden ${scaleClass}">
            <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            
            <div class="mb-4">
                <div class="flex justify-between items-start">
                    <h3 class="text-2xl font-black text-gray-800">Combo Bundle</h3>
                    ${pkg.highlight ? `<span class="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded-lg">${pkg.highlight}</span>` : ''}
                </div>
                <p class="text-sm font-bold text-yellow-600 uppercase">${pkg.title}</p>
            </div>

            <div class="mb-6">
                <p class="text-5xl font-black text-gray-900 tracking-tight">${formatPrice(pkg.price)}<span class="text-lg text-gray-500 font-medium"> ج.م</span></p>
                <div class="flex items-center gap-2 mt-1">
                    <p class="text-gray-400 line-through text-sm">${formatPrice(pkg.originalPrice)}</p>
                    <span class="text-green-600 text-xs font-bold">وفرت ${formatPrice(saving)}</span>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-3 mb-8">
                <div class="bg-purple-50 p-3 rounded-xl text-center">
                    <i class="fas fa-video text-purple-500 mb-1"></i>
                    <p class="text-xs font-bold text-purple-700">شرح كامل</p>
                </div>
                <div class="bg-teal-50 p-3 rounded-xl text-center">
                    <i class="fas fa-laptop-code text-teal-500 mb-1"></i>
                    <p class="text-xs font-bold text-teal-700">بنك أسئلة</p>
                </div>
            </div>

            <a href="https://t.me/DrBishoyAcademy" target="_blank" class="btn-candy w-full py-4 font-bold text-lg shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                <span>اقتنص الفرصة</span>
                <i class="fas fa-gem"></i>
            </a>
        </div>`;
}

function createGroupCardHTML(group, type) {
    const basePackages = packagesData.filter(p => p.category === type);
    // Sort packages: for full-package/combo use duration, for mcq use duration
    const sortedPackages = basePackages.sort((a,b) => a.duration - b.duration);
    
    let priceDetailsHTML = sortedPackages.map(pkg => {
        const newPrice = pkg.price * (1 - group.discount);
        return `
        <div class="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
            <span class="text-gray-600 font-medium">${pkg.duration} ${pkg.duration === 1 ? 'شهر' : 'شهور'}</span>
            <div class="text-left">
                <span class="block font-bold text-${group.theme}-600">${formatPrice(newPrice)} ج.م</span>
                <span class="text-xs text-gray-400 line-through">${formatPrice(pkg.price)}</span>
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
            
            <a href="https://t.me/DrBishoyAcademy" target="_blank" class="w-full block bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors text-center">
                تكوين مجموعة
            </a>
        </div>`;
}

function renderChapterBasedCard() {
    const container = document.getElementById('chapter-based-card-container');
    if (!container) return;
    container.innerHTML = `
        <div class="glass-card p-8 text-center flex flex-col h-full border border-purple-100 bg-gradient-to-b from-white to-purple-50">
            <div class="w-20 h-20 bg-white rounded-full mx-auto shadow-md flex items-center justify-center text-3xl text-purple-600 mb-6">
                <i class="fas fa-layer-group"></i>
            </div>
            <h3 class="text-2xl font-black text-gray-800 mb-2">Chapter Based</h3>
            <p class="text-gray-500 mb-8">صمم باقتك الخاصة. اختر الفصول التي تحتاج لتقويتها وادفع فقط مقابل ما تحتاج.</p>
            
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

// --- MISSING FUNCTION ADDED HERE ---
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

    // 3. Combo Packages
    const comboContainer = document.getElementById('combo-cards');
    if (comboContainer) {
        const comboPackages = packagesData.filter(p => p.category === 'combo').sort((a, b) => a.duration - b.duration);
        comboContainer.innerHTML = comboPackages.map(createComboCardHTML).join('');
    }

    // 4. Chapter Based
    renderChapterBasedCard();
    
    // 5. Groups Tab
    const groupsTabContainer = document.getElementById('groups-tab');
    if (groupsTabContainer) {
        groupsTabContainer.innerHTML = `
        <div class="flex justify-center gap-2 mb-8">
            <button class="filter-pill active" onclick="showSubTab('group-lectures', this)">مجموعات الشرح</button>
            <button class="filter-pill" onclick="showSubTab('group-qbank', this)">مجموعات الأسئلة</button>
            <button class="filter-pill" onclick="showSubTab('group-combo', this)">مجموعات الكومبو</button>
        </div>
        
        <div>
            <div id="group-lectures-content" class="sub-tab-content active">
                <div id="group-lectures-cards" class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"></div>
            </div>
            <div id="group-qbank-content" class="sub-tab-content">
                <div id="group-qbank-cards" class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"></div>
            </div>
            <div id="group-combo-content" class="sub-tab-content">
                <div id="group-combo-cards" class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"></div>
            </div>
        </div>`;

        document.getElementById('group-lectures-cards').innerHTML = groupDiscounts.lectures.map(group => createGroupCardHTML(group, 'full-package')).join('');
        document.getElementById('group-qbank-cards').innerHTML = groupDiscounts.qbank.map(group => createGroupCardHTML(group, 'mcq')).join('');
        document.getElementById('group-combo-cards').innerHTML = groupDiscounts.combo.map(group => createGroupCardHTML(group, 'combo')).join('');
    }
    
    // 6. Others
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
    const selectedCount = chaptersListContainer.querySelectorAll('.chapter-checkbox:checked').length;
    const selectedDuration = document.querySelector('.duration-radio:checked').value;
    let price = 0;
    if (selectedCount > 0 && selectedCount <= 3) {
            price = customChapterPrices[selectedCount] ? customChapterPrices[selectedCount][selectedDuration] || 0 : 0;
    } else if (selectedCount > 3) {
            const fullPackage = packagesData.find(p => p.category === 'full-package' && p.duration == selectedDuration);
            if(fullPackage) price = fullPackage.price;
    }
    customPackagePriceEl.textContent = `${formatPrice(price)} ج.م`;
    if (selectedCount > 0) {
        customPackageSubscribeBtn.classList.remove('opacity-50', 'pointer-events-none');
    } else {
        customPackageSubscribeBtn.classList.add('opacity-50', 'pointer-events-none');
    }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    initDOMElements();
    renderAll();
});