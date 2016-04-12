var Cat = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Felix');
	this.ImgSrc = ko.observable('img/cat1.jpg');
	this.ImgAttribution = ko.observable('A great Photographer');

	this.Nicknames = ko.observableArray([
		{nickname: 'z chat'},
		{nickname: 'die Katze'},
		{nickname: 'der Dachhase'}
	]);


	this.level = ko.computed(function() {
		if (this.clickCount() <10) {
			return 'newborn';
		};

		if (this.clickCount() <30) {
			return 'infant';
		};

		if (this.clickCount() <100) {
			return 'teen';
		};

		if (this.clickCount() <500) {
			return 'grown-up';
		};

		return 'ancester';
	}, this);
};


var ViewModel = function() {
	this.currentCat = ko.observable( new Cat());

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() +1);
	};

	/*other option
	var self = this; //saves the current this

	this.currentCat = ko.observable( new Cat());

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() +1); //otherwise the 'this' would be Clickcount()'s
	};

	*/ 
};


ko.applyBindings(new ViewModel());