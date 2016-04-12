var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Felix');
	this.ImgSrc = ko.observable('img/cat1.jpg');
	this.ImgAttribution = ko.observable('A great Photographer');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() +1);
	};

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

ko.applyBindings(new ViewModel());