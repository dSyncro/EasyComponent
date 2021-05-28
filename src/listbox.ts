import Component from "./component";

import "../style/listbox.scss";

export class Listbox implements Component {

    public items: NodeListOf<HTMLElement>;
    public selected: HTMLElement;

    private onPageClickDelegate = this.onPageClick.bind(this);
    private onListboxClickDelegate = this.onListboxClick.bind(this);

    private selectDocElement: HTMLElement;
    private selectedDocElement: HTMLElement;
    private arrowDocElement: HTMLElement;
    private listDocElement: HTMLElement;

    public get value() {
        return this.element.dataset.value;
    }

    public set value(val: string) {
        this.element.dataset.value = val;
    }

    constructor(readonly element: HTMLElement) {
        this.init();
    }

    private init(): void {
        this.selectDocElement = this.element.querySelector<HTMLElement>(".select");
        this.selectedDocElement = this.selectDocElement.querySelector<HTMLElement>(".selected");

        this.arrowDocElement = document.createElement("span");
        this.arrowDocElement.classList.add("arrow", "icon-chevron-down");
        this.selectDocElement.appendChild(this.arrowDocElement);

        this.listDocElement = this.element.querySelector(".list");
        this.items = this.listDocElement.querySelectorAll(".list-item");

        this.selected = null;

        if (!this.element.dataset.value) {
            this.selectedDocElement.innerText = this.selectedDocElement.dataset.placeholder || "";
            this.selectedDocElement.classList.add("placeholder");
        }

        this.element.addEventListener("click", this.onListboxClickDelegate);

        this.items.forEach(item => {
            item.innerText = item.dataset.label;
            item.addEventListener("click", () => this.selectItem(item));
        });
    }

    public selectItem(item: HTMLElement): void {
        this.element.dataset.value = item.dataset.value || "";
        this.selectedDocElement.innerText = item.dataset.label;

        if (this.selected)
            this.selected.classList.remove("selected");
        this.selected = item;

        this.selectedDocElement.classList.remove("placeholder");
        this.selectedDocElement.classList.add("selected");

        let selectEvent = new CustomEvent("onSelectItem", { 
            bubbles: true, 
            cancelable: true, 
            detail: { 
                item 
            }
        });
        this.element.dispatchEvent(selectEvent);
    }

    public close(): void {
        this.listDocElement.classList.remove("opened");
        this.arrowDocElement.classList.replace("icon-chevron-up", "icon-chevron-down");
        this.element.addEventListener("click", this.onListboxClickDelegate);
        document.removeEventListener("click", this.onPageClickDelegate);

        let closeEvent = new CustomEvent("onClose", { bubbles: true, cancelable: true });
        this.element.dispatchEvent(closeEvent);
    }

    public open(): void {
        this.listDocElement.classList.add("opened");
        this.arrowDocElement.classList.replace("icon-chevron-down", "icon-chevron-up");
        document.addEventListener("click", this.onPageClickDelegate);
        this.element.removeEventListener("click", this.onListboxClickDelegate);

        let openEvent = new CustomEvent("onOpen", { bubbles: true, cancelable: true });
        this.element.dispatchEvent(openEvent);
    }

    private onPageClick(e: MouseEvent): void {
        e.stopPropagation();
        this.close();
    }

    private onListboxClick(e: MouseEvent): void {
        e.stopPropagation();
        this.open();
    }
}

export default Listbox;