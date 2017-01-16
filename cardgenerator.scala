/**
  * Created by Boyd on 1/15/2017.
  */
import scala.io.Source
import java.awt.Desktop
import java.io.{File, IOException}

import scala.collection.mutable.ArrayBuffer
object cardGenerator {

  def main(args: Array[String]): Unit =
  {
    val file = "./src/main/resources/tacos.txt"
    var currentCard = new ArrayBuffer[String]()
    val titlePattern = """([T,t][i,I][T,t][l,L][E,e])""".r
    val cardTypePattern =  """([C,c][a,A][r,R][D,d][ ][T,t][y,Y][p,P][e,E])""".r
    var packagedStrings = new ArrayBuffer[String]()


    var newCardFlag : Boolean = false
    var newCardStart : Boolean = false
    for(line <- Source.fromFile(file).getLines())
      {
        var currentLine = line.toString // get the current line
        currentLine = currentLine.replace("Title: ", "")
        currentLine = currentLine.replace("Card Type: ", "")
        // check if the new card flag is flipped
        if(!newCardStart)
        {
          // no new card, we're still gathering details for current card right now.
          if (currentLine.matches("")) {
            // if we've got a "" means a new line, our file only has 2 new lines in a row when it starts a new card
            if (!newCardFlag) {
              // turning this flag means we've found 1 new line which means it could be starting a new card (to be checked on nxt line)
              newCardFlag = true
            }
            else {
              // we found another newline character after the previous line also being a newline char, start new card procedures
              newCardStart = true
                // reset back to check for more cards!
              newCardFlag = false
            }
          }
          else { // not a new line character, meaning it some form of text about the current card
            currentCard.append(currentLine)// add it to our working arraybuffer
            newCardFlag = false   // add it to our working arraybuffer
          }
        }
        else // we're about to get a new card, let's package up the current card and reset vars.
          {

              var cardBuffer = currentCard.toArray
              var defaultString : String = ""
              newCardStart = false
              currentCard = new ArrayBuffer[String]()

              if(cardBuffer.length > 1) {
                val cardName = cardBuffer(1).mkString
                val cardType = cardBuffer(2).mkString
                defaultString = "let " + cardName.toLowerCase + " = new Card(\"" + cardName + "\",\"" + cardType + "\","
                var i = 0
                defaultString = defaultString + "["
                for (i <- 3 to cardBuffer.length-1) {
                  if(i == (cardBuffer.length-1))
                    defaultString = defaultString + "\"" + cardBuffer(i) + "\"]);"
                  else
                    defaultString = defaultString + "\"" + cardBuffer(i) + "\","
                }
              }

            packagedStrings.append(defaultString)

          }
      }

    for(card <- packagedStrings)
      {
        println(card)
      }
  }
}
