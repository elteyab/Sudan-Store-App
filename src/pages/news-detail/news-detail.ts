// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: DetaElectroinc Team
// Author URI: http://DetaElectroinc.com/
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';


@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {
  post;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public config: ConfigProvider) {
    this.post = this.navParams.get('post');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailPage');
  }

}
