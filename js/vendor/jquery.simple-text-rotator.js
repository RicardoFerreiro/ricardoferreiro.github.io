!function(n){var t={animation:"dissolve",separator:",",speed:2e3};n.fx.step.textShadowBlur=function(t){n(t.elem).prop("textShadowBlur",t.now).css({textShadow:"0 0 "+Math.floor(t.now)+"px black"})};n.fn.textrotator=function(i){var r=n.extend({},t,i);return this.each(function(){var t=n(this),i=[],u;n.each(t.text().split(r.separator),function(n,t){i.push(t)});t.text(i[0]);u=function(){var f,u;switch(r.animation){case"dissolve":t.animate({textShadowBlur:20,opacity:0},500,function(){u=n.inArray(t.text(),i);u+1==i.length&&(u=-1);t.text(i[u+1]).animate({textShadowBlur:0,opacity:1},500)});break;case"flip":t.find(".back").length>0&&t.html(t.find(".back").html());f=t.text();u=n.inArray(f,i);u+1==i.length&&(u=-1);t.html("");n("<span class='front'>"+f+"<\/span>").appendTo(t);n("<span class='back'>"+i[u+1]+"<\/span>").appendTo(t);t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({"-webkit-transform":" rotateY(-180deg)","-moz-transform":" rotateY(-180deg)","-o-transform":" rotateY(-180deg)",transform:" rotateY(-180deg)"});break;case"flipUp":t.find(".back").length>0&&t.html(t.find(".back").html());f=t.text();u=n.inArray(f,i);u+1==i.length&&(u=-1);t.html("");n("<span class='front'>"+f+"<\/span>").appendTo(t);n("<span class='back'>"+i[u+1]+"<\/span>").appendTo(t);t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({"-webkit-transform":" rotateX(-180deg)","-moz-transform":" rotateX(-180deg)","-o-transform":" rotateX(-180deg)",transform:" rotateX(-180deg)"});break;case"flipCube":t.find(".back").length>0&&t.html(t.find(".back").html());f=t.text();u=n.inArray(f,i);u+1==i.length&&(u=-1);t.html("");n("<span class='front'>"+f+"<\/span>").appendTo(t);n("<span class='back'>"+i[u+1]+"<\/span>").appendTo(t);t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({"-webkit-transform":" rotateY(180deg)","-moz-transform":" rotateY(180deg)","-o-transform":" rotateY(180deg)",transform:" rotateY(180deg)"});break;case"flipCubeUp":t.find(".back").length>0&&t.html(t.find(".back").html());f=t.text();u=n.inArray(f,i);u+1==i.length&&(u=-1);t.html("");n("<span class='front'>"+f+"<\/span>").appendTo(t);n("<span class='back'>"+i[u+1]+"<\/span>").appendTo(t);t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({"-webkit-transform":" rotateX(180deg)","-moz-transform":" rotateX(180deg)","-o-transform":" rotateX(180deg)",transform:" rotateX(180deg)"});break;case"spin":t.find(".rotating").length>0&&t.html(t.find(".rotating").html());u=n.inArray(t.text(),i);u+1==i.length&&(u=-1);t.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(i[u+1]).show().css({"-webkit-transform":" rotate(0) scale(1)","-moz-transform":"rotate(0) scale(1)","-o-transform":"rotate(0) scale(1)",transform:"rotate(0) scale(1)"});break;case"fade":t.fadeOut(r.speed,function(){u=n.inArray(t.text(),i);u+1==i.length&&(u=-1);t.text(i[u+1]).fadeIn(r.speed)})}};setInterval(u,r.speed)})}}(window.jQuery);