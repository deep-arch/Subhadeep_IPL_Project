//Problem 1:   Number of matches played per year for all the years in IPL.

function numberofmatchesPlayed(matches) 
{    

    const result = {};
  
    for (let match of matches) {

        const season = match.season;

        if (result[season]) {
                
            result[season] += 1;
        } else {

            result[season] = 1;
        }
    }
        
    return result;
}



//Problem 2:   Number of matches won per team per year in IPL.

function numberofmatchesWon(matches)    
{
    let result = {};
    
    for(let match of matches) {

        if (result.hasOwnProperty(match.winner)) {

            for (let ele of result[match.winner]) {

                if (ele.hasOwnProperty(match.season)) {

                     ele[match.season] += 1;
                }
                else {

                    ele[match.season] = 1;
                }

            }

        }
        else {

            result1 = {};

            result[match.winner] = [];
            result1[match.season] = 1;
            result[match.winner].push(result1);
        }
    }
    
    return result;
}



//Problem 3:   Extra runs conceded per team in the year 2016.

function extraRuns2016(matches, deliveries) 
{

    let result = {};

    for (let delivery of deliveries){

        if (delivery.extra_runs != 0) {

            for(let match of matches){

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
            }
        }
    }
    
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

    for(let i of deliveries){
        
        if(matchId.includes(i.match_id)){

            if(!runsByPlayer.hasOwnProperty(i.bowler)){

                runsByPlayer[i.bowler] = Number(i.total_runs);
            }else{

                runsByPlayer[i.bowler] += Number(i.total_runs);
            }

            if(!ballsPerPlayer.hasOwnProperty(i.bowler)){

                ballsPerPlayer[i.bowler] = 1;
            }else{

                ballsPerPlayer[i.bowler] += 1;
            }

            if(Number(i.wide_runs) > 0 || Number(i.noball_runs) > 0){

                ballsPerPlayer[i.bowler] -= 1;
            }
        }
    }

    let a = [];

    for(let i in runsByPlayer){

        a.push([i, Number(Number.parseFloat(runsByPlayer[i] / (ballsPerPlayer[i] / 6)).toFixed(2))]);
    }
    a.sort((a, b) => {return a[1] - b[1]});

    let result = [];

    for(let i = 0; i < 10; i++){

        result.push({'bowler' : a[i][0], 'economy' : a[i][1]});
        // result.push(a[i][0]);
    }
    
    return result;
}


module.exports = {numberofmatchesPlayed, numberofmatchesWon, extraRuns2016, economicalBowlers2015};