//Variáveis
var telefone="";
var nome="";
var quantP="";
var emailss="";
var nada="";
var especifc="";
var especifcTXT="";
var dataReserva="";
var horaReserva="";
var erro=0;
var erroNome=""
var confir="";

var respAlert = document.getElementById('respAlert');
var divEspecif = document.getElementById('divEspecif');

//Funções ativadas no carregamento da pagina
limpar();//faz os valores serem ""
esconder();
lerValue();


function esconder(){
	respAlert.style.display= "none";
	divEspecif.style.display="none";
}

function limpar(){
	document.getElementById("especif").innerHTML = nada;
}

//Função ativada no carregamento da página e ao clicar no Range input 
function lerValue(){
	quantP = document.getElementById("formControlRange").value;
	quantP = (quantP +" pessoas");
	document.getElementById("valo").innerHTML = quantP;
}


//Funções esperando serem acionadas

//Verifica se o radio input (Sim) esta checado
function verifEspecif(){

especifc = document.getElementById("exampleRadios2").checked;

if(especifc===true){
	divEspecif.style.display= "inline";
} else if(especifc===false){
	divEspecif.style.display= "none";
}

}


//Le o conteúdo de cada input e armazena o conteúdo em variáveis
function leritura(){

	respAlert.style.display= "none";

	telefone = document.getElementById("tele").value;
	nome = document.getElementById("nome").value;
	emailss = document.getElementById("email").value;
	quantP = document.getElementById("formControlRange").value;
	dataReserva = document.getElementById("dia").value;
	horaReserva =document.getElementById("hora").value;
	if(especifc===true){
		especifcTXT = document.getElementById("especif").value;
	}
	
	verif(); //Executa a função verif
}
// -- função verif
//Verifica o conteúdo de cada input
//Se um deles estiver vazio erro será igual 1, se não erro será igual a 0 
//Se erro = 0 executa a função modf
//Se erro = 1 retorna uma mensagem ao usuário falando o que falta ser preenchido e coloca erro=0 possibilitando uma nova verificação sem atualizar a pagina

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
	}else if(horaReserva===""){
	erro=1;
	erroNome=(erroNome+"Horario da reserva")
	}else if(especifcTXT===""){
		if(especifc===true){
			erro=1;
			erroNome=(erroNome+"Especificação")
		}
	}else{
		
	}

	if(erro===0){
		most(); //executa a função most
	} else if(erro===1){
		alert(erroNome); //retorna uma mensagem ao usuário falando o que falta ser preenchido
		erro=0; //coloca erro=0 possibilitando uma nova verificação sem atualizar a pagina
	}
	
}

// -- função most --
//Mostra o conteúdo das variáveis na tela
 function most(){
 	respAlert.style.display= "block";
	document.getElementById("respTele").innerHTML = telefone;
	document.getElementById("respNome").innerHTML = nome;
	document.getElementById("respEmail").innerHTML = emailss;
	document.getElementById("respQuantP").innerHTML = quantP;
	document.getElementById("respData").innerHTML = dataReserva;
	document.getElementById("respHora").innerHTML = horaReserva;
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