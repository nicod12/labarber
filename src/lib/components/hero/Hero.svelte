  <script>
      import { onMount } from "svelte";
      import './hero.style.css'
         onMount(async () => {
        const { default: gsap } = await import("gsap");
        gsap.from(".hero", {
          y: 100,
          opacity: 0,
          duration: 2,
          stagger: 0.3,
          ease: "power3.out"
        });
      });
  </script>
  <section class="hero" id="home" style="scroll-margin-top: 1rem;">
    <div class="overlay"></div>
    <picture>
      <source class="background-desktop" srcset="/assets/bg-desktop.avif" media="(min-width: 1024px)">
    
      <!-- Imagen por defecto para móviles -->
      <img class="background-image" src="/assets/bg-mobile.avif" alt="bg" loading="eager" decoding="async">
    </picture>
    
    <div class="content">
      <h1 class="bebas-neue-regular">TU ESTILO EMPIEZA EN LA BARBER</h1>
      <p class="bebas-neue-regular">Cortes, fades y barbería con distinción. Sacá tu turno y salí con estilo</p>
    </div>
  </section>
