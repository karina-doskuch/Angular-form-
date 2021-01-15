import { AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';


export function emailValidator(control: AbstractControl): { [key: string]: any } {
    const value = control.value;
    const emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    const result = emailRegex.test(value);

    if (result) {
        return null;
    } else {
      return {emailValidator: {value}};
    }
}

export function rangeValidator(minValue: number, maxValue: number): ValidatorFn {
    return (control: AbstractControl):  { [key: string]: any } => {
        const value = +control.value;

        if (isNaN(value)) {
            return {rangeValidator: {value}};
        } else if 
            (value < minValue || value > maxValue) {
                return {rangeValidator: {value}};
            } 

            return null;
      };
    }

export function observableUrlValidator(control: AbstractControl): Observable<ValidationErrors | boolean | null> {
const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
const value = control.value;
const result = urlRegex.test(value);

return new Observable<ValidationErrors>(observer =>  {
    if (!result) {
        observer.next({urlNotAllowed: {value}}) 
    } else {
        observer.next(null);
    }
observer.complete();
}).pipe(delay(5000));
}

