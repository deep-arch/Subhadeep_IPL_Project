const fs = require("fs");

const result = require("./ipl");
const matches = "../data/matches.csv";
const deliveries = "../data/deliveries.csv";
const csv = require("csvtojson");

csv()
  .fromFile(matches)
  .then((datamatches) => {
    //problem1

    let results = result.numberofmatchesPlayed(datamatches);
    saveToFile("../public/output/numberofmatchesPlayed.json", results);

    //problem2

    results = result.numberofmatchesWon(datamatches);
    saveToFile("../public/output/numberofmatchesWon.json", results);

    csv()
      .fromFile(deliveries)
      .then((datadeliveries) => {
        //problem3

        results = result.extraRuns2016(datamatches, datadeliveries);
        saveToFile("../public/output/extraRuns2016.json", results);

        //problem4

        results = result.economicalBowlers2015(datamatches, datadeliveries);
        saveToFile("../public/output/economicalBowlers2015.json", results);
      });
  });

function saveToFile(location, data) {
  fs.writeFile(location, JSON.stringify(data), (err) => {
    if (err) {
      throw err;
    } else {
      console.log("JSON file has been saved in", location);
    }
  });
}