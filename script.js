$.ajax({
  method: "GET",
  url: "https://www.govtrack.us/api/v2/person",
  success: function(data) {    
    data.objects.forEach(function(object) {
      var arr = []
      arr.push(object.firstname)
      $("#id").html(arr)
//      object.firstname.append($("#id"))

    })
  }
})

