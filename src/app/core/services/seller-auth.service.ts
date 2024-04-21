import { EventEmitter, Injectable } from '@angular/core';
import { Login, SignUp } from 'src/app/data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SellerAuthService {

  isLoggedIn = new BehaviorSubject<boolean>(false)
  logginInfo = new EventEmitter<boolean>(false)

  constructor(
    private http:HttpClient,
    private router:Router
  ) {}
 
  // SIGNUP
  userSignUp(data:SignUp){
    return this.http.post('http://localhost:3000/seller-auth',
    data,{observe:'response'}).subscribe((result) => {
      this.isLoggedIn.next(true)
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
    })
  }

  // Reload page Seller HOME
  reloadSellerPage(){
     if(localStorage.getItem('seller')){
      this.isLoggedIn.next(true)
      this.router.navigate(['seller-home'])
     }
  }

  // Login
  userLogin(data:Login){
    return this.http.get(`http://localhost:3000/seller-auth?email=${data.email}&password=${data.password}`
    ,{observe:'response'}).subscribe((result:any) => {
     if(result && result.body && result.body.length){
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['seller-product-list'])
     }else{
      console.log('Login Failed')
      this.logginInfo.emit(true)
     }
    })
  }

}
