$('#btn').click(function() {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val( $('#inputElement').val() ).select();
		document.execCommand("copy");
		$temp.remove();
    console.log('Copied');
	});
