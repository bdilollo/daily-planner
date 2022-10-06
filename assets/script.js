var timeblockEl = $('.time-block');

var currentDay = moment().format("dddd, MMM Do, YYYY");
$("#currentDay").text(currentDay);

$(function() {
    for(var i=0; i<localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        for(var j=0; j<9; j++) {
            if(key == $(timeblockEl).children().eq(j).attr('data-index')) {
            $(timeblockEl).children().eq(key-9).children('textarea').text(value);
            }
        }
        if(value == "") {
           localStorage.removeItem(key); 
        }
    }
});

// color-coding timeblocks
// moment.js to determine current hour (military?) -> assign to var


$(function() {
    var currentHour = moment().format("H");
    for(var i=0; i<9; i++) {
        if(i+9 == currentHour) {
            timeblockEl.children().eq(i).children('textarea').addClass('present').removeClass('future');
        } else if(i+9 < currentHour) {
            timeblockEl.children().eq(i).children('textarea').addClass('past').removeClass('future');
            $('.past').prop('disabled', true);
        }
    }
});

var savedInput;
timeblockEl.on('click','.saveBtn', function(event) {
    var whichSaveBtn = $(event.target).closest('.row');
    var savedInput = $(event.target).siblings('textarea').val();
    localStorage.setItem(whichSaveBtn.attr('data-index'), savedInput);
});