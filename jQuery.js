$(document).ready(() => {
  let $imagePopout =$("#imagePopout");
  $imagePopout.hide();
  //click works for image but not multiplying
  $("#multiply").click(() => {
    multiply();

    $imagePopout.show();
  })
});

function multiply(){
let first_number = $("#number1").val();
let second_number = $("#number2").val();
var $result = (first_number*second_number);
var $print = $("#answer");
$print.text($result);
$("#result").append($print);
}
