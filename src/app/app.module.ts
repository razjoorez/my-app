import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { ProductHostDirective } from './product-host.directive';
import { PermissionDirective } from './permission.directive';


@NgModule({
  declarations: [
    AppComponent,
  //  CopyrightDirective,
   // NumericDirective,
   // ProductHostDirective,
   // PermissionDirective,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
