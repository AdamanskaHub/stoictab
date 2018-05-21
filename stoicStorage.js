// STORING STUFF !!!!!

$(document).ready(function(){
  
  $('#sufferingBoxTwo').hide();

  const focusInput = document.getElementById('focusInput');

  // const answerSuffering = (text) => {
  //   const h3 = document.createElement('h3');
  //   h3.textContent = text;
  //   // document.getElementById("sufferingAnswer").appendChild(h3);
  //   document.getElementById("suffering").remove();
  // }

  
  document.getElementById("sufferingButton").addEventListener("click", function(){
    var blaSuffering = $('#suffering').val();
    console.log(blaSuffering);
    $( "#sufferingBox" ).append( "<h3>Test</h3>" ).text(blaSuffering);
    // answerSuffering(document.getElementById("suffering").val);
    $("#suffering").remove();
    $("#sufferingButton").remove();
    $('#sufferingBoxTwo').show();
  });


});
