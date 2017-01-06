import { Component } from '@angular/core';
import { CharacterPage } from '../character/character';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html'
})

export class Characters {
  selectedItem: any;
  characters: CharacterPage[];
  items: Array<{character: CharacterPage}>;
  constructor() {

    // Let's populate this page with character list
    let warrior = new CharacterPage("Warrior");
    let ghoul = new CharacterPage("Ghoul");
    let wizard = new CharacterPage("Wizard");
    let assassin = new CharacterPage("Assassin");
    let druid = new CharacterPage("Druid");
    let dwarf = new CharacterPage("Dwarf");
    let elf = new CharacterPage("Elf");
    let minstrel = new CharacterPage("Minstrel");
    let monk = new CharacterPage("Monk");
    let priest = new CharacterPage("Priest");
    let prophetess = new CharacterPage("Prophetess");
    let sorceress = new CharacterPage("Sorceress");
    let thief = new CharacterPage("Thief");
    let troll = new CharacterPage("Troll");
    this.characters = [
    warrior,
    ghoul,
    wizard,
    assassin,
    druid,
    dwarf,
    elf,
    minstrel,
    monk,
    priest,
    prophetess,
    sorceress,
    thief,
    troll
    ];

    this.items = [];
    for (let i = 0; i < this.characters.length; i++) {
      this.setupItems(this.items, this.characters[i]);

    }
  }


  setupItems(items : any[], chars : CharacterPage)
  {
  this.items.push({
    character : chars
    });
  }



  itemTapped($event, item) {
    console.log(item.getName());
  }

}
