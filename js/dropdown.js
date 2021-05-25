window.addEventListener("load", () => {
    document.querySelectorAll(".easy-component.ec-dropdown").forEach(dropdown => {
        let list = dropdown.querySelector(".list");

        openDropdown = () => {
            list.classList.add("opened");
            document.addEventListener("click", pageClickObserver);
            dropdown.removeEventListener("click", dropdownClickObserver);
            const openEvent = new CustomEvent("onOpen", {bubbles: true, cancelable: true});
            dropdown.dispatchEvent(openEvent);
        };

        closeDropdown = () => {
            list.classList.remove("opened");
            dropdown.addEventListener("click", dropdownClickObserver);
            document.removeEventListener("click", pageClickObserver);
            const closeEvent = new CustomEvent("onClose", {bubbles: true, cancelable: true});
            dropdown.dispatchEvent(closeEvent);
        };

        let pageClickObserver = (e) => {
            let target = e.target;
            if (target === dropdown || dropdown.contains(target))
                return;
            closeDropdown();
        }

        let dropdownClickObserver = (e) => {
            e.stopPropagation();
            openDropdown();
        }

        dropdown.addEventListener("click", dropdownClickObserver);
    });
});
