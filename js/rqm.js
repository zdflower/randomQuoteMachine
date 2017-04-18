$(document).ready(function(){
	$("#getQuote").on("click", function(){
		$.getJSON("data/frasesEoEs.json", function(data){
		  	var q = Math.floor(Math.random() * data.length);
		  	var quote = data[q];
		  	var html = "<blockquote> <p>"+ quote["es"] + "</p> <p>" + quote["es"] + "</p> <footer> " + quote["src"] +"</footer>" + "</blockquote>";
		  	$(".frase").html(html);
		});
		var colores = ["plum", "green", "gray", "pink", "purple", "aquamarine", "DarkOliveGreen", "MediumPurple", "Orchid"];
		$("body").css("background-color", colores[Math.floor(Math.random() * colores.length)]); //para cambiar de color de fondo al azar
		$("#twit").attr("href", "https://twitter.com/intent/tweet?text=" + arrObjEo[index]["eo"] + " de " + arrObjEo[index]["src"]);
	});
});