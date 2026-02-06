/**
 * 爱心小屋 - 主脚本
 */

(function () {
  'use strict';

  // 移动端导航开关
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('.nav-list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      const isOpen = navList.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // 点击导航链接后关闭菜单
    navList.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // 首页：生成爱心网格装饰
  const heartGrid = document.getElementById('heartGrid');
  if (heartGrid) {
    const count = 12;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'heart-item';
      el.style.animationDelay = (i * 0.15) + 's';
      fragment.appendChild(el);
    }
    heartGrid.appendChild(fragment);
  }

  // 平滑滚动（针对锚点）
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
