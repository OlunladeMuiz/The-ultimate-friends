const sidebarToggle = document.getElementById('sidebarToggle');
const sideBar = document.getElementById('sideBar');
sidebarToggle.addEventListener('click', () => {
  sideBar.classList.toggle('active');
  document.body.classList.toggle('sidebar-open');
});

// Optional: Hide sidebar when a link is clicked (for mobile UX)
document.querySelectorAll('.side-bar-list a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      sideBar.classList.remove('active');
      document.body.classList.remove('sidebar-open');
    }
  });
});