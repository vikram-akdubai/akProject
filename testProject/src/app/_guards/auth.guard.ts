import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UtilityService } from '../_services/utility.service';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private utilityService: UtilityService) {  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let user = this.utilityService.getCurrentUser();
        if (user !== null) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: {
            returnUrl: state.url } });
        return false;
    }
}
