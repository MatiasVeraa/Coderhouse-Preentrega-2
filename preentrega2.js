// Trabajo Practico 1 y 2

const heroes = ["T-rex", "Sonico", "King Animal", "Genio", "Viloni", "Salpicador", "Gaucho", "Voltage", "Karate Kid", "Pantalon Marron",];
let directorelegido;
let muchachos = [];
let grupo = 0;
let nombre;
let nombreequipo;
function Director (nombre,nombreclave,habilidad,desventaja,edad){
  this.nombre = nombre;
  this.nombreclave = nombreclave;
  this.hahbilidad = habilidad;
  this.desventaja=desventaja;
  this.edad=edad; 
}
  const director1 = new Director("Hernan", "El Chicuelo", "estratega", "severidad", 50);
  const director2 = new Director("Valeria", "La Innovadora", "creadora", "paciencia", 40);
  const director3 = new Director("Diego", "El Inquebrantable", "negociador", "impulsividad", 55);
  const director4 = new Director("Sofia", "La Inspiradora", "visionaria", "inexperiencia", 28);

  function malvados (nombre,historial,nivel){
    this.nombre = nombre;
    this.historial = historial;
    this. nivel= nivel;
    
  }
   
   const villano1 =    new malvados("El Ladrón Silencioso", "Comenzó con pequeños robos en tiendas, sin llamar mucho la atención.", "Bajo");
   const villano2 =    new malvados("Manos Rápidas", "Se especializa en carteristas y robos pequeños en mercados.", "Bajo");
   const villano3 =    new malvados("El Buitre", "Robó coches de lujo, siempre eligiendo a sus víctimas entre los más débiles.", "Bajo");
   const villano4 =    new malvados("La Sombra Roja", "Comenzó con robos violentos, pero se fue involucrando en asesinatos y tráfico de armas.", "Medio");
   const villano5 =    new malvados("El Mercenario", "Trabajó como asesino a sueldo, luego se metió en el tráfico de drogas y trata de personas.", "Medio");
   const villano6 =    new malvados("La Serpiente", "Primero fue un ladrón de poca monta, luego pasó a liderar una red de tráfico humano y asesinatos.", "Medio");
   const villano7 =    new malvados("El Imperio del Caos", "Después de varias masacres, ahora controla una red criminal global que planea una invasión mundial.", "Alto");
   const villano8 =    new malvados("La Mente Maestra", "A lo largo de los años ha manipulado gobiernos y empresas globales, creando una red secreta que domina el mundo.", "Alto");
   const villano9 =    new malvados("El Conquistador Oscuro", "Comenzó como un líder rebelde, pero ahora dirige un imperio secreto con la intención de dominar todo el planeta.", "Alto");
    
    
  
    



function inicio() {
  let sorpresa = 0;
  nombre = prompt("Ingresa tu nombre");

  // Verificar si el nombre es nulo o vacío
  if (nombre === null || nombre.trim() === "") {  
    alert("Me gusta tu misterio, sin embargo, necesito saber como te llamas");
    inicio(); // Volver a iniciar si el nombre no se ingresa
    return; // Termina la ejecución
  } else { 
    alert("Mucho gusto " + nombre + ", es un placer recibirte en el laboratorio de Supers.");
    alert("Necesitamos que catalogues a los siguientes prospectos para un equipo de los mejores guerreros. ¿Estás listo?");
  }

  while (sorpresa <= 1) {
    let avanzar = prompt("Escribe 'si' o 'no'");

    if (avanzar === "si") {
      alert("Vayamos a ello");
      nombreteam()
      break; // Sale del bucle

    } else if (avanzar === "no") {
      alert("Entiendo, no todos tienen las habilidades o las agallas para proteger a los otros");
      break; // Sale del bucle
    } else if (avanzar !== "si" && avanzar !== "no") {
      sorpresa++;
      if (sorpresa === 1) {
        alert("Me parece que emm fallaste. Te doy una última oportunidad, vuelve a fallar y te vas a llevar una sorpresa.");
      } else if (sorpresa >= 2) {
        alert("Definitivamente eso no fue un error sos un impostor. Tu IP y demás datos fueron rastreados. Mis chicos estarán en 5 minutos en tu ubicación.");
        break; // Salir del bucle
      }
    }
  }
}


function nombreteam (){ 
  nombreequipo= prompt ("Para formar tu equipo primero necesitamos saber como se va a llamar");
  if (nombreequipo === null || nombreequipo.trim() === "") {  
     alert("¿Te falta imaginacion? Vamos, vos podes");
     nombreteam();
     return; 
  } else { 
     alert("Creo que " + nombreequipo + " es un nombre apropiado")
     alert("Vamos con la lista de super");
     supers()

  }


}

function supers() { 
  
  let message = "Estos son los Supers que tenemos en lista. Si queres pasar a la eleccion toca (11) \n \n ";
  
  for (let i = 0; i < heroes.length; i++) {
      message += `${i + 1}. ${heroes[i] + " "}`;
  }
  
  const ficha = parseInt(prompt(message  +  "\n \n Ingresa el numero del heroe que te gustaria ver o el numero para seguir adelante" ));


  switch (ficha) {
    case 1:
        alert("T-rex: Un dinosaurio-hombre con fuerza descomunal, mide 2.50M y tien dientes super afilados.");
        supers();
        break;
    case 2:
        alert("Sonico: Vuela a velocidades que casi se acercan a la velocidad de la luz.");
        supers();
        break;
    case 3:
        alert("King Animal: Posee todos sus sentidos mejorados. Su fisico se asemeja al de un animal, no es muy listo.");
        supers();
        break;
    case 4:
        alert("Genio: Posee grandes conocimientos y se adapta a nuevos");
        supers();
        break;
    case 5:
        alert("Viloni: El campeon del pueblo, el rocker de villa Urquiza, el maradona de la lucha libreeeee .");
        supers();
        break;
    case 6:
        alert("Salpicador: Maestro del agua. No nos alcanzaba para Aqcuaman");
        supers();
        break;
    case 7:
        alert("Gaucho: Defensor del campo, su poncho hecho de material alienigena es indestructible y super ligero. Tiene una faca del mismo material.");
        supers();
        break;
    case 8:
        alert("Voltage: Controla la electricidad, maneja rayos, cuando se quiere calmar solo dice Ohm.");
        supers();
        break;
    case 9:
        alert("Karate Kid: Experto en artes marciales, sus amigos le dicen Daniel-San.");
        supers();
        break;
    case 10:
        alert("Pantalon Marron: Aun no tenemos su registro.");
        supers();
        break;
    case 11:
        alert ("Perfecto, pasemos a la elección");
        eleccion ();
        break;
    default:
        alert("No elegiste un número válido.");
        supers();
}

  
}

function eleccion() {
  let elegir = "Elegi el numero del heroe que quieras incorporar. SOLO PODES ELEGIR 5 HEROES\n";
  for (let i = 0; i < heroes.length; i++) {
    elegir += `${i + 1}. ${heroes[i]} \n \n `;
  }

  const guerrero = parseInt(prompt(elegir + "\n \n Ingresa el numero del heroe que te gustaria elegir \n"));

  if (grupo >= 5) {
    alert("Ya tienes la cantidad máxima de héroes en tu equipo.");
    alert("Pasaremos a la eleccion de tu director");
    descripciondirector()
    return;
  }

  switch (guerrero) {
    case 1:
      alert("T-rex. Buena eleccion, si la batalla es cuerpo a cuerpo sera bueno tenerlo de tu lado.");
      grupo++;
      muchachos.push(heroes[0]);
      eleccion();
      break;
    case 2:
      alert("Sonico. Buena elección en terminos de velocidad es el mejor");
      grupo++;
      muchachos.push(heroes[1]);
      eleccion();
      break;
    case 3:
      alert("King Animal. Buena eleccion, sus sentidos mejorados seran de ayuda");
      grupo++;
      muchachos.push(heroes[2]);
      eleccion();
      break;
    case 4:
      alert("Genio. Buena elección, su gran inteliencia te sera util");
      grupo++;
      muchachos.push(heroes[3]);
      eleccion();
      break;
    case 5:
      alert("Viloni. Buena elección el vuelo del aguila rubia es implacable.");
      grupo++;
      muchachos.push(heroes[4]);
      eleccion();
      break;
    case 6:
      alert("Salpicador. Buena eleccion, si la batalla es en el agua el sera clave.");
      grupo++;
      muchachos.push(heroes[5]);
      eleccion();
      break;
    case 7:
      alert("Gaucho. Buena elección, es tan argentino que los uruguayos dicen que nacio en montevideo");
      grupo++;
      muchachos.push(heroes[6]);
      eleccion();
      break;
    case 8:
      alert("Voltage. Buena elección, es letal en batalla");
      grupo++;
      muchachos.push(heroes[7]);
      eleccion();
      break;
    case 9:
      alert("Karate Kid. Buena elección, sabe la patada de la grulla");
      grupo++;
      muchachos.push(heroes[8]);
      eleccion();
      break;
    case 10:
      alert("Pantalon Marron: Ultimo informe, segun los nuevos registros el es el mejor de todos los prospectos.");
      grupo++;
      muchachos.push(heroes[9]);
      eleccion();
      break;
    default:
      alert("No elegiste un número válido.");
      eleccion();
  }
}

function descripciondirector() {
  alert("Te presento a los directores calificados para este equipo, elegí el que más te guste");

  let nombresdedirectores = "";

  
  const directores = [director1, director2, director3, director4];

  for (let i = 0; i < directores.length; i++) {
    let director = directores[i];
    
    nombresdedirectores += director.nombre + "  ";
  }

  let decision = prompt ("Estos son los nombres de los prospectos para dirigir tu equipo. Escribi el nombre del prospecto que te gustaria ver en profundidad o escribi" + " continuar".toUpperCase() + " si queres pasar a la eleccion  \n \n"+ nombresdedirectores);

  let directorSeleccionado = null;
  for (let i = 0; i < directores.length; i++) {
    if (directores[i].nombre.toLowerCase() === decision.toLowerCase()) {
      directorSeleccionado = directores[i];
      break;
    }

  }
  if (directorSeleccionado) {
    alert(
      `Nombre: ${directorSeleccionado.nombre}\n` +
      `Nombre clave: ${directorSeleccionado.nombreclave}\n` +
      `Habilidad: ${directorSeleccionado.hahbilidad}\n` +
      `Desventaja: ${directorSeleccionado.desventaja}\n` +
      `Edad: ${directorSeleccionado.edad}`  
    );
    descripciondirector();

  } 
  else if (decision.toLocaleLowerCase( ) ==="continuar") {

    elecciondirector()
  }
  
  else {
    alert("El nombre ingresado no coincide con ningún director.");
    descripciondirector()

  }
}

function elecciondirector() {

     let nombresdedirectores = "";

  
  const directores = [director1, director2, director3, director4];


  for (let i = 0; i < directores.length; i++) {
    let director = directores[i];
   
    nombresdedirectores += director.nombre + "  ";
  }

 
  let decision = prompt ("Estos son los nombres de los prospectos para dirigir tu equipo. Escribi el nombre del prospecto que te gustaria elegir"+ " \n"+ nombresdedirectores);

  
  for (let i = 0; i < directores.length; i++) {
    if (directores[i].nombre.toLowerCase() === decision.toLowerCase()) {
        directorelegido  = directores[i];
    break;
    } 

  }
  if (directorelegido){ 
    alert(" Buena eleccion " + directorelegido.nombre + " puede ser lo que necesita este equipo" );
  
    mostrarEquipo()

  } 
 
  else {
    alert("El nombre ingresado no coincide con ningún director.");
    elecciondirector()

  }
}


function mostrarEquipo() {
  alert("Buen trabajo reclutador " + nombre + "\n\n  Tu equipo actual se llama: " + nombreequipo + "\n\n Est formado por: "  + muchachos.join(", ") +  "\n\n y tu director es " + directorelegido.nombre)
  villanos();

}

function villanos() {
  const malos = [villano1,villano2,villano3,villano4,villano5,villano6,villano7,villano8,villano9];

  alert ("Veo potencial en tu equipo, te voy a dar una lista de villanos. Los mismos estan catalogados en nivel " + "alto ".toUpperCase() + "medio ".toUpperCase() + "bajo".toUpperCase() )

  let filtrarvillanos= prompt ("Ingresa el nivel el villano").toLowerCase().trim();
  if (filtrarvillanos === null || filtrarvillanos.trim()=== "") {
    alert("Esto es importante." + " Presta atencion".toUpperCase())
    villanos()
  } 
  let resultado = malos.filter(x => x.nivel.toLowerCase().includes(filtrarvillanos));

  if (resultado.length > 0) {
   
    let listaVillanos = resultado.map(villano => villano.nombre + ":" + " " + villano.historial  +" " + "Nivel: " + villano.nivel).join("\n\n");
    alert("Villanos encontrados:\n" + listaVillanos);
  } 
  else {
    alert("No se encontraron villanos con ese nivel. Intenta nuevamente.");
    villanos(); 
  }
}
inicio();