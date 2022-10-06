var currentDay = moment().format("dddd, MMM Do, YYYY");
$("#currentDay").text(currentDay);

// color-coding timeblocks
// moment.js to determine current hour (military?) -> assign to var
// data attributes to assign number values to each hour
// if hour matches 9, change class to "present"
    // else if matches 10, change class to 'present' and all values smaller to 'past'