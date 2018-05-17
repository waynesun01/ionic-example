import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder,Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder) {
    
  }
  loginForm = this.formBuilder.group({

    'LoginID': ['admin@163.com', [Validators.required, Validators.minLength(4),Validators.email]],
    
    'LoginPwd': ['123456', [Validators.required, Validators.minLength(4)]]
    
    });
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
