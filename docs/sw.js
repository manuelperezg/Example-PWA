

self.addEventListener('fetch', event =>{

	//El service worker controla todo, si quiero no dejo pasar ese archivo
	/*if (event.request.url.includes('main.css')) {
	event.respondWith( null );
	}else{
	event.respondWith( fetch( event.request ) );
	}*/
	
	//Pasar todo por el Service Worker 
	// event.respondWith( fetch( event.request ) );
	
	// console.log(event.request.url.includes('.png'));
	/*if (event.request.url.includes('.png')) {
		let fotoReq = fetch ( event.request);
		event.respondWith ( fotoReq );
	}*/

	//interceptando css y cambiando
	/*if (event.request.url.includes('util.css')) {
		console.log('entra');
		let respuesta = new Response (`
			body {
				background-color: #000 !important;
			}`,{
				headers: {
					'Content-Type':'text/css'
				}
			});

		event.respondWith( respuesta );

	}*/



	//interceptando logo y devolviendo hacia arriba
	/*if (event.request.url.includes('logo_ittec.png')) {
		let logoHeader = fetch ('images/logo_ittec_patas_arriba.png');
		event.respondWith ( logoHeader );
	}*/

	//----------regresar algo si estás offline---------
	
	// const offlineResp = fetch('pages/offlinepage.html');
	const  offlineResp = new Response (`
			<p> Bienvenido a mi página web
				Discule pero para usarla necesitas internet...</p>
			`,{
				headers:{
				'Content-Type':'text/html; charset=UTF-8'
				}
			});
	const res = fetch(event.request).catch( () => offlineResp);
	event.respondWith ( res );


	// console.log(event.request.url);
	

	//todos nuestras peticiones get de la web
	// console.log(event);
});