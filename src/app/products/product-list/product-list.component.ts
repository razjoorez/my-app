import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
ngAfterViewInit(): void {
  if(this.productDetail) {
    console.log('after view product detail name', this.productDetail.name)
  }
}
selectedProduct = '';
products = ['Webcam', 'Microphone', 'Wireless Keyboard'];


// onBuy() {
//   window.alert(`Just bought ${this.selectedProduct}`)
// }

//or

@ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

onBuy(name: string) {
  window.alert(`You just bought ${name}`);
}

trackByProducts(index: number, name: string):string {
  return name ;
}

}
