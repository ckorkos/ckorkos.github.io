// Add "done" toggle to new items
toggleDone("#list li");

// Click on X to delete Todos
deleteButton("#list span");

$(".fa-minus").click(function() {
	$("#newitem").fadeToggle(500);
	$(this).toggleClass("fa-minus fa-plus");
});

function toggleDone(identifier) {
	$(identifier).on("click", function() {
		// check off item if clicked, uncheck if not
		if($(this).hasClass("done")) {
			$(this).removeClass("done");
		}
		else {
			$(this).addClass("done");
		}
	});
}

function deleteButton(which) {
	$(which).click(function(event) {
		$(this).parent().fadeOut(500, function() {
			$(this).remove();
		});
		event.stopPropagation();
	});
}

function newItem() {
	if(event.keyCode == 13) {
		// fetch value inside text input, then emtpy the input box
		var item = $('#newitem').val();
		$('#newitem').val("");

		// add new item to the list
		$("#list").append("<li>" + "<span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + item + "</li>");

		// detect if list items are clicked
		toggleDone("#list li:last-child");

		// set up item's delete button
		deleteButton("#list li:last-child span");
	}
}