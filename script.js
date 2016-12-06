$.ajax({
  method: "GET",
  url: "https://www.govtrack.us/api/v2/person",
  success: function(data) {    
    data.objects.forEach(function(object) {
      console.log(object)
    })
  }
})

object.forEach(function(display){
  $("#id").append({background: color}).appendTo(elementsList)
})
