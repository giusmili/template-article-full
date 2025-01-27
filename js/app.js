document.addEventListener("DOMContentLoaded", e =>{
    e.preventDefault()
    
    const el = document.querySelector("html")
    console.info(el.children[0].childNodes[1].getAttribute("charset"))
    console.log(el.setAttribute("lang","en"))
    
})

