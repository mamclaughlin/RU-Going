//Hides Divs
$("#createSection").hide();
$("#eventDiv").hide();
$("#findSection").hide();
$("#createEventForm").hide();
$("#twitter").hide();

//Makes the RU Going? title a home button.
$("#homeButton").click(function() {
    $("#welcomeCenter").show();
    $("#twitter").hide();
    $("#eventDiv").hide();
    $("#findSection").hide();
    $("#createEventForm").hide();
    $("#testdiv").empty();
});

//Find a Hangout! button click.
$("#findButton").click(function() {
    $("#findSection").show();
    $("#welcomeCenter").hide();
    $("#backButton").click(function() {
        $("#findSection").hide();
        $("#welcomeCenter").show();
        $("#eventDiv").hide();
        $("#testdiv").show();
    });
});

//Create a Hangout! button click.
$("#createButton").click(function() {
    $("#createEventForm").show();
    $("#welcomeCenter").hide();
})

//Find event button on modal.
$("#findEvent").click(function() {
    $("#eventDiv").show();
    $("#twitter").show();
    $("#testdiv").show();
    $("#findSection").modal('hide');
    $("#close").click(function() {
        $("#findSection").hide();
        $("#createSection").hide();
        $("#welcomeCenter").show();
    })
})

//Add event button on modal.
$("#addEvent").click(function() {
    $("#eventDiv").show();
    $("#twitter").show();
    $("#testdiv").show();
    // $("#createSection").modal('hide');
    $("#close").click(function() {
        $("#findSection").hide();
        $("#createSection").hide();
        $("#welcomeCenter").show();
    })
})

//Close Button function.
$(".close").click(function() {
    $("#findSection").hide();
    $("#createSection").hide();
    $("#welcomeCenter").show();
})


//Create Your Own! button click.
$("#createButton").click(function() {
    //Insert create inputs.
});

//Click function for Let's Go Button.
$("#goButton").click(function() {
    console.log(this);

    //Clicking the button hides the input boxes and buttons, it'll show the event divs that will be dynamically created based on input.
    $("#findSection").hide();
    //Shows eventDiv after submit is pressed.
    $("#eventDiv").show();
    //Find a way for specific content to show up based on inputs selected from the dropdown menu.
    //eventDiv = #eventheader / #eventCreator / #eventTime / #eventJoin button.

    $("#backButton").click(function() {
        $("#eventDiv").hide();
        $("#welcomeCenter").hide();
        $("#findSection").show();
    });

    $("#forwardButton").click(function() {
        $("#eventDiv").show();
        $("#findSection").hide();
    });
});

//Click function for join!
$("#eventJoin").click(function() {
    $("#eventDiv").hide();
    //Back button functionality. Have to find a way to make this universal.
    $("#backButton").click(function() {
        $("#welcomeCenter").hide();
        $("#findSection").hide();
        $("#eventDiv").show();
    });
});

//Aaron's awesome weather section
var queryURL = "https://api.wunderground.com/api/c594801c0edbc586/conditions/q/NJ/New_Brunswick.json";

$.ajax({ url: queryURL, method: 'GET' })
    .done(function(response) {

        var city = response.current_observation.display_location.city;
        var weather = response.current_observation.weather;
        var iconURL = response.current_observation.icon_url;
        var temp = response.current_observation.temp_f;

        //append that shit to a div
        // $("#weather").append(city + "<br>");
        // $("#weather").append(weather + "<br>");
        $("#weather").append("<img src='" + iconURL + "'>");
        $("#weather").append(temp + "&#8457" + "<br>");
    });

//Leslie's awesome chat section
var messagesRef = new Firebase('https://ninthmysterychat.firebaseio.com/');
var messageField = $('#messageInput');
var nameField = $('#nameInput');
var messageList = $('#messages');

messageField.keypress(function(e) {
    if (e.keyCode == 13) {
        //FIELD VALUES
        var username = nameField.val().trim();
        var message = messageField.val().trim();

        //SAVE DATA TO FIREBASE AND EMPTY FIELD
        messagesRef.push({ name: username, text: message });
        messageField.val(name);
    }

});

messagesRef.limitToLast(10).on('child_added', function(snapshot) {
    //GET DATA
    var data = snapshot.val();
    var username = data.name || "anonymous";
    var message = data.text;
    var messageElement = $("<li>");
    var nameElement = $("<b class='chat-username'></b>")
    nameElement.text(username + ": ");
    messageElement.text(message).prepend(nameElement);

    //ADD MESSAGE
    messageList.append(messageElement)

    messageList[0].scrollTop = messageList[0].scrollHeight;

});