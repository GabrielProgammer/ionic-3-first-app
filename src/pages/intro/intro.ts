import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
	public like:number = 0;
	public contatos;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.contatos = [
  		{'nome' : 'Ana', 'telefone' : '98273734', 'email': 'ana@gmail.com'},
  		{'nome' : 'João', 'telefone' : '892732724', 'email': 'joao@hotmail.com'},
  		{'nome' : 'Pedro', 'telefone' : '8987283723', 'email': 'pedro@yahoo.com'},
  	]
  }
  
 public goToTabsPage(){
  this.navCtrl.push(TabsPage);
 }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

}
