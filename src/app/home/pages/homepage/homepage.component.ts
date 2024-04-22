import { Component, OnInit } from '@angular/core';
import { AddProductService } from 'src/app/core/services/add-product.service';
import { Product } from 'src/app/data-type';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  
  trendyProducts:undefined | Product[];
  constructor(private productAPI:AddProductService) {}

  ngOnInit(): void {


    this.productAPI.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
    })
  }
}
