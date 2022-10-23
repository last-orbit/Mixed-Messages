/* This is Mixed Messages
My thought is to create a Theatre Season program at random each year depending on the number of shows which is also determined at random
The Parameters will be the Show, Time slot in the season, The number of shows, Genre, Director,Set Designer?, Costume Designer?, Lightining Designer?, Production Manager?, Stage Manager?    
*/
function numOfShows() {
let numOfShows = Math.floor(Math.random() * 12); 
if (numOfShows === 0) {
  return 'We are having no shows this season!';
  } else {
  return 'We are having only'+ ' ' + [numOfShows] + ' ' + 'shows this season!';
 }
}
const setDesigners = ["MA", "SF", "KP", "GE"];
const costumeDesigners = ["JW", "MA", 'Dak', 'Die'];
const lightingDesigners = ["JB", "SB", "JX"];
const soundDesigners= ["WM", "KB", "RC"];
const productionManagers = ["CC", "RC", "SG"];
const stageManagers = ["RK", "TL", "KB"];
const genres = ["Dance","Ballet", "Musical", "Abstract" , "Contemporary", "Neo-Classical" ,"Greek", "Classical", "Comedy", "Tragedy","Melodrama"];
//const showProgram = setDesigners,costumeDesigners,lightingDesigners,soundDesigners,productionManagers,stageManagers,genres;
function program() {
  if (numOfShows > 0) {
  return setDesigners;//'This is the list of designers we are having this season';
 } else {
 return setDesigners
 }
} 
console.log(numOfShows(), program());
/* when running the console it will return the number of shows we are having and prints out every item in the array
the next step would be to print out show program so that each array prints out instead. */
