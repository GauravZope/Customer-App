import { AbstractControl, ValidationErrors } from '@angular/forms';

export class commonValidator {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        const value = (control.value as String);
        if (value!= null && value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true }
        }
        return null;
    }
}