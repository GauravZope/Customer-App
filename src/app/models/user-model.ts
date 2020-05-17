import { Employee } from './employee-model';

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

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
} 