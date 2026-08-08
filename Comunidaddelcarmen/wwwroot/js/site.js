window.communitySite = (() => {
    let sectionObserver = null;
    let resizeHandler = null;
    let navigationReference = null;

    const sectionIds = [
        "inicio",
        "noticias",
        "eventos",
        "voluntariado",
        "talleres",
        "reciclaje",
        "emprendimientos",
        "nosotros",
        "contacto"
    ];

    function initializeNavigation(dotNetReference) {
        disposeNavigation();
        navigationReference = dotNetReference;

        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        sectionObserver = new IntersectionObserver((entries) => {
            const visibleSections = entries
                .filter((entry) => entry.isIntersecting)
                .sort((first, second) => second.intersectionRatio - first.intersectionRatio);

            if (visibleSections.length === 0 || !navigationReference) {
                return;
            }

            navigationReference
                .invokeMethodAsync("UpdateActiveSection", visibleSections[0].target.id)
                .catch(() => undefined);
        }, {
            rootMargin: "-18% 0px -62% 0px",
            threshold: [0, 0.1, 0.25, 0.5]
        });

        sections.forEach((section) => sectionObserver.observe(section));

        resizeHandler = () => {
            if (window.innerWidth >= 992 && navigationReference) {
                navigationReference.invokeMethodAsync("CloseResponsiveMenus").catch(() => undefined);
            }
        };

        window.addEventListener("resize", resizeHandler, { passive: true });
    }

    function disposeNavigation() {
        sectionObserver?.disconnect();
        sectionObserver = null;

        if (resizeHandler) {
            window.removeEventListener("resize", resizeHandler);
            resizeHandler = null;
        }

        navigationReference = null;
    }

    function scrollTo(sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) {
            return;
        }

        section.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            block: "start"
        });
    }

    function initializeReconnectModal() {
        const modal = document.getElementById("components-reconnect-modal");
        const dismissButton = modal?.querySelector("[data-reconnect-dismiss]");

        if (!modal || !dismissButton) {
            return;
        }

        dismissButton.addEventListener("click", () => {
            modal.classList.add("is-dismissed");
        });

        const observer = new MutationObserver(() => {
            if (modal.classList.contains("components-reconnect-hide")) {
                modal.classList.remove("is-dismissed");
            }
        });

        observer.observe(modal, {
            attributes: true,
            attributeFilter: ["class"]
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeReconnectModal, { once: true });
    } else {
        initializeReconnectModal();
    }

    return {
        initializeNavigation,
        disposeNavigation,
        scrollTo
    };
})();
