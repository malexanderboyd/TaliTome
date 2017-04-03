import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CharacterPage } from '../character/character';
@Component({
  selector: 'page-tools',
  templateUrl: 'tools.html'
})

export class Tools {
characters: CharacterPage[];
items: Array<{character: CharacterPage}>;
selected : CharacterPage;
constructor(public navCtrl: NavController) {

  this.selected = null;

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
      this.items.push({
        character : this.characters[i],
        });
      }
}

  toggleSelected(ss: string)
  {
    this.selected = new CharacterPage(ss);
    console.info("selected");
    return 1;
  }

}
