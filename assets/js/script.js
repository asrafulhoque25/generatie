document.addEventListener("DOMContentLoaded", () => {
    const pill = document.getElementById("pill");
    let isExpanded = false;

    setInterval(() => {
        if (isExpanded) {
            pill.classList.remove("expand");
            pill.classList.add("shrink");
        } else {
            pill.classList.remove("shrink");
            pill.classList.add("expand");
        }
        isExpanded = !isExpanded;
    }, 3000);
});
