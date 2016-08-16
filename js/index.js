$(function() {
	console.log( "ready!" );

	$(".saveTicketBTN").click(function() {
		alert( "Are you sure you want to save this? None of the ticket will be processed until you finalize and submit. " );
	});

	// I want to come back and make this add another flight field vs pop up.
	$(".flightPop").click(function(){
		alert("this would add another set of flight start date and flight end date.")
	});

	// $(".saveTicketBTN").click(function () {
	// 		var msg = 'Confirmation Msg.';
	// 		var div = $("<div>" + msg + "</div>");
	// 		div.dialog({
	// 			title: "Confirm",
	// 			buttons: [
	// 						{
	// 							text: "Yes",
	// 							click: function () {
	// 								//add ur stuffs here
	// 							}
	// 						},
	// 						{
	// 							text: "No",
	// 							click: function () {
	// 								div.dialog("close");
	// 							}
	// 						}
	// 					]
	// 		});
	// 	});




	var nowTemp = new Date();
	var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
	var checkin = $('#dpd1').fdatepicker({
		onRender: function (date) {
		return date.valueOf() < now.valueOf() ? 'disabled' : '';
	}
	}).on('changeDate', function (ev) {
		if (ev.date.valueOf() > checkout.date.valueOf()) {
		var newDate = new Date(ev.date)
		newDate.setDate(newDate.getDate() + 1);
		checkout.update(newDate);
	}
	checkin.hide();
  });


});


	



