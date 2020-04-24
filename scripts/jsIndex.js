var telefone="";
var nome="";
var quantP="";
var emailss="";
var nada="";
var especifc="";
var especifcTXT="";
var dataReserva="";
var erro=0;
var erroNome=""
var confir="";

var respAlert = document.getElementById('respAlert');
var divEspecif = document.getElementById('divEspecif');

limpar();
esconder();
lerValue();


function esconder(){
	respAlert.style.display= "none";
	divEspecif.style.display="none";

}

function limpar(){
	document.getElementById("especif").innerHTML = nada;
}


function lerValue(){
	quantP = document.getElementById("formControlRange").value;
	quantP = (quantP +" pessoas");
	document.getElementById("valo").innerHTML = quantP;
}

function verifEspecif(){

especifc = document.getElementById("exampleRadios2").checked;

if(especifc===true){
	divEspecif.style.display= "inline";
} else if(especifc===false){
	divEspecif.style.display= "none";
}

}



function leritura(){

	respAlert.style.display= "none";

	telefone = document.getElementById("tele").value;
	nome = document.getElementById("nome").value;
	emailss = document.getElementById("email").value;
	quantP = document.getElementById("formControlRange").value;
	dataReserva = document.getElementById("dia").value;
	if(especifc===true){
		especifcTXT = document.getElementById("especif").value;
	}
	
	verif();
}


function verif(){
	erroNome= "Falta preencher: ";

	if(telefone===""){
	erro=1;
	erroNome=(erroNome+"Telefone")
	} else if(nome===""){
	erro=1;
	erroNome=(erroNome+"Nome")
	} else if(emailss===""){
	erro=1;
	erroNome=(erroNome+"Email")
	}else if(dataReserva===""){
	erro=1;
	erroNome=(erroNome+"Data da reserva")
	}else if(especifcTXT===""){
		if(especifc===true){
			erro=1;
			erroNome=(erroNome+"Especificação")
		}
	}else{
		
	}

	if(erro===0){
		modf();
	} else if(erro===1){
		alert(erroNome);
		erro=0;
	}
	
}

function modf(){

	telefone = ("Telefone: "+telefone);
	nome = ("Nome: "+nome);
	quantP = ("Quantidade de pessoas: "+quantP)
	emailss = ("Email: "+emailss);
	dataReserva = ("Dia: "+dataReserva);
	especifcTXT = ("Especificação: "+ especifcTXT)

	most();
}


 function most(){
 	respAlert.style.display= "inline";
	document.getElementById("respTele").innerHTML = telefone;
	document.getElementById("respNome").innerHTML = nome;
	document.getElementById("respEmail").innerHTML = emailss;
	document.getElementById("respQuantP").innerHTML = quantP;
	document.getElementById("respData").innerHTML = dataReserva;
	document.getElementById("respEspecifTXT").innerHTML = especifcTXT;
	especifcTXT=nada;
 }

function confirm(){
	confir = document.getElementById("conf").checked;
	if(confir===true){
		alert("Reserva realizada com sucesso");
		window.location.reload();
	} else if(confir===false){
		alert("Confirme os dados da reserva");
	}
}