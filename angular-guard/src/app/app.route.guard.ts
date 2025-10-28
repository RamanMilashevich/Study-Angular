import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthGuard  {
  canActivate() {
    return true
  }

  canActivateChild() {
    return true
  }
}
