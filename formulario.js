$( document ).ready( function(){

	// evento de perda de foco no input nome
	$( "#nome" ).blur( function(){

		// verifica se o input está vazio
		if ( $( this ).val() === "") {
			$( "#mensagem" ).html( "Informe seu nome." );
		}
	} );

	// ação de clique do botão calcular
	$( "#btn-calcular" ).click( function(){

		// verifica se altura está vazia
		if ( $("#altura" ).val() === "") {
			$( "#mensagem" ).html( "Altura é obrigatória." );
			return;
		}

		// verifica se peso está vazio
		if ( $( "#peso" ).val() === "") {
			$( "#mensagem" ).html( "Peso é obrigatório." );
			return;
		}

		// recupera altura e peso e converte em variáveis do tipo float
		var altura = parseFloat ( $( "#altura" ).val().replace(",", ".") );
		var peso = parseFloat ( $( "#peso" ).val().replace(",", ".") );

		// realiza o cálculo do IMC
		var imc = peso / ( altura * altura );

		// exibe a mensagem na tela
		$( "#mensagem" ).html( $( "#nome" ).val() + " Seu IMC é " + imc.toFixed(2) );
	} );
} ); 