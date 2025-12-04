/* SALUDO PERSONALIZADO (10 segundos) */
window.addEventListener("DOMContentLoaded", () => {
  const saludo = document.createElement("div");
  saludo.id = "saludo";
  saludo.innerText = obtenerSaludo();
  document.body.appendChild(saludo);

  setTimeout(() => {
    saludo.style.opacity = "0";
    setTimeout(() => saludo.remove(), 1000);
  }, 10000);
});

function obtenerSaludo() {
  const hora = new Date().getHours();
  if (hora < 12) return "🌞 ¡Buenos días! Bienvenido a Irlanda mágica";
  if (hora < 19) return "🌤️ ¡Buenas tardes! Disfruta la cultura celta";
  return "🌙 ¡Buenas noches! Irlanda te envuelve en magia";
}

/* MENÚS CON HOVER*/
document.querySelectorAll(".categorias, .idioma").forEach(menu => {
  menu.addEventListener("mouseenter", () => {
    const submenu = menu.querySelector(".submenu");
    if (submenu) submenu.style.display = "block";
  });
  menu.addEventListener("mouseleave", () => {
    const submenu = menu.querySelector(".submenu");
    if (submenu) submenu.style.display = "none";
  });
});

/* ANIMACIÓN SCROLL (reveal) */
const elementos = document.querySelectorAll(".bloque, .video, .paisajes article");

function revelar() {
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revelar);
revelar();

/* HADA CELTA FLOTANTE */
(function hadaFlotante() {
  const hada = document.createElement("img");
  hada.src = "Imagenes/hada.png";
  hada.id = "hada-flotante";
  hada.alt = "Hada celta flotante decorativa";
  document.body.appendChild(hada);

  document.addEventListener("mousemove", e => {
    hada.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
})();

/* PARTÍCULAS MÁGICAS VERDES */
(function particulas() {
  document.addEventListener("mousemove", e => {
    if (Math.random() > 0.87) {
      const p = document.createElement("div");
      p.className = "particula";
      p.style.left = e.pageX + "px";
      p.style.top = e.pageY + "px";
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 900);
    }
  });
})();/* SALUDO PERSONALIZADO */
window.addEventListener("DOMContentLoaded", () => {
  const saludo = document.createElement("div");
  saludo.id = "saludo";
  saludo.innerText = obtenerSaludo();
  document.body.appendChild(saludo);

  setTimeout(() => {
    saludo.style.opacity = "0";
    setTimeout(() => saludo.remove(), 1000);
  }, 6000);
});

function obtenerSaludo() {
  const hora = new Date().getHours();
  if (hora < 12) return "🌞 ¡Buenos días! Bienvenido a Irlanda mágica";
  if (hora < 19) return "🌤️ ¡Buenas tardes! Disfruta la cultura celta";
  return "🌙 ¡Buenas noches! Irlanda te envuelve en magia";
}

/* MENÚS CON HOVER */
document.querySelectorAll(".categorias, .idioma").forEach(menu => {
  menu.addEventListener("mouseenter", () => {
    const submenu = menu.querySelector(".submenu");
    if (submenu) submenu.style.display = "block";
  });
  menu.addEventListener("mouseleave", () => {
    const submenu = menu.querySelector(".submenu");
    if (submenu) submenu.style.display = "none";
  });
});

/* SCROLL REVEAL */
function revelar() {
  document.querySelectorAll(".bloque, .video, .paisajes article").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revelar);
revelar();

/* HADA FLOTANTE */
(function hadaFlotante() {
  const hada = document.createElement("img");
  hada.src = "Imagenes/hada.png";
  hada.id = "hada-flotante";
  document.body.appendChild(hada);

  document.addEventListener("mousemove", e => {
    hada.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
})();

/* PARTÍCULAS */
(function particulas() {
  document.addEventListener("mousemove", e => {
    if (Math.random() > 0.87) {
      const p = document.createElement("div");
      p.className = "particula";
      p.style.left = e.pageX + "px";
      p.style.top = e.pageY + "px";
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 900);
    }
  });
})();

/*SLIDER (prev / next / paginación / autoplay)*/
  document.addEventListener("DOMContentLoaded", () => {
    const slides = Array.from(document.querySelectorAll(".slider .slide"));
    if (!slides.length) return;

    const btnPrev = document.querySelector(".prev");
    const btnNext = document.querySelector(".next");
    const paginacion = document.querySelector(".paginacion");

    let indice = 0;
    let intervalo = null;
    const TIEMPO_AUTOPLAY = 5000;

    // Inicializa: crea puntos si no existen
    function crearPuntos() {
      if (!paginacion) return;
      paginacion.innerHTML = "";
      slides.forEach((_, i) => {
        const punto = document.createElement("span");
        if (i === 0) punto.classList.add("activo");
        punto.dataset.index = i;
        punto.style.cursor = "pointer";
        paginacion.appendChild(punto);

        punto.addEventListener("click", () => cambiarSlide(i));
      });
    }

    function actualizarVisibilidad() {
      slides.forEach((s, i) => {
        s.classList.toggle("active", i === indice);
        
      });
      if (paginacion) {
        paginacion.querySelectorAll("span").forEach((p, i) => {
          p.classList.toggle("activo", i === indice);
        });
      }
    }

    function cambiarSlide(n) {
      if (n < 0) n = slides.length - 1;
      if (n >= slides.length) n = 0;
      indice = n;
      actualizarVisibilidad();
    }

    // botones prev/next 
    if (btnPrev) btnPrev.addEventListener("click", () => {
      cambiarSlide(indice - 1);
      reiniciarAutoplay();
    });
    if (btnNext) btnNext.addEventListener("click", () => {
      cambiarSlide(indice + 1);
      reiniciarAutoplay();
    });

    // Autoplay
    function iniciarAutoplay() {
      if (intervalo) clearInterval(intervalo);
      intervalo = setInterval(() => cambiarSlide(indice + 1), TIEMPO_AUTOPLAY);
    }
    function reiniciarAutoplay() {
      iniciarAutoplay();
    }

    // Inicialización
    crearPuntos();
    actualizarVisibilidad();
    iniciarAutoplay();

    // Pausar autoplay al hover sobre el slider (mejora UX)
    const sliderContainer = document.querySelector(".slider-container");
    if (sliderContainer) {
      sliderContainer.addEventListener("mouseenter", () => {
        if (intervalo) clearInterval(intervalo);
      });
      sliderContainer.addEventListener("mouseleave", () => {
        iniciarAutoplay();
      });
    }
  });

  /*SCROLL REVEAL SIMPLE (activar clases .visible)  */
  (function revealOnScroll() {
    const elementos = () => document.querySelectorAll(".bloque, .video, .paisajes article");
    function revelar() {
      elementos().forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) el.classList.add("visible");
      });
    }
    window.addEventListener("scroll", revelar);
    window.addEventListener("resize", revelar);
    // primer check
    revelar();
  })();

  // Boton de regresar

  (function volverArriba() {
  const btn = document.getElementById("volverArriba");
  if (!btn) return;

  const toggle = () => {
    if (window.scrollY > 300) btn.style.display = "block";
    else btn.style.display = "none";
  };

  window.addEventListener("scroll", toggle);
  toggle();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

/* BOTÓN VOLVER ARRIBA (GLOBAL)*/
document.addEventListener("DOMContentLoaded", () => {
  const btnArriba = document.getElementById("volverArriba");

  if (!btnArriba) return; // si la página no tiene el botón, no da error

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btnArriba.style.display = "block";
    } else {
      btnArriba.style.display = "none";
    }
  });

  btnArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});