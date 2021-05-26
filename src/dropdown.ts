import Component from "./component";

import "../style/dropdown.scss";

export class Dropdown extends Component {

    private list: HTMLElement;

    private onDropdownClickDelegate = this.onDropdownClick.bind(this);
    private onPageClickDelegate = this.onPageClick.bind(this);

    constructor(element: HTMLElement) {
        super(element);
        this.list = this.element.querySelector(".list");
        this.element.addEventListener("click", this.onDropdownClickDelegate);
    }

    public open(): void {
        this.list.classList.add("opened");
        document.addEventListener("click", this.onPageClickDelegate);
        this.element.removeEventListener("click", this.onDropdownClickDelegate);

        // Dispatch Event
        const openEvent = new CustomEvent("onOpen", {bubbles: true, cancelable: true});
        this.element.dispatchEvent(openEvent);
    }

    public close(): void {
        this.list.classList.remove("opened");
        this.element.addEventListener("click", this.onDropdownClickDelegate);
        document.removeEventListener("click", this.onPageClickDelegate);

        // Dispatch Event
        const closeEvent = new CustomEvent("onClose", {bubbles: true, cancelable: true});
        this.element.dispatchEvent(closeEvent);
    }

    private onDropdownClick(e: MouseEvent): void {
        e.stopPropagation();
        this.open();
    }

    private onPageClick(e: MouseEvent): void {
        let target = e.target as Node;
        if (target === this.element || this.element.contains(target))
            return;
        this.close();
    }

    public get items(): NodeListOf<HTMLElement> {
        return this.list.querySelectorAll(".list-item");
    }
}

export default Dropdown;