var display= $("#display")
var display2= $("#display2")

$.ajax({
  method: "GET",
  url: "https://www.govtrack.us/api/v2/person",
  success: function(data) {    
    data.objects.forEach(function(object) {
      display.append(object.firstname + " " + object.lastname + ", " )
      console.log(object)
    })
  }
})

