function economicalBowlers2015(matches, deliveries){

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
        
        if(matchId.includes(i.match_id)){  // Calculating Runs By Player

            if(!runsByPlayer.hasOwnProperty(i.bowler)){

                runsByPlayer[i.bowler] = Number(i.total_runs);
            }else{

                //runsByPlayer[i.bowler] += Number(i.wide_runs) + Number(i.noball_runs) + Number(i.batsman_runs);
                runsByPlayer[i.bowler] += Number(i.total_runs);
            }

            if(!ballsPerPlayer.hasOwnProperty(i.bowler)){ // Calculating Balls By Player

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

        a.push([i, Number(Number.parseFloat(runsByPlayer[i] / (ballsPerPlayer[i]/6)).toFixed(2))]);
    }
    a.sort((a, b) => {return a[1] - b[1]});

    let result = [];

    for(let i = 0; i < 10; i++){

        result.push({'bowler' : a[i][0], 'economy' : a[i][1]});
        //result.push(a[i][0]);
    }
    
    return result;
}

module.exports = {economicalBowlers2015};


