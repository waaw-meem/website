import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './core/header/menu/menu.component';
import { SellerAuthComponent } from './home/pages/seller-auth/seller-auth.component';
import { HomepageComponent } from './home/pages/homepage/homepage.component';
import { AppRoutingModule } from './home/home-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './home/pages/seller-home/seller-home.component';
import { SellerAddProductComponent } from './home/pages/seller-add-product/seller-add-product.component';
import { SellerProductListComponent } from './home/pages/seller-product-list/seller-product-list.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SellerAuthComponent,
    HomepageComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    SellerProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
