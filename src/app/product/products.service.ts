import { Injectable } from '@angular/core';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {  
        name: 'web cam',
        price: 100
      },
      {
        name: 'Microphone',
        price: 200
      },
      {
        name: 'Wireless Keyboard',
        price: 85
      }
    ]
  }
}
