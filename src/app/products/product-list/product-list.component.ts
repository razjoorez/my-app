import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from 'src/app/product/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements AfterViewInit, OnInit{
  ngOnInit(): void {
     this.products = this.productService.getProducts();
  }

  constructor(private productService: ProductsService){

  }

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

ngAfterViewInit(): void {


  if(this.productDetail) {
    console.log('after view product detail name', this.productDetail.product)
  }
}
selectedProduct :  Product | undefined;
// products = ['Webcam', 'Microphone', 'Wireless Keyboard'];

today = new Date();

products: Product[] = [
  {

  name: 'Webcam',
  price: 100
  },
  {
    name: 'Microphone',
    price: 200
  },
  {
    name: 'Wireless keyboard',
    price: 85
  }
]

 
// onBuy() {
//   window.alert(`Just bought ${this.selectedProduct}`)
// }

//or



onBuy(name: string) {
  window.alert(`You just bought ${this.selectedProduct?.name}`);
}

trackByProducts(index: number, name: string):string {
  return name ;
}

}
