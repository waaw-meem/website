import { Component } from '@angular/core';
import { AddProductService } from 'src/app/core/services/add-product.service';
import { Product } from 'src/app/data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  confirmMessage:string=''

  constructor(private productAPI:AddProductService){}

  submit(data:Product){
    this.productAPI.addProduct(data).subscribe((result)=>{
      if(result){
        this.confirmMessage = 'Product is Added Successfully'
      }
      setTimeout(() => this.confirmMessage==undefined,3000)
    })
  }

  

}
