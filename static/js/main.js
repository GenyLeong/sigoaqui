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
	                modal_body.innerHTML = '<h4 class="modal-title" id="myModalLabel">Kristel Begazo: Madre de dos hijas que fue violentada por su ex esposo.Sufrió cortes en el rostro y cuerpo. </h4><div class="row mb-50"><div class="col-lg-7 col-md-12"><iframe width="100%" height="500" src="https://www.youtube.com/embed/KLIAWcIr75g" frameborder="0" allowfullscreen></iframe><div class="v-center"><h2>Johnny Roko Jalsovec </h2><div class="text-center"><img class=" img-agresor" src="images/foto_roko.jpg" class="img-responsive"></div></div></div><div class="col-lg-5 col-md-8 col-sm-12 text-modal"><h3 class="name">Kristel Begazo</h3><p class="testimonio">Kristel Begazo es una de las  más de 921 mujeres que desde el 2009 han estado a punto de morir a causa golpes. Madre de dos niñas que tristemente tuvieron que presenciar como su padre, Johnny Jalsovec Pimentel, ahorcó,  golpeó y acuchilló en el cuerpo y rostro a quién hacía unas horas había jurado amor eterno en una velada romántica. <br><span class="c-rosa">“Mi ex esposo, planificó mi muerte desfigurándome el rostro con lesiones contundentes. Mis hijas, le rogaban que deje de golpearme”</span><br>Inconsciente, después de haber sido lanzada del segundo piso,  Kristel Begazo apenas podía respirar. Tenía los huesos rotos, el rostro desfigurado. <br><span class="c-rosa">“El raptó a mis hijas en el momento en el que yo me estaba ahogando con la sangre”</span><br>El dolor físico no se comparaba con el dolor de su alma. Los ojos se le llenaban de lágrimas pero no podía llorar por la gravedad de sus heridas. Sus lagrimas y tristeza contenida se hicieron palabras escritas en tres rollos de papel higiénico que fueron el inicio de su libro “Cuando no me amo”.<br>Johnny Jalsovec Pimentel fue denunciado pero la lentitud de salida para la orden de captura le dio el tiempo suficiente para fugarse y ahora está prófugo. Como si no fuera suficiente, es Kristel Begazo quién tiene que renovar la orden de captura, cada seis meses, para su agresor siga siendo buscado.</p></div></div>'
	                obtener_md[0].appendChild(modal_body)
	                break;
	            case obtener_md[1]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[1].appendChild(modal_body)
	                break;
	            case obtener_md[2]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[2].appendChild(modal_body)
	                break;
	            case obtener_md[3]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[3].appendChild(modal_body)
	                break;
	            case obtener_md[4]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[4].appendChild(modal_body)
	                break;
	            case obtener_md[5]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[5].appendChild(modal_body)
	                break;
	        }
	        obtener_md[k].insertBefore(modal_body, obtener_md[k].childNodes[1]);
	    }
	}

$(".modal-fullscreen").on('show.bs.modal', function () {  setTimeout( function() {    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");  }, 0);});
$(".modal-fullscreen").on('hidden.bs.modal', function () {  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");});