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
    if(this.selected == null)
    {
    this.selected = new CharacterPage(ss);
    console.info("selected");
    return 1;
    }
    else
    {
    this.selected = new CharacterPage(ss);
    return 1;
    }
  }


  updateStat(stat: number, type: number)
  {
    switch(stat)
    {
    case 1: // strength
      var currStr = document.getElementById('currentStr');
      if(type != 1)
      this.decUpdateValue(currStr);
      else
      this.IncUpdateValue(currStr);
      break;
    case 2: // craft
      var currCraft = document.getElementById('currentCraft');
      if(type != 1)
      this.decUpdateValue(currCraft);
      else
      this.IncUpdateValue(currCraft);
      break;
    case 3: // Life
      var currLife = document.getElementById('currentLife');
      if(type != 1)
      this.decUpdateValue(currLife);
      else
      this.IncUpdateValue(currLife);
      break;
    case 4: // Fate
      var currFate = document.getElementById('currentFate');
      if(type != 1)
      this.decUpdateValue(currFate);
      else
      this.IncUpdateValue(currFate);
      break;
    case 5: // Gold
      var currGold = document.getElementById('currentGold');
      if(type != 1)
      this.decUpdateValue(currGold);
      else
      this.IncUpdateValue(currGold);
      break;
    }
  }

  decUpdateValue(currEle : any)
  {
    try
    {
      if(currEle != null)
      {
        var currVal = parseInt(currEle.innerHTML);
        currVal -= 1;
        if(currVal >= 0)
          currEle.innerHTML = currVal.toString();
          else
          ; // no change (cannot go negitive)
      }
    }
    catch(e)
    {
    console.log(e);
    }
  }

  IncUpdateValue(currEle : any)
  {
    try
    {
      if(currEle != null)
      {
        var currVal = parseInt(currEle.innerHTML);
        currVal += 1;
        if(currVal >= 0)
          currEle.innerHTML = currVal.toString();
          else
          ; // no change (cannot go negitive)
      }
    }
    catch(e)
    {
    console.log(e);
    }
  }
}
