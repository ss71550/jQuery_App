$(document).ready(() => {
  let $imagePopout =$("#imagePopout");
  //$imagePopout.hide();

  let first_number = $("#number1").val();
  let second_number = $("#number2").val();
  //click works for image but not multiplying
  $("#multiply").click(() => {

    multiply(first_number, second_number);

    $imagePopout.show();
  })
});

function multiply(){
var $result = (first_number*second_number);
var $print = $("#answer");
$print.text($result);
//$("#result").append($print);
}
