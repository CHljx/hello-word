(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 750,
	height: 1200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/b_1.png", id:"b_1"},
		{src:"images/b_hover.png", id:"b_hover"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/btn1.png", id:"btn1"},
		{src:"images/btn1h.png", id:"btn1h"},
		{src:"images/btn2.png", id:"btn2"},
		{src:"images/btn2h.png", id:"btn2h"},
		{src:"images/btnh.png", id:"btnh"},
		{src:"images/btns_01.png", id:"btns_01"},
		{src:"images/btns_02.png", id:"btns_02"},
		{src:"images/btns_03.png", id:"btns_03"},
		{src:"images/btnsh_01.png", id:"btnsh_01"},
		{src:"images/btnsh_02.png", id:"btnsh_02"},
		{src:"images/btnsh_03.png", id:"btnsh_03"},
		{src:"images/f.png", id:"f"},
		{src:"images/f_hover.png", id:"f_hover"},
		{src:"images/g.png", id:"g"},
		{src:"images/g_hover.png", id:"g_hover"},
		{src:"images/j.png", id:"j"},
		{src:"images/j_hover.png", id:"j_hover"},
		{src:"images/reginput.png", id:"reginput"},
		{src:"images/ren1.png", id:"ren1"},
		{src:"images/ren1t.png", id:"ren1t"},
		{src:"images/ren2.png", id:"ren2"},
		{src:"images/ren2t.png", id:"ren2t"},
		{src:"images/ren3.png", id:"ren3"},
		{src:"images/ren3t.png", id:"ren3t"},
		{src:"images/sren1.png", id:"sren1"},
		{src:"images/sren2.png", id:"sren2"},
		{src:"images/sren2h.png", id:"sren2h"},
		{src:"images/sren3.png", id:"sren3"},
		{src:"images/sren3h.png", id:"sren3h"},
		{src:"images/sren4.png", id:"sren4"},
		{src:"images/sren4h.png", id:"sren4h"},
		{src:"images/srenbg.png", id:"srenbg"},
		{src:"images/srenbg2.png", id:"srenbg2"},
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



(lib.b_1 = function() {
	this.initialize(img.b_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.b_hover = function() {
	this.initialize(img.b_hover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,700);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,72);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,72);


(lib.btn1h = function() {
	this.initialize(img.btn1h);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,72);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,41);


(lib.btn2h = function() {
	this.initialize(img.btn2h);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,41);


(lib.btnh = function() {
	this.initialize(img.btnh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,72);


(lib.btns_01 = function() {
	this.initialize(img.btns_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.btns_02 = function() {
	this.initialize(img.btns_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.btns_03 = function() {
	this.initialize(img.btns_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.btnsh_01 = function() {
	this.initialize(img.btnsh_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.btnsh_02 = function() {
	this.initialize(img.btnsh_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.btnsh_03 = function() {
	this.initialize(img.btnsh_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


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


(lib.ren1 = function() {
	this.initialize(img.ren1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,727,700);


(lib.ren1t = function() {
	this.initialize(img.ren1t);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,483);


(lib.ren2 = function() {
	this.initialize(img.ren2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,671,700);


(lib.ren2t = function() {
	this.initialize(img.ren2t);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,411);


(lib.ren3 = function() {
	this.initialize(img.ren3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,981,700);


(lib.ren3t = function() {
	this.initialize(img.ren3t);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,458);


(lib.sren1 = function() {
	this.initialize(img.sren1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,774,550);


(lib.sren2 = function() {
	this.initialize(img.sren2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,672,490);


(lib.sren2h = function() {
	this.initialize(img.sren2h);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,245);


(lib.sren3 = function() {
	this.initialize(img.sren3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,654,562);


(lib.sren3h = function() {
	this.initialize(img.sren3h);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,281);


(lib.sren4 = function() {
	this.initialize(img.sren4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,981,478);


(lib.sren4h = function() {
	this.initialize(img.sren4h);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,239);


(lib.srenbg = function() {
	this.initialize(img.srenbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,359);


(lib.srenbg2 = function() {
	this.initialize(img.srenbg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1069,330);


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
	this.instance = new lib.b_1();

	this.instance_1 = new lib.b_hover();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.元件47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Au0XlMAAAgvJIdpAAMAAAAvJg");
	this.shape.setTransform(95,151);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sren2h();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224,245);


(lib.元件42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sren3h();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,218,281);


(lib.元件40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ren3t();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,458);


(lib.元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ren2t();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,411);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ren1t();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,483);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btnsh_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btnsh_02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btnsh_01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.元件31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btns_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btns_02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btns_01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ren1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,727,700);


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ren2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,671,700);


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ren3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,981,700);


(lib.元件25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.sren2, null, new cjs.Matrix2D(1,0,0,1,-560,-367.5)).s().p("AxfTIMAAAgmQMAi/AAAMAAAAmQg");
	this.shape.setTransform(112,122.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15).to({_off:false},0).wait(3));

	// 图层 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.sren2, null, new cjs.Matrix2D(1,0,0,1,-336,-367.5)).s().p("AxfTIMAAAgmQMAi/AAAMAAAAmQg");
	this.shape_1.setTransform(112,122.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(12).to({_off:false},0).to({_off:true},3).wait(3));

	// 图层 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.sren2, null, new cjs.Matrix2D(1,0,0,1,-112,-367.5)).s().p("AxfTIMAAAgmQMAi/AAAMAAAAmQg");
	this.shape_2.setTransform(112,122.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(9).to({_off:false},0).to({_off:true},3).wait(6));

	// 图层 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.sren2, null, new cjs.Matrix2D(1,0,0,1,-560,-122.5)).s().p("AxfTIMAAAgmQMAi/AAAMAAAAmQg");
	this.shape_3.setTransform(112,122.5);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(6).to({_off:false},0).to({_off:true},3).wait(9));

	// 图层 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.sren2, null, new cjs.Matrix2D(1,0,0,1,-336,-122.5)).s().p("AxfTIMAAAgmQMAi/AAAMAAAAmQg");
	this.shape_4.setTransform(112,122.5);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3).to({_off:false},0).to({_off:true},3).wait(12));

	// 图层 7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.sren2, null, new cjs.Matrix2D(1,0,0,1,-112,-122.5)).s().p("AxfTIMAAAgmQMAi/AAAMAAAAmQg");
	this.shape_5.setTransform(112,122.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224,245);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.sren4, null, new cjs.Matrix2D(1,0,0,1,-817.5,-358.5)).s().p("A5iSrMAAAglVMAzEAAAMAAAAlVg");
	this.shape.setTransform(163.5,119.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15).to({_off:false},0).wait(3));

	// 图层 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.sren4, null, new cjs.Matrix2D(1,0,0,1,-490.5,-358.5)).s().p("A5iSrMAAAglVMAzEAAAMAAAAlVg");
	this.shape_1.setTransform(163.5,119.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(12).to({_off:false},0).to({_off:true},3).wait(3));

	// 图层 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.sren4, null, new cjs.Matrix2D(1,0,0,1,-163.5,-358.5)).s().p("A5iSrMAAAglVMAzEAAAMAAAAlVg");
	this.shape_2.setTransform(163.5,119.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(9).to({_off:false},0).to({_off:true},3).wait(6));

	// 图层 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.sren4, null, new cjs.Matrix2D(1,0,0,1,-817.5,-119.5)).s().p("A5iSrMAAAglVMAzEAAAMAAAAlVg");
	this.shape_3.setTransform(163.5,119.5);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(6).to({_off:false},0).to({_off:true},3).wait(9));

	// 图层 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.sren4, null, new cjs.Matrix2D(1,0,0,1,-490.5,-119.5)).s().p("A5iSrMAAAglVMAzEAAAMAAAAlVg");
	this.shape_4.setTransform(163.5,119.5);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3).to({_off:false},0).to({_off:true},3).wait(12));

	// 图层 7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.sren4, null, new cjs.Matrix2D(1,0,0,1,-163.5,-119.5)).s().p("A5iSrMAAAglVMAzEAAAMAAAAlVg");
	this.shape_5.setTransform(163.5,119.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327,239);


(lib.元件23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.sren3, null, new cjs.Matrix2D(1,0,0,1,-545,-421.5)).s().p("AxBV8MAAAgr4MAiCAAAMAAAAr4g");
	this.shape.setTransform(109,140.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15).to({_off:false},0).wait(3));

	// 图层 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.sren3, null, new cjs.Matrix2D(1,0,0,1,-327,-421.5)).s().p("AxBV8MAAAgr4MAiCAAAMAAAAr4g");
	this.shape_1.setTransform(109,140.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(12).to({_off:false},0).to({_off:true},3).wait(3));

	// 图层 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.sren3, null, new cjs.Matrix2D(1,0,0,1,-109,-421.5)).s().p("AxBV8MAAAgr4MAiCAAAMAAAAr4g");
	this.shape_2.setTransform(109,140.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(9).to({_off:false},0).to({_off:true},3).wait(6));

	// 图层 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.sren3, null, new cjs.Matrix2D(1,0,0,1,-545,-140.5)).s().p("AxBV8MAAAgr4MAiCAAAMAAAAr4g");
	this.shape_3.setTransform(109,140.5);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(6).to({_off:false},0).to({_off:true},3).wait(9));

	// 图层 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.sren3, null, new cjs.Matrix2D(1,0,0,1,-327,-140.5)).s().p("AxBV8MAAAgr4MAiCAAAMAAAAr4g");
	this.shape_4.setTransform(109,140.5);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3).to({_off:false},0).to({_off:true},3).wait(12));

	// 图层 7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.sren3, null, new cjs.Matrix2D(1,0,0,1,-109,-140.5)).s().p("AxBV8MAAAgr4MAiCAAAMAAAAr4g");
	this.shape_5.setTransform(109,140.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,218,281);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sren4h();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327,239);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.srenbg2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1069,330);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.btn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327,72);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn2h();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,41);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,41);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.sren1, null, new cjs.Matrix2D(1,0,0,1,-645,-412.5)).s().p("A0JVfMAAAgq9MAoTAAAMAAAAq9g");
	this.shape.setTransform(129,137.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15).to({_off:false},0).wait(3));

	// 图层 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.sren1, null, new cjs.Matrix2D(1,0,0,1,-387,-412.5)).s().p("A0JVfMAAAgq9MAoTAAAMAAAAq9g");
	this.shape_1.setTransform(129,137.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(12).to({_off:false},0).to({_off:true},3).wait(3));

	// 图层 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.sren1, null, new cjs.Matrix2D(1,0,0,1,-129,-412.5)).s().p("A0JVfMAAAgq9MAoTAAAMAAAAq9g");
	this.shape_2.setTransform(129,137.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(9).to({_off:false},0).to({_off:true},3).wait(6));

	// 图层 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.sren1, null, new cjs.Matrix2D(1,0,0,1,-645,-137.5)).s().p("A0JVfMAAAgq9MAoTAAAMAAAAq9g");
	this.shape_3.setTransform(129,137.5);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(6).to({_off:false},0).to({_off:true},3).wait(9));

	// 图层 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.sren1, null, new cjs.Matrix2D(1,0,0,1,-387,-137.5)).s().p("A0JVfMAAAgq9MAoTAAAMAAAAq9g");
	this.shape_4.setTransform(129,137.5);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3).to({_off:false},0).to({_off:true},3).wait(12));

	// 图层 7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.sren1, null, new cjs.Matrix2D(1,0,0,1,-129,-137.5)).s().p("A0JVfMAAAgq9MAoTAAAMAAAAq9g");
	this.shape_5.setTransform(129,137.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258,275);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn1h();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327,72);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327,72);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.srenbg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288,359);


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
	this.instance_1 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1400,700);


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
										_self.uname.width=this.psw.width=this.rpsw.width=300;
										_self.uname.height=this.psw.height=this.rpsw.height=40;
		
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
	this.uname.lineWidth = 296;
	this.uname.setTransform(74.9,-209);

	this.btn_gamer = new lib.btn_b();
	this.btn_gamer.setTransform(246.6,348,1.6,1.6,0,0,0,25.1,25.2);
	new cjs.ButtonHelper(this.btn_gamer, 0, 1, 2, false, new lib.btn_b(), 3);

	this.btn_gamebase = new lib.btn_j();
	this.btn_gamebase.setTransform(336.6,348,1.6,1.6,0,0,0,25.1,25.2);
	new cjs.ButtonHelper(this.btn_gamebase, 0, 1, 2, false, new lib.btn_j(), 3);

	this.btn_g = new lib.btn_g();
	this.btn_g.setTransform(156.6,348,1.6,1.6,0,0,0,25.1,25.2);
	new cjs.ButtonHelper(this.btn_g, 0, 1, 2, false, new lib.btn_g(), 3);

	this.btn_y = new lib.btn_y();
	this.btn_y.setTransform(66.6,348,1.6,1.6,0,0,0,25.1,25.2);
	new cjs.ButtonHelper(this.btn_y, 0, 1, 2, false, new lib.btn_y(), 3);

	this.btn_f = new lib.btn_f();
	this.btn_f.setTransform(-23.4,348,1.6,1.6,0,0,0,25.1,25.2);
	new cjs.ButtonHelper(this.btn_f, 0, 1, 2, false, new lib.btn_f(), 3);

	this.unameColor = new cjs.Text("输入文本框颜色", "12px 'SimSun'", "#2A292D");
	this.unameColor.name = "unameColor";
	this.unameColor.lineHeight = 14;
	this.unameColor.lineWidth = 91;
	this.unameColor.setTransform(73.2,-231.8);

	this.rpsw = new cjs.Text("", "12px 'Times New Roman'", "#FFFFFF");
	this.rpsw.name = "rpsw";
	this.rpsw.lineHeight = 15;
	this.rpsw.lineWidth = 146;
	this.rpsw.setTransform(74.9,2.4);

	this.psw = new cjs.Text("", "12px 'Times New Roman'", "#FFFFFF");
	this.psw.name = "psw";
	this.psw.lineHeight = 15;
	this.psw.lineWidth = 146;
	this.psw.setTransform(74.9,-103.7);

	this.agreetext = new cjs.Text(" □      我已仔細閱讀並願意接受用戶協議", "25px 'Times New Roman'", "#FFFFFF");
	this.agreetext.name = "agreetext";
	this.agreetext.lineHeight = 30;
	this.agreetext.lineWidth = 443;
	this.agreetext.setTransform(-83.8,106.7);

	this.rpswTip = new cjs.Text("", "12px 'Times New Roman'", "#FFFFFF");
	this.rpswTip.name = "rpswTip";
	this.rpswTip.lineHeight = 15;
	this.rpswTip.lineWidth = 396;
	this.rpswTip.setTransform(74.9,50.6);

	this.pswTip = new cjs.Text("", "12px 'Times New Roman'", "#FFFFFF");
	this.pswTip.name = "pswTip";
	this.pswTip.lineHeight = 15;
	this.pswTip.lineWidth = 396;
	this.pswTip.setTransform(74.9,-50.5);

	this.unameTip = new cjs.Text("", "12px 'Times New Roman'", "#FFFFFF");
	this.unameTip.name = "unameTip";
	this.unameTip.lineHeight = 15;
	this.unameTip.lineWidth = 396;
	this.unameTip.setTransform(74.9,-157.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unameTip},{t:this.pswTip},{t:this.rpswTip},{t:this.agreetext},{t:this.psw},{t:this.rpsw},{t:this.unameColor},{t:this.btn_f},{t:this.btn_y},{t:this.btn_g},{t:this.btn_gamebase},{t:this.btn_gamer},{t:this.uname}]}).wait(1));

	// btn
	this.rbtn = new lib.regbtn();
	this.rbtn.setTransform(36.9,225.7,2,2,0,0,0,104,39);
	new cjs.ButtonHelper(this.rbtn, 0, 1, 2, false, new lib.regbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rbtn).wait(1));

	// 图层 3
	this.instance = new lib.reginput();
	this.instance.setTransform(-77,-221,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.1,-233.8,654,621.5);


(lib.元件46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件31();
	this.instance.setTransform(53.5,11.5,1,1,0,0,0,53.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.元件45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件30();
	this.instance.setTransform(53.5,11.5,1,1,0,0,0,53.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.元件44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件29();
	this.instance.setTransform(53.5,11.5,1,1,0,0,0,53.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.元件41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{p1:0,p2:70,p3:140});

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		this.b1.addEventListener("mouseover",function(){self.gotoAndPlay("p1");}).bind(this);
		this.b2.addEventListener("mouseover",function(){self.gotoAndPlay("p2");}).bind(this);
		this.b3.addEventListener("mouseover",function(){self.gotoAndPlay("p3");}).bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(210));

	// btn
	this.b3 = new lib.元件47();
	this.b3.setTransform(1237,501,0.947,1,0,0,0,95,151);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.元件47(), 3);

	this.b2 = new lib.元件47();
	this.b2.setTransform(988.5,501,1.479,1,0,0,0,95,151);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.元件47(), 3);

	this.b1 = new lib.元件47();
	this.b1.setTransform(744,501,1,1,0,0,0,95,151);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.元件47(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3}]}).wait(210));

	// sren3h
	this.instance = new lib.元件25();
	this.instance.setTransform(1231,493.5,1,1,0,0,0,112,122.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(51).to({alpha:0},9,cjs.Ease.get(-1)).wait(1));

	// sren2h
	this.instance_1 = new lib.元件24();
	this.instance_1.setTransform(1003.3,505.5,1,1,0,0,0,163.5,119.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(51).to({alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(70));

	// sren1h
	this.instance_2 = new lib.元件23();
	this.instance_2.setTransform(754,475.5,1,1,0,0,0,109,140.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},9,cjs.Ease.get(1)).wait(51).to({alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(140));

	// sren3
	this.instance_3 = new lib.元件43();
	this.instance_3.setTransform(1231,493.5,1,1,0,0,0,112,122.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140).to({alpha:0},9,cjs.Ease.get(-1)).wait(51).to({alpha:1},9,cjs.Ease.get(1)).wait(1));

	// sren1
	this.instance_4 = new lib.元件22();
	this.instance_4.setTransform(1003.3,505.5,1,1,0,0,0,163.5,119.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({alpha:0},9,cjs.Ease.get(-1)).wait(51).to({alpha:1},9,cjs.Ease.get(1)).wait(71));

	// sren2
	this.instance_5 = new lib.元件42();
	this.instance_5.setTransform(754,475.5,1,1,0,0,0,109,140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:0},9,cjs.Ease.get(-1)).wait(51).to({alpha:1},9,cjs.Ease.get(1)).wait(141));

	// srensbg
	this.instance_6 = new lib.元件21();
	this.instance_6.setTransform(865.5,522,1,1,0,0,0,534.5,165);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(210));

	// rt3
	this.instance_7 = new lib.元件40();
	this.instance_7.setTransform(1152.8,-194.9,1,1,0,0,0,21.5,229);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(149).to({_off:false},0).to({y:-114.9,alpha:1},15,cjs.Ease.get(1)).wait(36).to({alpha:0},9,cjs.Ease.get(1)).wait(1));

	// rt2
	this.instance_8 = new lib.元件39();
	this.instance_8.setTransform(1164.3,-217.4,1,1,0,0,0,21,205.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(79).to({_off:false},0).to({y:-137.4,alpha:1},15,cjs.Ease.get(1)).wait(36).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(70));

	// rt1
	this.instance_9 = new lib.元件38();
	this.instance_9.setTransform(1157.3,-191.4,1,1,0,0,0,21,241.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({y:-111.4,alpha:1},15,cjs.Ease.get(1)).wait(36).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(140));

	// ren3
	this.instance_10 = new lib.元件28();
	this.instance_10.setTransform(756.7,-99.9,1,1,0,0,0,363.5,350);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(140).to({_off:false},0).to({x:996.7,alpha:1},12,cjs.Ease.get(1)).to({x:976.7},4,cjs.Ease.get(1)).wait(44).to({alpha:0},9,cjs.Ease.get(1)).wait(1));

	// ren2
	this.instance_11 = new lib.元件27();
	this.instance_11.setTransform(728.7,-99.9,1,1,0,0,0,335.5,350);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(70).to({_off:false},0).to({x:968.7,alpha:1},12,cjs.Ease.get(1)).to({x:948.7},4,cjs.Ease.get(1)).wait(44).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(70));

	// ren1
	this.instance_12 = new lib.元件26();
	this.instance_12.setTransform(883.7,-99.9,1,1,0,0,0,490.5,350);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:1123.7,alpha:1},12,cjs.Ease.get(1)).to({x:1103.7},4,cjs.Ease.get(1)).wait(44).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(331,-449.9,1069,1136.9);


(lib.元件37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件46();
	this.instance.setTransform(53.5,11.5,1,1,0,0,0,53.5,11.5);

	this.instance_1 = new lib.元件34();
	this.instance_1.setTransform(53.5,11.5,1,1,0,0,0,53.5,11.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoWBzIAAjlIQtAAIAADlg");
	this.shape.setTransform(53.5,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.元件36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件45();
	this.instance.setTransform(53.5,11.5,1,1,0,0,0,53.5,11.5);

	this.instance_1 = new lib.元件33();
	this.instance_1.setTransform(53.5,11.5,1,1,0,0,0,53.5,11.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoWBzIAAjlIQtAAIAADlg");
	this.shape.setTransform(53.5,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.元件35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件44();
	this.instance.setTransform(53.5,11.5,1,1,0,0,0,53.5,11.5);

	this.instance_1 = new lib.元件32();
	this.instance_1.setTransform(53.5,11.5,1,1,0,0,0,53.5,11.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoWBzIAAjlIQtAAIAADlg");
	this.shape.setTransform(53.5,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件17();
	this.instance.setTransform(35,20.5,1,1,0,0,0,35,20.5);

	this.instance_1 = new lib.元件18();
	this.instance_1.setTransform(35,20.5,1,1,0,0,0,35,20.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AldDNIAAmZIK7AAIAAGZg");
	this.shape.setTransform(35,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,41);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件12();
	this.instance.setTransform(163.5,36,1,1,0,0,0,163.5,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327,72);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件16();
	this.instance.setTransform(163.5,36,1,1,0,0,0,163.5,36);

	this.instance_1 = new lib.元件13();
	this.instance_1.setTransform(163.5,36,1,1,0,0,0,163.5,36);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A5iFoIAArPMAzEAAAIAALPg");
	this.shape.setTransform(163.5,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327,72);


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
	this.instance_1.setTransform(398.2,202,2,2,0,0,0,231,256);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.1,-310,654,718);


// stage content:
(lib.b = function(mode,startPosition,loop) {
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
	this.instance.setTransform(327.2,678.7,1,1,0,0,0,178.9,153.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// sren1
	this.instance_1 = new lib.元件20();
	this.instance_1.setTransform(573.1,576.3,1,1,0,0,180,35,20.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.元件20(), 3);

	this.instance_2 = new lib.元件20();
	this.instance_2.setTransform(151.1,576.3,1,1,0,0,0,35,20.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.元件20(), 3);

	this.instance_3 = new lib.元件14();
	this.instance_3.setTransform(362.3,723.5,1,1,0,0,0,163.5,36);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.元件14(), 3);

	this.instance_4 = new lib.元件15();
	this.instance_4.setTransform(367.1,564.9,1,1,0,0,0,129,137.5);

	this.instance_5 = new lib.元件11();
	this.instance_5.setTransform(362.1,586.7,1,1,0,0,0,144,179.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},1).wait(1));

	// srenbtn
	this.instance_6 = new lib.元件37();
	this.instance_6.setTransform(640.8,1041.1,1,1,0,0,0,53.5,11.5);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.元件37(), 3);

	this.instance_7 = new lib.元件36();
	this.instance_7.setTransform(370.8,1041.1,1,1,0,0,0,53.5,11.5);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.元件36(), 3);

	this.instance_8 = new lib.元件35();
	this.instance_8.setTransform(127.8,1041.1,1,1,0,0,0,53.5,11.5);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.元件35(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).to({state:[]},1).wait(1));

	// 图层 2
	this.instance_9 = new lib.元件41();
	this.instance_9.setTransform(89.6,792.3,1,1,0,0,0,700,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(1));

	// 图层 1
	this.instance_10 = new lib.元件1_1();
	this.instance_10.setTransform(1230.8,607.4,1.775,1.775,0,0,0,700,349.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95.6,586.3,2752.8,1242.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;