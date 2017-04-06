window.Computer = {
	currentMemory : 2,
	currentSpace : 1000,

	install : function () {
		for ( var i = 0, len = arguments.length; i < len; i++ ) {
			if ( arguments[ i ].space <= this.currentSpace ) {
				this.currentSpace -= arguments[ i ].space;
				arguments[ i ].install = true;
			} else {
				return false;
			}
		}

		for ( var i = 0, len = arguments.length; i < len; i++ ) {
			if ( arguments[ i ].install == false ) {
				return false;
			}
		}
		return true;
	},

	addMemory : function ( memory ) {
		if ( memory.length > 2 ) {
			return false;
		}
		var that = this;
		memory.forEach ( function ( ram, index ) {
			if ( index <= 1 ) {
				that.currentMemory += ram;
			}
		} );
		return this.currentMemory
	},

	format: function (  ) {
		this.currentSpace  = 1000;

	}
};


var returnTrueFunction = function(){
	return true;
};

var returnFalseFunction = function(){
	return false;
};

var giveMyArray = function (  ) {
	return ['Дизайнер','Верстальщик','Мудак'];
};

var User = {

	age: 19,

	getAge: function (  ) {
		return this.age;
	}

};