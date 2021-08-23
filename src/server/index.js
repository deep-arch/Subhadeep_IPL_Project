const fs = require('fs');
const matches = '../data/matches.csv'
const deliveries = '../data/deliveries.csv'

const csv = require('csvtojson')


csv()
    .fromFile(matches)
    .then((datamatches) => {
        //console.log(datamatches);


        const result=require('./../functions/numberofmatchesPlayed'); //problem1
        fs.writeFile('../public/output/numberofmatchesPlayed.json', JSON.stringify(result.numberofmatchesPlayed(datamatches)), 'utf8', function (err) {
          if (err) {
              console.log("An error occured while writing JSON Object to File.");
              return console.log(err);
          }
          console.log("JSON file has been saved for Problem 1.");
        });


        const result1=require('./../functions/numberofmatchesWon');  //problem2
        fs.writeFile('../public/output/numberofmatchesWon.json', JSON.stringify(result1.numberofmatchesWon(datamatches)), 'utf8', function (err) {
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
            

            const result3 = require('./../functions/extraRuns2016');  //problem3
            fs.writeFile('../public/output/extraRuns2016.json', JSON.stringify(result3.extraRuns2016(datamatches,datadeliveries)), 'utf8', function (err) {
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                }

                console.log("JSON file has been saved for Problem 3.");
          
            });  

            
            const result4 = require('./../functions/economicalBowlers2015');  //problem4
            fs.writeFile('../public/output/economicalBowlers2015.json', JSON.stringify(result4.economicalBowlers2015(datamatches,datadeliveries)), 'utf8', function (err) {
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                }

                console.log("JSON file has been saved for Problem 4.");
          
            });
          
         });

      });



 

 

// fs.writeFile('../public/output/ExtraRunConcededePerTeamIn2016.json', JSON.stringify(result.Top10EconomicalBowlersInTheYear2015(datamatch, datadeliver)), 'utf8', function (err) {
//     if (err) {
//         console.log("An error occured while writing JSON Object to File.");
//         return console.log(err);
//     }
 
//     console.log("JSON file has been saved.");