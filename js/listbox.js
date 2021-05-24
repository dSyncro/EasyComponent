document.querySelectorAll(".easy-component.listbox").forEach(listbox => {
    let select = listbox.querySelector(".select");
    let selected = select.querySelector(".selected");
    let arrow = select.querySelector(".arrow");

    let list = listbox.querySelector(".list");
    let listItems = list.querySelectorAll(".list-item");

    let showingPlaceholder = false;
    let currentSelected = null;

    if (!listbox.dataset.value) {
        selected.innerText = selected.dataset.placeholder || "";
        showingPlaceholder = true;
        selected.classList.add("placeholder");
    }

    let pageClickObserver = (e) => {
        list.classList.remove("opened");
        arrow.classList.replace("icon-chevron-up", "icon-chevron-down");
        select.addEventListener("click", selectClickObserver);
        document.removeEventListener("click", pageClickObserver);
    }

    let selectClickObserver = (e) => {
        e.stopPropagation();
        list.classList.add("opened");
        arrow.classList.replace("icon-chevron-down", "icon-chevron-up");
        document.addEventListener("click", pageClickObserver);
        select.removeEventListener("click", selectClickObserver);
    }

    select.addEventListener("click", selectClickObserver);

    arrow.classList.add("icon-chevron-down");

    listItems.forEach(listItem => {
        listItem.innerText = listItem.dataset.label;
        listItem.addEventListener("click", () => {
            listbox.dataset.value = listItem.dataset.value || "";
            selected.innerText = listItem.dataset.label;

            if (currentSelected)
                currentSelected.classList.remove("selected");
            currentSelected = listItem;

            if (showingPlaceholder)
            {
                showingPlaceholder = false;
                selected.classList.remove("placeholder");
            }

            currentSelected.classList.add("selected");
        });
    });
});