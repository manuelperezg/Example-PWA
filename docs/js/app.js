// registrar el service worker
if (navigator.serviceWorker) {
	//registrar el service
	navigator.serviceWorker.register('/sw-basico.js');
}

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
