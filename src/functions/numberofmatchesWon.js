function numberofmatchesWon(matches) 
{
    let result = {};
    
    matches.forEach((element) => {
        if (result.hasOwnProperty(element.winner)) {
            result[element.winner].forEach((ele) => {
                if (ele.hasOwnProperty(element.season)) {
                     ele[element.season] += 1;
                }
                else {
                    ele[element.season] = 1;
                }

            });

        }
        else {
            result2 = {};
            result[element.winner] = [];
            result2[element.season] = 1;
            result[element.winner].push(result2);
        }
    });
    return result;
}

module.exports = {numberofmatchesWon};




