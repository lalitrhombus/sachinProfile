import { FETCH_DATA } from '../actions/index';
import moment from 'moment';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_DATA:
            {
                // extracting the data on the first Go
                let years = [],
                    grounds = [],
                    teams = [],
                    finalState = {},
                    data = action.payload;
                
                // performance anlysis
                // let t0 = performance.now();
                
                for (var key in data) {
                    
                    let tempYears = moment(data[key].date, "DD MMM YYYY").get('year');
                    if (years.indexOf(tempYears) == -1) {
                        years.push(tempYears);
                    }

                    if (grounds.indexOf(data[key].ground) == -1) {
                        grounds.push(data[key].ground);
                    }

                    let tempTeam = data[key].opposition.substr(2);
                    if (teams.indexOf(tempTeam) == -1) {
                        teams.push(tempTeam);
                    }
                }

                // performance anlysis
                // let t1 = performance.now();
				// console.log("Call to data loop took " + (t1 - t0) + " milliseconds.")

                finalState = { "data": data, "years": years, "grounds": grounds, "teams": teams };
                return finalState;
            }
    }
    return state;
}
