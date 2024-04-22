import { Component } from '@angular/core';
import { AddProductService } from 'src/app/core/services/add-product.service';
import { Product } from 'src/app/data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  productList:Product[] | undefined
  productMessage: undefined | string;

  constructor(private productAPI:AddProductService){}

  ngOnInit(): void {
   this.getProductList()
  }

  deleteProduct(id: number) {
    this.productAPI.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted';
        this.getProductList()
      }
    })

    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000)
  }


  getProductList(){
    this.productAPI.getProduct().subscribe((result)=>{
      this.productList = result
    })
  }
}
