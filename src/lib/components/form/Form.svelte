<script>
    import { onMount, tick } from "svelte";
    import "./form.style.css"

    // URL fija del único barbero disponible
    const calendlyUrl =
        "https://calendly.com/nicolasartemiodume/60?hide_gdpr_banner=1";

    onMount(async () => {
        await tick(); // Asegura que el DOM esté listo

        const container = document.getElementById("form-container");
        if (container) {
            const script = document.createElement("script");
            script.src =
                "https://assets.calendly.com/assets/external/widget.js";
            script.async = true;
            container.appendChild(script);
        }
    });
</script>

<section
   class="container-form"
>
    <div id="form" style="scroll-margin-top: 4rem;" >
        <p class="bebas-neue-regular">
            ¿Cuándo venís?
        </p>
    </div>

    <div
        id="form-container"
        style="min-width: 320px; width: 100%; max-width: 600px; height: 700px;"
    >
        <div
            class="calendly-inline-widget"
            data-url={calendlyUrl}
            style="min-width:320px;height:700px;"
        ></div>
    </div>
</section>
