
function createElem(){
    $("body").append("<p>The queue length is: <span></span></p><div></div>")
    $("body").prepend("<button id='btn'>Cancel Animations</button>")
    $("body").prepend("<button id='btn2'>Start Animations</button>")

}
 
function runIt() {
    var div = $( "div" );
    // div.css("height", "100px")
    // div.css("weight", "100px")
    // div.css("background-color", "red")

  div
    .show( "slow" )
    .animate({ left: "+=200" }, 2000 )
    .queue(function() {
        $("div").addClass( "newcolor" ).dequeue();
    })
    .slideToggle( 1000 )
    
}
 
function showIt() {
    var div = $( "div" );

  var n = div.queue( "fx" );
  $( "span" ).text( n.length );
  setTimeout( showIt, 100 );
}
 


$(document).ready(function(){
    createElem();
    $( "#btn2" ).click(function() {
        runIt();
        showIt();
      });
    $( "#btn" ).click(function() {
        $( "div" )
          .queue( "fx", [] )
          .stop();
      });
})