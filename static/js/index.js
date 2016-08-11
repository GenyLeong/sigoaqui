function responsive() {
    this.altura_map = $("#map-canvas").innerHeight(), this.altura_cuadro = $("#cuadro").innerHeight(), this.ancho = window.innerWidth;
    for (var t = document.querySelectorAll("[data-attr]"), e = 0; e < t.length; e++) t[e].classList.add("v-center");
    ancho > 767 ? (t[0].style.height = altura_map + "px", t[1].style.height = altura_cuadro + "px") : (t[0].style.height = "", t[1].style.height = "")
}

function poner_modal() {
    for (var t = document.getElementsByClassName("img-foto"), e = 0; e < t.length; e++) {
        var n = document.createElement("div");
        n.innerHTML = '<a href= "" type="button" data-toggle="modal" data-target=#' + [e] + '><i class="fa fa-play fa-4x" aria-hidden="true"></i></a>', t[e].appendChild(n)
    }
    for (var r = document.getElementsByClassName("img-carousel"), i = 0; i < r.length; i++) {
        var o = document.createElement("div");
        o.className = "translate_button", o.innerHTML = '<a href= "" type="button" data-toggle="modal" data-target=#' + [i] + '><i class="fa fa-play fa-4x" aria-hidden="true"></i></a>', r[i].appendChild(o)
    }
}

function obtener_modal() {
    for (var t = document.querySelectorAll("#modal-fullscreen"), e = 0; e < t.length; e++) {
        t[e].setAttribute("id", e);
        var n = document.createElement("div");
        n.className = "modal-dialog", n.innerHTML = '<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button></div></div>', t[e].appendChild(n)
    }
    for (var r = document.getElementsByClassName("modal-content"), i = 0; i < r.length; i++) {
        switch (r[i]) {
            case r[0]:
                var o = document.createElement("div");
                o.className = "modal-body", o.innerHTML = '<h4 class="modal-title" id="myModalLabel">“Me desfiguró el rostro y me aventó del segundo piso pero sigue libre” </h4><div class="row mb-50"><div class="col-lg-7 col-md-12"><iframe width="100%" height="315" src="https://www.youtube.com/embed/KLIAWcIr75g?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe><div class="v-center mt-48"><div><h5>Agresor:Jhonny Roko Jalsovec Pimentel</h5><p>41 años</p><p>Prófugo</p></div><div class="text-center"><img class=" img-agresor" src="images/foto_roko.jpg" class="img-responsive"></div></div></div><div class="col-lg-5 col-md-12 col-sm-12 text-modal"><h3 class="name">Kristel Begazo</h3><div class="testimonio"><p>Kristel Begazo Joyo es una de las 921 mujeres que entre 2009 y 2016 estuvieron a punto de morir a manos de sus esposos o parejas. Al delito se le denomina tentativa de feminicidio.</p><p>Madre de dos niñas, que tristemente tuvieron que presenciar cómo su padre, Johnny Jalsovec Pimentel, la ahorcó,  golpeó y acuchilló en distintas partes del cuerpo y en el rostro. Pocas horas antes, Johnny le había jurado amor eterno a Kristel en una velada romántica.</p><p>“Mi ex esposo planificó mi muerte y casi lo consigue. Me dejó desfigurada con lesiones contundentes. Mis hijas le rogaban que deje de golpearme, pero él continuaba”, relata Kristel Begazo.</p><p>Inconsciente, después de haber sido lanzada del segundo piso, apenas podía respirar. Tenía los huesos fracturados, el rostro convertido en masa informe.</p><p>“Se llevó a mis hijas en el momento en el que yo me estaba ahogando con la sangre”.- recuerda Kristel Begazo, limeña de 31 años, psicóloga de profesión.</p><p>La tortura física no se comparaba con el dolor del alma. Los ojos se le llenaban de lágrimas pero no podía llorar por la gravedad de sus heridas. Sus lágrimas y tristeza contenida se hicieron palabras escritas en tres rollos de papel higiénico que fueron el inicio de un libro que ha titulado <em>Cuando no me amo.</em></p><p>Johnny Jalsovec Pimentel fue denunciado ante la fiscalía de Salamanca, pero la demora en la expedición de la orden de captura le dio el tiempo suficiente para evadirse y ahora está en condición de prófugo. Como si no fuera suficiente, es Kristel Begazo quien debe renovar cada seis meses el mandato de detención de su ex esposo porque si ella no lo hace, las autoridades no moverán un dedo.</p></div></div></div>', r[0].appendChild(o);
                break;
            case r[1]:
                var o = document.createElement("div");
                o.className = "modal-body", o.innerHTML = '<h4 class="modal-title" id="myModalLabel">"Me tiró del cabello al piso, me golpeé la sien y quede inconsciente"</h4><div class="row mb-50"><div class="col-lg-7 col-md-12"><iframe width="100%" height="315" src="https://www.youtube.com/embed/Q53JuUEkjzM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe><div class="v-center mt-48"><div><h5>Agresor:José Hemilio Vargas Vera</h5><p>35 años</p><p>No denunciado</p></div><div class="text-center"><img class=" img-agresor" src="images/jose.jpg" class="img-responsive"></div></div></div><div class="col-lg-5 col-md-12 col-sm-12 text-modal"><h3 class="name">Victoria Hache</h3><div class="testimonio"><p>Hace poco más de un año, Victoria Hache, de 26 años, decidió ponerle fin al calvario que vivía junto al hombre con el que había decidido empezar una relación hacía solo cinco meses. Un jalón de cabello que la dejó en el suelo y un golpe en la sien la motivaron finalmente a decir: “¡Basta!”.</p><p>Era abril del 2015 y Victoria Hache acababa de volver a retomar su relación con José Vargas Vera. Confiando, tal vez, en que esta vez sería distinto.</p><p>“A los dos, tres días, empezamos a discutir de nuevo por un tema de celos. A él no le cuadraba un amigo mío”, dice Victoria.</p><p>Ella estaba con descaso médico porque había tenido una operación al rostro hacía apenas dos días. A su casa llegó José Vargas, furioso, a increparle por su cuenta en Facebook. Le quitó la computadora y ella, nada más que por reclamar, desató la ira contenida en su pareja.</p><p> “Agarró con una mano la computadora y con la otro sacó el puño y me dijo: ‘¡Cállate que te voy a reventar la cara!’ Sus ojos estaban desorbitados. Le había entrado el demonio”, recuerda Victoria.</p><p>En un segundo, José Vargas tomó de los cabellos a su pareja, ahora convertida en víctima. Con tal fuerza la tiró al piso que un golpe en la sien la dejó inconsciente. A los minutos, un hematoma del tamaño de un puño se había formado en su cabeza deslizándose hasta el ojo. Vargas quería terminar con ella. Durante un mes, Victoria no pudo salir de casa.</p><p>“Fui a denunciar al Poder Judicial pero sentí que mi caso no era nada. Por el trato que recibí decidí no seguir con la denuncia”, cuenta Victoria.</p><p>Durante los siguientes meses José Vargas buscó contactarse con Victoria Hache. Ella sospechó lo que pasaría si regresaba a los brazos del violento hombre. Vargas sigue en libertad y sin denuncia que lo frene.</p><p>El testimonio de Victoria Hache es una advertencia para otras mujeres.</p></div></div></div>', r[1].appendChild(o);
                break;
            case r[2]:
                var o = document.createElement("div");
                o.className = "modal-body", o.innerHTML = '<h4 class="modal-title" id="myModalLabel">"Violó a mi hija de 15 años pero está en libertad"</h4><div class="row mb-50"><div class="col-lg-7 col-md-12"><iframe width="100%" height="315" src="https://www.youtube.com/embed/HRYyfY7RaUY?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe><div class="v-center mt-48"><div><h5>Agresor:Fajry Ricardo Eric Dulanto Santivañez</h5><p>35 años</p><p>Denunciado</p></div><div class="text-center"><img class=" img-agresor" src="images/fajry.jpg" class="img-responsive"></div></div></div><div class="col-lg-5 col-md-12 col-sm-12 text-modal"><h3 class="name">Caso Menor de edad</h3><div class="testimonio"><p>“Mi hija solo tenía 15 años cuando la violaron”, afirma la madre de la menor con la voz quebrada. No puede decir más porque el agresor ha amenazado de muerte tanto a la víctima como a su familia.</p><p>La madre recuerda el momento en que su hija llegó a casa con la ropa rasgada, golpeada y con heridas en el alma.  La jovencita, a pesar de mostrarse fuerte, aún no ha podido superar el momento en que violentaron su cuerpo y dignidad.</p><p>Fajry Dulanto Santivañez, de 35 años, contactó a la adolescente por Facebook haciéndose pasar por un jovencito de 18 años.  A insistencia de una amiga, la  quinceañera lo aceptó. Pocas semanas después fue secuestrada por el sujeto.</p><p>“Días antes él (Fajry) se había presentado pero ella no lo había reconocido, no era el chico del Facebook.  A los días, se volvieron a encontrar en la calle y fue ahí donde la raptó”, recuerda su madre.</p><p> Despertó en una habitación de un lugar que desconocía. Trató de lanzarse por la ventana pero fue en vano. Fajry Dulanto la golpeó hasta romperle la piel más sensible en el cuerpo, abusó sexualmente de ella y no se apiadó de la quinceañera, ni porque esta rezaba en voz alta.</p><p>“La amenazó diciéndole que la iba a matar, la golpeó tan fuerte que le abrió el pezón. Le decía cállate, no sigas rezando, tu Dios no hace nada y yo te sigo violando”, recuerda la progenitora con la voz partida por evitar el llanto.</p><p>La jovencita consiguió escapar y lo denunció. Lo detuvieron pero presentó un habeas corpus bajo el argumento de que el mandato judicial vulneraba su derecho a la libertad personal. El personaje recurrió hasta el Tribunal Constitucional para conseguir su libertad. El proceso se sigue llevando en la Fiscalía de La Molina.</p></div></div></div>', r[2].appendChild(o);
                break;
            case r[3]:
                var o = document.createElement("div");
                o.className = "modal-body", o.innerHTML = '<h4 class="modal-title" id="myModalLabel">"Me quiso sacar los ojos y me golpeó la cabeza con una plancha"</h4><div class="row mb-50"><div class="col-lg-7 col-md-12"><iframe width="100%" height="315" src="https://www.youtube.com/embed/_nMIf0m0w8g?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe><div class="v-center mt-48"><div><h5>Agresor:Anselmo Vidal Fernandez Acra</h5><p>37 años</p><p>No habido</p></div><div class="text-center"><img class=" img-agresor" src="images/anselmo.jpg" class="img-responsive"></div></div></div><div class="col-lg-5 col-md-12 col-sm-12 text-modal"><h3 class="name">Yovana Cartagena</h3><div class="testimonio"><p>Salvaje, agresivo, son los términos precisos aplicables para definir al agresor que atacó a su conviviente: Yovana Cartagena Flores.</p><p>“Mi pareja quiso sacarme los ojos y me golpeó la cabeza con una plancha de ropa”, narró Yovana Cartagena aún adolorida por las heridas en su rostro y cuerpo.</p><p>Fue un lunes 25 de julio cuando  Anselmo Fernández Acra llegó por la noche a su casa en Juliaca, Puno. Yovana le sirvió la cena, pero como estaba con varias copas de alcohol encima, ella decidió vestir a su hija y salir de casa. Su miedo era un presentimiento de lo que estaba a punto de ocurrir.</p><p>“Entré con mi hija al cuarto de Anselmo y ahí ingresó él detrás de mí y me dijo: ‘¡Ya te jodiste!’.  Ahí el empezó a hurgarme con sus dedos los ojos, forcejeamos, me golpeó varias veces en la cabeza con la plancha y me gritó: ‘¡Te voy a matar!’”, recuerda Yovana Cartagena.</p><p>Después de la agresión, Cartagena se presentó en la comisaria de Santa Bárbara  para denunciar a Anselmo Fernández. Pero su caso fue rechazado. Así gracias a la policía el agresor pudo escapar y hasta el día de hoy se encuentra en la clandestinidad.</p><p>La Segunda Fiscalía Provincial Penal de San Román ya formalizó el pedido de prisión preventiva para Anselmo Fernández, quien hasta este último lunes ha seguido llamando a la familia de Yovana Cartagena Flores para convencerlos de quitar la denuncia. No lo harán. Yovana no se quedará de brazos cruzados.</p></div></div></div>', r[3].appendChild(o);
                break;
            case r[4]:
                var o = document.createElement("div");
                o.className = "modal-body", o.innerHTML = '<h4 class="modal-title" id="myModalLabel">"Me arrastró por la pista con mi hija en brazos"</h4><div class="row mb-50"><div class="col-lg-7 col-md-12"><iframe width="100%" height="315" src="https://www.youtube.com/embed/qefocoDLjNc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe><div class="v-center mt-48"><div><h5>Agresor:Adrián Lou Ku </h5><p>38 años</p><p>Denunciado</p></div><div class="text-center"><img class=" img-agresor" src="images/adrian.jpg" class="img-responsive"></div></div></div><div class="col-lg-5 col-md-12 col-sm-12 text-modal"><h3 class="name">Jemmy Taya</h3><div class="testimonio"><p>Jemmy Taya Macotela es otra víctima de los abusos de su ex pareja. A pesar de no continuar con él por los constantes maltratos que sufría, no ha escapado de la furia con la que este hombre actúa frente a sus dos hijas.</p><p>Era abril del 2015, cuando Adrián Lou Ku, llegó a casa de Jemmy Taya Macotela a recoger a su hija según el régimen de visitas en su casa en Puente Piedra. Y, ante la pregunta de Jemmy por saber a qué hora regresaría a la menor, él la agredió.</p><p> “Le dije que si no me decía a qué hora traía a la bebe que por favor bajara. Adrián arrancó el carro cuando estaba a mi lado cuando yo tenía el brazo estirado. Avanzó y me arrastró con su auto”, cuenta Jemmy Taya.</p><p>Casi tres cuadras Jemmy Taya aguantó con su hija de tres años en brazos. Los gritos de los vecinos hicieron que este sujeto pare el vehículo. Mientras Jemmy se paraba, Adrián Lou emprendió ruta de nuevo junto a su hija mayor.</p><p> “Fui a buscarlo y luego puse mi denuncia. Recibí un trato hostil en la comisaria y en el médico legista. Ya no podía más, tenía el bluyín pegado por las heridas”, recuerda Jemmy Taya. Era un intento de eliminación, sin duda, y así lo comprendió.</p><p>El proceso de investigación se inició en la Tercera Fiscalía de Puente Piedra. Sin embargo, el Ministerio Público increíblemente decidió que se trataba de un caso de “lesiones mutuas”, a pesar de que Adrián Lou Ku se basó en una denuncia que hizo cuatro días después de la agresión. Nunca más.</p></div></div></div>', r[4].appendChild(o);
                break;
            case r[5]:
                var o = document.createElement("div");
                o.className = "modal-body", o.innerHTML = '<h4 class="modal-title" id="myModalLabel">"Me golpeó y me obligó a tener relaciones sexuales estando embarazada"</h4><div class="row mb-50"><div class="col-lg-7 col-md-12"><iframe width="100%" height="315" src="https://www.youtube.com/embed/O8kd3tef1vk?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe><div class="v-center mt-48"><div><h5>Agresor:Victor Guido Egoavil Portillo</h5><p>22 años</p><p>No denunciado</p></div><div class="text-center"><img class=" img-agresor" src="images/victor.jpg" class="img-responsive"></div></div></div><div class="col-lg-5 col-md-12 col-sm-12 text-modal"><h3 class="name">Adriana López</h3><div class="testimonio"><p>Es de esperarse que para una mujer, el periodo de embarazo sea de las cosas más hermosas y memorables de la vida. Pero para Adriana López Guerra, con apenas 21 años, fue su peor pesadilla.</p><p>“Una noche mi novio se molestó porque me había puesto un bluyín para ir a trabajar. Me insultó y me dijo ‘Te voy a pegar’. Me metió un puñetazo (en la barriga) y me obligó a tener relaciones con él. Me dolió mucho porque estaba embarazada”, recuerda Adriana López entre lágrimas.</p><p> Ella se había escapado a Tingo María con Víctor Egoavil Portillo, el joven padre de su hija que había conocido en la academia en la que estudiaban para ingresar a la Universidad Nacional Agraria.</p><p>“Tenía prohibido decir a mis papás que estaba embarazada y que me encontraba  atrapada en una relación y que no podía escapar. Mi miedo hacia él era más grande, no dije nada”, explica Adriana López.</p><p>Ella regresó de Tingo María y terminó su relación con Víctor Egoavil. Sin embargo, no lo denunció por miedo y vergüenza. Hoy él tiene un régimen de visitas para su hija de tres años y ha tratado varias veces de llevársela.</p><p>Adriana López ha querido pedir garantías y poner una denuncia, pero según funcionarios del Ministerio de la Mujer, ya no procede. Mientras tanto, ella sigue viviendo con el miedo de volver a ser víctima de agresión de Víctor Egoavil y de que este sujeto secuestre a su niña. </p></div></div></div>', r[5].appendChild(o)
        }
        r[i].insertBefore(o, r[i].childNodes[1])
    }
}
var map;
if (function() {
        $(window).load(function() {
            $(document).ready(function() {
                var t, e = [-74.9919444444, -9.18875],
                    n = {
                        element: document.getElementById("map-canvas"),
                        responsive: !0,
                        geographyConfig: {
                            dataUrl: "data/peru_topo.json",
                            popupTemplate: function(t, e) {
                                return ['<div class="hoverinfo">', "<table>", "<thead>", "<tr>", '<th colspan="2">', t.properties.name, "</th>", "</tr>", "</thead>", "<tbody>", "<tr>", "<td>", '<div class="femicide">', e.femicides, "</td>", "<td>", '<div class="attempted">', e.attempted, "</td>", "</tr>", "</tbody>", "</table>", "</div>"].join("")
                            },
                            borderWidth: 1,
                            borderColor: "#FFFFFF",
                            popupOnHover: !0,
                            highlightOnHover: !0,
                            highlightBorderWidth: 2,
                            highlightBorderColor: "#B21540",
                            highlightFillColor: "#B21540",
                            highlightBorderWidth: 2
                        },
                        scope: "peru",
                        setProjection: function(t) {
                            var n = d3.geo.mercator().center(e).scale(3.7 * t.offsetWidth).translate([t.offsetWidth / 2, t.offsetHeight / 2]),
                                r = d3.geo.path().projection(n);
                            return {
                                path: r,
                                projection: n
                            }
                        }
                    },
                    r = {
                        defaultFill: "#e0e0e0",
                        level1: "#FBD2DD",
                        level2: "#F8A4BB",
                        level3: "#F47799",
                        level4: "#F14977",
                        level5: "#F0104E"
                    },
                    i = "data/femicide_stats.json";
                $.getJSON(i, function(e) {
                    $(".period-begin").text(e.period[0]), $(".period-end").text(e.period[1]), $(".period").removeClass("hiddendiv"), t = e.stats, keys = Object.keys(t), femicides = keys.map(function(e) {
                        return t[e].femicides
                    }), attempted = keys.map(function(e) {
                        return t[e].attempted
                    }), minF = Math.min(femicides), maxF = Math.max(femicides), minA = Math.min(attempted), maxA = Math.max(attempted), legend = "femicides", keys.forEach(function(e) {
                        t[e][legend] <= 15 ? t[e].fillKey = "level1" : 15 < t[e][legend] && t[e][legend] <= 30 ? t[e].fillKey = "level2" : 30 < t[e][legend] && t[e][legend] <= 45 ? t[e].fillKey = "level3" : 45 < t[e][legend] && t[e][legend] <= 60 ? t[e].fillKey = "level4" : 60 < t[e][legend] && (t[e].fillKey = "level5")
                    }), console.log(t), console.log(attempted), n.data = t, n.fills = r
                });
                map = new Datamap(n), window.addEventListener("resize", function() {
                    map.resize()
                })
            })
        })
    }(), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            r = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var i = function() {
            n || t(r).trigger(t.support.transition.end)
        };
        return setTimeout(i, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.alert");
            i || n.data("bs.alert", i = new r(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        r = function(e) {
            t(e).on("click", n, this.close)
        };
    r.VERSION = "3.3.7", r.TRANSITION_DURATION = 150, r.prototype.close = function(e) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var i = t(this),
            o = i.attr("data-target");
        o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t("#" === o ? [] : o);
        e && e.preventDefault(), a.length || (a = i.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n())
    };
    var i = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = r, t.fn.alert.noConflict = function() {
        return t.fn.alert = i, this
    }, t(document).on("click.bs.alert.data-api", n, r.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.button"),
                o = "object" == typeof e && e;
            i || r.data("bs.button", i = new n(this, o)), "toggle" == e ? i.toggle() : e && i.setState(e)
        })
    }
    var n = function(e, r) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, r), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            r = this.$element,
            i = r.is("input") ? "val" : "html",
            o = r.data();
        e += "Text", null == o.resetText && r.data("resetText", r[i]()), setTimeout(t.proxy(function() {
            r[i](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, r.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var r = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = r, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var r = t(n.target).closest(".btn");
        e.call(r, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.carousel"),
                o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : o.slide;
            i || r.data("bs.carousel", i = new n(this, o)), "number" == typeof e ? i.to(e) : a ? i[a]() : o.interval && i.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e),
            r = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (r && !this.options.wrap) return e;
        var i = "prev" == t ? -1 : 1,
            o = (n + i) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function(e, r) {
        var i = this.$element.find(".item.active"),
            o = r || this.getItemForDirection(e, i),
            a = this.interval,
            s = "next" == e ? "left" : "right",
            l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var u = o[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: s
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(o)]);
                h && h.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: s
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function() {
                o.removeClass([e, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
        }
    };
    var r = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = r, this
    };
    var i = function(n) {
        var r, i = t(this),
            o = t(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var a = t.extend({}, o.data(), i.data()),
                s = i.attr("data-slide-to");
            s && (a.interval = !1), e.call(o, a), s && o.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n, r = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(r)
    }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.collapse"),
                o = t.extend({}, r.DEFAULTS, n.data(), "object" == typeof e && e);
            !i && o.toggle && /show|hide/.test(e) && (o.toggle = !1), i || n.data("bs.collapse", i = new r(this, o)), "string" == typeof e && i[e]()
        })
    }
    var r = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, r.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    r.VERSION = "3.3.7", r.TRANSITION_DURATION = 350, r.DEFAULTS = {
        toggle: !0
    }, r.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, r.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(i && i.length && (e = i.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    i && i.length && (n.call(i, "hide"), e || i.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return s.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, r.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : i.call(this)
            }
        }
    }, r.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, r.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, r) {
            var i = t(r);
            this.addAriaAndCollapsedClass(e(i), i)
        }, this)).end()
    }, r.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var i = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = r, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(r) {
        var i = t(this);
        i.attr("data-target") || r.preventDefault();
        var o = e(i),
            a = o.data("bs.collapse"),
            s = a ? "toggle" : i.data();
        n.call(o, s)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && t(n);
        return r && r.length ? r : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(i).remove(), t(o).each(function() {
            var r = t(this),
                i = e(r),
                o = {
                    relatedTarget: this
                };
            i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(i[0], n.target) || (i.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
        }))
    }

    function r(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new a(this)), "string" == typeof e && r[e].call(n)
        })
    }
    var i = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        a = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.7", a.prototype.toggle = function(r) {
        var i = t(this);
        if (!i.is(".disabled, :disabled")) {
            var o = e(i),
                a = o.hasClass("open");
            if (n(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var s = {
                    relatedTarget: this
                };
                if (o.trigger(r = t.Event("show.bs.dropdown", s)), r.isDefaultPrevented()) return;
                i.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, a.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var r = t(this);
            if (n.preventDefault(), n.stopPropagation(), !r.is(".disabled, :disabled")) {
                var i = e(r),
                    a = i.hasClass("open");
                if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && i.find(o).trigger("focus"), r.trigger("click");
                var s = " li:not(.disabled):visible a",
                    l = i.find(".dropdown-menu" + s);
                if (l.length) {
                    var u = l.index(n.target);
                    38 == n.which && u > 0 && u--, 40 == n.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = r, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = s, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, r) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.modal"),
                a = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            o || i.data("bs.modal", o = new n(this, a)), "string" == typeof e ? o[e](r) : a.show && o.show(r)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var r = this,
            i = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            r.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var i = t.support.transition && r.$element.hasClass("fade");
            r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), i && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            i ? r.$dialog.one("bsTransitionEnd", function() {
                r.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var r = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && i;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                r.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var r = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = r, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var r = t(this),
            i = r.attr("href"),
            o = t(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            a = o.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(i) && i
            }, o.data(), r.data());
        r.is("a") && n.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        }), e.call(o, a, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.tooltip"),
                o = "object" == typeof e && e;
            !i && /destroy|hide/.test(e) || (i || r.data("bs.tooltip", i = new n(this, o)), "string" == typeof e && i[e]())
        })
    }
    var n = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, r) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
            var a = i[o];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, r) {
            n[t] != r && (e[t] = r)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var r = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !r) return;
            var i = this,
                o = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                u = l.test(s);
            u && (s = s.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                h = o[0].offsetWidth,
                p = o[0].offsetHeight;
            if (u) {
                var f = s,
                    d = this.getPosition(this.$viewport);
                s = "bottom" == s && c.bottom + p > d.bottom ? "top" : "top" == s && c.top - p < d.top ? "bottom" : "right" == s && c.right + h > d.width ? "left" : "left" == s && c.left - h < d.left ? "right" : s, o.removeClass(f).addClass(s)
            }
            var g = this.getCalculatedOffset(s, c, h, p);
            this.applyPlacement(g, s);
            var v = function() {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var r = this.tip(),
            i = r[0].offsetWidth,
            o = r[0].offsetHeight,
            a = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top += a, e.left += s, t.offset.setOffset(r[0], t.extend({
            using: function(t) {
                r.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), r.addClass("in");
        var l = r[0].offsetWidth,
            u = r[0].offsetHeight;
        "top" == n && u != o && (e.top = e.top + o - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var h = /top|bottom/.test(n),
            p = h ? 2 * c.left - i + l : 2 * c.top - o + u,
            f = h ? "offsetWidth" : "offsetHeight";
        r.offset(e), this.replaceArrow(p, r[0][f], h)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(e) {
        function r() {
            "in" != i.hoverState && o.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e()
        }
        var i = this,
            o = t(this.$tip),
            a = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(a), !a.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), this.hoverState = null, this
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            r = "BODY" == n.tagName,
            i = n.getBoundingClientRect();
        null == i.width && (i = t.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var o = window.SVGElement && n instanceof window.SVGElement,
            a = r ? {
                top: 0,
                left: 0
            } : o ? null : e.offset(),
            s = {
                scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = r ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, i, s, l, a)
    }, n.prototype.getCalculatedOffset = function(t, e, n, r) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - r,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - r / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - r / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, r) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return i;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - o - a.scroll,
                l = e.top + o - a.scroll + r;
            s < a.top ? i.top = a.top - s : l > a.top + a.height && (i.top = a.top + a.height - l)
        } else {
            var u = e.left - o,
                c = e.left + o + n;
            u < a.left ? i.left = a.left - u : c > a.right && (i.left = a.left + a.width - c)
        }
        return i
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var r = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = r, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.popover"),
                o = "object" == typeof e && e;
            !i && /destroy|hide/.test(e) || (i || r.data("bs.popover", i = new n(this, o)), "string" == typeof e && i[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var r = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = r, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(n, r) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new e(this, o)), "string" == typeof n && i[n]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            r = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                i = e.data("target") || e.attr("href"),
                o = /^#./.test(i) && t(i);
            return o && o.length && o.is(":visible") && [
                [o[n]().top + r, i]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            r = this.options.offset + n - this.$scrollElement.height(),
            i = this.offsets,
            o = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= r) return a != (t = o[o.length - 1]) && this.activate(t);
        if (a && e < i[0]) return this.activeTarget = null, this.clear();
        for (t = i.length; t--;) a != o[t] && e >= i[t] && (void 0 === i[t + 1] || e < i[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            r = t(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = r, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)), "string" == typeof e && i[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            r = e.data("target");
        if (r || (r = e.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var i = n.find(".active:last a"),
                o = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: i[0]
                });
            if (i.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var s = t(r);
                this.activate(e.closest("li"), n), this.activate(s, s.parent(), function() {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, r, i) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        var a = r.find("> .active"),
            s = i && t.support.transition && (a.length && a.hasClass("fade") || !!r.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), a.removeClass("in")
    };
    var r = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = r, this
    };
    var i = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.affix"),
                o = "object" == typeof e && e;
            i || r.data("bs.affix", i = new n(this, o)), "string" == typeof e && i[e]()
        })
    }
    var n = function(e, r) {
        this.options = t.extend({}, n.DEFAULTS, r), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, r) {
        var i = this.$target.scrollTop(),
            o = this.$element.offset(),
            a = this.$target.height();
        if (null != n && "top" == this.affixed) return i < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(i + this.unpin <= o.top) && "bottom" : !(i + a <= t - r) && "bottom";
        var s = null == this.affixed,
            l = s ? i : o.top,
            u = s ? a : e;
        return null != n && i <= n ? "top" : null != r && l + u >= t - r && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                r = this.options.offset,
                i = r.top,
                o = r.bottom,
                a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof r && (o = i = r), "function" == typeof i && (i = r.top(this.$element)), "function" == typeof o && (o = r.bottom(this.$element));
            var s = this.getState(a, e, i, o);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: a - e - o
            })
        }
    };
    var r = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = r, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                r = n.data();
            r.offset = r.offset || {}, null != r.offsetBottom && (r.offset.bottom = r.offsetBottom), null != r.offsetTop && (r.offset.top = r.offsetTop), e.call(n, r)
        })
    })
}(jQuery), ! function() {
    function t(t, e) {
        return e > t ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }

    function e(t) {
        return null === t ? NaN : +t
    }

    function n(t) {
        return !isNaN(t)
    }

    function r(t) {
        return {
            left: function(e, n, r, i) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = e.length); i > r;) {
                    var o = r + i >>> 1;
                    t(e[o], n) < 0 ? r = o + 1 : i = o
                }
                return r
            },
            right: function(e, n, r, i) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = e.length); i > r;) {
                    var o = r + i >>> 1;
                    t(e[o], n) > 0 ? i = o : r = o + 1
                }
                return r
            }
        }
    }

    function i(t) {
        return t.length
    }

    function o(t) {
        for (var e = 1; t * e % 1;) e *= 10;
        return e
    }

    function a(t, e) {
        for (var n in e) Object.defineProperty(t.prototype, n, {
            value: e[n],
            enumerable: !1
        })
    }

    function s() {
        this._ = Object.create(null)
    }

    function l(t) {
        return (t += "") === ga || t[0] === va ? va + t : t
    }

    function u(t) {
        return (t += "")[0] === va ? t.slice(1) : t
    }

    function c(t) {
        return l(t) in this._
    }

    function h(t) {
        return (t = l(t)) in this._ && delete this._[t]
    }

    function p() {
        var t = [];
        for (var e in this._) t.push(u(e));
        return t
    }

    function f() {
        var t = 0;
        for (var e in this._) ++t;
        return t
    }

    function d() {
        for (var t in this._) return !1;
        return !0
    }

    function g() {
        this._ = Object.create(null)
    }

    function v(t, e, n) {
        return function() {
            var r = n.apply(e, arguments);
            return r === e ? t : r
        }
    }

    function m(t, e) {
        if (e in t) return e;
        e = e.charAt(0).toUpperCase() + e.slice(1);
        for (var n = 0, r = ma.length; r > n; ++n) {
            var i = ma[n] + e;
            if (i in t) return i
        }
    }

    function y() {}

    function x() {}

    function b(t) {
        function e() {
            for (var e, r = n, i = -1, o = r.length; ++i < o;)(e = r[i].on) && e.apply(this, arguments);
            return t
        }
        var n = [],
            r = new s;
        return e.on = function(e, i) {
            var o, a = r.get(e);
            return arguments.length < 2 ? a && a.on : (a && (a.on = null, n = n.slice(0, o = n.indexOf(a)).concat(n.slice(o + 1)), r.remove(e)), i && n.push(r.set(e, {
                on: i
            })), t)
        }, e
    }

    function _() {
        na.event.preventDefault()
    }

    function w() {
        for (var t, e = na.event; t = e.sourceEvent;) e = t;
        return e
    }

    function T(t) {
        for (var e = new x, n = 0, r = arguments.length; ++n < r;) e[arguments[n]] = b(e);
        return e.of = function(n, r) {
            return function(i) {
                try {
                    var o = i.sourceEvent = na.event;
                    i.target = t, na.event = i, e[i.type].apply(n, r)
                } finally {
                    na.event = o
                }
            }
        }, e
    }

    function C(t) {
        return xa(t, Ca), t
    }

    function M(t) {
        return "function" == typeof t ? t : function() {
            return ba(t, this)
        }
    }

    function k(t) {
        return "function" == typeof t ? t : function() {
            return _a(t, this)
        }
    }

    function S(t, e) {
        function n() {
            this.removeAttribute(t)
        }

        function r() {
            this.removeAttributeNS(t.space, t.local)
        }

        function i() {
            this.setAttribute(t, e)
        }

        function o() {
            this.setAttributeNS(t.space, t.local, e)
        }

        function a() {
            var n = e.apply(this, arguments);
            null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
        }

        function s() {
            var n = e.apply(this, arguments);
            null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
        }
        return t = na.ns.qualify(t), null == e ? t.local ? r : n : "function" == typeof e ? t.local ? s : a : t.local ? o : i
    }

    function A(t) {
        return t.trim().replace(/\s+/g, " ")
    }

    function E(t) {
        return new RegExp("(?:^|\\s+)" + na.requote(t) + "(?:\\s+|$)", "g")
    }

    function N(t) {
        return (t + "").trim().split(/^|\s+/)
    }

    function L(t, e) {
        function n() {
            for (var n = -1; ++n < i;) t[n](this, e)
        }

        function r() {
            for (var n = -1, r = e.apply(this, arguments); ++n < i;) t[n](this, r)
        }
        t = N(t).map(I);
        var i = t.length;
        return "function" == typeof e ? r : n
    }

    function I(t) {
        var e = E(t);
        return function(n, r) {
            if (i = n.classList) return r ? i.add(t) : i.remove(t);
            var i = n.getAttribute("class") || "";
            r ? (e.lastIndex = 0, e.test(i) || n.setAttribute("class", A(i + " " + t))) : n.setAttribute("class", A(i.replace(e, " ")))
        }
    }

    function P(t, e, n) {
        function r() {
            this.style.removeProperty(t)
        }

        function i() {
            this.style.setProperty(t, e, n)
        }

        function o() {
            var r = e.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n)
        }
        return null == e ? r : "function" == typeof e ? o : i
    }

    function D(t, e) {
        function n() {
            delete this[t]
        }

        function r() {
            this[t] = e
        }

        function i() {
            var n = e.apply(this, arguments);
            null == n ? delete this[t] : this[t] = n
        }
        return null == e ? n : "function" == typeof e ? i : r
    }

    function F(t) {
        return "function" == typeof t ? t : (t = na.ns.qualify(t)).local ? function() {
            return this.ownerDocument.createElementNS(t.space, t.local)
        } : function() {
            return this.ownerDocument.createElementNS(this.namespaceURI, t)
        }
    }

    function j() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }

    function $(t) {
        return {
            __data__: t
        }
    }

    function R(t) {
        return function() {
            return Ta(this, t)
        }
    }

    function z(e) {
        return arguments.length || (e = t),
            function(t, n) {
                return t && n ? e(t.__data__, n.__data__) : !t - !n
            }
    }

    function B(t, e) {
        for (var n = 0, r = t.length; r > n; n++)
            for (var i, o = t[n], a = 0, s = o.length; s > a; a++)(i = o[a]) && e(i, a, n);
        return t
    }

    function q(t) {
        return xa(t, ka), t
    }

    function O(t) {
        var e, n;
        return function(r, i, o) {
            var a, s = t[o].update,
                l = s.length;
            for (o != n && (n = o, e = 0), i >= e && (e = i + 1); !(a = s[e]) && ++e < l;);
            return a
        }
    }

    function H(t, e, n) {
        function r() {
            var e = this[a];
            e && (this.removeEventListener(t, e, e.$), delete this[a])
        }

        function i() {
            var i = l(e, ia(arguments));
            r.call(this), this.addEventListener(t, this[a] = i, i.$ = n), i._ = e
        }

        function o() {
            var e, n = new RegExp("^__on([^.]+)" + na.requote(t) + "$");
            for (var r in this)
                if (e = r.match(n)) {
                    var i = this[r];
                    this.removeEventListener(e[1], i, i.$), delete this[r]
                }
        }
        var a = "__on" + t,
            s = t.indexOf("."),
            l = W;
        s > 0 && (t = t.slice(0, s));
        var u = Aa.get(t);
        return u && (t = u, l = U), s ? e ? i : r : e ? y : o
    }

    function W(t, e) {
        return function(n) {
            var r = na.event;
            na.event = n, e[0] = this.__data__;
            try {
                t.apply(this, e)
            } finally {
                na.event = r
            }
        }
    }

    function U(t, e) {
        var n = W(t, e);
        return function(t) {
            var e = this,
                r = t.relatedTarget;
            r && (r === e || 8 & r.compareDocumentPosition(e)) || n.call(e, t)
        }
    }

    function Y() {
        var t = ".dragsuppress-" + ++Na,
            e = "click" + t,
            n = na.select(sa).on("touchmove" + t, _).on("dragstart" + t, _).on("selectstart" + t, _);
        if (Ea) {
            var r = aa.style,
                i = r[Ea];
            r[Ea] = "none"
        }
        return function(o) {
            if (n.on(t, null), Ea && (r[Ea] = i), o) {
                var a = function() {
                    n.on(e, null)
                };
                n.on(e, function() {
                    _(), a()
                }, !0), setTimeout(a, 0)
            }
        }
    }

    function V(t, e) {
        e.changedTouches && (e = e.changedTouches[0]);
        var n = t.ownerSVGElement || t;
        if (n.createSVGPoint) {
            var r = n.createSVGPoint();
            if (0 > La && (sa.scrollX || sa.scrollY)) {
                n = na.select("body").append("svg").style({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    margin: 0,
                    padding: 0,
                    border: "none"
                }, "important");
                var i = n[0][0].getScreenCTM();
                La = !(i.f || i.e), n.remove()
            }
            return La ? (r.x = e.pageX, r.y = e.pageY) : (r.x = e.clientX, r.y = e.clientY), r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
        }
        var o = t.getBoundingClientRect();
        return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop]
    }

    function G() {
        return na.event.changedTouches[0].identifier
    }

    function X() {
        return na.event.target
    }

    function J() {
        return sa
    }

    function K(t) {
        return t > 0 ? 1 : 0 > t ? -1 : 0
    }

    function Z(t, e, n) {
        return (e[0] - t[0]) * (n[1] - t[1]) - (e[1] - t[1]) * (n[0] - t[0])
    }

    function Q(t) {
        return t > 1 ? 0 : -1 > t ? Da : Math.acos(t)
    }

    function tt(t) {
        return t > 1 ? $a : -1 > t ? -$a : Math.asin(t)
    }

    function et(t) {
        return ((t = Math.exp(t)) - 1 / t) / 2
    }

    function nt(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2
    }

    function rt(t) {
        return ((t = Math.exp(2 * t)) - 1) / (t + 1)
    }

    function it(t) {
        return (t = Math.sin(t / 2)) * t
    }

    function ot() {}

    function at(t, e, n) {
        return this instanceof at ? (this.h = +t, this.s = +e, void(this.l = +n)) : arguments.length < 2 ? t instanceof at ? new at(t.h, t.s, t.l) : bt("" + t, _t, at) : new at(t, e, n)
    }

    function st(t, e, n) {
        function r(t) {
            return t > 360 ? t -= 360 : 0 > t && (t += 360), 60 > t ? o + (a - o) * t / 60 : 180 > t ? a : 240 > t ? o + (a - o) * (240 - t) / 60 : o
        }

        function i(t) {
            return Math.round(255 * r(t))
        }
        var o, a;
        return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t, e = isNaN(e) ? 0 : 0 > e ? 0 : e > 1 ? 1 : e, n = 0 > n ? 0 : n > 1 ? 1 : n, a = .5 >= n ? n * (1 + e) : n + e - n * e, o = 2 * n - a, new vt(i(t + 120), i(t), i(t - 120))
    }

    function lt(t, e, n) {
        return this instanceof lt ? (this.h = +t, this.c = +e, void(this.l = +n)) : arguments.length < 2 ? t instanceof lt ? new lt(t.h, t.c, t.l) : t instanceof ct ? pt(t.l, t.a, t.b) : pt((t = wt((t = na.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new lt(t, e, n)
    }

    function ut(t, e, n) {
        return isNaN(t) && (t = 0), isNaN(e) && (e = 0), new ct(n, Math.cos(t *= Ra) * e, Math.sin(t) * e)
    }

    function ct(t, e, n) {
        return this instanceof ct ? (this.l = +t, this.a = +e, void(this.b = +n)) : arguments.length < 2 ? t instanceof ct ? new ct(t.l, t.a, t.b) : t instanceof lt ? ut(t.h, t.c, t.l) : wt((t = vt(t)).r, t.g, t.b) : new ct(t, e, n)
    }

    function ht(t, e, n) {
        var r = (t + 16) / 116,
            i = r + e / 500,
            o = r - n / 200;
        return i = ft(i) * Xa, r = ft(r) * Ja, o = ft(o) * Ka, new vt(gt(3.2404542 * i - 1.5371385 * r - .4985314 * o), gt(-.969266 * i + 1.8760108 * r + .041556 * o), gt(.0556434 * i - .2040259 * r + 1.0572252 * o))
    }

    function pt(t, e, n) {
        return t > 0 ? new lt(Math.atan2(n, e) * za, Math.sqrt(e * e + n * n), t) : new lt(NaN, NaN, t)
    }

    function ft(t) {
        return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
    }

    function dt(t) {
        return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
    }

    function gt(t) {
        return Math.round(255 * (.00304 >= t ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
    }

    function vt(t, e, n) {
        return this instanceof vt ? (this.r = ~~t, this.g = ~~e, void(this.b = ~~n)) : arguments.length < 2 ? t instanceof vt ? new vt(t.r, t.g, t.b) : bt("" + t, vt, st) : new vt(t, e, n)
    }

    function mt(t) {
        return new vt(t >> 16, 255 & t >> 8, 255 & t)
    }

    function yt(t) {
        return mt(t) + ""
    }

    function xt(t) {
        return 16 > t ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
    }

    function bt(t, e, n) {
        var r, i, o, a = 0,
            s = 0,
            l = 0;
        if (r = /([a-z]+)\((.*)\)/i.exec(t)) switch (i = r[2].split(","), r[1]) {
            case "hsl":
                return n(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
            case "rgb":
                return e(Ct(i[0]), Ct(i[1]), Ct(i[2]))
        }
        return (o = ts.get(t)) ? e(o.r, o.g, o.b) : (null == t || "#" !== t.charAt(0) || isNaN(o = parseInt(t.slice(1), 16)) || (4 === t.length ? (a = (3840 & o) >> 4, a = a >> 4 | a, s = 240 & o, s = s >> 4 | s, l = 15 & o, l = l << 4 | l) : 7 === t.length && (a = (16711680 & o) >> 16, s = (65280 & o) >> 8, l = 255 & o)), e(a, s, l))
    }

    function _t(t, e, n) {
        var r, i, o = Math.min(t /= 255, e /= 255, n /= 255),
            a = Math.max(t, e, n),
            s = a - o,
            l = (a + o) / 2;
        return s ? (i = .5 > l ? s / (a + o) : s / (2 - a - o), r = t == a ? (e - n) / s + (n > e ? 6 : 0) : e == a ? (n - t) / s + 2 : (t - e) / s + 4, r *= 60) : (r = NaN, i = l > 0 && 1 > l ? 0 : r), new at(r, i, l)
    }

    function wt(t, e, n) {
        t = Tt(t), e = Tt(e), n = Tt(n);
        var r = dt((.4124564 * t + .3575761 * e + .1804375 * n) / Xa),
            i = dt((.2126729 * t + .7151522 * e + .072175 * n) / Ja),
            o = dt((.0193339 * t + .119192 * e + .9503041 * n) / Ka);
        return ct(116 * i - 16, 500 * (r - i), 200 * (i - o))
    }

    function Tt(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function Ct(t) {
        var e = parseFloat(t);
        return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * e) : e
    }

    function Mt(t) {
        return "function" == typeof t ? t : function() {
            return t
        }
    }

    function kt(t) {
        return t
    }

    function St(t) {
        return function(e, n, r) {
            return 2 === arguments.length && "function" == typeof n && (r = n, n = null), At(e, n, t, r)
        }
    }

    function At(t, e, n, r) {
        function i() {
            var t, e = l.status;
            if (!e && Nt(l) || e >= 200 && 300 > e || 304 === e) {
                try {
                    t = n.call(o, l)
                } catch (t) {
                    return void a.error.call(o, t)
                }
                a.load.call(o, t)
            } else a.error.call(o, l)
        }
        var o = {},
            a = na.dispatch("beforesend", "progress", "load", "error"),
            s = {},
            l = new XMLHttpRequest,
            u = null;
        return !sa.XDomainRequest || "withCredentials" in l || !/^(http(s)?:)?\/\//.test(t) || (l = new XDomainRequest), "onload" in l ? l.onload = l.onerror = i : l.onreadystatechange = function() {
            l.readyState > 3 && i()
        }, l.onprogress = function(t) {
            var e = na.event;
            na.event = t;
            try {
                a.progress.call(o, l)
            } finally {
                na.event = e
            }
        }, o.header = function(t, e) {
            return t = (t + "").toLowerCase(), arguments.length < 2 ? s[t] : (null == e ? delete s[t] : s[t] = e + "", o)
        }, o.mimeType = function(t) {
            return arguments.length ? (e = null == t ? null : t + "", o) : e
        }, o.responseType = function(t) {
            return arguments.length ? (u = t, o) : u
        }, o.response = function(t) {
            return n = t, o
        }, ["get", "post"].forEach(function(t) {
            o[t] = function() {
                return o.send.apply(o, [t].concat(ia(arguments)))
            }
        }), o.send = function(n, r, i) {
            if (2 === arguments.length && "function" == typeof r && (i = r, r = null), l.open(n, t, !0), null == e || "accept" in s || (s.accept = e + ",*/*"), l.setRequestHeader)
                for (var c in s) l.setRequestHeader(c, s[c]);
            return null != e && l.overrideMimeType && l.overrideMimeType(e), null != u && (l.responseType = u), null != i && o.on("error", i).on("load", function(t) {
                i(null, t)
            }), a.beforesend.call(o, l), l.send(null == r ? null : r), o
        }, o.abort = function() {
            return l.abort(), o
        }, na.rebind(o, a, "on"), null == r ? o : o.get(Et(r))
    }

    function Et(t) {
        return 1 === t.length ? function(e, n) {
            t(null == e ? n : null)
        } : t
    }

    function Nt(t) {
        var e = t.responseType;
        return e && "text" !== e ? t.response : t.responseText
    }

    function Lt() {
        var t = It(),
            e = Pt() - t;
        e > 24 ? (isFinite(e) && (clearTimeout(is), is = setTimeout(Lt, e)), rs = 0) : (rs = 1, as(Lt))
    }

    function It() {
        var t = Date.now();
        for (os = es; os;) t >= os.t && (os.f = os.c(t - os.t)), os = os.n;
        return t
    }

    function Pt() {
        for (var t, e = es, n = 1 / 0; e;) e.f ? e = t ? t.n = e.n : es = e.n : (e.t < n && (n = e.t), e = (t = e).n);
        return ns = t, n
    }

    function Dt(t, e) {
        return e - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
    }

    function Ft(t, e) {
        var n = Math.pow(10, 3 * da(8 - e));
        return {
            scale: e > 8 ? function(t) {
                return t / n
            } : function(t) {
                return t * n
            },
            symbol: t
        }
    }

    function jt(t) {
        var e = t.decimal,
            n = t.thousands,
            r = t.grouping,
            i = t.currency,
            o = r && n ? function(t, e) {
                for (var i = t.length, o = [], a = 0, s = r[0], l = 0; i > 0 && s > 0 && (l + s + 1 > e && (s = Math.max(1, e - l)), o.push(t.substring(i -= s, i + s)), !((l += s + 1) > e));) s = r[a = (a + 1) % r.length];
                return o.reverse().join(n)
            } : kt;
        return function(t) {
            var n = ls.exec(t),
                r = n[1] || " ",
                a = n[2] || ">",
                s = n[3] || "-",
                l = n[4] || "",
                u = n[5],
                c = +n[6],
                h = n[7],
                p = n[8],
                f = n[9],
                d = 1,
                g = "",
                v = "",
                m = !1,
                y = !0;
            switch (p && (p = +p.substring(1)), (u || "0" === r && "=" === a) && (u = r = "0", a = "="), f) {
                case "n":
                    h = !0, f = "g";
                    break;
                case "%":
                    d = 100, v = "%", f = "f";
                    break;
                case "p":
                    d = 100, v = "%", f = "r";
                    break;
                case "b":
                case "o":
                case "x":
                case "X":
                    "#" === l && (g = "0" + f.toLowerCase());
                case "c":
                    y = !1;
                case "d":
                    m = !0, p = 0;
                    break;
                case "s":
                    d = -1, f = "r"
            }
            "$" === l && (g = i[0], v = i[1]), "r" != f || p || (f = "g"), null != p && ("g" == f ? p = Math.max(1, Math.min(21, p)) : ("e" == f || "f" == f) && (p = Math.max(0, Math.min(20, p)))), f = us.get(f) || $t;
            var x = u && h;
            return function(t) {
                var n = v;
                if (m && t % 1) return "";
                var i = 0 > t || 0 === t && 0 > 1 / t ? (t = -t, "-") : "-" === s ? "" : s;
                if (0 > d) {
                    var l = na.formatPrefix(t, p);
                    t = l.scale(t), n = l.symbol + v
                } else t *= d;
                t = f(t, p);
                var b, _, w = t.lastIndexOf(".");
                if (0 > w) {
                    var T = y ? t.lastIndexOf("e") : -1;
                    0 > T ? (b = t, _ = "") : (b = t.substring(0, T), _ = t.substring(T))
                } else b = t.substring(0, w), _ = e + t.substring(w + 1);
                !u && h && (b = o(b, 1 / 0));
                var C = g.length + b.length + _.length + (x ? 0 : i.length),
                    M = c > C ? new Array(C = c - C + 1).join(r) : "";
                return x && (b = o(M + b, M.length ? c - _.length : 1 / 0)), i += g, t = b + _, ("<" === a ? i + t + M : ">" === a ? M + i + t : "^" === a ? M.substring(0, C >>= 1) + i + t + M.substring(C) : i + (x ? t : M + t)) + n
            }
        }
    }

    function $t(t) {
        return t + ""
    }

    function Rt() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function zt(t, e, n) {
        function r(e) {
            var n = t(e),
                r = o(n, 1);
            return r - e > e - n ? n : r
        }

        function i(n) {
            return e(n = t(new hs(n - 1)), 1), n
        }

        function o(t, n) {
            return e(t = new hs((+t)), n), t
        }

        function a(t, r, o) {
            var a = i(t),
                s = [];
            if (o > 1)
                for (; r > a;) n(a) % o || s.push(new Date((+a))), e(a, 1);
            else
                for (; r > a;) s.push(new Date((+a))), e(a, 1);
            return s
        }

        function s(t, e, n) {
            try {
                hs = Rt;
                var r = new Rt;
                return r._ = t, a(r, e, n)
            } finally {
                hs = Date
            }
        }
        t.floor = t, t.round = r, t.ceil = i, t.offset = o, t.range = a;
        var l = t.utc = Bt(t);
        return l.floor = l, l.round = Bt(r), l.ceil = Bt(i), l.offset = Bt(o), l.range = s, t
    }

    function Bt(t) {
        return function(e, n) {
            try {
                hs = Rt;
                var r = new Rt;
                return r._ = e, t(r, n)._
            } finally {
                hs = Date
            }
        }
    }

    function qt(t) {
        function e(t) {
            function e(e) {
                for (var n, i, o, a = [], s = -1, l = 0; ++s < r;) 37 === t.charCodeAt(s) && (a.push(t.slice(l, s)), null != (i = fs[n = t.charAt(++s)]) && (n = t.charAt(++s)), (o = A[n]) && (n = o(e, null == i ? "e" === n ? " " : "0" : i)), a.push(n), l = s + 1);
                return a.push(t.slice(l, s)), a.join("")
            }
            var r = t.length;
            return e.parse = function(e) {
                var r = {
                        y: 1900,
                        m: 0,
                        d: 1,
                        H: 0,
                        M: 0,
                        S: 0,
                        L: 0,
                        Z: null
                    },
                    i = n(r, t, e, 0);
                if (i != e.length) return null;
                "p" in r && (r.H = r.H % 12 + 12 * r.p);
                var o = null != r.Z && hs !== Rt,
                    a = new(o ? Rt : hs);
                return "j" in r ? a.setFullYear(r.y, 0, r.j) : "w" in r && ("W" in r || "U" in r) ? (a.setFullYear(r.y, 0, 1), a.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (a.getDay() + 5) % 7 : r.w + 7 * r.U - (a.getDay() + 6) % 7)) : a.setFullYear(r.y, r.m, r.d), a.setHours(r.H + (0 | r.Z / 100), r.M + r.Z % 100, r.S, r.L), o ? a._ : a
            }, e.toString = function() {
                return t
            }, e
        }

        function n(t, e, n, r) {
            for (var i, o, a, s = 0, l = e.length, u = n.length; l > s;) {
                if (r >= u) return -1;
                if (i = e.charCodeAt(s++), 37 === i) {
                    if (a = e.charAt(s++), o = E[a in fs ? e.charAt(s++) : a], !o || (r = o(t, n, r)) < 0) return -1
                } else if (i != n.charCodeAt(r++)) return -1
            }
            return r
        }

        function r(t, e, n) {
            w.lastIndex = 0;
            var r = w.exec(e.slice(n));
            return r ? (t.w = T.get(r[0].toLowerCase()), n + r[0].length) : -1
        }

        function i(t, e, n) {
            b.lastIndex = 0;
            var r = b.exec(e.slice(n));
            return r ? (t.w = _.get(r[0].toLowerCase()), n + r[0].length) : -1
        }

        function o(t, e, n) {
            k.lastIndex = 0;
            var r = k.exec(e.slice(n));
            return r ? (t.m = S.get(r[0].toLowerCase()), n + r[0].length) : -1
        }

        function a(t, e, n) {
            C.lastIndex = 0;
            var r = C.exec(e.slice(n));
            return r ? (t.m = M.get(r[0].toLowerCase()), n + r[0].length) : -1
        }

        function s(t, e, r) {
            return n(t, A.c.toString(), e, r)
        }

        function l(t, e, r) {
            return n(t, A.x.toString(), e, r)
        }

        function u(t, e, r) {
            return n(t, A.X.toString(), e, r)
        }

        function c(t, e, n) {
            var r = x.get(e.slice(n, n += 2).toLowerCase());
            return null == r ? -1 : (t.p = r, n)
        }
        var h = t.dateTime,
            p = t.date,
            f = t.time,
            d = t.periods,
            g = t.days,
            v = t.shortDays,
            m = t.months,
            y = t.shortMonths;
        e.utc = function(t) {
            function n(t) {
                try {
                    hs = Rt;
                    var e = new hs;
                    return e._ = t, r(e)
                } finally {
                    hs = Date
                }
            }
            var r = e(t);
            return n.parse = function(t) {
                try {
                    hs = Rt;
                    var e = r.parse(t);
                    return e && e._
                } finally {
                    hs = Date
                }
            }, n.toString = r.toString, n
        }, e.multi = e.utc.multi = se;
        var x = na.map(),
            b = Ht(g),
            _ = Wt(g),
            w = Ht(v),
            T = Wt(v),
            C = Ht(m),
            M = Wt(m),
            k = Ht(y),
            S = Wt(y);
        d.forEach(function(t, e) {
            x.set(t.toLowerCase(), e)
        });
        var A = {
                a: function(t) {
                    return v[t.getDay()]
                },
                A: function(t) {
                    return g[t.getDay()]
                },
                b: function(t) {
                    return y[t.getMonth()]
                },
                B: function(t) {
                    return m[t.getMonth()]
                },
                c: e(h),
                d: function(t, e) {
                    return Ot(t.getDate(), e, 2)
                },
                e: function(t, e) {
                    return Ot(t.getDate(), e, 2)
                },
                H: function(t, e) {
                    return Ot(t.getHours(), e, 2)
                },
                I: function(t, e) {
                    return Ot(t.getHours() % 12 || 12, e, 2)
                },
                j: function(t, e) {
                    return Ot(1 + cs.dayOfYear(t), e, 3)
                },
                L: function(t, e) {
                    return Ot(t.getMilliseconds(), e, 3)
                },
                m: function(t, e) {
                    return Ot(t.getMonth() + 1, e, 2)
                },
                M: function(t, e) {
                    return Ot(t.getMinutes(), e, 2)
                },
                p: function(t) {
                    return d[+(t.getHours() >= 12)]
                },
                S: function(t, e) {
                    return Ot(t.getSeconds(), e, 2)
                },
                U: function(t, e) {
                    return Ot(cs.sundayOfYear(t), e, 2)
                },
                w: function(t) {
                    return t.getDay()
                },
                W: function(t, e) {
                    return Ot(cs.mondayOfYear(t), e, 2)
                },
                x: e(p),
                X: e(f),
                y: function(t, e) {
                    return Ot(t.getFullYear() % 100, e, 2)
                },
                Y: function(t, e) {
                    return Ot(t.getFullYear() % 1e4, e, 4)
                },
                Z: oe,
                "%": function() {
                    return "%"
                }
            },
            E = {
                a: r,
                A: i,
                b: o,
                B: a,
                c: s,
                d: Qt,
                e: Qt,
                H: ee,
                I: ee,
                j: te,
                L: ie,
                m: Zt,
                M: ne,
                p: c,
                S: re,
                U: Yt,
                w: Ut,
                W: Vt,
                x: l,
                X: u,
                y: Xt,
                Y: Gt,
                Z: Jt,
                "%": ae
            };
        return e
    }

    function Ot(t, e, n) {
        var r = 0 > t ? "-" : "",
            i = (r ? -t : t) + "",
            o = i.length;
        return r + (n > o ? new Array(n - o + 1).join(e) + i : i)
    }

    function Ht(t) {
        return new RegExp("^(?:" + t.map(na.requote).join("|") + ")", "i")
    }

    function Wt(t) {
        for (var e = new s, n = -1, r = t.length; ++n < r;) e.set(t[n].toLowerCase(), n);
        return e
    }

    function Ut(t, e, n) {
        ds.lastIndex = 0;
        var r = ds.exec(e.slice(n, n + 1));
        return r ? (t.w = +r[0], n + r[0].length) : -1
    }

    function Yt(t, e, n) {
        ds.lastIndex = 0;
        var r = ds.exec(e.slice(n));
        return r ? (t.U = +r[0], n + r[0].length) : -1
    }

    function Vt(t, e, n) {
        ds.lastIndex = 0;
        var r = ds.exec(e.slice(n));
        return r ? (t.W = +r[0], n + r[0].length) : -1
    }

    function Gt(t, e, n) {
        ds.lastIndex = 0;
        var r = ds.exec(e.slice(n, n + 4));
        return r ? (t.y = +r[0], n + r[0].length) : -1
    }

    function Xt(t, e, n) {
        ds.lastIndex = 0;
        var r = ds.exec(e.slice(n, n + 2));
        return r ? (t.y = Kt(+r[0]), n + r[0].length) : -1
    }

    function Jt(t, e, n) {
        return /^[+-]\d{4}$/.test(e = e.slice(n, n + 5)) ? (t.Z = -e, n + 5) : -1
    }

    function Kt(t) {
        return t + (t > 68 ? 1900 : 2e3)
    }

    function Zt(t, e, n) {
        ds.lastIndex = 0;
        var r = ds.exec(e.slice(n, n + 2));
        return r ? (t.m = r[0] - 1, n + r[0].length) : -1
    }

    function Qt(t, e, n) {
        ds.lastIndex = 0;
        var r = ds.exec(e.slice(n, n + 2));
        return r ? (t.d = +r[0], n + r[0].length) : -1
    }

    function te(t, e, n) {
        ds.lastIndex = 0;
        var r = ds.exec(e.slice(n, n + 3));
        return r ? (t.j = +r[0], n + r[0].length) : -1
    }

    function ee(t, e, n) {
        ds.lastIndex = 0;
        var r = ds.exec(e.slice(n, n + 2));
        return r ? (t.H = +r[0], n + r[0].length) : -1
    }

    function ne(t, e, n) {
        ds.lastIndex = 0;
        var r = ds.exec(e.slice(n, n + 2));
        return r ? (t.M = +r[0], n + r[0].length) : -1
    }

    function re(t, e, n) {
        ds.lastIndex = 0;
        var r = ds.exec(e.slice(n, n + 2));
        return r ? (t.S = +r[0], n + r[0].length) : -1
    }

    function ie(t, e, n) {
        ds.lastIndex = 0;
        var r = ds.exec(e.slice(n, n + 3));
        return r ? (t.L = +r[0], n + r[0].length) : -1
    }

    function oe(t) {
        var e = t.getTimezoneOffset(),
            n = e > 0 ? "-" : "+",
            r = 0 | da(e) / 60,
            i = da(e) % 60;
        return n + Ot(r, "0", 2) + Ot(i, "0", 2)
    }

    function ae(t, e, n) {
        gs.lastIndex = 0;
        var r = gs.exec(e.slice(n, n + 1));
        return r ? n + r[0].length : -1
    }

    function se(t) {
        for (var e = t.length, n = -1; ++n < e;) t[n][0] = this(t[n][0]);
        return function(e) {
            for (var n = 0, r = t[n]; !r[1](e);) r = t[++n];
            return r[0](e)
        }
    }

    function le() {}

    function ue(t, e, n) {
        var r = n.s = t + e,
            i = r - t,
            o = r - i;
        n.t = t - o + (e - i)
    }

    function ce(t, e) {
        t && xs.hasOwnProperty(t.type) && xs[t.type](t, e)
    }

    function he(t, e, n) {
        var r, i = -1,
            o = t.length - n;
        for (e.lineStart(); ++i < o;) r = t[i], e.point(r[0], r[1], r[2]);
        e.lineEnd()
    }

    function pe(t, e) {
        var n = -1,
            r = t.length;
        for (e.polygonStart(); ++n < r;) he(t[n], e, 1);
        e.polygonEnd()
    }

    function fe() {
        function t(t, e) {
            t *= Ra, e = e * Ra / 2 + Da / 4;
            var n = t - r,
                a = n >= 0 ? 1 : -1,
                s = a * n,
                l = Math.cos(e),
                u = Math.sin(e),
                c = o * u,
                h = i * l + c * Math.cos(s),
                p = c * a * Math.sin(s);
            _s.add(Math.atan2(p, h)), r = t, i = l, o = u
        }
        var e, n, r, i, o;
        ws.point = function(a, s) {
            ws.point = t, r = (e = a) * Ra, i = Math.cos(s = (n = s) * Ra / 2 + Da / 4), o = Math.sin(s)
        }, ws.lineEnd = function() {
            t(e, n)
        }
    }

    function de(t) {
        var e = t[0],
            n = t[1],
            r = Math.cos(n);
        return [r * Math.cos(e), r * Math.sin(e), Math.sin(n)]
    }

    function ge(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }

    function ve(t, e) {
        return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
    }

    function me(t, e) {
        t[0] += e[0], t[1] += e[1], t[2] += e[2]
    }

    function ye(t, e) {
        return [t[0] * e, t[1] * e, t[2] * e]
    }

    function xe(t) {
        var e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= e, t[1] /= e, t[2] /= e
    }

    function be(t) {
        return [Math.atan2(t[1], t[0]), tt(t[2])]
    }

    function _e(t, e) {
        return da(t[0] - e[0]) < Ia && da(t[1] - e[1]) < Ia
    }

    function we(t, e) {
        t *= Ra;
        var n = Math.cos(e *= Ra);
        Te(n * Math.cos(t), n * Math.sin(t), Math.sin(e))
    }

    function Te(t, e, n) {
        ++Ts, Ms += (t - Ms) / Ts, ks += (e - ks) / Ts, Ss += (n - Ss) / Ts
    }

    function Ce() {
        function t(t, i) {
            t *= Ra;
            var o = Math.cos(i *= Ra),
                a = o * Math.cos(t),
                s = o * Math.sin(t),
                l = Math.sin(i),
                u = Math.atan2(Math.sqrt((u = n * l - r * s) * u + (u = r * a - e * l) * u + (u = e * s - n * a) * u), e * a + n * s + r * l);
            Cs += u, As += u * (e + (e = a)), Es += u * (n + (n = s)), Ns += u * (r + (r = l)), Te(e, n, r)
        }
        var e, n, r;
        Ds.point = function(i, o) {
            i *= Ra;
            var a = Math.cos(o *= Ra);
            e = a * Math.cos(i), n = a * Math.sin(i), r = Math.sin(o), Ds.point = t, Te(e, n, r)
        }
    }

    function Me() {
        Ds.point = we
    }

    function ke() {
        function t(t, e) {
            t *= Ra;
            var n = Math.cos(e *= Ra),
                a = n * Math.cos(t),
                s = n * Math.sin(t),
                l = Math.sin(e),
                u = i * l - o * s,
                c = o * a - r * l,
                h = r * s - i * a,
                p = Math.sqrt(u * u + c * c + h * h),
                f = r * a + i * s + o * l,
                d = p && -Q(f) / p,
                g = Math.atan2(p, f);
            Ls += d * u, Is += d * c, Ps += d * h, Cs += g, As += g * (r + (r = a)), Es += g * (i + (i = s)), Ns += g * (o + (o = l)), Te(r, i, o)
        }
        var e, n, r, i, o;
        Ds.point = function(a, s) {
            e = a, n = s, Ds.point = t, a *= Ra;
            var l = Math.cos(s *= Ra);
            r = l * Math.cos(a), i = l * Math.sin(a), o = Math.sin(s), Te(r, i, o)
        }, Ds.lineEnd = function() {
            t(e, n), Ds.lineEnd = Me, Ds.point = we
        }
    }

    function Se(t, e) {
        function n(n, r) {
            return n = t(n, r), e(n[0], n[1])
        }
        return t.invert && e.invert && (n.invert = function(n, r) {
            return n = e.invert(n, r), n && t.invert(n[0], n[1])
        }), n
    }

    function Ae() {
        return !0
    }

    function Ee(t, e, n, r, i) {
        var o = [],
            a = [];
        if (t.forEach(function(t) {
                if (!((e = t.length - 1) <= 0)) {
                    var e, n = t[0],
                        r = t[e];
                    if (_e(n, r)) {
                        i.lineStart();
                        for (var s = 0; e > s; ++s) i.point((n = t[s])[0], n[1]);
                        return void i.lineEnd()
                    }
                    var l = new Le(n, t, null, (!0)),
                        u = new Le(n, null, l, (!1));
                    l.o = u, o.push(l), a.push(u), l = new Le(r, t, null, (!1)), u = new Le(r, null, l, (!0)), l.o = u, o.push(l), a.push(u)
                }
            }), a.sort(e), Ne(o), Ne(a), o.length) {
            for (var s = 0, l = n, u = a.length; u > s; ++s) a[s].e = l = !l;
            for (var c, h, p = o[0];;) {
                for (var f = p, d = !0; f.v;)
                    if ((f = f.n) === p) return;
                c = f.z, i.lineStart();
                do {
                    if (f.v = f.o.v = !0, f.e) {
                        if (d)
                            for (var s = 0, u = c.length; u > s; ++s) i.point((h = c[s])[0], h[1]);
                        else r(f.x, f.n.x, 1, i);
                        f = f.n
                    } else {
                        if (d) {
                            c = f.p.z;
                            for (var s = c.length - 1; s >= 0; --s) i.point((h = c[s])[0], h[1])
                        } else r(f.x, f.p.x, -1, i);
                        f = f.p
                    }
                    f = f.o, c = f.z, d = !d
                } while (!f.v);
                i.lineEnd()
            }
        }
    }

    function Ne(t) {
        if (e = t.length) {
            for (var e, n, r = 0, i = t[0]; ++r < e;) i.n = n = t[r], n.p = i, i = n;
            i.n = n = t[0], n.p = i
        }
    }

    function Le(t, e, n, r) {
        this.x = t, this.z = e, this.o = n, this.e = r, this.v = !1, this.n = this.p = null
    }

    function Ie(t, e, n, r) {
        return function(i, o) {
            function a(e, n) {
                var r = i(e, n);
                t(e = r[0], n = r[1]) && o.point(e, n)
            }

            function s(t, e) {
                var n = i(t, e);
                v.point(n[0], n[1])
            }

            function l() {
                y.point = s, v.lineStart()
            }

            function u() {
                y.point = a, v.lineEnd()
            }

            function c(t, e) {
                g.push([t, e]);
                var n = i(t, e);
                b.point(n[0], n[1])
            }

            function h() {
                b.lineStart(), g = []
            }

            function p() {
                c(g[0][0], g[0][1]), b.lineEnd();
                var t, e = b.clean(),
                    n = x.buffer(),
                    r = n.length;
                if (g.pop(), d.push(g), g = null, r)
                    if (1 & e) {
                        t = n[0];
                        var i, r = t.length - 1,
                            a = -1;
                        if (r > 0) {
                            for (_ || (o.polygonStart(), _ = !0), o.lineStart(); ++a < r;) o.point((i = t[a])[0], i[1]);
                            o.lineEnd()
                        }
                    } else r > 1 && 2 & e && n.push(n.pop().concat(n.shift())), f.push(n.filter(Pe))
            }
            var f, d, g, v = e(o),
                m = i.invert(r[0], r[1]),
                y = {
                    point: a,
                    lineStart: l,
                    lineEnd: u,
                    polygonStart: function() {
                        y.point = c, y.lineStart = h, y.lineEnd = p, f = [], d = []
                    },
                    polygonEnd: function() {
                        y.point = a, y.lineStart = l, y.lineEnd = u, f = na.merge(f);
                        var t = ze(m, d);
                        f.length ? (_ || (o.polygonStart(), _ = !0), Ee(f, Fe, t, n, o)) : t && (_ || (o.polygonStart(), _ = !0), o.lineStart(), n(null, null, 1, o), o.lineEnd()), _ && (o.polygonEnd(), _ = !1), f = d = null
                    },
                    sphere: function() {
                        o.polygonStart(), o.lineStart(), n(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                    }
                },
                x = De(),
                b = e(x),
                _ = !1;
            return y
        }
    }

    function Pe(t) {
        return t.length > 1
    }

    function De() {
        var t, e = [];
        return {
            lineStart: function() {
                e.push(t = [])
            },
            point: function(e, n) {
                t.push([e, n])
            },
            lineEnd: y,
            buffer: function() {
                var n = e;
                return e = [], t = null, n
            },
            rejoin: function() {
                e.length > 1 && e.push(e.pop().concat(e.shift()))
            }
        }
    }

    function Fe(t, e) {
        return ((t = t.x)[0] < 0 ? t[1] - $a - Ia : $a - t[1]) - ((e = e.x)[0] < 0 ? e[1] - $a - Ia : $a - e[1])
    }

    function je(t) {
        var e, n = NaN,
            r = NaN,
            i = NaN;
        return {
            lineStart: function() {
                t.lineStart(), e = 1
            },
            point: function(o, a) {
                var s = o > 0 ? Da : -Da,
                    l = da(o - n);
                da(l - Da) < Ia ? (t.point(n, r = (r + a) / 2 > 0 ? $a : -$a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(s, r), t.point(o, r), e = 0) : i !== s && l >= Da && (da(n - i) < Ia && (n -= i * Ia), da(o - s) < Ia && (o -= s * Ia), r = $e(n, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(s, r), e = 0), t.point(n = o, r = a), i = s
            },
            lineEnd: function() {
                t.lineEnd(), n = r = NaN
            },
            clean: function() {
                return 2 - e
            }
        }
    }

    function $e(t, e, n, r) {
        var i, o, a = Math.sin(t - n);
        return da(a) > Ia ? Math.atan((Math.sin(e) * (o = Math.cos(r)) * Math.sin(n) - Math.sin(r) * (i = Math.cos(e)) * Math.sin(t)) / (i * o * a)) : (e + r) / 2
    }

    function Re(t, e, n, r) {
        var i;
        if (null == t) i = n * $a, r.point(-Da, i), r.point(0, i), r.point(Da, i), r.point(Da, 0), r.point(Da, -i), r.point(0, -i), r.point(-Da, -i), r.point(-Da, 0), r.point(-Da, i);
        else if (da(t[0] - e[0]) > Ia) {
            var o = t[0] < e[0] ? Da : -Da;
            i = n * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
        } else r.point(e[0], e[1])
    }

    function ze(t, e) {
        var n = t[0],
            r = t[1],
            i = [Math.sin(n), -Math.cos(n), 0],
            o = 0,
            a = 0;
        _s.reset();
        for (var s = 0, l = e.length; l > s; ++s) {
            var u = e[s],
                c = u.length;
            if (c)
                for (var h = u[0], p = h[0], f = h[1] / 2 + Da / 4, d = Math.sin(f), g = Math.cos(f), v = 1;;) {
                    v === c && (v = 0), t = u[v];
                    var m = t[0],
                        y = t[1] / 2 + Da / 4,
                        x = Math.sin(y),
                        b = Math.cos(y),
                        _ = m - p,
                        w = _ >= 0 ? 1 : -1,
                        T = w * _,
                        C = T > Da,
                        M = d * x;
                    if (_s.add(Math.atan2(M * w * Math.sin(T), g * b + M * Math.cos(T))), o += C ? _ + w * Fa : _, C ^ p >= n ^ m >= n) {
                        var k = ve(de(h), de(t));
                        xe(k);
                        var S = ve(i, k);
                        xe(S);
                        var A = (C ^ _ >= 0 ? -1 : 1) * tt(S[2]);
                        (r > A || r === A && (k[0] || k[1])) && (a += C ^ _ >= 0 ? 1 : -1)
                    }
                    if (!v++) break;
                    p = m, d = x, g = b, h = t
                }
        }
        return (-Ia > o || Ia > o && 0 > _s) ^ 1 & a
    }

    function Be(t) {
        function e(t, e) {
            return Math.cos(t) * Math.cos(e) > o
        }

        function n(t) {
            var n, o, l, u, c;
            return {
                lineStart: function() {
                    u = l = !1, c = 1
                },
                point: function(h, p) {
                    var f, d = [h, p],
                        g = e(h, p),
                        v = a ? g ? 0 : i(h, p) : g ? i(h + (0 > h ? Da : -Da), p) : 0;
                    if (!n && (u = l = g) && t.lineStart(), g !== l && (f = r(n, d), (_e(n, f) || _e(d, f)) && (d[0] += Ia, d[1] += Ia, g = e(d[0], d[1]))), g !== l) c = 0, g ? (t.lineStart(), f = r(d, n), t.point(f[0], f[1])) : (f = r(n, d), t.point(f[0], f[1]), t.lineEnd()), n = f;
                    else if (s && n && a ^ g) {
                        var m;
                        v & o || !(m = r(d, n, !0)) || (c = 0, a ? (t.lineStart(), t.point(m[0][0], m[0][1]), t.point(m[1][0], m[1][1]), t.lineEnd()) : (t.point(m[1][0], m[1][1]), t.lineEnd(), t.lineStart(), t.point(m[0][0], m[0][1])))
                    }!g || n && _e(n, d) || t.point(d[0], d[1]), n = d, l = g, o = v
                },
                lineEnd: function() {
                    l && t.lineEnd(), n = null
                },
                clean: function() {
                    return c | (u && l) << 1
                }
            }
        }

        function r(t, e, n) {
            var r = de(t),
                i = de(e),
                a = [1, 0, 0],
                s = ve(r, i),
                l = ge(s, s),
                u = s[0],
                c = l - u * u;
            if (!c) return !n && t;
            var h = o * l / c,
                p = -o * u / c,
                f = ve(a, s),
                d = ye(a, h),
                g = ye(s, p);
            me(d, g);
            var v = f,
                m = ge(d, v),
                y = ge(v, v),
                x = m * m - y * (ge(d, d) - 1);
            if (!(0 > x)) {
                var b = Math.sqrt(x),
                    _ = ye(v, (-m - b) / y);
                if (me(_, d), _ = be(_), !n) return _;
                var w, T = t[0],
                    C = e[0],
                    M = t[1],
                    k = e[1];
                T > C && (w = T, T = C, C = w);
                var S = C - T,
                    A = da(S - Da) < Ia,
                    E = A || Ia > S;
                if (!A && M > k && (w = M, M = k, k = w), E ? A ? M + k > 0 ^ _[1] < (da(_[0] - T) < Ia ? M : k) : M <= _[1] && _[1] <= k : S > Da ^ (T <= _[0] && _[0] <= C)) {
                    var N = ye(v, (-m + b) / y);
                    return me(N, d), [_, be(N)]
                }
            }
        }

        function i(e, n) {
            var r = a ? t : Da - t,
                i = 0;
            return -r > e ? i |= 1 : e > r && (i |= 2), -r > n ? i |= 4 : n > r && (i |= 8), i
        }
        var o = Math.cos(t),
            a = o > 0,
            s = da(o) > Ia,
            l = dn(t, 6 * Ra);
        return Ie(e, n, l, a ? [0, -t] : [-Da, t - Da])
    }

    function qe(t, e, n, r) {
        return function(i) {
            var o, a = i.a,
                s = i.b,
                l = a.x,
                u = a.y,
                c = s.x,
                h = s.y,
                p = 0,
                f = 1,
                d = c - l,
                g = h - u;
            if (o = t - l, d || !(o > 0)) {
                if (o /= d, 0 > d) {
                    if (p > o) return;
                    f > o && (f = o)
                } else if (d > 0) {
                    if (o > f) return;
                    o > p && (p = o)
                }
                if (o = n - l, d || !(0 > o)) {
                    if (o /= d, 0 > d) {
                        if (o > f) return;
                        o > p && (p = o)
                    } else if (d > 0) {
                        if (p > o) return;
                        f > o && (f = o)
                    }
                    if (o = e - u, g || !(o > 0)) {
                        if (o /= g, 0 > g) {
                            if (p > o) return;
                            f > o && (f = o)
                        } else if (g > 0) {
                            if (o > f) return;
                            o > p && (p = o)
                        }
                        if (o = r - u, g || !(0 > o)) {
                            if (o /= g, 0 > g) {
                                if (o > f) return;
                                o > p && (p = o)
                            } else if (g > 0) {
                                if (p > o) return;
                                f > o && (f = o)
                            }
                            return p > 0 && (i.a = {
                                x: l + p * d,
                                y: u + p * g
                            }), 1 > f && (i.b = {
                                x: l + f * d,
                                y: u + f * g
                            }), i
                        }
                    }
                }
            }
        }
    }

    function Oe(t, e, n, r) {
        function i(r, i) {
            return da(r[0] - t) < Ia ? i > 0 ? 0 : 3 : da(r[0] - n) < Ia ? i > 0 ? 2 : 1 : da(r[1] - e) < Ia ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
        }

        function o(t, e) {
            return a(t.x, e.x)
        }

        function a(t, e) {
            var n = i(t, 1),
                r = i(e, 1);
            return n !== r ? n - r : 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0]
        }
        return function(s) {
            function l(t) {
                for (var e = 0, n = v.length, r = t[1], i = 0; n > i; ++i)
                    for (var o, a = 1, s = v[i], l = s.length, u = s[0]; l > a; ++a) o = s[a], u[1] <= r ? o[1] > r && Z(u, o, t) > 0 && ++e : o[1] <= r && Z(u, o, t) < 0 && --e, u = o;
                return 0 !== e
            }

            function u(o, s, l, u) {
                var c = 0,
                    h = 0;
                if (null == o || (c = i(o, l)) !== (h = i(s, l)) || a(o, s) < 0 ^ l > 0) {
                    do u.point(0 === c || 3 === c ? t : n, c > 1 ? r : e); while ((c = (c + l + 4) % 4) !== h)
                } else u.point(s[0], s[1])
            }

            function c(i, o) {
                return i >= t && n >= i && o >= e && r >= o
            }

            function h(t, e) {
                c(t, e) && s.point(t, e)
            }

            function p() {
                E.point = d, v && v.push(m = []), C = !0, T = !1, _ = w = NaN
            }

            function f() {
                g && (d(y, x), b && T && S.rejoin(), g.push(S.buffer())), E.point = h, T && s.lineEnd()
            }

            function d(t, e) {
                t = Math.max(-js, Math.min(js, t)), e = Math.max(-js, Math.min(js, e));
                var n = c(t, e);
                if (v && m.push([t, e]), C) y = t, x = e, b = n, C = !1, n && (s.lineStart(), s.point(t, e));
                else if (n && T) s.point(t, e);
                else {
                    var r = {
                        a: {
                            x: _,
                            y: w
                        },
                        b: {
                            x: t,
                            y: e
                        }
                    };
                    A(r) ? (T || (s.lineStart(), s.point(r.a.x, r.a.y)), s.point(r.b.x, r.b.y), n || s.lineEnd(), M = !1) : n && (s.lineStart(), s.point(t, e), M = !1)
                }
                _ = t, w = e, T = n
            }
            var g, v, m, y, x, b, _, w, T, C, M, k = s,
                S = De(),
                A = qe(t, e, n, r),
                E = {
                    point: h,
                    lineStart: p,
                    lineEnd: f,
                    polygonStart: function() {
                        s = S, g = [], v = [], M = !0
                    },
                    polygonEnd: function() {
                        s = k, g = na.merge(g);
                        var e = l([t, r]),
                            n = M && e,
                            i = g.length;
                        (n || i) && (s.polygonStart(), n && (s.lineStart(), u(null, null, 1, s), s.lineEnd()), i && Ee(g, o, e, u, s), s.polygonEnd()), g = v = m = null
                    }
                };
            return E
        }
    }

    function He(t) {
        var e = 0,
            n = Da / 3,
            r = an(t),
            i = r(e, n);
        return i.parallels = function(t) {
            return arguments.length ? r(e = t[0] * Da / 180, n = t[1] * Da / 180) : [180 * (e / Da), 180 * (n / Da)]
        }, i
    }

    function We(t, e) {
        function n(t, e) {
            var n = Math.sqrt(o - 2 * i * Math.sin(e)) / i;
            return [n * Math.sin(t *= i), a - n * Math.cos(t)]
        }
        var r = Math.sin(t),
            i = (r + Math.sin(e)) / 2,
            o = 1 + r * (2 * i - r),
            a = Math.sqrt(o) / i;
        return n.invert = function(t, e) {
            var n = a - e;
            return [Math.atan2(t, n) / i, tt((o - (t * t + n * n) * i * i) / (2 * i))]
        }, n
    }

    function Ue() {
        function t(t, e) {
            Rs += i * t - r * e, r = t, i = e
        }
        var e, n, r, i;
        Hs.point = function(o, a) {
            Hs.point = t, e = r = o, n = i = a
        }, Hs.lineEnd = function() {
            t(e, n)
        }
    }

    function Ye(t, e) {
        zs > t && (zs = t), t > qs && (qs = t), Bs > e && (Bs = e), e > Os && (Os = e)
    }

    function Ve() {
        function t(t, e) {
            a.push("M", t, ",", e, o)
        }

        function e(t, e) {
            a.push("M", t, ",", e), s.point = n
        }

        function n(t, e) {
            a.push("L", t, ",", e)
        }

        function r() {
            s.point = t
        }

        function i() {
            a.push("Z")
        }
        var o = Ge(4.5),
            a = [],
            s = {
                point: t,
                lineStart: function() {
                    s.point = e
                },
                lineEnd: r,
                polygonStart: function() {
                    s.lineEnd = i
                },
                polygonEnd: function() {
                    s.lineEnd = r, s.point = t
                },
                pointRadius: function(t) {
                    return o = Ge(t), s
                },
                result: function() {
                    if (a.length) {
                        var t = a.join("");
                        return a = [], t
                    }
                }
            };
        return s
    }

    function Ge(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }

    function Xe(t, e) {
        Ms += t, ks += e, ++Ss
    }

    function Je() {
        function t(t, r) {
            var i = t - e,
                o = r - n,
                a = Math.sqrt(i * i + o * o);
            As += a * (e + t) / 2, Es += a * (n + r) / 2, Ns += a, Xe(e = t, n = r)
        }
        var e, n;
        Us.point = function(r, i) {
            Us.point = t, Xe(e = r, n = i)
        }
    }

    function Ke() {
        Us.point = Xe
    }

    function Ze() {
        function t(t, e) {
            var n = t - r,
                o = e - i,
                a = Math.sqrt(n * n + o * o);
            As += a * (r + t) / 2, Es += a * (i + e) / 2, Ns += a, a = i * t - r * e, Ls += a * (r + t), Is += a * (i + e), Ps += 3 * a, Xe(r = t, i = e)
        }
        var e, n, r, i;
        Us.point = function(o, a) {
            Us.point = t, Xe(e = r = o, n = i = a)
        }, Us.lineEnd = function() {
            t(e, n)
        }
    }

    function Qe(t) {
        function e(e, n) {
            t.moveTo(e + a, n), t.arc(e, n, a, 0, Fa)
        }

        function n(e, n) {
            t.moveTo(e, n), s.point = r
        }

        function r(e, n) {
            t.lineTo(e, n)
        }

        function i() {
            s.point = e
        }

        function o() {
            t.closePath()
        }
        var a = 4.5,
            s = {
                point: e,
                lineStart: function() {
                    s.point = n
                },
                lineEnd: i,
                polygonStart: function() {
                    s.lineEnd = o
                },
                polygonEnd: function() {
                    s.lineEnd = i, s.point = e
                },
                pointRadius: function(t) {
                    return a = t, s
                },
                result: y
            };
        return s
    }

    function tn(t) {
        function e(t) {
            return (s ? r : n)(t)
        }

        function n(e) {
            return rn(e, function(n, r) {
                n = t(n, r), e.point(n[0], n[1])
            })
        }

        function r(e) {
            function n(n, r) {
                n = t(n, r), e.point(n[0], n[1])
            }

            function r() {
                x = NaN, C.point = o, e.lineStart()
            }

            function o(n, r) {
                var o = de([n, r]),
                    a = t(n, r);
                i(x, b, y, _, w, T, x = a[0], b = a[1], y = n, _ = o[0], w = o[1], T = o[2], s, e), e.point(x, b)
            }

            function a() {
                C.point = n, e.lineEnd()
            }

            function l() {
                r(), C.point = u, C.lineEnd = c
            }

            function u(t, e) {
                o(h = t, p = e), f = x, d = b, g = _, v = w, m = T, C.point = o
            }

            function c() {
                i(x, b, y, _, w, T, f, d, h, g, v, m, s, e), C.lineEnd = a, a()
            }
            var h, p, f, d, g, v, m, y, x, b, _, w, T, C = {
                point: n,
                lineStart: r,
                lineEnd: a,
                polygonStart: function() {
                    e.polygonStart(), C.lineStart = l
                },
                polygonEnd: function() {
                    e.polygonEnd(), C.lineStart = r
                }
            };
            return C
        }

        function i(e, n, r, s, l, u, c, h, p, f, d, g, v, m) {
            var y = c - e,
                x = h - n,
                b = y * y + x * x;
            if (b > 4 * o && v--) {
                var _ = s + f,
                    w = l + d,
                    T = u + g,
                    C = Math.sqrt(_ * _ + w * w + T * T),
                    M = Math.asin(T /= C),
                    k = da(da(T) - 1) < Ia || da(r - p) < Ia ? (r + p) / 2 : Math.atan2(w, _),
                    S = t(k, M),
                    A = S[0],
                    E = S[1],
                    N = A - e,
                    L = E - n,
                    I = x * N - y * L;
                (I * I / b > o || da((y * N + x * L) / b - .5) > .3 || a > s * f + l * d + u * g) && (i(e, n, r, s, l, u, A, E, k, _ /= C, w /= C, T, v, m), m.point(A, E), i(A, E, k, _, w, T, c, h, p, f, d, g, v, m))
            }
        }
        var o = .5,
            a = Math.cos(30 * Ra),
            s = 16;
        return e.precision = function(t) {
            return arguments.length ? (s = (o = t * t) > 0 && 16, e) : Math.sqrt(o)
        }, e
    }

    function en(t) {
        var e = tn(function(e, n) {
            return t([e * za, n * za])
        });
        return function(t) {
            return sn(e(t))
        }
    }

    function nn(t) {
        this.stream = t
    }

    function rn(t, e) {
        return {
            point: e,
            sphere: function() {
                t.sphere()
            },
            lineStart: function() {
                t.lineStart()
            },
            lineEnd: function() {
                t.lineEnd()
            },
            polygonStart: function() {
                t.polygonStart()
            },
            polygonEnd: function() {
                t.polygonEnd()
            }
        }
    }

    function on(t) {
        return an(function() {
            return t
        })()
    }

    function an(t) {
        function e(t) {
            return t = s(t[0] * Ra, t[1] * Ra), [t[0] * p + l, u - t[1] * p]
        }

        function n(t) {
            return t = s.invert((t[0] - l) / p, (u - t[1]) / p), t && [t[0] * za, t[1] * za]
        }

        function r() {
            s = Se(a = cn(m, y, x), o);
            var t = o(g, v);
            return l = f - t[0] * p, u = d + t[1] * p, i()
        }

        function i() {
            return c && (c.valid = !1, c = null), e
        }
        var o, a, s, l, u, c, h = tn(function(t, e) {
                return t = o(t, e), [t[0] * p + l, u - t[1] * p]
            }),
            p = 150,
            f = 480,
            d = 250,
            g = 0,
            v = 0,
            m = 0,
            y = 0,
            x = 0,
            b = Fs,
            _ = kt,
            w = null,
            T = null;
        return e.stream = function(t) {
                return c && (c.valid = !1), c = sn(b(a, h(_(t)))), c.valid = !0, c
            }, e.clipAngle = function(t) {
                return arguments.length ? (b = null == t ? (w = t, Fs) : Be((w = +t) * Ra), i()) : w
            }, e.clipExtent = function(t) {
                return arguments.length ? (T = t, _ = t ? Oe(t[0][0], t[0][1], t[1][0], t[1][1]) : kt, i()) : T
            }, e.scale = function(t) {
                return arguments.length ? (p = +t, r()) : p
            }, e.translate = function(t) {
                return arguments.length ? (f = +t[0], d = +t[1], r()) : [f, d]
            }, e.center = function(t) {
                return arguments.length ? (g = t[0] % 360 * Ra, v = t[1] % 360 * Ra, r()) : [g * za, v * za]
            }, e.rotate = function(t) {
                return arguments.length ? (m = t[0] % 360 * Ra, y = t[1] % 360 * Ra, x = t.length > 2 ? t[2] % 360 * Ra : 0, r()) : [m * za, y * za, x * za]
            }, na.rebind(e, h, "precision"),
            function() {
                return o = t.apply(this, arguments), e.invert = o.invert && n, r()
            }
    }

    function sn(t) {
        return rn(t, function(e, n) {
            t.point(e * Ra, n * Ra)
        })
    }

    function ln(t, e) {
        return [t, e]
    }

    function un(t, e) {
        return [t > Da ? t - Fa : -Da > t ? t + Fa : t, e]
    }

    function cn(t, e, n) {
        return t ? e || n ? Se(pn(t), fn(e, n)) : pn(t) : e || n ? fn(e, n) : un
    }

    function hn(t) {
        return function(e, n) {
            return e += t, [e > Da ? e - Fa : -Da > e ? e + Fa : e, n]
        }
    }

    function pn(t) {
        var e = hn(t);
        return e.invert = hn(-t), e
    }

    function fn(t, e) {
        function n(t, e) {
            var n = Math.cos(e),
                s = Math.cos(t) * n,
                l = Math.sin(t) * n,
                u = Math.sin(e),
                c = u * r + s * i;
            return [Math.atan2(l * o - c * a, s * r - u * i), tt(c * o + l * a)]
        }
        var r = Math.cos(t),
            i = Math.sin(t),
            o = Math.cos(e),
            a = Math.sin(e);
        return n.invert = function(t, e) {
            var n = Math.cos(e),
                s = Math.cos(t) * n,
                l = Math.sin(t) * n,
                u = Math.sin(e),
                c = u * o - l * a;
            return [Math.atan2(l * o + u * a, s * r + c * i), tt(c * r - s * i)]
        }, n
    }

    function dn(t, e) {
        var n = Math.cos(t),
            r = Math.sin(t);
        return function(i, o, a, s) {
            var l = a * e;
            null != i ? (i = gn(n, i), o = gn(n, o), (a > 0 ? o > i : i > o) && (i += a * Fa)) : (i = t + a * Fa, o = t - .5 * l);
            for (var u, c = i; a > 0 ? c > o : o > c; c -= l) s.point((u = be([n, -r * Math.cos(c), -r * Math.sin(c)]))[0], u[1])
        }
    }

    function gn(t, e) {
        var n = de(e);
        n[0] -= t, xe(n);
        var r = Q(-n[1]);
        return ((-n[2] < 0 ? -r : r) + 2 * Math.PI - Ia) % (2 * Math.PI)
    }

    function vn(t, e, n) {
        var r = na.range(t, e - Ia, n).concat(e);
        return function(t) {
            return r.map(function(e) {
                return [t, e]
            })
        }
    }

    function mn(t, e, n) {
        var r = na.range(t, e - Ia, n).concat(e);
        return function(t) {
            return r.map(function(e) {
                return [e, t]
            })
        }
    }

    function yn(t) {
        return t.source
    }

    function xn(t) {
        return t.target
    }

    function bn(t, e, n, r) {
        var i = Math.cos(e),
            o = Math.sin(e),
            a = Math.cos(r),
            s = Math.sin(r),
            l = i * Math.cos(t),
            u = i * Math.sin(t),
            c = a * Math.cos(n),
            h = a * Math.sin(n),
            p = 2 * Math.asin(Math.sqrt(it(r - e) + i * a * it(n - t))),
            f = 1 / Math.sin(p),
            d = p ? function(t) {
                var e = Math.sin(t *= p) * f,
                    n = Math.sin(p - t) * f,
                    r = n * l + e * c,
                    i = n * u + e * h,
                    a = n * o + e * s;
                return [Math.atan2(i, r) * za, Math.atan2(a, Math.sqrt(r * r + i * i)) * za]
            } : function() {
                return [t * za, e * za]
            };
        return d.distance = p, d
    }

    function _n() {
        function t(t, i) {
            var o = Math.sin(i *= Ra),
                a = Math.cos(i),
                s = da((t *= Ra) - e),
                l = Math.cos(s);
            Ys += Math.atan2(Math.sqrt((s = a * Math.sin(s)) * s + (s = r * o - n * a * l) * s), n * o + r * a * l), e = t, n = o, r = a
        }
        var e, n, r;
        Vs.point = function(i, o) {
            e = i * Ra, n = Math.sin(o *= Ra), r = Math.cos(o), Vs.point = t
        }, Vs.lineEnd = function() {
            Vs.point = Vs.lineEnd = y
        }
    }

    function wn(t, e) {
        function n(e, n) {
            var r = Math.cos(e),
                i = Math.cos(n),
                o = t(r * i);
            return [o * i * Math.sin(e), o * Math.sin(n)]
        }
        return n.invert = function(t, n) {
            var r = Math.sqrt(t * t + n * n),
                i = e(r),
                o = Math.sin(i),
                a = Math.cos(i);
            return [Math.atan2(t * o, r * a), Math.asin(r && n * o / r)]
        }, n
    }

    function Tn(t, e) {
        function n(t, e) {
            a > 0 ? -$a + Ia > e && (e = -$a + Ia) : e > $a - Ia && (e = $a - Ia);
            var n = a / Math.pow(i(e), o);
            return [n * Math.sin(o * t), a - n * Math.cos(o * t)]
        }
        var r = Math.cos(t),
            i = function(t) {
                return Math.tan(Da / 4 + t / 2)
            },
            o = t === e ? Math.sin(t) : Math.log(r / Math.cos(e)) / Math.log(i(e) / i(t)),
            a = r * Math.pow(i(t), o) / o;
        return o ? (n.invert = function(t, e) {
            var n = a - e,
                r = K(o) * Math.sqrt(t * t + n * n);
            return [Math.atan2(t, n) / o, 2 * Math.atan(Math.pow(a / r, 1 / o)) - $a]
        }, n) : Mn
    }

    function Cn(t, e) {
        function n(t, e) {
            var n = o - e;
            return [n * Math.sin(i * t), o - n * Math.cos(i * t)]
        }
        var r = Math.cos(t),
            i = t === e ? Math.sin(t) : (r - Math.cos(e)) / (e - t),
            o = r / i + t;
        return da(i) < Ia ? ln : (n.invert = function(t, e) {
            var n = o - e;
            return [Math.atan2(t, n) / i, o - K(i) * Math.sqrt(t * t + n * n)]
        }, n)
    }

    function Mn(t, e) {
        return [t, Math.log(Math.tan(Da / 4 + e / 2))]
    }

    function kn(t) {
        var e, n = on(t),
            r = n.scale,
            i = n.translate,
            o = n.clipExtent;
        return n.scale = function() {
            var t = r.apply(n, arguments);
            return t === n ? e ? n.clipExtent(null) : n : t
        }, n.translate = function() {
            var t = i.apply(n, arguments);
            return t === n ? e ? n.clipExtent(null) : n : t
        }, n.clipExtent = function(t) {
            var a = o.apply(n, arguments);
            if (a === n) {
                if (e = null == t) {
                    var s = Da * r(),
                        l = i();
                    o([
                        [l[0] - s, l[1] - s],
                        [l[0] + s, l[1] + s]
                    ])
                }
            } else e && (a = null);
            return a
        }, n.clipExtent(null)
    }

    function Sn(t, e) {
        return [Math.log(Math.tan(Da / 4 + e / 2)), -t]
    }

    function An(t) {
        return t[0]
    }

    function En(t) {
        return t[1]
    }

    function Nn(t) {
        for (var e = t.length, n = [0, 1], r = 2, i = 2; e > i; i++) {
            for (; r > 1 && Z(t[n[r - 2]], t[n[r - 1]], t[i]) <= 0;) --r;
            n[r++] = i
        }
        return n.slice(0, r)
    }

    function Ln(t, e) {
        return t[0] - e[0] || t[1] - e[1]
    }

    function In(t, e, n) {
        return (n[0] - e[0]) * (t[1] - e[1]) < (n[1] - e[1]) * (t[0] - e[0])
    }

    function Pn(t, e, n, r) {
        var i = t[0],
            o = n[0],
            a = e[0] - i,
            s = r[0] - o,
            l = t[1],
            u = n[1],
            c = e[1] - l,
            h = r[1] - u,
            p = (s * (l - u) - h * (i - o)) / (h * a - s * c);
        return [i + p * a, l + p * c]
    }

    function Dn(t) {
        var e = t[0],
            n = t[t.length - 1];
        return !(e[0] - n[0] || e[1] - n[1])
    }

    function Fn() {
        nr(this), this.edge = this.site = this.circle = null
    }

    function jn(t) {
        var e = ol.pop() || new Fn;
        return e.site = t, e
    }

    function $n(t) {
        Vn(t), nl.remove(t), ol.push(t), nr(t)
    }

    function Rn(t) {
        var e = t.circle,
            n = e.x,
            r = e.cy,
            i = {
                x: n,
                y: r
            },
            o = t.P,
            a = t.N,
            s = [t];
        $n(t);
        for (var l = o; l.circle && da(n - l.circle.x) < Ia && da(r - l.circle.cy) < Ia;) o = l.P, s.unshift(l), $n(l), l = o;
        s.unshift(l), Vn(l);
        for (var u = a; u.circle && da(n - u.circle.x) < Ia && da(r - u.circle.cy) < Ia;) a = u.N, s.push(u), $n(u), u = a;
        s.push(u), Vn(u);
        var c, h = s.length;
        for (c = 1; h > c; ++c) u = s[c], l = s[c - 1], Qn(u.edge, l.site, u.site, i);
        l = s[0], u = s[h - 1], u.edge = Kn(l.site, u.site, null, i), Yn(l), Yn(u)
    }

    function zn(t) {
        for (var e, n, r, i, o = t.x, a = t.y, s = nl._; s;)
            if (r = Bn(s, a) - o, r > Ia) s = s.L;
            else {
                if (i = o - qn(s, a), !(i > Ia)) {
                    r > -Ia ? (e = s.P, n = s) : i > -Ia ? (e = s, n = s.N) : e = n = s;
                    break
                }
                if (!s.R) {
                    e = s;
                    break
                }
                s = s.R
            }
        var l = jn(t);
        if (nl.insert(e, l), e || n) {
            if (e === n) return Vn(e), n = jn(e.site), nl.insert(l, n), l.edge = n.edge = Kn(e.site, l.site), Yn(e), void Yn(n);
            if (!n) return void(l.edge = Kn(e.site, l.site));
            Vn(e), Vn(n);
            var u = e.site,
                c = u.x,
                h = u.y,
                p = t.x - c,
                f = t.y - h,
                d = n.site,
                g = d.x - c,
                v = d.y - h,
                m = 2 * (p * v - f * g),
                y = p * p + f * f,
                x = g * g + v * v,
                b = {
                    x: (v * y - f * x) / m + c,
                    y: (p * x - g * y) / m + h
                };
            Qn(n.edge, u, d, b), l.edge = Kn(u, t, null, b), n.edge = Kn(t, d, null, b), Yn(e), Yn(n)
        }
    }

    function Bn(t, e) {
        var n = t.site,
            r = n.x,
            i = n.y,
            o = i - e;
        if (!o) return r;
        var a = t.P;
        if (!a) return -1 / 0;
        n = a.site;
        var s = n.x,
            l = n.y,
            u = l - e;
        if (!u) return s;
        var c = s - r,
            h = 1 / o - 1 / u,
            p = c / u;
        return h ? (-p + Math.sqrt(p * p - 2 * h * (c * c / (-2 * u) - l + u / 2 + i - o / 2))) / h + r : (r + s) / 2
    }

    function qn(t, e) {
        var n = t.N;
        if (n) return Bn(n, e);
        var r = t.site;
        return r.y === e ? r.x : 1 / 0
    }

    function On(t) {
        this.site = t, this.edges = []
    }

    function Hn(t) {
        for (var e, n, r, i, o, a, s, l, u, c, h = t[0][0], p = t[1][0], f = t[0][1], d = t[1][1], g = el, v = g.length; v--;)
            if (o = g[v], o && o.prepare())
                for (s = o.edges, l = s.length, a = 0; l > a;) c = s[a].end(), r = c.x, i = c.y, u = s[++a % l].start(), e = u.x, n = u.y, (da(r - e) > Ia || da(i - n) > Ia) && (s.splice(a, 0, new tr(Zn(o.site, c, da(r - h) < Ia && d - i > Ia ? {
                    x: h,
                    y: da(e - h) < Ia ? n : d
                } : da(i - d) < Ia && p - r > Ia ? {
                    x: da(n - d) < Ia ? e : p,
                    y: d
                } : da(r - p) < Ia && i - f > Ia ? {
                    x: p,
                    y: da(e - p) < Ia ? n : f
                } : da(i - f) < Ia && r - h > Ia ? {
                    x: da(n - f) < Ia ? e : h,
                    y: f
                } : null), o.site, null)), ++l)
    }

    function Wn(t, e) {
        return e.angle - t.angle
    }

    function Un() {
        nr(this), this.x = this.y = this.arc = this.site = this.cy = null
    }

    function Yn(t) {
        var e = t.P,
            n = t.N;
        if (e && n) {
            var r = e.site,
                i = t.site,
                o = n.site;
            if (r !== o) {
                var a = i.x,
                    s = i.y,
                    l = r.x - a,
                    u = r.y - s,
                    c = o.x - a,
                    h = o.y - s,
                    p = 2 * (l * h - u * c);
                if (!(p >= -Pa)) {
                    var f = l * l + u * u,
                        d = c * c + h * h,
                        g = (h * f - u * d) / p,
                        v = (l * d - c * f) / p,
                        h = v + s,
                        m = al.pop() || new Un;
                    m.arc = t, m.site = i, m.x = g + a, m.y = h + Math.sqrt(g * g + v * v), m.cy = h, t.circle = m;
                    for (var y = null, x = il._; x;)
                        if (m.y < x.y || m.y === x.y && m.x <= x.x) {
                            if (!x.L) {
                                y = x.P;
                                break
                            }
                            x = x.L
                        } else {
                            if (!x.R) {
                                y = x;
                                break
                            }
                            x = x.R
                        }
                    il.insert(y, m), y || (rl = m)
                }
            }
        }
    }

    function Vn(t) {
        var e = t.circle;
        e && (e.P || (rl = e.N), il.remove(e), al.push(e), nr(e), t.circle = null)
    }

    function Gn(t) {
        for (var e, n = tl, r = qe(t[0][0], t[0][1], t[1][0], t[1][1]), i = n.length; i--;) e = n[i], (!Xn(e, t) || !r(e) || da(e.a.x - e.b.x) < Ia && da(e.a.y - e.b.y) < Ia) && (e.a = e.b = null, n.splice(i, 1))
    }

    function Xn(t, e) {
        var n = t.b;
        if (n) return !0;
        var r, i, o = t.a,
            a = e[0][0],
            s = e[1][0],
            l = e[0][1],
            u = e[1][1],
            c = t.l,
            h = t.r,
            p = c.x,
            f = c.y,
            d = h.x,
            g = h.y,
            v = (p + d) / 2,
            m = (f + g) / 2;
        if (g === f) {
            if (a > v || v >= s) return;
            if (p > d) {
                if (o) {
                    if (o.y >= u) return
                } else o = {
                    x: v,
                    y: l
                };
                n = {
                    x: v,
                    y: u
                }
            } else {
                if (o) {
                    if (o.y < l) return
                } else o = {
                    x: v,
                    y: u
                };
                n = {
                    x: v,
                    y: l
                }
            }
        } else if (r = (p - d) / (g - f), i = m - r * v, -1 > r || r > 1)
            if (p > d) {
                if (o) {
                    if (o.y >= u) return
                } else o = {
                    x: (l - i) / r,
                    y: l
                };
                n = {
                    x: (u - i) / r,
                    y: u
                }
            } else {
                if (o) {
                    if (o.y < l) return
                } else o = {
                    x: (u - i) / r,
                    y: u
                };
                n = {
                    x: (l - i) / r,
                    y: l
                }
            } else if (g > f) {
            if (o) {
                if (o.x >= s) return
            } else o = {
                x: a,
                y: r * a + i
            };
            n = {
                x: s,
                y: r * s + i
            }
        } else {
            if (o) {
                if (o.x < a) return
            } else o = {
                x: s,
                y: r * s + i
            };
            n = {
                x: a,
                y: r * a + i
            }
        }
        return t.a = o, t.b = n, !0
    }

    function Jn(t, e) {
        this.l = t, this.r = e, this.a = this.b = null
    }

    function Kn(t, e, n, r) {
        var i = new Jn(t, e);
        return tl.push(i), n && Qn(i, t, e, n), r && Qn(i, e, t, r), el[t.i].edges.push(new tr(i, t, e)), el[e.i].edges.push(new tr(i, e, t)), i
    }

    function Zn(t, e, n) {
        var r = new Jn(t, null);
        return r.a = e, r.b = n, tl.push(r), r
    }

    function Qn(t, e, n, r) {
        t.a || t.b ? t.l === n ? t.b = r : t.a = r : (t.a = r, t.l = e, t.r = n)
    }

    function tr(t, e, n) {
        var r = t.a,
            i = t.b;
        this.edge = t, this.site = e, this.angle = n ? Math.atan2(n.y - e.y, n.x - e.x) : t.l === e ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y)
    }

    function er() {
        this._ = null
    }

    function nr(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null
    }

    function rr(t, e) {
        var n = e,
            r = e.R,
            i = n.U;
        i ? i.L === n ? i.L = r : i.R = r : t._ = r, r.U = i, n.U = r, n.R = r.L, n.R && (n.R.U = n), r.L = n
    }

    function ir(t, e) {
        var n = e,
            r = e.L,
            i = n.U;
        i ? i.L === n ? i.L = r : i.R = r : t._ = r, r.U = i, n.U = r, n.L = r.R, n.L && (n.L.U = n), r.R = n
    }

    function or(t) {
        for (; t.L;) t = t.L;
        return t
    }

    function ar(t, e) {
        var n, r, i, o = t.sort(sr).pop();
        for (tl = [], el = new Array(t.length), nl = new er, il = new er;;)
            if (i = rl, o && (!i || o.y < i.y || o.y === i.y && o.x < i.x))(o.x !== n || o.y !== r) && (el[o.i] = new On(o), zn(o), n = o.x, r = o.y), o = t.pop();
            else {
                if (!i) break;
                Rn(i.arc)
            }
        e && (Gn(e), Hn(e));
        var a = {
            cells: el,
            edges: tl
        };
        return nl = il = tl = el = null, a
    }

    function sr(t, e) {
        return e.y - t.y || e.x - t.x
    }

    function lr(t, e, n) {
        return (t.x - n.x) * (e.y - t.y) - (t.x - e.x) * (n.y - t.y)
    }

    function ur(t) {
        return t.x
    }

    function cr(t) {
        return t.y
    }

    function hr() {
        return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
        }
    }

    function pr(t, e, n, r, i, o) {
        if (!t(e, n, r, i, o)) {
            var a = .5 * (n + i),
                s = .5 * (r + o),
                l = e.nodes;
            l[0] && pr(t, l[0], n, r, a, s), l[1] && pr(t, l[1], a, r, i, s), l[2] && pr(t, l[2], n, s, a, o), l[3] && pr(t, l[3], a, s, i, o)
        }
    }

    function fr(t, e, n, r, i, o, a) {
        var s, l = 1 / 0;
        return function t(u, c, h, p, f) {
            if (!(c > o || h > a || r > p || i > f)) {
                if (d = u.point) {
                    var d, g = e - d[0],
                        v = n - d[1],
                        m = g * g + v * v;
                    if (l > m) {
                        var y = Math.sqrt(l = m);
                        r = e - y, i = n - y, o = e + y, a = n + y, s = d
                    }
                }
                for (var x = u.nodes, b = .5 * (c + p), _ = .5 * (h + f), w = e >= b, T = n >= _, C = T << 1 | w, M = C + 4; M > C; ++C)
                    if (u = x[3 & C]) switch (3 & C) {
                        case 0:
                            t(u, c, h, b, _);
                            break;
                        case 1:
                            t(u, b, h, p, _);
                            break;
                        case 2:
                            t(u, c, _, b, f);
                            break;
                        case 3:
                            t(u, b, _, p, f)
                    }
            }
        }(t, r, i, o, a), s
    }

    function dr(t, e) {
        t = na.rgb(t), e = na.rgb(e);
        var n = t.r,
            r = t.g,
            i = t.b,
            o = e.r - n,
            a = e.g - r,
            s = e.b - i;
        return function(t) {
            return "#" + xt(Math.round(n + o * t)) + xt(Math.round(r + a * t)) + xt(Math.round(i + s * t))
        }
    }

    function gr(t, e) {
        var n, r = {},
            i = {};
        for (n in t) n in e ? r[n] = yr(t[n], e[n]) : i[n] = t[n];
        for (n in e) n in t || (i[n] = e[n]);
        return function(t) {
            for (n in r) i[n] = r[n](t);
            return i
        }
    }

    function vr(t, e) {
        return t = +t, e = +e,
            function(n) {
                return t * (1 - n) + e * n
            }
    }

    function mr(t, e) {
        var n, r, i, o = ll.lastIndex = ul.lastIndex = 0,
            a = -1,
            s = [],
            l = [];
        for (t += "", e += "";
            (n = ll.exec(t)) && (r = ul.exec(e));)(i = r.index) > o && (i = e.slice(o, i), s[a] ? s[a] += i : s[++a] = i), (n = n[0]) === (r = r[0]) ? s[a] ? s[a] += r : s[++a] = r : (s[++a] = null, l.push({
            i: a,
            x: vr(n, r)
        })), o = ul.lastIndex;
        return o < e.length && (i = e.slice(o), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? (e = l[0].x, function(t) {
            return e(t) + ""
        }) : function() {
            return e
        } : (e = l.length, function(t) {
            for (var n, r = 0; e > r; ++r) s[(n = l[r]).i] = n.x(t);
            return s.join("")
        })
    }

    function yr(t, e) {
        for (var n, r = na.interpolators.length; --r >= 0 && !(n = na.interpolators[r](t, e)););
        return n
    }

    function xr(t, e) {
        var n, r = [],
            i = [],
            o = t.length,
            a = e.length,
            s = Math.min(t.length, e.length);
        for (n = 0; s > n; ++n) r.push(yr(t[n], e[n]));
        for (; o > n; ++n) i[n] = t[n];
        for (; a > n; ++n) i[n] = e[n];
        return function(t) {
            for (n = 0; s > n; ++n) i[n] = r[n](t);
            return i
        }
    }

    function br(t) {
        return function(e) {
            return 0 >= e ? 0 : e >= 1 ? 1 : t(e)
        }
    }

    function _r(t) {
        return function(e) {
            return 1 - t(1 - e)
        }
    }

    function wr(t) {
        return function(e) {
            return .5 * (.5 > e ? t(2 * e) : 2 - t(2 - 2 * e))
        }
    }

    function Tr(t) {
        return t * t
    }

    function Cr(t) {
        return t * t * t
    }

    function Mr(t) {
        if (0 >= t) return 0;
        if (t >= 1) return 1;
        var e = t * t,
            n = e * t;
        return 4 * (.5 > t ? n : 3 * (t - e) + n - .75)
    }

    function kr(t) {
        return function(e) {
            return Math.pow(e, t)
        }
    }

    function Sr(t) {
        return 1 - Math.cos(t * $a)
    }

    function Ar(t) {
        return Math.pow(2, 10 * (t - 1))
    }

    function Er(t) {
        return 1 - Math.sqrt(1 - t * t)
    }

    function Nr(t, e) {
        var n;
        return arguments.length < 2 && (e = .45), arguments.length ? n = e / Fa * Math.asin(1 / t) : (t = 1, n = e / 4),
            function(r) {
                return 1 + t * Math.pow(2, -10 * r) * Math.sin((r - n) * Fa / e)
            }
    }

    function Lr(t) {
        return t || (t = 1.70158),
            function(e) {
                return e * e * ((t + 1) * e - t)
            }
    }

    function Ir(t) {
        return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }

    function Pr(t, e) {
        t = na.hcl(t), e = na.hcl(e);
        var n = t.h,
            r = t.c,
            i = t.l,
            o = e.h - n,
            a = e.c - r,
            s = e.l - i;
        return isNaN(a) && (a = 0, r = isNaN(r) ? e.c : r), isNaN(o) ? (o = 0, n = isNaN(n) ? e.h : n) : o > 180 ? o -= 360 : -180 > o && (o += 360),
            function(t) {
                return ut(n + o * t, r + a * t, i + s * t) + ""
            }
    }

    function Dr(t, e) {
        t = na.hsl(t), e = na.hsl(e);
        var n = t.h,
            r = t.s,
            i = t.l,
            o = e.h - n,
            a = e.s - r,
            s = e.l - i;
        return isNaN(a) && (a = 0, r = isNaN(r) ? e.s : r), isNaN(o) ? (o = 0, n = isNaN(n) ? e.h : n) : o > 180 ? o -= 360 : -180 > o && (o += 360),
            function(t) {
                return st(n + o * t, r + a * t, i + s * t) + ""
            }
    }

    function Fr(t, e) {
        t = na.lab(t), e = na.lab(e);
        var n = t.l,
            r = t.a,
            i = t.b,
            o = e.l - n,
            a = e.a - r,
            s = e.b - i;
        return function(t) {
            return ht(n + o * t, r + a * t, i + s * t) + ""
        }
    }

    function jr(t, e) {
        return e -= t,
            function(n) {
                return Math.round(t + e * n)
            }
    }

    function $r(t) {
        var e = [t.a, t.b],
            n = [t.c, t.d],
            r = zr(e),
            i = Rr(e, n),
            o = zr(Br(n, e, -i)) || 0;
        e[0] * n[1] < n[0] * e[1] && (e[0] *= -1, e[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(e[1], e[0]) : Math.atan2(-n[0], n[1])) * za, this.translate = [t.e, t.f], this.scale = [r, o], this.skew = o ? Math.atan2(i, o) * za : 0
    }

    function Rr(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }

    function zr(t) {
        var e = Math.sqrt(Rr(t, t));
        return e && (t[0] /= e, t[1] /= e), e
    }

    function Br(t, e, n) {
        return t[0] += n * e[0], t[1] += n * e[1], t
    }

    function qr(t, e) {
        var n, r = [],
            i = [],
            o = na.transform(t),
            a = na.transform(e),
            s = o.translate,
            l = a.translate,
            u = o.rotate,
            c = a.rotate,
            h = o.skew,
            p = a.skew,
            f = o.scale,
            d = a.scale;
        return s[0] != l[0] || s[1] != l[1] ? (r.push("translate(", null, ",", null, ")"), i.push({
                i: 1,
                x: vr(s[0], l[0])
            }, {
                i: 3,
                x: vr(s[1], l[1])
            })) : l[0] || l[1] ? r.push("translate(" + l + ")") : r.push(""), u != c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), i.push({
                i: r.push(r.pop() + "rotate(", null, ")") - 2,
                x: vr(u, c)
            })) : c && r.push(r.pop() + "rotate(" + c + ")"), h != p ? i.push({
                i: r.push(r.pop() + "skewX(", null, ")") - 2,
                x: vr(h, p)
            }) : p && r.push(r.pop() + "skewX(" + p + ")"), f[0] != d[0] || f[1] != d[1] ? (n = r.push(r.pop() + "scale(", null, ",", null, ")"), i.push({
                i: n - 4,
                x: vr(f[0], d[0])
            }, {
                i: n - 2,
                x: vr(f[1], d[1])
            })) : (1 != d[0] || 1 != d[1]) && r.push(r.pop() + "scale(" + d + ")"), n = i.length,
            function(t) {
                for (var e, o = -1; ++o < n;) r[(e = i[o]).i] = e.x(t);
                return r.join("")
            }
    }

    function Or(t, e) {
        return e = (e -= t = +t) || 1 / e,
            function(n) {
                return (n - t) / e
            }
    }

    function Hr(t, e) {
        return e = (e -= t = +t) || 1 / e,
            function(n) {
                return Math.max(0, Math.min(1, (n - t) / e))
            }
    }

    function Wr(t) {
        for (var e = t.source, n = t.target, r = Yr(e, n), i = [e]; e !== r;) e = e.parent, i.push(e);
        for (var o = i.length; n !== r;) i.splice(o, 0, n), n = n.parent;
        return i
    }

    function Ur(t) {
        for (var e = [], n = t.parent; null != n;) e.push(t), t = n, n = n.parent;
        return e.push(t), e
    }

    function Yr(t, e) {
        if (t === e) return t;
        for (var n = Ur(t), r = Ur(e), i = n.pop(), o = r.pop(), a = null; i === o;) a = i, i = n.pop(), o = r.pop();
        return a
    }

    function Vr(t) {
        t.fixed |= 2
    }

    function Gr(t) {
        t.fixed &= -7
    }

    function Xr(t) {
        t.fixed |= 4, t.px = t.x, t.py = t.y
    }

    function Jr(t) {
        t.fixed &= -5
    }

    function Kr(t, e, n) {
        var r = 0,
            i = 0;
        if (t.charge = 0, !t.leaf)
            for (var o, a = t.nodes, s = a.length, l = -1; ++l < s;) o = a[l], null != o && (Kr(o, e, n), t.charge += o.charge, r += o.charge * o.cx, i += o.charge * o.cy);
        if (t.point) {
            t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
            var u = e * n[t.point.index];
            t.charge += t.pointCharge = u, r += u * t.point.x, i += u * t.point.y
        }
        t.cx = r / t.charge, t.cy = i / t.charge
    }

    function Zr(t, e) {
        return na.rebind(t, e, "sort", "children", "value"), t.nodes = t, t.links = ii, t
    }

    function Qr(t, e) {
        for (var n = [t]; null != (t = n.pop());)
            if (e(t), (i = t.children) && (r = i.length))
                for (var r, i; --r >= 0;) n.push(i[r])
    }

    function ti(t, e) {
        for (var n = [t], r = []; null != (t = n.pop());)
            if (r.push(t), (o = t.children) && (i = o.length))
                for (var i, o, a = -1; ++a < i;) n.push(o[a]);
        for (; null != (t = r.pop());) e(t)
    }

    function ei(t) {
        return t.children
    }

    function ni(t) {
        return t.value
    }

    function ri(t, e) {
        return e.value - t.value
    }

    function ii(t) {
        return na.merge(t.map(function(t) {
            return (t.children || []).map(function(e) {
                return {
                    source: t,
                    target: e
                }
            })
        }))
    }

    function oi(t) {
        return t.x
    }

    function ai(t) {
        return t.y
    }

    function si(t, e, n) {
        t.y0 = e, t.y = n
    }

    function li(t) {
        return na.range(t.length)
    }

    function ui(t) {
        for (var e = -1, n = t[0].length, r = []; ++e < n;) r[e] = 0;
        return r
    }

    function ci(t) {
        for (var e, n = 1, r = 0, i = t[0][1], o = t.length; o > n; ++n)(e = t[n][1]) > i && (r = n, i = e);
        return r
    }

    function hi(t) {
        return t.reduce(pi, 0)
    }

    function pi(t, e) {
        return t + e[1]
    }

    function fi(t, e) {
        return di(t, Math.ceil(Math.log(e.length) / Math.LN2 + 1))
    }

    function di(t, e) {
        for (var n = -1, r = +t[0], i = (t[1] - r) / e, o = []; ++n <= e;) o[n] = i * n + r;
        return o
    }

    function gi(t) {
        return [na.min(t), na.max(t)]
    }

    function vi(t, e) {
        return t.value - e.value
    }

    function mi(t, e) {
        var n = t._pack_next;
        t._pack_next = e, e._pack_prev = t, e._pack_next = n, n._pack_prev = e
    }

    function yi(t, e) {
        t._pack_next = e, e._pack_prev = t
    }

    function xi(t, e) {
        var n = e.x - t.x,
            r = e.y - t.y,
            i = t.r + e.r;
        return .999 * i * i > n * n + r * r
    }

    function bi(t) {
        function e(t) {
            c = Math.min(t.x - t.r, c), h = Math.max(t.x + t.r, h), p = Math.min(t.y - t.r, p), f = Math.max(t.y + t.r, f)
        }
        if ((n = t.children) && (u = n.length)) {
            var n, r, i, o, a, s, l, u, c = 1 / 0,
                h = -1 / 0,
                p = 1 / 0,
                f = -1 / 0;
            if (n.forEach(_i), r = n[0], r.x = -r.r, r.y = 0, e(r), u > 1 && (i = n[1], i.x = i.r, i.y = 0, e(i), u > 2))
                for (o = n[2], Ci(r, i, o), e(o), mi(r, o), r._pack_prev = o, mi(o, i), i = r._pack_next, a = 3; u > a; a++) {
                    Ci(r, i, o = n[a]);
                    var d = 0,
                        g = 1,
                        v = 1;
                    for (s = i._pack_next; s !== i; s = s._pack_next, g++)
                        if (xi(s, o)) {
                            d = 1;
                            break
                        }
                    if (1 == d)
                        for (l = r._pack_prev; l !== s._pack_prev && !xi(l, o); l = l._pack_prev, v++);
                    d ? (v > g || g == v && i.r < r.r ? yi(r, i = s) : yi(r = l, i), a--) : (mi(r, o), i = o, e(o))
                }
            var m = (c + h) / 2,
                y = (p + f) / 2,
                x = 0;
            for (a = 0; u > a; a++) o = n[a], o.x -= m, o.y -= y, x = Math.max(x, o.r + Math.sqrt(o.x * o.x + o.y * o.y));
            t.r = x, n.forEach(wi)
        }
    }

    function _i(t) {
        t._pack_next = t._pack_prev = t
    }

    function wi(t) {
        delete t._pack_next, delete t._pack_prev
    }

    function Ti(t, e, n, r) {
        var i = t.children;
        if (t.x = e += r * t.x, t.y = n += r * t.y, t.r *= r, i)
            for (var o = -1, a = i.length; ++o < a;) Ti(i[o], e, n, r)
    }

    function Ci(t, e, n) {
        var r = t.r + n.r,
            i = e.x - t.x,
            o = e.y - t.y;
        if (r && (i || o)) {
            var a = e.r + n.r,
                s = i * i + o * o;
            a *= a, r *= r;
            var l = .5 + (r - a) / (2 * s),
                u = Math.sqrt(Math.max(0, 2 * a * (r + s) - (r -= s) * r - a * a)) / (2 * s);
            n.x = t.x + l * i + u * o, n.y = t.y + l * o - u * i
        } else n.x = t.x + r, n.y = t.y
    }

    function Mi(t, e) {
        return t.parent == e.parent ? 1 : 2
    }

    function ki(t) {
        var e = t.children;
        return e.length ? e[0] : t.t
    }

    function Si(t) {
        var e, n = t.children;
        return (e = n.length) ? n[e - 1] : t.t
    }

    function Ai(t, e, n) {
        var r = n / (e.i - t.i);
        e.c -= r, e.s += n, t.c += r, e.z += n, e.m += n
    }

    function Ei(t) {
        for (var e, n = 0, r = 0, i = t.children, o = i.length; --o >= 0;) e = i[o], e.z += n, e.m += n, n += e.s + (r += e.c)
    }

    function Ni(t, e, n) {
        return t.a.parent === e.parent ? t.a : n
    }

    function Li(t) {
        return 1 + na.max(t, function(t) {
            return t.y
        })
    }

    function Ii(t) {
        return t.reduce(function(t, e) {
            return t + e.x
        }, 0) / t.length
    }

    function Pi(t) {
        var e = t.children;
        return e && e.length ? Pi(e[0]) : t
    }

    function Di(t) {
        var e, n = t.children;
        return n && (e = n.length) ? Di(n[e - 1]) : t
    }

    function Fi(t) {
        return {
            x: t.x,
            y: t.y,
            dx: t.dx,
            dy: t.dy
        }
    }

    function ji(t, e) {
        var n = t.x + e[3],
            r = t.y + e[0],
            i = t.dx - e[1] - e[3],
            o = t.dy - e[0] - e[2];
        return 0 > i && (n += i / 2, i = 0), 0 > o && (r += o / 2, o = 0), {
            x: n,
            y: r,
            dx: i,
            dy: o
        }
    }

    function $i(t) {
        var e = t[0],
            n = t[t.length - 1];
        return n > e ? [e, n] : [n, e]
    }

    function Ri(t) {
        return t.rangeExtent ? t.rangeExtent() : $i(t.range())
    }

    function zi(t, e, n, r) {
        var i = n(t[0], t[1]),
            o = r(e[0], e[1]);
        return function(t) {
            return o(i(t))
        }
    }

    function Bi(t, e) {
        var n, r = 0,
            i = t.length - 1,
            o = t[r],
            a = t[i];
        return o > a && (n = r, r = i, i = n, n = o, o = a, a = n), t[r] = e.floor(o), t[i] = e.ceil(a), t
    }

    function qi(t) {
        return t ? {
            floor: function(e) {
                return Math.floor(e / t) * t
            },
            ceil: function(e) {
                return Math.ceil(e / t) * t
            }
        } : bl
    }

    function Oi(t, e, n, r) {
        var i = [],
            o = [],
            a = 0,
            s = Math.min(t.length, e.length) - 1;
        for (t[s] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a <= s;) i.push(n(t[a - 1], t[a])), o.push(r(e[a - 1], e[a]));
        return function(e) {
            var n = na.bisect(t, e, 1, s) - 1;
            return o[n](i[n](e))
        }
    }

    function Hi(t, e, n, r) {
        function i() {
            var i = Math.min(t.length, e.length) > 2 ? Oi : zi,
                l = r ? Hr : Or;
            return a = i(t, e, l, n), s = i(e, t, l, yr), o
        }

        function o(t) {
            return a(t)
        }
        var a, s;
        return o.invert = function(t) {
            return s(t)
        }, o.domain = function(e) {
            return arguments.length ? (t = e.map(Number), i()) : t
        }, o.range = function(t) {
            return arguments.length ? (e = t, i()) : e
        }, o.rangeRound = function(t) {
            return o.range(t).interpolate(jr)
        }, o.clamp = function(t) {
            return arguments.length ? (r = t, i()) : r
        }, o.interpolate = function(t) {
            return arguments.length ? (n = t, i()) : n
        }, o.ticks = function(e) {
            return Vi(t, e)
        }, o.tickFormat = function(e, n) {
            return Gi(t, e, n)
        }, o.nice = function(e) {
            return Ui(t, e), i()
        }, o.copy = function() {
            return Hi(t, e, n, r)
        }, i()
    }

    function Wi(t, e) {
        return na.rebind(t, e, "range", "rangeRound", "interpolate", "clamp")
    }

    function Ui(t, e) {
        return Bi(t, qi(Yi(t, e)[2]))
    }

    function Yi(t, e) {
        null == e && (e = 10);
        var n = $i(t),
            r = n[1] - n[0],
            i = Math.pow(10, Math.floor(Math.log(r / e) / Math.LN10)),
            o = e / r * i;
        return .15 >= o ? i *= 10 : .35 >= o ? i *= 5 : .75 >= o && (i *= 2), n[0] = Math.ceil(n[0] / i) * i, n[1] = Math.floor(n[1] / i) * i + .5 * i, n[2] = i, n
    }

    function Vi(t, e) {
        return na.range.apply(na, Yi(t, e))
    }

    function Gi(t, e, n) {
        var r = Yi(t, e);
        if (n) {
            var i = ls.exec(n);
            if (i.shift(), "s" === i[8]) {
                var o = na.formatPrefix(Math.max(da(r[0]), da(r[1])));
                return i[7] || (i[7] = "." + Xi(o.scale(r[2]))), i[8] = "f", n = na.format(i.join("")),
                    function(t) {
                        return n(o.scale(t)) + o.symbol
                    }
            }
            i[7] || (i[7] = "." + Ji(i[8], r)), n = i.join("")
        } else n = ",." + Xi(r[2]) + "f";
        return na.format(n)
    }

    function Xi(t) {
        return -Math.floor(Math.log(t) / Math.LN10 + .01)
    }

    function Ji(t, e) {
        var n = Xi(e[2]);
        return t in _l ? Math.abs(n - Xi(Math.max(da(e[0]), da(e[1])))) + +("e" !== t) : n - 2 * ("%" === t)
    }

    function Ki(t, e, n, r) {
        function i(t) {
            return (n ? Math.log(0 > t ? 0 : t) : -Math.log(t > 0 ? 0 : -t)) / Math.log(e)
        }

        function o(t) {
            return n ? Math.pow(e, t) : -Math.pow(e, -t)
        }

        function a(e) {
            return t(i(e))
        }
        return a.invert = function(e) {
            return o(t.invert(e))
        }, a.domain = function(e) {
            return arguments.length ? (n = e[0] >= 0, t.domain((r = e.map(Number)).map(i)), a) : r
        }, a.base = function(n) {
            return arguments.length ? (e = +n, t.domain(r.map(i)), a) : e
        }, a.nice = function() {
            var e = Bi(r.map(i), n ? Math : Tl);
            return t.domain(e), r = e.map(o), a
        }, a.ticks = function() {
            var t = $i(r),
                a = [],
                s = t[0],
                l = t[1],
                u = Math.floor(i(s)),
                c = Math.ceil(i(l)),
                h = e % 1 ? 2 : e;
            if (isFinite(c - u)) {
                if (n) {
                    for (; c > u; u++)
                        for (var p = 1; h > p; p++) a.push(o(u) * p);
                    a.push(o(u))
                } else
                    for (a.push(o(u)); u++ < c;)
                        for (var p = h - 1; p > 0; p--) a.push(o(u) * p);
                for (u = 0; a[u] < s; u++);
                for (c = a.length; a[c - 1] > l; c--);
                a = a.slice(u, c)
            }
            return a
        }, a.tickFormat = function(t, e) {
            if (!arguments.length) return wl;
            arguments.length < 2 ? e = wl : "function" != typeof e && (e = na.format(e));
            var r, s = Math.max(.1, t / a.ticks().length),
                l = n ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
            return function(t) {
                return t / o(l(i(t) + r)) <= s ? e(t) : ""
            }
        }, a.copy = function() {
            return Ki(t.copy(), e, n, r)
        }, Wi(a, t)
    }

    function Zi(t, e, n) {
        function r(e) {
            return t(i(e))
        }
        var i = Qi(e),
            o = Qi(1 / e);
        return r.invert = function(e) {
            return o(t.invert(e))
        }, r.domain = function(e) {
            return arguments.length ? (t.domain((n = e.map(Number)).map(i)), r) : n
        }, r.ticks = function(t) {
            return Vi(n, t)
        }, r.tickFormat = function(t, e) {
            return Gi(n, t, e)
        }, r.nice = function(t) {
            return r.domain(Ui(n, t))
        }, r.exponent = function(a) {
            return arguments.length ? (i = Qi(e = a), o = Qi(1 / e), t.domain(n.map(i)), r) : e
        }, r.copy = function() {
            return Zi(t.copy(), e, n)
        }, Wi(r, t)
    }

    function Qi(t) {
        return function(e) {
            return 0 > e ? -Math.pow(-e, t) : Math.pow(e, t)
        }
    }

    function to(t, e) {
        function n(n) {
            return o[((i.get(n) || ("range" === e.t ? i.set(n, t.push(n)) : NaN)) - 1) % o.length]
        }

        function r(e, n) {
            return na.range(t.length).map(function(t) {
                return e + n * t
            })
        }
        var i, o, a;
        return n.domain = function(r) {
            if (!arguments.length) return t;
            t = [], i = new s;
            for (var o, a = -1, l = r.length; ++a < l;) i.has(o = r[a]) || i.set(o, t.push(o));
            return n[e.t].apply(n, e.a)
        }, n.range = function(t) {
            return arguments.length ? (o = t, a = 0, e = {
                t: "range",
                a: arguments
            }, n) : o
        }, n.rangePoints = function(i, s) {
            arguments.length < 2 && (s = 0);
            var l = i[0],
                u = i[1],
                c = t.length < 2 ? (l = (l + u) / 2, 0) : (u - l) / (t.length - 1 + s);
            return o = r(l + c * s / 2, c), a = 0, e = {
                t: "rangePoints",
                a: arguments
            }, n
        }, n.rangeRoundPoints = function(i, s) {
            arguments.length < 2 && (s = 0);
            var l = i[0],
                u = i[1],
                c = t.length < 2 ? (l = u = Math.round((l + u) / 2), 0) : 0 | (u - l) / (t.length - 1 + s);
            return o = r(l + Math.round(c * s / 2 + (u - l - (t.length - 1 + s) * c) / 2), c), a = 0, e = {
                t: "rangeRoundPoints",
                a: arguments
            }, n
        }, n.rangeBands = function(i, s, l) {
            arguments.length < 2 && (s = 0), arguments.length < 3 && (l = s);
            var u = i[1] < i[0],
                c = i[u - 0],
                h = i[1 - u],
                p = (h - c) / (t.length - s + 2 * l);
            return o = r(c + p * l, p), u && o.reverse(), a = p * (1 - s), e = {
                t: "rangeBands",
                a: arguments
            }, n
        }, n.rangeRoundBands = function(i, s, l) {
            arguments.length < 2 && (s = 0), arguments.length < 3 && (l = s);
            var u = i[1] < i[0],
                c = i[u - 0],
                h = i[1 - u],
                p = Math.floor((h - c) / (t.length - s + 2 * l));
            return o = r(c + Math.round((h - c - (t.length - s) * p) / 2), p), u && o.reverse(), a = Math.round(p * (1 - s)), e = {
                t: "rangeRoundBands",
                a: arguments
            }, n
        }, n.rangeBand = function() {
            return a
        }, n.rangeExtent = function() {
            return $i(e.a[0])
        }, n.copy = function() {
            return to(t, e)
        }, n.domain(t)
    }

    function eo(r, i) {
        function o() {
            var t = 0,
                e = i.length;
            for (s = []; ++t < e;) s[t - 1] = na.quantile(r, t / e);
            return a
        }

        function a(t) {
            return isNaN(t = +t) ? void 0 : i[na.bisect(s, t)]
        }
        var s;
        return a.domain = function(i) {
            return arguments.length ? (r = i.map(e).filter(n).sort(t), o()) : r
        }, a.range = function(t) {
            return arguments.length ? (i = t, o()) : i
        }, a.quantiles = function() {
            return s
        }, a.invertExtent = function(t) {
            return t = i.indexOf(t), 0 > t ? [NaN, NaN] : [t > 0 ? s[t - 1] : r[0], t < s.length ? s[t] : r[r.length - 1]]
        }, a.copy = function() {
            return eo(r, i)
        }, o()
    }

    function no(t, e, n) {
        function r(e) {
            return n[Math.max(0, Math.min(a, Math.floor(o * (e - t))))]
        }

        function i() {
            return o = n.length / (e - t), a = n.length - 1, r
        }
        var o, a;
        return r.domain = function(n) {
            return arguments.length ? (t = +n[0], e = +n[n.length - 1], i()) : [t, e]
        }, r.range = function(t) {
            return arguments.length ? (n = t, i()) : n
        }, r.invertExtent = function(e) {
            return e = n.indexOf(e), e = 0 > e ? NaN : e / o + t, [e, e + 1 / o]
        }, r.copy = function() {
            return no(t, e, n)
        }, i()
    }

    function ro(t, e) {
        function n(n) {
            return n >= n ? e[na.bisect(t, n)] : void 0
        }
        return n.domain = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.range = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.invertExtent = function(n) {
            return n = e.indexOf(n), [t[n - 1], t[n]]
        }, n.copy = function() {
            return ro(t, e)
        }, n
    }

    function io(t) {
        function e(t) {
            return +t
        }
        return e.invert = e, e.domain = e.range = function(n) {
            return arguments.length ? (t = n.map(e), e) : t
        }, e.ticks = function(e) {
            return Vi(t, e)
        }, e.tickFormat = function(e, n) {
            return Gi(t, e, n)
        }, e.copy = function() {
            return io(t)
        }, e
    }

    function oo() {
        return 0
    }

    function ao(t) {
        return t.innerRadius
    }

    function so(t) {
        return t.outerRadius
    }

    function lo(t) {
        return t.startAngle
    }

    function uo(t) {
        return t.endAngle
    }

    function co(t) {
        return t && t.padAngle
    }

    function ho(t, e, n, r) {
        return (t - n) * e - (e - r) * t > 0 ? 0 : 1
    }

    function po(t, e, n, r, i) {
        var o = t[0] - e[0],
            a = t[1] - e[1],
            s = (i ? r : -r) / Math.sqrt(o * o + a * a),
            l = s * a,
            u = -s * o,
            c = t[0] + l,
            h = t[1] + u,
            p = e[0] + l,
            f = e[1] + u,
            d = (c + p) / 2,
            g = (h + f) / 2,
            v = p - c,
            m = f - h,
            y = v * v + m * m,
            x = n - r,
            b = c * f - p * h,
            _ = (0 > m ? -1 : 1) * Math.sqrt(x * x * y - b * b),
            w = (b * m - v * _) / y,
            T = (-b * v - m * _) / y,
            C = (b * m + v * _) / y,
            M = (-b * v + m * _) / y,
            k = w - d,
            S = T - g,
            A = C - d,
            E = M - g;
        return k * k + S * S > A * A + E * E && (w = C, T = M), [
            [w - l, T - u],
            [w * n / x, T * n / x]
        ]
    }

    function fo(t) {
        function e(e) {
            function a() {
                u.push("M", o(t(c), s))
            }
            for (var l, u = [], c = [], h = -1, p = e.length, f = Mt(n), d = Mt(r); ++h < p;) i.call(this, l = e[h], h) ? c.push([+f.call(this, l, h), +d.call(this, l, h)]) : c.length && (a(), c = []);
            return c.length && a(), u.length ? u.join("") : null
        }
        var n = An,
            r = En,
            i = Ae,
            o = go,
            a = o.key,
            s = .7;
        return e.x = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.y = function(t) {
            return arguments.length ? (r = t, e) : r
        }, e.defined = function(t) {
            return arguments.length ? (i = t, e) : i
        }, e.interpolate = function(t) {
            return arguments.length ? (a = "function" == typeof t ? o = t : (o = El.get(t) || go).key, e) : a
        }, e.tension = function(t) {
            return arguments.length ? (s = t, e) : s
        }, e
    }

    function go(t) {
        return t.join("L")
    }

    function vo(t) {
        return go(t) + "Z"
    }

    function mo(t) {
        for (var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]]; ++e < n;) i.push("H", (r[0] + (r = t[e])[0]) / 2, "V", r[1]);
        return n > 1 && i.push("H", r[0]), i.join("")
    }

    function yo(t) {
        for (var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]]; ++e < n;) i.push("V", (r = t[e])[1], "H", r[0]);
        return i.join("")
    }

    function xo(t) {
        for (var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]]; ++e < n;) i.push("H", (r = t[e])[0], "V", r[1]);
        return i.join("")
    }

    function bo(t, e) {
        return t.length < 4 ? go(t) : t[1] + To(t.slice(1, -1), Co(t, e))
    }

    function _o(t, e) {
        return t.length < 3 ? go(t) : t[0] + To((t.push(t[0]), t), Co([t[t.length - 2]].concat(t, [t[1]]), e))
    }

    function wo(t, e) {
        return t.length < 3 ? go(t) : t[0] + To(t, Co(t, e))
    }

    function To(t, e) {
        if (e.length < 1 || t.length != e.length && t.length != e.length + 2) return go(t);
        var n = t.length != e.length,
            r = "",
            i = t[0],
            o = t[1],
            a = e[0],
            s = a,
            l = 1;
        if (n && (r += "Q" + (o[0] - 2 * a[0] / 3) + "," + (o[1] - 2 * a[1] / 3) + "," + o[0] + "," + o[1], i = t[1], l = 2), e.length > 1) {
            s = e[1], o = t[l], l++, r += "C" + (i[0] + a[0]) + "," + (i[1] + a[1]) + "," + (o[0] - s[0]) + "," + (o[1] - s[1]) + "," + o[0] + "," + o[1];
            for (var u = 2; u < e.length; u++, l++) o = t[l], s = e[u], r += "S" + (o[0] - s[0]) + "," + (o[1] - s[1]) + "," + o[0] + "," + o[1]
        }
        if (n) {
            var c = t[l];
            r += "Q" + (o[0] + 2 * s[0] / 3) + "," + (o[1] + 2 * s[1] / 3) + "," + c[0] + "," + c[1]
        }
        return r
    }

    function Co(t, e) {
        for (var n, r = [], i = (1 - e) / 2, o = t[0], a = t[1], s = 1, l = t.length; ++s < l;) n = o, o = a, a = t[s], r.push([i * (a[0] - n[0]), i * (a[1] - n[1])]);
        return r
    }

    function Mo(t) {
        if (t.length < 3) return go(t);
        var e = 1,
            n = t.length,
            r = t[0],
            i = r[0],
            o = r[1],
            a = [i, i, i, (r = t[1])[0]],
            s = [o, o, o, r[1]],
            l = [i, ",", o, "L", Eo(Il, a), ",", Eo(Il, s)];
        for (t.push(t[n - 1]); ++e <= n;) r = t[e], a.shift(), a.push(r[0]), s.shift(), s.push(r[1]), No(l, a, s);
        return t.pop(), l.push("L", r), l.join("")
    }

    function ko(t) {
        if (t.length < 4) return go(t);
        for (var e, n = [], r = -1, i = t.length, o = [0], a = [0]; ++r < 3;) e = t[r], o.push(e[0]), a.push(e[1]);
        for (n.push(Eo(Il, o) + "," + Eo(Il, a)), --r; ++r < i;) e = t[r], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), No(n, o, a);
        return n.join("")
    }

    function So(t) {
        for (var e, n, r = -1, i = t.length, o = i + 4, a = [], s = []; ++r < 4;) n = t[r % i], a.push(n[0]), s.push(n[1]);
        for (e = [Eo(Il, a), ",", Eo(Il, s)], --r; ++r < o;) n = t[r % i], a.shift(), a.push(n[0]), s.shift(), s.push(n[1]), No(e, a, s);
        return e.join("")
    }

    function Ao(t, e) {
        var n = t.length - 1;
        if (n)
            for (var r, i, o = t[0][0], a = t[0][1], s = t[n][0] - o, l = t[n][1] - a, u = -1; ++u <= n;) r = t[u], i = u / n, r[0] = e * r[0] + (1 - e) * (o + i * s), r[1] = e * r[1] + (1 - e) * (a + i * l);
        return Mo(t)
    }

    function Eo(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
    }

    function No(t, e, n) {
        t.push("C", Eo(Nl, e), ",", Eo(Nl, n), ",", Eo(Ll, e), ",", Eo(Ll, n), ",", Eo(Il, e), ",", Eo(Il, n))
    }

    function Lo(t, e) {
        return (e[1] - t[1]) / (e[0] - t[0])
    }

    function Io(t) {
        for (var e = 0, n = t.length - 1, r = [], i = t[0], o = t[1], a = r[0] = Lo(i, o); ++e < n;) r[e] = (a + (a = Lo(i = o, o = t[e + 1]))) / 2;
        return r[e] = a, r
    }

    function Po(t) {
        for (var e, n, r, i, o = [], a = Io(t), s = -1, l = t.length - 1; ++s < l;) e = Lo(t[s], t[s + 1]), da(e) < Ia ? a[s] = a[s + 1] = 0 : (n = a[s] / e, r = a[s + 1] / e, i = n * n + r * r, i > 9 && (i = 3 * e / Math.sqrt(i), a[s] = i * n, a[s + 1] = i * r));
        for (s = -1; ++s <= l;) i = (t[Math.min(l, s + 1)][0] - t[Math.max(0, s - 1)][0]) / (6 * (1 + a[s] * a[s])), o.push([i || 0, a[s] * i || 0]);
        return o
    }

    function Do(t) {
        return t.length < 3 ? go(t) : t[0] + To(t, Po(t))
    }

    function Fo(t) {
        for (var e, n, r, i = -1, o = t.length; ++i < o;) e = t[i], n = e[0], r = e[1] - $a, e[0] = n * Math.cos(r), e[1] = n * Math.sin(r);
        return t
    }

    function jo(t) {
        function e(e) {
            function l() {
                g.push("M", s(t(m), h), c, u(t(v.reverse()), h), "Z")
            }
            for (var p, f, d, g = [], v = [], m = [], y = -1, x = e.length, b = Mt(n), _ = Mt(i), w = n === r ? function() {
                    return f
                } : Mt(r), T = i === o ? function() {
                    return d
                } : Mt(o); ++y < x;) a.call(this, p = e[y], y) ? (v.push([f = +b.call(this, p, y), d = +_.call(this, p, y)]), m.push([+w.call(this, p, y), +T.call(this, p, y)])) : v.length && (l(), v = [], m = []);
            return v.length && l(), g.length ? g.join("") : null
        }
        var n = An,
            r = An,
            i = 0,
            o = En,
            a = Ae,
            s = go,
            l = s.key,
            u = s,
            c = "L",
            h = .7;
        return e.x = function(t) {
            return arguments.length ? (n = r = t, e) : r
        }, e.x0 = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.x1 = function(t) {
            return arguments.length ? (r = t, e) : r
        }, e.y = function(t) {
            return arguments.length ? (i = o = t, e) : o
        }, e.y0 = function(t) {
            return arguments.length ? (i = t, e) : i
        }, e.y1 = function(t) {
            return arguments.length ? (o = t, e) : o
        }, e.defined = function(t) {
            return arguments.length ? (a = t, e) : a
        }, e.interpolate = function(t) {
            return arguments.length ? (l = "function" == typeof t ? s = t : (s = El.get(t) || go).key, u = s.reverse || s, c = s.closed ? "M" : "L", e) : l
        }, e.tension = function(t) {
            return arguments.length ? (h = t, e) : h
        }, e
    }

    function $o(t) {
        return t.radius
    }

    function Ro(t) {
        return [t.x, t.y]
    }

    function zo(t) {
        return function() {
            var e = t.apply(this, arguments),
                n = e[0],
                r = e[1] - $a;
            return [n * Math.cos(r), n * Math.sin(r)]
        }
    }

    function Bo() {
        return 64
    }

    function qo() {
        return "circle"
    }

    function Oo(t) {
        var e = Math.sqrt(t / Da);
        return "M0," + e + "A" + e + "," + e + " 0 1,1 0," + -e + "A" + e + "," + e + " 0 1,1 0," + e + "Z"
    }

    function Ho(t) {
        return function() {
            var e, n;
            (e = this[t]) && (n = e[e.active]) && (--e.count ? delete e[e.active] : delete this[t], e.active += .5, n.event && n.event.interrupt.call(this, this.__data__, n.index))
        }
    }

    function Wo(t, e, n) {
        return xa(t, zl), t.namespace = e, t.id = n, t
    }

    function Uo(t, e, n, r) {
        var i = t.id,
            o = t.namespace;
        return B(t, "function" == typeof n ? function(t, a, s) {
            t[o][i].tween.set(e, r(n.call(t, t.__data__, a, s)))
        } : (n = r(n), function(t) {
            t[o][i].tween.set(e, n)
        }))
    }

    function Yo(t) {
        return null == t && (t = ""),
            function() {
                this.textContent = t
            }
    }

    function Vo(t) {
        return null == t ? "__transition__" : "__transition_" + t + "__"
    }

    function Go(t, e, n, r, i) {
        var o = t[n] || (t[n] = {
                active: 0,
                count: 0
            }),
            a = o[r];
        if (!a) {
            var l = i.time;
            a = o[r] = {
                tween: new s,
                time: l,
                delay: i.delay,
                duration: i.duration,
                ease: i.ease,
                index: e
            }, i = null, ++o.count, na.timer(function(i) {
                function s(n) {
                    if (o.active > r) return c();
                    var i = o[o.active];
                    i && (--o.count, delete o[o.active], i.event && i.event.interrupt.call(t, t.__data__, i.index)), o.active = r, a.event && a.event.start.call(t, t.__data__, e), a.tween.forEach(function(n, r) {
                        (r = r.call(t, t.__data__, e)) && g.push(r)
                    }), p = a.ease, h = a.duration, na.timer(function() {
                        return d.c = u(n || 1) ? Ae : u, 1
                    }, 0, l)
                }

                function u(n) {
                    if (o.active !== r) return 1;
                    for (var i = n / h, s = p(i), l = g.length; l > 0;) g[--l].call(t, s);
                    return i >= 1 ? (a.event && a.event.end.call(t, t.__data__, e), c()) : void 0
                }

                function c() {
                    return --o.count ? delete o[r] : delete t[n], 1
                }
                var h, p, f = a.delay,
                    d = os,
                    g = [];
                return d.t = f + l, i >= f ? s(i - f) : void(d.c = s)
            }, 0, l)
        }
    }

    function Xo(t, e, n) {
        t.attr("transform", function(t) {
            var r = e(t);
            return "translate(" + (isFinite(r) ? r : n(t)) + ",0)"
        })
    }

    function Jo(t, e, n) {
        t.attr("transform", function(t) {
            var r = e(t);
            return "translate(0," + (isFinite(r) ? r : n(t)) + ")"
        })
    }

    function Ko(t) {
        return t.toISOString()
    }

    function Zo(t, e, n) {
        function r(e) {
            return t(e)
        }

        function i(t, n) {
            var r = t[1] - t[0],
                i = r / n,
                o = na.bisect(Gl, i);
            return o == Gl.length ? [e.year, Yi(t.map(function(t) {
                return t / 31536e6
            }), n)[2]] : o ? e[i / Gl[o - 1] < Gl[o] / i ? o - 1 : o] : [Kl, Yi(t, n)[2]]
        }
        return r.invert = function(e) {
            return Qo(t.invert(e))
        }, r.domain = function(e) {
            return arguments.length ? (t.domain(e), r) : t.domain().map(Qo)
        }, r.nice = function(t, e) {
            function n(n) {
                return !isNaN(n) && !t.range(n, Qo(+n + 1), e).length
            }
            var o = r.domain(),
                a = $i(o),
                s = null == t ? i(a, 10) : "number" == typeof t && i(a, t);
            return s && (t = s[0], e = s[1]), r.domain(Bi(o, e > 1 ? {
                floor: function(e) {
                    for (; n(e = t.floor(e));) e = Qo(e - 1);
                    return e
                },
                ceil: function(e) {
                    for (; n(e = t.ceil(e));) e = Qo(+e + 1);
                    return e
                }
            } : t))
        }, r.ticks = function(t, e) {
            var n = $i(r.domain()),
                o = null == t ? i(n, 10) : "number" == typeof t ? i(n, t) : !t.range && [{
                    range: t
                }, e];
            return o && (t = o[0], e = o[1]), t.range(n[0], Qo(+n[1] + 1), 1 > e ? 1 : e)
        }, r.tickFormat = function() {
            return n
        }, r.copy = function() {
            return Zo(t.copy(), e, n)
        }, Wi(r, t)
    }

    function Qo(t) {
        return new Date(t)
    }

    function ta(t) {
        return JSON.parse(t.responseText)
    }

    function ea(t) {
        var e = oa.createRange();
        return e.selectNode(oa.body), e.createContextualFragment(t.responseText)
    }
    var na = {
        version: "3.5.3"
    };
    Date.now || (Date.now = function() {
        return +new Date
    });
    var ra = [].slice,
        ia = function(t) {
            return ra.call(t)
        },
        oa = document,
        aa = oa.documentElement,
        sa = window;
    try {
        ia(aa.childNodes)[0].nodeType
    } catch (t) {
        ia = function(t) {
            for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
            return n
        }
    }
    try {
        oa.createElement("div").style.setProperty("opacity", 0, "")
    } catch (t) {
        var la = sa.Element.prototype,
            ua = la.setAttribute,
            ca = la.setAttributeNS,
            ha = sa.CSSStyleDeclaration.prototype,
            pa = ha.setProperty;
        la.setAttribute = function(t, e) {
            ua.call(this, t, e + "")
        }, la.setAttributeNS = function(t, e, n) {
            ca.call(this, t, e, n + "")
        }, ha.setProperty = function(t, e, n) {
            pa.call(this, t, e + "", n)
        }
    }
    na.ascending = t, na.descending = function(t, e) {
        return t > e ? -1 : e > t ? 1 : e >= t ? 0 : NaN
    }, na.min = function(t, e) {
        var n, r, i = -1,
            o = t.length;
        if (1 === arguments.length) {
            for (; ++i < o;)
                if (null != (r = t[i]) && r >= r) {
                    n = r;
                    break
                }
            for (; ++i < o;) null != (r = t[i]) && n > r && (n = r)
        } else {
            for (; ++i < o;)
                if (null != (r = e.call(t, t[i], i)) && r >= r) {
                    n = r;
                    break
                }
            for (; ++i < o;) null != (r = e.call(t, t[i], i)) && n > r && (n = r)
        }
        return n
    }, na.max = function(t, e) {
        var n, r, i = -1,
            o = t.length;
        if (1 === arguments.length) {
            for (; ++i < o;)
                if (null != (r = t[i]) && r >= r) {
                    n = r;
                    break
                }
            for (; ++i < o;) null != (r = t[i]) && r > n && (n = r)
        } else {
            for (; ++i < o;)
                if (null != (r = e.call(t, t[i], i)) && r >= r) {
                    n = r;
                    break
                }
            for (; ++i < o;) null != (r = e.call(t, t[i], i)) && r > n && (n = r)
        }
        return n
    }, na.extent = function(t, e) {
        var n, r, i, o = -1,
            a = t.length;
        if (1 === arguments.length) {
            for (; ++o < a;)
                if (null != (r = t[o]) && r >= r) {
                    n = i = r;
                    break
                }
            for (; ++o < a;) null != (r = t[o]) && (n > r && (n = r), r > i && (i = r))
        } else {
            for (; ++o < a;)
                if (null != (r = e.call(t, t[o], o)) && r >= r) {
                    n = i = r;
                    break
                }
            for (; ++o < a;) null != (r = e.call(t, t[o], o)) && (n > r && (n = r), r > i && (i = r))
        }
        return [n, i]
    }, na.sum = function(t, e) {
        var r, i = 0,
            o = t.length,
            a = -1;
        if (1 === arguments.length)
            for (; ++a < o;) n(r = +t[a]) && (i += r);
        else
            for (; ++a < o;) n(r = +e.call(t, t[a], a)) && (i += r);
        return i
    }, na.mean = function(t, r) {
        var i, o = 0,
            a = t.length,
            s = -1,
            l = a;
        if (1 === arguments.length)
            for (; ++s < a;) n(i = e(t[s])) ? o += i : --l;
        else
            for (; ++s < a;) n(i = e(r.call(t, t[s], s))) ? o += i : --l;
        return l ? o / l : void 0
    }, na.quantile = function(t, e) {
        var n = (t.length - 1) * e + 1,
            r = Math.floor(n),
            i = +t[r - 1],
            o = n - r;
        return o ? i + o * (t[r] - i) : i
    }, na.median = function(r, i) {
        var o, a = [],
            s = r.length,
            l = -1;
        if (1 === arguments.length)
            for (; ++l < s;) n(o = e(r[l])) && a.push(o);
        else
            for (; ++l < s;) n(o = e(i.call(r, r[l], l))) && a.push(o);
        return a.length ? na.quantile(a.sort(t), .5) : void 0
    }, na.variance = function(t, r) {
        var i, o, a = t.length,
            s = 0,
            l = 0,
            u = -1,
            c = 0;
        if (1 === arguments.length)
            for (; ++u < a;) n(i = e(t[u])) && (o = i - s, s += o / ++c, l += o * (i - s));
        else
            for (; ++u < a;) n(i = e(r.call(t, t[u], u))) && (o = i - s, s += o / ++c, l += o * (i - s));
        return c > 1 ? l / (c - 1) : void 0
    }, na.deviation = function() {
        var t = na.variance.apply(this, arguments);
        return t ? Math.sqrt(t) : t
    };
    var fa = r(t);
    na.bisectLeft = fa.left, na.bisect = na.bisectRight = fa.right, na.bisector = function(e) {
        return r(1 === e.length ? function(n, r) {
            return t(e(n), r)
        } : e)
    }, na.shuffle = function(t, e, n) {
        (o = arguments.length) < 3 && (n = t.length, 2 > o && (e = 0));
        for (var r, i, o = n - e; o;) i = 0 | Math.random() * o--, r = t[o + e], t[o + e] = t[i + e], t[i + e] = r;
        return t
    }, na.permute = function(t, e) {
        for (var n = e.length, r = new Array(n); n--;) r[n] = t[e[n]];
        return r
    }, na.pairs = function(t) {
        for (var e, n = 0, r = t.length - 1, i = t[0], o = new Array(0 > r ? 0 : r); r > n;) o[n] = [e = i, i = t[++n]];
        return o
    }, na.zip = function() {
        if (!(r = arguments.length)) return [];
        for (var t = -1, e = na.min(arguments, i), n = new Array(e); ++t < e;)
            for (var r, o = -1, a = n[t] = new Array(r); ++o < r;) a[o] = arguments[o][t];
        return n
    }, na.transpose = function(t) {
        return na.zip.apply(na, t)
    }, na.keys = function(t) {
        var e = [];
        for (var n in t) e.push(n);
        return e
    }, na.values = function(t) {
        var e = [];
        for (var n in t) e.push(t[n]);
        return e
    }, na.entries = function(t) {
        var e = [];
        for (var n in t) e.push({
            key: n,
            value: t[n]
        });
        return e
    }, na.merge = function(t) {
        for (var e, n, r, i = t.length, o = -1, a = 0; ++o < i;) a += t[o].length;
        for (n = new Array(a); --i >= 0;)
            for (r = t[i], e = r.length; --e >= 0;) n[--a] = r[e];
        return n
    };
    var da = Math.abs;
    na.range = function(t, e, n) {
        if (arguments.length < 3 && (n = 1, arguments.length < 2 && (e = t, t = 0)), 1 / 0 === (e - t) / n) throw new Error("infinite range");
        var r, i = [],
            a = o(da(n)),
            s = -1;
        if (t *= a, e *= a, n *= a, 0 > n)
            for (;
                (r = t + n * ++s) > e;) i.push(r / a);
        else
            for (;
                (r = t + n * ++s) < e;) i.push(r / a);
        return i
    }, na.map = function(t, e) {
        var n = new s;
        if (t instanceof s) t.forEach(function(t, e) {
            n.set(t, e)
        });
        else if (Array.isArray(t)) {
            var r, i = -1,
                o = t.length;
            if (1 === arguments.length)
                for (; ++i < o;) n.set(i, t[i]);
            else
                for (; ++i < o;) n.set(e.call(t, r = t[i], i), r)
        } else
            for (var a in t) n.set(a, t[a]);
        return n
    };
    var ga = "__proto__",
        va = "\0";
    a(s, {
        has: c,
        get: function(t) {
            return this._[l(t)]
        },
        set: function(t, e) {
            return this._[l(t)] = e
        },
        remove: h,
        keys: p,
        values: function() {
            var t = [];
            for (var e in this._) t.push(this._[e]);
            return t
        },
        entries: function() {
            var t = [];
            for (var e in this._) t.push({
                key: u(e),
                value: this._[e]
            });
            return t
        },
        size: f,
        empty: d,
        forEach: function(t) {
            for (var e in this._) t.call(this, u(e), this._[e])
        }
    }), na.nest = function() {
        function t(e, a, l) {
            if (l >= o.length) return r ? r.call(i, a) : n ? a.sort(n) : a;
            for (var u, c, h, p, f = -1, d = a.length, g = o[l++], v = new s; ++f < d;)(p = v.get(u = g(c = a[f]))) ? p.push(c) : v.set(u, [c]);
            return e ? (c = e(), h = function(n, r) {
                c.set(n, t(e, r, l))
            }) : (c = {}, h = function(n, r) {
                c[n] = t(e, r, l)
            }), v.forEach(h), c
        }

        function e(t, n) {
            if (n >= o.length) return t;
            var r = [],
                i = a[n++];
            return t.forEach(function(t, i) {
                r.push({
                    key: t,
                    values: e(i, n)
                })
            }), i ? r.sort(function(t, e) {
                return i(t.key, e.key)
            }) : r
        }
        var n, r, i = {},
            o = [],
            a = [];
        return i.map = function(e, n) {
            return t(n, e, 0)
        }, i.entries = function(n) {
            return e(t(na.map, n, 0), 0)
        }, i.key = function(t) {
            return o.push(t), i
        }, i.sortKeys = function(t) {
            return a[o.length - 1] = t, i
        }, i.sortValues = function(t) {
            return n = t, i
        }, i.rollup = function(t) {
            return r = t, i
        }, i
    }, na.set = function(t) {
        var e = new g;
        if (t)
            for (var n = 0, r = t.length; r > n; ++n) e.add(t[n]);
        return e
    }, a(g, {
        has: c,
        add: function(t) {
            return this._[l(t += "")] = !0, t
        },
        remove: h,
        values: p,
        size: f,
        empty: d,
        forEach: function(t) {
            for (var e in this._) t.call(this, u(e))
        }
    }), na.behavior = {}, na.rebind = function(t, e) {
        for (var n, r = 1, i = arguments.length; ++r < i;) t[n = arguments[r]] = v(t, e, e[n]);
        return t
    };
    var ma = ["webkit", "ms", "moz", "Moz", "o", "O"];
    na.dispatch = function() {
        for (var t = new x, e = -1, n = arguments.length; ++e < n;) t[arguments[e]] = b(t);
        return t
    }, x.prototype.on = function(t, e) {
        var n = t.indexOf("."),
            r = "";
        if (n >= 0 && (r = t.slice(n + 1), t = t.slice(0, n)), t) return arguments.length < 2 ? this[t].on(r) : this[t].on(r, e);
        if (2 === arguments.length) {
            if (null == e)
                for (t in this) this.hasOwnProperty(t) && this[t].on(r, null);
            return this
        }
    }, na.event = null, na.requote = function(t) {
        return t.replace(ya, "\\$&")
    };
    var ya = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
        xa = {}.__proto__ ? function(t, e) {
            t.__proto__ = e
        } : function(t, e) {
            for (var n in e) t[n] = e[n]
        },
        ba = function(t, e) {
            return e.querySelector(t)
        },
        _a = function(t, e) {
            return e.querySelectorAll(t)
        },
        wa = aa.matches || aa[m(aa, "matchesSelector")],
        Ta = function(t, e) {
            return wa.call(t, e)
        };
    "function" == typeof Sizzle && (ba = function(t, e) {
        return Sizzle(t, e)[0] || null
    }, _a = Sizzle, Ta = Sizzle.matchesSelector), na.selection = function() {
        return Sa
    };
    var Ca = na.selection.prototype = [];
    Ca.select = function(t) {
        var e, n, r, i, o = [];
        t = M(t);
        for (var a = -1, s = this.length; ++a < s;) {
            o.push(e = []), e.parentNode = (r = this[a]).parentNode;
            for (var l = -1, u = r.length; ++l < u;)(i = r[l]) ? (e.push(n = t.call(i, i.__data__, l, a)), n && "__data__" in i && (n.__data__ = i.__data__)) : e.push(null)
        }
        return C(o)
    }, Ca.selectAll = function(t) {
        var e, n, r = [];
        t = k(t);
        for (var i = -1, o = this.length; ++i < o;)
            for (var a = this[i], s = -1, l = a.length; ++s < l;)(n = a[s]) && (r.push(e = ia(t.call(n, n.__data__, s, i))), e.parentNode = n);
        return C(r)
    };
    var Ma = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    na.ns = {
        prefix: Ma,
        qualify: function(t) {
            var e = t.indexOf(":"),
                n = t;
            return e >= 0 && (n = t.slice(0, e), t = t.slice(e + 1)), Ma.hasOwnProperty(n) ? {
                space: Ma[n],
                local: t
            } : t
        }
    }, Ca.attr = function(t, e) {
        if (arguments.length < 2) {
            if ("string" == typeof t) {
                var n = this.node();
                return t = na.ns.qualify(t), t.local ? n.getAttributeNS(t.space, t.local) : n.getAttribute(t)
            }
            for (e in t) this.each(S(e, t[e]));
            return this
        }
        return this.each(S(t, e))
    }, Ca.classed = function(t, e) {
        if (arguments.length < 2) {
            if ("string" == typeof t) {
                var n = this.node(),
                    r = (t = N(t)).length,
                    i = -1;
                if (e = n.classList) {
                    for (; ++i < r;)
                        if (!e.contains(t[i])) return !1
                } else
                    for (e = n.getAttribute("class"); ++i < r;)
                        if (!E(t[i]).test(e)) return !1; return !0
            }
            for (e in t) this.each(L(e, t[e]));
            return this
        }
        return this.each(L(t, e))
    }, Ca.style = function(t, e, n) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof t) {
                2 > r && (e = "");
                for (n in t) this.each(P(n, t[n], e));
                return this
            }
            if (2 > r) return sa.getComputedStyle(this.node(), null).getPropertyValue(t);
            n = ""
        }
        return this.each(P(t, e, n))
    }, Ca.property = function(t, e) {
        if (arguments.length < 2) {
            if ("string" == typeof t) return this.node()[t];
            for (e in t) this.each(D(e, t[e]));
            return this
        }
        return this.each(D(t, e))
    }, Ca.text = function(t) {
        return arguments.length ? this.each("function" == typeof t ? function() {
            var e = t.apply(this, arguments);
            this.textContent = null == e ? "" : e
        } : null == t ? function() {
            this.textContent = ""
        } : function() {
            this.textContent = t
        }) : this.node().textContent
    }, Ca.html = function(t) {
        return arguments.length ? this.each("function" == typeof t ? function() {
            var e = t.apply(this, arguments);
            this.innerHTML = null == e ? "" : e
        } : null == t ? function() {
            this.innerHTML = ""
        } : function() {
            this.innerHTML = t
        }) : this.node().innerHTML
    }, Ca.append = function(t) {
        return t = F(t), this.select(function() {
            return this.appendChild(t.apply(this, arguments))
        })
    }, Ca.insert = function(t, e) {
        return t = F(t), e = M(e), this.select(function() {
            return this.insertBefore(t.apply(this, arguments), e.apply(this, arguments) || null)
        })
    }, Ca.remove = function() {
        return this.each(j)
    }, Ca.data = function(t, e) {
        function n(t, n) {
            var r, i, o, a = t.length,
                h = n.length,
                p = Math.min(a, h),
                f = new Array(h),
                d = new Array(h),
                g = new Array(a);
            if (e) {
                var v, m = new s,
                    y = new Array(a);
                for (r = -1; ++r < a;) m.has(v = e.call(i = t[r], i.__data__, r)) ? g[r] = i : m.set(v, i), y[r] = v;
                for (r = -1; ++r < h;)(i = m.get(v = e.call(n, o = n[r], r))) ? i !== !0 && (f[r] = i, i.__data__ = o) : d[r] = $(o), m.set(v, !0);
                for (r = -1; ++r < a;) m.get(y[r]) !== !0 && (g[r] = t[r])
            } else {
                for (r = -1; ++r < p;) i = t[r], o = n[r], i ? (i.__data__ = o, f[r] = i) : d[r] = $(o);
                for (; h > r; ++r) d[r] = $(n[r]);
                for (; a > r; ++r) g[r] = t[r]
            }
            d.update = f, d.parentNode = f.parentNode = g.parentNode = t.parentNode, l.push(d), u.push(f), c.push(g)
        }
        var r, i, o = -1,
            a = this.length;
        if (!arguments.length) {
            for (t = new Array(a = (r = this[0]).length); ++o < a;)(i = r[o]) && (t[o] = i.__data__);
            return t
        }
        var l = q([]),
            u = C([]),
            c = C([]);
        if ("function" == typeof t)
            for (; ++o < a;) n(r = this[o], t.call(r, r.parentNode.__data__, o));
        else
            for (; ++o < a;) n(r = this[o], t);
        return u.enter = function() {
            return l
        }, u.exit = function() {
            return c
        }, u
    }, Ca.datum = function(t) {
        return arguments.length ? this.property("__data__", t) : this.property("__data__")
    }, Ca.filter = function(t) {
        var e, n, r, i = [];
        "function" != typeof t && (t = R(t));
        for (var o = 0, a = this.length; a > o; o++) {
            i.push(e = []), e.parentNode = (n = this[o]).parentNode;
            for (var s = 0, l = n.length; l > s; s++)(r = n[s]) && t.call(r, r.__data__, s, o) && e.push(r)
        }
        return C(i)
    }, Ca.order = function() {
        for (var t = -1, e = this.length; ++t < e;)
            for (var n, r = this[t], i = r.length - 1, o = r[i]; --i >= 0;)(n = r[i]) && (o && o !== n.nextSibling && o.parentNode.insertBefore(n, o), o = n);
        return this
    }, Ca.sort = function(t) {
        t = z.apply(this, arguments);
        for (var e = -1, n = this.length; ++e < n;) this[e].sort(t);
        return this.order()
    }, Ca.each = function(t) {
        return B(this, function(e, n, r) {
            t.call(e, e.__data__, n, r)
        })
    }, Ca.call = function(t) {
        var e = ia(arguments);
        return t.apply(e[0] = this, e), this
    }, Ca.empty = function() {
        return !this.node()
    }, Ca.node = function() {
        for (var t = 0, e = this.length; e > t; t++)
            for (var n = this[t], r = 0, i = n.length; i > r; r++) {
                var o = n[r];
                if (o) return o
            }
        return null
    }, Ca.size = function() {
        var t = 0;
        return B(this, function() {
            ++t
        }), t
    };
    var ka = [];
    na.selection.enter = q, na.selection.enter.prototype = ka, ka.append = Ca.append, ka.empty = Ca.empty, ka.node = Ca.node, ka.call = Ca.call, ka.size = Ca.size, ka.select = function(t) {
        for (var e, n, r, i, o, a = [], s = -1, l = this.length; ++s < l;) {
            r = (i = this[s]).update, a.push(e = []), e.parentNode = i.parentNode;
            for (var u = -1, c = i.length; ++u < c;)(o = i[u]) ? (e.push(r[u] = n = t.call(i.parentNode, o.__data__, u, s)), n.__data__ = o.__data__) : e.push(null)
        }
        return C(a)
    }, ka.insert = function(t, e) {
        return arguments.length < 2 && (e = O(this)), Ca.insert.call(this, t, e)
    }, na.select = function(t) {
        var e = ["string" == typeof t ? ba(t, oa) : t];
        return e.parentNode = aa, C([e])
    }, na.selectAll = function(t) {
        var e = ia("string" == typeof t ? _a(t, oa) : t);
        return e.parentNode = aa, C([e])
    };
    var Sa = na.select(aa);
    Ca.on = function(t, e, n) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof t) {
                2 > r && (e = !1);
                for (n in t) this.each(H(n, t[n], e));
                return this
            }
            if (2 > r) return (r = this.node()["__on" + t]) && r._;
            n = !1
        }
        return this.each(H(t, e, n))
    };
    var Aa = na.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    Aa.forEach(function(t) {
        "on" + t in oa && Aa.remove(t)
    });
    var Ea = "onselectstart" in oa ? null : m(aa.style, "userSelect"),
        Na = 0;
    na.mouse = function(t) {
        return V(t, w())
    };
    var La = /WebKit/.test(sa.navigator.userAgent) ? -1 : 0;
    na.touch = function(t, e, n) {
        if (arguments.length < 3 && (n = e, e = w().changedTouches), e)
            for (var r, i = 0, o = e.length; o > i; ++i)
                if ((r = e[i]).identifier === n) return V(t, r)
    }, na.behavior.drag = function() {
        function t() {
            this.on("mousedown.drag", i).on("touchstart.drag", o)
        }

        function e(t, e, i, o, a) {
            return function() {
                function s() {
                    var t, n, r = e(p, g);
                    r && (t = r[0] - x[0], n = r[1] - x[1], d |= t | n, x = r, f({
                        type: "drag",
                        x: r[0] + u[0],
                        y: r[1] + u[1],
                        dx: t,
                        dy: n
                    }))
                }

                function l() {
                    e(p, g) && (m.on(o + v, null).on(a + v, null), y(d && na.event.target === h), f({
                        type: "dragend"
                    }))
                }
                var u, c = this,
                    h = na.event.target,
                    p = c.parentNode,
                    f = n.of(c, arguments),
                    d = 0,
                    g = t(),
                    v = ".drag" + (null == g ? "" : "-" + g),
                    m = na.select(i()).on(o + v, s).on(a + v, l),
                    y = Y(),
                    x = e(p, g);
                r ? (u = r.apply(c, arguments), u = [u.x - x[0], u.y - x[1]]) : u = [0, 0], f({
                    type: "dragstart"
                })
            }
        }
        var n = T(t, "drag", "dragstart", "dragend"),
            r = null,
            i = e(y, na.mouse, J, "mousemove", "mouseup"),
            o = e(G, na.touch, X, "touchmove", "touchend");
        return t.origin = function(e) {
            return arguments.length ? (r = e, t) : r
        }, na.rebind(t, n, "on")
    }, na.touches = function(t, e) {
        return arguments.length < 2 && (e = w().touches), e ? ia(e).map(function(e) {
            var n = V(t, e);
            return n.identifier = e.identifier, n
        }) : []
    };
    var Ia = 1e-6,
        Pa = Ia * Ia,
        Da = Math.PI,
        Fa = 2 * Da,
        ja = Fa - Ia,
        $a = Da / 2,
        Ra = Da / 180,
        za = 180 / Da,
        Ba = Math.SQRT2,
        qa = 2,
        Oa = 4;
    na.interpolateZoom = function(t, e) {
        function n(t) {
            var e = t * y;
            if (m) {
                var n = nt(g),
                    a = o / (qa * p) * (n * rt(Ba * e + g) - et(g));
                return [r + a * u, i + a * c, o * n / nt(Ba * e + g)]
            }
            return [r + t * u, i + t * c, o * Math.exp(Ba * e)]
        }
        var r = t[0],
            i = t[1],
            o = t[2],
            a = e[0],
            s = e[1],
            l = e[2],
            u = a - r,
            c = s - i,
            h = u * u + c * c,
            p = Math.sqrt(h),
            f = (l * l - o * o + Oa * h) / (2 * o * qa * p),
            d = (l * l - o * o - Oa * h) / (2 * l * qa * p),
            g = Math.log(Math.sqrt(f * f + 1) - f),
            v = Math.log(Math.sqrt(d * d + 1) - d),
            m = v - g,
            y = (m || Math.log(l / o)) / Ba;
        return n.duration = 1e3 * y, n
    }, na.behavior.zoom = function() {
        function t(t) {
            t.on(N, c).on(Ua + ".zoom", p).on("dblclick.zoom", f).on(P, h)
        }

        function e(t) {
            return [(t[0] - M.x) / M.k, (t[1] - M.y) / M.k]
        }

        function n(t) {
            return [t[0] * M.k + M.x, t[1] * M.k + M.y]
        }

        function r(t) {
            M.k = Math.max(S[0], Math.min(S[1], t))
        }

        function i(t, e) {
            e = n(e), M.x += t[0] - e[0], M.y += t[1] - e[1]
        }

        function o(e, n, o, a) {
            e.__chart__ = {
                x: M.x,
                y: M.y,
                k: M.k
            }, r(Math.pow(2, a)), i(g = n, o), e = na.select(e), A > 0 && (e = e.transition().duration(A)), e.call(t.event)
        }

        function a() {
            b && b.domain(x.range().map(function(t) {
                return (t - M.x) / M.k
            }).map(x.invert)), C && C.domain(w.range().map(function(t) {
                return (t - M.y) / M.k
            }).map(w.invert))
        }

        function s(t) {
            E++ || t({
                type: "zoomstart"
            })
        }

        function l(t) {
            a(), t({
                type: "zoom",
                scale: M.k,
                translate: [M.x, M.y]
            })
        }

        function u(t) {
            --E || t({
                type: "zoomend"
            }), g = null
        }

        function c() {
            function t() {
                c = 1, i(na.mouse(r), p), l(a)
            }

            function n() {
                h.on(L, null).on(I, null), f(c && na.event.target === o), u(a)
            }
            var r = this,
                o = na.event.target,
                a = D.of(r, arguments),
                c = 0,
                h = na.select(sa).on(L, t).on(I, n),
                p = e(na.mouse(r)),
                f = Y();
            Rl.call(r), s(a)
        }

        function h() {
            function t() {
                var t = na.touches(d);
                return f = M.k, t.forEach(function(t) {
                    t.identifier in v && (v[t.identifier] = e(t))
                }), t
            }

            function n() {
                var e = na.event.target;
                na.select(e).on(b, a).on(w, p), T.push(e);
                for (var n = na.event.changedTouches, r = 0, i = n.length; i > r; ++r) v[n[r].identifier] = null;
                var s = t(),
                    l = Date.now();
                if (1 === s.length) {
                    if (500 > l - y) {
                        var u = s[0];
                        o(d, u, v[u.identifier], Math.floor(Math.log(M.k) / Math.LN2) + 1), _()
                    }
                    y = l
                } else if (s.length > 1) {
                    var u = s[0],
                        c = s[1],
                        h = u[0] - c[0],
                        f = u[1] - c[1];
                    m = h * h + f * f
                }
            }

            function a() {
                var t, e, n, o, a = na.touches(d);
                Rl.call(d);
                for (var s = 0, u = a.length; u > s; ++s, o = null)
                    if (n = a[s], o = v[n.identifier]) {
                        if (e) break;
                        t = n, e = o
                    }
                if (o) {
                    var c = (c = n[0] - t[0]) * c + (c = n[1] - t[1]) * c,
                        h = m && Math.sqrt(c / m);
                    t = [(t[0] + n[0]) / 2, (t[1] + n[1]) / 2], e = [(e[0] + o[0]) / 2, (e[1] + o[1]) / 2], r(h * f)
                }
                y = null, i(t, e), l(g)
            }

            function p() {
                if (na.event.touches.length) {
                    for (var e = na.event.changedTouches, n = 0, r = e.length; r > n; ++n) delete v[e[n].identifier];
                    for (var i in v) return void t()
                }
                na.selectAll(T).on(x, null), C.on(N, c).on(P, h), k(), u(g)
            }
            var f, d = this,
                g = D.of(d, arguments),
                v = {},
                m = 0,
                x = ".zoom-" + na.event.changedTouches[0].identifier,
                b = "touchmove" + x,
                w = "touchend" + x,
                T = [],
                C = na.select(d),
                k = Y();
            n(), s(g), C.on(N, null).on(P, n)
        }

        function p() {
            var t = D.of(this, arguments);
            m ? clearTimeout(m) : (d = e(g = v || na.mouse(this)), Rl.call(this), s(t)), m = setTimeout(function() {
                m = null, u(t)
            }, 50), _(), r(Math.pow(2, .002 * Ha()) * M.k), i(g, d), l(t)
        }

        function f() {
            var t = na.mouse(this),
                n = Math.log(M.k) / Math.LN2;
            o(this, t, e(t), na.event.shiftKey ? Math.ceil(n) - 1 : Math.floor(n) + 1)
        }
        var d, g, v, m, y, x, b, w, C, M = {
                x: 0,
                y: 0,
                k: 1
            },
            k = [960, 500],
            S = Wa,
            A = 250,
            E = 0,
            N = "mousedown.zoom",
            L = "mousemove.zoom",
            I = "mouseup.zoom",
            P = "touchstart.zoom",
            D = T(t, "zoomstart", "zoom", "zoomend");
        return t.event = function(t) {
            t.each(function() {
                var t = D.of(this, arguments),
                    e = M;
                jl ? na.select(this).transition().each("start.zoom", function() {
                    M = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    }, s(t)
                }).tween("zoom:zoom", function() {
                    var n = k[0],
                        r = k[1],
                        i = g ? g[0] : n / 2,
                        o = g ? g[1] : r / 2,
                        a = na.interpolateZoom([(i - M.x) / M.k, (o - M.y) / M.k, n / M.k], [(i - e.x) / e.k, (o - e.y) / e.k, n / e.k]);
                    return function(e) {
                        var r = a(e),
                            s = n / r[2];
                        this.__chart__ = M = {
                            x: i - r[0] * s,
                            y: o - r[1] * s,
                            k: s
                        }, l(t)
                    }
                }).each("interrupt.zoom", function() {
                    u(t)
                }).each("end.zoom", function() {
                    u(t)
                }) : (this.__chart__ = M, s(t), l(t), u(t))
            })
        }, t.translate = function(e) {
            return arguments.length ? (M = {
                x: +e[0],
                y: +e[1],
                k: M.k
            }, a(), t) : [M.x, M.y]
        }, t.scale = function(e) {
            return arguments.length ? (M = {
                x: M.x,
                y: M.y,
                k: +e
            }, a(), t) : M.k
        }, t.scaleExtent = function(e) {
            return arguments.length ? (S = null == e ? Wa : [+e[0], +e[1]], t) : S
        }, t.center = function(e) {
            return arguments.length ? (v = e && [+e[0], +e[1]], t) : v
        }, t.size = function(e) {
            return arguments.length ? (k = e && [+e[0], +e[1]], t) : k
        }, t.duration = function(e) {
            return arguments.length ? (A = +e, t) : A
        }, t.x = function(e) {
            return arguments.length ? (b = e, x = e.copy(), M = {
                x: 0,
                y: 0,
                k: 1
            }, t) : b
        }, t.y = function(e) {
            return arguments.length ? (C = e, w = e.copy(), M = {
                x: 0,
                y: 0,
                k: 1
            }, t) : C
        }, na.rebind(t, D, "on")
    };
    var Ha, Wa = [0, 1 / 0],
        Ua = "onwheel" in oa ? (Ha = function() {
            return -na.event.deltaY * (na.event.deltaMode ? 120 : 1)
        }, "wheel") : "onmousewheel" in oa ? (Ha = function() {
            return na.event.wheelDelta
        }, "mousewheel") : (Ha = function() {
            return -na.event.detail
        }, "MozMousePixelScroll");
    na.color = ot, ot.prototype.toString = function() {
        return this.rgb() + ""
    }, na.hsl = at;
    var Ya = at.prototype = new ot;
    Ya.brighter = function(t) {
        return t = Math.pow(.7, arguments.length ? t : 1), new at(this.h, this.s, this.l / t)
    }, Ya.darker = function(t) {
        return t = Math.pow(.7, arguments.length ? t : 1), new at(this.h, this.s, t * this.l)
    }, Ya.rgb = function() {
        return st(this.h, this.s, this.l)
    }, na.hcl = lt;
    var Va = lt.prototype = new ot;
    Va.brighter = function(t) {
        return new lt(this.h, this.c, Math.min(100, this.l + Ga * (arguments.length ? t : 1)))
    }, Va.darker = function(t) {
        return new lt(this.h, this.c, Math.max(0, this.l - Ga * (arguments.length ? t : 1)))
    }, Va.rgb = function() {
        return ut(this.h, this.c, this.l).rgb()
    }, na.lab = ct;
    var Ga = 18,
        Xa = .95047,
        Ja = 1,
        Ka = 1.08883,
        Za = ct.prototype = new ot;
    Za.brighter = function(t) {
        return new ct(Math.min(100, this.l + Ga * (arguments.length ? t : 1)), this.a, this.b)
    }, Za.darker = function(t) {
        return new ct(Math.max(0, this.l - Ga * (arguments.length ? t : 1)), this.a, this.b)
    }, Za.rgb = function() {
        return ht(this.l, this.a, this.b)
    }, na.rgb = vt;
    var Qa = vt.prototype = new ot;
    Qa.brighter = function(t) {
        t = Math.pow(.7, arguments.length ? t : 1);
        var e = this.r,
            n = this.g,
            r = this.b,
            i = 30;
        return e || n || r ? (e && i > e && (e = i), n && i > n && (n = i), r && i > r && (r = i), new vt(Math.min(255, e / t), Math.min(255, n / t), Math.min(255, r / t))) : new vt(i, i, i)
    }, Qa.darker = function(t) {
        return t = Math.pow(.7, arguments.length ? t : 1), new vt(t * this.r, t * this.g, t * this.b)
    }, Qa.hsl = function() {
        return _t(this.r, this.g, this.b)
    }, Qa.toString = function() {
        return "#" + xt(this.r) + xt(this.g) + xt(this.b)
    };
    var ts = na.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    ts.forEach(function(t, e) {
        ts.set(t, mt(e))
    }), na.functor = Mt, na.xhr = St(kt), na.dsv = function(t, e) {
        function n(t, n, o) {
            arguments.length < 3 && (o = n, n = null);
            var a = At(t, e, null == n ? r : i(n), o);
            return a.row = function(t) {
                return arguments.length ? a.response(null == (n = t) ? r : i(t)) : n
            }, a
        }

        function r(t) {
            return n.parse(t.responseText)
        }

        function i(t) {
            return function(e) {
                return n.parse(e.responseText, t)
            }
        }

        function o(e) {
            return e.map(a).join(t)
        }

        function a(t) {
            return s.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
        }
        var s = new RegExp('["' + t + "\n]"),
            l = t.charCodeAt(0);
        return n.parse = function(t, e) {
            var r;
            return n.parseRows(t, function(t, n) {
                if (r) return r(t, n - 1);
                var i = new Function("d", "return {" + t.map(function(t, e) {
                    return JSON.stringify(t) + ": d[" + e + "]"
                }).join(",") + "}");
                r = e ? function(t, n) {
                    return e(i(t), n)
                } : i
            })
        }, n.parseRows = function(t, e) {
            function n() {
                if (c >= u) return a;
                if (i) return i = !1, o;
                var e = c;
                if (34 === t.charCodeAt(e)) {
                    for (var n = e; n++ < u;)
                        if (34 === t.charCodeAt(n)) {
                            if (34 !== t.charCodeAt(n + 1)) break;
                            ++n
                        }
                    c = n + 2;
                    var r = t.charCodeAt(n + 1);
                    return 13 === r ? (i = !0, 10 === t.charCodeAt(n + 2) && ++c) : 10 === r && (i = !0), t.slice(e + 1, n).replace(/""/g, '"')
                }
                for (; u > c;) {
                    var r = t.charCodeAt(c++),
                        s = 1;
                    if (10 === r) i = !0;
                    else if (13 === r) i = !0, 10 === t.charCodeAt(c) && (++c, ++s);
                    else if (r !== l) continue;
                    return t.slice(e, c - s)
                }
                return t.slice(e)
            }
            for (var r, i, o = {}, a = {}, s = [], u = t.length, c = 0, h = 0;
                (r = n()) !== a;) {
                for (var p = []; r !== o && r !== a;) p.push(r), r = n();
                e && null == (p = e(p, h++)) || s.push(p)
            }
            return s
        }, n.format = function(e) {
            if (Array.isArray(e[0])) return n.formatRows(e);
            var r = new g,
                i = [];
            return e.forEach(function(t) {
                for (var e in t) r.has(e) || i.push(r.add(e))
            }), [i.map(a).join(t)].concat(e.map(function(e) {
                return i.map(function(t) {
                    return a(e[t])
                }).join(t)
            })).join("\n")
        }, n.formatRows = function(t) {
            return t.map(o).join("\n")
        }, n
    }, na.csv = na.dsv(",", "text/csv"), na.tsv = na.dsv("\t", "text/tab-separated-values");
    var es, ns, rs, is, os, as = sa[m(sa, "requestAnimationFrame")] || function(t) {
        setTimeout(t, 17)
    };
    na.timer = function(t, e, n) {
        var r = arguments.length;
        2 > r && (e = 0), 3 > r && (n = Date.now());
        var i = n + e,
            o = {
                c: t,
                t: i,
                f: !1,
                n: null
            };
        ns ? ns.n = o : es = o, ns = o, rs || (is = clearTimeout(is), rs = 1, as(Lt))
    }, na.timer.flush = function() {
        It(), Pt()
    }, na.round = function(t, e) {
        return e ? Math.round(t * (e = Math.pow(10, e))) / e : Math.round(t)
    };
    var ss = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Ft);
    na.formatPrefix = function(t, e) {
        var n = 0;
        return t && (0 > t && (t *= -1), e && (t = na.round(t, Dt(t, e))), n = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), n = Math.max(-24, Math.min(24, 3 * Math.floor((n - 1) / 3)))), ss[8 + n / 3]
    };
    var ls = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
        us = na.map({
            b: function(t) {
                return t.toString(2)
            },
            c: function(t) {
                return String.fromCharCode(t)
            },
            o: function(t) {
                return t.toString(8)
            },
            x: function(t) {
                return t.toString(16)
            },
            X: function(t) {
                return t.toString(16).toUpperCase()
            },
            g: function(t, e) {
                return t.toPrecision(e)
            },
            e: function(t, e) {
                return t.toExponential(e)
            },
            f: function(t, e) {
                return t.toFixed(e)
            },
            r: function(t, e) {
                return (t = na.round(t, Dt(t, e))).toFixed(Math.max(0, Math.min(20, Dt(t * (1 + 1e-15), e))))
            }
        }),
        cs = na.time = {},
        hs = Date;
    Rt.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            ps.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            ps.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            ps.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            ps.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            ps.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            ps.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            ps.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            ps.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            ps.setTime.apply(this._, arguments)
        }
    };
    var ps = Date.prototype;
    cs.year = zt(function(t) {
        return t = cs.day(t), t.setMonth(0, 1), t
    }, function(t, e) {
        t.setFullYear(t.getFullYear() + e)
    }, function(t) {
        return t.getFullYear()
    }), cs.years = cs.year.range, cs.years.utc = cs.year.utc.range, cs.day = zt(function(t) {
        var e = new hs(2e3, 0);
        return e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), e
    }, function(t, e) {
        t.setDate(t.getDate() + e)
    }, function(t) {
        return t.getDate() - 1
    }), cs.days = cs.day.range, cs.days.utc = cs.day.utc.range, cs.dayOfYear = function(t) {
        var e = cs.year(t);
        return Math.floor((t - e - 6e4 * (t.getTimezoneOffset() - e.getTimezoneOffset())) / 864e5)
    }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(t, e) {
        e = 7 - e;
        var n = cs[t] = zt(function(t) {
            return (t = cs.day(t)).setDate(t.getDate() - (t.getDay() + e) % 7), t
        }, function(t, e) {
            t.setDate(t.getDate() + 7 * Math.floor(e))
        }, function(t) {
            var n = cs.year(t).getDay();
            return Math.floor((cs.dayOfYear(t) + (n + e) % 7) / 7) - (n !== e)
        });
        cs[t + "s"] = n.range, cs[t + "s"].utc = n.utc.range, cs[t + "OfYear"] = function(t) {
            var n = cs.year(t).getDay();
            return Math.floor((cs.dayOfYear(t) + (n + e) % 7) / 7)
        }
    }), cs.week = cs.sunday, cs.weeks = cs.sunday.range, cs.weeks.utc = cs.sunday.utc.range, cs.weekOfYear = cs.sundayOfYear;
    var fs = {
            "-": "",
            _: " ",
            0: "0"
        },
        ds = /^\s*\d+/,
        gs = /^%/;
    na.locale = function(t) {
        return {
            numberFormat: jt(t),
            timeFormat: qt(t)
        }
    };
    var vs = na.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    na.format = vs.numberFormat, na.geo = {}, le.prototype = {
        s: 0,
        t: 0,
        add: function(t) {
            ue(t, this.t, ms), ue(ms.s, this.s, this), this.s ? this.t += ms.t : this.s = ms.t
        },
        reset: function() {
            this.s = this.t = 0
        },
        valueOf: function() {
            return this.s
        }
    };
    var ms = new le;
    na.geo.stream = function(t, e) {
        t && ys.hasOwnProperty(t.type) ? ys[t.type](t, e) : ce(t, e)
    };
    var ys = {
            Feature: function(t, e) {
                ce(t.geometry, e)
            },
            FeatureCollection: function(t, e) {
                for (var n = t.features, r = -1, i = n.length; ++r < i;) ce(n[r].geometry, e)
            }
        },
        xs = {
            Sphere: function(t, e) {
                e.sphere()
            },
            Point: function(t, e) {
                t = t.coordinates, e.point(t[0], t[1], t[2])
            },
            MultiPoint: function(t, e) {
                for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) t = n[r], e.point(t[0], t[1], t[2])
            },
            LineString: function(t, e) {
                he(t.coordinates, e, 0)
            },
            MultiLineString: function(t, e) {
                for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) he(n[r], e, 0)
            },
            Polygon: function(t, e) {
                pe(t.coordinates, e)
            },
            MultiPolygon: function(t, e) {
                for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) pe(n[r], e)
            },
            GeometryCollection: function(t, e) {
                for (var n = t.geometries, r = -1, i = n.length; ++r < i;) ce(n[r], e)
            }
        };
    na.geo.area = function(t) {
        return bs = 0, na.geo.stream(t, ws), bs
    };
    var bs, _s = new le,
        ws = {
            sphere: function() {
                bs += 4 * Da
            },
            point: y,
            lineStart: y,
            lineEnd: y,
            polygonStart: function() {
                _s.reset(), ws.lineStart = fe
            },
            polygonEnd: function() {
                var t = 2 * _s;
                bs += 0 > t ? 4 * Da + t : t, ws.lineStart = ws.lineEnd = ws.point = y
            }
        };
    na.geo.bounds = function() {
        function t(t, e) {
            x.push(b = [c = t, p = t]), h > e && (h = e), e > f && (f = e)
        }

        function e(e, n) {
            var r = de([e * Ra, n * Ra]);
            if (m) {
                var i = ve(m, r),
                    o = [i[1], -i[0], 0],
                    a = ve(o, i);
                xe(a), a = be(a);
                var l = e - d,
                    u = l > 0 ? 1 : -1,
                    g = a[0] * za * u,
                    v = da(l) > 180;
                if (v ^ (g > u * d && u * e > g)) {
                    var y = a[1] * za;
                    y > f && (f = y)
                } else if (g = (g + 360) % 360 - 180, v ^ (g > u * d && u * e > g)) {
                    var y = -a[1] * za;
                    h > y && (h = y)
                } else h > n && (h = n), n > f && (f = n);
                v ? d > e ? s(c, e) > s(c, p) && (p = e) : s(e, p) > s(c, p) && (c = e) : p >= c ? (c > e && (c = e), e > p && (p = e)) : e > d ? s(c, e) > s(c, p) && (p = e) : s(e, p) > s(c, p) && (c = e)
            } else t(e, n);
            m = r, d = e
        }

        function n() {
            _.point = e
        }

        function r() {
            b[0] = c, b[1] = p, _.point = t, m = null
        }

        function i(t, n) {
            if (m) {
                var r = t - d;
                y += da(r) > 180 ? r + (r > 0 ? 360 : -360) : r
            } else g = t, v = n;
            ws.point(t, n), e(t, n)
        }

        function o() {
            ws.lineStart()
        }

        function a() {
            i(g, v), ws.lineEnd(), da(y) > Ia && (c = -(p = 180)), b[0] = c, b[1] = p, m = null
        }

        function s(t, e) {
            return (e -= t) < 0 ? e + 360 : e
        }

        function l(t, e) {
            return t[0] - e[0]
        }

        function u(t, e) {
            return e[0] <= e[1] ? e[0] <= t && t <= e[1] : t < e[0] || e[1] < t
        }
        var c, h, p, f, d, g, v, m, y, x, b, _ = {
            point: t,
            lineStart: n,
            lineEnd: r,
            polygonStart: function() {
                _.point = i, _.lineStart = o, _.lineEnd = a, y = 0, ws.polygonStart()
            },
            polygonEnd: function() {
                ws.polygonEnd(), _.point = t, _.lineStart = n, _.lineEnd = r, 0 > _s ? (c = -(p = 180), h = -(f = 90)) : y > Ia ? f = 90 : -Ia > y && (h = -90), b[0] = c, b[1] = p
            }
        };
        return function(t) {
            f = p = -(c = h = 1 / 0), x = [], na.geo.stream(t, _);
            var e = x.length;
            if (e) {
                x.sort(l);
                for (var n, r = 1, i = x[0], o = [i]; e > r; ++r) n = x[r], u(n[0], i) || u(n[1], i) ? (s(i[0], n[1]) > s(i[0], i[1]) && (i[1] = n[1]), s(n[0], i[1]) > s(i[0], i[1]) && (i[0] = n[0])) : o.push(i = n);
                for (var a, n, d = -1 / 0, e = o.length - 1, r = 0, i = o[e]; e >= r; i = n, ++r) n = o[r], (a = s(i[1], n[0])) > d && (d = a, c = n[0], p = i[1])
            }
            return x = b = null, 1 / 0 === c || 1 / 0 === h ? [
                [NaN, NaN],
                [NaN, NaN]
            ] : [
                [c, h],
                [p, f]
            ]
        }
    }(), na.geo.centroid = function(t) {
        Ts = Cs = Ms = ks = Ss = As = Es = Ns = Ls = Is = Ps = 0, na.geo.stream(t, Ds);
        var e = Ls,
            n = Is,
            r = Ps,
            i = e * e + n * n + r * r;
        return Pa > i && (e = As, n = Es, r = Ns, Ia > Cs && (e = Ms, n = ks, r = Ss), i = e * e + n * n + r * r, Pa > i) ? [NaN, NaN] : [Math.atan2(n, e) * za, tt(r / Math.sqrt(i)) * za]
    };
    var Ts, Cs, Ms, ks, Ss, As, Es, Ns, Ls, Is, Ps, Ds = {
            sphere: y,
            point: we,
            lineStart: Ce,
            lineEnd: Me,
            polygonStart: function() {
                Ds.lineStart = ke
            },
            polygonEnd: function() {
                Ds.lineStart = Ce
            }
        },
        Fs = Ie(Ae, je, Re, [-Da, -Da / 2]),
        js = 1e9;
    na.geo.clipExtent = function() {
        var t, e, n, r, i, o, a = {
            stream: function(t) {
                return i && (i.valid = !1), i = o(t), i.valid = !0, i
            },
            extent: function(s) {
                return arguments.length ? (o = Oe(t = +s[0][0], e = +s[0][1], n = +s[1][0], r = +s[1][1]), i && (i.valid = !1, i = null), a) : [
                    [t, e],
                    [n, r]
                ]
            }
        };
        return a.extent([
            [0, 0],
            [960, 500]
        ])
    }, (na.geo.conicEqualArea = function() {
        return He(We)
    }).raw = We, na.geo.albers = function() {
        return na.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }, na.geo.albersUsa = function() {
        function t(t) {
            var o = t[0],
                a = t[1];
            return e = null, n(o, a), e || (r(o, a), e) || i(o, a), e
        }
        var e, n, r, i, o = na.geo.albers(),
            a = na.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            s = na.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            l = {
                point: function(t, n) {
                    e = [t, n]
                }
            };
        return t.invert = function(t) {
            var e = o.scale(),
                n = o.translate(),
                r = (t[0] - n[0]) / e,
                i = (t[1] - n[1]) / e;
            return (i >= .12 && .234 > i && r >= -.425 && -.214 > r ? a : i >= .166 && .234 > i && r >= -.214 && -.115 > r ? s : o).invert(t)
        }, t.stream = function(t) {
            var e = o.stream(t),
                n = a.stream(t),
                r = s.stream(t);
            return {
                point: function(t, i) {
                    e.point(t, i), n.point(t, i), r.point(t, i)
                },
                sphere: function() {
                    e.sphere(), n.sphere(), r.sphere()
                },
                lineStart: function() {
                    e.lineStart(), n.lineStart(), r.lineStart()
                },
                lineEnd: function() {
                    e.lineEnd(), n.lineEnd(), r.lineEnd()
                },
                polygonStart: function() {
                    e.polygonStart(), n.polygonStart(), r.polygonStart()
                },
                polygonEnd: function() {
                    e.polygonEnd(), n.polygonEnd(), r.polygonEnd()
                }
            }
        }, t.precision = function(e) {
            return arguments.length ? (o.precision(e), a.precision(e), s.precision(e), t) : o.precision()
        }, t.scale = function(e) {
            return arguments.length ? (o.scale(e), a.scale(.35 * e), s.scale(e), t.translate(o.translate())) : o.scale()
        }, t.translate = function(e) {
            if (!arguments.length) return o.translate();
            var u = o.scale(),
                c = +e[0],
                h = +e[1];
            return n = o.translate(e).clipExtent([
                [c - .455 * u, h - .238 * u],
                [c + .455 * u, h + .238 * u]
            ]).stream(l).point, r = a.translate([c - .307 * u, h + .201 * u]).clipExtent([
                [c - .425 * u + Ia, h + .12 * u + Ia],
                [c - .214 * u - Ia, h + .234 * u - Ia]
            ]).stream(l).point, i = s.translate([c - .205 * u, h + .212 * u]).clipExtent([
                [c - .214 * u + Ia, h + .166 * u + Ia],
                [c - .115 * u - Ia, h + .234 * u - Ia]
            ]).stream(l).point, t
        }, t.scale(1070)
    };
    var $s, Rs, zs, Bs, qs, Os, Hs = {
            point: y,
            lineStart: y,
            lineEnd: y,
            polygonStart: function() {
                Rs = 0, Hs.lineStart = Ue
            },
            polygonEnd: function() {
                Hs.lineStart = Hs.lineEnd = Hs.point = y, $s += da(Rs / 2)
            }
        },
        Ws = {
            point: Ye,
            lineStart: y,
            lineEnd: y,
            polygonStart: y,
            polygonEnd: y
        },
        Us = {
            point: Xe,
            lineStart: Je,
            lineEnd: Ke,
            polygonStart: function() {
                Us.lineStart = Ze
            },
            polygonEnd: function() {
                Us.point = Xe, Us.lineStart = Je, Us.lineEnd = Ke
            }
        };
    na.geo.path = function() {
        function t(t) {
            return t && ("function" == typeof s && o.pointRadius(+s.apply(this, arguments)), a && a.valid || (a = i(o)), na.geo.stream(t, a)), o.result()
        }

        function e() {
            return a = null, t
        }
        var n, r, i, o, a, s = 4.5;
        return t.area = function(t) {
            return $s = 0, na.geo.stream(t, i(Hs)), $s
        }, t.centroid = function(t) {
            return Ms = ks = Ss = As = Es = Ns = Ls = Is = Ps = 0, na.geo.stream(t, i(Us)), Ps ? [Ls / Ps, Is / Ps] : Ns ? [As / Ns, Es / Ns] : Ss ? [Ms / Ss, ks / Ss] : [NaN, NaN]
        }, t.bounds = function(t) {
            return qs = Os = -(zs = Bs = 1 / 0), na.geo.stream(t, i(Ws)), [
                [zs, Bs],
                [qs, Os]
            ]
        }, t.projection = function(t) {
            return arguments.length ? (i = (n = t) ? t.stream || en(t) : kt, e()) : n
        }, t.context = function(t) {
            return arguments.length ? (o = null == (r = t) ? new Ve : new Qe(t), "function" != typeof s && o.pointRadius(s), e()) : r
        }, t.pointRadius = function(e) {
            return arguments.length ? (s = "function" == typeof e ? e : (o.pointRadius(+e), +e), t) : s
        }, t.projection(na.geo.albersUsa()).context(null)
    }, na.geo.transform = function(t) {
        return {
            stream: function(e) {
                var n = new nn(e);
                for (var r in t) n[r] = t[r];
                return n
            }
        }
    }, nn.prototype = {
        point: function(t, e) {
            this.stream.point(t, e)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    }, na.geo.projection = on, na.geo.projectionMutator = an, (na.geo.equirectangular = function() {
        return on(ln)
    }).raw = ln.invert = ln, na.geo.rotation = function(t) {
        function e(e) {
            return e = t(e[0] * Ra, e[1] * Ra), e[0] *= za, e[1] *= za, e
        }
        return t = cn(t[0] % 360 * Ra, t[1] * Ra, t.length > 2 ? t[2] * Ra : 0), e.invert = function(e) {
            return e = t.invert(e[0] * Ra, e[1] * Ra), e[0] *= za, e[1] *= za, e
        }, e
    }, un.invert = ln, na.geo.circle = function() {
        function t() {
            var t = "function" == typeof r ? r.apply(this, arguments) : r,
                e = cn(-t[0] * Ra, -t[1] * Ra, 0).invert,
                i = [];
            return n(null, null, 1, {
                point: function(t, n) {
                    i.push(t = e(t, n)), t[0] *= za, t[1] *= za
                }
            }), {
                type: "Polygon",
                coordinates: [i]
            }
        }
        var e, n, r = [0, 0],
            i = 6;
        return t.origin = function(e) {
            return arguments.length ? (r = e, t) : r
        }, t.angle = function(r) {
            return arguments.length ? (n = dn((e = +r) * Ra, i * Ra), t) : e
        }, t.precision = function(r) {
            return arguments.length ? (n = dn(e * Ra, (i = +r) * Ra), t) : i
        }, t.angle(90)
    }, na.geo.distance = function(t, e) {
        var n, r = (e[0] - t[0]) * Ra,
            i = t[1] * Ra,
            o = e[1] * Ra,
            a = Math.sin(r),
            s = Math.cos(r),
            l = Math.sin(i),
            u = Math.cos(i),
            c = Math.sin(o),
            h = Math.cos(o);
        return Math.atan2(Math.sqrt((n = h * a) * n + (n = u * c - l * h * s) * n), l * c + u * h * s)
    }, na.geo.graticule = function() {
        function t() {
            return {
                type: "MultiLineString",
                coordinates: e()
            }
        }

        function e() {
            return na.range(Math.ceil(o / v) * v, i, v).map(p).concat(na.range(Math.ceil(u / m) * m, l, m).map(f)).concat(na.range(Math.ceil(r / d) * d, n, d).filter(function(t) {
                return da(t % v) > Ia
            }).map(c)).concat(na.range(Math.ceil(s / g) * g, a, g).filter(function(t) {
                return da(t % m) > Ia
            }).map(h))
        }
        var n, r, i, o, a, s, l, u, c, h, p, f, d = 10,
            g = d,
            v = 90,
            m = 360,
            y = 2.5;
        return t.lines = function() {
            return e().map(function(t) {
                return {
                    type: "LineString",
                    coordinates: t
                }
            })
        }, t.outline = function() {
            return {
                type: "Polygon",
                coordinates: [p(o).concat(f(l).slice(1), p(i).reverse().slice(1), f(u).reverse().slice(1))]
            }
        }, t.extent = function(e) {
            return arguments.length ? t.majorExtent(e).minorExtent(e) : t.minorExtent()
        }, t.majorExtent = function(e) {
            return arguments.length ? (o = +e[0][0], i = +e[1][0], u = +e[0][1], l = +e[1][1], o > i && (e = o, o = i, i = e), u > l && (e = u, u = l, l = e), t.precision(y)) : [
                [o, u],
                [i, l]
            ]
        }, t.minorExtent = function(e) {
            return arguments.length ? (r = +e[0][0], n = +e[1][0], s = +e[0][1], a = +e[1][1], r > n && (e = r, r = n, n = e), s > a && (e = s, s = a, a = e), t.precision(y)) : [
                [r, s],
                [n, a]
            ]
        }, t.step = function(e) {
            return arguments.length ? t.majorStep(e).minorStep(e) : t.minorStep()
        }, t.majorStep = function(e) {
            return arguments.length ? (v = +e[0], m = +e[1], t) : [v, m]
        }, t.minorStep = function(e) {
            return arguments.length ? (d = +e[0], g = +e[1], t) : [d, g]
        }, t.precision = function(e) {
            return arguments.length ? (y = +e, c = vn(s, a, 90), h = mn(r, n, y), p = vn(u, l, 90), f = mn(o, i, y), t) : y
        }, t.majorExtent([
            [-180, -90 + Ia],
            [180, 90 - Ia]
        ]).minorExtent([
            [-180, -80 - Ia],
            [180, 80 + Ia]
        ])
    }, na.geo.greatArc = function() {
        function t() {
            return {
                type: "LineString",
                coordinates: [e || r.apply(this, arguments), n || i.apply(this, arguments)]
            }
        }
        var e, n, r = yn,
            i = xn;
        return t.distance = function() {
            return na.geo.distance(e || r.apply(this, arguments), n || i.apply(this, arguments));
        }, t.source = function(n) {
            return arguments.length ? (r = n, e = "function" == typeof n ? null : n, t) : r
        }, t.target = function(e) {
            return arguments.length ? (i = e, n = "function" == typeof e ? null : e, t) : i
        }, t.precision = function() {
            return arguments.length ? t : 0
        }, t
    }, na.geo.interpolate = function(t, e) {
        return bn(t[0] * Ra, t[1] * Ra, e[0] * Ra, e[1] * Ra)
    }, na.geo.length = function(t) {
        return Ys = 0, na.geo.stream(t, Vs), Ys
    };
    var Ys, Vs = {
            sphere: y,
            point: y,
            lineStart: _n,
            lineEnd: y,
            polygonStart: y,
            polygonEnd: y
        },
        Gs = wn(function(t) {
            return Math.sqrt(2 / (1 + t))
        }, function(t) {
            return 2 * Math.asin(t / 2)
        });
    (na.geo.azimuthalEqualArea = function() {
        return on(Gs)
    }).raw = Gs;
    var Xs = wn(function(t) {
        var e = Math.acos(t);
        return e && e / Math.sin(e)
    }, kt);
    (na.geo.azimuthalEquidistant = function() {
        return on(Xs)
    }).raw = Xs, (na.geo.conicConformal = function() {
        return He(Tn)
    }).raw = Tn, (na.geo.conicEquidistant = function() {
        return He(Cn)
    }).raw = Cn;
    var Js = wn(function(t) {
        return 1 / t
    }, Math.atan);
    (na.geo.gnomonic = function() {
        return on(Js)
    }).raw = Js, Mn.invert = function(t, e) {
        return [t, 2 * Math.atan(Math.exp(e)) - $a]
    }, (na.geo.mercator = function() {
        return kn(Mn)
    }).raw = Mn;
    var Ks = wn(function() {
        return 1
    }, Math.asin);
    (na.geo.orthographic = function() {
        return on(Ks)
    }).raw = Ks;
    var Zs = wn(function(t) {
        return 1 / (1 + t)
    }, function(t) {
        return 2 * Math.atan(t)
    });
    (na.geo.stereographic = function() {
        return on(Zs)
    }).raw = Zs, Sn.invert = function(t, e) {
        return [-e, 2 * Math.atan(Math.exp(t)) - $a]
    }, (na.geo.transverseMercator = function() {
        var t = kn(Sn),
            e = t.center,
            n = t.rotate;
        return t.center = function(t) {
            return t ? e([-t[1], t[0]]) : (t = e(), [t[1], -t[0]])
        }, t.rotate = function(t) {
            return t ? n([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = n(), [t[0], t[1], t[2] - 90])
        }, n([0, 0, 90])
    }).raw = Sn, na.geom = {}, na.geom.hull = function(t) {
        function e(t) {
            if (t.length < 3) return [];
            var e, i = Mt(n),
                o = Mt(r),
                a = t.length,
                s = [],
                l = [];
            for (e = 0; a > e; e++) s.push([+i.call(this, t[e], e), +o.call(this, t[e], e), e]);
            for (s.sort(Ln), e = 0; a > e; e++) l.push([s[e][0], -s[e][1]]);
            var u = Nn(s),
                c = Nn(l),
                h = c[0] === u[0],
                p = c[c.length - 1] === u[u.length - 1],
                f = [];
            for (e = u.length - 1; e >= 0; --e) f.push(t[s[u[e]][2]]);
            for (e = +h; e < c.length - p; ++e) f.push(t[s[c[e]][2]]);
            return f
        }
        var n = An,
            r = En;
        return arguments.length ? e(t) : (e.x = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.y = function(t) {
            return arguments.length ? (r = t, e) : r
        }, e)
    }, na.geom.polygon = function(t) {
        return xa(t, Qs), t
    };
    var Qs = na.geom.polygon.prototype = [];
    Qs.area = function() {
        for (var t, e = -1, n = this.length, r = this[n - 1], i = 0; ++e < n;) t = r, r = this[e], i += t[1] * r[0] - t[0] * r[1];
        return .5 * i
    }, Qs.centroid = function(t) {
        var e, n, r = -1,
            i = this.length,
            o = 0,
            a = 0,
            s = this[i - 1];
        for (arguments.length || (t = -1 / (6 * this.area())); ++r < i;) e = s, s = this[r], n = e[0] * s[1] - s[0] * e[1], o += (e[0] + s[0]) * n, a += (e[1] + s[1]) * n;
        return [o * t, a * t]
    }, Qs.clip = function(t) {
        for (var e, n, r, i, o, a, s = Dn(t), l = -1, u = this.length - Dn(this), c = this[u - 1]; ++l < u;) {
            for (e = t.slice(), t.length = 0, i = this[l], o = e[(r = e.length - s) - 1], n = -1; ++n < r;) a = e[n], In(a, c, i) ? (In(o, c, i) || t.push(Pn(o, a, c, i)), t.push(a)) : In(o, c, i) && t.push(Pn(o, a, c, i)), o = a;
            s && t.push(t[0]), c = i
        }
        return t
    };
    var tl, el, nl, rl, il, ol = [],
        al = [];
    On.prototype.prepare = function() {
        for (var t, e = this.edges, n = e.length; n--;) t = e[n].edge, t.b && t.a || e.splice(n, 1);
        return e.sort(Wn), e.length
    }, tr.prototype = {
        start: function() {
            return this.edge.l === this.site ? this.edge.a : this.edge.b
        },
        end: function() {
            return this.edge.l === this.site ? this.edge.b : this.edge.a
        }
    }, er.prototype = {
        insert: function(t, e) {
            var n, r, i;
            if (t) {
                if (e.P = t, e.N = t.N, t.N && (t.N.P = e), t.N = e, t.R) {
                    for (t = t.R; t.L;) t = t.L;
                    t.L = e
                } else t.R = e;
                n = t
            } else this._ ? (t = or(this._), e.P = null, e.N = t, t.P = t.L = e, n = t) : (e.P = e.N = null, this._ = e, n = null);
            for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C;) r = n.U, n === r.L ? (i = r.R, i && i.C ? (n.C = i.C = !1, r.C = !0, t = r) : (t === n.R && (rr(this, n), t = n, n = t.U), n.C = !1, r.C = !0, ir(this, r))) : (i = r.L, i && i.C ? (n.C = i.C = !1, r.C = !0, t = r) : (t === n.L && (ir(this, n), t = n, n = t.U), n.C = !1, r.C = !0, rr(this, r))), n = t.U;
            this._.C = !1
        },
        remove: function(t) {
            t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
            var e, n, r, i = t.U,
                o = t.L,
                a = t.R;
            if (n = o ? a ? or(a) : o : a, i ? i.L === t ? i.L = n : i.R = n : this._ = n, o && a ? (r = n.C, n.C = t.C, n.L = o, o.U = n, n !== a ? (i = n.U, n.U = t.U, t = n.R, i.L = t, n.R = a, a.U = n) : (n.U = i, i = n, t = n.R)) : (r = t.C, t = n), t && (t.U = i), !r) {
                if (t && t.C) return void(t.C = !1);
                do {
                    if (t === this._) break;
                    if (t === i.L) {
                        if (e = i.R, e.C && (e.C = !1, i.C = !0, rr(this, i), e = i.R), e.L && e.L.C || e.R && e.R.C) {
                            e.R && e.R.C || (e.L.C = !1, e.C = !0, ir(this, e), e = i.R), e.C = i.C, i.C = e.R.C = !1, rr(this, i), t = this._;
                            break
                        }
                    } else if (e = i.L, e.C && (e.C = !1, i.C = !0, ir(this, i), e = i.L), e.L && e.L.C || e.R && e.R.C) {
                        e.L && e.L.C || (e.R.C = !1, e.C = !0, rr(this, e), e = i.L), e.C = i.C, i.C = e.L.C = !1, ir(this, i), t = this._;
                        break
                    }
                    e.C = !0, t = i, i = i.U
                } while (!t.C);
                t && (t.C = !1)
            }
        }
    }, na.geom.voronoi = function(t) {
        function e(t) {
            var e = new Array(t.length),
                r = s[0][0],
                i = s[0][1],
                o = s[1][0],
                a = s[1][1];
            return ar(n(t), s).cells.forEach(function(n, s) {
                var l = n.edges,
                    u = n.site,
                    c = e[s] = l.length ? l.map(function(t) {
                        var e = t.start();
                        return [e.x, e.y]
                    }) : u.x >= r && u.x <= o && u.y >= i && u.y <= a ? [
                        [r, a],
                        [o, a],
                        [o, i],
                        [r, i]
                    ] : [];
                c.point = t[s]
            }), e
        }

        function n(t) {
            return t.map(function(t, e) {
                return {
                    x: Math.round(o(t, e) / Ia) * Ia,
                    y: Math.round(a(t, e) / Ia) * Ia,
                    i: e
                }
            })
        }
        var r = An,
            i = En,
            o = r,
            a = i,
            s = sl;
        return t ? e(t) : (e.links = function(t) {
            return ar(n(t)).edges.filter(function(t) {
                return t.l && t.r
            }).map(function(e) {
                return {
                    source: t[e.l.i],
                    target: t[e.r.i]
                }
            })
        }, e.triangles = function(t) {
            var e = [];
            return ar(n(t)).cells.forEach(function(n, r) {
                for (var i, o, a = n.site, s = n.edges.sort(Wn), l = -1, u = s.length, c = s[u - 1].edge, h = c.l === a ? c.r : c.l; ++l < u;) i = c, o = h, c = s[l].edge, h = c.l === a ? c.r : c.l, r < o.i && r < h.i && lr(a, o, h) < 0 && e.push([t[r], t[o.i], t[h.i]])
            }), e
        }, e.x = function(t) {
            return arguments.length ? (o = Mt(r = t), e) : r
        }, e.y = function(t) {
            return arguments.length ? (a = Mt(i = t), e) : i
        }, e.clipExtent = function(t) {
            return arguments.length ? (s = null == t ? sl : t, e) : s === sl ? null : s
        }, e.size = function(t) {
            return arguments.length ? e.clipExtent(t && [
                [0, 0], t
            ]) : s === sl ? null : s && s[1]
        }, e)
    };
    var sl = [
        [-1e6, -1e6],
        [1e6, 1e6]
    ];
    na.geom.delaunay = function(t) {
        return na.geom.voronoi().triangles(t)
    }, na.geom.quadtree = function(t, e, n, r, i) {
        function o(t) {
            function o(t, e, n, r, i, o, a, s) {
                if (!isNaN(n) && !isNaN(r))
                    if (t.leaf) {
                        var l = t.x,
                            c = t.y;
                        if (null != l)
                            if (da(l - n) + da(c - r) < .01) u(t, e, n, r, i, o, a, s);
                            else {
                                var h = t.point;
                                t.x = t.y = t.point = null, u(t, h, l, c, i, o, a, s), u(t, e, n, r, i, o, a, s)
                            } else t.x = n, t.y = r, t.point = e
                    } else u(t, e, n, r, i, o, a, s)
            }

            function u(t, e, n, r, i, a, s, l) {
                var u = .5 * (i + s),
                    c = .5 * (a + l),
                    h = n >= u,
                    p = r >= c,
                    f = p << 1 | h;
                t.leaf = !1, t = t.nodes[f] || (t.nodes[f] = hr()), h ? i = u : s = u, p ? a = c : l = c, o(t, e, n, r, i, a, s, l)
            }
            var c, h, p, f, d, g, v, m, y, x = Mt(s),
                b = Mt(l);
            if (null != e) g = e, v = n, m = r, y = i;
            else if (m = y = -(g = v = 1 / 0), h = [], p = [], d = t.length, a)
                for (f = 0; d > f; ++f) c = t[f], c.x < g && (g = c.x), c.y < v && (v = c.y), c.x > m && (m = c.x), c.y > y && (y = c.y), h.push(c.x), p.push(c.y);
            else
                for (f = 0; d > f; ++f) {
                    var _ = +x(c = t[f], f),
                        w = +b(c, f);
                    g > _ && (g = _), v > w && (v = w), _ > m && (m = _), w > y && (y = w), h.push(_), p.push(w)
                }
            var T = m - g,
                C = y - v;
            T > C ? y = v + T : m = g + C;
            var M = hr();
            if (M.add = function(t) {
                    o(M, t, +x(t, ++f), +b(t, f), g, v, m, y)
                }, M.visit = function(t) {
                    pr(t, M, g, v, m, y)
                }, M.find = function(t) {
                    return fr(M, t[0], t[1], g, v, m, y)
                }, f = -1, null == e) {
                for (; ++f < d;) o(M, t[f], h[f], p[f], g, v, m, y);
                --f
            } else t.forEach(M.add);
            return h = p = t = c = null, M
        }
        var a, s = An,
            l = En;
        return (a = arguments.length) ? (s = ur, l = cr, 3 === a && (i = n, r = e, n = e = 0), o(t)) : (o.x = function(t) {
            return arguments.length ? (s = t, o) : s
        }, o.y = function(t) {
            return arguments.length ? (l = t, o) : l
        }, o.extent = function(t) {
            return arguments.length ? (null == t ? e = n = r = i = null : (e = +t[0][0], n = +t[0][1], r = +t[1][0], i = +t[1][1]), o) : null == e ? null : [
                [e, n],
                [r, i]
            ]
        }, o.size = function(t) {
            return arguments.length ? (null == t ? e = n = r = i = null : (e = n = 0, r = +t[0], i = +t[1]), o) : null == e ? null : [r - e, i - n]
        }, o)
    }, na.interpolateRgb = dr, na.interpolateObject = gr, na.interpolateNumber = vr, na.interpolateString = mr;
    var ll = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        ul = new RegExp(ll.source, "g");
    na.interpolate = yr, na.interpolators = [function(t, e) {
        var n = typeof e;
        return ("string" === n ? ts.has(e) || /^(#|rgb\(|hsl\()/.test(e) ? dr : mr : e instanceof ot ? dr : Array.isArray(e) ? xr : "object" === n && isNaN(e) ? gr : vr)(t, e)
    }], na.interpolateArray = xr;
    var cl = function() {
            return kt
        },
        hl = na.map({
            linear: cl,
            poly: kr,
            quad: function() {
                return Tr
            },
            cubic: function() {
                return Cr
            },
            sin: function() {
                return Sr
            },
            exp: function() {
                return Ar
            },
            circle: function() {
                return Er
            },
            elastic: Nr,
            back: Lr,
            bounce: function() {
                return Ir
            }
        }),
        pl = na.map({ in : kt, out: _r, "in-out": wr, "out-in": function(t) {
                return wr(_r(t))
            }
        });
    na.ease = function(t) {
        var e = t.indexOf("-"),
            n = e >= 0 ? t.slice(0, e) : t,
            r = e >= 0 ? t.slice(e + 1) : "in";
        return n = hl.get(n) || cl, r = pl.get(r) || kt, br(r(n.apply(null, ra.call(arguments, 1))))
    }, na.interpolateHcl = Pr, na.interpolateHsl = Dr, na.interpolateLab = Fr, na.interpolateRound = jr, na.transform = function(t) {
        var e = oa.createElementNS(na.ns.prefix.svg, "g");
        return (na.transform = function(t) {
            if (null != t) {
                e.setAttribute("transform", t);
                var n = e.transform.baseVal.consolidate()
            }
            return new $r(n ? n.matrix : fl)
        })(t)
    }, $r.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var fl = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    na.interpolateTransform = qr, na.layout = {}, na.layout.bundle = function() {
        return function(t) {
            for (var e = [], n = -1, r = t.length; ++n < r;) e.push(Wr(t[n]));
            return e
        }
    }, na.layout.chord = function() {
        function t() {
            var t, u, h, p, f, d = {},
                g = [],
                v = na.range(o),
                m = [];
            for (n = [], r = [], t = 0, p = -1; ++p < o;) {
                for (u = 0, f = -1; ++f < o;) u += i[p][f];
                g.push(u), m.push(na.range(o)), t += u
            }
            for (a && v.sort(function(t, e) {
                    return a(g[t], g[e])
                }), s && m.forEach(function(t, e) {
                    t.sort(function(t, n) {
                        return s(i[e][t], i[e][n])
                    })
                }), t = (Fa - c * o) / t, u = 0, p = -1; ++p < o;) {
                for (h = u, f = -1; ++f < o;) {
                    var y = v[p],
                        x = m[y][f],
                        b = i[y][x],
                        _ = u,
                        w = u += b * t;
                    d[y + "-" + x] = {
                        index: y,
                        subindex: x,
                        startAngle: _,
                        endAngle: w,
                        value: b
                    }
                }
                r[y] = {
                    index: y,
                    startAngle: h,
                    endAngle: u,
                    value: (u - h) / t
                }, u += c
            }
            for (p = -1; ++p < o;)
                for (f = p - 1; ++f < o;) {
                    var T = d[p + "-" + f],
                        C = d[f + "-" + p];
                    (T.value || C.value) && n.push(T.value < C.value ? {
                        source: C,
                        target: T
                    } : {
                        source: T,
                        target: C
                    })
                }
            l && e()
        }

        function e() {
            n.sort(function(t, e) {
                return l((t.source.value + t.target.value) / 2, (e.source.value + e.target.value) / 2)
            })
        }
        var n, r, i, o, a, s, l, u = {},
            c = 0;
        return u.matrix = function(t) {
            return arguments.length ? (o = (i = t) && i.length, n = r = null, u) : i
        }, u.padding = function(t) {
            return arguments.length ? (c = t, n = r = null, u) : c
        }, u.sortGroups = function(t) {
            return arguments.length ? (a = t, n = r = null, u) : a
        }, u.sortSubgroups = function(t) {
            return arguments.length ? (s = t, n = null, u) : s
        }, u.sortChords = function(t) {
            return arguments.length ? (l = t, n && e(), u) : l
        }, u.chords = function() {
            return n || t(), n
        }, u.groups = function() {
            return r || t(), r
        }, u
    }, na.layout.force = function() {
        function t(t) {
            return function(e, n, r, i) {
                if (e.point !== t) {
                    var o = e.cx - t.x,
                        a = e.cy - t.y,
                        s = i - n,
                        l = o * o + a * a;
                    if (l > s * s / v) {
                        if (d > l) {
                            var u = e.charge / l;
                            t.px -= o * u, t.py -= a * u
                        }
                        return !0
                    }
                    if (e.point && l && d > l) {
                        var u = e.pointCharge / l;
                        t.px -= o * u, t.py -= a * u
                    }
                }
                return !e.charge
            }
        }

        function e(t) {
            t.px = na.event.x, t.py = na.event.y, s.resume()
        }
        var n, r, i, o, a, s = {},
            l = na.dispatch("start", "tick", "end"),
            u = [1, 1],
            c = .9,
            h = dl,
            p = gl,
            f = -30,
            d = vl,
            g = .1,
            v = .64,
            m = [],
            y = [];
        return s.tick = function() {
            if ((r *= .99) < .005) return l.end({
                type: "end",
                alpha: r = 0
            }), !0;
            var e, n, s, h, p, d, v, x, b, _ = m.length,
                w = y.length;
            for (n = 0; w > n; ++n) s = y[n], h = s.source, p = s.target, x = p.x - h.x, b = p.y - h.y, (d = x * x + b * b) && (d = r * o[n] * ((d = Math.sqrt(d)) - i[n]) / d, x *= d, b *= d, p.x -= x * (v = h.weight / (p.weight + h.weight)), p.y -= b * v, h.x += x * (v = 1 - v), h.y += b * v);
            if ((v = r * g) && (x = u[0] / 2, b = u[1] / 2, n = -1, v))
                for (; ++n < _;) s = m[n], s.x += (x - s.x) * v, s.y += (b - s.y) * v;
            if (f)
                for (Kr(e = na.geom.quadtree(m), r, a), n = -1; ++n < _;)(s = m[n]).fixed || e.visit(t(s));
            for (n = -1; ++n < _;) s = m[n], s.fixed ? (s.x = s.px, s.y = s.py) : (s.x -= (s.px - (s.px = s.x)) * c, s.y -= (s.py - (s.py = s.y)) * c);
            l.tick({
                type: "tick",
                alpha: r
            })
        }, s.nodes = function(t) {
            return arguments.length ? (m = t, s) : m
        }, s.links = function(t) {
            return arguments.length ? (y = t, s) : y
        }, s.size = function(t) {
            return arguments.length ? (u = t, s) : u
        }, s.linkDistance = function(t) {
            return arguments.length ? (h = "function" == typeof t ? t : +t, s) : h
        }, s.distance = s.linkDistance, s.linkStrength = function(t) {
            return arguments.length ? (p = "function" == typeof t ? t : +t, s) : p
        }, s.friction = function(t) {
            return arguments.length ? (c = +t, s) : c
        }, s.charge = function(t) {
            return arguments.length ? (f = "function" == typeof t ? t : +t, s) : f
        }, s.chargeDistance = function(t) {
            return arguments.length ? (d = t * t, s) : Math.sqrt(d)
        }, s.gravity = function(t) {
            return arguments.length ? (g = +t, s) : g
        }, s.theta = function(t) {
            return arguments.length ? (v = t * t, s) : Math.sqrt(v)
        }, s.alpha = function(t) {
            return arguments.length ? (t = +t, r ? r = t > 0 ? t : 0 : t > 0 && (l.start({
                type: "start",
                alpha: r = t
            }), na.timer(s.tick)), s) : r
        }, s.start = function() {
            function t(t, r) {
                if (!n) {
                    for (n = new Array(l), s = 0; l > s; ++s) n[s] = [];
                    for (s = 0; u > s; ++s) {
                        var i = y[s];
                        n[i.source.index].push(i.target), n[i.target.index].push(i.source)
                    }
                }
                for (var o, a = n[e], s = -1, u = a.length; ++s < u;)
                    if (!isNaN(o = a[s][t])) return o;
                return Math.random() * r
            }
            var e, n, r, l = m.length,
                c = y.length,
                d = u[0],
                g = u[1];
            for (e = 0; l > e; ++e)(r = m[e]).index = e, r.weight = 0;
            for (e = 0; c > e; ++e) r = y[e], "number" == typeof r.source && (r.source = m[r.source]), "number" == typeof r.target && (r.target = m[r.target]), ++r.source.weight, ++r.target.weight;
            for (e = 0; l > e; ++e) r = m[e], isNaN(r.x) && (r.x = t("x", d)), isNaN(r.y) && (r.y = t("y", g)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
            if (i = [], "function" == typeof h)
                for (e = 0; c > e; ++e) i[e] = +h.call(this, y[e], e);
            else
                for (e = 0; c > e; ++e) i[e] = h;
            if (o = [], "function" == typeof p)
                for (e = 0; c > e; ++e) o[e] = +p.call(this, y[e], e);
            else
                for (e = 0; c > e; ++e) o[e] = p;
            if (a = [], "function" == typeof f)
                for (e = 0; l > e; ++e) a[e] = +f.call(this, m[e], e);
            else
                for (e = 0; l > e; ++e) a[e] = f;
            return s.resume()
        }, s.resume = function() {
            return s.alpha(.1)
        }, s.stop = function() {
            return s.alpha(0)
        }, s.drag = function() {
            return n || (n = na.behavior.drag().origin(kt).on("dragstart.force", Vr).on("drag.force", e).on("dragend.force", Gr)), arguments.length ? void this.on("mouseover.force", Xr).on("mouseout.force", Jr).call(n) : n
        }, na.rebind(s, l, "on")
    };
    var dl = 20,
        gl = 1,
        vl = 1 / 0;
    na.layout.hierarchy = function() {
        function t(i) {
            var o, a = [i],
                s = [];
            for (i.depth = 0; null != (o = a.pop());)
                if (s.push(o), (u = n.call(t, o, o.depth)) && (l = u.length)) {
                    for (var l, u, c; --l >= 0;) a.push(c = u[l]), c.parent = o, c.depth = o.depth + 1;
                    r && (o.value = 0), o.children = u
                } else r && (o.value = +r.call(t, o, o.depth) || 0), delete o.children;
            return ti(i, function(t) {
                var n, i;
                e && (n = t.children) && n.sort(e), r && (i = t.parent) && (i.value += t.value)
            }), s
        }
        var e = ri,
            n = ei,
            r = ni;
        return t.sort = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.children = function(e) {
            return arguments.length ? (n = e, t) : n
        }, t.value = function(e) {
            return arguments.length ? (r = e, t) : r
        }, t.revalue = function(e) {
            return r && (Qr(e, function(t) {
                t.children && (t.value = 0)
            }), ti(e, function(e) {
                var n;
                e.children || (e.value = +r.call(t, e, e.depth) || 0), (n = e.parent) && (n.value += e.value)
            })), e
        }, t
    }, na.layout.partition = function() {
        function t(e, n, r, i) {
            var o = e.children;
            if (e.x = n, e.y = e.depth * i, e.dx = r, e.dy = i, o && (a = o.length)) {
                var a, s, l, u = -1;
                for (r = e.value ? r / e.value : 0; ++u < a;) t(s = o[u], n, l = s.value * r, i), n += l
            }
        }

        function e(t) {
            var n = t.children,
                r = 0;
            if (n && (i = n.length))
                for (var i, o = -1; ++o < i;) r = Math.max(r, e(n[o]));
            return 1 + r
        }

        function n(n, o) {
            var a = r.call(this, n, o);
            return t(a[0], 0, i[0], i[1] / e(a[0])), a
        }
        var r = na.layout.hierarchy(),
            i = [1, 1];
        return n.size = function(t) {
            return arguments.length ? (i = t, n) : i
        }, Zr(n, r)
    }, na.layout.pie = function() {
        function t(a) {
            var s, l = a.length,
                u = a.map(function(n, r) {
                    return +e.call(t, n, r)
                }),
                c = +("function" == typeof r ? r.apply(this, arguments) : r),
                h = ("function" == typeof i ? i.apply(this, arguments) : i) - c,
                p = Math.min(Math.abs(h) / l, +("function" == typeof o ? o.apply(this, arguments) : o)),
                f = p * (0 > h ? -1 : 1),
                d = (h - l * f) / na.sum(u),
                g = na.range(l),
                v = [];
            return null != n && g.sort(n === ml ? function(t, e) {
                return u[e] - u[t]
            } : function(t, e) {
                return n(a[t], a[e])
            }), g.forEach(function(t) {
                v[t] = {
                    data: a[t],
                    value: s = u[t],
                    startAngle: c,
                    endAngle: c += s * d + f,
                    padAngle: p
                }
            }), v
        }
        var e = Number,
            n = ml,
            r = 0,
            i = Fa,
            o = 0;
        return t.value = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.sort = function(e) {
            return arguments.length ? (n = e, t) : n
        }, t.startAngle = function(e) {
            return arguments.length ? (r = e, t) : r
        }, t.endAngle = function(e) {
            return arguments.length ? (i = e, t) : i
        }, t.padAngle = function(e) {
            return arguments.length ? (o = e, t) : o
        }, t
    };
    var ml = {};
    na.layout.stack = function() {
        function t(s, l) {
            if (!(p = s.length)) return s;
            var u = s.map(function(n, r) {
                    return e.call(t, n, r)
                }),
                c = u.map(function(e) {
                    return e.map(function(e, n) {
                        return [o.call(t, e, n), a.call(t, e, n)]
                    })
                }),
                h = n.call(t, c, l);
            u = na.permute(u, h), c = na.permute(c, h);
            var p, f, d, g, v = r.call(t, c, l),
                m = u[0].length;
            for (d = 0; m > d; ++d)
                for (i.call(t, u[0][d], g = v[d], c[0][d][1]), f = 1; p > f; ++f) i.call(t, u[f][d], g += c[f - 1][d][1], c[f][d][1]);
            return s
        }
        var e = kt,
            n = li,
            r = ui,
            i = si,
            o = oi,
            a = ai;
        return t.values = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.order = function(e) {
            return arguments.length ? (n = "function" == typeof e ? e : yl.get(e) || li, t) : n
        }, t.offset = function(e) {
            return arguments.length ? (r = "function" == typeof e ? e : xl.get(e) || ui, t) : r
        }, t.x = function(e) {
            return arguments.length ? (o = e, t) : o
        }, t.y = function(e) {
            return arguments.length ? (a = e, t) : a
        }, t.out = function(e) {
            return arguments.length ? (i = e, t) : i
        }, t
    };
    var yl = na.map({
            "inside-out": function(t) {
                var e, n, r = t.length,
                    i = t.map(ci),
                    o = t.map(hi),
                    a = na.range(r).sort(function(t, e) {
                        return i[t] - i[e]
                    }),
                    s = 0,
                    l = 0,
                    u = [],
                    c = [];
                for (e = 0; r > e; ++e) n = a[e], l > s ? (s += o[n], u.push(n)) : (l += o[n], c.push(n));
                return c.reverse().concat(u)
            },
            reverse: function(t) {
                return na.range(t.length).reverse()
            },
            default: li
        }),
        xl = na.map({
            silhouette: function(t) {
                var e, n, r, i = t.length,
                    o = t[0].length,
                    a = [],
                    s = 0,
                    l = [];
                for (n = 0; o > n; ++n) {
                    for (e = 0, r = 0; i > e; e++) r += t[e][n][1];
                    r > s && (s = r), a.push(r)
                }
                for (n = 0; o > n; ++n) l[n] = (s - a[n]) / 2;
                return l
            },
            wiggle: function(t) {
                var e, n, r, i, o, a, s, l, u, c = t.length,
                    h = t[0],
                    p = h.length,
                    f = [];
                for (f[0] = l = u = 0, n = 1; p > n; ++n) {
                    for (e = 0, i = 0; c > e; ++e) i += t[e][n][1];
                    for (e = 0, o = 0, s = h[n][0] - h[n - 1][0]; c > e; ++e) {
                        for (r = 0, a = (t[e][n][1] - t[e][n - 1][1]) / (2 * s); e > r; ++r) a += (t[r][n][1] - t[r][n - 1][1]) / s;
                        o += a * t[e][n][1]
                    }
                    f[n] = l -= i ? o / i * s : 0, u > l && (u = l)
                }
                for (n = 0; p > n; ++n) f[n] -= u;
                return f
            },
            expand: function(t) {
                var e, n, r, i = t.length,
                    o = t[0].length,
                    a = 1 / i,
                    s = [];
                for (n = 0; o > n; ++n) {
                    for (e = 0, r = 0; i > e; e++) r += t[e][n][1];
                    if (r)
                        for (e = 0; i > e; e++) t[e][n][1] /= r;
                    else
                        for (e = 0; i > e; e++) t[e][n][1] = a
                }
                for (n = 0; o > n; ++n) s[n] = 0;
                return s
            },
            zero: ui
        });
    na.layout.histogram = function() {
        function t(t, o) {
            for (var a, s, l = [], u = t.map(n, this), c = r.call(this, u, o), h = i.call(this, c, u, o), o = -1, p = u.length, f = h.length - 1, d = e ? 1 : 1 / p; ++o < f;) a = l[o] = [], a.dx = h[o + 1] - (a.x = h[o]), a.y = 0;
            if (f > 0)
                for (o = -1; ++o < p;) s = u[o], s >= c[0] && s <= c[1] && (a = l[na.bisect(h, s, 1, f) - 1], a.y += d, a.push(t[o]));
            return l
        }
        var e = !0,
            n = Number,
            r = gi,
            i = fi;
        return t.value = function(e) {
            return arguments.length ? (n = e, t) : n
        }, t.range = function(e) {
            return arguments.length ? (r = Mt(e), t) : r
        }, t.bins = function(e) {
            return arguments.length ? (i = "number" == typeof e ? function(t) {
                return di(t, e)
            } : Mt(e), t) : i
        }, t.frequency = function(n) {
            return arguments.length ? (e = !!n, t) : e
        }, t
    }, na.layout.pack = function() {
        function t(t, o) {
            var a = n.call(this, t, o),
                s = a[0],
                l = i[0],
                u = i[1],
                c = null == e ? Math.sqrt : "function" == typeof e ? e : function() {
                    return e
                };
            if (s.x = s.y = 0, ti(s, function(t) {
                    t.r = +c(t.value)
                }), ti(s, bi), r) {
                var h = r * (e ? 1 : Math.max(2 * s.r / l, 2 * s.r / u)) / 2;
                ti(s, function(t) {
                    t.r += h
                }), ti(s, bi), ti(s, function(t) {
                    t.r -= h
                })
            }
            return Ti(s, l / 2, u / 2, e ? 1 : 1 / Math.max(2 * s.r / l, 2 * s.r / u)), a
        }
        var e, n = na.layout.hierarchy().sort(vi),
            r = 0,
            i = [1, 1];
        return t.size = function(e) {
            return arguments.length ? (i = e, t) : i
        }, t.radius = function(n) {
            return arguments.length ? (e = null == n || "function" == typeof n ? n : +n, t) : e
        }, t.padding = function(e) {
            return arguments.length ? (r = +e, t) : r
        }, Zr(t, n)
    }, na.layout.tree = function() {
        function t(t, i) {
            var c = a.call(this, t, i),
                h = c[0],
                p = e(h);
            if (ti(p, n), p.parent.m = -p.z, Qr(p, r), u) Qr(h, o);
            else {
                var f = h,
                    d = h,
                    g = h;
                Qr(h, function(t) {
                    t.x < f.x && (f = t), t.x > d.x && (d = t), t.depth > g.depth && (g = t)
                });
                var v = s(f, d) / 2 - f.x,
                    m = l[0] / (d.x + s(d, f) / 2 + v),
                    y = l[1] / (g.depth || 1);
                Qr(h, function(t) {
                    t.x = (t.x + v) * m, t.y = t.depth * y
                })
            }
            return c
        }

        function e(t) {
            for (var e, n = {
                    A: null,
                    children: [t]
                }, r = [n]; null != (e = r.pop());)
                for (var i, o = e.children, a = 0, s = o.length; s > a; ++a) r.push((o[a] = i = {
                    _: o[a],
                    parent: e,
                    children: (i = o[a].children) && i.slice() || [],
                    A: null,
                    a: null,
                    z: 0,
                    m: 0,
                    c: 0,
                    s: 0,
                    t: null,
                    i: a
                }).a = i);
            return n.children[0]
        }

        function n(t) {
            var e = t.children,
                n = t.parent.children,
                r = t.i ? n[t.i - 1] : null;
            if (e.length) {
                Ei(t);
                var o = (e[0].z + e[e.length - 1].z) / 2;
                r ? (t.z = r.z + s(t._, r._), t.m = t.z - o) : t.z = o
            } else r && (t.z = r.z + s(t._, r._));
            t.parent.A = i(t, r, t.parent.A || n[0])
        }

        function r(t) {
            t._.x = t.z + t.parent.m, t.m += t.parent.m
        }

        function i(t, e, n) {
            if (e) {
                for (var r, i = t, o = t, a = e, l = i.parent.children[0], u = i.m, c = o.m, h = a.m, p = l.m; a = Si(a), i = ki(i), a && i;) l = ki(l), o = Si(o), o.a = t, r = a.z + h - i.z - u + s(a._, i._), r > 0 && (Ai(Ni(a, t, n), t, r), u += r, c += r), h += a.m, u += i.m, p += l.m, c += o.m;
                a && !Si(o) && (o.t = a, o.m += h - c), i && !ki(l) && (l.t = i, l.m += u - p, n = t)
            }
            return n
        }

        function o(t) {
            t.x *= l[0], t.y = t.depth * l[1]
        }
        var a = na.layout.hierarchy().sort(null).value(null),
            s = Mi,
            l = [1, 1],
            u = null;
        return t.separation = function(e) {
            return arguments.length ? (s = e, t) : s
        }, t.size = function(e) {
            return arguments.length ? (u = null == (l = e) ? o : null, t) : u ? null : l
        }, t.nodeSize = function(e) {
            return arguments.length ? (u = null == (l = e) ? null : o, t) : u ? l : null
        }, Zr(t, a)
    }, na.layout.cluster = function() {
        function t(t, o) {
            var a, s = e.call(this, t, o),
                l = s[0],
                u = 0;
            ti(l, function(t) {
                var e = t.children;
                e && e.length ? (t.x = Ii(e), t.y = Li(e)) : (t.x = a ? u += n(t, a) : 0, t.y = 0, a = t)
            });
            var c = Pi(l),
                h = Di(l),
                p = c.x - n(c, h) / 2,
                f = h.x + n(h, c) / 2;
            return ti(l, i ? function(t) {
                t.x = (t.x - l.x) * r[0], t.y = (l.y - t.y) * r[1]
            } : function(t) {
                t.x = (t.x - p) / (f - p) * r[0], t.y = (1 - (l.y ? t.y / l.y : 1)) * r[1]
            }), s
        }
        var e = na.layout.hierarchy().sort(null).value(null),
            n = Mi,
            r = [1, 1],
            i = !1;
        return t.separation = function(e) {
            return arguments.length ? (n = e, t) : n
        }, t.size = function(e) {
            return arguments.length ? (i = null == (r = e), t) : i ? null : r
        }, t.nodeSize = function(e) {
            return arguments.length ? (i = null != (r = e), t) : i ? r : null
        }, Zr(t, e)
    }, na.layout.treemap = function() {
        function t(t, e) {
            for (var n, r, i = -1, o = t.length; ++i < o;) r = (n = t[i]).value * (0 > e ? 0 : e), n.area = isNaN(r) || 0 >= r ? 0 : r
        }

        function e(n) {
            var o = n.children;
            if (o && o.length) {
                var a, s, l, u = h(n),
                    c = [],
                    p = o.slice(),
                    d = 1 / 0,
                    g = "slice" === f ? u.dx : "dice" === f ? u.dy : "slice-dice" === f ? 1 & n.depth ? u.dy : u.dx : Math.min(u.dx, u.dy);
                for (t(p, u.dx * u.dy / n.value), c.area = 0;
                    (l = p.length) > 0;) c.push(a = p[l - 1]), c.area += a.area, "squarify" !== f || (s = r(c, g)) <= d ? (p.pop(), d = s) : (c.area -= c.pop().area, i(c, g, u, !1), g = Math.min(u.dx, u.dy), c.length = c.area = 0, d = 1 / 0);
                c.length && (i(c, g, u, !0), c.length = c.area = 0), o.forEach(e)
            }
        }

        function n(e) {
            var r = e.children;
            if (r && r.length) {
                var o, a = h(e),
                    s = r.slice(),
                    l = [];
                for (t(s, a.dx * a.dy / e.value), l.area = 0; o = s.pop();) l.push(o), l.area += o.area, null != o.z && (i(l, o.z ? a.dx : a.dy, a, !s.length), l.length = l.area = 0);
                r.forEach(n)
            }
        }

        function r(t, e) {
            for (var n, r = t.area, i = 0, o = 1 / 0, a = -1, s = t.length; ++a < s;)(n = t[a].area) && (o > n && (o = n), n > i && (i = n));
            return r *= r, e *= e, r ? Math.max(e * i * d / r, r / (e * o * d)) : 1 / 0
        }

        function i(t, e, n, r) {
            var i, o = -1,
                a = t.length,
                s = n.x,
                u = n.y,
                c = e ? l(t.area / e) : 0;
            if (e == n.dx) {
                for ((r || c > n.dy) && (c = n.dy); ++o < a;) i = t[o], i.x = s, i.y = u, i.dy = c, s += i.dx = Math.min(n.x + n.dx - s, c ? l(i.area / c) : 0);
                i.z = !0, i.dx += n.x + n.dx - s, n.y += c, n.dy -= c
            } else {
                for ((r || c > n.dx) && (c = n.dx); ++o < a;) i = t[o], i.x = s, i.y = u, i.dx = c, u += i.dy = Math.min(n.y + n.dy - u, c ? l(i.area / c) : 0);
                i.z = !1, i.dy += n.y + n.dy - u, n.x += c, n.dx -= c
            }
        }

        function o(r) {
            var i = a || s(r),
                o = i[0];
            return o.x = 0, o.y = 0, o.dx = u[0], o.dy = u[1], a && s.revalue(o), t([o], o.dx * o.dy / o.value), (a ? n : e)(o), p && (a = i), i
        }
        var a, s = na.layout.hierarchy(),
            l = Math.round,
            u = [1, 1],
            c = null,
            h = Fi,
            p = !1,
            f = "squarify",
            d = .5 * (1 + Math.sqrt(5));
        return o.size = function(t) {
            return arguments.length ? (u = t, o) : u
        }, o.padding = function(t) {
            function e(e) {
                var n = t.call(o, e, e.depth);
                return null == n ? Fi(e) : ji(e, "number" == typeof n ? [n, n, n, n] : n)
            }

            function n(e) {
                return ji(e, t)
            }
            if (!arguments.length) return c;
            var r;
            return h = null == (c = t) ? Fi : "function" == (r = typeof t) ? e : "number" === r ? (t = [t, t, t, t], n) : n, o
        }, o.round = function(t) {
            return arguments.length ? (l = t ? Math.round : Number, o) : l != Number
        }, o.sticky = function(t) {
            return arguments.length ? (p = t, a = null, o) : p
        }, o.ratio = function(t) {
            return arguments.length ? (d = t, o) : d
        }, o.mode = function(t) {
            return arguments.length ? (f = t + "", o) : f
        }, Zr(o, s)
    }, na.random = {
        normal: function(t, e) {
            var n = arguments.length;
            return 2 > n && (e = 1), 1 > n && (t = 0),
                function() {
                    var n, r, i;
                    do n = 2 * Math.random() - 1, r = 2 * Math.random() - 1, i = n * n + r * r; while (!i || i > 1);
                    return t + e * n * Math.sqrt(-2 * Math.log(i) / i)
                }
        },
        logNormal: function() {
            var t = na.random.normal.apply(na, arguments);
            return function() {
                return Math.exp(t())
            }
        },
        bates: function(t) {
            var e = na.random.irwinHall(t);
            return function() {
                return e() / t
            }
        },
        irwinHall: function(t) {
            return function() {
                for (var e = 0, n = 0; t > n; n++) e += Math.random();
                return e
            }
        }
    }, na.scale = {};
    var bl = {
        floor: kt,
        ceil: kt
    };
    na.scale.linear = function() {
        return Hi([0, 1], [0, 1], yr, !1)
    };
    var _l = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    na.scale.log = function() {
        return Ki(na.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    };
    var wl = na.format(".0e"),
        Tl = {
            floor: function(t) {
                return -Math.ceil(-t)
            },
            ceil: function(t) {
                return -Math.floor(-t)
            }
        };
    na.scale.pow = function() {
        return Zi(na.scale.linear(), 1, [0, 1])
    }, na.scale.sqrt = function() {
        return na.scale.pow().exponent(.5)
    }, na.scale.ordinal = function() {
        return to([], {
            t: "range",
            a: [
                []
            ]
        })
    }, na.scale.category10 = function() {
        return na.scale.ordinal().range(Cl)
    }, na.scale.category20 = function() {
        return na.scale.ordinal().range(Ml)
    }, na.scale.category20b = function() {
        return na.scale.ordinal().range(kl)
    }, na.scale.category20c = function() {
        return na.scale.ordinal().range(Sl)
    };
    var Cl = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(yt),
        Ml = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(yt),
        kl = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(yt),
        Sl = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(yt);
    na.scale.quantile = function() {
        return eo([], [])
    }, na.scale.quantize = function() {
        return no(0, 1, [0, 1])
    }, na.scale.threshold = function() {
        return ro([.5], [0, 1])
    }, na.scale.identity = function() {
        return io([0, 1])
    }, na.svg = {}, na.svg.arc = function() {
        function t() {
            var t = Math.max(0, +n.apply(this, arguments)),
                u = Math.max(0, +r.apply(this, arguments)),
                c = a.apply(this, arguments) - $a,
                h = s.apply(this, arguments) - $a,
                p = Math.abs(h - c),
                f = c > h ? 0 : 1;
            if (t > u && (d = u, u = t, t = d), p >= ja) return e(u, f) + (t ? e(t, 1 - f) : "") + "Z";
            var d, g, v, m, y, x, b, _, w, T, C, M, k = 0,
                S = 0,
                A = [];
            if ((m = (+l.apply(this, arguments) || 0) / 2) && (v = o === Al ? Math.sqrt(t * t + u * u) : +o.apply(this, arguments), f || (S *= -1), u && (S = tt(v / u * Math.sin(m))), t && (k = tt(v / t * Math.sin(m)))), u) {
                y = u * Math.cos(c + S), x = u * Math.sin(c + S), b = u * Math.cos(h - S), _ = u * Math.sin(h - S);
                var E = Math.abs(h - c - 2 * S) <= Da ? 0 : 1;
                if (S && ho(y, x, b, _) === f ^ E) {
                    var N = (c + h) / 2;
                    y = u * Math.cos(N), x = u * Math.sin(N), b = _ = null
                }
            } else y = x = 0;
            if (t) {
                w = t * Math.cos(h - k), T = t * Math.sin(h - k), C = t * Math.cos(c + k), M = t * Math.sin(c + k);
                var L = Math.abs(c - h + 2 * k) <= Da ? 0 : 1;
                if (k && ho(w, T, C, M) === 1 - f ^ L) {
                    var I = (c + h) / 2;
                    w = t * Math.cos(I), T = t * Math.sin(I), C = M = null
                }
            } else w = T = 0;
            if ((d = Math.min(Math.abs(u - t) / 2, +i.apply(this, arguments))) > .001) {
                g = u > t ^ f ? 0 : 1;
                var P = null == C ? [w, T] : null == b ? [y, x] : Pn([y, x], [C, M], [b, _], [w, T]),
                    D = y - P[0],
                    F = x - P[1],
                    j = b - P[0],
                    $ = _ - P[1],
                    R = 1 / Math.sin(Math.acos((D * j + F * $) / (Math.sqrt(D * D + F * F) * Math.sqrt(j * j + $ * $))) / 2),
                    z = Math.sqrt(P[0] * P[0] + P[1] * P[1]);
                if (null != b) {
                    var B = Math.min(d, (u - z) / (R + 1)),
                        q = po(null == C ? [w, T] : [C, M], [y, x], u, B, f),
                        O = po([b, _], [w, T], u, B, f);
                    d === B ? A.push("M", q[0], "A", B, ",", B, " 0 0,", g, " ", q[1], "A", u, ",", u, " 0 ", 1 - f ^ ho(q[1][0], q[1][1], O[1][0], O[1][1]), ",", f, " ", O[1], "A", B, ",", B, " 0 0,", g, " ", O[0]) : A.push("M", q[0], "A", B, ",", B, " 0 1,", g, " ", O[0])
                } else A.push("M", y, ",", x);
                if (null != C) {
                    var H = Math.min(d, (t - z) / (R - 1)),
                        W = po([y, x], [C, M], t, -H, f),
                        U = po([w, T], null == b ? [y, x] : [b, _], t, -H, f);
                    d === H ? A.push("L", U[0], "A", H, ",", H, " 0 0,", g, " ", U[1], "A", t, ",", t, " 0 ", f ^ ho(U[1][0], U[1][1], W[1][0], W[1][1]), ",", 1 - f, " ", W[1], "A", H, ",", H, " 0 0,", g, " ", W[0]) : A.push("L", U[0], "A", H, ",", H, " 0 0,", g, " ", W[0])
                } else A.push("L", w, ",", T)
            } else A.push("M", y, ",", x), null != b && A.push("A", u, ",", u, " 0 ", E, ",", f, " ", b, ",", _), A.push("L", w, ",", T), null != C && A.push("A", t, ",", t, " 0 ", L, ",", 1 - f, " ", C, ",", M);
            return A.push("Z"), A.join("")
        }

        function e(t, e) {
            return "M0," + t + "A" + t + "," + t + " 0 1," + e + " 0," + -t + "A" + t + "," + t + " 0 1," + e + " 0," + t
        }
        var n = ao,
            r = so,
            i = oo,
            o = Al,
            a = lo,
            s = uo,
            l = co;
        return t.innerRadius = function(e) {
            return arguments.length ? (n = Mt(e), t) : n
        }, t.outerRadius = function(e) {
            return arguments.length ? (r = Mt(e), t) : r
        }, t.cornerRadius = function(e) {
            return arguments.length ? (i = Mt(e), t) : i
        }, t.padRadius = function(e) {
            return arguments.length ? (o = e == Al ? Al : Mt(e), t) : o
        }, t.startAngle = function(e) {
            return arguments.length ? (a = Mt(e), t) : a
        }, t.endAngle = function(e) {
            return arguments.length ? (s = Mt(e), t) : s
        }, t.padAngle = function(e) {
            return arguments.length ? (l = Mt(e), t) : l
        }, t.centroid = function() {
            var t = (+n.apply(this, arguments) + +r.apply(this, arguments)) / 2,
                e = (+a.apply(this, arguments) + +s.apply(this, arguments)) / 2 - $a;
            return [Math.cos(e) * t, Math.sin(e) * t]
        }, t
    };
    var Al = "auto";
    na.svg.line = function() {
        return fo(kt)
    };
    var El = na.map({
        linear: go,
        "linear-closed": vo,
        step: mo,
        "step-before": yo,
        "step-after": xo,
        basis: Mo,
        "basis-open": ko,
        "basis-closed": So,
        bundle: Ao,
        cardinal: wo,
        "cardinal-open": bo,
        "cardinal-closed": _o,
        monotone: Do
    });
    El.forEach(function(t, e) {
        e.key = t, e.closed = /-closed$/.test(t)
    });
    var Nl = [0, 2 / 3, 1 / 3, 0],
        Ll = [0, 1 / 3, 2 / 3, 0],
        Il = [0, 1 / 6, 2 / 3, 1 / 6];
    na.svg.line.radial = function() {
        var t = fo(Fo);
        return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
    }, yo.reverse = xo, xo.reverse = yo, na.svg.area = function() {
        return jo(kt)
    }, na.svg.area.radial = function() {
        var t = jo(Fo);
        return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
    }, na.svg.chord = function() {
        function t(t, s) {
            var l = e(this, o, t, s),
                u = e(this, a, t, s);
            return "M" + l.p0 + r(l.r, l.p1, l.a1 - l.a0) + (n(l, u) ? i(l.r, l.p1, l.r, l.p0) : i(l.r, l.p1, u.r, u.p0) + r(u.r, u.p1, u.a1 - u.a0) + i(u.r, u.p1, l.r, l.p0)) + "Z"
        }

        function e(t, e, n, r) {
            var i = e.call(t, n, r),
                o = s.call(t, i, r),
                a = l.call(t, i, r) - $a,
                c = u.call(t, i, r) - $a;
            return {
                r: o,
                a0: a,
                a1: c,
                p0: [o * Math.cos(a), o * Math.sin(a)],
                p1: [o * Math.cos(c), o * Math.sin(c)]
            }
        }

        function n(t, e) {
            return t.a0 == e.a0 && t.a1 == e.a1
        }

        function r(t, e, n) {
            return "A" + t + "," + t + " 0 " + +(n > Da) + ",1 " + e
        }

        function i(t, e, n, r) {
            return "Q 0,0 " + r
        }
        var o = yn,
            a = xn,
            s = $o,
            l = lo,
            u = uo;
        return t.radius = function(e) {
            return arguments.length ? (s = Mt(e), t) : s
        }, t.source = function(e) {
            return arguments.length ? (o = Mt(e), t) : o
        }, t.target = function(e) {
            return arguments.length ? (a = Mt(e), t) : a
        }, t.startAngle = function(e) {
            return arguments.length ? (l = Mt(e), t) : l
        }, t.endAngle = function(e) {
            return arguments.length ? (u = Mt(e), t) : u
        }, t
    }, na.svg.diagonal = function() {
        function t(t, i) {
            var o = e.call(this, t, i),
                a = n.call(this, t, i),
                s = (o.y + a.y) / 2,
                l = [o, {
                    x: o.x,
                    y: s
                }, {
                    x: a.x,
                    y: s
                }, a];
            return l = l.map(r), "M" + l[0] + "C" + l[1] + " " + l[2] + " " + l[3]
        }
        var e = yn,
            n = xn,
            r = Ro;
        return t.source = function(n) {
            return arguments.length ? (e = Mt(n), t) : e
        }, t.target = function(e) {
            return arguments.length ? (n = Mt(e), t) : n
        }, t.projection = function(e) {
            return arguments.length ? (r = e, t) : r
        }, t
    }, na.svg.diagonal.radial = function() {
        var t = na.svg.diagonal(),
            e = Ro,
            n = t.projection;
        return t.projection = function(t) {
            return arguments.length ? n(zo(e = t)) : e
        }, t
    }, na.svg.symbol = function() {
        function t(t, r) {
            return (Pl.get(e.call(this, t, r)) || Oo)(n.call(this, t, r))
        }
        var e = qo,
            n = Bo;
        return t.type = function(n) {
            return arguments.length ? (e = Mt(n), t) : e
        }, t.size = function(e) {
            return arguments.length ? (n = Mt(e), t) : n
        }, t
    };
    var Pl = na.map({
        circle: Oo,
        cross: function(t) {
            var e = Math.sqrt(t / 5) / 2;
            return "M" + -3 * e + "," + -e + "H" + -e + "V" + -3 * e + "H" + e + "V" + -e + "H" + 3 * e + "V" + e + "H" + e + "V" + 3 * e + "H" + -e + "V" + e + "H" + -3 * e + "Z"
        },
        diamond: function(t) {
            var e = Math.sqrt(t / (2 * Fl)),
                n = e * Fl;
            return "M0," + -e + "L" + n + ",0 0," + e + " " + -n + ",0Z"
        },
        square: function(t) {
            var e = Math.sqrt(t) / 2;
            return "M" + -e + "," + -e + "L" + e + "," + -e + " " + e + "," + e + " " + -e + "," + e + "Z"
        },
        "triangle-down": function(t) {
            var e = Math.sqrt(t / Dl),
                n = e * Dl / 2;
            return "M0," + n + "L" + e + "," + -n + " " + -e + "," + -n + "Z"
        },
        "triangle-up": function(t) {
            var e = Math.sqrt(t / Dl),
                n = e * Dl / 2;
            return "M0," + -n + "L" + e + "," + n + " " + -e + "," + n + "Z"
        }
    });
    na.svg.symbolTypes = Pl.keys();
    var Dl = Math.sqrt(3),
        Fl = Math.tan(30 * Ra);
    Ca.transition = function(t) {
        for (var e, n, r = jl || ++Bl, i = Vo(t), o = [], a = $l || {
                time: Date.now(),
                ease: Mr,
                delay: 0,
                duration: 250
            }, s = -1, l = this.length; ++s < l;) {
            o.push(e = []);
            for (var u = this[s], c = -1, h = u.length; ++c < h;)(n = u[c]) && Go(n, c, i, r, a), e.push(n)
        }
        return Wo(o, i, r)
    }, Ca.interrupt = function(t) {
        return this.each(null == t ? Rl : Ho(Vo(t)))
    };
    var jl, $l, Rl = Ho(Vo()),
        zl = [],
        Bl = 0;
    zl.call = Ca.call, zl.empty = Ca.empty, zl.node = Ca.node, zl.size = Ca.size, na.transition = function(t, e) {
            return t && t.transition ? jl ? t.transition(e) : t : Sa.transition(t)
        }, na.transition.prototype = zl, zl.select = function(t) {
            var e, n, r, i = this.id,
                o = this.namespace,
                a = [];
            t = M(t);
            for (var s = -1, l = this.length; ++s < l;) {
                a.push(e = []);
                for (var u = this[s], c = -1, h = u.length; ++c < h;)(r = u[c]) && (n = t.call(r, r.__data__, c, s)) ? ("__data__" in r && (n.__data__ = r.__data__), Go(n, c, o, i, r[o][i]), e.push(n)) : e.push(null)
            }
            return Wo(a, o, i)
        }, zl.selectAll = function(t) {
            var e, n, r, i, o, a = this.id,
                s = this.namespace,
                l = [];
            t = k(t);
            for (var u = -1, c = this.length; ++u < c;)
                for (var h = this[u], p = -1, f = h.length; ++p < f;)
                    if (r = h[p]) {
                        o = r[s][a], n = t.call(r, r.__data__, p, u), l.push(e = []);
                        for (var d = -1, g = n.length; ++d < g;)(i = n[d]) && Go(i, d, s, a, o), e.push(i)
                    }
            return Wo(l, s, a)
        },
        zl.filter = function(t) {
            var e, n, r, i = [];
            "function" != typeof t && (t = R(t));
            for (var o = 0, a = this.length; a > o; o++) {
                i.push(e = []);
                for (var n = this[o], s = 0, l = n.length; l > s; s++)(r = n[s]) && t.call(r, r.__data__, s, o) && e.push(r)
            }
            return Wo(i, this.namespace, this.id)
        }, zl.tween = function(t, e) {
            var n = this.id,
                r = this.namespace;
            return arguments.length < 2 ? this.node()[r][n].tween.get(t) : B(this, null == e ? function(e) {
                e[r][n].tween.remove(t)
            } : function(i) {
                i[r][n].tween.set(t, e)
            })
        }, zl.attr = function(t, e) {
            function n() {
                this.removeAttribute(s)
            }

            function r() {
                this.removeAttributeNS(s.space, s.local)
            }

            function i(t) {
                return null == t ? n : (t += "", function() {
                    var e, n = this.getAttribute(s);
                    return n !== t && (e = a(n, t), function(t) {
                        this.setAttribute(s, e(t))
                    })
                })
            }

            function o(t) {
                return null == t ? r : (t += "", function() {
                    var e, n = this.getAttributeNS(s.space, s.local);
                    return n !== t && (e = a(n, t), function(t) {
                        this.setAttributeNS(s.space, s.local, e(t))
                    })
                })
            }
            if (arguments.length < 2) {
                for (e in t) this.attr(e, t[e]);
                return this
            }
            var a = "transform" == t ? qr : yr,
                s = na.ns.qualify(t);
            return Uo(this, "attr." + t, e, s.local ? o : i)
        }, zl.attrTween = function(t, e) {
            function n(t, n) {
                var r = e.call(this, t, n, this.getAttribute(i));
                return r && function(t) {
                    this.setAttribute(i, r(t))
                }
            }

            function r(t, n) {
                var r = e.call(this, t, n, this.getAttributeNS(i.space, i.local));
                return r && function(t) {
                    this.setAttributeNS(i.space, i.local, r(t))
                }
            }
            var i = na.ns.qualify(t);
            return this.tween("attr." + t, i.local ? r : n)
        }, zl.style = function(t, e, n) {
            function r() {
                this.style.removeProperty(t)
            }

            function i(e) {
                return null == e ? r : (e += "", function() {
                    var r, i = sa.getComputedStyle(this, null).getPropertyValue(t);
                    return i !== e && (r = yr(i, e), function(e) {
                        this.style.setProperty(t, r(e), n)
                    })
                })
            }
            var o = arguments.length;
            if (3 > o) {
                if ("string" != typeof t) {
                    2 > o && (e = "");
                    for (n in t) this.style(n, t[n], e);
                    return this
                }
                n = ""
            }
            return Uo(this, "style." + t, e, i)
        }, zl.styleTween = function(t, e, n) {
            function r(r, i) {
                var o = e.call(this, r, i, sa.getComputedStyle(this, null).getPropertyValue(t));
                return o && function(e) {
                    this.style.setProperty(t, o(e), n)
                }
            }
            return arguments.length < 3 && (n = ""), this.tween("style." + t, r)
        }, zl.text = function(t) {
            return Uo(this, "text", t, Yo)
        }, zl.remove = function() {
            var t = this.namespace;
            return this.each("end.transition", function() {
                var e;
                this[t].count < 2 && (e = this.parentNode) && e.removeChild(this)
            })
        }, zl.ease = function(t) {
            var e = this.id,
                n = this.namespace;
            return arguments.length < 1 ? this.node()[n][e].ease : ("function" != typeof t && (t = na.ease.apply(na, arguments)), B(this, function(r) {
                r[n][e].ease = t
            }))
        }, zl.delay = function(t) {
            var e = this.id,
                n = this.namespace;
            return arguments.length < 1 ? this.node()[n][e].delay : B(this, "function" == typeof t ? function(r, i, o) {
                r[n][e].delay = +t.call(r, r.__data__, i, o)
            } : (t = +t, function(r) {
                r[n][e].delay = t
            }))
        }, zl.duration = function(t) {
            var e = this.id,
                n = this.namespace;
            return arguments.length < 1 ? this.node()[n][e].duration : B(this, "function" == typeof t ? function(r, i, o) {
                r[n][e].duration = Math.max(1, t.call(r, r.__data__, i, o))
            } : (t = Math.max(1, t), function(r) {
                r[n][e].duration = t
            }))
        }, zl.each = function(t, e) {
            var n = this.id,
                r = this.namespace;
            if (arguments.length < 2) {
                var i = $l,
                    o = jl;
                try {
                    jl = n, B(this, function(e, i, o) {
                        $l = e[r][n], t.call(e, e.__data__, i, o)
                    })
                } finally {
                    $l = i, jl = o
                }
            } else B(this, function(i) {
                var o = i[r][n];
                (o.event || (o.event = na.dispatch("start", "end", "interrupt"))).on(t, e)
            });
            return this
        }, zl.transition = function() {
            for (var t, e, n, r, i = this.id, o = ++Bl, a = this.namespace, s = [], l = 0, u = this.length; u > l; l++) {
                s.push(t = []);
                for (var e = this[l], c = 0, h = e.length; h > c; c++)(n = e[c]) && (r = n[a][i], Go(n, c, a, o, {
                    time: r.time,
                    ease: r.ease,
                    delay: r.delay + r.duration,
                    duration: r.duration
                })), t.push(n)
            }
            return Wo(s, a, o)
        }, na.svg.axis = function() {
            function t(t) {
                t.each(function() {
                    var t, u = na.select(this),
                        c = this.__chart__ || n,
                        h = this.__chart__ = n.copy(),
                        p = null == l ? h.ticks ? h.ticks.apply(h, s) : h.domain() : l,
                        f = null == e ? h.tickFormat ? h.tickFormat.apply(h, s) : kt : e,
                        d = u.selectAll(".tick").data(p, h),
                        g = d.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Ia),
                        v = na.transition(d.exit()).style("opacity", Ia).remove(),
                        m = na.transition(d.order()).style("opacity", 1),
                        y = Math.max(i, 0) + a,
                        x = Ri(h),
                        b = u.selectAll(".domain").data([0]),
                        _ = (b.enter().append("path").attr("class", "domain"), na.transition(b));
                    g.append("line"), g.append("text");
                    var w, T, C, M, k = g.select("line"),
                        S = m.select("line"),
                        A = d.select("text").text(f),
                        E = g.select("text"),
                        N = m.select("text"),
                        L = "top" === r || "left" === r ? -1 : 1;
                    if ("bottom" === r || "top" === r ? (t = Xo, w = "x", C = "y", T = "x2", M = "y2", A.attr("dy", 0 > L ? "0em" : ".71em").style("text-anchor", "middle"), _.attr("d", "M" + x[0] + "," + L * o + "V0H" + x[1] + "V" + L * o)) : (t = Jo, w = "y", C = "x", T = "y2", M = "x2", A.attr("dy", ".32em").style("text-anchor", 0 > L ? "end" : "start"), _.attr("d", "M" + L * o + "," + x[0] + "H0V" + x[1] + "H" + L * o)), k.attr(M, L * i), E.attr(C, L * y), S.attr(T, 0).attr(M, L * i), N.attr(w, 0).attr(C, L * y), h.rangeBand) {
                        var I = h,
                            P = I.rangeBand() / 2;
                        c = h = function(t) {
                            return I(t) + P
                        }
                    } else c.rangeBand ? c = h : v.call(t, h, c);
                    g.call(t, c, h), m.call(t, h, h)
                })
            }
            var e, n = na.scale.linear(),
                r = ql,
                i = 6,
                o = 6,
                a = 3,
                s = [10],
                l = null;
            return t.scale = function(e) {
                return arguments.length ? (n = e, t) : n
            }, t.orient = function(e) {
                return arguments.length ? (r = e in Ol ? e + "" : ql, t) : r
            }, t.ticks = function() {
                return arguments.length ? (s = arguments, t) : s
            }, t.tickValues = function(e) {
                return arguments.length ? (l = e, t) : l
            }, t.tickFormat = function(n) {
                return arguments.length ? (e = n, t) : e
            }, t.tickSize = function(e) {
                var n = arguments.length;
                return n ? (i = +e, o = +arguments[n - 1], t) : i
            }, t.innerTickSize = function(e) {
                return arguments.length ? (i = +e, t) : i
            }, t.outerTickSize = function(e) {
                return arguments.length ? (o = +e, t) : o
            }, t.tickPadding = function(e) {
                return arguments.length ? (a = +e, t) : a
            }, t.tickSubdivide = function() {
                return arguments.length && t
            }, t
        };
    var ql = "bottom",
        Ol = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
        };
    na.svg.brush = function() {
        function t(o) {
            o.each(function() {
                var o = na.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", i).on("touchstart.brush", i),
                    a = o.selectAll(".background").data([0]);
                a.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), o.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                var s = o.selectAll(".resize").data(d, kt);
                s.exit().remove(), s.enter().append("g").attr("class", function(t) {
                    return "resize " + t
                }).style("cursor", function(t) {
                    return Hl[t]
                }).append("rect").attr("x", function(t) {
                    return /[ew]$/.test(t) ? -3 : null
                }).attr("y", function(t) {
                    return /^[ns]/.test(t) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), s.style("display", t.empty() ? "none" : null);
                var c, h = na.transition(o),
                    p = na.transition(a);
                l && (c = Ri(l), p.attr("x", c[0]).attr("width", c[1] - c[0]), n(h)), u && (c = Ri(u), p.attr("y", c[0]).attr("height", c[1] - c[0]), r(h)), e(h)
            })
        }

        function e(t) {
            t.selectAll(".resize").attr("transform", function(t) {
                return "translate(" + c[+/e$/.test(t)] + "," + h[+/^s/.test(t)] + ")"
            })
        }

        function n(t) {
            t.select(".extent").attr("x", c[0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", c[1] - c[0])
        }

        function r(t) {
            t.select(".extent").attr("y", h[0]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0])
        }

        function i() {
            function i() {
                32 == na.event.keyCode && (A || (y = null, N[0] -= c[1], N[1] -= h[1], A = 2), _())
            }

            function d() {
                32 == na.event.keyCode && 2 == A && (N[0] += c[1], N[1] += h[1], A = 0, _())
            }

            function g() {
                var t = na.mouse(b),
                    i = !1;
                x && (t[0] += x[0], t[1] += x[1]), A || (na.event.altKey ? (y || (y = [(c[0] + c[1]) / 2, (h[0] + h[1]) / 2]), N[0] = c[+(t[0] < y[0])], N[1] = h[+(t[1] < y[1])]) : y = null), k && v(t, l, 0) && (n(C), i = !0), S && v(t, u, 1) && (r(C), i = !0), i && (e(C), T({
                    type: "brush",
                    mode: A ? "move" : "resize"
                }))
            }

            function v(t, e, n) {
                var r, i, s = Ri(e),
                    l = s[0],
                    u = s[1],
                    d = N[n],
                    g = n ? h : c,
                    v = g[1] - g[0];
                return A && (l -= d, u -= v + d), r = (n ? f : p) ? Math.max(l, Math.min(u, t[n])) : t[n], A ? i = (r += d) + v : (y && (d = Math.max(l, Math.min(u, 2 * y[n] - r))), r > d ? (i = r, r = d) : i = d), g[0] != r || g[1] != i ? (n ? a = null : o = null, g[0] = r, g[1] = i, !0) : void 0
            }

            function m() {
                g(), C.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null), na.select("body").style("cursor", null), L.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), E(), T({
                    type: "brushend"
                })
            }
            var y, x, b = this,
                w = na.select(na.event.target),
                T = s.of(b, arguments),
                C = na.select(b),
                M = w.datum(),
                k = !/^(n|s)$/.test(M) && l,
                S = !/^(e|w)$/.test(M) && u,
                A = w.classed("extent"),
                E = Y(),
                N = na.mouse(b),
                L = na.select(sa).on("keydown.brush", i).on("keyup.brush", d);
            if (na.event.changedTouches ? L.on("touchmove.brush", g).on("touchend.brush", m) : L.on("mousemove.brush", g).on("mouseup.brush", m), C.interrupt().selectAll("*").interrupt(), A) N[0] = c[0] - N[0], N[1] = h[0] - N[1];
            else if (M) {
                var I = +/w$/.test(M),
                    P = +/^n/.test(M);
                x = [c[1 - I] - N[0], h[1 - P] - N[1]], N[0] = c[I], N[1] = h[P]
            } else na.event.altKey && (y = N.slice());
            C.style("pointer-events", "none").selectAll(".resize").style("display", null), na.select("body").style("cursor", w.style("cursor")), T({
                type: "brushstart"
            }), g()
        }
        var o, a, s = T(t, "brushstart", "brush", "brushend"),
            l = null,
            u = null,
            c = [0, 0],
            h = [0, 0],
            p = !0,
            f = !0,
            d = Wl[0];
        return t.event = function(t) {
            t.each(function() {
                var t = s.of(this, arguments),
                    e = {
                        x: c,
                        y: h,
                        i: o,
                        j: a
                    },
                    n = this.__chart__ || e;
                this.__chart__ = e, jl ? na.select(this).transition().each("start.brush", function() {
                    o = n.i, a = n.j, c = n.x, h = n.y, t({
                        type: "brushstart"
                    })
                }).tween("brush:brush", function() {
                    var n = xr(c, e.x),
                        r = xr(h, e.y);
                    return o = a = null,
                        function(i) {
                            c = e.x = n(i), h = e.y = r(i), t({
                                type: "brush",
                                mode: "resize"
                            })
                        }
                }).each("end.brush", function() {
                    o = e.i, a = e.j, t({
                        type: "brush",
                        mode: "resize"
                    }), t({
                        type: "brushend"
                    })
                }) : (t({
                    type: "brushstart"
                }), t({
                    type: "brush",
                    mode: "resize"
                }), t({
                    type: "brushend"
                }))
            })
        }, t.x = function(e) {
            return arguments.length ? (l = e, d = Wl[!l << 1 | !u], t) : l
        }, t.y = function(e) {
            return arguments.length ? (u = e, d = Wl[!l << 1 | !u], t) : u
        }, t.clamp = function(e) {
            return arguments.length ? (l && u ? (p = !!e[0], f = !!e[1]) : l ? p = !!e : u && (f = !!e), t) : l && u ? [p, f] : l ? p : u ? f : null
        }, t.extent = function(e) {
            var n, r, i, s, p;
            return arguments.length ? (l && (n = e[0], r = e[1], u && (n = n[0], r = r[0]), o = [n, r], l.invert && (n = l(n), r = l(r)), n > r && (p = n, n = r, r = p), (n != c[0] || r != c[1]) && (c = [n, r])), u && (i = e[0], s = e[1], l && (i = i[1], s = s[1]), a = [i, s], u.invert && (i = u(i), s = u(s)), i > s && (p = i, i = s, s = p), (i != h[0] || s != h[1]) && (h = [i, s])), t) : (l && (o ? (n = o[0], r = o[1]) : (n = c[0], r = c[1], l.invert && (n = l.invert(n), r = l.invert(r)), n > r && (p = n, n = r, r = p))), u && (a ? (i = a[0], s = a[1]) : (i = h[0], s = h[1], u.invert && (i = u.invert(i), s = u.invert(s)), i > s && (p = i, i = s, s = p))), l && u ? [
                [n, i],
                [r, s]
            ] : l ? [n, r] : u && [i, s])
        }, t.clear = function() {
            return t.empty() || (c = [0, 0], h = [0, 0], o = a = null), t
        }, t.empty = function() {
            return !!l && c[0] == c[1] || !!u && h[0] == h[1]
        }, na.rebind(t, s, "on")
    };
    var Hl = {
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        },
        Wl = [
            ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
            ["e", "w"],
            ["n", "s"],
            []
        ],
        Ul = cs.format = vs.timeFormat,
        Yl = Ul.utc,
        Vl = Yl("%Y-%m-%dT%H:%M:%S.%LZ");
    Ul.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Ko : Vl, Ko.parse = function(t) {
        var e = new Date(t);
        return isNaN(e) ? null : e
    }, Ko.toString = Vl.toString, cs.second = zt(function(t) {
        return new hs(1e3 * Math.floor(t / 1e3))
    }, function(t, e) {
        t.setTime(t.getTime() + 1e3 * Math.floor(e))
    }, function(t) {
        return t.getSeconds()
    }), cs.seconds = cs.second.range, cs.seconds.utc = cs.second.utc.range, cs.minute = zt(function(t) {
        return new hs(6e4 * Math.floor(t / 6e4))
    }, function(t, e) {
        t.setTime(t.getTime() + 6e4 * Math.floor(e))
    }, function(t) {
        return t.getMinutes()
    }), cs.minutes = cs.minute.range, cs.minutes.utc = cs.minute.utc.range, cs.hour = zt(function(t) {
        var e = t.getTimezoneOffset() / 60;
        return new hs(36e5 * (Math.floor(t / 36e5 - e) + e))
    }, function(t, e) {
        t.setTime(t.getTime() + 36e5 * Math.floor(e))
    }, function(t) {
        return t.getHours()
    }), cs.hours = cs.hour.range, cs.hours.utc = cs.hour.utc.range, cs.month = zt(function(t) {
        return t = cs.day(t), t.setDate(1), t
    }, function(t, e) {
        t.setMonth(t.getMonth() + e)
    }, function(t) {
        return t.getMonth()
    }), cs.months = cs.month.range, cs.months.utc = cs.month.utc.range;
    var Gl = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
        Xl = [
            [cs.second, 1],
            [cs.second, 5],
            [cs.second, 15],
            [cs.second, 30],
            [cs.minute, 1],
            [cs.minute, 5],
            [cs.minute, 15],
            [cs.minute, 30],
            [cs.hour, 1],
            [cs.hour, 3],
            [cs.hour, 6],
            [cs.hour, 12],
            [cs.day, 1],
            [cs.day, 2],
            [cs.week, 1],
            [cs.month, 1],
            [cs.month, 3],
            [cs.year, 1]
        ],
        Jl = Ul.multi([
            [".%L", function(t) {
                return t.getMilliseconds()
            }],
            [":%S", function(t) {
                return t.getSeconds()
            }],
            ["%I:%M", function(t) {
                return t.getMinutes()
            }],
            ["%I %p", function(t) {
                return t.getHours()
            }],
            ["%a %d", function(t) {
                return t.getDay() && 1 != t.getDate()
            }],
            ["%b %d", function(t) {
                return 1 != t.getDate()
            }],
            ["%B", function(t) {
                return t.getMonth()
            }],
            ["%Y", Ae]
        ]),
        Kl = {
            range: function(t, e, n) {
                return na.range(Math.ceil(t / n) * n, +e, n).map(Qo)
            },
            floor: kt,
            ceil: kt
        };
    Xl.year = cs.year, cs.scale = function() {
        return Zo(na.scale.linear(), Xl, Jl)
    };
    var Zl = Xl.map(function(t) {
            return [t[0].utc, t[1]]
        }),
        Ql = Yl.multi([
            [".%L", function(t) {
                return t.getUTCMilliseconds()
            }],
            [":%S", function(t) {
                return t.getUTCSeconds()
            }],
            ["%I:%M", function(t) {
                return t.getUTCMinutes()
            }],
            ["%I %p", function(t) {
                return t.getUTCHours()
            }],
            ["%a %d", function(t) {
                return t.getUTCDay() && 1 != t.getUTCDate()
            }],
            ["%b %d", function(t) {
                return 1 != t.getUTCDate()
            }],
            ["%B", function(t) {
                return t.getUTCMonth()
            }],
            ["%Y", Ae]
        ]);
    Zl.year = cs.year.utc, cs.scale.utc = function() {
        return Zo(na.scale.linear(), Zl, Ql)
    }, na.text = St(function(t) {
        return t.responseText
    }), na.json = function(t, e) {
        return At(t, "application/json", ta, e)
    }, na.html = function(t, e) {
        return At(t, "text/html", ea, e)
    }, na.xml = St(function(t) {
        return t.responseXML
    }), "function" == typeof define && define.amd ? define(na) : "object" == typeof module && module.exports && (module.exports = na), this.d3 = na
}(),
function() {
    function t(t, e, n) {
        "undefined" == typeof n && (n = e, optionsValues = void 0);
        var r = "undefined" != typeof t ? t : e;
        if ("undefined" == typeof r) return null;
        if ("function" == typeof r) {
            var i = [n];
            return n.geography && (i = [n.geography, n.data]), r.apply(null, i)
        }
        return r
    }

    function e(t, e, n) {
        return this.svg = f.select(t).append("svg").attr("width", n || t.offsetWidth).attr("data-width", n || t.offsetWidth).attr("class", "datamap").attr("height", e || t.offsetHeight).style("overflow", "hidden"), this.options.responsive && (f.select(this.options.element).style({
            position: "relative",
            "padding-bottom": 100 * this.options.aspectRatio + "%"
        }), f.select(this.options.element).select("svg").style({
            position: "absolute",
            width: "100%",
            height: "100%"
        }), f.select(this.options.element).select("svg").select("g").selectAll("path").style("vector-effect", "non-scaling-stroke")), this.svg
    }

    function n(t, e) {
        var n, r, i = e.width || t.offsetWidth,
            o = e.height || t.offsetHeight,
            a = this.svg;
        return e && "undefined" == typeof e.scope && (e.scope = "world"), "usa" === e.scope ? n = f.geo.albersUsa().scale(i).translate([i / 2, o / 2]) : "world" === e.scope && (n = f.geo[e.projection]().scale((i + 1) / 2 / Math.PI).translate([i / 2, o / ("mercator" === e.projection ? 1.45 : 1.8)])), "orthographic" === e.projection && (a.append("defs").append("path").datum({
            type: "Sphere"
        }).attr("id", "sphere").attr("d", r), a.append("use").attr("class", "stroke").attr("xlink:href", "#sphere"), a.append("use").attr("class", "fill").attr("xlink:href", "#sphere"), n.scale(250).clipAngle(90).rotate(e.projectionConfig.rotation)), r = f.geo.path().projection(n), {
            path: r,
            projection: n
        }
    }

    function r() {
        f.select(".datamaps-style-block").empty() && f.select("head").append("style").attr("class", "datamaps-style-block").html('.datamap path.datamaps-graticule { fill: none; stroke: #777; stroke-width: 0.5px; stroke-opacity: .5; pointer-events: none; } .datamap .labels {pointer-events: none;} .datamap path {stroke: #FFFFFF; stroke-width: 1px;} .datamaps-legend dt, .datamaps-legend dd { float: left; margin: 0 3px 0 0;} .datamaps-legend dd {width: 20px; margin-right: 6px; border-radius: 3px;} .datamaps-legend {padding-bottom: 20px; z-index: 1001; position: absolute; left: 4px; font-size: 12px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;} .datamaps-hoverover {display: none; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; } .hoverinfo {padding: 4px; border-radius: 1px; background-color: #FFF; box-shadow: 1px 1px 5px #CCC; font-size: 12px; border: 1px solid #CCC; } .hoverinfo hr {border:1px dotted #CCC; }')
    }

    function i(e) {
        var n = this.options.fills,
            r = this.options.data || {},
            i = this.options.geographyConfig,
            o = this.svg.select("g.datamaps-subunits");
        o.empty() && (o = this.addLayer("datamaps-subunits", null, !0));
        var a = d.feature(e, e.objects[this.options.scope]).features;
        i.hideAntarctica && (a = a.filter(function(t) {
            return "ATA" !== t.id
        })), i.hideHawaiiAndAlaska && (a = a.filter(function(t) {
            return "HI" !== t.id && "AK" !== t.id
        }));
        var s = o.selectAll("path.datamaps-subunit").data(a);
        s.enter().append("path").attr("d", this.path).attr("class", function(t) {
            return "datamaps-subunit " + t.id
        }).attr("data-info", function(t) {
            return JSON.stringify(r[t.id])
        }).style("fill", function(e) {
            var i, o = r[e.id];
            return o && o.fillKey && (i = n[t(o.fillKey, {
                data: r[e.id],
                geography: e
            })]), "undefined" == typeof i && (i = t(o && o.fillColor, n.defaultFill, {
                data: r[e.id],
                geography: e
            })), i
        }).style("stroke-width", i.borderWidth).style("stroke", i.borderColor)
    }

    function o() {
        function e() {
            this.parentNode.appendChild(this)
        }
        var n = this.svg,
            r = this,
            i = this.options.geographyConfig;
        (i.highlightOnHover || i.popupOnHover) && n.selectAll(".datamaps-subunit").on("mouseover", function(o) {
            var a = f.select(this),
                s = r.options.data[o.id] || {};
            if (i.highlightOnHover) {
                var l = {
                    fill: a.style("fill"),
                    stroke: a.style("stroke"),
                    "stroke-width": a.style("stroke-width"),
                    "fill-opacity": a.style("fill-opacity")
                };
                a.style("fill", t(s.highlightFillColor, i.highlightFillColor, s)).style("stroke", t(s.highlightBorderColor, i.highlightBorderColor, s)).style("stroke-width", t(s.highlightBorderWidth, i.highlightBorderWidth, s)).style("fill-opacity", t(s.highlightFillOpacity, i.highlightFillOpacity, s)).attr("data-previousAttributes", JSON.stringify(l)), /((MSIE)|(Trident))/.test(navigator.userAgent) || e.call(this)
            }
            i.popupOnHover && r.updatePopup(a, o, i, n)
        }).on("mouseout", function() {
            var t = f.select(this);
            if (i.highlightOnHover) {
                var e = JSON.parse(t.attr("data-previousAttributes"));
                for (var n in e) t.style(n, e[n])
            }
            t.on("mousemove", null), f.selectAll(".datamaps-hoverover").style("display", "none")
        })
    }

    function a(t, e, n) {
        if (e = e || {}, this.options.fills) {
            var r = "<dl>",
                i = "";
            e.legendTitle && (r = "<h2>" + e.legendTitle + "</h2>" + r);
            for (var o in this.options.fills) {
                if ("defaultFill" === o) {
                    if (!e.defaultFillName) continue;
                    i = e.defaultFillName
                } else i = e.labels && e.labels[o] ? e.labels[o] : o + ": ";
                r += "<dt>" + i + "</dt>", r += '<dd style="background-color:' + this.options.fills[o] + '">&nbsp;</dd>'
            }
            r += "</dl>";
            f.select(this.options.element).append("div").attr("class", "datamaps-legend").html(r)
        }
    }

    function s(t, e) {
        var n = f.geo.graticule();
        this.svg.insert("path", ".datamaps-subunits").datum(n).attr("class", "datamaps-graticule").attr("d", this.path)
    }

    function l(e, n, r) {
        var i = this;
        this.svg;
        if (!n || n && !n.slice) throw "Datamaps Error - arcs must be an array";
        for (var o = 0; o < n.length; o++) n[o] = h(n[o], n[o].options), delete n[o].options;
        "undefined" == typeof r && (r = g.arcConfig);
        var a = e.selectAll("path.datamaps-arc").data(n, JSON.stringify),
            s = f.geo.path().projection(i.projection);
        a.enter().append("svg:path").attr("class", "datamaps-arc").style("stroke-linecap", "round").style("stroke", function(e) {
            return t(e.strokeColor, r.strokeColor, e)
        }).style("fill", "none").style("stroke-width", function(e) {
            return t(e.strokeWidth, r.strokeWidth, e)
        }).attr("d", function(e) {
            var n = i.latLngToXY(t(e.origin.latitude, e), t(e.origin.longitude, e)),
                o = i.latLngToXY(t(e.destination.latitude, e), t(e.destination.longitude, e)),
                a = [(n[0] + o[0]) / 2, (n[1] + o[1]) / 2];
            if (r.greatArc) {
                var l = f.geo.greatArc().source(function(e) {
                    return [t(e.origin.longitude, e), t(e.origin.latitude, e)]
                }).target(function(e) {
                    return [t(e.destination.longitude, e), t(e.destination.latitude, e)]
                });
                return s(l(e))
            }
            var u = t(e.arcSharpness, r.arcSharpness, e);
            return "M" + n[0] + "," + n[1] + "S" + (a[0] + 50 * u) + "," + (a[1] - 75 * u) + "," + o[0] + "," + o[1]
        }).transition().delay(100).style("fill", function(e) {
            var n = this.getTotalLength();
            return this.style.transition = this.style.WebkitTransition = "none", this.style.strokeDasharray = n + " " + n, this.style.strokeDashoffset = n, this.getBoundingClientRect(), this.style.transition = this.style.WebkitTransition = "stroke-dashoffset " + t(e.animationSpeed, r.animationSpeed, e) + "ms ease-out", this.style.strokeDashoffset = "0", "none"
        }), a.exit().transition().style("opacity", 0).remove()
    }

    function u(t, e) {
        var n = this;
        e = e || {};
        var r = this.projection([-67.707617, 42.722131]);
        this.svg.selectAll(".datamaps-subunit").attr("data-foo", function(i) {
            var o = n.path.centroid(i),
                a = 7.5,
                s = 5;
            ["FL", "KY", "MI"].indexOf(i.id) > -1 && (a = -2.5), "NY" === i.id && (a = -1), "MI" === i.id && (s = 18), "LA" === i.id && (a = 13);
            var l, u;
            l = o[0] - a, u = o[1] + s;
            var c = ["VT", "NH", "MA", "RI", "CT", "NJ", "DE", "MD", "DC"].indexOf(i.id);
            if (c > -1) {
                var h = r[1];
                l = r[0], u = h + c * (2 + (e.fontSize || 12)), t.append("line").attr("x1", l - 3).attr("y1", u - 5).attr("x2", o[0]).attr("y2", o[1]).style("stroke", e.labelColor || "#000").style("stroke-width", e.lineWidth || 1)
            }
            return t.append("text").attr("x", l).attr("y", u).style("font-size", (e.fontSize || 10) + "px").style("font-family", e.fontFamily || "Verdana").style("fill", e.labelColor || "#000").text(i.id), "bar"
        })
    }

    function c(e, n, r) {
        function i(t) {
            return "undefined" != typeof t && "undefined" != typeof t.latitude && "undefined" != typeof t.longitude
        }
        var o = this,
            a = this.options.fills,
            s = this.options.filters,
            l = this.svg;
        if (!n || n && !n.slice) throw "Datamaps Error - bubbles must be an array";
        var u = e.selectAll("circle.datamaps-bubble").data(n, r.key);
        u.enter().append("svg:circle").attr("class", "datamaps-bubble").attr("cx", function(t) {
            var e;
            if (i(t) ? e = o.latLngToXY(t.latitude, t.longitude) : t.centered && (e = o.path.centroid(l.select("path." + t.centered).data()[0])), e) return e[0]
        }).attr("cy", function(t) {
            var e;
            if (i(t) ? e = o.latLngToXY(t.latitude, t.longitude) : t.centered && (e = o.path.centroid(l.select("path." + t.centered).data()[0])), e) return e[1]
        }).attr("r", function(e) {
            return r.animate ? 0 : t(e.radius, r.radius, e)
        }).attr("data-info", function(t) {
            return JSON.stringify(t)
        }).attr("filter", function(e) {
            var n = s[t(e.filterKey, r.filterKey, e)];
            if (n) return n
        }).style("stroke", function(e) {
            return t(e.borderColor, r.borderColor, e)
        }).style("stroke-width", function(e) {
            return t(e.borderWidth, r.borderWidth, e)
        }).style("fill-opacity", function(e) {
            return t(e.fillOpacity, r.fillOpacity, e)
        }).style("fill", function(e) {
            var n = a[t(e.fillKey, r.fillKey, e)];
            return n || a.defaultFill
        }).on("mouseover", function(e) {
            var n = f.select(this);
            if (r.highlightOnHover) {
                var i = {
                    fill: n.style("fill"),
                    stroke: n.style("stroke"),
                    "stroke-width": n.style("stroke-width"),
                    "fill-opacity": n.style("fill-opacity")
                };
                n.style("fill", t(e.highlightFillColor, r.highlightFillColor, e)).style("stroke", t(e.highlightBorderColor, r.highlightBorderColor, e)).style("stroke-width", t(e.highlightBorderWidth, r.highlightBorderWidth, e)).style("fill-opacity", t(e.highlightFillOpacity, r.highlightFillOpacity, e)).attr("data-previousAttributes", JSON.stringify(i))
            }
            r.popupOnHover && o.updatePopup(n, e, r, l)
        }).on("mouseout", function(t) {
            var e = f.select(this);
            if (r.highlightOnHover) {
                var n = JSON.parse(e.attr("data-previousAttributes"));
                for (var i in n) e.style(i, n[i])
            }
            f.selectAll(".datamaps-hoverover").style("display", "none")
        }), u.transition().duration(400).attr("r", function(e) {
            return t(e.radius, r.radius, e)
        }), u.exit().transition().delay(r.exitDelay).attr("r", 0).remove()
    }

    function h(t) {
        return Array.prototype.slice.call(arguments, 1).forEach(function(e) {
            if (e)
                for (var n in e) null == t[n] && (t[n] = e[n])
        }), t
    }

    function p(t) {
        if ("undefined" == typeof f || "undefined" == typeof d) throw new Error("Include d3.js (v3.0.3 or greater) and topojson on this page before creating a new map");
        return this.options = h(t, g), this.options.geographyConfig = h(t.geographyConfig, g.geographyConfig), this.options.projectionConfig = h(t.projectionConfig, g.projectionConfig), this.options.bubblesConfig = h(t.bubblesConfig, g.bubblesConfig), this.options.arcConfig = h(t.arcConfig, g.arcConfig), f.select(this.options.element).select("svg").length > 0 && e.call(this, this.options.element, this.options.height, this.options.width), this.addPlugin("bubbles", c), this.addPlugin("legend", a), this.addPlugin("arc", l), this.addPlugin("labels", u), this.addPlugin("graticule", s), this.options.disableDefaultStyles || r(), this.draw()
    }
    var f = window.d3,
        d = window.topojson,
        g = {
            scope: "world",
            responsive: !1,
            aspectRatio: .5625,
            setProjection: n,
            projection: "equirectangular",
            dataType: "json",
            data: {},
            done: function() {},
            fills: {
                defaultFill: "#ABDDA4"
            },
            filters: {},
            geographyConfig: {
                dataUrl: null,
                hideAntarctica: !0,
                hideHawaiiAndAlaska: !1,
                borderWidth: 1,
                borderColor: "#FDFDFD",
                popupTemplate: function(t, e) {
                    return '<div class="hoverinfo"><strong>' + t.properties.name + "</strong></div>"
                },
                popupOnHover: !0,
                highlightOnHover: !0,
                highlightFillColor: "#FC8D59",
                highlightBorderColor: "rgba(250, 15, 160, 0.2)",
                highlightBorderWidth: 2
            },
            projectionConfig: {
                rotation: [97, 0]
            },
            bubblesConfig: {
                borderWidth: 2,
                borderColor: "#FFFFFF",
                popupOnHover: !0,
                radius: null,
                popupTemplate: function(t, e) {
                    return '<div class="hoverinfo"><strong>' + e.name + "</strong></div>"
                },
                fillOpacity: .75,
                animate: !0,
                highlightOnHover: !0,
                highlightFillColor: "#FC8D59",
                highlightBorderColor: "rgba(250, 15, 160, 0.2)",
                highlightBorderWidth: 2,
                highlightFillOpacity: .85,
                exitDelay: 100,
                key: JSON.stringify
            },
            arcConfig: {
                strokeColor: "#DD1C77",
                strokeWidth: 1,
                arcSharpness: 1,
                animationSpeed: 600
            }
        };
    p.prototype.resize = function() {
        var t = this,
            e = t.options;
        if (e.responsive) {
            var n = e.element.clientWidth,
                r = f.select(e.element).select("svg").attr("data-width");
            f.select(e.element).select("svg").selectAll("g").attr("transform", "scale(" + n / r + ")")
        }
    }, p.prototype.draw = function() {
        function t(t) {
            e.options.dataUrl && f[e.options.dataType](e.options.dataUrl, function(t) {
                if ("csv" === e.options.dataType && t && t.slice) {
                    for (var n = {}, r = 0; r < t.length; r++) n[t[r].id] = t[r];
                    t = n
                }
                Datamaps.prototype.updateChoropleth.call(e, t)
            }), i.call(e, t), o.call(e), (e.options.geographyConfig.popupOnHover || e.options.bubblesConfig.popupOnHover) && (hoverover = f.select(e.options.element).append("div").attr("class", "datamaps-hoverover").style("z-index", 10001).style("position", "absolute")), e.options.done(e)
        }
        var e = this,
            n = e.options,
            r = n.setProjection.apply(e, [n.element, n]);
        return this.path = r.path, this.projection = r.projection, n.geographyConfig.dataUrl ? f.json(n.geographyConfig.dataUrl, function(n, r) {
            if (n) throw new Error(n);
            e.customTopo = r, t(r)
        }) : t(this[n.scope + "Topo"] || n.geographyConfig.dataJson), this
    }, p.prototype.worldTopo = "__WORLD__", p.prototype.abwTopo = "__ABW__", p.prototype.afgTopo = "__AFG__", p.prototype.agoTopo = "__AGO__", p.prototype.aiaTopo = "__AIA__", p.prototype.albTopo = "__ALB__", p.prototype.aldTopo = "__ALD__", p.prototype.andTopo = "__AND__", p.prototype.areTopo = "__ARE__", p.prototype.argTopo = "__ARG__", p.prototype.armTopo = "__ARM__", p.prototype.asmTopo = "__ASM__", p.prototype.ataTopo = "__ATA__", p.prototype.atcTopo = "__ATC__", p.prototype.atfTopo = "__ATF__", p.prototype.atgTopo = "__ATG__", p.prototype.ausTopo = "__AUS__", p.prototype.autTopo = "__AUT__", p.prototype.azeTopo = "__AZE__", p.prototype.bdiTopo = "__BDI__", p.prototype.belTopo = "__BEL__", p.prototype.benTopo = "__BEN__", p.prototype.bfaTopo = "__BFA__", p.prototype.bgdTopo = "__BGD__", p.prototype.bgrTopo = "__BGR__", p.prototype.bhrTopo = "__BHR__", p.prototype.bhsTopo = "__BHS__", p.prototype.bihTopo = "__BIH__", p.prototype.bjnTopo = "__BJN__", p.prototype.blmTopo = "__BLM__", p.prototype.blrTopo = "__BLR__", p.prototype.blzTopo = "__BLZ__", p.prototype.bmuTopo = "__BMU__", p.prototype.bolTopo = "__BOL__", p.prototype.braTopo = "__BRA__", p.prototype.brbTopo = "__BRB__", p.prototype.brnTopo = "__BRN__", p.prototype.btnTopo = "__BTN__", p.prototype.norTopo = "__NOR__", p.prototype.bwaTopo = "__BWA__", p.prototype.cafTopo = "__CAF__", p.prototype.canTopo = "__CAN__", p.prototype.cheTopo = "__CHE__", p.prototype.chlTopo = "__CHL__", p.prototype.chnTopo = "__CHN__", p.prototype.civTopo = "__CIV__", p.prototype.clpTopo = "__CLP__", p.prototype.cmrTopo = "__CMR__", p.prototype.codTopo = "__COD__", p.prototype.cogTopo = "__COG__", p.prototype.cokTopo = "__COK__", p.prototype.colTopo = "__COL__", p.prototype.comTopo = "__COM__", p.prototype.cpvTopo = "__CPV__", p.prototype.criTopo = "__CRI__", p.prototype.csiTopo = "__CSI__", p.prototype.cubTopo = "__CUB__", p.prototype.cuwTopo = "__CUW__", p.prototype.cymTopo = "__CYM__", p.prototype.cynTopo = "__CYN__", p.prototype.cypTopo = "__CYP__", p.prototype.czeTopo = "__CZE__", p.prototype.deuTopo = "__DEU__", p.prototype.djiTopo = "__DJI__", p.prototype.dmaTopo = "__DMA__", p.prototype.dnkTopo = "__DNK__", p.prototype.domTopo = "__DOM__", p.prototype.dzaTopo = "__DZA__", p.prototype.ecuTopo = "__ECU__", p.prototype.egyTopo = "__EGY__", p.prototype.eriTopo = "__ERI__", p.prototype.esbTopo = "__ESB__", p.prototype.espTopo = "__ESP__", p.prototype.estTopo = "__EST__", p.prototype.ethTopo = "__ETH__", p.prototype.finTopo = "__FIN__", p.prototype.fjiTopo = "__FJI__", p.prototype.flkTopo = "__FLK__", p.prototype.fraTopo = "__FRA__", p.prototype.froTopo = "__FRO__", p.prototype.fsmTopo = "__FSM__", p.prototype.gabTopo = "__GAB__", p.prototype.psxTopo = "__PSX__", p.prototype.gbrTopo = "__GBR__", p.prototype.geoTopo = "__GEO__", p.prototype.ggyTopo = "__GGY__", p.prototype.ghaTopo = "__GHA__", p.prototype.gibTopo = "__GIB__", p.prototype.ginTopo = "__GIN__", p.prototype.gmbTopo = "__GMB__", p.prototype.gnbTopo = "__GNB__", p.prototype.gnqTopo = "__GNQ__", p.prototype.grcTopo = "__GRC__", p.prototype.grdTopo = "__GRD__", p.prototype.grlTopo = "__GRL__", p.prototype.gtmTopo = "__GTM__", p.prototype.gumTopo = "__GUM__", p.prototype.guyTopo = "__GUY__", p.prototype.hkgTopo = "__HKG__", p.prototype.hmdTopo = "__HMD__", p.prototype.hndTopo = "__HND__", p.prototype.hrvTopo = "__HRV__", p.prototype.htiTopo = "__HTI__", p.prototype.hunTopo = "__HUN__", p.prototype.idnTopo = "__IDN__", p.prototype.imnTopo = "__IMN__", p.prototype.indTopo = "__IND__", p.prototype.ioaTopo = "__IOA__", p.prototype.iotTopo = "__IOT__", p.prototype.irlTopo = "__IRL__", p.prototype.irnTopo = "__IRN__", p.prototype.irqTopo = "__IRQ__", p.prototype.islTopo = "__ISL__", p.prototype.isrTopo = "__ISR__", p.prototype.itaTopo = "__ITA__", p.prototype.jamTopo = "__JAM__", p.prototype.jeyTopo = "__JEY__", p.prototype.jorTopo = "__JOR__", p.prototype.jpnTopo = "__JPN__", p.prototype.kabTopo = "__KAB__", p.prototype.kasTopo = "__KAS__", p.prototype.kazTopo = "__KAZ__", p.prototype.kenTopo = "__KEN__", p.prototype.kgzTopo = "__KGZ__", p.prototype.khmTopo = "__KHM__", p.prototype.kirTopo = "__KIR__", p.prototype.knaTopo = "__KNA__", p.prototype.korTopo = "__KOR__", p.prototype.kosTopo = "__KOS__", p.prototype.kwtTopo = "__KWT__", p.prototype.laoTopo = "__LAO__", p.prototype.lbnTopo = "__LBN__", p.prototype.lbrTopo = "__LBR__", p.prototype.lbyTopo = "__LBY__", p.prototype.lcaTopo = "__LCA__", p.prototype.lieTopo = "__LIE__", p.prototype.lkaTopo = "__LKA__", p.prototype.lsoTopo = "__LSO__", p.prototype.ltuTopo = "__LTU__", p.prototype.luxTopo = "__LUX__", p.prototype.lvaTopo = "__LVA__", p.prototype.macTopo = "__MAC__", p.prototype.mafTopo = "__MAF__", p.prototype.marTopo = "__MAR__", p.prototype.mcoTopo = "__MCO__", p.prototype.mdaTopo = "__MDA__", p.prototype.mdgTopo = "__MDG__", p.prototype.mdvTopo = "__MDV__", p.prototype.mexTopo = "__MEX__", p.prototype.mhlTopo = "__MHL__", p.prototype.mkdTopo = "__MKD__", p.prototype.mliTopo = "__MLI__", p.prototype.mltTopo = "__MLT__", p.prototype.mmrTopo = "__MMR__", p.prototype.mneTopo = "__MNE__", p.prototype.mngTopo = "__MNG__", p.prototype.mnpTopo = "__MNP__", p.prototype.mozTopo = "__MOZ__", p.prototype.mrtTopo = "__MRT__", p.prototype.msrTopo = "__MSR__", p.prototype.musTopo = "__MUS__", p.prototype.mwiTopo = "__MWI__", p.prototype.mysTopo = "__MYS__", p.prototype.namTopo = "__NAM__", p.prototype.nclTopo = "__NCL__", p.prototype.nerTopo = "__NER__", p.prototype.nfkTopo = "__NFK__", p.prototype.ngaTopo = "__NGA__", p.prototype.nicTopo = "__NIC__", p.prototype.niuTopo = "__NIU__", p.prototype.nldTopo = "__NLD__", p.prototype.nplTopo = "__NPL__", p.prototype.nruTopo = "__NRU__", p.prototype.nulTopo = "__NUL__", p.prototype.nzlTopo = "__NZL__", p.prototype.omnTopo = "__OMN__", p.prototype.pakTopo = "__PAK__", p.prototype.panTopo = "__PAN__", p.prototype.pcnTopo = "__PCN__", p.prototype.perTopo = {
        type: "Topology",
        objects: {
            per: {
                type: "GeometryCollection",
                geometries: [{
                    type: "MultiPolygon",
                    properties: {
                        name: "Callao"
                    },
                    id: "PE.",
                    arcs: [
                        [
                            [0]
                        ],
                        [
                            [1, 2]
                        ]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Lambayeque"
                    },
                    id: "PE.LB",
                    arcs: [
                        [3, 4, 5, 6]
                    ]
                }, {
                    type: "MultiPolygon",
                    properties: {
                        name: "Piura"
                    },
                    id: "PE.PI",
                    arcs: [
                        [
                            [7]
                        ],
                        [
                            [8, -7, 9, 10, 11]
                        ]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Tumbes"
                    },
                    id: "PE.TU",
                    arcs: [
                        [-11, 12]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Apurímac"
                    },
                    id: "PE.AP",
                    arcs: [
                        [13, 14, 15]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Arequipa"
                    },
                    id: "PE.AR",
                    arcs: [
                        [16, 17, 18, 19, 20, 21, -15]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Cusco"
                    },
                    id: "PE.CS",
                    arcs: [
                        [22, 23, -17, -14, 24, 25, 26]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Madre de Dios"
                    },
                    id: "PE.MD",
                    arcs: [
                        [27, -23, 28, 29]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Callao"
                    },
                    id: "PE.CL",
                    arcs: [
                        [30, 31, 32, -18, -24, -28]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Moquegua"
                    },
                    id: "PE.MQ",
                    arcs: [
                        [33, 34, -19, -33]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Tacna"
                    },
                    id: "PE.TA",
                    arcs: [
                        [-32, 35, -34]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Ancash"
                    },
                    id: "PE.AN",
                    arcs: [
                        [36, 37, 38, 39]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Cajamarca"
                    },
                    id: "PE.CJ",
                    arcs: [
                        [40, -4, -9, 41, 42]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Huánuco"
                    },
                    id: "PE.HC",
                    arcs: [
                        [43, 44, 45, 46, -37, 47, 48]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "La Libertad"
                    },
                    id: "PE.LL",
                    arcs: [
                        [-41, 49, 50, -48, -40, 51, -5]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Pasco"
                    },
                    id: "PE.PA",
                    arcs: [
                        [52, 53, -46, 54]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "San Martín"
                    },
                    id: "PE.SM",
                    arcs: [
                        [-49, -51, 55, 56]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Ucayali"
                    },
                    id: "PE.UC",
                    arcs: [
                        [57, -29, -27, 58, -55, -45, 59]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Amazonas"
                    },
                    id: "PE.AM",
                    arcs: [
                        [-56, -50, -43, 60, 61]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Loreto"
                    },
                    id: "PE.LO",
                    arcs: [
                        [-60, -44, -57, -62, 62]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Ayacucho"
                    },
                    id: "PE.AY",
                    arcs: [
                        [-25, -16, -22, 63, 64, 65]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Lima Province"
                    },
                    id: "PE.LR",
                    arcs: [
                        [66, -3, 67, 68]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Huancavelica"
                    },
                    id: "PE.HV",
                    arcs: [
                        [-65, 69, 70, 71]
                    ]
                }, {
                    type: "MultiPolygon",
                    properties: {
                        name: "Ica"
                    },
                    id: "PE.IC",
                    arcs: [
                        [
                            [72]
                        ],
                        [
                            [73]
                        ],
                        [
                            [-64, -21, 74, 75, -70]
                        ]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Junín"
                    },
                    id: "PE.JU",
                    arcs: [
                        [-59, -26, -66, -72, 76, -53]
                    ]
                }, {
                    type: "Polygon",
                    properties: {
                        name: "Lima"
                    },
                    id: "PE.LR",
                    arcs: [
                        [-54, -77, -71, -76, 77, -69, 78, -38, -47]
                    ]
                }]
            }
        },
        arcs: [
            [
                [3281, 3402],
                [3, -4],
                [-8, 2],
                [-10, -1],
                [-10, 5],
                [-15, 6],
                [-9, 9],
                [-5, 8],
                [8, 2],
                [9, -3],
                [30, -19],
                [7, -5]
            ],
            [
                [3337, 3417],
                [-14, 3],
                [-34, 2],
                [7, 10],
                [9, 8],
                [8, 9],
                [3, 13]
            ],
            [
                [3316, 3462],
                [1, 0],
                [22, -11],
                [4, -13],
                [-2, -14],
                [-4, -7]
            ],
            [
                [1491, 6744],
                [10, -7],
                [9, 1],
                [8, 3],
                [8, 3],
                [13, 2],
                [8, -1],
                [5, -3],
                [3, -5],
                [0, -2],
                [4, -5],
                [17, 9],
                [9, 6],
                [10, 3],
                [8, 0],
                [7, -3],
                [5, -3],
                [5, -3],
                [15, -5],
                [19, -4],
                [11, -3],
                [8, -4],
                [3, -5],
                [0, -6],
                [-2, -6],
                [-3, -5],
                [-5, -5],
                [-46, -29],
                [-5, -5],
                [-2, -5],
                [0, -7],
                [3, -6],
                [8, -5],
                [11, -2],
                [11, -4],
                [4, -5],
                [-1, -7],
                [-7, -15],
                [-27, -20],
                [-64, -8],
                [-18, -5],
                [-13, -4],
                [-9, -5],
                [-12, -8],
                [-8, -7],
                [-7, -8],
                [-3, -7],
                [0, -6],
                [3, -5],
                [12, -13],
                [3, -5],
                [1, -6],
                [-2, -6],
                [-8, -14],
                [5, -25],
                [4, -4],
                [7, -4],
                [8, 0],
                [8, 1],
                [9, -1],
                [11, -4],
                [7, -6],
                [5, -6],
                [13, -28],
                [15, -22],
                [11, -8],
                [11, -5],
                [18, 1],
                [19, 0],
                [23, -9],
                [39, -5],
                [7, -3],
                [7, -6],
                [2, -6],
                [0, -6],
                [-1, -7],
                [-2, -6],
                [-4, -4],
                [-7, -4],
                [-14, -4],
                [-10, -5],
                [-26, -26],
                [-17, -9],
                [-20, -5],
                [-14, -5],
                [-6, -4],
                [-4, -6],
                [2, -44],
                [-2, -8],
                [-2, -4],
                [-5, -4],
                [-5, -1],
                [-10, -1]
            ],
            [
                [1572, 6186],
                [-21, 13],
                [-74, 14],
                [-12, 0],
                [-7, -2],
                [-5, -2],
                [-133, -89],
                [-20, -16]
            ],
            [
                [1300, 6104],
                [1, 2],
                [2, 14],
                [-15, 14],
                [-84, 57],
                [-41, 28],
                [-9, 12],
                [-43, 25],
                [-11, 17],
                [-3, 17],
                [-12, 18],
                [-19, 16],
                [-13, 9],
                [-90, 50],
                [-40, 17],
                [-102, 41],
                [-128, 44],
                [-134, 47]
            ],
            [
                [559, 6532],
                [17, 10],
                [27, 22],
                [67, 70],
                [5, 6],
                [9, 22],
                [5, 8],
                [13, 14],
                [95, 77],
                [10, 5],
                [10, 3],
                [245, 49],
                [28, 13],
                [6, 4],
                [5, 9],
                [4, 16],
                [-3, 57],
                [-13, 54],
                [3, 12],
                [5, 2],
                [4, 0],
                [20, -10],
                [35, -22],
                [48, -25],
                [8, -6],
                [12, -12],
                [4, -7],
                [5, -6],
                [4, -5],
                [11, -9],
                [7, -6],
                [2, -6],
                [-2, -5],
                [-4, -5],
                [-4, -4],
                [-7, -10],
                [-2, -5],
                [-1, -4],
                [0, -3],
                [2, -5],
                [3, -5],
                [7, -4],
                [13, -2],
                [22, -1],
                [10, -3],
                [10, -3],
                [11, -7],
                [7, -6],
                [5, -5],
                [10, -16],
                [6, -4],
                [8, -3],
                [16, -1],
                [8, -1],
                [17, 2],
                [17, 4],
                [10, 0],
                [10, 0],
                [32, -7],
                [9, -3],
                [6, -4],
                [15, -17]
            ],
            [
                [394, 6479],
                [-9, -1],
                [-11, 0],
                [-2, 5],
                [3, 6],
                [-3, 8],
                [-7, 5],
                [6, 4],
                [3, 8],
                [9, 19],
                [8, -3],
                [-5, -4],
                [-5, -9],
                [4, -8],
                [7, -5],
                [0, -7],
                [-1, -9],
                [3, -9]
            ],
            [
                [1663, 7303],
                [-21, -14],
                [-5, -7],
                [-4, -13],
                [-4, -8],
                [-7, -2],
                [-10, -2],
                [-9, -5],
                [-14, -21],
                [-8, -8],
                [-14, -8],
                [-21, -16],
                [-6, -9],
                [-1, -7],
                [19, -32],
                [2, -7],
                [0, -9],
                [-1, -14],
                [2, -7],
                [6, -5],
                [8, -2],
                [7, -4],
                [5, -6],
                [7, -75],
                [-4, -11],
                [-11, 0],
                [-8, 2],
                [-8, 1],
                [-14, 1],
                [-8, -2],
                [-3, -1],
                [-12, -19],
                [-2, -4],
                [0, -2],
                [0, -3],
                [2, -6],
                [5, -8],
                [1, -3],
                [0, -3],
                [1, -11],
                [-6, -30],
                [-12, -36],
                [1, -9],
                [2, -6],
                [11, -16],
                [2, -6],
                [0, -13],
                [0, -1],
                [3, -5],
                [3, -5],
                [1, -1],
                [1, -1],
                [9, -6],
                [11, -7],
                [7, -22],
                [-9, -8],
                [-7, -3],
                [-8, -3],
                [-9, -5],
                [-28, -20],
                [-14, -6]
            ],
            [
                [559, 6532],
                [-77, 26],
                [-50, 16],
                [-49, 33],
                [-58, 28],
                [-69, 27],
                [-69, 37],
                [-24, 20],
                [-16, 32],
                [2, 22],
                [0, 24],
                [-1, 5],
                [16, 9],
                [5, 11],
                [4, 4],
                [18, 0],
                [8, 13],
                [1, 8],
                [7, 8],
                [14, -1],
                [16, -17],
                [22, -7],
                [30, -8],
                [25, -2],
                [29, 19],
                [31, 39],
                [6, 51],
                [-19, 42],
                [-40, 60],
                [-24, 18],
                [-74, 50],
                [-13, 11],
                [-18, 3],
                [-10, -2],
                [-19, 9],
                [-17, 18],
                [-20, 16],
                [-16, 17],
                [4, 5],
                [5, 4],
                [10, 3],
                [7, 11],
                [-3, 7],
                [-7, 5],
                [1, 7],
                [11, 2],
                [-3, 10],
                [-4, 12],
                [7, 8],
                [13, -2],
                [14, 6],
                [13, -9],
                [23, 1],
                [12, 12],
                [4, 19],
                [-17, 26],
                [-27, 19],
                [-24, 13],
                [-19, 19],
                [-13, 16],
                [-27, 25],
                [-63, 47],
                [-27, 23],
                [4, 7],
                [10, 4],
                [12, 8],
                [-3, 11],
                [-6, 12],
                [6, 28],
                [1, 9],
                [-5, 9],
                [-7, 12],
                [-5, 10],
                [3, 8],
                [8, 5],
                [6, 3],
                [5, 3],
                [6, 6],
                [11, 19],
                [0, 12],
                [-11, 31],
                [3, 11],
                [9, 13],
                [11, 12],
                [9, 7],
                [69, 32],
                [18, 13],
                [14, 18],
                [12, 9],
                [15, 3],
                [14, 3],
                [8, 6],
                [1, 1]
            ],
            [
                [218, 7785],
                [1, -1],
                [51, -33],
                [15, -6],
                [39, -7],
                [63, 3],
                [23, -1],
                [26, -5],
                [76, -20],
                [10, 0],
                [4, 0],
                [5, 2],
                [6, 4],
                [16, 14],
                [99, 60]
            ],
            [
                [652, 7795],
                [-1, -10],
                [4, -7],
                [13, -12],
                [4, -7],
                [0, -5],
                [-3, -11],
                [0, -5],
                [17, -24],
                [27, -2],
                [35, 7],
                [36, 3],
                [-9, -12],
                [-104, -96],
                [-3, -9],
                [7, -12],
                [11, -6],
                [35, -14],
                [13, -3],
                [14, 0],
                [6, 0],
                [8, 5],
                [32, 12],
                [61, 32],
                [13, 9],
                [5, 9],
                [9, 19],
                [6, 8],
                [7, 4],
                [8, 2],
                [9, 2],
                [32, 3],
                [2, 1],
                [5, -6],
                [13, -3],
                [16, -2],
                [14, -3],
                [14, -9],
                [26, -19],
                [16, -8],
                [21, -8],
                [21, -2],
                [20, 0],
                [21, -3],
                [20, -13],
                [16, -17],
                [20, -14],
                [29, -3],
                [53, 11],
                [28, 11],
                [28, 3],
                [22, -8],
                [40, -27],
                [6, -2],
                [11, -6],
                [5, -2],
                [19, 1],
                [16, -7],
                [5, -5],
                [-2, -8],
                [-18, -22],
                [-1, -12],
                [23, -23],
                [9, -33],
                [21, -27],
                [2, -11],
                [6, -11],
                [14, -8],
                [16, -6],
                [14, -7],
                [4, -4],
                [5, -11],
                [4, -5],
                [7, -3],
                [16, -4],
                [7, -3],
                [10, -11],
                [9, -11],
                [11, -10],
                [18, -3],
                [37, 1]
            ],
            [
                [218, 7785],
                [12, 16],
                [42, 45],
                [25, 17],
                [30, 17],
                [32, 12],
                [12, 8],
                [5, 11],
                [2, 13],
                [5, 11],
                [15, 19],
                [21, 19],
                [28, 16],
                [125, 51],
                [23, 15],
                [33, 34],
                [5, 12],
                [7, 1],
                [8, 1],
                [7, 3],
                [12, 3],
                [55, -1],
                [15, 2],
                [16, 5],
                [13, 7],
                [5, 10],
                [3, 6],
                [10, 12],
                [3, 6],
                [1, 6],
                [5, -2],
                [13, -5],
                [30, -5],
                [11, -6],
                [-2, -10],
                [-4, -11],
                [1, -12],
                [5, -3],
                [13, -3],
                [5, -4],
                [2, -5],
                [0, -6],
                [-1, -10],
                [-6, -15],
                [-1, -4],
                [6, -4],
                [7, -2],
                [7, -2],
                [2, -5],
                [0, -6],
                [5, -10],
                [1, -6],
                [-1, -6],
                [-5, -10],
                [-2, -5],
                [0, -6],
                [1, -4],
                [5, -10],
                [1, -6],
                [-3, -4],
                [-3, -4],
                [-2, -4],
                [4, -11],
                [16, -17],
                [7, -11],
                [1, -5],
                [0, -10],
                [2, -5],
                [7, -5],
                [7, -4],
                [5, -3],
                [-1, -6],
                [-12, -9],
                [-62, -20],
                [-11, -9],
                [-11, -13],
                [-14, -11],
                [-16, -6],
                [-15, 2],
                [-33, 12],
                [-17, 4],
                [-16, 1],
                [-16, -1],
                [-14, -3],
                [-12, -6],
                [-9, -9],
                [-9, -13],
                [-7, -14]
            ],
            [
                [6414, 2685],
                [28, -6],
                [7, -3],
                [5, -2],
                [6, 2],
                [6, 3],
                [5, 2],
                [15, -4],
                [12, -8],
                [14, -4],
                [18, 7],
                [14, 9],
                [6, 2],
                [10, 2],
                [3, -1],
                [8, -3],
                [5, 0],
                [4, 1],
                [2, 0],
                [24, 13],
                [11, 3],
                [26, 2],
                [21, 0],
                [5, -2],
                [1, -5],
                [3, -5],
                [5, -5],
                [4, -2],
                [32, 0],
                [30, -3],
                [25, -9],
                [53, -28],
                [57, -22],
                [9, -1],
                [6, -2],
                [7, -8],
                [8, -1],
                [32, -2],
                [31, -6],
                [4, -2],
                [4, -2],
                [5, -2],
                [11, -1],
                [32, 0],
                [11, -3],
                [9, -7],
                [16, -17],
                [-6, -4],
                [10, -7],
                [14, -7],
                [30, -12],
                [12, -2],
                [40, 2],
                [4, -3],
                [25, -13],
                [6, -1],
                [7, -5],
                [42, -26],
                [12, -12],
                [8, -13],
                [18, -22],
                [3, -6],
                [14, -15],
                [11, -16],
                [0, -95],
                [-24, -58],
                [-8, -10],
                [-5, -4],
                [-5, -4],
                [-27, -12],
                [-6, -4],
                [-6, -4],
                [-19, -17],
                [-19, -13],
                [-7, -7],
                [-22, -29],
                [-7, -5],
                [-28, -5],
                [-11, -4],
                [-13, -2],
                [-17, -1],
                [-9, -4],
                [-5, -4],
                [-5, -6],
                [-6, -6],
                [-13, -7],
                [-14, -4],
                [-18, -3],
                [-11, -4],
                [-8, -4],
                [-8, -6],
                [-5, -5],
                [-5, -6],
                [-2, -5],
                [0, -6],
                [2, -5],
                [12, -15],
                [3, -5],
                [1, -6],
                [-1, -14],
                [-3, -13]
            ],
            [
                [6995, 2001],
                [-66, -12],
                [-16, -2],
                [-14, 2],
                [-9, 2],
                [-8, 3],
                [-12, 2],
                [-14, 1],
                [-25, -1],
                [-13, 2],
                [-11, 2],
                [-7, 3],
                [-7, 2],
                [-17, 4],
                [-12, -1],
                [-14, -6],
                [-22, -13],
                [-19, -20]
            ],
            [
                [6709, 1969],
                [-52, 16],
                [-9, 5],
                [-26, 13],
                [-19, 7],
                [-16, 8],
                [-23, 8],
                [-6, -5],
                [-7, -9],
                [-5, -4],
                [-9, -2],
                [-10, -1],
                [-13, 1],
                [-9, 0],
                [-8, -2],
                [-11, -8],
                [-6, -3],
                [-8, -1],
                [-13, -1],
                [-17, -3],
                [-33, -7],
                [-19, -3],
                [-19, -1],
                [-8, 0],
                [-10, 1],
                [-12, 3],
                [-19, 5],
                [-8, 1],
                [-8, 0],
                [-5, -3],
                [-3, -6],
                [-3, -5],
                [-4, -5],
                [-4, -5],
                [-17, -11],
                [-5, -5],
                [-7, -10],
                [-5, -4],
                [-7, -3],
                [-8, -2],
                [-24, -1],
                [-22, -4],
                [-14, -2],
                [-11, 8],
                [-31, 58],
                [-1, 3],
                [8, 1],
                [18, -1],
                [9, 2],
                [6, 6],
                [19, 46],
                [-2, 12],
                [-12, 16],
                [-19, 23],
                [-1, 10],
                [5, 33],
                [6, 38],
                [-1, 21],
                [-4, 23],
                [0, 9],
                [-1, 7],
                [-4, 9],
                [-25, 28],
                [-19, 17],
                [-6, 8],
                [-6, 11],
                [-10, 23],
                [-7, 36],
                [-89, 115],
                [-4, 12],
                [34, 6],
                [9, 3],
                [4, 3],
                [0, 8],
                [-17, 14],
                [-17, 20],
                [-5, 4],
                [-6, 3],
                [-7, 3],
                [-7, 1],
                [-13, 2],
                [-8, 3],
                [-6, 6],
                [-11, 17],
                [-3, 8],
                [-3, 38],
                [-8, 20],
                [-1, 20],
                [-9, 11],
                [-2, 5],
                [-3, 19],
                [1, 7],
                [4, 8],
                [17, 15],
                [6, 10],
                [-11, 12],
                [-2, 5],
                [2, 5],
                [7, 9],
                [6, 12],
                [3, 5],
                [5, 4],
                [8, 2],
                [9, -1],
                [9, -4],
                [11, -7],
                [10, -12],
                [15, -10],
                [138, -59],
                [12, -6],
                [32, -22],
                [23, -8],
                [75, -7],
                [8, -2],
                [16, -4],
                [10, -1],
                [13, 0],
                [10, -1],
                [28, -4],
                [8, 0],
                [8, 3],
                [5, 5],
                [7, 16],
                [4, 6]
            ],
            [
                [6995, 2001],
                [-2, -10],
                [-4, -10],
                [0, -5],
                [2, -5],
                [5, -5],
                [49, -42],
                [19, -7],
                [50, -9],
                [53, 9],
                [21, 2],
                [20, 3],
                [17, 4],
                [19, 7],
                [8, 0],
                [11, -1],
                [7, -3],
                [6, -4],
                [4, -4],
                [9, -17],
                [4, -5],
                [4, -5],
                [5, -4],
                [7, -3],
                [7, 0],
                [8, 2],
                [21, 20],
                [1, 5],
                [1, 5],
                [2, 6],
                [9, 12],
                [2, 5],
                [0, 11],
                [0, 5],
                [-2, 6],
                [-4, 5],
                [-9, 9],
                [-3, 5],
                [1, 5],
                [2, 6],
                [4, 5],
                [6, 3],
                [7, 2],
                [8, 0],
                [6, -2],
                [5, -1],
                [5, -3],
                [17, -11],
                [38, -37],
                [15, -15],
                [10, -17],
                [4, -5],
                [5, -4],
                [8, -4],
                [10, -3],
                [16, -3],
                [11, -1],
                [9, -2],
                [3, -4],
                [-1, -5],
                [-3, -5],
                [-5, -4],
                [-6, -4],
                [-15, -5],
                [-6, -3],
                [-4, -4],
                [-1, -6],
                [8, -28],
                [1, -5],
                [-2, -4],
                [-2, -5],
                [-7, -9],
                [-2, -6],
                [10, -6],
                [20, -7],
                [100, -17],
                [8, -3],
                [9, -4],
                [8, -1],
                [7, 1],
                [21, 11],
                [13, 4],
                [8, 2],
                [18, 2],
                [9, 0],
                [19, -1],
                [10, 0],
                [9, 1],
                [7, 2],
                [6, 4],
                [2, 5],
                [-2, 4],
                [-3, 5],
                [-2, 5],
                [1, 5],
                [5, 2],
                [10, -1],
                [25, -13],
                [12, -2],
                [18, 2],
                [11, -2],
                [12, -5],
                [46, -28],
                [8, -3],
                [11, -2],
                [9, 0],
                [7, 3],
                [23, 15],
                [6, 3],
                [7, 3],
                [8, 1],
                [7, 0],
                [9, -1],
                [7, -3],
                [7, -3],
                [6, -4],
                [6, -6],
                [6, -10],
                [2, -6],
                [-1, -7],
                [-3, -12],
                [-3, -23],
                [3, -5],
                [5, -5],
                [12, -4],
                [22, -5],
                [13, -5],
                [22, -12],
                [12, -8],
                [17, -16],
                [14, -9]
            ],
            [
                [8146, 1640],
                [3, -17],
                [-6, -36],
                [2, -9],
                [4, -6],
                [6, -5],
                [5, -7],
                [1, -5],
                [0, -4],
                [-2, -7],
                [-3, -18],
                [2, -7],
                [3, -6],
                [26, -22],
                [10, -7],
                [33, -18],
                [6, -5],
                [8, -9],
                [2, -8],
                [0, -7],
                [-4, -5],
                [-20, -23],
                [-2, -5],
                [-1, -4],
                [0, -7],
                [2, -5],
                [5, -4],
                [7, -5],
                [8, -7],
                [12, -20],
                [8, -9],
                [33, -16],
                [4, -14],
                [-3, -13],
                [-7, -17]
            ],
            [
                [8288, 1283],
                [-11, -119],
                [-9, -31],
                [-21, -17],
                [-35, -23],
                [-5, -5],
                [-6, -7],
                [-3, -6],
                [0, -5],
                [0, -4],
                [7, -18],
                [2, -7],
                [-1, -11],
                [-5, -6],
                [-6, -4],
                [-28, -8],
                [-5, -1],
                [-6, 1],
                [-6, 3],
                [-11, 8],
                [-6, 3],
                [-8, 1],
                [-8, -1],
                [-17, -3],
                [-9, -1],
                [-27, -1],
                [-8, -1],
                [-40, -12],
                [-9, -4],
                [-13, -8],
                [-37, -38],
                [-25, -17],
                [-6, -6],
                [-1, -6],
                [6, -25],
                [0, -6],
                [-2, -16],
                [-2, -7],
                [-5, -4],
                [-7, -3],
                [-27, -6],
                [-18, -6],
                [-40, -24],
                [-6, -7],
                [-9, -9],
                [-2, -7],
                [0, -5],
                [3, -12],
                [5, -12],
                [15, -20],
                [10, -18],
                [49, -25],
                [6, -4],
                [6, -7],
                [-3, -4],
                [-5, -5],
                [-3, -5],
                [-19, -48],
                [-3, -5],
                [-3, -4],
                [-21, -18],
                [-8, -11],
                [-7, -17],
                [-9, -9],
                [-14, -8],
                [-29, -15]
            ],
            [
                [7783, 557],
                [-7, 11],
                [-14, 7],
                [-12, 3],
                [-31, 3],
                [-19, 5],
                [-7, 3],
                [-14, 8],
                [-13, 6],
                [-4, 1],
                [-131, 22],
                [-30, 9],
                [-26, 14],
                [-36, 29],
                [-20, 12],
                [-43, 17],
                [-17, 5],
                [-18, 3],
                [-49, 3],
                [-7, 2],
                [-4, 5],
                [1, 12],
                [-1, 6],
                [-11, 7],
                [-32, 12],
                [-7, 5],
                [-8, 9],
                [-19, 6],
                [-38, 6],
                [-19, 8],
                [-4, 9],
                [1, 11],
                [-7, 11],
                [-44, 34],
                [-18, 8],
                [-9, 2],
                [-8, 0],
                [-6, 1],
                [-7, 3],
                [-9, 8],
                [-5, 4],
                [-8, 1],
                [-5, 1],
                [-17, 8],
                [-8, 3],
                [-33, 3],
                [-46, 14],
                [-82, -1],
                [-71, 17],
                [-84, 41],
                [-136, 32],
                [-27, 19],
                [-34, 12],
                [-30, 14],
                [-14, 3],
                [-31, 0],
                [-14, 3],
                [-12, 5],
                [-12, 3],
                [-12, -4],
                [-7, 7],
                [-10, 23],
                [-7, 5],
                [-8, 3],
                [-23, 3],
                [-44, 15],
                [-48, 7],
                [-93, 22],
                [-61, 6],
                [-19, -9],
                [0, 13],
                [-14, 8],
                [-8, 6],
                [-5, 3],
                [-29, 6],
                [-56, 18],
                [-24, 9],
                [-49, 24],
                [-55, 26],
                [-23, 14],
                [0, 6],
                [4, 7],
                [-6, 8],
                [-8, 8],
                [-25, 7],
                [-66, 25],
                [-13, 2],
                [-34, 3],
                [-13, 6],
                [-10, 8],
                [-3, 6],
                [-10, 4],
                [-19, 4],
                [-30, -4],
                [-28, 5],
                [-27, 6],
                [-35, 16],
                [-3, 3],
                [-2, 11],
                [-2, 5],
                [-5, 5],
                [0, 7],
                [-5, 8],
                [-20, 5],
                [-39, 8],
                [-113, 33],
                [-55, 21],
                [-76, 21],
                [-17, 15],
                [-87, 30],
                [-22, 12],
                [-11, 2],
                [-11, -1],
                [-6, -2],
                [-5, 1],
                [-13, 6],
                [-9, 7]
            ],
            [
                [4948, 1584],
                [45, 47],
                [5, 8],
                [5, 10],
                [6, 9],
                [29, 35],
                [19, 11],
                [167, 71]
            ],
            [
                [5224, 1775],
                [2, -7],
                [1, -5],
                [3, -5],
                [6, -4],
                [8, -4],
                [22, -5],
                [60, -7],
                [59, -14],
                [30, -3],
                [7, -2],
                [6, -3],
                [2, -5],
                [-2, -5],
                [-3, -5],
                [2, -9],
                [7, -10],
                [18, -19],
                [8, -11],
                [5, -9],
                [2, -7],
                [5, -5],
                [9, -5],
                [30, -7],
                [16, -7],
                [0, -12],
                [2, -5],
                [3, -5],
                [5, -4],
                [26, -20],
                [7, -3],
                [7, -3],
                [8, -2],
                [18, -4],
                [15, -1],
                [8, 0],
                [11, 2],
                [18, 5],
                [20, 7],
                [19, 9],
                [7, 2],
                [7, 0],
                [7, -5],
                [3, -5],
                [1, -15],
                [1, -2],
                [1, -2],
                [4, -4],
                [5, -3],
                [4, -4],
                [1, -6],
                [-6, -24],
                [0, -5],
                [1, -6],
                [3, -4],
                [8, -2],
                [13, 1],
                [60, 21],
                [8, 4],
                [6, 6],
                [9, 16],
                [32, 33],
                [6, 4],
                [10, 3],
                [14, 2],
                [84, -1],
                [81, 8],
                [36, 2],
                [35, 5],
                [92, 29],
                [24, -7],
                [7, -2],
                [15, -4],
                [59, -4],
                [33, 0],
                [-1, 5],
                [-4, 11],
                [-2, 23],
                [4, 16],
                [4, 5],
                [8, 2],
                [8, 0],
                [18, -1],
                [17, -3],
                [24, -5],
                [7, -1],
                [6, 1],
                [6, 2],
                [5, 4],
                [9, 9],
                [26, 34],
                [6, 5],
                [46, 30],
                [10, 8],
                [8, 22],
                [3, 27],
                [6, 21],
                [4, 9],
                [1, 6],
                [-1, 7],
                [-5, 7],
                [-11, 10],
                [-6, 11],
                [7, 25],
                [4, 6],
                [8, 9],
                [5, 3],
                [5, 3],
                [7, 3],
                [15, 4],
                [10, 2],
                [10, 0],
                [35, -3],
                [10, 0],
                [10, 1],
                [18, 3],
                [7, 3],
                [5, 3],
                [1, 5],
                [-7, 13],
                [-2, 17]
            ],
            [
                [7236, 3836],
                [-3, -33],
                [-14, -29],
                [-102, -131],
                [-14, -29],
                [-4, -22],
                [-10, -34],
                [-8, -15],
                [-5, -20],
                [0, -8],
                [13, -46],
                [3, -5],
                [2, -3],
                [3, -3],
                [14, -9],
                [64, -28],
                [57, -18],
                [11, -6],
                [8, -9],
                [7, -12],
                [22, -56],
                [7, -9],
                [8, -7],
                [10, -5],
                [22, -7],
                [23, -3],
                [12, -1],
                [11, -1],
                [7, -2],
                [9, -4],
                [9, -8],
                [6, -7],
                [18, -25],
                [26, -41],
                [12, -25],
                [5, -18],
                [0, -13],
                [-14, -24],
                [-3, -9],
                [0, -14],
                [5, -10],
                [8, -8],
                [20, -28],
                [13, -14],
                [23, -12],
                [21, -6],
                [148, -32],
                [18, -1],
                [14, 0],
                [41, 3],
                [16, -1],
                [10, -1],
                [9, -3],
                [19, -10],
                [14, -5],
                [84, -22],
                [120, -22],
                [13, -5],
                [98, -43],
                [12, -2],
                [26, -2],
                [22, 1],
                [221, -27],
                [99, 4],
                [16, 4],
                [9, 6],
                [0, 6],
                [-6, 6],
                [-20, 8],
                [-10, 5],
                [-8, 6],
                [-4, 7],
                [4, 8],
                [8, 3],
                [12, 1],
                [25, -1],
                [36, -6],
                [43, 3],
                [25, -1],
                [26, -4]
            ],
            [
                [8678, 2902],
                [-21, -61],
                [-2, -20],
                [12, -32],
                [1, -7],
                [-1, -6],
                [-6, -14],
                [-20, -32],
                [-12, -12],
                [-47, -33],
                [-22, -13],
                [-16, -12],
                [-12, -11],
                [-23, -28],
                [-75, -121],
                [-13, -15],
                [-10, -5],
                [-22, -4],
                [-64, -8],
                [-12, -4],
                [-7, -28],
                [-3, -28],
                [-15, -45],
                [5, -8],
                [8, -7],
                [10, -6],
                [8, -13],
                [1, -12],
                [-18, -72],
                [-6, -13],
                [-13, -20],
                [-27, -67],
                [-3, -5],
                [-4, -3],
                [-8, -4],
                [-41, 1],
                [-7, -3],
                [-7, -4],
                [-15, -25],
                [-5, -16],
                [4, -9],
                [8, -10],
                [1, -6],
                [-2, -5],
                [-4, -4],
                [-8, -5],
                [-6, -3],
                [-14, -9],
                [-10, -8],
                [-8, -4],
                [-8, -4],
                [-8, -1],
                [-22, -1],
                [-14, -2],
                [-6, -8],
                [1, -5],
                [2, -6],
                [4, -4],
                [18, -19],
                [14, -11],
                [7, -4],
                [8, -2],
                [8, 0],
                [10, 0],
                [11, -1],
                [17, -5],
                [6, -7],
                [2, -6],
                [-9, -26],
                [0, -7],
                [3, -10],
                [9, -18],
                [2, -10],
                [-1, -8],
                [-18, -19],
                [-6, -10],
                [-1, -17],
                [12, -11],
                [0, -3],
                [1, -2],
                [-4, -8],
                [-3, -8],
                [-2, -11],
                [1, -8],
                [3, -6],
                [5, -5],
                [7, -10],
                [7, -13],
                [5, -19],
                [-2, -43],
                [-2, -8],
                [-5, -5],
                [-6, -2],
                [-12, -3],
                [-5, -2],
                [-10, -5]
            ],
            [
                [6414, 2685],
                [-6, 5],
                [-21, 14],
                [-38, 16],
                [-6, 4],
                [-3, 7],
                [-15, 11],
                [-20, 24],
                [-41, 35],
                [-23, 13],
                [-25, 6],
                [-4, 3],
                [-17, 21],
                [-11, 6],
                [-27, 11],
                [-14, 4],
                [0, 4],
                [11, 11],
                [-15, 43],
                [7, 9],
                [4, 2],
                [-2, 4],
                [-6, 3],
                [-7, 2],
                [-7, 2],
                [-3, 6],
                [-12, 28],
                [-5, 9],
                [-6, 4],
                [-4, 4],
                [-8, 20],
                [-2, 20],
                [-3, 7],
                [-12, 12],
                [-6, 10],
                [-7, 19],
                [-6, 7],
                [-39, 27],
                [-13, 5],
                [-1, -3],
                [-3, -5],
                [0, -3],
                [-12, 6],
                [-43, 39],
                [-6, 15],
                [-4, 8],
                [-9, 3],
                [-14, 3],
                [-3, 6],
                [4, 15],
                [-1, 10],
                [-3, 4],
                [-5, 3],
                [-8, 8],
                [-4, 6],
                [-4, 15],
                [-5, 6],
                [-31, 25],
                [-21, 26]
            ],
            [
                [5829, 3310],
                [80, 1],
                [28, 2],
                [93, 18],
                [26, 6],
                [7, 3],
                [6, 3],
                [11, 8],
                [4, 5],
                [15, 20],
                [6, 11],
                [3, 12],
                [1, 12],
                [-2, 24],
                [0, 4],
                [4, 12],
                [2, 5],
                [77, 77],
                [2, 5],
                [12, 46],
                [0, 10],
                [-1, 6],
                [-2, 5],
                [-3, 4],
                [-4, 3],
                [-21, 12],
                [-14, 5],
                [-7, 3],
                [-24, 4],
                [-31, 9],
                [-8, 2],
                [-10, 0],
                [-18, 0],
                [-7, 1],
                [-5, 2],
                [-1, 6],
                [3, 5],
                [6, 3],
                [27, 12],
                [73, 41],
                [46, 45],
                [35, 52],
                [7, 16]
            ],
            [
                [6245, 3830],
                [23, -3],
                [35, 8],
                [21, 2],
                [57, 0],
                [102, 9],
                [31, 6],
                [25, 6],
                [7, 4],
                [6, 4],
                [28, 27],
                [6, 3],
                [9, 2],
                [8, -4],
                [5, -4],
                [3, -7],
                [2, -6],
                [3, -5],
                [4, -5],
                [11, -8],
                [4, -4],
                [1, -11],
                [4, -5],
                [20, -11],
                [32, -7],
                [7, -2],
                [19, -11],
                [11, -3],
                [25, 1],
                [9, -1],
                [9, 1],
                [7, 2],
                [8, 4],
                [8, 3],
                [15, 1],
                [8, -3],
                [4, -5],
                [2, -6],
                [5, -5],
                [6, -2],
                [9, 0],
                [7, -3],
                [19, -9],
                [8, -3],
                [10, -2],
                [34, -5],
                [28, 3],
                [8, 3],
                [7, 3],
                [5, 4],
                [7, 3],
                [7, 4],
                [20, 5],
                [7, 3],
                [30, 18],
                [14, 7],
                [29, 8],
                [55, 11],
                [6, 2],
                [7, -1],
                [14, -6],
                [10, -4],
                [9, 1],
                [20, 4],
                [10, 0],
                [8, -1],
                [13, -4]
            ],
            [
                [9770, 2898],
                [-499, -170],
                [-13, -2],
                [-21, 3],
                [-532, 178],
                [-13, 2],
                [-14, -7]
            ],
            [
                [7236, 3836],
                [0, 1],
                [0, 12],
                [3, 16],
                [5, 12],
                [8, 13],
                [58, 71],
                [3, 9],
                [1, 7],
                [-7, 9],
                [-43, 37],
                [-1, 6],
                [1, 5],
                [8, 6],
                [14, 4],
                [29, -1],
                [17, -3],
                [14, -4],
                [32, -18],
                [6, -2],
                [20, -3],
                [110, 3],
                [19, 3],
                [8, 2],
                [350, 123],
                [69, 14],
                [15, 5],
                [31, 13],
                [45, 26],
                [41, 17],
                [49, 27],
                [13, 6],
                [20, 10],
                [75, 62],
                [25, 25],
                [10, 18],
                [6, 19],
                [8, 76],
                [4, 12],
                [11, 24],
                [12, 11],
                [25, 16],
                [104, 52],
                [1, 1]
            ],
            [
                [8455, 4578],
                [-1, -46],
                [0, -69],
                [0, -70],
                [0, -69],
                [-1, -70],
                [0, -69],
                [0, -70],
                [0, -69],
                [-1, -44],
                [68, 37],
                [17, 2],
                [21, -12],
                [36, -29],
                [20, -13],
                [36, -12],
                [40, -4],
                [41, 1],
                [39, 5],
                [32, 8],
                [192, 66],
                [33, -1],
                [15, -3],
                [15, 0],
                [33, 1],
                [21, -1],
                [13, -4],
                [30, -13],
                [26, -3],
                [98, 7],
                [15, -1],
                [3, -3],
                [3, -3],
                [3, -4],
                [2, -3],
                [3, -3],
                [3, -4],
                [3, -3],
                [3, -4],
                [82, -98],
                [83, -99],
                [82, -99],
                [83, -99],
                [82, -99],
                [82, -99],
                [83, -99],
                [82, -99],
                [20, -23],
                [4, -5],
                [-8, -3],
                [-5, -5],
                [-4, -10],
                [-7, -9],
                [-9, -8],
                [-11, -7],
                [-24, -8],
                [-11, -7],
                [-7, -7],
                [-1, -9],
                [7, -6],
                [26, -4],
                [8, -6],
                [-19, -25],
                [-6, -5],
                [-65, -12],
                [-16, -7],
                [-12, -11],
                [-10, -16],
                [-18, 2],
                [-9, -10],
                [-9, -14],
                [-24, -13],
                [-5, -12],
                [0, -23],
                [10, -54]
            ],
            [
                [9770, 2898],
                [2, -8],
                [-6, -65],
                [2, -22],
                [11, -43],
                [-9, -106],
                [3, -13],
                [-5, -13],
                [-7, -13],
                [-7, -7],
                [-17, -13],
                [-6, -6],
                [-2, -7],
                [2, -7],
                [0, -7],
                [-7, -6],
                [-9, -1],
                [-24, 3],
                [-11, -1],
                [-11, -12],
                [16, -16],
                [43, -23],
                [9, -8],
                [0, -6],
                [-4, -7],
                [-3, -9],
                [1, -7],
                [10, -21],
                [14, -14],
                [3, -18],
                [0, -20],
                [5, -18],
                [10, -10],
                [43, -19],
                [8, -7],
                [5, -9],
                [4, -19],
                [20, -36],
                [4, -19],
                [-16, -11],
                [-53, -5],
                [-27, -5],
                [-20, -9],
                [-4, -10],
                [-1, -10],
                [1, -21],
                [6, -10],
                [11, -11],
                [3, -11],
                [-16, -10],
                [-51, -19],
                [-15, -8],
                [-31, -24],
                [-6, -2],
                [-14, -2],
                [-4, -3],
                [-3, -9],
                [2, -25],
                [-4, -6],
                [-17, 0],
                [-18, 2],
                [-16, -1],
                [-10, -10],
                [-5, -70],
                [-11, -16],
                [-13, -5],
                [-43, -8],
                [-18, -7],
                [-7, -8],
                [-1, -9],
                [3, -45],
                [-2, -4],
                [-13, -21],
                [-3, -10],
                [5, -9],
                [17, -11],
                [13, -8],
                [45, -47],
                [13, -9],
                [47, -23],
                [13, -9],
                [20, -18],
                [18, -13],
                [-1, -10],
                [-13, -6],
                [-18, 1],
                [-16, -1],
                [-10, -21],
                [-27, -6],
                [-15, -10],
                [-13, -11],
                [-4, -9],
                [9, -16],
                [0, -5],
                [-6, -2],
                [-22, -5],
                [-8, -3],
                [-10, -10],
                [-4, -10],
                [-2, -11],
                [-4, -11],
                [-51, -52],
                [-7, -16],
                [4, -17],
                [10, -16],
                [33, -56],
                [34, -56],
                [34, -57],
                [33, -56],
                [18, -30],
                [27, -23],
                [15, -8],
                [17, -7],
                [19, -5],
                [20, 0],
                [9, 3],
                [16, 8],
                [8, 2],
                [9, -1],
                [25, -5],
                [23, 5],
                [17, -7],
                [33, -24],
                [41, -11],
                [18, -8],
                [8, -15],
                [-18, -19],
                [-89, -23],
                [-26, -9],
                [-21, -17],
                [-7, -10],
                [-1, -11],
                [1, -32],
                [-2, -17],
                [4, -9],
                [21, -20],
                [-10, -8],
                [-13, -11],
                [-13, -7],
                [-46, -16],
                [-15, -2],
                [-28, -2],
                [-13, -5],
                [-7, -8],
                [-15, -30],
                [-11, -11],
                [-80, -57],
                [-21, -30],
                [-9, -8],
                [-34, -13],
                [-5, -4],
                [-3, -5],
                [3, -3],
                [6, -2],
                [3, -3],
                [-3, -9],
                [-17, -13],
                [-21, -5],
                [-23, -3],
                [-22, -6],
                [-24, -11],
                [-43, -26],
                [-5, -1],
                [-13, -1],
                [-4, -1],
                [-8, -12],
                [-13, -30],
                [-13, -14],
                [1, 0]
            ],
            [
                [9224, 573],
                [-2, 0],
                [-9, -3],
                [-27, -3],
                [-5, 0],
                [-5, 0],
                [-6, 1],
                [-6, 4],
                [-13, 10],
                [-3, 4],
                [-8, 11],
                [-3, 1],
                [-4, 2],
                [-8, 1],
                [-5, -1],
                [-4, 0],
                [-6, -2],
                [-12, -3],
                [-5, 0],
                [-4, 0],
                [-7, 2],
                [-24, 11],
                [-8, 4],
                [-7, 1],
                [-3, 1],
                [-7, 1],
                [-4, 1],
                [-17, 8],
                [-27, 17],
                [-17, 8],
                [-4, 2],
                [-2, 0],
                [-2, 1],
                [-1, 0],
                [-7, 1],
                [-6, 2],
                [-18, 17],
                [-43, 54],
                [-51, 51],
                [-15, 25]
            ],
            [
                [8819, 802],
                [-2, 7],
                [-2, 8],
                [0, 4],
                [2, 15],
                [3, 4],
                [6, 6],
                [10, 3],
                [8, 2],
                [24, 3],
                [9, 2],
                [8, 3],
                [21, 15],
                [31, 17],
                [6, 9],
                [-19, 18],
                [-49, 5],
                [-9, 2],
                [-11, 5],
                [-14, 8],
                [-40, 28],
                [-14, 14],
                [-11, 13],
                [-5, 5],
                [-8, 4],
                [-34, 13],
                [-11, 8],
                [-10, 18],
                [-13, 33],
                [-13, 20],
                [-1, 4],
                [1, 11],
                [4, 12],
                [12, 19],
                [1, 6],
                [-3, 7],
                [-7, 7],
                [-31, 12],
                [-10, 7],
                [-4, 11],
                [2, 18],
                [0, 16],
                [-3, 9],
                [-4, 7],
                [-9, 6],
                [-11, 3],
                [-16, 0],
                [-12, -1],
                [-30, 3],
                [-50, 20],
                [-25, -6],
                [-9, -4],
                [-12, -5],
                [-10, -4],
                [-24, -6],
                [-14, 0],
                [-22, 3],
                [-19, 6],
                [-46, 21],
                [-1, 1],
                [-7, 3],
                [-17, 5],
                [-17, -2]
            ],
            [
                [8819, 802],
                [-18, -29],
                [-20, -9],
                [-12, 0],
                [-12, 1],
                [-11, 4],
                [-8, 5],
                [-7, 7],
                [-20, 31],
                [-6, 7],
                [-8, 4],
                [-19, 6],
                [-15, 1],
                [-15, 0],
                [-11, -1],
                [-20, -9],
                [-18, -13],
                [-5, -6],
                [-5, -6],
                [0, -7],
                [-3, -8],
                [-10, -15],
                [-4, -8],
                [-2, -11],
                [4, -13],
                [1, -2],
                [0, -1],
                [7, -11],
                [2, -7],
                [0, -7],
                [-1, -7],
                [-9, -9],
                [-23, -21],
                [-63, -49],
                [-40, -11],
                [-17, -4],
                [-14, -4],
                [-11, -6],
                [-6, -4],
                [-9, -10],
                [-8, -11],
                [-14, -15],
                [-34, -28],
                [-3, -5],
                [-8, -25],
                [-3, -8],
                [-5, -8],
                [-10, -11],
                [-6, -7],
                [-5, -3],
                [-32, -20],
                [-9, -7],
                [-6, -6],
                [-14, -27],
                [-5, -5],
                [-6, -4],
                [-13, -4],
                [-10, -3],
                [-71, -18],
                [-31, -13],
                [-29, -15],
                [-7, -5],
                [-6, -4],
                [-4, -5],
                [-13, -17],
                [-9, -9]
            ],
            [
                [8030, 297],
                [-22, 17],
                [-12, 6],
                [-39, 11],
                [-29, 14],
                [-16, 6],
                [-17, 2],
                [-26, -2],
                [-4, -2],
                [0, 6],
                [5, 7],
                [11, 10],
                [4, 13],
                [-3, 11],
                [-4, 11],
                [-7, 55],
                [-4, 10],
                [-11, 21],
                [-3, 19],
                [-4, 2],
                [-5, 1],
                [-6, 3],
                [-21, 19],
                [-28, 13],
                [-2, 1],
                [-4, 6]
            ],
            [
                [9224, 573],
                [41, -4],
                [13, -3],
                [31, -16],
                [16, -11],
                [12, -10],
                [8, -16],
                [3, -19],
                [-2, -39],
                [0, -1],
                [-101, -65],
                [-36, -17],
                [-36, -4],
                [-37, 4],
                [-33, -1],
                [-25, -18],
                [-6, -23],
                [9, -19],
                [13, -19],
                [7, -23],
                [2, -14],
                [4, -10],
                [18, -19],
                [6, -11],
                [2, -10],
                [-2, -10],
                [-48, -72],
                [-17, -18],
                [-15, -10],
                [-31, -18],
                [-37, -29],
                [-14, -8],
                [-18, -4],
                [-23, -1],
                [-19, -4],
                [-56, -21],
                [-19, -4],
                [-41, -2],
                [-85, 5],
                [-41, -2],
                [-20, -7],
                [-19, 12],
                [-40, 16],
                [-49, 24],
                [-24, 10],
                [-28, 10],
                [-29, 10],
                [-39, 14],
                [-39, 25],
                [-3, 3],
                [-4, 6],
                [-5, 3],
                [-3, 1],
                [-8, 1],
                [-5, 1],
                [-46, 28],
                [-13, 6],
                [-28, 5],
                [-10, 6],
                [-11, 22],
                [-7, 11],
                [-12, 4],
                [-12, 4],
                [-34, 17],
                [-16, 5],
                [-46, 10],
                [-16, 2],
                [-41, 26],
                [-17, 7],
                [-11, 7],
                [-2, 1]
            ],
            [
                [3173, 5354],
                [4, -6],
                [2, -6],
                [5, -18],
                [8, -14],
                [1, -4],
                [1, -27],
                [4, -7],
                [9, -5],
                [20, -7],
                [8, -6],
                [24, -22],
                [5, -7],
                [0, -8],
                [-4, -7],
                [-2, -6],
                [5, -9],
                [13, -12],
                [44, -28],
                [11, -4],
                [38, -8],
                [6, -8],
                [29, -17],
                [26, -25],
                [9, -5],
                [10, -4],
                [42, -8],
                [5, -2],
                [3, -4],
                [2, -4],
                [3, -3],
                [6, -1],
                [10, -12],
                [18, -7],
                [40, -9],
                [23, -8],
                [21, -11],
                [13, -9],
                [-3, -18],
                [-5, -6],
                [-6, -5],
                [-13, -6],
                [-61, -41],
                [-8, -9],
                [-80, -126],
                [0, -28],
                [-11, -18],
                [-60, -49],
                [-11, -11],
                [-7, -10],
                [0, -6],
                [0, -5],
                [4, -6],
                [18, -17],
                [25, -41],
                [11, -22],
                [0, -33],
                [5, -20],
                [4, -8],
                [5, -6],
                [12, -7],
                [7, -2],
                [9, -2],
                [9, -2],
                [10, -2],
                [10, -5],
                [3, -5],
                [1, -5],
                [-3, -5],
                [-14, -21],
                [-2, -6],
                [-5, -27],
                [3, -29]
            ],
            [
                [3482, 4397],
                [-138, -39],
                [-35, -15],
                [-4, -5],
                [-2, -6],
                [-4, -27],
                [-2, -6],
                [-8, -12],
                [-17, -16],
                [-40, -27],
                [-20, -10],
                [-80, -31],
                [-28, -34],
                [-26, -12],
                [-40, -11],
                [-13, -1],
                [-48, 1],
                [-14, 1],
                [-4, 4],
                [-1, 5],
                [2, 6],
                [-1, 6],
                [-2, 6],
                [-5, 11],
                [-2, 5],
                [-1, 6],
                [0, 5],
                [2, 6],
                [5, 11],
                [2, 6],
                [-1, 5],
                [-5, 7],
                [-8, 4],
                [-22, 6],
                [-8, 4],
                [-14, 11],
                [-9, 2],
                [-9, 0],
                [-19, -2],
                [-11, 1],
                [-14, 3],
                [-6, 4],
                [-2, 5],
                [2, 4],
                [2, 2],
                [12, 6],
                [19, 9],
                [12, 7],
                [5, 5],
                [4, 4],
                [7, 11],
                [4, 9],
                [-8, 11],
                [-3, 3],
                [-12, 9],
                [-44, 3],
                [-10, -1],
                [-9, -3],
                [-4, -4],
                [-2, -22],
                [-2, -6],
                [-11, -22],
                [-2, -6],
                [1, -5],
                [3, -9],
                [1, -3],
                [-1, -5],
                [-3, -7],
                [-7, -10],
                [-6, -7],
                [-7, -4],
                [-7, -2],
                [-14, -4],
                [-4, -1],
                [-22, -12]
            ],
            [
                [2724, 4224],
                [-17, 20],
                [2, 6],
                [-10, 14],
                [-16, 8],
                [-21, 12],
                [2, 8],
                [-9, 13],
                [-14, 13],
                [-12, 10],
                [-2, 5],
                [7, 6],
                [-2, 6],
                [-9, 6],
                [-30, 13],
                [-1, 10],
                [-1, 15],
                [-14, 8],
                [-7, 5],
                [-2, 9],
                [-6, 11],
                [4, 7],
                [-8, 7],
                [-3, 8],
                [-16, 11],
                [-33, 21],
                [-7, 11],
                [-6, 6],
                [0, 6],
                [7, 0],
                [5, 4],
                [-2, 6],
                [-7, 7],
                [3, 3],
                [-2, 7],
                [0, 4],
                [-13, 12],
                [-3, 13],
                [-4, 6],
                [-7, 7],
                [-3, 6],
                [-8, 2],
                [-2, 3],
                [-5, 0],
                [-1, 4],
                [1, 2],
                [5, 4],
                [-1, 6],
                [0, 6],
                [0, 7],
                [-4, 8],
                [-5, 5],
                [-2, 10],
                [4, 11],
                [7, 7],
                [0, 17],
                [-31, 19],
                [-26, 20],
                [-5, 13],
                [-13, 10],
                [-6, 10],
                [-8, 5],
                [-10, 11],
                [-12, 10],
                [-3, 16],
                [5, 16],
                [-15, 5],
                [-3, 9],
                [0, 8],
                [-7, 8],
                [-5, 13],
                [6, 7],
                [10, 7],
                [-6, 9],
                [-11, 0],
                [-16, 8],
                [-4, 15],
                [3, 9],
                [6, 5],
                [5, 3],
                [-9, 2],
                [-7, 6],
                [-7, 3],
                [-4, 7],
                [-10, 3],
                [-11, -1],
                [-7, -3],
                [-18, 14],
                [-1, 5],
                [-1, 6],
                [-8, 4],
                [-6, 4],
                [7, 4],
                [7, 4],
                [9, 1],
                [6, 11],
                [2, 11],
                [-8, 13],
                [-14, 6],
                [-16, 3],
                [-12, -3],
                [-6, -3],
                [-3, -4],
                [4, -4],
                [0, -7],
                [4, -11],
                [-1, -7],
                [-9, 2],
                [-10, 15],
                [-15, 12],
                [-12, 8],
                [1, 6],
                [-3, 3],
                [4, 3],
                [12, -3],
                [19, -4],
                [4, 4],
                [4, 7],
                [0, 11],
                [-6, 13],
                [-9, 8],
                [-10, 6],
                [-11, 1],
                [-14, -2],
                [-7, 4],
                [-8, 9],
                [2, 9],
                [5, 9],
                [4, 5],
                [-7, 5],
                [-19, 5],
                [-1, 6],
                [7, -1],
                [4, 3],
                [0, 9]
            ],
            [
                [2125, 5119],
                [14, 2],
                [7, 5],
                [4, 4],
                [8, 19],
                [8, 46],
                [17, 23],
                [30, 15],
                [112, 26],
                [43, 21],
                [19, 3],
                [19, 2],
                [21, 0],
                [3, 0],
                [6, 1],
                [25, 33],
                [-3, 10],
                [-6, 10],
                [-2, 5],
                [1, 6],
                [6, 7],
                [25, 21],
                [28, 34],
                [2, 5],
                [1, 5],
                [1, 5],
                [1, 5],
                [3, 5],
                [17, 18],
                [2, 5],
                [2, 9],
                [4, 6],
                [6, 7],
                [122, 70],
                [13, 11],
                [9, 10],
                [13, 26],
                [5, 7],
                [7, 5],
                [13, 0],
                [10, -1],
                [9, -2],
                [18, -3],
                [20, -1],
                [13, 2],
                [15, 3],
                [24, 7],
                [20, 4],
                [28, 8],
                [13, 7],
                [15, 5],
                [-4, -10],
                [4, -10],
                [9, -10],
                [12, -10],
                [-5, -5],
                [-1, -7],
                [3, -7],
                [4, -6],
                [11, -12],
                [57, -36],
                [17, -5],
                [8, -2],
                [5, -3],
                [9, -7],
                [50, -54],
                [56, -48],
                [15, -19],
                [7, -15],
                [0, -20]
            ],
            [
                [2644, 6185],
                [12, -8],
                [4, -11],
                [14, -15],
                [10, -38],
                [4, -8],
                [7, -5],
                [9, -4],
                [7, -6],
                [4, -9],
                [2, -4],
                [5, -2],
                [7, -2],
                [5, -3],
                [6, -6],
                [0, -4],
                [-3, -4],
                [0, -14],
                [1, -3],
                [4, -5],
                [5, -2],
                [5, 0],
                [5, -1],
                [1, -6],
                [0, -19],
                [6, -20],
                [16, -11],
                [20, -9],
                [19, -11],
                [5, -9],
                [8, -10],
                [-23, 3],
                [-9, 0],
                [-26, -3],
                [-9, 0],
                [-10, -1],
                [-11, -2],
                [-42, -19],
                [-4, -7],
                [1, -5],
                [4, -12],
                [2, -12],
                [-1, -14],
                [-6, -17],
                [-9, -17],
                [-6, -4],
                [-8, -2],
                [-31, 1],
                [-10, -1],
                [-44, -12],
                [-10, -1],
                [-11, 2],
                [-6, 3],
                [-11, 9],
                [-6, 3],
                [-10, 0],
                [-10, -4],
                [-35, -25],
                [-32, -17],
                [-11, -3],
                [-21, -2],
                [-8, -3],
                [-14, -1],
                [-4, 8],
                [-2, 20],
                [-2, 5],
                [-3, 3],
                [-8, 3],
                [-16, 2],
                [-13, 4],
                [-13, 7],
                [-6, 5],
                [-5, 6],
                [-8, 3],
                [-8, 2],
                [-33, -4],
                [-35, 5],
                [-17, 7],
                [-24, 15],
                [-34, 14],
                [-11, 3],
                [-14, 1],
                [-25, -1],
                [-13, -1],
                [-9, -2],
                [-15, -6],
                [-5, 0],
                [-5, 2],
                [-20, 8],
                [-30, 7],
                [-9, 0],
                [-4, 0],
                [-19, -9],
                [-32, -9],
                [-14, -1],
                [-20, 1],
                [-2, 0],
                [-4, -1],
                [-15, -4],
                [-14, -6],
                [-5, -3],
                [-7, -6],
                [-3, -5],
                [-2, -3],
                [-3, -9],
                [-1, -3],
                [-2, -3],
                [-3, -2],
                [-3, -1],
                [-3, -2],
                [-2, -2],
                [-10, -13],
                [-5, 0],
                [-7, 2],
                [-40, 21],
                [-4, 5],
                [-2, 9],
                [2, 7],
                [7, 14],
                [1, 4],
                [0, 6],
                [-1, 6],
                [-3, 5],
                [-23, 27],
                [-1, 4],
                [-2, 5],
                [-7, 7],
                [-13, 8],
                [-42, 25],
                [-19, 9],
                [-26, 4],
                [-12, 1],
                [-51, 13],
                [-33, 6],
                [-14, 6],
                [-6, 3],
                [-5, 5],
                [-2, 4],
                [5, 15],
                [7, 5],
                [8, 8],
                [8, 10],
                [7, 11],
                [2, 6],
                [1, 6],
                [-2, 8],
                [-2, 5],
                [-13, 15],
                [9, 83]
            ],
            [
                [1663, 7303],
                [19, 0],
                [14, -1],
                [26, -6],
                [14, -3],
                [8, 1],
                [13, 2],
                [8, -1],
                [8, -3],
                [9, -4],
                [15, -10],
                [22, 13],
                [21, 15],
                [6, 11],
                [8, 27],
                [9, 9],
                [16, 3],
                [20, 0],
                [19, 3],
                [8, 11],
                [-4, 13],
                [-18, 24],
                [0, 15],
                [9, 15],
                [14, 14],
                [36, 23],
                [33, 13],
                [73, 20],
                [8, 4]
            ],
            [
                [2077, 7511],
                [11, -19],
                [31, -40],
                [14, -50],
                [10, -21],
                [18, -17],
                [11, -15],
                [3, -7],
                [6, -30],
                [0, -9],
                [-1, -8],
                [-6, -10],
                [-7, -5],
                [-14, -7],
                [-4, -5],
                [-20, -40],
                [-4, -14],
                [-1, -10],
                [1, -10],
                [3, -9],
                [16, -29],
                [3, -18],
                [11, -56],
                [-5, -49],
                [1, -10],
                [2, -4],
                [2, -5],
                [0, -4],
                [-3, -5],
                [-8, -10],
                [-13, -10],
                [-4, -2],
                [-4, -3],
                [-40, -42],
                [-1, -1],
                [-18, -20],
                [-4, -3],
                [-2, -1],
                [-11, -3],
                [-3, -2],
                [-1, -3],
                [1, -4],
                [1, -2],
                [2, -1],
                [9, -3],
                [4, -1],
                [1, -3],
                [-1, -3],
                [-9, -10],
                [-2, -1],
                [-2, -1],
                [-7, -2],
                [-4, -2],
                [-3, -2],
                [-3, -3],
                [-2, -3],
                [-6, -11],
                [0, -8],
                [2, -16],
                [6, -8],
                [16, -14],
                [4, -4],
                [5, -7],
                [4, -5],
                [13, -21],
                [6, -6],
                [53, -37],
                [4, -4],
                [2, -3],
                [3, -9],
                [2, -2],
                [3, -3],
                [6, -3],
                [11, -5],
                [11, -1],
                [7, 0],
                [10, 0],
                [5, 0],
                [10, -4],
                [17, -12],
                [36, -15],
                [21, -10],
                [8, -9],
                [11, -22],
                [28, -30],
                [32, -48],
                [20, -15],
                [45, -15],
                [24, -15],
                [38, -9],
                [11, -6],
                [4, -4],
                [8, -15],
                [1, -3],
                [22, -13],
                [9, -10],
                [32, -59],
                [43, -49],
                [7, -11],
                [3, -11],
                [1, -25],
                [-3, -3],
                [-5, -2],
                [-6, -2],
                [-2, -6],
                [2, -3],
                [11, -7],
                [3, -5],
                [-1, -10],
                [-5, -11],
                [-2, -12],
                [9, -15],
                [2, -14],
                [2, -5],
                [10, -7]
            ],
            [
                [4255, 5335],
                [-17, -42]
            ],
            [
                [4238, 5293],
                [4, -21],
                [11, -16],
                [35, -36],
                [6, -10],
                [3, -9],
                [12, -95],
                [2, -5],
                [1, -3],
                [4, -3],
                [4, -1],
                [7, -2],
                [8, -2],
                [7, -3],
                [8, -5],
                [8, -7],
                [16, -20],
                [3, -6],
                [3, -11],
                [0, -7],
                [-1, -7],
                [-1, -6],
                [-1, -8],
                [2, -10],
                [6, -18],
                [4, -10],
                [6, -6],
                [6, -4],
                [20, -9],
                [12, -8],
                [5, -4],
                [37, -50],
                [10, -7],
                [11, -6],
                [26, 0],
                [19, 2],
                [19, 7],
                [8, 3],
                [95, 54],
                [9, 3],
                [21, 2],
                [17, 3],
                [37, 10],
                [16, 6],
                [11, 6],
                [17, 18],
                [24, 18],
                [6, 5],
                [12, 21],
                [7, 10],
                [19, 18],
                [4, 5],
                [9, 17],
                [5, 6],
                [6, 7],
                [19, 16],
                [48, 51],
                [27, 22],
                [39, 27],
                [19, 9],
                [40, 13],
                [8, 3],
                [69, 40],
                [12, 6],
                [57, 15],
                [23, 5],
                [18, 2],
                [73, -4],
                [9, -1],
                [8, -3],
                [14, -5],
                [6, -4],
                [5, -4],
                [4, -4],
                [4, -5],
                [6, -12],
                [3, -12],
                [2, -5],
                [0, -6],
                [-3, -6],
                [-4, -5],
                [-15, -8],
                [-44, -15],
                [-8, -4],
                [-5, -4],
                [-4, -5],
                [-2, -6],
                [-4, -54],
                [-6, -18],
                [-20, -31],
                [-13, -14],
                [-4, -5],
                [-2, -6],
                [-2, -6],
                [1, -7],
                [8, -24],
                [1, -6],
                [-1, -14],
                [-9, -25],
                [-22, -46],
                [-8, -24],
                [-1, -4],
                [1, -5],
                [2, -7],
                [12, -21],
                [12, -13],
                [13, -11],
                [104, -104]
            ],
            [
                [5373, 4745],
                [-178, -57],
                [-167, -20],
                [-7, -1],
                [-92, 10],
                [-14, 0],
                [-12, -1],
                [-151, -49],
                [-23, -5],
                [-62, -9],
                [-50, -4],
                [-96, 3],
                [-58, -4],
                [-13, -2],
                [-20, -5],
                [-13, -4],
                [-24, -11],
                [-17, -11],
                [-8, -9],
                [-8, -14],
                [-6, -25],
                [-2, -15],
                [1, -11],
                [29, -99],
                [18, -28],
                [-7, -9],
                [-22, -10],
                [-110, -34],
                [-33, 16],
                [-38, 10],
                [-153, 8],
                [-6, 1],
                [-8, 2],
                [-5, 3],
                [-10, 12],
                [-6, 8],
                [-10, 7],
                [-6, 4],
                [-13, 6],
                [-32, 9],
                [-32, 3],
                [-96, 1],
                [-45, -7],
                [-9, -3],
                [-9, -6],
                [-51, -49],
                [-20, -11],
                [-54, -24]
            ],
            [
                [3625, 4311],
                [-14, 1],
                [-6, 1],
                [-29, 13],
                [-7, 11],
                [-3, 13],
                [-4, 6],
                [-8, 5],
                [-17, 3],
                [-11, 1],
                [-11, -1],
                [-9, 1],
                [-8, 2],
                [-8, 7],
                [-4, 5],
                [-4, 18]
            ],
            [
                [3173, 5354],
                [50, 2],
                [73, -1],
                [18, 2],
                [14, 3],
                [11, 5],
                [38, 8],
                [14, 1],
                [8, -1],
                [3, -2],
                [5, -4],
                [8, -14],
                [6, -25],
                [4, -6],
                [7, -5],
                [10, -1],
                [10, 2],
                [13, 1],
                [33, -7],
                [12, 1],
                [9, 3],
                [14, 14],
                [8, 12]
            ],
            [
                [3541, 5342],
                [67, 10],
                [26, -2],
                [27, -6],
                [67, -10],
                [18, -4],
                [110, -12],
                [30, 1],
                [24, 3],
                [7, 6],
                [6, 6],
                [7, 11],
                [5, 25],
                [-2, 40],
                [3, 12],
                [4, 6],
                [7, 5],
                [13, 5],
                [11, 0],
                [7, -3],
                [13, -17],
                [3, -6],
                [2, -6],
                [-1, -11],
                [3, -6],
                [4, -5],
                [17, -10],
                [2, -2],
                [2, -3],
                [2, -9],
                [4, -5],
                [7, -6],
                [11, -6],
                [5, -5],
                [4, -6],
                [4, -11],
                [2, -5],
                [2, -6],
                [13, -23],
                [4, -22],
                [5, -6],
                [6, -6],
                [11, -5],
                [8, -3],
                [22, -1],
                [22, 12],
                [10, 8],
                [6, 10],
                [26, 31],
                [12, 9],
                [7, 6],
                [39, 15]
            ],
            [
                [2644, 6185],
                [15, 3],
                [34, 5],
                [18, 4],
                [13, 2],
                [13, 1],
                [17, -3],
                [24, -5],
                [18, -1],
                [45, 4]
            ],
            [
                [2841, 6195],
                [10, -7],
                [8, -8],
                [10, -14],
                [19, -41],
                [9, -6],
                [41, -20],
                [9, -6],
                [6, -8],
                [0, -10],
                [-2, -8],
                [-20, -29],
                [1, -13],
                [5, -18],
                [22, -34],
                [19, -19],
                [14, -10],
                [23, -11],
                [6, -6],
                [21, -23],
                [22, -17],
                [8, -8],
                [1, -11],
                [-1, -8],
                [-18, -30],
                [-3, -14],
                [0, -18],
                [5, -23],
                [4, -11],
                [6, -11],
                [14, -21],
                [32, -31],
                [5, -8],
                [3, -8],
                [1, -17],
                [-2, -6],
                [-1, -3],
                [-7, -7],
                [-2, -4],
                [-1, -2],
                [0, -2],
                [4, -4],
                [5, -4],
                [15, -10],
                [4, -5],
                [3, -6],
                [5, -6],
                [10, -5],
                [20, -4],
                [16, 1],
                [12, 2],
                [14, 6],
                [16, 0],
                [12, -2],
                [85, -16],
                [27, -9],
                [35, -7],
                [15, -5],
                [35, -14],
                [6, -3],
                [51, -42],
                [4, -9],
                [4, -12],
                [17, -124],
                [3, -8],
                [3, -5],
                [12, -11]
            ],
            [
                [2125, 5119],
                [0, 3],
                [-5, 14],
                [-6, 8],
                [-9, 12],
                [-6, 8],
                [-12, 9],
                [-16, 16],
                [-38, 33],
                [2, 6],
                [0, 5],
                [6, 4],
                [9, 5],
                [2, 15],
                [-3, 13],
                [1, 8],
                [-5, 14],
                [-8, 22],
                [-23, 22],
                [-24, 21],
                [-32, 20],
                [-18, 10],
                [-24, 6],
                [-12, 7],
                [-10, 8],
                [5, 7],
                [8, -1],
                [4, -1],
                [10, 5],
                [4, 11],
                [0, 11],
                [-49, 49],
                [-2, 12],
                [-19, 18],
                [3, 8],
                [-25, 20],
                [-84, 50],
                [0, 13],
                [-47, 22],
                [-92, 47],
                [-41, 32],
                [-25, 26],
                [-9, 22],
                [-39, 30],
                [-10, 6],
                [-7, 6],
                [4, 4],
                [9, 2],
                [10, 6],
                [1, 11],
                [-10, 13],
                [-28, 31],
                [-57, 53],
                [-21, 18],
                [-2, 13],
                [-4, 10],
                [1, 5],
                [9, 7],
                [3, 7],
                [-9, 16],
                [-9, 14],
                [0, 10],
                [-13, 25],
                [-25, 19],
                [-31, 22],
                [-11, 8],
                [4, 9]
            ],
            [
                [5397, 4090],
                [-140, -1],
                [-75, 14],
                [-32, 11],
                [-12, 5],
                [-58, 33],
                [-42, 17],
                [-30, 9],
                [-9, 3],
                [-11, 0],
                [-14, 0],
                [-14, -3],
                [-17, -6],
                [-10, -6],
                [-12, -8],
                [-11, -4],
                [-122, -21],
                [-27, -9],
                [-28, -3],
                [-77, -1],
                [-68, -12],
                [-176, -38],
                [-189, -2],
                [-5, 0],
                [-4, 1],
                [-6, 3],
                [-5, 4],
                [-9, 9],
                [-4, 4],
                [-8, 1],
                [-10, -3],
                [-53, -27],
                [-21, -6],
                [-19, -3],
                [-19, 0],
                [-33, 3],
                [-7, 2],
                [-6, 2],
                [-4, 1],
                [-5, 0],
                [-4, 0],
                [-3, -6],
                [-2, -12],
                [3, -30],
                [5, -19],
                [1, -9],
                [-7, -21],
                [-102, -11],
                [-19, 0],
                [-45, 3]
            ],
            [
                [3832, 3954],
                [1, 7],
                [0, 8],
                [-8, 14],
                [-12, 7],
                [-37, 16],
                [-5, 5],
                [-2, 5],
                [-2, 7],
                [3, 30],
                [-5, 48],
                [-11, 12],
                [-24, 18],
                [-16, 17],
                [-9, 35],
                [-4, 8],
                [-7, 10],
                [-22, 25],
                [-6, 10],
                [-14, 42],
                [-7, 11],
                [-20, 22]
            ],
            [
                [5373, 4745],
                [20, -16],
                [8, -9],
                [18, -26],
                [31, -57],
                [5, -18],
                [-3, -21],
                [0, -19],
                [12, -25],
                [39, -47],
                [10, -15],
                [1, -14],
                [-11, -80],
                [1, -8],
                [3, -9],
                [24, -42],
                [7, -8],
                [14, -23],
                [10, -26],
                [2, -2],
                [5, -3],
                [8, -3],
                [57, -15],
                [12, -4],
                [8, -5],
                [7, -7],
                [5, -7],
                [0, -6],
                [-5, -6],
                [-10, -3],
                [-35, -8],
                [-35, -14],
                [-13, -7],
                [-33, -23],
                [-18, -10],
                [-45, -32],
                [-42, -24],
                [-33, -13]
            ],
            [
                [2841, 6195],
                [-13, 7],
                [-6, 5],
                [-7, 7],
                [-4, 9],
                [-1, 12],
                [3, 17],
                [22, 48],
                [9, 53],
                [0, 31],
                [5, 19],
                [6, 8],
                [6, 6],
                [21, 9],
                [15, -2],
                [22, -7],
                [23, -10],
                [12, -3],
                [13, -3],
                [13, -1],
                [43, 3],
                [16, 0],
                [22, -2],
                [13, 0],
                [54, 10],
                [15, 5],
                [13, 8],
                [10, 14],
                [6, 10],
                [6, 17],
                [5, 9],
                [10, 9],
                [16, 11],
                [69, 41],
                [20, 18],
                [0, 17],
                [-21, 41],
                [-4, 12],
                [-10, 13],
                [-20, 22],
                [-17, 14],
                [-14, 7],
                [-26, 10],
                [-41, 11],
                [-101, 19],
                [-32, 6],
                [-22, 8],
                [-12, 8],
                [-20, 19],
                [-20, 33],
                [-75, 96],
                [-8, 24],
                [15, 15],
                [4, 8],
                [1, 12],
                [0, 9],
                [-13, 53],
                [0, 8],
                [2, 7],
                [5, 9],
                [23, 23],
                [30, 17]
            ],
            [
                [2922, 7074],
                [16, -14],
                [35, -17],
                [21, -9],
                [93, -25],
                [51, -18],
                [30, -18],
                [7, -7],
                [19, -15],
                [41, -23],
                [31, -12],
                [23, -3],
                [164, -6],
                [27, -5],
                [18, -6],
                [20, -9],
                [41, -21],
                [22, -18],
                [13, -17],
                [25, -55],
                [19, -25],
                [24, -18],
                [24, -11],
                [15, -5],
                [22, -5],
                [16, -1],
                [15, 1],
                [23, 3],
                [22, 8],
                [116, 56],
                [23, 5],
                [14, -1],
                [16, -2],
                [13, -5],
                [12, -6],
                [18, -14],
                [19, -18],
                [62, -45],
                [14, -7],
                [16, -6],
                [29, -7],
                [17, -1],
                [16, 1],
                [32, 5],
                [72, 3],
                [52, -2],
                [97, -14],
                [43, -7],
                [49, -14],
                [25, -10],
                [54, -37],
                [6, -6],
                [16, -20],
                [5, -7],
                [3, -7],
                [1, -7],
                [1, -7],
                [-23, -157],
                [1, -20],
                [0, -5],
                [-16, -44],
                [-3, -7],
                [-5, -7],
                [-41, -42],
                [-16, -22],
                [-6, -6],
                [-8, -5],
                [-11, -4],
                [-12, -1],
                [-12, 1],
                [-10, 4],
                [-9, 5],
                [-69, 59],
                [-20, 12],
                [-24, 10],
                [-16, 5],
                [-30, 6],
                [-19, 2],
                [-22, 0],
                [-17, -2],
                [-16, -3],
                [-11, -3],
                [-16, -10],
                [-25, -26],
                [-40, -58],
                [-13, -29],
                [-1, -5],
                [1, -4],
                [7, -15],
                [6, -9],
                [5, -11],
                [2, -20],
                [-11, -119],
                [5, -32],
                [10, -27],
                [17, -36],
                [192, -280],
                [26, -55],
                [4, -18],
                [0, -14],
                [-4, -9],
                [-6, -8],
                [-7, -8],
                [-75, -62],
                [-6, -9],
                [-5, -10],
                [-7, -27],
                [-7, -30],
                [-22, -53]
            ],
            [
                [5811, 5903],
                [-27, -8],
                [7, -9],
                [32, -13],
                [103, -75],
                [22, -10],
                [25, -7],
                [29, -6],
                [24, -13],
                [7, -22],
                [-8, -21],
                [-26, -11],
                [-26, 6],
                [-12, 1],
                [-1, -10],
                [8, -27],
                [5, -7],
                [24, -13],
                [34, -9],
                [30, -11],
                [13, -17],
                [5, -13],
                [26, -24],
                [9, -13],
                [0, -10],
                [-4, -20],
                [2, -11],
                [10, -12],
                [23, -21],
                [7, -15],
                [4, -22],
                [5, -10],
                [11, -8],
                [63, -23],
                [9, -5],
                [12, -12],
                [8, -5],
                [8, -2],
                [17, -1],
                [7, -2],
                [11, -8],
                [6, -10],
                [0, -11],
                [-7, -25],
                [0, -10],
                [6, -9],
                [33, -30],
                [15, -9],
                [16, -6],
                [46, -7],
                [15, -6],
                [14, -9],
                [8, -10],
                [14, -23],
                [61, -61],
                [12, -7],
                [29, -13],
                [11, -8],
                [21, -22],
                [5, -9],
                [9, -46],
                [-4, -16],
                [-6, -11],
                [-9, -7],
                [-35, -19],
                [-1, -15],
                [-5, -7],
                [-10, -4],
                [-13, -3],
                [-11, -1],
                [-10, -4],
                [-8, -8],
                [-13, -18],
                [-19, -17],
                [-41, -28],
                [-17, -19],
                [317, -1],
                [96, -13],
                [4, -1],
                [7, -4],
                [5, -1],
                [3, 0],
                [6, 3],
                [3, 1],
                [16, -2],
                [32, -7],
                [33, -11],
                [15, -3],
                [35, -3],
                [48, 2],
                [16, -2],
                [15, -5],
                [22, -14],
                [15, -6],
                [7, -1],
                [10, 1],
                [8, 0],
                [4, -5],
                [1, -5],
                [-1, -16],
                [2, -11],
                [8, -10],
                [21, -17],
                [5, -10],
                [-3, -10],
                [-9, -21],
                [9, -21],
                [56, -23],
                [16, -22],
                [3, -6],
                [6, -11],
                [2, -6],
                [-2, -7],
                [-12, -10],
                [-5, -6],
                [-1, -11],
                [2, -9],
                [-1, -10],
                [-9, -12],
                [43, 0],
                [141, 0],
                [140, 0],
                [141, 0],
                [141, 0],
                [30, 0],
                [14, 2],
                [8, 5],
                [3, 4],
                [4, 3],
                [12, 1],
                [8, -2],
                [6, -4],
                [6, -2],
                [11, 0],
                [16, 6],
                [27, 15],
                [39, 8],
                [10, 11],
                [8, 13],
                [10, 11],
                [13, 7],
                [53, 16],
                [49, 9],
                [14, 8],
                [6, 6],
                [10, 14],
                [6, 6],
                [10, 6],
                [20, 8],
                [9, 5],
                [23, 23],
                [12, 10],
                [40, 15],
                [16, 8],
                [30, 21],
                [16, 8],
                [52, 20],
                [15, 11],
                [28, 23],
                [16, 10],
                [15, 5],
                [16, 2],
                [33, 2],
                [1, -7],
                [-1, -1],
                [-8, -10],
                [-2, -9],
                [-4, -7],
                [-15, -4],
                [2, -2],
                [2, -4],
                [2, -2],
                [-10, -2],
                [-7, -5],
                [-2, -7],
                [11, -13],
                [-7, -1],
                [-11, 1],
                [-4, 1],
                [-21, -1],
                [-4, 0],
                [8, -10],
                [5, -18],
                [5, -10],
                [9, -8],
                [24, -13],
                [9, -8],
                [5, -11],
                [-1, -10],
                [-6, -10],
                [-10, -9],
                [-3, -3],
                [-1, -7],
                [-4, -3],
                [-5, 0],
                [-8, 3],
                [-4, 0],
                [-8, -3],
                [-8, -4],
                [-6, -5],
                [-5, -6],
                [-7, -22],
                [0, -32],
                [0, -24]
            ],
            [
                [6245, 3830],
                [-17, 8],
                [-17, 14],
                [-12, 16],
                [-16, 33],
                [-2, 6],
                [0, 6],
                [17, 72],
                [-1, 20],
                [0, 3],
                [-27, 39],
                [-28, 34],
                [-30, 25],
                [-12, 7],
                [-12, 7],
                [-8, 2],
                [-8, 2],
                [-37, 5],
                [-17, 4],
                [-18, 6],
                [-11, 1],
                [-10, -6],
                [-31, -37],
                [-60, -57],
                [-10, -7],
                [-11, -5],
                [-12, -4],
                [-11, -3],
                [-24, -1],
                [-36, 4],
                [-11, -1],
                [-12, -2],
                [-25, -3],
                [-12, 0],
                [-12, -1],
                [-43, -8],
                [-14, -6],
                [-13, -2],
                [-17, -1],
                [-46, 2],
                [-14, -2],
                [-12, -4],
                [-11, -5],
                [-15, -5],
                [-33, -6],
                [-23, 1],
                [-15, 4],
                [-11, 5],
                [-22, 22],
                [-4, 7],
                [-8, 20],
                [-14, 51]
            ],
            [
                [4238, 5293],
                [80, 26],
                [32, 18],
                [24, 19],
                [25, 14],
                [55, 25],
                [15, 10],
                [11, 9],
                [9, 9],
                [11, 9],
                [14, 4],
                [17, 1],
                [13, -3],
                [11, -4],
                [10, -4],
                [58, -34],
                [12, -5],
                [16, -4],
                [18, 0],
                [10, 5],
                [3, 8],
                [-3, 8],
                [-5, 7],
                [-41, 33],
                [-14, 14],
                [-5, 7],
                [-8, 21],
                [0, 12],
                [2, 9],
                [8, 11],
                [11, 7],
                [14, 7],
                [12, 3],
                [9, 0],
                [10, 0],
                [19, 1],
                [7, 4],
                [7, 7],
                [4, 7],
                [2, 9],
                [4, 9],
                [7, 10],
                [11, 7],
                [7, 0],
                [10, -2],
                [13, -5],
                [100, 0],
                [38, 6],
                [20, 6],
                [15, 5],
                [45, 22],
                [27, 9],
                [65, 15],
                [179, 21],
                [20, 4],
                [50, 19],
                [15, 6],
                [10, 8],
                [8, 7],
                [5, 8],
                [2, 9],
                [3, 49],
                [-13, 49],
                [3, 34],
                [-1, 20],
                [-19, 73],
                [-8, 15],
                [-5, 8],
                [-4, 9],
                [0, 10],
                [7, 12],
                [9, 7],
                [11, 3],
                [12, 1],
                [31, -3],
                [76, -32],
                [37, -8],
                [54, -1],
                [21, -2],
                [40, -7],
                [129, -33],
                [36, -12],
                [10, -4],
                [10, -6],
                [7, -6],
                [2, 0],
                [1, 0]
            ],
            [
                [2077, 7511],
                [22, 10],
                [7, 8],
                [1, 11],
                [-1, 11],
                [2, 10],
                [12, 13],
                [12, 10],
                [2, 9],
                [-19, 8],
                [-10, 10],
                [-6, 20],
                [-1, 21],
                [7, 11],
                [14, 9],
                [7, 10],
                [8, 24],
                [48, 70],
                [8, 24],
                [-1, 32],
                [4, 9],
                [8, 6],
                [9, 2],
                [10, 0],
                [10, 2],
                [11, 5],
                [3, 2],
                [0, 4],
                [8, 40],
                [6, 11],
                [8, 10],
                [5, 3],
                [9, 3],
                [7, 2],
                [19, 13],
                [5, 11],
                [-10, 35],
                [-1, 7],
                [1, 3],
                [4, 1],
                [10, 1],
                [6, 3],
                [0, 6],
                [-3, 11],
                [0, 19],
                [1, 11],
                [6, 11],
                [14, 22],
                [1, 2],
                [11, 23],
                [6, 23],
                [0, 6],
                [-5, 11],
                [0, 3],
                [8, 11],
                [14, 2],
                [16, -1],
                [34, -7],
                [10, -5],
                [6, -8],
                [11, -35],
                [8, -10],
                [10, 3],
                [13, 7],
                [14, 2],
                [12, 4],
                [7, 11],
                [-1, 15],
                [-10, 8],
                [-13, 6],
                [-9, 10],
                [0, 12],
                [10, 8],
                [28, 14],
                [10, 10],
                [25, 32],
                [11, 9],
                [38, 22],
                [80, 74],
                [58, 35],
                [15, 5],
                [30, 7]
            ],
            [
                [2787, 8394],
                [13, -59],
                [18, -43],
                [3, -10],
                [2, -45],
                [2, -10],
                [3, -7],
                [39, -47],
                [23, -38],
                [9, -21],
                [9, -49],
                [15, -33],
                [3, -8],
                [-1, -8],
                [-2, -13],
                [-1, -18],
                [1, -15],
                [4, -11],
                [3, -8],
                [4, -5],
                [34, -33],
                [6, -8],
                [8, -12],
                [3, -9],
                [7, -35],
                [5, -15],
                [5, -7],
                [4, -8],
                [-2, -7],
                [-11, -16],
                [-7, -20],
                [-9, -95],
                [3, -35],
                [-4, -39],
                [-6, -16],
                [-6, -10],
                [-18, -23],
                [-23, -38],
                [-21, -24],
                [-5, -4],
                [-12, -7],
                [-15, -11],
                [-14, -13],
                [-14, -15],
                [-19, -32],
                [-6, -19],
                [-3, -29],
                [0, -14],
                [2, -11],
                [4, -8],
                [8, -16],
                [9, -28],
                [11, -78],
                [18, -51],
                [56, -86]
            ],
            [
                [2787, 8394],
                [22, 6],
                [99, 24],
                [100, 24],
                [99, 24],
                [100, 24],
                [99, 24],
                [99, 24],
                [100, 24],
                [99, 24],
                [73, 17],
                [12, 5],
                [35, 15],
                [45, 24],
                [47, 25],
                [47, 25],
                [47, 24],
                [47, 25],
                [47, 25],
                [48, 25],
                [47, 25],
                [47, 25],
                [39, 32],
                [40, 32],
                [39, 31],
                [40, 32],
                [39, 32],
                [40, 32],
                [39, 32],
                [39, 31],
                [32, 26],
                [44, 28],
                [12, 10],
                [6, 5],
                [11, 19],
                [11, 32],
                [24, 64],
                [24, 65],
                [23, 64],
                [24, 64],
                [10, 27],
                [5, 5],
                [22, -14],
                [11, -9],
                [5, -5],
                [8, -5],
                [18, 0],
                [33, 3],
                [37, 0],
                [8, 0],
                [-1, 4],
                [-5, 5],
                [-8, 5],
                [-6, 6],
                [-2, 5],
                [2, 10],
                [0, 5],
                [-36, 82],
                [1, 7],
                [5, 10],
                [1, 5],
                [0, 6],
                [-3, 10],
                [-1, 5],
                [3, 7],
                [9, 4],
                [9, 3],
                [8, 5],
                [1, 5],
                [-1, 4],
                [-2, 4],
                [0, 5],
                [2, 21],
                [-3, 10],
                [-9, 10],
                [-3, 1],
                [-8, -3],
                [-4, 1],
                [-3, 2],
                [-4, 6],
                [-3, 3],
                [-31, 16],
                [-3, 4],
                [-5, 1],
                [-10, 0],
                [-8, 1],
                [-9, 4],
                [-14, 9],
                [-23, 22],
                [-15, 23],
                [-25, 62],
                [-9, 8],
                [-13, 5],
                [-16, 4],
                [-10, 3],
                [-17, 11],
                [-9, 4],
                [-8, 1],
                [-17, -1],
                [-7, 1],
                [-8, 6],
                [-7, 10],
                [-4, 13],
                [4, 9],
                [12, 3],
                [14, -3],
                [14, -4],
                [13, -2],
                [14, 1],
                [11, 0],
                [11, -1],
                [55, -21],
                [21, -1],
                [21, 9],
                [7, 1],
                [27, -3],
                [12, 0],
                [11, 3],
                [10, 3],
                [18, 9],
                [9, 8],
                [12, 3],
                [13, 7],
                [9, 8],
                [4, 7],
                [3, 11],
                [8, 5],
                [12, 2],
                [16, -1],
                [35, -7],
                [17, -6],
                [15, -8],
                [31, -29],
                [9, -6],
                [7, -2],
                [14, 0],
                [7, -2],
                [5, -2],
                [32, -25],
                [11, -5],
                [17, -5],
                [27, -4],
                [13, -4],
                [8, 1],
                [9, 4],
                [19, 22],
                [10, 2],
                [16, -10],
                [11, -11],
                [27, -38],
                [-21, -11],
                [-6, -8],
                [14, -3],
                [8, -1],
                [15, -3],
                [20, -1],
                [5, -1],
                [3, -3],
                [6, -3],
                [4, -2],
                [2, -3],
                [5, -2],
                [11, 0],
                [4, 1],
                [5, 2],
                [6, 3],
                [9, 1],
                [7, -4],
                [23, -26],
                [33, -24],
                [21, -11],
                [47, -20],
                [10, -6],
                [10, -8],
                [7, -8],
                [4, -1],
                [11, 0],
                [4, -2],
                [2, -6],
                [1, -6],
                [1, -5],
                [38, -56],
                [-2, -4],
                [-10, -6],
                [-4, -5],
                [0, -10],
                [5, -8],
                [27, -21],
                [6, -2],
                [7, -2],
                [14, 0],
                [6, -2],
                [-6, -9],
                [4, -6],
                [9, -6],
                [4, -7],
                [-5, -6],
                [-11, 0],
                [-13, 2],
                [-9, -2],
                [-6, -6],
                [5, -5],
                [20, -9],
                [8, -7],
                [11, -25],
                [18, -16],
                [21, -8],
                [47, -6],
                [48, -13],
                [21, 1],
                [13, 16],
                [9, -6],
                [18, -38],
                [4, -5],
                [6, -3],
                [10, -3],
                [5, 1],
                [4, 2],
                [8, 3],
                [3, 3],
                [3, 3],
                [4, 2],
                [7, -4],
                [0, -5],
                [-7, -9],
                [1, -5],
                [11, -4],
                [25, 4],
                [13, -3],
                [4, -5],
                [12, -22],
                [15, -16],
                [7, -5],
                [11, -5],
                [21, -5],
                [13, -2],
                [9, 0],
                [14, 5],
                [12, 14],
                [12, 3],
                [7, -10],
                [11, -8],
                [15, -6],
                [18, -2],
                [9, -2],
                [15, -8],
                [19, -4],
                [4, -4],
                [2, -6],
                [5, -9],
                [2, -6],
                [1, -2],
                [3, -1],
                [11, 1],
                [3, 0],
                [2, -4],
                [2, -5],
                [1, -12],
                [1, -4],
                [4, -4],
                [4, -4],
                [13, -3],
                [-4, -6],
                [-12, -11],
                [7, -8],
                [29, -9],
                [9, -10],
                [17, -8],
                [6, -6],
                [1, -6],
                [0, -5],
                [1, -8],
                [8, -22],
                [0, -11],
                [-20, -8],
                [-6, -8],
                [-9, -18],
                [-2, -21],
                [16, -14],
                [51, -21],
                [1, -2],
                [3, -8],
                [1, -2],
                [3, 0],
                [9, 1],
                [11, -1],
                [9, 0],
                [10, -1],
                [10, -4],
                [19, -12],
                [8, -1],
                [6, 6],
                [12, 9],
                [13, 1],
                [26, -5],
                [5, 2],
                [3, 14],
                [8, 0],
                [21, -16],
                [8, -4],
                [7, -2],
                [7, -3],
                [5, -6],
                [-5, -20],
                [4, -8],
                [18, -15],
                [5, -9],
                [-2, -5],
                [-8, -14],
                [-1, -8],
                [3, -8],
                [6, -7],
                [13, -14],
                [6, -11],
                [4, -12],
                [6, -12],
                [11, -6],
                [-23, -27],
                [-8, -12],
                [-29, -18],
                [-7, -6],
                [-2, -3],
                [-1, -6],
                [1, -5],
                [8, -8],
                [1, -4],
                [3, -2],
                [11, -6],
                [2, -3],
                [4, -16],
                [2, -4],
                [13, -6],
                [34, -6],
                [7, -5],
                [5, -12],
                [11, 7],
                [9, 12],
                [2, 6],
                [54, -21],
                [3, -3],
                [11, -7],
                [14, -25],
                [7, -9],
                [7, -4],
                [7, 0],
                [33, 5],
                [11, 3],
                [10, 6],
                [22, 6],
                [20, 6],
                [13, -3],
                [21, -10],
                [2, 7],
                [4, 5],
                [6, 4],
                [10, 3],
                [4, -4],
                [3, -5],
                [2, -5],
                [3, -15],
                [5, -1],
                [13, 3],
                [10, 7],
                [21, 29],
                [10, 9],
                [14, -1],
                [14, -6],
                [36, -20],
                [15, -3],
                [81, -9],
                [7, -4],
                [4, -6],
                [10, -7],
                [14, -5],
                [15, -3],
                [18, 1],
                [31, 6],
                [19, 2],
                [7, 1],
                [2, 4],
                [-1, 11],
                [4, 2],
                [20, 3],
                [8, 1],
                [51, -8],
                [12, 2],
                [35, 28],
                [22, 13],
                [22, 6],
                [26, 0],
                [49, -5],
                [14, 3],
                [10, 6],
                [4, 12],
                [6, 5],
                [37, 20],
                [28, 30],
                [4, 5],
                [8, 1],
                [46, 20],
                [17, 5],
                [6, -3],
                [-1, -19],
                [7, -9],
                [15, 2],
                [27, 9],
                [18, -2],
                [16, -7],
                [15, -8],
                [16, -6],
                [46, -6],
                [8, -5],
                [4, -10],
                [1, -23],
                [6, -8],
                [12, -4],
                [6, 6],
                [8, 20],
                [11, 8],
                [8, -2],
                [14, -17],
                [19, -16],
                [3, -6],
                [-2, -4],
                [-11, -7],
                [-3, -4],
                [8, -12],
                [27, 4],
                [57, 19],
                [6, -7],
                [15, 2],
                [16, 6],
                [12, 3],
                [8, -1],
                [10, -5],
                [8, -2],
                [9, 1],
                [15, 8],
                [22, 8],
                [15, 26],
                [18, 6],
                [22, 3],
                [11, -1],
                [19, -8],
                [10, -1],
                [10, 0],
                [7, 3],
                [-8, 14],
                [-1, 13],
                [8, 7],
                [23, 0],
                [33, -10],
                [20, -3],
                [16, 5],
                [24, -10],
                [41, -30],
                [28, -12],
                [29, -7],
                [14, -3],
                [21, -2],
                [4, -2],
                [2, -5],
                [0, -16],
                [3, -1],
                [25, -14],
                [5, -6],
                [1, -5],
                [0, -8],
                [1, -7],
                [6, -3],
                [32, 0],
                [6, 3],
                [1, 5],
                [-1, 6],
                [2, 5],
                [14, 6],
                [10, -4],
                [10, -8],
                [12, -4],
                [14, -2],
                [15, -3],
                [13, -5],
                [10, -5],
                [5, -6],
                [3, -6],
                [4, -4],
                [9, -4],
                [9, 1],
                [18, 5],
                [9, 2],
                [17, 0],
                [17, -1],
                [10, -6],
                [-4, -11],
                [-4, -2],
                [-13, -4],
                [-4, -2],
                [0, -5],
                [4, -5],
                [5, -4],
                [4, -2],
                [19, 4],
                [16, 7],
                [15, 3],
                [18, -6],
                [10, -10],
                [11, -23],
                [9, -10],
                [14, -4],
                [14, 5],
                [13, 2],
                [16, -8],
                [2, -6],
                [0, -5],
                [1, -5],
                [7, -3],
                [7, 1],
                [4, 5],
                [4, 6],
                [5, 5],
                [16, 7],
                [8, -4],
                [10, -24],
                [5, -8],
                [7, -7],
                [9, -4],
                [4, -1],
                [0, -1],
                [-17, -19],
                [-62, -67],
                [-62, -67],
                [-62, -67],
                [-62, -67],
                [-62, -67],
                [-62, -66],
                [-62, -67],
                [-62, -67],
                [-27, -29],
                [34, -2],
                [108, -39],
                [8, -4],
                [42, -7],
                [21, 0],
                [21, 6],
                [31, 19],
                [17, 7],
                [22, 2],
                [30, -7],
                [30, -15],
                [26, -19],
                [19, -19],
                [10, -19],
                [4, -19],
                [8, -18],
                [21, -15],
                [80, -28],
                [24, -14],
                [16, -12],
                [14, -14],
                [22, -31],
                [2, -15],
                [-7, -15],
                [-14, -12],
                [-27, -14],
                [-11, -1],
                [-11, 2],
                [-10, 5],
                [-9, 7],
                [-5, 4],
                [-3, 13],
                [-9, 10],
                [-16, 4],
                [-17, -1],
                [-15, -5],
                [-10, -10],
                [-13, -21],
                [-15, -9],
                [-9, 8],
                [-6, 8],
                [-6, 6],
                [-6, 1],
                [-7, -1],
                [-7, 2],
                [-39, 21],
                [-8, 7],
                [-1, 10],
                [7, 21],
                [-2, 11],
                [-6, 8],
                [-9, 7],
                [-10, 2],
                [-14, -15],
                [-10, 1],
                [-20, 13],
                [-13, 3],
                [-11, 1],
                [-12, -2],
                [-12, -4],
                [-33, -18],
                [-11, -2],
                [-9, 3],
                [-2, 8],
                [-4, 8],
                [-12, 4],
                [-13, -5],
                [-5, -9],
                [-3, -10],
                [-7, -6],
                [-38, 15],
                [0, 8],
                [3, 10],
                [-1, 8],
                [-13, 2],
                [-13, -3],
                [-7, -7],
                [-9, -16],
                [-8, -5],
                [-14, 0],
                [-50, 10],
                [-8, -1],
                [-37, -13],
                [-11, -6],
                [-2, -7],
                [7, -14],
                [-3, -5],
                [-12, -3],
                [-12, -4],
                [-6, -8],
                [-4, -9],
                [-8, -9],
                [-24, -16],
                [-10, -9],
                [-7, -11],
                [-16, -11],
                [-17, 10],
                [-12, 11],
                [-4, -13],
                [-15, -8],
                [-41, 11],
                [-20, -5],
                [-10, -12],
                [-8, -3],
                [-12, 1],
                [-6, 4],
                [-9, 13],
                [-5, 3],
                [-13, -5],
                [-12, -13],
                [-10, -8],
                [-22, 17],
                [-18, 2],
                [-19, -3],
                [-13, -7],
                [-2, -7],
                [2, -5],
                [0, -6],
                [-8, -7],
                [-3, 0],
                [-4, 2],
                [-5, 1],
                [-5, -2],
                [-7, -6],
                [-3, -2],
                [-11, -3],
                [-6, 3],
                [-5, 6],
                [-8, 4],
                [-11, 1],
                [-36, -4],
                [-24, 0],
                [-12, -1],
                [-11, -4],
                [-5, -4],
                [-5, -12],
                [-5, -4],
                [-6, 1],
                [-20, 3],
                [-11, -1],
                [-36, -11],
                [3, 12],
                [-8, -2],
                [-16, -11],
                [-10, -2],
                [-7, -1],
                [-6, 2],
                [-8, 6],
                [-13, 6],
                [-8, -1],
                [-9, -5],
                [-15, -1],
                [-9, 2],
                [-18, 5],
                [-8, 1],
                [-7, -2],
                [-2, -4],
                [-1, -4],
                [-3, -2],
                [-5, -1],
                [-65, -5],
                [-14, -3],
                [-20, -10],
                [-38, -25],
                [-23, -5],
                [-13, -7],
                [-7, -4],
                [-7, -1],
                [-8, 2],
                [-7, 3],
                [-6, 0],
                [-6, -5],
                [-15, -20],
                [-9, -7],
                [-15, -9],
                [-43, -17],
                [-40, -20],
                [-15, -6],
                [-14, -3],
                [-10, -1],
                [-30, 3],
                [-9, -1],
                [-4, -4],
                [-2, -4],
                [-5, -3],
                [-32, -6],
                [-9, -7],
                [-6, -29],
                [-8, -9],
                [-13, -7],
                [-17, -6],
                [-4, 0],
                [-11, -1],
                [-4, -1],
                [-2, -3],
                [0, -3],
                [0, -3],
                [-1, -2],
                [-4, -5],
                [-3, -5],
                [-4, -3],
                [-12, 0],
                [-15, -2],
                [-14, -4],
                [-12, -7],
                [-20, -14],
                [-22, -7],
                [-10, -7],
                [-3, -6],
                [-1, -5],
                [-2, -5],
                [-8, -5],
                [-7, -1],
                [-43, 0],
                [-16, 3],
                [-15, 1],
                [-10, -5],
                [-10, -9],
                [-14, -4],
                [-32, -5],
                [-4, 1],
                [-10, 2],
                [-4, 0],
                [-2, -3],
                [-1, -8],
                [-1, -2],
                [-11, -4],
                [-6, -1],
                [-11, -1],
                [-19, -3],
                [-3, -8],
                [6, -10],
                [7, -8],
                [4, -8],
                [5, -33],
                [-2, -9],
                [-7, -8],
                [-8, -7],
                [-6, -8],
                [-6, -23],
                [-3, -9],
                [-23, -34],
                [-7, -17],
                [3, -18],
                [7, -18],
                [0, -15],
                [-13, -51],
                [-8, -16],
                [-11, -15],
                [-83, -75],
                [-27, -18],
                [-45, -69],
                [-17, -19],
                [-13, -20],
                [0, -25],
                [7, -14],
                [38, -29],
                [5, -10],
                [8, -44],
                [5, -12],
                [17, -25],
                [5, -13],
                [0, -11],
                [-4, -13],
                [-12, -22],
                [-19, -23],
                [-22, -15],
                [-27, -10],
                [-35, -6],
                [-56, -1],
                [-17, -4],
                [-28, -17],
                [-31, -13],
                [-54, -32],
                [-64, -25],
                [-39, -22],
                [-22, -9],
                [-11, -6],
                [-9, -14],
                [-8, -7],
                [-33, -14],
                [-9, -7],
                [-4, -9],
                [-2, -30],
                [-19, -49],
                [-12, -16],
                [-4, -13],
                [4, -8],
                [3, -5],
                [54, -54],
                [8, -23],
                [7, -10],
                [2, -10],
                [-9, -11],
                [-13, -6],
                [-16, -1],
                [-31, 1],
                [-20, -1],
                [-14, -3],
                [-29, -12],
                [-17, -5],
                [-15, 1],
                [-32, 8],
                [-17, 0],
                [3, -10],
                [22, -26],
                [5, -14],
                [-4, -9],
                [-6, -8],
                [-1, -12],
                [-10, -12],
                [-10, -3]
            ],
            [
                [5224, 1775],
                [27, 47],
                [1, 9],
                [1, 18],
                [-3, 20],
                [-2, 6],
                [-4, 6],
                [-14, 13],
                [-11, 16],
                [-15, 11],
                [-7, 16],
                [-2, 16],
                [-3, 10],
                [-4, 7],
                [-5, 5],
                [-5, 3],
                [-35, 16],
                [-7, 5],
                [-8, 8],
                [0, 7],
                [5, 15],
                [-3, 5],
                [-5, 4],
                [-7, 4],
                [-8, 5],
                [-9, 9],
                [-7, 5],
                [-7, 5],
                [-8, 1],
                [-9, 1],
                [-7, -2],
                [-7, -3],
                [-19, -18],
                [-5, -3],
                [-7, -3],
                [-8, -2],
                [-41, -5],
                [-7, 1],
                [-3, 4],
                [-2, 14],
                [-10, 23],
                [16, 22],
                [0, 5],
                [-1, 7],
                [-8, 10],
                [-5, 4],
                [-6, 4],
                [-33, 15],
                [-7, 5],
                [-6, 6],
                [6, 10],
                [6, 8],
                [9, 8],
                [30, 39],
                [4, 10],
                [-4, 10],
                [-14, 22],
                [0, 9],
                [3, 8],
                [3, 6],
                [8, 9]
            ],
            [
                [4955, 2291],
                [8, 11],
                [19, 8],
                [33, 10],
                [132, 18],
                [42, -1],
                [13, 0],
                [6, 4],
                [6, 7],
                [4, 10],
                [8, 65],
                [-6, 28],
                [-19, 37],
                [-28, 43],
                [-5, 17],
                [3, 42],
                [-4, 9],
                [-6, 7],
                [-3, 3],
                [-5, 3],
                [-6, 4],
                [-13, 6],
                [-5, 4],
                [-5, 5],
                [-3, 4],
                [-3, 7],
                [-1, 2],
                [-4, 3],
                [-12, 6],
                [-22, 8],
                [-7, 3],
                [-4, 4],
                [-3, 4],
                [22, 51],
                [4, 4],
                [5, 2],
                [40, 7],
                [30, 8],
                [8, 1],
                [8, -1],
                [7, -3],
                [5, -5],
                [11, -16],
                [4, -4],
                [9, -3],
                [12, -2],
                [22, -2],
                [12, -2],
                [10, -4],
                [16, 0],
                [28, 19],
                [4, 5],
                [-2, 2],
                [-12, 3],
                [-10, 1],
                [-10, 2],
                [-7, 2],
                [-19, 15],
                [-5, 5],
                [3, 5],
                [10, 6],
                [38, 14],
                [11, 8],
                [13, 16],
                [4, 4],
                [6, 2],
                [6, -1],
                [14, -5],
                [8, -1],
                [9, 1],
                [17, 2],
                [9, 1],
                [16, 0],
                [28, 4],
                [11, 3],
                [14, 6],
                [6, 7],
                [2, 7],
                [-1, 5],
                [-2, 5],
                [-7, 10],
                [-5, 12],
                [0, 7],
                [0, 6],
                [2, 6],
                [2, 6],
                [5, 5],
                [5, 3],
                [7, 4],
                [7, 2],
                [10, 1],
                [12, -1],
                [17, -6],
                [25, -12],
                [6, -2],
                [5, -1],
                [6, 6],
                [-1, 13],
                [-3, 9],
                [-22, 38],
                [-20, 13],
                [5, 18],
                [0, 5],
                [-3, 17],
                [5, 3],
                [3, 1],
                [2, 0],
                [11, -1],
                [2, 1],
                [1, 2],
                [0, 3],
                [0, 2],
                [0, 3],
                [1, 2],
                [5, 6],
                [1, 2],
                [0, 4],
                [0, 6],
                [-1, 7],
                [-3, 6],
                [-18, 24],
                [-4, 8],
                [-1, 5],
                [3, 6],
                [1, 6],
                [1, 11],
                [-2, 6],
                [-5, 9],
                [-8, 9],
                [-40, 33],
                [-15, 16],
                [-4, 5],
                [-9, 16],
                [-2, 2],
                [-4, 3],
                [-6, 2],
                [-11, 2],
                [-7, 0],
                [-5, 0],
                [-7, -3],
                [-4, -1],
                [-4, -1],
                [-5, 0],
                [-8, 4],
                [-5, 3],
                [-29, 30],
                [18, 30],
                [21, 46],
                [5, 7],
                [7, 6],
                [28, 19],
                [52, 26]
            ],
            [
                [5492, 3381],
                [15, -11],
                [3, -4],
                [5, -7],
                [3, -10],
                [2, -2],
                [2, -2],
                [3, -2],
                [6, -2],
                [27, -7],
                [8, -3],
                [6, -2],
                [15, -12],
                [13, -7],
                [11, -7],
                [7, -4],
                [8, -2],
                [34, -7],
                [6, 0],
                [8, 0],
                [14, 3],
                [12, 5],
                [19, 13],
                [11, 5],
                [7, 2],
                [6, 1],
                [7, -1],
                [13, -2],
                [12, -4],
                [3, -2],
                [6, -2],
                [11, -1],
                [34, 3]
            ],
            [
                [3586, 3183],
                [-10, 15],
                [17, 14],
                [7, 20],
                [-7, 21],
                [-27, 16],
                [-23, 27],
                [-75, 29],
                [-45, 13],
                [-9, 0],
                [-3, 3],
                [-14, 9],
                [-5, 5],
                [-1, 8],
                [2, 4],
                [3, 4],
                [1, 6],
                [-12, 22],
                [-28, 14],
                [-20, 4]
            ],
            [
                [3316, 3462],
                [-4, 36],
                [-6, 13],
                [-6, 16],
                [-4, 6],
                [-12, 12],
                [-4, 12],
                [4, 13],
                [-12, 13],
                [1, 5],
                [14, -1],
                [9, 7],
                [-4, 11],
                [-19, 25],
                [-1, 6]
            ],
            [
                [3272, 3636],
                [1, 0],
                [22, 10],
                [20, 5],
                [3, 1],
                [-1, 3],
                [-2, 3],
                [1, 4],
                [2, 5],
                [9, 4],
                [6, 5],
                [7, 8],
                [8, 18],
                [2, 2],
                [4, 1],
                [10, -1],
                [6, -2],
                [6, -3],
                [6, -3],
                [11, -7],
                [3, -4],
                [1, -2],
                [-4, -5],
                [-2, -7],
                [-6, -9],
                [1, -12],
                [3, -3],
                [3, -2],
                [16, -3],
                [7, 1],
                [6, -1],
                [2, -1],
                [0, -7],
                [6, -13],
                [8, -6],
                [5, -3],
                [4, -3],
                [9, -4],
                [5, 2],
                [7, 4],
                [5, 4],
                [10, 3],
                [12, -1],
                [16, -4],
                [21, -1],
                [8, -3],
                [2, -2],
                [-4, -5],
                [-21, -18],
                [-5, -2],
                [-9, -1],
                [-6, 0],
                [-5, 0],
                [-5, -2],
                [-4, -4],
                [-1, -8],
                [-4, -5],
                [-9, -6],
                [-4, -2],
                [-1, -4],
                [0, -6],
                [2, -6],
                [4, -2],
                [8, 0],
                [9, 0],
                [2, -4],
                [1, -3],
                [-4, -4],
                [-3, -2],
                [-2, -2],
                [-1, -9],
                [0, -4],
                [0, -2],
                [0, -3],
                [0, -4],
                [-3, -5],
                [3, -7],
                [2, -2],
                [3, -1],
                [3, 1],
                [7, 0],
                [6, 1],
                [22, 6],
                [13, 2],
                [6, 2],
                [5, 5],
                [6, 3],
                [9, 2],
                [5, 2],
                [31, 21],
                [9, 9],
                [6, 0],
                [10, -4],
                [7, -4],
                [18, -13],
                [3, -3],
                [2, -4],
                [12, -12],
                [2, -5],
                [1, -4],
                [-7, -7],
                [-14, -7],
                [-6, -1],
                [-6, -1],
                [-9, -4],
                [-2, -5],
                [1, -17],
                [3, -2],
                [3, -2],
                [5, 0],
                [8, -1],
                [15, -9],
                [12, -7],
                [11, -10],
                [2, -4],
                [-2, -1],
                [-22, 8],
                [-4, 0],
                [-6, -3],
                [-8, -3],
                [-3, -7],
                [5, -6],
                [9, -7],
                [4, -5],
                [1, -7],
                [5, -7],
                [6, -6],
                [6, -2],
                [3, -3],
                [13, -17],
                [7, -5],
                [8, -5],
                [2, -3],
                [2, -4],
                [-2, -4],
                [-1, -5],
                [-6, -13],
                [-8, -8],
                [-3, -5],
                [-3, -4],
                [-4, -3],
                [-3, -4],
                [-3, -3],
                [-3, -6],
                [-1, -9],
                [2, -2],
                [3, -2],
                [3, -2],
                [1, -1],
                [-2, -3],
                [-4, -3],
                [-6, -4],
                [-44, -12],
                [-7, -15],
                [0, -6],
                [1, -6],
                [-1, -6],
                [-4, -7],
                [-10, -6],
                [-6, -3],
                [-6, -2],
                [-6, -2]
            ],
            [
                [4955, 2291],
                [-15, 14],
                [-17, 9],
                [-14, 6],
                [-11, 2],
                [-10, 2],
                [-23, 0],
                [-22, 4],
                [-36, 26],
                [-43, 20],
                [-14, 9],
                [-11, 4],
                [-7, 2],
                [-30, 2],
                [-11, 1],
                [-15, 4],
                [-11, 5],
                [-14, 7],
                [-9, 3],
                [-46, 13],
                [-9, 6],
                [-7, 6],
                [-7, 10],
                [-3, 4],
                [2, 6],
                [7, 9],
                [2, 5],
                [-2, 5],
                [-12, 14],
                [-2, 5],
                [-2, 5],
                [2, 7],
                [12, 9],
                [25, 32],
                [-1, 8],
                [-3, 6],
                [-8, 10],
                [-15, 25],
                [9, 8],
                [11, 8],
                [8, 10],
                [23, 39],
                [-4, 6],
                [-8, 3],
                [-8, 2],
                [-29, 2],
                [-17, 2],
                [-41, 12],
                [-26, 4],
                [-16, 1],
                [-17, 0],
                [-54, -2],
                [-22, 3],
                [-5, 4],
                [-4, 5],
                [-1, 6],
                [2, 6],
                [3, 5],
                [8, 10],
                [14, 13],
                [3, 6],
                [3, 6],
                [3, 13],
                [2, 6],
                [5, 4],
                [7, 3],
                [15, 5],
                [7, 4],
                [5, 7],
                [4, 12],
                [0, 9],
                [0, 7],
                [-11, 30],
                [1, 8],
                [5, 6],
                [6, 3],
                [30, 10],
                [8, 4],
                [8, 6],
                [8, 12],
                [4, 7],
                [1, 4],
                [-1, 2],
                [-2, 2],
                [-5, 6]
            ],
            [
                [4507, 2925],
                [10, 20],
                [9, 33],
                [6, 10],
                [7, 6],
                [27, 11],
                [34, 22],
                [21, 19],
                [18, 24],
                [0, 16]
            ],
            [
                [4639, 3086],
                [0, 6],
                [3, 11],
                [4, 6],
                [4, 4],
                [9, 3],
                [7, 2],
                [8, 2],
                [6, 5],
                [5, 8],
                [6, 13],
                [6, 6],
                [8, 7],
                [60, 41],
                [10, 5],
                [14, 3],
                [11, 2],
                [10, 2],
                [8, 6],
                [23, 24],
                [19, 7],
                [50, 8],
                [-7, 2],
                [-1, 0],
                [-3, 2],
                [-6, 7],
                [-1, 2],
                [-3, 13],
                [-8, 10],
                [-1, 2],
                [-2, 6],
                [2, 1],
                [4, 1],
                [12, 2],
                [17, 4],
                [8, 4],
                [6, 5],
                [5, 4],
                [27, 36],
                [2, 6],
                [0, 7],
                [-3, 12],
                [-2, 6],
                [-4, 5],
                [-5, 4],
                [-19, 10],
                [-9, 9],
                [-4, 5],
                [-2, 5],
                [-1, 6],
                [3, 5],
                [5, 3],
                [18, 11],
                [4, 4],
                [3, 4],
                [5, 7],
                [4, 4],
                [6, 2],
                [8, -2],
                [6, -3],
                [14, -15],
                [6, -3],
                [6, -3],
                [5, -3],
                [11, -3],
                [16, -4],
                [11, -1],
                [13, 0],
                [19, 2],
                [31, 7],
                [10, 0],
                [12, -1],
                [10, -3],
                [11, -2],
                [12, 0],
                [18, 0],
                [39, 7],
                [5, 3],
                [4, 2],
                [5, 8],
                [5, 5],
                [5, 4],
                [3, 1],
                [4, 2],
                [5, 0],
                [8, 0],
                [32, -5],
                [20, -2],
                [15, -5],
                [35, -19],
                [24, 0],
                [4, 0],
                [8, -3],
                [51, -34],
                [41, -22]
            ],
            [
                [4079, 2212],
                [-3, -4],
                [-9, 1],
                [-13, 6],
                [-10, 4],
                [0, 6],
                [6, 2],
                [14, -2],
                [5, -6],
                [2, -5],
                [8, -2]
            ],
            [
                [3869, 2449],
                [-7, -1],
                [-9, 0],
                [-7, 1],
                [2, 6],
                [7, 5],
                [2, 6],
                [8, -1],
                [2, -3],
                [6, -2],
                [0, -6],
                [-4, -5]
            ],
            [
                [4948, 1584],
                [-15, 11],
                [-9, 5],
                [-15, 3],
                [-16, 2],
                [-12, 3],
                [-5, 9],
                [-4, 2],
                [-14, 2],
                [-1, 4],
                [1, 2],
                [11, 4],
                [16, 3],
                [3, 7],
                [-12, 12],
                [-23, 10],
                [-32, 9],
                [-21, 14],
                [15, 0],
                [9, 3],
                [4, 5],
                [-1, 7],
                [-4, 5],
                [-5, 5],
                [-39, 24],
                [-16, 5],
                [-41, 4],
                [-11, 6],
                [-7, 9],
                [-7, 13],
                [-37, 36],
                [-6, 11],
                [-6, 5],
                [-28, 13],
                [-9, 6],
                [-1, 3],
                [1, 18],
                [-3, 4],
                [-35, 18],
                [-65, 21],
                [-21, 8],
                [-17, 6],
                [-19, 8],
                [-34, 19],
                [-40, 13],
                [-2, 3],
                [-7, 3],
                [-8, 2],
                [-6, 1],
                [-9, 2],
                [-6, 5],
                [-5, 6],
                [-5, 6],
                [-6, 3],
                [-6, 3],
                [-33, 11],
                [-11, 8],
                [2, 13],
                [-2, 12],
                [-2, 13],
                [-10, 12],
                [-14, 13],
                [-8, 3],
                [-3, 6],
                [4, 5],
                [6, 9],
                [-4, 5],
                [-9, 12],
                [-18, 6],
                [-26, 12],
                [-10, 6],
                [-15, 14],
                [-11, 8],
                [-8, 2],
                [-19, 2],
                [-8, 2],
                [-5, 4],
                [-9, 17],
                [22, 2],
                [6, 5],
                [2, 5],
                [-6, 7],
                [-7, 10],
                [-5, 6],
                [-6, 12],
                [-10, 10],
                [-12, 4],
                [-13, 3],
                [-7, 7],
                [-4, 9],
                [-6, 7],
                [-10, 4],
                [-28, 7],
                [-1, -12],
                [-15, -17],
                [-16, 19],
                [7, 14],
                [-1, 20],
                [-7, 13],
                [9, 4],
                [0, 9],
                [10, 4],
                [-5, 6],
                [2, 4],
                [2, 6],
                [-7, 6],
                [-5, 10],
                [9, 2],
                [2, 13],
                [-5, 10],
                [-14, 6],
                [-2, 7],
                [0, 3],
                [3, 5],
                [1, 3],
                [-4, 4],
                [-9, 1],
                [-5, -3],
                [-2, -8],
                [-6, -5],
                [-10, 3],
                [-13, -2],
                [-15, 6],
                [-16, 0],
                [0, 14],
                [2, 8],
                [11, 18],
                [8, 7],
                [-4, 7],
                [8, 4],
                [14, -2],
                [14, 8],
                [14, 0],
                [10, -1],
                [4, -6],
                [-8, -8],
                [-2, -8],
                [8, -4],
                [10, -3],
                [15, -8],
                [6, 5],
                [1, 12],
                [4, 12],
                [12, 24],
                [7, 16],
                [-1, 11],
                [3, 15],
                [9, 18],
                [9, 17],
                [14, 46],
                [-6, 40],
                [-6, 20],
                [-20, 39],
                [-22, 20]
            ],
            [
                [4021, 2740],
                [37, 18],
                [13, 13],
                [29, 37],
                [7, 6],
                [113, 62],
                [8, 7],
                [5, 5],
                [11, 18],
                [6, 7],
                [6, 2],
                [5, 1],
                [3, -1],
                [1, 0],
                [3, -2],
                [38, -12],
                [19, -3],
                [53, 1],
                [75, 7],
                [11, 3],
                [22, 10],
                [21, 6]
            ],
            [
                [4639, 3086],
                [-44, 23],
                [-30, 10],
                [-6, 3],
                [-4, 7],
                [-1, 9],
                [6, 17],
                [12, 19],
                [4, 11],
                [7, 49],
                [-9, 20],
                [-11, 8],
                [-56, 81],
                [-10, 10],
                [-2, 10],
                [15, 20],
                [-4, 10],
                [-4, 4],
                [-38, 21],
                [-61, 16],
                [-21, 9],
                [-7, 3],
                [-7, 3],
                [-63, 19],
                [-10, 1],
                [-16, -1],
                [-11, -1],
                [-38, -12],
                [-14, -2],
                [-8, 0],
                [-11, 7],
                [-8, 6],
                [-29, 48],
                [-27, 14],
                [-15, 7],
                [-7, 4],
                [-4, 5],
                [-6, 17],
                [-6, 7],
                [-35, 24],
                [-5, 5],
                [-3, 8],
                [-1, 22],
                [-7, 24],
                [0, 25],
                [-1, 7],
                [-5, 5],
                [-8, 4],
                [-18, 3],
                [-10, -1],
                [-12, -6],
                [-6, 1],
                [-9, 7],
                [-8, 5],
                [-19, 7],
                [-9, 5],
                [-7, 8],
                [-13, 11],
                [-26, 55],
                [-2, 12],
                [-10, 12],
                [-39, 26],
                [-8, 24],
                [-6, 55],
                [4, 38]
            ],
            [
                [4021, 2740],
                [-20, 18],
                [-26, 17],
                [-50, 45],
                [-63, 56],
                [-26, 19],
                [-6, 14],
                [-12, 12],
                [-8, 24],
                [4, 19],
                [-4, 22],
                [-12, 14],
                [-9, 7],
                [-54, 31],
                [-15, 13],
                [-34, 45],
                [-7, 7],
                [1, 15],
                [-1, 5],
                [-6, 5],
                [-12, 9],
                [-25, 23],
                [-34, 15],
                [-16, 8]
            ],
            [
                [3272, 3636],
                [-2, 5],
                [-9, 13],
                [-11, 11],
                [-12, 4],
                [-10, 3],
                [-9, 5],
                [-14, 12],
                [-2, 4],
                [5, 5],
                [0, 5],
                [-3, 4],
                [-14, 11],
                [-10, 14],
                [-7, 6],
                [-7, 2],
                [-8, 2],
                [-6, 4],
                [-10, 10],
                [-14, 6],
                [-34, 10],
                [-26, 15],
                [-122, 44],
                [-20, 11],
                [-11, 6],
                [2, 7],
                [-2, 12],
                [-4, 11],
                [6, 3],
                [-2, 5],
                [6, 5],
                [7, 0],
                [10, -2],
                [7, 3],
                [9, 2],
                [4, 9],
                [-1, 14],
                [-11, 13],
                [-8, 8],
                [4, 6],
                [-16, 13],
                [4, 5],
                [-8, 10],
                [3, 5],
                [-6, 10],
                [-15, 13],
                [3, 4],
                [9, 5],
                [-8, 11],
                [-6, 9],
                [1, 7],
                [-6, 11],
                [-9, 10],
                [-11, 10],
                [-13, 12],
                [2, 9],
                [-20, 11],
                [-14, 9],
                [0, 8],
                [4, 5],
                [-14, 13],
                [1, 4],
                [-23, 14],
                [-12, 6],
                [-4, 7],
                [-5, 6],
                [-6, 4],
                [-17, 11],
                [-33, 38]
            ]
        ],
        transform: {
            scale: [.001265457050305029, .0018310484543392366],
            translate: [-81.33755752899992, -18.337746206937936]
        }
    }, p.prototype.pgaTopo = "__PGA__", p.prototype.phlTopo = "__PHL__", p.prototype.plwTopo = "__PLW__", p.prototype.pngTopo = "__PNG__", p.prototype.polTopo = "__POL__", p.prototype.priTopo = "__PRI__", p.prototype.prkTopo = "__PRK__", p.prototype.prtTopo = "__PRT__", p.prototype.pryTopo = "__PRY__", p.prototype.pyfTopo = "__PYF__", p.prototype.qatTopo = "__QAT__", p.prototype.rouTopo = "__ROU__", p.prototype.rusTopo = "__RUS__", p.prototype.rwaTopo = "__RWA__", p.prototype.sahTopo = "__SAH__", p.prototype.sauTopo = "__SAU__", p.prototype.scrTopo = "__SCR__", p.prototype.sdnTopo = "__SDN__";
    p.prototype.sdsTopo = "__SDS__";
    p.prototype.senTopo = "__SEN__", p.prototype.serTopo = "__SER__", p.prototype.sgpTopo = "__SGP__", p.prototype.sgsTopo = "__SGS__", p.prototype.shnTopo = "__SHN__", p.prototype.slbTopo = "__SLB__", p.prototype.sleTopo = "__SLE__", p.prototype.slvTopo = "__SLV__", p.prototype.smrTopo = "__SMR__", p.prototype.solTopo = "__SOL__", p.prototype.somTopo = "__SOM__", p.prototype.spmTopo = "__SPM__", p.prototype.srbTopo = "__SRB__", p.prototype.stpTopo = "__STP__", p.prototype.surTopo = "__SUR__", p.prototype.svkTopo = "__SVK__", p.prototype.svnTopo = "__SVN__", p.prototype.sweTopo = "__SWE__", p.prototype.swzTopo = "__SWZ__", p.prototype.sxmTopo = "__SXM__", p.prototype.sycTopo = "__SYC__", p.prototype.syrTopo = "__SYR__", p.prototype.tcaTopo = "__TCA__", p.prototype.tcdTopo = "__TCD__", p.prototype.tgoTopo = "__TGO__", p.prototype.thaTopo = "__THA__", p.prototype.tjkTopo = "__TJK__", p.prototype.tkmTopo = "__TKM__", p.prototype.tlsTopo = "__TLS__", p.prototype.tonTopo = "__TON__", p.prototype.ttoTopo = "__TTO__", p.prototype.tunTopo = "__TUN__", p.prototype.turTopo = "__TUR__", p.prototype.tuvTopo = "__TUV__", p.prototype.twnTopo = "__TWN__", p.prototype.tzaTopo = "__TZA__", p.prototype.ugaTopo = "__UGA__", p.prototype.ukrTopo = "__UKR__", p.prototype.umiTopo = "__UMI__", p.prototype.uryTopo = "__URY__", p.prototype.usaTopo = "__USA__", p.prototype.usgTopo = "__USG__", p.prototype.uzbTopo = "__UZB__", p.prototype.vatTopo = "__VAT__", p.prototype.vctTopo = "__VCT__", p.prototype.venTopo = "__VEN__", p.prototype.vgbTopo = "__VGB__", p.prototype.virTopo = "__VIR__", p.prototype.vnmTopo = "__VNM__", p.prototype.vutTopo = "__VUT__", p.prototype.wlfTopo = "__WLF__", p.prototype.wsbTopo = "__WSB__", p.prototype.wsmTopo = "__WSM__", p.prototype.yemTopo = "__YEM__", p.prototype.zafTopo = "__ZAF__", p.prototype.zmbTopo = "__ZMB__", p.prototype.zweTopo = "__ZWE__", p.prototype.latLngToXY = function(t, e) {
        return this.projection([e, t])
    }, p.prototype.addLayer = function(t, e, n) {
        var r;
        return r = n ? this.svg.insert("g", ":first-child") : this.svg.append("g"), r.attr("id", e || "").attr("class", t || "")
    }, p.prototype.updateChoropleth = function(t) {
        var e = this.svg;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r, i = t[n];
                if (!n) continue;
                if (r = "string" == typeof i ? i : "string" == typeof i.color ? i.color : this.options.fills[i.fillKey], i === Object(i)) {
                    this.options.data[n] = h(i, this.options.data[n] || {});
                    this.svg.select("." + n).attr("data-info", JSON.stringify(this.options.data[n]))
                }
                e.selectAll("." + n).transition().style("fill", r)
            }
    }, p.prototype.updatePopup = function(t, e, n) {
        var r = this;
        t.on("mousemove", null), t.on("mousemove", function() {
            var i = f.mouse(r.options.element);
            f.select(r.svg[0][0].parentNode).select(".datamaps-hoverover").style("top", i[1] + 30 + "px").html(function() {
                var r = JSON.parse(t.attr("data-info"));
                try {
                    return n.popupTemplate(e, r)
                } catch (t) {
                    return ""
                }
            }).style("left", i[0] + "px")
        }), f.select(r.svg[0][0].parentNode).select(".datamaps-hoverover").style("display", "block")
    }, p.prototype.addPlugin = function(t, e) {
        var n = this;
        "undefined" == typeof p.prototype[t] && (p.prototype[t] = function(r, i, o, a) {
            var s;
            "undefined" == typeof a && (a = !1), "function" == typeof i && (o = i, i = void 0), i = h(i || {}, n.options[t + "Config"]), !a && this.options[t + "Layer"] ? (s = this.options[t + "Layer"], i = i || this.options[t + "Options"]) : (s = this.addLayer(t), this.options[t + "Layer"] = s, this.options[t + "Options"] = i), e.apply(this, [s, r, i]), o && o(s)
        })
    }, "object" == typeof exports ? (f = require("d3"), d = require("topojson"), module.exports = p) : "function" == typeof define && define.amd ? define("datamaps", ["require", "d3", "topojson"], function(t) {
        return f = t("d3"), d = t("topojson"), p
    }) : window.Datamap = window.Datamaps = p, window.jQuery && (window.jQuery.fn.datamaps = function(t, e) {
        t = t || {}, t.element = this[0];
        var n = new p(t);
        return "function" == typeof e && e(n, t), this
    })
}(),
function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length,
            n = ot.type(t);
        return "function" !== n && !ot.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function r(t, e, n) {
        if (ot.isFunction(e)) return ot.grep(t, function(t, r) {
            return !!e.call(t, r, t) !== n
        });
        if (e.nodeType) return ot.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (gt.test(e)) return ot.filter(e, t, n);
            e = ot.filter(e, t)
        }
        return ot.grep(t, function(t) {
            return Q.call(e, t) > -1 !== n
        })
    }

    function i(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = {};
        return ot.each(t.match(_t) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function a() {
        X.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a), ot.ready()
    }

    function s() {
        this.expando = ot.expando + s.uid++
    }

    function l(t, e, n) {
        var r;
        if (void 0 === n && 1 === t.nodeType)
            if (r = "data-" + e.replace(At, "-$&").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : St.test(n) ? ot.parseJSON(n) : n)
                } catch (t) {}
                kt.set(t, e, n)
            } else n = void 0;
        return n
    }

    function u(t, e, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return ot.css(t, e, "")
            },
            l = s(),
            u = n && n[3] || (ot.cssNumber[e] ? "" : "px"),
            c = (ot.cssNumber[e] || "px" !== u && +l) && Nt.exec(ot.css(t, e));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do o = o || ".5", c /= o, ot.style(t, e, c + u); while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
    }

    function c(t, e) {
        var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], n) : n
    }

    function h(t, e) {
        for (var n = 0, r = t.length; n < r; n++) Mt.set(t[n], "globalEval", !e || Mt.get(e[n], "globalEval"))
    }

    function p(t, e, n, r, i) {
        for (var o, a, s, l, u, p, f = e.createDocumentFragment(), d = [], g = 0, v = t.length; g < v; g++)
            if (o = t[g], o || 0 === o)
                if ("object" === ot.type(o)) ot.merge(d, o.nodeType ? [o] : o);
                else if ($t.test(o)) {
            for (a = a || f.appendChild(e.createElement("div")), s = (Dt.exec(o) || ["", ""])[1].toLowerCase(), l = jt[s] || jt._default, a.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], p = l[0]; p--;) a = a.lastChild;
            ot.merge(d, a.childNodes), a = f.firstChild, a.textContent = ""
        } else d.push(e.createTextNode(o));
        for (f.textContent = "", g = 0; o = d[g++];)
            if (r && ot.inArray(o, r) > -1) i && i.push(o);
            else if (u = ot.contains(o.ownerDocument, o), a = c(f.appendChild(o), "script"), u && h(a), n)
            for (p = 0; o = a[p++];) Ft.test(o.type || "") && n.push(o);
        return f
    }

    function f() {
        return !0
    }

    function d() {
        return !1
    }

    function g() {
        try {
            return X.activeElement
        } catch (t) {}
    }

    function v(t, e, n, r, i, o) {
        var a, s;
        if ("object" == typeof e) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in e) v(t, s, n, r, e[s], o);
            return t
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = d;
        else if (!i) return t;
        return 1 === o && (a = i, i = function(t) {
            return ot().off(t), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = ot.guid++)), t.each(function() {
            ot.event.add(this, e, i, r, n)
        })
    }

    function m(t, e) {
        return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function y(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function x(t) {
        var e = Wt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function b(t, e) {
        var n, r, i, o, a, s, l, u;
        if (1 === e.nodeType) {
            if (Mt.hasData(t) && (o = Mt.access(t), a = Mt.set(e, o), u = o.events)) {
                delete a.handle, a.events = {};
                for (i in u)
                    for (n = 0, r = u[i].length; n < r; n++) ot.event.add(e, i, u[i][n])
            }
            kt.hasData(t) && (s = kt.access(t), l = ot.extend({}, s), kt.set(e, l))
        }
    }

    function _(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Pt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }

    function w(t, e, n, r) {
        e = K.apply([], e);
        var i, o, a, s, l, u, h = 0,
            f = t.length,
            d = f - 1,
            g = e[0],
            v = ot.isFunction(g);
        if (v || f > 1 && "string" == typeof g && !rt.checkClone && Ht.test(g)) return t.each(function(i) {
            var o = t.eq(i);
            v && (e[0] = g.call(this, i, o.html())), w(o, e, n, r)
        });
        if (f && (i = p(e, t[0].ownerDocument, !1, t, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (a = ot.map(c(i, "script"), y), s = a.length; h < f; h++) l = i, h !== d && (l = ot.clone(l, !0, !0), s && ot.merge(a, c(l, "script"))), n.call(t[h], l, h);
            if (s)
                for (u = a[a.length - 1].ownerDocument, ot.map(a, x), h = 0; h < s; h++) l = a[h], Ft.test(l.type || "") && !Mt.access(l, "globalEval") && ot.contains(u, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) : ot.globalEval(l.textContent.replace(Ut, "")))
        }
        return t
    }

    function T(t, e, n) {
        for (var r, i = e ? ot.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ot.cleanData(c(r)), r.parentNode && (n && ot.contains(r.ownerDocument, r) && h(c(r, "script")), r.parentNode.removeChild(r));
        return t
    }

    function C(t, e) {
        var n = ot(e.createElement(t)).appendTo(e.body),
            r = ot.css(n[0], "display");
        return n.detach(), r
    }

    function M(t) {
        var e = X,
            n = Vt[t];
        return n || (n = C(t, e), "none" !== n && n || (Yt = (Yt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Yt[0].contentDocument, e.write(), e.close(), n = C(t, e), Yt.detach()), Vt[t] = n), n
    }

    function k(t, e, n) {
        var r, i, o, a, s = t.style;
        return n = n || Jt(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== a && void 0 !== a || ot.contains(t.ownerDocument, t) || (a = ot.style(t, e)), n && !rt.pixelMarginRight() && Xt.test(a) && Gt.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 !== a ? a + "" : a
    }

    function S(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function A(t) {
        if (t in re) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = ne.length; n--;)
            if (t = ne[n] + e, t in re) return t
    }

    function E(t, e, n) {
        var r = Nt.exec(e);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
    }

    function N(t, e, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += ot.css(t, n + Lt[o], !0, i)), r ? ("content" === n && (a -= ot.css(t, "padding" + Lt[o], !0, i)), "margin" !== n && (a -= ot.css(t, "border" + Lt[o] + "Width", !0, i))) : (a += ot.css(t, "padding" + Lt[o], !0, i), "padding" !== n && (a += ot.css(t, "border" + Lt[o] + "Width", !0, i)));
        return a
    }

    function L(e, n, r) {
        var i = !0,
            o = "width" === n ? e.offsetWidth : e.offsetHeight,
            a = Jt(e),
            s = "border-box" === ot.css(e, "boxSizing", !1, a);
        if (X.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), o <= 0 || null == o) {
            if (o = k(e, n, a), (o < 0 || null == o) && (o = e.style[n]), Xt.test(o)) return o;
            i = s && (rt.boxSizingReliable() || o === e.style[n]), o = parseFloat(o) || 0
        }
        return o + N(e, n, r || (s ? "border" : "content"), i, a) + "px"
    }

    function I(t, e) {
        for (var n, r, i, o = [], a = 0, s = t.length; a < s; a++) r = t[a], r.style && (o[a] = Mt.get(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && It(r) && (o[a] = Mt.access(r, "olddisplay", M(r.nodeName)))) : (i = It(r), "none" === n && i || Mt.set(r, "olddisplay", i ? n : ot.css(r, "display"))));
        for (a = 0; a < s; a++) r = t[a], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
        return t
    }

    function P(t, e, n, r, i) {
        return new P.prototype.init(t, e, n, r, i)
    }

    function D() {
        return t.setTimeout(function() {
            ie = void 0
        }), ie = ot.now()
    }

    function F(t, e) {
        var n, r = 0,
            i = {
                height: t
            };
        for (e = e ? 1 : 0; r < 4; r += 2 - e) n = Lt[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function j(t, e, n) {
        for (var r, i = (z.tweeners[e] || []).concat(z.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, e, t)) return r
    }

    function $(t, e, n) {
        var r, i, o, a, s, l, u, c, h = this,
            p = {},
            f = t.style,
            d = t.nodeType && It(t),
            g = Mt.get(t, "fxshow");
        n.queue || (s = ot._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, h.always(function() {
            h.always(function() {
                s.unqueued--, ot.queue(t, "fx").length || s.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = ot.css(t, "display"), c = "none" === u ? Mt.get(t, "olddisplay") || M(t.nodeName) : u, "inline" === c && "none" === ot.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in e)
            if (i = e[r], ae.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    d = !0
                }
                p[r] = g && g[r] || ot.style(t, r)
            } else u = void 0;
        if (ot.isEmptyObject(p)) "inline" === ("none" === u ? M(t.nodeName) : u) && (f.display = u);
        else {
            g ? "hidden" in g && (d = g.hidden) : g = Mt.access(t, "fxshow", {}), o && (g.hidden = !d), d ? ot(t).show() : h.done(function() {
                ot(t).hide()
            }), h.done(function() {
                var e;
                Mt.remove(t, "fxshow");
                for (e in p) ot.style(t, e, p[e])
            });
            for (r in p) a = j(d ? g[r] : 0, r, h), r in g || (g[r] = a.start, d && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function R(t, e) {
        var n, r, i, o, a;
        for (n in t)
            if (r = ot.camelCase(n), i = e[r], o = t[n], ot.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = ot.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete t[r];
                for (n in o) n in t || (t[n] = o[n], e[n] = i)
            } else e[r] = i
    }

    function z(t, e, n) {
        var r, i, o = 0,
            a = z.prefilters.length,
            s = ot.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var e = ie || D(), n = Math.max(0, u.startTime + u.duration - e), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; a < l; a++) u.tweens[a].run(o);
                return s.notifyWith(t, [u, o, n]), o < 1 && l ? n : (s.resolveWith(t, [u]), !1)
            },
            u = s.promise({
                elem: t,
                props: ot.extend({}, e),
                opts: ot.extend(!0, {
                    specialEasing: {},
                    easing: ot.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ie || D(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var r = ot.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(e) {
                    var n = 0,
                        r = e ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) u.tweens[n].run(1);
                    return e ? (s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u, e])) : s.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (R(c, u.opts.specialEasing); o < a; o++)
            if (r = z.prefilters[o].call(u, t, c, u.opts)) return ot.isFunction(r.stop) && (ot._queueHooks(u.elem, u.opts.queue).stop = ot.proxy(r.stop, r)), r;
        return ot.map(c, j, u), ot.isFunction(u.opts.start) && u.opts.start.call(t, u), ot.fx.timer(ot.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function B(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function q(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, i = 0,
                o = e.toLowerCase().match(_t) || [];
            if (ot.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }

    function O(t, e, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, ot.each(t[s] || [], function(t, s) {
                var u = s(e, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {},
            a = t === ke;
        return i(e.dataTypes[0]) || !o["*"] && i("*")
    }

    function H(t, e) {
        var n, r, i = ot.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
        return r && ot.extend(!0, t, r), t
    }

    function W(t, e, n) {
        for (var r, i, o, a, s = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    l.unshift(i);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (i in n) {
                if (!l[0] || t.converters[i + " " + l[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function U(t, e, n, r) {
        var i, o, a, s, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && t.throws) e = a(e);
                else try {
                    e = a(e)
                } catch (t) {
                    return {
                        state: "parsererror",
                        error: a ? t : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function Y(t, e, n, r) {
        var i;
        if (ot.isArray(e)) ot.each(e, function(e, i) {
            n || Ne.test(t) ? r(t, i) : Y(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
        });
        else if (n || "object" !== ot.type(e)) r(t, e);
        else
            for (i in e) Y(t + "[" + i + "]", e[i], n, r)
    }

    function V(t) {
        return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var G = [],
        X = t.document,
        J = G.slice,
        K = G.concat,
        Z = G.push,
        Q = G.indexOf,
        tt = {},
        et = tt.toString,
        nt = tt.hasOwnProperty,
        rt = {},
        it = "2.2.2",
        ot = function(t, e) {
            return new ot.fn.init(t, e)
        },
        at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        st = /^-ms-/,
        lt = /-([\da-z])/gi,
        ut = function(t, e) {
            return e.toUpperCase()
        };
    ot.fn = ot.prototype = {
        jquery: it,
        constructor: ot,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : J.call(this)
        },
        pushStack: function(t) {
            var e = ot.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return ot.each(this, t)
        },
        map: function(t) {
            return this.pushStack(ot.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Z,
        sort: G.sort,
        splice: G.splice
    }, ot.extend = ot.fn.extend = function() {
        var t, e, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || ot.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (t = arguments[s]))
                for (e in t) n = a[e], r = t[e], a !== r && (u && r && (ot.isPlainObject(r) || (i = ot.isArray(r))) ? (i ? (i = !1, o = n && ot.isArray(n) ? n : []) : o = n && ot.isPlainObject(n) ? n : {}, a[e] = ot.extend(u, o, r)) : void 0 !== r && (a[e] = r));
        return a
    }, ot.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ot.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(t) {
            var e;
            if ("object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
            if (t.constructor && !nt.call(t, "constructor") && !nt.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (e in t);
            return void 0 === e || nt.call(t, e)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            t = ot.trim(t), t && (1 === t.indexOf("use strict") ? (e = X.createElement("script"), e.text = t, X.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(st, "ms-").replace(lt, ut)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var r, i = 0;
            if (n(t))
                for (r = t.length; i < r && e.call(t[i], i, t[i]) !== !1; i++);
            else
                for (i in t)
                    if (e.call(t[i], i, t[i]) === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(at, "")
        },
        makeArray: function(t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? ot.merge(r, "string" == typeof t ? [t] : t) : Z.call(r, t)), r
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : Q.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
            return t.length = i, t
        },
        grep: function(t, e, n) {
            for (var r, i = [], o = 0, a = t.length, s = !n; o < a; o++) r = !e(t[o], o), r !== s && i.push(t[o]);
            return i
        },
        map: function(t, e, r) {
            var i, o, a = 0,
                s = [];
            if (n(t))
                for (i = t.length; a < i; a++) o = e(t[a], a, r), null != o && s.push(o);
            else
                for (a in t) o = e(t[a], a, r), null != o && s.push(o);
            return K.apply([], s)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, r, i;
            if ("string" == typeof e && (n = t[e], e = t, t = n), ot.isFunction(t)) return r = J.call(arguments, 2), i = function() {
                return t.apply(e || this, r.concat(J.call(arguments)))
            }, i.guid = t.guid = t.guid || ot.guid++, i
        },
        now: Date.now,
        support: rt
    }), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = G[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        tt["[object " + e + "]"] = e.toLowerCase()
    });
    var ct = function(t) {
        function e(t, e, n, r) {
            var i, o, a, s, l, u, h, f, d = e && e.ownerDocument,
                g = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!r && ((e ? e.ownerDocument || e : B) !== I && L(e), e = e || I, D)) {
                if (11 !== g && (u = mt.exec(t)))
                    if (i = u[1]) {
                        if (9 === g) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (d && (a = d.getElementById(i)) && R(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && _.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(i)), n
                    }
                if (_.qsa && !U[t + " "] && (!F || !F.test(t))) {
                    if (1 !== g) d = e, f = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((s = e.getAttribute("id")) ? s = s.replace(xt, "\\$&") : e.setAttribute("id", s = z), h = M(t), o = h.length, l = pt.test(s) ? "#" + s : "[id='" + s + "']"; o--;) h[o] = l + " " + p(h[o]);
                        f = h.join(","), d = yt.test(t) && c(e.parentNode) || e
                    }
                    if (f) try {
                        return Z.apply(n, d.querySelectorAll(f)), n
                    } catch (t) {} finally {
                        s === z && e.removeAttribute("id")
                    }
                }
            }
            return S(t.replace(st, "$1"), e, n, r)
        }

        function n() {
            function t(n, r) {
                return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
            var e = [];
            return t
        }

        function r(t) {
            return t[z] = !0, t
        }

        function i(t) {
            var e = I.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = e
        }

        function a(t, e) {
            var n = e && t,
                r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function s(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function u(t) {
            return r(function(e) {
                return e = +e, r(function(n, r) {
                    for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function h() {}

        function p(t) {
            for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
            return r
        }

        function f(t, e, n) {
            var r = e.dir,
                i = n && "parentNode" === r,
                o = O++;
            return e.first ? function(e, n, o) {
                for (; e = e[r];)
                    if (1 === e.nodeType || i) return t(e, n, o)
            } : function(e, n, a) {
                var s, l, u, c = [q, o];
                if (a) {
                    for (; e = e[r];)
                        if ((1 === e.nodeType || i) && t(e, n, a)) return !0
                } else
                    for (; e = e[r];)
                        if (1 === e.nodeType || i) {
                            if (u = e[z] || (e[z] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (s = l[r]) && s[0] === q && s[1] === o) return c[2] = s[2];
                            if (l[r] = c, c[2] = t(e, n, a)) return !0
                        }
            }
        }

        function d(t) {
            return t.length > 1 ? function(e, n, r) {
                for (var i = t.length; i--;)
                    if (!t[i](e, n, r)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, r) {
            for (var i = 0, o = n.length; i < o; i++) e(t, n[i], r);
            return r
        }

        function v(t, e, n, r, i) {
            for (var o, a = [], s = 0, l = t.length, u = null != e; s < l; s++)(o = t[s]) && (n && !n(o, r, i) || (a.push(o), u && e.push(s)));
            return a
        }

        function m(t, e, n, i, o, a) {
            return i && !i[z] && (i = m(i)), o && !o[z] && (o = m(o, a)), r(function(r, a, s, l) {
                var u, c, h, p = [],
                    f = [],
                    d = a.length,
                    m = r || g(e || "*", s.nodeType ? [s] : s, []),
                    y = !t || !r && e ? m : v(m, p, t, s, l),
                    x = n ? o || (r ? t : d || i) ? [] : a : y;
                if (n && n(y, x, s, l), i)
                    for (u = v(x, f), i(u, [], s, l), c = u.length; c--;)(h = u[c]) && (x[f[c]] = !(y[f[c]] = h));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = x.length; c--;)(h = x[c]) && u.push(y[c] = h);
                            o(null, x = [], u, l)
                        }
                        for (c = x.length; c--;)(h = x[c]) && (u = o ? tt(r, h) : p[c]) > -1 && (r[u] = !(a[u] = h))
                    }
                } else x = v(x === a ? x.splice(d, x.length) : x), o ? o(null, a, x, l) : Z.apply(a, x)
            })
        }

        function y(t) {
            for (var e, n, r, i = t.length, o = w.relative[t[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = f(function(t) {
                    return t === e
                }, a, !0), u = f(function(t) {
                    return tt(e, t) > -1
                }, a, !0), c = [function(t, n, r) {
                    var i = !o && (r || n !== A) || ((e = n).nodeType ? l(t, n, r) : u(t, n, r));
                    return e = null, i
                }]; s < i; s++)
                if (n = w.relative[t[s].type]) c = [f(d(c), n)];
                else {
                    if (n = w.filter[t[s].type].apply(null, t[s].matches), n[z]) {
                        for (r = ++s; r < i && !w.relative[t[r].type]; r++);
                        return m(s > 1 && d(c), s > 1 && p(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(st, "$1"), n, s < r && y(t.slice(s, r)), r < i && y(t = t.slice(r)), r < i && p(t))
                    }
                    c.push(n)
                }
            return d(c)
        }

        function x(t, n) {
            var i = n.length > 0,
                o = t.length > 0,
                a = function(r, a, s, l, u) {
                    var c, h, p, f = 0,
                        d = "0",
                        g = r && [],
                        m = [],
                        y = A,
                        x = r || o && w.find.TAG("*", u),
                        b = q += null == y ? 1 : Math.random() || .1,
                        _ = x.length;
                    for (u && (A = a === I || a || u); d !== _ && null != (c = x[d]); d++) {
                        if (o && c) {
                            for (h = 0, a || c.ownerDocument === I || (L(c), s = !D); p = t[h++];)
                                if (p(c, a || I, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (q = b)
                        }
                        i && ((c = !p && c) && f--, r && g.push(c))
                    }
                    if (f += d, i && d !== f) {
                        for (h = 0; p = n[h++];) p(g, m, a, s);
                        if (r) {
                            if (f > 0)
                                for (; d--;) g[d] || m[d] || (m[d] = J.call(l));
                            m = v(m)
                        }
                        Z.apply(l, m), u && !r && m.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return u && (q = b, A = y), g
                };
            return i ? r(a) : a
        }
        var b, _, w, T, C, M, k, S, A, E, N, L, I, P, D, F, j, $, R, z = "sizzle" + 1 * new Date,
            B = t.document,
            q = 0,
            O = 0,
            H = n(),
            W = n(),
            U = n(),
            Y = function(t, e) {
                return t === e && (N = !0), 0
            },
            V = 1 << 31,
            G = {}.hasOwnProperty,
            X = [],
            J = X.pop,
            K = X.push,
            Z = X.push,
            Q = X.slice,
            tt = function(t, e) {
                for (var n = 0, r = t.length; n < r; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
            ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
            at = new RegExp(nt + "+", "g"),
            st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            ht = new RegExp(ot),
            pt = new RegExp("^" + rt + "$"),
            ft = {
                ID: new RegExp("^#(" + rt + ")"),
                CLASS: new RegExp("^\\.(" + rt + ")"),
                TAG: new RegExp("^(" + rt + "|[*])"),
                ATTR: new RegExp("^" + it),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            dt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            xt = /'|\\/g,
            bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            _t = function(t, e, n) {
                var r = "0x" + e - 65536;
                return r !== r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            wt = function() {
                L()
            };
        try {
            Z.apply(X = Q.call(B.childNodes), B.childNodes), X[B.childNodes.length].nodeType
        } catch (t) {
            Z = {
                apply: X.length ? function(t, e) {
                    K.apply(t, Q.call(e))
                } : function(t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++];);
                    t.length = n - 1
                }
            }
        }
        _ = e.support = {}, C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, L = e.setDocument = function(t) {
            var e, n, r = t ? t.ownerDocument || t : B;
            return r !== I && 9 === r.nodeType && r.documentElement ? (I = r, P = I.documentElement, D = !C(I), (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), _.attributes = i(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), _.getElementsByTagName = i(function(t) {
                return t.appendChild(I.createComment("")), !t.getElementsByTagName("*").length
            }), _.getElementsByClassName = vt.test(I.getElementsByClassName), _.getById = i(function(t) {
                return P.appendChild(t).id = z, !I.getElementsByName || !I.getElementsByName(z).length
            }), _.getById ? (w.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && D) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, w.filter.ID = function(t) {
                var e = t.replace(bt, _t);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete w.find.ID, w.filter.ID = function(t) {
                var e = t.replace(bt, _t);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), w.find.TAG = _.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, r = [],
                    i = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, w.find.CLASS = _.getElementsByClassName && function(t, e) {
                if ("undefined" != typeof e.getElementsByClassName && D) return e.getElementsByClassName(t)
            }, j = [], F = [], (_.qsa = vt.test(I.querySelectorAll)) && (i(function(t) {
                P.appendChild(t).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || F.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + z + "-]").length || F.push("~="), t.querySelectorAll(":checked").length || F.push(":checked"), t.querySelectorAll("a#" + z + "+*").length || F.push(".#.+[+~]")
            }), i(function(t) {
                var e = I.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && F.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), F.push(",.*:")
            })), (_.matchesSelector = vt.test($ = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && i(function(t) {
                _.disconnectedMatch = $.call(t, "div"), $.call(t, "[s!='']:x"), j.push("!=", ot)
            }), F = F.length && new RegExp(F.join("|")), j = j.length && new RegExp(j.join("|")), e = vt.test(P.compareDocumentPosition), R = e || vt.test(P.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    r = e && e.parentNode;
                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, Y = e ? function(t, e) {
                if (t === e) return N = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !_.sortDetached && e.compareDocumentPosition(t) === n ? t === I || t.ownerDocument === B && R(B, t) ? -1 : e === I || e.ownerDocument === B && R(B, e) ? 1 : E ? tt(E, t) - tt(E, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return N = !0, 0;
                var n, r = 0,
                    i = t.parentNode,
                    o = e.parentNode,
                    s = [t],
                    l = [e];
                if (!i || !o) return t === I ? -1 : e === I ? 1 : i ? -1 : o ? 1 : E ? tt(E, t) - tt(E, e) : 0;
                if (i === o) return a(t, e);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; s[r] === l[r];) r++;
                return r ? a(s[r], l[r]) : s[r] === B ? -1 : l[r] === B ? 1 : 0
            }, I) : I
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== I && L(t), n = n.replace(ct, "='$1']"), _.matchesSelector && D && !U[n + " "] && (!j || !j.test(n)) && (!F || !F.test(n))) try {
                var r = $.call(t, n);
                if (r || _.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
            } catch (t) {}
            return e(n, I, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== I && L(t), R(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== I && L(t);
            var n = w.attrHandle[e.toLowerCase()],
                r = n && G.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !D) : void 0;
            return void 0 !== r ? r : _.attributes || !D ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                r = 0,
                i = 0;
            if (N = !_.detectDuplicates, E = !_.sortStable && t.slice(0), t.sort(Y), N) {
                for (; e = t[i++];) e === t[i] && (r = n.push(i));
                for (; r--;) t.splice(n[r], 1)
            }
            return E = null, t
        }, T = e.getText = function(t) {
            var e, n = "",
                r = 0,
                i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
                } else if (3 === i || 4 === i) return t.nodeValue
            } else
                for (; e = t[r++];) n += T(e);
            return n
        }, w = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(bt, _t), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, _t),
                        "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = M(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(bt, _t).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = H[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && H(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, r) {
                    return function(i) {
                        var o = e.attr(i, t);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(t, e, n, r, i) {
                    var o = "nth" !== t.slice(0, 3),
                        a = "last" !== t.slice(-4),
                        s = "of-type" === e;
                    return 1 === r && 0 === i ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var u, c, h, p, f, d, g = o !== a ? "nextSibling" : "previousSibling",
                            v = e.parentNode,
                            m = s && e.nodeName.toLowerCase(),
                            y = !l && !s,
                            x = !1;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (p = e; p = p[g];)
                                        if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                    d = g = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [a ? v.firstChild : v.lastChild], a && y) {
                                for (p = v, h = p[z] || (p[z] = {}), c = h[p.uniqueID] || (h[p.uniqueID] = {}), u = c[t] || [], f = u[0] === q && u[1], x = f && u[2], p = f && v.childNodes[f]; p = ++f && p && p[g] || (x = f = 0) || d.pop();)
                                    if (1 === p.nodeType && ++x && p === e) {
                                        c[t] = [q, f, x];
                                        break
                                    }
                            } else if (y && (p = e, h = p[z] || (p[z] = {}), c = h[p.uniqueID] || (h[p.uniqueID] = {}), u = c[t] || [], f = u[0] === q && u[1], x = f), x === !1)
                                for (;
                                    (p = ++f && p && p[g] || (x = f = 0) || d.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && (h = p[z] || (p[z] = {}), c = h[p.uniqueID] || (h[p.uniqueID] = {}), c[t] = [q, x]), p !== e)););
                            return x -= i, x === r || x % r === 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var i, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[z] ? o(n) : o.length > 1 ? (i = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                        for (var r, i = o(t, n), a = i.length; a--;) r = tt(t, i[a]), t[r] = !(e[r] = i[a])
                    }) : function(t) {
                        return o(t, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(t) {
                    var e = [],
                        n = [],
                        i = k(t.replace(st, "$1"));
                    return i[z] ? r(function(t, e, n, r) {
                        for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                    }) : function(t, r, o) {
                        return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                    }
                }),
                has: r(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: r(function(t) {
                    return t = t.replace(bt, _t),
                        function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                }),
                lang: r(function(t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, _t).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === P
                },
                focus: function(t) {
                    return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !w.pseudos.empty(t)
                },
                header: function(t) {
                    return gt.test(t.nodeName)
                },
                input: function(t) {
                    return dt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var r = n < 0 ? n + e : n; --r >= 0;) t.push(r);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                    return t
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[b] = s(b);
        for (b in {
                submit: !0,
                reset: !0
            }) w.pseudos[b] = l(b);
        return h.prototype = w.filters = w.pseudos, w.setFilters = new h, M = e.tokenize = function(t, n) {
            var r, i, o, a, s, l, u, c = W[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = t, l = [], u = w.preFilter; s;) {
                r && !(i = lt.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ut.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(st, " ")
                }), s = s.slice(r.length));
                for (a in w.filter) !(i = ft[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? e.error(t) : W(t, l).slice(0)
        }, k = e.compile = function(t, e) {
            var n, r = [],
                i = [],
                o = U[t + " "];
            if (!o) {
                for (e || (e = M(t)), n = e.length; n--;) o = y(e[n]), o[z] ? r.push(o) : i.push(o);
                o = U(t, x(i, r)), o.selector = t
            }
            return o
        }, S = e.select = function(t, e, n, r) {
            var i, o, a, s, l, u = "function" == typeof t && t,
                h = !r && M(t = u.selector || t);
            if (n = n || [], 1 === h.length) {
                if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && _.getById && 9 === e.nodeType && D && w.relative[o[1].type]) {
                    if (e = (w.find.ID(a.matches[0].replace(bt, _t), e) || [])[0], !e) return n;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (i = ft.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
                    if ((l = w.find[s]) && (r = l(a.matches[0].replace(bt, _t), yt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(i, 1), t = r.length && p(o), !t) return Z.apply(n, r), n;
                        break
                    }
            }
            return (u || k(t, h))(r, e, !D, n, !e || yt.test(t) && c(e.parentNode) || e), n
        }, _.sortStable = z.split("").sort(Y).join("") === z, _.detectDuplicates = !!N, L(), _.sortDetached = i(function(t) {
            return 1 & t.compareDocumentPosition(I.createElement("div"))
        }), i(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), _.attributes && i(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), i(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function(t, e, n) {
            var r;
            if (!n) return t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }), e
    }(t);
    ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
    var ht = function(t, e, n) {
            for (var r = [], i = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (i && ot(t).is(n)) break;
                    r.push(t)
                }
            return r
        },
        pt = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        ft = ot.expr.match.needsContext,
        dt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        gt = /^.[^:#\[\.,]*$/;
    ot.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? ot.find.matchesSelector(r, t) ? [r] : [] : ot.find.matches(t, ot.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, ot.fn.extend({
        find: function(t) {
            var e, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof t) return this.pushStack(ot(t).filter(function() {
                for (e = 0; e < n; e++)
                    if (ot.contains(i[e], this)) return !0
            }));
            for (e = 0; e < n; e++) ot.find(t, i[e], r);
            return r = this.pushStack(n > 1 ? ot.unique(r) : r), r.selector = this.selector ? this.selector + " " + t : t, r
        },
        filter: function(t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function(t) {
            return !!r(this, "string" == typeof t && ft.test(t) ? ot(t) : t || [], !1).length
        }
    });
    var vt, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        yt = ot.fn.init = function(t, e, n) {
            var r, i;
            if (!t) return this;
            if (n = n || vt, "string" == typeof t) {
                if (r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : mt.exec(t), !r || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (r[1]) {
                    if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : X, !0)), dt.test(r[1]) && ot.isPlainObject(e))
                        for (r in e) ot.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                    return this
                }
                return i = X.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = X, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
        };
    yt.prototype = ot.fn, vt = ot(X);
    var xt = /^(?:parents|prev(?:Until|All))/,
        bt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ot.fn.extend({
        has: function(t) {
            var e = ot(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (ot.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, r = 0, i = this.length, o = [], a = ft.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? Q.call(ot(t), this[0]) : Q.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ot.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return ht(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return ht(t, "parentNode", n)
        },
        next: function(t) {
            return i(t, "nextSibling")
        },
        prev: function(t) {
            return i(t, "previousSibling")
        },
        nextAll: function(t) {
            return ht(t, "nextSibling")
        },
        prevAll: function(t) {
            return ht(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return ht(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return ht(t, "previousSibling", n)
        },
        siblings: function(t) {
            return pt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return pt(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || ot.merge([], t.childNodes)
        }
    }, function(t, e) {
        ot.fn[t] = function(n, r) {
            var i = ot.map(this, e, n);
            return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = ot.filter(r, i)), this.length > 1 && (bt[t] || ot.uniqueSort(i), xt.test(t) && i.reverse()), this.pushStack(i)
        }
    });
    var _t = /\S+/g;
    ot.Callbacks = function(t) {
        t = "string" == typeof t ? o(t) : ot.extend({}, t);
        var e, n, r, i, a = [],
            s = [],
            l = -1,
            u = function() {
                for (i = t.once, r = e = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) a[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = a.length, n = !1);
                t.memory || (n = !1), e = !1, i && (a = n ? [] : "")
            },
            c = {
                add: function() {
                    return a && (n && !e && (l = a.length - 1, s.push(n)), function e(n) {
                        ot.each(n, function(n, r) {
                            ot.isFunction(r) ? t.unique && c.has(r) || a.push(r) : r && r.length && "string" !== ot.type(r) && e(r)
                        })
                    }(arguments), n && !e && u()), this
                },
                remove: function() {
                    return ot.each(arguments, function(t, e) {
                        for (var n;
                            (n = ot.inArray(e, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(t) {
                    return t ? ot.inArray(t, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return i = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return i = s = [], n || (a = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(t, n) {
                    return i || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, ot.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ot.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return ot.Deferred(function(n) {
                            ot.each(e, function(e, o) {
                                var a = ot.isFunction(t[e]) && t[e];
                                i[o[1]](function() {
                                    var t = a && a.apply(this, arguments);
                                    t && ot.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? ot.extend(t, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, ot.each(e, function(t, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), t && t.call(i, i), i
        },
        when: function(t) {
            var e, n, r, i = 0,
                o = J.call(arguments),
                a = o.length,
                s = 1 !== a || t && ot.isFunction(t.promise) ? a : 0,
                l = 1 === s ? t : ot.Deferred(),
                u = function(t, n, r) {
                    return function(i) {
                        n[t] = this, r[t] = arguments.length > 1 ? J.call(arguments) : i, r === e ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (e = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && ot.isFunction(o[i].promise) ? o[i].promise().progress(u(i, n, e)).done(u(i, r, o)).fail(l.reject) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    });
    var wt;
    ot.fn.ready = function(t) {
        return ot.ready.promise().done(t), this
    }, ot.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ot.readyWait++ : ot.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (wt.resolveWith(X, [ot]), ot.fn.triggerHandler && (ot(X).triggerHandler("ready"), ot(X).off("ready"))))
        }
    }), ot.ready.promise = function(e) {
        return wt || (wt = ot.Deferred(), "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? t.setTimeout(ot.ready) : (X.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a))), wt.promise(e)
    }, ot.ready.promise();
    var Tt = function(t, e, n, r, i, o, a) {
            var s = 0,
                l = t.length,
                u = null == n;
            if ("object" === ot.type(n)) {
                i = !0;
                for (s in n) Tt(t, e, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, ot.isFunction(r) || (a = !0), u && (a ? (e.call(t, r), e = null) : (u = e, e = function(t, e, n) {
                    return u.call(ot(t), n)
                })), e))
                for (; s < l; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
            return i ? t : u ? e.call(t) : l ? e(t[0], n) : o
        },
        Ct = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    s.uid = 1, s.prototype = {
        register: function(t, e) {
            var n = e || {};
            return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), t[this.expando]
        },
        cache: function(t) {
            if (!Ct(t)) return {};
            var e = t[this.expando];
            return e || (e = {}, Ct(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, n) {
            var r, i = this.cache(t);
            if ("string" == typeof e) i[e] = n;
            else
                for (r in e) i[r] = e[r];
            return i
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function(t, e, n) {
            var r;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r : this.get(t, ot.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, r, i, o = t[this.expando];
            if (void 0 !== o) {
                if (void 0 === e) this.register(t);
                else {
                    ot.isArray(e) ? r = e.concat(e.map(ot.camelCase)) : (i = ot.camelCase(e), e in o ? r = [e, i] : (r = i, r = r in o ? [r] : r.match(_t) || [])), n = r.length;
                    for (; n--;) delete o[r[n]]
                }(void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !ot.isEmptyObject(e)
        }
    };
    var Mt = new s,
        kt = new s,
        St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        At = /[A-Z]/g;
    ot.extend({
        hasData: function(t) {
            return kt.hasData(t) || Mt.hasData(t)
        },
        data: function(t, e, n) {
            return kt.access(t, e, n)
        },
        removeData: function(t, e) {
            kt.remove(t, e)
        },
        _data: function(t, e, n) {
            return Mt.access(t, e, n)
        },
        _removeData: function(t, e) {
            Mt.remove(t, e)
        }
    }), ot.fn.extend({
        data: function(t, e) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (i = kt.get(o), 1 === o.nodeType && !Mt.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ot.camelCase(r.slice(5)), l(o, r, i[r])));
                    Mt.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof t ? this.each(function() {
                kt.set(this, t)
            }) : Tt(this, function(e) {
                var n, r;
                if (o && void 0 === e) {
                    if (n = kt.get(o, t) || kt.get(o, t.replace(At, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (r = ot.camelCase(t), n = kt.get(o, r), void 0 !== n) return n;
                    if (n = l(o, r, void 0), void 0 !== n) return n
                } else r = ot.camelCase(t), this.each(function() {
                    var n = kt.get(this, r);
                    kt.set(this, r, e), t.indexOf("-") > -1 && void 0 !== n && kt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                kt.remove(this, t)
            })
        }
    }), ot.extend({
        queue: function(t, e, n) {
            var r;
            if (t) return e = (e || "fx") + "queue", r = Mt.get(t, e), n && (!r || ot.isArray(n) ? r = Mt.access(t, e, ot.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = ot.queue(t, e),
                r = n.length,
                i = n.shift(),
                o = ot._queueHooks(t, e),
                a = function() {
                    ot.dequeue(t, e)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return Mt.get(t, n) || Mt.access(t, n, {
                empty: ot.Callbacks("once memory").add(function() {
                    Mt.remove(t, [e + "queue", n])
                })
            })
        }
    }), ot.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = ot.queue(this, t, e);
                ot._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ot.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, r = 1,
                i = ot.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = Mt.get(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(e)
        }
    });
    var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Nt = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$", "i"),
        Lt = ["Top", "Right", "Bottom", "Left"],
        It = function(t, e) {
            return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
        },
        Pt = /^(?:checkbox|radio)$/i,
        Dt = /<([\w:-]+)/,
        Ft = /^$|\/(?:java|ecma)script/i,
        jt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    jt.optgroup = jt.option, jt.tbody = jt.tfoot = jt.colgroup = jt.caption = jt.thead, jt.th = jt.td;
    var $t = /<|&#?\w+;/;
    ! function() {
        var t = X.createDocumentFragment(),
            e = t.appendChild(X.createElement("div")),
            n = X.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), rt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", rt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Rt = /^key/,
        zt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Bt = /^([^.]*)(?:\.(.+)|)/;
    ot.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, l, u, c, h, p, f, d, g, v = Mt.get(t);
            if (v)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = ot.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
                        return "undefined" != typeof ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(_t) || [""], u = e.length; u--;) s = Bt.exec(e[u]) || [], f = g = s[1], d = (s[2] || "").split(".").sort(), f && (h = ot.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, h = ot.event.special[f] || {}, c = ot.extend({
                    type: f,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ot.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, o), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, h.setup && h.setup.call(t, r, d, a) !== !1 || t.addEventListener && t.addEventListener(f, a)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ot.event.global[f] = !0)
        },
        remove: function(t, e, n, r, i) {
            var o, a, s, l, u, c, h, p, f, d, g, v = Mt.hasData(t) && Mt.get(t);
            if (v && (l = v.events)) {
                for (e = (e || "").match(_t) || [""], u = e.length; u--;)
                    if (s = Bt.exec(e[u]) || [], f = g = s[1], d = (s[2] || "").split(".").sort(), f) {
                        for (h = ot.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, p = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(t, c));
                        a && !p.length && (h.teardown && h.teardown.call(t, d, v.handle) !== !1 || ot.removeEvent(t, f, v.handle), delete l[f])
                    } else
                        for (f in l) ot.event.remove(t, f + e[u], n, r, !0);
                ot.isEmptyObject(l) && Mt.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            t = ot.event.fix(t);
            var e, n, r, i, o, a = [],
                s = J.call(arguments),
                l = (Mt.get(this, "events") || {})[t.type] || [],
                u = ot.event.special[t.type] || {};
            if (s[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (a = ot.event.handlers.call(this, t, l), e = 0;
                    (i = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, r = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, r, i, o, a = [],
                s = e.delegateCount,
                l = t.target;
            if (s && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (r = [], n = 0; n < s; n++) o = e[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? ot(i, this).index(l) > -1 : ot.find(i, this, null, [l]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return s < e.length && a.push({
                elem: this,
                handlers: e.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, r, i, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || X, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[ot.expando]) return t;
            var e, n, r, i = t.type,
                o = t,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = zt.test(i) ? this.mouseHooks : Rt.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new ot.Event(o), e = r.length; e--;) n = r[e], t[n] = o[n];
            return t.target || (t.target = X), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== g() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === g() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && ot.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(t) {
                    return ot.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, ot.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, ot.Event = function(t, e) {
        return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f : d) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
    }, ot.Event.prototype = {
        constructor: ot.Event,
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = f, t && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = f, t && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = f, t && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        ot.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, r = this,
                    i = t.relatedTarget,
                    o = t.handleObj;
                return i && (i === r || ot.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ot.fn.extend({
        on: function(t, e, n, r) {
            return v(this, t, e, n, r)
        },
        one: function(t, e, n, r) {
            return v(this, t, e, n, r, 1)
        },
        off: function(t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, ot(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (i in t) this.off(i, e, t[i]);
                return this
            }
            return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = d), this.each(function() {
                ot.event.remove(this, t, n, e)
            })
        }
    });
    var qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Ot = /<script|<style|<link/i,
        Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Wt = /^true\/(.*)/,
        Ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ot.extend({
        htmlPrefilter: function(t) {
            return t.replace(qt, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var r, i, o, a, s = t.cloneNode(!0),
                l = ot.contains(t.ownerDocument, t);
            if (!(rt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
                for (a = c(s), o = c(t), r = 0, i = o.length; r < i; r++) _(o[r], a[r]);
            if (e)
                if (n)
                    for (o = o || c(t), a = a || c(s), r = 0, i = o.length; r < i; r++) b(o[r], a[r]);
                else b(t, s);
            return a = c(s, "script"), a.length > 0 && h(a, !l && c(t, "script")), s
        },
        cleanData: function(t) {
            for (var e, n, r, i = ot.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (Ct(n)) {
                    if (e = n[Mt.expando]) {
                        if (e.events)
                            for (r in e.events) i[r] ? ot.event.remove(n, r) : ot.removeEvent(n, r, e.handle);
                        n[Mt.expando] = void 0
                    }
                    n[kt.expando] && (n[kt.expando] = void 0)
                }
        }
    }), ot.fn.extend({
        domManip: w,
        detach: function(t) {
            return T(this, t, !0)
        },
        remove: function(t) {
            return T(this, t)
        },
        text: function(t) {
            return Tt(this, function(t) {
                return void 0 === t ? ot.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return w(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = m(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return w(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = m(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return w(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return w(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ot.cleanData(c(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return ot.clone(this, t, e)
            })
        },
        html: function(t) {
            return Tt(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Ot.test(t) && !jt[(Dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ot.htmlPrefilter(t);
                    try {
                        for (; n < r; n++) e = this[n] || {}, 1 === e.nodeType && (ot.cleanData(c(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return w(this, arguments, function(e) {
                var n = this.parentNode;
                ot.inArray(this, t) < 0 && (ot.cleanData(c(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ot.fn[t] = function(t) {
            for (var n, r = [], i = ot(t), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), ot(i[a])[e](n), Z.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Yt, Vt = {
            HTML: "block",
            BODY: "block"
        },
        Gt = /^margin/,
        Xt = new RegExp("^(" + Et + ")(?!px)[a-z%]+$", "i"),
        Jt = function(e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        },
        Kt = function(t, e, n, r) {
            var i, o, a = {};
            for (o in e) a[o] = t.style[o], t.style[o] = e[o];
            i = n.apply(t, r || []);
            for (o in e) t.style[o] = a[o];
            return i
        },
        Zt = X.documentElement;
    ! function() {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Zt.appendChild(a);
            var e = t.getComputedStyle(s);
            n = "1%" !== e.top, o = "2px" === e.marginLeft, r = "4px" === e.width, s.style.marginRight = "50%", i = "4px" === e.marginRight, Zt.removeChild(a)
        }
        var n, r, i, o, a = X.createElement("div"),
            s = X.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", rt.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), ot.extend(rt, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return null == r && e(), r
            },
            pixelMarginRight: function() {
                return null == r && e(), i
            },
            reliableMarginLeft: function() {
                return null == r && e(), o
            },
            reliableMarginRight: function() {
                var e, n = s.appendChild(X.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Zt.appendChild(a), e = !parseFloat(t.getComputedStyle(n).marginRight), Zt.removeChild(a), s.removeChild(n), e
            }
        }))
    }();
    var Qt = /^(none|table(?!-c[ea]).+)/,
        te = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ee = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ne = ["Webkit", "O", "Moz", "ms"],
        re = X.createElement("div").style;
    ot.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = k(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, a, s = ot.camelCase(e),
                    l = t.style;
                return e = ot.cssProps[s] || (ot.cssProps[s] = A(s) || s), a = ot.cssHooks[e] || ot.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : l[e] : (o = typeof n, "string" === o && (i = Nt.exec(n)) && i[1] && (n = u(t, e, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (ot.cssNumber[s] ? "" : "px")), rt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (l[e] = n)), void 0)
            }
        },
        css: function(t, e, n, r) {
            var i, o, a, s = ot.camelCase(e);
            return e = ot.cssProps[s] || (ot.cssProps[s] = A(s) || s), a = ot.cssHooks[e] || ot.cssHooks[s], a && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = k(t, e, r)), "normal" === i && e in ee && (i = ee[e]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }), ot.each(["height", "width"], function(t, e) {
        ot.cssHooks[e] = {
            get: function(t, n, r) {
                if (n) return Qt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? Kt(t, te, function() {
                    return L(t, e, r)
                }) : L(t, e, r)
            },
            set: function(t, n, r) {
                var i, o = r && Jt(t),
                    a = r && N(t, e, r, "border-box" === ot.css(t, "boxSizing", !1, o), o);
                return a && (i = Nt.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n, n = ot.css(t, e)), E(t, n, a)
            }
        }
    }), ot.cssHooks.marginLeft = S(rt.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(k(t, "marginLeft")) || t.getBoundingClientRect().left - Kt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px"
    }), ot.cssHooks.marginRight = S(rt.reliableMarginRight, function(t, e) {
        if (e) return Kt(t, {
            display: "inline-block"
        }, k, [t, "marginRight"])
    }), ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ot.cssHooks[t + e] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[t + Lt[r] + e] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Gt.test(t) || (ot.cssHooks[t + e].set = E)
    }), ot.fn.extend({
        css: function(t, e) {
            return Tt(this, function(t, e, n) {
                var r, i, o = {},
                    a = 0;
                if (ot.isArray(e)) {
                    for (r = Jt(t), i = e.length; a < i; a++) o[e[a]] = ot.css(t, e[a], !1, r);
                    return o
                }
                return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return I(this, !0)
        },
        hide: function() {
            return I(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                It(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }), ot.Tween = P, P.prototype = {
        constructor: P,
        init: function(t, e, n, r, i, o) {
            this.elem = t, this.prop = n, this.easing = i || ot.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ot.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = P.propHooks[this.prop];
            return t && t.get ? t.get(this) : P.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ot.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ot.fx = P.prototype.init, ot.fx.step = {};
    var ie, oe, ae = /^(?:toggle|show|hide)$/,
        se = /queueHooks$/;
    ot.Animation = ot.extend(z, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return u(n.elem, t, Nt.exec(e), n), n
                }]
            },
            tweener: function(t, e) {
                ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(_t);
                for (var n, r = 0, i = t.length; r < i; r++) n = t[r], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(e)
            },
            prefilters: [$],
            prefilter: function(t, e) {
                e ? z.prefilters.unshift(t) : z.prefilters.push(t)
            }
        }), ot.speed = function(t, e, n) {
            var r = t && "object" == typeof t ? ot.extend({}, t) : {
                complete: n || !n && e || ot.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ot.isFunction(e) && e
            };
            return r.duration = ot.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ot.fx.speeds ? ot.fx.speeds[r.duration] : ot.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                ot.isFunction(r.old) && r.old.call(this), r.queue && ot.dequeue(this, r.queue)
            }, r
        }, ot.fn.extend({
            fadeTo: function(t, e, n, r) {
                return this.filter(It).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, r)
            },
            animate: function(t, e, n, r) {
                var i = ot.isEmptyObject(t),
                    o = ot.speed(e, n, r),
                    a = function() {
                        var e = z(this, ot.extend({}, t), o);
                        (i || Mt.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(t, e, n) {
                var r = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        i = null != t && t + "queueHooks",
                        o = ot.timers,
                        a = Mt.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && se.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                    !e && n || ot.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = Mt.get(this),
                        r = n[t + "queue"],
                        i = n[t + "queueHooks"],
                        o = ot.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, ot.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < a; e++) r[e] && r[e].finish && r[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ot.each(["toggle", "show", "hide"], function(t, e) {
            var n = ot.fn[e];
            ot.fn[e] = function(t, r, i) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(F(e, !0), t, r, i)
            }
        }), ot.each({
            slideDown: F("show"),
            slideUp: F("hide"),
            slideToggle: F("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            ot.fn[t] = function(t, n, r) {
                return this.animate(e, t, n, r)
            }
        }), ot.timers = [], ot.fx.tick = function() {
            var t, e = 0,
                n = ot.timers;
            for (ie = ot.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || ot.fx.stop(), ie = void 0
        }, ot.fx.timer = function(t) {
            ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
        }, ot.fx.interval = 13, ot.fx.start = function() {
            oe || (oe = t.setInterval(ot.fx.tick, ot.fx.interval))
        }, ot.fx.stop = function() {
            t.clearInterval(oe), oe = null
        }, ot.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ot.fn.delay = function(e, n) {
            return e = ot.fx ? ot.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, r) {
                var i = t.setTimeout(n, e);
                r.stop = function() {
                    t.clearTimeout(i)
                }
            })
        },
        function() {
            var t = X.createElement("input"),
                e = X.createElement("select"),
                n = e.appendChild(X.createElement("option"));
            t.type = "checkbox", rt.checkOn = "" !== t.value, rt.optSelected = n.selected, e.disabled = !0, rt.optDisabled = !n.disabled, t = X.createElement("input"), t.value = "t", t.type = "radio", rt.radioValue = "t" === t.value
        }();
    var le, ue = ot.expr.attrHandle;
    ot.fn.extend({
        attr: function(t, e) {
            return Tt(this, ot.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ot.removeAttr(this, t)
            })
        }
    }), ot.extend({
        attr: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? ot.prop(t, e, n) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), i = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? le : void 0)), void 0 !== n ? null === n ? void ot.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = ot.find.attr(t, e), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!rt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, r, i = 0,
                o = e && e.match(_t);
            if (o && 1 === t.nodeType)
                for (; n = o[i++];) r = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n)
        }
    }), le = {
        set: function(t, e, n) {
            return e === !1 ? ot.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = ue[e] || ot.find.attr;
        ue[e] = function(t, e, r) {
            var i, o;
            return r || (o = ue[e], ue[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, ue[e] = o), i
        }
    });
    var ce = /^(?:input|select|textarea|button)$/i,
        he = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function(t, e) {
            return Tt(this, ot.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[ot.propFix[t] || t]
            })
        }
    }), ot.extend({
        prop: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e, i = ot.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ot.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ce.test(t.nodeName) || he.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), rt.optSelected || (ot.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ot.propFix[this.toLowerCase()] = this
    });
    var pe = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, l = 0;
            if (ot.isFunction(t)) return this.each(function(e) {
                ot(this).addClass(t.call(this, e, B(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(_t) || []; n = this[l++];)
                    if (i = B(n), r = 1 === n.nodeType && (" " + i + " ").replace(pe, " ")) {
                        for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = ot.trim(r), i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, l = 0;
            if (ot.isFunction(t)) return this.each(function(e) {
                ot(this).removeClass(t.call(this, e, B(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(_t) || []; n = this[l++];)
                    if (i = B(n), r = 1 === n.nodeType && (" " + i + " ").replace(pe, " ")) {
                        for (a = 0; o = e[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        s = ot.trim(r), i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function(n) {
                ot(this).toggleClass(t.call(this, n, B(this), e), e)
            }) : this.each(function() {
                var e, r, i, o;
                if ("string" === n)
                    for (r = 0, i = ot(this), o = t.match(_t) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else void 0 !== t && "boolean" !== n || (e = B(this), e && Mt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Mt.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, r = 0;
            for (e = " " + t + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + B(n) + " ").replace(pe, " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var fe = /\r/g,
        de = /[\x20\t\r\n\f]+/g;
    ot.fn.extend({
        val: function(t) {
            var e, n, r, i = this[0]; {
                if (arguments.length) return r = ot.isFunction(t), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? t.call(this, n, ot(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : ot.isArray(i) && (i = ot.map(i, function(t) {
                        return null == t ? "" : t + ""
                    })), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                });
                if (i) return e = ot.valHooks[i.type] || ot.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(fe, "") : null == n ? "" : n)
            }
        }
    }), ot.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ot.find.attr(t, "value");
                    return null != e ? e : ot.trim(ot.text(t)).replace(de, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, l = i < 0 ? s : o ? i : 0; l < s; l++)
                        if (n = r[l], (n.selected || l === i) && (rt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ot.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ot(n).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, r, i = t.options, o = ot.makeArray(e), a = i.length; a--;) r = i[a], (r.selected = ot.inArray(ot.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), ot.each(["radio", "checkbox"], function() {
        ot.valHooks[this] = {
            set: function(t, e) {
                if (ot.isArray(e)) return t.checked = ot.inArray(ot(t).val(), e) > -1
            }
        }, rt.checkOn || (ot.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var ge = /^(?:focusinfocus|focusoutblur)$/;
    ot.extend(ot.event, {
        trigger: function(e, n, r, i) {
            var o, a, s, l, u, c, h, p = [r || X],
                f = nt.call(e, "type") ? e.type : e,
                d = nt.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = s = r = r || X, 3 !== r.nodeType && 8 !== r.nodeType && !ge.test(f + ot.event.triggered) && (f.indexOf(".") > -1 && (d = f.split("."), f = d.shift(), d.sort()), u = f.indexOf(":") < 0 && "on" + f, e = e[ot.expando] ? e : new ot.Event(f, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : ot.makeArray(n, [e]), h = ot.event.special[f] || {}, i || !h.trigger || h.trigger.apply(r, n) !== !1)) {
                if (!i && !h.noBubble && !ot.isWindow(r)) {
                    for (l = h.delegateType || f, ge.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (r.ownerDocument || X) && p.push(s.defaultView || s.parentWindow || t)
                }
                for (o = 0;
                    (a = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : h.bindType || f, c = (Mt.get(a, "events") || {})[e.type] && Mt.get(a, "handle"), c && c.apply(a, n), c = u && a[u], c && c.apply && Ct(a) && (e.result = c.apply(a, n), e.result === !1 && e.preventDefault());
                return e.type = f, i || e.isDefaultPrevented() || h._default && h._default.apply(p.pop(), n) !== !1 || !Ct(r) || u && ot.isFunction(r[f]) && !ot.isWindow(r) && (s = r[u], s && (r[u] = null), ot.event.triggered = f, r[f](), ot.event.triggered = void 0, s && (r[u] = s)), e.result
            }
        },
        simulate: function(t, e, n) {
            var r = ot.extend(new ot.Event, n, {
                type: t,
                isSimulated: !0
            });
            ot.event.trigger(r, null, e), r.isDefaultPrevented() && n.preventDefault()
        }
    }), ot.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                ot.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return ot.event.trigger(t, e, n, !0)
        }
    }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ot.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ot.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), rt.focusin = "onfocusin" in t, rt.focusin || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            ot.event.simulate(e, t.target, ot.event.fix(t))
        };
        ot.event.special[e] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = Mt.access(r, e);
                i || r.addEventListener(t, n, !0), Mt.access(r, e, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = Mt.access(r, e) - 1;
                i ? Mt.access(r, e, i) : (r.removeEventListener(t, n, !0), Mt.remove(r, e))
            }
        }
    });
    var ve = t.location,
        me = ot.now(),
        ye = /\?/;
    ot.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, ot.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + e), n
    };
    var xe = /#.*$/,
        be = /([?&])_=[^&]*/,
        _e = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        we = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Te = /^(?:GET|HEAD)$/,
        Ce = /^\/\//,
        Me = {},
        ke = {},
        Se = "*/".concat("*"),
        Ae = X.createElement("a");
    Ae.href = ve.href, ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ve.href,
            type: "GET",
            isLocal: we.test(ve.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Se,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? H(H(t, ot.ajaxSettings), e) : H(ot.ajaxSettings, t)
        },
        ajaxPrefilter: q(Me),
        ajaxTransport: q(ke),
        ajax: function(e, n) {
            function r(e, n, r, s) {
                var u, h, y, x, _, T = n;
                2 !== b && (b = 2, l && t.clearTimeout(l), i = void 0, a = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, r && (x = W(p, w, r)), x = U(p, x, w, u), u ? (p.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (ot.lastModified[o] = _), _ = w.getResponseHeader("etag"), _ && (ot.etag[o] = _)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, h = x.data, y = x.error, u = !y)) : (y = T, !e && T || (T = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (n || T) + "", u ? g.resolveWith(f, [h, T, w]) : g.rejectWith(f, [w, T, y]), w.statusCode(m), m = void 0, c && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, p, u ? h : y]), v.fireWith(f, [w, T]), c && (d.trigger("ajaxComplete", [w, p]), --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var i, o, a, s, l, u, c, h, p = ot.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? ot(f) : ot.event,
                g = ot.Deferred(),
                v = ot.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                x = {},
                b = 0,
                _ = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!s)
                                for (s = {}; e = _e.exec(a);) s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return b || (t = x[n] = x[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (b < 2)
                                for (e in t) m[e] = [m[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || _;
                        return i && i.abort(e), r(0, e), this
                    }
                };
            if (g.promise(w).complete = v.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || ve.href) + "").replace(xe, "").replace(Ce, ve.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ot.trim(p.dataType || "*").toLowerCase().match(_t) || [""], null == p.crossDomain) {
                u = X.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Ae.protocol + "//" + Ae.host != u.protocol + "//" + u.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = ot.param(p.data, p.traditional)), O(Me, p, n, w), 2 === b) return w;
            c = ot.event && p.global, c && 0 === ot.active++ && ot.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Te.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (ye.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = be.test(o) ? o.replace(be, "$1_=" + me++) : o + (ye.test(o) ? "&" : "?") + "_=" + me++)), p.ifModified && (ot.lastModified[o] && w.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && w.setRequestHeader("If-None-Match", ot.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Se + "; q=0.01" : "") : p.accepts["*"]);
            for (h in p.headers) w.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (p.beforeSend.call(f, w, p) === !1 || 2 === b)) return w.abort();
            _ = "abort";
            for (h in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[h](p[h]);
            if (i = O(ke, p, n, w)) {
                if (w.readyState = 1, c && d.trigger("ajaxSend", [w, p]), 2 === b) return w;
                p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                    w.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, i.send(y, r)
                } catch (t) {
                    if (!(b < 2)) throw t;
                    r(-1, t)
                }
            } else r(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, n) {
            return ot.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return ot.get(t, void 0, e, "script")
        }
    }), ot.each(["get", "post"], function(t, e) {
        ot[e] = function(t, n, r, i) {
            return ot.isFunction(n) && (i = i || r, r = n, n = void 0), ot.ajax(ot.extend({
                url: t,
                type: e,
                dataType: i,
                data: n,
                success: r
            }, ot.isPlainObject(t) && t))
        }
    }), ot._evalUrl = function(t) {
        return ot.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, ot.fn.extend({
        wrapAll: function(t) {
            var e;
            return ot.isFunction(t) ? this.each(function(e) {
                ot(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return ot.isFunction(t) ? this.each(function(e) {
                ot(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ot(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ot.isFunction(t);
            return this.each(function(n) {
                ot(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ot.expr.filters.hidden = function(t) {
        return !ot.expr.filters.visible(t)
    }, ot.expr.filters.visible = function(t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
    };
    var Ee = /%20/g,
        Ne = /\[\]$/,
        Le = /\r?\n/g,
        Ie = /^(?:submit|button|image|reset|file)$/i,
        Pe = /^(?:input|select|textarea|keygen)/i;
    ot.param = function(t, e) {
        var n, r = [],
            i = function(t, e) {
                e = ot.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function() {
            i(this.name, this.value)
        });
        else
            for (n in t) Y(n, t[n], e, i);
        return r.join("&").replace(Ee, "+")
    }, ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ot.prop(this, "elements");
                return t ? ot.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ot(this).is(":disabled") && Pe.test(this.nodeName) && !Ie.test(t) && (this.checked || !Pt.test(t))
            }).map(function(t, e) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Le, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Le, "\r\n")
                }
            }).get()
        }
    }), ot.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var De = {
            0: 200,
            1223: 204
        },
        Fe = ot.ajaxSettings.xhr();
    rt.cors = !!Fe && "withCredentials" in Fe, rt.ajax = Fe = !!Fe, ot.ajaxTransport(function(e) {
        var n, r;
        if (rt.cors || Fe && !e.crossDomain) return {
            send: function(i, o) {
                var a, s = e.xhr();
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (a in e.xhrFields) s[a] = e.xhrFields[a];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function(t) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(De[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && t.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (n) throw t
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return ot.globalEval(t), t
            }
        }
    }), ot.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), ot.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(r, i) {
                    e = ot("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                    }), X.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var je = [],
        $e = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = je.pop() || ot.expando + "_" + me++;
            return this[t] = !0, t
        }
    }), ot.ajaxPrefilter("json jsonp", function(e, n, r) {
        var i, o, a, s = e.jsonp !== !1 && ($e.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $e.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace($e, "$1" + i) : e.jsonp !== !1 && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return a || ot.error(i + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? ot(t).removeProp(i) : t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, je.push(i)), a && ot.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), ot.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || X;
        var r = dt.exec(t),
            i = !n && [];
        return r ? [e.createElement(r[1])] : (r = p([t], e, i), i && i.length && ot(i).remove(), ot.merge([], r.childNodes))
    };
    var Re = ot.fn.load;
    ot.fn.load = function(t, e, n) {
        if ("string" != typeof t && Re) return Re.apply(this, arguments);
        var r, i, o, a = this,
            s = t.indexOf(" ");
        return s > -1 && (r = ot.trim(t.slice(s)), t = t.slice(0, s)), ot.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && ot.ajax({
            url: t,
            type: i || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, a.html(r ? ot("<div>").append(ot.parseHTML(t)).find(r) : t)
        }).always(n && function(t, e) {
            a.each(function() {
                n.apply(a, o || [t.responseText, e, t])
            })
        }), this
    }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ot.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), ot.expr.filters.animated = function(t) {
        return ot.grep(ot.timers, function(e) {
            return t === e.elem
        }).length
    }, ot.offset = {
        setOffset: function(t, e, n) {
            var r, i, o, a, s, l, u, c = ot.css(t, "position"),
                h = ot(t),
                p = {};
            "static" === c && (t.style.position = "relative"), s = h.offset(), o = ot.css(t, "top"), l = ot.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (r = h.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, n, ot.extend({}, s))), null != e.top && (p.top = e.top - s.top + a), null != e.left && (p.left = e.left - s.left + i), "using" in e ? e.using.call(t, p) : h.css(p)
        }
    }, ot.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                ot.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            if (o) return e = o.documentElement, ot.contains(e, r) ? (i = r.getBoundingClientRect(), n = V(o), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ot.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (r = t.offset()), r.top += ot.css(t[0], "borderTopWidth", !0), r.left += ot.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - r.top - ot.css(n, "marginTop", !0),
                    left: e.left - r.left - ot.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === ot.css(t, "position");) t = t.offsetParent;
                return t || Zt
            })
        }
    }), ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        ot.fn[t] = function(r) {
            return Tt(this, function(t, r, i) {
                var o = V(t);
                return void 0 === i ? o ? o[e] : t[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : t[r] = i)
            }, t, r, arguments.length)
        }
    }), ot.each(["top", "left"], function(t, e) {
        ot.cssHooks[e] = S(rt.pixelPosition, function(t, n) {
            if (n) return n = k(t, e), Xt.test(n) ? ot(t).position()[e] + "px" : n
        })
    }), ot.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ot.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, r) {
            ot.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return Tt(this, function(e, n, r) {
                    var i;
                    return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? ot.css(e, n, a) : ot.style(e, n, r, a)
                }, e, o ? r : void 0, o, null)
            }
        })
    }), ot.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        size: function() {
            return this.length
        }
    }), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ot
    });
    var ze = t.jQuery,
        Be = t.$;
    return ot.noConflict = function(e) {
        return t.$ === ot && (t.$ = Be), e && t.jQuery === ot && (t.jQuery = ze), ot
    }, e || (t.jQuery = t.$ = ot), ot
}), $(window).load(function() {
        responsive(), obtener_modal(), poner_modal()
    }), $(window).resize(function() {
        responsive()
    }), $(".modal-fullscreen").on("show.bs.modal", function() {
        setTimeout(function() {
            $(".modal-backdrop").addClass("modal-backdrop-fullscreen")
        }, 0)
    }), $(".modal-fullscreen").on("hidden.bs.modal", function() {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen")
    }), $(function() {
        Morris.Line({
            element: "morris-area-chart",
            behaveLikeLine: !0,
            data: [{
                period: "2009",
                t: 9,
                f: 22
            }, {
                period: "2010",
                t: 6,
                f: 8
            }, {
                period: "2011",
                t: 8,
                f: 7
            }, {
                period: "2012",
                t: 13,
                f: 7
            }, {
                period: "2013",
                t: 16,
                f: 11
            }, {
                period: "2014",
                t: 16,
                f: 8
            }, {
                period: "2015",
                t: 17,
                f: 8
            }, {
                period: "2016",
                t: 20,
                f: 9
            }],
            xkey: "period",
            ykeys: ["t", "f"],
            labels: ["Tentativa", "Feminicidio"],
            pointSize: 6,
            hideHover: "auto",
            resize: !0,
            lineColors: ["#F47799", "#ED1C55"],
            gridTextSize: "14"
        })
    }),
    function() {
        var t, e, n, r, i = [].slice,
            o = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            a = {}.hasOwnProperty,
            s = function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var r in e) a.call(e, r) && (t[r] = e[r]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
            },
            l = [].indexOf || function(t) {
                for (var e = 0, n = this.length; e < n; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = window.Morris = {}, t = jQuery, e.EventEmitter = function() {
            function t() {}
            return t.prototype.on = function(t, e) {
                return null == this.handlers && (this.handlers = {}), null == this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this
            }, t.prototype.fire = function() {
                var t, e, n, r, o, a, s;
                if (n = arguments[0], t = 2 <= arguments.length ? i.call(arguments, 1) : [], null != this.handlers && null != this.handlers[n]) {
                    for (a = this.handlers[n], s = [], r = 0, o = a.length; r < o; r++) e = a[r], s.push(e.apply(null, t));
                    return s
                }
            }, t
        }(), e.commas = function(t) {
            var e, n, r, i;
            return null != t ? (r = t < 0 ? "-" : "", e = Math.abs(t), n = Math.floor(e).toFixed(0), r += n.replace(/(?=(?:\d{3})+$)(?!^)/g, ","), i = e.toString(), i.length > n.length && (r += i.slice(n.length)), r) : "-"
        }, e.pad2 = function(t) {
            return (t < 10 ? "0" : "") + t
        }, e.Grid = function(n) {
            function r(e) {
                this.resizeHandler = o(this.resizeHandler, this);
                var n = this;
                if ("string" == typeof e.element ? this.el = t(document.getElementById(e.element)) : this.el = t(e.element), null == this.el || 0 === this.el.length) throw new Error("Graph container element not found");
                "static" === this.el.css("position") && this.el.css("position", "relative"), this.options = t.extend({}, this.gridDefaults, this.defaults || {}, e), "string" == typeof this.options.units && (this.options.postUnits = e.units), this.raphael = new Raphael(this.el[0]), this.elementWidth = null, this.elementHeight = null, this.dirty = !1, this.selectFrom = null, this.init && this.init(), this.setData(this.options.data), this.el.bind("mousemove", function(t) {
                    var e, r, i, o, a;
                    return r = n.el.offset(), a = t.pageX - r.left, n.selectFrom ? (e = n.data[n.hitTest(Math.min(a, n.selectFrom))]._x, i = n.data[n.hitTest(Math.max(a, n.selectFrom))]._x, o = i - e, n.selectionRect.attr({
                        x: e,
                        width: o
                    })) : n.fire("hovermove", a, t.pageY - r.top)
                }), this.el.bind("mouseleave", function(t) {
                    return n.selectFrom && (n.selectionRect.hide(), n.selectFrom = null), n.fire("hoverout")
                }), this.el.bind("touchstart touchmove touchend", function(t) {
                    var e, r;
                    return r = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], e = n.el.offset(), n.fire("hovermove", r.pageX - e.left, r.pageY - e.top)
                }), this.el.bind("click", function(t) {
                    var e;
                    return e = n.el.offset(), n.fire("gridclick", t.pageX - e.left, t.pageY - e.top)
                }), this.options.rangeSelect && (this.selectionRect = this.raphael.rect(0, 0, 0, this.el.innerHeight()).attr({
                    fill: this.options.rangeSelectColor,
                    stroke: !1
                }).toBack().hide(), this.el.bind("mousedown", function(t) {
                    var e;
                    return e = n.el.offset(), n.startRange(t.pageX - e.left)
                }), this.el.bind("mouseup", function(t) {
                    var e;
                    return e = n.el.offset(), n.endRange(t.pageX - e.left), n.fire("hovermove", t.pageX - e.left, t.pageY - e.top)
                })), this.options.resize && t(window).bind("resize", function(t) {
                    return null != n.timeoutId && window.clearTimeout(n.timeoutId), n.timeoutId = window.setTimeout(n.resizeHandler, 100)
                }), this.el.css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"), this.postInit && this.postInit()
            }
            return s(r, n), r.prototype.gridDefaults = {
                dateFormat: null,
                axes: !0,
                grid: !0,
                gridLineColor: "#aaa",
                gridStrokeWidth: .5,
                gridTextColor: "#888",
                gridTextSize: 12,
                gridTextFamily: "sans-serif",
                gridTextWeight: "normal",
                hideHover: !1,
                yLabelFormat: null,
                xLabelAngle: 0,
                numLines: 5,
                padding: 25,
                parseTime: !0,
                postUnits: "",
                preUnits: "",
                ymax: "auto",
                ymin: "auto 0",
                goals: [],
                goalStrokeWidth: 1,
                goalLineColors: ["#666633", "#999966", "#cc6666", "#663333"],
                events: [],
                eventStrokeWidth: 1,
                eventLineColors: ["#005a04", "#ccffbb", "#3a5f0b", "#005502"],
                rangeSelect: null,
                rangeSelectColor: "#eef",
                resize: !1
            }, r.prototype.setData = function(t, n) {
                var r, i, o, a, s, l, u, c, h, p, f, d, g, v, m;
                return null == n && (n = !0), this.options.data = t, null == t || 0 === t.length ? (this.data = [], this.raphael.clear(), void(null != this.hover && this.hover.hide())) : (d = this.cumulative ? 0 : null, g = this.cumulative ? 0 : null, this.options.goals.length > 0 && (s = Math.min.apply(Math, this.options.goals), a = Math.max.apply(Math, this.options.goals), g = null != g ? Math.min(g, s) : s, d = null != d ? Math.max(d, a) : a), this.data = function() {
                    var n, r, a;
                    for (a = [], o = n = 0, r = t.length; n < r; o = ++n) u = t[o], l = {
                        src: u
                    }, l.label = u[this.options.xkey], this.options.parseTime ? (l.x = e.parseDate(l.label), this.options.dateFormat ? l.label = this.options.dateFormat(l.x) : "number" == typeof l.label && (l.label = new Date(l.label).toString())) : (l.x = o, this.options.xLabelFormat && (l.label = this.options.xLabelFormat(l))), h = 0, l.y = function() {
                        var t, e, n, r;
                        for (n = this.options.ykeys, r = [], i = t = 0, e = n.length; t < e; i = ++t) f = n[i], v = u[f], "string" == typeof v && (v = parseFloat(v)), null != v && "number" != typeof v && (v = null), null != v && (this.cumulative ? h += v : null != d ? (d = Math.max(v, d), g = Math.min(v, g)) : d = g = v), this.cumulative && null != h && (d = Math.max(h, d), g = Math.min(h, g)), r.push(v);
                        return r
                    }.call(this), a.push(l);
                    return a
                }.call(this), this.options.parseTime && (this.data = this.data.sort(function(t, e) {
                    return (t.x > e.x) - (e.x > t.x)
                })), this.xmin = this.data[0].x, this.xmax = this.data[this.data.length - 1].x, this.events = [], this.options.events.length > 0 && (this.options.parseTime ? this.events = function() {
                    var t, n, i, o;
                    for (i = this.options.events, o = [], t = 0, n = i.length; t < n; t++) r = i[t], o.push(e.parseDate(r));
                    return o
                }.call(this) : this.events = this.options.events, this.xmax = Math.max(this.xmax, Math.max.apply(Math, this.events)), this.xmin = Math.min(this.xmin, Math.min.apply(Math, this.events))), this.xmin === this.xmax && (this.xmin -= 1, this.xmax += 1), this.ymin = this.yboundary("min", g), this.ymax = this.yboundary("max", d), this.ymin === this.ymax && (g && (this.ymin -= 1), this.ymax += 1), (m = this.options.axes) !== !0 && "both" !== m && "y" !== m && this.options.grid !== !0 || (this.options.ymax === this.gridDefaults.ymax && this.options.ymin === this.gridDefaults.ymin ? (this.grid = this.autoGridLines(this.ymin, this.ymax, this.options.numLines), this.ymin = Math.min(this.ymin, this.grid[0]), this.ymax = Math.max(this.ymax, this.grid[this.grid.length - 1])) : (c = (this.ymax - this.ymin) / (this.options.numLines - 1), this.grid = function() {
                    var t, e, n, r;
                    for (r = [], p = t = e = this.ymin, n = this.ymax; c > 0 ? t <= n : t >= n; p = t += c) r.push(p);
                    return r
                }.call(this))), this.dirty = !0, n ? this.redraw() : void 0)
            }, r.prototype.yboundary = function(t, e) {
                var n, r;
                return n = this.options["y" + t], "string" == typeof n ? "auto" === n.slice(0, 4) ? n.length > 5 ? (r = parseInt(n.slice(5), 10), null == e ? r : Math[t](e, r)) : null != e ? e : 0 : parseInt(n, 10) : n
            }, r.prototype.autoGridLines = function(t, e, n) {
                var r, i, o, a, s, l, u, c, h;
                return s = e - t, h = Math.floor(Math.log(s) / Math.log(10)), u = Math.pow(10, h), i = Math.floor(t / u) * u, r = Math.ceil(e / u) * u, l = (r - i) / (n - 1), 1 === u && l > 1 && Math.ceil(l) !== l && (l = Math.ceil(l), r = i + l * (n - 1)), i < 0 && r > 0 && (i = Math.floor(t / l) * l, r = Math.ceil(e / l) * l), l < 1 ? (a = Math.floor(Math.log(l) / Math.log(10)), o = function() {
                    var t, e;
                    for (e = [], c = t = i; l > 0 ? t <= r : t >= r; c = t += l) e.push(parseFloat(c.toFixed(1 - a)));
                    return e
                }()) : o = function() {
                    var t, e;
                    for (e = [], c = t = i; l > 0 ? t <= r : t >= r; c = t += l) e.push(c);
                    return e
                }(), o
            }, r.prototype._calc = function() {
                var t, e, n, r, i, o, a, s;
                if (i = this.el.width(), n = this.el.height(), (this.elementWidth !== i || this.elementHeight !== n || this.dirty) && (this.elementWidth = i, this.elementHeight = n, this.dirty = !1, this.left = this.options.padding, this.right = this.elementWidth - this.options.padding, this.top = this.options.padding, this.bottom = this.elementHeight - this.options.padding, (a = this.options.axes) !== !0 && "both" !== a && "y" !== a || (o = function() {
                        var t, n, r, i;
                        for (r = this.grid, i = [], t = 0, n = r.length; t < n; t++) e = r[t], i.push(this.measureText(this.yAxisFormat(e)).width);
                        return i
                    }.call(this), this.left += Math.max.apply(Math, o)), (s = this.options.axes) !== !0 && "both" !== s && "x" !== s || (t = function() {
                        var t, e, n;
                        for (n = [], r = t = 0, e = this.data.length; 0 <= e ? t < e : t > e; r = 0 <= e ? ++t : --t) n.push(this.measureText(this.data[r].text, -this.options.xLabelAngle).height);
                        return n
                    }.call(this), this.bottom -= Math.max.apply(Math, t)), this.width = Math.max(1, this.right - this.left), this.height = Math.max(1, this.bottom - this.top), this.dx = this.width / (this.xmax - this.xmin), this.dy = this.height / (this.ymax - this.ymin), this.calc)) return this.calc()
            }, r.prototype.transY = function(t) {
                return this.bottom - (t - this.ymin) * this.dy
            }, r.prototype.transX = function(t) {
                return 1 === this.data.length ? (this.left + this.right) / 2 : this.left + (t - this.xmin) * this.dx
            }, r.prototype.redraw = function() {
                if (this.raphael.clear(), this._calc(), this.drawGrid(), this.drawGoals(), this.drawEvents(), this.draw) return this.draw()
            }, r.prototype.measureText = function(t, e) {
                var n, r;
                return null == e && (e = 0), r = this.raphael.text(100, 100, t).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).rotate(e), n = r.getBBox(), r.remove(), n
            }, r.prototype.yAxisFormat = function(t) {
                return this.yLabelFormat(t)
            }, r.prototype.yLabelFormat = function(t) {
                return "function" == typeof this.options.yLabelFormat ? this.options.yLabelFormat(t) : "" + this.options.preUnits + e.commas(t) + this.options.postUnits
            }, r.prototype.drawGrid = function() {
                var t, e, n, r, i, o, a, s;
                if (this.options.grid !== !1 || (i = this.options.axes) === !0 || "both" === i || "y" === i) {
                    for (o = this.grid, s = [], n = 0, r = o.length; n < r; n++) t = o[n], e = this.transY(t), (a = this.options.axes) !== !0 && "both" !== a && "y" !== a || this.drawYAxisLabel(this.left - this.options.padding / 2, e, this.yAxisFormat(t)), this.options.grid ? s.push(this.drawGridLine("M" + this.left + "," + e + "H" + (this.left + this.width))) : s.push(void 0);
                    return s
                }
            }, r.prototype.drawGoals = function() {
                var t, e, n, r, i, o, a;
                for (o = this.options.goals, a = [], n = r = 0, i = o.length; r < i; n = ++r) e = o[n], t = this.options.goalLineColors[n % this.options.goalLineColors.length], a.push(this.drawGoal(e, t));
                return a
            }, r.prototype.drawEvents = function() {
                var t, e, n, r, i, o, a;
                for (o = this.events, a = [], n = r = 0, i = o.length; r < i; n = ++r) e = o[n], t = this.options.eventLineColors[n % this.options.eventLineColors.length], a.push(this.drawEvent(e, t));
                return a
            }, r.prototype.drawGoal = function(t, e) {
                return this.raphael.path("M" + this.left + "," + this.transY(t) + "H" + this.right).attr("stroke", e).attr("stroke-width", this.options.goalStrokeWidth)
            }, r.prototype.drawEvent = function(t, e) {
                return this.raphael.path("M" + this.transX(t) + "," + this.bottom + "V" + this.top).attr("stroke", e).attr("stroke-width", this.options.eventStrokeWidth)
            }, r.prototype.drawYAxisLabel = function(t, e, n) {
                return this.raphael.text(t, e, n).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor).attr("text-anchor", "end")
            }, r.prototype.drawGridLine = function(t) {
                return this.raphael.path(t).attr("stroke", this.options.gridLineColor).attr("stroke-width", this.options.gridStrokeWidth)
            }, r.prototype.startRange = function(t) {
                return this.hover.hide(), this.selectFrom = t, this.selectionRect.attr({
                    x: t,
                    width: 0
                }).show()
            }, r.prototype.endRange = function(t) {
                var e, n;
                if (this.selectFrom) return n = Math.min(this.selectFrom, t), e = Math.max(this.selectFrom, t), this.options.rangeSelect.call(this.el, {
                    start: this.data[this.hitTest(n)].x,
                    end: this.data[this.hitTest(e)].x
                }), this.selectFrom = null
            }, r.prototype.resizeHandler = function() {
                return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw()
            }, r
        }(e.EventEmitter), e.parseDate = function(t) {
            var e, n, r, i, o, a, s, l, u, c, h;
            return "number" == typeof t ? t : (n = t.match(/^(\d+) Q(\d)$/), i = t.match(/^(\d+)-(\d+)$/), o = t.match(/^(\d+)-(\d+)-(\d+)$/), s = t.match(/^(\d+) W(\d+)$/), l = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/), u = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/), n ? new Date(parseInt(n[1], 10), 3 * parseInt(n[2], 10) - 1, 1).getTime() : i ? new Date(parseInt(i[1], 10), parseInt(i[2], 10) - 1, 1).getTime() : o ? new Date(parseInt(o[1], 10), parseInt(o[2], 10) - 1, parseInt(o[3], 10)).getTime() : s ? (c = new Date(parseInt(s[1], 10), 0, 1), 4 !== c.getDay() && c.setMonth(0, 1 + (4 - c.getDay() + 7) % 7), c.getTime() + 6048e5 * parseInt(s[2], 10)) : l ? l[6] ? (a = 0, "Z" !== l[6] && (a = 60 * parseInt(l[8], 10) + parseInt(l[9], 10), "+" === l[7] && (a = 0 - a)), Date.UTC(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10) + a)) : new Date(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10)).getTime() : u ? (h = parseFloat(u[6]), e = Math.floor(h), r = Math.round(1e3 * (h - e)), u[8] ? (a = 0, "Z" !== u[8] && (a = 60 * parseInt(u[10], 10) + parseInt(u[11], 10), "+" === u[9] && (a = 0 - a)), Date.UTC(parseInt(u[1], 10), parseInt(u[2], 10) - 1, parseInt(u[3], 10), parseInt(u[4], 10), parseInt(u[5], 10) + a, e, r)) : new Date(parseInt(u[1], 10), parseInt(u[2], 10) - 1, parseInt(u[3], 10), parseInt(u[4], 10), parseInt(u[5], 10), e, r).getTime()) : new Date(parseInt(t, 10), 0, 1).getTime())
        }, e.Hover = function() {
            function n(n) {
                null == n && (n = {}), this.options = t.extend({}, e.Hover.defaults, n), this.el = t("<div class='" + this.options.class + "'></div>"), this.el.hide(), this.options.parent.append(this.el)
            }
            return n.defaults = {
                class: "morris-hover morris-default-style"
            }, n.prototype.update = function(t, e, n) {
                return t ? (this.html(t), this.show(), this.moveTo(e, n)) : this.hide()
            }, n.prototype.html = function(t) {
                return this.el.html(t)
            }, n.prototype.moveTo = function(t, e) {
                var n, r, i, o, a, s;
                return a = this.options.parent.innerWidth(), o = this.options.parent.innerHeight(), r = this.el.outerWidth(), n = this.el.outerHeight(), i = Math.min(Math.max(0, t - r / 2), a - r), null != e ? (s = e - n - 10, s < 0 && (s = e + 10, s + n > o && (s = o / 2 - n / 2))) : s = o / 2 - n / 2, this.el.css({
                    left: i + "px",
                    top: parseInt(s) + "px"
                })
            }, n.prototype.show = function() {
                return this.el.show()
            }, n.prototype.hide = function() {
                return this.el.hide()
            }, n
        }(), e.Line = function(t) {
            function n(t) {
                return this.hilight = o(this.hilight, this), this.onHoverOut = o(this.onHoverOut, this), this.onHoverMove = o(this.onHoverMove, this), this.onGridClick = o(this.onGridClick, this), this instanceof e.Line ? void n.__super__.constructor.call(this, t) : new e.Line(t)
            }
            return s(n, t), n.prototype.init = function() {
                if ("always" !== this.options.hideHover) return this.hover = new e.Hover({
                    parent: this.el
                }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)
            }, n.prototype.defaults = {
                lineWidth: 3,
                pointSize: 4,
                lineColors: ["#0b62a4", "#7A92A3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                pointStrokeWidths: [1],
                pointStrokeColors: ["#ffffff"],
                pointFillColors: [],
                smooth: !0,
                xLabels: "auto",
                xLabelFormat: null,
                xLabelMargin: 24,
                hideHover: !1
            }, n.prototype.calc = function() {
                return this.calcPoints(), this.generatePaths()
            }, n.prototype.calcPoints = function() {
                var t, e, n, r, i, o;
                for (i = this.data, o = [], n = 0, r = i.length; n < r; n++) t = i[n], t._x = this.transX(t.x), t._y = function() {
                    var n, r, i, o;
                    for (i = t.y, o = [], n = 0, r = i.length; n < r; n++) e = i[n], null != e ? o.push(this.transY(e)) : o.push(e);
                    return o
                }.call(this), o.push(t._ymax = Math.min.apply(Math, [this.bottom].concat(function() {
                    var n, r, i, o;
                    for (i = t._y, o = [], n = 0, r = i.length; n < r; n++) e = i[n], null != e && o.push(e);
                    return o
                }())));
                return o
            }, n.prototype.hitTest = function(t) {
                var e, n, r, i, o;
                if (0 === this.data.length) return null;
                for (o = this.data.slice(1), e = r = 0, i = o.length; r < i && (n = o[e], !(t < (n._x + this.data[e]._x) / 2)); e = ++r);
                return e
            }, n.prototype.onGridClick = function(t, e) {
                var n;
                return n = this.hitTest(t), this.fire("click", n, this.data[n].src, t, e)
            }, n.prototype.onHoverMove = function(t, e) {
                var n;
                return n = this.hitTest(t), this.displayHoverForRow(n)
            }, n.prototype.onHoverOut = function() {
                if (this.options.hideHover !== !1) return this.displayHoverForRow(null)
            }, n.prototype.displayHoverForRow = function(t) {
                var e;
                return null != t ? ((e = this.hover).update.apply(e, this.hoverContentForRow(t)), this.hilight(t)) : (this.hover.hide(), this.hilight())
            }, n.prototype.hoverContentForRow = function(t) {
                var e, n, r, i, o, a, s;
                for (r = this.data[t], e = "<div class='morris-hover-row-label'>" + r.label + "</div>", s = r.y, n = o = 0, a = s.length; o < a; n = ++o) i = s[n], e += "<div class='morris-hover-point' style='color: " + this.colorFor(r, n, "label") + "'>\n  " + this.options.labels[n] + ":\n  " + this.yLabelFormat(i) + "\n</div>";
                return "function" == typeof this.options.hoverCallback && (e = this.options.hoverCallback(t, this.options, e, r.src)), [e, r._x, r._ymax]
            }, n.prototype.generatePaths = function() {
                var t, n, r, i;
                return this.paths = function() {
                    var o, a, s, u;
                    for (u = [], n = o = 0, a = this.options.ykeys.length; 0 <= a ? o < a : o > a; n = 0 <= a ? ++o : --o) i = "boolean" == typeof this.options.smooth ? this.options.smooth : (s = this.options.ykeys[n], l.call(this.options.smooth, s) >= 0), t = function() {
                        var t, e, i, o;
                        for (i = this.data, o = [], t = 0, e = i.length; t < e; t++) r = i[t], void 0 !== r._y[n] && o.push({
                            x: r._x,
                            y: r._y[n]
                        });
                        return o
                    }.call(this), t.length > 1 ? u.push(e.Line.createPath(t, i, this.bottom)) : u.push(null);
                    return u
                }.call(this)
            }, n.prototype.draw = function() {
                var t;
                if ((t = this.options.axes) !== !0 && "both" !== t && "x" !== t || this.drawXAxis(), this.drawSeries(), this.options.hideHover === !1) return this.displayHoverForRow(this.data.length - 1)
            }, n.prototype.drawXAxis = function() {
                var t, n, r, i, o, a, s, l, u, c, h = this;
                for (s = this.bottom + this.options.padding / 2, o = null, i = null, t = function(t, e) {
                        var n, r, a, l, u;
                        return n = h.drawXAxisLabel(h.transX(e), s, t), u = n.getBBox(), n.transform("r" + -h.options.xLabelAngle), r = n.getBBox(), n.transform("t0," + r.height / 2 + "..."), 0 !== h.options.xLabelAngle && (l = -.5 * u.width * Math.cos(h.options.xLabelAngle * Math.PI / 180), n.transform("t" + l + ",0...")), r = n.getBBox(), (null == o || o >= r.x + r.width || null != i && i >= r.x) && r.x >= 0 && r.x + r.width < h.el.width() ? (0 !== h.options.xLabelAngle && (a = 1.25 * h.options.gridTextSize / Math.sin(h.options.xLabelAngle * Math.PI / 180), i = r.x - a), o = r.x - h.options.xLabelMargin) : n.remove()
                    }, r = this.options.parseTime ? 1 === this.data.length && "auto" === this.options.xLabels ? [
                        [this.data[0].label, this.data[0].x]
                    ] : e.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat) : function() {
                        var t, e, n, r;
                        for (n = this.data, r = [], t = 0, e = n.length; t < e; t++) a = n[t], r.push([a.label, a.x]);
                        return r
                    }.call(this), r.reverse(), c = [], l = 0, u = r.length; l < u; l++) n = r[l], c.push(t(n[0], n[1]));
                return c
            }, n.prototype.drawSeries = function() {
                var t, e, n, r, i, o;
                for (this.seriesPoints = [], t = e = r = this.options.ykeys.length - 1; r <= 0 ? e <= 0 : e >= 0; t = r <= 0 ? ++e : --e) this._drawLineFor(t);
                for (o = [], t = n = i = this.options.ykeys.length - 1; i <= 0 ? n <= 0 : n >= 0; t = i <= 0 ? ++n : --n) o.push(this._drawPointFor(t));
                return o
            }, n.prototype._drawPointFor = function(t) {
                var e, n, r, i, o, a;
                for (this.seriesPoints[t] = [], o = this.data, a = [], r = 0, i = o.length; r < i; r++) n = o[r], e = null, null != n._y[t] && (e = this.drawLinePoint(n._x, n._y[t], this.colorFor(n, t, "point"), t)), a.push(this.seriesPoints[t].push(e));
                return a
            }, n.prototype._drawLineFor = function(t) {
                var e;
                if (e = this.paths[t], null !== e) return this.drawLinePath(e, this.colorFor(null, t, "line"), t)
            }, n.createPath = function(t, n, r) {
                var i, o, a, s, l, u, c, h, p, f, d, g, v, m;
                for (c = "", n && (a = e.Line.gradients(t)), h = {
                        y: null
                    }, s = v = 0, m = t.length; v < m; s = ++v) i = t[s], null != i.y && (null != h.y ? n ? (o = a[s], u = a[s - 1], l = (i.x - h.x) / 4, p = h.x + l, d = Math.min(r, h.y + l * u), f = i.x - l, g = Math.min(r, i.y - l * o), c += "C" + p + "," + d + "," + f + "," + g + "," + i.x + "," + i.y) : c += "L" + i.x + "," + i.y : n && null == a[s] || (c += "M" + i.x + "," + i.y)), h = i;
                return c
            }, n.gradients = function(t) {
                var e, n, r, i, o, a, s, l;
                for (n = function(t, e) {
                        return (t.y - e.y) / (t.x - e.x)
                    }, l = [], r = a = 0, s = t.length; a < s; r = ++a) e = t[r], null != e.y ? (i = t[r + 1] || {
                    y: null
                }, o = t[r - 1] || {
                    y: null
                }, null != o.y && null != i.y ? l.push(n(o, i)) : null != o.y ? l.push(n(o, e)) : null != i.y ? l.push(n(e, i)) : l.push(null)) : l.push(null);
                return l
            }, n.prototype.hilight = function(t) {
                var e, n, r, i, o;
                if (null !== this.prevHilight && this.prevHilight !== t)
                    for (e = n = 0, i = this.seriesPoints.length - 1; 0 <= i ? n <= i : n >= i; e = 0 <= i ? ++n : --n) this.seriesPoints[e][this.prevHilight] && this.seriesPoints[e][this.prevHilight].animate(this.pointShrinkSeries(e));
                if (null !== t && this.prevHilight !== t)
                    for (e = r = 0, o = this.seriesPoints.length - 1; 0 <= o ? r <= o : r >= o; e = 0 <= o ? ++r : --r) this.seriesPoints[e][t] && this.seriesPoints[e][t].animate(this.pointGrowSeries(e));
                return this.prevHilight = t
            }, n.prototype.colorFor = function(t, e, n) {
                return "function" == typeof this.options.lineColors ? this.options.lineColors.call(this, t, e, n) : "point" === n ? this.options.pointFillColors[e % this.options.pointFillColors.length] || this.options.lineColors[e % this.options.lineColors.length] : this.options.lineColors[e % this.options.lineColors.length]
            }, n.prototype.drawXAxisLabel = function(t, e, n) {
                return this.raphael.text(t, e, n).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor)
            }, n.prototype.drawLinePath = function(t, e, n) {
                return this.raphael.path(t).attr("stroke", e).attr("stroke-width", this.lineWidthForSeries(n))
            }, n.prototype.drawLinePoint = function(t, e, n, r) {
                return this.raphael.circle(t, e, this.pointSizeForSeries(r)).attr("fill", n).attr("stroke-width", this.pointStrokeWidthForSeries(r)).attr("stroke", this.pointStrokeColorForSeries(r))
            }, n.prototype.pointStrokeWidthForSeries = function(t) {
                return this.options.pointStrokeWidths[t % this.options.pointStrokeWidths.length]
            }, n.prototype.pointStrokeColorForSeries = function(t) {
                return this.options.pointStrokeColors[t % this.options.pointStrokeColors.length]
            }, n.prototype.lineWidthForSeries = function(t) {
                return this.options.lineWidth instanceof Array ? this.options.lineWidth[t % this.options.lineWidth.length] : this.options.lineWidth
            }, n.prototype.pointSizeForSeries = function(t) {
                return this.options.pointSize instanceof Array ? this.options.pointSize[t % this.options.pointSize.length] : this.options.pointSize
            }, n.prototype.pointGrowSeries = function(t) {
                return Raphael.animation({
                    r: this.pointSizeForSeries(t) + 3
                }, 25, "linear")
            }, n.prototype.pointShrinkSeries = function(t) {
                return Raphael.animation({
                    r: this.pointSizeForSeries(t)
                }, 25, "linear")
            }, n
        }(e.Grid), e.labelSeries = function(n, r, i, o, a) {
            var s, l, u, c, h, p, f, d, g, v, m;
            if (u = 200 * (r - n) / i, l = new Date(n), f = e.LABEL_SPECS[o], void 0 === f)
                for (m = e.AUTO_LABEL_ORDER, g = 0, v = m.length; g < v; g++)
                    if (c = m[g], p = e.LABEL_SPECS[c], u >= p.span) {
                        f = p;
                        break
                    }
            for (void 0 === f && (f = e.LABEL_SPECS.second), a && (f = t.extend({}, f, {
                    fmt: a
                })), s = f.start(l), h = [];
                (d = s.getTime()) <= r;) d >= n && h.push([f.fmt(s), d]), f.incr(s);
            return h
        }, n = function(t) {
            return {
                span: 60 * t * 1e3,
                start: function(t) {
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours())
                },
                fmt: function(t) {
                    return "" + e.pad2(t.getHours()) + ":" + e.pad2(t.getMinutes())
                },
                incr: function(e) {
                    return e.setUTCMinutes(e.getUTCMinutes() + t)
                }
            }
        }, r = function(t) {
            return {
                span: 1e3 * t,
                start: function(t) {
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes())
                },
                fmt: function(t) {
                    return "" + e.pad2(t.getHours()) + ":" + e.pad2(t.getMinutes()) + ":" + e.pad2(t.getSeconds())
                },
                incr: function(e) {
                    return e.setUTCSeconds(e.getUTCSeconds() + t)
                }
            }
        }, e.LABEL_SPECS = {
            decade: {
                span: 1728e8,
                start: function(t) {
                    return new Date(t.getFullYear() - t.getFullYear() % 10, 0, 1)
                },
                fmt: function(t) {
                    return "" + t.getFullYear()
                },
                incr: function(t) {
                    return t.setFullYear(t.getFullYear() + 10)
                }
            },
            year: {
                span: 1728e7,
                start: function(t) {
                    return new Date(t.getFullYear(), 0, 1)
                },
                fmt: function(t) {
                    return "" + t.getFullYear()
                },
                incr: function(t) {
                    return t.setFullYear(t.getFullYear() + 1)
                }
            },
            month: {
                span: 24192e5,
                start: function(t) {
                    return new Date(t.getFullYear(), t.getMonth(), 1)
                },
                fmt: function(t) {
                    return "" + t.getFullYear() + "-" + e.pad2(t.getMonth() + 1)
                },
                incr: function(t) {
                    return t.setMonth(t.getMonth() + 1)
                }
            },
            week: {
                span: 6048e5,
                start: function(t) {
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate())
                },
                fmt: function(t) {
                    return "" + t.getFullYear() + "-" + e.pad2(t.getMonth() + 1) + "-" + e.pad2(t.getDate())
                },
                incr: function(t) {
                    return t.setDate(t.getDate() + 7)
                }
            },
            day: {
                span: 864e5,
                start: function(t) {
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate())
                },
                fmt: function(t) {
                    return "" + t.getFullYear() + "-" + e.pad2(t.getMonth() + 1) + "-" + e.pad2(t.getDate())
                },
                incr: function(t) {
                    return t.setDate(t.getDate() + 1)
                }
            },
            hour: n(60),
            "30min": n(30),
            "15min": n(15),
            "10min": n(10),
            "5min": n(5),
            minute: n(1),
            "30sec": r(30),
            "15sec": r(15),
            "10sec": r(10),
            "5sec": r(5),
            second: r(1)
        }, e.AUTO_LABEL_ORDER = ["decade", "year", "month", "week", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"], e.Area = function(n) {
            function r(n) {
                var o;
                return this instanceof e.Area ? (o = t.extend({}, i, n), this.cumulative = !o.behaveLikeLine, "auto" === o.fillOpacity && (o.fillOpacity = o.behaveLikeLine ? .8 : 1), void r.__super__.constructor.call(this, o)) : new e.Area(n)
            }
            var i;
            return s(r, n), i = {
                fillOpacity: "auto",
                behaveLikeLine: !1
            }, r.prototype.calcPoints = function() {
                var t, e, n, r, i, o, a;
                for (o = this.data, a = [], r = 0, i = o.length; r < i; r++) t = o[r], t._x = this.transX(t.x), e = 0, t._y = function() {
                    var r, i, o, a;
                    for (o = t.y, a = [], r = 0, i = o.length; r < i; r++) n = o[r], this.options.behaveLikeLine ? a.push(this.transY(n)) : (e += n || 0, a.push(this.transY(e)));
                    return a
                }.call(this), a.push(t._ymax = Math.max.apply(Math, t._y));
                return a
            }, r.prototype.drawSeries = function() {
                var t, e, n, r, i, o, a, s;
                for (this.seriesPoints = [], e = this.options.behaveLikeLine ? function() {
                        o = [];
                        for (var t = 0, e = this.options.ykeys.length - 1; 0 <= e ? t <= e : t >= e; 0 <= e ? t++ : t--) o.push(t);
                        return o
                    }.apply(this) : function() {
                        a = [];
                        for (var t = i = this.options.ykeys.length - 1; i <= 0 ? t <= 0 : t >= 0; i <= 0 ? t++ : t--) a.push(t);
                        return a
                    }.apply(this), s = [], n = 0, r = e.length; n < r; n++) t = e[n], this._drawFillFor(t), this._drawLineFor(t), s.push(this._drawPointFor(t));
                return s
            }, r.prototype._drawFillFor = function(t) {
                var e;
                if (e = this.paths[t], null !== e) return e += "L" + this.transX(this.xmax) + "," + this.bottom + "L" + this.transX(this.xmin) + "," + this.bottom + "Z", this.drawFilledPath(e, this.fillForSeries(t))
            }, r.prototype.fillForSeries = function(t) {
                var e;
                return e = Raphael.rgb2hsl(this.colorFor(this.data[t], t, "line")), Raphael.hsl(e.h, this.options.behaveLikeLine ? .9 * e.s : .75 * e.s, Math.min(.98, this.options.behaveLikeLine ? 1.2 * e.l : 1.25 * e.l))
            }, r.prototype.drawFilledPath = function(t, e) {
                return this.raphael.path(t).attr("fill", e).attr("fill-opacity", this.options.fillOpacity).attr("stroke", "none")
            }, r
        }(e.Line), e.Bar = function(n) {
            function r(n) {
                return this.onHoverOut = o(this.onHoverOut, this), this.onHoverMove = o(this.onHoverMove, this), this.onGridClick = o(this.onGridClick, this), this instanceof e.Bar ? void r.__super__.constructor.call(this, t.extend({}, n, {
                    parseTime: !1
                })) : new e.Bar(n)
            }
            return s(r, n), r.prototype.init = function() {
                if (this.cumulative = this.options.stacked, "always" !== this.options.hideHover) return this.hover = new e.Hover({
                    parent: this.el
                }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)
            }, r.prototype.defaults = {
                barSizeRatio: .75,
                barGap: 3,
                barColors: ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                barOpacity: 1,
                barRadius: [0, 0, 0, 0],
                xLabelMargin: 50
            }, r.prototype.calc = function() {
                var t;
                if (this.calcBars(), this.options.hideHover === !1) return (t = this.hover).update.apply(t, this.hoverContentForRow(this.data.length - 1))
            }, r.prototype.calcBars = function() {
                var t, e, n, r, i, o, a;
                for (o = this.data, a = [], t = r = 0, i = o.length; r < i; t = ++r) e = o[t], e._x = this.left + this.width * (t + .5) / this.data.length, a.push(e._y = function() {
                    var t, r, i, o;
                    for (i = e.y, o = [], t = 0, r = i.length; t < r; t++) n = i[t], null != n ? o.push(this.transY(n)) : o.push(null);
                    return o
                }.call(this));
                return a
            }, r.prototype.draw = function() {
                var t;
                return (t = this.options.axes) !== !0 && "both" !== t && "x" !== t || this.drawXAxis(), this.drawSeries()
            }, r.prototype.drawXAxis = function() {
                var t, e, n, r, i, o, a, s, l, u, c, h, p;
                for (u = this.bottom + (this.options.xAxisLabelTopPadding || this.options.padding / 2), a = null, o = null, p = [], t = c = 0, h = this.data.length; 0 <= h ? c < h : c > h; t = 0 <= h ? ++c : --c) s = this.data[this.data.length - 1 - t], e = this.drawXAxisLabel(s._x, u, s.label), l = e.getBBox(), e.transform("r" + -this.options.xLabelAngle), n = e.getBBox(), e.transform("t0," + n.height / 2 + "..."), 0 !== this.options.xLabelAngle && (i = -.5 * l.width * Math.cos(this.options.xLabelAngle * Math.PI / 180), e.transform("t" + i + ",0...")), (null == a || a >= n.x + n.width || null != o && o >= n.x) && n.x >= 0 && n.x + n.width < this.el.width() ? (0 !== this.options.xLabelAngle && (r = 1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180), o = n.x - r), p.push(a = n.x - this.options.xLabelMargin)) : p.push(e.remove());
                return p
            }, r.prototype.drawSeries = function() {
                var t, e, n, r, i, o, a, s, l, u, c, h, p, f, d;
                return n = this.width / this.options.data.length, s = this.options.stacked ? 1 : this.options.ykeys.length, t = (n * this.options.barSizeRatio - this.options.barGap * (s - 1)) / s, this.options.barSize && (t = Math.min(t, this.options.barSize)), h = n - t * s - this.options.barGap * (s - 1), a = h / 2, d = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null, this.bars = function() {
                    var s, h, g, v;
                    for (g = this.data, v = [], r = s = 0, h = g.length; s < h; r = ++s) l = g[r], i = 0, v.push(function() {
                        var s, h, g, v;
                        for (g = l._y, v = [], u = s = 0, h = g.length; s < h; u = ++s) f = g[u], null !== f ? (d ? (p = Math.min(f, d), e = Math.max(f, d)) : (p = f, e = this.bottom), o = this.left + r * n + a, this.options.stacked || (o += u * (t + this.options.barGap)), c = e - p, this.options.verticalGridCondition && this.options.verticalGridCondition(l.x) && this.drawBar(this.left + r * n, this.top, n, Math.abs(this.top - this.bottom), this.options.verticalGridColor, this.options.verticalGridOpacity, this.options.barRadius), this.options.stacked && (p -= i), this.drawBar(o, p, t, c, this.colorFor(l, u, "bar"), this.options.barOpacity, this.options.barRadius), v.push(i += c)) : v.push(null);
                        return v
                    }.call(this));
                    return v
                }.call(this)
            }, r.prototype.colorFor = function(t, e, n) {
                var r, i;
                return "function" == typeof this.options.barColors ? (r = {
                    x: t.x,
                    y: t.y[e],
                    label: t.label
                }, i = {
                    index: e,
                    key: this.options.ykeys[e],
                    label: this.options.labels[e]
                }, this.options.barColors.call(this, r, i, n)) : this.options.barColors[e % this.options.barColors.length]
            }, r.prototype.hitTest = function(t) {
                return 0 === this.data.length ? null : (t = Math.max(Math.min(t, this.right), this.left), Math.min(this.data.length - 1, Math.floor((t - this.left) / (this.width / this.data.length))))
            }, r.prototype.onGridClick = function(t, e) {
                var n;
                return n = this.hitTest(t), this.fire("click", n, this.data[n].src, t, e)
            }, r.prototype.onHoverMove = function(t, e) {
                var n, r;
                return n = this.hitTest(t), (r = this.hover).update.apply(r, this.hoverContentForRow(n))
            }, r.prototype.onHoverOut = function() {
                if (this.options.hideHover !== !1) return this.hover.hide()
            }, r.prototype.hoverContentForRow = function(t) {
                var e, n, r, i, o, a, s, l;
                for (r = this.data[t], e = "<div class='morris-hover-row-label'>" + r.label + "</div>", l = r.y, n = a = 0, s = l.length; a < s; n = ++a) o = l[n], e += "<div class='morris-hover-point' style='color: " + this.colorFor(r, n, "label") + "'>\n  " + this.options.labels[n] + ":\n  " + this.yLabelFormat(o) + "\n</div>";
                return "function" == typeof this.options.hoverCallback && (e = this.options.hoverCallback(t, this.options, e, r.src)), i = this.left + (t + .5) * this.width / this.data.length, [e, i]
            }, r.prototype.drawXAxisLabel = function(t, e, n) {
                var r;
                return r = this.raphael.text(t, e, n).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor)
            }, r.prototype.drawBar = function(t, e, n, r, i, o, a) {
                var s, l;
                return s = Math.max.apply(Math, a), l = 0 === s || s > r ? this.raphael.rect(t, e, n, r) : this.raphael.path(this.roundedRect(t, e, n, r, a)), l.attr("fill", i).attr("fill-opacity", o).attr("stroke", "none")
            }, r.prototype.roundedRect = function(t, e, n, r, i) {
                return null == i && (i = [0, 0, 0, 0]), ["M", t, i[0] + e, "Q", t, e, t + i[0], e, "L", t + n - i[1], e, "Q", t + n, e, t + n, e + i[1], "L", t + n, e + r - i[2], "Q", t + n, e + r, t + n - i[2], e + r, "L", t + i[3], e + r, "Q", t, e + r, t, e + r - i[3], "Z"]
            }, r
        }(e.Grid), e.Donut = function(n) {
            function r(n) {
                this.resizeHandler = o(this.resizeHandler, this), this.select = o(this.select, this), this.click = o(this.click, this);
                var r = this;
                if (!(this instanceof e.Donut)) return new e.Donut(n);
                if (this.options = t.extend({}, this.defaults, n), "string" == typeof n.element ? this.el = t(document.getElementById(n.element)) : this.el = t(n.element), null === this.el || 0 === this.el.length) throw new Error("Graph placeholder not found.");
                void 0 !== n.data && 0 !== n.data.length && (this.raphael = new Raphael(this.el[0]), this.options.resize && t(window).bind("resize", function(t) {
                    return null != r.timeoutId && window.clearTimeout(r.timeoutId), r.timeoutId = window.setTimeout(r.resizeHandler, 100)
                }), this.setData(n.data))
            }
            return s(r, n), r.prototype.defaults = {
                colors: ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"],
                backgroundColor: "#FFFFFF",
                labelColor: "#000000",
                formatter: e.commas,
                resize: !1
            }, r.prototype.redraw = function() {
                var t, n, r, i, o, a, s, l, u, c, h, p, f, d, g, v, m, y, x, b, _, w, T;
                for (this.raphael.clear(), n = this.el.width() / 2, r = this.el.height() / 2, f = (Math.min(n, r) - 10) / 3, h = 0, b = this.values, d = 0, m = b.length; d < m; d++) p = b[d], h += p;
                for (l = 5 / (2 * f), t = 1.9999 * Math.PI - l * this.data.length, a = 0, o = 0, this.segments = [], _ = this.values, i = g = 0, y = _.length; g < y; i = ++g) p = _[i], u = a + l + t * (p / h), c = new e.DonutSegment(n, r, 2 * f, f, a, u, this.data[i].color || this.options.colors[o % this.options.colors.length], this.options.backgroundColor, o, this.raphael), c.render(), this.segments.push(c), c.on("hover", this.select), c.on("click", this.click), a = u, o += 1;
                for (this.text1 = this.drawEmptyDonutLabel(n, r - 10, this.options.labelColor, 15, 800), this.text2 = this.drawEmptyDonutLabel(n, r + 10, this.options.labelColor, 14), s = Math.max.apply(Math, this.values), o = 0, w = this.values, T = [], v = 0, x = w.length; v < x; v++) {
                    if (p = w[v], p === s) {
                        this.select(o);
                        break
                    }
                    T.push(o += 1)
                }
                return T
            }, r.prototype.setData = function(t) {
                var e;
                return this.data = t, this.values = function() {
                    var t, n, r, i;
                    for (r = this.data, i = [], t = 0, n = r.length; t < n; t++) e = r[t], i.push(parseFloat(e.value));
                    return i
                }.call(this), this.redraw()
            }, r.prototype.click = function(t) {
                return this.fire("click", t, this.data[t])
            }, r.prototype.select = function(t) {
                var e, n, r, i, o, a;
                for (a = this.segments, i = 0, o = a.length; i < o; i++) n = a[i], n.deselect();
                return r = this.segments[t], r.select(), e = this.data[t], this.setLabels(e.label, this.options.formatter(e.value, e))
            }, r.prototype.setLabels = function(t, e) {
                var n, r, i, o, a, s, l, u;
                return n = 2 * (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) / 3, o = 1.8 * n, i = n / 2, r = n / 3, this.text1.attr({
                    text: t,
                    transform: ""
                }), a = this.text1.getBBox(), s = Math.min(o / a.width, i / a.height), this.text1.attr({
                    transform: "S" + s + "," + s + "," + (a.x + a.width / 2) + "," + (a.y + a.height)
                }), this.text2.attr({
                    text: e,
                    transform: ""
                }), l = this.text2.getBBox(), u = Math.min(o / l.width, r / l.height), this.text2.attr({
                    transform: "S" + u + "," + u + "," + (l.x + l.width / 2) + "," + l.y
                })
            }, r.prototype.drawEmptyDonutLabel = function(t, e, n, r, i) {
                var o;
                return o = this.raphael.text(t, e, "").attr("font-size", r).attr("fill", n), null != i && o.attr("font-weight", i), o
            }, r.prototype.resizeHandler = function() {
                return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw()
            }, r
        }(e.EventEmitter), e.DonutSegment = function(t) {
            function e(t, e, n, r, i, a, s, l, u, c) {
                this.cx = t, this.cy = e, this.inner = n, this.outer = r, this.color = s, this.backgroundColor = l, this.index = u, this.raphael = c, this.deselect = o(this.deselect, this), this.select = o(this.select, this), this.sin_p0 = Math.sin(i), this.cos_p0 = Math.cos(i), this.sin_p1 = Math.sin(a), this.cos_p1 = Math.cos(a), this.is_long = a - i > Math.PI ? 1 : 0, this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5), this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer), this.hilight = this.calcArc(this.inner)
            }
            return s(e, t), e.prototype.calcArcPoints = function(t) {
                return [this.cx + t * this.sin_p0, this.cy + t * this.cos_p0, this.cx + t * this.sin_p1, this.cy + t * this.cos_p1]
            }, e.prototype.calcSegment = function(t, e) {
                var n, r, i, o, a, s, l, u, c, h;
                return c = this.calcArcPoints(t), n = c[0], i = c[1], r = c[2], o = c[3], h = this.calcArcPoints(e), a = h[0], l = h[1], s = h[2], u = h[3], "M" + n + "," + i + ("A" + t + "," + t + ",0," + this.is_long + ",0," + r + "," + o) + ("L" + s + "," + u) + ("A" + e + "," + e + ",0," + this.is_long + ",1," + a + "," + l) + "Z"
            }, e.prototype.calcArc = function(t) {
                var e, n, r, i, o;
                return o = this.calcArcPoints(t), e = o[0], r = o[1], n = o[2], i = o[3], "M" + e + "," + r + ("A" + t + "," + t + ",0," + this.is_long + ",0," + n + "," + i)
            }, e.prototype.render = function() {
                var t = this;
                return this.arc = this.drawDonutArc(this.hilight, this.color), this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, function() {
                    return t.fire("hover", t.index)
                }, function() {
                    return t.fire("click", t.index)
                })
            }, e.prototype.drawDonutArc = function(t, e) {
                return this.raphael.path(t).attr({
                    stroke: e,
                    "stroke-width": 2,
                    opacity: 0
                })
            }, e.prototype.drawDonutSegment = function(t, e, n, r, i) {
                return this.raphael.path(t).attr({
                    fill: e,
                    stroke: n,
                    "stroke-width": 3
                }).hover(r).click(i)
            }, e.prototype.select = function() {
                if (!this.selected) return this.seg.animate({
                    path: this.selectedPath
                }, 150, "<>"), this.arc.animate({
                    opacity: 1
                }, 150, "<>"), this.selected = !0
            }, e.prototype.deselect = function() {
                if (this.selected) return this.seg.animate({
                    path: this.path
                }, 150, "<>"), this.arc.animate({
                    opacity: 0
                }, 150, "<>"), this.selected = !1
            }, e
        }(e.EventEmitter)
    }.call(this), "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, n) {
        var r = {
            init: function(e, n) {
                var r = this;
                r.$elem = t(n), r.options = t.extend({}, t.fn.owlCarousel.options, r.$elem.data(), e), r.userOptions = e, r.loadContent()
            },
            loadContent: function() {
                function e(t) {
                    var e, n = "";
                    if ("function" == typeof r.options.jsonSuccess) r.options.jsonSuccess.apply(this, [t]);
                    else {
                        for (e in t.owl) t.owl.hasOwnProperty(e) && (n += t.owl[e].item);
                        r.$elem.html(n)
                    }
                    r.logIn()
                }
                var n, r = this;
                "function" == typeof r.options.beforeInit && r.options.beforeInit.apply(this, [r.$elem]), "string" == typeof r.options.jsonPath ? (n = r.options.jsonPath, t.getJSON(n, e)) : r.logIn()
            },
            logIn: function() {
                var t = this;
                t.$elem.data("owl-originalStyles", t.$elem.attr("style")), t.$elem.data("owl-originalClasses", t.$elem.attr("class")), t.$elem.css({
                    opacity: 0
                }), t.orignalItems = t.options.items, t.checkBrowser(), t.wrapperWidth = 0, t.checkVisible = null, t.setVars()
            },
            setVars: function() {
                var t = this;
                return 0 !== t.$elem.children().length && (t.baseClass(), t.eventTypes(), t.$userItems = t.$elem.children(), t.itemsAmount = t.$userItems.length, t.wrapItems(), t.$owlItems = t.$elem.find(".owl-item"), t.$owlWrapper = t.$elem.find(".owl-wrapper"), t.playDirection = "next", t.prevItem = 0, t.prevArr = [0], t.currentItem = 0, t.customEvents(), void t.onStartup())
            },
            onStartup: function() {
                var t = this;
                t.updateItems(), t.calculateAll(), t.buildControls(), t.updateControls(), t.response(), t.moveEvents(), t.stopOnHover(), t.owlStatus(), t.options.transitionStyle !== !1 && t.transitionTypes(t.options.transitionStyle),
                    t.options.autoPlay === !0 && (t.options.autoPlay = 5e3), t.play(), t.$elem.find(".owl-wrapper").css("display", "block"), t.$elem.is(":visible") ? t.$elem.css("opacity", 1) : t.watchVisibility(), t.onstartup = !1, t.eachMoveUpdate(), "function" == typeof t.options.afterInit && t.options.afterInit.apply(this, [t.$elem])
            },
            eachMoveUpdate: function() {
                var t = this;
                t.options.lazyLoad === !0 && t.lazyLoad(), t.options.autoHeight === !0 && t.autoHeight(), t.onVisibleItems(), "function" == typeof t.options.afterAction && t.options.afterAction.apply(this, [t.$elem])
            },
            updateVars: function() {
                var t = this;
                "function" == typeof t.options.beforeUpdate && t.options.beforeUpdate.apply(this, [t.$elem]), t.watchVisibility(), t.updateItems(), t.calculateAll(), t.updatePosition(), t.updateControls(), t.eachMoveUpdate(), "function" == typeof t.options.afterUpdate && t.options.afterUpdate.apply(this, [t.$elem])
            },
            reload: function() {
                var t = this;
                e.setTimeout(function() {
                    t.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var t = this;
                return t.$elem.is(":visible") === !1 && (t.$elem.css({
                    opacity: 0
                }), e.clearInterval(t.autoPlayInterval), e.clearInterval(t.checkVisible), void(t.checkVisible = e.setInterval(function() {
                    t.$elem.is(":visible") && (t.reload(), t.$elem.animate({
                        opacity: 1
                    }, 200), e.clearInterval(t.checkVisible))
                }, 500)))
            },
            wrapItems: function() {
                var t = this;
                t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), t.wrapperOuter = t.$elem.find(".owl-wrapper-outer"), t.$elem.css("display", "block")
            },
            baseClass: function() {
                var t = this,
                    e = t.$elem.hasClass(t.options.baseClass),
                    n = t.$elem.hasClass(t.options.theme);
                e || t.$elem.addClass(t.options.baseClass), n || t.$elem.addClass(t.options.theme)
            },
            updateItems: function() {
                var e, n, r = this;
                if (r.options.responsive === !1) return !1;
                if (r.options.singleItem === !0) return r.options.items = r.orignalItems = 1, r.options.itemsCustom = !1, r.options.itemsDesktop = !1, r.options.itemsDesktopSmall = !1, r.options.itemsTablet = !1, r.options.itemsTabletSmall = !1, r.options.itemsMobile = !1, !1;
                if (e = t(r.options.responsiveBaseWidth).width(), e > (r.options.itemsDesktop[0] || r.orignalItems) && (r.options.items = r.orignalItems), r.options.itemsCustom !== !1)
                    for (r.options.itemsCustom.sort(function(t, e) {
                            return t[0] - e[0]
                        }), n = 0; n < r.options.itemsCustom.length; n += 1) r.options.itemsCustom[n][0] <= e && (r.options.items = r.options.itemsCustom[n][1]);
                else e <= r.options.itemsDesktop[0] && r.options.itemsDesktop !== !1 && (r.options.items = r.options.itemsDesktop[1]), e <= r.options.itemsDesktopSmall[0] && r.options.itemsDesktopSmall !== !1 && (r.options.items = r.options.itemsDesktopSmall[1]), e <= r.options.itemsTablet[0] && r.options.itemsTablet !== !1 && (r.options.items = r.options.itemsTablet[1]), e <= r.options.itemsTabletSmall[0] && r.options.itemsTabletSmall !== !1 && (r.options.items = r.options.itemsTabletSmall[1]), e <= r.options.itemsMobile[0] && r.options.itemsMobile !== !1 && (r.options.items = r.options.itemsMobile[1]);
                r.options.items > r.itemsAmount && r.options.itemsScaleUp === !0 && (r.options.items = r.itemsAmount)
            },
            response: function() {
                var n, r, i = this;
                return i.options.responsive === !0 && (r = t(e).width(), i.resizer = function() {
                    t(e).width() !== r && (i.options.autoPlay !== !1 && e.clearInterval(i.autoPlayInterval), e.clearTimeout(n), n = e.setTimeout(function() {
                        r = t(e).width(), i.updateVars()
                    }, i.options.responsiveRefreshRate))
                }, void t(e).resize(i.resizer))
            },
            updatePosition: function() {
                var t = this;
                t.jumpTo(t.currentItem), t.options.autoPlay !== !1 && t.checkAp()
            },
            appendItemsSizes: function() {
                var e = this,
                    n = 0,
                    r = e.itemsAmount - e.options.items;
                e.$owlItems.each(function(i) {
                    var o = t(this);
                    o.css({
                        width: e.itemWidth
                    }).data("owl-item", Number(i)), i % e.options.items !== 0 && i !== r || i > r || (n += 1), o.data("owl-roundPages", n)
                })
            },
            appendWrapperSizes: function() {
                var t = this,
                    e = t.$owlItems.length * t.itemWidth;
                t.$owlWrapper.css({
                    width: 2 * e,
                    left: 0
                }), t.appendItemsSizes()
            },
            calculateAll: function() {
                var t = this;
                t.calculateWidth(), t.appendWrapperSizes(), t.loops(), t.max()
            },
            calculateWidth: function() {
                var t = this;
                t.itemWidth = Math.round(t.$elem.width() / t.options.items)
            },
            max: function() {
                var t = this,
                    e = (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth) * -1;
                return t.options.items > t.itemsAmount ? (t.maximumItem = 0, e = 0, t.maximumPixels = 0) : (t.maximumItem = t.itemsAmount - t.options.items, t.maximumPixels = e), e
            },
            min: function() {
                return 0
            },
            loops: function() {
                var e, n, r, i = this,
                    o = 0,
                    a = 0;
                for (i.positionsInArray = [0], i.pagesInArray = [], e = 0; e < i.itemsAmount; e += 1) a += i.itemWidth, i.positionsInArray.push(-a), i.options.scrollPerPage === !0 && (n = t(i.$owlItems[e]), r = n.data("owl-roundPages"), r !== o && (i.pagesInArray[o] = i.positionsInArray[e], o = r))
            },
            buildControls: function() {
                var e = this;
                e.options.navigation !== !0 && e.options.pagination !== !0 || (e.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)), e.options.pagination === !0 && e.buildPagination(), e.options.navigation === !0 && e.buildButtons()
            },
            buildButtons: function() {
                var e = this,
                    n = t('<div class="owl-buttons"/>');
                e.owlControls.append(n), e.buttonPrev = t("<div/>", {
                    class: "owl-prev",
                    html: e.options.navigationText[0] || ""
                }), e.buttonNext = t("<div/>", {
                    class: "owl-next",
                    html: e.options.navigationText[1] || ""
                }), n.append(e.buttonPrev).append(e.buttonNext), n.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(t) {
                    t.preventDefault()
                }), n.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(n) {
                    n.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
                })
            },
            buildPagination: function() {
                var e = this;
                e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(n) {
                    n.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var e, n, r, i, o, a, s = this;
                if (s.options.pagination === !1) return !1;
                for (s.paginationWrapper.html(""), e = 0, n = s.itemsAmount - s.itemsAmount % s.options.items, i = 0; i < s.itemsAmount; i += 1) i % s.options.items === 0 && (e += 1, n === i && (r = s.itemsAmount - s.options.items), o = t("<div/>", {
                    class: "owl-page"
                }), a = t("<span></span>", {
                    text: s.options.paginationNumbers === !0 ? e : "",
                    class: s.options.paginationNumbers === !0 ? "owl-numbers" : ""
                }), o.append(a), o.data("owl-page", n === i ? r : i), o.data("owl-roundPages", e), s.paginationWrapper.append(o));
                s.checkPagination()
            },
            checkPagination: function() {
                var e = this;
                return e.options.pagination !== !1 && void e.paginationWrapper.find(".owl-page").each(function() {
                    t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                var t = this;
                return t.options.navigation !== !1 && void(t.options.rewindNav === !1 && (0 === t.currentItem && 0 === t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.addClass("disabled")) : 0 === t.currentItem && 0 !== t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.removeClass("disabled")) : t.currentItem === t.maximumItem ? (t.buttonPrev.removeClass("disabled"), t.buttonNext.addClass("disabled")) : 0 !== t.currentItem && t.currentItem !== t.maximumItem && (t.buttonPrev.removeClass("disabled"), t.buttonNext.removeClass("disabled"))))
            },
            updateControls: function() {
                var t = this;
                t.updatePagination(), t.checkNavigation(), t.owlControls && (t.options.items >= t.itemsAmount ? t.owlControls.hide() : t.owlControls.show())
            },
            destroyControls: function() {
                var t = this;
                t.owlControls && t.owlControls.remove()
            },
            next: function(t) {
                var e = this;
                if (e.isTransition) return !1;
                if (e.currentItem += e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem > e.maximumItem + (e.options.scrollPerPage === !0 ? e.options.items - 1 : 0)) {
                    if (e.options.rewindNav !== !0) return e.currentItem = e.maximumItem, !1;
                    e.currentItem = 0, t = "rewind"
                }
                e.goTo(e.currentItem, t)
            },
            prev: function(t) {
                var e = this;
                if (e.isTransition) return !1;
                if (e.options.scrollPerPage === !0 && e.currentItem > 0 && e.currentItem < e.options.items ? e.currentItem = 0 : e.currentItem -= e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem < 0) {
                    if (e.options.rewindNav !== !0) return e.currentItem = 0, !1;
                    e.currentItem = e.maximumItem, t = "rewind"
                }
                e.goTo(e.currentItem, t)
            },
            goTo: function(t, n, r) {
                var i, o = this;
                return !o.isTransition && ("function" == typeof o.options.beforeMove && o.options.beforeMove.apply(this, [o.$elem]), t >= o.maximumItem ? t = o.maximumItem : t <= 0 && (t = 0), o.currentItem = o.owl.currentItem = t, o.options.transitionStyle !== !1 && "drag" !== r && 1 === o.options.items && o.browser.support3d === !0 ? (o.swapSpeed(0), o.browser.support3d === !0 ? o.transition3d(o.positionsInArray[t]) : o.css2slide(o.positionsInArray[t], 1), o.afterGo(), o.singleItemTransition(), !1) : (i = o.positionsInArray[t], o.browser.support3d === !0 ? (o.isCss3Finish = !1, n === !0 ? (o.swapSpeed("paginationSpeed"), e.setTimeout(function() {
                    o.isCss3Finish = !0
                }, o.options.paginationSpeed)) : "rewind" === n ? (o.swapSpeed(o.options.rewindSpeed), e.setTimeout(function() {
                    o.isCss3Finish = !0
                }, o.options.rewindSpeed)) : (o.swapSpeed("slideSpeed"), e.setTimeout(function() {
                    o.isCss3Finish = !0
                }, o.options.slideSpeed)), o.transition3d(i)) : n === !0 ? o.css2slide(i, o.options.paginationSpeed) : "rewind" === n ? o.css2slide(i, o.options.rewindSpeed) : o.css2slide(i, o.options.slideSpeed), void o.afterGo()))
            },
            jumpTo: function(t) {
                var e = this;
                "function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]), t >= e.maximumItem || t === -1 ? t = e.maximumItem : t <= 0 && (t = 0), e.swapSpeed(0), e.browser.support3d === !0 ? e.transition3d(e.positionsInArray[t]) : e.css2slide(e.positionsInArray[t], 1), e.currentItem = e.owl.currentItem = t, e.afterGo()
            },
            afterGo: function() {
                var t = this;
                t.prevArr.push(t.currentItem), t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2], t.prevArr.shift(0), t.prevItem !== t.currentItem && (t.checkPagination(), t.checkNavigation(), t.eachMoveUpdate(), t.options.autoPlay !== !1 && t.checkAp()), "function" == typeof t.options.afterMove && t.prevItem !== t.currentItem && t.options.afterMove.apply(this, [t.$elem])
            },
            stop: function() {
                var t = this;
                t.apStatus = "stop", e.clearInterval(t.autoPlayInterval)
            },
            checkAp: function() {
                var t = this;
                "stop" !== t.apStatus && t.play()
            },
            play: function() {
                var t = this;
                return t.apStatus = "play", t.options.autoPlay !== !1 && (e.clearInterval(t.autoPlayInterval), void(t.autoPlayInterval = e.setInterval(function() {
                    t.next(!0)
                }, t.options.autoPlay)))
            },
            swapSpeed: function(t) {
                var e = this;
                "slideSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)) : "paginationSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)) : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t))
            },
            addCssSpeed: function(t) {
                return {
                    "-webkit-transition": "all " + t + "ms ease",
                    "-moz-transition": "all " + t + "ms ease",
                    "-o-transition": "all " + t + "ms ease",
                    transition: "all " + t + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(t) {
                return {
                    "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                    transform: "translate3d(" + t + "px, 0px,0px)"
                }
            },
            transition3d: function(t) {
                var e = this;
                e.$owlWrapper.css(e.doTranslate(t))
            },
            css2move: function(t) {
                var e = this;
                e.$owlWrapper.css({
                    left: t
                })
            },
            css2slide: function(t, e) {
                var n = this;
                n.isCssFinish = !1, n.$owlWrapper.stop(!0, !0).animate({
                    left: t
                }, {
                    duration: e || n.options.slideSpeed,
                    complete: function() {
                        n.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var t, r, i, o, a = this,
                    s = "translate3d(0px, 0px, 0px)",
                    l = n.createElement("div");
                l.style.cssText = "  -moz-transform:" + s + "; -ms-transform:" + s + "; -o-transform:" + s + "; -webkit-transform:" + s + "; transform:" + s, t = /translate3d\(0px, 0px, 0px\)/g, r = l.style.cssText.match(t), i = null !== r && 1 === r.length, o = "ontouchstart" in e || e.navigator.msMaxTouchPoints, a.browser = {
                    support3d: i,
                    isTouch: o
                }
            },
            moveEvents: function() {
                var t = this;
                t.options.mouseDrag === !1 && t.options.touchDrag === !1 || (t.gestures(), t.disabledEvents())
            },
            eventTypes: function() {
                var t = this,
                    e = ["s", "e", "x"];
                t.ev_types = {}, t.options.mouseDrag === !0 && t.options.touchDrag === !0 ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : t.options.mouseDrag === !1 && t.options.touchDrag === !0 ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : t.options.mouseDrag === !0 && t.options.touchDrag === !1 && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), t.ev_types.start = e[0], t.ev_types.move = e[1], t.ev_types.end = e[2]
            },
            disabledEvents: function() {
                var e = this;
                e.$elem.on("dragstart.owl", function(t) {
                    t.preventDefault()
                }), e.$elem.on("mousedown.disableTextSelect", function(e) {
                    return t(e.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function r(t) {
                    if (void 0 !== t.touches) return {
                        x: t.touches[0].pageX,
                        y: t.touches[0].pageY
                    };
                    if (void 0 === t.touches) {
                        if (void 0 !== t.pageX) return {
                            x: t.pageX,
                            y: t.pageY
                        };
                        if (void 0 === t.pageX) return {
                            x: t.clientX,
                            y: t.clientY
                        }
                    }
                }

                function i(e) {
                    "on" === e ? (t(n).on(l.ev_types.move, a), t(n).on(l.ev_types.end, s)) : "off" === e && (t(n).off(l.ev_types.move), t(n).off(l.ev_types.end))
                }

                function o(n) {
                    var o, a = n.originalEvent || n || e.event;
                    if (3 === a.which) return !1;
                    if (!(l.itemsAmount <= l.options.items)) {
                        if (l.isCssFinish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        if (l.isCss3Finish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        l.options.autoPlay !== !1 && e.clearInterval(l.autoPlayInterval), l.browser.isTouch === !0 || l.$owlWrapper.hasClass("grabbing") || l.$owlWrapper.addClass("grabbing"), l.newPosX = 0, l.newRelativeX = 0, t(this).css(l.removeTransition()), o = t(this).position(), u.relativePos = o.left, u.offsetX = r(a).x - o.left, u.offsetY = r(a).y - o.top, i("on"), u.sliding = !1, u.targetElement = a.target || a.srcElement
                    }
                }

                function a(i) {
                    var o, a, s = i.originalEvent || i || e.event;
                    l.newPosX = r(s).x - u.offsetX, l.newPosY = r(s).y - u.offsetY, l.newRelativeX = l.newPosX - u.relativePos, "function" == typeof l.options.startDragging && u.dragging !== !0 && 0 !== l.newRelativeX && (u.dragging = !0, l.options.startDragging.apply(l, [l.$elem])), (l.newRelativeX > 8 || l.newRelativeX < -8) && l.browser.isTouch === !0 && (void 0 !== s.preventDefault ? s.preventDefault() : s.returnValue = !1, u.sliding = !0), (l.newPosY > 10 || l.newPosY < -10) && u.sliding === !1 && t(n).off("touchmove.owl"), o = function() {
                        return l.newRelativeX / 5
                    }, a = function() {
                        return l.maximumPixels + l.newRelativeX / 5
                    }, l.newPosX = Math.max(Math.min(l.newPosX, o()), a()), l.browser.support3d === !0 ? l.transition3d(l.newPosX) : l.css2move(l.newPosX)
                }

                function s(n) {
                    var r, o, a, s = n.originalEvent || n || e.event;
                    s.target = s.target || s.srcElement, u.dragging = !1, l.browser.isTouch !== !0 && l.$owlWrapper.removeClass("grabbing"), l.newRelativeX < 0 ? l.dragDirection = l.owl.dragDirection = "left" : l.dragDirection = l.owl.dragDirection = "right", 0 !== l.newRelativeX && (r = l.getNewPosition(), l.goTo(r, !1, "drag"), u.targetElement === s.target && l.browser.isTouch !== !0 && (t(s.target).on("click.disable", function(e) {
                        e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable")
                    }), o = t._data(s.target, "events").click, a = o.pop(), o.splice(0, 0, a))), i("off")
                }
                var l = this,
                    u = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                l.isCssFinish = !0, l.$elem.on(l.ev_types.start, ".owl-wrapper", o)
            },
            getNewPosition: function() {
                var t = this,
                    e = t.closestItem();
                return e > t.maximumItem ? (t.currentItem = t.maximumItem, e = t.maximumItem) : t.newPosX >= 0 && (e = 0, t.currentItem = 0), e
            },
            closestItem: function() {
                var e = this,
                    n = e.options.scrollPerPage === !0 ? e.pagesInArray : e.positionsInArray,
                    r = e.newPosX,
                    i = null;
                return t.each(n, function(o, a) {
                    r - e.itemWidth / 20 > n[o + 1] && r - e.itemWidth / 20 < a && "left" === e.moveDirection() ? (i = a, e.options.scrollPerPage === !0 ? e.currentItem = t.inArray(i, e.positionsInArray) : e.currentItem = o) : r + e.itemWidth / 20 < a && r + e.itemWidth / 20 > (n[o + 1] || n[o] - e.itemWidth) && "right" === e.moveDirection() && (e.options.scrollPerPage === !0 ? (i = n[o + 1] || n[n.length - 1], e.currentItem = t.inArray(i, e.positionsInArray)) : (i = n[o + 1], e.currentItem = o + 1))
                }), e.currentItem
            },
            moveDirection: function() {
                var t, e = this;
                return e.newRelativeX < 0 ? (t = "right", e.playDirection = "next") : (t = "left", e.playDirection = "prev"), t
            },
            customEvents: function() {
                var t = this;
                t.$elem.on("owl.next", function() {
                    t.next()
                }), t.$elem.on("owl.prev", function() {
                    t.prev()
                }), t.$elem.on("owl.play", function(e, n) {
                    t.options.autoPlay = n, t.play(), t.hoverStatus = "play"
                }), t.$elem.on("owl.stop", function() {
                    t.stop(), t.hoverStatus = "stop"
                }), t.$elem.on("owl.goTo", function(e, n) {
                    t.goTo(n)
                }), t.$elem.on("owl.jumpTo", function(e, n) {
                    t.jumpTo(n)
                })
            },
            stopOnHover: function() {
                var t = this;
                t.options.stopOnHover === !0 && t.browser.isTouch !== !0 && t.options.autoPlay !== !1 && (t.$elem.on("mouseover", function() {
                    t.stop()
                }), t.$elem.on("mouseout", function() {
                    "stop" !== t.hoverStatus && t.play()
                }))
            },
            lazyLoad: function() {
                var e, n, r, i, o, a = this;
                if (a.options.lazyLoad === !1) return !1;
                for (e = 0; e < a.itemsAmount; e += 1) n = t(a.$owlItems[e]), "loaded" !== n.data("owl-loaded") && (r = n.data("owl-item"), i = n.find(".lazyOwl"), "string" == typeof i.data("src") ? (void 0 === n.data("owl-loaded") && (i.hide(), n.addClass("loading").data("owl-loaded", "checked")), o = a.options.lazyFollow !== !0 || r >= a.currentItem, o && r < a.currentItem + a.options.items && i.length && a.lazyPreload(n, i)) : n.data("owl-loaded", "loaded"))
            },
            lazyPreload: function(t, n) {
                function r() {
                    t.data("owl-loaded", "loaded").removeClass("loading"), n.removeAttr("data-src"), "fade" === a.options.lazyEffect ? n.fadeIn(400) : n.show(), "function" == typeof a.options.afterLazyLoad && a.options.afterLazyLoad.apply(this, [a.$elem])
                }

                function i() {
                    s += 1, a.completeImg(n.get(0)) || o === !0 ? r() : s <= 100 ? e.setTimeout(i, 100) : r()
                }
                var o, a = this,
                    s = 0;
                "DIV" === n.prop("tagName") ? (n.css("background-image", "url(" + n.data("src") + ")"), o = !0) : n[0].src = n.data("src"), i()
            },
            autoHeight: function() {
                function n() {
                    var n = t(o.$owlItems[o.currentItem]).height();
                    o.wrapperOuter.css("height", n + "px"), o.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function() {
                        o.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function r() {
                    i += 1, o.completeImg(a.get(0)) ? n() : i <= 100 ? e.setTimeout(r, 100) : o.wrapperOuter.css("height", "")
                }
                var i, o = this,
                    a = t(o.$owlItems[o.currentItem]).find("img");
                void 0 !== a.get(0) ? (i = 0, r()) : n()
            },
            completeImg: function(t) {
                var e;
                return !!t.complete && (e = typeof t.naturalWidth, "undefined" === e || 0 !== t.naturalWidth)
            },
            onVisibleItems: function() {
                var e, n = this;
                for (n.options.addClassActive === !0 && n.$owlItems.removeClass("active"), n.visibleItems = [], e = n.currentItem; e < n.currentItem + n.options.items; e += 1) n.visibleItems.push(e), n.options.addClassActive === !0 && t(n.$owlItems[e]).addClass("active");
                n.owl.visibleItems = n.visibleItems
            },
            transitionTypes: function(t) {
                var e = this;
                e.outClass = "owl-" + t + "-out", e.inClass = "owl-" + t + "-in"
            },
            singleItemTransition: function() {
                function t(t) {
                    return {
                        position: "relative",
                        left: t + "px"
                    }
                }
                var e = this,
                    n = e.outClass,
                    r = e.inClass,
                    i = e.$owlItems.eq(e.currentItem),
                    o = e.$owlItems.eq(e.prevItem),
                    a = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                    s = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2,
                    l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                e.isTransition = !0, e.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": s + "px",
                    "-moz-perspective-origin": s + "px",
                    "perspective-origin": s + "px"
                }), o.css(t(a, 10)).addClass(n).on(l, function() {
                    e.endPrev = !0, o.off(l), e.clearTransStyle(o, n)
                }), i.addClass(r).on(l, function() {
                    e.endCurrent = !0, i.off(l), e.clearTransStyle(i, r)
                })
            },
            clearTransStyle: function(t, e) {
                var n = this;
                t.css({
                    position: "",
                    left: ""
                }).removeClass(e), n.endPrev && n.endCurrent && (n.$owlWrapper.removeClass("owl-origin"), n.endPrev = !1, n.endCurrent = !1, n.isTransition = !1)
            },
            owlStatus: function() {
                var t = this;
                t.owl = {
                    userOptions: t.userOptions,
                    baseElement: t.$elem,
                    userItems: t.$userItems,
                    owlItems: t.$owlItems,
                    currentItem: t.currentItem,
                    prevItem: t.prevItem,
                    visibleItems: t.visibleItems,
                    isTouch: t.browser.isTouch,
                    browser: t.browser,
                    dragDirection: t.dragDirection
                }
            },
            clearEvents: function() {
                var r = this;
                r.$elem.off(".owl owl mousedown.disableTextSelect"), t(n).off(".owl owl"), t(e).off("resize", r.resizer)
            },
            unWrap: function() {
                var t = this;
                0 !== t.$elem.children().length && (t.$owlWrapper.unwrap(), t.$userItems.unwrap().unwrap(), t.owlControls && t.owlControls.remove()), t.clearEvents(), t.$elem.attr("style", t.$elem.data("owl-originalStyles") || "").attr("class", t.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                var t = this;
                t.stop(), e.clearInterval(t.checkVisible), t.unWrap(), t.$elem.removeData()
            },
            reinit: function(e) {
                var n = this,
                    r = t.extend({}, n.userOptions, e);
                n.unWrap(), n.init(r, n.$elem)
            },
            addItem: function(t, e) {
                var n, r = this;
                return !!t && (0 === r.$elem.children().length ? (r.$elem.append(t), r.setVars(), !1) : (r.unWrap(), n = void 0 === e || e === -1 ? -1 : e, n >= r.$userItems.length || n === -1 ? r.$userItems.eq(-1).after(t) : r.$userItems.eq(n).before(t), void r.setVars()))
            },
            removeItem: function(t) {
                var e, n = this;
                return 0 !== n.$elem.children().length && (e = void 0 === t || t === -1 ? -1 : t, n.unWrap(), n.$userItems.eq(e).remove(), void n.setVars())
            }
        };
        t.fn.owlCarousel = function(e) {
            return this.each(function() {
                if (t(this).data("owl-init") === !0) return !1;
                t(this).data("owl-init", !0);
                var n = Object.create(r);
                n.init(e, this), t.data(this, "owlCarousel", n)
            })
        }, t.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: e,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document),
    function(t) {
        var e, n, r = "0.4.2",
            i = "hasOwnProperty",
            o = /[\.\/]/,
            a = "*",
            s = function() {},
            l = function(t, e) {
                return t - e
            },
            u = {
                n: {}
            },
            c = function(t, r) {
                t = String(t);
                var i, o = n,
                    a = Array.prototype.slice.call(arguments, 2),
                    s = c.listeners(t),
                    u = 0,
                    h = [],
                    p = {},
                    f = [],
                    d = e;
                e = t, n = 0;
                for (var g = 0, v = s.length; g < v; g++) "zIndex" in s[g] && (h.push(s[g].zIndex), s[g].zIndex < 0 && (p[s[g].zIndex] = s[g]));
                for (h.sort(l); h[u] < 0;)
                    if (i = p[h[u++]], f.push(i.apply(r, a)), n) return n = o, f;
                for (g = 0; g < v; g++)
                    if (i = s[g], "zIndex" in i)
                        if (i.zIndex == h[u]) {
                            if (f.push(i.apply(r, a)), n) break;
                            do
                                if (u++, i = p[h[u]], i && f.push(i.apply(r, a)), n) break;
                            while (i)
                        } else p[i.zIndex] = i;
                else if (f.push(i.apply(r, a)), n) break;
                return n = o, e = d, f.length ? f : null
            };
        c._events = u, c.listeners = function(t) {
            var e, n, r, i, s, l, c, h, p = t.split(o),
                f = u,
                d = [f],
                g = [];
            for (i = 0, s = p.length; i < s; i++) {
                for (h = [], l = 0, c = d.length; l < c; l++)
                    for (f = d[l].n, n = [f[p[i]], f[a]], r = 2; r--;) e = n[r], e && (h.push(e), g = g.concat(e.f || []));
                d = h
            }
            return g
        }, c.on = function(t, e) {
            if (t = String(t), "function" != typeof e) return function() {};
            for (var n = t.split(o), r = u, i = 0, a = n.length; i < a; i++) r = r.n, r = r.hasOwnProperty(n[i]) && r[n[i]] || (r[n[i]] = {
                n: {}
            });
            for (r.f = r.f || [], i = 0, a = r.f.length; i < a; i++)
                if (r.f[i] == e) return s;
            return r.f.push(e),
                function(t) {
                    +t == +t && (e.zIndex = +t)
                }
        }, c.f = function(t) {
            var e = [].slice.call(arguments, 1);
            return function() {
                c.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
            }
        }, c.stop = function() {
            n = 1
        }, c.nt = function(t) {
            return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
        }, c.nts = function() {
            return e.split(o)
        }, c.off = c.unbind = function(t, e) {
            if (!t) return void(c._events = u = {
                n: {}
            });
            var n, r, s, l, h, p, f, d = t.split(o),
                g = [u];
            for (l = 0, h = d.length; l < h; l++)
                for (p = 0; p < g.length; p += s.length - 2) {
                    if (s = [p, 1], n = g[p].n, d[l] != a) n[d[l]] && s.push(n[d[l]]);
                    else
                        for (r in n) n[i](r) && s.push(n[r]);
                    g.splice.apply(g, s)
                }
            for (l = 0, h = g.length; l < h; l++)
                for (n = g[l]; n.n;) {
                    if (e) {
                        if (n.f) {
                            for (p = 0, f = n.f.length; p < f; p++)
                                if (n.f[p] == e) {
                                    n.f.splice(p, 1);
                                    break
                                }!n.f.length && delete n.f
                        }
                        for (r in n.n)
                            if (n.n[i](r) && n.n[r].f) {
                                var v = n.n[r].f;
                                for (p = 0, f = v.length; p < f; p++)
                                    if (v[p] == e) {
                                        v.splice(p, 1);
                                        break
                                    }!v.length && delete n.n[r].f
                            }
                    } else {
                        delete n.f;
                        for (r in n.n) n.n[i](r) && n.n[r].f && delete n.n[r].f
                    }
                    n = n.n
                }
        }, c.once = function(t, e) {
            var n = function() {
                return c.unbind(t, n), e.apply(this, arguments)
            };
            return c.on(t, n)
        }, c.version = r, c.toString = function() {
            return "You are running Eve " + r
        }, "undefined" != typeof module && module.exports ? module.exports = c : "undefined" != typeof define ? define("eve", [], function() {
            return c
        }) : t.eve = c
    }(window || this),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["eve"], function(n) {
            return e(t, n)
        }) : e(t, t.eve || "function" == typeof require && require("eve"))
    }(this, function(t, e) {
        function n(t) {
            if (n.is(t, "function")) return b ? t() : e.on("raphael.DOMload", t);
            if (n.is(t, V)) return n._engine.create[E](n, t.splice(0, 3 + n.is(t[0], U))).add(t);
            var r = Array.prototype.slice.call(arguments, 0);
            if (n.is(r[r.length - 1], "function")) {
                var i = r.pop();
                return b ? i.call(n._engine.create[E](n, r)) : e.on("raphael.DOMload", function() {
                    i.call(n._engine.create[E](n, r))
                })
            }
            return n._engine.create[E](n, arguments)
        }

        function r(t) {
            if ("function" == typeof t || Object(t) !== t) return t;
            var e = new t.constructor;
            for (var n in t) t[M](n) && (e[n] = r(t[n]));
            return e
        }

        function i(t, e) {
            for (var n = 0, r = t.length; n < r; n++)
                if (t[n] === e) return t.push(t.splice(n, 1)[0])
        }

        function o(t, e, n) {
            function r() {
                var o = Array.prototype.slice.call(arguments, 0),
                    a = o.join("␀"),
                    s = r.cache = r.cache || {},
                    l = r.count = r.count || [];
                return s[M](a) ? (i(l, a), n ? n(s[a]) : s[a]) : (l.length >= 1e3 && delete s[l.shift()], l.push(a), s[a] = t[E](e, o), n ? n(s[a]) : s[a])
            }
            return r
        }

        function a() {
            return this.hex
        }

        function s(t, e) {
            for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                var o = [{
                    x: +t[r - 2],
                    y: +t[r - 1]
                }, {
                    x: +t[r],
                    y: +t[r + 1]
                }, {
                    x: +t[r + 2],
                    y: +t[r + 3]
                }, {
                    x: +t[r + 4],
                    y: +t[r + 5]
                }];
                e ? r ? i - 4 == r ? o[3] = {
                    x: +t[0],
                    y: +t[1]
                } : i - 2 == r && (o[2] = {
                    x: +t[0],
                    y: +t[1]
                }, o[3] = {
                    x: +t[2],
                    y: +t[3]
                }) : o[0] = {
                    x: +t[i - 2],
                    y: +t[i - 1]
                } : i - 4 == r ? o[3] = o[2] : r || (o[0] = {
                    x: +t[r],
                    y: +t[r + 1]
                }), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
            }
            return n
        }

        function l(t, e, n, r, i) {
            var o = -3 * e + 9 * n - 9 * r + 3 * i,
                a = t * o + 6 * e - 12 * n + 6 * r;
            return t * a - 3 * e + 3 * n
        }

        function u(t, e, n, r, i, o, a, s, u) {
            null == u && (u = 1), u = u > 1 ? 1 : u < 0 ? 0 : u;
            for (var c = u / 2, h = 12, p = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], f = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, g = 0; g < h; g++) {
                var v = c * p[g] + c,
                    m = l(v, t, n, i, a),
                    y = l(v, e, r, o, s),
                    x = m * m + y * y;
                d += f[g] * z.sqrt(x)
            }
            return c * d
        }

        function c(t, e, n, r, i, o, a, s, l) {
            if (!(l < 0 || u(t, e, n, r, i, o, a, s) < l)) {
                var c, h = 1,
                    p = h / 2,
                    f = h - p,
                    d = .01;
                for (c = u(t, e, n, r, i, o, a, s, f); O(c - l) > d;) p /= 2, f += (c < l ? 1 : -1) * p, c = u(t, e, n, r, i, o, a, s, f);
                return f
            }
        }

        function h(t, e, n, r, i, o, a, s) {
            if (!(B(t, n) < q(i, a) || q(t, n) > B(i, a) || B(e, r) < q(o, s) || q(e, r) > B(o, s))) {
                var l = (t * r - e * n) * (i - a) - (t - n) * (i * s - o * a),
                    u = (t * r - e * n) * (o - s) - (e - r) * (i * s - o * a),
                    c = (t - n) * (o - s) - (e - r) * (i - a);
                if (c) {
                    var h = l / c,
                        p = u / c,
                        f = +h.toFixed(2),
                        d = +p.toFixed(2);
                    if (!(f < +q(t, n).toFixed(2) || f > +B(t, n).toFixed(2) || f < +q(i, a).toFixed(2) || f > +B(i, a).toFixed(2) || d < +q(e, r).toFixed(2) || d > +B(e, r).toFixed(2) || d < +q(o, s).toFixed(2) || d > +B(o, s).toFixed(2))) return {
                        x: h,
                        y: p
                    }
                }
            }
        }

        function p(t, e, r) {
            var i = n.bezierBBox(t),
                o = n.bezierBBox(e);
            if (!n.isBBoxIntersect(i, o)) return r ? 0 : [];
            for (var a = u.apply(0, t), s = u.apply(0, e), l = B(~~(a / 5), 1), c = B(~~(s / 5), 1), p = [], f = [], d = {}, g = r ? 0 : [], v = 0; v < l + 1; v++) {
                var m = n.findDotsAtSegment.apply(n, t.concat(v / l));
                p.push({
                    x: m.x,
                    y: m.y,
                    t: v / l
                })
            }
            for (v = 0; v < c + 1; v++) m = n.findDotsAtSegment.apply(n, e.concat(v / c)), f.push({
                x: m.x,
                y: m.y,
                t: v / c
            });
            for (v = 0; v < l; v++)
                for (var y = 0; y < c; y++) {
                    var x = p[v],
                        b = p[v + 1],
                        _ = f[y],
                        w = f[y + 1],
                        T = O(b.x - x.x) < .001 ? "y" : "x",
                        C = O(w.x - _.x) < .001 ? "y" : "x",
                        M = h(x.x, x.y, b.x, b.y, _.x, _.y, w.x, w.y);
                    if (M) {
                        if (d[M.x.toFixed(4)] == M.y.toFixed(4)) continue;
                        d[M.x.toFixed(4)] = M.y.toFixed(4);
                        var k = x.t + O((M[T] - x[T]) / (b[T] - x[T])) * (b.t - x.t),
                            S = _.t + O((M[C] - _[C]) / (w[C] - _[C])) * (w.t - _.t);
                        k >= 0 && k <= 1.001 && S >= 0 && S <= 1.001 && (r ? g++ : g.push({
                            x: M.x,
                            y: M.y,
                            t1: q(k, 1),
                            t2: q(S, 1)
                        }))
                    }
                }
            return g
        }

        function f(t, e, r) {
            t = n._path2curve(t), e = n._path2curve(e);
            for (var i, o, a, s, l, u, c, h, f, d, g = r ? 0 : [], v = 0, m = t.length; v < m; v++) {
                var y = t[v];
                if ("M" == y[0]) i = l = y[1], o = u = y[2];
                else {
                    "C" == y[0] ? (f = [i, o].concat(y.slice(1)), i = f[6], o = f[7]) : (f = [i, o, i, o, l, u, l, u], i = l, o = u);
                    for (var x = 0, b = e.length; x < b; x++) {
                        var _ = e[x];
                        if ("M" == _[0]) a = c = _[1], s = h = _[2];
                        else {
                            "C" == _[0] ? (d = [a, s].concat(_.slice(1)), a = d[6], s = d[7]) : (d = [a, s, a, s, c, h, c, h], a = c, s = h);
                            var w = p(f, d, r);
                            if (r) g += w;
                            else {
                                for (var T = 0, C = w.length; T < C; T++) w[T].segment1 = v, w[T].segment2 = x, w[T].bez1 = f, w[T].bez2 = d;
                                g = g.concat(w)
                            }
                        }
                    }
                }
            }
            return g
        }

        function d(t, e, n, r, i, o) {
            null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +r, this.e = +i, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
        }

        function g() {
            return this.x + P + this.y + P + this.width + " × " + this.height
        }

        function v(t, e, n, r, i, o) {
            function a(t) {
                return ((h * t + c) * t + u) * t
            }

            function s(t, e) {
                var n = l(t, e);
                return ((d * n + f) * n + p) * n
            }

            function l(t, e) {
                var n, r, i, o, s, l;
                for (i = t, l = 0; l < 8; l++) {
                    if (o = a(i) - t, O(o) < e) return i;
                    if (s = (3 * h * i + 2 * c) * i + u, O(s) < 1e-6) break;
                    i -= o / s
                }
                if (n = 0, r = 1, i = t, i < n) return n;
                if (i > r) return r;
                for (; n < r;) {
                    if (o = a(i), O(o - t) < e) return i;
                    t > o ? n = i : r = i, i = (r - n) / 2 + n
                }
                return i
            }
            var u = 3 * e,
                c = 3 * (r - e) - u,
                h = 1 - u - c,
                p = 3 * n,
                f = 3 * (i - n) - p,
                d = 1 - p - f;
            return s(t, 1 / (200 * o))
        }

        function m(t, e) {
            var n = [],
                r = {};
            if (this.ms = e, this.times = 1, t) {
                for (var i in t) t[M](i) && (r[Q(i)] = t[i], n.push(Q(i)));
                n.sort(ht)
            }
            this.anim = r, this.top = n[n.length - 1], this.percents = n
        }

        function y(t, r, i, o, a, s) {
            i = Q(i);
            var l, u, c, h, p, f, g = t.ms,
                m = {},
                y = {},
                x = {};
            if (o)
                for (_ = 0, T = le.length; _ < T; _++) {
                    var b = le[_];
                    if (b.el.id == r.id && b.anim == t) {
                        b.percent != i ? (le.splice(_, 1), c = 1) : u = b, r.attr(b.totalOrigin);
                        break
                    }
                } else o = +y;
            for (var _ = 0, T = t.percents.length; _ < T; _++) {
                if (t.percents[_] == i || t.percents[_] > o * t.top) {
                    i = t.percents[_], p = t.percents[_ - 1] || 0, g = g / t.top * (i - p), h = t.percents[_ + 1], l = t.anim[i];
                    break
                }
                o && r.attr(t.anim[t.percents[_]])
            }
            if (l) {
                if (u) u.initstatus = o, u.start = new Date - u.ms * o;
                else {
                    for (var C in l)
                        if (l[M](C) && (rt[M](C) || r.paper.customAttributes[M](C))) switch (m[C] = r.attr(C), null == m[C] && (m[C] = nt[C]), y[C] = l[C], rt[C]) {
                            case U:
                                x[C] = (y[C] - m[C]) / g;
                                break;
                            case "colour":
                                m[C] = n.getRGB(m[C]);
                                var k = n.getRGB(y[C]);
                                x[C] = {
                                    r: (k.r - m[C].r) / g,
                                    g: (k.g - m[C].g) / g,
                                    b: (k.b - m[C].b) / g
                                };
                                break;
                            case "path":
                                var S = jt(m[C], y[C]),
                                    A = S[1];
                                for (m[C] = S[0], x[C] = [], _ = 0, T = m[C].length; _ < T; _++) {
                                    x[C][_] = [0];
                                    for (var E = 1, L = m[C][_].length; E < L; E++) x[C][_][E] = (A[_][E] - m[C][_][E]) / g
                                }
                                break;
                            case "transform":
                                var I = r._,
                                    P = qt(I[C], y[C]);
                                if (P)
                                    for (m[C] = P.from, y[C] = P.to, x[C] = [], x[C].real = !0, _ = 0, T = m[C].length; _ < T; _++)
                                        for (x[C][_] = [m[C][_][0]], E = 1, L = m[C][_].length; E < L; E++) x[C][_][E] = (y[C][_][E] - m[C][_][E]) / g;
                                else {
                                    var j = r.matrix || new d,
                                        $ = {
                                            _: {
                                                transform: I.transform
                                            },
                                            getBBox: function() {
                                                return r.getBBox(1)
                                            }
                                        };
                                    m[C] = [j.a, j.b, j.c, j.d, j.e, j.f], zt($, y[C]), y[C] = $._.transform, x[C] = [($.matrix.a - j.a) / g, ($.matrix.b - j.b) / g, ($.matrix.c - j.c) / g, ($.matrix.d - j.d) / g, ($.matrix.e - j.e) / g, ($.matrix.f - j.f) / g]
                                }
                                break;
                            case "csv":
                                var R = D(l[C])[F](w),
                                    z = D(m[C])[F](w);
                                if ("clip-rect" == C)
                                    for (m[C] = z, x[C] = [], _ = z.length; _--;) x[C][_] = (R[_] - m[C][_]) / g;
                                y[C] = R;
                                break;
                            default:
                                for (R = [][N](l[C]), z = [][N](m[C]), x[C] = [], _ = r.paper.customAttributes[C].length; _--;) x[C][_] = ((R[_] || 0) - (z[_] || 0)) / g
                        }
                        var B = l.easing,
                            q = n.easing_formulas[B];
                    if (!q)
                        if (q = D(B).match(K), q && 5 == q.length) {
                            var O = q;
                            q = function(t) {
                                return v(t, +O[1], +O[2], +O[3], +O[4], g)
                            }
                        } else q = ft;
                    if (f = l.start || t.start || +new Date, b = {
                            anim: t,
                            percent: i,
                            timestamp: f,
                            start: f + (t.del || 0),
                            status: 0,
                            initstatus: o || 0,
                            stop: !1,
                            ms: g,
                            easing: q,
                            from: m,
                            diff: x,
                            to: y,
                            el: r,
                            callback: l.callback,
                            prev: p,
                            next: h,
                            repeat: s || t.times,
                            origin: r.attr(),
                            totalOrigin: a
                        }, le.push(b), o && !u && !c && (b.stop = !0, b.start = new Date - g * o, 1 == le.length)) return ce();
                    c && (b.start = new Date - b.ms * o), 1 == le.length && ue(ce)
                }
                e("raphael.anim.start." + r.id, r, t)
            }
        }

        function x(t) {
            for (var e = 0; e < le.length; e++) le[e].el.paper == t && le.splice(e--, 1)
        }
        n.version = "2.1.2", n.eve = e;
        var b, _, w = /[, ]+/,
            T = {
                circle: 1,
                rect: 1,
                path: 1,
                ellipse: 1,
                text: 1,
                image: 1
            },
            C = /\{(\d+)\}/g,
            M = "hasOwnProperty",
            k = {
                doc: document,
                win: t
            },
            S = {
                was: Object.prototype[M].call(k.win, "Raphael"),
                is: k.win.Raphael
            },
            A = function() {
                this.ca = this.customAttributes = {}
            },
            E = "apply",
            N = "concat",
            L = "ontouchstart" in k.win || k.win.DocumentTouch && k.doc instanceof DocumentTouch,
            I = "",
            P = " ",
            D = String,
            F = "split",
            j = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [F](P),
            $ = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            },
            R = D.prototype.toLowerCase,
            z = Math,
            B = z.max,
            q = z.min,
            O = z.abs,
            H = z.pow,
            W = z.PI,
            U = "number",
            Y = "string",
            V = "array",
            G = Object.prototype.toString,
            X = (n._ISURL = /^url\(['"]?(.+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
            J = {
                NaN: 1,
                Infinity: 1,
                "-Infinity": 1
            },
            K = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
            Z = z.round,
            Q = parseFloat,
            tt = parseInt,
            et = D.prototype.toUpperCase,
            nt = n._availableAttrs = {
                "arrow-end": "none",
                "arrow-start": "none",
                blur: 0,
                "clip-rect": "0 0 1e9 1e9",
                cursor: "default",
                cx: 0,
                cy: 0,
                fill: "#fff",
                "fill-opacity": 1,
                font: '10px "Arial"',
                "font-family": '"Arial"',
                "font-size": "10",
                "font-style": "normal",
                "font-weight": 400,
                gradient: 0,
                height: 0,
                href: "http://raphaeljs.com/",
                "letter-spacing": 0,
                opacity: 1,
                path: "M0,0",
                r: 0,
                rx: 0,
                ry: 0,
                src: "",
                stroke: "#000",
                "stroke-dasharray": "",
                "stroke-linecap": "butt",
                "stroke-linejoin": "butt",
                "stroke-miterlimit": 0,
                "stroke-opacity": 1,
                "stroke-width": 1,
                target: "_blank",
                "text-anchor": "middle",
                title: "Raphael",
                transform: "",
                width: 0,
                x: 0,
                y: 0
            },
            rt = n._availableAnimAttrs = {
                blur: U,
                "clip-rect": "csv",
                cx: U,
                cy: U,
                fill: "colour",
                "fill-opacity": U,
                "font-size": U,
                height: U,
                opacity: U,
                path: "path",
                r: U,
                rx: U,
                ry: U,
                stroke: "colour",
                "stroke-opacity": U,
                "stroke-width": U,
                transform: "transform",
                width: U,
                x: U,
                y: U
            },
            it = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
            ot = {
                hs: 1,
                rg: 1
            },
            at = /,?([achlmqrstvxz]),?/gi,
            st = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
            lt = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
            ut = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
            ct = (n._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
            ht = function(t, e) {
                return Q(t) - Q(e)
            },
            pt = function() {},
            ft = function(t) {
                return t
            },
            dt = n._rectPath = function(t, e, n, r, i) {
                return i ? [
                    ["M", t + i, e],
                    ["l", n - 2 * i, 0],
                    ["a", i, i, 0, 0, 1, i, i],
                    ["l", 0, r - 2 * i],
                    ["a", i, i, 0, 0, 1, -i, i],
                    ["l", 2 * i - n, 0],
                    ["a", i, i, 0, 0, 1, -i, -i],
                    ["l", 0, 2 * i - r],
                    ["a", i, i, 0, 0, 1, i, -i],
                    ["z"]
                ] : [
                    ["M", t, e],
                    ["l", n, 0],
                    ["l", 0, r],
                    ["l", -n, 0],
                    ["z"]
                ]
            },
            gt = function(t, e, n, r) {
                return null == r && (r = n), [
                    ["M", t, e],
                    ["m", 0, -r],
                    ["a", n, r, 0, 1, 1, 0, 2 * r],
                    ["a", n, r, 0, 1, 1, 0, -2 * r],
                    ["z"]
                ]
            },
            vt = n._getPath = {
                path: function(t) {
                    return t.attr("path")
                },
                circle: function(t) {
                    var e = t.attrs;
                    return gt(e.cx, e.cy, e.r)
                },
                ellipse: function(t) {
                    var e = t.attrs;
                    return gt(e.cx, e.cy, e.rx, e.ry)
                },
                rect: function(t) {
                    var e = t.attrs;
                    return dt(e.x, e.y, e.width, e.height, e.r)
                },
                image: function(t) {
                    var e = t.attrs;
                    return dt(e.x, e.y, e.width, e.height)
                },
                text: function(t) {
                    var e = t._getBBox();
                    return dt(e.x, e.y, e.width, e.height)
                },
                set: function(t) {
                    var e = t._getBBox();
                    return dt(e.x, e.y, e.width, e.height)
                }
            },
            mt = n.mapPath = function(t, e) {
                if (!e) return t;
                var n, r, i, o, a, s, l;
                for (t = jt(t), i = 0, a = t.length; i < a; i++)
                    for (l = t[i], o = 1, s = l.length; o < s; o += 2) n = e.x(l[o], l[o + 1]), r = e.y(l[o], l[o + 1]), l[o] = n, l[o + 1] = r;
                return t
            };
        if (n._g = k, n.type = k.win.SVGAngle || k.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == n.type) {
            var yt, xt = k.doc.createElement("div");
            if (xt.innerHTML = '<v:shape adj="1"/>', yt = xt.firstChild, yt.style.behavior = "url(#default#VML)", !yt || "object" != typeof yt.adj) return n.type = I;
            xt = null
        }
        n.svg = !(n.vml = "VML" == n.type), n._Paper = A, n.fn = _ = A.prototype = n.prototype, n._id = 0, n._oid = 0, n.is = function(t, e) {
            return e = R.call(e), "finite" == e ? !J[M](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || G.call(t).slice(8, -1).toLowerCase() == e
        }, n.angle = function(t, e, r, i, o, a) {
            if (null == o) {
                var s = t - r,
                    l = e - i;
                return s || l ? (180 + 180 * z.atan2(-l, -s) / W + 360) % 360 : 0
            }
            return n.angle(t, e, o, a) - n.angle(r, i, o, a)
        }, n.rad = function(t) {
            return t % 360 * W / 180
        }, n.deg = function(t) {
            return Math.round(180 * t / W % 360 * 1e3) / 1e3
        }, n.snapTo = function(t, e, r) {
            if (r = n.is(r, "finite") ? r : 10, n.is(t, V)) {
                for (var i = t.length; i--;)
                    if (O(t[i] - e) <= r) return t[i]
            } else {
                t = +t;
                var o = e % t;
                if (o < r) return e - o;
                if (o > t - r) return e - o + t
            }
            return e
        };
        n.createUUID = function(t, e) {
            return function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase()
            }
        }(/[xy]/g, function(t) {
            var e = 16 * z.random() | 0,
                n = "x" == t ? e : 3 & e | 8;
            return n.toString(16)
        });
        n.setWindow = function(t) {
            e("raphael.setWindow", n, k.win, t), k.win = t, k.doc = k.win.document, n._engine.initWin && n._engine.initWin(k.win)
        };
        var bt = function(t) {
                if (n.vml) {
                    var e, r = /^\s+|\s+$/g;
                    try {
                        var i = new ActiveXObject("htmlfile");
                        i.write("<body>"), i.close(), e = i.body
                    } catch (t) {
                        e = createPopup().document.body
                    }
                    var a = e.createTextRange();
                    bt = o(function(t) {
                        try {
                            e.style.color = D(t).replace(r, I);
                            var n = a.queryCommandValue("ForeColor");
                            return n = (255 & n) << 16 | 65280 & n | (16711680 & n) >>> 16, "#" + ("000000" + n.toString(16)).slice(-6)
                        } catch (t) {
                            return "none"
                        }
                    })
                } else {
                    var s = k.doc.createElement("i");
                    s.title = "Raphaël Colour Picker", s.style.display = "none", k.doc.body.appendChild(s), bt = o(function(t) {
                        return s.style.color = t, k.doc.defaultView.getComputedStyle(s, I).getPropertyValue("color")
                    })
                }
                return bt(t)
            },
            _t = function() {
                return "hsb(" + [this.h, this.s, this.b] + ")"
            },
            wt = function() {
                return "hsl(" + [this.h, this.s, this.l] + ")"
            },
            Tt = function() {
                return this.hex
            },
            Ct = function(t, e, r) {
                if (null == e && n.is(t, "object") && "r" in t && "g" in t && "b" in t && (r = t.b, e = t.g, t = t.r), null == e && n.is(t, Y)) {
                    var i = n.getRGB(t);
                    t = i.r, e = i.g, r = i.b
                }
                return (t > 1 || e > 1 || r > 1) && (t /= 255, e /= 255, r /= 255), [t, e, r]
            },
            Mt = function(t, e, r, i) {
                t *= 255, e *= 255, r *= 255;
                var o = {
                    r: t,
                    g: e,
                    b: r,
                    hex: n.rgb(t, e, r),
                    toString: Tt
                };
                return n.is(i, "finite") && (o.opacity = i), o
            };
        n.color = function(t) {
            var e;
            return n.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = n.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : n.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = n.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (n.is(t, "string") && (t = n.getRGB(t)), n.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = n.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = n.rgb2hsb(t), t.v = e.b) : (t = {
                hex: "none"
            }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1)), t.toString = Tt, t
        }, n.hsb2rgb = function(t, e, n, r) {
            this.is(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, r = t.o, t = t.h), t *= 360;
            var i, o, a, s, l;
            return t = t % 360 / 60, l = n * e, s = l * (1 - O(t % 2 - 1)), i = o = a = n - l, t = ~~t, i += [l, s, 0, 0, s, l][t], o += [s, l, l, s, 0, 0][t], a += [0, 0, s, l, l, s][t], Mt(i, o, a, r)
        }, n.hsl2rgb = function(t, e, n, r) {
            this.is(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
            var i, o, a, s, l;
            return t = t % 360 / 60, l = 2 * e * (n < .5 ? n : 1 - n), s = l * (1 - O(t % 2 - 1)), i = o = a = n - l / 2, t = ~~t, i += [l, s, 0, 0, s, l][t], o += [s, l, l, s, 0, 0][t], a += [0, 0, s, l, l, s][t], Mt(i, o, a, r)
        }, n.rgb2hsb = function(t, e, n) {
            n = Ct(t, e, n), t = n[0], e = n[1], n = n[2];
            var r, i, o, a;
            return o = B(t, e, n), a = o - q(t, e, n), r = 0 == a ? null : o == t ? (e - n) / a : o == e ? (n - t) / a + 2 : (t - e) / a + 4, r = (r + 360) % 6 * 60 / 360, i = 0 == a ? 0 : a / o, {
                h: r,
                s: i,
                b: o,
                toString: _t
            }
        }, n.rgb2hsl = function(t, e, n) {
            n = Ct(t, e, n), t = n[0], e = n[1], n = n[2];
            var r, i, o, a, s, l;
            return a = B(t, e, n), s = q(t, e, n), l = a - s, r = 0 == l ? null : a == t ? (e - n) / l : a == e ? (n - t) / l + 2 : (t - e) / l + 4, r = (r + 360) % 6 * 60 / 360, o = (a + s) / 2, i = 0 == l ? 0 : o < .5 ? l / (2 * o) : l / (2 - 2 * o), {
                h: r,
                s: i,
                l: o,
                toString: wt
            }
        }, n._path2string = function() {
            return this.join(",").replace(at, "$1")
        };
        n._preload = function(t, e) {
            var n = k.doc.createElement("img");
            n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function() {
                e.call(this), this.onload = null, k.doc.body.removeChild(this)
            }, n.onerror = function() {
                k.doc.body.removeChild(this)
            }, k.doc.body.appendChild(n), n.src = t
        };
        n.getRGB = o(function(t) {
            if (!t || (t = D(t)).indexOf("-") + 1) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: a
            };
            if ("none" == t) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                toString: a
            };
            !(ot[M](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = bt(t));
            var e, r, i, o, s, l, u = t.match(X);
            return u ? (u[2] && (i = tt(u[2].substring(5), 16), r = tt(u[2].substring(3, 5), 16), e = tt(u[2].substring(1, 3), 16)), u[3] && (i = tt((s = u[3].charAt(3)) + s, 16), r = tt((s = u[3].charAt(2)) + s, 16), e = tt((s = u[3].charAt(1)) + s, 16)), u[4] && (l = u[4][F](it), e = Q(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), r = Q(l[1]), "%" == l[1].slice(-1) && (r *= 2.55), i = Q(l[2]), "%" == l[2].slice(-1) && (i *= 2.55), "rgba" == u[1].toLowerCase().slice(0, 4) && (o = Q(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100)), u[5] ? (l = u[5][F](it), e = Q(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), r = Q(l[1]), "%" == l[1].slice(-1) && (r *= 2.55), i = Q(l[2]), "%" == l[2].slice(-1) && (i *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsba" == u[1].toLowerCase().slice(0, 4) && (o = Q(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100), n.hsb2rgb(e, r, i, o)) : u[6] ? (l = u[6][F](it), e = Q(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), r = Q(l[1]), "%" == l[1].slice(-1) && (r *= 2.55), i = Q(l[2]), "%" == l[2].slice(-1) && (i *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsla" == u[1].toLowerCase().slice(0, 4) && (o = Q(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100), n.hsl2rgb(e, r, i, o)) : (u = {
                r: e,
                g: r,
                b: i,
                toString: a
            }, u.hex = "#" + (16777216 | i | r << 8 | e << 16).toString(16).slice(1), n.is(o, "finite") && (u.opacity = o), u)) : {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: a
            }
        }, n), n.hsb = o(function(t, e, r) {
            return n.hsb2rgb(t, e, r).hex
        }), n.hsl = o(function(t, e, r) {
            return n.hsl2rgb(t, e, r).hex
        }), n.rgb = o(function(t, e, n) {
            return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
        }), n.getColor = function(t) {
            var e = this.getColor.start = this.getColor.start || {
                    h: 0,
                    s: 1,
                    b: t || .75
                },
                n = this.hsb2rgb(e.h, e.s, e.b);
            return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
                h: 0,
                s: 1,
                b: e.b
            })), n.hex
        }, n.getColor.reset = function() {
            delete this.start
        }, n.parsePathString = function(t) {
            if (!t) return null;
            var e = kt(t);
            if (e.arr) return At(e.arr);
            var r = {
                    a: 7,
                    c: 6,
                    h: 1,
                    l: 2,
                    m: 2,
                    r: 4,
                    q: 4,
                    s: 4,
                    t: 2,
                    v: 1,
                    z: 0
                },
                i = [];
            return n.is(t, V) && n.is(t[0], V) && (i = At(t)), i.length || D(t).replace(st, function(t, e, n) {
                var o = [],
                    a = e.toLowerCase();
                if (n.replace(ut, function(t, e) {
                        e && o.push(+e)
                    }), "m" == a && o.length > 2 && (i.push([e][N](o.splice(0, 2))), a = "l", e = "m" == e ? "l" : "L"), "r" == a) i.push([e][N](o));
                else
                    for (; o.length >= r[a] && (i.push([e][N](o.splice(0, r[a]))), r[a]););
            }), i.toString = n._path2string, e.arr = At(i), i
        }, n.parseTransformString = o(function(t) {
            if (!t) return null;
            var e = [];
            return n.is(t, V) && n.is(t[0], V) && (e = At(t)), e.length || D(t).replace(lt, function(t, n, r) {
                var i = [];
                R.call(n);
                r.replace(ut, function(t, e) {
                    e && i.push(+e)
                }), e.push([n][N](i))
            }), e.toString = n._path2string, e
        });
        var kt = function(t) {
            var e = kt.ps = kt.ps || {};
            return e[t] ? e[t].sleep = 100 : e[t] = {
                sleep: 100
            }, setTimeout(function() {
                for (var n in e) e[M](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
            }), e[t]
        };
        n.findDotsAtSegment = function(t, e, n, r, i, o, a, s, l) {
            var u = 1 - l,
                c = H(u, 3),
                h = H(u, 2),
                p = l * l,
                f = p * l,
                d = c * t + 3 * h * l * n + 3 * u * l * l * i + f * a,
                g = c * e + 3 * h * l * r + 3 * u * l * l * o + f * s,
                v = t + 2 * l * (n - t) + p * (i - 2 * n + t),
                m = e + 2 * l * (r - e) + p * (o - 2 * r + e),
                y = n + 2 * l * (i - n) + p * (a - 2 * i + n),
                x = r + 2 * l * (o - r) + p * (s - 2 * o + r),
                b = u * t + l * n,
                _ = u * e + l * r,
                w = u * i + l * a,
                T = u * o + l * s,
                C = 90 - 180 * z.atan2(v - y, m - x) / W;
            return (v > y || m < x) && (C += 180), {
                x: d,
                y: g,
                m: {
                    x: v,
                    y: m
                },
                n: {
                    x: y,
                    y: x
                },
                start: {
                    x: b,
                    y: _
                },
                end: {
                    x: w,
                    y: T
                },
                alpha: C
            }
        }, n.bezierBBox = function(t, e, r, i, o, a, s, l) {
            n.is(t, "array") || (t = [t, e, r, i, o, a, s, l]);
            var u = Ft.apply(null, t);
            return {
                x: u.min.x,
                y: u.min.y,
                x2: u.max.x,
                y2: u.max.y,
                width: u.max.x - u.min.x,
                height: u.max.y - u.min.y
            }
        }, n.isPointInsideBBox = function(t, e, n) {
            return e >= t.x && e <= t.x2 && n >= t.y && n <= t.y2
        }, n.isBBoxIntersect = function(t, e) {
            var r = n.isPointInsideBBox;
            return r(e, t.x, t.y) || r(e, t.x2, t.y) || r(e, t.x, t.y2) || r(e, t.x2, t.y2) || r(t, e.x, e.y) || r(t, e.x2, e.y) || r(t, e.x, e.y2) || r(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
        }, n.pathIntersection = function(t, e) {
            return f(t, e)
        }, n.pathIntersectionNumber = function(t, e) {
            return f(t, e, 1)
        }, n.isPointInsidePath = function(t, e, r) {
            var i = n.pathBBox(t);
            return n.isPointInsideBBox(i, e, r) && f(t, [
                ["M", e, r],
                ["H", i.x2 + 10]
            ], 1) % 2 == 1
        }, n._removedFactory = function(t) {
            return function() {
                e("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t)
            }
        };
        var St = n.pathBBox = function(t) {
                var e = kt(t);
                if (e.bbox) return r(e.bbox);
                if (!t) return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    x2: 0,
                    y2: 0
                };
                t = jt(t);
                for (var n, i = 0, o = 0, a = [], s = [], l = 0, u = t.length; l < u; l++)
                    if (n = t[l], "M" == n[0]) i = n[1], o = n[2], a.push(i), s.push(o);
                    else {
                        var c = Ft(i, o, n[1], n[2], n[3], n[4], n[5], n[6]);
                        a = a[N](c.min.x, c.max.x), s = s[N](c.min.y, c.max.y), i = n[5], o = n[6]
                    }
                var h = q[E](0, a),
                    p = q[E](0, s),
                    f = B[E](0, a),
                    d = B[E](0, s),
                    g = f - h,
                    v = d - p,
                    m = {
                        x: h,
                        y: p,
                        x2: f,
                        y2: d,
                        width: g,
                        height: v,
                        cx: h + g / 2,
                        cy: p + v / 2
                    };
                return e.bbox = r(m), m
            },
            At = function(t) {
                var e = r(t);
                return e.toString = n._path2string, e
            },
            Et = n._pathToRelative = function(t) {
                var e = kt(t);
                if (e.rel) return At(e.rel);
                n.is(t, V) && n.is(t && t[0], V) || (t = n.parsePathString(t));
                var r = [],
                    i = 0,
                    o = 0,
                    a = 0,
                    s = 0,
                    l = 0;
                "M" == t[0][0] && (i = t[0][1], o = t[0][2], a = i, s = o, l++, r.push(["M", i, o]));
                for (var u = l, c = t.length; u < c; u++) {
                    var h = r[u] = [],
                        p = t[u];
                    if (p[0] != R.call(p[0])) switch (h[0] = R.call(p[0]), h[0]) {
                        case "a":
                            h[1] = p[1], h[2] = p[2], h[3] = p[3], h[4] = p[4], h[5] = p[5], h[6] = +(p[6] - i).toFixed(3), h[7] = +(p[7] - o).toFixed(3);
                            break;
                        case "v":
                            h[1] = +(p[1] - o).toFixed(3);
                            break;
                        case "m":
                            a = p[1], s = p[2];
                        default:
                            for (var f = 1, d = p.length; f < d; f++) h[f] = +(p[f] - (f % 2 ? i : o)).toFixed(3)
                    } else {
                        h = r[u] = [], "m" == p[0] && (a = p[1] + i, s = p[2] + o);
                        for (var g = 0, v = p.length; g < v; g++) r[u][g] = p[g]
                    }
                    var m = r[u].length;
                    switch (r[u][0]) {
                        case "z":
                            i = a, o = s;
                            break;
                        case "h":
                            i += +r[u][m - 1];
                            break;
                        case "v":
                            o += +r[u][m - 1];
                            break;
                        default:
                            i += +r[u][m - 2], o += +r[u][m - 1]
                    }
                }
                return r.toString = n._path2string, e.rel = At(r), r
            },
            Nt = n._pathToAbsolute = function(t) {
                var e = kt(t);
                if (e.abs) return At(e.abs);
                if (n.is(t, V) && n.is(t && t[0], V) || (t = n.parsePathString(t)), !t || !t.length) return [
                    ["M", 0, 0]
                ];
                var r = [],
                    i = 0,
                    o = 0,
                    a = 0,
                    l = 0,
                    u = 0;
                "M" == t[0][0] && (i = +t[0][1], o = +t[0][2], a = i, l = o, u++, r[0] = ["M", i, o]);
                for (var c, h, p = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), f = u, d = t.length; f < d; f++) {
                    if (r.push(c = []), h = t[f], h[0] != et.call(h[0])) switch (c[0] = et.call(h[0]), c[0]) {
                            case "A":
                                c[1] = h[1], c[2] = h[2], c[3] = h[3], c[4] = h[4], c[5] = h[5], c[6] = +(h[6] + i), c[7] = +(h[7] + o);
                                break;
                            case "V":
                                c[1] = +h[1] + o;
                                break;
                            case "H":
                                c[1] = +h[1] + i;
                                break;
                            case "R":
                                for (var g = [i, o][N](h.slice(1)), v = 2, m = g.length; v < m; v++) g[v] = +g[v] + i, g[++v] = +g[v] + o;
                                r.pop(), r = r[N](s(g, p));
                                break;
                            case "M":
                                a = +h[1] + i, l = +h[2] + o;
                            default:
                                for (v = 1, m = h.length; v < m; v++) c[v] = +h[v] + (v % 2 ? i : o)
                        } else if ("R" == h[0]) g = [i, o][N](h.slice(1)), r.pop(), r = r[N](s(g, p)), c = ["R"][N](h.slice(-2));
                        else
                            for (var y = 0, x = h.length; y < x; y++) c[y] = h[y];
                    switch (c[0]) {
                        case "Z":
                            i = a, o = l;
                            break;
                        case "H":
                            i = c[1];
                            break;
                        case "V":
                            o = c[1];
                            break;
                        case "M":
                            a = c[c.length - 2], l = c[c.length - 1];
                        default:
                            i = c[c.length - 2], o = c[c.length - 1]
                    }
                }
                return r.toString = n._path2string, e.abs = At(r), r
            },
            Lt = function(t, e, n, r) {
                return [t, e, n, r, n, r]
            },
            It = function(t, e, n, r, i, o) {
                var a = 1 / 3,
                    s = 2 / 3;
                return [a * t + s * n, a * e + s * r, a * i + s * n, a * o + s * r, i, o]
            },
            Pt = function(t, e, n, r, i, a, s, l, u, c) {
                var h, p = 120 * W / 180,
                    f = W / 180 * (+i || 0),
                    d = [],
                    g = o(function(t, e, n) {
                        var r = t * z.cos(n) - e * z.sin(n),
                            i = t * z.sin(n) + e * z.cos(n);
                        return {
                            x: r,
                            y: i
                        }
                    });
                if (c) C = c[0], M = c[1], w = c[2], T = c[3];
                else {
                    h = g(t, e, -f), t = h.x, e = h.y, h = g(l, u, -f), l = h.x, u = h.y;
                    var v = (z.cos(W / 180 * i), z.sin(W / 180 * i), (t - l) / 2),
                        m = (e - u) / 2,
                        y = v * v / (n * n) + m * m / (r * r);
                    y > 1 && (y = z.sqrt(y), n = y * n, r = y * r);
                    var x = n * n,
                        b = r * r,
                        _ = (a == s ? -1 : 1) * z.sqrt(O((x * b - x * m * m - b * v * v) / (x * m * m + b * v * v))),
                        w = _ * n * m / r + (t + l) / 2,
                        T = _ * -r * v / n + (e + u) / 2,
                        C = z.asin(((e - T) / r).toFixed(9)),
                        M = z.asin(((u - T) / r).toFixed(9));
                    C = t < w ? W - C : C, M = l < w ? W - M : M, C < 0 && (C = 2 * W + C), M < 0 && (M = 2 * W + M), s && C > M && (C -= 2 * W), !s && M > C && (M -= 2 * W)
                }
                var k = M - C;
                if (O(k) > p) {
                    var S = M,
                        A = l,
                        E = u;
                    M = C + p * (s && M > C ? 1 : -1), l = w + n * z.cos(M), u = T + r * z.sin(M), d = Pt(l, u, n, r, i, 0, s, A, E, [M, S, w, T])
                }
                k = M - C;
                var L = z.cos(C),
                    I = z.sin(C),
                    P = z.cos(M),
                    D = z.sin(M),
                    j = z.tan(k / 4),
                    $ = 4 / 3 * n * j,
                    R = 4 / 3 * r * j,
                    B = [t, e],
                    q = [t + $ * I, e - R * L],
                    H = [l + $ * D, u - R * P],
                    U = [l, u];
                if (q[0] = 2 * B[0] - q[0], q[1] = 2 * B[1] - q[1], c) return [q, H, U][N](d);
                d = [q, H, U][N](d).join()[F](",");
                for (var Y = [], V = 0, G = d.length; V < G; V++) Y[V] = V % 2 ? g(d[V - 1], d[V], f).y : g(d[V], d[V + 1], f).x;
                return Y
            },
            Dt = function(t, e, n, r, i, o, a, s, l) {
                var u = 1 - l;
                return {
                    x: H(u, 3) * t + 3 * H(u, 2) * l * n + 3 * u * l * l * i + H(l, 3) * a,
                    y: H(u, 3) * e + 3 * H(u, 2) * l * r + 3 * u * l * l * o + H(l, 3) * s
                }
            },
            Ft = o(function(t, e, n, r, i, o, a, s) {
                var l, u = i - 2 * n + t - (a - 2 * i + n),
                    c = 2 * (n - t) - 2 * (i - n),
                    h = t - n,
                    p = (-c + z.sqrt(c * c - 4 * u * h)) / 2 / u,
                    f = (-c - z.sqrt(c * c - 4 * u * h)) / 2 / u,
                    d = [e, s],
                    g = [t, a];
                return O(p) > "1e12" && (p = .5), O(f) > "1e12" && (f = .5), p > 0 && p < 1 && (l = Dt(t, e, n, r, i, o, a, s, p), g.push(l.x), d.push(l.y)), f > 0 && f < 1 && (l = Dt(t, e, n, r, i, o, a, s, f), g.push(l.x), d.push(l.y)), u = o - 2 * r + e - (s - 2 * o + r), c = 2 * (r - e) - 2 * (o - r), h = e - r, p = (-c + z.sqrt(c * c - 4 * u * h)) / 2 / u, f = (-c - z.sqrt(c * c - 4 * u * h)) / 2 / u, O(p) > "1e12" && (p = .5), O(f) > "1e12" && (f = .5), p > 0 && p < 1 && (l = Dt(t, e, n, r, i, o, a, s, p), g.push(l.x), d.push(l.y)), f > 0 && f < 1 && (l = Dt(t, e, n, r, i, o, a, s, f), g.push(l.x), d.push(l.y)), {
                    min: {
                        x: q[E](0, g),
                        y: q[E](0, d)
                    },
                    max: {
                        x: B[E](0, g),
                        y: B[E](0, d)
                    }
                }
            }),
            jt = n._path2curve = o(function(t, e) {
                var n = !e && kt(t);
                if (!e && n.curve) return At(n.curve);
                for (var r = Nt(t), i = e && Nt(e), o = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null
                    }, a = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null
                    }, s = (function(t, e, n) {
                        var r, i, o = {
                            T: 1,
                            Q: 1
                        };
                        if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                        switch (!(t[0] in o) && (e.qx = e.qy = null), t[0]) {
                            case "M":
                                e.X = t[1], e.Y = t[2];
                                break;
                            case "A":
                                t = ["C"][N](Pt[E](0, [e.x, e.y][N](t.slice(1))));
                                break;
                            case "S":
                                "C" == n || "S" == n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y), t = ["C", r, i][N](t.slice(1));
                                break;
                            case "T":
                                "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"][N](It(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                                break;
                            case "Q":
                                e.qx = t[1], e.qy = t[2], t = ["C"][N](It(e.x, e.y, t[1], t[2], t[3], t[4]));
                                break;
                            case "L":
                                t = ["C"][N](Lt(e.x, e.y, t[1], t[2]));
                                break;
                            case "H":
                                t = ["C"][N](Lt(e.x, e.y, t[1], e.y));
                                break;
                            case "V":
                                t = ["C"][N](Lt(e.x, e.y, e.x, t[1]));
                                break;
                            case "Z":
                                t = ["C"][N](Lt(e.x, e.y, e.X, e.Y))
                        }
                        return t
                    }), l = function(t, e) {
                        if (t[e].length > 7) {
                            t[e].shift();
                            for (var n = t[e]; n.length;) c[e] = "A", i && (h[e] = "A"), t.splice(e++, 0, ["C"][N](n.splice(0, 6)));
                            t.splice(e, 1), g = B(r.length, i && i.length || 0)
                        }
                    }, u = function(t, e, n, o, a) {
                        t && e && "M" == t[a][0] && "M" != e[a][0] && (e.splice(a, 0, ["M", o.x, o.y]), n.bx = 0, n.by = 0, n.x = t[a][1], n.y = t[a][2], g = B(r.length, i && i.length || 0))
                    }, c = [], h = [], p = "", f = "", d = 0, g = B(r.length, i && i.length || 0); d < g; d++) {
                    r[d] && (p = r[d][0]), "C" != p && (c[d] = p, d && (f = c[d - 1])), r[d] = s(r[d], o, f), "A" != c[d] && "C" == p && (c[d] = "C"), l(r, d), i && (i[d] && (p = i[d][0]), "C" != p && (h[d] = p, d && (f = h[d - 1])), i[d] = s(i[d], a, f), "A" != h[d] && "C" == p && (h[d] = "C"), l(i, d)), u(r, i, o, a, d), u(i, r, a, o, d);
                    var v = r[d],
                        m = i && i[d],
                        y = v.length,
                        x = i && m.length;
                    o.x = v[y - 2], o.y = v[y - 1], o.bx = Q(v[y - 4]) || o.x, o.by = Q(v[y - 3]) || o.y, a.bx = i && (Q(m[x - 4]) || a.x), a.by = i && (Q(m[x - 3]) || a.y), a.x = i && m[x - 2], a.y = i && m[x - 1]
                }
                return i || (n.curve = At(r)), i ? [r, i] : r
            }, null, At),
            $t = (n._parseDots = o(function(t) {
                for (var e = [], r = 0, i = t.length; r < i; r++) {
                    var o = {},
                        a = t[r].match(/^([^:]*):?([\d\.]*)/);
                    if (o.color = n.getRGB(a[1]), o.color.error) return null;
                    o.color = o.color.hex, a[2] && (o.offset = a[2] + "%"), e.push(o)
                }
                for (r = 1, i = e.length - 1; r < i; r++)
                    if (!e[r].offset) {
                        for (var s = Q(e[r - 1].offset || 0), l = 0, u = r + 1; u < i; u++)
                            if (e[u].offset) {
                                l = e[u].offset;
                                break
                            }
                        l || (l = 100, u = i), l = Q(l);
                        for (var c = (l - s) / (u - r + 1); r < u; r++) s += c, e[r].offset = s + "%"
                    }
                return e
            }), n._tear = function(t, e) {
                t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
            }),
            Rt = (n._tofront = function(t, e) {
                e.top !== t && ($t(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
            }, n._toback = function(t, e) {
                e.bottom !== t && ($t(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
            }, n._insertafter = function(t, e, n) {
                $t(t, n), e == n.top && (n.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t
            }, n._insertbefore = function(t, e, n) {
                $t(t, n), e == n.bottom && (n.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e
            }, n.toMatrix = function(t, e) {
                var n = St(t),
                    r = {
                        _: {
                            transform: I
                        },
                        getBBox: function() {
                            return n
                        }
                    };
                return zt(r, e), r.matrix
            }),
            zt = (n.transformPath = function(t, e) {
                return mt(t, Rt(t, e))
            }, n._extractTransform = function(t, e) {
                if (null == e) return t._.transform;
                e = D(e).replace(/\.{3}|\u2026/g, t._.transform || I);
                var r = n.parseTransformString(e),
                    i = 0,
                    o = 0,
                    a = 0,
                    s = 1,
                    l = 1,
                    u = t._,
                    c = new d;
                if (u.transform = r || [], r)
                    for (var h = 0, p = r.length; h < p; h++) {
                        var f, g, v, m, y, x = r[h],
                            b = x.length,
                            _ = D(x[0]).toLowerCase(),
                            w = x[0] != _,
                            T = w ? c.invert() : 0;
                        "t" == _ && 3 == b ? w ? (f = T.x(0, 0), g = T.y(0, 0), v = T.x(x[1], x[2]), m = T.y(x[1], x[2]), c.translate(v - f, m - g)) : c.translate(x[1], x[2]) : "r" == _ ? 2 == b ? (y = y || t.getBBox(1), c.rotate(x[1], y.x + y.width / 2, y.y + y.height / 2), i += x[1]) : 4 == b && (w ? (v = T.x(x[2], x[3]), m = T.y(x[2], x[3]), c.rotate(x[1], v, m)) : c.rotate(x[1], x[2], x[3]), i += x[1]) : "s" == _ ? 2 == b || 3 == b ? (y = y || t.getBBox(1), c.scale(x[1], x[b - 1], y.x + y.width / 2, y.y + y.height / 2), s *= x[1], l *= x[b - 1]) : 5 == b && (w ? (v = T.x(x[3], x[4]), m = T.y(x[3], x[4]), c.scale(x[1], x[2], v, m)) : c.scale(x[1], x[2], x[3], x[4]), s *= x[1], l *= x[2]) : "m" == _ && 7 == b && c.add(x[1], x[2], x[3], x[4], x[5], x[6]), u.dirtyT = 1, t.matrix = c
                    }
                t.matrix = c, u.sx = s, u.sy = l, u.deg = i, u.dx = o = c.e, u.dy = a = c.f, 1 == s && 1 == l && !i && u.bbox ? (u.bbox.x += +o, u.bbox.y += +a) : u.dirtyT = 1
            }),
            Bt = function(t) {
                var e = t[0];
                switch (e.toLowerCase()) {
                    case "t":
                        return [e, 0, 0];
                    case "m":
                        return [e, 1, 0, 0, 1, 0, 0];
                    case "r":
                        return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                    case "s":
                        return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
                }
            },
            qt = n._equaliseTransform = function(t, e) {
                e = D(e).replace(/\.{3}|\u2026/g, t), t = n.parseTransformString(t) || [], e = n.parseTransformString(e) || [];
                for (var r, i, o, a, s = B(t.length, e.length), l = [], u = [], c = 0; c < s; c++) {
                    if (o = t[c] || Bt(e[c]), a = e[c] || Bt(o), o[0] != a[0] || "r" == o[0].toLowerCase() && (o[2] != a[2] || o[3] != a[3]) || "s" == o[0].toLowerCase() && (o[3] != a[3] || o[4] != a[4])) return;
                    for (l[c] = [], u[c] = [], r = 0, i = B(o.length, a.length); r < i; r++) r in o && (l[c][r] = o[r]), r in a && (u[c][r] = a[r])
                }
                return {
                    from: l,
                    to: u
                }
            };
        n._getContainer = function(t, e, r, i) {
                var o;
                if (o = null != i || n.is(t, "object") ? t : k.doc.getElementById(t), null != o) return o.tagName ? null == e ? {
                    container: o,
                    width: o.style.pixelWidth || o.offsetWidth,
                    height: o.style.pixelHeight || o.offsetHeight
                } : {
                    container: o,
                    width: e,
                    height: r
                } : {
                    container: 1,
                    x: t,
                    y: e,
                    width: r,
                    height: i
                }
            }, n.pathToRelative = Et, n._engine = {}, n.path2curve = jt, n.matrix = function(t, e, n, r, i, o) {
                return new d(t, e, n, r, i, o)
            },
            function(t) {
                function e(t) {
                    return t[0] * t[0] + t[1] * t[1]
                }

                function r(t) {
                    var n = z.sqrt(e(t));
                    t[0] && (t[0] /= n), t[1] && (t[1] /= n)
                }
                t.add = function(t, e, n, r, i, o) {
                    var a, s, l, u, c = [
                            [],
                            [],
                            []
                        ],
                        h = [
                            [this.a, this.c, this.e],
                            [this.b, this.d, this.f],
                            [0, 0, 1]
                        ],
                        p = [
                            [t, n, i],
                            [e, r, o],
                            [0, 0, 1]
                        ];
                    for (t && t instanceof d && (p = [
                            [t.a, t.c, t.e],
                            [t.b, t.d, t.f],
                            [0, 0, 1]
                        ]), a = 0; a < 3; a++)
                        for (s = 0; s < 3; s++) {
                            for (u = 0, l = 0; l < 3; l++) u += h[a][l] * p[l][s];
                            c[a][s] = u
                        }
                    this.a = c[0][0], this.b = c[1][0], this.c = c[0][1], this.d = c[1][1], this.e = c[0][2], this.f = c[1][2]
                }, t.invert = function() {
                    var t = this,
                        e = t.a * t.d - t.b * t.c;
                    return new d(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
                }, t.clone = function() {
                    return new d(this.a, this.b, this.c, this.d, this.e, this.f)
                }, t.translate = function(t, e) {
                    this.add(1, 0, 0, 1, t, e)
                }, t.scale = function(t, e, n, r) {
                    null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r)
                }, t.rotate = function(t, e, r) {
                    t = n.rad(t), e = e || 0, r = r || 0;
                    var i = +z.cos(t).toFixed(9),
                        o = +z.sin(t).toFixed(9);
                    this.add(i, o, -o, i, e, r), this.add(1, 0, 0, 1, -e, -r)
                }, t.x = function(t, e) {
                    return t * this.a + e * this.c + this.e
                }, t.y = function(t, e) {
                    return t * this.b + e * this.d + this.f
                }, t.get = function(t) {
                    return +this[D.fromCharCode(97 + t)].toFixed(4)
                }, t.toString = function() {
                    return n.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
                }, t.toFilter = function() {
                    return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
                }, t.offset = function() {
                    return [this.e.toFixed(4), this.f.toFixed(4)]
                }, t.split = function() {
                    var t = {};
                    t.dx = this.e, t.dy = this.f;
                    var i = [
                        [this.a, this.c],
                        [this.b, this.d]
                    ];
                    t.scalex = z.sqrt(e(i[0])), r(i[0]), t.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1], i[1] = [i[1][0] - i[0][0] * t.shear, i[1][1] - i[0][1] * t.shear], t.scaley = z.sqrt(e(i[1])), r(i[1]), t.shear /= t.scaley;
                    var o = -i[0][1],
                        a = i[1][1];
                    return a < 0 ? (t.rotate = n.deg(z.acos(a)), o < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = n.deg(z.asin(o)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
                }, t.toTransformString = function(t) {
                    var e = t || this[F]();
                    return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : I) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : I) + (e.rotate ? "r" + [e.rotate, 0, 0] : I)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                }
            }(d.prototype);
        var Ot = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
        "Apple Computer, Inc." == navigator.vendor && (Ot && Ot[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Ot && Ot[1] < 8 ? _.safari = function() {
            var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
                stroke: "none"
            });
            setTimeout(function() {
                t.remove()
            })
        } : _.safari = pt;
        for (var Ht = function() {
                this.returnValue = !1
            }, Wt = function() {
                return this.originalEvent.preventDefault()
            }, Ut = function() {
                this.cancelBubble = !0
            }, Yt = function() {
                return this.originalEvent.stopPropagation()
            }, Vt = function(t) {
                var e = k.doc.documentElement.scrollTop || k.doc.body.scrollTop,
                    n = k.doc.documentElement.scrollLeft || k.doc.body.scrollLeft;
                return {
                    x: t.clientX + n,
                    y: t.clientY + e
                }
            }, Gt = function() {
                return k.doc.addEventListener ? function(t, e, n, r) {
                    var i = function(t) {
                        var e = Vt(t);
                        return n.call(r, t, e.x, e.y)
                    };
                    if (t.addEventListener(e, i, !1), L && $[e]) {
                        var o = function(e) {
                            for (var i = Vt(e), o = e, a = 0, s = e.targetTouches && e.targetTouches.length; a < s; a++)
                                if (e.targetTouches[a].target == t) {
                                    e = e.targetTouches[a], e.originalEvent = o, e.preventDefault = Wt, e.stopPropagation = Yt;
                                    break
                                }
                            return n.call(r, e, i.x, i.y)
                        };
                        t.addEventListener($[e], o, !1)
                    }
                    return function() {
                        return t.removeEventListener(e, i, !1), L && $[e] && t.removeEventListener($[e], o, !1), !0
                    }
                } : k.doc.attachEvent ? function(t, e, n, r) {
                    var i = function(t) {
                        t = t || k.win.event;
                        var e = k.doc.documentElement.scrollTop || k.doc.body.scrollTop,
                            i = k.doc.documentElement.scrollLeft || k.doc.body.scrollLeft,
                            o = t.clientX + i,
                            a = t.clientY + e;
                        return t.preventDefault = t.preventDefault || Ht, t.stopPropagation = t.stopPropagation || Ut, n.call(r, t, o, a)
                    };
                    t.attachEvent("on" + e, i);
                    var o = function() {
                        return t.detachEvent("on" + e, i), !0
                    };
                    return o
                } : void 0
            }(), Xt = [], Jt = function(t) {
                for (var n, r = t.clientX, i = t.clientY, o = k.doc.documentElement.scrollTop || k.doc.body.scrollTop, a = k.doc.documentElement.scrollLeft || k.doc.body.scrollLeft, s = Xt.length; s--;) {
                    if (n = Xt[s], L && t.touches) {
                        for (var l, u = t.touches.length; u--;)
                            if (l = t.touches[u], l.identifier == n.el._drag.id) {
                                r = l.clientX, i = l.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                                break
                            }
                    } else t.preventDefault();
                    var c, h = n.el.node,
                        p = h.nextSibling,
                        f = h.parentNode,
                        d = h.style.display;
                    k.win.opera && f.removeChild(h), h.style.display = "none", c = n.el.paper.getElementByPoint(r, i), h.style.display = d, k.win.opera && (p ? f.insertBefore(h, p) : f.appendChild(h)), c && e("raphael.drag.over." + n.el.id, n.el, c), r += a, i += o, e("raphael.drag.move." + n.el.id, n.move_scope || n.el, r - n.el._drag.x, i - n.el._drag.y, r, i, t)
                }
            }, Kt = function(t) {
                n.unmousemove(Jt).unmouseup(Kt);
                for (var r, i = Xt.length; i--;) r = Xt[i], r.el._drag = {}, e("raphael.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, t);
                Xt = []
            }, Zt = n.el = {}, Qt = j.length; Qt--;) ! function(t) {
            n[t] = Zt[t] = function(e, r) {
                return n.is(e, "function") && (this.events = this.events || [], this.events.push({
                    name: t,
                    f: e,
                    unbind: Gt(this.shape || this.node || k.doc, t, e, r || this)
                })), this
            }, n["un" + t] = Zt["un" + t] = function(e) {
                for (var r = this.events || [], i = r.length; i--;) r[i].name != t || !n.is(e, "undefined") && r[i].f != e || (r[i].unbind(), r.splice(i, 1), !r.length && delete this.events);
                return this
            }
        }(j[Qt]);
        Zt.data = function(t, r) {
            var i = ct[this.id] = ct[this.id] || {};
            if (0 == arguments.length) return i;
            if (1 == arguments.length) {
                if (n.is(t, "object")) {
                    for (var o in t) t[M](o) && this.data(o, t[o]);
                    return this
                }
                return e("raphael.data.get." + this.id, this, i[t], t), i[t]
            }
            return i[t] = r, e("raphael.data.set." + this.id, this, r, t), this
        }, Zt.removeData = function(t) {
            return null == t ? ct[this.id] = {} : ct[this.id] && delete ct[this.id][t], this
        }, Zt.getData = function() {
            return r(ct[this.id] || {})
        }, Zt.hover = function(t, e, n, r) {
            return this.mouseover(t, n).mouseout(e, r || n)
        }, Zt.unhover = function(t, e) {
            return this.unmouseover(t).unmouseout(e)
        };
        var te = [];
        Zt.drag = function(t, r, i, o, a, s) {
            function l(l) {
                (l.originalEvent || l).preventDefault();
                var u = l.clientX,
                    c = l.clientY,
                    h = k.doc.documentElement.scrollTop || k.doc.body.scrollTop,
                    p = k.doc.documentElement.scrollLeft || k.doc.body.scrollLeft;
                if (this._drag.id = l.identifier, L && l.touches)
                    for (var f, d = l.touches.length; d--;)
                        if (f = l.touches[d], this._drag.id = f.identifier, f.identifier == this._drag.id) {
                            u = f.clientX, c = f.clientY;
                            break
                        }
                this._drag.x = u + p, this._drag.y = c + h, !Xt.length && n.mousemove(Jt).mouseup(Kt), Xt.push({
                    el: this,
                    move_scope: o,
                    start_scope: a,
                    end_scope: s
                }), r && e.on("raphael.drag.start." + this.id, r), t && e.on("raphael.drag.move." + this.id, t), i && e.on("raphael.drag.end." + this.id, i), e("raphael.drag.start." + this.id, a || o || this, l.clientX + p, l.clientY + h, l)
            }
            return this._drag = {}, te.push({
                el: this,
                start: l
            }), this.mousedown(l), this
        }, Zt.onDragOver = function(t) {
            t ? e.on("raphael.drag.over." + this.id, t) : e.unbind("raphael.drag.over." + this.id)
        }, Zt.undrag = function() {
            for (var t = te.length; t--;) te[t].el == this && (this.unmousedown(te[t].start), te.splice(t, 1), e.unbind("raphael.drag.*." + this.id));
            !te.length && n.unmousemove(Jt).unmouseup(Kt), Xt = []
        }, _.circle = function(t, e, r) {
            var i = n._engine.circle(this, t || 0, e || 0, r || 0);
            return this.__set__ && this.__set__.push(i), i
        }, _.rect = function(t, e, r, i, o) {
            var a = n._engine.rect(this, t || 0, e || 0, r || 0, i || 0, o || 0);
            return this.__set__ && this.__set__.push(a), a
        }, _.ellipse = function(t, e, r, i) {
            var o = n._engine.ellipse(this, t || 0, e || 0, r || 0, i || 0);
            return this.__set__ && this.__set__.push(o), o
        }, _.path = function(t) {
            t && !n.is(t, Y) && !n.is(t[0], V) && (t += I);
            var e = n._engine.path(n.format[E](n, arguments), this);
            return this.__set__ && this.__set__.push(e), e
        }, _.image = function(t, e, r, i, o) {
            var a = n._engine.image(this, t || "about:blank", e || 0, r || 0, i || 0, o || 0);
            return this.__set__ && this.__set__.push(a), a
        }, _.text = function(t, e, r) {
            var i = n._engine.text(this, t || 0, e || 0, D(r));
            return this.__set__ && this.__set__.push(i), i
        }, _.set = function(t) {
            !n.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
            var e = new pe(t);
            return this.__set__ && this.__set__.push(e), e.paper = this, e.type = "set", e
        }, _.setStart = function(t) {
            this.__set__ = t || this.set()
        }, _.setFinish = function(t) {
            var e = this.__set__;
            return delete this.__set__, e
        }, _.getSize = function() {
            var t = this.canvas.parentNode;
            return {
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        }, _.setSize = function(t, e) {
            return n._engine.setSize.call(this, t, e)
        }, _.setViewBox = function(t, e, r, i, o) {
            return n._engine.setViewBox.call(this, t, e, r, i, o)
        }, _.top = _.bottom = null, _.raphael = n;
        var ee = function(t) {
            var e = t.getBoundingClientRect(),
                n = t.ownerDocument,
                r = n.body,
                i = n.documentElement,
                o = i.clientTop || r.clientTop || 0,
                a = i.clientLeft || r.clientLeft || 0,
                s = e.top + (k.win.pageYOffset || i.scrollTop || r.scrollTop) - o,
                l = e.left + (k.win.pageXOffset || i.scrollLeft || r.scrollLeft) - a;
            return {
                y: s,
                x: l
            }
        };
        _.getElementByPoint = function(t, e) {
            var n = this,
                r = n.canvas,
                i = k.doc.elementFromPoint(t, e);
            if (k.win.opera && "svg" == i.tagName) {
                var o = ee(r),
                    a = r.createSVGRect();
                a.x = t - o.x, a.y = e - o.y, a.width = a.height = 1;
                var s = r.getIntersectionList(a, null);
                s.length && (i = s[s.length - 1])
            }
            if (!i) return null;
            for (; i.parentNode && i != r.parentNode && !i.raphael;) i = i.parentNode;
            return i == n.canvas.parentNode && (i = r), i = i && i.raphael ? n.getById(i.raphaelid) : null
        }, _.getElementsByBBox = function(t) {
            var e = this.set();
            return this.forEach(function(r) {
                n.isBBoxIntersect(r.getBBox(), t) && e.push(r)
            }), e
        }, _.getById = function(t) {
            for (var e = this.bottom; e;) {
                if (e.id == t) return e;
                e = e.next
            }
            return null
        }, _.forEach = function(t, e) {
            for (var n = this.bottom; n;) {
                if (t.call(e, n) === !1) return this;
                n = n.next
            }
            return this
        }, _.getElementsByPoint = function(t, e) {
            var n = this.set();
            return this.forEach(function(r) {
                r.isPointInside(t, e) && n.push(r)
            }), n
        }, Zt.isPointInside = function(t, e) {
            var r = this.realPath = vt[this.type](this);
            return this.attr("transform") && this.attr("transform").length && (r = n.transformPath(r, this.attr("transform"))), n.isPointInsidePath(r, t, e)
        }, Zt.getBBox = function(t) {
            if (this.removed) return {};
            var e = this._;
            return t ? (!e.dirty && e.bboxwt || (this.realPath = vt[this.type](this), e.bboxwt = St(this.realPath), e.bboxwt.toString = g, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = vt[this.type](this)), e.bbox = St(mt(this.realPath, this.matrix)), e.bbox.toString = g, e.dirty = e.dirtyT = 0), e.bbox)
        }, Zt.clone = function() {
            if (this.removed) return null;
            var t = this.paper[this.type]().attr(this.attr());
            return this.__set__ && this.__set__.push(t), t
        }, Zt.glow = function(t) {
            if ("text" == this.type) return null;
            t = t || {};
            var e = {
                    width: (t.width || 10) + (+this.attr("stroke-width") || 1),
                    fill: t.fill || !1,
                    opacity: t.opacity || .5,
                    offsetx: t.offsetx || 0,
                    offsety: t.offsety || 0,
                    color: t.color || "#000"
                },
                n = e.width / 2,
                r = this.paper,
                i = r.set(),
                o = this.realPath || vt[this.type](this);
            o = this.matrix ? mt(o, this.matrix) : o;
            for (var a = 1; a < n + 1; a++) i.push(r.path(o).attr({
                stroke: e.color,
                fill: e.fill ? e.color : "none",
                "stroke-linejoin": "round",
                "stroke-linecap": "round",
                "stroke-width": +(e.width / n * a).toFixed(3),
                opacity: +(e.opacity / n).toFixed(3)
            }));
            return i.insertBefore(this).translate(e.offsetx, e.offsety)
        };
        var ne = function(t, e, r, i, o, a, s, l, h) {
                return null == h ? u(t, e, r, i, o, a, s, l) : n.findDotsAtSegment(t, e, r, i, o, a, s, l, c(t, e, r, i, o, a, s, l, h))
            },
            re = function(t, e) {
                return function(r, i, o) {
                    r = jt(r);
                    for (var a, s, l, u, c, h = "", p = {}, f = 0, d = 0, g = r.length; d < g; d++) {
                        if (l = r[d], "M" == l[0]) a = +l[1], s = +l[2];
                        else {
                            if (u = ne(a, s, l[1], l[2], l[3], l[4], l[5], l[6]), f + u > i) {
                                if (e && !p.start) {
                                    if (c = ne(a, s, l[1], l[2], l[3], l[4], l[5], l[6], i - f), h += ["C" + c.start.x, c.start.y, c.m.x, c.m.y, c.x, c.y], o) return h;
                                    p.start = h, h = ["M" + c.x, c.y + "C" + c.n.x, c.n.y, c.end.x, c.end.y, l[5], l[6]].join(), f += u, a = +l[5], s = +l[6];
                                    continue
                                }
                                if (!t && !e) return c = ne(a, s, l[1], l[2], l[3], l[4], l[5], l[6], i - f), {
                                    x: c.x,
                                    y: c.y,
                                    alpha: c.alpha
                                }
                            }
                            f += u, a = +l[5], s = +l[6]
                        }
                        h += l.shift() + l
                    }
                    return p.end = h, c = t ? f : e ? p : n.findDotsAtSegment(a, s, l[0], l[1], l[2], l[3], l[4], l[5], 1), c.alpha && (c = {
                        x: c.x,
                        y: c.y,
                        alpha: c.alpha
                    }), c
                }
            },
            ie = re(1),
            oe = re(),
            ae = re(0, 1);
        n.getTotalLength = ie, n.getPointAtLength = oe, n.getSubpath = function(t, e, n) {
            if (this.getTotalLength(t) - n < 1e-6) return ae(t, e).end;
            var r = ae(t, n, 1);
            return e ? ae(r, e).end : r
        }, Zt.getTotalLength = function() {
            var t = this.getPath();
            if (t) return this.node.getTotalLength ? this.node.getTotalLength() : ie(t)
        }, Zt.getPointAtLength = function(t) {
            var e = this.getPath();
            if (e) return oe(e, t)
        }, Zt.getPath = function() {
            var t, e = n._getPath[this.type];
            if ("text" != this.type && "set" != this.type) return e && (t = e(this)), t
        }, Zt.getSubpath = function(t, e) {
            var r = this.getPath();
            if (r) return n.getSubpath(r, t, e)
        };
        var se = n.easing_formulas = {
            linear: function(t) {
                return t
            },
            "<": function(t) {
                return H(t, 1.7)
            },
            ">": function(t) {
                return H(t, .48)
            },
            "<>": function(t) {
                var e = .48 - t / 1.04,
                    n = z.sqrt(.1734 + e * e),
                    r = n - e,
                    i = H(O(r), 1 / 3) * (r < 0 ? -1 : 1),
                    o = -n - e,
                    a = H(O(o), 1 / 3) * (o < 0 ? -1 : 1),
                    s = i + a + .5;
                return 3 * (1 - s) * s * s + s * s * s
            },
            backIn: function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            backOut: function(t) {
                t -= 1;
                var e = 1.70158;
                return t * t * ((e + 1) * t + e) + 1
            },
            elastic: function(t) {
                return t == !!t ? t : H(2, -10 * t) * z.sin((t - .075) * (2 * W) / .3) + 1
            },
            bounce: function(t) {
                var e, n = 7.5625,
                    r = 2.75;
                return t < 1 / r ? e = n * t * t : t < 2 / r ? (t -= 1.5 / r, e = n * t * t + .75) : t < 2.5 / r ? (t -= 2.25 / r, e = n * t * t + .9375) : (t -= 2.625 / r, e = n * t * t + .984375), e
            }
        };
        se.easeIn = se["ease-in"] = se["<"], se.easeOut = se["ease-out"] = se[">"], se.easeInOut = se["ease-in-out"] = se["<>"], se["back-in"] = se.backIn, se["back-out"] = se.backOut;
        var le = [],
            ue = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                setTimeout(t, 16)
            },
            ce = function() {
                for (var t = +new Date, r = 0; r < le.length; r++) {
                    var i = le[r];
                    if (!i.el.removed && !i.paused) {
                        var o, a, s = t - i.start,
                            l = i.ms,
                            u = i.easing,
                            c = i.from,
                            h = i.diff,
                            p = i.to,
                            f = (i.t, i.el),
                            d = {},
                            g = {};
                        if (i.initstatus ? (s = (i.initstatus * i.anim.top - i.prev) / (i.percent - i.prev) * l, i.status = i.initstatus, delete i.initstatus, i.stop && le.splice(r--, 1)) : i.status = (i.prev + (i.percent - i.prev) * (s / l)) / i.anim.top, !(s < 0))
                            if (s < l) {
                                var v = u(s / l);
                                for (var m in c)
                                    if (c[M](m)) {
                                        switch (rt[m]) {
                                            case U:
                                                o = +c[m] + v * l * h[m];
                                                break;
                                            case "colour":
                                                o = "rgb(" + [he(Z(c[m].r + v * l * h[m].r)), he(Z(c[m].g + v * l * h[m].g)), he(Z(c[m].b + v * l * h[m].b))].join(",") + ")";
                                                break;
                                            case "path":
                                                o = [];
                                                for (var x = 0, b = c[m].length; x < b; x++) {
                                                    o[x] = [c[m][x][0]];
                                                    for (var _ = 1, w = c[m][x].length; _ < w; _++) o[x][_] = +c[m][x][_] + v * l * h[m][x][_];
                                                    o[x] = o[x].join(P)
                                                }
                                                o = o.join(P);
                                                break;
                                            case "transform":
                                                if (h[m].real)
                                                    for (o = [], x = 0, b = c[m].length; x < b; x++)
                                                        for (o[x] = [c[m][x][0]], _ = 1, w = c[m][x].length; _ < w; _++) o[x][_] = c[m][x][_] + v * l * h[m][x][_];
                                                else {
                                                    var T = function(t) {
                                                        return +c[m][t] + v * l * h[m][t]
                                                    };
                                                    o = [
                                                        ["m", T(0), T(1), T(2), T(3), T(4), T(5)]
                                                    ]
                                                }
                                                break;
                                            case "csv":
                                                if ("clip-rect" == m)
                                                    for (o = [], x = 4; x--;) o[x] = +c[m][x] + v * l * h[m][x];
                                                break;
                                            default:
                                                var C = [][N](c[m]);
                                                for (o = [], x = f.paper.customAttributes[m].length; x--;) o[x] = +C[x] + v * l * h[m][x]
                                        }
                                        d[m] = o
                                    }
                                f.attr(d),
                                    function(t, n, r) {
                                        setTimeout(function() {
                                            e("raphael.anim.frame." + t, n, r)
                                        })
                                    }(f.id, f, i.anim)
                            } else {
                                if (function(t, r, i) {
                                        setTimeout(function() {
                                            e("raphael.anim.frame." + r.id, r, i), e("raphael.anim.finish." + r.id, r, i), n.is(t, "function") && t.call(r)
                                        })
                                    }(i.callback, f, i.anim), f.attr(p), le.splice(r--, 1), i.repeat > 1 && !i.next) {
                                    for (a in p) p[M](a) && (g[a] = i.totalOrigin[a]);
                                    i.el.attr(g), y(i.anim, i.el, i.anim.percents[0], null, i.totalOrigin, i.repeat - 1)
                                }
                                i.next && !i.stop && y(i.anim, i.el, i.next, null, i.totalOrigin, i.repeat)
                            }
                    }
                }
                n.svg && f && f.paper && f.paper.safari(), le.length && ue(ce)
            },
            he = function(t) {
                return t > 255 ? 255 : t < 0 ? 0 : t
            };
        Zt.animateWith = function(t, e, r, i, o, a) {
            var s = this;
            if (s.removed) return a && a.call(s), s;
            var l = r instanceof m ? r : n.animation(r, i, o, a);
            y(l, s, l.percents[0], null, s.attr());
            for (var u = 0, c = le.length; u < c; u++)
                if (le[u].anim == e && le[u].el == t) {
                    le[c - 1].start = le[u].start;
                    break
                }
            return s
        }, Zt.onAnimation = function(t) {
            return t ? e.on("raphael.anim.frame." + this.id, t) : e.unbind("raphael.anim.frame." + this.id), this
        }, m.prototype.delay = function(t) {
            var e = new m(this.anim, this.ms);
            return e.times = this.times, e.del = +t || 0, e
        }, m.prototype.repeat = function(t) {
            var e = new m(this.anim, this.ms);
            return e.del = this.del, e.times = z.floor(B(t, 0)) || 1, e
        }, n.animation = function(t, e, r, i) {
            if (t instanceof m) return t;
            !n.is(r, "function") && r || (i = i || r || null, r = null), t = Object(t), e = +e || 0;
            var o, a, s = {};
            for (a in t) t[M](a) && Q(a) != a && Q(a) + "%" != a && (o = !0, s[a] = t[a]);
            if (o) return r && (s.easing = r), i && (s.callback = i), new m({
                100: s
            }, e);
            if (i) {
                var l = 0;
                for (var u in t) {
                    var c = tt(u);
                    t[M](u) && c > l && (l = c)
                }
                l += "%", !t[l].callback && (t[l].callback = i)
            }
            return new m(t, e)
        }, Zt.animate = function(t, e, r, i) {
            var o = this;
            if (o.removed) return i && i.call(o), o;
            var a = t instanceof m ? t : n.animation(t, e, r, i);
            return y(a, o, a.percents[0], null, o.attr()), o
        }, Zt.setTime = function(t, e) {
            return t && null != e && this.status(t, q(e, t.ms) / t.ms), this
        }, Zt.status = function(t, e) {
            var n, r, i = [],
                o = 0;
            if (null != e) return y(t, this, -1, q(e, 1)), this;
            for (n = le.length; o < n; o++)
                if (r = le[o], r.el.id == this.id && (!t || r.anim == t)) {
                    if (t) return r.status;
                    i.push({
                        anim: r.anim,
                        status: r.status
                    })
                }
            return t ? 0 : i
        }, Zt.pause = function(t) {
            for (var n = 0; n < le.length; n++) le[n].el.id != this.id || t && le[n].anim != t || e("raphael.anim.pause." + this.id, this, le[n].anim) !== !1 && (le[n].paused = !0);
            return this
        }, Zt.resume = function(t) {
            for (var n = 0; n < le.length; n++)
                if (le[n].el.id == this.id && (!t || le[n].anim == t)) {
                    var r = le[n];
                    e("raphael.anim.resume." + this.id, this, r.anim) !== !1 && (delete r.paused, this.status(r.anim, r.status))
                }
            return this
        }, Zt.stop = function(t) {
            for (var n = 0; n < le.length; n++) le[n].el.id != this.id || t && le[n].anim != t || e("raphael.anim.stop." + this.id, this, le[n].anim) !== !1 && le.splice(n--, 1);
            return this
        }, e.on("raphael.remove", x), e.on("raphael.clear", x), Zt.toString = function() {
            return "Raphaël’s object"
        };
        var pe = function(t) {
                if (this.items = [], this.length = 0, this.type = "set", t)
                    for (var e = 0, n = t.length; e < n; e++) !t[e] || t[e].constructor != Zt.constructor && t[e].constructor != pe || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
            },
            fe = pe.prototype;
        fe.push = function() {
            for (var t, e, n = 0, r = arguments.length; n < r; n++) t = arguments[n], !t || t.constructor != Zt.constructor && t.constructor != pe || (e = this.items.length, this[e] = this.items[e] = t, this.length++);
            return this
        }, fe.pop = function() {
            return this.length && delete this[this.length--], this.items.pop()
        }, fe.forEach = function(t, e) {
            for (var n = 0, r = this.items.length; n < r; n++)
                if (t.call(e, this.items[n], n) === !1) return this;
            return this
        };
        for (var de in Zt) Zt[M](de) && (fe[de] = function(t) {
            return function() {
                var e = arguments;
                return this.forEach(function(n) {
                    n[t][E](n, e)
                })
            }
        }(de));
        return fe.attr = function(t, e) {
                if (t && n.is(t, V) && n.is(t[0], "object"))
                    for (var r = 0, i = t.length; r < i; r++) this.items[r].attr(t[r]);
                else
                    for (var o = 0, a = this.items.length; o < a; o++) this.items[o].attr(t, e);
                return this
            }, fe.clear = function() {
                for (; this.length;) this.pop()
            }, fe.splice = function(t, e, n) {
                t = t < 0 ? B(this.length + t, 0) : t, e = B(0, q(this.length - t, e));
                var r, i = [],
                    o = [],
                    a = [];
                for (r = 2; r < arguments.length; r++) a.push(arguments[r]);
                for (r = 0; r < e; r++) o.push(this[t + r]);
                for (; r < this.length - t; r++) i.push(this[t + r]);
                var s = a.length;
                for (r = 0; r < s + i.length; r++) this.items[t + r] = this[t + r] = r < s ? a[r] : i[r - s];
                for (r = this.items.length = this.length -= e - s; this[r];) delete this[r++];
                return new pe(o)
            }, fe.exclude = function(t) {
                for (var e = 0, n = this.length; e < n; e++)
                    if (this[e] == t) return this.splice(e, 1), !0
            }, fe.animate = function(t, e, r, i) {
                (n.is(r, "function") || !r) && (i = r || null);
                var o, a, s = this.items.length,
                    l = s,
                    u = this;
                if (!s) return this;
                i && (a = function() {
                    !--s && i.call(u)
                }), r = n.is(r, Y) ? r : a;
                var c = n.animation(t, e, r, a);
                for (o = this.items[--l].animate(c); l--;) this.items[l] && !this.items[l].removed && this.items[l].animateWith(o, c, c), this.items[l] && !this.items[l].removed || s--;
                return this
            }, fe.insertAfter = function(t) {
                for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
                return this
            }, fe.getBBox = function() {
                for (var t = [], e = [], n = [], r = [], i = this.items.length; i--;)
                    if (!this.items[i].removed) {
                        var o = this.items[i].getBBox();
                        t.push(o.x), e.push(o.y), n.push(o.x + o.width), r.push(o.y + o.height)
                    }
                return t = q[E](0, t), e = q[E](0, e), n = B[E](0, n), r = B[E](0, r), {
                    x: t,
                    y: e,
                    x2: n,
                    y2: r,
                    width: n - t,
                    height: r - e
                }
            }, fe.clone = function(t) {
                t = this.paper.set();
                for (var e = 0, n = this.items.length; e < n; e++) t.push(this.items[e].clone());
                return t
            }, fe.toString = function() {
                return "Raphaël‘s set"
            }, fe.glow = function(t) {
                var e = this.paper.set();
                return this.forEach(function(n, r) {
                    var i = n.glow(t);
                    null != i && i.forEach(function(t, n) {
                        e.push(t)
                    })
                }), e
            }, fe.isPointInside = function(t, e) {
                var n = !1;
                return this.forEach(function(r) {
                    if (r.isPointInside(t, e)) return n = !0, !1
                }), n
            }, n.registerFont = function(t) {
                if (!t.face) return t;
                this.fonts = this.fonts || {};
                var e = {
                        w: t.w,
                        face: {},
                        glyphs: {}
                    },
                    n = t.face["font-family"];
                for (var r in t.face) t.face[M](r) && (e.face[r] = t.face[r]);
                if (this.fonts[n] ? this.fonts[n].push(e) : this.fonts[n] = [e], !t.svg) {
                    e.face["units-per-em"] = tt(t.face["units-per-em"], 10);
                    for (var i in t.glyphs)
                        if (t.glyphs[M](i)) {
                            var o = t.glyphs[i];
                            if (e.glyphs[i] = {
                                    w: o.w,
                                    k: {},
                                    d: o.d && "M" + o.d.replace(/[mlcxtrv]/g, function(t) {
                                        return {
                                            l: "L",
                                            c: "C",
                                            x: "z",
                                            t: "m",
                                            r: "l",
                                            v: "c"
                                        }[t] || "M"
                                    }) + "z"
                                }, o.k)
                                for (var a in o.k) o[M](a) && (e.glyphs[i].k[a] = o.k[a])
                        }
                }
                return t
            }, _.getFont = function(t, e, r, i) {
                if (i = i || "normal", r = r || "normal", e = +e || {
                        normal: 400,
                        bold: 700,
                        lighter: 300,
                        bolder: 800
                    }[e] || 400, n.fonts) {
                    var o = n.fonts[t];
                    if (!o) {
                        var a = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, I) + "(\\s|$)", "i");
                        for (var s in n.fonts)
                            if (n.fonts[M](s) && a.test(s)) {
                                o = n.fonts[s];
                                break
                            }
                    }
                    var l;
                    if (o)
                        for (var u = 0, c = o.length; u < c && (l = o[u], l.face["font-weight"] != e || l.face["font-style"] != r && l.face["font-style"] || l.face["font-stretch"] != i); u++);
                    return l
                }
            }, _.print = function(t, e, r, i, o, a, s, l) {
                a = a || "middle", s = B(q(s || 0, 1), -1), l = B(q(l || 1, 3), 1);
                var u, c = D(r)[F](I),
                    h = 0,
                    p = 0,
                    f = I;
                if (n.is(i, "string") && (i = this.getFont(i)), i) {
                    u = (o || 16) / i.face["units-per-em"];
                    for (var d = i.face.bbox[F](w), g = +d[0], v = d[3] - d[1], m = 0, y = +d[1] + ("baseline" == a ? v + +i.face.descent : v / 2), x = 0, b = c.length; x < b; x++) {
                        if ("\n" == c[x]) h = 0, T = 0, p = 0, m += v * l;
                        else {
                            var _ = p && i.glyphs[c[x - 1]] || {},
                                T = i.glyphs[c[x]];
                            h += p ? (_.w || i.w) + (_.k && _.k[c[x]] || 0) + i.w * s : 0, p = 1
                        }
                        T && T.d && (f += n.transformPath(T.d, ["t", h * u, m * u, "s", u, u, g, y, "t", (t - g) / u, (e - y) / u]))
                    }
                }
                return this.path(f).attr({
                    fill: "#000",
                    stroke: "none"
                })
            }, _.add = function(t) {
                if (n.is(t, "array"))
                    for (var e, r = this.set(), i = 0, o = t.length; i < o; i++) e = t[i] || {}, T[M](e.type) && r.push(this[e.type]().attr(e));
                return r
            }, n.format = function(t, e) {
                var r = n.is(e, V) ? [0][N](e) : arguments;
                return t && n.is(t, Y) && r.length - 1 && (t = t.replace(C, function(t, e) {
                    return null == r[++e] ? I : r[e]
                })), t || I
            }, n.fullfill = function() {
                var t = /\{([^\}]+)\}/g,
                    e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                    n = function(t, n, r) {
                        var i = r;
                        return n.replace(e, function(t, e, n, r, o) {
                            e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && o && (i = i()))
                        }), i = (null == i || i == r ? t : i) + ""
                    };
                return function(e, r) {
                    return String(e).replace(t, function(t, e) {
                        return n(t, e, r)
                    })
                }
            }(), n.ninja = function() {
                return S.was ? k.win.Raphael = S.is : delete Raphael, n
            }, n.st = fe, e.on("raphael.DOMload", function() {
                b = !0
            }),
            function(t, e, r) {
                function i() {
                    /in/.test(t.readyState) ? setTimeout(i, 9) : n.eve("raphael.DOMload")
                }
                null == t.readyState && t.addEventListener && (t.addEventListener(e, r = function() {
                    t.removeEventListener(e, r, !1), t.readyState = "complete"
                }, !1), t.readyState = "loading"), i()
            }(document, "DOMContentLoaded"),
            function() {
                if (n.svg) {
                    var t = "hasOwnProperty",
                        e = String,
                        r = parseFloat,
                        i = parseInt,
                        o = Math,
                        a = o.max,
                        s = o.abs,
                        l = o.pow,
                        u = /[, ]+/,
                        c = n.eve,
                        h = "",
                        p = " ",
                        f = "http://www.w3.org/1999/xlink",
                        d = {
                            block: "M5,0 0,2.5 5,5z",
                            classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                            diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                            open: "M6,1 1,3.5 6,6",
                            oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                        },
                        g = {};
                    n.toString = function() {
                        return "Your browser supports SVG.\nYou are running Raphaël " + this.version
                    };
                    var v = function(r, i) {
                            if (i) {
                                "string" == typeof r && (r = v(r));
                                for (var o in i) i[t](o) && ("xlink:" == o.substring(0, 6) ? r.setAttributeNS(f, o.substring(6), e(i[o])) : r.setAttribute(o, e(i[o])))
                            } else r = n._g.doc.createElementNS("http://www.w3.org/2000/svg", r), r.style && (r.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                            return r
                        },
                        m = function(t, i) {
                            var u = "linear",
                                c = t.id + i,
                                p = .5,
                                f = .5,
                                d = t.node,
                                g = t.paper,
                                m = d.style,
                                y = n._g.doc.getElementById(c);
                            if (!y) {
                                if (i = e(i).replace(n._radial_gradient, function(t, e, n) {
                                        if (u = "radial", e && n) {
                                            p = r(e), f = r(n);
                                            var i = 2 * (f > .5) - 1;
                                            l(p - .5, 2) + l(f - .5, 2) > .25 && (f = o.sqrt(.25 - l(p - .5, 2)) * i + .5) && .5 != f && (f = f.toFixed(5) - 1e-5 * i)
                                        }
                                        return h
                                    }), i = i.split(/\s*\-\s*/), "linear" == u) {
                                    var x = i.shift();
                                    if (x = -r(x), isNaN(x)) return null;
                                    var b = [0, 0, o.cos(n.rad(x)), o.sin(n.rad(x))],
                                        _ = 1 / (a(s(b[2]), s(b[3])) || 1);
                                    b[2] *= _, b[3] *= _, b[2] < 0 && (b[0] = -b[2], b[2] = 0), b[3] < 0 && (b[1] = -b[3], b[3] = 0)
                                }
                                var w = n._parseDots(i);
                                if (!w) return null;
                                if (c = c.replace(/[\(\)\s,\xb0#]/g, "_"), t.gradient && c != t.gradient.id && (g.defs.removeChild(t.gradient), delete t.gradient), !t.gradient) {
                                    y = v(u + "Gradient", {
                                        id: c
                                    }), t.gradient = y, v(y, "radial" == u ? {
                                        fx: p,
                                        fy: f
                                    } : {
                                        x1: b[0],
                                        y1: b[1],
                                        x2: b[2],
                                        y2: b[3],
                                        gradientTransform: t.matrix.invert()
                                    }), g.defs.appendChild(y);
                                    for (var T = 0, C = w.length; T < C; T++) y.appendChild(v("stop", {
                                        offset: w[T].offset ? w[T].offset : T ? "100%" : "0%",
                                        "stop-color": w[T].color || "#fff"
                                    }))
                                }
                            }
                            return v(d, {
                                fill: "url('" + document.location + "#" + c + "')",
                                opacity: 1,
                                "fill-opacity": 1
                            }), m.fill = h, m.opacity = 1, m.fillOpacity = 1, 1
                        },
                        y = function(t) {
                            var e = t.getBBox(1);
                            v(t.pattern, {
                                patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
                            })
                        },
                        x = function(r, i, o) {
                            if ("path" == r.type) {
                                for (var a, s, l, u, c, p = e(i).toLowerCase().split("-"), f = r.paper, m = o ? "end" : "start", y = r.node, x = r.attrs, b = x["stroke-width"], _ = p.length, w = "classic", T = 3, C = 3, M = 5; _--;) switch (p[_]) {
                                    case "block":
                                    case "classic":
                                    case "oval":
                                    case "diamond":
                                    case "open":
                                    case "none":
                                        w = p[_];
                                        break;
                                    case "wide":
                                        C = 5;
                                        break;
                                    case "narrow":
                                        C = 2;
                                        break;
                                    case "long":
                                        T = 5;
                                        break;
                                    case "short":
                                        T = 2
                                }
                                if ("open" == w ? (T += 2, C += 2, M += 2, l = 1, u = o ? 4 : 1, c = {
                                        fill: "none",
                                        stroke: x.stroke
                                    }) : (u = l = T / 2, c = {
                                        fill: x.stroke,
                                        stroke: "none"
                                    }), r._.arrows ? o ? (r._.arrows.endPath && g[r._.arrows.endPath]--, r._.arrows.endMarker && g[r._.arrows.endMarker]--) : (r._.arrows.startPath && g[r._.arrows.startPath]--, r._.arrows.startMarker && g[r._.arrows.startMarker]--) : r._.arrows = {}, "none" != w) {
                                    var k = "raphael-marker-" + w,
                                        S = "raphael-marker-" + m + w + T + C + "-obj" + r.id;
                                    n._g.doc.getElementById(k) ? g[k]++ : (f.defs.appendChild(v(v("path"), {
                                        "stroke-linecap": "round",
                                        d: d[w],
                                        id: k
                                    })), g[k] = 1);
                                    var A, E = n._g.doc.getElementById(S);
                                    E ? (g[S]++, A = E.getElementsByTagName("use")[0]) : (E = v(v("marker"), {
                                        id: S,
                                        markerHeight: C,
                                        markerWidth: T,
                                        orient: "auto",
                                        refX: u,
                                        refY: C / 2
                                    }), A = v(v("use"), {
                                        "xlink:href": "#" + k,
                                        transform: (o ? "rotate(180 " + T / 2 + " " + C / 2 + ") " : h) + "scale(" + T / M + "," + C / M + ")",
                                        "stroke-width": (1 / ((T / M + C / M) / 2)).toFixed(4)
                                    }), E.appendChild(A), f.defs.appendChild(E), g[S] = 1), v(A, c);
                                    var N = l * ("diamond" != w && "oval" != w);
                                    o ? (a = r._.arrows.startdx * b || 0, s = n.getTotalLength(x.path) - N * b) : (a = N * b, s = n.getTotalLength(x.path) - (r._.arrows.enddx * b || 0)), c = {}, c["marker-" + m] = "url(#" + S + ")", (s || a) && (c.d = n.getSubpath(x.path, a, s)), v(y, c), r._.arrows[m + "Path"] = k, r._.arrows[m + "Marker"] = S, r._.arrows[m + "dx"] = N, r._.arrows[m + "Type"] = w, r._.arrows[m + "String"] = i
                                } else o ? (a = r._.arrows.startdx * b || 0, s = n.getTotalLength(x.path) - a) : (a = 0, s = n.getTotalLength(x.path) - (r._.arrows.enddx * b || 0)), r._.arrows[m + "Path"] && v(y, {
                                    d: n.getSubpath(x.path, a, s)
                                }), delete r._.arrows[m + "Path"], delete r._.arrows[m + "Marker"], delete r._.arrows[m + "dx"], delete r._.arrows[m + "Type"], delete r._.arrows[m + "String"];
                                for (c in g)
                                    if (g[t](c) && !g[c]) {
                                        var L = n._g.doc.getElementById(c);
                                        L && L.parentNode.removeChild(L)
                                    }
                            }
                        },
                        b = {
                            "": [0],
                            none: [0],
                            "-": [3, 1],
                            ".": [1, 1],
                            "-.": [3, 1, 1, 1],
                            "-..": [3, 1, 1, 1, 1, 1],
                            ". ": [1, 3],
                            "- ": [4, 3],
                            "--": [8, 3],
                            "- .": [4, 3, 1, 3],
                            "--.": [8, 3, 1, 3],
                            "--..": [8, 3, 1, 3, 1, 3]
                        },
                        _ = function(t, n, r) {
                            if (n = b[e(n).toLowerCase()]) {
                                for (var i = t.attrs["stroke-width"] || "1", o = {
                                        round: i,
                                        square: i,
                                        butt: 0
                                    }[t.attrs["stroke-linecap"] || r["stroke-linecap"]] || 0, a = [], s = n.length; s--;) a[s] = n[s] * i + (s % 2 ? 1 : -1) * o;
                                v(t.node, {
                                    "stroke-dasharray": a.join(",")
                                })
                            }
                        },
                        w = function(r, o) {
                            var l = r.node,
                                c = r.attrs,
                                p = l.style.visibility;
                            l.style.visibility = "hidden";
                            for (var d in o)
                                if (o[t](d)) {
                                    if (!n._availableAttrs[t](d)) continue;
                                    var g = o[d];
                                    switch (c[d] = g, d) {
                                        case "blur":
                                            r.blur(g);
                                            break;
                                        case "title":
                                            var b = l.getElementsByTagName("title");
                                            if (b.length && (b = b[0])) b.firstChild.nodeValue = g;
                                            else {
                                                b = v("title");
                                                var w = n._g.doc.createTextNode(g);
                                                b.appendChild(w), l.appendChild(b)
                                            }
                                            break;
                                        case "href":
                                        case "target":
                                            var T = l.parentNode;
                                            if ("a" != T.tagName.toLowerCase()) {
                                                var M = v("a");
                                                T.insertBefore(M, l), M.appendChild(l), T = M
                                            }
                                            "target" == d ? T.setAttributeNS(f, "show", "blank" == g ? "new" : g) : T.setAttributeNS(f, d, g);
                                            break;
                                        case "cursor":
                                            l.style.cursor = g;
                                            break;
                                        case "transform":
                                            r.transform(g);
                                            break;
                                        case "arrow-start":
                                            x(r, g);
                                            break;
                                        case "arrow-end":
                                            x(r, g, 1);
                                            break;
                                        case "clip-rect":
                                            var k = e(g).split(u);
                                            if (4 == k.length) {
                                                r.clip && r.clip.parentNode.parentNode.removeChild(r.clip.parentNode);
                                                var S = v("clipPath"),
                                                    A = v("rect");
                                                S.id = n.createUUID(), v(A, {
                                                    x: k[0],
                                                    y: k[1],
                                                    width: k[2],
                                                    height: k[3]
                                                }), S.appendChild(A), r.paper.defs.appendChild(S), v(l, {
                                                    "clip-path": "url(#" + S.id + ")"
                                                }), r.clip = A
                                            }
                                            if (!g) {
                                                var E = l.getAttribute("clip-path");
                                                if (E) {
                                                    var N = n._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g, h));
                                                    N && N.parentNode.removeChild(N), v(l, {
                                                        "clip-path": h
                                                    }), delete r.clip
                                                }
                                            }
                                            break;
                                        case "path":
                                            "path" == r.type && (v(l, {
                                                d: g ? c.path = n._pathToAbsolute(g) : "M0,0"
                                            }), r._.dirty = 1, r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), "endString" in r._.arrows && x(r, r._.arrows.endString, 1)));
                                            break;
                                        case "width":
                                            if (l.setAttribute(d, g), r._.dirty = 1, !c.fx) break;
                                            d = "x", g = c.x;
                                        case "x":
                                            c.fx && (g = -c.x - (c.width || 0));
                                        case "rx":
                                            if ("rx" == d && "rect" == r.type) break;
                                        case "cx":
                                            l.setAttribute(d, g), r.pattern && y(r), r._.dirty = 1;
                                            break;
                                        case "height":
                                            if (l.setAttribute(d, g), r._.dirty = 1, !c.fy) break;
                                            d = "y", g = c.y;
                                        case "y":
                                            c.fy && (g = -c.y - (c.height || 0));
                                        case "ry":
                                            if ("ry" == d && "rect" == r.type) break;
                                        case "cy":
                                            l.setAttribute(d, g), r.pattern && y(r), r._.dirty = 1;
                                            break;
                                        case "r":
                                            "rect" == r.type ? v(l, {
                                                rx: g,
                                                ry: g
                                            }) : l.setAttribute(d, g), r._.dirty = 1;
                                            break;
                                        case "src":
                                            "image" == r.type && l.setAttributeNS(f, "href", g);
                                            break;
                                        case "stroke-width":
                                            1 == r._.sx && 1 == r._.sy || (g /= a(s(r._.sx), s(r._.sy)) || 1), l.setAttribute(d, g), c["stroke-dasharray"] && _(r, c["stroke-dasharray"], o), r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), "endString" in r._.arrows && x(r, r._.arrows.endString, 1));
                                            break;
                                        case "stroke-dasharray":
                                            _(r, g, o);
                                            break;
                                        case "fill":
                                            var L = e(g).match(n._ISURL);
                                            if (L) {
                                                S = v("pattern");
                                                var I = v("image");
                                                S.id = n.createUUID(), v(S, {
                                                        x: 0,
                                                        y: 0,
                                                        patternUnits: "userSpaceOnUse",
                                                        height: 1,
                                                        width: 1
                                                    }), v(I, {
                                                        x: 0,
                                                        y: 0,
                                                        "xlink:href": L[1]
                                                    }), S.appendChild(I),
                                                    function(t) {
                                                        n._preload(L[1], function() {
                                                            var e = this.offsetWidth,
                                                                n = this.offsetHeight;
                                                            v(t, {
                                                                width: e,
                                                                height: n
                                                            }), v(I, {
                                                                width: e,
                                                                height: n
                                                            }), r.paper.safari()
                                                        })
                                                    }(S), r.paper.defs.appendChild(S), v(l, {
                                                        fill: "url(#" + S.id + ")"
                                                    }), r.pattern = S, r.pattern && y(r);
                                                break
                                            }
                                            var P = n.getRGB(g);
                                            if (P.error) {
                                                if (("circle" == r.type || "ellipse" == r.type || "r" != e(g).charAt()) && m(r, g)) {
                                                    if ("opacity" in c || "fill-opacity" in c) {
                                                        var D = n._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, h));
                                                        if (D) {
                                                            var F = D.getElementsByTagName("stop");
                                                            v(F[F.length - 1], {
                                                                "stop-opacity": ("opacity" in c ? c.opacity : 1) * ("fill-opacity" in c ? c["fill-opacity"] : 1)
                                                            })
                                                        }
                                                    }
                                                    c.gradient = g, c.fill = "none";
                                                    break
                                                }
                                            } else delete o.gradient, delete c.gradient, !n.is(c.opacity, "undefined") && n.is(o.opacity, "undefined") && v(l, {
                                                opacity: c.opacity
                                            }), !n.is(c["fill-opacity"], "undefined") && n.is(o["fill-opacity"], "undefined") && v(l, {
                                                "fill-opacity": c["fill-opacity"]
                                            });
                                            P[t]("opacity") && v(l, {
                                                "fill-opacity": P.opacity > 1 ? P.opacity / 100 : P.opacity
                                            });
                                        case "stroke":
                                            P = n.getRGB(g), l.setAttribute(d, P.hex), "stroke" == d && P[t]("opacity") && v(l, {
                                                "stroke-opacity": P.opacity > 1 ? P.opacity / 100 : P.opacity
                                            }), "stroke" == d && r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), "endString" in r._.arrows && x(r, r._.arrows.endString, 1));
                                            break;
                                        case "gradient":
                                            ("circle" == r.type || "ellipse" == r.type || "r" != e(g).charAt()) && m(r, g);
                                            break;
                                        case "opacity":
                                            c.gradient && !c[t]("stroke-opacity") && v(l, {
                                                "stroke-opacity": g > 1 ? g / 100 : g
                                            });
                                        case "fill-opacity":
                                            if (c.gradient) {
                                                D = n._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, h)), D && (F = D.getElementsByTagName("stop"), v(F[F.length - 1], {
                                                    "stop-opacity": g
                                                }));
                                                break
                                            }
                                        default:
                                            "font-size" == d && (g = i(g, 10) + "px");
                                            var j = d.replace(/(\-.)/g, function(t) {
                                                return t.substring(1).toUpperCase()
                                            });
                                            l.style[j] = g, r._.dirty = 1, l.setAttribute(d, g)
                                    }
                                }
                            C(r, o), l.style.visibility = p
                        },
                        T = 1.2,
                        C = function(r, o) {
                            if ("text" == r.type && (o[t]("text") || o[t]("font") || o[t]("font-size") || o[t]("x") || o[t]("y"))) {
                                var a = r.attrs,
                                    s = r.node,
                                    l = s.firstChild ? i(n._g.doc.defaultView.getComputedStyle(s.firstChild, h).getPropertyValue("font-size"), 10) : 10;
                                if (o[t]("text")) {
                                    for (a.text = o.text; s.firstChild;) s.removeChild(s.firstChild);
                                    for (var u, c = e(o.text).split("\n"), p = [], f = 0, d = c.length; f < d; f++) u = v("tspan"), f && v(u, {
                                        dy: l * T,
                                        x: a.x
                                    }), u.appendChild(n._g.doc.createTextNode(c[f])), s.appendChild(u), p[f] = u
                                } else
                                    for (p = s.getElementsByTagName("tspan"), f = 0, d = p.length; f < d; f++) f ? v(p[f], {
                                        dy: l * T,
                                        x: a.x
                                    }) : v(p[0], {
                                        dy: 0
                                    });
                                v(s, {
                                    x: a.x,
                                    y: a.y
                                }), r._.dirty = 1;
                                var g = r._getBBox(),
                                    m = a.y - (g.y + g.height / 2);
                                m && n.is(m, "finite") && v(p[0], {
                                    dy: m
                                })
                            }
                        },
                        M = function(t) {
                            return t.parentNode && "a" === t.parentNode.tagName.toLowerCase() ? t.parentNode : t
                        },
                        k = function(t, e) {
                            this[0] = this.node = t, t.raphael = !0, this.id = n._oid++, t.raphaelid = this.id, this.matrix = n.matrix(), this.realPath = null, this.paper = e, this.attrs = this.attrs || {}, this._ = {
                                transform: [],
                                sx: 1,
                                sy: 1,
                                deg: 0,
                                dx: 0,
                                dy: 0,
                                dirty: 1
                            }, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), e.top = this, this.next = null
                        },
                        S = n.el;
                    k.prototype = S, S.constructor = k, n._engine.path = function(t, e) {
                        var n = v("path");
                        e.canvas && e.canvas.appendChild(n);
                        var r = new k(n, e);
                        return r.type = "path", w(r, {
                            fill: "none",
                            stroke: "#000",
                            path: t
                        }), r
                    }, S.rotate = function(t, n, i) {
                        if (this.removed) return this;
                        if (t = e(t).split(u), t.length - 1 && (n = r(t[1]), i = r(t[2])), t = r(t[0]), null == i && (n = i), null == n || null == i) {
                            var o = this.getBBox(1);
                            n = o.x + o.width / 2, i = o.y + o.height / 2
                        }
                        return this.transform(this._.transform.concat([
                            ["r", t, n, i]
                        ])), this
                    }, S.scale = function(t, n, i, o) {
                        if (this.removed) return this;
                        if (t = e(t).split(u), t.length - 1 && (n = r(t[1]), i = r(t[2]), o = r(t[3])), t = r(t[0]), null == n && (n = t), null == o && (i = o), null == i || null == o) var a = this.getBBox(1);
                        return i = null == i ? a.x + a.width / 2 : i, o = null == o ? a.y + a.height / 2 : o, this.transform(this._.transform.concat([
                            ["s", t, n, i, o]
                        ])), this
                    }, S.translate = function(t, n) {
                        return this.removed ? this : (t = e(t).split(u), t.length - 1 && (n = r(t[1])), t = r(t[0]) || 0, n = +n || 0, this.transform(this._.transform.concat([
                            ["t", t, n]
                        ])), this)
                    }, S.transform = function(e) {
                        var r = this._;
                        if (null == e) return r.transform;
                        if (n._extractTransform(this, e), this.clip && v(this.clip, {
                                transform: this.matrix.invert()
                            }), this.pattern && y(this), this.node && v(this.node, {
                                transform: this.matrix
                            }), 1 != r.sx || 1 != r.sy) {
                            var i = this.attrs[t]("stroke-width") ? this.attrs["stroke-width"] : 1;
                            this.attr({
                                "stroke-width": i
                            })
                        }
                        return this
                    }, S.hide = function() {
                        return !this.removed && this.paper.safari(this.node.style.display = "none"), this
                    }, S.show = function() {
                        return !this.removed && this.paper.safari(this.node.style.display = ""), this
                    }, S.remove = function() {
                        var t = M(this.node);
                        if (!this.removed && t.parentNode) {
                            var e = this.paper;
                            e.__set__ && e.__set__.exclude(this), c.unbind("raphael.*.*." + this.id), this.gradient && e.defs.removeChild(this.gradient), n._tear(this, e), t.parentNode.removeChild(t), this.removeData();
                            for (var r in this) this[r] = "function" == typeof this[r] ? n._removedFactory(r) : null;
                            this.removed = !0
                        }
                    }, S._getBBox = function() {
                        if ("none" == this.node.style.display) {
                            this.show();
                            var t = !0
                        }
                        var e, n = !1;
                        this.paper.canvas.parentElement ? e = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (e = this.paper.canvas.parentNode.style), e && "none" == e.display && (n = !0, e.display = "");
                        var r = {};
                        try {
                            r = this.node.getBBox()
                        } catch (t) {
                            r = {
                                x: this.node.clientLeft,
                                y: this.node.clientTop,
                                width: this.node.clientWidth,
                                height: this.node.clientHeight
                            }
                        } finally {
                            r = r || {}, n && (e.display = "none")
                        }
                        return t && this.hide(), r
                    }, S.attr = function(e, r) {
                        if (this.removed) return this;
                        if (null == e) {
                            var i = {};
                            for (var o in this.attrs) this.attrs[t](o) && (i[o] = this.attrs[o]);
                            return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
                        }
                        if (null == r && n.is(e, "string")) {
                            if ("fill" == e && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                            if ("transform" == e) return this._.transform;
                            for (var a = e.split(u), s = {}, l = 0, h = a.length; l < h; l++) e = a[l], e in this.attrs ? s[e] = this.attrs[e] : n.is(this.paper.customAttributes[e], "function") ? s[e] = this.paper.customAttributes[e].def : s[e] = n._availableAttrs[e];
                            return h - 1 ? s : s[a[0]]
                        }
                        if (null == r && n.is(e, "array")) {
                            for (s = {}, l = 0, h = e.length; l < h; l++) s[e[l]] = this.attr(e[l]);
                            return s
                        }
                        if (null != r) {
                            var p = {};
                            p[e] = r
                        } else null != e && n.is(e, "object") && (p = e);
                        for (var f in p) c("raphael.attr." + f + "." + this.id, this, p[f]);
                        for (f in this.paper.customAttributes)
                            if (this.paper.customAttributes[t](f) && p[t](f) && n.is(this.paper.customAttributes[f], "function")) {
                                var d = this.paper.customAttributes[f].apply(this, [].concat(p[f]));
                                this.attrs[f] = p[f];
                                for (var g in d) d[t](g) && (p[g] = d[g])
                            }
                        return w(this, p), this
                    }, S.toFront = function() {
                        if (this.removed) return this;
                        var t = M(this.node);
                        t.parentNode.appendChild(t);
                        var e = this.paper;
                        return e.top != this && n._tofront(this, e), this
                    }, S.toBack = function() {
                        if (this.removed) return this;
                        var t = M(this.node),
                            e = t.parentNode;
                        e.insertBefore(t, e.firstChild), n._toback(this, this.paper);
                        this.paper;
                        return this
                    }, S.insertAfter = function(t) {
                        if (this.removed || !t) return this;
                        var e = M(this.node),
                            r = M(t.node || t[t.length - 1].node);
                        return r.nextSibling ? r.parentNode.insertBefore(e, r.nextSibling) : r.parentNode.appendChild(e), n._insertafter(this, t, this.paper), this
                    }, S.insertBefore = function(t) {
                        if (this.removed || !t) return this;
                        var e = M(this.node),
                            r = M(t.node || t[0].node);
                        return r.parentNode.insertBefore(e, r), n._insertbefore(this, t, this.paper), this
                    }, S.blur = function(t) {
                        var e = this;
                        if (0 !== +t) {
                            var r = v("filter"),
                                i = v("feGaussianBlur");
                            e.attrs.blur = t, r.id = n.createUUID(), v(i, {
                                stdDeviation: +t || 1.5
                            }), r.appendChild(i), e.paper.defs.appendChild(r), e._blur = r, v(e.node, {
                                filter: "url(#" + r.id + ")"
                            })
                        } else e._blur && (e._blur.parentNode.removeChild(e._blur), delete e._blur, delete e.attrs.blur), e.node.removeAttribute("filter");
                        return e
                    }, n._engine.circle = function(t, e, n, r) {
                        var i = v("circle");
                        t.canvas && t.canvas.appendChild(i);
                        var o = new k(i, t);
                        return o.attrs = {
                            cx: e,
                            cy: n,
                            r: r,
                            fill: "none",
                            stroke: "#000"
                        }, o.type = "circle", v(i, o.attrs), o
                    }, n._engine.rect = function(t, e, n, r, i, o) {
                        var a = v("rect");
                        t.canvas && t.canvas.appendChild(a);
                        var s = new k(a, t);
                        return s.attrs = {
                            x: e,
                            y: n,
                            width: r,
                            height: i,
                            rx: o || 0,
                            ry: o || 0,
                            fill: "none",
                            stroke: "#000"
                        }, s.type = "rect", v(a, s.attrs), s
                    }, n._engine.ellipse = function(t, e, n, r, i) {
                        var o = v("ellipse");
                        t.canvas && t.canvas.appendChild(o);
                        var a = new k(o, t);
                        return a.attrs = {
                            cx: e,
                            cy: n,
                            rx: r,
                            ry: i,
                            fill: "none",
                            stroke: "#000"
                        }, a.type = "ellipse", v(o, a.attrs), a
                    }, n._engine.image = function(t, e, n, r, i, o) {
                        var a = v("image");
                        v(a, {
                            x: n,
                            y: r,
                            width: i,
                            height: o,
                            preserveAspectRatio: "none"
                        }), a.setAttributeNS(f, "href", e), t.canvas && t.canvas.appendChild(a);
                        var s = new k(a, t);
                        return s.attrs = {
                            x: n,
                            y: r,
                            width: i,
                            height: o,
                            src: e
                        }, s.type = "image", s
                    }, n._engine.text = function(t, e, r, i) {
                        var o = v("text");
                        t.canvas && t.canvas.appendChild(o);
                        var a = new k(o, t);
                        return a.attrs = {
                            x: e,
                            y: r,
                            "text-anchor": "middle",
                            text: i,
                            "font-family": n._availableAttrs["font-family"],
                            "font-size": n._availableAttrs["font-size"],
                            stroke: "none",
                            fill: "#000"
                        }, a.type = "text", w(a, a.attrs), a
                    }, n._engine.setSize = function(t, e) {
                        return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
                    }, n._engine.create = function() {
                        var t = n._getContainer.apply(0, arguments),
                            e = t && t.container,
                            r = t.x,
                            i = t.y,
                            o = t.width,
                            a = t.height;
                        if (!e) throw new Error("SVG container not found.");
                        var s, l = v("svg"),
                            u = "overflow:hidden;";
                        return r = r || 0, i = i || 0, o = o || 512, a = a || 342, v(l, {
                            height: a,
                            version: 1.1,
                            width: o,
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink"
                        }), 1 == e ? (l.style.cssText = u + "position:absolute;left:" + r + "px;top:" + i + "px", n._g.doc.body.appendChild(l), s = 1) : (l.style.cssText = u + "position:relative", e.firstChild ? e.insertBefore(l, e.firstChild) : e.appendChild(l)), e = new n._Paper, e.width = o, e.height = a, e.canvas = l, e.clear(), e._left = e._top = 0, s && (e.renderfix = function() {}), e.renderfix(), e
                    }, n._engine.setViewBox = function(t, e, n, r, i) {
                        c("raphael.setViewBox", this, this._viewBox, [t, e, n, r, i]);
                        var o, s, l = this.getSize(),
                            u = a(n / l.width, r / l.height),
                            h = this.top,
                            f = i ? "xMidYMid meet" : "xMinYMin";
                        for (null == t ? (this._vbSize && (u = 1), delete this._vbSize, o = "0 0 " + this.width + p + this.height) : (this._vbSize = u, o = t + p + e + p + n + p + r), v(this.canvas, {
                                viewBox: o,
                                preserveAspectRatio: f
                            }); u && h;) s = "stroke-width" in h.attrs ? h.attrs["stroke-width"] : 1, h.attr({
                            "stroke-width": s
                        }), h._.dirty = 1, h._.dirtyT = 1, h = h.prev;
                        return this._viewBox = [t, e, n, r, !!i], this
                    }, n.prototype.renderfix = function() {
                        var t, e = this.canvas,
                            n = e.style;
                        try {
                            t = e.getScreenCTM() || e.createSVGMatrix()
                        } catch (n) {
                            t = e.createSVGMatrix()
                        }
                        var r = -t.e % 1,
                            i = -t.f % 1;
                        (r || i) && (r && (this._left = (this._left + r) % 1, n.left = this._left + "px"), i && (this._top = (this._top + i) % 1, n.top = this._top + "px"))
                    }, n.prototype.clear = function() {
                        n.eve("raphael.clear", this);
                        for (var t = this.canvas; t.firstChild;) t.removeChild(t.firstChild);
                        this.bottom = this.top = null, (this.desc = v("desc")).appendChild(n._g.doc.createTextNode("Created with Raphaël " + n.version)), t.appendChild(this.desc), t.appendChild(this.defs = v("defs"))
                    }, n.prototype.remove = function() {
                        c("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                        for (var t in this) this[t] = "function" == typeof this[t] ? n._removedFactory(t) : null
                    };
                    var A = n.st;
                    for (var E in S) S[t](E) && !A[t](E) && (A[E] = function(t) {
                        return function() {
                            var e = arguments;
                            return this.forEach(function(n) {
                                n[t].apply(n, e)
                            })
                        }
                    }(E))
                }
            }(),
            function() {
                if (n.vml) {
                    var t = "hasOwnProperty",
                        e = String,
                        r = parseFloat,
                        i = Math,
                        o = i.round,
                        a = i.max,
                        s = i.min,
                        l = i.abs,
                        u = "fill",
                        c = /[, ]+/,
                        h = n.eve,
                        p = " progid:DXImageTransform.Microsoft",
                        f = " ",
                        d = "",
                        g = {
                            M: "m",
                            L: "l",
                            C: "c",
                            Z: "x",
                            m: "t",
                            l: "r",
                            c: "v",
                            z: "x"
                        },
                        v = /([clmz]),?([^clmz]*)/gi,
                        m = / progid:\S+Blur\([^\)]+\)/g,
                        y = /-?[^,\s-]+/g,
                        x = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
                        b = 21600,
                        _ = {
                            path: 1,
                            rect: 1,
                            image: 1
                        },
                        w = {
                            circle: 1,
                            ellipse: 1
                        },
                        T = function(t) {
                            var r = /[ahqstv]/gi,
                                i = n._pathToAbsolute;
                            if (e(t).match(r) && (i = n._path2curve), r = /[clmz]/g, i == n._pathToAbsolute && !e(t).match(r)) {
                                var a = e(t).replace(v, function(t, e, n) {
                                    var r = [],
                                        i = "m" == e.toLowerCase(),
                                        a = g[e];
                                    return n.replace(y, function(t) {
                                        i && 2 == r.length && (a += r + g["m" == e ? "l" : "L"], r = []), r.push(o(t * b))
                                    }), a + r
                                });
                                return a
                            }
                            var s, l, u = i(t);
                            a = [];
                            for (var c = 0, h = u.length; c < h; c++) {
                                s = u[c], l = u[c][0].toLowerCase(),
                                    "z" == l && (l = "x");
                                for (var p = 1, m = s.length; p < m; p++) l += o(s[p] * b) + (p != m - 1 ? "," : d);
                                a.push(l)
                            }
                            return a.join(f)
                        },
                        C = function(t, e, r) {
                            var i = n.matrix();
                            return i.rotate(-t, .5, .5), {
                                dx: i.x(e, r),
                                dy: i.y(e, r)
                            }
                        },
                        M = function(t, e, n, r, i, o) {
                            var a = t._,
                                s = t.matrix,
                                c = a.fillpos,
                                h = t.node,
                                p = h.style,
                                d = 1,
                                g = "",
                                v = b / e,
                                m = b / n;
                            if (p.visibility = "hidden", e && n) {
                                if (h.coordsize = l(v) + f + l(m), p.rotation = o * (e * n < 0 ? -1 : 1), o) {
                                    var y = C(o, r, i);
                                    r = y.dx, i = y.dy
                                }
                                if (e < 0 && (g += "x"), n < 0 && (g += " y") && (d = -1), p.flip = g, h.coordorigin = r * -v + f + i * -m, c || a.fillsize) {
                                    var x = h.getElementsByTagName(u);
                                    x = x && x[0], h.removeChild(x), c && (y = C(o, s.x(c[0], c[1]), s.y(c[0], c[1])), x.position = y.dx * d + f + y.dy * d), a.fillsize && (x.size = a.fillsize[0] * l(e) + f + a.fillsize[1] * l(n)), h.appendChild(x)
                                }
                                p.visibility = "visible"
                            }
                        };
                    n.toString = function() {
                        return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
                    };
                    var k = function(t, n, r) {
                            for (var i = e(n).toLowerCase().split("-"), o = r ? "end" : "start", a = i.length, s = "classic", l = "medium", u = "medium"; a--;) switch (i[a]) {
                                case "block":
                                case "classic":
                                case "oval":
                                case "diamond":
                                case "open":
                                case "none":
                                    s = i[a];
                                    break;
                                case "wide":
                                case "narrow":
                                    u = i[a];
                                    break;
                                case "long":
                                case "short":
                                    l = i[a]
                            }
                            var c = t.node.getElementsByTagName("stroke")[0];
                            c[o + "arrow"] = s, c[o + "arrowlength"] = l, c[o + "arrowwidth"] = u
                        },
                        S = function(i, l) {
                            i.attrs = i.attrs || {};
                            var h = i.node,
                                p = i.attrs,
                                g = h.style,
                                v = _[i.type] && (l.x != p.x || l.y != p.y || l.width != p.width || l.height != p.height || l.cx != p.cx || l.cy != p.cy || l.rx != p.rx || l.ry != p.ry || l.r != p.r),
                                m = w[i.type] && (p.cx != l.cx || p.cy != l.cy || p.r != l.r || p.rx != l.rx || p.ry != l.ry),
                                y = i;
                            for (var x in l) l[t](x) && (p[x] = l[x]);
                            if (v && (p.path = n._getPath[i.type](i), i._.dirty = 1), l.href && (h.href = l.href), l.title && (h.title = l.title), l.target && (h.target = l.target), l.cursor && (g.cursor = l.cursor), "blur" in l && i.blur(l.blur), (l.path && "path" == i.type || v) && (h.path = T(~e(p.path).toLowerCase().indexOf("r") ? n._pathToAbsolute(p.path) : p.path), i._.dirty = 1, "image" == i.type && (i._.fillpos = [p.x, p.y], i._.fillsize = [p.width, p.height], M(i, 1, 1, 0, 0, 0))), "transform" in l && i.transform(l.transform), m) {
                                var C = +p.cx,
                                    S = +p.cy,
                                    E = +p.rx || +p.r || 0,
                                    N = +p.ry || +p.r || 0;
                                h.path = n.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", o((C - E) * b), o((S - N) * b), o((C + E) * b), o((S + N) * b), o(C * b)), i._.dirty = 1
                            }
                            if ("clip-rect" in l) {
                                var I = e(l["clip-rect"]).split(c);
                                if (4 == I.length) {
                                    I[2] = +I[2] + +I[0], I[3] = +I[3] + +I[1];
                                    var P = h.clipRect || n._g.doc.createElement("div"),
                                        D = P.style;
                                    D.clip = n.format("rect({1}px {2}px {3}px {0}px)", I), h.clipRect || (D.position = "absolute", D.top = 0, D.left = 0, D.width = i.paper.width + "px", D.height = i.paper.height + "px", h.parentNode.insertBefore(P, h), P.appendChild(h), h.clipRect = P)
                                }
                                l["clip-rect"] || h.clipRect && (h.clipRect.style.clip = "auto")
                            }
                            if (i.textpath) {
                                var F = i.textpath.style;
                                l.font && (F.font = l.font), l["font-family"] && (F.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, d) + '"'), l["font-size"] && (F.fontSize = l["font-size"]), l["font-weight"] && (F.fontWeight = l["font-weight"]), l["font-style"] && (F.fontStyle = l["font-style"])
                            }
                            if ("arrow-start" in l && k(y, l["arrow-start"]), "arrow-end" in l && k(y, l["arrow-end"], 1), null != l.opacity || null != l["stroke-width"] || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) {
                                var j = h.getElementsByTagName(u),
                                    $ = !1;
                                if (j = j && j[0], !j && ($ = j = L(u)), "image" == i.type && l.src && (j.src = l.src), l.fill && (j.on = !0), null != j.on && "none" != l.fill && null !== l.fill || (j.on = !1), j.on && l.fill) {
                                    var R = e(l.fill).match(n._ISURL);
                                    if (R) {
                                        j.parentNode == h && h.removeChild(j), j.rotate = !0, j.src = R[1], j.type = "tile";
                                        var z = i.getBBox(1);
                                        j.position = z.x + f + z.y, i._.fillpos = [z.x, z.y], n._preload(R[1], function() {
                                            i._.fillsize = [this.offsetWidth, this.offsetHeight]
                                        })
                                    } else j.color = n.getRGB(l.fill).hex, j.src = d, j.type = "solid", n.getRGB(l.fill).error && (y.type in {
                                        circle: 1,
                                        ellipse: 1
                                    } || "r" != e(l.fill).charAt()) && A(y, l.fill, j) && (p.fill = "none", p.gradient = l.fill, j.rotate = !1)
                                }
                                if ("fill-opacity" in l || "opacity" in l) {
                                    var B = ((+p["fill-opacity"] + 1 || 2) - 1) * ((+p.opacity + 1 || 2) - 1) * ((+n.getRGB(l.fill).o + 1 || 2) - 1);
                                    B = s(a(B, 0), 1), j.opacity = B, j.src && (j.color = "none")
                                }
                                h.appendChild(j);
                                var q = h.getElementsByTagName("stroke") && h.getElementsByTagName("stroke")[0],
                                    O = !1;
                                !q && (O = q = L("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (q.on = !0), ("none" == l.stroke || null === l.stroke || null == q.on || 0 == l.stroke || 0 == l["stroke-width"]) && (q.on = !1);
                                var H = n.getRGB(l.stroke);
                                q.on && l.stroke && (q.color = H.hex), B = ((+p["stroke-opacity"] + 1 || 2) - 1) * ((+p.opacity + 1 || 2) - 1) * ((+H.o + 1 || 2) - 1);
                                var W = .75 * (r(l["stroke-width"]) || 1);
                                if (B = s(a(B, 0), 1), null == l["stroke-width"] && (W = p["stroke-width"]), l["stroke-width"] && (q.weight = W), W && W < 1 && (B *= W) && (q.weight = 1), q.opacity = B, l["stroke-linejoin"] && (q.joinstyle = l["stroke-linejoin"] || "miter"), q.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (q.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), "stroke-dasharray" in l) {
                                    var U = {
                                        "-": "shortdash",
                                        ".": "shortdot",
                                        "-.": "shortdashdot",
                                        "-..": "shortdashdotdot",
                                        ". ": "dot",
                                        "- ": "dash",
                                        "--": "longdash",
                                        "- .": "dashdot",
                                        "--.": "longdashdot",
                                        "--..": "longdashdotdot"
                                    };
                                    q.dashstyle = U[t](l["stroke-dasharray"]) ? U[l["stroke-dasharray"]] : d
                                }
                                O && h.appendChild(q)
                            }
                            if ("text" == y.type) {
                                y.paper.canvas.style.display = d;
                                var Y = y.paper.span,
                                    V = 100,
                                    G = p.font && p.font.match(/\d+(?:\.\d*)?(?=px)/);
                                g = Y.style, p.font && (g.font = p.font), p["font-family"] && (g.fontFamily = p["font-family"]), p["font-weight"] && (g.fontWeight = p["font-weight"]), p["font-style"] && (g.fontStyle = p["font-style"]), G = r(p["font-size"] || G && G[0]) || 10, g.fontSize = G * V + "px", y.textpath.string && (Y.innerHTML = e(y.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                                var X = Y.getBoundingClientRect();
                                y.W = p.w = (X.right - X.left) / V, y.H = p.h = (X.bottom - X.top) / V, y.X = p.x, y.Y = p.y + y.H / 2, ("x" in l || "y" in l) && (y.path.v = n.format("m{0},{1}l{2},{1}", o(p.x * b), o(p.y * b), o(p.x * b) + 1));
                                for (var J = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], K = 0, Z = J.length; K < Z; K++)
                                    if (J[K] in l) {
                                        y._.dirty = 1;
                                        break
                                    }
                                switch (p["text-anchor"]) {
                                    case "start":
                                        y.textpath.style["v-text-align"] = "left", y.bbx = y.W / 2;
                                        break;
                                    case "end":
                                        y.textpath.style["v-text-align"] = "right", y.bbx = -y.W / 2;
                                        break;
                                    default:
                                        y.textpath.style["v-text-align"] = "center", y.bbx = 0
                                }
                                y.textpath.style["v-text-kern"] = !0
                            }
                        },
                        A = function(t, o, a) {
                            t.attrs = t.attrs || {};
                            var s = (t.attrs, Math.pow),
                                l = "linear",
                                u = ".5 .5";
                            if (t.attrs.gradient = o, o = e(o).replace(n._radial_gradient, function(t, e, n) {
                                    return l = "radial", e && n && (e = r(e), n = r(n), s(e - .5, 2) + s(n - .5, 2) > .25 && (n = i.sqrt(.25 - s(e - .5, 2)) * (2 * (n > .5) - 1) + .5), u = e + f + n), d
                                }), o = o.split(/\s*\-\s*/), "linear" == l) {
                                var c = o.shift();
                                if (c = -r(c), isNaN(c)) return null
                            }
                            var h = n._parseDots(o);
                            if (!h) return null;
                            if (t = t.shape || t.node, h.length) {
                                t.removeChild(a), a.on = !0, a.method = "none", a.color = h[0].color, a.color2 = h[h.length - 1].color;
                                for (var p = [], g = 0, v = h.length; g < v; g++) h[g].offset && p.push(h[g].offset + f + h[g].color);
                                a.colors = p.length ? p.join() : "0% " + a.color, "radial" == l ? (a.type = "gradientTitle", a.focus = "100%", a.focussize = "0 0", a.focusposition = u, a.angle = 0) : (a.type = "gradient", a.angle = (270 - c) % 360), t.appendChild(a)
                            }
                            return 1
                        },
                        E = function(t, e) {
                            this[0] = this.node = t, t.raphael = !0, this.id = n._oid++, t.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = e, this.matrix = n.matrix(), this._ = {
                                transform: [],
                                sx: 1,
                                sy: 1,
                                dx: 0,
                                dy: 0,
                                deg: 0,
                                dirty: 1,
                                dirtyT: 1
                            }, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), e.top = this, this.next = null
                        },
                        N = n.el;
                    E.prototype = N, N.constructor = E, N.transform = function(t) {
                        if (null == t) return this._.transform;
                        var r, i = this.paper._viewBoxShift,
                            o = i ? "s" + [i.scale, i.scale] + "-1-1t" + [i.dx, i.dy] : d;
                        i && (r = t = e(t).replace(/\.{3}|\u2026/g, this._.transform || d)), n._extractTransform(this, o + t);
                        var a, s = this.matrix.clone(),
                            l = this.skew,
                            u = this.node,
                            c = ~e(this.attrs.fill).indexOf("-"),
                            h = !e(this.attrs.fill).indexOf("url(");
                        if (s.translate(1, 1), h || c || "image" == this.type)
                            if (l.matrix = "1 0 0 1", l.offset = "0 0", a = s.split(), c && a.noRotation || !a.isSimple) {
                                u.style.filter = s.toFilter();
                                var p = this.getBBox(),
                                    g = this.getBBox(1),
                                    v = p.x - g.x,
                                    m = p.y - g.y;
                                u.coordorigin = v * -b + f + m * -b, M(this, 1, 1, v, m, 0)
                            } else u.style.filter = d, M(this, a.scalex, a.scaley, a.dx, a.dy, a.rotate);
                        else u.style.filter = d, l.matrix = e(s), l.offset = s.offset();
                        return null !== r && (this._.transform = r, n._extractTransform(this, r)), this
                    }, N.rotate = function(t, n, i) {
                        if (this.removed) return this;
                        if (null != t) {
                            if (t = e(t).split(c), t.length - 1 && (n = r(t[1]), i = r(t[2])), t = r(t[0]), null == i && (n = i), null == n || null == i) {
                                var o = this.getBBox(1);
                                n = o.x + o.width / 2, i = o.y + o.height / 2
                            }
                            return this._.dirtyT = 1, this.transform(this._.transform.concat([
                                ["r", t, n, i]
                            ])), this
                        }
                    }, N.translate = function(t, n) {
                        return this.removed ? this : (t = e(t).split(c), t.length - 1 && (n = r(t[1])), t = r(t[0]) || 0, n = +n || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += n), this.transform(this._.transform.concat([
                            ["t", t, n]
                        ])), this)
                    }, N.scale = function(t, n, i, o) {
                        if (this.removed) return this;
                        if (t = e(t).split(c), t.length - 1 && (n = r(t[1]), i = r(t[2]), o = r(t[3]), isNaN(i) && (i = null), isNaN(o) && (o = null)), t = r(t[0]), null == n && (n = t), null == o && (i = o), null == i || null == o) var a = this.getBBox(1);
                        return i = null == i ? a.x + a.width / 2 : i, o = null == o ? a.y + a.height / 2 : o, this.transform(this._.transform.concat([
                            ["s", t, n, i, o]
                        ])), this._.dirtyT = 1, this
                    }, N.hide = function() {
                        return !this.removed && (this.node.style.display = "none"), this
                    }, N.show = function() {
                        return !this.removed && (this.node.style.display = d), this
                    }, N.auxGetBBox = n.el.getBBox, N.getBBox = function() {
                        var t = this.auxGetBBox();
                        if (this.paper && this.paper._viewBoxShift) {
                            var e = {},
                                n = 1 / this.paper._viewBoxShift.scale;
                            return e.x = t.x - this.paper._viewBoxShift.dx, e.x *= n, e.y = t.y - this.paper._viewBoxShift.dy, e.y *= n, e.width = t.width * n, e.height = t.height * n, e.x2 = e.x + e.width, e.y2 = e.y + e.height, e
                        }
                        return t
                    }, N._getBBox = function() {
                        return this.removed ? {} : {
                            x: this.X + (this.bbx || 0) - this.W / 2,
                            y: this.Y - this.H,
                            width: this.W,
                            height: this.H
                        }
                    }, N.remove = function() {
                        if (!this.removed && this.node.parentNode) {
                            this.paper.__set__ && this.paper.__set__.exclude(this), n.eve.unbind("raphael.*.*." + this.id), n._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
                            for (var t in this) this[t] = "function" == typeof this[t] ? n._removedFactory(t) : null;
                            this.removed = !0
                        }
                    }, N.attr = function(e, r) {
                        if (this.removed) return this;
                        if (null == e) {
                            var i = {};
                            for (var o in this.attrs) this.attrs[t](o) && (i[o] = this.attrs[o]);
                            return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
                        }
                        if (null == r && n.is(e, "string")) {
                            if (e == u && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                            for (var a = e.split(c), s = {}, l = 0, p = a.length; l < p; l++) e = a[l], e in this.attrs ? s[e] = this.attrs[e] : n.is(this.paper.customAttributes[e], "function") ? s[e] = this.paper.customAttributes[e].def : s[e] = n._availableAttrs[e];
                            return p - 1 ? s : s[a[0]]
                        }
                        if (this.attrs && null == r && n.is(e, "array")) {
                            for (s = {}, l = 0, p = e.length; l < p; l++) s[e[l]] = this.attr(e[l]);
                            return s
                        }
                        var f;
                        null != r && (f = {}, f[e] = r), null == r && n.is(e, "object") && (f = e);
                        for (var d in f) h("raphael.attr." + d + "." + this.id, this, f[d]);
                        if (f) {
                            for (d in this.paper.customAttributes)
                                if (this.paper.customAttributes[t](d) && f[t](d) && n.is(this.paper.customAttributes[d], "function")) {
                                    var g = this.paper.customAttributes[d].apply(this, [].concat(f[d]));
                                    this.attrs[d] = f[d];
                                    for (var v in g) g[t](v) && (f[v] = g[v])
                                }
                            f.text && "text" == this.type && (this.textpath.string = f.text), S(this, f)
                        }
                        return this
                    }, N.toFront = function() {
                        return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && n._tofront(this, this.paper), this
                    }, N.toBack = function() {
                        return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), n._toback(this, this.paper)), this)
                    }, N.insertAfter = function(t) {
                        return this.removed ? this : (t.constructor == n.st.constructor && (t = t[t.length - 1]), t.node.nextSibling ? t.node.parentNode.insertBefore(this.node, t.node.nextSibling) : t.node.parentNode.appendChild(this.node), n._insertafter(this, t, this.paper), this)
                    }, N.insertBefore = function(t) {
                        return this.removed ? this : (t.constructor == n.st.constructor && (t = t[0]), t.node.parentNode.insertBefore(this.node, t.node), n._insertbefore(this, t, this.paper), this)
                    }, N.blur = function(t) {
                        var e = this.node.runtimeStyle,
                            r = e.filter;
                        return r = r.replace(m, d), 0 !== +t ? (this.attrs.blur = t, e.filter = r + f + p + ".Blur(pixelradius=" + (+t || 1.5) + ")", e.margin = n.format("-{0}px 0 0 -{0}px", o(+t || 1.5))) : (e.filter = r, e.margin = 0, delete this.attrs.blur), this
                    }, n._engine.path = function(t, e) {
                        var n = L("shape");
                        n.style.cssText = x, n.coordsize = b + f + b, n.coordorigin = e.coordorigin;
                        var r = new E(n, e),
                            i = {
                                fill: "none",
                                stroke: "#000"
                            };
                        t && (i.path = t), r.type = "path", r.path = [], r.Path = d, S(r, i), e.canvas.appendChild(n);
                        var o = L("skew");
                        return o.on = !0, n.appendChild(o), r.skew = o, r.transform(d), r
                    }, n._engine.rect = function(t, e, r, i, o, a) {
                        var s = n._rectPath(e, r, i, o, a),
                            l = t.path(s),
                            u = l.attrs;
                        return l.X = u.x = e, l.Y = u.y = r, l.W = u.width = i, l.H = u.height = o, u.r = a, u.path = s, l.type = "rect", l
                    }, n._engine.ellipse = function(t, e, n, r, i) {
                        var o = t.path();
                        o.attrs;
                        return o.X = e - r, o.Y = n - i, o.W = 2 * r, o.H = 2 * i, o.type = "ellipse", S(o, {
                            cx: e,
                            cy: n,
                            rx: r,
                            ry: i
                        }), o
                    }, n._engine.circle = function(t, e, n, r) {
                        var i = t.path();
                        i.attrs;
                        return i.X = e - r, i.Y = n - r, i.W = i.H = 2 * r, i.type = "circle", S(i, {
                            cx: e,
                            cy: n,
                            r: r
                        }), i
                    }, n._engine.image = function(t, e, r, i, o, a) {
                        var s = n._rectPath(r, i, o, a),
                            l = t.path(s).attr({
                                stroke: "none"
                            }),
                            c = l.attrs,
                            h = l.node,
                            p = h.getElementsByTagName(u)[0];
                        return c.src = e, l.X = c.x = r, l.Y = c.y = i, l.W = c.width = o, l.H = c.height = a, c.path = s, l.type = "image", p.parentNode == h && h.removeChild(p), p.rotate = !0, p.src = e, p.type = "tile", l._.fillpos = [r, i], l._.fillsize = [o, a], h.appendChild(p), M(l, 1, 1, 0, 0, 0), l
                    }, n._engine.text = function(t, r, i, a) {
                        var s = L("shape"),
                            l = L("path"),
                            u = L("textpath");
                        r = r || 0, i = i || 0, a = a || "", l.v = n.format("m{0},{1}l{2},{1}", o(r * b), o(i * b), o(r * b) + 1), l.textpathok = !0, u.string = e(a), u.on = !0, s.style.cssText = x, s.coordsize = b + f + b, s.coordorigin = "0 0";
                        var c = new E(s, t),
                            h = {
                                fill: "#000",
                                stroke: "none",
                                font: n._availableAttrs.font,
                                text: a
                            };
                        c.shape = s, c.path = l, c.textpath = u, c.type = "text", c.attrs.text = e(a), c.attrs.x = r, c.attrs.y = i, c.attrs.w = 1, c.attrs.h = 1, S(c, h), s.appendChild(u), s.appendChild(l), t.canvas.appendChild(s);
                        var p = L("skew");
                        return p.on = !0, s.appendChild(p), c.skew = p, c.transform(d), c
                    }, n._engine.setSize = function(t, e) {
                        var r = this.canvas.style;
                        return this.width = t, this.height = e, t == +t && (t += "px"), e == +e && (e += "px"), r.width = t, r.height = e, r.clip = "rect(0 " + t + " " + e + " 0)", this._viewBox && n._engine.setViewBox.apply(this, this._viewBox), this
                    }, n._engine.setViewBox = function(t, e, r, i, o) {
                        n.eve("raphael.setViewBox", this, this._viewBox, [t, e, r, i, o]);
                        var a, s, l = this.getSize(),
                            u = l.width,
                            c = l.height;
                        return o && (a = c / i, s = u / r, r * a < u && (t -= (u - r * a) / 2 / a), i * s < c && (e -= (c - i * s) / 2 / s)), this._viewBox = [t, e, r, i, !!o], this._viewBoxShift = {
                            dx: -t,
                            dy: -e,
                            scale: l
                        }, this.forEach(function(t) {
                            t.transform("...")
                        }), this
                    };
                    var L;
                    n._engine.initWin = function(t) {
                        var e = t.document;
                        e.styleSheets.length < 31 ? e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : e.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
                        try {
                            !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), L = function(t) {
                                return e.createElement("<rvml:" + t + ' class="rvml">')
                            }
                        } catch (t) {
                            L = function(t) {
                                return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                            }
                        }
                    }, n._engine.initWin(n._g.win), n._engine.create = function() {
                        var t = n._getContainer.apply(0, arguments),
                            e = t.container,
                            r = t.height,
                            i = t.width,
                            o = t.x,
                            a = t.y;
                        if (!e) throw new Error("VML container not found.");
                        var s = new n._Paper,
                            l = s.canvas = n._g.doc.createElement("div"),
                            u = l.style;
                        return o = o || 0, a = a || 0, i = i || 512, r = r || 342, s.width = i, s.height = r, i == +i && (i += "px"), r == +r && (r += "px"), s.coordsize = 1e3 * b + f + 1e3 * b, s.coordorigin = "0 0", s.span = n._g.doc.createElement("span"), s.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(s.span), u.cssText = n.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", i, r), 1 == e ? (n._g.doc.body.appendChild(l), u.left = o + "px", u.top = a + "px", u.position = "absolute") : e.firstChild ? e.insertBefore(l, e.firstChild) : e.appendChild(l), s.renderfix = function() {}, s
                    }, n.prototype.clear = function() {
                        n.eve("raphael.clear", this), this.canvas.innerHTML = d, this.span = n._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
                    }, n.prototype.remove = function() {
                        n.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
                        for (var t in this) this[t] = "function" == typeof this[t] ? n._removedFactory(t) : null;
                        return !0
                    };
                    var I = n.st;
                    for (var P in N) N[t](P) && !I[t](P) && (I[P] = function(t) {
                        return function() {
                            var e = arguments;
                            return this.forEach(function(n) {
                                n[t].apply(n, e)
                            })
                        }
                    }(P))
                }
            }(), S.was ? k.win.Raphael = n : Raphael = n, "object" == typeof exports && (module.exports = n), n
    }), ! function() {
        function t(t, e) {
            function n(e) {
                var n, r = t.arcs[0 > e ? ~e : e],
                    i = r[0];
                return t.transform ? (n = [0, 0], r.forEach(function(t) {
                    n[0] += t[0], n[1] += t[1]
                })) : n = r[r.length - 1], 0 > e ? [n, i] : [i, n]
            }

            function r(t, e) {
                for (var n in t) {
                    var r = t[n];
                    delete e[r.start], delete r.start, delete r.end, r.forEach(function(t) {
                        i[0 > t ? ~t : t] = 1
                    }), s.push(r)
                }
            }
            var i = {},
                o = {},
                a = {},
                s = [],
                l = -1;
            return e.forEach(function(n, r) {
                var i, o = t.arcs[0 > n ? ~n : n];
                o.length < 3 && !o[1][0] && !o[1][1] && (i = e[++l], e[l] = n, e[r] = i)
            }), e.forEach(function(t) {
                var e, r, i = n(t),
                    s = i[0],
                    l = i[1];
                if (e = a[s])
                    if (delete a[e.end], e.push(t), e.end = l, r = o[l]) {
                        delete o[r.start];
                        var u = r === e ? e : e.concat(r);
                        o[u.start = e.start] = a[u.end = r.end] = u
                    } else o[e.start] = a[e.end] = e;
                else if (e = o[l])
                    if (delete o[e.start], e.unshift(t), e.start = s, r = a[s]) {
                        delete a[r.end];
                        var c = r === e ? e : r.concat(e);
                        o[c.start = r.start] = a[c.end = e.end] = c
                    } else o[e.start] = a[e.end] = e;
                else e = [t], o[e.start = s] = a[e.end = l] = e
            }), r(a, o), r(o, a), e.forEach(function(t) {
                i[0 > t ? ~t : t] || s.push([t])
            }), s
        }

        function e(e, n, r) {
            function i(t) {
                var e = 0 > t ? ~t : t;
                (c[e] || (c[e] = [])).push({
                    i: t,
                    g: u
                })
            }

            function o(t) {
                t.forEach(i)
            }

            function a(t) {
                t.forEach(o)
            }

            function s(t) {
                "GeometryCollection" === t.type ? t.geometries.forEach(s) : t.type in h && (u = t, h[t.type](t.arcs))
            }
            var l = [];
            if (arguments.length > 1) {
                var u, c = [],
                    h = {
                        LineString: o,
                        MultiLineString: a,
                        Polygon: a,
                        MultiPolygon: function(t) {
                            t.forEach(a)
                        }
                    };
                s(n), c.forEach(arguments.length < 3 ? function(t) {
                    l.push(t[0].i)
                } : function(t) {
                    r(t[0].g, t[t.length - 1].g) && l.push(t[0].i)
                })
            } else
                for (var p = 0, f = e.arcs.length; f > p; ++p) l.push(p);
            return {
                type: "MultiLineString",
                arcs: t(e, l)
            }
        }

        function r(e, r) {
            function i(t) {
                t.forEach(function(e) {
                    e.forEach(function(e) {
                        (s[e = 0 > e ? ~e : e] || (s[e] = [])).push(t)
                    })
                }), l.push(t)
            }

            function o(t) {
                return h(a(e, {
                    type: "Polygon",
                    arcs: [t]
                }).coordinates[0]) > 0
            }
            var s = {},
                l = [],
                u = [];
            return r.forEach(function(t) {
                "Polygon" === t.type ? i(t.arcs) : "MultiPolygon" === t.type && t.arcs.forEach(i)
            }), l.forEach(function(t) {
                if (!t._) {
                    var e = [],
                        n = [t];
                    for (t._ = 1, u.push(e); t = n.pop();) e.push(t), t.forEach(function(t) {
                        t.forEach(function(t) {
                            s[0 > t ? ~t : t].forEach(function(t) {
                                t._ || (t._ = 1, n.push(t))
                            })
                        })
                    })
                }
            }), l.forEach(function(t) {
                delete t._
            }), {
                type: "MultiPolygon",
                arcs: u.map(function(r) {
                    var i = [];
                    if (r.forEach(function(t) {
                            t.forEach(function(t) {
                                t.forEach(function(t) {
                                    s[0 > t ? ~t : t].length < 2 && i.push(t)
                                })
                            })
                        }), i = t(e, i), (n = i.length) > 1)
                        for (var a, l = o(r[0][0]), u = 0; n > u; ++u)
                            if (l === o(i[u])) {
                                a = i[0], i[0] = i[u], i[u] = a;
                                break
                            }
                    return i
                })
            }
        }

        function i(t, e) {
            return "GeometryCollection" === e.type ? {
                type: "FeatureCollection",
                features: e.geometries.map(function(e) {
                    return o(t, e)
                })
            } : o(t, e)
        }

        function o(t, e) {
            var n = {
                type: "Feature",
                id: e.id,
                properties: e.properties || {},
                geometry: a(t, e)
            };
            return null == e.id && delete n.id, n
        }

        function a(t, e) {
            function n(t, e) {
                e.length && e.pop();
                for (var n, r = c[0 > t ? ~t : t], i = 0, o = r.length; o > i; ++i) e.push(n = r[i].slice()), u(n, i);
                0 > t && s(e, o)
            }

            function r(t) {
                return t = t.slice(), u(t, 0), t
            }

            function i(t) {
                for (var e = [], r = 0, i = t.length; i > r; ++r) n(t[r], e);
                return e.length < 2 && e.push(e[0].slice()), e
            }

            function o(t) {
                for (var e = i(t); e.length < 4;) e.push(e[0].slice());
                return e
            }

            function a(t) {
                return t.map(o)
            }

            function l(t) {
                var e = t.type;
                return "GeometryCollection" === e ? {
                    type: e,
                    geometries: t.geometries.map(l)
                } : e in h ? {
                    type: e,
                    coordinates: h[e](t)
                } : null
            }
            var u = g(t.transform),
                c = t.arcs,
                h = {
                    Point: function(t) {
                        return r(t.coordinates)
                    },
                    MultiPoint: function(t) {
                        return t.coordinates.map(r)
                    },
                    LineString: function(t) {
                        return i(t.arcs)
                    },
                    MultiLineString: function(t) {
                        return t.arcs.map(i)
                    },
                    Polygon: function(t) {
                        return a(t.arcs)
                    },
                    MultiPolygon: function(t) {
                        return t.arcs.map(a)
                    }
                };
            return l(e)
        }

        function s(t, e) {
            for (var n, r = t.length, i = r - e; i < --r;) n = t[i], t[i++] = t[r], t[r] = n
        }

        function l(t, e) {
            for (var n = 0, r = t.length; r > n;) {
                var i = n + r >>> 1;
                t[i] < e ? n = i + 1 : r = i
            }
            return n
        }

        function u(t) {
            function e(t, e) {
                t.forEach(function(t) {
                    0 > t && (t = ~t);
                    var n = i[t];
                    n ? n.push(e) : i[t] = [e]
                })
            }

            function n(t, n) {
                t.forEach(function(t) {
                    e(t, n)
                })
            }

            function r(t, e) {
                "GeometryCollection" === t.type ? t.geometries.forEach(function(t) {
                    r(t, e)
                }) : t.type in a && a[t.type](t.arcs, e)
            }
            var i = {},
                o = t.map(function() {
                    return []
                }),
                a = {
                    LineString: e,
                    MultiLineString: n,
                    Polygon: n,
                    MultiPolygon: function(t, e) {
                        t.forEach(function(t) {
                            n(t, e)
                        })
                    }
                };
            t.forEach(r);
            for (var s in i)
                for (var u = i[s], c = u.length, h = 0; c > h; ++h)
                    for (var p = h + 1; c > p; ++p) {
                        var f, d = u[h],
                            g = u[p];
                        (f = o[d])[s = l(f, g)] !== g && f.splice(s, 0, g), (f = o[g])[s = l(f, d)] !== d && f.splice(s, 0, d)
                    }
            return o
        }

        function c(t, e) {
            function n(t) {
                a.remove(t), t[1][2] = e(t), a.push(t)
            }
            var r, i = g(t.transform),
                o = v(t.transform),
                a = d(),
                s = 0;
            for (e || (e = p), t.arcs.forEach(function(t) {
                    var n = [];
                    t.forEach(i);
                    for (var o = 1, s = t.length - 1; s > o; ++o) r = t.slice(o - 1, o + 2), r[1][2] = e(r), n.push(r), a.push(r);
                    t[0][2] = t[s][2] = 1 / 0;
                    for (var o = 0, s = n.length; s > o; ++o) r = n[o], r.previous = n[o - 1], r.next = n[o + 1]
                }); r = a.pop();) {
                var l = r.previous,
                    u = r.next;
                r[1][2] < s ? r[1][2] = s : s = r[1][2], l && (l.next = u, l[2] = r[2], n(l)), u && (u.previous = l, u[0] = r[0], n(u))
            }
            return t.arcs.forEach(function(t) {
                t.forEach(o)
            }), t
        }

        function h(t) {
            for (var e, n = -1, r = t.length, i = t[r - 1], o = 0; ++n < r;) e = i, i = t[n], o += e[0] * i[1] - e[1] * i[0];
            return .5 * o
        }

        function p(t) {
            var e = t[0],
                n = t[1],
                r = t[2];
            return Math.abs((e[0] - r[0]) * (n[1] - e[1]) - (e[0] - n[0]) * (r[1] - e[1]))
        }

        function f(t, e) {
            return t[1][2] - e[1][2]
        }

        function d() {
            function t(t, e) {
                for (; e > 0;) {
                    var n = (e + 1 >> 1) - 1,
                        i = r[n];
                    if (f(t, i) >= 0) break;
                    r[i._ = e] = i, r[t._ = e = n] = t
                }
            }

            function e(t, e) {
                for (;;) {
                    var n = e + 1 << 1,
                        o = n - 1,
                        a = e,
                        s = r[a];
                    if (i > o && f(r[o], s) < 0 && (s = r[a = o]), i > n && f(r[n], s) < 0 && (s = r[a = n]), a === e) break;
                    r[s._ = e] = s, r[t._ = e = a] = t
                }
            }
            var n = {},
                r = [],
                i = 0;
            return n.push = function(e) {
                return t(r[e._ = i] = e, i++), i
            }, n.pop = function() {
                if (!(0 >= i)) {
                    var t, n = r[0];
                    return --i > 0 && (t = r[i], e(r[t._ = 0] = t, 0)), n
                }
            }, n.remove = function(n) {
                var o, a = n._;
                if (r[a] === n) return a !== --i && (o = r[i], (f(o, n) < 0 ? t : e)(r[o._ = a] = o, a)), a
            }, n
        }

        function g(t) {
            if (!t) return m;
            var e, n, r = t.scale[0],
                i = t.scale[1],
                o = t.translate[0],
                a = t.translate[1];
            return function(t, s) {
                s || (e = n = 0), t[0] = (e += t[0]) * r + o, t[1] = (n += t[1]) * i + a
            }
        }

        function v(t) {
            if (!t) return m;
            var e, n, r = t.scale[0],
                i = t.scale[1],
                o = t.translate[0],
                a = t.translate[1];
            return function(t, s) {
                s || (e = n = 0);
                var l = (t[0] - o) / r | 0,
                    u = (t[1] - a) / i | 0;
                t[0] = l - e, t[1] = u - n, e = l, n = u
            }
        }

        function m() {}
        var y = {
            version: "1.6.9",
            mesh: function(t) {
                return a(t, e.apply(this, arguments))
            },
            meshArcs: e,
            merge: function(t) {
                return a(t, r.apply(this, arguments))
            },
            mergeArcs: r,
            feature: i,
            neighbors: u,
            presimplify: c
        };
        "function" == typeof define && define.amd ? define(y) : "object" == typeof module && module.exports ? module.exports = y : this.topojson = y
    }();