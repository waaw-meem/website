import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomepageComponent } from "./pages/homepage/homepage.component";
import { SellerAuthComponent } from "./pages/seller-auth/seller-auth.component";
import { SellerHomeComponent } from "./pages/seller-home/seller-home.component";
import { AuthGuard } from "../core/Guard/auth-guard.guard";
import { SellerAddProductComponent } from "./pages/seller-add-product/seller-add-product.component";
import { SellerUpdateProductComponent } from "./pages/seller-update-product/seller-update-product.component";

const appRoutes:Routes = [
    {path:'',component:HomepageComponent},
    {path:'seller-auth',component:SellerAuthComponent},
    {path:'seller-home',component:SellerHomeComponent, canActivate:[AuthGuard]},
    {path:'seller-add-product',component:SellerAddProductComponent, canActivate:[AuthGuard]},
    {path:'seller-update-product/:id',component:SellerUpdateProductComponent, canActivate:[AuthGuard]},

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

  export class AppRoutingModule {}