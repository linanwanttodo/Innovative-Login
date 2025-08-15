// 主要JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    // 添加页面加载动画
    const cards = document.querySelectorAll('.card');
    const categories = document.querySelectorAll('.category');
    
    // 为卡片添加延迟动画
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
    
    // 为分类添加延迟动画
    categories.forEach((category, index) => {
        category.style.animationDelay = `${index * 0.2}s`;
    });
    
    // 添加鼠标跟踪效果
    document.addEventListener('mousemove', function(e) {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });
    
    // 添加平滑滚动
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 通用表单验证函数
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// 通用登录处理函数
function handleLogin(event) {
    event.preventDefault();
    const form = event.target;
    
    if (validateForm(form)) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // 显示加载状态
        submitBtn.innerHTML = '<span class="loading"></span> 登录中...';
        submitBtn.disabled = true;
        
        // 模拟登录过程
        setTimeout(() => {
            alert('登录成功！这是一个演示页面。');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    } else {
        alert('请填写所有必填字段');
    }
}

// 添加输入框动画效果
function addInputAnimations() {
    const inputs = document.querySelectorAll('.input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}

// 创建粒子效果
function createParticles(container, count = 50) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(particle);
    }
}

// 工具函数：生成随机颜色
function getRandomColor() {
    const colors = [
        '#667eea', '#764ba2', '#f093fb', '#f5576c',
        '#4facfe', '#00f2fe', '#43e97b', '#38f9d7',
        '#ffecd2', '#fcb69f', '#a8edea', '#fed6e3'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 工具函数：创建背景动画
function createBackgroundAnimation(element) {
    const shapes = ['circle', 'square', 'triangle'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    const animatedShape = document.createElement('div');
    animatedShape.className = `bg-shape ${shape}`;
    animatedShape.style.left = Math.random() * 100 + '%';
    animatedShape.style.top = Math.random() * 100 + '%';
    animatedShape.style.backgroundColor = getRandomColor();
    
    element.appendChild(animatedShape);
    
    // 移除元素避免内存泄漏
    setTimeout(() => {
        if (animatedShape.parentNode) {
            animatedShape.parentNode.removeChild(animatedShape);
        }
    }, 10000);
}

