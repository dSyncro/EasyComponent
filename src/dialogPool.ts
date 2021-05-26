import Dialog from "./dialog";

import "../style/dialogPool.scss";

export class DialogPool {

    private _activeDialog: Dialog | null;
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
        this._activeDialog.element.classList.remove("opened");
        this._activeDialog = null;
        document.body.classList.remove("ec-no-scroll");
        document.removeEventListener("mouseup", this.loseFocusDelegate);
    }

    public openDialog(dialog: Dialog) {
        if (this._activeDialog)
            this.closeCurrentDialog();

        dialog.element.classList.add("opened");
        this._activeDialog = dialog;

        const dataset = dialog.element.dataset;

        if (dataset.blocking === "true" || dataset.blocking === "")
            document.body.classList.add("ec-no-scroll");

        if (dataset.losefocus === "true" || dataset.losefocus === "")
            document.addEventListener("mouseup", this.loseFocusDelegate);
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