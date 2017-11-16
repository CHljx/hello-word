(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 423,
	height: 705,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/b.png", id:"b"},
		{src:"images/b_hover.png", id:"b_hover"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/btnh.png", id:"btnh"},
		{src:"images/f.png", id:"f"},
		{src:"images/f_hover.png", id:"f_hover"},
		{src:"images/g.png", id:"g"},
		{src:"images/g_hover.png", id:"g_hover"},
		{src:"images/j.png", id:"j"},
		{src:"images/j_hover.png", id:"j_hover"},
		{src:"images/reginput.png", id:"reginput"},
		{src:"images/srenbg.png", id:"srenbg"},
		{src:"images/VuMwlYbjFdtAqAh_0.png", id:"VuMwlYbjFdtAqAh_0"},
		{src:"images/VuMwlYbjFdtAqAh_1.png", id:"VuMwlYbjFdtAqAh_1"},
		{src:"images/VuMwlYbjFdtAqAh_10.png", id:"VuMwlYbjFdtAqAh_10"},
		{src:"images/VuMwlYbjFdtAqAh_11.png", id:"VuMwlYbjFdtAqAh_11"},
		{src:"images/VuMwlYbjFdtAqAh_12.png", id:"VuMwlYbjFdtAqAh_12"},
		{src:"images/VuMwlYbjFdtAqAh_13.png", id:"VuMwlYbjFdtAqAh_13"},
		{src:"images/VuMwlYbjFdtAqAh_14.png", id:"VuMwlYbjFdtAqAh_14"},
		{src:"images/VuMwlYbjFdtAqAh_15.png", id:"VuMwlYbjFdtAqAh_15"},
		{src:"images/VuMwlYbjFdtAqAh_16.png", id:"VuMwlYbjFdtAqAh_16"},
		{src:"images/VuMwlYbjFdtAqAh_17.png", id:"VuMwlYbjFdtAqAh_17"},
		{src:"images/VuMwlYbjFdtAqAh_18.png", id:"VuMwlYbjFdtAqAh_18"},
		{src:"images/VuMwlYbjFdtAqAh_19.png", id:"VuMwlYbjFdtAqAh_19"},
		{src:"images/VuMwlYbjFdtAqAh_2.png", id:"VuMwlYbjFdtAqAh_2"},
		{src:"images/VuMwlYbjFdtAqAh_20.png", id:"VuMwlYbjFdtAqAh_20"},
		{src:"images/VuMwlYbjFdtAqAh_21.png", id:"VuMwlYbjFdtAqAh_21"},
		{src:"images/VuMwlYbjFdtAqAh_22.png", id:"VuMwlYbjFdtAqAh_22"},
		{src:"images/VuMwlYbjFdtAqAh_23.png", id:"VuMwlYbjFdtAqAh_23"},
		{src:"images/VuMwlYbjFdtAqAh_24.png", id:"VuMwlYbjFdtAqAh_24"},
		{src:"images/VuMwlYbjFdtAqAh_25.png", id:"VuMwlYbjFdtAqAh_25"},
		{src:"images/VuMwlYbjFdtAqAh_26.png", id:"VuMwlYbjFdtAqAh_26"},
		{src:"images/VuMwlYbjFdtAqAh_27.png", id:"VuMwlYbjFdtAqAh_27"},
		{src:"images/VuMwlYbjFdtAqAh_28.png", id:"VuMwlYbjFdtAqAh_28"},
		{src:"images/VuMwlYbjFdtAqAh_29.png", id:"VuMwlYbjFdtAqAh_29"},
		{src:"images/VuMwlYbjFdtAqAh_3.png", id:"VuMwlYbjFdtAqAh_3"},
		{src:"images/VuMwlYbjFdtAqAh_30.png", id:"VuMwlYbjFdtAqAh_30"},
		{src:"images/VuMwlYbjFdtAqAh_31.png", id:"VuMwlYbjFdtAqAh_31"},
		{src:"images/VuMwlYbjFdtAqAh_32.png", id:"VuMwlYbjFdtAqAh_32"},
		{src:"images/VuMwlYbjFdtAqAh_33.png", id:"VuMwlYbjFdtAqAh_33"},
		{src:"images/VuMwlYbjFdtAqAh_34.png", id:"VuMwlYbjFdtAqAh_34"},
		{src:"images/VuMwlYbjFdtAqAh_35.png", id:"VuMwlYbjFdtAqAh_35"},
		{src:"images/VuMwlYbjFdtAqAh_36.png", id:"VuMwlYbjFdtAqAh_36"},
		{src:"images/VuMwlYbjFdtAqAh_37.png", id:"VuMwlYbjFdtAqAh_37"},
		{src:"images/VuMwlYbjFdtAqAh_38.png", id:"VuMwlYbjFdtAqAh_38"},
		{src:"images/VuMwlYbjFdtAqAh_39.png", id:"VuMwlYbjFdtAqAh_39"},
		{src:"images/VuMwlYbjFdtAqAh_4.png", id:"VuMwlYbjFdtAqAh_4"},
		{src:"images/VuMwlYbjFdtAqAh_40.png", id:"VuMwlYbjFdtAqAh_40"},
		{src:"images/VuMwlYbjFdtAqAh_41.png", id:"VuMwlYbjFdtAqAh_41"},
		{src:"images/VuMwlYbjFdtAqAh_42.png", id:"VuMwlYbjFdtAqAh_42"},
		{src:"images/VuMwlYbjFdtAqAh_43.png", id:"VuMwlYbjFdtAqAh_43"},
		{src:"images/VuMwlYbjFdtAqAh_44.png", id:"VuMwlYbjFdtAqAh_44"},
		{src:"images/VuMwlYbjFdtAqAh_45.png", id:"VuMwlYbjFdtAqAh_45"},
		{src:"images/VuMwlYbjFdtAqAh_46.png", id:"VuMwlYbjFdtAqAh_46"},
		{src:"images/VuMwlYbjFdtAqAh_5.png", id:"VuMwlYbjFdtAqAh_5"},
		{src:"images/VuMwlYbjFdtAqAh_6.png", id:"VuMwlYbjFdtAqAh_6"},
		{src:"images/VuMwlYbjFdtAqAh_7.png", id:"VuMwlYbjFdtAqAh_7"},
		{src:"images/VuMwlYbjFdtAqAh_8.png", id:"VuMwlYbjFdtAqAh_8"},
		{src:"images/VuMwlYbjFdtAqAh_9.png", id:"VuMwlYbjFdtAqAh_9"},
		{src:"images/y.png", id:"y"},
		{src:"images/y_hover.png", id:"y_hover"}
	]
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



(lib.b = function() {
	this.initialize(img.b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.b_hover = function() {
	this.initialize(img.b_hover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,72);


(lib.btnh = function() {
	this.initialize(img.btnh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,72);


(lib.f = function() {
	this.initialize(img.f);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.f_hover = function() {
	this.initialize(img.f_hover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.g = function() {
	this.initialize(img.g);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.g_hover = function() {
	this.initialize(img.g_hover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.j = function() {
	this.initialize(img.j);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.j_hover = function() {
	this.initialize(img.j_hover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.reginput = function() {
	this.initialize(img.reginput);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,137);


(lib.srenbg = function() {
	this.initialize(img.srenbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,359);


(lib.VuMwlYbjFdtAqAh_0 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_1 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_10 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_11 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_12 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_13 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_14 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_15 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_16 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_17 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_18 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_19 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_2 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_20 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_21 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_22 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_23 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_24 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_25 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_26 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_27 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_28 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_29 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_3 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_30 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_31 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_32 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_33 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_34 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_35 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_36 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_37 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_38 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_39 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_4 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_40 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_41 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_42 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_43 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_43);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_44 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_45 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_46 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_46);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_5 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_6 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_7 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_8 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.VuMwlYbjFdtAqAh_9 = function() {
	this.initialize(img.VuMwlYbjFdtAqAh_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,196);


(lib.y = function() {
	this.initialize(img.y);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.y_hover = function() {
	this.initialize(img.y_hover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.srenbg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288,359);


(lib.btn_y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y();

	this.instance_1 = new lib.y_hover();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.btn_j = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.j();

	this.instance_1 = new lib.j_hover();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.btn_g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.g();

	this.instance_1 = new lib.g_hover();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.btn_f = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.f();

	this.instance_1 = new lib.f_hover();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.btn_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.b();

	this.instance_1 = new lib.b_hover();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.btn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327,72);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btnh();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327,72);


(lib.元件1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance_1 = new lib.VuMwlYbjFdtAqAh_0();
	this.instance_1.setTransform(0,250);

	this.instance_2 = new lib.VuMwlYbjFdtAqAh_1();
	this.instance_2.setTransform(0,250);

	this.instance_3 = new lib.VuMwlYbjFdtAqAh_2();
	this.instance_3.setTransform(0,250);

	this.instance_4 = new lib.VuMwlYbjFdtAqAh_3();
	this.instance_4.setTransform(0,250);

	this.instance_5 = new lib.VuMwlYbjFdtAqAh_4();
	this.instance_5.setTransform(0,250);

	this.instance_6 = new lib.VuMwlYbjFdtAqAh_5();
	this.instance_6.setTransform(0,250);

	this.instance_7 = new lib.VuMwlYbjFdtAqAh_6();
	this.instance_7.setTransform(0,250);

	this.instance_8 = new lib.VuMwlYbjFdtAqAh_7();
	this.instance_8.setTransform(0,250);

	this.instance_9 = new lib.VuMwlYbjFdtAqAh_8();
	this.instance_9.setTransform(0,250);

	this.instance_10 = new lib.VuMwlYbjFdtAqAh_9();
	this.instance_10.setTransform(0,250);

	this.instance_11 = new lib.VuMwlYbjFdtAqAh_10();
	this.instance_11.setTransform(0,250);

	this.instance_12 = new lib.VuMwlYbjFdtAqAh_11();
	this.instance_12.setTransform(0,250);

	this.instance_13 = new lib.VuMwlYbjFdtAqAh_12();
	this.instance_13.setTransform(0,250);

	this.instance_14 = new lib.VuMwlYbjFdtAqAh_13();
	this.instance_14.setTransform(0,250);

	this.instance_15 = new lib.VuMwlYbjFdtAqAh_14();
	this.instance_15.setTransform(0,250);

	this.instance_16 = new lib.VuMwlYbjFdtAqAh_15();
	this.instance_16.setTransform(0,250);

	this.instance_17 = new lib.VuMwlYbjFdtAqAh_16();
	this.instance_17.setTransform(0,250);

	this.instance_18 = new lib.VuMwlYbjFdtAqAh_17();
	this.instance_18.setTransform(0,250);

	this.instance_19 = new lib.VuMwlYbjFdtAqAh_18();
	this.instance_19.setTransform(0,250);

	this.instance_20 = new lib.VuMwlYbjFdtAqAh_19();
	this.instance_20.setTransform(0,250);

	this.instance_21 = new lib.VuMwlYbjFdtAqAh_20();
	this.instance_21.setTransform(0,250);

	this.instance_22 = new lib.VuMwlYbjFdtAqAh_21();
	this.instance_22.setTransform(0,250);

	this.instance_23 = new lib.VuMwlYbjFdtAqAh_22();
	this.instance_23.setTransform(0,250);

	this.instance_24 = new lib.VuMwlYbjFdtAqAh_23();
	this.instance_24.setTransform(0,250);

	this.instance_25 = new lib.VuMwlYbjFdtAqAh_24();
	this.instance_25.setTransform(0,250);

	this.instance_26 = new lib.VuMwlYbjFdtAqAh_25();
	this.instance_26.setTransform(0,250);

	this.instance_27 = new lib.VuMwlYbjFdtAqAh_26();
	this.instance_27.setTransform(0,250);

	this.instance_28 = new lib.VuMwlYbjFdtAqAh_27();
	this.instance_28.setTransform(0,250);

	this.instance_29 = new lib.VuMwlYbjFdtAqAh_28();
	this.instance_29.setTransform(0,250);

	this.instance_30 = new lib.VuMwlYbjFdtAqAh_29();
	this.instance_30.setTransform(0,250);

	this.instance_31 = new lib.VuMwlYbjFdtAqAh_30();
	this.instance_31.setTransform(0,250);

	this.instance_32 = new lib.VuMwlYbjFdtAqAh_31();
	this.instance_32.setTransform(0,250);

	this.instance_33 = new lib.VuMwlYbjFdtAqAh_32();
	this.instance_33.setTransform(0,250);

	this.instance_34 = new lib.VuMwlYbjFdtAqAh_33();
	this.instance_34.setTransform(0,250);

	this.instance_35 = new lib.VuMwlYbjFdtAqAh_34();
	this.instance_35.setTransform(0,250);

	this.instance_36 = new lib.VuMwlYbjFdtAqAh_35();
	this.instance_36.setTransform(0,250);

	this.instance_37 = new lib.VuMwlYbjFdtAqAh_36();
	this.instance_37.setTransform(0,250);

	this.instance_38 = new lib.VuMwlYbjFdtAqAh_37();
	this.instance_38.setTransform(0,250);

	this.instance_39 = new lib.VuMwlYbjFdtAqAh_38();
	this.instance_39.setTransform(0,250);

	this.instance_40 = new lib.VuMwlYbjFdtAqAh_39();
	this.instance_40.setTransform(0,250);

	this.instance_41 = new lib.VuMwlYbjFdtAqAh_40();
	this.instance_41.setTransform(0,250);

	this.instance_42 = new lib.VuMwlYbjFdtAqAh_41();
	this.instance_42.setTransform(0,250);

	this.instance_43 = new lib.VuMwlYbjFdtAqAh_42();
	this.instance_43.setTransform(0,250);

	this.instance_44 = new lib.VuMwlYbjFdtAqAh_43();
	this.instance_44.setTransform(0,250);

	this.instance_45 = new lib.VuMwlYbjFdtAqAh_44();
	this.instance_45.setTransform(0,250);

	this.instance_46 = new lib.VuMwlYbjFdtAqAh_45();
	this.instance_46.setTransform(0,250);

	this.instance_47 = new lib.VuMwlYbjFdtAqAh_46();
	this.instance_47.setTransform(0,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_23}]},3).to({state:[{t:this.instance_24}]},3).to({state:[{t:this.instance_25}]},3).to({state:[{t:this.instance_26}]},3).to({state:[{t:this.instance_27}]},3).to({state:[{t:this.instance_28}]},3).to({state:[{t:this.instance_29}]},3).to({state:[{t:this.instance_30}]},3).to({state:[{t:this.instance_31}]},3).to({state:[{t:this.instance_32}]},3).to({state:[{t:this.instance_33}]},3).to({state:[{t:this.instance_34}]},3).to({state:[{t:this.instance_35}]},3).to({state:[{t:this.instance_36}]},3).to({state:[{t:this.instance_37}]},3).to({state:[{t:this.instance_38}]},3).to({state:[{t:this.instance_39}]},3).to({state:[{t:this.instance_40}]},3).to({state:[{t:this.instance_41}]},3).to({state:[{t:this.instance_42}]},3).to({state:[{t:this.instance_43}]},3).to({state:[{t:this.instance_44}]},3).to({state:[{t:this.instance_45}]},3).to({state:[{t:this.instance_46}]},3).to({state:[{t:this.instance_47}]},3).wait(3));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EghCA3EMAAAhuIMBCFAAAMAAABuIg");
	this.shape.setTransform(211.5,352.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(141));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,423,705);


(lib.regbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件19();
	this.instance.setTransform(103,35,1,1,0,0,0,103,35);

	this.instance_1 = new lib.元件10();
	this.instance_1.setTransform(163.5,36,1,1,0,0,0,163.5,36);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A5iFoIAArPMAzEAAAIAALPg");
	this.shape.setTransform(163.5,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327,72);


(lib.reg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _self=this;
										_self.uname.width=this.psw.width=this.rpsw.width=150;
										_self.uname.height=this.psw.height=this.rpsw.height=20;
		
										if(!window.showTj){
											return;
										}
										window.register=_self;
										window.showTj();
										stage.addEventListener("click",function(){
											$("input").blur();
										});
										this.rbtn.addEventListener("click", function(){
											$("#play").click();
										});
										this.btn_f&&this.btn_f.addEventListener("click",function(){
											setInterClick("f");
										});
										this.btn_t&&this.btn_t.addEventListener("click",function(){
											setInterClick("t");
										});
										this.btn_y&&this.btn_y.addEventListener("click",function(){
											setInterClick("y");
										});
										this.btn_g&&this.btn_g.addEventListener("click",function(){
											setInterClick("g");
										});
										this.btn_gamebase&&this.btn_gamebase.addEventListener("click",function(){
											setInterClick("gamebase");
										});
										this.btn_gamer&&this.btn_gamer.addEventListener("click",function(){
											setInterClick("gamer");
										});
				
										for(var index=0;index<window.aHideInter.length;index++){
											_self["btn_"+window.aHideInter[index]].visible=false;
										}
										var oOffset={
												x:0,
												y:0
										}
										function setOffset(oLib,oOffset){
												if(oLib.parent){
													setOffset(oLib.parent,oOffset);
												}
												oOffset.x+=(oLib.x-oLib.regX);
												oOffset.y+=(oLib.y-oLib.regY);
										};
										setOffset(_self,oOffset)
										
										
										function setInput(libInput,id){
											var offsetX=oOffset.x+(libInput.x-libInput.regX);
											var offsetY=oOffset.y+(libInput.y-libInput.regY);
											var oCssObj={
												x:offsetX-5,
												y:offsetY,
												width:libInput.width+5,
												height:libInput.height,
												color:(_self.unameColor&&_self.unameColor.color)||"#000"
											};
											setInputCss(id,oCssObj);
										}
										function setNotice(libInput,id){
											var offsetX=oOffset.x+(libInput.x-libInput.regX);
											var offsetY=oOffset.y+(libInput.y-libInput.regY);
											var oCssObj={
												x:offsetX,
												y:offsetY,
												color:libInput.color,
												font:libInput.font
											};
											setNoticeCss(id,oCssObj);
										}
										function setCheck(libInput,id){
											var offsetX=oOffset.x+(libInput.x-libInput.regX);
											var offsetY=oOffset.y+(libInput.y-libInput.regY);
											var input=document.getElementById(id);
											input.style.left=(offsetX)+"px";
											input.style.top=(offsetY-4)+"px";
											input.style.display="block";
											var text=document.getElementById("agreeText");
											text.style.color=libInput.color;
											text.style.font=libInput.font;
										}
										setInput(this.uname,"uname");
										setInput(this.psw,"password");
										setInput(this.rpsw,"confirmPassword");
										setNotice(this.unameTip,"unameNotice");
										setNotice(this.pswTip,"passwordNotice");
										setNotice(this.rpswTip,"confirmPasswordNotice");
										setCheck(this.agreetext,"agree");
										
										_self.unameColor.visible=false;
										_self.agreetext.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 4
	this.uname = new cjs.Text("", "12px 'Times New Roman'", "#FFFFFF");
	this.uname.name = "uname";
	this.uname.lineHeight = 15;
	this.uname.lineWidth = 146;
	this.uname.setTransform(95.9,11);

	this.btn_gamer = new lib.btn_b();
	this.btn_gamer.setTransform(179.9,287.8,0.8,0.8,0,0,0,25.1,25.2);
	new cjs.ButtonHelper(this.btn_gamer, 0, 1, 2, false, new lib.btn_b(), 3);

	this.btn_gamebase = new lib.btn_j();
	this.btn_gamebase.setTransform(224.9,287.8,0.8,0.8,0,0,0,25.1,25.2);
	new cjs.ButtonHelper(this.btn_gamebase, 0, 1, 2, false, new lib.btn_j(), 3);

	this.btn_g = new lib.btn_g();
	this.btn_g.setTransform(134.9,287.8,0.8,0.8,0,0,0,25.1,25.2);
	new cjs.ButtonHelper(this.btn_g, 0, 1, 2, false, new lib.btn_g(), 3);

	this.btn_y = new lib.btn_y();
	this.btn_y.setTransform(89.9,287.8,0.8,0.8,0,0,0,25.1,25.2);
	new cjs.ButtonHelper(this.btn_y, 0, 1, 2, false, new lib.btn_y(), 3);

	this.btn_f = new lib.btn_f();
	this.btn_f.setTransform(44.9,287.8,0.8,0.8,0,0,0,25.1,25.2);
	new cjs.ButtonHelper(this.btn_f, 0, 1, 2, false, new lib.btn_f(), 3);

	this.unameColor = new cjs.Text("输入文本框颜色", "12px 'SimSun'", "#2A292D");
	this.unameColor.name = "unameColor";
	this.unameColor.lineHeight = 14;
	this.unameColor.lineWidth = 91;
	this.unameColor.setTransform(94.1,-11.8);

	this.rpsw = new cjs.Text("", "12px 'Times New Roman'", "#FFFFFF");
	this.rpsw.name = "rpsw";
	this.rpsw.lineHeight = 15;
	this.rpsw.lineWidth = 146;
	this.rpsw.setTransform(95.9,115.8);

	this.psw = new cjs.Text("", "12px 'Times New Roman'", "#FFFFFF");
	this.psw.name = "psw";
	this.psw.lineHeight = 15;
	this.psw.lineWidth = 146;
	this.psw.setTransform(95.9,63.8);

	this.agreetext = new cjs.Text(" □      我已仔細閱讀並願意接受用戶協議", "12px 'Times New Roman'", "#FFFFFF");
	this.agreetext.name = "agreetext";
	this.agreetext.lineHeight = 15;
	this.agreetext.lineWidth = 209;
	this.agreetext.setTransform(29.6,163.6);

	this.rpswTip = new cjs.Text("", "12px 'Times New Roman'", "#FFFFFF");
	this.rpswTip.name = "rpswTip";
	this.rpswTip.lineHeight = 15;
	this.rpswTip.lineWidth = 277;
	this.rpswTip.setTransform(95.8,142.5);

	this.pswTip = new cjs.Text("", "12px 'Times New Roman'", "#FFFFFF");
	this.pswTip.name = "pswTip";
	this.pswTip.lineHeight = 15;
	this.pswTip.lineWidth = 277;
	this.pswTip.setTransform(95.8,90.6);

	this.unameTip = new cjs.Text("", "12px 'Times New Roman'", "#FFFFFF");
	this.unameTip.name = "unameTip";
	this.unameTip.lineHeight = 15;
	this.unameTip.lineWidth = 277;
	this.unameTip.setTransform(95.8,37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unameTip},{t:this.pswTip},{t:this.rpswTip},{t:this.agreetext},{t:this.psw},{t:this.rpsw},{t:this.unameColor},{t:this.btn_f},{t:this.btn_y},{t:this.btn_g},{t:this.btn_gamebase},{t:this.btn_gamer},{t:this.uname}]}).wait(1));

	// btn
	this.rbtn = new lib.regbtn();
	this.rbtn.setTransform(75,226.7,1,1,0,0,0,104,39);
	new cjs.ButtonHelper(this.rbtn, 0, 1, 2, false, new lib.regbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rbtn).wait(1));

	// 图层 3
	this.instance = new lib.reginput();
	this.instance.setTransform(18,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-13.8,403.8,321.5);


(lib.regs_mcs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 1
	this.instance = new lib.reg();
	this.instance.setTransform(222,167.4,1,1,0,0,0,149,186);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 3
	this.instance_1 = new lib.元件1();
	this.instance_1.setTransform(293,202,1,1,0,0,0,231,256);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44,-54,403.8,359);


// stage content:
(lib.a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		stage.canvas.addEventListener("click",function(){this.gotoAndStop(1);}.bind(this));
		
		/*createjs.Sound.on("fileload", handleLoad);  
		createjs.Sound.registerSound("sounds/bgm.mp3", "soundID");  
		function handleLoad(event) {  
		    createjs.Sound.play("soundID");  
		}*/
	}
	this.frame_1 = function() {
		this.stop();
		//createjs.Sound.stop();
		//createjs.Sound.removeAllSounds();
		createjs.Sound.volume = 0.3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// reg
	this.instance = new lib.regs_mcs();
	this.instance.setTransform(179,371,1,1,0,0,0,178.9,153.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// 图层 1
	this.instance_1 = new lib.元件1_1();
	this.instance_1.setTransform(211.5,98,1,1,0,0,0,211.5,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EghCA3EMAAAhuIMBCFAAAMAAABuIg");
	this.shape.setTransform(211.5,352.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(211.5,352.5,423,705);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;