$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    // mouse over changes Ryu from a static position to a ready animated state //
    $('.ryu-hide').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    // mouse over changes Ryu from an animated state to immobile position //
<<<<<<< HEAD
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
=======
    $('.ryu-hide').hide();
    $('.ryu-still').show();
})
>>>>>>> 5380e6d77116f121a9d63248d1cf423d7da017a5
  .mousedown(function(){
  playHadouken();
   // mouse click shoots an animated blue fireball a hadouken to the left of the Ryu character //
    $('.ryu-hide').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
    {'left':'1020px'},
    500,
    function(){
    $(this).hide();
    $(this).css ('left','520px');
  })
  })
.mouseup(function(){
$('.ryu-hide').hide();
$('.ryu-ready').show();
});
});
// Ryu says hadouken as he's throwing his hadouken //
function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    };
$(document).keydown(function(e) {
        if (e.keyCode == 88) {
            // pressing the x alphabet on the keyboard move Ryu physical status to an arms folded postition //
            $('.ryu-hide').hide();
            $('.ryu-cool').show();
        }
    })
    $(document).keyup(function(e) {
        if (e.keyCode == 88) {
<<<<<<< HEAD
            $('.ryu-cool').hide();
            $('.ryu-ready').show();    
=======
            $('.ryu-hide').hide();
            $('.ryu-ready').show();
>>>>>>> 5380e6d77116f121a9d63248d1cf423d7da017a5
        }
        });

