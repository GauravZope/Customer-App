import { AbstractControl, ValidationErrors } from '@angular/forms';

export class resetPasswordFormvalidators{

    static cannotContainSpace(control: AbstractControl) : ValidationErrors| null{
        if((control.value as String).indexOf(' ') >= 0){
            return { cannotContainSpace : true }
        }
        return null;
    }

    static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null>{
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(control.value === "gaurav")
                    resolve( { shouldBeUnique : true });
                else
                    resolve(null);
            },2000);
        });
    }

    static validateOldPassword(control: AbstractControl) : Promise<ValidationErrors | null>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let oldPassword : string = "gauravzope";
                if(oldPassword.includes(control.value) ) 
                    resolve({ validateOldPassword  : true})
                if(control.value === "gauravzop")
                    resolve({validateOldPassword : true});
                else resolve(null);
            },500);
        });
    }

    static matchNewAndConfirmPassword(control : AbstractControl) : ValidationErrors|null{
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if(newPassword.value !== confirmPassword.value){
         return { passwordDoNotMatch : true };
        }
        return null; 
    }
}