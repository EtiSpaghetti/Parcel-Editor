var e=globalThis,t={},n={},r=e.parcelRequirea313;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequirea313=r),r.register;var a=r("2h5uG"),s=r("hYoLG");const i=document.getElementById("add_event"),d=document.getElementById("show_panel"),l=document.getElementById("resource_information"),c=document.getElementById("saved_indicator");class o extends a.BaseEditorClass{init(){super.init(),this.renderResourcePanel(),this.updateSaveStatus()}update(){super.update(),this.renderResourcePanel(),this.updateSaveStatus()}generateEmptyParcel(e){return{id:`#${e}`,type:"event",comment:"",messages:[],action:[]}}create(){if(!this.confirmChangestateSave())return console.log("Cannot create parcel, was unable to save currently loaded parcel"),!1;let e=this.events.map(e=>Number(e.split("#")[1])),t=1,n=!1;for(;!n;)e.includes(t)?t++:n=!0;return this.current=this.generateEmptyParcel(t),this.save(),console.log(`Created ${this.current.id}`),this.update(),!0}updateSaveStatus(){if(void 0===this.current){c.className="undefined";return}if(this.isSaved){c.className="saved";return}if(!this.isError&&this.checkValidToSave()){c.className="unsaved";return}c.className="error"}checkAllInputValidity(){let e=l.getElementsByTagName("input");for(let t in e)if(e[t].reportValidity&&!e[t].reportValidity())return!1;return!0}checkValidToSave(){return!!super.checkValidToSave()&&(!!(0,s.regex_hash_number).test(this.current.id)||(console.warn(`Given invalid ID: ${this.current.id} to save`),this.isError=!0,this.updateSaveStatus(),!1))}clearRender(){d.innerHTML="",l.innerHTML="",this.renderResourcePanel()}renderResourcePanel(){d.innerHTML="";for(let e=0;e<this.events.length;e++){let t=document.createElement("button");t.innerHTML=this.events[e],t.addEventListener("click",()=>{console.log(`Loaded : ${this.events[e]}`),this.load(this.events[e]),this.renderResouceInformation(),this.updateSaveStatus()}),d.appendChild(t)}}renderResouceInformation(){if(void 0===this.current){console.warn("No resource loaded");return}l.innerHTML="";let e=document.createElement("div");e.id="tlpanel";let t=document.createElement("div");t.id="trpanel";let n=document.createElement("div");n.id="bpanel",e.appendChild(this.generateTextInput("id","ID",["notEmpty","readonly"])),e.appendChild(this.generateTextArea("comment","Comment",["spellcheck"]));let r=document.createElement("button");r.innerHTML="messages",e.appendChild(r),r.addEventListener("click",()=>{this.renderMessagePanel()});let a=document.createElement("button");a.innerHTML="actions",e.appendChild(a),a.addEventListener("click",()=>{this.renderQuantityPanel()}),n.appendChild(this.generateDeleteButton(`${this.current.type}:${this.current.id}`)),l.appendChild(e),l.appendChild(t),l.appendChild(n)}renderQuantityPanel(){console.log("Rendering Quantity Panel");let e=document.getElementById("trpanel");this.generateQuantityPanel("action",e)}renderMessagePanel(){let e=document.getElementById("trpanel");if(e.innerHTML="",e.className="messages doubles",0==this.current.messages.length){let t=document.createElement("h2");t.innerHTML="No messages",e.appendChild(t)}for(let t in this.current.messages){let n=document.createElement("div"),r=document.createElement("textarea");r.value=this.current.messages[t],r.addEventListener("change",()=>{this.current.messages[t]=r.value,this.delayedSave()});let a=document.createElement("button");a.innerHTML="X",a.addEventListener("click",()=>{this.current.messages.splice(Number(t),1),this.renderMessagePanel(),this.delayedSave()}),n.appendChild(r),n.appendChild(a),e.appendChild(n)}let t=document.createElement("button");t.className="add",t.innerHTML="Add new message",t.addEventListener("click",()=>{this.current.messages.push(""),this.renderMessagePanel()}),e.append(t)}constructor(...e){super(...e),this.editorType="event",this.editorVersion=1}}const u=new o;u.init(),window.editor=u,i.addEventListener("click",()=>{u.create()}),c.addEventListener("click",()=>{u.save()}),document.getElementById("export_current").addEventListener("click",()=>{u.saveExportData("current")}),document.getElementById("export_all").addEventListener("click",()=>{u.saveExportData("editor")});
//# sourceMappingURL=event.52296b6b.js.map
