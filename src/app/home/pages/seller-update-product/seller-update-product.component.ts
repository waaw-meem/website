import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddProductService } from 'src/app/core/services/add-product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  constructor(
    private route:ActivatedRoute,
    private productAPI:AddProductService
    ) { }

  ngOnInit(): void {
    let productID = this.route.snapshot.paramMap.get('id')
    console.log(productID)
  }

  submit(data:any){

  }
}
