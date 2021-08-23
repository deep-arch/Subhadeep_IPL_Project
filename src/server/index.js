const fs = require('fs');
const matches = '../data/matches.csv'
const deliveries = '../data/deliveries.csv'

const csv = require('csvtojson')

const result=require('./ipl'); 
csv()
    .fromFile(matches)
    .then((datamatches) => {
        //console.log(datamatches);


        //problem1
        fs.writeFile('../public/output/numberofmatchesPlayed.json', JSON.stringify(result.numberofmatchesPlayed(datamatches)), 'utf8', function (err) {
          if (err) {
              console.log("An error occured while writing JSON Object to File.");
              return console.log(err);
          }
          console.log("JSON file has been saved for Problem 1.");
        });


        //problem2
        fs.writeFile('../public/output/numberofmatchesWon.json', JSON.stringify(result.numberofmatchesWon(datamatches)), 'utf8', function (err) {
              if (err) {
                  console.log("An error occured while writing JSON Object to File.");
                  return console.log(err);
              }
           
              console.log("JSON file has been saved for Problem 2.");
        });


        csv()
          .fromFile(deliveries)
          .then((datadeliveries) => {
            //  console.log(datadeliveries);
            //  console.log(datamatches);
            

            //problem3
            fs.writeFile('../public/output/extraRuns2016.json', JSON.stringify(result.extraRuns2016(datamatches,datadeliveries)), 'utf8', function (err) {
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                }

                console.log("JSON file has been saved for Problem 3.");
          
            });  

            
            //problem4
            fs.writeFile('../public/output/economicalBowlers2015.json', JSON.stringify(result.economicalBowlers2015(datamatches,datadeliveries)), 'utf8', function (err) {
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                }

                console.log("JSON file has been saved for Problem 4.");
          
            });
          
         });

      });