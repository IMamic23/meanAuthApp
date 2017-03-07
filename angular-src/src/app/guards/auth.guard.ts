import { AuthService } from './../services/auth.service';
import {RouterStateSnapshot, Router,  CanActivate,  ActivatedRouteSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}


