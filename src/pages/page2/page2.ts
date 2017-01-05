import { Component } from '@angular/core';
import { Page1 } from '../page1/page1';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
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
    this.navCtrl.push(Page1, {
      item: item
    });
  }
}
