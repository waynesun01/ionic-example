import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppService, AppGlobal } from '../../app/app.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  spinner1:boolean=true;

  slides: Array<any> = [];
  slidesUrl:string=AppGlobal.API.getProducts;

  constructor(public AppService: AppService, public navCtrl: NavController) {
    this.getSlides();

  }
  getSlides() {
    // this.AppService.httpGet(AppGlobal.API.getProducts, {}, rs => {
    //   console.debug(rs);
    // }, true);
    this.spinner1=false;
    this.slides=[
      {
        "PicUrl":"http://nq.c.glsbt.com/attachment/images/10/2018/03/c4oUzurpkjDtbpU0V1JU9D8RZR0L4U.png",
        "Link":"",
        "Title":'AAA'
      },
      {
        "PicUrl":"http://www.holdpanzer.com/attachment/images/10/2018/05/BmN6Lr0vU6afaAV060Ns0z606ZZIM0.png",
        "Link":"",
        "Title":'VVV'
      },
    ];

  }

  goDetails(item){

  }

}
