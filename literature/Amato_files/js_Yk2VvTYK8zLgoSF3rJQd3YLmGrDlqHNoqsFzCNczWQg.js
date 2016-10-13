/*! http://tinynav.viljamis.com v1.1 by @viljamis */
(function(a,i,g){a.fn.tinyNav=function(j){var b=a.extend({active:"selected",header:"",label:""},j);return this.each(function(){g++;var h=a(this),d="tinynav"+g,f=".l_"+d,e=a("<select/>").attr("id",d).addClass("tinynav "+d);if(h.is("ul,ol")){""!==b.header&&e.append(a("<option/>").text(b.header));var c="";h.addClass("l_"+d).find("a").each(function(){c+='<option value="'+a(this).attr("href")+'">';var b;for(b=0;b<a(this).parents("ul, ol").length-1;b++)c+="- ";c+=a(this).text()+"</option>"});e.append(c);
b.header||e.find(":eq("+a(f+" li").index(a(f+" li."+b.active))+")").attr("selected",!0);e.change(function(){i.location.href=a(this).val()});a(f).after(e);b.label&&e.before(a("<label/>").attr("for",d).addClass("tinynav_label "+d+"_label").append(b.label))}})}})(jQuery,this,0);

/*!
 * jquery.customSelect() - v0.4.1
 * http://adam.co/lab/jquery/customselect/
 * 2013-05-13
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License
 */
(function(a){a.fn.extend({customSelect:function(c){if(typeof document.body.style.maxHeight==="undefined"){return this}var e={customClass:"customSelect",mapClass:true,mapStyle:true},c=a.extend(e,c),d=c.customClass,f=function(h,k){var g=h.find(":selected"),j=k.children(":first"),i=g.html()||"&nbsp;";j.html(i);if(g.attr("disabled")){k.addClass(b("DisabledOption"))}else{k.removeClass(b("DisabledOption"))}setTimeout(function(){k.removeClass(b("Open"));a(document).off("mouseup."+b("Open"))},60)},b=function(g){return d+g};return this.each(function(){var g=a(this),i=a("<span />").addClass(b("Inner")),h=a("<span />");g.after(h.append(i));h.addClass(d);if(c.mapClass){h.addClass(g.attr("class"))}if(c.mapStyle){h.attr("style",g.attr("style"))}g.addClass("hasCustomSelect").on("update",function(){f(g,h);var k=parseInt(g.outerWidth(),10)-(parseInt(h.outerWidth(),10)-parseInt(h.width(),10));h.css({display:"inline-block"});var j=h.outerHeight();if(g.attr("disabled")){h.addClass(b("Disabled"))}else{h.removeClass(b("Disabled"))}i.css({width:k,display:"inline-block"});g.css({"-webkit-appearance":"menulist-button",width:h.outerWidth(),position:"absolute",opacity:0,height:j,fontSize:h.css("font-size")})}).on("change",function(){h.addClass(b("Changed"));f(g,h)}).on("keyup",function(j){if(!h.hasClass(b("Open"))){g.blur();g.focus()}else{if(j.which==13||j.which==27){f(g,h)}}}).on("mousedown",function(j){h.removeClass(b("Changed"))}).on("mouseup",function(j){if(!h.hasClass(b("Open"))){if(a("."+b("Open")).not(h).length>0&&typeof InstallTrigger!=="undefined"){g.focus()}else{h.addClass(b("Open"));j.stopPropagation();a(document).one("mouseup."+b("Open"),function(k){if(k.target!=g.get(0)&&a.inArray(k.target,g.find("*").get())<0){g.blur()}else{f(g,h)}})}}}).focus(function(){h.removeClass(b("Changed")).addClass(b("Focus"))}).blur(function(){h.removeClass(b("Focus")+" "+b("Open"))}).hover(function(){h.addClass(b("Hover"))},function(){h.removeClass(b("Hover"))}).trigger("update")})}})})(jQuery);
;
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.1
 *
 */
(function(f){jQuery.fn.extend({slimScroll:function(h){var a=f.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:0.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:0.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},h);this.each(function(){function r(d){if(s){d=d||
window.event;var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);f(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function m(d,f,h){k=!1;var e=d,g=b.outerHeight()-c.outerHeight();f&&(e=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),e=Math.min(Math.max(e,0),g),e=0<d?Math.ceil(e):Math.floor(e),c.css({top:e+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
e=l*(b[0].scrollHeight-b.outerHeight());h&&(e=d,d=e/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),g),c.css({top:d+"px"}));b.scrollTop(e);b.trigger("slimscrolling",~~e);v();p()}function C(){window.addEventListener?(this.addEventListener("DOMMouseScroll",r,!1),this.addEventListener("mousewheel",r,!1),this.addEventListener("MozMousePixelScroll",r,!1)):document.attachEvent("onmousewheel",r)}function w(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),D);c.css({height:u+"px"});
var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function v(){w();clearTimeout(A);l==~~l?(k=a.allowPageScroll,B!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;B=l;u>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&g.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(A=setTimeout(function(){a.disableFadeOut&&s||(x||y)||(c.fadeOut("slow"),g.fadeOut("slow"))},1E3))}var s,x,y,A,z,u,l,B,D=30,k=!1,b=f(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),
c=b.parent().find("."+a.barClass),g=b.parent().find("."+a.railClass);w();if(f.isPlainObject(h)){if("height"in h&&"auto"==h.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",q);b.css("height",q)}if("scrollTo"in h)n=parseInt(a.scrollTo);else if("scrollBy"in h)n+=parseInt(a.scrollBy);else if("destroy"in h){c.remove();g.remove();b.unwrap();return}m(n,!1,!0)}}else{a.height="auto"==a.height?b.parent().height():a.height;n=f("<div></div>").addClass(a.wrapperClass).css({position:"relative",
overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var g=f("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=f("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?
"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?{right:a.distance}:{left:a.distance};g.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(g);a.railDraggable&&c.bind("mousedown",function(a){var b=f(document);y=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});
b.bind("mouseup.slimscroll",function(a){y=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});g.hover(function(){v()},function(){p()});c.hover(function(){x=!0},function(){x=!1});b.hover(function(){s=!0;v();p()},function(){s=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(z=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&
(m((z-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),z=b.originalEvent.touches[0].pageY)});w();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),m(0,!0)):"top"!==a.start&&(m(f(a.start).position().top,null,!0),a.alwaysVisible||c.hide());C()}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);;
(function ($, Drupal, window, document, undefined) {

	$(function(){//document.ready
/*
		var delay = 9000;
		var transition = 1000;

		var current = 0;
		var ww, auto, direction=1;

		$ss = $(".view-id-slideshow");
		$content = $(".view-content", $ss);
		$slides = $(".views-row", $ss);

		if ($slides[1]){ // if there's more than one slide!

			$(window).resize(function(){
				ww = $(window).width();
				$slides.width(ww);
				$content.width(ww*$slides.length);
				if ($content.is(':animated')){
					$content.stop(1,0).animate({left: -current*ww}, transition);
				}else{
					$content.css({left: -current*ww});
				}
					
			}).resize();

			function gotoslide(target){
				current = target;

				//update status
				$(".control").removeClass("active").eq(current).addClass("active");

				//change direction on edge cases for auto-cycle
				if (current == 0){direction = 1;}
				if (current >= $slides.length-1){direction = -1;}

				$content.animate({left: -ww*target}, transition);
			}

			//auto-cycle
			function cycle(){
				gotoslide(current + direction);
			}

			auto = setInterval(cycle, delay);
			$ss.hover(function(){
				clearInterval(auto);
			},function (){
				auto = setInterval(cycle, delay);
			});
						
			//add controls to slides
			$slides.slice(1)
				.find(".slide-content").append("<a class='prev' href='#'></a>");
			$slides.slice(0, $slides.length-1)
				.find(".slide-content").append("<a class='next' href='#'></a>");

			$(".prev", $ss).click(function(e){
				gotoslide(current-1);
				e.preventDefault();
			});

			$(".next", $ss).click(function(e){
				gotoslide(current+1);
				e.preventDefault();
			});

			//make indicator in the bottom..
			$status = $("<div>").addClass("slide-status");
			for (i=0; i<$slides.length; i++){
				$status.append("<a class='control'>");
				if (i==0) $status.find("a").addClass("active");
			}
			$ss.append($status);

			$(".control", $ss).click(function(){
				target = $(".control", $ss).index(this);
				gotoslide(target);
			});


		}//endif slidecount
		*/
	});
})(jQuery, Drupal, this, this.document);
;
/*
 * Color Thief v2.0
 * by Lokesh Dhakar - http://www.lokeshdhakar.com
 *
 * License
 * -------
 * Creative Commons Attribution 2.5 License:
 * http://creativecommons.org/licenses/by/2.5/
 *
 * Thanks
 * ------
 * Nick Rabinowitz - For creating quantize.js.
 * John Schulz - For clean up and optimization. @JFSIII
 * Nathan Spady - For adding drag and drop support to the demo page.
 *
 */


/*
  CanvasImage Class
  Class that wraps the html image element and canvas.
  It also simplifies some of the canvas context manipulation
  with a set of helper functions.
*/
var CanvasImage = function (image) {
    this.canvas  = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');

    document.body.appendChild(this.canvas);

    this.width  = this.canvas.width  = image.width;
    this.height = this.canvas.height = image.height;

    this.context.drawImage(image, 0, 0, this.width, this.height);
};

CanvasImage.prototype.clear = function () {
    this.context.clearRect(0, 0, this.width, this.height);
};

CanvasImage.prototype.update = function (imageData) {
    this.context.putImageData(imageData, 0, 0);
};

CanvasImage.prototype.getPixelCount = function () {
    return this.width * this.height;
};

CanvasImage.prototype.getImageData = function () {
    return this.context.getImageData(0, 0, this.width, this.height);
};

CanvasImage.prototype.removeCanvas = function () {
    this.canvas.parentNode.removeChild(this.canvas);
};


var ColorThief = function () {};

/*
 * getColor(sourceImage[, quality])
 * returns {r: num, g: num, b: num}
 *
 * Use the median cut algorithm provided by quantize.js to cluster similar
 * colors and return the base color from the largest cluster.
 *
 * Quality is an optional argument. It needs to be an integer. 0 is the highest quality settings.
 * 10 is the default. There is a trade-off between quality and speed. The bigger the number, the
 * faster a color will be returned but the greater the likelihood that it will not be the visually
 * most dominant color.
 *
 * */
ColorThief.prototype.getColor = function(sourceImage, quality) {
    var palette       = this.getPalette(sourceImage, 5, quality);
    var dominantColor = palette[0];
    return dominantColor;
};


/*
 * getPalette(sourceImage[, colorCount, quality])
 * returns array[ {r: num, g: num, b: num}, {r: num, g: num, b: num}, ...]
 *
 * Use the median cut algorithm provided by quantize.js to cluster similar colors.
 *
 * colorCount determines the size of the palette; the number of colors returned. If not set, it
 * defaults to 10.
 *
 * BUGGY: Function does not always return the requested amount of colors. It can be +/- 2.
 *
 * quality is an optional argument. It needs to be an integer. 0 is the highest quality settings.
 * 10 is the default. There is a trade-off between quality and speed. The bigger the number, the
 * faster the palette generation but the greater the likelihood that colors will be missed.
 *
 *
 */
ColorThief.prototype.getPalette = function(sourceImage, colorCount, quality) {

    if (typeof colorCount === 'undefined') {
        colorCount = 10;
    };
    if (typeof quality === 'undefined') {
        quality = 10;
    };

    // Create custom CanvasImage object
    var image      = new CanvasImage(sourceImage);
    var imageData  = image.getImageData();
    var pixels     = imageData.data;
    var pixelCount = image.getPixelCount();

    // Store the RGB values in an array format suitable for quantize function
    var pixelArray = [];
    for (var i = 0, offset, r, g, b, a; i < pixelCount; i = i + quality) {
        offset = i * 4;
        r = pixels[offset + 0];
        g = pixels[offset + 1];
        b = pixels[offset + 2];
        a = pixels[offset + 3];
        // If pixel is mostly opaque and not white
        if (a >= 125) {
            if (!(r > 250 && g > 250 && b > 250)) {
                pixelArray.push([r, g, b]);
            }
        }
    }

    // Send array to quantize function which clusters values
    // using median cut algorithm
    var cmap    = MMCQ.quantize(pixelArray, colorCount);
    var palette = cmap.palette();

    // Clean up
    image.removeCanvas();

    return palette;
};




/*!
 * quantize.js Copyright 2008 Nick Rabinowitz.
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */

// fill out a couple protovis dependencies
/*!
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 */
if (!pv) {
    var pv = {
        map: function(array, f) {
          var o = {};
          return f
              ? array.map(function(d, i) { o.index = i; return f.call(o, d); })
              : array.slice();
        },
        naturalOrder: function(a, b) {
            return (a < b) ? -1 : ((a > b) ? 1 : 0);
        },
        sum: function(array, f) {
          var o = {};
          return array.reduce(f
              ? function(p, d, i) { o.index = i; return p + f.call(o, d); }
              : function(p, d) { return p + d; }, 0);
        },
        max: function(array, f) {
          return Math.max.apply(null, f ? pv.map(array, f) : array);
        }
    };
}



/**
 * Basic Javascript port of the MMCQ (modified median cut quantization)
 * algorithm from the Leptonica library (http://www.leptonica.com/).
 * Returns a color map you can use to map original pixels to the reduced
 * palette. Still a work in progress.
 *
 * @author Nick Rabinowitz
 * @example

// array of pixels as [R,G,B] arrays
var myPixels = [[190,197,190], [202,204,200], [207,214,210], [211,214,211], [205,207,207]
                // etc
                ];
var maxColors = 4;

var cmap = MMCQ.quantize(myPixels, maxColors);
var newPalette = cmap.palette();
var newPixels = myPixels.map(function(p) {
    return cmap.map(p);
});

 */
var MMCQ = (function() {
    // private constants
    var sigbits = 5,
        rshift = 8 - sigbits,
        maxIterations = 1000,
        fractByPopulations = 0.75;

    // get reduced-space color index for a pixel
    function getColorIndex(r, g, b) {
        return (r << (2 * sigbits)) + (g << sigbits) + b;
    }

    // Simple priority queue
    function PQueue(comparator) {
        var contents = [],
            sorted = false;

        function sort() {
            contents.sort(comparator);
            sorted = true;
        }

        return {
            push: function(o) {
                contents.push(o);
                sorted = false;
            },
            peek: function(index) {
                if (!sorted) sort();
                if (index===undefined) index = contents.length - 1;
                return contents[index];
            },
            pop: function() {
                if (!sorted) sort();
                return contents.pop();
            },
            size: function() {
                return contents.length;
            },
            map: function(f) {
                return contents.map(f);
            },
            debug: function() {
                if (!sorted) sort();
                return contents;
            }
        };
    }

    // 3d color space box
    function VBox(r1, r2, g1, g2, b1, b2, histo) {
        var vbox = this;
        vbox.r1 = r1;
        vbox.r2 = r2;
        vbox.g1 = g1;
        vbox.g2 = g2;
        vbox.b1 = b1;
        vbox.b2 = b2;
        vbox.histo = histo;
    }
    VBox.prototype = {
        volume: function(force) {
            var vbox = this;
            if (!vbox._volume || force) {
                vbox._volume = ((vbox.r2 - vbox.r1 + 1) * (vbox.g2 - vbox.g1 + 1) * (vbox.b2 - vbox.b1 + 1));
            }
            return vbox._volume;
        },
        count: function(force) {
            var vbox = this,
                histo = vbox.histo;
            if (!vbox._count_set || force) {
                var npix = 0,
                    i, j, k;
                for (i = vbox.r1; i <= vbox.r2; i++) {
                    for (j = vbox.g1; j <= vbox.g2; j++) {
                        for (k = vbox.b1; k <= vbox.b2; k++) {
                             index = getColorIndex(i,j,k);
                             npix += (histo[index] || 0);
                        }
                    }
                }
                vbox._count = npix;
                vbox._count_set = true;
            }
            return vbox._count;
        },
        copy: function() {
            var vbox = this;
            return new VBox(vbox.r1, vbox.r2, vbox.g1, vbox.g2, vbox.b1, vbox.b2, vbox.histo);
        },
        avg: function(force) {
            var vbox = this,
                histo = vbox.histo;
            if (!vbox._avg || force) {
                var ntot = 0,
                    mult = 1 << (8 - sigbits),
                    rsum = 0,
                    gsum = 0,
                    bsum = 0,
                    hval,
                    i, j, k, histoindex;
                for (i = vbox.r1; i <= vbox.r2; i++) {
                    for (j = vbox.g1; j <= vbox.g2; j++) {
                        for (k = vbox.b1; k <= vbox.b2; k++) {
                             histoindex = getColorIndex(i,j,k);
                             hval = histo[histoindex] || 0;
                             ntot += hval;
                             rsum += (hval * (i + 0.5) * mult);
                             gsum += (hval * (j + 0.5) * mult);
                             bsum += (hval * (k + 0.5) * mult);
                        }
                    }
                }
                if (ntot) {
                    vbox._avg = [~~(rsum/ntot), ~~(gsum/ntot), ~~(bsum/ntot)];
                } else {
//                    console.log('empty box');
                    vbox._avg = [
                        ~~(mult * (vbox.r1 + vbox.r2 + 1) / 2),
                        ~~(mult * (vbox.g1 + vbox.g2 + 1) / 2),
                        ~~(mult * (vbox.b1 + vbox.b2 + 1) / 2)
                    ];
                }
            }
            return vbox._avg;
        },
        contains: function(pixel) {
            var vbox = this,
                rval = pixel[0] >> rshift;
                gval = pixel[1] >> rshift;
                bval = pixel[2] >> rshift;
            return (rval >= vbox.r1 && rval <= vbox.r2 &&
                    gval >= vbox.g1 && gval <= vbox.g2 &&
                    bval >= vbox.b1 && bval <= vbox.b2);
        }
    };

    // Color map
    function CMap() {
        this.vboxes = new PQueue(function(a,b) {
            return pv.naturalOrder(
                a.vbox.count()*a.vbox.volume(),
                b.vbox.count()*b.vbox.volume()
            )
        });;
    }
    CMap.prototype = {
        push: function(vbox) {
            this.vboxes.push({
                vbox: vbox,
                color: vbox.avg()
            });
        },
        palette: function() {
            return this.vboxes.map(function(vb) { return vb.color });
        },
        size: function() {
            return this.vboxes.size();
        },
        map: function(color) {
            var vboxes = this.vboxes;
            for (var i=0; i<vboxes.size(); i++) {
                if (vboxes.peek(i).vbox.contains(color)) {
                    return vboxes.peek(i).color;
                }
            }
            return this.nearest(color);
        },
        nearest: function(color) {
            var vboxes = this.vboxes,
                d1, d2, pColor;
            for (var i=0; i<vboxes.size(); i++) {
                d2 = Math.sqrt(
                    Math.pow(color[0] - vboxes.peek(i).color[0], 2) +
                    Math.pow(color[1] - vboxes.peek(i).color[1], 2) +
                    Math.pow(color[2] - vboxes.peek(i).color[2], 2)
                );
                if (d2 < d1 || d1 === undefined) {
                    d1 = d2;
                    pColor = vboxes.peek(i).color;
                }
            }
            return pColor;
        },
        forcebw: function() {
            // XXX: won't  work yet
            var vboxes = this.vboxes;
            vboxes.sort(function(a,b) { return pv.naturalOrder(pv.sum(a.color), pv.sum(b.color) )});

            // force darkest color to black if everything < 5
            var lowest = vboxes[0].color;
            if (lowest[0] < 5 && lowest[1] < 5 && lowest[2] < 5)
                vboxes[0].color = [0,0,0];

            // force lightest color to white if everything > 251
            var idx = vboxes.length-1,
                highest = vboxes[idx].color;
            if (highest[0] > 251 && highest[1] > 251 && highest[2] > 251)
                vboxes[idx].color = [255,255,255];
        }
    };

    // histo (1-d array, giving the number of pixels in
    // each quantized region of color space), or null on error
    function getHisto(pixels) {
        var histosize = 1 << (3 * sigbits),
            histo = new Array(histosize),
            index, rval, gval, bval;
        pixels.forEach(function(pixel) {
            rval = pixel[0] >> rshift;
            gval = pixel[1] >> rshift;
            bval = pixel[2] >> rshift;
            index = getColorIndex(rval, gval, bval);
            histo[index] = (histo[index] || 0) + 1;
        });
        return histo;
    }

    function vboxFromPixels(pixels, histo) {
        var rmin=1000000, rmax=0,
            gmin=1000000, gmax=0,
            bmin=1000000, bmax=0,
            rval, gval, bval;
        // find min/max
        pixels.forEach(function(pixel) {
            rval = pixel[0] >> rshift;
            gval = pixel[1] >> rshift;
            bval = pixel[2] >> rshift;
            if (rval < rmin) rmin = rval;
            else if (rval > rmax) rmax = rval;
            if (gval < gmin) gmin = gval;
            else if (gval > gmax) gmax = gval;
            if (bval < bmin) bmin = bval;
            else if (bval > bmax)  bmax = bval;
        });
        return new VBox(rmin, rmax, gmin, gmax, bmin, bmax, histo);
    }

    function medianCutApply(histo, vbox) {
        if (!vbox.count()) return;

        var rw = vbox.r2 - vbox.r1 + 1,
            gw = vbox.g2 - vbox.g1 + 1,
            bw = vbox.b2 - vbox.b1 + 1,
            maxw = pv.max([rw, gw, bw]);
        // only one pixel, no split
        if (vbox.count() == 1) {
            return [vbox.copy()]
        }
        /* Find the partial sum arrays along the selected axis. */
        var total = 0,
            partialsum = [],
            lookaheadsum = [],
            i, j, k, sum, index;
        if (maxw == rw) {
            for (i = vbox.r1; i <= vbox.r2; i++) {
                sum = 0;
                for (j = vbox.g1; j <= vbox.g2; j++) {
                    for (k = vbox.b1; k <= vbox.b2; k++) {
                        index = getColorIndex(i,j,k);
                        sum += (histo[index] || 0);
                    }
                }
                total += sum;
                partialsum[i] = total;
            }
        }
        else if (maxw == gw) {
            for (i = vbox.g1; i <= vbox.g2; i++) {
                sum = 0;
                for (j = vbox.r1; j <= vbox.r2; j++) {
                    for (k = vbox.b1; k <= vbox.b2; k++) {
                        index = getColorIndex(j,i,k);
                        sum += (histo[index] || 0);
                    }
                }
                total += sum;
                partialsum[i] = total;
            }
        }
        else {  /* maxw == bw */
            for (i = vbox.b1; i <= vbox.b2; i++) {
                sum = 0;
                for (j = vbox.r1; j <= vbox.r2; j++) {
                    for (k = vbox.g1; k <= vbox.g2; k++) {
                        index = getColorIndex(j,k,i);
                        sum += (histo[index] || 0);
                    }
                }
                total += sum;
                partialsum[i] = total;
            }
        }
        partialsum.forEach(function(d,i) {
            lookaheadsum[i] = total-d
        });
        function doCut(color) {
            var dim1 = color + '1',
                dim2 = color + '2',
                left, right, vbox1, vbox2, d2, count2=0;
            for (i = vbox[dim1]; i <= vbox[dim2]; i++) {
                if (partialsum[i] > total / 2) {
                    vbox1 = vbox.copy();
                    vbox2 = vbox.copy();
                    left = i - vbox[dim1];
                    right = vbox[dim2] - i;
                    if (left <= right)
                        d2 = Math.min(vbox[dim2] - 1, ~~(i + right / 2));
                    else d2 = Math.max(vbox[dim1], ~~(i - 1 - left / 2));
                    // avoid 0-count boxes
                    while (!partialsum[d2]) d2++;
                    count2 = lookaheadsum[d2];
                    while (!count2 && partialsum[d2-1]) count2 = lookaheadsum[--d2];
                    // set dimensions
                    vbox1[dim2] = d2;
                    vbox2[dim1] = vbox1[dim2] + 1;
//                    console.log('vbox counts:', vbox.count(), vbox1.count(), vbox2.count());
                    return [vbox1, vbox2];
                }
            }

        }
        // determine the cut planes
        return maxw == rw ? doCut('r') :
            maxw == gw ? doCut('g') :
            doCut('b');
    }

    function quantize(pixels, maxcolors) {
        // short-circuit
        if (!pixels.length || maxcolors < 2 || maxcolors > 256) {
//            console.log('wrong number of maxcolors');
            return false;
        }

        // XXX: check color content and convert to grayscale if insufficient

        var histo = getHisto(pixels),
            histosize = 1 << (3 * sigbits);

        // check that we aren't below maxcolors already
        var nColors = 0;
        histo.forEach(function() { nColors++ });
        if (nColors <= maxcolors) {
            // XXX: generate the new colors from the histo and return
        }

        // get the beginning vbox from the colors
        var vbox = vboxFromPixels(pixels, histo),
            pq = new PQueue(function(a,b) { return pv.naturalOrder(a.count(), b.count()) });
        pq.push(vbox);

        // inner function to do the iteration
        function iter(lh, target) {
            var ncolors = 1,
                niters = 0,
                vbox;
            while (niters < maxIterations) {
                vbox = lh.pop();
                if (!vbox.count())  { /* just put it back */
                    lh.push(vbox);
                    niters++;
                    continue;
                }
                // do the cut
                var vboxes = medianCutApply(histo, vbox),
                    vbox1 = vboxes[0],
                    vbox2 = vboxes[1];

                if (!vbox1) {
//                    console.log("vbox1 not defined; shouldn't happen!");
                    return;
                }
                lh.push(vbox1);
                if (vbox2) {  /* vbox2 can be null */
                    lh.push(vbox2);
                    ncolors++;
                }
                if (ncolors >= target) return;
                if (niters++ > maxIterations) {
//                    console.log("infinite loop; perhaps too few pixels!");
                    return;
                }
            }
        }

        // first set of colors, sorted by population
        iter(pq, fractByPopulations * maxcolors);

        // Re-sort by the product of pixel occupancy times the size in color space.
        var pq2 = new PQueue(function(a,b) {
            return pv.naturalOrder(a.count()*a.volume(), b.count()*b.volume())
        });
        while (pq.size()) {
            pq2.push(pq.pop());
        }

        // next set - generate the median cuts using the (npix * vol) sorting.
        iter(pq2, maxcolors - pq2.size());

        // calculate the actual colors
        var cmap = new CMap();
        while (pq2.size()) {
            cmap.push(pq2.pop());
        }

        return cmap;
    }

    return {
        quantize: quantize
    }
})();
;
(function ($, Drupal, window, document, undefined) {

  $.fn.reverse = [].reverse;

  $.fn.slideLeftShow = function(speed, callback) {
    this.css({
      height: "show",
      paddingBottom: "show"
    });
    this.animate({
      width: "show",
      paddingLeft: "show",
      paddingRight: "show",
      marginLeft: "show",
      marginRight: "show"
    }, speed, callback);
  };



  $(function(){
    
 

    function partnerRowsSetUp(){
         var divs = $( ".view-id-partners.view-display-id-panel_pane_4 .views-row" )
         for(var i = 0; i < divs.length; i+=3) {
           //console.log($(divs[i]).find('.toggleable-fieldset.partner-body'));
            divs.slice(i, i+3).wrapAll("<div class='partner-grid-row'></div>");
         }
         $( ".view-id-partners.view-display-id-panel_pane_4 .partner-grid-row .views-row:nth-of-type(2n)" ).addClass('second')
         $( ".view-id-partners.view-display-id-panel_pane_4 .partner-grid-row .views-row:nth-of-type(3n)" ).addClass('third')
    }   
    

   $(".contextual-menu-band ul.menu").tinyNav(
     {'active' : 'active'}
   );
    $('.tinynav').customSelect();
 
    
    $('.responsive .views-exposed-widget label').live('click',function(){
      if(window.outerWidth < 768){
        $(this).parent('.views-exposed-widget').toggleClass('toggled');
      }
    });

    
    /* Content button dropdown */
   $(document).ready(function(){
   	$(".toggleable-fieldset").hide();
   	partnerRowsSetUp();
   });

   $(document).ajaxComplete(function(){
    $(".toggleable-fieldset").hide();
    partnerRowsSetUp();
   });

   $("#openButton, #closeButton").live('click',function () {
     
     $viewsRow = $(this).closest('.views-row');
     
     /* close all other fieldsets */
     $view = $(this).closest('.view');
     $view.find('.views-row').not($viewsRow).find('.toggleable-fieldset').slideUp("slow"); 
     $view.find('.views-row').not($viewsRow).removeClass( "toggle-open");
       	

   	if($viewsRow.hasClass('toggle-open')){
   		$viewsRow.removeClass( "toggle-open");
   		$viewsRow.find('.toggleable-fieldset').slideUp("slow");
   	}else{
   		$viewsRow.addClass('toggle-open');
   		$viewsRow.find('.toggleable-fieldset').slideDown("slow");
   	}

   });
   /*
    $("#openButton").click(function () {
      // News view
      $(".view-news .views-row .views-field-body-1").toggle("slow");
      $(".view-news .views-row .views-field-body").toggle("slow");
      // Leadership view
      $(".view-biography .views-row .views-field-body").toggle("slow");
      // Find a Partner view
      $(".view-partners.view-display-id-panel_pane_2 .views-row .views-field-body-1").toggle();
      $(".view-partners.view-display-id-panel_pane_2 .views-row .views-field-body").toggle();
      // Customers - Industry/Use Case views
      $(".view-customers.view-display-id-panel_pane_2 .views-row .views-field-body").toggle();
      $(".view-customers.view-display-id-panel_pane_3 .views-row .views-field-body").toggle();
    });
	*/

  $(".view-id-partners.view-display-id-panel_pane_4 #openButton, #closeButton").live('click',function () {
  $viewsRow = $(this).closest('.views-row');

/*
      if($viewsRow.hasClass('toggle-open')){
        $viewsRow.removeClass( "toggle-open");
        $viewsRow.find('.toggleable-fieldset').slideUp("slow");
      }else{
        $viewsRow.addClass('toggle-open');
        $viewsRow.find('.toggleable-fieldset').slideDown("slow");
      }
 */ 
 }); 
     
  //
  

    /*admin page view key*/
    $('#view-key-modal').dialog({
      dialogClass: 'mapr-key-ui',
      draggable: true,
      resizable: false,
      autoOpen: false,
      modal: true,
      width: 930,
      open: function( event, ui ) {

      }
    });

    $("a.view-key").live("click", function(e){
      e.preventDefault();
      dialogTitle = $(this).closest('fieldset.form-wrapper').find('.fieldset-legend').text();

      dialogContent = $(this).siblings( ".key-contents" ).html();
      $( "#view-key-modal .modal-contents" ).html(dialogContent);
      $( "#view-key-modal" ).dialog('open');
      $( "#view-key-modal" ) .dialog('option', 'title', dialogTitle);
    });

    /*search-box in the header!*/
    $("#block-panels-mini-header-utility .pane-search-form input.form-text").hide();
     $("#block-panels-mini-header-utility-fr .pane-search-form input.form-text").hide();

    $("#block-panels-mini-header-utility .pane-search-form input.form-submit").one("click",function(e){
      $("#block-panels-mini-header-utility .pane-search-form input.form-text").slideLeftShow(300,function(){
        $(this).focus();
      });
      e.preventDefault();
    });
    $("#block-panels-mini-header-utility-fr .pane-search-form input.form-submit").one("click",function(e){
      $("#block-panels-mini-header-utility-fr .pane-search-form input.form-text").slideLeftShow(300,function(){
        $(this).focus();
      });
      e.preventDefault();
    });
    /*slim scrollbars! http://rocha.la/jQuery-slimScroll*/
    /*front page events block*/
    $(".view-id-events.view-display-id-block").css({paddingRight: "10px"}).slimScroll({
      height: '250px',//auto possible if you want to set height in css
      railVisible: true,
      alwaysVisible: true
    });

    /*front page news block*/
    $(".view-id-news.view-display-id-block").css({paddingRight: "10px"}).slimScroll({
      height: '250px',//auto possible if you want to set height in css
      railVisible: true,
      alwaysVisible: true
    });

    /*front page blogs block*/
    $(".view-id-blog.view-display-id-block").css({paddingRight: "10px"}).slimScroll({
      height: '250px',//auto possible if you want to set height in css
      railVisible: true,
      alwaysVisible: true
    });

    /*smooth scrolling anchors*/
    var $root = $('html, body');

    /* $("a[href*=#]").click(function(e) {
      //make sure the hash is on this page!
      if (this.pathname == window.location.pathname){
        e.preventDefault();

        var target = this.hash;

        if ($(target)[0]){makehot(this.hash);}


        $root.animate({
          scrollTop: $(target).offset().top - 60
          }, 500, function () {
            window.location.hash = target;
        });
      }
    });
*/

      /*anchor menu like on resources section*/
      /****/
 
      $menu = $(".region-sidebar-first");
      $links = $(".menu a[href*=#]", $menu);
      $linksbackwards = $links.reverse();    
      
      if ($(".region-sidebar-first .block-views")[0]){//if there's a menu

        //configure how many pixels before #id is at the top
        //to change active state in the flayout menu
        var earlyswitchdistance = 150;
        function makehot(target){
          //add active classes to appropriate anchors
          $links.removeClass("hot");
          $links.filter("[href*="+target+"]").addClass("hot");

          //do it in thecontextual menu band, too
          if ($(".contextual-menu-band a").filter("[href*="+target+"]")[0]){
            $(".contextual-menu-band a").removeClass("active-trail")
              .filter("[href*="+target+"]").addClass("active-trail");
          }
        }

       

    }//endif menu exists


if ($(".region-sidebar-first .block-menu-block")[0]){//if there's a menu

        //configure how many pixels before #id is at the top
        //to change active state in the flayout menu
        var earlyswitchdistance = 150;
        function makehot(target){
          //add active classes to appropriate anchors
          $links.removeClass("hot");
          $links.filter("[href*="+target+"]").addClass("hot");

          //do it in thecontextual menu band, too
          if ($(".contextual-menu-band a").filter("[href*="+target+"]")[0]){
            $(".contextual-menu-band a").removeClass("active-trail")
              .filter("[href*="+target+"]").addClass("active-trail");
          }
        }


         
      

    }//endif menu exists



  });
  
  

  $(function(){
	  /* Content button dropdown */
	  $(".image-style-link_to_video a").click(function (e) {
	  	e.preventDefault();
	  	$url = $(this).attr('href');
	  	$dialog_content =  '<iframe width="560" height="315" src="//'+$url+'" frameborder="0" allowfullscreen></iframe>';
	  	jQuery("#video-dialog").html($dialog_content);


	  	jQuery("#video-dialog").dialog({ modal: true,width: 610, dialogClass:"mapr-ui",resizable:false,draggable:false,
	  	beforeClose: function( event, ui ) {
	  		jQuery("#video-dialog").html('');
	  	}
	  	});

	  });
  });


  // Add parent class to parent nav ul.menu
  $(function() {
    $("#navigation ul.menu").addClass('parent');
    $("#navigation ul.menu ul.menu").removeClass('parent');
  });

  // Mobile menu
  $(document).ready(function() {
    var menuclass = "#navigation ul.menu.parent";
    $(menuclass).addClass("js").before("<div id=\"mobileMenuWrapper\"><div id=\"mobileMenu\">Menu</div></div>");

    $("#mobileMenu").click(function (e) {
      console.log(menuclass);
      $(menuclass).toggleClass("open");
     // $(menuclass).toggle();
      $("body").toggleClass("active");
      $("#mobileMenu").toggleClass("active");
      e.preventDefault();
    });
  });
  
  
 
  $(document).ready(function() {
    
    /*
    image = $('.view-id-hero_banner img');
    //console.log(image);
    if(image[0] != undefined){
      image = image[0];
      var colorThief = new ColorThief();
      var color                    = colorThief.getColor(image);
      //var palette                  = colorThief.getPalette(image);
      $('#behindheader').attr('style', 'background-color: rgb('+color[0]+', '+color[1]+', '+color[2]+')'); 
    }
    */
  })
  
  
  $(document).ready(function() {
    $(".blog-sign-up .webform-component-email input").attr('placeholder', 'email@website.com');
    
    $pane = $('.pane-search-form')
    $label = $pane.find('.views-exposed-widget label').text().trim();
    $pane.find('input.form-text').attr('placeholder', $label);
  })


//partner form
  $(document).ready(function() {
    
      $('#general-dialog').dialog({
        dialogClass: 'mapr-modal-ui',
        draggable: true,
        resizable: false,
        autoOpen: false,
        modal: true,
        width: 930,
        height: 600,
        open: function( event, ui ) {
  
        },
        beforeClose: function( event, ui ) {
          jQuery("#general-dialog").html('');
        }
      });
    
    $('#webform-component-terms-and-conditions > label').wrap( "<a class='trigger-terms-info' href='#'></a>" );
    $('#webform-component-terms-and-conditions a.trigger-terms-info').live('click', function(e){
      e.preventDefault();
     
       $termsText = $('#webform-component-terms-and-conditions---text').html();
       $( "#general-dialog" ).html($termsText);

      dialogTitle = 'MapR Advantage Partner Program Agreement';
      $( "#general-dialog" ).dialog('open');
      $( "#general-dialog" ) .dialog('option', 'title', dialogTitle);
      
      
    })
  });


   $(document).ready(function(){
     if(window.location.pathname.indexOf('/download/file-retreive/') > -1){
       $pathname = window.location.pathname;
       $version = $pathname.replace('/download/file-retreive/', '');
       if( $( "body.logged-in" ).length ){       
          variable = mktoMunchkinFunction('visitWebPage', {
              url: $pathname, params: 'track=true'
          });
        }
     }     
   });

})(jQuery, Drupal, this, this.document);
;
