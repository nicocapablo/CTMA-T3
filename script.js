// --- PREGUNTAS ---
const preguntas = [
  {
  texto: "Què és l’Anàlisi de Cicle de Vida (ACV)?",
  opciones: [
    "a) Un procediment econòmic per reduir costos de producció",
    "b) Un procediment objectiu per avaluar els impactes ambientals associats al cicle de vida d’un producte",
    "c) Un estudi de mercat per avaluar la viabilitat comercial d’un producte",
    "d) Un indicador social de sostenibilitat"
  ],
  correcta: "b"
},
{
  texto: "Quin és l’objectiu principal de l’ACV?",
  opciones: [
    "a) Comparar productes i processos per escollir el de menor impacte ambiental",
    "b) Determinar el cost econòmic d’un producte",
    "c) Avaluar la rendibilitat energètica d’un procés",
    "d) Determinar la vida útil d’un recurs natural"
  ],
  correcta: "a"
},
{
  texto: "Quines són les entrades (inputs) principals d’un ACV?",
  opciones: [
    "a) Residus i emissions",
    "b) Energia, aigua i matèries primeres consumides",
    "c) Només emissions a l’aire",
    "d) Beneficis econòmics"
  ],
  correcta: "b"
},
{
  texto: "Quines són les sortides (outputs) d’un ACV?",
  opciones: [
    "a) Productes acabats i beneficis econòmics",
    "b) Residus sòlids, líquids i gasosos",
    "c) Energia i matèries primeres",
    "d) Materials reciclats"
  ],
  correcta: "b"
},
{
  texto: "Quin any es van fer els primers estudis d’ACV sobre una ampolla de plàstic de Coca-Cola?",
  opciones: [
    "a) 1969",
    "b) 1975",
    "c) 1987",
    "d) 1997"
  ],
  correcta: "a"
},
{
  texto: "Quina va ser la causa dels primers estudis d’ACV durant els anys 70?",
  opciones: [
    "a) La crisi del petroli",
    "b) L’escassetat d’aigua",
    "c) L’augment de la població",
    "d) La contaminació acústica"
  ],
  correcta: "a"
},
{
  texto: "Durant els anys 90, quina entitat va unificar la metodologia de l’ACV?",
  opciones: [
    "a) SETAC (Societat de Toxicologia i Química Ambiental)",
    "b) ONU Medi Ambient",
    "c) FAO",
    "d) EPA"
  ],
  correcta: "a"
},
{
  texto: "Quin any es van publicar les normes ISO relacionades amb l’ACV?",
  opciones: [
    "a) 1990",
    "b) 1997",
    "c) 2001",
    "d) 2015"
  ],
  correcta: "b"
},
{
  texto: "Quina norma defineix els principis i l’estructura general d’un ACV?",
  opciones: [
    "a) ISO 14001",
    "b) ISO 14040",
    "c) ISO 14044",
    "d) ISO 26000"
  ],
  correcta: "b"
},
{
  texto: "Quina norma substitueix les ISO 14041, 14042 i 14043?",
  opciones: [
    "a) ISO 14044",
    "b) ISO 14050",
    "c) ISO 14025",
    "d) ISO 9001"
  ],
  correcta: "a"
},
{
  texto: "Quina és una de les principals limitacions de l’ACV?",
  opciones: [
    "a) La manca de dades i el temps necessari per realitzar-lo",
    "b) Només s’aplica a productes químics",
    "c) No té aplicació industrial",
    "d) No quantifica emissions"
  ],
  correcta: "a"
},
{
  texto: "Quina fase NO forma part de la metodologia d’un ACV?",
  opciones: [
    "a) Definició d’objectius i abast",
    "b) Anàlisi d’inventari",
    "c) Publicitat i màrqueting",
    "d) Interpretació de resultats"
  ],
  correcta: "c"
},
{
  texto: "Què inclou la fase de definició d’objectiu i abast en un ACV?",
  opciones: [
    "a) Només la identificació dels residus generats",
    "b) L’objectiu de l’estudi, els límits del sistema i la unitat funcional",
    "c) El càlcul de costos energètics",
    "d) Només la selecció de materials reciclats"
  ],
  correcta: "b"
},
{
  texto: "Què és la unitat funcional dins d’un ACV?",
  opciones: [
    "a) La unitat de referència que permet comparar tots els inputs i outputs",
    "b) El cost d’un producte per unitat",
    "c) El temps de vida útil d’un producte",
    "d) El nombre d’usuaris finals"
  ],
  correcta: "a"
},
{
  texto: "Què és l’anàlisi d’inventari dins de l’ACV?",
  opciones: [
    "a) Un procés de quantificació de requeriments energètics i emissions durant tot el cicle de vida",
    "b) L’estudi econòmic d’un producte",
    "c) El registre de vendes anuals",
    "d) La definició de les metes de sostenibilitat"
  ],
  correcta: "a"
},
{
  texto: "Quina és la funció principal de l’avaluació d’impacte en un ACV?",
  opciones: [
    "a) Classificar i quantificar els possibles impactes sobre la salut humana i el medi ambient",
    "b) Calcular la vida útil d’un recurs natural",
    "c) Estimar el cost energètic de cada procés",
    "d) Determinar la rendibilitat econòmica"
  ],
  correcta: "a"
},
{
  texto: "Què s’entén per normalització dins d’un ACV?",
  opciones: [
    "a) Comparar les categories d’impacte mitjançant valors de referència",
    "b) Reduir el nombre de categories ambientals",
    "c) Eliminar resultats no rellevants",
    "d) Fer la mitjana de totes les emissions"
  ],
  correcta: "a"
},
{
  texto: "Què és la fase d’agrupació en un ACV?",
  opciones: [
    "a) Classificar els impactes segons àmbit geogràfic o importància",
    "b) Eliminar categories repetides",
    "c) Ordenar les dades per data",
    "d) Assignar un cost econòmic a cada impacte"
  ],
  correcta: "a"
},
{
  texto: "Què és la fase de ponderació dins d’un ACV?",
  opciones: [
    "a) Assignar pesos relatius a les diferents categories d’impacte segons la seva importància",
    "b) Fer la mitjana de totes les emissions",
    "c) Reduir el nombre d’impactes a dos o tres",
    "d) Determinar només els efectes globals"
  ],
  correcta: "a"
},
{
  texto: "Per què la fase de ponderació no és científica?",
  opciones: [
    "a) Perquè depèn de valors subjectius i percepcions dels interessats",
    "b) Perquè no utilitza dades ambientals reals",
    "c) Perquè elimina informació del sistema",
    "d) Perquè no considera emissions a l’aigua"
  ],
  correcta: "a"
},
{
  texto: "Quin és l’objectiu de la fase d’interpretació en un ACV?",
  opciones: [
    "a) Analitzar els resultats i extreure conclusions clares i recomanacions",
    "b) Repetir l’inventari per comprovar dades",
    "c) Reduir els costos energètics del procés",
    "d) Crear gràfics visuals dels impactes"
  ],
  correcta: "a"
},
{
  texto: "Què vol dir definir els límits del sistema en un ACV?",
  opciones: [
    "a) Escollir només la fase d’ús del producte",
    "b) Determinar quines etapes i processos s’inclouen o s’exclouen de l’estudi",
    "c) Fixar el preu de venda del producte",
    "d) Seleccionar el país on es fabrica"
  ],
  correcta: "b"
},
{
  texto: "Què significa un estudi 'bressol-porta' (cradle-to-gate)?",
  opciones: [
    "a) Inclou des de l’extracció fins al final de vida",
    "b) Inclou només la fase d’ús",
    "c) Inclou des de l’extracció fins que el producte surt de fàbrica",
    "d) Inclou exclusivament el reciclatge"
  ],
  correcta: "c"
},
{
  texto: "Què significa un estudi 'bressol-tomba' (cradle-to-grave)?",
  opciones: [
    "a) Només considera la distribució",
    "b) Des de l’extracció de matèries primeres fins al final de vida",
    "c) Exclusivament l’ús i manteniment",
    "d) Només el tractament de residus"
  ],
  correcta: "b"
},
{
  texto: "Per què és clau la unitat funcional en un ACV comparatiu?",
  opciones: [
    "a) Perquè defineix qui paga l’estudi",
    "b) Perquè determina la mida del producte",
    "c) Perquè assegura la comparabilitat entre alternatives",
    "d) Perquè fixa el cost energètic"
  ],
  correcta: "c"
},
{
  texto: "Què és l’assignació de càrregues en sistemes amb diversos productes?",
  opciones: [
    "a) Repartir impactes entre productes quan el sistema genera més d’un output",
    "b) Incrementar els impactes del producte principal",
    "c) Eliminar els co-productes de l’anàlisi",
    "d) Traslladar tots els impactes al consumidor"
  ],
  correcta: "a"
},
{
  texto: "Quina és una pràctica recomanada abans d’assignar càrregues?",
  opciones: [
    "a) Ignorar els co-productes",
    "b) Ampliar el sistema o utilitzar relacions físiques/econòmiques justificades",
    "c) Duplicar els impactes per prudència",
    "d) Assignar aleatòriament per simplicitat"
  ],
  correcta: "b"
},
{
  texto: "En la fase d’anàlisi d’inventari, quina tasca és habitual?",
  opciones: [
    "a) Dibuixar diagrames de flux de processos",
    "b) Fixar objectius de vendes",
    "c) Fer enquestes de satisfacció",
    "d) Estimar el marge comercial"
  ],
  correcta: "a"
},
{
  texto: "Quina d’aquestes NO és una categoria d’impacte típica en ACV?",
  opciones: [
    "a) Escalfament global",
    "b) Deteriorament de la capa d’ozó",
    "c) Productivitat laboral",
    "d) Acidificació"
  ],
  correcta: "c"
},
{
  texto: "Quina d’aquestes categories és d’abast global?",
  opciones: [
    "a) Escalfament global",
    "b) Formació d’smog",
    "c) Acidificació",
    "d) Eutrofització local"
  ],
  correcta: "a"
},
{
  texto: "Quina d’aquestes categories tendeix a ser regional?",
  opciones: [
    "a) Deteriorament de la capa d’ozó",
    "b) Formació d’smog i acidificació",
    "c) Esgotament de recursos",
    "d) Ús del sòl"
  ],
  correcta: "b"
},
{
  texto: "Quins 'àmbits de protecció' es solen considerar en ACV?",
  opciones: [
    "a) Economia, mercat i màrqueting",
    "b) Salut humana, ecosistemes i recursos",
    "c) Política, societat i educació",
    "d) Energia, aigua i residus"
  ],
  correcta: "b"
},
{
  texto: "Què fa la fase de classificació en l’avaluació d’impacte?",
  opciones: [
    "a) Converteix impactes a euros",
    "b) Assigna les emissions i recursos a categories d’impacte pertinents",
    "c) Defineix la unitat funcional",
    "d) Estableix els límits geogràfics"
  ],
  correcta: "b"
},
{
  texto: "Què fa la fase de caracterització en ACV?",
  opciones: [
    "a) Agrega totes les categories en un sol índex",
    "b) Aplica factors d’equivalència per estimar indicadors comparables dins de cada categoria",
    "c) Elimina emissions no significatives",
    "d) Calcula costos energètics"
  ],
  correcta: "b"
},
{
  texto: "Un exemple de factor de caracterització per a escalfament global és:",
  opciones: [
    "a) L’energia primària equivalent",
    "b) El potencial d’escalfament global (GWP) en kg CO₂-eq",
    "c) L’índex de toxicitat laboral",
    "d) L’índex de confort tèrmic"
  ],
  correcta: "b"
},
{
  texto: "Què és la normalització en ACV?",
  opciones: [
    "a) Dividir els resultats per un valor de referència per facilitar comparacions",
    "b) Eliminar categories locals",
    "c) Convertir tots els resultats a unitats monetàries",
    "d) Repetir l’inventari amb més dades"
  ],
  correcta: "a"
},
{
  texto: "Quin exemple de referència de normalització apareix als apunts?",
  opciones: [
    "a) 1 Ecopunt = impacte d’1 ciutadà del món en 1 any",
    "b) 100 Ecopunts = impacte d’1 ciutadà de la UE en 1 any",
    "c) 10 Ecopunts = impacte d’1 empresa mitjana",
    "d) 1.000 Ecopunts = impacte d’una ciutat"
  ],
  correcta: "b"
},
{
  texto: "Què implica l’agrupació (grouping) en ACV?",
  opciones: [
    "a) Classificar o prioritzar indicadors per àmbit geogràfic o rellevància",
    "b) Eliminar categories amb valors baixos",
    "c) Sumar-ho tot en un únic resultat",
    "d) Fer la mitjana dels resultats normalitzats"
  ],
  correcta: "a"
},
{
  texto: "Per què la ponderació (weighting) requereix transparència?",
  opciones: [
    "a) Perquè utilitza exclusivament dades experimentals",
    "b) Perquè incorpora valors i judicis subjectius dels interessats",
    "c) Perquè és una etapa purament física",
    "d) Perquè sempre dóna el mateix resultat"
  ],
  correcta: "b"
},
{
  texto: "Quina limitació metodològica s’indica als apunts sobre l’ACV?",
  opciones: [
    "a) No pot comparar productes",
    "b) No té aplicació industrial real",
    "c) No considera la sensibilitat de l’entorn i requereix hipòtesis clares",
    "d) No permet fer inventaris d’entrades/sortides"
  ],
  correcta: "c"
},
{
  texto: "En l’exemple 'aigua d’aixeta vs embotellada', quin input és propi de l’aigua embotellada?",
  opciones: [
    "a) Consum d’acer per fabricar aixetes",
    "b) Consum de petroli per fabricar plàstic d’ampolles",
    "c) Energia de xarxa per bombament municipal",
    "d) Residus de depuradora"
  ],
  correcta: "b"
},
{
  texto: "En el mateix exemple, quin output és característic de l’aigua embotellada?",
  opciones: [
    "a) Residus extrets en potabilització",
    "b) Lixiviats de dessaladores",
    "c) Residus d’ampolles, taps, etiquetes i tòners de tinta",
    "d) Boues d’EDAR municipals"
  ],
  correcta: "c"
},
{
  texto: "Quina és una bona pràctica de comunicació de resultats en ACV segons la fase d’interpretació?",
  opciones: [
    "a) Presentar només els impactes més baixos",
    "b) Documentar limitacions, hipòtesis i recomanacions de manera transparent",
    "c) Ometre els valors de normalització",
    "d) Utilitzar sempre una única categoria d’impacte"
  ],
  correcta: "b"
},
{
  texto: "Quina afirmació és certa sobre la comparabilitat d’ACV entre alternatives?",
  opciones: [
    "a) No cal la mateixa unitat funcional",
    "b) Cal mantenir la mateixa unitat funcional i límits del sistema coherents",
    "c) És suficient comparar costos energètics",
    "d) Només cal la mateixa tecnologia de producció"
  ],
  correcta: "b"
},
{
  texto: "Quin és un objectiu típic de fer un ACV d’un producte?",
  opciones: [
    "a) Triar l’alternativa amb menor impacte ambiental total",
    "b) Estimar la quota de mercat",
    "c) Fixar el preu de venda",
    "d) Preveure la satisfacció del client"
  ],
  correcta: "a"
},
{
  texto: "Quin dels següents és un exemple de dada d’inventari?",
  opciones: [
    "a) kg de CO₂-eq per unitat funcional (resultat caracteritzat)",
    "b) kWh consumits per unitat funcional (entrada de procés)",
    "c) Ponderació regional aplicada",
    "d) Ecopunts normalitzats a escala UE"
  ],
  correcta: "b"
},
{
  texto: "Quan un flux contribueix a dues categories (p. ex., NOx), què es pot fer en classificació?",
  opciones: [
    "a) Assignar-lo només a una categoria",
    "b) Repartir-lo entre categories quan els efectes estan relacionats o independents segons s’indiqui",
    "c) Eliminar-lo per evitar doble recompte",
    "d) Convertir-lo a CO₂-eq i prou"
  ],
  correcta: "b"
},
{
  texto: "Quina opció descriu millor el paper dels 'stakeholders' en un ACV contractat?",
  opciones: [
    "a) No hi tenen cap rol",
    "b) Poden influir en objectius, abast i valors de ponderació; cal declarar-ho",
    "c) Decideixen la unitat funcional sense justificació",
    "d) Substitueixen els verificadors tècnics"
  ],
  correcta: "b"
},
{
  texto: "Quin avantatge aporta expressar impactes en unitats comunes com Ecopunts?",
  opciones: [
    "a) Evita fer inventaris",
    "b) Permet comparar categories diferents amb una escala comuna (després de normalitzar/ponderar)",
    "c) Converteix tot a costos monetaris",
    "d) Elimina la necessitat de caracterització"
  ],
  correcta: "b"
},
{
  texto: "Quina és una decisió clau a la fase de definició d’objectiu i abast?",
  opciones: [
    "a) Escollir els canals de venda",
    "b) Precisar receptor, qui paga l’estudi i el seu ús previst",
    "c) Determinar el disseny gràfic de l’informe",
    "d) Establir el preu de l’estudi"
  ],
  correcta: "b"
},
{
  texto: "Quin element forma part de la documentació de la fase d’inventari?",
  opciones: [
    "a) Tècniques de recopilació i càlcul de dades emprades",
    "b) Estratègia comercial",
    "c) Pla de comunicació externa",
    "d) Benchmark de preus"
  ],
  correcta: "a"
},
{
  texto: "Quina de les següents opcions és coherent amb l’ús de factors d’equivalència?",
  opciones: [
    "a) Convertir CH₄ i N₂O a kg CO₂-eq per sumar-los en escalfament global",
    "b) Convertir kWh a litres d’aigua",
    "c) Convertir residus sòlids a NOx",
    "d) Convertir emissions d’aigua a dB(A)"
  ],
  correcta: "a"
},
{
  texto: "Quina és una conclusió típica quan es fa un ACV d’alternatives de packaging?",
  opciones: [
    "a) Els impactes sempre són idèntics",
    "b) Els impactes es distribueixen per etapes; canvis en fabricació o transport poden invertir el resultat final",
    "c) El material més lleuger sempre té menor impacte",
    "d) El reciclatge no influeix en els resultats"
  ],
  correcta: "b"
},
  {
  texto: "En una anàlisi de cicle de vida, què inclou la fase d’inputs?",
  opciones: [
    "a) Residus sòlids i líquids",
    "b) Consum de matèries primeres, energia i aigua",
    "c) Dades de transport i distribució",
    "d) Ús de materials reciclats únicament"
  ],
  correcta: "b"
},
{
  texto: "Quin any apareixen les primeres directrius metodològiques comunes per a l’ACV?",
  opciones: [
    "a) 1969",
    "b) 1980",
    "c) 1990",
    "d) 1997"
  ],
  correcta: "c"
},
{
  texto: "Quina entitat va unificar la metodologia de l’Anàlisi de Cicle de Vida durant els anys 90?",
  opciones: [
    "a) ONU",
    "b) SETAC (Societat de Toxicologia i Química Ambiental)",
    "c) EPA",
    "d) ISO"
  ],
  correcta: "b"
},
{
  texto: "Quina norma ISO estableix els principis generals i l’estructura de l’ACV?",
  opciones: [
    "a) ISO 9001",
    "b) ISO 14040",
    "c) ISO 14044",
    "d) ISO 26000"
  ],
  correcta: "b"
},
{
  texto: "Quina norma ISO substitueix les ISO 14041, 14042 i 14043?",
  opciones: [
    "a) ISO 14001",
    "b) ISO 14044",
    "c) ISO 14050",
    "d) ISO 14046"
  ],
  correcta: "b"
},
{
  texto: "En un ACV, què inclou la fase d’outputs?",
  opciones: [
    "a) Energia i matèries primeres utilitzades",
    "b) Residus generats i emissions a l’aire, aigua i sòl",
    "c) Beneficis econòmics del producte",
    "d) Ús d’energia renovable"
  ],
  correcta: "b"
},
{
  texto: "En quin any es van fer els primers estudis multicriteri sobre una ampolla de plàstic de Coca-Cola?",
  opciones: [
    "a) 1969",
    "b) 1973",
    "c) 1980",
    "d) 1990"
  ],
  correcta: "a"
},
{
  texto: "Quin va ser l’objectiu dels primers estudis d’ACV durant la crisi del petroli dels anys 70?",
  opciones: [
    "a) Avaluar l’eficiència de fonts d’energia",
    "b) Millorar la gestió dels residus plàstics",
    "c) Reduir la contaminació de l’aigua",
    "d) Estudiar l’impacte dels fertilitzants químics"
  ],
  correcta: "a"
},
{
  texto: "Què és la unitat funcional dins d’un ACV?",
  opciones: [
    "a) El valor econòmic d’un producte",
    "b) La unitat de referència amb la qual es comparen tots els inputs i outputs del sistema",
    "c) El temps de vida útil d’un producte",
    "d) El conjunt de dades energètiques del procés"
  ],
  correcta: "b"
},
{
  texto: "Quina de les següents fases forma part de la metodologia de l’ACV?",
  opciones: [
    "a) Definició de l’objectiu i abast",
    "b) Comercialització del producte",
    "c) Estudi de mercat i màrqueting",
    "d) Control financer"
  ],
  correcta: "a"
},
{
  texto: "Quina informació inclou l’anàlisi d’inventari d’un ACV?",
  opciones: [
    "a) Només els costos econòmics",
    "b) Els requeriments energètics, matèries primeres, emissions i residus del cicle de vida",
    "c) El rendiment econòmic d’un producte",
    "d) Els resultats de les auditories ambientals"
  ],
  correcta: "b"
},
{
  texto: "En la fase d’agrupació d’un ACV, quina de les següents afirmacions és correcta?",
  opciones: [
    "a) Es classifiquen els impactes segons el seu àmbit geogràfic (local, regional, global)",
    "b) Es calcula la mitjana dels impactes econòmics",
    "c) Es fusionen totes les categories d’impacte en una sola",
    "d) Es prioritzen les emissions positives"
  ],
  correcta: "a"
},
{
  texto: "Per què la fase de ponderació d’un ACV no és un procés científic?",
  opciones: [
    "a) Perquè es basa en valors i judicis subjectius dels interessats",
    "b) Perquè no utilitza dades ambientals reals",
    "c) Perquè elimina els resultats anteriors de l’ACV",
    "d) Perquè no considera la fase d’inventari"
  ],
  correcta: "a"
}
];
// --- FRASES DE ÁNIMO ---
const frases_animo = [
  "¡Muy bien! 😎",
  "¡Eso es, perfecto, te camelo caramelo! 🔥",
  "¡Ole tú huevos! 💪",
  "¡Exacto, estás on fire! 🚀",
  "¡Qué máquina eres! 😍",
  "¡Correcto, así se hace! 👏",
  "¡Te lo sabes de memoria ya! 💥"
];

// --- VARIABLES ---
let i = 0;
let puntuacion = 0;
let preguntasParaEsteTest = [];

// --- FUNCIONES ---

/**
 * Baraja un array aleatoriamente (algoritmo Fisher-Yates).
 * @param {Array} array El array a barajar.
 */
function barajarPreguntas(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

/**
 * Muestra un mensaje en el chat.
 * @param {string} texto El contenido del mensaje.
 * @param {string} tipo 'bot' o 'user'.
 */
function mostrarMensaje(texto, tipo) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.classList.add("message", tipo);
  // Convierte los saltos de línea (\n) en etiquetas <br>
  msg.innerHTML = texto.replace(/\n/g, "<br>");
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

/**
 * Muestra la pregunta actual y sus opciones en un solo mensaje.
 */
function mostrarPregunta() {
  // Usa el array de 20 preguntas
  if (!preguntasParaEsteTest[i]) return;

  const p = preguntasParaEsteTest[i];
  // Une la pregunta y las opciones en un solo texto
  const textoCompleto = `${p.texto}\n\n${p.opciones.join("\n")}`;
  mostrarMensaje(textoCompleto, "bot");
}

/**
 * Procesa la respuesta del usuario.
 * @param {string} opcionElegida "a", "b", "c" o "d".
 */
function responder(opcionElegida) {
  // Usa el array de 20 preguntas
  if (!preguntasParaEsteTest[i]) return;

  const p = preguntasParaEsteTest[i];
  // Muestra solo la letra, como pediste
  mostrarMensaje(`${opcionElegida.toUpperCase()}`, "user");

  if (opcionElegida === p.correcta) {
    puntuacion++;
    mostrarMensaje(frases_animo[Math.floor(Math.random() * frases_animo.length)], "bot");
  } else {
    mostrarMensaje(`❌ Incorrecto. La respuesta correcta era ${p.correcta.toUpperCase()}.`, "bot");
  }

  i++;
  // Comprueba si quedan preguntas en el array de 20
  if (i < preguntasParaEsteTest.length) {
    setTimeout(mostrarPregunta, 800);
  } else {
    setTimeout(() => {
      // Muestra la puntuación final sobre 20 (o el total que haya)
      mostrarMensaje(`🏁 Has acertado ${puntuacion} de ${preguntasParaEsteTest.length} preguntas. 💡`, "bot");
      desactivarBotones();
    }, 800);
  }
}

/**
 * Desactiva los botones de opción al final del test.
 */
function desactivarBotones() {
  document.querySelectorAll(".btn-opcion").forEach(btn => btn.disabled = true);
}

// --- ARRANQUE ---
document.addEventListener("DOMContentLoaded", () => {
  i = 0;
  puntuacion = 0;
  
  // 1. Barajamos TODO el array de preguntas
  barajarPreguntas(preguntas); 
  
  // 2. Nos quedamos solo con las 20 primeras (o menos, si el array es más corto)
  preguntasParaEsteTest = preguntas.slice(0, 20); 

  mostrarMensaje(`🧠 Bienvenido al test. Se han elegido ${preguntasParaEsteTest.length} preguntas al azar. 💬`, "bot");
  setTimeout(mostrarPregunta, 500);

  document.getElementById("btnA").onclick = () => responder("a");
  document.getElementById("btnB").onclick = () => responder("b");
  document.getElementById("btnC").onclick = () => responder("c");
  document.getElementById("btnD").onclick = () => responder("d");
});



