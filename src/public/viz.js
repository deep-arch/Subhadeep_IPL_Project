fetch("./output/numberofmatchesPlayed.json")
  .then((response) => response.json())
  .then((JSONData) => viz1(JSONData));
function viz1(JSONData) {
  Highcharts.chart("numberofmatchesPlayed", {
    title: {
      text: "1. Matches Played per Season in IPL",
    },
    chart: {
      type: "column",
      zoomType: "x",
      borderRadius: 20,
      backgroundColor: "#F5FFFA",
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: "#000000",
      borderRadius: 20,
      style: {
        color: "#ffffff",
      },
    },
    xAxis: {
      title: {
        text: "Years",
        style: {
          color: "#405795"
        }
      },
      categories: JSONData.map(({ year }) => year),
    },
    yAxis: {
      title: {
        text: "Matches",
        style: {
          color: "#405795"
        }
      },
    },
    series: [
      {
        name: "Matches",
        data: JSONData.map(({ matches }) => matches),
        color: "#87B41C",
        borderRadius: 10
      },
    ],
  });
}

fetch("./output/numberofmatchesWon.json")
  .then((response) => response.json())
  .then((JSONData) => viz2(JSONData));
function viz2(JSONData) {
  const teams = JSONData.reduce((subjectTeams, { team }) => {
    if (!subjectTeams.includes(team)) {
      subjectTeams.push(team);
    }
    return subjectTeams;
  }, []).sort((teamA, teamB) => teamA.localeCompare(teamB));

  const years = JSONData.reduce((subjectYears, { year }) => {
    if (!subjectYears.includes(year)) {
      subjectYears.push(year);
    }
    return subjectYears;
  }, []);

  const newSeries = [];
  teams.forEach((currentTeam) => {
    let series2Push = {
      name: currentTeam,
      data: [],
    };
    let wins2Push = 0;
    years.forEach((currYear) => {
      JSONData.forEach(({ year, team, wins }) => {
        if (team === currentTeam && year === currYear) {
          wins2Push = wins;
        }
      });
      series2Push["data"].push(wins2Push);
    });
    newSeries.push(series2Push);
  });

  Highcharts.chart("numberofmatchesWon", {
    title: {
      text: "2. Matches Won per Team per Year in IPL",
    },
    plotOptions: {
      column: {
        stacking: "normal",
      },
    },
    chart: {
      type: "column",
      zoomType: "x",
      borderRadius: 20,
      backgroundColor: "#F5FFFA",
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: "#333333",
      borderRadius: 20,
      style: {
        color: "#ffffff",
      },
    },
    xAxis: {
      title: {
        text: "Years",
        style: {
          color: "#405795"
        }
      },
      categories: years,
    },
    yAxis: {
      title: {
        text: "Wins",
        style: {
          color: "#405795"
        }
      },
    },
    series: newSeries,
  });
}

fetch("./output/extraRuns2016.json")
  .then((response) => response.json())
  .then((JSONData) => viz3(JSONData));
function viz3(JSONData) {
  Highcharts.chart("extraRuns2016", {
    title: {
      text: "3. Extra Runs conceded per Team in the Year 2016",
    },
    chart: {
      type: "column",
      zoomType: "x",
      borderRadius: 20,
      backgroundColor: "#F5FFFA",
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: "#333333",
      borderRadius: 20,
      style: {
        color: "#ffffff",
      },
    },
    xAxis: {
      title: {
        text: "Teams",
        style: {
          color: "#405795"
        }
      },
      categories: JSONData.map(({ team }) => team),
    },
    yAxis: {
      title: {
        text: "Extra Runs",
        style: {
          color: "#405795"
        }
      },
    },
    series: [
      {
        name: "Extra Runs",
        data: JSONData.map(({ extra_runs }) => extra_runs),
        color: "#87B41C",
        borderRadius: 10
      },
    ],
  });
}

fetch("./output/economicalBowlers2015.json")
  .then((response) => response.json())
  .then((JSONData) => viz4(JSONData));
function viz4(JSONData) {
  Highcharts.chart("economicalBowlers2015", {
    title: {
      text: "4. Top 10 Economical Bowlers in the Year 2015",
    },
    chart: {
      type: "column",
      zoomType: "x",
      borderRadius: 20,
      backgroundColor: "#F5FFFA",
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: "#333333",
      borderRadius: 20,
      style: {
        color: "#ffffff",
      },
    },
    xAxis: {
      title: {
        text: "Bowlers",
        style: {
          color: "#405795"
        }
      },
      categories: JSONData.map(({ bowler }) => bowler),
    },
    yAxis: {
      title: {
        text: "Economy",
        style: {
          color: "#405795"
        }
      },
    },
    series: [
      {
        name: "Economy",
        data: JSONData.map(({ economy }) => economy),
        color: "#87B41C",
        borderRadius: 10
      },
    ],
  });
}
