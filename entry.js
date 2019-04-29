var canvas, stage, exportRoot, anim_container, dom_overlay_container;
console.log("entry111")
require(["app/index"],function(){
	
console.log("index")
    var loadIndex=0,loaderFrames=0,loadView;
    var loadComp=Object.keys(AdobeAn.compositions).pop();
    var viewComp="";
    var lib=null;
    var app={
        init:function(){
            var _self=this;
            canvas = document.getElementById("canvas");
            anim_container = document.getElementById("animation_container");
            dom_overlay_container = document.getElementById("dom_overlay_container");
            var comp=AdobeAn.getComposition(loadComp);
            var loader = new createjs.LoadQueue(!0,"","Anonymous");
            loader.setMaxConnections(100);
            loader.installPlugin(createjs.Sound);
            loader.addEventListener("fileload", function(evt){
                var images=comp.getImages();
                if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
            });
            loader.addEventListener("complete", function(evt){_self.loadComplete(evt,comp)});
            lib=comp.getLibrary();
            loader.loadManifest(lib.properties.manifest,true,appUrl);

            document.addEventListener("visibilitychange", function(){
                document.hidden ? (createjs.Sound.stop("bgMusic")) :(createjs.Sound.play("bgMusic",{loop:-1})) ;
            });
            /**
             * º”‘ÿÕ≥º∆
             */
            Jsonp("//" + logDomain + baseUrl + "2.js?uid=" + uid + "&lt=" + pt.load() + "&key=" + key + adsys_param, null);
            loadtime = pt.load();
        },
        loadComplete:function(evt,comp){
            var _self=this;
            var ss=comp.getSpriteSheet();
            var queue = evt.target;
            var ssMetadata = lib.ssMetadata;
            for(i=0; i<ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
            }
            canvas.style.display = 'block';
            exportRoot = new lib.index();
            exportRoot.gotoAndStop(0);
            loaderFrames=exportRoot.totalFrames;

            stage = new lib.Stage(canvas);
            stage.enableMouseOver();
            _self.startAnimation();
            _self.makeResponsive(true,'both',true,1)
        },
        startAnimation:function(){
            var _self=this;
            stage.addChild(exportRoot);
            createjs.Ticker.useRAF=true;
            createjs.Ticker.setFPS(65);
            createjs.Ticker.addEventListener("tick", stage)
            _self.loadView();
        },
        makeResponsive:function(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS=1;
            var iwB = window.innerWidth, ihB= window.innerHeight;
            var eMask=document.getElementById("mask");
            window.addEventListener('resize', resizeCanvas);
            window.resizeCanvas=function(){resizeCanvas()};
            resizeCanvas(true);
            function resizeCanvas(isIm) {
                setTimeout(function(){
                    var w = lib.properties.width, h = lib.properties.height;
                    var iw = eMask.offsetWidth, ih= eMask.offsetHeight;
                    var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
                    if(isResp) {
                        sRatio = Math.min(xRatio, yRatio);
                    }
                    if((window.gconfig&&gconfig.referer&&gconfig.referer.match(/(uc|jrtt)/))) {
                        sRatio=xRatio;
                        document.body.style.position="relative";
                        document.body.style.height=h*sRatio+'px';
                    }
                    canvas.width = w*pRatio*sRatio;
                    canvas.height = h*pRatio*sRatio;
                    canvas.style.width = anim_container.style.width = dom_overlay_container.style.width = w*sRatio+'px';
                    canvas.style.height = anim_container.style.height = dom_overlay_container.style.height =  h*sRatio+'px';
                    stage.scaleX = pRatio*sRatio;
                    stage.scaleY = pRatio*sRatio;
                    lastW = iw; lastH = ih; lastS = sRatio;
                    stage.tickOnUpdate = false;
                    stage.update();
                    stage.tickOnUpdate = true;
                },isIm?0:150)

            }
        },
        loadView:function(){
            require(["app/index"],function(){
                var comps=Object.keys(AdobeAn.compositions);
                comps.forEach(function(comp){
                    if(comp!=loadComp){
                        viewComp=comp;
                    }
                });
                var comp=AdobeAn.getComposition(viewComp||loadComp);
                lib=comp.getLibrary();

                var loader = new createjs.LoadQueue(!0,"","Anonymous");
                var len=comp.getLibrary().properties.manifest.length;

                loader.setMaxConnections(100);
                loader.installPlugin(createjs.Sound);
                loader.addEventListener("fileload", function(evt){
                    var images=comp.getImages();
                    if (evt && (evt.item.type == "image")) {
                        images[evt.item.id] = evt.result;
                        loadIndex++;
                        exportRoot.gotoAndStop(loadIndex/len*loaderFrames);}
                });
                loader.addEventListener("complete", function(evt){
                    var ss=comp.getSpriteSheet();
                    var queue = evt.target;
                    var ssMetadata = lib.ssMetadata;
                    for(i=0; i<ssMetadata.length; i++) {
                        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
                    }
                    stage.removeAllChildren();
                    exportRoot=new lib.index();
                    stage.addChild(exportRoot);
                    canvas.style&&(canvas.style.backgroundColor="#000");
                    window.resizeCanvas(true);
                });
                loader.loadManifest(lib.properties.manifest,true,appUrl);
            })
        }
    };
    app.init();
})