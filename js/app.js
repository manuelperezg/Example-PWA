// registrar el service worker
/*if (navigator.serviceWorker) {
	//registrar el service
	navigator.serviceWorker.register('/sw-basico.js');
}*/

 // funciones anonimas auto ejecutables
 //Registro  de Características de PWA's
 ((d, w, n, c) => {
 	if ('serviceWorker' in n) {
 		// Resgistro del Service Worker
 		w.addEventListener('load', () => {
 			n.serviceWorker.register('./sw.js')
 			.then( registro => {
 				// console.log(registro);
 				c(
 					'Service Worker Registrado con Exito',registro.scope)
 			})
 			.catch( error => { c(`Registro de serviceWorker Fallido`,error)})
 		});
 	}
 	//registro de Cache
 	if (w.caches) {
 		caches.open('cache-v1.1').then ( cache =>{
 			// cache.add('/index.html'); 
 			cache.addAll([
 				'index.html',
 				'css/main.css',
 				'css/util.css',
 				'js/main.js',
 				'images/fondo-1.png',
 				'images/logo_ittec.png'
 				]).then( ()=>{
 					//Borrar de cache
 					// cache.delete('/css/util.css');
 					// Reemplazar en cache
 					// cache.put('index.html',new Response('Hola mundo')); 
 					

 				});

 		});
 	}

 	//Activando el permiso de las notificaciones
 	if ( w.Notification && Notification.permission !== 'denied') {
 		Notification.requestPermission(status => {
 			console.log(status);
 			let n = new Notification('Bienvenido a ITTEC',{
 				body: 'Nuestra página se encuentra en Construcción actualmente',
 				icon: './images/icons/icono_h2.png'
 			});
 		});
 	}

 	//activar la sincronizacion de fondo
 	if ( 'serviceWorker' in n && 'SyncManager' in w) {
 		function registerBGSync (){
 			n.serviceWorker.ready
 			.then(registro => {
 				return registro.sync.register('github')
 				.then( () => c('sincronizacion de fondo registrada'))
 				.catch(error => c('fallo la sincronizacion',error))
 			})
 		}
 		registerBGSync()
 	}

 })(document, window, navigator, console.log );

 //detectar el estado de la conexión
  ((d, w, n, c) => {
    const header = d.querySelector('.Header'),
  	metaTagTheme = d.querySelector('meta[name=theme-color]');
  	let body = (`{
				background-color: #000 !important;
			}`,{
				headers: {
					'Content-Type':'text/css'
				}
			});

  	function netWorkStatus (e){
  		c( e,e.type )

  		if ( n.onLine ) {
  			metaTagTheme.setAttribute('content','#0aa458');
  			alert('Conexion restablecida');
  		}else{
  			metaTagTheme.setAttribute('content','#a52100 ');
  			alert('Conexion perdida')
  		}
  	}

  	d.addEventListener('DOMContentLoaded',e => {
  		if (!n.onLine) {
  			netWorkStatus(this)
  		}
  	w.addEventListener('online',netWorkStatus)
  	w.addEventListener('offline',netWorkStatus)

  	})
 }) (document, window, navigator, console.log );

  ((d, w, n, c) => {

 })(document, window, navigator, console.log );

  ((d, w, n, c) => {

 })(document, window, navigator, console.log );








/*if (window.caches) {
	caches.open('prueba-1');
	caches.open('prueba-2');

	//ver si existe
	caches.has('prueba-2').then (console.log);

	//borrar cache
	caches.delete('prueba-1').then(console.log);

	caches.open('cache-v1.1').then ( cache =>{
		// cache.add('/index.html'); 
		cache.addAll([
			'index.html',
			'css/util.css'
			]).then( ()=>{
				//Borrar de cache
				// cache.delete('/css/util.css');
				// Reemplazar en cache
				// cache.put('index.html',new Response('Hola mundo')); 
				

			});

			/*cache.match('/index.html')
				.then( res => {
					res.text().then( console.log );
			});*/
	/*});

	caches.keys().then( keys => {
		console.log(keys);
	});

}*/
