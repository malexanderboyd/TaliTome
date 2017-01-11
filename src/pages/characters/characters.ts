import { Component } from '@angular/core';
import { CharacterPage } from '../character/character';
import { CharacterFilterPipe } from '../../app/pipes/character-filter.pipe';

@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html'
})

export class Characters {
  selectedItem: any;
  searchTerm : string = ' ';
  characters: CharacterPage[];
  items: Array<{character: CharacterPage}>;
  resetItems: Array<{character: CharacterPage}>; // used to reset items after filtering in search.
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
    this.items.push({
      character : this.characters[i],
      });
    }

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
        return (item.character.getName().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      })
    }
  }


  resetPage(ev : any) // don't think this is needed, but not 100% sure.
  {
    this.items = this.resetItems;
  }





}
