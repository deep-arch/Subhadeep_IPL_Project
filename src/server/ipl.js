//Problem 1:   Number of matches played per year for all the years in IPL.

function numberofmatchesPlayed(matches) {
let arrayM = matches;

  return Object.entries(arrayM
    .reduce((numberofMatches, match) => {
      numberofMatches[match.season] = numberofMatches[match.season] + 1 || 1;
      return numberofMatches;
    }, {}))
    .map((numberofMatches) => {
      return {
        year: Number(numberofMatches[0]),
        matches: Number(numberofMatches[1])
      }
    });

}

//Problem 2:   Number of matches won per team per year in IPL.

function numberofmatchesWon(matches) {
let arrayM = matches;

  return Object.entries(arrayM
    .reduce((seasonMatches, { season, winner }) => {
      if (winner !== null) {
        if (!(season in seasonMatches)) {
          seasonMatches[season] = {};
        }
        (seasonMatches[season][winner] = seasonMatches[season][winner] + 1 || 1),
          seasonMatches;
      }
      return seasonMatches;
    }, {}))
    .reduce((seasonMatches, [year, victory]) => {
        Object
        .entries(victory).forEach(([team, wins]) => {
          if (team !== "")
            seasonMatches.push({ year: Number(year), team: team, wins: wins });
        });
        return seasonMatches;
      }, []);
}

//Problem 3:   Extra runs conceded per team in the year 2016.

function extraRuns2016(matches, deliveries) {
  let arrayM = matches;
  let arrayD = deliveries;

  let match = arrayM
    .filter((matchData) => {
      if (matchData.season === "2016") {
        return matchData.id;
      }
    });

  const extraRuns2016 = {};

  arrayD
    .filter((deliveryData) => {
      if (
        deliveryData.extra_runs != 0 &&
        match.find((matchesin2016) => {
          if (matchesin2016.id === deliveryData.match_id) {
            return 1;
          }
        })
      ) {
        return deliveryData;
      }
    })
    .forEach((extraruns) => {
      if (extraRuns2016.hasOwnProperty(extraruns.bowling_team)) {
        extraRuns2016[extraruns.bowling_team] += Number(extraruns.extra_runs);
      } else {
        extraRuns2016[extraruns.bowling_team] = Number(extraruns.extra_runs);
      }
    });
   return Object
    .entries(extraRuns2016)
    .map((extraRuns2016) => {
      return {
        team: extraRuns2016[0],
        extra_runs: Number(extraRuns2016[1])
      }
    });
    
}

//Problem 4:   Top 10 economical bowlers in the year 2015.

function economicalBowlers2015(matches, deliveries) {
  const runsbyPlayer = {};
  const ballsbyPlayer = {};

  let arrayM = matches;
  let arrayD = deliveries;

  arrayD
    .find((delivery) => {
      arrayM
        .find((match) => {
          if (delivery.match_id === match.id) {
            if (match.season === "2015") {
              if (!runsbyPlayer.hasOwnProperty(delivery.bowler))
                runsbyPlayer[delivery.bowler] = Number(delivery.total_runs);
              else
                runsbyPlayer[delivery.bowler] += Number(delivery.total_runs);
              if (!ballsbyPlayer.hasOwnProperty(delivery.bowler))
                ballsbyPlayer[delivery.bowler] = 1;
              else
                ballsbyPlayer[delivery.bowler] += 1;
              if (
                Number(delivery.wide_runs) > 0 ||
                Number(delivery.noball_runs) > 0
              )
                ballsbyPlayer[delivery.bowler] -= 1;
            }
          }
        });
    });
  let ecoBowler = [];

  for (let values in runsbyPlayer) {
    ecoBowler.push({
      bowler: values,
      economy: Number(
        Number.parseFloat(
          runsbyPlayer[values] / (ballsbyPlayer[values] / 6)
        ).toFixed(2)),
    });
  }
  return ecoBowler
    .sort((a, b) => {
    return a.economy - b.economy;
    })
    .slice(0, 10);
}

module.exports = {
  numberofmatchesPlayed,
  numberofmatchesWon,
  extraRuns2016,
  economicalBowlers2015,
};
