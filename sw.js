

self.addEventListener('fetch', event =>{

	//El service worker controla todo, si quiero no dejo pasar ese archivo
	/*if (event.request.url.includes('main.css')) {
	event.respondWith( null );
	}else{
	event.respondWith( fetch( event.request ) );
	}*/
	
	//Pasar todo por el Service Worker 
	event.respondWith( fetch( event.request ) );
	
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
	/*const  offlineResp = new Response (`
			<p> Bienvenido a mi página web
				Disculpe pero para usarla necesitas internet...</p>
			`,{
				headers:{
				'Content-Type':'text/html; charset=UTF-8'
				}
			});
	const res = fetch(event.request).catch( () => offlineResp);
	event.respondWith ( res );*/


	// console.log(event.request.url);
	

	//todos nuestras peticiones get de la web
	// console.log(event);


});

//evento push
self.addEventListener('push', e =>{
	console.log('Evento: push');

	let titulo = 'Push Notification Demo',
		options = {
			body: 'Click para regresar a la aplicacion',
			icon: './images/icons/icono_h2.png',
			vibrate: [100,50,100],
			data: { id:1 },
			actions: [
				{'action':'Simon','title': 'Adoro mi app c: ',icon:
				'./images/icons/icono_h2.png'},
				{'action':'Nel Pastel','title': 'Ta fea c: ',icon:
				'./images/icons/icono_h2.png'}
			]
		}

		e.waitUntil( self.registration.showNotification(titulo,options) );
});

self.addEventListener('sync',e =>{
	console.log('Evento Sincronizacion de fondo',e)

	//Revisar que la etiqueta de sincronizacion sea la que definimos en la app.js
	if (e.tag === 'github' || e.tag ==='test-tag-from-devtools'){
		e.waitUntil(
			//comprobar las pestañas abiertas en navegadpr
			self.clients.matchAll()
			.then(all =>{
				return all.map(client =>{
					return client.postMessage('online')
				})
			})
			.catch( err => console.log(err))
			)
	}
})