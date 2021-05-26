import Component from "./component";
import instance from "./instance";

import "../style/dialog.scss";

export class Dialog extends Component {

    private closeDelegate = this.close.bind(this);

    public get name() {
        return this.element.dataset.name || "";
    }

    public set name(newName: string) {
        this.element.dataset.name = newName;
    }

    public get isOpened() {
        return this.element.classList.contains("opened");
    }

    public set isOpened(value: Boolean) {
        if (value)
            this.element.classList.add("opened");
        else this.element.classList.remove("opened");
    }

    public get isFullwidth() {
        return this.element.dataset.fullwidth === "true" ||
            this.element.dataset.fullwidth === "";
    }

    public set isFullwidth(value: boolean) {
        this.element.dataset.fullwidth = value.toString();

        if (value)
            this.element.classList.add("fullwidth");
        else this.element.classList.remove("fullwidth");
    }

    public get isBlocking() {
        return this.element.dataset.blocking === "true" ||
            this.element.dataset.blocking === "";
    }

    public set isBlocking(value: boolean) {
        this.element.dataset.blocking = value.toString();
    }

    public get canLoseFocus() {
        return this.element.dataset.losefocus === "true" ||
            this.element.dataset.losefocus === "";
    }

    public set canLoseFocus(value: boolean) {
        this.element.dataset.losefocus = value.toString();
    }

    constructor(dialog: HTMLElement) {
        super(dialog);
        this.init();
    }

    private init(): void {
        const dialogWrapper = document.createElement("div");
        dialogWrapper.classList.add("easy-component", "ec-dialog-wrapper");
        dialogWrapper.appendChild(this.element);
        instance.dialogPool.addDialog(this);

        this.element.querySelectorAll(".close-button").forEach(btn => btn.addEventListener("click", this.closeDelegate));
    }

    public open(): void {
        instance.dialogPool.openDialog(this);

        const openEvent = new CustomEvent("onOpen", { bubbles: true, cancelable: true });
        this.element.dispatchEvent(openEvent);
    }

    public close(): void {
        instance.dialogPool.closeDialog(this);

        const closeEvent = new CustomEvent("onClose", { bubbles: true, cancelable: true });
        this.element.dispatchEvent(closeEvent);
    }
}

export default Dialog;