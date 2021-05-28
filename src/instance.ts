import Dialog from "./dialog";
import DialogOpener from "./dialogOpener";
import DialogPool from "./dialogPool";
import Dropdown from "./dropdown";
import Form from "./form";
import Listbox from "./listbox";
import Toggle from "./toggle";

export namespace instance {

    export const dialogPool = new DialogPool();
    export let dropdowns: Dropdown[];
    export let toggles: Toggle[];
    export let dialogOpeners: DialogOpener[];
    export let listboxs: Listbox[];
    export let forms: Form[];

    export function init(): void {
        document.querySelectorAll<HTMLElement>(".easy-component.ec-dropdown").forEach(dropdown => {
            dropdowns = [];
            dropdowns.push(new Dropdown(dropdown));
        });
    
        document.querySelectorAll<HTMLElement>(".easy-component.ec-toggle").forEach(toggle => {
            toggles = [];
            toggles.push(new Toggle(toggle));
        });
        
        document.querySelectorAll<HTMLElement>(".easy-component.ec-dialog").forEach(dialog => {
            new Dialog(dialog);
        });
    
        document.querySelectorAll<HTMLElement>(".easy-component.ec-dialog-opener").forEach(dialogOpener => {
            dialogOpeners = [];
            dialogOpeners.push(new DialogOpener(dialogOpener));
        });
    
        document.querySelectorAll<HTMLElement>(".easy-component.ec-listbox").forEach(listbox => {
            listboxs = [];
            listboxs.push(new Listbox(listbox));
        });

        document.querySelectorAll<HTMLFormElement>("form.easy-component.ec-form").forEach(form => {
            forms = [];
            forms.push(new Form(form));
        });
    }

    window.addEventListener("load", () => init());
}

export default instance;