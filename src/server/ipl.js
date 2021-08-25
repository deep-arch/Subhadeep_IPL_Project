//Problem 1:   Number of matches played per year for all the years in IPL.

// function numberofmatchesPlayed(matches) 
// {    
//     const result = {};
  
//     for (let match of matches) {
//         const season = match.season;
//         if (result[season]) {         
//             result[season] += 1;
//         } else {
//             result[season] = 1;
//         }
//     }    
//     return result;
// }

function numberofmatchesPlayed(matches) 
{    
    return result = matches.reduce((numberofMatches, match) =>
    (numberofMatches[match.season] = numberofMatches[match.season] + 1 || 1, numberofMatches), {});
}

//Problem 2:   Number of matches won per team per year in IPL.

// function numberofmatchesWon(matches)    
// {
//     let result = {};
    
//     for(let match of matches) {
//         if (result.hasOwnProperty(match.winner)) {
//             for (let team of result[match.winner]) {
//                 if (team.hasOwnProperty(match.season)) {
//                     team[match.season] += 1;
//                 }
//                 else {
//                     team[match.season] = 1;
//                 }
//             }
//         }
//         else {
//             result1 = {};
//             result[match.winner] = [];
//             result1[match.season] = 1;
//             result[match.winner].push(result1);
//         }
//     }    
//     return result;
// }

function numberofmatchesWon(matches)    
{
    let result = {};
    matches.forEach((match) => {
      if (result.hasOwnProperty(match.winner)) {
        result[match.winner].find((season) => {
          if (season.hasOwnProperty(match.season)) {
            season[match.season] += 1;
          }
          else{
            season[match.season] = 1;
          }
        });
      } else {
        let season = {};
        result[match.winner] = [];
        season[match.season] = 1;
        result[match.winner].push(season);
      }
    });
    return result;
}

//Problem 3:   Extra runs conceded per team in the year 2016.

// function extraRuns2016(matches, deliveries) 
// {
//     let result = {};

//     for (let delivery of deliveries){
//         if (delivery.extra_runs != 0) {
//             for(let match of matches){
//                 if (match.id === delivery.match_id) {
//                     if (match.season === "2016") {
//                         if (result.hasOwnProperty(delivery.bowling_team)) {
//                             result[delivery.bowling_team] += Number(delivery.extra_runs);
//                         }
//                         else {
//                             result[delivery.bowling_team] = Number(delivery.extra_runs);
//                         }
//                     }
//                 }
//             }
//         }
//     }  
//     return result;
// }

function extraRuns2016(matches, deliveries) 
{
    let result = {};
    deliveries.forEach((delivery) => {
        if (delivery.extra_runs != 0) {
            matches.forEach((match) => {
                if (match.id === delivery.match_id) {
                    if (match.season === "2016") {
                        if (result.hasOwnProperty(delivery.bowling_team)) {
                            result[delivery.bowling_team] += Number(delivery.extra_runs);
                        }
                        else {
                            result[delivery.bowling_team] = Number(delivery.extra_runs);
                        }
                    }
                }
            });
        }
    });
    return result;
}

//Problem 4:   Top 10 economical bowlers in the year 2015.

function economicalBowlers2015(matches, deliveries) 
{
    let matchId = [];
    for (let match of matches) {
        const season = match.season;
        if (season === '2015') {
            matchId.push(match.id);
        }
    }
    const runsByPlayer = {};
    const ballsPerPlayer = {};
    for(let delivery of deliveries){       
        if(matchId.includes(delivery.match_id)){
            if(!runsByPlayer.hasOwnProperty(delivery.bowler)){
                runsByPlayer[delivery.bowler] = Number(delivery.total_runs);
            }else{
                runsByPlayer[delivery.bowler] += Number(delivery.total_runs);
            }
            if(!ballsPerPlayer.hasOwnProperty(delivery.bowler)){
                ballsPerPlayer[delivery.bowler] = 1;
            }else{
                ballsPerPlayer[delivery.bowler] += 1;
            }
            if(Number(delivery.wide_runs) > 0 || Number(delivery.noball_runs) > 0){
                ballsPerPlayer[delivery.bowler] -= 1;
            }
        }
    }
    let array = [];
    for(let run in runsByPlayer){
        array.push([run, Number(Number.parseFloat(runsByPlayer[run] / (ballsPerPlayer[run] / 6)).toFixed(2))]);
    }
    array.sort((a, b) => {return a[1] - b[1]});
    let result = [];
    for(let index = 0; index < 10; index++){
        result.push({'bowler' : array[index][0], 'economy' : array[index][1]});
        // result.push(array[index][0]);
    }   
    return result;
}

module.exports = {numberofmatchesPlayed, numberofmatchesWon, extraRuns2016, economicalBowlers2015};