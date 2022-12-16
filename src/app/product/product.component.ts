import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  startValue: string = 'px solid red';
  value: string = '';
  i: number = 0;
  tacno: boolean = true;
  @Input() product: Product;
  @Output() addToCart = new EventEmitter<number>();
  @Output() removeFromCart = new EventEmitter<number>();

  private startingSupply: number;

  constructor() {
    // setInterval(()=>{
    //   this.value = this.i++ + this.startValue;
    // },1000);
  }

  ngOnInit(): void {
    this.startingSupply = this.product.supplies;
    // console.log(this.product)
  }

  onAddToCart() {
    if (
      this.product.supplies > 0 &&
      this.product.supplies <= this.startingSupply
    ) {
      this.product.supplies--;
      this.addToCart.emit(this.product.supplies);
    }
  }
  onRemoveFromCart() {
    if (
      this.product.supplies >= 0 &&
      this.product.supplies < this.startingSupply
    ) {
      this.product.supplies++;
      this.removeFromCart.emit(this.product.supplies);
    }
  }
}
