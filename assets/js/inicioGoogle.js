/*Inicio de sesion con google*/
/*CódigoLogin*/
var provider = new firebase.auth.GoogleAuthProvider(); // es la instancia del proveedor del servicio(Google, en este caso)

$('#login').click(function(){
	firebase.auth()
	.signInWithPopup(provider)
	.then(function(result) {
			console.log(result.user); //nombre foto, etc
			guardaDatos(result.user);
			$('#btn-google').hide();
			//$('#root').append("<img src='"+result.user.photoURL+"' />");//agrega html  div root aun no existe 
		});
});
/*funcion que guarda los datos automaticamente*/
function guardaDatos(user){//user entrega el login
	var usuario = { //objeto
		uid:user.uid, //identificador unico de usuario generado por firebase
		nombre:user.displayName, //así responde el servidor ver en la consola y verificar
		email:user.email,
		foto:user.photoURL
		/*se crea el objeto usuario basado en el que llegó(user),
		sólo necesitamos las keys: uid, nombre, email y foto*/
	}
	firebase.database().ref("UserG/"+ user.uid) /*se agrega el user.uid para sobre escribir el mismo usuario siempre y 
	cuando los datos que lleguen sean diferentes, si llegan igual no sobreescribelo que implica que no usa memoria inúltilmente. */ 
	/*.push(usuario) ya no se usa*/
	.set(usuario)
}

/*Codigo para escribir Base de Datos*/
var usuario{
	nombre="Alex Muñoz",
	email= "Alex@gmail.com",
	pass = "123"
}
$('#guardar').click(function(){
	firebase.database().ref("Usuarios")//telmex es una ramita de no relacional del arbol
	.set({//setear
		nombre="Alex Muñoz",//key o llave, es nombre y Bliss es el value o valor
		email= "Alex@gmail.com",
		pass = "123"
	})
});


/*set: graba en toda la rama
push: graba en la rama sin sobreescribir lo anterior y permite
crear listas Ej: de usuarios*/







