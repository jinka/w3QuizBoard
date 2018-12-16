//Business Logic
var correctedAnswers = 0
var collectedAnswers=[];
var correctAnswer = ['q1c','q2c','q3d','q4b','q5a'];
var isGameFinished = false;
var result = 0

function finalScore(totalCorrected) {
  result = totalCorrected * 20;
  isGameFinished = true;
}

function checkOptions(){

  var check= true;
  $("input:radio").each(function(){
    var name = $(this).attr("name");
    if($("input:radio[name="+name+"]:checked").length == 0){
      check = false;
    } else {
      collectedAnswers.push($("input:radio[name="+name+"]:checked").val())
    }

  });

  if(check){
    var uniqueCollectedAnswers=jQuery.unique(collectedAnswers)
    $.each(uniqueCollectedAnswers, function( index, value ) {
      if (correctAnswer.indexOf(uniqueCollectedAnswers[index]) >= 0) {
        correctedAnswers += 1;
      }
    });
    finalScore(correctedAnswers)

  } else{
    alert('You must select one answer in each question');
  }
}

//---------------------------------------------------------------------------------

//User Interface Login

$(document).ready(function(){

  $(".radio").append("<h4>What do dragon flies prefer to eat?</h4>")
  $(".radio").append('<label></label><input type="radio" name="q1" value="q1a">Bee<br>')
  $(".radio").append('<label></label><input type="radio" name="q1" value="q1b">Dogs<br>')
  $(".radio").append('<label></label><input type="radio" name="q1" value="q1c">Mosquitoes<br>')

  $(".radio").append("<h4>Which is the largest species of the tiger?</h4>")
  $(".radio").append('<label></label><input type="radio" name="q2" value="q2a">Asian Tiger<br>')
  $(".radio").append('<label></label><input type="radio" name="q2" value="q2b">African tiger<br>')
  $(".radio").append('<label></label><input type="radio" name="q2" value="q2c">Siberian tiger<br>')

  $(".radio").append("<h4>In what year was Google launched on the web?</h4>")
  $(".radio").append('<label></label><input type="radio" name="q3" value="q3a">1980<br>')
  $(".radio").append('<label></label><input type="radio" name="q3" value="q3b">1990<br>')
  $(".radio").append('<label></label><input type="radio" name="q3" value="q4c">2001<br>')
  $(".radio").append('<label></label><input type="radio" name="q3" value="q3d">1998<br>')

  $(".radio").append("<h4>What is the country top-level domain of Kenya?</h4>")
  $(".radio").append('<label></label><input type="radio" name="q4" value="q4a">.co<br>')
  $(".radio").append('<label></label><input type="radio" name="q4" value="q4b">.ke<br>')
  $(".radio").append('<label></label><input type="radio" name="q4" value="q4c">.co.uk<br>')
  $(".radio").append('<label></label><input type="radio" name="q4" value="q4d">.co.ke<br>')

  $(".radio").append("<h4>In computing what is Ram short for?</h4>")
  $(".radio").append('<label></label><input type="radio" name="q5" value="q5a">Random Access Memory<br>')
  $(".radio").append('<label></label><input type="radio" name="q5" value="q5b">Read Only Memory<br>')
  $(".radio").append('<label></label><input type="radio" name="q5" value="q5c">Read Access Momory<br>')
  $(".radio").append('<label></label><input type="radio" name="q5" value="q5d">None<br>')

  $("#quiz").hide();
  $("#start-info").hide()


  $("#button").click(function(){
    $("#quiz").toggle();
    $("#button").toggle()
    $("#start-info").toggle()
    $("h1").addClass("light-blue")
    correctedAnswers=0
  })


  $("#form-quiz").submit(function() {
    correctedAnswers=0
    collectedAnswers=[]
    checkOptions()

    if (isGameFinished) {
      $("#quiz").toggle();
      $("#button").toggle()
      $("#start-info").toggle()
       $("#quiz-result").text("Result is Here : Your score is : " + result + " Out of 100")
       $("h1").css("background-color","#cc3399")
      isGameFinished=false;
    }

    event.preventDefault();
  });
});
