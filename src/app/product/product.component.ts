import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  startValue:string = "px solid red";
  value:string ="";
  i:number = 0;
  tacno: boolean = false;

  constructor(){
    // setInterval(()=>{
    //   this.value = this.i++ + this.startValue;
    // },1000);
  }

}
