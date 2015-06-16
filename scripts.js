// Cachear el contenedor de los links
var linksParent = $('.tabs__links');
// Cachear cada uno de los links
var links = linksParent.find('a');
// Cachear cada uno de los items
var items = $('.tabs__contents__item');
// Añadir la clase "active" al primer link y al primer contenido
links.eq(0).add(items.eq(0)).addClass('active');
// Evento clic en el contendor de los links, delegado a los links
linksParent.on('click','a',function(){
	// Cachear el link en el que se hace clic
	var t = $(this);
	// Cachear la posición del link en el que se ha hecho clic
	var i = t.index();
	// Al link y a su respectivo contenido se le añade la clase
	// active y a sus hermanos se les quita dicha clase
	t.add(items.eq(i))
		.addClass('active')
		.siblings().removeClass('active');
});