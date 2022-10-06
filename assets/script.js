var timeblockTextEl = $('.time-block');


var currentDay = moment().format("dddd, MMM Do, YYYY");
$("#currentDay").text(currentDay);

// color-coding timeblocks
// moment.js to determine current hour (military?) -> assign to var
$(function() {
    var currentHour = moment().format("H");
    for(var i=0; i<9; i++) {
        if(i+9 == currentHour) {
            timeblockTextEl.children().eq(i).children('textarea').addClass('present').removeClass('future');
        } else if(i+9 < currentHour) {
            timeblockTextEl.children().eq(i).children('textarea').addClass('past').removeClass('future');
            $('.past').prop('disabled', true);
        }
    }
});