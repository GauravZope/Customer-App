import { Employee } from './employee-model';
import { Role } from './roles.model';

export class User{
    userId: number;
    username: String;
    userPassword: String;
    accountNonExpired: boolean;
    accountNonLocked:boolean;
    creadentialsNonExpired: boolean;
    enabled:boolean;
    forceResetPassword:boolean;
    lastPasswordUpdateDate:Date;
    firstLoginStatus:boolean;
    lastLoginDate:Date;
    employee:Employee;
    roles : Role[];
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
} 