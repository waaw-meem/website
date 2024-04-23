import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddProductService } from 'src/app/core/services/add-product.service';
import { Product } from 'src/app/data-type';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  productData: Product | undefined; // Update type to Product

  constructor(
    private router:ActivatedRoute,
    private productAPI:AddProductService
    ){}

  ngOnInit(): void {
    let productIdString = this.router.snapshot.paramMap.get('productId');
    if (productIdString) {
      let productIdNumber = parseInt(productIdString, 10);
      if (!isNaN(productIdNumber)) {
        this.productAPI.getSingleroduct(productIdNumber).subscribe((data: Product) => {
          this.productData = data;
        });
      } else {
        console.error('Invalid productId');
      }
    }
  }

}
