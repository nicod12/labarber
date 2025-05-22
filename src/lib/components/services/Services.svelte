<script>

    import "./services.style.css";
    
    const items = [
        {
            id: 1,
            title: "Corte de cabello",
            description: "Corte clásico o con onda, siempre ajustado a tu look.",
            price: "$10.000",
            image: "/assets/img3-servicios.avif",
        },
        {
            id: 2,
            title: "Corte + Barba",
            description: "Combo completo: pelo alineado, barba marcada y prolija. Una sesión para salir renovado.",
            price: "$12.000",
            image: "/assets/img1-servicios.avif",
        },
        {
            id: 3,
            title: "Barba Sola",
            description: "Barba prolija, con forma y estilo. Te la dejamos al ras, bien marcada.",
            price: "$8.000",
            image: "/assets/img2-servicios.avif",
        },
    ];

</script>

<section id="services" class="service art" style="scroll-margin-top: 2.5rem;">
    <h2 class="bebas-neue-regular">Servicios</h2>
    <div class="desktop-services services">
    {#each items as item}
        <article class="reverse ">
            <img class="margen" src="/assets/icons/margen.png" alt="margen" />
            <ul>
                <li class="card">
                    <div class="card-content">
                        <h3 class="font-title bebas-neue-regular">
                            {item.title}
                        </h3>
                        <p class="font-description opensans">
                            {item.description}
                        </p>
                        <p class="price">{item.price}</p>
                    </div>
                    <div class="card-image">
                        <img src={item.image} alt={item.title} width="200" />
                    </div>
                </li>
            </ul>
        </article>
    {/each}
    </div>
</section>
