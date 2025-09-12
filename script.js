// ---------- PROJECT DATA (edit these entries or add more) ----------
const projects = [
  {
    title: 'Restaurant (Local Storage)',
    img: 'project imgs/restaurant local.png',
    tags: ['HTML', 'CSS', 'JS'],
    url: 'https://saylani-foodpanda-clone.netlify.app/',
    desc: 'Restaurant app with cart system and Admin using local storage.'
  },
  {
    title: 'Weather App (API)',
    img: 'project imgs/weather thumb.png',
    tags: ['HTML', 'CSS', 'JS'],
    url: 'https://elegant-stroopwafel-d9c15f.netlify.app/',
    desc: 'Weather forecast app fetching real-time data from weather API.'
  },
  {
    title: 'Explore Mars (NASA API)',
    img: 'project imgs/mars.png',
    tags: ['HTML', 'CSS', 'JS'],
    url: 'https://mars-explore.netlify.app/',
    desc: 'Fetches Mars Rover images using NASA API with date filters.'
  },
  {
    title: 'E-comm Store (Fake API)',
    img: 'project imgs/thom.png',
    tags: ['HTML', 'CSS', 'JS'],
    url: 'https://stirring-pixie-2d6de9.netlify.app/',
    desc: 'E-commerce store demo using fake API for products and cart system.'
  },
  {
    title: 'SkyFly Flight Checking',
    img: 'project imgs/skyfly.png',
    tags: ['HTML', 'CSS', 'JS', 'Supabase'],
    url: 'https://stirring-travesseiro-1fc0a0.netlify.app/',
    desc: 'Admin can Add Flights from Dashboard and Users can view on Page with Supabase Auth'
  },
  {
    title: 'Tourism Landing Page',
    img: 'project imgs/react-travel.png',
    tags: ['HTML', 'CSS', 'JS', 'React', 'BootStrap'],
    url: 'https://react-travel-singlepage.netlify.app/',
    desc: 'Single Page Travel Website built with React where users can explore destinations with smooth navigation'
  },
  {
    title: 'Car Showroom Website - Clone',
    img: 'project imgs/car.png',
    tags: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    url: 'https://mellifluous-queijadas-b1afee.netlify.app/',
    desc: 'A car showroom website clone with modern UI, responsive design, and animations.'
  },
  {
    title: 'Restaurant Website Clone',
    img: 'project imgs/restaurant.png',
    tags: ['HTML', 'CSS', 'JS', 'BootStrap'],
    url: 'https://papaya-sfogliatella-1cf8f0.netlify.app/',
    desc: 'A restaurant landing page clone featuring menus, gallery, and responsive layout.'
  },
  {
    title: 'LinkedIn Clone',
    img: 'project imgs/linkedin.png',
    tags: ['HTML', 'CSS', 'JS', 'BootStrap'],
    url: 'https://67e8a4d7a0eeb00f676c13f1--kaleidoscopic-toffee-2d90e5.netlify.app/',
    desc: 'A LinkedIn UI clone focusing on feed layout and profile sections.'
  },
  {
    title: 'Tech-Care Dashboard (UI)',
    img: 'project imgs/dashboard.png',
    tags: ['HTML', 'CSS', 'JS', 'BootStrap'],
    url: 'https://extraordinary-kitsune-e7c5a5.netlify.app/',
    desc: 'A clean dashboard UI with cards, charts, and sidebar navigation.'
  },
  {
    title: 'Interactive Eyes Cursor',
    img: 'project imgs/eeyes.png',
    tags: ['HTML', 'CSS', 'JS'],
    url: 'https://67e947115052052a01880fe7--joyful-marzipan-d49a85.netlify.app/',
    desc: 'Fun project where eyes follow your cursor movement interactively.'
  },
  {
    title: 'Quiz Master',
    img: 'project imgs/quizth.png',
    tags: ['HTML', 'CSS', 'JS'],
    url: 'https://quiz-game-app-net.netlify.app/',
    desc: 'A quiz app with multiple-choice questions, score tracking, and interactivity.'
  },
  {
    title: 'To-Do List',
    img: 'project imgs/todo.png',
    tags: ['HTML', 'CSS', 'JS'],
    url: 'https://rad-tarsier-53b940.netlify.app/',
    desc: 'A to-do app with task add/remove functionality and persistent storage.'
  },

];


// Inject project cards into modal
// Inject project cards into modal
const projectsList = document.getElementById('projectsList');
projects.forEach((p) => {
  const col = document.createElement('div');
  col.className = 'col-12';
  col.innerHTML = `
        <div class="project-card">
          <img src="${p.img}" alt="${p.title}" class="project-thumb" onerror="this.style.display='none'">
          <div class="project-info">
            <h5>${p.title}</h5>
            <p class="project-desc">${p.desc}</p>
            <div class="pills">${p.tags.map(t => `<span class="pill">${t}</span>`).join('')}</div>
            <div class="project-actions">
              <a class="btn-outline-accent" href="${p.url}" target="_blank">
                Open Project <i class="fa-solid fa-up-right-from-square" style="margin-left:8px"></i>
              </a>
            </div>
          </div>
        </div>
      `;
  projectsList.appendChild(col);
});


// Small helper: animate the dock items on load
window.addEventListener('load', () => {
  gsap.from('.folder-card', { y: 18, opacity: 0, stagger: 0.08, duration: 0.7, ease: 'power3.out' });
  gsap.from('#taskbar .taskbar-btn', { y: 8, opacity: 0, stagger: 0.05, duration: 0.6, delay: 0.2 });
});

// Lock screen / visit button
const lockScreen = document.getElementById('lockScreen');
const visitBtn = document.getElementById('visitBtn');
visitBtn.addEventListener('click', () => {
  // animate lock box out
  gsap.to('.lock-box', { scale: 0.96, opacity: 0, duration: 0.4, onComplete: () => { lockScreen.style.display = 'none'; gsap.from('.desktop', { opacity: 0, duration: 0.6 }) } });
});

// Taskbar buttons open corresponding modals or simulate click
document.getElementById('tb-projects').addEventListener('click', () => {
  let modal = new bootstrap.Modal(document.getElementById('portfolioModal'));
  modal.show();
});
document.getElementById('tb-about').addEventListener('click', () => { new bootstrap.Modal(document.getElementById('aboutModal')).show() });
document.getElementById('tb-contact').addEventListener('click', () => { new bootstrap.Modal(document.getElementById('contactModal')).show() });

document.querySelectorAll('.folder-card').forEach(el => {
  el.addEventListener('click', (e) => {
    // pulse animation
    gsap.fromTo(el, { scale: 0.98 }, { scale: 1, repeat: 0, duration: 0.18 });
  });
});

// Lock / Sign out control
document.getElementById('lockToggle').addEventListener('click', () => { lockScreen.style.display = 'flex'; gsap.from('.lock-box', { y: 10, opacity: 0, duration: 0.5 }) });

// Small accessibility: close modals with Escape (bootstrap handles it), but ensure lock screen visible via keyboard
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // If lock screen hidden, show it
  }
});

// Update clock in taskbar (optional enhancement)
function tickClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  // show small floating time on taskbar (we'll append it)
  if (!document.getElementById('tb-time')) {
    const span = document.createElement('div'); span.id = 'tb-time'; span.style.marginLeft = '8px'; span.style.color = 'var(--muted)'; span.style.fontSize = '13px'; span.style.fontWeight = '600'; document.getElementById('taskbar').appendChild(span);
  }
  document.getElementById('tb-time').textContent = `${hh}:${mm}`;
}
tickClock(); setInterval(tickClock, 60000);

// Make projects list keyboard-focusable
projectsList.querySelectorAll('.project-card').forEach(c => c.setAttribute('tabindex', '0'));

// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

// Light theme CSS via JS
const style = document.createElement('style');
style.textContent = `
  .light-theme {
    background: #f0f2f5;
    color: #111;
  }
  .light-theme .folder-card {
    background: rgba(255,255,255,0.8);
    color: #000;
  }
  .light-theme .modal-content {
    background: #fff;
    color: #111;
  }
`;
document.head.appendChild(style);

document.getElementById('lockToggle').addEventListener('click', () => {
  lockScreen.style.display = 'flex';
  gsap.from('.lock-box', { y: 10, opacity: 0, duration: 0.5 });
});

const signOutBtn = document.getElementById('lockToggle');
const desktopArea = document.querySelector('.desktop');

signOutBtn.addEventListener('click', () => {
  // Animate desktop fading out and scaling down
  gsap.to(desktopArea, {
    duration: 0.6,
    opacity: 0,
    scale: 0.8,
    ease: "power2.inOut",
    onComplete: () => {
      // Hide desktop area after animation
      desktopArea.style.display = 'none';

      // Show lock screen and animate it in
      lockScreen.style.display = 'flex';
      gsap.fromTo(lockScreen,
        { opacity: 0, y: 50 },
        { duration: 0.8, opacity: 1, y: 0, ease: "power3.out" }
      );
    }
  });
});




const goodbyeMsg = document.getElementById('goodbyeMsg');

signOutBtn.addEventListener('click', () => {
  gsap.to(desktopArea, {
    duration: 0.6,
    opacity: 0,
    scale: 0.8,
    ease: "power2.inOut",
    onComplete: () => {
      desktopArea.style.display = 'none';

      // Show and animate goodbye message
      gsap.to(goodbyeMsg, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" });

      // After 1.5 seconds fade out goodbye and show lock screen
      setTimeout(() => {
        gsap.to(goodbyeMsg, {
          opacity: 0, duration: 0.5, onComplete: () => {
            goodbyeMsg.style.opacity = 0;
            lockScreen.style.display = 'flex';
            gsap.fromTo(lockScreen, { opacity: 0, y: 50 }, { duration: 0.8, opacity: 1, y: 0, ease: "power3.out" });
          }
        });
      }, 1500);
    }
  });
});


