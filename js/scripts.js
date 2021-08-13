$(document).ready(function() {
    $("#swift").hide();
    $("#python").hide();
    $("#javascript").hide();
    $("#offGrid").hide();
  $("form#profile").submit(function(event) {
    const nameInput = $("input#name").val();
    
    $(".name").append(nameInput);
    const phone = $("select#phone").val();
  
    if (phone == "apple") {
      $("#swift").show();
    } if (phone == "samsung") {
      $("#python").show();
    } if (phone == "google") {
      $("#javascript").show();
    } if (phone == "none") {
      $("#offGrid").show();
    }
    event.preventDefault();
    
  });
});

