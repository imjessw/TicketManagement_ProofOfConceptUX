$(function() {
	console.log( "ready!" );

	$(".saveTicketBTN").click(function() {
		alert( "Are you sure you want to save this? None of the ticket will be processed until you finalize and submit. " );
	});

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


	



