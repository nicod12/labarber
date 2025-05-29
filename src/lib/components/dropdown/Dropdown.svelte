<script>
  import './dropdown.style.css';
  import { gsap } from "gsap";

  export let visible = false;
  export let onClose = () => {};

  let dropdownEl;
  let shouldRender = visible;

  // Mostrar cuando visible cambia a true
  $: if (visible && !shouldRender) {
    shouldRender = true;
  }

  // Animación de entrada
  $: if (visible && dropdownEl) {
    gsap.fromTo(
      dropdownEl,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }
    );
  }

  // Animación de salida
  $: if (!visible && dropdownEl) {
    gsap.to(dropdownEl, {
      opacity: 0,
      x: 100,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        shouldRender = false;
      }
    });
  }
</script>

{#if shouldRender}
  <section bind:this={dropdownEl} class="dropdown">
    <div>

      <ul class="links bebas-neue-regular">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#gallery">Galería</a></li>
        <li><a href="#location">Ubicación</a></li>
      </ul>
            <button
        type="button"
        aria-label="button-dropdown"
        class="btn-hamburger"
        on:click={onClose}
      >
        <img src="/assets/icons/close.svg" alt="cerrar menú" />
      </button>
    </div>
  </section>
{/if}
