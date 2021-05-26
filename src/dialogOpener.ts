import Component from "./component";
import instance from "./instance";

export class DialogOpener extends Component {

    public get targetName() {
        return this.element.dataset.target;
    }

    public set targetName(name: string) {
        this.element.dataset.target = name;
    }

    private openDialogDelegate = this.openDialog.bind(this);

    constructor(element: HTMLElement) {
        super(element);
        this.init();
    }

    public openDialog(): void {
        if (!this.targetName) return;

        const target = instance.dialogPool.findDialogByName(this.targetName);

        const launchEvent = new CustomEvent("onLaunch", {
            bubbles: true,
            cancelable: true,
            detail: {
                target
            }
        });
        this.element.dispatchEvent(launchEvent);

        instance.dialogPool.openDialog(target);

        const openEvent = new CustomEvent("onOpen", {
            bubbles: true,
            cancelable: true,
            detail: {
                target
            }
        });
        this.element.dispatchEvent(openEvent);
    }

    private init(): void {
        if (!this.element.dataset.target) return;
        this.element.addEventListener("click", this.openDialogDelegate);
    }
}

export default DialogOpener;