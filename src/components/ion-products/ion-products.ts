import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-products',
  templateUrl: 'ion-products.html'
})
export class IonProductsComponent {
  @Input() products: Array<any>;

  text: string;

  constructor(public navCtrl: NavController) {

    console.log('Hello IonProductsComponent Component');
    this.text = 'Hello World';
  }
  goDetails(item) {
    this.navCtrl.push('ProductDetailsPage', { item: item });
  }

}
