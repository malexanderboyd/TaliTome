import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CharacterPage } from '../character/character';
/*
  Generated class for the CharacterModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-character-modal',
  templateUrl: 'character-modal.html'
})
export class CharacterModalPage {
  champion : CharacterPage;
  abilities : Array<{ability: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.champion = new CharacterPage(navParams.get('name'));
    this.abilities = this.champion.getAbilities();
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
