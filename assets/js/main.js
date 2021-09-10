// PAGINA SELECCION BRAWLERS
// Arreglo de los Brawlers
const trophyRoad = [
	'8bit',
	'Bo',
	'Brock',
	'Bull',
	'Colt',
	'Dynamike',
	'Emz',
	'Jessie',
	'Nita',
	'Shelly',
	'Stu',
	'Tick'
];
const rare = [ 'Barley', 'El Primo', 'Poco', 'Rosa' ];
const superRare = [ 'Carl', 'Darryl', 'Jacky', 'Penny', 'Rico' ];
const epic = [ 'Bea', 'Bibi', 'Edgar', 'Frank', 'Griff', 'Nani', 'Pam', 'Piper' ];
const mythic = [ 'Byron', 'Gene', 'Max', 'Mortis', 'Mr. P', 'Sprout', 'Squeak', 'Tara' ];
const legendary = [ 'Amber', 'Crow', 'Leon', 'Sandy', 'Spike' ];
const chromatic = [ 'Ash', 'Belle', 'Buzz', 'Colette', 'Gale', 'Lou', 'Ruffs', 'Surge' ];

var arregloCancelados = [];

// Creacion de las cartas
function paginasCartas() {
	cartasBrawlers = document.getElementsByClassName('cartas-brawlers')[0];
	// Funciones para enseñar los brawlers
	function creacionCartas(rareza, carpeta, rarezaDiv, fondoColor) {
		rareza.forEach((i) => {
			const div = document.createElement('div');
			const image = document.createElement('img');
			var p = document.createElement('p');
			var nombre = document.createTextNode(i);

			image.src = 'assets/images/Brawlers/' + carpeta + '/' + i + '.png';
			//image.loading = 'lazy';

			div.classList.add('carta');
			div.onclick = function() {
				div.classList.toggle('desactivado');

				// Se activan y desactivan los brawlers
				const index = arregloCancelados.indexOf(div.lastChild.innerText);

				if (index === -1) {
					arregloCancelados.push(div.lastChild.innerText);
					console.log(arregloCancelados);
				} else {
					arregloCancelados.splice(index, 1);
					console.log(arregloCancelados);
				}
			};

			p.appendChild(nombre);
			div.appendChild(image);
			div.appendChild(p);
			rarezaDiv.appendChild(div);

			div.style.background = fondoColor;
		});
	}

	creacionCartas(trophyRoad, '1-TrophyRoad', cartasBrawlers, 'linear-gradient(#9dd7f5, #8bbed8)');
	creacionCartas(rare, '2-Rare', cartasBrawlers, 'linear-gradient(#52dd00, #40a803)');
	creacionCartas(superRare, '3-SuperRare', cartasBrawlers, 'linear-gradient(#3288fd, #1c4986)');
	creacionCartas(epic, '4-Epic', cartasBrawlers, 'linear-gradient(#ab19f1, #6e0f9b)');
	creacionCartas(mythic, '5-Mythic', cartasBrawlers, 'linear-gradient(#f40014, #6c0009)');
	creacionCartas(legendary, '6-Legendary', cartasBrawlers, 'linear-gradient(#fdf344, #807b27)');
	creacionCartas(
		chromatic,
		'7-Chromatic',
		cartasBrawlers,
		'linear-gradient(to bottom right, #ff4343, #8538ce, #fdf344)'
	);
}

// Guardar el Arreglo de Brawlers Cancelados
function guardarBrawlers() {
	sessionStorage.setItem('arregloCancelados', JSON.stringify(arregloCancelados));
}

// ---------------------------------------------
// PAGINA BRAWLER GANADOR
// Brawler Aleatorio
var i = 0;
function generadorRandom() {
	// Arreglo con los brawlers cancelados
	const datosArreglo = sessionStorage.getItem('arregloCancelados');
	const brawlersCancelados = JSON.parse(datosArreglo);

	// Seleccionar la carpeta
	const carpetas = [ '1-TrophyRoad', '2-Rare', '3-SuperRare', '4-Epic', '5-Mythic', '6-Legendary', '7-Chromatic' ];

	// Divs
	const divGanador = document.getElementsByClassName('winner-brawler')[0];
	const divImgGanador = document.getElementsByClassName('brawler-image')[0];

	// Cancelar los brawlers
	var found = true;
	while (found) {
		var carpetaGanadora = carpetas[Math.floor(Math.random() * carpetas.length)];
		carpetaSwitch(carpetaGanadora, verificarGanador);

		found = brawlersCancelados.includes(brawlerGanador);
	}

	// Seleccionar al brawler
	function seleccionBrawler(arreglo) {
		const image = document.createElement('img');
		const p = document.createElement('p');
		const nombre = document.createTextNode(brawlerGanador);

		image.src = 'assets/images/Brawlers/' + carpetaGanadora + '/' + brawlerGanador + '.png';

		p.classList.add('borrar');
		p.appendChild(nombre);
		divImgGanador.appendChild(image);
		divGanador.appendChild(p);
	}

	// Borrar el antiguo
	i++;
	if (i > 1) {
		document.getElementsByTagName('img')[0].remove();
		document.getElementsByClassName('borrar')[0].remove();
	}

	// Llamada a la funcion del ganador
	carpetaSwitch(carpetaGanadora, seleccionBrawler);
}

// Devuelve el ganador
function verificarGanador(arreglo) {
	return (brawlerGanador = arreglo[Math.floor(Math.random() * arreglo.length)]);
}

// Verificar las carpetas
function carpetaSwitch(carpetaGanadora, funcion) {
	switch (carpetaGanadora) {
		case '1-TrophyRoad':
			funcion(trophyRoad);
			break;

		case '2-Rare':
			funcion(rare);
			break;

		case '3-SuperRare':
			funcion(superRare);
			break;

		case '4-Epic':
			funcion(epic);
			break;

		case '5-Mythic':
			funcion(mythic);
			break;

		case '6-Legendary':
			funcion(legendary);
			break;

		case '7-Chromatic':
			funcion(chromatic);
			break;
	}
}

// --------------------------------------------
// PAGINA SELECCION MODOS
const modes = [ 'Bounty', 'Brawlball', 'GemGrab', 'Heist', 'HotZone', 'Knockout', 'Showdown', 'Siege' ];
var arregloModosCancelados = [];

function paginaModos() {
	cartasModos = document.getElementsByClassName('cartas-modos')[0];
	// Funciones para enseñar los brawlers
	function creacionCartas(modo, divModo, fondoColor) {
		const div = document.createElement('div');
		const image = document.createElement('img');
		var p = document.createElement('p');
		var nombre = document.createTextNode(modo);

		image.src = 'assets/images/Modos/' + modo + '.png';

		div.classList.add('carta');
		div.onclick = function() {
			div.classList.toggle('desactivado');

			// Se activan y desactivan los modos
			const index = arregloModosCancelados.indexOf(div.lastChild.innerText);

			if (index === -1) {
				arregloModosCancelados.push(div.lastChild.innerText);
				console.log(arregloModosCancelados);
			} else {
				arregloModosCancelados.splice(index, 1);
				console.log(arregloModosCancelados);
			}
		};

		p.appendChild(nombre);
		div.appendChild(image);
		div.appendChild(p);
		divModo.appendChild(div);

		div.style.background = fondoColor;
	}
	creacionCartas('Bounty', cartasModos, 'linear-gradient(#EF7527, #8E4414)');
	creacionCartas('Brawlball', cartasModos, 'linear-gradient(#055C6F, #02404E)');
	creacionCartas('GemGrab', cartasModos, 'linear-gradient(#8538CE, #5E2395)');
	creacionCartas('Heist', cartasModos, 'linear-gradient(#E05FFF, #8E3AA3)');
	creacionCartas('HotZone', cartasModos, 'linear-gradient(#FF4343, #A4142C)');
	creacionCartas('Knockout', cartasModos, 'linear-gradient(#EE1F1F, #7D0F0F)');
	creacionCartas('Showdown', cartasModos, 'linear-gradient(#8EEC53, #63AB36)');
	creacionCartas('Siege', cartasModos, 'linear-gradient(#04C7FF, #044E63)');
}

// Guardar el Arreglo de Modos Cancelados
function guardarModos() {
	sessionStorage.setItem('arregloModosCancelados', JSON.stringify(arregloModosCancelados));
}

// -------------------------------------
// PAGINA MODO GANADOR
function generarModoRandom() {
	// Arreglo con los brawlers cancelados
	const datosArreglo = sessionStorage.getItem('arregloModosCancelados');
	const modosCancelados = JSON.parse(datosArreglo);

	// Divs
	const divGanador = document.getElementsByClassName('winner-brawler')[0];
	const divImgGanador = document.getElementsByClassName('brawler-image')[0];

	// Cancelar los brawlers
	var found = true;
	while (found) {
		var modoGanador = modes[Math.floor(Math.random() * modes.length)];

		found = modosCancelados.includes(modoGanador);
	}

	const image = document.createElement('img');
	const p = document.createElement('p');
	const nombre = document.createTextNode(modoGanador);

	image.src = 'assets/images/Modos/' + modoGanador + '.png';

	p.classList.add('borrar');
	p.appendChild(nombre);
	divImgGanador.appendChild(image);
	divGanador.appendChild(p);

	// Borrar el antiguo
	i++;
	if (i > 1) {
		document.getElementsByTagName('img')[0].remove();
		document.getElementsByClassName('borrar')[0].remove();
	}

	console.log(modoGanador);
}

function cambiarFondo() {
	const cuerpo = document.getElementsByTagName('body')[0];
	console.log(cuerpo.style.background);
	if (cuerpo.style.background === 'linear-gradient(rgb(129, 35, 122), rgb(255, 189, 139))') {
		sessionStorage.setItem('colorFondo', 'linear-gradient(#2b36a2, #528af9)');
		cuerpo.style.background = 'linear-gradient(#2b36a2, #528af9)';
	} else {
		sessionStorage.setItem('colorFondo', 'linear-gradient(#81237a, #ffbd8b)');
		cuerpo.style.background = 'linear-gradient(#81237a, #ffbd8b)';
	}

	//cuerpo.classList.toggle('cambioFondo');
}

function colorFondo() {
	const cuerpo = document.getElementsByTagName('body')[0];
	const color = sessionStorage.getItem('colorFondo');
	console.log(color);
	cuerpo.style.background = color;
}
