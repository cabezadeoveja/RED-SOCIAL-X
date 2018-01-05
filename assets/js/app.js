$(document).ready(function() {
  /*Función de la vista splash inicial */
  $().ready(function() {
    $('.mainfull').hide();
    $(".splash").fadeIn(3000).fadeOut(2000, show);

    function show() {
      $('.mainfull').show();
    }
  });
});

$(document).ready(function(){ 
	num=0; // al iniciar el contador parte desde 0.
    $("#contador").html('<h3></h3>');
    $("#btn-star").click(function(){ //cada vez que hagamos click, se sumará +1.
    	num++;
      	$("#contador").html('<h3> '+num+' </h3>');
   });

    num=0; // al iniciar el contador parte desde 0.
    $("#contador1").html('<h3></h3>');
    $("#btn-star1").click(function(){ //cada vez que hagamos click, se sumará +1.
    	num++;
      	$("#contador1").html('<h3> '+num+' </h3>');
   });

    num=0; // al iniciar el contador parte desde 0.
    $("#contador2").html('<h3></h3>');
    $("#btn-star2").click(function(){ //cada vez que hagamos click, se sumará +1.
    	num++;
      	$("#contador2").html('<h3> '+num+' </h3>');
   });

    num=0; // al iniciar el contador parte desde 0.
    $("#contador3").html('<h3></h3>');
    $("#btn-star3").click(function(){ //cada vez que hagamos click, se sumará +1.
    	num++;
      	$("#contador3").html('<h3> '+num+' </h3>');
   });
});    

/*Calendario del modal*/
/*$(function () {
  $('#datetimepicker2').datetimepicker({
      locale: ''
  });
});*/


/*
$('#comment-cont').keypress(function(tecla){
		if(tecla.charCode == 13 || tecla.keyCode == 13) return false;		

    var comentario = $('#comment-cont').val();
    $('#comment-cont').val("");
    var contenedor = $('#cont');
    contenedor.append('<div><h5>Cabeza de Oveja</h5><p>' + comentario + '</p></div>');
 });
 */
 	$('#btn-msj').click(function(){
    	var comentario = $('#comment-cont').val();
    	$('#comment-cont').val("");
    	var contenedor = $('#cont');
    	contenedor.append('<div><h5 class="nickname">Pabla Bazán</h5><p>' + comentario + '</p></div>');
  	})

	$('#btn-msj1').click(function(){
    	var comentario = $('#comment-cont1').val();
    	$('#comment-cont1').val("");
    	var contenedor = $('#cont1');
    	contenedor.append('<div><h5 class="nickname">Pabla Bazán</h5><p>' + comentario + '</p></div>');
  	})

	$('#btn-msj2').click(function(){
    	var comentario = $('#comment-cont2').val();
    	$('#comment-cont2').val("");
    	var contenedor = $('#cont2');
    	contenedor.append('<div><h5 class="nickname">Pabla Bazán</h5><p>' + comentario + '</p></div>');
  	})

	$('#btn-msj3').click(function(){
    	var comentario = $('#comment-cont3').val();
    	$('#comment-cont3').val("");
    	var contenedor = $('#cont3');
    	contenedor.append('<div><h5 class="nickname">Pabla Bazán</h5><p>' + comentario + '</p></div>');
  	})

//https://stackoverflow.com/questions/9146651/trigger-an-event-on-click-and-enter
//información obtenida para que al hacer enter se vincule con la funcion click "btn.msj"
	$('#comment-cont').keypress(function(e){
		if(e.which == 13){//Enter key pressed
            $('#btn-msj').click();//Trigger search button click event
        }         
	}); 

	$('#comment-cont1').keypress(function(e){
		if(e.which == 13){//Enter key pressed
            $('#btn-msj1').click();//Trigger search button click event
        }         
	});  

	$('#comment-cont2').keypress(function(e){
		if(e.which == 13){//Enter key pressed
            $('#btn-msj2').click();//Trigger search button click event
        }         
	}); 

	$('#comment-cont3').keypress(function(e){
		if(e.which == 13){//Enter key pressed
            $('#btn-msj3').click();//Trigger search button click event
        }         
	}); 

//Funcion para que al hacer click en cargar imagen, aparesca la imagen en Div vacio
	$("#charge").click(function() {
	    var image = new Image();
	    var src = 'https://t2.kn3.net/taringa/3/3/8/7/4/6/0omankopongo0/315.jpg';
	    //variable que contiene la url de una imagen.
	    image.src = src;
	    $('#new-image').append(image);    
	});

//Funcion para que al hacer click en cargar se carge "perfil-hide" seccion oculta
	$("#charge").click(function() {
		$("#perfile-hide").show();
	});

	$("#follower").click(function() {
		$("#general").hide();
		$("#general-profile-friend").show();
	});

//Funcion para que se vaya al perfil del usuario especifico. Parece que no funciona
//por estar los datos en dos html diferentes. Opcion B. hacerlo cada perfil en un html
	/*$("#userAngelica").click(function() {
		$("#general").hide();
		$("#general-profile-friend").show();
	});
	*/
