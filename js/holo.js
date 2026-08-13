(function () {
  const projects = {
    about: {
      title: 'Daevin Bagcal',
      tagline: 'COMPUTER SCIENCE · UH MANOA · 2026',
      desc: 'Graduated from the University of Hawaii at Manoa in Spring 2026 with a degree in Computer Science with a 3.91 GPA. Comfortable in languages like Java and Python. Experience in languages such as C, C++, Rust, JavaScript, SQL, and Lisp. Taken classes relating to data structures, algorithms, operating systems, computer architecture, and computer graphics. Interested in working on backend development and data engineering. Other interests include Game Development, Computer Graphics, and Japanese Language and Culture.',
      media: { type: 'image', src: 'https://github.com/daevinbag.png', alt: 'Daevin Bagcal' },
    },
    labassistant: {
      title: 'Lab Assistant',
      tagline: '2025-2026 · IMAGE PROCESSING · UH MANOA',
      desc: 'Built a program to analyze image data for a university lab, primarily calculating average height within a single image or aggregated across a batch of images.',
    },
    raytracer: {
      title: 'Raytracer (in one weekend)',
      tagline: 'RUST · RENDERING · COMPUTER GRAPHICS',
      desc: 'Developed a raytracer in Rust, following the books <a href="https://raytracing.github.io/books/RayTracingInOneWeekend.html" target="_blank">"Ray Tracing in One Weekend"</a> and <a href="https://raytracing.github.io/books/RayTracingTheNextWeek.html" target="_blank">"Ray Tracing: The Next Week"</a>. I followed the guide provided by the book translating it into Rust. The books cover many key concepts in computer graphics, including lighting, shading, and material rendering.',
      media: { type: 'image', src: '../../img/raytraceweekend.png', alt: 'Raytracer demo' },
    },
    coffeerun: {
      title: 'CoffeeRun',
      tagline: 'FLUTTER · FIREBASE · APP',
      desc: 'A Strava-like application for tracking activity and earning rewards. Developed using Flutter and Firebase, the app allows users to start activities through the app (walking, running, biking, etc.) and earn rewards at participating businesses. Working on this project helped me learn about working with a team of developers and meeting the needs of a sponsor while keeping realistic goals. This app differentiates itself from other ativity apps like Strava by focusing on the local scenery of the area that you are using the app (in this case Hawaii). A sample of the app is available to view <a href="https://coffeerun-b94ae.web.app/>" target="_blank">here</a>.',
      media: { type: 'image', src: '../../img/coffeerun.jpg', alt: 'CoffeeRun demo' },
    },
  };
 
  const holoContent = document.getElementById('holo-content');
  const holoIdle = document.getElementById('holo-idle');
  const holoTitle = document.getElementById('holo-title');
  const holoTagline = document.getElementById('holo-tagline');
  const holoMedia = document.getElementById('holo-media');
  const holoDesc = document.getElementById('holo-desc');
  const holoStats = document.getElementById('holo-stats');
  const holoStatusLabel = document.getElementById('holo-status-label');
  const holoClose = document.getElementById('holo-close');
 
  // The idle glyph state is no longer used — the panel always shows "about" until a project is clicked so hide it immediately.
  holoIdle.classList.add('hidden');
 
  function showProject(key, opts) {
    const p = projects[key];
    if (!p) return;
    opts = opts || {};
 
    holoTitle.textContent = p.title;
    holoTagline.textContent = p.tagline;

    holoMedia.innerHTML = '';
    if (p.media) {
      let el;
      if (p.media.type === 'video') {
        el = document.createElement('video');
        el.src = p.media.src;
        el.autoplay = true;
        el.muted = true;
        el.loop = true;
        el.playsInline = true;
      } else {
        el = document.createElement('img');
        el.src = p.media.src;
        el.alt = p.media.alt || '';
      }
      holoMedia.appendChild(el);
      holoMedia.classList.add('active');
    } else {
      holoMedia.classList.remove('active');
    }
 
    holoDesc.innerHTML = p.desc;
    holoStats.innerHTML = '';
 
    holoContent.classList.add('active');
    holoStatusLabel.textContent = key;
    holoClose.style.display = (key === 'about') ? 'none' : '';
 
    if (!opts.skipFlicker) {
      holoContent.classList.remove('flicker');
      void holoContent.offsetWidth;
      holoContent.classList.add('flicker');
    }
  }
 
  function reset() {
    showProject('about');
  }
 
  document.querySelectorAll('.project').forEach(function (el) {
    el.addEventListener('click', function () {
      showProject(el.getAttribute('data-project'));
    });
  });
 
  holoClose.addEventListener('click', function (e) {
    e.stopPropagation();
    reset();
  });
 
  showProject('about', { skipFlicker: true });
})();