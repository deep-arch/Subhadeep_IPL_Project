//Problem 1:   Number of matches played per year for all the years in IPL.

function numberofmatchesPlayed(matches) {
  let result = matches.reduce(
    (numberofMatches, match) => (
      (numberofMatches[match.season] = numberofMatches[match.season] + 1 || 1),
      numberofMatches
    ),
    {}
  );
  result = Object.entries(result).reduce((numberofMatches, [year, matches]) => {
    numberofMatches.push({ year: Number(year), matches: matches });
    return numberofMatches;
  }, []);
  return result;
}

//Problem 2:   Number of matches won per team per year in IPL.

function numberofmatchesWon(matches) {
  let result = matches.reduce((seasonMatches, { season, winner }) => {
    if (winner !== null) {
      if (!(season in seasonMatches)) {
        seasonMatches[season] = {};
      }
      (seasonMatches[season][winner] = seasonMatches[season][winner] + 1 || 1),
        seasonMatches;
    }
    return seasonMatches;
  }, {});

  result = Object.entries(result).reduce((seasonMatches, [year, victory]) => {
    Object.entries(victory).forEach(([team, wins]) => {
      seasonMatches.push({ year: Number(year), team: team, wins: wins });
    });
    return seasonMatches;
  }, []);
  return result;
}

//Problem 3:   Extra runs conceded per team in the year 2016.

function extraRuns2016(matches, deliveries) {
  let match = matches.filter((matchData) => {
    if (matchData.season === "2016") {
      return matchData.id;
    }
  });
  let delivery = deliveries.filter((deliveryData) => {
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
  });
  const extraRuns2016 = {};

  delivery.forEach((extraruns) => {
    if (extraRuns2016.hasOwnProperty(extraruns.bowling_team)) {
      extraRuns2016[extraruns.bowling_team] += Number(extraruns.extra_runs);
    } else {
      extraRuns2016[extraruns.bowling_team] = Number(extraruns.extra_runs);
    }
  });
  result = Object.entries(extraRuns2016).reduce(
    (subjectTeams, [team, extra_runs]) => {
      subjectTeams.push({ team: team, extra_runs: extra_runs });
      return subjectTeams;
    },
    []
  );
  return result;
}

//Problem 4:   Top 10 economical bowlers in the year 2015.

function economicalBowlers2015(matches, deliveries) {
  const runsbyPlayer = {};
  const ballsbyPlayer = {};

  deliveries.find((delivery) => {
    matches.find((match) => {
      if (delivery.match_id === match.id) {
        if (match.season === "2015") {
          if (!runsbyPlayer.hasOwnProperty(delivery.bowler)) {
            runsbyPlayer[delivery.bowler] = Number(delivery.total_runs);
          } else {
            runsbyPlayer[delivery.bowler] += Number(delivery.total_runs);
          }
          if (!ballsbyPlayer.hasOwnProperty(delivery.bowler)) {
            ballsbyPlayer[delivery.bowler] = 1;
          } else {
            ballsbyPlayer[delivery.bowler] += 1;
          }
          if (
            Number(delivery.wide_runs) > 0 ||
            Number(delivery.noball_runs) > 0
          ) {
            ballsbyPlayer[delivery.bowler] -= 1;
          }
        }
      }
    });
  });
  let ecoBowler = [];

  for (let values in runsbyPlayer) {
    ecoBowler.push([
      values,
      Number(
        Number.parseFloat(
          runsbyPlayer[values] / (ballsbyPlayer[values] / 6)
        ).toFixed(2)
      ),
    ]);
  }
  ecoBowler.sort((a, b) => {
    return a[1] - b[1];
  });

  let result = [];

  for (let index = 0; index < 10; index++) {
    result.push({ bowler: ecoBowler[index][0], economy: ecoBowler[index][1] });
  }
  return result;
}

module.exports = {
  numberofmatchesPlayed,
  numberofmatchesWon,
  extraRuns2016,
  economicalBowlers2015,
};
