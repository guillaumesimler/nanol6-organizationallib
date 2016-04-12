var initialCats = [
	{
		clickCount: 0,
		name: 'Felix',
		ImgSrc: 'img/cat1.jpg',
		Nicknames: [
			{nickname: 'z chat'},
			{nickname: 'die Katze'},
			{nickname: 'der Dachhase'}
		]
	},

	{
		clickCount: 0,
		name: 'Ingo',
		ImgSrc: 'img/cat2.jpg',
		Nicknames: [
			{nickname: 'le chat de Oberbohingen'}
		]
	},

	{
		clickCount: 0,
		name: 'Matoux',
		ImgSrc: 'img/cat3.jpg',
		Nicknames: [
			{nickname: 'de la mère Michèle'}
		]
	},

	{
		clickCount: 0,
		name: 'Gros Minet',
		ImgSrc: 'img/cat4.jpg',
		Nicknames: [
			{nickname: 'zai cru voir un ros Minet'}
		]
	},

	{
		clickCount: 0,
		name: 'Tigrou',
		ImgSrc: 'img/cat5.jpg',
		Nicknames: [
			{nickname: 'ca sent la chair fraiche'}
		]
	}
];



var Cat = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.ImgSrc = ko.observable(data.ImgSrc);
	this.ImgAttribution = ko.observable('A great Photographer');

	this.Nicknames = ko.observableArray(data.Nicknames);


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

	/* this.currentCat = ko.observable( new Cat({
		clickCount: 0,
		name: 'Felix',
		ImgSrc: 'img/cat1.jpg',
		Nicknames: [
			{nickname: 'z chat'},
			{nickname: 'die Katze'},
			{nickname: 'der Dachhase'}
		]
	}));

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() +1);
	}; */

	var self = this; 

	// Add the model to the observable array
	this.catList = ko.observableArray([]);

	initialCats.forEach(function (catItem) {
		self.catList.push(new Cat(catItem));
	});



	//functions
	this.currentCat = ko.observable( this.catList()[0]);

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() +1); 
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	}:

	
};


ko.applyBindings(new ViewModel());