async function AddStyle(element,prop,val,same_side){
    if (same_side === undefined || same_side === null) {
        same_side = false
    }
    if (same_side === true) {
        element.style.height = val
        element.style.width = val
    }else{
        element.style[prop] = val
    }
}


export default AddStyle