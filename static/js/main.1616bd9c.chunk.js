(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,a,t){e.exports=t.p+"static/media/hamburger_menu.686fce20.svg"},143:function(e,a,t){e.exports=t.p+"static/media/back_icon.ec06fab6.svg"},144:function(e,a,t){e.exports=t.p+"static/media/Flag_of_Madeira.d9a7d6d4.svg"},149:function(e){e.exports=[{id:"sao-lourenco",name:"Ponta de S\xe3o Louren\xe7o",title:"Point of Saint Lawrence",latlng:{lat:32.7431658,lng:-16.7010976},alt:"Point of Saint Lawrence",search:"Ponta de S\xe3o Louren\xe7o"},{id:"faja-dos-padres",name:"Faj\xe3 dos Padres",title:"Faj\xe3 dos Padres Cable Car",latlng:{lat:32.6569985,lng:-17.0237307},alt:"Faj\xe3 dos Padres Cable Car",search:"Faj\xe3 dos Padres"},{id:"porto-moniz",name:"Piscinas Naturais de Porto Moniz",title:"Porto Moniz Natural Pools",latlng:{lat:32.8623118,lng:-17.1706851},alt:"Porto Moniz Natural Pools",search:"Piscinas Naturais de Porto Moniz"},{id:"pico-ruvio",name:"Pico Ruivo",title:"Pico Ruivo Peak",latlng:{lat:32.7589702,lng:-16.9517851},alt:"Pico Ruivo Peak",search:"Pico Ruivo"},{id:"pico-do-arieiro",name:"Pico do Arieiro",title:"Pico do Arieiro Peak",latlng:{lat:32.7355732,lng:-16.9376438},alt:"Pico do Arieiro Peak",search:"Pico do Arieiro"},{id:"cabo-girao",name:"Cabo Gir\xe3o",title:"Cabo Gir\xe3o Skywalk",latlng:{lat:32.6565832,lng:-17.0065704},alt:"Cabo Gir\xe3o Skywalk",search:"Cabo Gir\xe3o"},{id:"monte-palace",name:"Jardim Tropical Monte Palace",title:"Monte Palace Tropical Garden",latlng:{lat:32.6690345,lng:-16.914265},alt:"Monte Palace Tropical Garden",search:"Monte Palace Tropical Garden"},{id:"funchal",name:"Funchal",title:"Funchal - capital city of Madeira",latlng:{lat:32.660109,lng:-16.9596901},alt:"Funchal Capital City",search:"Funchal"},{id:"sao-vicente",name:"Grutas de S\xe3o Vicente",title:"S\xe3o Vicente Caves",latlng:{lat:32.7697089,lng:-17.0218216},alt:"S\xe3o Vicente Caves",search:"S\xe3o Vicente Caves"},{id:"levada-25-fontes",name:"Levada das 25 Fontes",title:"Levada of 25 Falls",latlng:{lat:32.7641767,lng:-17.1402247},alt:"Levada of 25 Falls",search:"Levada das 25 Fontes"},{id:"curral-das-freiras",name:"Curral das Freiras",title:"Valley of the Nuns",latlng:{lat:32.7263098,lng:-16.986705},alt:"Valley of the Nuns",search:"Curral das Freiras"}]},150:function(e,a,t){e.exports=t(357)},155:function(e,a,t){},355:function(e,a,t){},357:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(59),i=t.n(r),l=(t(155),t(85)),c=t(10),s=t(11),p=t(13),d=t(12),m=t(14),h=t(142),u=t.n(h),f=t(143),k=t.n(f),g=function(e){function a(){return Object(c.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("button",{className:"button","aria-label":"toggle menu - click to open or close list of locations",onClick:this.props.toggleSideBar},this.props.sideBar?o.a.createElement("img",{src:k.a,alt:"",className:"back-icon"}):o.a.createElement("img",{src:u.a,alt:"",className:"hamburger-icon"}))}}]),a}(n.Component),b=t(144),v=t.n(b),M=function(e){function a(){return Object(c.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("header",{className:"banner",role:"banner"},o.a.createElement("img",{className:"flag",alt:"Madeira's flag",src:v.a}),o.a.createElement("h1",{className:"page_title"},"MADEIRA - ",o.a.createElement("span",null,"MUST SEE PLACES")),o.a.createElement(g,{toggleSideBar:this.props.toggleSideBar,sideBar:this.props.sideBar}))}}]),a}(n.Component),E=t(26),w=function(e){function a(){return Object(c.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(E.Marker,{onClick:function(a){return e.props.handleMarkerClick(a,e.props.position,e.props.location)},position:this.props.position,animation:this.props.activeMarker===this.props.location?window.google.maps.Animation.BOUNCE:null},this.props.activeMarker===this.props.location&&o.a.createElement(E.InfoWindow,{onCloseClick:this.props.closeInfoWIndow},o.a.createElement("div",{className:"info-window"},o.a.createElement("h3",null,this.props.location.name),o.a.createElement("p",null,"(eng. ".concat(this.props.location.title,")")),o.a.createElement("button",{className:"details-button","aria-label":"Click for details of location",tabIndex:this.props.sideBar&&this.props.activeMarker?-1:0,onClick:function(a){e.props.openModal(),setTimeout(function(){document.querySelector(".modal-content").focus()},500)}},"Details"))))}}]),a}(n.Component),y=function(e){function a(){return Object(c.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"modal ".concat(this.props.modal?"modal_open":"modal_closed")},this.props.activeMarker?o.a.createElement("div",{className:"modal-content",tabIndex:"0",role:"dialog","aria-modal":"true","aria-label":"location details"},o.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(a){return e.props.closeModal()}},o.a.createElement("span",null,"\xd7")),o.a.createElement("h2",{className:"location-name"},"".concat(this.props.activeMarker.name),o.a.createElement("span",null," (eng. ".concat(this.props.activeMarker.title,")"))),o.a.createElement("div",{className:"pictures"},o.a.createElement("ul",{className:"photogallery"},this.props.activeMarker.photos?this.props.activeMarker.photos.map(function(a){return o.a.createElement("li",{key:a},o.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer","aria-label":"Image of ".concat(e.props.activeMarker.name)},o.a.createElement("div",{className:"photo",style:{backgroundImage:"url(".concat(a,")")},role:"img"})))}):void 0),o.a.createElement("div",{className:"flickr"},o.a.createElement("span",null,"Powered by Flickr"),o.a.createElement("a",{href:"https://www.flickr.com/search/?text=".concat(this.props.activeMarker.name),target:"_blank",rel:"noopener noreferrer"},"More photos..."))),this.props.activeMarker.wikiData&&this.props.activeMarker.wikiData.length?o.a.createElement("div",{className:"location-info"},o.a.createElement("div",{className:"wiki-data",dangerouslySetInnerHTML:{__html:this.props.activeMarker.wikiData}}),o.a.createElement("div",{className:"wikipedia"},o.a.createElement("span",{className:"powered-by"},"Powered by Wikipedia"),o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/".concat(this.props.activeMarker.name),target:"_blank",rel:"noopener noreferrer"},"More information..."))):o.a.createElement("div",{className:"location-info"},o.a.createElement("div",{className:"wikipedia"},o.a.createElement("span",{className:"no-wiki-data"},"No information available on ",o.a.createElement("span",null,"Wikipedia")),o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/".concat(this.props.activeMarker.name),target:"_blank",rel:"noopener noreferrer"},"Details...")))):void 0)}}]),a}(n.Component),j=Object(E.withScriptjs)(Object(E.withGoogleMap)(function(e){var a=e.locations.map(function(a,t){return o.a.createElement(w,{location:a,key:a.id,index:t,position:{lat:a.latlng.lat,lng:a.latlng.lng},handleMarkerClick:e.handleMarkerClick,closeInfoWIndow:e.closeInfoWIndow,activeMarker:e.activeMarker,openModal:e.openModal,modal:e.modal,closeModal:e.closeModal,sideBar:e.sideBar})});return o.a.createElement(n.Fragment,null,o.a.createElement(E.GoogleMap,{defaultZoom:11.7,center:e.center},a),o.a.createElement(y,{modal:e.modal,closeModal:e.closeModal,activeMarker:e.activeMarker}))})),C=function(e){function a(){return Object(c.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(j,{locations:this.props.locations,center:this.props.center,handleMarkerClick:this.props.handleMarkerClick,closeInfoWIndow:this.props.closeInfoWIndow,activeMarker:this.props.activeMarker,modal:this.props.modal,openModal:this.props.openModal,closeModal:this.props.closeModal,sideBar:this.props.sideBar,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCUj8C4MekWgZ5bZtuSeBW0ckKE3UC9LFU&v=3.exp",loadingElement:o.a.createElement("div",{style:{height:"100%"}}),containerElement:o.a.createElement("div",{style:{height:"100vh"}}),mapElement:o.a.createElement("div",{style:{height:"100%"}})})}}]),a}(n.Component),N=t(147),P=t.n(N),O=t(148),S=t.n(O),B=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(o)))).state={query:"",filteredLocations:t.props.locations},t.updateQuery=function(e){if(t.setState({query:e}),e){var a=new RegExp(P()(e),"i"),n=t.props.locations.filter(function(e){return a.test(e.name)});0===e.length?t.setState({filteredLocations:t.props.locations}):t.setState({filteredLocations:n})}else t.setState({filteredLocations:t.props.locations})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return this.state.filteredLocations.sort(S()("name")),o.a.createElement("div",{className:"search-location"},o.a.createElement("div",{className:"search-location-bar"},o.a.createElement("input",{className:"search-location-input",id:"search-input",type:"text",value:this.state.query,onChange:function(a){return e.updateQuery(a.target.value)},"aria-hidden":!this.props.sideBar}),o.a.createElement("label",{htmlFor:"search-input",className:"search-location-label"},"Search by location")),o.a.createElement("div",{className:"search-location-results","aria-label":"list of locations"},o.a.createElement("ul",{className:"location-list"},this.state.filteredLocations.map(function(a){return o.a.createElement("li",{className:"location-list-item",key:a.id,tabIndex:"0",role:"button","aria-label":a.name,onClick:function(t){return e.props.handleMarkerClick(t,a.latlng,a)},onKeyPress:function(t){return e.props.handleMarkerClick(t,a.latlng,a)}},o.a.createElement("p",null,a.name),o.a.createElement("p",null,"(eng. ".concat(a.title,")")))}),0===this.state.filteredLocations.length&&o.a.createElement("div",{className:"no-location-found"},"Sorry, we didn't find any matching location"))))}}]),a}(n.Component),I=t(149),_=(t(355),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(o)))).state={locations:[],activeMarker:{},modal:!1,sideBar:!1,center:{lat:32.7511678,lng:-17.001055}},t.componentDidMount=function(){t.updateLocations(),window.gm_authFailure=function(){alert("Sorry, there was problem while loading map. Please check your API key.")},window.onError=function(){alert("Sorry, there was problem while loading a map. Please try again later")}},t.updateLocations=function(){var e=[];e.push.apply(e,Object(l.a)(I)),e.map(function(a){var t,n=[],o=[];return function(e){var a=[];fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("c009bc8d2af43bc3f121ddf3fae2f396","&tags=").concat(e,"&per_page=").concat(6,"&page=1&format=json&nojsoncallback=1")).then(function(e){return e.json()}).then(function(e){var t=e.photos.photo.map(function(e){return"http://farm"+e.farm+".staticflickr.com/"+e.server+"/"+e.id+"_"+e.secret+".jpg"});a.push.apply(a,Object(l.a)(t))}).catch(function(e){window.alert("An error occurred while trying to fetch data from Flickr: ".concat(e))}),n.push(a)}(a.search),t=a.search,fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts&titles=".concat(t.replace(/ /g,"_"),"&exintro=1")).then(function(e){return e.json()}).then(function(e){var a=e.query.pages[Object.keys(e.query.pages)[0]].extract;a&&o.push(a)}).catch(function(e){window.alert("An error occurred while trying to fetch data about ".concat(t,": ").concat(e))}),a.photos=n[0],a.wikiData=o,e}),t.setState({locations:e})},t.handleMarkerClick=function(e,a,n){t.setState({activeMarker:n,center:a})},t.closeInfoWIndow=function(){t.setState({activeMarker:{}})},t.openModal=function(){t.setState({modal:!0})},t.closeModal=function(){t.setState({modal:!1,activeMarker:{}})},t.toggleSideBar=function(){t.setState(t.state.sideBar?{sideBar:!1}:{sideBar:!0})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(M,{toggleSideBar:this.toggleSideBar,sideBar:this.state.sideBar}),o.a.createElement("main",null,o.a.createElement("div",{className:"sidebar-wrapper ".concat(this.state.sideBar?"sidebar_open":"sidebar_closed")},this.state.sideBar&&o.a.createElement("aside",{className:"sidebar"},o.a.createElement(B,{handleMarkerClick:this.handleMarkerClick,handleKeyPress:this.handleKeyPress,locations:this.state.locations,sideBar:this.state.sideBar}))),o.a.createElement("div",{className:"main-container ".concat(this.state.sideBar?"sidebar_open":"sidebar_closed"),role:"application","aria-label":"Map of the must see places on Madeira Island"},o.a.createElement(C,{center:this.state.center,locations:this.state.locations,handleMarkerClick:this.handleMarkerClick,closeInfoWIndow:this.closeInfoWIndow,activeMarker:this.state.activeMarker,modal:this.state.modal,openModal:this.openModal,closeModal:this.closeModal,sideBar:this.state.sideBar}))),o.a.createElement("footer",{className:"footer"},o.a.createElement("p",null,"App created for UDACITY Nanodegree - Google Schoolarship Program")))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[150,2,1]]]);
//# sourceMappingURL=main.1616bd9c.chunk.js.map