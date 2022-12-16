import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Output() addToCart = new EventEmitter<number>();
  @Output() removeFromCart = new EventEmitter<number>();
  search: string = 'apple';
  niz: number[] = [1, 2, 3, 4];

  products: Product[] = [
    {
      title: 'Samsung Galaxy S22 Ultra',
      description:
        'Samsung Galaxy S22 Ultra glavni je model S22 serije. To je prvi telefon serije S koji uključuje Samsungovu S Pen olovku.',
      image: '../../assets/images/Samsung-S22-U3.png',
      price: '985€',
      supplies: 21,
    },
    {
      title: 'Apple iPhone 14 Pro',
      description:
        'iPhone 14 ima isti superbrzi čip kao i iPhone 13 Pro. Ažurirani dizajn pruža bolje performanse, tako da možete duže ostati u akciji.',
      image: '../../assets/images/iphone.png',
      price: '1790€',
      supplies: 41,
    },
    {
      title: 'Xiaomi Redmi 10 Power',
      description:
        'Ako želite dugotrajnu bateriju i snažan procesor, Redmi 10 vredi kupiti, ali je kamera lošija od drugih modela.',
      image: '../../assets/images/xiaomi.png',
      price: '210€',
      supplies: 14,
    },
    {
      title: 'Samsung Galaxy Z Flip 3',
      description:
        'Samsung Z flip je prvi sklopivi pametni telefon koji koristi stakleni ekran. To smanjuje nabore stakla u predelu savijanja.',
      image: '../../assets/images/samsung-flip.png',
      price: '685€',
      supplies: 23,
    },
  ];

  onAddToCart(supply: number) {
    console.log(supply);
    this.addToCart.emit();
  }
  onRemoveFromCart(supply: number) {
    console.log(supply);
    this.removeFromCart.emit();
  }
}
