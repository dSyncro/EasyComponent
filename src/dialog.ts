import { Component } from "./component";
import EC from "./EasyComponents";

import "../style/dialog.scss";

export class Dialog extends Component {

    private _isFullwidth: boolean;
    private closeDelegate = this.close.bind(this);

    public name: string;

    public get fullwidth() {
        return this._isFullwidth;
    }

    public set fullwidth(value: boolean) {
        this._isFullwidth = value;
    }

    constructor(dialog: HTMLElement) {
        super(dialog);
        this.init();
    }

    private init(): void {
        const dialogWrapper = document.createElement("div");
        dialogWrapper.classList.add("easy-component", "ec-dialog-wrapper");
        dialogWrapper.appendChild(this.element);
        EC.dialogPool.addDialog(this);

        if (this._isFullwidth = this.element.dataset.fullwidth === "true" || this.element.dataset.fullwidth === "")
            this.element.classList.add("fullwidth");

        this.name = this.element.dataset.name || "";

        this.element.querySelectorAll(".close-button").forEach(btn => btn.addEventListener("click", this.closeDelegate));
    }

    public open(): void {
        EC.dialogPool.openDialog(this);
    }

    public close(): void {
        EC.dialogPool.closeDialog(this);
    }
}

export default Dialog;