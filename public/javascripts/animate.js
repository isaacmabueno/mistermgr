$(document).ready(function() {

  $('#addClient').click(function() {
    console.log('jim is an idiot');
  $("#addClient").animate({
    marginTop: "10px",
    marginBottom: "10px"
  }, 500, function() {
      console.log('jim is a double idiot')
  });
  $("#listedClients").show();
  });



$('#addClient').dblclick(function() {
  console.log('jim is an idiot');
$("#addClient").animate({
  marginTop: "250px",
  marginBottom: "250px"
}, 500, function() {
    console.log('jim is a double idiot')
});
$("#listedClients").fadeOut(500);
});
});
