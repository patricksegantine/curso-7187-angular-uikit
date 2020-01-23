import { AbstractControl, FormControl, Validators } from '@angular/forms';

export class CustomValidator {
    constructor() { }

    static cpfValidator() {
        return null;
    }

    static emailValidator(control: FormControl) {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if(!re.test(control.value)) {
            return { 'e-mail inválido': true };
        }
        return null;
    }
}