(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(13),o=a.n(i),r=a(5),s=a(11),c=(a(54),a(2)),u=a(3),d=a(6),m=a(4),h=a(7),g=a(12),v=(a(69),[{etag:"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/2Ds1rRJWjRLXEJ2fQcsLM_Am2gs",id:{videoId:"Ftm2uv7-Ybw"},snippet:{title:"4K Campfire by the River - Relaxing Fireplace",thumbnails:{medium:{url:"https://i.ytimg.com/vi/Ftm2uv7-Ybw/mqdefault.jpg"}}}},{etag:"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/JarNzVTZYsxCvpuR1gy7-hWR1zA",id:{videoId:"tXc4C9kQll0"},snippet:{title:"COZY ATMOSPHERE - Heavy Blizzard Sounds for Sleep, Relax, Study",thumbnails:{medium:{url:"https://i.ytimg.com/vi/tXc4C9kQll0/mqdefault.jpg"}}}},{etag:"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/Y4otUWKi-iq2TMOOXwGNz0eE0Vo",id:{videoId:"c9pQYOGIWM8"},snippet:{title:"4k Tropical Rain & Relaxing Nature Sounds",thumbnails:{medium:{url:"https://i.ytimg.com/vi/c9pQYOGIWM8/mqdefault.jpg"}}}}]);function p(e,t){var a=JSON.stringify(e);localStorage.setItem(t,JSON.stringify(a))}var f=function(){return{type:"TOGGLE_SEARCH"}},b=function(){return{type:"TOGGLE_TIMER"}},E=function(){return{type:"TOGGLE_COLLECTION"}},y=Object(r.b)(function(e){return{isSearch:e.isSearchToggled,isTimer:e.isTimerToggled,isCollection:e.isCollectionToggled}},{toggleSearch:f,toggleTimer:b,toggleCollection:E})(function(e){function t(t){return e[t]?"ui-button":"ui-button turned-off"}function a(t){"search"===t&&e.toggleSearch(),"timer"===t&&e.toggleTimer(),"collection"===t&&e.toggleCollection()}return l.a.createElement("aside",{id:"app-toggles",className:"navbar-col"},l.a.createElement("div",{onClick:function(){a("search")},className:t("isSearch")},l.a.createElement("i",{className:"fas fa-search"})),l.a.createElement("div",{onClick:function(){a("timer")},className:t("isTimer")},l.a.createElement("i",{className:"fas fa-clock"})),l.a.createElement("div",{onClick:function(){a("collection")},className:t("isCollection")},l.a.createElement("i",{className:"fas fa-bookmark"})))}),O=a(8),C=a(37),N=a.n(C),k=(a(73),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={muted:!1,volume:100,paused:!1},a.toggleMuted=a.toggleMuted.bind(Object(O.a)(a)),a.togglePause=a.togglePause.bind(Object(O.a)(a)),a.handleVolumeChange=a.handleVolumeChange.bind(Object(O.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"toggleMuted",value:function(){this.setState({muted:!this.state.muted});var e=this.state.muted?this.state.volume:0;this.props.videoPlayer.setVolume(e)}},{key:"getMuteClass",value:function(){return this.state.muted||0===this.state.volume?"fas fa-volume-mute":"fas fa-volume-up"}},{key:"handleVolumeChange",value:function(e){return this.setState({volume:e}),this.props.videoPlayer.setVolume(this.state.volume),this.state.volume}},{key:"sliderDisabled",value:function(){return this.state.muted?"disabled":""}},{key:"volumeDisabled",value:function(){return 0===this.state.volume?"disabled":""}},{key:"getPauseOrPlay",value:function(){return this.state.paused?"fas fa-play":"far fa-pause-circle"}},{key:"togglePause",value:function(){this.setState({paused:!this.state.paused});var e=this.props.videoPlayer;this.state.paused?e.playVideo():e.pauseVideo()}},{key:"render",value:function(){return l.a.createElement("aside",{id:"video-controls",className:"navbar-col"},l.a.createElement("div",{className:"ui-button",onClick:this.togglePause},l.a.createElement("i",{className:"far fa-pause-circle ".concat(this.getPauseOrPlay())})),l.a.createElement("div",{className:"ui-button ".concat(this.volumeDisabled()),onClick:this.toggleMuted},l.a.createElement("i",{className:this.getMuteClass()})),l.a.createElement("div",{className:"hard-center slider-container ".concat(this.sliderDisabled())},l.a.createElement(N.a,{value:this.state.volume,onChange:this.handleVolumeChange,tooltip:!1})))}}]),t}(l.a.Component)),T=Object(r.b)(function(e){return{videoPlayer:e.videoPlayer}})(k),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={allToggled:!0},a.toggleAll=a.toggleAll.bind(Object(O.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getToggleAllClass",value:function(){return this.state.allToggled?"fas fa-eye-slash":"fas fa-eye"}},{key:"toggleAll",value:function(){this.setState({allToggled:!this.state.allToggled}),this.props.toggleAll()}},{key:"render",value:function(){return l.a.createElement("aside",{id:"toggle-all",className:"navbar-col"},l.a.createElement("div",{className:"ui-button larger"},l.a.createElement("i",{title:"Toggle visibility",onClick:this.toggleAll,className:"white ".concat(this.getToggleAllClass())})))}}]),t}(l.a.Component),S=Object(r.b)(function(e){return e},{toggleAll:function(){return{type:"TOGGLE_ALL"}}})(j),R=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"column-center main-nav"},l.a.createElement("div",{className:"inner-container"},l.a.createElement("div",{className:"left"},l.a.createElement("div",{className:"navbar-col"},l.a.createElement("a",{className:"white link",target:"_blank",href:"https://github.com/bparkerproductions/Breathr"},"Contribute"))),l.a.createElement("div",{className:"right"},l.a.createElement(T,null),l.a.createElement("div",{className:"app-toggle-group"},l.a.createElement(y,null),l.a.createElement(S,null)))))}}]),t}(l.a.Component),V=a(15),w=function(e){var t=Object(n.useState)(!0),a=Object(V.a)(t,2),i=a[0],o=a[1];function r(){o(!1)}return 1!==JSON.parse(localStorage.getItem("visitAmounts"))&&e.firstVisitOnly?null:l.a.createElement("section",{className:"modal column-center mobile-fixed ".concat(i&&e.closedFromOuter?"":"hidden ")},l.a.createElement("div",{className:"inner-container"},l.a.createElement("div",{className:"head"},e.showClose?l.a.createElement("i",{onClick:r,className:"far fa-times-circle close"}):null),l.a.createElement("div",{className:"content"},e.children),e.showButton?l.a.createElement("div",{className:"button-container mt-small"},l.a.createElement("button",{onClick:r,className:"button"},e.buttonText)):null))},L=function(e){var t=Object(n.useState)(!0),a=Object(V.a)(t,2),i=a[0],o=a[1];function r(){e.videoPlayer.playVideo(),o(!1)}function s(){return l.a.createElement("div",{className:"play-container mt-small"},l.a.createElement("strong",{onClick:r,className:"emphasize"},"Start Video Now"),l.a.createElement("div",{onClick:r,className:"modal-icon mt-small"},l.a.createElement("i",{className:"fas fa-play-circle"})))}return window.innerWidth<=1024?l.a.createElement(w,{showButton:!1,closedFromOuter:i,firstVisitOnly:!1},l.a.createElement("div",{className:"header-container bottom-line"},l.a.createElement("h2",{className:"title"},"Welcome to Breathr!")),l.a.createElement("p",null,"This is a simple web app that lets you choose and collect your favorite sounds for meditation. You are on a ",l.a.createElement("strong",{className:"emphasize"},"mobile device"),", so you will need to click the play button below in order to get started with streaming videos. "),s()):l.a.createElement(w,{showClose:!1,firstVisitOnly:!0,showButton:!1,closedFromOuter:i,buttonText:"Let's get to it"},l.a.createElement("div",{className:"header-container bottom-line"},l.a.createElement("h2",{className:"title"},"Welcome to Breathr!")),l.a.createElement("p",null,"Breathr is a simple web app that lets you choose and collect your favorite sounds for meditation. No special subscriptions, no extras. "),s())},P=a(38),I=Object(r.b)(function(e){return{selectedVideo:e.selectedVideo,defaultVideo:e.defaultVideo,videoPlayer:e.videoPlayer}},{setVideoPlayer:function(e){return{type:"SET_VIDEO_PLAYER",payload:e}}})(function(e){function t(t){e.setVideoPlayer(t.target)}return e.selectedVideo||e.defaultVideo?l.a.createElement("div",{className:"video-render"},l.a.createElement(P.a,{videoId:function(){var t=e.selectedVideo;return t||e.defaultVideo}(),opts:{playerVars:{loop:1,autoplay:1,start:60,frameborder:0,controls:0,color:"white",disablekb:1,enablejsapi:1,iv_load_policy:3,modestbranding:1}},onReady:t,onStateChange:t})):null}),A=a(16),_=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getPlayOrPause",value:function(e,t){var a=this.props.togglePauseCallback;return this.props.paused?l.a.createElement("div",{onClick:a,className:"resume"},l.a.createElement("i",{onClick:t,className:"far fa-play-circle"})):l.a.createElement("div",{onClick:a,className:"pause"},l.a.createElement("i",{onClick:e,className:"far fa-pause-circle"}))}},{key:"timerControls",value:function(e,t,a){return this.props.started?l.a.createElement("div",{className:"timer-controls"},this.getPlayOrPause(e,t),l.a.createElement("div",{className:"reset"},l.a.createElement("i",{onClick:a,className:"fas fa-undo"}))):null}},{key:"render",value:function(){var e=this.props.pauseCallback,t=this.props.resumeCallback,a=this.props.resetCallback;return l.a.createElement("div",{className:"playback"},this.timerControls(e,t,a))}}]),t}(l.a.Component),M=Object(r.b)(function(e){return e},{toggleCollection:E,toggleSearch:f,toggleTimer:b})(function(e){return l.a.createElement("div",{className:"component-controls"},l.a.createElement("div",{onClick:function(){"search"===e.toggleType&&e.toggleSearch(),"collection"===e.toggleType&&e.toggleCollection(),"timer"===e.toggleType&&e.toggleTimer()},className:"ui-button"},l.a.createElement("i",{title:"minimize",className:"far fa-window-minimize"})))}),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={timerStarted:!1,paused:!1},a.toggleTimer=a.toggleTimer.bind(Object(O.a)(a)),a.togglePause=a.togglePause.bind(Object(O.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"toggleTimer",value:function(){this.setState({timerStarted:!0})}},{key:"togglePause",value:function(){this.setState({paused:!this.state.paused})}},{key:"timerStarted",value:function(e){this.toggleTimer(),e()}},{key:"timerStart",value:function(e){var t=this;return this.state.timerStarted?null:l.a.createElement("div",{onClick:function(){t.timerStarted(e)},className:"timer-start"},l.a.createElement("p",null,"Start Timer?"),l.a.createElement("i",{className:"fas fa-clock start-timer"}))}},{key:"getTimeFormat",value:function(e){return"".concat(e<10?"0".concat(e):e)}},{key:"getTimerContainerClass",value:function(){return this.props.show&&this.props.allToggled?"timer":"timer hidden"}},{key:"getTimerClass",value:function(){return this.state.timerStarted?"main-timer":"main-timer hidden"}},{key:"render",value:function(){var e=this;return l.a.createElement("section",{className:this.getTimerContainerClass()},l.a.createElement(A.a,{startImmediately:!1},function(t){var a=t.start,n=t.pause,i=t.resume,o=t.reset;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"timer-container"},l.a.createElement(M,{toggleType:"timer"}),e.timerStart(a),l.a.createElement("div",{className:e.getTimerClass()},l.a.createElement("span",{className:"time"},l.a.createElement(A.a.Minutes,null)),l.a.createElement("span",{className:"time-label"},"m"),l.a.createElement("span",{className:"seperator"},":"),l.a.createElement("span",{className:"time"},l.a.createElement(A.a.Seconds,{formatValue:function(t){return e.getTimeFormat(t)}})),l.a.createElement("span",{className:"time-label"},"s"))),l.a.createElement(_,{started:e.state.timerStarted,paused:e.state.paused,togglePauseCallback:e.togglePause,pauseCallback:n,resumeCallback:i,resetCallback:o}))}))}}]),t}(l.a.Component),D=a(23),G=a.n(D),J=a(41),F=a(42),B=function(e){return l.a.createElement("div",{className:"search-input-container"},l.a.createElement("div",{className:"search-icon"},l.a.createElement("i",{className:"fas fa-search"})),l.a.createElement("div",{className:"search-input"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},l.a.createElement("input",{type:"text",onChange:function(t){e.searchCallback(t.target.value)}}))))},Y=a(43),W=a.n(Y).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:21,videoEmbeddable:!0,type:"video",videoDefinition:"high",videoDuration:"long",key:"AIzaSyBi6JVDaQRKsi7Jaa6bwaJfvfUMsD_fOUc"}}),z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).selectVideo=a.selectVideo.bind(Object(O.a)(a)),a.handleAdd=a.handleAdd.bind(Object(O.a)(a)),a.handleRemove=a.handleRemove.bind(Object(O.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"bgImage",value:function(){return{backgroundImage:"url("+this.props.video.snippet.thumbnails.medium.url+")"}}},{key:"selectVideo",value:function(){var e=this.props.video.id.videoId;this.props.selectVideo(e)}},{key:"doesVideoExist",value:function(){for(var e=this.props.videos,t=0;t<e.length;t++){if(e[t].id.videoId===this.props.video.id.videoId)return!0}return!1}},{key:"handleAdd",value:function(e){if(e.stopPropagation(),this.doesVideoExist()){g.NotificationManager.warning("This video is already in your collection!",!1,2e3)}else{this.props.addToCollection(this.props.video);g.NotificationManager.success("Your video has successfully been added to your collection!","Video Added!",2e3)}}},{key:"handleRemove",value:function(e){e.stopPropagation();var t=this.props.video.id.videoId;this.props.removeFromCollection(t);g.NotificationManager.success("Your video has successfully been removed from your collection!","Video Removed!",2e3)}},{key:"renderControls",value:function(){return this.props.canAdd?l.a.createElement("div",{className:"ui-button",onClick:this.handleAdd},l.a.createElement("i",{title:"add to collection",className:"fas fa-plus-circle"})):l.a.createElement("div",{className:"ui-button",onClick:this.handleRemove},l.a.createElement("i",{title:"remove from collection",className:"fas fa-minus-circle red"}))}},{key:"render",value:function(){return l.a.createElement("div",{onClick:this.selectVideo,style:this.bgImage(),className:"video-preview"},l.a.createElement("div",{className:"video-controls"},this.renderControls()),l.a.createElement("div",{className:"overlay-preview"},l.a.createElement("p",{className:"white title"},this.props.video.snippet.title),l.a.createElement("div",{className:"icon-container"},l.a.createElement("i",{className:"fas fa-play"}))))}}]),t}(l.a.Component),Z=Object(r.b)(function(e){return{selectedVideo:e.selectedVideo,videos:e.videos}},{selectVideo:function(e){return{type:"VIDEO_SELECTED",payload:e}},addToCollection:function(e){return{type:"ADD_TO_COLLECTION",payload:e}},removeFromCollection:function(e){return{type:"REMOVE_FROM_COLLECTION",payload:e}}})(z),Q=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderResults",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.length)return l.a.createElement("div",{className:"video-results"},e.map(function(e){return l.a.createElement(Z,{key:e.etag,canAdd:t.props.canAdd,canRemove:t.props.canRemove,video:e})}));return l.a.createElement("div",{className:"notification-card error"},l.a.createElement("p",null,a?"You have nothing in your collection :( Head over to the search bar and find some!":"Nothing came up for your search :( Maybe try again with a different term"))}},{key:"render",value:function(){var e=null!==this.props.videos;return this.props.searchResult&&e?this.renderResults(this.props.videos):this.props.grabFromCollection?this.renderResults(this.props.collectionVideos,!0):l.a.createElement("div",{className:"notification-card"},l.a.createElement("p",null,"Type to search for videos..."))}}]),t}(l.a.Component),q=Object(r.b)(function(e){return{collectionVideos:e.videos}})(Q),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={searchResult:null,videos:null},a.updateSearchResult=a.updateSearchResult.bind(Object(O.a)(a)),a.getVideoResults=Object(F.debounce)(a.getVideoResults.bind(Object(O.a)(a)),1e3),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"updateSearchResult",value:function(e){this.setState({searchResult:e}),this.getVideoResults()}},{key:"getVideoResults",value:function(){var e=Object(J.a)(G.a.mark(function e(){var t;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.get("/search",{params:{q:this.state.searchResult+" relaxing audio"}});case 2:t=e.sent,this.setState({videos:t.data.items});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getShowClasses",value:function(){return this.props.show&&this.props.allToggled?"column-center ":"column-center hidden "}},{key:"getSearchedClasses",value:function(){var e=null!==this.state.videos&&this.state.videos.length;return this.state.searchResult&&e?"searched ":""}},{key:"getVideoClasses",value:function(){return this.getShowClasses()+this.getSearchedClasses()}},{key:"render",value:function(){return l.a.createElement("section",{id:"video-search",className:this.getVideoClasses()},l.a.createElement("div",{className:"inner-container"},l.a.createElement(M,{toggleType:"search"}),l.a.createElement(B,{searchCallback:this.updateSearchResult}),l.a.createElement(q,{searchResult:this.state.searchResult,videos:this.state.videos,canAdd:!0})))}}]),t}(l.a.Component),X=function(e){return l.a.createElement("section",{id:"video-collection",className:e.show&&e.allToggled?"column-center":"column-center hidden"},l.a.createElement("div",{className:"inner-container"},l.a.createElement(M,{toggleType:"collection"}),l.a.createElement("header",{className:"general"},l.a.createElement("i",{className:"fas fa-bookmark icon"}),l.a.createElement("h3",{className:"white"},"Your Collection")),l.a.createElement(q,{grabFromCollection:!0,canRemove:!0})))},U=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){!function(){var e=JSON.parse(localStorage.getItem("visitAmounts"));null===e?localStorage.setItem("visitAmounts",1):localStorage.setItem("visitAmounts",e+1)}()}},{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement(g.NotificationContainer,null),l.a.createElement(R,null),l.a.createElement(L,{videoPlayer:this.props.videoPlayer}),l.a.createElement(x,{allToggled:this.props.allToggled,show:this.props.showTimer}),l.a.createElement(H,{allToggled:this.props.allToggled,show:this.props.showSearch}),l.a.createElement(X,{allToggled:this.props.allToggled,show:this.props.showCollection}),l.a.createElement(I,null))}}]),t}(l.a.Component),K=Object(r.b)(function(e){return{showSearch:e.isSearchToggled,showTimer:e.isTimerToggled,showCollection:e.isCollectionToggled,allToggled:e.allToggled,videoPlayer:e.videoPlayer}})(U);var $=function(){return l.a.createElement(K,null)},ee=a(44),te={videosReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){var t=JSON.parse(localStorage.getItem(e));return null===t&&p(v,"videoList"),null===t?v:JSON.parse(t)}("videoList"),t=arguments.length>1?arguments[1]:void 0;if("ADD_TO_COLLECTION"===t.type){var a=[].concat(Object(ee.a)(e),[t.payload]);return p(a,"videoList"),a}if("REMOVE_FROM_COLLECTION"===t.type){var n=e.filter(function(e){return t.payload!==e.id.videoId});return p(n,"videoList"),n}return e},defaultVideoReducer:function(){var e=function(e){var t=JSON.parse(localStorage.getItem(e));return!("[]"===t)&&JSON.parse(t)[0].id.videoId}("videoList");return e||"tXc4C9kQll0"},selectedVideoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"VIDEO_SELECTED"===t.type?t.payload:e}},ae={toggleSearchReducer:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return"TOGGLE_SEARCH"===(arguments.length>1?arguments[1]:void 0).type&&(e=!e),e},toggleTimerReducer:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return"TOGGLE_TIMER"===(arguments.length>1?arguments[1]:void 0).type&&(e=!e),e},toggleCollectionReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return"TOGGLE_COLLECTION"===(arguments.length>1?arguments[1]:void 0).type&&(e=!e),e},toggleAllReducer:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return"TOGGLE_ALL"===(arguments.length>1?arguments[1]:void 0).type&&(e=!e),e}},ne=Object(s.b)({videos:te.videosReducer,selectedVideo:te.selectedVideoReducer,defaultVideo:te.defaultVideoReducer,videoPlayer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SET_VIDEO_PLAYER"===t.type?t.payload:e},isSearchToggled:ae.toggleSearchReducer,isTimerToggled:ae.toggleTimerReducer,isCollectionToggled:ae.toggleCollectionReducer,allToggled:ae.toggleAllReducer});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(r.a,{store:Object(s.c)(ne)},l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,t,a){e.exports=a(105)},54:function(e,t,a){}},[[45,1,2]]]);
//# sourceMappingURL=main.40bfa8f8.chunk.js.map