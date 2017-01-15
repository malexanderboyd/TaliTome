import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Card } from '../../providers/card';
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class Cards {
    items: Array<Card>;
    resetItems: Array<Card>;

  constructor(public navCtrl: NavController) {
    let acquisition = new Card("Acquisition", "Spell", ["Cast at the start of your turn, before you move. Take one Object of your choice or one gold from any character."]);
    let alchemy = new Card("Alchemy", "Spell", ["Cast at the start of your turn, before you move. Convert any number of Objects you have into gold. Discard the chosen Objects and gain 1 gold for each."])
    let princess = new Card("Princess", "Follower", ["You may have up to 2 lives per visit healed at the Castle for free.", "You may exchange the Princess for 3 gold at the Castle. If you do this, you must place her on the discard pile"])
    this.items = [acquisition, alchemy, princess];
    this.resetItems = this.items;
  }



  getSearch(ev : any)
  {
    this.items = this.resetItems; // reset allowing for all to  be searched
    let searchTerm = ev.target.value;
    if(searchTerm && searchTerm.trim() != '') // not empty
    {
      console.log("Search term" + searchTerm);
      this.items = this.items.filter( (item) => {
        return (item.getName().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      })
    }
  }

  resetPage(ev : any) // don't think this is needed, but not 100% sure.
  {
    this.items = this.resetItems;
  }


}
