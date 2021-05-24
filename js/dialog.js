window.addEventListener("load", () => {
    let dialogs = document.querySelectorAll(".easy-component.ec-dialog");

    let activeDialog = null;

    let dialogPool = document.querySelector(".easy-component.ec-dialog-pool") || document.createElement("div");
    dialogPool.classList.add("easy-component", "ec-dialog-pool");
    document.body.appendChild(dialogPool);

    closeCurrentDialog = () => {
        if (!activeDialog) return;

        activeDialog.classList.remove("opened");
        document.body.classList.remove("ec-no-scroll");

    };

    dialogs.forEach(dialog => {
        let dialogWrapper = document.createElement("div");
        dialogWrapper.classList.add("easy-component", "ec-dialog-wrapper");
        dialogWrapper.appendChild(dialog);
        dialogPool.appendChild(dialogWrapper);

        if (dialog.dataset.fullwidth === "true" || dialog.dataset.fullwidth === "")
            dialog.classList.add("fullwidth");

        dialog.querySelectorAll(".close-button").forEach(btn => btn.addEventListener("click", closeCurrentDialog));
    });

    document.querySelectorAll(".easy-component.ec-dialog-opener").forEach(opener => {
        if (!opener.dataset.target) return;

        let targetDialog = null;

        dialogs.forEach(dialog => {
            if (dialog.dataset.name === opener.dataset.target)
                targetDialog = dialog;
        });

        opener.addEventListener("click", () => {
            if (!targetDialog) return;

            closeCurrentDialog();
            activeDialog = targetDialog;

            targetDialog.classList.add("opened");
            if (targetDialog.dataset.blocking === "true" || targetDialog.dataset.blocking === "")
                document.body.classList.add("ec-no-scroll");
        });
    });
});