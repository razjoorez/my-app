import { Component, EventEmitter, Input, Output, ViewEncapsulation, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit, OnChanges{
@Input() product: Product | undefined;
@Output() bought = new EventEmitter<string>();
@Input() name ='';


ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if(!product.isFirstChange()) {
    const oldValue = product.previousValue.name;
    const newValue = product.currentValue.name;

    console.log(`Product changed from ${oldValue} to ${newValue}`)
    }
}

// buy() {
//   this.bought.emit();
// }

//or

constructor() {
  console.log(`Name is ${this.product?.name} in the constructor`)
}
  ngOnInit(): void {
    console.log(`Name is ${this.product?.name} in the ngOnInit`);
  }



buy() {
  this.bought.emit(this.product?.name);
}

// get productName(): string {
//   console.log(`Get ${this.product?.name}`)
//  return this.product?.name;
// }
get remane(): string {
  return 'ree'
}

get productName():string {
  console.log(`Get ${this.name}`)
  return this.name;
}
}

