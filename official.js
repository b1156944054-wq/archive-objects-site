/*
  文件/模块目的：
  v2.2 官方站轻交互：导航高亮、静态表单提示、页面进入反馈。

  输入输出与规则：
  输入为当前 URL 和页面 DOM；输出为导航 active 状态与表单提示。
  不连接后端，不读取用户数据，不提交真实客户信息。

  关键步骤为什么这样做：
  静态原型阶段先保证页面可用、跳转清晰；真正上线时再接邮件、表单或 CRM。
*/
(function () {
  const path = (location.pathname.split('/').pop() || 'official.html').toLowerCase();
  document.querySelectorAll('[data-page]').forEach((link) => {
    const href = (link.getAttribute('href') || '').split('/').pop().toLowerCase();
    if (href === path || (path.includes('project') && href.includes('project'))) {
      link.classList.add('is-active');
    }
  });

  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Prototype only: this form is not connected yet. Next step can connect it to email, Airtable, Notion, Google Forms, or a backend lead system.';
      }
    });
  });
})();
