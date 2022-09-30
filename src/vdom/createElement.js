//here just for making vDom
export default(tagName,{attrs={},children=[],text=""}={})=>{
    return {
        tagName,
        attrs,
        children,
        text
    }
}