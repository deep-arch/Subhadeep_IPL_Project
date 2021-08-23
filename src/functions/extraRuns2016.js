function extraRuns2016(matches, deliveries) {

    let result = {};
    deliveries.forEach((element) => {
        if (element.extra_runs != 0) {
            matches.forEach((ele) => {
                if (ele.id === element.match_id) {
                    if (ele.season === "2016") {
                        if (result.hasOwnProperty(element.bowling_team)) {
                            result[element.bowling_team] += parseInt(element.extra_runs);
                        }
                        else {
                            result[element.bowling_team] = parseInt(element.extra_runs);
                        }
                    }
                }
            })
        }
    })
    return result;
}

module.exports = {extraRuns2016};