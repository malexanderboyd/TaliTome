import { Injectable } from '@angular/core';

@Injectable()
export class Card {


  public name: string;
  public type: string;
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

}
