/* This is Mixed Messages
My thought is to create a Theatre Season program at random each year depending on the number of shows which is also determined at random
The Parameters will be the Show, Time slot in the season, The number of shows, Genre, Director,Set Designer?, Costume Designer?, Lightining Designer?, Production Manager?, Stage Manager?    
*/
const setDesigners = ["MA", "SF", "KP", "GE"];
const costumeDesigners = ["JW", "MA", 'Dak', 'Die'];
const lightingDesigners = ["JB", "SB", "JX"];
const soundDesigners= ["WM", "KB", "RC"];
const productionManagers = ["CC", "RC", "SG"];
const stageManagers = ["RK", "TL", "KB"];
const genres = ["Dance","Ballet", "Musical", "Abstract" , "Contemporary", "Neo-Classical" ,"Greek", "Classical", "Comedy", "Tragedy","Melodrama"];
const showProgram = [setDesigners,costumeDesigners, lightingDesigners,soundDesigners,productionManagers, stageManagers,genres];
// above will print all the elements in each array when testing showProgram

function numOfShows(){  
 let numOfShows = Math.floor(Math.random() * 12);
 if (numOfShows => 0) 
  return numOfShows;
}
/*let totalNumOfShows = numOfShows(){
 if (t);
}
*/
console.log(numOfShows());

//const totalNumOfShows = numOfShows.assign(showProgram);
//I got the code to output a random number evertime I ran it but now I can't transform the funtion into totalNumOfShows
//foreach(numOfShows)`We will ${numOfShows}
/*let numOfShows = () => {
    if (Math.floor(Math.random() * 8) > 0) 
      return "success"
  } /*else {
      return 'failure'
  }
}*/
// This expression above works in producing a random number everytime totalNumOfShows is runned