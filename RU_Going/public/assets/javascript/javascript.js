$( document ).ready(function() {
	var url ='https://rcb-mm-app.firebaseio.com/';
	// Firebase link
	var dataRef = new Firebase("rcb-mm-app.firebaseio.com/");
	var ref = new Firebase("https://rcb-mm-app.firebaseio.com/events");
	// Initial Values
	var eventName = "";
	var eventDate = "";
	var eventTime = 0;
	var eventDescription = "";
	var category = "";
	var location = "";
	var eventsRef = dataRef.child("events");

    //when you click x on post, removes div and child from firebase
    $(document).on('click', '.glyphicon-remove', function() {
    	//makes div disappear
    	$(this).parent().hide();

    	//when clicking to remove event, asks for security question. not finished
    	// var security = prompt('Security Question: What\'s your favorite food?');

    	//targets the child name by finding it in the well div class
    	//(huge workaround to target child to delete the node on click)
        var target = $(this).parent('div').attr('id');


        //function to remove node on click
        ref.on("value", function(snapshot) {
            eventsRef.child(target).remove();

        });
    }); //end remove click function


	//button to add your own event:
	$('#addEvent').on('click', function (){

    //onload, twitter will not show until you enter queries
    // $("#twitter").toggle();


	// Grabbed values from text boxes
	eventName = $('.eventName').val().trim();
	eventDate = $('.eventDate').val().trim();
	eventTime = $('.eventTime').val().trim();
	eventDescription = $('.eventDescription').val().trim()
	category = $('.eventCat').val().trim()
	location = $('.eventLocation').val().trim();
	// newEvent = "newEvent";


	//creates an event child and the event name is whatever the user added as the name
	eventsRef.child(eventName).set({
		eventName: eventName,
		eventDate: eventDate,
		eventTime: eventTime,
		eventDescription: eventDescription,
		category: category,
		location: location
	})


	//clear form data
	$('.eventName').val("");
	$('.eventDate').val("");
	$('.eventTime').val("");
	$('.eventDescription').val("");
	$('.category').val("");
	$('.location').val("");




			 var category = $('.eventCat').val();
			 var location = $('.eventLocation').val();
			 // searchEvents(location, category);
			 // return false;

			ref.orderByChild("location").equalTo(location).on("child_added", function(snapshot) {
		    // console.log(snapshot.key() + " is located: " + snapshot.val().location + " and is in this category: " +snapshot.val().category);

		      var catSort = snapshot.val();

		       //this will see if the second parameter category is found within the first query's results
			      if (catSort.category == category) {
			      	    $('#testdiv').prepend("<div class='well' id='"+ snapshot.key() +"'><span class='glyphicon glyphicon-remove'></span><div id='eventName'>" + "<h4><strong>" + snapshot.val().eventName + "</strong></h4>" + "</div><div id='eventDate'><span class='glyphicon glyphicon-calendar'></span> "+ snapshot.val().eventDate + " <span id='eventTime'> <span class='glyphicon glyphicon-time' aria-hidden='true'></span>" + snapshot.val().eventTime + " </span></div><div id='eventDescription'> " + "<b>About the event:&nbsp;&nbsp;</b>" + snapshot.val().eventDescription + " <div id='category'> " + "<b>Category:&nbsp;&nbsp;</b>" + snapshot.val().category + "<span id='location'> " + "<b>Campus:&nbsp;&nbsp;</b>" + snapshot.val().location + "</span></div></div>");


			          console.log(catSort);


			          //this will hide the form when a user clicks 'lets go' so that only the results will show up
			          $('#inputSection').hide();
		     	  }//end if statement

		 	 }); //end first parameter by location






	//closes modal --DONT NEED.
	// $('#myModal').dialog('close');

	// Don't refresh the page!
	return false;

	}); //end click Add Event


 //whenever change made, console logs a snapshot
 eventsRef.on("child_added", function(childSnapshot) {
	// Log everything that's coming out of snapshot
	console.log(childSnapshot.val().eventName);
	console.log(childSnapshot.val().eventDate);
	console.log(childSnapshot.val().eventTime);
	console.log(childSnapshot.val().eventDescription);
	console.log(childSnapshot.val().category);
	console.log(childSnapshot.val().location)


	// Handle the errors
}, function(errorObject){
		// console.log("Errors handled: " + errorObject.code);

}); //end child added function



    //click on find a hangout button to retrieve info based on two parameters of location/category
	$('#findEvent').on('click', function(){
// <button type="button" class="close" data-dismiss="modal">&times;</button>


			 var category = $('#selectCategory').val();
			 var location = $('#selectLocation').val();
			 // searchEvents(location, category);
			 // return false;

			var ref = new Firebase("https://rcb-mm-app.firebaseio.com/events");
			ref.orderByChild("location").equalTo(location).on("child_added", function(snapshot) {
		    // console.log(snapshot.key() + " is located: " + snapshot.val().location + " and is in this category: " +snapshot.val().category);

		      var catSort = snapshot.val();

		       //this will see if the second parameter category is found within the first query's results
			      if (catSort.category == category) {

			      	    $('#testdiv').prepend("<div class='card small' id='"+ snapshot.key() +"'><span class='glyphicon glyphicon-remove'></span><div id='eventName'>" + "<h4><strong>" + snapshot.val().eventName + "</strong></h4>" + "</div><div id='eventDate'><span class='glyphicon glyphicon-calendar'></span> "+ snapshot.val().eventDate + " <span id='eventTime'> <span class='glyphicon glyphicon-time' aria-hidden='true'></span>" + snapshot.val().eventTime + " </span></div><div id='eventDescription'> " + "<b>About the event:&nbsp;&nbsp;</b>" + snapshot.val().eventDescription + " <div id='category'> " + "<b>Category:&nbsp;&nbsp;</b>" + snapshot.val().category + "<span id='location'> " + "<b>Campus:&nbsp;&nbsp;</b>" + snapshot.val().location + "</span></div></div>");


			          console.log(catSort);


			          //this will hide the form when a user clicks 'lets go' so that only the results will show up
			          $('#inputSection').hide();
		     	  }//end if statement

		 	 }); //end first parameter by location



	});//end go button on click

//AARON'S randomized deal thing

	$("#random").click(function(){

		//empty div before another request fills in the div
		$("#sqoot").empty();

		//creates random num to insert into query
	 	var randomNum = Math.floor((Math.random() * 45) + 1);
		console.log(randomNum);

			//this is the query URL for deals in NB
		var queryURL = "https://api.sqoot.com/v2/deals?location=08901&radius=5&per_page=50&api_key=0Ysvd4ooNwpRSIdrghiC";
		//log the queryURL
		// console.log(queryURL);

		$.ajax({url: queryURL, method: 'GET'})
		 .done(function(response){



		 	//logs title of deal
		 	// console.log(response.deals[1].deal.title);
		 	//sets title to variable
		 	var title = response.deals[randomNum].deal.title;
		 	//puts deal in div
		 	$("#sqoot").append(title);
		 	$("#sqoot").append("<br>");


		 	//image url of deal
		 	// console.log(response.deals[1].deal.image_url);
		 	//sets image url to varaible
		 	var imageURL = response.deals[randomNum].deal.image_url;
		 	//sets dealURL to variable
		 	var dealURL = response.deals[randomNum].deal.url;
		 	//append image to sqoot div and append dealURL to image tag
		 	$("#sqoot").append("<a href='" + dealURL + "' target='_blank'><img id='image'alt='deal image'src='"+ imageURL +"'></a>");
		 	$("#sqoot").append("<br>");
		 	//append text
		 	$("#sqoot").append("<h6>Click image to find out more</h6>");






		 });

	});



}); //end doc on ready
