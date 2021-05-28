import Component from "./component";
import instance from "./instance";

export class DialogOpener implements Component {

    private openDialogDelegate = this.openDialog.bind(this);

    constructor(readonly element: HTMLElement) {
        this.init();
    }

    public get targetName() {
        return this.element.dataset.target;
    }

    public set targetName(name: string) {
        this.element.dataset.target = name;
    }

    public openDialog(): void {
        // If there is no target there is no target to open
        if (!this.targetName) return;

        // Find target dialog
        const target = instance.dialogPool.findDialogByName(this.targetName);

        // Trigger onOpenRequest request event
        const openRequestEvent = new CustomEvent("onOpenRequest", {
            bubbles: true,
            cancelable: true,
            detail: {
                target
            }
        });
        this.element.dispatchEvent(openRequestEvent);

        // Open target dialog
        instance.dialogPool.openDialog(target);

        // Trigger onOpen event
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