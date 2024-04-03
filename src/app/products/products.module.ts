import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from '../product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SortPipe } from './sort.pipe';
import { CopyrightDirective } from '../copyright.directive';
import { NumericDirective } from '../numeric.directive';
import { ProductHostDirective } from '../product-host.directive';
import { PermissionDirective } from '../permission.directive';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    ProductHostDirective,
    PermissionDirective
  ],
  imports: [
    CommonModule,
    ProductComponent,
    
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
