(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/demo1_atlas_.png", id:"demo1_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"demo1_atlas_", frames: [[0,1578,61,57],[63,1578,64,47],[205,1534,84,73],[205,1455,123,77],[0,1455,203,121],[0,0,750,1453],[752,770,277,819],[752,0,750,768]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.loadingicon1 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.loadingicon2 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.loadingicon3 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.loadingicon4 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.loadingicon5 = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.loading = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.loadingtitle = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.loadingtop = function() {
	this.spriteSheet = ss["demo1_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.loadingtop();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,768);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.loadingicon1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,57);


(lib.lightbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.light("synched",0);
	this.instance.setTransform(375,384,1,1,0,0,0,375,384);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},59).to({alpha:1},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,768);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件2("synched",0);
	this.instance.setTransform(30.5,28.5,1,1,0,0,0,30.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({startPosition:0},0).to({y:38.5},67).wait(15).to({startPosition:0},0).to({y:28.5},105).wait(6).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,57);


// stage content:



(lib.demo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// loading
	this.instance = new lib.元件1();
	this.instance.setTransform(156.5,128.5,1,1,0,0,0,30.5,28.5);

	this.instance_1 = new lib.loadingicon5();
	this.instance_1.setTransform(499,988);

	this.instance_2 = new lib.loadingicon4();
	this.instance_2.setTransform(56,819);

	this.instance_3 = new lib.loadingicon3();
	this.instance_3.setTransform(120,488);

	this.instance_4 = new lib.loadingicon2();
	this.instance_4.setTransform(56,265);

	this.instance_5 = new lib.loadingtitle();
	this.instance_5.setTransform(473,0);

	this.instance_6 = new lib.lightbox();
	this.instance_6.setTransform(375,384,1,1,0,0,0,375,384);

	this.instance_7 = new lib.loading();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,667,750,1453);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;