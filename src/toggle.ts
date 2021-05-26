import Component from "./component";
import "../style/toggle.scss";

export class Toggle extends Component {

    private track: HTMLElement;
    private handle: HTMLElement;
    private handleResizeObserver: ResizeObserver;

    private updateHandleDelegate = this.updateHandle.bind(this);

    constructor(element: HTMLElement) {
        super(element);
        this.init();
    }

    public toggle(): boolean {
        this.element.classList.toggle("active");
        const newValue = !Boolean(this.element.dataset.value);
        this.element.dataset.value = newValue.toString();

        const toggleEvent = new CustomEvent("onToggle", { 
            detail: { 
                value: newValue 
            }, 
            bubbles: true, 
            cancelable: true 
        });
        this.element.dispatchEvent(toggleEvent);
        return newValue;
    }

    private init(): void {
        this.track = document.createElement("div");
        this.track.classList.add("track");

        this.handle = document.createElement("div");
        this.handle.classList.add("handle");

        this.track.appendChild(this.handle);
        this.element.appendChild(this.track);

        this.updateHandle();
        this.handleResizeObserver = new ResizeObserver(this.updateHandleDelegate);
        this.handleResizeObserver.observe(this.element);

        this.element.addEventListener("click", (e) => this.toggle());
    }

    private updateHandle(): void {
        this.handle.style.width = this.handle.style.height = `${this.track.offsetHeight}px`;
    }
}

export default Toggle;