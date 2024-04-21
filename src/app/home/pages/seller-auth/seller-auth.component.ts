import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerAuthService } from 'src/app/core/services/seller-auth.service';
import { Login, SignUp } from 'src/app/data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  showLogin=false;
  errorMessage:string = ''
  
  constructor(
    private sellerAuth:SellerAuthService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.sellerAuth.reloadSellerPage()
  }

  signUp(data:SignUp):void{
    this.sellerAuth.userSignUp(data)
  }

  login(data: Login): void {
    console.warn(data);
    this.sellerAuth.userLogin(data)
    this.sellerAuth.logginInfo.subscribe((error)=>{
      if(error){
        this.errorMessage = 'Login Crediantials are wrong'
      }
      
    })
  }

  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
  

}
