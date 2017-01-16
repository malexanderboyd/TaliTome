import { Injectable } from '@angular/core';

@Injectable()
export class Card {


  public name: string;
  public type: string;
  public strength: string;
  public subtype: string;
  public abilities: string[];

    constructor(cardName: string, cardType: string, cardAbility: string[]) {
    // pre-set cards
    this.name = cardName;
    this.type = cardType;
    this.abilities = cardAbility;
    }

    getName() {
    return this.name;
    }

    getType() {
    return this.type;
    }

    getAbilities()
    {
    return this.abilities;
    }

    getStrength()
    {
    if(this.strength != null)
      return this.strength;
    else
      return "";
    }

    getSubType()
    {
    if(this.subtype != null)
      return this.subtype;
    else
      return "";
    }
}
