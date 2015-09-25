$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    // mouse over changes Ryu from a static position to a ready animated state //
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    // mouse over changes Ryu from an animated state to immobile position //
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function(){
  playHadouken();
   // mouse click shoots an animated blue fireball a hadouken to the left of the Ryu character //
    $('.ryu-ready').hide();
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
$('.ryu-throwing').hide();
$('.ryu-ready').show();
});
});
function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    };
$(document).keydown(function(e) {
        if (e.keyCode == 88) {
            // pressing the x alphabet on the keyboard move Ryu physical status to an arms folded postition //
            $('.ryu-ready').hide();
            $('.ryu-cool').show(); 
        }
    })
    $(document).keyup(function(e) {
        if (e.keyCode == 88) {
            $('.ryu-cool').hide();
            $('.ryu-ready').show();    
        }
        });

