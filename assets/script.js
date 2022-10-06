var timeblockEl = $('.time-block');

// add today's date to element with id 'currentDay' at the top of the page
var currentDay = moment().format("dddd, MMM Do, YYYY");
$("#currentDay").text(currentDay);

// function to retrieve and render local storage in the place where it was originally added
$(function() {
    for(var i=0; i<localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        // uses the key (which corresponds to a row's data-index attribute) to render the locally stored strings in the appropriate row
        for(var j=0; j<9; j++) {
            if(key == $(timeblockEl).children().eq(j).attr('data-index')) {
            $(timeblockEl).children().eq(key-9).children('textarea').text(value);
            }
        }
        // if the content of a textbox is deleted and saved, removes the key from local storage
        if(value == "") {
           localStorage.removeItem(key); 
        }
    }
});

// function to color-code timeblocks based on the current time by switching the CSS class of each <textarea> element
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

// event listener for the 'save' buttons--saves to local storage
var savedInput;
timeblockEl.on('click','.saveBtn', function(event) {
    var whichSaveBtn = $(event.target).closest('.row');
    var savedInput = $(event.target).siblings('textarea').val();
    // store the data-index attribute as the key for easier retrieval when rendering upon reload
    localStorage.setItem(whichSaveBtn.attr('data-index'), savedInput);
});