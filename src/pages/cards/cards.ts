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

   //get4thEdition();  will replace this initialization in future
    let acquisition = new Card("Acquisition", "Spell", ["Cast at the start of your turn, before you move. Take one Object of your choice or one gold from any character."]);
    let alchemy = new Card("Alchemy", "Spell", ["Cast at the start of your turn, before you move. Convert any number of Objects you have into gold. Discard the chosen Objects and gain 1 gold for each."])
    let princess = new Card("Princess", "Follower", ["You may have up to 2 lives per visit healed at the Castle for free.", "You may exchange the Princess for 3 gold at the Castle. If you do this, you must place her on the discard pile"])
    let alchemist = new Card("Alchemist","Follower",["The Alchemist can convert any number of Objects you have into gold"," Discard the chosen Objects and gain 1 gold for each","He cannot reverse the procedure"]);
let amulet = new Card("Amulet","Magic Object",["You cannot cast Spells, including the Command Spell","No Spells will affect you, other than the Command Spell"]);
let angel = new Card("Angel","Event",["If you are of good alignment, you gain one life"," If you are evil, you lose one life"," There is no effect if you are neutral"," The Angel then departs to the discard pile"]);
let ape = new Card("Ape","Enemy",["Sub Type: Animal","Strength: 3","A savage Ape is terrorising this area"," It will remain here until it is killed"]);
let armour = new Card("Armour","Object",["Sub Type: Armour","If you are defeated in battle and just lost a life, roll 1 die"," If you roll a 4, 5, or 6, the Armour protected you and you did not lose that life, though you still lost the battle"]);
let axe = new Card("Axe","Object",["Sub Type: Weapon","Add 1 to your Strength during battle","You may build a Raft when you are in the Woods or the Forest"]);
let bag_of_gold = new Card("Bag of Gold","Object",["Exchange immediately for 1 gold and then place this card on the discard pile"]);

let enemy = new Card("Enemy","Sub Type: Animal",["Strength: 3","A ferocious Bear is running amok in this area"," It will remain here until it is killed"]);
let blizzard = new Card("Blizzard","Event",["Winter has come with a vengeance and a Blizzard envelops the land"," For two rounds, all characters, no matter what Region they are in, may only move one space per turn"," The Blizzard then abates to the discard pile"]);
let book_of_spells = new Card("Book of Spells","Event",["You have found the fabled Book of Spells"," You gain your full complement of Spells, according to your current Craft"," The Book then vanishes to the discard pile"]);
let cave = new Card("Cave","Place",["The Cave will remain here for the rest of the game"," See what you discover inside by rolling 1 die", "(1) Attacked by a Dragon with strength 7", "(2) Attacked by a Goblin with strength 2", "(3) Lost for 1 turn", "(4) Gain 2 gold" , "(5) Gain 2 gold", "(6) Gain 3 gold"]);
let cross = new Card("Cross","Magic Object",["If you are evil, you do not lose a life in the Chapel"," If you are good, you do not lose a life in the Graveyard","You may choose to automatically destroy any Spirits without resorting to psychic combat","Spirits destroyed in this manner cannot be kept as trophies"]);
let cursed_by_a_hag = new Card("Cursed by a Hag","Follower",["You must take her as a Follower"," All other Followers immediately leave you - discard them"," You may have no other Followers until you rid yourself of the Hag by visiting the Village Mystic (even if he ignores you)"," You may then discard her"]);
let demon = new Card("Demon","Enemy",["Sub Type: Spirit","Craft: 10","A Demon has appeared from the underworld to cause chaos in this area"," It will remain here until it is killed"]);

let devil = new Card("Devil","Event",["You are visited by a Devil"," If you are of evil alignment, you gain one life"," If you are good, you lose one life"," There is no effect if you are neutral"," The Devil then departs to the discard pile"]);
let dragon = new Card("Dragon","Enemy",["Sub Type: Dragon","Strength: 7","A fearsome Dragon is terrorising this area"," It will remain here until it is killed"]);
let enchanter = new Card("Enchanter","Stranger",["An Enchanter seeks an able adventurer"," To the first character landing here with a Craft of 4 or more he will grant one of the following wishes of his choice, then vanish to the discard pile: Gain one Spell, gold, Strength, Craft, life, or fate; or teleport to any space in this Region"]);
let evil_darkness = new Card("Evil Darkness","Event",["An Evil Darkness from the nether worlds sweeps the land"," All characters except those of evil alignment must miss one turn"," The Darkness then vanishes to the discard pile"]);
let fairy = new Card("Fairy","Stranger",["A Fairy seeks a champion"," To the first good character landing here she will grant one of the following wishes of his choice, then vanish to the discard pile: Gain one Spell, gold, Strength, Craft, life, or fate; or teleport to any space in this Region"]);
let fountain_of_wisdom = new Card("Fountain of Wisdom","Place",["Place a total of four Craft here when revealed"," You may drink from the Fountain once per visit and take one Craft from the Fountain to add to your own Craft"," When all four have been taken, the Fountain vanishes to the discard pile"]);
let ghost = new Card("Ghost","Enemy",["Sub Type: Spirit","Craft: 4","A Ghost materialises in (roll 1 die):"]);
let  graveyard = new Card(" Graveyard"," Chapel",[" Castle"," Temple"]);

let giant = new Card("Giant","Enemy",["Sub Type: Monster","Strength: 6","An immense Giant has set up residence in this area"," He will remain here until he is killed"]);
let gnome = new Card("Gnome","Follower",["You need only roll 1 die when opening the Portal of Power by Craft and 2 dice in the Mines","You need not roll the die in the Crags unless you wish to"," If you choose to roll, you must accept the result","You may evade creatures and characters in the Hills"]);
let goblin = new Card("Goblin","Enemy",["Sub Type: Monster","Strength: 2","A Goblin is laying waste to this area"," It will remain here until it is killed"]);
let guide = new Card("Guide","Follower",["You need not roll the die in the Chasm, Crags, or Forest unless you wish to"," If you choose to roll, you must accept the result"]);
let healer = new Card("Healer","Stranger",["A Healer has made his home here for the rest of the game"," He will heal up to 2 lives per visit for any character landing here, free of charge"]);
let helmet = new Card("Helmet","Object",["Sub Type: Armour","If you are defeated in battle and just lost a life, roll 1 die"," If you roll a 6, the Helmet protected you and you did not lose that life, though you still lost the battle"]);
let hermit = new Card("Hermit","Stranger",["Roll 1 die and place the Hermit on the indicated space:"]);
let  cursed_glade = new Card(" Cursed Glade"," Oasis",[" Crags"," Forest"]);

let hobgoblin = new Card("Hobgoblin","Enemy",["Sub Type: Monster","Strength: 3","A brutal Hobgoblin is stalking this area"," It will remain here until it is killed"]);
let holy_grail = new Card("Holy Grail","Magic Object",["No evil character may have the Holy Grail","Add 1 to your Craft","You do not lose a life in the Desert"]);
let holy_lance = new Card("Holy Lance","Draconic Lord: Varthrax (Dragon Expansion only)",["Magic Object","Sub Type: Weapon","No evil character may have the Holy Lance","Add 1 to your Strength during battle","Add 3 to your Strength during battle against Dragons"]);
let imp = new Card("Imp","Event",["You meet a mischievous Imp"," Roll 1 die to determine where he teleports you:"]);
let  tavern = new Card(" Tavern"," Ruins",[" Hidden Valley"," Cursed Glade"]);

let lemure = new Card("Lemure","Enemy",["Sub Type: Spirit","Craft: 1","This lowly creature from the Underworld pounces at you from the shadows"," It will remain here until it is killed"]);

let stranger = new Card("Stranger","A kindly Mage has made his home here for the rest of the game",[" He will give one Spell per visit to each good character landing here, if their Craft allows"]);
let magic_belt = new Card("Magic Belt","Magic Object",["Add 1 to your Strength"]);
let magic_portal = new Card("Magic Portal","Place",["The Magic Portal will remain here for the rest of the game"," You may pass through if you wish"," Roll 1 die to determine where you are teleported to:"]);
let  city = new Card(" City"," Warlock's Cave",[" Temple"," Plain of Peril"]);

let place = new Card("Place","Place a total of four Strength here when revealed",[" You may drink at the Stream once per visit and increase your Strength by taking one Strength from the Stream"," When all 4 have been taken, the Stream vanishes to the discard pile"]);
let magical_vortex = new Card("Magical Vortex","Event",["A Magical Vortex absorbs all Spells from every character"," Each character's Spells and the Magical Vortex must be placed immediately on their discard piles"]);
let maiden = new Card("Maiden","Follower",["Add 2 to your Craft"]);
let market = new Card("Market","Place",["A Market has set up here for the rest of the game"," On each visit you may buy available Objects at these prices","Water Bottle 1G","Shield 2G","Mule 2G"," Raft 3G"]);

let marsh = new Card("Marsh","Place",["The Marsh will remain here for the rest of the game"," Whenever you land here, if your Strength is less than 5 you must miss one turn"]);
let maze = new Card("Maze","Place",["The Maze will remain here for the rest of the game"," Whenever you land here, if your Craft is less than 5, you must miss one turn"]);
let mephistopheles = new Card("Mephistopheles","Event",["You have been encountered by Mephistopheles on a mission to this land"," If you are evil, gain 1 Craft"," If you are good or neutral, he converts you to evil"," He then returns to his own dark kingdom - place him on the discard pile"]);
let mercenary = new Card("Mercenary","Follower",["If you want the Mercenary as your Follower, pay 1 gold"," If not, he waits here for a character willing to pay him"," While he is your Follower he will add 3 to your Strength in battle until the end of the turn provided you pay 1 gold"," You may only pay 1 gold once per turn"]);
let mule = new Card("Mule","Follower",["The Mule can carry an extra four Objects for you"," If you lose the Mule, leave any surplus Objects of your choice in the space you are in"]);
let ogre = new Card("Ogre","Enemy",["Sub Type: Monster","Strength: 5","An Ogre has decided this area is easy pickings"," It will remain here until it is killed"]);
let orb_of_knowledge = new Card("Orb of Knowledge","Magic Object",["Whenever you draw Adventure Cards, you may discard one card of your choice that you do not wish to encounter and draw one more card to replace it, which you must encounter"]);
let pestilence = new Card("Pestilence","Event",["Pestilence has befouled this Region"," All characters in this Region must lose 1 life"," The Pestilence then vanishes to the discard pile"]);
let phantom = new Card("Phantom","Stranger",["A Phantom will haunt this space until it has granted the first evil character to visit it one of the following wishes of his choice whereupon it will vanish to the discard pile: Gain one Spell, gold, Strength, Craft, life, or fate; or teleport to any space in this Region"]);
let pixie = new Card("Pixie","Follower",["You need not roll the die in the Forest unless you wish to"," If you choose to roll, you must accept the result","You may evade creatures and characters in the Woods"]);
let poltergeist = new Card("Poltergeist","Follower",["A Poltergeist has attached itself to you"," You must take it as a Follower"," Its only effect is to slow your movement to 1 space per turn"," You can only rid yourself of it by crossing the River, either by bridge, raft, or ferry"," You must then discard it"]);
let pool_of_life = new Card("Pool of Life","Place",["Place a total of four lives here when revealed"," You may bathe in the Pool once per visit and take one life from the Pool to add to your own lives"," When all four have been taken away, the Pool of Life drains away to the discard pile"]);
let potion_of_strength = new Card("Potion of Strength","Magic Object",["When you drink the potion it will increase your Strength by 2 until the end of the turn","Once you have drunk it, place it on the discard pile"]);
let prince = new Card("Prince","Follower",["You may have up to 2 lives per visit healed at the Castle for free","You may exchange the Prince for 3 gold at the Castle"," If you do this, you must place him on the discard pile"]);
let raft = new Card("Raft","Object",["On your next turn, instead of your normal move, you may choose to cross the River to a space directly opposite the one you are in"," Whether you cross or not, place the Raft on the discard pile, as it cannot be carried with you"]);
let raiders = new Card("Raiders","A band of Raiders attacks you and steals all your gold",[" They immediately stash the gold at the Oasis (place the gold there) and retreat to their hide-out"," Place the Raiders on the discard pile"]);
let ring = new Card("Ring","Magic Object",["Add 1 to your Strength and 1 to your Craft"]);
let runesword = new Card("Runesword","Magic Object",["Sub Type: Weapon","No good character may have the Runesword","Add 1 to your Strength during battle","When you use the Runesword in battle to defeat an Enemy or another character and then cause him to lose a life, you gain 1 life"]);
let serpent = new Card("Serpent","Enemy",["Sub Type: Animal","Strength: 4","A Serpent has made its home in this area"," It will remain here until it is killed"]);
let shadow = new Card("Shadow","Enemy",["Sub Type: Spirit","Craft: 2","A Shadow is lurking in the dark corners of this area"," It will remain here until it is killed"]);
let shield = new Card("Shield","Object",["Sub Type: Armour","If you are defeated in battle and just lost a life, roll 1 die","If you roll a 5 or 6, the Shield protected you and you did not lose that life, though you still lost the battle"]);
let shrine = new Card("Shrine","Place",["The Shrine will remain here for the rest of the game"," Roll 1 die to pray with the following results:"]);
let gain_1_gold = new Card(" Gain 1 gold"," Gain 1 Spell",[" Gain 1 life"," Teleport to any space in the same Region"]);
let siren = new Card("Siren","Event",["A Siren's song can be heard throughout the Region"," All characters in this Region must miss their next turn"," The Siren's song then fades to the discard pile"]);
let solomons_crown = new Card("Solomon's Crown","Magic Object",["Add 2 to your Craft"]);
let sorcerer = new Card("Sorcerer","Stranger",["A Sorcerer has set up shop here and will remain for the rest of the game"," He sells Spells at the price of 1 gold per Spell - but only to those whose Craft allows"," You may only buy one Spell per visit"]);
let spectre = new Card("Spectre","Enemy",["Sub Type: Spirit","Craft: 3","A Spectre has appeared in this area"," It will remain here until it is killed"]);
let storm = new Card("Storm","Event",["A Storm sweeps through this Region"," All the characters in this Region must miss 1 turn"," The Storm then abates to the discard pile"]);
let sword = new Card("Sword","Object",["Sub Type: Weapon","Add 1 to your Strength during battle"]);
let two_bags_of_gold = new Card("Two Bags of Gold","Object",["Exchange immediately for 2 gold and then place this card on the discard pile"]);
let unicorn = new Card("Unicorn","Follower",["Add 1 to your Strength and 1 to your Craft"]);
let wand = new Card("Wand","Magic Object",["You may always have at least 1 Spell if your Craft allows (gain a Spell each time you cast your last Spell)"]);
let water_bottle = new Card("Water Bottle","Object",["You do not lose a life in the Desert"]);
let wild_boar = new Card("Wild Boar","Enemy",["Sub Type: Animal","Strength: 1","There is a Wild Boar roaming this area"," It will remain here until it is killed"]);
let witch = new Card("Witch","Stranger",["A Witch lurks in this space for the rest of the game. If you land here roll 1 die:", "(1) Become a Toad for 3 turns", "(2) Lose 1 life", "(3) Gain 1 Strength", "(4) Gain 1 Craft","(5) Gain 1 Spell", "(6) Replenish fate up to your fate value"]);
let wolf = new Card("Wolf","Enemy",["Sub Type: Animal","Strength: 2","A vicious Wolf now dwells in this area"," It will remain here until it is killed"]);
let wraith = new Card("Wraith","Enemy",["Sub Type: Spirit","Craft: 5","A Wraith is wreaking havoc in this area"," It will remain until it is killed"]);

// see cardGenerator.scala for .txt processing of cardScraper.py output ... could be done better
    this.items = [acquisition, alchemy, princess, alchemist, amulet, angel, ape, armour, axe, bag_of_gold, enemy, blizzard, book_of_spells, cave, cross, cursed_by_a_hag, demon,
    ghost,graveyard,giant,gnome,goblin,guide,healer,helmet,hermit,cursed_glade,hobgoblin,holy_grail,holy_lance,imp,tavern,lemure,stranger,magic_belt,magic_portal,city,place,magical_vortex,
    maiden,market,marsh,maze,mephistopheles,mercenary,mule,ogre,orb_of_knowledge,pestilence,phantom,pixie,poltergeist,pool_of_life,potion_of_strength,prince,raft,raiders,ring,runesword,serpent,shadow,shield,
    shrine,gain_1_gold,siren,solomons_crown,sorcerer,spectre,storm,sword,two_bags_of_gold,unicorn,wand,water_bottle,wild_boar,witch,wraith];
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
