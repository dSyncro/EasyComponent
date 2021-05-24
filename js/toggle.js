window.addEventListener("load", () => {
    document.querySelectorAll(".easy-component.ec-toggle").forEach(toggle => {
        let track = document.createElement("div");
        track.classList.add("track");

        let handle = document.createElement("div");
        handle.classList.add("handle");

        track.appendChild(handle);
        toggle.appendChild(track);

        onResize = () => {
            handle.style.width = handle.style.height = `${track.offsetHeight}px`;
        }

        onResize();

        let observer = new ResizeObserver(onResize).observe(toggle);

        toggle.addEventListener("click", () => {
            toggle.classList.toggle("active");
            toggle.dataset.value = !toggle.dataset.value;
        })
    });
});