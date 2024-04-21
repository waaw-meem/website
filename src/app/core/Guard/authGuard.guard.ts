import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Your authentication logic here, return true/false based on authentication status
    const isAuthenticated = true; // Example authentication check

    if (!isAuthenticated) {
      // Redirect to login page or unauthorized page
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
