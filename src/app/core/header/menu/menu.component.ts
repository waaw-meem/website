import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuType:string = 'default'
  sellerName:string =''

  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.events.subscribe((val:any) => {
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType = 'seller'
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller')
            let sellerData = sellerStore && JSON.parse(sellerStore)[0]
            
            this.sellerName = sellerData.name
          }
        }
        else{
          this.menuType = 'default'
        }
      }
    })
  }


  logOut(){
    localStorage.removeItem('seller')
    this.router.navigate(['/seller-home'])
  }
}
