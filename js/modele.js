 export const packages = () =>{
    const el = document.querySelector("html")
    console.info(el.children[0].childNodes[1].getAttribute("charset"))
    console.log(el.setAttribute("lang","en"))
   /*  Swal.fire({
        title: `Votre langue : ${navigator.language}`,
        text: "You clicked the button!",
        icon: "success"
      }); */
 }