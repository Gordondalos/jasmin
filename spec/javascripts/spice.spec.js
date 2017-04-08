describe ( 'Знакомство с spice', function () {
	it ( 'Может заменять функцию за которой следит', function () {
		// заменим часть метода и метод andCallThrought вызывает его
		//строим спайс обьект
		// вызываем функцию  так что она возвращает hello world
		spyOn ( myObj, 'someMehod' ).and.returnValue ( 'hello word' );
	} );

	it ( 'Проверим что метод бы вызван', function () {
		// построим шпиона
		spyOn ( myObj, 'someMehod' );
		//вызовим метод
		myObj.someMehod ();
		// так можно проверить вызвана или нет
		expect ( myObj.someMehod ).toHaveBeenCalled ();
	} );

	it ( 'Првоерям как работает фальшивая функция, мы заменили вызов функции фальшивым методом', function () {
		spyOn ( myObj, "someMehod" ).and.callFake ( function ( arguments, can, be, received ) {
			return 'hello word';
		} );
		expect ( myObj.someMehod () ).toEqual ( 'hello word' );
	} );

	it ( 'Проверяем работу с асинхронными запросами', function () {
		// шпионим за jquery функцией фякс
		spyOn ( $, 'ajax' );
		// уставновили фейковые данны
		setFixtures ( sandbox () );
		// отобрали эти фейковые данные
		var sb = $ ( '#sandbox' );

		// написали плагин jqury, вызывая который происходит имитация ajax запроса
		$.fn.asyncCall = function () {
			return this.each ( function () {
				var el = $ ( this );
				$.get ( 'some.html', function ( data ) {
					el.html ( data );
				} )
			} )
		};

		// запустили эмитированный запрос
		sb.asyncCall ();


		// заменяем возврат jquery аякс запроса на свой результатом с li
		$.ajax.calls.mostRecent ().args[ 0 ].success ( '<li>один</li><li>два</li>' );
		expect ( sb.find ( 'li' ).length ).toBe ( 2 );

	} );

} );
