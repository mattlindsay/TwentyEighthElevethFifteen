!function(t){"use strict";t.extend=function(e,n){if(e=e||{},arguments.length>2)for(var s=1;s<arguments.length;s++)t.extend(e,arguments[s]);else for(var r in n)e[r]=n[r];return e};var e=function(e){this.conf=t.extend({dateStart:new Date,dateEnd:new Date((new Date).getTime()+864e5),selector:".timer",msgBefore:"Get ready!",msgAfter:"It's over, sorry folks!",msgPattern:"{days} days, {hours} hours, {minutes} minutes and {seconds} seconds left.",onStart:null,onEnd:null},e),this.selector=document.querySelectorAll(this.conf.selector),this.interval=1e3,this.now=new Date,this.patterns=[{pattern:"{years}",secs:31536e3},{pattern:"{months}",secs:2628e3},{pattern:"{weeks}",secs:604800},{pattern:"{days}",secs:86400},{pattern:"{hours}",secs:3600},{pattern:"{minutes}",secs:60},{pattern:"{seconds}",secs:1}],this.init()};e.prototype.init=function(){this.defineInterval(),this.now<this.conf.dateEnd&&this.now>=this.conf.dateStart?(this.run(),this.callback("start")):this.outOfInterval()},e.prototype.run=function(){var e=this.now.valueOf()/1e3,n=this.conf.dateEnd.valueOf()/1e3,s=Math.abs(n-e),r=this,o=t.setInterval(function(){s--,s>0?r.display(s):(clearInterval(o),r.outOfInterval(),r.callback("end"))},this.interval);this.display(s)},e.prototype.display=function(t){for(var e=this.conf.msgPattern,n=0;n<this.patterns.length;n++){var s=this.patterns[n];if(-1!==this.conf.msgPattern.indexOf(s.pattern)){var r=Math.floor(t/s.secs);t-=r*s.secs,e=e.replace(s.pattern,r)}}for(var o=0;o<this.selector.length;o++)this.selector[o].innerHTML=e},e.prototype.defineInterval=function(){for(var t=this.patterns.length;t>0;t--){var e=this.patterns[t-1];if(-1!==this.conf.msgPattern.indexOf(e.pattern))return void(this.interval=1e3*e.secs)}},e.prototype.outOfInterval=function(){for(var t=this.now<this.conf.dateStart?this.conf.msgBefore:this.conf.msgAfter,e=0;e<this.selector.length;e++)this.selector[e].innerHTML=t},e.prototype.callback=function(e){e=e.capitalize(),"function"==typeof this.conf["on"+e]&&this.conf["on"+e](),"undefined"!=typeof t.jQuery&&t.jQuery(this.conf.selector).trigger("countdown"+e)},t.Countdown=e}(window);var weddingDay=new Countdown({selector:".wedding-day",dateEnd:new Date("2015/11/29 4:30 PM"),msgPattern:'Ceremony in {months} months, {days} days, {hours} hours, {minutes} minutes <span class="no-break">&amp; {seconds} seconds!</span>'});