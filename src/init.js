$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];


    // to make a dancer with a random position
    // append and random image tag to the dancer
    var dancerGifs = ['dancers/baby.gif',
                      'dancers/bunnies.gif',
                      'dancers/frank.gif',
                      'dancers/jellyskell.gif',
                      'dancers/oogieboogie.gif',
                      'dancers/pumpkinbooty.gif',
                      'dancers/pumpkinskell.gif',
                      'dancers/vampire.gif',
                      'dancers/zombie.gif'];

    var randomDancer = Math.floor(Math.random() * dancerGifs.length);


    var dancer = new dancerMakerFunction(
      $('#dancefloor').height() * Math.random() - 50,
      $('#dancefloor').width() * Math.random(),
      dancerGifs[randomDancer]
    );

    window.dancers.push(dancer);
    console.log(dancers);

    $('#dancefloor').append(dancer.$node);
  });

  $('.lineUpDancers').on('click', function(event) {
    // go through window.dancers array
    // for each dancer
    // change height to 500
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.css('top', '50%');
    }
  });

  // var hue = 0;

  // var partyMode = function() {
  //   hue++;
  //   for (var i = 0; i < window.dancers.length; i++) {
  //     if (hue >= 360) {
  //       hue = 0;
  //     }
  //     window.dancers[i].$node.css("-webkit-filter", "hue-rotate("+hue+"deg)");
  //     setTimeout(partyMode, 1000);
  //   }
  // };

  // $('.party').on('click', function(event) {
  //   partyMode();
  // });

  $('#dancefloor').on('click','.random',function() {
    $('.random').animate({height: '500'}, 1000);
    $('.random').animate({height: '200'}, 1000);
  });

});

