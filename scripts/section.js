document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.addEventListener("mouseover", function(event) {
            if (!section.contains(event.relatedTarget)) {
                section.style.backgroundColor = "#a6d5fa";
                section.style.transform = "scale(1.03)";
                section.style.transition = "all 0.3s ease-in-out";
                section.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }

            if (event.target.dataset.hover === "true") {
                event.target.style.outline = "2px dashed darkblue";
                event.target.style.backgroundColor = "#e8f4fd";
            }
        });

        section.addEventListener("mouseout", function(event) {
            if (!section.contains(event.relatedTarget)) {
                section.style.backgroundColor = "#c5e1fb";
                section.style.transform = "scale(1)";
                section.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }

            if (event.target.dataset.hover === "true") {
                event.target.style.outline = "none";
                event.target.style.backgroundColor = "transparent";
            }
        });
    });
});
