import createElement from "./vdom/createElement";
import render from "./vdom/render";
import mount from "./vdom/mount";
import diff from "./vdom/diff";

//a virtual DOM is just a plain object,here we need to build a virtual Dome
const createVApp = (count) =>
  createElement("div", {
    attrs: { 
      id: "app",
      dataCount:count,
     },
    children: [
      String(count),
      createElement("div", {
        text: "This is a virtual DOM",
      }),
    ],
  });
//create a actual dom
let count=0;
let vApp=createVApp(count);
const $app = render(vApp);
console.log($app);
//put the elements on real dom
let $rootEl=mount($app, document.getElementById("app"));
setInterval(()=>{
  count++;
  const vNewApp=createVApp(count);
  const patch=diff(vApp,vNewApp);
  $rootEl=patch($rootEl);
  vApp=vNewApp;
},1000)
