describe('myFirstTest', function (  ) {
	it('Должен веруть вернуть мое имя', function (  ) {
		// экспект это то что мы ожидаем, ожидаем мы функцию myNameIs и она должна вернуть имя Ник
		expect(myNameIs()).toEqual('Nick');
	})
});