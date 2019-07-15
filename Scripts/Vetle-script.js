$(document).ready(function () {

    var msg = "Hello JS"
    console.log(msg);

    /*var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<p>This is from JavaScript </p>";
    */



    var resultList = $("#resultList");
    resultList.text("This is from jQuery");

    var toggleButton = $("#toggleButton");
    toggleButton.on("click", function () {
        resultList.toggle(500);
        if (toggleButton.text() == "Hide") toggleButton.text("Show");
        else toggleButton.text("Hide");

    });

    var contact = [{
        name: "Support",
        email: "support@odetofood.com"
    },
    {
        name: "Marketing",
        email: "marketing@odetofood.com"
    }];

    resultList.empty();
    $.each(contact, function (i, item) {
        var newResult = $("<div class ='result'>" + "<div>Name:" + item.name + "</div> " + "<div>email:" + item.email
            + "</div>" + "</div>");

        newResult.hover(function () {
            // make it darke
            $(this).css("background-color", "lightgray");
        }, function () {
        // reverse
                $(this).css("background-color", "transparent");
        });

        resultList.append(newResult);


    });


});