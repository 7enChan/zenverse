function getPreferredLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) {
        return browserLang.toLowerCase() === 'zh-tw' ? 'zh-TW' : 'zh-CN';
    } else {
        return 'en';
    }
}

function switchLanguage(lang) {
    // 保存语言选择到 localStorage，添加应用标识以避免冲突
    localStorage.setItem('nowistPreferredLanguage', lang);

    // 切换内容可见性
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.classList.remove('visible', 'active');
        if (el.getAttribute('data-lang') === lang) {
            el.classList.add('visible', 'active');
        }
    });

    // 为如是清单应用设置不同的标题
    const nowistTitles = {
        'zh-CN': '如是清单 - 让当下如其所是',
        'zh-TW': '如是清單 - 讓當下如其所是',
        'en': 'Nowist - Now is your list'
    };
    
    // 根据当前页面设置前缀
    const pagePath = window.location.pathname;
    let prefix = '';
    
    if (pagePath.includes('/privacy/')) {
        prefix = {
            'zh-CN': '隐私政策 - ',
            'zh-TW': '隱私政策 - ',
            'en': 'Privacy Policy - '
        }[lang];
    } else if (pagePath.includes('/support/')) {
        prefix = {
            'zh-CN': '技术支持 - ',
            'zh-TW': '技術支持 - ',
            'en': 'Technical Support - '
        }[lang];
    }
    
    document.getElementById('page-title').textContent = prefix + nowistTitles[lang];

    // 更新语言选择器
    document.querySelector('.language-selector select').value = lang;
}

// 页面加载时检查并应用如是清单应用的语言设置
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('nowistPreferredLanguage');
    if (savedLanguage) {
        switchLanguage(savedLanguage);
    } else {
        // 如果没有保存的语言设置，使用浏览器语言
        const detectedLanguage = getPreferredLanguage();
        switchLanguage(detectedLanguage);
    }
    
    // 添加语言选择器的事件监听器
    const languageSelector = document.querySelector('.language-selector select');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            switchLanguage(this.value);
        });
    }
}); 