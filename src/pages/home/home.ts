import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Characters } from '../characters/characters';
import { Cards } from '../cards/cards';
import { Tools } from '../tools/tools';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  selectedItem: any;
  title: string[];
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.title = ['Characters', 'Cards', 'Tools'];

    this.items = [];
    for (let i = 0; i < this.title.length; i++) {
      this.items.push({
        title: this.title[i],
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    console.log(item.title);
    var choice = new String(item.title).toString();
    switch (choice)
    {

    case "Characters":
      this.navCtrl.push(Characters);
      break;
    case "Cards":
      this.navCtrl.push(Cards);
      break;

    case "Tools":
      this.navCtrl.push(Tools);
      break;

    default:
      console.log(choice);
      break;
    }
    //this.navCtrl.push(ttt, {
      //item: item
    //});
  }
}
