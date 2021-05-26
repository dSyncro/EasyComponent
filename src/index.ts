import Dropdown from "./dropdown";
import Toggle from "./toggle";
import Dialog from "./dialog";
import DialogOpener from "./dialogOpener";
import Listbox from "./listbox";

import "../style/core.scss";
import "../style/sample.scss";

window.addEventListener("load", () => {
    document.querySelectorAll(".easy-component.ec-dropdown").forEach(dropdown => {
        new Dropdown(dropdown as HTMLElement);
    });

    document.querySelectorAll(".easy-component.ec-toggle").forEach(toggle => {
        new Toggle(toggle as HTMLElement);
    });
    
    document.querySelectorAll(".easy-component.ec-dialog").forEach(dialog => {
        new Dialog(dialog as HTMLElement);
    });

    document.querySelectorAll(".easy-component.ec-dialog-opener").forEach(dialogOpener => {
        new DialogOpener(dialogOpener as HTMLElement);
    });

    document.querySelectorAll(".easy-component.ec-listbox").forEach(listbox => {
        new Listbox(listbox as HTMLElement);
    });
});

export { Dropdown, Toggle, Dialog, DialogOpener };