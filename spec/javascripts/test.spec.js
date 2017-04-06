// HTML FIXTURES

describe ( 'HTML FIXTURES', function () {
	it ( 'тест setFixtures', function () {
		expect(setFixtures()).toBeDefined();
	} );

	it ( 'тест readFixtures', function () {
		expect(readFixtures()).toBeDefined();
	} );
	
	
	it ( 'Можем загружать fixtures из HTML файла', function () {
		loadFixtures('test.html');
		expect($('.fragment')).toExist();
	} );

	it ( 'Можем читать html без загрузки его в дом', function () {
		var html = readFixtures('test.html');
		expect(html).toContainElement('li');
		expect($('body').find('ul')).toContainElement('li');
	} );


		it ( 'можем получить fixture как папамер и вставить его в дом', function () {
		    setFixtures('<div class="book">Всем привет</div>>');
		    expect($('.book')).toExist();
		} );
	

	// it ( 'тест loadFixtures', function () {
	// 	expect(loadFixtures()).toBeDefined();
	// } );
} );