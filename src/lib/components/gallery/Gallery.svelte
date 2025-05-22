<script>
    import { onMount, onDestroy } from "svelte";
    import { gsap } from "gsap";
    import "./gallery.style.css";

    let images = [
        "/assets/carrusel.avif",
        "/assets/carrusel1.avif",
        "/assets/carrusel2.avif",
        "/assets/carrusel3.avif",
    ];

    let current = 0;
    let imageRefs = [];
    let interval;

    function animateTransition(from, to) {
        const fromEl = imageRefs[from];
        const toEl = imageRefs[to];

        gsap.set(toEl, { x: "100%" });
        gsap.to(fromEl, { x: "-100%", duration: 0.8 });
        gsap.to(toEl, { x: "0%", duration: 0.8 });
    }

    function nextSlide() {
        const next = (current + 1) % images.length;
        animateTransition(current, next);
        current = next;
    }

    onMount(() => {
        gsap.set(imageRefs, { x: "100%" });
        gsap.set(imageRefs[0], { x: "0%" });

        interval = setInterval(nextSlide, 3000);
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<section id="gallery" class="gallery" style="scroll-margin-top: 4rem;">
    <h3 class="bebas-neue-regular">Looks</h3>
    <div class="carousel">
        {#each images as src, i}
            <img {src} alt="Imagen" class="image" bind:this={imageRefs[i]} />
        {/each}
    </div>
</section>
