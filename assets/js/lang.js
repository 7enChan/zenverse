function switchLanguage(lang) {
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
}

// 页面加载时默认显示简体中文
document.addEventListener('DOMContentLoaded', function() {
    switchLanguage('zh-CN');
});

// 添加语言选择器的事件监听器
document.querySelector('.language-selector select').addEventListener('change', function() {
    switchLanguage(this.value);
});