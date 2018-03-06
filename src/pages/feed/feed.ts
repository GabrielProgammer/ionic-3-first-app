import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
	public object_feed = [
    {
      id: 0,
      title: "Gabriel Victor",
      avatar: "avatar.png",
      feed_image: "feed_image.png",
      date: "November 5, 1995",
      description: "Estou criando um app incrível.",
      qntd_likes: 12,
      post_likado: false,
      qntd_comments: 4,
      time_comment: "11h ago"
    },
    {
      id: 1,
      title: "Manoel Bow",
      avatar: "avatar2.jpg",
      feed_image: "feed_image2.jpg",
      date: "November 2, 2017",
      description: "Wtf is this app.",
      qntd_likes: 320,
      post_likado: false,
      qntd_comments: 178,
      time_comment: "1h ago"
    }
  ]
    


  public likado = false;
  public contador(operation, x):void {
      if (operation == 0 && this.object_feed[x].post_likado == true){ //DESLIKE VÁLIDO
        this.object_feed[x].qntd_likes--;
       this.object_feed[x].post_likado = false;
      }
      else if (operation == 1 && this.object_feed[x].post_likado  == false) { //LIKE VÁLIDO
        this.object_feed[x].qntd_likes++;
        this.object_feed[x].post_likado = true;
      }
      else //OPERAÇÃO INVÁLIDA
        this.showAlert();
  }

   public showAlert() { //ALERT DE OPERAÇÃO INVÁLIDA
    let alert = this.alertCtrl.create({
      title: 'Ops!',
      subTitle: 'Operação inválida',
      buttons: ['OK']
    });
    alert.present();
  }

  public mudaNome(description) {
    this.object_feed[2].description = description;
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  public somaDoisNumeros(num1:number, num2:number):void {
  	alert (num1 + num2);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10,99);
  }

}
