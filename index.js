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
		{src:"images/下一页_.png", id:"下一页_"},
		{src:"images/BDDPB_S0000.png", id:"BDDPB_S0000"},
		{src:"images/BDDPB_S0002.png", id:"BDDPB_S0002"},
		{src:"images/BDDPB_S0004.png", id:"BDDPB_S0004"},
		{src:"images/BDDPB_S0006.png", id:"BDDPB_S0006"},
		{src:"images/BDDPB_S0008.png", id:"BDDPB_S0008"},
		{src:"images/BDDPB_S0010.png", id:"BDDPB_S0010"},
		{src:"images/BDDPB_S0012.png", id:"BDDPB_S0012"},
		{src:"images/BDDPB_S0014.png", id:"BDDPB_S0014"},
		{src:"images/BDDPB_S0016.png", id:"BDDPB_S0016"},
		{src:"images/BDDPB_S0018.png", id:"BDDPB_S0018"},
		{src:"images/BDDPB_S0020.png", id:"BDDPB_S0020"},
		{src:"images/BDDZL_S0000.png", id:"BDDZL_S0000"},
		{src:"images/BDDZL_S0002.png", id:"BDDZL_S0002"},
		{src:"images/BDDZL_S0004.png", id:"BDDZL_S0004"},
		{src:"images/BDDZL_S0006.png", id:"BDDZL_S0006"},
		{src:"images/BDDZL_S0008.png", id:"BDDZL_S0008"},
		{src:"images/BDDZL_S0010.png", id:"BDDZL_S0010"},
		{src:"images/BDDZL_S0012.png", id:"BDDZL_S0012"},
		{src:"images/BDDZL_S0014.png", id:"BDDZL_S0014"},
		{src:"images/BDDZL_S0016.png", id:"BDDZL_S0016"},
		{src:"images/BDDZL_S0018.png", id:"BDDZL_S0018"},
		{src:"images/BDDZL_S0020.png", id:"BDDZL_S0020"},
		{src:"images/BDDZL_S0022.png", id:"BDDZL_S0022"},
		{src:"images/BDDZL_S0024.png", id:"BDDZL_S0024"},
		{src:"images/gai_1_102_54069.png", id:"gai_1_102_54069"},
		{src:"images/top.jpg", id:"top"},
		{src:"images/yun.png", id:"yun"},
		{src:"images/加_.png", id:"加_"},
		{src:"images/背景1.jpg", id:"背景1"},
		{src:"images/背景2.jpg", id:"背景2"},
		{src:"images/背景3.jpg", id:"背景3"}
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



(lib.下一页_ = function() {
	this.initialize(img.下一页_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,114);


(lib.BDDPB_S0000 = function() {
	this.initialize(img.BDDPB_S0000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDPB_S0002 = function() {
	this.initialize(img.BDDPB_S0002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDPB_S0004 = function() {
	this.initialize(img.BDDPB_S0004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDPB_S0006 = function() {
	this.initialize(img.BDDPB_S0006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDPB_S0008 = function() {
	this.initialize(img.BDDPB_S0008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDPB_S0010 = function() {
	this.initialize(img.BDDPB_S0010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDPB_S0012 = function() {
	this.initialize(img.BDDPB_S0012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDPB_S0014 = function() {
	this.initialize(img.BDDPB_S0014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDPB_S0016 = function() {
	this.initialize(img.BDDPB_S0016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDPB_S0018 = function() {
	this.initialize(img.BDDPB_S0018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDPB_S0020 = function() {
	this.initialize(img.BDDPB_S0020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDZL_S0000 = function() {
	this.initialize(img.BDDZL_S0000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDZL_S0002 = function() {
	this.initialize(img.BDDZL_S0002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDZL_S0004 = function() {
	this.initialize(img.BDDZL_S0004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDZL_S0006 = function() {
	this.initialize(img.BDDZL_S0006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDZL_S0008 = function() {
	this.initialize(img.BDDZL_S0008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDZL_S0010 = function() {
	this.initialize(img.BDDZL_S0010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDZL_S0012 = function() {
	this.initialize(img.BDDZL_S0012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDZL_S0014 = function() {
	this.initialize(img.BDDZL_S0014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDZL_S0016 = function() {
	this.initialize(img.BDDZL_S0016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDZL_S0018 = function() {
	this.initialize(img.BDDZL_S0018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDZL_S0020 = function() {
	this.initialize(img.BDDZL_S0020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDZL_S0022 = function() {
	this.initialize(img.BDDZL_S0022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.BDDZL_S0024 = function() {
	this.initialize(img.BDDZL_S0024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,800);


(lib.gai_1_102_54069 = function() {
	this.initialize(img.gai_1_102_54069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,247);


(lib.top = function() {
	this.initialize(img.top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,135);


(lib.yun = function() {
	this.initialize(img.yun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,114);


(lib.加_ = function() {
	this.initialize(img.加_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,114);


(lib.背景1 = function() {
	this.initialize(img.背景1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3353,1334);


(lib.背景2 = function() {
	this.initialize(img.背景2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3397,1334);


(lib.背景3 = function() {
	this.initialize(img.背景3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3022,1334);


(lib.金币 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF06D").s().p("AmED+IBnh3QACCKBDBrIhRBhQhEhlgXh6gAmRB3IABgTICkjBQgfA+gMBGIh3CJQgDgbAAgegAExkDQhXg8htgCIB1iGQAsANAqAYQAZAOAZASQAUAPAUARIhWBmIgBABIgKgIgABUncQApAAAmAGIiICdQgYAFgVAIQgrAQgmAdg");
	this.shape.setTransform(-189.9,-529.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDA03").s().p("Ag+JWQidgjh5iFQgiglgagnIBRhhQAUAfAZAdQBVBhBuAZQAnAJApAAQBcAABNgqQA6ghAxg4QBziDAAi5QAAi3hziDQgfgkgigZIABgBIBWhmQAbAYAZAeQAhAlAaApIATAhIASAkQAWAxAOA1QAVBTAABbQAAA6gIA2QgFAggIAeIgHAcQgGATgIATQgmBkhJBUIgBACQggAkgjAdQiDBtipAAQgXAAgWgCgAn1A1IB3iHQgGApAAAqIAAALIhnB3QgIgmgCgogAlUm2QBhhrB6grQAygLA2AAIi5DdQgmAbgiAmQgnAtgaA0IikDDQAFjzCeiugAA8pRQAgAFAfAKIh1CGIgFAAQgmAAglAIg");
	this.shape_1.setTransform(-179.6,-516.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4B400").s().p("Ai5JaQAWACAXAAQCpAACDhtIBSAQQiIBoiuAAQg9AAg4gNgAl3E9QhxiCAAi2QAAizBxiCQBwiBCdAAQBnAABSA3IAKAIQAiAZAfAkQBzCDAAC3QAAC5hzCDQgxA4g6AhQhFAkhUAAQidAAhwiBgADjGuIABgCQBJhUAmhkIBqAAQgpBohPBWIgJAKgAFhDOIAHgcIBqAAIgIAcgAF1B0QAIg2AAg6QAAhbgVhTIBsAAQAVBRAABZQAABDgMA+gAFEkQIgSgkIBsAAIATAkgAEflVQgagpghglQgZgegbgYQgUgRgUgPIBhgMQAxAjArAwQAoAtAfAwgAAAo+QgdgKgggFQgmgGgpAAQg2AAgyALQBSgeBeAAQCMAAB0BEIhmAIQgqgXgsgNg");
	this.shape_2.setTransform(-167.3,-517.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA9C00").s().p("ACyIBQAigdAggkIBaAOQgkAmgmAdgAi4HNQhvgZhUhhQgZgdgUgfQhDhrgDiKIAAgLQAAgqAHgpQALhIAfg+QAag0AogtQAhgmAmgbQAngdArgQQAWgIAYgFQAlgIAoAAIAGAAQBqABBXA9QhUg3hkAAQieAAhwCBQhwCCAACzQAAC2BwCCQBwCBCeAAQBUAABFgkQhLAqhdAAQgqAAgngJgAFlEGQAHgTAGgTIBqAAQgGATgIATgAF6DEQAIgeAFggIBoANQgFAZgGAYgAF6iYQgOg1gXgxIBtAAQAWAxAOA1gAFDkiIgTghIBtAAIATAhgABnoIIBngIQAXANAWAQIhiAMQgYgSgagPg");
	this.shape_3.setTransform(-169.1,-519);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFEC60").s().p("AnZEUICGiDQAECBBHBmIhtBpQhIhdgchwgAnrCBIDHjJQgfA7gKA/IiaCVQgEgjAAgjgACBk+ICQiPQB4AeBjBQIh0BwQhshMiLgDgABrngIAJAAQAxAAAuAHIilCfQhPAMhGAmg");
	this.shape_4.setTransform(-186.1,-529.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4B400").s().p("AlCE9QgighgYgkQhHhngEiBIgBgQQAAgmAHgmQAKhCAfg6QAgg/A2g1QAwgvA3geQBFgmBRgLQAigFAjAAIANAAQCLADBsBMQAhAXAeAdQCGCEAAC4QAAC5iGCEQiGCDi9AAQi8AAiGiDg");
	this.shape_5.setTransform(-174.5,-516.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFDA03").s().p("AmtGrQghghgbgkIBthoQAZAkAhAhQCHCDC7AAQC+AACGiDQCFiEAAi5QAAi4iFiEQgfgdghgXIB0hwQAcAWAaAaQCyCxAAD5QAAD6iyCxQiyCxj8AAQj6AAizixgApaBMICZiSQgGAmAAAmIAAAQIiFCDQgKgmgEgngApfAAQAAj5CyixQCwiuD2gDIjUDYQg3AegwAvQg2A1ggA/IjHDIIAAgGgABgpUQAfAFAfAIIiQCOIgOAAQgiAAgiAFg");
	this.shape_6.setTransform(-174.6,-517.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EA9C00").s().p("Ak8HaIB1AAQAWAWAWATIhfAQQgigagggfgAFjFYQBniKAAjDQAAjBhniJIgSgYQAYAVAWAaQBwCEAAC5QAAC7hxCEQg+BIhLAhQA8gjAyhCgAnJEIQgIgUgHgUIB7AAQAGAUAIAUgAnhDDQgIgggFghIB7AAIAFAcQADATAGASgAnmiLQAOg7AZg2IB5AAQgYA2gNA7gAmwkcQAKgTALgRIB4AAQgKARgKATgAj3nzQAYgRAYgOIBlAKQgQAJgQAMg");
	this.shape_7.setTransform(-180.4,-518.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF06D").s().p("AlkF0QgIgUgHgUIgIgdQgFgTgDgSIBghyQAFCGBBBoIhPBdQgig1gWg6gAmRB9IABgbICYiyQggBFgIBPIhtCCQgEgkAAglgACck6QgYgFgYgBIB0iJQBgAlBSBNIhaBoIAAABQhGg8hWgQgABWngIA3AAIAZAFIiFCgQhCALg6AmgACNnggACBniIAEAAIAIACIgMgCg");
	this.shape_8.setTransform(-178.3,-529.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4B400").s().p("AjjICIBfgQQCEBtCrABQgrAHgvAAQisAAiIhlgAklHJIgWgXQhOhVgphlIB6AAQAWA6AiA0QAYAlAeAiIAaAcgAgpGWQgzgfgrg0QgYgbgSgeQhBhogFiGIgBgXQAAgeAEgdQAJhRAfhGQAag5ArgyQApgwAvgeQA4gmBEgLQAcgFAeAAIARAAQAYABAYAFQBWAQBGA8IAEADIASAXQBnCKAADDQAADBhnCJQgyBDg7AjQgkAPgmAHQgeAFgfAAQhhAAhOgygAnBDPIgJgdIB8AAIAIAdgAnXByQgJg3AAg7QAAhRARhLIB7AAQgOA/gCBFIgBAYQABAmADAkIAFAogAmokNIAPggIB6AAQgJAQgHAQgAmElRQAfgzAqguQAsgvAvgjIB1AAQgyAlgtAzQglArgdAwgAiwoiQB1hECMAAQAaAABCAIIAMACIg2AAQhxAJhdA6g");
	this.shape_9.setTransform(-182.7,-517.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFDA03").s().p("AkTHxQgXgTgVgWIgagcQgegigYglIBOhcQASAeAYAbQArA0AzAfQBQAyBhgBQAdABAegGQAmgGAkgQQBLggA+hJQBwiEAAi6QABi6hxiEQgWgZgYgWIgEgCIABgBIBZhpQARAQARASQClC0AAD/QAAD9ilC0QiFCRiwAdQiqgBiEhtgAnsBwIgFgnIBtiBQgDAeAAAeIAAAXIhgBxIgFgcgAnjidQANg7AYg2QAGgQAJgQQAJgSAKgSQAdgwAmgrQAsgzAzglQAPgMAQgJQBfg6BxgKIi0DXQgvAegpAvQgqAzgaA5IiZC1QAChFAPg/gABDpYQAdAHAcALIh0CJIgPAAQgeAAgcAEg");
	this.shape_10.setTransform(-168.3,-517.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EA9E00").s().p("AgWEYQAtiXAAjSQAAipgbiBIAJAWQA9CEAAC6QAAC4g9CEQgeBGgoAhQAXglAUg/g");
	this.shape_11.setTransform(-151.6,-511.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EA9C00").s().p("AhaHIICyAAQAPAgAQAaIinAQQgWgggUgqgAieDlICyAAIAEAZIiyABIgEgagAiiDOQgEgigEgjICyAAQACAVADAVIADAbgAiiidQAGgqAJgnICyAAQgKAngFAqgAiKkQIAJggICxAAIgJAggAgmnvQAPgTAQgPICxAAQgQAPgOATg");
	this.shape_12.setTransform(-193.2,-519.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4B400").s().p("Ag1JTQhGgKg5hSICpgQQAdAzAlAbQAhAZAkAFIiJAAQgKACgKAAQgKAAgKgCgACNHIQgegBgZgQQgzgeglhWQgNgbgKgcQgjhpgDiEIAAgZQAAgtADgrQAIhOAShBQANgtATgpQAUgxAbgfQAXgbAbgNQAWgLAZAAIAEAAIAEABQA7ADAtBDIAMARIAAABIAMAUQAdCCAACoQAADTgvCWQgUBAgXAlQgjAcgoABIgBAAgAjeGuIgEgJQgohYgUhoIC0gBQANBKAYBBQALAcAMAaIAEAJgAkiDLIgEgXIC0AAIAEAXgAkuBuQgEg2AAg4QAAhhAMhWIC0AAQgKBGgCBNIAAAkQgBAeACAfIADAxgAkXkIIAJgiICzAAIgIAigAkFlLQAPgxAUgtQAag6AegmICyAAQgcAmgaA6QgVAtgPAxgAiLorQAiggAmgJICyAAQgdAHgbAVIgRANg");
	this.shape_13.setTransform(-180,-516.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFDA03").s().p("AgTJUQglgFgggZQglgbgfgzQgRgZgOggIgFgJQgMgbgKgbIAshkQAKAdAMAbQAoBWAyAeQAaAQAeAAIABAAQAmAAAjgcQAnghAghHQA9iDAAi6QAAi5g9iEIgKgWIgMgVIgBgBIgLgQIAzhzQARAbAPAiQBQCwAAD4QAAD2hQCwQhICghkAOgAkLBvIgDgxIBBiQQgEAsAAAtIABAYIg3B7QgDgVgBgWgAkDi2QAFgqAJgoIAJghIAJghQAPgxAUgtQAag6AegmQAPgUAQgOIARgOQAagUAegHIAgAAIhiDNQgbAfgXAxQgSAogNAtIhcC+QAChNAKhGgAAXpTIAKAAQAQAEAPAIIg/COIgCAAQgZAAgXALg");
	this.shape_14.setTransform(-165.5,-516.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF06D").s().p("AjDFXIgEgZIgEgXIgDgbIA2h6QADCEAjBpIgsBjQgYhBgNhKgAjXBxIAAgkIBci7QgSBBgIBMIhBCRQgCgfABgggAA9lGIgEgBIA/iOQA1AbArBHIgzBzQgthDg7gDgAA3nhIAYAAIhJClQgZANgXAbg");
	this.shape_15.setTransform(-171.1,-528);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EA9C00").s().p("AiBIHIAAg9IEDAAIAAA9gAiBEGIAAghIEDAAIAAAhgAiBDMIAAg+IEDAAIAAA+gAiBiHIAAhqIEDAAIAABqgAiBkcIAAggIEDAAIAAAggAiBniIAAgkIEDAAIAAAkg");
	this.shape_16.setTransform(-174.4,-519.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4B400").s().p("AhMJTQg1AAAAgzIAAgzIEDAAIAAAzQAAAzg1AAgAiBGxIAAjEIEDAAIAADEgAiBDLIAAgZIEDAAIAAAZgAiBB0IAAkVIEDAAIAAEVgAiBkKIAAgrIEDAAIAAArgAiBlWIAAilIEDAAIAAClgAiBofQAAgzA1AAICZAAQA1AAAAAzg");
	this.shape_17.setTransform(-174.4,-517.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EA9C00").s().p("AAjICQARgaAPggICzAAQgTAqgXAggAkIFeQgPghgLgjQgjhuAAiMIAAgHQAAgwAGguQAMh6ArhdQAQgjASgaQAegsAlgRQkEHJEEGlQg5gbgshfgACDD+IAEgZICzAAIgEAagACLDOIADgbQADgVACgVICzAAQgDAjgFAigACLidQgGgqgJgnICzAAQAKAnAFAqgABzkQIgJggIC0AAIAJAggAAPnvQgPgTgOgPICyAAQAQAPAOATg");
	this.shape_18.setTransform(-170.7,-519.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF06D").s().p("AjXD7IA+iFIAAAIQAACMAjBtIgxBmQgkhmgMh8gAjdB1IAAgHID3pKIA5AAIhMCkQgjAQgeAtQgSAZgQAjQgsBegMB3IhICaQgBgdAAgegACVkPQgXgbgagNQgXgLgZAAIAAAAIBBiNQALAGALAIIARAOQAQAOAPAUQASAYARAfIgyBqQgLgSgMgNg");
	this.shape_19.setTransform(-187.9,-528.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFDA03").s().p("AgTJUQhkgOhIigQgPgfgLghIAwhmQALAkAPAgQAtBgA5AaQAVAKAWAAIABAAQBWAAA8iEQAMgbAKgdQAkhoACiFIABgYQAAgtgFgsQgGhNgUhCQgMgtgSgoQgOgbgNgWIAyhqQALATAKAWQAUAtAPAxIAJAhIAJAhQAIAoAGAqQAKBGACBNIABAjQAAAfgCAfIgDAxQgBAWgDAVIgEAbIgDAWIgFAaQgNBKgZBBQgKAbgLAbIgFAJQgOAggRAZQggAzgkAbQghAZgkAFgAkOA5IBIiYQgFAuAAAxIg+CEQgDglgCgmgAi/moQAPgiAQgbQAthIAzgaQAQgIAQgEIAKAAIj6JMQABj0BQitgAAhpTQARAEARAJIhBCNIgCAAIgEAAQgTACgSAIg");
	this.shape_20.setTransform(-182.8,-516.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F4B400").s().p("AATJTIiJAAQAlgFAggZQAlgbAdgzICpAQQg4BShGAKQgKACgLAAQgKAAgKgCgAiIHIQgXAAgWgKQkEmlEEnJQASgIATgCIAEAAIAEAAIAAAAQAZAAAXALQAaANAXAbQAMANALASQAOAWALAcQASAoANAsQATBCAHBOQAEArAAAtIgBAZQgCCEgkBoQgKAdgMAbQg6CEhWABIgBAAgAAwGuIAFgJQAMgaAKgcQAYhBANhKIC0ABQgUBogoBYIgEAJgAB1DLIADgXIC0AAIgEAXgACABvIADgyQACgfAAgfIgBgjQgChNgKhGIC0AAQAMBWAABgQAAA5gEA3gABqkIIgJgiIC0AAIAIAigABYlLQgPgxgUgtQgKgWgLgTQgRgfgQgYICxAAQAeAnAaA5QAVAtAPAxgAggorIgRgNQgLgJgLgGQgQgJgSgEICyAAQAmAKAiAfg");
	this.shape_21.setTransform(-168.9,-516.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},4).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},4).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},4).to({state:[{t:this.shape_17},{t:this.shape_16}]},4).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.1,-578.7,111.8,123.1);


(lib.人物总慢 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.BDDZL_S0000();
	this.instance.setTransform(-229,-400);

	this.instance_1 = new lib.BDDZL_S0002();
	this.instance_1.setTransform(-229,-400);

	this.instance_2 = new lib.BDDZL_S0004();
	this.instance_2.setTransform(-229,-400);

	this.instance_3 = new lib.BDDZL_S0006();
	this.instance_3.setTransform(-229,-400);

	this.instance_4 = new lib.BDDZL_S0008();
	this.instance_4.setTransform(-229,-400);

	this.instance_5 = new lib.BDDZL_S0010();
	this.instance_5.setTransform(-229,-400);

	this.instance_6 = new lib.BDDZL_S0012();
	this.instance_6.setTransform(-229,-400);

	this.instance_7 = new lib.BDDZL_S0014();
	this.instance_7.setTransform(-229,-400);

	this.instance_8 = new lib.BDDZL_S0016();
	this.instance_8.setTransform(-229,-400);

	this.instance_9 = new lib.BDDZL_S0018();
	this.instance_9.setTransform(-229,-400);

	this.instance_10 = new lib.BDDZL_S0020();
	this.instance_10.setTransform(-229,-400);

	this.instance_11 = new lib.BDDZL_S0022();
	this.instance_11.setTransform(-229,-400);

	this.instance_12 = new lib.BDDZL_S0024();
	this.instance_12.setTransform(-229,-400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},4).to({state:[{t:this.instance_1}]},4).to({state:[]},4).to({state:[{t:this.instance_2}]},4).to({state:[]},4).to({state:[{t:this.instance_3}]},4).to({state:[]},4).to({state:[{t:this.instance_4}]},4).to({state:[]},4).to({state:[{t:this.instance_5}]},4).to({state:[]},4).to({state:[{t:this.instance_6}]},4).to({state:[]},4).to({state:[{t:this.instance_7}]},4).to({state:[]},4).to({state:[{t:this.instance_8}]},4).to({state:[]},4).to({state:[{t:this.instance_9}]},4).to({state:[]},4).to({state:[{t:this.instance_10}]},4).to({state:[]},4).to({state:[{t:this.instance_11}]},4).to({state:[]},4).to({state:[{t:this.instance_12}]},4).to({state:[]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229,-400,460,800);


(lib.shape27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.682)","rgba(255,255,255,0)","rgba(255,255,255,0.949)","rgba(255,255,255,0)"],[0.18,0.286,0.616,0.675,1],0,0,0,0,0,194.7).s().p("A1QVQQo0ozAAsdQAAscI0o0QI0o0McAAQMdAAIzI0QI1I0AAMcQAAMdo1IzQozI1sdAAQscAAo0o1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.5,-192.5,385,385);


(lib.goLink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,135);


(lib.gai_1_309_54902 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.gai_1_102_54069, null, new cjs.Matrix2D(1,0,0,1,-78.5,-123.5)).s().p("AsQTSMAAAgmkIYgAAMAAAAmkg");
	this.shape.setTransform(78.5,123.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157,247);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.text = new cjs.Text("0", "bold 70px 'Microsoft YaHei'", "#FFFFFF");
	this.text.name = "text";
	this.text.lineHeight = 94;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.4,96.4);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0A008").ss(1,1,1).p("AhfgSQBdBLBihL");
	this.shape.setTransform(17.8,117.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CAA121").ss(1,1,1).p("ACmAAQAABFgxAwQgxAxhEAAQhEAAgxgxQgwgwAAhFQAAhDAwgxQAxgxBEAAQBEAAAxAxQAxAxAABDg");
	this.shape_1.setTransform(18,111.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CB9119").s().p("AAuAVQgFgIAAgMQAAgKAFgIQAHgJAIABQAIgBAHAJQAFAIAAAKQAAAMgFAIQgHAIgIAAQgIAAgHgIgAhKATQgHgIAAgLQAAgLAHgJQAFgJAJAAQAIAAAHAJQAFAJABALQgBALgFAIQgHAJgIAAQgJAAgFgJg");
	this.shape_2.setTransform(18.1,106.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7E623").s().p("Ah0B1QgxgwAAhFQAAhEAxgxQAxgwBDAAQBEAAAxAwQAxAxAABEQAABFgxAwQgxAxhEAAQhDAAgxgxgABdAsQgyAnguAAQgwAAgvgnQAvAnAwAAQAuAAAygngAAvg7QgFAIAAAMQAAAMAFAIQAHAIAIAAQAIAAAHgIQAFgIAAgMQAAgMgFgIQgHgJgIABQgIgBgHAJgAhJg+QgHAJAAAMQAAAMAHAIQAFAJAJAAQAIAAAHgJQAFgIABgMQgBgMgFgJQgHgJgIAAQgJAAgFAJg");
	this.shape_3.setTransform(18,111.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#660000").ss(0.1,1,1).p("AArgjQALAMgLALQgLgBgMABQgWAEgDAQQgEAXgNAIQgOAIgIgTQgLgWAggbQAfgeAjAQg");
	this.shape_4.setTransform(8.7,57.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5D8DF").s().p("AgsAcQgLgWAggbQAfgeAjAQQALAMgLALQgLgBgMABQgWAEgDAQQgEAXgNAIQgFACgDAAQgJAAgFgNg");
	this.shape_5.setTransform(8.7,57.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF523C").s().p("AhzAJQgug0gLguIAAgDIFZAAIAAADIgFAQQgPAoglAqQgsAzhIAbIgHAEIgFABQg4gcgvg3g");
	this.shape_6.setTransform(18,71.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#322927").s().p("AisAyQgDggATgYQASgZAggLQAfgLAdAGQAfAHAPAaQAQgaAfgHQAdgGAfALQAfALASAZQAUAYgDAggAh0gUQggAbALAWQAIATAOgIQANgIAEgXQADgQAYgEQAMgBALABQALgLgLgMQgMgGgMAAQgWAAgWAUg");
	this.shape_7.setTransform(18,57.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FCE611","#EBB912"],[0,1],3.2,4.4,-3.2,-4.4).s().p("AA2hIIAAABIgGBZIhlA3g");
	this.shape_8.setTransform(13.1,27.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCE611").s().p("AgDAVIAAgBIAAAAIi6hDIB4gQIBFh4IgDDKIBAhSICAAVIjAA+IBUAcIAQCIgAhkAwIBhgcIhuCTg");
	this.shape_9.setTransform(19,18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EBB912").s().p("AgJBwIAAAAIAGhbIBkCjgAgDAUIDAg+IhsBagAi9gvIC6BDIAAAAIhhAcgAAAi3IA9B4IhABSg");
	this.shape_10.setTransform(19,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,128.8);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AiBB3QCSgVBRhKIALAKQhRBMiWAXIgHgOgAh6A/QAqgaAggcIALALQghAcgpAcIgLgNgAAABJIAAhOIAOAAIAABOgAiBgRIAAgOIAvAAIAAhMIAPAAIAABMIBDAAIAAhlIAPAAIAAAoIBeAAIAAAPIheAAIAAAuIBzAAIAAAOg");
	this.shape.setTransform(22.3,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEDD40").s().p("Ai9gGQABhTA7g8QA8g7BTAAQBUAAA8A7QA7A8AABVQAABSg7A8Qg7A6hSACIjqALg");
	this.shape_1.setTransform(21.8,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.6,42);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg5kAEMQtyiRNyiOUBAogMQA05AMQQJDCOpDCRQ9pCQ9YAAQ9XAA9JiQg");
	this.shape.setTransform(368.6,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-39.2,825.4,82.5);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD6BmQgNgEgIgJQgJgIgDgMQgDgLAAgPQAAgPAHgOQAIgOARgHQgPgIgFgLQgFgKAAgNQgBgOAEgKQAFgKAIgIQAJgJAKgDQAKgDANAAQAMAAAKADQAKACALAIQALAIAFAPQAEAOgFAUQgGAUgXALQAVAFAJAMQAIANAAASQAAASgFALQgGALgHAIQgGAHgMAEQgMAFgRAAQgSAAgNgFgAEUAGQgQABgKAKQgKAKgBAPQgBAOAGALQAFALAPADQAPAEAQgEQAQgEAGgNQAGgOgCgNQgCgOgNgJQgMgIgNAAIgFAAgAEUhUQgSABgHAKQgIAJAAAMQAAAMAJALQAIALATAAQASAAAJgLQAJgLAAgPQgBgPgKgIQgJgGgPAAIgEAAgABdBmQgMgEgJgJQgJgIgDgMQgDgLAAgPQAAgPAIgOQAHgOARgHQgPgIgEgLQgFgKgBgNQgBgOAFgKQAEgKAJgIQAIgJALgDQAKgDAMAAQAMAAAKADQAKACALAIQALAIAFAPQAFAOgGAUQgFAUgXALQAUAFAJAMQAJANAAASQAAASgGALQgFALgHAIQgHAHgMAEQgLAFgSAAQgSAAgNgFgAB4AGQgQABgLAKQgKAKgBAPQAAAOAFALQAGALAPADQAOAEAQgEQAQgEAGgNQAGgOgCgNQgBgOgOgJQgLgIgOAAIgEAAgAB3hUQgSABgHAKQgHAJAAAMQAAAMAIALQAJALASAAQATAAAJgLQAJgLgBgPQAAgPgLgIQgJgGgOAAIgFAAgAiLBrIg9jSIAdAAIArCeIACAAIArieIAeAAIg+DSgAgWBoIAAgbIAaAAIAAAbgAlZBoIAAjPIAcAAIAAC4IBjAAIAAAXg");
	this.shape.setTransform(29.2,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,4.5,69.4,21.5);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhvBhQgSgKgGgTQgHgTABgSQABgSAGgMQAFgKALgSIAyhPIAdAAIg0BRQAhgJAUAMQATALAHAMQAHAOABAQQAAARgFAQQgGAQgOAMQgOANgZACIgFAAQgWAAgQgKgAhQgIQgTADgJAOQgJAQACARQABASALAMQALALASACQATABAMgOQAMgNAAgaQAAgagPgHQgMgIgPAAIgHAAgAAuBmQgMgEgJgJQgJgIgDgMQgDgLAAgPQAAgPAIgOQAHgOARgHQgPgIgEgLQgFgKgBgNQgBgOAFgKQAEgKAJgIQAIgJALgDQAKgDAMAAQAMAAAKADQAKACALAIQALAIAFAPQAFAOgGAUQgFAUgXALQAUAFAJAMQAJANAAASQAAASgGALQgFALgHAIQgHAHgMAEQgLAFgSAAQgSAAgNgFgABJAGQgQABgLAKQgKAKgBAPQAAAOAFALQAGALAPADQAOAEAQgEQAQgEAGgNQAGgOgCgNQgBgOgOgJQgMgIgNAAIgEAAgABIhUQgSABgHAKQgHAJAAAMQAAAMAIALQAJALASAAQATAAAJgLQAJgLgBgPQAAgPgLgIQgJgGgPAAIgEAAg");
	this.shape.setTransform(15.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-0.2,28.6,21.5);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkfB6QAdgOAUgQQAUgQAOgUQAOgUAHgaQAGgYADgiIgkAAQgjAAgeABIAAgYIBBABIAlAAIAAgkIgBgkIAeADQgCALgBAWIAAAkIB9AAIgGBZIgFA+QgEAjgRAJQgQAJgpAEQgBgPgLgSQAkACAMgFQAMgFACgNIAEgkQACgVADhLIhfAAQgEArgHAYQgIAagNAVQgMAVgVATQgVATgdATQgHgKgSgMgAmOB3QARAAAFgCQAGgBAAgJIAAgNIhTAAIAAAvIgWAAIABhMIgBhBICAAAIgBAqIAABKQAAASgMAEQgLADgQADQgEgPgHgKgAnFBNIBTAAIAAgYIhTAAgAnFAkIBTAAIAAgVIhTAAgAAXB5QBagYgDheQgeACgTAFQgDgRgEgOQAbgIAQgPQAQgQAMgQIgyAAIgrABIAAgZIArACIBMAAQgGgVgHgOIAdgIIANArIBAAAQAaAAARgCIAAAZIgqgBIhuAAQAIAHANAIQgQAHgsAjIB/gDQgKgLgSgPQAMgJAGgHQAwApASAUQgLAFgJALIgUgTIgiACIAABiQAAAQAQAAIAiAAQAKAAACgIQADgJACgVQASAIALABQgJAqgJAFQgJAEgMAAIgzAAQgcAAAAgZIAAhtIgxADQABBxhcAdQgHgOgNgIgAowCPIABgxIAAhOQgLAdgXAgIgSgPQAMgOANgWQANgXAIgaQgWgBgRACIAAgWQARABAcAAIAAg+QAAgWgBgMIAYAAIgBAjIAAA9QAUAAAQgBIAAAWQgQgCgUABIAAB1IABAxgAH1CMQACgkAAg3IAAg+IgvAAIAAB0IgZAAIABgsIAAg2IgBglIBIAAIAAgpIgfAAIgzACIAAgXIAwACIAiAAIgBgvIAaAAIgBAvIAzAAIAigCIAAAXIgigCIgzAAIAAApIBKAAIgBAiIAABHQAAAOgKAFQgLAFgXADQgCgLgJgOQAaABADgCQAEgDgBgLIAAhJIgyAAIAABPQAAAqACAggAFQB2QAZgbAdhMQAJAHANAFQgPAdgOAeIgTAtQgOgIgOgFgAoWAJQAKgGAHgGIAgApIgTANQgNgYgRgSgAFJgmQAHgIAGgLQAhATAXALQgKALgDALQgZgRgfgQgAlzgPIhKAAIgwABIAAgTIAvABIAXAAIAAgVIgSAAQgTAAgPACIAAgUIAdABIAXAAIAAgYIgTAAIgqACIAAgUIAqABIATAAQAAgOgBgOIAYAAIgBAcIAbAAIAlgBIAAAUQgRgBgUgBIgbAAIAAAYIARAAIAmgBIAAAUQgSgCgVAAIgQAAIAAAVIAeAAIAvgBIAAATIgvgBgAoWg8QAMgaAJgZIAWAJIgYAxQgJgFgKgCgApghiIATgLQAMASANAaQgHADgLAIQgKgTgQgZgAFdhyIAPgRQAWARAYAWIgRARQgTgTgZgUg");
	this.shape.setTransform(67.3,17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.1,3.3,122.6,28.8);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+BrIB6jcIAMAHIh6DcgAJPBmQgSgBgPgMQgQgLgGgcIAVgGQAIAfAUAEQAUADAMgHQANgIAFgMQAFgNAAgPQgBgPgIgLQgHgIgMgEQgMgDgOADQgPAEgJALIgUgDQACgFAUhdIBdAAIAAAVIhLAAQgGAfgGATQASgIAPABQAPAAAOAHQAOAGAHALQAGAJADALQADAMgBAMQAAANgFAOQgFANgJAJQgJAJgOAFQgLAEgOAAIgGAAgAidBmQgSgBgPgMQgQgLgGgcIAVgGQAIAfAUAEQAUADAMgHQANgIAFgMQAFgNAAgPQgBgPgIgLQgHgIgMgEQgMgDgOADQgPAEgJALIgUgDQACgFAUhdIBdAAIAAAVIhLAAQgGAfgGATQASgIAPABQAPAAAOAHQAOAGAHALQAGAJADALQADAMgBAMQAAANgFAOQgFANgJAJQgJAJgOAFQgLAEgOAAIgGAAgAG/BjIAAigQgPAPgYAOIAAgWQAegUASgbIAOAAIAADIgAD1BjIAAgFQABgSAQgOQAPgOAXgeQAYgbAHgRQAHgQgCgMQgCgMgJgHQgJgIgNABQgMABgLAJQgLAIgGAQIgWgDQAJgbAPgNQAOgMAUgBQAMgBAJACQAKABAKAHQAKAGAGANQAHANgCASQgCASgQAZQgRAYgvA2IBVAAIAAAVgACvBjIAAgtIhaAAIAAgUIBfiHIARAAIAACHIAcAAIAAAUIgcAAIAAAtgABtAiIBCAAIAAhagAktBjIAAigQgPAPgYAOIAAgWQAegUASgbIAOAAIAADIgAn3BjIAAgFQABgSAQgOQAPgOAXgeQAYgbAHgRQAHgQgCgMQgCgMgJgHQgJgIgNABQgMABgLAJQgLAIgGAQIgWgDQAJgbAPgNQAOgMAUgBQAMgBAJACQAKABAKAHQAKAGAGANQAHANgCASQgCASgQAZQgRAYgvA2IBVAAIAAAVgAo9BjIAAgtIhaAAIAAgUIBfiHIARAAIAACHIAcAAIAAAUIgcAAIAAAtgAp/AiIBCAAIAAhag");
	this.shape.setTransform(103.8,45.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDFCFC").s().p("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");
	this.shape_1.setTransform(103.4,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// MergedLayer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("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");
	this.shape_2.setTransform(104,27.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6ETIB6jdIAMAHIh6DdgAJTEPQgSgBgPgMQgQgMgGgcIAVgGQAIAgAUADQAUAEAMgIQANgHAFgNQAFgMAAgPQgBgPgIgLQgHgLgMgDQgMgEgOAEQgPADgJANIgUgCQACgHAUheIBdAAIAAAVIhLAAQgGAggGATQASgJAPABQAPABAOAGQAOAHAHALQAGALADALQADALgBANQAAANgFANQgFAOgJAJQgJAIgOAGQgLAEgOAAIgGAAgAiZEPQgSgBgPgMQgQgMgGgcIAVgGQAIAgAUADQAUAEAMgIQANgHAFgNQAFgMAAgPQgBgPgIgLQgHgLgMgDQgMgEgOAEQgPADgJANIgUgCQACgHAUheIBdAAIAAAVIhLAAQgGAggGATQASgJAPABQAPABAOAGQAOAHAHALQAGALADALQADALgBANQAAANgFANQgFAOgJAJQgJAIgOAGQgLAEgOAAIgGAAgAHDELIAAihQgPAPgYAOIAAgWQAegUASgbIAOAAIAADJgAD5ELIAAgEQABgSAQgOQAPgOAXgeQAYgeAHgQQAHgRgCgLQgCgMgJgIQgJgHgNABQgMABgLAIQgLAIgGARIgWgEQAJgbAPgMQAOgMAUgCQAMgBAJACQAKACAKAGQAKAHAGANQAHANgCASQgCASgQAZQgRAZgvA2IBVAAIAAAVgACzELIAAgsIhaAAIAAgUIBfiJIARAAIAACJIAcAAIAAAUIgcAAIAAAsgABxDLIBCAAIAAhdgAkpELIAAihQgPAPgYAOIAAgWQAegUASgbIAOAAIAADJgAnzELIAAgEQABgSAQgOQAPgOAXgeQAYgeAHgQQAHgRgCgLQgCgMgJgIQgJgHgNABQgMABgLAIQgLAIgGARIgWgEQAJgbAPgMQAOgMAUgCQAMgBAJACQAKACAKAGQAKAHAGANQAHANgCASQgCASgQAZQgRAZgvA2IBVAAIAAAVgAo5ELIAAgsIhaAAIAAgUIBfiJIARAAIAACJIAcAAIAAAUIgcAAIAAAsgAp7DLIBCAAIAAhdgAk5gCQADgdAAgSIAAggIhQAAQgUAAgZACIAAgZIAtACIBQAAIAAgtIgwAAQgRAAgcADIAAgaQAbACAQAAIAyAAIAAgqIg9AAQgUAAgcACIAAgYQAdACAUAAIA8AAIgBgzIAdAAQgDAUAAAfIBJAAQANAAAVgCIAAAYIgjgCIhIAAIAAAqIA1AAQAUAAAUgCIAAAaQgWgDgSAAIgzAAIAAAtIBMAAQAUAAAbgCIAAAZQgbgCgUAAIhMAAIAAAgQAAAUACAbgAv3gbQAlgBAYgFQAZgGAXgLIgcgJIgjgIIAUgcIgoAAIgrABIAAgVIAqABIA1AAQAIgNAGgNQAPAHANADQgJAIgFAIIBmAAIAugBIAAAVIgugBIgaAAQgLAVgRAQIAgAKIAwAPQgJALgCANQgVgMgSgHQgSgHgfgIQgYAPgbAIQgaAIgtAHQgDgLgKgLgAushLIA2AKQATgRAHgNIhAAAQgJAJgHALgAN5gGIABgsIAAhTIhRAAQgVAAgRACIAAgYIAmABIBRAAIAAhUIgwAAIgvABIAAgXIApABICFAAIApgBIAAAXIgpgBIg2AAIAABUIBSAAIAkgBIAAAYQgOgCgWAAIhSAAIAABTIABAsgAFWghQAXABAOgCQANgCAEgJQADgIACgoQACgoABhHIhEAAQgKAWgRAfQgIgIgMgFQAKgOAKgUQAJgUAHgXQAHgYABgNQARAHAMAEQgGAJgEALIgJAWIBTAAIgBAuQgBBHgFBBQgCAVgUAHQgUAHgZACQgBgNgJgOgArXgdQAegEAegNQAegNANgcIgyAAIgqABIAAgVIAqABIA2AAIABgTIAaAEQgCAGgBAJIBjAAIgEAoQgDAXgEALQgFALgLADQgLAEggADQgBgLgMgOQAkACAIgEQAHgEACgKQACgJADgaIhOAAQgNAlgcAPQgcAQgpAMQgFgNgMgJgAHOgfQAigJAmgeQAlgeAQg5IhBAAQgaAAgRABIAAgZQASACAZAAIBEAAIAAhAIgxAAQgZAAgRACIAAgZQASABAYAAIB5AAQAVAAAVgBIAAAZQgVgCgVAAIgxAAIAABAIBLAAQAXAAARgCIAAAZQgQgBgWAAIhJAAQAQAsAfAgQAeAgAwALQgQANgEALQgkgNgegcQgfgbgWg0QgOAwgfAdQgeAdguAUQgEgMgQgLgAhogIQABgYAAgdQAAgegBgXIDXAAIgBA1IABA0IgXAAIAAgJIiqAAIAAAKgAANgjIBLAAIAAgXIhLAAgAhSgjIBMAAIAAgXIhMAAgAANhKIBLAAIAAgWIhLAAgAhShKIBMAAIAAgWIhMAAgAC0gOIABgvIAAhsQAAgfgBgUIAiAAQAGgbADgeQARAGAKADQgGAKgKAmIA1AAQgCAUAAAeIAABnIACAzIgYAAIAAgYIg8AAIAAAagADLg8IA8AAIAAg+Ig8AAgADLiOIA8AAIAAg6Ig8AAgAFPh5QgHgQgHgLIAVgLIAOAcIAQAkIgWAMQgIgXgHgPgAn7iBQgOgNgEgYQgDgZADgkIgfABIgFApIAXAOQgKAIgGAIIgPgLQgSAWgaARQgIgIgPgGQAggLAPgaQgIgGgQgHQAJgHADgKIATAMQACgJADgVQgSAAgOACIgCgTIAiAAQAAgWgDgOIAbAEQgDALAAAUIA5gBQgDAXgCAZQgBAZAFANQAGAMAFACQAFACAAgdQAKAJAPACQgHAcgFAIQgFAHgIABIgBAAQgIAAgOgMgArFiPQAaABAEgCQADgDAAgLIAAgVIgxAOQgEgNgHgIQAVgDAngIIAAgbIgyABIAAgVIAyABQAAgVgBgNIAaAAQgEAMAAAWIAdgBIAAAVIgdgBIAAAWQAOgCAOgFIgBATIgbAGIAAArQgBANgMAEIgfAHQgCgNgIgNgAhPh/IAAg0ICiAAIAAA0gAg8iPIB7AAIAAgUIh7AAgAv/iVQARgMAPgOQAQgPARgTQAGAHAJAHIgYAYIglAmQgJgJgKgHgAs9ieQgXgNgLgaQgNAZgUAKQgUALgcAKQgIgKgKgIQA1gLAQgTQAQgTACgaIgZAAIgbAaQgIgIgJgHQANgHANgRQAOgSAFgQIAdAIIgRAUIBxAAIgJATIgLAZIgYgEIALgVIgtAAQgGAjAaAQQAZAPArADQgGAJgHASQgdgHgXgNgAh4jDIABgbIgBgbIByAAQgCgIgIgOQAOgDAIgGIAQAfIBpAAIgBAbIABAZIgWAAIAAgiIjLAAIAAAkgAAljFIhHAAIgwABIAAgTIAvACIBIAAIAxgCIAAATIgxgBgAvhjvIgZgMQAFgJAHgKQAlAUARALIgPARQgPgLgLgGg");
	this.shape_3.setTransform(102.2,27.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(102.2,28.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("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");
	this.shape_5.setTransform(104.6,28.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("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");
	this.shape_6.setTransform(104,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-0.6,209.2,58.4);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.背景3();
	this.instance.setTransform(0,0,0.918,0.918);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2774.1,1224.6);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.背景1, null, new cjs.Matrix2D(0.918,0,0,0.918,-1551.5,-590.9)).s().p("EjZjBjAUgp4jqUAp3ArAMHIEAAAMAAAC/Ug");
	this.shape.setTransform(4206.2,590.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.背景1, null, new cjs.Matrix2D(0.918,0,0,0.918,-1508.7,-612.3)).s().p("EjrtBfqMAAAi/TMHTVAAAUANCBs1gcXBSeg");
	this.shape_1.setTransform(1508.7,612.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-42.7,5732.6,1267.3);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FCB209").ss(1,1,1).p("AAyAAQAAAUgPAPQgPAQgUAAQgTAAgPgQQgPgPAAgUQAAgTAPgQQAPgPATAAQAUAAAPAPQAPAQAAATg");
	this.shape.setTransform(11.1,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAjQgPgPAAgUQAAgTAPgPQAPgPATAAQAUAAAPAPQAPAPAAATQAAAUgPAPQgPAPgUAAQgTAAgPgPg");
	this.shape_1.setTransform(11.1,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAE018").s().p("AhLAkQgfggAAgqQAAgtAfggQAggfArAAQAsAAAgAfQAfAgAAAtQAAAqgfAgQggAfgoBQQgvhQgggfg");
	this.shape_2.setTransform(10.8,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ak+CGQAUgdAIgfQAHgfACgXIABhEIgBhMQA3gCAsgPQAKATAGAIQgTAAhIAHIAAA/IBAAAIAcgCIAAAXIgdAAIAAB8IABAsIgaAAIABgsIAAh8IgnAAQAAAcgCAcQgDAcgIAcQgIAbgQAeQgMgHgMgFgAmeBzQASABAGgBQAHgBAAgKIAAhDIg9ABIAAgZIA9ABIAAgcQgtAAgWABIAAgYIApABIAvAAIAPguIAbAIQgJAFgLAhIArgBIAAAYQgVgBgqAAIAAAcIA8gBIAAAZIg8gBIAABKQAAATgLAGQgMAGgSAAQgFgOgIgNgAguBwQAXAAAKgCQAKgDgCgNIAAg3IhYAAIgpABIAAgXQAUABAVABIBYAAIAAgsIg1AAIguACIAAgYQAWABAYAAIA1AAIAAgvIhgAGQgEgOgHgKQAsACBEgGQBHgFAdgLQAHAQAJALIhhAJIAAAxIA3AAQAVAAAVgBIAAAYIgqgCIg3AAIAAAsIBXAAIAmgCIAAAXIgmgBIhXAAIAABCQABATgMAHQgLAHgfADQgBgPgLgOgAFkBsQAbAAAFgEQAGgDAAgRIAAiGIg/AAQgOABgMACIAAgYQANABANAAIA/AAIAAgiQAAgRgDgQIAdAAQgDANAAAXIAAAfIAngBIAAAYQgbgCgMgBIAACTQAAAagPAFQgOAEgVAEQgFgRgGgLgADnCIIABgwIAAhYIgPAgQgIAQgUAcIgUgWQAagdAPgcQAOgeAFgTIgwACIAAgYIAzABIAAgdIgBgkIAbAAQgCAPAAAVIAAAdIAjgBIAAAYIgjgCIAAAoIATgLIAeAtQgNAGgMAJQgGgQgSgZIAABcQAAAZACAXgAnHBnQAZgcAPgfQAMAKALAGIgRAWIgcAkQgIgJgKgGgAlfA+QAIgIAKgGQAPATAMAVQgMAGgHAKQgKgWgQgUgAFKATQgGgQgGgHQAKgGAMgFQAJANAGALIALAaQgMAEgOAIQgEgOgGgOgAmnhHQAIgGALgDQAJARAGARQgLADgKAEQgGgSgHgOgAlYhXIg7AAQgUgBgUACIAAgZIAoABIAWAAQgCgNgFgPIAagHIAHAjIA1gBIAAAZIgqgBg");
	this.shape_3.setTransform(74.7,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,120.4,32.8);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FCB209").ss(1,1,1).p("AAyAAQAAAUgPAPQgPAPgUAAQgTAAgPgPQgPgPAAgUQAAgTAPgPQAPgPATAAQAUAAAPAPQAPAPAAATg");
	this.shape.setTransform(11.1,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAjQgPgPAAgUQAAgTAPgPQAPgPATAAQAUAAAPAPQAPAPAAATQAAAUgPAPQgPAPgUAAQgTAAgPgPg");
	this.shape_1.setTransform(11.1,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAE018").s().p("AhLAkQgfggAAgqQAAgtAfggQAggfArAAQAsAAAgAfQAfAgAAAtQAAAqgfAgQggAfgoBQQgvhQgggfg");
	this.shape_2.setTransform(10.8,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.6,29.6);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FCB209").ss(1,1,1).p("AAyAAQAAAUgPAQQgPAPgUAAQgTAAgPgPQgPgQAAgUQAAgTAPgQQAPgPATAAQAUAAAPAPQAPAQAAATg");
	this.shape.setTransform(11.1,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAE018").s().p("AhLAkQgfggAAgqQAAgtAfggQAggfArAAQAsAAAgAfQAfAgAAAtQAAAqgfAgQggAfgoBQQgvhQgggfgAgfhNQgPAPAAAVQAAAVAPAPQAPANATAAQAUAAAPgNQAPgPAAgVQAAgVgPgPQgPgPgUAAQgTAAgPAPg");
	this.shape_1.setTransform(10.8,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZB8QAhgHAUgNQATgOANgYIg+AAQACgOAAgSQAAgUgCgRIA5AAIAGgSIAWADIgHAPIBfAAIgBAhIABAkIghAAIANAJQgIAEgMAOIAegEIgDgLIANgGQAGAQAIAPQgJACgHADIgDgIIgWAEQgLACgKAFIgJgSQALgJAIgSIgaAAIAAAnQgBAQAPgBIA3AAQALAAAEgbQAIAHANABQgHAXgGAGQgHAEgQAAIg9AAQgeAAAAgSIAAgyIgFAAQgMAdgTARQgTAQglAQQgIgLgKgJgACGAzIBBAAIAAgPIg9AAIgEAPgABGAzIAtAAIACgPIgvAAgACMAWIA7AAIAAgNIg4AAgABGAWIAxAAIADgNIg0AAgAFUCPQABgaAAgkQAAgkgBgUIgkAUQgNgUgIgEQAagJAWgMQAVgKARgPQARgPANgSQANgRAKgWQAPAIARAFQgIAHgHAKQAJAOAOALQAOANASALQATAMAUAGQAVAHAUADQgMANgFARIgsgSQgCATAAAlQAAAjACAaIgaAAIAAgXIh5AAIAAAbgAFuBfIB5AAIAAg3Ih5AAgAGHgLQgSAPgXAPICZAAQgZgPgWgTQgXgWgGgLQgRATgTASgAiZBvQAWAAAJgDQAIgCAAgNIAAiTIgZAAIgrABIAAgWIArABIAZAAIAAglIgBgfIAbAAIgBAbIAAApIAmgBIAAAWIgfgBIgHAAIAACdQABAWgRAHQgRAGgVAEQgBgRgJgOgAgcB4QANgUAIgWQAHgVABgWQACgVABgeIgBhmIByAAQgBgNgDgIQAJgDAQgBIAFAZIA9AAIAsgBIAAASIgsgBIi0AAQAABogBAaQgCAagGAaQgHAZgPAeQgMgKgJgFgAlWBkQASAAAzgGIAAgzIgPAAIgoACIAAgVQAPACASgBIAWAAQAAgUgBgMIAbAAIgBAgIAWAAIAegBIAAAVIgegCIgWAAIAAAwIA4gHQgDANAAAIIhYAMIgzAIIgIgZgAiwgJQALgEAKgHIAZAxQgMAEgLAHQgLgbgMgWgAouAZQgPgPAAgTQAAgVAPgPQAPgPAVAAQAVAAAPAPQAPAPAAAVQAAATgPAPQgPAPgVAAQgVAAgPgPgAAegTQAQgLAIgMQAIgMAEgIIgeABIAAgTQATADAYAAIgBgVIAWAAIgBAVQAQAAAPgDIAAATIgfgBIAAAPIALgLIAUATIgNAMQgJgMgJgGIAAAhIgUAAIAAgjIgOATIgSATQgIgGgJgEgADOggQgIgIgGgIIAAAjIgTAAIAAggIgNAPIgRAPIgPgMQAMgHAKgKQAKgKAFgIIgcABIAAgTQAQADAUAAIgBgSIAVAAIgBASIAOAAIAdgDIAAATIgZgBIgLAAQAHAJAMAKQAMAJASAHIgSAPIgYgUgAjdgSIhTAAIgmABIAAgWQAOABAXABIAgAAIAAgpIgSAAIglABIAAgWIAiABIAVAAQAAgYgBgTIAbAAIgBArIASAAIAhgBIAAAWIgmgBIgNAAIAAApIAWAAIAkgCIAAAWIgfgBgAElhHQAWgNATgRQATgRAPgYQALAJAUAGQgSALgWAXQgWAYgWAQQgIgLgOgHgAHJh5QAFgJANgMQASAQA+AqQgMAJgGAMIhQg6g");
	this.shape_2.setTransform(63.4,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,120.9,32.4);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjjB5QAtgGAxgfQAxggAWg2IAgALQgOAPgLASQgLASgRASQgTARgcARQgdASgxAOQgFgLgOgMgACfB6QATgKAPgMQAOgLAKgQQgKgdgFgpQgGgnAAgfIhAAAIAAAsIA1AAQgCARAAAUIgBAyQAAAXgMAGQgMAHgRAEQgDgQgGgMQAUAAAFgEQAEgEAAgJIABg9IgeAAIgCAnQgCAXgLAZQgKAZgXAaQgJgGgOgHQAYgYALgXQAKgYACgVQABgVAAgiIgBhAIBWAAQAAgXgCggQANACANAAQgDAVABAgIASAAIA1gBIAAAXIg1gBIgRAAQABAbAEAfQADAcAIAgQAIgTAEgYQAGgWACgaQALAFAQAFQgGARgFASQgEATgGAVQgHAUgHAMQANAWAJAFQAIAEADgfQALAKAMAGQgFAUgIAPQgIAPgMgHQgLgFgKgMQgKgMgHgMQgKANgNAMQgNAMgQAKQgJgMgKgIgAksB4QAMgOAMgeQANgeAJgcQAJAIAOAIQgIAMgJAbIgVA+QgOgIgRgHgAAIBDQAMAAAXgHIAAhhIggAAIAAgVIAgABIAAgsIAAggIAYAAQgCAQAAAQIAAAsIAegBIAAAVIgeAAIAABZQAOgCAQgHIgBAXIgoAMQgVAIgPAJIgKgcgAiGApQABgWAAgWIAAhhQAAgVgBgUIAaAAQgCATAAAWIAABhQAAAYACAUgAjWAVQAHgTAIgaQAHgcAFgfQAQAGAPADQgHAMgIAeIgSA9QgNgGgMgCgAkogfQAHgIAHgLQAZAQAXARQgMANgFAHQgcgYgRgKgAhahUIARgQQAfAZAgAhQgOAJgJAKQgWgcgjghgAkVhvIAQgRQAZASAWAVIgVATQgTgYgXgRgADpiBQAKgGAKgHQASAWAJAPQgNAGgIAIQgLgUgPgSg");
	this.shape.setTransform(30.7,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,-0.3,60.3,28.9);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.背景2, null, new cjs.Matrix2D(0.918,0,0,0.918,-1689.1,-581.7)).s().p("EjZGBkcUAJJgTigH2gwUIgLhnIAAg0IAAhWUgANgZqgGbgi0IgkjBIgJgwQAAgCHBCqUBP9g64gzKgIxMGazAJkMAAAC/Tg");
	this.shape.setTransform(1659,649.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(229.8,6.4,2858.5,1285.8);


(lib.截图 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAoiOICEAAAAoiOIAAgrQAAgNAJAAIBzAAQAIAAAAANIAAArIAOAAQAJAAAGACQAcAGAAAfIAAEGQAAAogrAAIlzAAQgrAAAAgoIAAkGQAAgnArAAgABXAcQAAAkgaAaQgZAZgkAAQgiAAgagZQgagaAAgkQAAgiAagaQAagZAiAAQAkAAAZAZQAaAaAAAig");
	this.shape.setTransform(36.6,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("AkIEIQhuhsAAicQAAiaBuhuQBuhtCagBQCbABBuBtQBuBuAACaQAACchuBsQhuBuibAAQiaAAhuhug");
	this.shape_1.setTransform(37.5,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("ACbiAIANAAQAHAAAGACQAZAFAAAdIAADrQAAAkgmAAIlPAAQgmAAAAgkIAAjrQAAgkAmAAIDLAAIAAgmQAAgMAIAAIBnAAQAIAAAAAMgABOAZQAAAhgXAXQgXAXggAAQgfAAgXgXQgXgXAAghQAAgfAXgXQAXgWAfAAQAgAAAXAWQAXAXAAAfgAAkiAIB3AA");
	this.shape_2.setTransform(36.7,36.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("AjuDuQhihiAAiMQAAiLBihjQBjhiCLAAQCMAABiBiQBkBjAACLQAACMhkBiQhiBjiMAAQiLAAhjhjg");
	this.shape_3.setTransform(37.6,37.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkRESQhxhyAAigIAAgIQADiaBuhuQByhyCfAAQCgAABxByQBvBuADCaIAAAIQAACghyByQhxBxigAAQifAAhyhxg");
	this.shape_4.setTransform(37.4,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.1,75);


(lib.sprite28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape27("synched",0);
	this.instance.setTransform(233,237,0.355,0.355);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:0.99},2).to({scaleX:1.09,scaleY:1.09},1).to({scaleX:1.36,scaleY:1.36},2).to({scaleX:1.62,scaleY:1.62,y:237.1},2).to({scaleX:1.7,scaleY:1.7,y:237},1).to({scaleX:1.78,scaleY:1.78,y:237.1},1).to({scaleX:2.64,scaleY:2.64,x:233.1,y:237,alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(164.6,168.6,136.8,136.8);


(lib.gai_1_310_81667 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gai_1_309_54902("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157,247);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件9();
	this.instance.setTransform(62.8,17.4,0.6,0.6,0,0,0,103.4,28.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmKgYIMVAAIAAAxIsVAAg");
	this.shape.setTransform(61.7,46.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AmKAZIAAgxIMVAAIAAAxg");
	this.shape_1.setTransform(61.7,46.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AmKgYIMVAAIAAAxIsVAAg");
	this.shape_2.setTransform(61.7,40.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AmKAZIAAgxIMVAAIAAAxg");
	this.shape_3.setTransform(61.7,40.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.5,49.8);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件1();
	this.instance.setTransform(3119.8,578.5,1,1,0,0,0,1544.1,646.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.背景2, null, new cjs.Matrix2D(0.918,0,0,0.918,-1559.2,-612.3)).s().p("EjzmBfqMAAAi/TMHnNAAAMAAAC/Tg");
	this.shape.setTransform(1559.2,612.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-61.2,4664,1285.8);


(lib.场景3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib.元件4();
	this.instance.setTransform(23,144.1,1,1,0,0,0,10.8,14.8);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.instance_1 = new lib.元件2();
	this.instance_1.setTransform(74,140.9,1,1,0,0,0,29.3,14.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(159));

	// 图层_1
	this.instance_2 = new lib.元件8("synched",0);
	this.instance_2.setTransform(2269.8,612.3,1,1,0,0,0,2770.1,612.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:784.8},158).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500.3,0,2774.1,1224.6);


(lib.场景2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_4
	this.instance = new lib.元件3();
	this.instance.setTransform(72.7,142.8,1,1,0,0,0,60.5,16.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(185));

	// 图层_2
	this.instance_1 = new lib.元件7("synched",0);
	this.instance_1.setTransform(1759.6,612.3,1,1,0,0,0,2339.1,612.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:213.3},184).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-579.5,-61.2,4664,1285.8);


(lib.场景1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_4
	this.instance = new lib.元件5();
	this.instance.setTransform(72.7,142.8,1,1,0,0,0,60.5,16.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(278));

	// 图层_2
	this.instance_1 = new lib.元件6();
	this.instance_1.setTransform(2786.4,612.3,1,1,0,0,0,2866.3,612.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:129.3},277).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.9,-42.7,5732.6,1267.3);


(lib.背景 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// 图层_1
	this.instance = new lib.场景1();
	this.instance.setTransform(1532,594.3,1,1,0,0,0,1539,612.3);

	this.instance_1 = new lib.场景2();
	this.instance_1.setTransform(1552.2,594.3,1,1,0,0,0,1559.2,612.3);

	this.instance_2 = new lib.场景3();
	this.instance_2.setTransform(1380.1,594.3,1,1,0,0,0,1387.1,612.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.9,-60.7,5732.6,1267.3);


(lib.人物总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib.元件10();
	this.instance.setTransform(30.6,-339.4,1.27,1.27,0,0,0,62.6,24.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52));

	// 图层_2
	this.instance_1 = new lib.BDDZL_S0000();
	this.instance_1.setTransform(-229,-400);

	this.instance_2 = new lib.BDDZL_S0002();
	this.instance_2.setTransform(-229,-400);

	this.instance_3 = new lib.BDDZL_S0004();
	this.instance_3.setTransform(-229,-400);

	this.instance_4 = new lib.BDDZL_S0006();
	this.instance_4.setTransform(-229,-400);

	this.instance_5 = new lib.BDDZL_S0008();
	this.instance_5.setTransform(-229,-400);

	this.instance_6 = new lib.BDDZL_S0010();
	this.instance_6.setTransform(-229,-400);

	this.instance_7 = new lib.BDDZL_S0012();
	this.instance_7.setTransform(-229,-400);

	this.instance_8 = new lib.BDDZL_S0014();
	this.instance_8.setTransform(-229,-400);

	this.instance_9 = new lib.BDDZL_S0016();
	this.instance_9.setTransform(-229,-400);

	this.instance_10 = new lib.BDDZL_S0018();
	this.instance_10.setTransform(-229,-400);

	this.instance_11 = new lib.BDDZL_S0020();
	this.instance_11.setTransform(-229,-400);

	this.instance_12 = new lib.BDDZL_S0022();
	this.instance_12.setTransform(-229,-400);

	this.instance_13 = new lib.BDDZL_S0024();
	this.instance_13.setTransform(-229,-400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).wait(4));

	// 图层_5
	this.instance_14 = new lib.元件14();
	this.instance_14.setTransform(7.8,274.2,0.374,0.924,0,0,0,375.8,14.5);
	this.instance_14.alpha = 0.301;
	this.instance_14.filters = [new cjs.BlurFilter(219, 116, 1)];
	this.instance_14.cache(-46,-41,829,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.2,-400,532,800);


(lib.人物加快 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib.元件10();
	this.instance.setTransform(148.9,-265.6,1,1,0,0,0,62.7,24.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33));

	// 图层_2
	this.instance_1 = new lib.BDDPB_S0000();
	this.instance_1.setTransform(-160,-432);

	this.instance_2 = new lib.BDDPB_S0002();
	this.instance_2.setTransform(-160,-432);

	this.instance_3 = new lib.BDDPB_S0004();
	this.instance_3.setTransform(-160,-432);

	this.instance_4 = new lib.BDDPB_S0006();
	this.instance_4.setTransform(-160,-432);

	this.instance_5 = new lib.BDDPB_S0008();
	this.instance_5.setTransform(-160,-432);

	this.instance_6 = new lib.BDDPB_S0010();
	this.instance_6.setTransform(-160,-432);

	this.instance_7 = new lib.BDDPB_S0012();
	this.instance_7.setTransform(-160,-432);

	this.instance_8 = new lib.BDDPB_S0014();
	this.instance_8.setTransform(-160,-432);

	this.instance_9 = new lib.BDDPB_S0016();
	this.instance_9.setTransform(-160,-432);

	this.instance_10 = new lib.BDDPB_S0018();
	this.instance_10.setTransform(-160,-432);

	this.instance_11 = new lib.BDDPB_S0020();
	this.instance_11.setTransform(-160,-432);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-432,460,800);


(lib.人物合 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{正常:0,慢:1,快:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// 图层_1
	this.instance = new lib.人物总();
	this.instance.setTransform(312.5,545.5,1.363,1.363,0,0,0,0.3,0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKARQgGgBgDgDQgEgEgBgIIABgHQACgFAFgDQAFgCAFABIAAgCQALgBAFABQAMADACAJQACAFgDAIIgCAFQgDADgHABIgLACIgKgCg");
	this.shape.setTransform(319,346.4);

	this.instance_1 = new lib.人物总慢();
	this.instance_1.setTransform(312.7,546.1,1.363,1.363,0,0,0,0.3,0.2);

	this.instance_2 = new lib.人物加快();
	this.instance_2.setTransform(298.1,498,1.728,1.728,0,0,0,70,-31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,645,1090.4);


(lib.gai_1_311_92910 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.gai_1_310_81667();
	this.instance.setTransform(239,280,1,1,180);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:203,x:174.1,y:314.9},1).to({rotation:226.1,x:101.2,y:324.6},1).to({scaleX:1,scaleY:1,rotation:245.4,x:40.6,y:310},1).to({scaleX:1,scaleY:1,rotation:264.5,x:-9.3,y:271.7},1).to({scaleX:1,scaleY:1,rotation:283.5,x:-42.8,y:220.2},1).to({scaleX:1,scaleY:1,rotation:302.8,x:-58.6,y:161.5},1).to({rotation:321.9,x:-56.9,y:101.5},1).to({rotation:341.2,x:-37.6,y:44.9},1).to({scaleX:1,scaleY:1,rotation:360.3,x:2.3,y:-2.1},1).to({rotation:379.5,x:55.6,y:-31.9},1).to({scaleX:1,scaleY:1,rotation:391.3,x:92.5,y:-39.4},1).to({rotation:403.1,x:129.9,y:-39.1},1).to({scaleX:1,scaleY:1,rotation:414.9,x:166.8,y:-32.2},1).to({scaleX:1,scaleY:1,rotation:430.7,x:210.7,y:-13.9},1).to({scaleX:1,scaleY:1,rotation:446.2,x:249.4,y:14.7},1).to({rotation:461.8,x:280.6,y:52.4},1).to({rotation:477.3,x:300.2,y:98.6},1).to({rotation:493.1,x:304.1,y:148.9},1).to({rotation:508.7,x:293.2,y:197.2},1).to({scaleX:1,scaleY:1,rotation:524.5,x:269.4,y:240.8},1).to({scaleX:1,scaleY:1,rotation:540,x:239,y:280},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.gai_1_310_81667();
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:23,x:64.7,y:-34.8},1).to({rotation:46.1,x:137.7,y:-45.3},1).to({scaleX:1,scaleY:1,rotation:62.4,x:188.5,y:-32.3},1).to({scaleX:1,scaleY:1,rotation:78.5,x:231.5,y:-2.8},1).to({scaleX:1,scaleY:1,rotation:94.5,x:265.5,y:35.4},1).to({scaleX:1,scaleY:1,rotation:110.8,x:288.8,y:80.6},1).to({rotation:126.9,x:300.6,y:130.5},1).to({rotation:143.2,x:299.1,y:181.6},1).to({rotation:159.4,x:284.8,y:231.4},1).to({scaleX:1,scaleY:1,rotation:175.5,x:253.8,y:274.8},1).to({rotation:184.5,x:230.1,y:292.7},1).to({scaleX:1,scaleY:1,rotation:203,x:174.5,y:315.8},1).to({rotation:221.6,x:116,y:322.5},1).to({scaleX:1,scaleY:1,rotation:238.9,x:62.8,y:313.5},1).to({scaleX:1,scaleY:1,rotation:256.2,x:14.1,y:289.7},1).to({scaleX:1,scaleY:1,rotation:273.3,x:-25.8,y:252},1).to({scaleX:1,scaleY:1,rotation:290.8,x:-52.1,y:203.4},1).to({rotation:308.1,x:-62.6,y:148.7},1).to({rotation:325.4,x:-56.7,y:94.1},1).to({scaleX:1,scaleY:1,rotation:342.7,x:-35.1,y:43.1},1).to({scaleX:1,scaleY:1,rotation:360,x:0,y:0},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239,280);


(lib.匀速 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.gai_1_311_92910();
	this.instance.setTransform(-7.5,-13.9,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// 图层_3
	this.instance_1 = new lib.sprite28();
	this.instance_1.setTransform(56.9,56,0.539,0.539,0,0,0,232.8,237);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

	// 图层_5
	this.instance_2 = new lib.yun();
	this.instance_2.setTransform(0,3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A1gEyQhwlWByjjQAjhFA4g3QAbgbAUgSQDfh1DOAsQChAjBuB2QAEADGLgHIAAgIQSqgMAIAEIFcCgQAIAEABEDQABEFAJAEQAJAEjAAzQjBAzAJAEQAIADy6gLIAAgHQnigIADADQhuBPiZAZQgyAIguAAQjyAAifjUg");
	this.shape.setTransform(144.9,53.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,x:0,y:3}}]}).to({state:[{t:this.instance_2,p:{scaleX:0.95,scaleY:0.95,x:6,y:6}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3,302,114);


(lib.加速 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib.sprite28();
	this.instance.setTransform(9.5,53.1,0.539,0.539,0,0,0,232.8,237);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(2));

	// 图层_2
	this.instance_1 = new lib.gai_1_311_92910();
	this.instance_1.setTransform(-51.2,-11.9,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(3));

	// 图层_4
	this.instance_2 = new lib.下一页_();
	this.instance_2.setTransform(-50,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A1iEyQhxlWBzjjQAihFA4g3QAbgbAVgSQDfh1DOAsQChAjBuB2QADADEigFIAAgIIAsAAQT+gOAIAEIFLCgQAIAEABEDQABEFAIAEQAJAEi3AzQi3AzAIAEQAIAE06gOIAAgGQl4gHADADQhuBPiaAZQgxAIgvAAQjyAAiejUg");
	this.shape.setTransform(107.6,52.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,x:-50,y:0}}]}).to({state:[{t:this.instance_2,p:{scaleX:0.95,scaleY:0.95,x:-42,y:3}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,0,302,114);


(lib.减速 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.gai_1_311_92910();
	this.instance.setTransform(-7.5,-13.9,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// 图层_3
	this.instance_1 = new lib.sprite28();
	this.instance_1.setTransform(56.9,56,0.539,0.539,0,0,0,232.8,237);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

	// 图层_4
	this.instance_2 = new lib.加_();
	this.instance_2.setTransform(0,3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A2CEyQhxlWBzjjQAihFA4g3QAbgbAVgSQDfh1DOAsQChAjBuB2QADADFHgGIAAgJQUTgMAIAEIF6CgQAKAEABEDQABEFAJAEQAKAEjRAzQjRAzAJAEQAJAD0kgLIAAgIQmdgHADADQhuBPiaAZQgxAIgvAAQjyAAiejUg");
	this.shape.setTransform(148.3,53.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,x:0,y:3}}]}).to({state:[{t:this.instance_2,p:{scaleX:0.95,scaleY:0.95,x:6,y:6}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302,117);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _self=this,bgIndex=0,isFast=0,offset=0;
		
		window.app=_self;
		_self.btnNormal.visible=false;
		function setSpeed(){
			_self.bgLayer.children[0].framerate=isFast?100:60;
		}
		
		_self.on("tick",function(){
			offset+=1;
		
			
			if(offset>=15&&isFast){
				_self.stepText.text.text=parseInt(_self.stepText.text.text,10)+1;
				_self.moneyText.text=parseInt(_self.moneyText.text,10)+1;
				offset=0;
			}
			if(offset>=30&&!isFast){
				_self.stepText.text.text=parseInt(_self.stepText.text.text,10)+1;
				_self.moneyText.text=parseInt(_self.moneyText.text,10)+1;
				offset=0;
			}
			
		})
		
		/**减速**/
		_self.btnNormal.on("click",function(){
				_self.manLayer.gotoAndPlay(0)
				_self.btnNormal.visible=false;
				_self.btnFast.visible=true;
				isFast=0;
				setSpeed();
			
		})
		/**加速**/
		_self.btnFast.on("click",function(){
				_self.manLayer.gotoAndPlay(2)
				_self.btnFast.visible=false;
				_self.btnNormal.visible=true;
				isFast=1;
				setSpeed()
			})
		/**下一场景**/	
		_self.btnNext.on("click",function(){
				bgIndex++;
				if(bgIndex>2){
					bgIndex=0;
				}
				_self.bgLayer.gotoAndPlay(bgIndex);
				setSpeed();
		
		});
		
		/**跳转下载，为下载的组件命名（例子为goLink,如有调整下面也需调整），然后调用下面方法即可**/
		this.goLink.on("click",function(){
		
				window.linkApk&&window.linkApk();
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 截图按钮
	this.instance = new lib.截图();
	this.instance.setTransform(704.2,1079.3,1,1,0,0,0,37.5,37.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.截图(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 金币数
	this.moneyText = new cjs.Text("0", "bold 43px 'Microsoft YaHei'", "#FFFFFF");
	this.moneyText.name = "moneyText";
	this.moneyText.lineHeight = 59;
	this.moneyText.setTransform(568.8,160.9,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.moneyText).wait(1));

	// 步数
	this.stepText = new lib.元件17();
	this.stepText.setTransform(97.7,225.9,1,1,0,0,0,89.7,53.1);
	this.stepText.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.stepText).wait(1));

	// 图层_4
	this.instance_1 = new lib.元件16();
	this.instance_1.setTransform(717.4,277.1,1,1,0,0,0,19,64.1);
	this.instance_1.shadow = new cjs.Shadow("rgba(244,120,0,1)",1,1,1);

	this.instance_2 = new lib.元件15();
	this.instance_2.setTransform(214.2,212.3,1,1,0,0,0,21.8,20.9);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FCB209").ss(1,1,1).p("AAyAAQAAAUgPAPQgPAPgUAAQgTAAgPgPQgPgPAAgUQAAgUAPgPQAPgPATAAQAUAAAPAPQAPAPAAAUg");
	this.shape.setTransform(17.6,256.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAjQgPgPAAgUQAAgTAPgPQAPgPATAAQAUAAAPAPQAPAPAAATQAAAUgPAPQgPAPgUAAQgTAAgPgPg");
	this.shape_1.setTransform(17.6,256.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAE018").s().p("AhLAkQgfggAAgqQAAgtAfggQAggfArAAQAsAAAgAfQAfAgAAAtQAAAqgfAgQggAfgoBQQgvhQgggfg");
	this.shape_2.setTransform(17.3,260.9);

	this.instance_3 = new lib.元件13();
	this.instance_3.setTransform(662.7,232,0.9,0.9,0,0,0,33.9,12.9);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.instance_4 = new lib.元件12();
	this.instance_4.setTransform(678,281,0.9,0.9,0,0,0,16.2,12.9);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.instance_5 = new lib.元件11();
	this.instance_5.setTransform(635.9,320.4,0.9,0.9,0,0,0,64.6,15.5);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4B400").s().p("AgWBvIAAgCIgBAAIAAhVIhXAAIAAgDIgBAAIAAgrIAFAAIAAAAIBTAAIAAhYIAFAAIAAgBIAqAAIAABZIBYAAIAAAqIgEAAIAAAEIhUAAIAABUIgEAAIAAADg");
	this.shape_3.setTransform(555.8,178.3);

	this.instance_6 = new lib.金币();
	this.instance_6.setTransform(710.4,177.2,0.405,0.405,0,0,0,-174.1,-517);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.6)").s().p("At+EQQhUAAg6g7Qg7g7AAhTIAAiOQAAhTA7g6QA6g6BUgBIb+AAQBTABA6A6QA6A6ABBTIAACOQgBBTg6A7Qg6A7hTAAg");
	this.shape_4.setTransform(636,177.4,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance_6},{t:this.shape_3},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// top
	this.goLink = new lib.goLink();
	this.goLink.setTransform(375,67.5,1,1,0,0,0,375,67.5);

	this.timeline.addTween(cjs.Tween.get(this.goLink).wait(1));

	// 匀速按钮
	this.btnNormal = new lib.匀速();
	this.btnNormal.setTransform(144,1277,1,1,0,0,0,126,57);
	new cjs.ButtonHelper(this.btnNormal, 0, 1, 2, false, new lib.匀速(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnNormal).wait(1));

	// 按钮
	this.btnNext = new lib.加速();
	this.btnNext.setTransform(602,1280,1,1,0,0,0,126,54);
	new cjs.ButtonHelper(this.btnNext, 0, 1, 2, false, new lib.加速(), 3);

	this.btnFast = new lib.减速();
	this.btnFast.setTransform(144,1277,1,1,0,0,0,126,57);
	new cjs.ButtonHelper(this.btnFast, 0, 1, 2, false, new lib.减速(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnFast},{t:this.btnNext}]}).wait(1));

	// 人物
	this.manLayer = new lib.人物合();
	this.manLayer.setTransform(375.4,842.4,0.81,0.81,0,0,0,313.6,545.3);

	this.timeline.addTween(cjs.Tween.get(this.manLayer).wait(1));

	// 背景
	this.bgLayer = new lib.背景();
	this.bgLayer.setTransform(2529,737,1,1,0,0,0,2527,602);

	this.timeline.addTween(cjs.Tween.get(this.bgLayer).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(290.1,667,5732.6,1354.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;