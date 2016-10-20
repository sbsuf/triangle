
$(document).ready(function() {
  $("form").submit(function(event) {

    var side1 = $("#side1").val();
    var side2 = $("#side2").val();
    var side3 = $("#side3").val();

    if (side1 === side2 && side2 === side3 && side1 === side3) {
      alert("Equilateral");
    }

    else if (side1 === side2 || side2 === side3 || side1 === side3) {
      alert("Isosceles");
    }

    else if (side1 !== side2 || side2 !== side3 || side1 !== side3) {
      alert("Scalene");
    }
    else {
      alert("not a triangle");
    }
    event.preventDefault();
    });
  });
