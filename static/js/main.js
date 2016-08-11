function responsive() {
      this.altura_map = $("#map-canvas").innerHeight()
      this.altura_cuadro = $("#cuadro").innerHeight()
      this.ancho = window.innerWidth
      var ct = document.querySelectorAll('[data-attr]')
       for( var i=0; i<ct.length; i++){
            ct[i].classList.add("v-center"); 
       }
      if (ancho > 767) {
          ct[0].style.height = altura_map + "px"  
          ct[1].style.height = altura_cuadro + "px"           
          }
        else{
          ct[0].style.height = "" 
          ct[1].style.height = "" 
        }
      } 

  $(window).load(function() {
      responsive();
      obtener_modal()
      poner_modal()
  });    
$(window).resize(function() {
  responsive();
  });

	function poner_modal() {
	    var img_foto = document.getElementsByClassName("img-foto")
	    for (var i = 0; i < img_foto.length; i++) {
	        var modal_foto = document.createElement("div");
	        modal_foto.innerHTML = '<a href= "" type="button" data-toggle="modal" data-target=#' + [i] + '><i class="fa fa-play fa-4x" aria-hidden="true"></i></a>'
	        img_foto[i].appendChild(modal_foto)
	    }
      var img_carousel = document.getElementsByClassName("img-carousel")
      for (var c = 0; c < img_carousel.length; c++) {
          var modal_carousel = document.createElement("div");
          modal_carousel.className="translate_button"
          modal_carousel.innerHTML = '<a href= "" type="button" data-toggle="modal" data-target=#' + [c] + '><i class="fa fa-play fa-4x" aria-hidden="true"></i></a>'
          img_carousel[c].appendChild(modal_carousel)
      }
	}

	function obtener_modal() {
	    var modal_full_screen = document.querySelectorAll("#modal-fullscreen")
	    for (var j = 0; j < modal_full_screen.length; j++) {
	        modal_full_screen[j].setAttribute('id', j);
	        var modal_dialog = document.createElement("div")
	        modal_dialog.className = "modal-dialog"
	        modal_dialog.innerHTML = '<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button></div></div>'
	        modal_full_screen[j].appendChild(modal_dialog)
	    }

	    var obtener_md = document.getElementsByClassName("modal-content")
	    for (var k = 0; k < obtener_md.length; k++) {
	        switch (obtener_md[k]) {
	            case obtener_md[0]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<h4 class="modal-title" id="myModalLabel">“Me desfiguró el rostro y me aventó del segundo piso pero sigue libre” </h4><div class="row mb-50"><div class="col-lg-7 col-md-12"><iframe width="100%" height="315" src="https://www.youtube.com/embed/KLIAWcIr75g?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe><div class="v-center"><h4><p>Agresor:</p>Johnny Roko Jalsovec </h4><div class="text-center"><img class=" img-agresor" src="images/foto_roko.jpg" class="img-responsive"></div></div></div><div class="col-lg-5 col-md-12 col-sm-12 text-modal"><h3 class="name">Kristel Begazo</h3><p class="testimonio">Kristel Begazo Joyo es una de las 921 mujeres que entre 2009 y 2016 estuvieron a punto de morir a manos de sus esposos o parejas. Al delito se le denomina tentativa de feminicidio.</br>Madre de dos niñas, que tristemente tuvieron que presenciar como su padre, Johnny Jalsovec Pimentel, la ahorcó,  golpeó y acuchilló en distintas partes del cuerpo y en el rostro. Pocas horas antes, Johnny le había jurado amor eterno a Kristel en una velada romántica.</br>“Mi ex esposo planificó mi muerte y casi lo consigue.  Me dejó desfigurada con lesiones contundentes. Mis hijas le rogaban que deje de golpearme, pero él continuaba”, relata Kristel Begazo.</br>Inconsciente, después de haber sido lanzada del segundo piso,  apenas podía respirar. Tenía los huesos fracturados, el rostro convertido en masa informe.</br>“Se llevó a mis hijas en el momento en el que yo me estaba ahogando con la sangre”, recuerda Kristel Begazo, limeña de 31 años, psicóloga de profesión.</br>La tortura física no se comparaba con el dolor del alma. Los ojos se le llenaban de lágrimas pero no podía llorar por la gravedad de sus heridas. Sus lágrimas y tristeza contenida se hicieron palabras escritas en tres rollos de papel higiénico que fueron el inicio de un libro que ha titulado <em>Cuando no me amo.</em>Johnny Jalsovec Pimentel fue denunciado ante la fiscalía de Salamanca, pero la demora en la expedición de la orden de captura le dio el tiempo suficiente para evadirse y ahora está en condición de prófugo. Como si no fuera suficiente, es Kristel Begazo quien debe renovar cada seis meses el mandato de detención de su ex esposo porque si ella no lo hace, las autoridades no moverán un dedo.</p></div></div>'
	                obtener_md[0].appendChild(modal_body)
	                break;
	            case obtener_md[1]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<h4 class="modal-title" id="myModalLabel">"Violó a mi hija de 15 años pero está en libertad"</h4><div class="row mb-50"><div class="col-lg-7 col-md-12"><iframe width="100%" height="315" src="https://www.youtube.com/embed/HRYyfY7RaUY" frameborder="0" allowfullscreen></iframe><div class="v-center"><h4><p>Agresor:</p>Fajry Dulanto Santivañez</h4><div class="text-center"><img class=" img-agresor" src="images/fajry.jpg" class="img-responsive"></div></div></div><div class="col-lg-5 col-md-12 col-sm-12 text-modal"><h3 class="name">Menor de edad</h3><p class="testimonio">"Mi hija solo tenía 15 años cuando la violaron”, afirma la madre de la menor con la voz quebrada. No puede decir más porque el agresor ha amenazado de muerte tanto a la víctima como a su familia.</br>La madre recuerda el momento en que su hija llegó a casa con la ropa rasgada, golpeada y con heridas en el alma.  La jovencita, a pesar de mostrarse fuerte, aún no ha podido superar el momento en que violentaron su cuerpo y dignidad.</br>Fajry Dulanto Santivañez, de 35 años, contactó a la adolescente por Facebook haciéndose pasar por un jovencito de 18 años.  A insistencia de una amiga, la  quinceañera lo aceptó. Pocas semanas después fue secuestrada por el sujeto.</br>“Días antes él (Fajry) se había presentado pero ella no lo había reconocido, no era el chico del Facebook.  A los días, se volvieron a encontrar en la calle y fue ahí donde la raptó”, recuerda su madre.</br>Despertó en una habitación de un lugar que desconocía. Trató de lanzarse por la ventana pero fue en vano. Fajry Dulanto la golpeó hasta romperle la piel más sensible en el cuerpo, abusó sexualmente de ella y no se apiadó de la quinceañera, ni porque esta rezaba en voz alta.</br>“La amenazó diciéndole que la iba a matar, la golpeó tan fuerte que le abrió el pezón. Le decía cállate, no sigas rezando, tu Dios no hace nada y yo te sigo violando”, recuerda la progenitora con la voz partida por evitar el llanto.</br>La jovencita consiguió escapar y lo denunció. Lo detuvieron pero presentó un habeas corpus bajo el argumento de que el mandato judicial vulneraba su derecho a la libertad personal. El personaje recurrió hasta el Tribunal Constitucional para conseguir su libertad. El proceso se sigue llevando en la Fiscalía de La Molina.</p></div></div>'
	                obtener_md[1].appendChild(modal_body)
	                break;
	            case obtener_md[2]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<h4 class="modal-title" id="myModalLabel">"Me tiró del cabello al piso, me golpeé la cien y quede inconsciente"</h4><div class="row mb-50"><div class="col-lg-7 col-md-12"><iframe width="100%" height="315" src="https://www.youtube.com/embed/DYG-hXVWo9k" frameborder="0" allowfullscreen></iframe><div class="v-center"><h4><p>Agresor:</p>José Vargas Vera</h4><div class="text-center"><img class=" img-agresor" src="images/jose.jpg" class="img-responsive"></div></div></div><div class="col-lg-5 col-md-12 col-sm-12 text-modal"><h3 class="name">Victoria Hache</h3><p class="testimonio">Hace poco más de un año, Victoria Hache, de 26 años, decidió ponerle fin al calvario que vivía junto al hombre con el que había decidido empezar una relación hacía solo cinco meses. Un jalón de cabello que la dejó en el suelo y un golpe en la sien la motivaron finalmente a decir: “¡Basta!”.</br>Era abril del 2015 y Victoria Hache acababa de volver a retomar su relación con José Vargas Vera. Confiando, tal vez, en que esta vez sería distinto.</br>“A los dos, tres días, empezamos a discutir de nuevo por un tema de celos. A él no le cuadraba un amigo mío”, dice Victoria.</br>Ella estaba con descaso médico porque había tenido una operación al rostro hacía apenas dos días. A su casa llegó José Vargas, furioso, a increparle por su cuenta en Facebook. Le quitó la computadora y ella, nada más que por reclamar, desató la ira contenida en su pareja.</br> “Agarró con una mano la computadora y con la otro sacó el puño y me dijo: ‘¡Cállate que te voy a reventar la cara!’ Sus ojos estaban desorbitados. Le había entrado el demonio”, recuerda  Victoria.</br>En un segundo, José Vargas tomó de los cabellos de su pareja, ahora convertida en víctima. Con tal fuerza la tiró al piso que un golpe en la sien la dejó inconsciente. A los minutos, un hematoma del tamaño de un puño se había formado en su cabeza deslizándose hasta el ojo. Vargas quería terminar con ella. Durante un mes, Victoria no pudo salir de casa.</br> “Fui a denunciar al Poder Judicial pero sentí que mi caso no era nada. Por el trato que recibí decidí no seguir con la denuncia”, cuenta Victoria.</br>Durante los siguientes meses José Vargas buscó contactarse con Victoria Hache. Ella sospechó lo que pasaría si regresaba a los brazos del violento hombre. Vargas sigue en libertad y sin denuncia que lo frene.</br>El testimonio de Victoria Hache es una advertencia para otras mujeres.</p></div></div>'
	                obtener_md[2].appendChild(modal_body)
	                break;
	            case obtener_md[3]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<h4 class="modal-title" id="myModalLabel">"Me quiso sacar los ojos y me golpeó la cabeza con una plancha"</h4><div class="row mb-50"><div class="col-lg-7 col-md-12"><iframe width="100%" height="315" src="https://www.youtube.com/embed/_nMIf0m0w8g" frameborder="0" allowfullscreen></iframe><div class="v-center"><h4><p>Agresor:</p>José Vargas Vera</h4><div class="text-center"><img class=" img-agresor" src="images/jose.jpg" class="img-responsive"></div></div></div><div class="col-lg-5 col-md-12 col-sm-12 text-modal"><h3 class="name">Yovana Cartagena</h3><p class="testimonio">Hace poco más de un año, Victoria Hache, de 26 años, decidió ponerle fin al calvario que vivía junto al hombre con el que había decidido empezar una relación hacía solo cinco meses. Un jalón de cabello que la dejó en el suelo y un golpe en la sien la motivaron finalmente a decir: “¡Basta!”.</br>Era abril del 2015 y Victoria Hache acababa de volver a retomar su relación con José Vargas Vera. Confiando, tal vez, en que esta vez sería distinto.</br>“A los dos, tres días, empezamos a discutir de nuevo por un tema de celos. A él no le cuadraba un amigo mío”, dice Victoria.</br>Ella estaba con descaso médico porque había tenido una operación al rostro hacía apenas dos días. A su casa llegó José Vargas, furioso, a increparle por su cuenta en Facebook. Le quitó la computadora y ella, nada más que por reclamar, desató la ira contenida en su pareja.</br> “Agarró con una mano la computadora y con la otro sacó el puño y me dijo: ‘¡Cállate que te voy a reventar la cara!’ Sus ojos estaban desorbitados. Le había entrado el demonio”, recuerda  Victoria.</br>En un segundo, José Vargas tomó de los cabellos de su pareja, ahora convertida en víctima. Con tal fuerza la tiró al piso que un golpe en la sien la dejó inconsciente. A los minutos, un hematoma del tamaño de un puño se había formado en su cabeza deslizándose hasta el ojo. Vargas quería terminar con ella. Durante un mes, Victoria no pudo salir de casa.</br> “Fui a denunciar al Poder Judicial pero sentí que mi caso no era nada. Por el trato que recibí decidí no seguir con la denuncia”, cuenta Victoria.</br>Durante los siguientes meses José Vargas buscó contactarse con Victoria Hache. Ella sospechó lo que pasaría si regresaba a los brazos del violento hombre. Vargas sigue en libertad y sin denuncia que lo frene.</br>El testimonio de Victoria Hache es una advertencia para otras mujeres.</p></div></div>'
	                obtener_md[3].appendChild(modal_body)
	                break;
	            case obtener_md[4]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<h4 class="modal-title" id="myModalLabel">"Me arrastró por la pista con mi hija en brazos"</h4><div class="row mb-50"><div class="col-lg-7 col-md-12"><iframe width="100%" height="315" src="https://www.youtube.com/embed/qefocoDLjNc" frameborder="0" allowfullscreen></iframe><div class="v-center"><h4><p>Agresor:</p>José Vargas Vera</h4><div class="text-center"><img class=" img-agresor" src="images/jose.jpg" class="img-responsive"></div></div></div><div class="col-lg-5 col-md-12 col-sm-12 text-modal"><h3 class="name">Jemmy Taya</h3><p class="testimonio">Hace poco más de un año, Victoria Hache, de 26 años, decidió ponerle fin al calvario que vivía junto al hombre con el que había decidido empezar una relación hacía solo cinco meses. Un jalón de cabello que la dejó en el suelo y un golpe en la sien la motivaron finalmente a decir: “¡Basta!”.</br>Era abril del 2015 y Victoria Hache acababa de volver a retomar su relación con José Vargas Vera. Confiando, tal vez, en que esta vez sería distinto.</br>“A los dos, tres días, empezamos a discutir de nuevo por un tema de celos. A él no le cuadraba un amigo mío”, dice Victoria.</br>Ella estaba con descaso médico porque había tenido una operación al rostro hacía apenas dos días. A su casa llegó José Vargas, furioso, a increparle por su cuenta en Facebook. Le quitó la computadora y ella, nada más que por reclamar, desató la ira contenida en su pareja.</br> “Agarró con una mano la computadora y con la otro sacó el puño y me dijo: ‘¡Cállate que te voy a reventar la cara!’ Sus ojos estaban desorbitados. Le había entrado el demonio”, recuerda  Victoria.</br>En un segundo, José Vargas tomó de los cabellos de su pareja, ahora convertida en víctima. Con tal fuerza la tiró al piso que un golpe en la sien la dejó inconsciente. A los minutos, un hematoma del tamaño de un puño se había formado en su cabeza deslizándose hasta el ojo. Vargas quería terminar con ella. Durante un mes, Victoria no pudo salir de casa.</br> “Fui a denunciar al Poder Judicial pero sentí que mi caso no era nada. Por el trato que recibí decidí no seguir con la denuncia”, cuenta Victoria.</br>Durante los siguientes meses José Vargas buscó contactarse con Victoria Hache. Ella sospechó lo que pasaría si regresaba a los brazos del violento hombre. Vargas sigue en libertad y sin denuncia que lo frene.</br>El testimonio de Victoria Hache es una advertencia para otras mujeres.</p></div></div>'
	                obtener_md[4].appendChild(modal_body)
	                break;
	            case obtener_md[5]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<h4 class="modal-title" id="myModalLabel">"Me golpeó y me obligó a tener relaciones sexuales estando embarazada"</h4><div class="row mb-50"><div class="col-lg-7 col-md-12"><iframe width="100%" height="315" src="https://www.youtube.com/embed/O8kd3tef1vk" frameborder="0" allowfullscreen></iframe><div class="v-center"><h4><p>Agresor:</p>José Vargas Vera</h4><div class="text-center"><img class=" img-agresor" src="images/jose.jpg" class="img-responsive"></div></div></div><div class="col-lg-5 col-md-12 col-sm-12 text-modal"><h3 class="name">Adriana Lopez</h3><p class="testimonio">Hace poco más de un año, Victoria Hache, de 26 años, decidió ponerle fin al calvario que vivía junto al hombre con el que había decidido empezar una relación hacía solo cinco meses. Un jalón de cabello que la dejó en el suelo y un golpe en la sien la motivaron finalmente a decir: “¡Basta!”.</br>Era abril del 2015 y Victoria Hache acababa de volver a retomar su relación con José Vargas Vera. Confiando, tal vez, en que esta vez sería distinto.</br>“A los dos, tres días, empezamos a discutir de nuevo por un tema de celos. A él no le cuadraba un amigo mío”, dice Victoria.</br>Ella estaba con descaso médico porque había tenido una operación al rostro hacía apenas dos días. A su casa llegó José Vargas, furioso, a increparle por su cuenta en Facebook. Le quitó la computadora y ella, nada más que por reclamar, desató la ira contenida en su pareja.</br> “Agarró con una mano la computadora y con la otro sacó el puño y me dijo: ‘¡Cállate que te voy a reventar la cara!’ Sus ojos estaban desorbitados. Le había entrado el demonio”, recuerda  Victoria.</br>En un segundo, José Vargas tomó de los cabellos de su pareja, ahora convertida en víctima. Con tal fuerza la tiró al piso que un golpe en la sien la dejó inconsciente. A los minutos, un hematoma del tamaño de un puño se había formado en su cabeza deslizándose hasta el ojo. Vargas quería terminar con ella. Durante un mes, Victoria no pudo salir de casa.</br> “Fui a denunciar al Poder Judicial pero sentí que mi caso no era nada. Por el trato que recibí decidí no seguir con la denuncia”, cuenta Victoria.</br>Durante los siguientes meses José Vargas buscó contactarse con Victoria Hache. Ella sospechó lo que pasaría si regresaba a los brazos del violento hombre. Vargas sigue en libertad y sin denuncia que lo frene.</br>El testimonio de Victoria Hache es una advertencia para otras mujeres.</p></div></div>'
	                obtener_md[5].appendChild(modal_body)
	                break;
	        }
	        obtener_md[k].insertBefore(modal_body, obtener_md[k].childNodes[1]);
	    }
	}

$(".modal-fullscreen").on('show.bs.modal', function () {  setTimeout( function() {    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");  }, 0);});
$(".modal-fullscreen").on('hidden.bs.modal', function () {  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");});