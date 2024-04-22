import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddProductService } from 'src/app/core/services/add-product.service';
import { Product } from 'src/app/data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {

  productData: Product | undefined; // Specify the type for productData
  productMessage:string=''

  constructor(
    private route: ActivatedRoute,
    private productAPI: AddProductService
  ) { }

  ngOnInit(): void {
    let productID = this.route.snapshot.paramMap.get('id');

    if (productID) {
      let numericProductID = +productID;

      // Use the correct method name 'getSingleroduct' instead of 'getSingleProduct'
      this.productAPI.getSingleroduct(numericProductID).subscribe((data: Product) => {
        console.log(data);
        this.productData = data;
      });
    }
  }

  submit(data: Product) {
    if(this.productData){
      data.id = this.productData.id
    }

   this.productAPI.updateProduct(data).subscribe((result) => {
    if(result){
      this.productMessage = 'Update Product Date'
    }
   })
   setTimeout(()=>{
    this.productMessage == undefined
   },3000)
  }
}
