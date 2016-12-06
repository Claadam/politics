var display= $("#display")
$.ajax({
  method: "GET",
  url: "https://www.govtrack.us/api/v2/person",
  success: function(data) {    
    data.objects.forEach(function(object) {
      var arr = []
      object.firstname().append(display)
    })
  }
})

