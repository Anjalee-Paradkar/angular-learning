import { state } from "@angular/animations";
import { AbstractControl } from "@angular/forms";

export function StateValidator(control:AbstractControl):{[key:string]: any} | any {
    const stateId = control.get('state');


}