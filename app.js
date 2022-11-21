// Creating a Manager array and returning it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

// Writing the function here 
function createManager(name, age, team, trophies){
  let managerDetails = [
    name, age, team, trophies
  ]
  return managerDetails;
} 

try { 
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
}

// Creating a formation object and returning it
var formation = [4, 4, 3];

// Formation function 
function createFormation(formation){
  if(formation.length == 0){
    return null;
  }
  let gameFormation = {
    defender : formation[0],
    midfield : formation[1],
    forward : formation[2]
  }
  return gameFormation;
}

try {
  var formationObject = createFormation(formation);
} catch (e) {
}

// Filtering players that debuted in ___ year
function filterByDebut(year){
  let playerYear=  players.filter((elt)=>{
    if(elt.debut == year){
      return true;
    }
    else{
      return false;
    }
  })
  return playerYear;
}
// Filtering players that play at the position _______
function filterByPosition(position){
  let playerPosition=  players.filter((elt)=>{
    if(elt.position == position){
      return true;
    }
    else{
      return false;
    }
  })
  return playerPosition;
}
// Filtering players that have won ______ award
function filterByAward(awardName){
  return players.filter((player) =>{
      let trophy=player.awards.filter(elt=>{
        return elt.name==awardName;
      })
      return trophy.length>0;
  });
} 
// Filtering players that won ______ award ____ times
function filterByAwardxTimes(awardName, numOfTimes){
  return players.filter((player) => {
    let awardXtrophies = player.awards.filter((elt) =>{
        return elt.name == awardName;
    });
    return awardXtrophies.length==numOfTimes;
});
}
// Filtering players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  return players.filter((player) =>{
    if(player.country == country){
      let awardXcountry = player.awards.filter((elt) =>{
        return elt.name == awardName;
      });
      return awardXcountry.length > 0;
    }
    else{
      return false;
    }
  });
}

// Filtering players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  return players.filter((player) =>{
    return player.team == team && player.awards.length >= noOfAwards && player.age <= age;
});
}
// Sorting players in descending order of their age
function SortByAge(){
  return players.sort((player1, player2) =>{
    return player1.age - player2.age;
  })
}
// Sorting players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  return players.filter(player=>{
    return player.team == team;
  })
  .sort((player1,player2)=>{
    return player2.awards.length - player1.awards.length;
  })
}
// Sorting players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  return players.filter((player) => {
    if(player.country != country){
      return false;
    }
    let ans = player.awards.filter((elt) => {
        return elt.name == awardName;
    });
    return ans.length == noOfTimes;
  })
  .sort((player1,player2)=>{
    return player1.name.localeCompare(player2.name)
  })
}
// Sorting players that are older than _____ years in alphabetical order
// Sorting the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
  return players
      .filter((player) => {
          return player.age > age;
      })
      .sort((player1, player2) => {
          return player1.name.localeCompare(player2.name);
      })
      .map(player=>{
        player.awards.sort((award1, award2) => {
            return award2.year - award1.year;
        });
        return player;
      })
}