// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $(".eatMe").on("submit", function(e) {
    e.preventDefault()

    var burgerId = $(this).children(".condition").val()
    $.ajax({
      method: "PUT",
      url: "/" + burgerId
    }).then(function(data) {
      location.reload();
    })
  })
})
