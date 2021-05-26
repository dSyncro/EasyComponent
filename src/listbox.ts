import Component from "./component";

import "../style/listbox.scss";

export class Listbox extends Component {

    public items: NodeListOf<HTMLElement>;
    public selected: HTMLElement;

    private onPageClickDelegate = this.onPageClick.bind(this);
    private onListboxClickDelegate = this.onListboxClick.bind(this);

    private selectDocElement: HTMLElement;
    private selectedDocElement: HTMLElement;
    private arrowDocElement: HTMLElement;
    private listDocElement: HTMLElement;

    constructor(element: HTMLElement) {
        super(element);
        this.init();
    }

    private init(): void {
        this.selectDocElement = this.element.querySelector(".select") as HTMLElement;
        this.selectedDocElement = this.selectDocElement.querySelector(".selected") as HTMLElement;

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

        this.selectedDocElement.addEventListener("click", this.onListboxClickDelegate);

        this.items.forEach(item => {
            item.innerText = item.dataset.label;
            item.addEventListener("click", () => this.selectItem(item));
        });
    }

    public selectItem(item: HTMLElement) {
        this.element.dataset.value = item.dataset.value || "";
        this.selectedDocElement.innerText = item.dataset.label;

        if (this.selected)
            this.selected.classList.remove("selected");
        this.selected = item;

        this.selectedDocElement.classList.remove("placeholder");
        this.selectedDocElement.classList.add("selected");
    }

    private onPageClick(e: MouseEvent): void {
        this.listDocElement.classList.remove("opened");
        this.arrowDocElement.classList.replace("icon-chevron-up", "icon-chevron-down");
        this.selectDocElement.addEventListener("click", this.onListboxClickDelegate);
        document.removeEventListener("click", this.onPageClickDelegate);
    }

    private onListboxClick(e: MouseEvent): void {
        e.stopPropagation();
        this.listDocElement.classList.add("opened");
        this.arrowDocElement.classList.replace("icon-chevron-down", "icon-chevron-up");
        document.addEventListener("click", this.onPageClickDelegate);
        this.selectDocElement.removeEventListener("click", this.onListboxClickDelegate);
    }
}

export default Listbox;