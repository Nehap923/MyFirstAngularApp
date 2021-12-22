import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderpartComponent } from '../app/headerpart/headerpart.component'
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  // {
  // path:'home',
  // component: HeaderpartComponent
  // },
  {
    path:'',
    loadChildren:()=>import('./product/product.module').then(mod=>mod.ProductModule)

    //loadChildren: "./product/product.module#ProductModule"
    },
    {
      path:'',
      loadChildren:()=>import('./blogs/blogs.module').then(mod=>mod.BlogsModule)
  
    //  loadChildren: "./product/product.module#ProductModule"
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
