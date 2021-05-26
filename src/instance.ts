import Dialog from "./dialog";
import DialogOpener from "./dialogOpener";
import DialogPool from "./dialogPool";
import Dropdown from "./dropdown";
import Listbox from "./listbox";
import Toggle from "./toggle";

export namespace instance {

    export const dialogPool = new DialogPool();
    export let dropdowns: Dropdown[];
    export let toggles: Toggle[];
    export let dialogOpeners: DialogOpener[];
    export let listboxs: Listbox[];

    export function init(): void {
        document.querySelectorAll(".easy-component.ec-dropdown").forEach(dropdown => {
            dropdowns = [];
            dropdowns.push(new Dropdown(dropdown as HTMLElement));
        });
    
        document.querySelectorAll(".easy-component.ec-toggle").forEach(toggle => {
            toggles = [];
            toggles.push(new Toggle(toggle as HTMLElement));
        });
        
        document.querySelectorAll(".easy-component.ec-dialog").forEach(dialog => {
            new Dialog(dialog as HTMLElement);
        });
    
        document.querySelectorAll(".easy-component.ec-dialog-opener").forEach(dialogOpener => {
            dialogOpeners = [];
            dialogOpeners.push(new DialogOpener(dialogOpener as HTMLElement));
        });
    
        document.querySelectorAll(".easy-component.ec-listbox").forEach(listbox => {
            listboxs = [];
            listboxs.push(new Listbox(listbox as HTMLElement));
        });
    }

    window.addEventListener("load", () => init());
}

export default instance;