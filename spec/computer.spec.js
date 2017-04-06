describe('Комптютер тесты памяти', function(){
	// чтобы тесты сбрасывать на стартовые значения у жасмин есть метод
	beforeEach(function (  ) {
		// установим значение памяти компа равное 2
		Computer.currentMemory = 2;

	});

	it('Должен уметь добавлять оперативную память',  function( ) {
		// тут проверяем что должен быть чему то равен
		expect(Computer.addMemory([6])).toEqual(8);
	});
	
	it('Должен показывать текущее количество памяти', function (  ) {
		// тут проверяем что должен быть определен
		expect(Computer.currentMemory).toBeDefined();
	});

	it('стартовая память компа должна быть 2 гб', function (  ) {
		// стартовая память компа должна быть 2 гб
		expect(Computer.currentMemory).toEqual(2);
	});

	it('Возвращать сколько получилось если дали два слота', function (  ) {
		expect(Computer.addMemory([6,8])).toEqual(16);
	});

	it('Запрещать добавлять больше 2-х плат памяти', function (  ) {
		expect(Computer.addMemory([6,8,4])).toBe(false);
	});



});
describe('Комптютер тесты жесткого диска. ', function(){
	// чтобы тесты сбрасывать на стартовые значения у жасмин есть метод
	beforeEach(function (  ) {
		Computer.currentSpace = 1000;
	});


	it('Комп должен уметь инсталировать программы', function (  ) {
		expect(Computer.install(
			{name: "GTA", space: 600, install : false },
			{name: "Photoshop", space: 400, install : false }
		)).toBe(true);
	});

	it('Должен запрещать устанавливать программы если место закончилось', function (  ) {
		expect(Computer.install(
			{name: "GTA", space: 600, install : false },
			{name: "Photoshop", space: 400, install : false },
			{name: "Ilustrator", space: 400, install : false }
		)).toBe(false);
	});


	it('Должен уметь форматировать жесткий диск', function (  ) {
		//установим пару программ
		expect(Computer.install(
			{name: "GTA", space: 600, install : false },
			{name: "Photoshop", space: 400, install : false }
		)).toBe(true);
		// отформатируем
		expect(Computer.format());
		// должно быть 1000
		expect(Computer.currentSpace).toEqual(1000);
	});



});
describe ( 'Функции проверки ожиданий', function () {
	it ( 'Функция которая всегда возвращает true toEqual', function () {
		expect(returnTrueFunction()).toEqual(true);
	} );

	it ( 'Функция которая всегда возвращает true toBeTruthy', function () {
		expect(returnTrueFunction()).toBeTruthy();
	} );

	it ( 'Функция которая всегда возвращает false toBeTruthy', function () {
		expect(returnFalseFunction()).not.toBeTruthy();
	} );


	it ( 'Функция которая всегда возвращает false toBeFalsy', function () {
	    expect( returnFalseFunction()).toBeFalsy();
	} );



} );
describe ( 'Функции для проверки массивов, есть ли в возвращаемом массиве дизагнер', function () {
    it ( 'Функция возвращает массив профессий', function () {
    	// проверяем есть ли в возврате дизайнер
	    expect(giveMyArray()).toContain('Дизайнер');

	} );

	it ( 'Функция возвращает массив профессий, проверим нет ли там манагера', function () {
		// проверяем нет ли там в массиве манагера - его быть не должно
		expect(giveMyArray()).not.toContain('Манагер');
	} );

} );
describe ( 'Проверки соответсвия в обьектах', function () {
	it ( 'Пользователю должно быть больше 18 лет', function () {
		// Проверим юзер старше 18 или нет
		expect(User.getAge()).toBeGreaterThan(18)
	} );
} );




