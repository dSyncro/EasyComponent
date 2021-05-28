export class Form {

    private onSubmitDelegate = this.onSubmit.bind(this);

    constructor(public element: HTMLFormElement) {
        this.element.addEventListener("submit", this.onSubmitDelegate);
    }

    public submit(): void {
        const formData = new FormData(this.element);
        const submitEvent = new CustomEvent("onSubmit", {
            bubbles: true,
            cancelable: true,
            detail: { data: formData }
        });
        this.element.dispatchEvent(submitEvent);
        
        if (!this.element.requestSubmit){
            this.onSubmit();
            const isValid = this.element.reportValidity();
            if (isValid) 
                this.element.submit();
            return;
        }

        this.element.requestSubmit();
    }

    private regenerateInputs() {
        this.element.querySelectorAll("input.ec-data-helper").forEach(helper => helper.remove());
        this.element.querySelectorAll<HTMLElement>(".easy-component").forEach(component => {
            if (!component.dataset.name) return;
            const input = document.createElement("input");
            input.setAttribute("type", "hidden");
            input.setAttribute("name", component.dataset.name);
            input.setAttribute("value", component.dataset.value || "");
            this.element.appendChild(input);
        });
    }

    private onSubmit(): void {
        this.regenerateInputs();
    }

}

export default Form;