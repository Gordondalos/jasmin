var myObj = {
	someMehod: function () {
		console.log('вызван');
		$.get('some.html', function (data) {
			return data;
		})
	}
};

