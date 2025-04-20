import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLoggedInValue: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);;
  readonly isLoggedIn$ = this.isLoggedInValue.asObservable()
  private userNameSubject = new BehaviorSubject<string>(localStorage.getItem("user-name") || 'User');
  readonly userName$ = this.userNameSubject.asObservable()
  constructor (private router:Router){
    this.checkInitialLoginStatus()
  }
  setUserName(name: string): void {
    localStorage.setItem("user-name", name);
    localStorage.setItem("IsLoggin", "true");
    localStorage.setItem("auth-token","test-token")
    this.isLoggedInValue.next(true)
    this.userNameSubject.next(name);
  }
  getToken ():string | null{
    return localStorage.getItem("auth-token")
  }
  login() {
    this.router.navigateByUrl("/login")
  }
  clearUserName(): void {
    localStorage.removeItem("user-name");
    localStorage.removeItem("IsLoggin")
    localStorage.removeItem("auth-token")
    this.userNameSubject.next("User");
    this.isLoggedInValue.next(false)
  }
  private checkInitialLoginStatus(): void {
    const userName = localStorage.getItem("user-name");
    const isLogged = !!userName; 
    this.isLoggedInValue.next(isLogged);
  }
}
