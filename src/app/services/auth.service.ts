import { Router, CanActivate } from "@angular/router";
import { Injectable } from '@angular/core';
import { Security } from '../shared/utils/security.util';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements CanActivate {
    constructor(private router: Router) {

    }

    canActivate() {
        if (!Security.hasToken()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}