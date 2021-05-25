/* This is Mixed Messages
My thought is to create a Theatre Season program at random each year depending on the number of shows which is also determined at random
The Parameters will be the Show, Time slot in the season, The number of shows, Genre, Director,Set Designer?, Costume Designer?, Lightining Designer?, Production Manager?, Stage Manager?    
*/
const setDesigners = ["Margot Adolphe", "Sean Fanning", "Kristen Prescott", "Gary English"];
const costumeDesigners = ["Jacourtney Williams", "Margot Adolphe", 'Dakota', 'Diego'];
const lightingDesigners = ["Justin Beets", "Sam Boshillio", "Joey X"];
const soundDesigners= ["Wallace Mccanless", "Kelly Brook", "Ryan Chapman"];
const productionManagers = ["Craig Campbell", "Robert Copley", "Steve Grair"];
const stageManagers = ["Robert Kline", "Tyler Larson", "Kimberly Ballard"];
const genres = ["Dance","Ballet", "Musical", "Abstract" , "Contemporary", "Neo-Classical" ,"Greek", "Classical", "Comedy", "Tragedy","Melodrama"];
const showProgram = [setDesigners,costumeDesigners, lightingDesigners,soundDesigners,productionManagers, stageManagers,genres];
// above will print all the elements in each array when testing showProgram
/*class showProgram {
  constructor(setDesigners,costumeDesigners,lightingDesigners, soundDesigners, productionManagers, stageManagers,genres)
} 
numOfShows.forEach(showProgram.assign(Element) => console.log(Element))*/

const numOfShows = (Math.floor(Math.random() * 12));
const totalNumOfShows = numOfShows;
/*This expression above works too for either numOfShows or totalNumOfShows
console.log(showProgram);*/
console.log(totalNumOfShows);
//I got the code to output a random number evertime I ran it but now I can't transform the funtion into totalNumOfShows
//foreach(numOfShows)`We will ${numOfShows}
/*let numOfShows = () => {
    if (Math.floor(Math.random() * 8) > 0) 
      return "success"
  } /*else {
      return 'failure'
  }
  function numOfShows(){
     Math.floor(Math.random() * 8); 
   if(numOfShows => 0) 
     return totalNumOfShows;
}*/
// This expression above works in producing a random number everytime totalNumOfShows is runned