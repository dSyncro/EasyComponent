import Component from "./component";
import EC from "./EasyComponents";

export class DialogOpener extends Component {

    public targetName: string;

    private openDialogDelegate = this.openDialog.bind(this);

    constructor(element: HTMLElement) {
        super(element);
        this.init();
    }

    public openDialog(): void {
        this.targetName = this.element.dataset.target;
        if (!this.targetName) return;

        const target = EC.dialogPool.findDialogByName(this.targetName);
        EC.dialogPool.openDialog(target);
    }

    private init(): void {
        if (!this.element.dataset.target) return;
        this.element.addEventListener("click", this.openDialogDelegate);
    }
}

export default DialogOpener;