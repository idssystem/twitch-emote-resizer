(this["webpackJsonptwitch-emote-resizer-react"]=this["webpackJsonptwitch-emote-resizer-react"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},31:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(19),i=c.n(s),r=(c(26),c(27),c(4)),o=c(3),l=(c(28),c(29),c(0));var j=function(e){var t=e.clickHandler,c=e.children;return Object(l.jsx)("div",{className:"Button",onClick:t,children:c})};c(31);var u=function(e){var t=e.progress;return Object(l.jsx)("div",{className:"ProgressBar",children:Object(l.jsx)("div",{className:"ProgressBarInner",style:{width:"".concat(t,"%")}})})},d=c(20),h=c.n(d),b=c(10),g=c(21),O=c.n(g),f=c(14);c(58),c(59);var m=function(e){var t=e.initialState,c=e.onToggle,a=Object(n.useState)(t),s=Object(o.a)(a,2),i=s[0],r=s[1];return Object(l.jsx)("div",{className:"ToggleSwitch"+(i?" On":""),onClick:function(){r(!i),c(!i)},children:Object(l.jsx)("div",{className:"Inner"})})},v=/*c.p+*/"static/media/moon.a82cae44.svg";var x=function(e){var t=e.emoteDataUrl,c=e.badgeDataUrl,a=Object(n.useState)(!1),s=Object(o.a)(a,2),i=s[0],r=s[1];return Object(l.jsxs)("div",{className:"TwitchPreview"+(i?" Light":""),children:[Object(l.jsxs)("div",{className:"ChatMessage",children:[Object(l.jsx)("img",{className:"BadgePreview",src:c}),Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"Username",children:"tee_maw"}),": "]}),Object(l.jsx)("img",{className:"EmotePreview",src:t})]}),Object(l.jsxs)("div",{className:"DarkToggle",children:[Object(l.jsx)("img",{src:v,className:"MoonIcon"+(i?" Light":"")}),Object(l.jsx)(m,{initialState:!i,onToggle:function(e){return r(!e)}})]})]})},p=/*c.p+*/"static/media/image.f5cc0096.svg";c(60);var w=function(e){var t=e.children,c=(e.progressText,e.size),n=e.fileSize;return Object(l.jsxs)("div",{className:"ResizedImage",children:[Object(l.jsx)("div",{className:"Preview",children:t}),Object(l.jsxs)("div",{className:"Info",children:[Object(l.jsxs)("span",{children:[c,"px x ",c,"px"]}),Object(l.jsxs)("span",{className:"FileSize",children:[n,"KB"]})]})]})};function N(e){if(null===e)return 0;return Math.round((e.toDataURL("image/png").length-"data:image/png;base64,".length)*(3/4))}function z(e){return(e/1024).toFixed(2)}var y=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(o.a)(s,2),d=i[0],g=i[1],m=Object(n.useState)(""),v=Object(o.a)(m,2),y=v[0],R=v[1],C=Object(n.useState)(""),S=Object(o.a)(C,2),D=S[0],T=S[1],I=Object(n.useState)(""),L=Object(o.a)(I,2),B=L[0],k=L[1],P=Object(n.useState)(""),U=Object(o.a)(P,2),H=U[0],M=U[1],E=Object(n.useState)(""),A=Object(o.a)(E,2),W=A[0],F=A[1],G=Object(n.useRef)(null),q=Object(n.useRef)(null),J=Object(n.useRef)(null),K=[],Y=Object(n.useRef)(null);K.push(Y);var V=Object(n.useRef)(null);K.push(V);var Z=Object(n.useRef)(null);K.push(Z);var _=Object(n.useRef)(null);K.push(_);var Q=Object(n.useRef)(null);K.push(Q);var X=Object(n.useRef)(null);K.push(X);var $=function(e){e.current.toBlob((function(t){Object(f.saveAs)(t,"".concat(B,"@").concat(e.current.width,".png"))}))};return Object(l.jsxs)("div",{className:"DropZone "+(c?" Dragging":"")+(d>0&&d<100?" Loading":"")+(100===d?" Done":""),

onDrop:function(e){e.preventDefault();e.stopPropagation();a(!1);
	let [ge,gb,gp]=(e.dataTransfer.files.length-1)?[confirm('store emotes in archive?'),confirm('store badges in archive?'),confirm('apng-frames have been passed, convert them to apng.')]:[0,0,0],as=0,plog=o=>{console.log(o);return o};
	if(e.dataTransfer.files.length-1&&!ge&&!gb)return;
	if(gp)
		as=parseInt(prompt('seconds between frames?', 500))||(gp=0);
	e.dataTransfer.files[0]&&(k(e.dataTransfer.files[0].name.split(".")[0]),T(URL.createObjectURL(e.dataTransfer.files[0])),g(1),R("Loading image..."));
	if(e.dataTransfer.files[1]){
		let dz=document.getElementsByClassName('DropZone')[0],
		_=[...e.dataTransfer.files],
		cn=_[0].name.split('.')[0],
		t,
		c=new O.a,
		n=Object(r.a)(K),
		ix=1,
		fl={},
		pl={},
		plc=0,
		im=setInterval(()=>{
			if(dz.classList.contains('Done')){
				if(ix<_.length){
					dz.classList.remove('Done');
					dz.classList.add('Loading');
					d=0;
				}
				try{
					var xx=0,
					a=function(){
						if(!(xx<3?ge:gb))
							return;
						var e=t.value;
						if(gp){
							(pl[e.current.width]||(pl[e.current.width]={w:e.current.width,h:e.current.height,d:[]})).d.push(
								e.current.getContext('2d').getImageData(0,0,e.current.width,e.current.height).data
							);
							fl["".concat(cn,"@").concat(e.current.width,".png")]=1;
							Object.keys(fl).length===(K.length/2*(ge+gb))*_.length&&(
								clearInterval(im),
								console.log(as),
								Object.entries(pl).forEach(([f,b])=>
									c.file("animation@"+f+".png",UPNG.encode(b.d,b.w,b.h,0,b.d.map(x=>as)))
								),
								c.generateAsync({type:"blob"}).then((function(e){
									Object(f.saveAs)(e,"Animation-"+Date.now()+".zip")
								}))
							);
						}else
							e.current.toBlob((function(t){
								fl["".concat(cn,"@").concat(e.current.width,".png")]=t;
								Object.keys(fl).length===(K.length/2*(ge+gb))*_.length&&(
									clearInterval(im),
									Object.entries(fl).forEach(([f,b])=>c.file(f,b)),
									c.generateAsync({type:"blob"}).then((function(e){
										Object(f.saveAs)(e,"Images-"+Date.now()+".zip")
									}))
								)
							}))
					};
					for(n.s();!(t=n.n()).done;xx++)
						a()
				}catch(s){
					n.e(s)
				}finally{
					n.f()
				}
			}
			Object.keys(fl).length===(K.length/2*(ge+gb))*ix&&_[ix]&&(
				k(cn=_[ix].name.split(".")[0]),
				T(URL.createObjectURL(_[ix])),
				g(1),
				R("Loading image..."),
				ix++
			)
		}, 100)
	}
},

onDragEnter:function(e){e.preventDefault(),e.stopPropagation(),a(!0)},onDragLeave:function(e){e.preventDefault(),e.stopPropagation(),a(!1)},onDragOver:function(e){e.preventDefault(),e.stopPropagation()},children:[Object(l.jsx)("img",{className:"SourceImage",src:D,ref:q,onLoad:function(e){var t=q.current.naturalWidth,c=q.current.naturalHeight,n=Math.max(t,c);J.current.width=n,J.current.height=n;var a=J.current.getContext("2d"),s=Math.round((n-t)/2),i=Math.round((n-c)/2);a.drawImage(q.current,s,i);var o=0,l=0;g(10),R("Resizing image... (".concat(o,"/").concat(K.length,")"));var j,u=new h.a,d=Object(r.a)(K);try{var O=function(){var e=j.value;u.resize(J.current,e.current,{quality:3,alpha:!0}).then((function(){g(10+(o+=1)/K.length*70+l/K.length*20),R("Resizing image... (".concat(o,"/").concat(K.length,")"));var t=0;N(e.current)>25e3?function e(c,n){R("Compressing image... (Pass ".concat(++t,")"));var a=c.current.getContext("2d"),s=b.c.PointContainer.fromHTMLCanvasElement(c.current);b.b([s],{colors:Math.pow(2,n)}).then((function(e){var t=a.createImageData(c.current.width,c.current.height);t.data.set(b.a(s,e).toUint8Array()),a.putImageData(t,0,0)})).then((function(){N(c.current)>25e3&&n>0?e(c,n-1):(l+=1,g(10+o/K.length*70+l/K.length*20)),112===c.current.width?M(c.current.toDataURL()):72===c.current.width&&F(c.current.toDataURL())}))}(e,15):(l+=1,g(10+o/K.length*70+l/K.length*20),112===e.current.width?M(e.current.toDataURL()):72===e.current.width&&F(e.current.toDataURL()))}))};for(d.s();!(j=d.n()).done;)O()}catch(f){d.e(f)}finally{d.f()}},alt:"Source"}),Object(l.jsx)("canvas",{className:"SourceImage",ref:J}),Object(l.jsx)("input",{id:"ImageInput",type:"file",accept:"image/*",ref:G,style:{display:"none"},onChange:function(e){e.preventDefault(),e.stopPropagation(),e.target.files[0]&&(k(e.target.files[0].name.split(".")[0]),T(URL.createObjectURL(e.target.files[0])),g(1),R("Loading image..."))}}),Object(l.jsxs)("div",{className:"DropCallToAction",children:[Object(l.jsx)("img",{src:p,className:"ImageIcon"}),Object(l.jsx)("h2",{children:"Drop your image here"}),Object(l.jsx)("span",{className:"Label",children:"OR"}),Object(l.jsx)(j,{clickHandler:function(e){G.current.click()},children:"Browse files"})]}),Object(l.jsxs)("div",{className:"LoadingContainer",children:[Object(l.jsx)("h4",{children:y}),Object(l.jsx)(u,{progress:d})]}),Object(l.jsxs)("div",{className:"ResizedContainer",children:[Object(l.jsx)(x,{emoteDataUrl:H,badgeDataUrl:W}),Object(l.jsx)("div",{className:"Label",children:"EMOTES"}),Object(l.jsxs)("div",{className:"ResizedRow",children:[Object(l.jsx)("div",{onClick:function(){return $(Z)},style:{cursor:"pointer"},children:Object(l.jsx)(w,{size:112,ready:!1,progressText:"Waiting...",fileSize:z(N(Z.current)),children:Object(l.jsx)("canvas",{className:"ResizedCanvas By112",width:"112",height:"112",ref:Z})})}),Object(l.jsx)("div",{onClick:function(){return $(V)},style:{cursor:"pointer"},children:Object(l.jsx)(w,{size:56,ready:!1,progressText:"Waiting...",fileSize:z(N(V.current)),children:Object(l.jsx)("canvas",{className:"ResizedCanvas By56",width:"56",height:"56",ref:V})})}),Object(l.jsx)("div",{onClick:function(){return $(Y)},style:{cursor:"pointer"},children:Object(l.jsx)(w,{size:28,ready:!1,progressText:"Waiting...",fileSize:z(N(Y.current)),children:Object(l.jsx)("canvas",{className:"ResizedCanvas By28",width:"28",height:"28",ref:Y})})})]}),Object(l.jsx)("div",{className:"Label",children:"BADGES"}),Object(l.jsxs)("div",{className:"ResizedRow",children:[Object(l.jsx)("div",{onClick:function(){return $(X)},style:{cursor:"pointer"},children:Object(l.jsx)(w,{size:72,ready:!1,progressText:"Waiting...",fileSize:z(N(X.current)),children:Object(l.jsx)("canvas",{className:"ResizedCanvas By72",width:"72",height:"72",ref:X})})}),Object(l.jsx)("div",{onClick:function(){return $(Q)},style:{cursor:"pointer"},children:Object(l.jsx)(w,{size:36,ready:!1,progressText:"Waiting...",fileSize:z(N(Q.current)),children:Object(l.jsx)("canvas",{className:"ResizedCanvas By36",width:"36",height:"36",ref:Q})})}),Object(l.jsx)("div",{onClick:function(){return $(_)},style:{cursor:"pointer"},children:Object(l.jsx)(w,{size:18,ready:!1,progressText:"Waiting...",fileSize:z(N(_.current)),children:Object(l.jsx)("canvas",{className:"ResizedCanvas By18",width:"18",height:"18",ref:_})})})]}),Object(l.jsxs)("div",{className:"BottomBar",children:[Object(l.jsx)("p",{children:"You can click any of the images above to save it to your computer."}),Object(l.jsxs)("div",{className:"ButtonContainer",children:[Object(l.jsx)(j,{clickHandler:function(){window.location.reload()},children:"Clear"}),Object(l.jsx)(j,{clickHandler:function(e){var t,c=new O.a,n=Object(r.a)(K);try{var a=function(){var e=t.value;e.current.toBlob((function(t){c.file("".concat(B,"@").concat(e.current.width,".png"),t),Object.keys(c.files).length===K.length&&c.generateAsync({type:"blob"}).then((function(e){Object(f.saveAs)(e,"".concat(B,".zip"))}))}))};for(n.s();!(t=n.n()).done;)a()}catch(s){n.e(s)}finally{n.f()}},children:"Save all (.zip)"})]})]})]})]})},R=/*c.p+*/"static/media/info.ebce7ea8.svg",C=/*c.p+*/"static/media/twitch-emote-resizer.a6e15172.svg",S=/*c.p+*/"static/media/github.16a9304e.svg";var D=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"TitleRow",children:[Object(l.jsx)("img",{className:"Icon",src:C}),Object(l.jsx)("div",{className:"Title",children:"Twitch Emote Resizer"})]}),Object(l.jsx)(y,{}),Object(l.jsxs)("div",{className:"Info",children:[Object(l.jsx)("img",{src:R,className:"InfoIcon",alt:"info icon"}),Object(l.jsxs)("p",{children:[
"This site will resize an image into the sizes Twitch requires for emotes and badges.",
Object(l.jsx)("br",{}),
"If the resized image exceeds Twitch's size limit of 25KB, this site will attempt to compress it.",
Object(l.jsx)("br",{}),
"Image processing is done in your browser. Your image never leaves your device.",
Object(l.jsx)("br",{}),
Object(l.jsx)("br",{}),
"Usage:",
Object(l.jsx)("br",{}),
"If one image is dropped in the system works as usual.",
Object(l.jsx)("br",{}),
"If two or more images are dropped in the system will ask whether Emotes and/or Badges should be generated. Afterwards the resized image can be combined into an animated image (apng).",
Object(l.jsx)("br",{}),
"If the images are combined, the speed of the animation can be set in the next step.",
Object(l.jsx)("br",{}),
"Lastly an archive will be generated.",
Object(l.jsx)("br",{}),
Object(l.jsx)("br",{}),
"Currently animated gifs aren't supported, however they can be split into frames by various programs (e.g. Photoshop, Gimp, IrfanView), then be uploaded together and turned into an apng."
]})]}),Object(l.jsxs)("div",{className:"GitHub",onClick:function(){window.location.href="https://github.com/idssystem/twitch-emote-resizer"},children:[Object(l.jsx)("img",{src:S,className:"GitHubIcon",alt:"GitHub icon"}),"View on GitHub"]}),Object(l.jsx)("div",{className:"Spacer"})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(D,{})}),document.getElementById("root")),T()}},[[61,1,2]]]);
