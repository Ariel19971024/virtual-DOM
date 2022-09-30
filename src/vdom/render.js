//create a actual dom.
const renderElem=(vNode)=>{
    const $el=document.createElement(vNode.tagName);
    for(const [k,v] of Object.entries(vNode.attrs)){
        $el.setAttribute(k,v)
    }
    $el.innerText=vNode.text;
    for(const children of vNode.children){
        const $child= render(children);
        $el.appendChild($child)
    }
    return $el;
};
const render=(vNode)=>{
if(typeof vNode ==='string'){
    return document.createTextNode(vNode);
}
    return renderElem(vNode);
}
export default render;