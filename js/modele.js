 export const packages = () =>{
    const el = document.querySelector("html")
    console.info(el.children[0].childNodes[1].getAttribute("charset"))
    console.log(el.setAttribute("lang","en"))
   /*  Swal.fire({
        title: `Votre langue : ${navigator.language}`,
        text: "You clicked the button!",
        icon: "success"
      }); */
      Swal.fire({
        title: "Ajoute ton login Github",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: async (login) => {
          try {
            const githubUrl = `
              https://api.github.com/users/${login}
            `;
            const response = await fetch(githubUrl);
            if (!response.ok) {
              return Swal.showValidationMessage(`
                ${JSON.stringify(await response.json())}
              `);
            }
            return response.json();
          } catch (error) {
            Swal.showValidationMessage(`
              Request failed: ${error}
            `);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          });
        }
      });
 }