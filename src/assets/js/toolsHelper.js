
  $("#StrArrowDown").on('click', function() {
    console.log("Test");
    var add = parseInt($("#currentStr").text(), 10) - 1;
    if(add != 0)
    {
      $("#currentStr").text(add);
    }

  });
