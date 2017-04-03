
import { Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-character',
  templateUrl: 'character.html'
})


export class CharacterPage {
str : number;
craft : number;
fate : number;
gold : number;
life : number;
abilities : string[];
alignment : string;
starting : string;
name : string;
imgPath : string;
basePath = "/assets/img/characters/";

abilitiesFinal : Array<{ability: string}>;

  constructor(name : string) {
  this.name = name;
  switch (this.name)
  {
  case "Warrior":
    this.str = 4;
    this.craft = 2;
    this.life = 5;
    this.fate = 1;
    this.alignment = "Neutral";
    this.abilities = [
    "You may roll two dice in battle and use the higher attack roll to determine your attack score.",
    "You may use two Weapons at the same time."
    ];
    this.imgPath = this.basePath + "warrior.png";
    break;

  case "Ghoul":
  this.str = 2;
  this.craft = 4;
  this.life = 4;
  this.fate = 4;
  this.alignment = "Evil";
  this.abilities = [
  "When you attack another character, you may choose to make the attack psychic combat. You may not do this when you are attacked by another character.",
  "Whenever you defeat a character in psychic combat, if you choose to take one of his lives, add it to your own.",
  "When you kill an Enemy in battle, you may raise it from the dead and keep it as a Follower instead of a trophy. You may have one of your raised Followers add its Strength to yours for one battle, after which it disintegrates to the discard pile. You may only use one raised Follower per battle."
  ];
  this.imgPath = this.basePath + "ghoul.png";
  break;

  case "Wizard":
  this.str = 2;
  this.craft = 5;
  this.life = 4;
  this.fate = 3;
  this.alignment = "Evil";
  this.abilities = [
  "You begin the game with two Spells.",
  "During the game, you always have at least one Spell. (Gain a Spell each time you cast your last Spell)",
  "When you attack another character, you may choose to make the attack psychic combat. You may not do this when you are attacked by another character."
  ];
  this.imgPath = this.basePath + "wizard.png";
  break;

  case "Assassin":
  this.str = 3;
  this.craft = 3;
  this.life = 4;
  this.fate = 3;
  this.alignment = "Evil";
  this.abilities = [
  "You may assassinate when you attack a character or creature. You cannot assassinate when you are attacked by another character. When you assassinate, battle takes place as normal except that your victim may not roll a die to add to his Strength. If you win, you must force the loser to lose 1 life; you cannot take an Object or gold instead.",
  "You may not assassinate while at the Crown of Command."
  ];
  this.imgPath = this.basePath + "assassin.png";
  break;

  case "Druid":
  this.str = 2;
  this.craft = 4;
  this.life = 4;
  this.fate = 4;
  this.alignment = "Neutral";
  this.abilities = [
  "You begin the game with one Spell.",
  "You may change your alignment at will. At any given time though, you can only be of one alignment. For example, if you are carrying the Runesword and you wish to pray at the Chapel, you must ditch the Runesword.",
  "Whenever you land on the Woods, you may gain your full complement of Spells, according to your current Craft."
  ];
  this.imgPath = this.basePath + "druid.png";
  break;

  case "Dwarf":
  this.str = 3;
  this.craft = 3;
  this.life = 5;
  this.fate = 5;
  this.alignment = "Neutral";
  this.abilities = [
  "You need not roll the die in the Crags or the Chasm unless you wish to. If you choose to roll, you must accept the result.",
  "You may evade creatures and characters in the Hills.",
  "After rolling the die in the Cave, you may add 1 to the score.",
  "You need only roll 1 die if you attempt to open the Portal of Power by Craft.",
  "You need only roll 2 dice in the Mines.",
  "You are unaffected by the Maze."
  ];
  this.imgPath = this.basePath + "dwarf.png";
  break;

  case "Elf":
  this.str = 3;
  this.craft = 4;
  this.life = 4;
  this.fate = 3;
  this.alignment = "Good";
  this.abilities = [
  "You need not roll the die in the Forest unless you wish to. If you choose to roll, you must accept the result.",
  "You may evade creatures and characters in the Woods.",
  "If you are on the Woods, instead of rolling the die for your move, you may move to any other Woods in the same Region."
  ];
  this.imgPath = this.basePath + "elf.png";
  break;

  case "Minstrel":
  this.str = 2;
  this.craft = 4;
  this.life = 4;
  this.fate = 5;
  this.alignment = "Good";
  this.abilities = [
  "Animals and Dragons will not attack you, although you may choose to attack them.",
  "If you do not attack an Animal, you may attempt to charm it. To do so, roll 1 die: if you roll higher than the Animal's Strength, it joins you as a Follower and adds its Strength to yours in battle. You may only use one charmed Animal per battle.",
  "You may take the Maiden and Princess from a character you land on."
  ];
  this.imgPath = this.basePath + "minstrel.png";
  break;

  case "Monk":
  this.str = 2;
  this.craft = 3;
  this.life = 4;
  this.fate = 5;
  this.alignment = "Good";
  this.starting = "Village";
  this.abilities = [
  "Your inner belief allows you to add your Craft value to your Strength during battle.",
  "After rolling the die when praying, you may add 1 to the score.",
  "You may not use any Weapon or Armour during battle."
  ];
  this.imgPath = this.basePath + "monk.png";
  break;

  case "Priest":
  this.str = 2;
  this.craft = 4;
  this.life = 4;
  this.fate = 5;
  this.alignment = "Good";
  this.starting = "Chapel";
  this.abilities = [
  "You begin the game with one Spell.",
  "After rolling the die when praying, you may add 1 to the score.",
  "You may choose to automatically destroy any Spirits without resorting to psychic combat. When you destroy a Spirit in this manner, you may not keep the Enemy as a trophy but you may gain one Spell.",
  "You may not use any Weapon during battle."
  ];
  this.imgPath = this.basePath + "priest.png";
  break;

  case "Prophetess":
  this.str = 2;
  this.craft = 4;
  this.life = 4;
  this.fate = 2;
  this.alignment = "Good";
  this.starting = "Chapel";
  this.abilities = [
    "You begin the game with one Spell.",
    "During the game, you always have at least one Spell. (Gain a Spell each time you cast your last Spell).",
    "Whenever you have to draw Adventure Cards, you may discard one card of your choice that you do not wish to encounter and draw one more card to replace it, which you must encounter.",
    "At any time during the game, you may look at the Spell Cards held by other characters."
    ];
    this.imgPath = this.basePath + "prophetess.png";
  break;

  case "Sorceress":
  this.str = 2;
  this.craft = 4;
  this.life = 4;
  this.fate = 3;
  this.alignment = "Evil";
  this.starting = "Graveyard";
  this.abilities = [
  "You begin the game with one Spell.",
  "When you attack another character, you may choose to make the attack psychic combat. You may not do this when you are attacked by another character.",
  "You may attempt to beguile a character that you land on, allowing you to take one gold or Object of your choice. To do so, roll one die: you must roll a 6 to beguile a good character; 5 or 6 for a neutral character; or a 4, 5, or 6 for an evil character.",
  "You may take any one Follower, except the Maiden, Unicorn, or Princess from a character that you land on."
  ];
  this.imgPath = this.basePath + "sorceress.png";
  break;

  case "Thief":
  this.str = 3;
  this.craft = 3;
  this.life = 4;
  this.fate = 2;
  this.alignment = "Neutral";
  this.starting = "City";
  this.abilities = [ "You may take one gold or Object of your choice from a character that you land on.",
  "Whenever you visit the Market, Market Day, or Village you may take one card of your choice from the Purchase deck for free."
  ];
  this.imgPath = this.basePath + "thief.png";
  break;

  case "Troll":
  this.str = 6;
  this.craft = 1;
  this.life = 6;
  this.fate = 1;
  this.alignment = "Neutral";
  this.starting = "Crags";
  this.abilities = [ "You need not roll the die in the Crags unless you wish to. If you choose to roll, you must accept the result.",
  "Whenever you roll a 6 for your move, you may regenerate instead of moving. If you choose to regenerate, heal one life and your turn immediately ends."
  ];
  this.imgPath = this.basePath + "troll.png";
  break;
}
  }


  getStr()
  {
    return this.str;
  }

  getImgPath()
  {
  return this.imgPath;
  }

  getName()
  {
    return this.name;
  }


  getAbilities()
  {
    this.abilitiesFinal = [];
    for (let i = 0; i < this.abilities.length; i++)
    {
    this.abilitiesFinal.push({
      ability : this.abilities[i],
      });
    }

    return this.abilitiesFinal;
  }

  getStarting()
  {
    return this.starting;
  }





  getAlignment()
  {
    return this.alignment;
  }
  getFate()
  {
  return this.fate;
  }
  getLife()
  {
    return this.life;
  }
  getCraft()
  {
    return this.craft;
  }

}
