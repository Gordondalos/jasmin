describe ( 'Мой тест', function () {
    it ( 'Проверка нового теста', function () {
        expect(2+2).toBe(4);

	} );
} );

describe ( 'Тестируем jquery-jasmine', function () {

	var elem;
	beforeEach ( function () {
		elem = $('<div class="zxc" id="container"><p class="asd">Hello word</p></div>')
	} );

    it ( 'Проверим наличие дива контейнер на странице', function () {
	     expect(elem).toEqual('#container');

	} );

	it ( 'Проверим наличие текста внутри дива', function () {
		expect(elem).toContainText('Hello word');
	} );

	it ( 'Проверим наличие текста внутри элемента p этого дива регулярным выражением', function () {
		expect(elem.children('p')).toHaveText(/hello word/i);
	} );

	it ( 'Проверим наличие HTML элемента внутри дива', function () {
		expect(elem).toContainHtml('<p class="asd">Hello word</p>');
	} );

	it ( 'Этот див имеет класс zxc', function () {
		expect(elem).toHaveClass('zxc');
	} );

	it ( 'Этот див имеет id container', function () {
		expect(elem).toHaveId('container');
	} );

	it ( 'Этот див не имеет id qwe', function () {
		expect(elem).not.toHaveId('qwe');
	} );

	it ( 'Проверим наличие p элемента внутри дива  ', function () {

		expect(elem.children()).toBeMatchedBy('p');
		expect(elem).toContainElement('p');
		expect(elem).toContainElement('.asd');
		expect(elem.children()).toBeMatchedBy('p');
	} );
} );




