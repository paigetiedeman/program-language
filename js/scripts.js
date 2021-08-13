$(document).ready(function() {
  $("form#profile").submit(function(event) {
    event.preventDefault();
    $("#swift").hide();
    $("#python").hide();
    $("#javascript").hide();
    $("#offGrid").hide();
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
  });
});
