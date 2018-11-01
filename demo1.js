(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.rain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.298)","#FFFFFF"],[0,1],-50.8,0,50.8,0).s().p("AD1KTQkFqXnqq2QKiIJFFJMQA3EgicAAQg7AAhYgog");
	this.shape.setTransform(50.8,70);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.6,140);


(lib.demo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhsB9QgugtAAhAQAAg+AuguQAtgtA/AAQBAAAAtAtQAtAuAAA+QAABAgtAtQgtAuhAAAQg/AAgtgug");
	var mask_graphics_1 = new cjs.Graphics().p("AhTB9QgtguAAhAQAAg+AtgtQAuguA+AAQBAAAAtAuQAuAtAAA+QAABAguAuQgtAthAAAQg+AAgugtg");
	var mask_graphics_2 = new cjs.Graphics().p("Ag5B9QguguAAhAQAAg+AugtQAtguA+AAQBAAAAuAuQAtAtAAA+QAABAgtAuQguAthAAAQg+AAgtgtg");
	var mask_graphics_3 = new cjs.Graphics().p("AggB8QgtgtAAhAQAAg+AtguQAsgtBAAAQBAAAAtAtQAuAuAAA+QAABAguAtQgtAuhAAAQhAAAgsgug");
	var mask_graphics_4 = new cjs.Graphics().p("AgGB8QguguAAhAQAAg+AugtQArguBAAAQBAAAAuAuQAtAtAAA+QAABAgtAuQguAthAAAQhAAAgrgtg");
	var mask_graphics_5 = new cjs.Graphics().p("AARB8QgrguAAhAQAAg+ArgtQAuguBAAAQBAAAAtAuQAuAtAAA+QAABAguAuQgtAthAAAQhAAAgugtg");
	var mask_graphics_6 = new cjs.Graphics().p("AArB7QgsgtAAhAQAAg+AsguQAtgtBAAAQBAAAAuAtQAtAuAAA+QAABAgtAtQguAuhAAAQhAAAgtgug");
	var mask_graphics_7 = new cjs.Graphics().p("ABEB7QguguAAhAQAAg+AugtQAtguBAAAQBAAAAuAuQAtAtAAA+QAABAgtAuQguAthAAAQhAAAgtgtg");
	var mask_graphics_8 = new cjs.Graphics().p("ABdB6QgtgtAAhAQAAg+AtguQAugtBAAAQBAAAAtAtQAuAuAAA+QAABAguAtQgtAuhAAAQhAAAgugug");
	var mask_graphics_9 = new cjs.Graphics().p("AB3B6QgugtAAhAQAAg+AuguQAtgtBAAAQBAAAAuAtQAtAuAAA+QAABAgtAtQguAuhAAAQhAAAgtgug");
	var mask_graphics_10 = new cjs.Graphics().p("ACQB6QgtguAAhAQAAg+AtgtQAuguBAAAQBAAAAtAuQAuAtAAA+QAABAguAuQgtAthAAAQhAAAgugtg");
	var mask_graphics_11 = new cjs.Graphics().p("ACqB5QgugtAAhAQAAg+AuguQAtgtBAAAQBAAAAuAtQAtAuAAA+QAABAgtAtQguAuhAAAQhAAAgtgug");
	var mask_graphics_12 = new cjs.Graphics().p("ADDB5QgtgtAAhAQAAg+AtguQAugtBAAAQBAAAAtAtQAuAuAAA+QAABAguAtQgtAuhAAAQhAAAgugug");
	var mask_graphics_13 = new cjs.Graphics().p("ADdB5QguguAAhAQAAg+AugtQAtguBAAAQBAAAAuAuQAtAtAAA+QAABAgtAuQguAthAAAQhAAAgtgtg");
	var mask_graphics_14 = new cjs.Graphics().p("AD2B4QgugtAAhAQAAg+AuguQAtgtBAAAQBAAAAuAtQAtAuAAA+QAABAgtAtQguAuhAAAQhAAAgtgug");
	var mask_graphics_15 = new cjs.Graphics().p("AEPB4QgtgtAAhAQAAg+AtguQAugtBAAAQBAAAAtAtQAuAuAAA+QAABAguAtQgtAuhAAAQhAAAgugug");
	var mask_graphics_16 = new cjs.Graphics().p("AEpB4QguguAAhAQAAg+AugtQAtguBAAAQBAAAAuAuQAtAtAAA+QAABAgtAuQguAthAAAQhAAAgtgtg");
	var mask_graphics_17 = new cjs.Graphics().p("AFCB3QgtgtAAhAQAAg+AtguQAugtBAAAQBAAAAtAtQAuAuAAA+QAABAguAtQgtAuhAAAQhAAAgugug");
	var mask_graphics_18 = new cjs.Graphics().p("AFcB3QgugtAAhAQAAg+AuguQAtgtBAAAQBAAAAuAtQAtAuAAA+QAABAgtAtQguAuhAAAQhAAAgtgug");
	var mask_graphics_19 = new cjs.Graphics().p("AF1B3QgtguAAhAQAAg+AtgtQAuguBAAAQBAAAAtAuQAuAtAAA+QAABAguAuQgtAthAAAQhAAAgugtg");
	var mask_graphics_20 = new cjs.Graphics().p("AGPB2QgugtAAhAQAAg+AuguQAtgtBAAAQBAAAAuAtQAtAuAAA+QAABAgtAtQguAuhAAAQhAAAgtgug");
	var mask_graphics_21 = new cjs.Graphics().p("AGoB2QguguAAhAQAAg+AugtQAtguBAAAQBAAAAuAuQAtAtAAA+QAABAgtAuQguAthAAAQhAAAgtgtg");
	var mask_graphics_22 = new cjs.Graphics().p("AHBB2QgtguAAhAQAAg+AtgtQAuguBAAAQBAAAAtAuQAuAtAAA+QAABAguAuQgtAthAAAQhAAAgugtg");
	var mask_graphics_23 = new cjs.Graphics().p("AHbB1QgugtAAhAQAAg+AuguQAtgtBAAAQBAAAAuAtQAtAuAAA+QAABAgtAtQguAuhAAAQhAAAgtgug");
	var mask_graphics_24 = new cjs.Graphics().p("AH0B1QgtguAAhAQAAg+AtgtQAuguBAAAQBAAAAtAuQAuAtAAA+QAABAguAuQgtAthAAAQhAAAgugtg");
	var mask_graphics_25 = new cjs.Graphics().p("AIOB1QguguAAhAQAAg+AugtQAtguBAAAQBAAAAuAuQAtAtAAA+QAABAgtAuQguAthAAAQhAAAgtgtg");
	var mask_graphics_26 = new cjs.Graphics().p("AInB0QgtgtAAhAQAAg+AtguQAugtBAAAQBAAAAtAtQAuAuAAA+QAABAguAtQgtAuhAAAQhAAAgugug");
	var mask_graphics_27 = new cjs.Graphics().p("AJAB0QgtguAAhAQAAg+AtgtQAuguBAAAQBAAAAtAuQAuAtAAA+QAABAguAuQgtAthAAAQhAAAgugtg");
	var mask_graphics_28 = new cjs.Graphics().p("AJaB0QguguAAhAQAAg+AugtQAtguBAAAQBAAAAuAuQAtAtAAA+QAABAgtAuQguAthAAAQhAAAgtgtg");
	var mask_graphics_29 = new cjs.Graphics().p("AJzBzQgtgtAAhAQAAg+AtguQAugtBAAAQBAAAAtAtQAuAuAAA+QAABAguAtQgtAuhAAAQhAAAgugug");
	var mask_graphics_30 = new cjs.Graphics().p("AKNBzQguguAAhAQAAg+AugtQAtguBAAAQBAAAAuAuQAtAtAAA+QAABAgtAuQguAthAAAQhAAAgtgtg");
	var mask_graphics_31 = new cjs.Graphics().p("AKmBzQgtguAAhAQAAg+AtgtQAuguBAAAQBAAAAtAuQAuAtAAA+QAABAguAuQgtAthAAAQhAAAgugtg");
	var mask_graphics_32 = new cjs.Graphics().p("ALAByQgugtAAhAQAAg+AuguQAtgtBAAAQBAAAAuAtQAtAuAAA+QAABAgtAtQguAuhAAAQhAAAgtgug");
	var mask_graphics_33 = new cjs.Graphics().p("ALZByQgtguAAhAQAAg+AtgtQAuguBAAAQBAAAAtAuQAuAtAAA+QAABAguAuQgtAthAAAQhAAAgugtg");
	var mask_graphics_34 = new cjs.Graphics().p("ALyBxQgtgtAAhAQAAg+AtguQAugtBAAAQBAAAAtAtQAuAuAAA+QAABAguAtQgtAuhAAAQhAAAgugug");
	var mask_graphics_35 = new cjs.Graphics().p("AMMBxQgugtAAhAQAAg+AuguQAtgtBAAAQBAAAAuAtQAtAuAAA+QAABAgtAtQguAuhAAAQhAAAgtgug");
	var mask_graphics_36 = new cjs.Graphics().p("AMlBxQgtguAAhAQAAg+AtgtQAuguBAAAQBAAAAtAuQAuAtAAA+QAABAguAuQgtAthAAAQhAAAgugtg");
	var mask_graphics_37 = new cjs.Graphics().p("AM/BwQgugtAAhAQAAg+AuguQAtgtBAAAQBAAAAuAtQAtAuAAA+QAABAgtAtQguAuhAAAQhAAAgtgug");
	var mask_graphics_38 = new cjs.Graphics().p("ANYBwQgtgtAAhAQAAg+AtguQAugtBAAAQBAAAAtAtQAuAuAAA+QAABAguAtQgtAuhAAAQhAAAgugug");
	var mask_graphics_39 = new cjs.Graphics().p("ANyBwQguguAAhAQAAg+AugtQAtguBAAAQBAAAAuAuQAtAtAAA+QAABAgtAuQguAthAAAQhAAAgtgtg");
	var mask_graphics_40 = new cjs.Graphics().p("AOLBvQgtgtAAhAQAAg+AtguQAugtBAAAQBAAAAtAtQAuAuAAA+QAABAguAtQgtAuhAAAQhAAAgugug");
	var mask_graphics_41 = new cjs.Graphics().p("AOkBvQgtgtAAhAQAAg+AtguQAugtBAAAQBAAAAtAtQAuAuAAA+QAABAguAtQgtAuhAAAQhAAAgugug");
	var mask_graphics_42 = new cjs.Graphics().p("AO+BvQguguAAhAQAAg+AugtQAtguBAAAQBAAAAuAuQAtAtAAA+QAABAgtAuQguAthAAAQhAAAgtgtg");
	var mask_graphics_43 = new cjs.Graphics().p("APXBuQgtgtAAhAQAAg+AtguQAugtBAAAQBAAAAtAtQAuAuAAA+QAABAguAtQgtAuhAAAQhAAAgugug");
	var mask_graphics_44 = new cjs.Graphics().p("APxBuQgugtAAhAQAAg+AuguQAtgtBAAAQBAAAAuAtQAtAuAAA+QAABAgtAtQguAuhAAAQhAAAgtgug");
	var mask_graphics_45 = new cjs.Graphics().p("AQKBuQgtguAAhAQAAg+AtgtQAuguBAAAQBAAAAtAuQAuAtAAA+QAABAguAuQgtAthAAAQhAAAgugtg");
	var mask_graphics_46 = new cjs.Graphics().p("AQkBtQgugtAAhAQAAg+AuguQAtgtBAAAQBAAAAuAtQAtAuAAA+QAABAgtAtQguAuhAAAQhAAAgtgug");
	var mask_graphics_47 = new cjs.Graphics().p("AQ9BtQgtgtAAhAQAAg/AtgtQAtguBBAAQBAAAAtAuQAuAtAAA/QAABAguAtQgtAthAAAQhBAAgtgtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:15.5,y:17.1}).wait(1).to({graphics:mask_graphics_1,x:18,y:17.1}).wait(1).to({graphics:mask_graphics_2,x:20.6,y:17.1}).wait(1).to({graphics:mask_graphics_3,x:23.1,y:17}).wait(1).to({graphics:mask_graphics_4,x:25.7,y:17}).wait(1).to({graphics:mask_graphics_5,x:28.2,y:17}).wait(1).to({graphics:mask_graphics_6,x:30.8,y:16.9}).wait(1).to({graphics:mask_graphics_7,x:33.3,y:16.9}).wait(1).to({graphics:mask_graphics_8,x:35.8,y:16.8}).wait(1).to({graphics:mask_graphics_9,x:38.4,y:16.8}).wait(1).to({graphics:mask_graphics_10,x:40.9,y:16.8}).wait(1).to({graphics:mask_graphics_11,x:43.5,y:16.7}).wait(1).to({graphics:mask_graphics_12,x:46,y:16.7}).wait(1).to({graphics:mask_graphics_13,x:48.6,y:16.7}).wait(1).to({graphics:mask_graphics_14,x:51.1,y:16.6}).wait(1).to({graphics:mask_graphics_15,x:53.6,y:16.6}).wait(1).to({graphics:mask_graphics_16,x:56.2,y:16.6}).wait(1).to({graphics:mask_graphics_17,x:58.7,y:16.5}).wait(1).to({graphics:mask_graphics_18,x:61.3,y:16.5}).wait(1).to({graphics:mask_graphics_19,x:63.8,y:16.5}).wait(1).to({graphics:mask_graphics_20,x:66.4,y:16.4}).wait(1).to({graphics:mask_graphics_21,x:68.9,y:16.4}).wait(1).to({graphics:mask_graphics_22,x:71.4,y:16.4}).wait(1).to({graphics:mask_graphics_23,x:74,y:16.3}).wait(1).to({graphics:mask_graphics_24,x:76.5,y:16.3}).wait(1).to({graphics:mask_graphics_25,x:79.1,y:16.3}).wait(1).to({graphics:mask_graphics_26,x:81.6,y:16.2}).wait(1).to({graphics:mask_graphics_27,x:84.1,y:16.2}).wait(1).to({graphics:mask_graphics_28,x:86.7,y:16.2}).wait(1).to({graphics:mask_graphics_29,x:89.2,y:16.1}).wait(1).to({graphics:mask_graphics_30,x:91.8,y:16.1}).wait(1).to({graphics:mask_graphics_31,x:94.3,y:16.1}).wait(1).to({graphics:mask_graphics_32,x:96.9,y:16}).wait(1).to({graphics:mask_graphics_33,x:99.4,y:16}).wait(1).to({graphics:mask_graphics_34,x:101.9,y:15.9}).wait(1).to({graphics:mask_graphics_35,x:104.5,y:15.9}).wait(1).to({graphics:mask_graphics_36,x:107,y:15.9}).wait(1).to({graphics:mask_graphics_37,x:109.6,y:15.8}).wait(1).to({graphics:mask_graphics_38,x:112.1,y:15.8}).wait(1).to({graphics:mask_graphics_39,x:114.7,y:15.8}).wait(1).to({graphics:mask_graphics_40,x:117.2,y:15.7}).wait(1).to({graphics:mask_graphics_41,x:119.7,y:15.7}).wait(1).to({graphics:mask_graphics_42,x:122.3,y:15.7}).wait(1).to({graphics:mask_graphics_43,x:124.8,y:15.6}).wait(1).to({graphics:mask_graphics_44,x:127.4,y:15.6}).wait(1).to({graphics:mask_graphics_45,x:129.9,y:15.6}).wait(1).to({graphics:mask_graphics_46,x:132.5,y:15.5}).wait(1).to({graphics:mask_graphics_47,x:135,y:15.5}).wait(1));

	// 图层 1
	this.text = new cjs.Text("这是一个非常简单的DEMO", "bold 20px 'Microsoft YaHei'", "#FFCC33");
	this.text.lineHeight = 28;
	this.text.lineWidth = 247;
	this.text.setTransform(9,5.3);

	this.text.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,3.3,24,30.4);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033FF").s().p("AisguIkQAAQCJk0EziJQFMCDBxE6IkMAAQg6IIh6ASQjNinAklzg");
	this.shape.setTransform(44.5,49.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,98.5);


(lib.rainCom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.rain("synched",0);
	this.instance.setTransform(50.8,70,1,1,0,0,0,50.8,70);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:823,y:1346.3,alpha:0},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.6,140);


(lib.引导 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.元件2("synched",0);
	this.instance.setTransform(105,52.5,1,1,0,0,0,44.5,49.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[105.1,52.4,-5.5,62.8,-87.9,-16.9,-147.1,-97.8,-30.8,-143.7,-30.5,-143.8,-30.3,-143.9,157,-197.6,208.4,-178.4,528.3,-189.7,423.1,-63.5], orient:'auto'}},47).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60.5,3.2,89,98.5);


// stage content:



(lib.demo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.引导();
	this.instance.setTransform(177.1,299,1,1,0,0,0,105,52.5);

	this.instance_1 = new lib.demo();
	this.instance_1.setTransform(388,216.4,1,1,0,0,0,129,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(407.5,400.9,384.5,147.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;