import Dialog from "./dialog";

import "../style/dialogPool.scss";

export class DialogPool {

    private _activeDialog: Dialog;
    private loseFocusDelegate = this.loseFocus.bind(this);

    public dialogs: Dialog[] = [];
    public element: HTMLElement;

    constructor() {
        window.addEventListener("load", () => {
            this.element = document.createElement("div");
            this.element.classList.add("easy-component", "ec-dialog-pool");
            document.body.appendChild(this.element);
        });
    }

    public get activeDialog() {
        return this._activeDialog;
    }

    public closeCurrentDialog() {
        if (!this._activeDialog) return;
        this._activeDialog.isOpened = false;
        this._activeDialog = null;
        document.body.classList.remove("ec-no-scroll");
        document.removeEventListener("mouseup", this.loseFocusDelegate);

        const closeDialogEvent = new CustomEvent("onDialogClose", {
            bubbles: true,
            cancelable: true,
            detail: {
                dialog: this._activeDialog
            }
        });
        this.element.dispatchEvent(closeDialogEvent);
    }

    public openDialog(dialog: Dialog) {
        if (this._activeDialog)
            this.closeCurrentDialog();
        dialog.isOpened = true;
        this._activeDialog = dialog;

        if (dialog.isBlocking)
            document.body.classList.add("ec-no-scroll");

        if (dialog.canLoseFocus)
            document.addEventListener("mouseup", this.loseFocusDelegate);

        const openDialogEvent = new CustomEvent("onDialogOpen", {
            bubbles: true,
            cancelable: true,
            detail: {
                dialog: this._activeDialog
            }
        });
        this.element.dispatchEvent(openDialogEvent);
    }

    public closeDialog(dialog: Dialog) {
        if (dialog === this._activeDialog)
            this.closeCurrentDialog();
    }

    public findDialogByName(name: string): Dialog {
        for (const dialog of this.dialogs) {
            if (dialog.name === name)
                return dialog;
        }
        return null;
    }

    public addDialog(dialog: Dialog) {
        this.dialogs.push(dialog);
        this.element.appendChild(dialog.element.parentElement);

        const addDialogEvent = new CustomEvent("onNewDialog", {
            bubbles: true,
            cancelable: true,
            detail: {
                dialog
            }
        });
        this.element.dispatchEvent(addDialogEvent);
    }

    private loseFocus(e: MouseEvent) {
        e.stopPropagation();
        const target = e.target;
        if (target === this._activeDialog.element || this._activeDialog.element.contains(target as HTMLElement))
            return;
        this.closeCurrentDialog();
        document.removeEventListener("mouseup", this.loseFocusDelegate);
    }
}

export default DialogPool;