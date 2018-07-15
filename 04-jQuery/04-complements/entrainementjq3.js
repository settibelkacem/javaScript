$(function(){
//----------------
// Naviger dans le DOM :

// Les méthodes next() et children() :
// eu clic sur un <h3> "effacer galerie...", la galerie qui suit s'efface :

$('#galeries h3').click(function(){
    //$(this).next().fadeOut(1000);  // La méthode next() permet de sélectionner la balise directement suivante , ici le <div.galerie> qui suit le h3 sur lequel on a cliqué. Ainsi, quelque soit le <h3> cliqué, seul la balise qui le suit s'effecte. next() peut prendre un sélecteur en argument pour ne pas séléctionner que les balises suivantes répendant à celui-ci.


    // cependant, on voudrait effacer les img contenu dans le div.galerie :
    $(this).next().children('img').fadeOut(1000);  // la méthode children() permet de sélectionner TOUS les éléments enfants direct d'une balise, ici dans notre cas tous les balises img qui se trouvent dans <div.galerie> qui suit directement le <h3> que l'on cliqué. Sans argument , children() sélectionne les enfants directs sans distinction.
});

// La méthode parent() :
// au clic sur une image, la bordure du parent devient rouge :
$('#galeries img').click(function(){
    $(this).parent('.galerie').css({border : '2px solid red'});  // la méthode parent()permet de sélectionner l'élément parent direct, ici le <div.galerie> dont on met la bordure en rouge. Sans argument parent() sélectionne le parent direct sans distinction.
});

// La méthode prev() (pour previous), le contraire de next() :
// 
$('#galeries p').click(function(){
    $(this).prev().css({ border : ''});  // prev() permet de sélectionner l'élément directement précédent, ici le <div.galerie> précédent dont on réintialise la bordure. prev() peut prendre un sélecteur en argument pour ne sélectionner que les balise précédentes répendant à celui-ci
});

// La méthode find() :
// au clic sur le bouton "effacer toutes les galeries", les <img> décendantesde #galeriessont effacées :
$('button').eq(0).click(function(){
    $('#galeries').find('img').fadeOut(1000);  // find() permet de sélectionner tous les décendants direct ou indirect correspondant au sélecteur précisé, ici "trouve" toutes les balises img qui se situent dans la balise #galeries.
});


//--------------------------------------------------------
// Exercice "accordéon" :

// vous rendez fonctionnel l'accordéon du HTML : au clic sur "section1" 
 //ou "section2" ou "section3" le <div> qu'on quitte se ferme, alors que le <div> de la nouvelle s'ouvre. Utilisez la classe "on" pour ouvrir un élément, et la classe "off" pour fermer l'élément.

 $('#accordion h3').click(function (){
     $('.on').removeClass('on').addClass('off');
     $(this).next().removeClass('off').addClass('on');

 });

 //correction--------------------
 $('#accordion h3').click(function(){
     $('.on').addClass('off').removeClass('on');
     $(this).next().addClass('on').removeClass('off');
 });










});// fin du document ready
