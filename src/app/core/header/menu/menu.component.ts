import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/data-type';
import { AddProductService } from '../../services/add-product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuType:string = 'default'
  sellerName:string =''
  searchResult: undefined | Product[]

  constructor(
    private router:Router,
    private productAPI:AddProductService
  ){}

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

  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement
      this.productAPI.searchProduct(element.value).subscribe((result) => {
      if(result.length > 5){
        result.length = 5
      }
      this.searchResult = result
      })
    }
  }

  hideSearch(){
    this.searchResult=undefined
  }

  submitValue(val:string){
    this.router.navigate([`/search/${val}`])
  }

}
