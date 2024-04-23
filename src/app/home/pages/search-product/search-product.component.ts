import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddProductService } from 'src/app/core/services/add-product.service';
import { Product } from 'src/app/data-type';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  productData: Product[] | undefined;
  quantity: number = 1;

  constructor(private activeRoute: ActivatedRoute, private productService: AddProductService) { }

  ngOnInit(): void {
    const query = this.activeRoute.snapshot.paramMap.get('query');

    if (query) {
      this.productService.searchProduct(query).subscribe((result) => {
        this.productData = result;
      });
    }
  }
}
