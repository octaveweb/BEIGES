function loader(delay = 2000, text = "Loading...") {
    const loader = document.getElementById("loader");
    const content = document.getElementById("wrapper");
    const textEl = loader.querySelector("#loader_titel");
    const line = loader.querySelector("#line");

    textEl.textContent = text;

    window.addEventListener("load", () => {
        // animate the progress line infinitely while loading

        gsap.to(line, {
            width: "50vw",
            duration: 1.5
        });
        gsap.to(".progress-line", {
            x: "200%",
            duration: 1.2,
            repeat: -1,
            ease: "power1.inOut"
        });

        // after delay -> run both loader + content animations together
        setTimeout(() => {
            content.style.display = "block"; // prepare content

            const tl = gsap.timeline({
                defaults: { duration: 0.8, ease: "power2.inOut" },
                onComplete: () => {
                    loader.style.display = "none"; // hide after animation finishes
                }
            });

            tl.to(loader, { opacity: 0 }, 0)
                .fromTo(content,
                    { opacity: 0 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                    0
                );

            // Animate UL LI separately
            const liTimeline = gsap.timeline();


            liTimeline.from("ul li", {
                y: "200%",
                opacity: 0,
                duration: .8,
                ease: "power1.inOut",
                stagger: 0.2
            });


        }, delay);
    });
}

loader(2500, "BEIGES ");
