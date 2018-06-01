// STORING STUFF !!!!!

$(document).ready(function () {
  var d = new Date();
  var dd = d.getMinutes();

  function storeTime() {
    console.log("setting time")
    localStorage.setItem('time', dd);
  }

  !localStorage.getItem('time') ? storeTime() : isDateTheSame();

  function isDateTheSame() {
    var e = new Date();
    var ee = e.getMinutes();
    if (ee == localStorage.getItem('time')) {
      console.log("still the same day")
    } else {
      console.log("different day");
      localStorage.clear();
      storeTime();
    }
  }

  // ========= SUFFERING ======== // 

  $('#suffering').keypress(function (e) {
    var key = e.which;
    if (key == 13)  // the enter key code
    {
      var blaAttach = $('#suffering').val();
      localStorage.setItem('suffer', blaSuffer);
      $("#suffering").remove();
      $("#sufferingBox").append("<h3 class='appended' id='sufferingAppended'></h3>");
      $("#sufferingAppended").text(blaSuffer);
      // $("#tooAttachedText").text('Remember it could be gone');
    }
  });

  !localStorage.getItem('focus') ? null : putItBack();

  function putItBack() {
    $("#focusInput").remove();
    $(".focus").append("<h3 class='appended' id='focusAppended'></h3>");
    $("#focusAppended").text(localStorage.getItem('focus'));
    $("#focusText").text('Do it now:');
  }

  // document.getElementById("sufferingButton").addEventListener("click", function () {
  //   var blaSuffering = $('#suffering').val();
  //   $("#sufferingBox").append("<h3>Test</h3>").text(blaSuffering);
  //   localStorage.setItem('suffering', blaSuffering);
  //   $("#suffering").remove();
  //   $("#sufferingButton").remove();
  //   $('#sufferingBoxTwo').show();
  // });

  // function putSufferingBack() {
  //   $("#sufferingBox").append("<h3>Test</h3>").text(localStorage.getItem('suffering'));
  //   $("#suffering").remove();
  //   $("#sufferingButton").remove();
  //   $('#sufferingBoxTwo').show();
  // }

  // !localStorage.getItem('suffering') ? null : putSufferingBack();


  // $('#focusInput').keypress(function (e) {
  //   var key = e.which;
  //   if (key == 13)  // the enter key code
  //   {
  //     var blaFocus = $('#focusInput').val();
  //     localStorage.setItem('focus', blaFocus);
  //     $("#focusInput").remove();
  //     $(".focus").append("<h3 class='appended' id='focusAppended'></h3>");
  //     $("#focusAppended").text(blaFocus);
  //     $("#focusText").text('Do it now:');
  //   }
  // });

  // !localStorage.getItem('focus') ? null : putItBack();

  // function putItBack() {
  //   $("#focusInput").remove();
  //   $(".focus").append("<h3 class='appended' id='focusAppended'></h3>");
  //   $("#focusAppended").text(localStorage.getItem('focus'));
  //   $("#focusText").text('Do it now:');
  // }

  // ======== ATTACHEMENT ======== // 

  $('#tooAttached').keypress(function (e) {
    var key = e.which;
    if (key == 13)  // the enter key code
    {
      var blaAttach = $('#tooAttached').val();
      localStorage.setItem('attach', blaAttach);
      $("#tooAttached").remove();
      $("#attachment").append("<h3 class='appended' id='attachmentAppended'></h3>");
      $("#attachmentAppended").text(blaAttach);
      $("#tooAttachedText").text('Remember it could be gone');
    }
  });

  !localStorage.getItem('attach') ? null : putAttachmentBack();

  function putAttachmentBack() {
    $("#tooAttached").remove();
    $("#attachment").append("<h3 class='appended' id='attachmentAppended'></h3>");
    $("#attachmentAppended").text(localStorage.getItem('attach'));
    // $("#improvedTitle").text('Be ready to let it go');
  }

  // ======== IMPROVEMENT ======== // 

  var chiffre = 0;
  $('#improvedInput').keypress(function (e) {
    var key = e.which;
    if (key == 13)  // the enter key code
    {
      var toAdd = $('#improvedInput').val();
      $('ul').append('<li>' + toAdd + '</li>');
      $('input').val('');
      chiffre += 1;
    };
    localStorage.setItem('improved' + chiffre, toAdd);
  });

  !localStorage.getItem('improved') ? null : putImprovementBack();

  function putImprovementBack() {
    for (var i = 0; i < chiffre; i++) {
      console.log(localStorage.getItem('improved'+i))
    }
  }

  // ======== MEGA FOCUS ======== // 

  

});
