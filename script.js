document.addEventListener("DOMContentLoaded", function () {

    // NAVBAR SCROLL EFFECT
    window.addEventListener("scroll", () =>
        document.querySelector(".navbar")
        ?.classList.toggle("scrolled", window.scrollY > 50)
    );

    // REVEAL ANIMATION
    const observer = new IntersectionObserver(entries =>
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        })
    );

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    // LIGHTBOX
    document.querySelectorAll(".gallery-item img").forEach(img =>
        img.addEventListener("click", () => {
            document.getElementById("lightboxImg").src = img.src;
            document.getElementById("lightbox").style.display = "flex";
        })
    );

    document.querySelector(".lightbox .close")
    ?.addEventListener("click", () => {
        document.getElementById("lightbox").style.display = "none";
    });

    // SOCIAL MODAL
    document.querySelectorAll(".socials i").forEach(icon =>
        icon.addEventListener("click", () => {
            document.getElementById("socialModal").style.display = "flex";
        })
    );

    document.getElementById("socialClose")
    ?.addEventListener("click", () => {
        document.getElementById("socialModal").style.display = "none";
    });

    // SMOOTH SCROLL
    ["inquireBtn", "navInquire"].forEach(id =>
        document.getElementById(id)
        ?.addEventListener("click", () => {
            document.querySelector("#booking")
            .scrollIntoView({ behavior: "smooth" });
        })
    );

    document.getElementById("viewBtn")
    ?.addEventListener("click", () => {
        document.querySelector("#gallery")
        .scrollIntoView({ behavior: "smooth" });
    });

    // INQUIRY BUTTON
    document.getElementById("messageBtn")
    ?.addEventListener("click", () => {
        document.getElementById("socialModal").style.display = "flex";
    });

    console.log("✅ Frontend ready");
});