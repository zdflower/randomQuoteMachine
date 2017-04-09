$(document).ready(function(){
	$("#getQuote").on("click", function(){

			var arrObjEo = [
				{
					es: "El que pronto se levanta, pronto se enriquece",
					eo: "Kiu frue leviĝas, facile riĉiĝas",
					src: "https://es.wikibooks.org/wiki/Esperanto/Lecturas/Otros_proverbios"
				},
				{
					es: "Más vale tarde que nunca.",
					eo: "Pli bone malfrue ol neniam",
					src: "https://es.wikibooks.org/wiki/Esperanto/Lecturas/Otros_proverbios"
				},
				
				{
					es: "Entre el dicho y el hecho hay un mar",
					eo: "Inter diro kaj faro estas maro",
					src: "https://es.wikibooks.org/wiki/Esperanto/Lecturas/Otros_proverbios"
				},

				{
					es: "Donde se levanta el humo, ahí está el fuego",
					eo: "Kie fumo leviĝas, tie fajro troviĝas",
					src: "https://es.wikibooks.org/wiki/Esperanto/Lecturas/Otros_proverbios"
				},

				{
					es: "Hablar mucho y decir mucho no es lo mismo. Sófocles",
					eo: "Multe paroli kaj multe diri ne estas la samo. Sofoklo",
					src: "https://es.wikibooks.org/wiki/Esperanto/Lecturas/Otros_proverbios"
				}

			];
			var colores = ["plum", "green", "gray", "pink", "purple", "aquamarine", "DarkOliveGreen", "MediumPurple", "Orchid"];
			var hasta = Object.keys(arrObjEo).length;
			var index = Math.floor(Math.random() * hasta);
			var html = "<blockquote> <p>"+ arrObjEo[index]["eo"] + "</p> <p>" + arrObjEo[index]["es"] + " </p> <footer> " + arrObjEo[index]["src"] +"</footer>" + "</blockquote>";
			$(".frase").html(html); 
			$("body").css("background-color", colores[Math.floor(Math.random() * colores.length)]); //para cambiar de color de fondo al azar
		});
	});