$(".btn").click(function(e){
 // alert(($(this).text()));
  var a= $(this).text();
  $("#tab").val($("#tab").val()+a);
  //$("#tab").append('<input type="text" value=' $('#div1').val() )
})
$(".cl").click(function(){
  $("#tab").val("");
})
$(".eq").click(function(){
 // alert(eval($("#tab").val()))
  $("#tab").val(eval($("#tab").val()));
})

