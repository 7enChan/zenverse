document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 联系表单提交
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // 这里可以添加表单提交逻辑,例如使用AJAX发送数据到服务器
            alert('感谢您的留言!我们会尽快回复您。');
            contactForm.reset();
        });
    }

    // 响应式导航菜单
    const navToggle = document.createElement('button');
    navToggle.textContent = '菜单';
    navToggle.classList.add('nav-toggle');
    document.querySelector('nav').prepend(navToggle);

    navToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });
});