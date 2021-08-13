$(document).ready(function () {
  $("#swift").hide();
  $("#python").hide();
  $("#javascript").hide();
  $("#offGrid").hide();
  $("form#profile").submit(function (event) {
    const nameInput = $("input#name").val();

    // Bug: must find new feature to refresh after click as "name" gets duplicated
    $(".name").append(nameInput);
    const phone = $("select#phone").val();

    if (phone == "apple") {
      $("#swift").fadeToggle(3000);
    }
    if (phone == "samsung") {
      $("#python").slideToggle(2000);
    }
    if (phone == "google") {
      $("#javascript").show();
    }
    if (phone == "none") {
      alert("Did you mean to take this quiz?");
      $("#offGrid").show();
    }
    event.preventDefault();
  });
});

$(document).ready(function () {
  $("#bg").change(function () {
    $(".jumbotron").css("background-color", $("#bg").val());
  });
});
