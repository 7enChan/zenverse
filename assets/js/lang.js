function switchLanguage(lang) {
    // 保存语言选择到 localStorage
    localStorage.setItem('preferredLanguage', lang);

    // 切换内容可见性
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.classList.remove('visible', 'active');
        if (el.getAttribute('data-lang') === lang) {
            el.classList.add('visible', 'active');
        }
    });

    // 切换页面标题
    const titles = {
        'zh-CN': '清醒呼吸 - 有意识地呼吸',
        'zh-TW': '清醒呼吸 - 有意識地呼吸',
        'en': 'Breathe2Heal - Conscious Breathing'
    };
    document.getElementById('page-title').textContent = titles[lang];

    // 切换导航栏标题
    document.querySelectorAll('.nav-title').forEach(el => {
        el.classList.remove('active');
        if (el.id === `nav-title-${lang}`) {
            el.classList.add('active');
        }
    });

    // 切换页脚文本
    document.querySelectorAll('.footer-text').forEach(el => {
        el.classList.remove('active');
        if (el.id.endsWith(lang)) {
            el.classList.add('active');
        }
    });

    // 更新语言选择器
    document.querySelector('.language-selector select').value = lang;

    // 控制ICP备案信息的显示/隐藏
    const icpInfo = document.getElementById('icp-info');
    if (icpInfo) {
        icpInfo.style.display = lang === 'en' ? 'none' : 'block';
    }

    // 切换图片
    document.querySelectorAll('.app-screenshots img').forEach(img => {
        if (img.getAttribute('data-lang') === lang) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

// 页面加载时检查并应用保存的语言设置
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        switchLanguage(savedLanguage);
    } else {
        // 如果没有保存的语言设置，默认使用简体中文
        switchLanguage('zh-CN');
    }
});

// 添加语言选择器的事件监听器
document.querySelector('.language-selector select').addEventListener('change', function() {
    switchLanguage(this.value);
});