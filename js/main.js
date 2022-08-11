Swal.fire({
    imageUrl: 'banner/Mango-Logo.png',
    imageWidth: 300,
    imageHeight: 120,
    imageAlt: 'Logo empresa',
    title: 'Desea resivir nuetras notificaciones?',
    input: 'email',
    inputPlaceholder: 'Ingrese su direccion',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Exelente!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'

    
  })




  // API USUARIO
  
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dbe1e5d82dmsh6147c2fb3f7d1fap170c87jsn1c2c0223b63d',
    'X-RapidAPI-Host': 'random-user.p.rapidapi.com'
	}
};

fetch('https://random-user.p.rapidapi.com/getuser', options)
	.then(response => response.json())
	.then(response => console.log("Compra realizada por usuario-datos:", response))
	.catch(err => console.error(err));