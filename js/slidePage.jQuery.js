;(function($,window,undefined){

	$.fn.slidePage = function(back,next){
		return this.each(function(){

			var contenido = $(this).children().eq(0);
		
			if (contenido) {
				
				var paginas = contenido.children();
				var cantidad = paginas.length;
				var tamanoVista = paginas.outerWidth(true);
				var tamanoTotal = tamanoVista*cantidad;
				var acumulador = 0;
				var primerElemento = 0;
				var sizeContenido = contenido.outerWidth(true)*cantidad;

				$(contenido).css({"width":sizeContenido});			

				$(next).on("click",function(e){
					e.preventDefault();					
					cambio = acumulador + tamanoVista;// == sumamos los tamanos

						if (tamanoTotal == cambio) {
							cambio = tamanoTotal - tamanoVista;
						};

						$(paginas).animate({ left: "-"+cambio });

						//console.log(cambio);
					acumulador=cambio;
				});

				$(back).on("click",function(e){
						e.preventDefault();

					cambio = acumulador - tamanoVista;

					if (cambio < 0) {
						cambio = primerElemento;
					};

					$(paginas).animate({ left: "-"+cambio });

						//console.log(cambio);
					acumulador = cambio;
				});			
			};
		});
	}
})(jQuery,window)
