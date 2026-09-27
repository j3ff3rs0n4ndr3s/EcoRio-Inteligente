console.log("EcoRío Inteligente iniciado correctamente");


/* ==========================================
   TARJETAS INTERACTIVAS DEL CONTEXTO
========================================== */

const tarjetasAporte =
    document.querySelectorAll(".aporte-card");

const textoAporte =
    document.getElementById("texto-aporte");


function activarTarjeta(tarjeta) {

    tarjetasAporte.forEach((item) => {
        item.classList.remove("activo");
    });

    tarjeta.classList.add("activo");

    const informacion =
        tarjeta.dataset.info;

    textoAporte.style.opacity = "0";

    setTimeout(() => {

        textoAporte.textContent = informacion;

        textoAporte.style.opacity = "1";

    }, 180);

}


tarjetasAporte.forEach((tarjeta) => {

    tarjeta.addEventListener(
        "click",
        () => activarTarjeta(tarjeta)
    );

    tarjeta.addEventListener(
        "mouseenter",
        () => activarTarjeta(tarjeta)
    );

});


/* ==========================================
   APARICIÓN DE ELEMENTOS AL HACER SCROLL
========================================== */

const elementosRevelar =
    document.querySelectorAll(".revelar");


const observador =
    new IntersectionObserver(

        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


elementosRevelar.forEach((elemento) => {

    observador.observe(elemento);

});/* ==========================================
   PROPUESTA INICIAL INTERACTIVA
========================================== */

const tarjetasPropuesta =
    document.querySelectorAll(
        ".propuesta-card"
    );

const escenaPropuesta =
    document.getElementById(
        "escena-propuesta"
    );

const propuestaEtapa =
    document.getElementById(
        "propuesta-etapa"
    );

const propuestaTitulo =
    document.getElementById(
        "propuesta-titulo"
    );

const tituloExplicacionPropuesta =
    document.getElementById(
        "titulo-explicacion-propuesta"
    );

const textoExplicacionPropuesta =
    document.getElementById(
        "texto-explicacion-propuesta"
    );


function cambiarSolucion(tarjeta) {

    tarjetasPropuesta.forEach(
        (item) => {

            item.classList.remove(
                "activo"
            );

        }
    );


    tarjeta.classList.add(
        "activo"
    );


    const solucion =
        tarjeta.dataset.solucion;

    const titulo =
        tarjeta.dataset.titulo;

    const etapa =
        tarjeta.dataset.etapa;

    const descripcion =
        tarjeta.dataset.descripcion;


    escenaPropuesta.classList.remove(
        "solucion-dron",
        "solucion-lancha",
        "solucion-filtracion",
        "solucion-banos"
    );


    escenaPropuesta.classList.add(
        `solucion-${solucion}`
    );


    propuestaEtapa.textContent =
        etapa;

    propuestaTitulo.textContent =
        titulo;


    tituloExplicacionPropuesta.style.opacity =
        "0";

    textoExplicacionPropuesta.style.opacity =
        "0";


    setTimeout(() => {

        tituloExplicacionPropuesta.textContent =
            titulo;

        textoExplicacionPropuesta.textContent =
            descripcion;

        tituloExplicacionPropuesta.style.opacity =
            "1";

        textoExplicacionPropuesta.style.opacity =
            "1";

    }, 170);

}


tarjetasPropuesta.forEach(
    (tarjeta) => {

        tarjeta.addEventListener(
            "click",
            () => cambiarSolucion(tarjeta)
        );


        tarjeta.addEventListener(
            "mouseenter",
            () => cambiarSolucion(tarjeta)
        );


        tarjeta.addEventListener(
            "focus",
            () => cambiarSolucion(tarjeta)
        );

    }
);/* ==========================================
   METODOLOGÍA DE LOS 6 SOMBREROS
========================================== */

const tarjetasSombrero =
    document.querySelectorAll(
        ".sombrero-card"
    );

const panelTitulo =
    document.getElementById(
        "panel-titulo"
    );

const panelEnfoque =
    document.getElementById(
        "panel-enfoque"
    );

const panelFrase =
    document.getElementById(
        "panel-frase"
    );

const panelArgumento =
    document.getElementById(
        "panel-argumento"
    );

const panelColorSombrero =
    document.getElementById(
        "panel-color-sombrero"
    );


function crearMiniSombrero(color) {

    return `
        <div class="mini-sombrero ${color}">
            <div class="copa-sombrero"></div>
            <div class="ala-sombrero"></div>
        </div>
    `;

}


function actualizarPanelSombrero(tarjeta) {

    const color =
        tarjeta.dataset.sombrero;

    const titulo =
        tarjeta.dataset.titulo;

    const enfoque =
        tarjeta.dataset.enfoque;

    const frase =
        tarjeta.dataset.frase;

    const argumento =
        tarjeta.dataset.argumento;


    panelTitulo.style.opacity = "0";
    panelEnfoque.style.opacity = "0";
    panelFrase.style.opacity = "0";
    panelArgumento.style.opacity = "0";


    setTimeout(() => {

        panelTitulo.textContent =
            titulo;

        panelEnfoque.textContent =
            enfoque;

        panelFrase.textContent =
            `“${frase}”`;

        panelArgumento.textContent =
            argumento;


        panelColorSombrero.className =
            `panel-sombrero-icono panel-${color}`;


        panelColorSombrero.innerHTML =
            crearMiniSombrero(color);


        panelTitulo.style.opacity = "1";
        panelEnfoque.style.opacity = "1";
        panelFrase.style.opacity = "1";
        panelArgumento.style.opacity = "1";

    }, 170);

}


function seleccionarSombrero(tarjeta) {

    tarjetasSombrero.forEach(
        (item) => {

            item.classList.remove(
                "activo"
            );

        }
    );


    tarjeta.classList.add(
        "activo"
    );


    actualizarPanelSombrero(
        tarjeta
    );

}


tarjetasSombrero.forEach(
    (tarjeta) => {

        /* HOVER */
        tarjeta.addEventListener(
            "mouseenter",
            () => {

                actualizarPanelSombrero(
                    tarjeta
                );

            }
        );


        /* CLICK */
        tarjeta.addEventListener(
            "click",
            () => {

                seleccionarSombrero(
                    tarjeta
                );

            }
        );


        /* TECLADO */
        tarjeta.addEventListener(
            "focus",
            () => {

                actualizarPanelSombrero(
                    tarjeta
                );

            }
        );

    }
);/* ==========================================
   PROCESO DE MEJORA INTERACTIVO
========================================== */

const etapasProceso =
    document.querySelectorAll(
        ".etapa-proceso"
    );

const progresoActivo =
    document.getElementById(
        "progreso-activo"
    );

const detalleNumero =
    document.getElementById(
        "detalle-numero"
    );

const detalleSubtitulo =
    document.getElementById(
        "detalle-subtitulo"
    );

const detalleTitulo =
    document.getElementById(
        "detalle-titulo"
    );

const detalleTexto =
    document.getElementById(
        "detalle-texto"
    );

const elementoEtapa =
    document.getElementById(
        "elemento-etapa"
    );


const iconosEtapa = [
    "💡",
    "🎩",
    "📍",
    "📊",
    "↗"
];


function cambiarEtapaProceso(etapa) {

    etapasProceso.forEach(
        (item) => {

            item.classList.remove(
                "activa"
            );

        }
    );


    etapa.classList.add(
        "activa"
    );


    const indice =
        Number(
            etapa.dataset.etapa
        );

    const numero =
        etapa.dataset.numero;

    const titulo =
        etapa.dataset.titulo;

    const subtitulo =
        etapa.dataset.subtitulo;

    const texto =
        etapa.dataset.texto;


    /* PROGRESO */

    const porcentaje =
        indice === 0
            ? 0
            : (indice / 4) * 80;

    progresoActivo.style.width =
        `${porcentaje}%`;


    /* DESVANECER */

    detalleNumero.style.opacity =
        "0";

    detalleSubtitulo.style.opacity =
        "0";

    detalleTitulo.style.opacity =
        "0";

    detalleTexto.style.opacity =
        "0";

    elementoEtapa.style.opacity =
        "0";


    setTimeout(() => {

        detalleNumero.textContent =
            numero;

        detalleSubtitulo.textContent =
            subtitulo;

        detalleTitulo.textContent =
            titulo;

        detalleTexto.textContent =
            texto;

        elementoEtapa.textContent =
            iconosEtapa[indice];


        detalleNumero.style.opacity =
            "1";

        detalleSubtitulo.style.opacity =
            "1";

        detalleTitulo.style.opacity =
            "1";

        detalleTexto.style.opacity =
            "1";

        elementoEtapa.style.opacity =
            "1";


        elementoEtapa.style.transform =
            "scale(1.15)";

        setTimeout(() => {

            elementoEtapa.style.transform =
                "scale(1)";

        }, 250);

    }, 170);

}


etapasProceso.forEach(
    (etapa) => {

        etapa.addEventListener(
            "mouseenter",
            () => cambiarEtapaProceso(etapa)
        );

        etapa.addEventListener(
            "click",
            () => cambiarEtapaProceso(etapa)
        );

        etapa.addEventListener(
            "focus",
            () => cambiarEtapaProceso(etapa)
        );

    }
);/* ==========================================
   COMPARADOR ANTES / DESPUÉS
========================================== */

const botonAntes =
    document.getElementById(
        "btn-antes"
    );

const botonDespues =
    document.getElementById(
        "btn-despues"
    );

const escenaFinal =
    document.getElementById(
        "escena-final"
    );

const estadoFinalTexto =
    document.getElementById(
        "final-estado-texto"
    );


botonAntes.addEventListener(
    "click",
    () => {

        escenaFinal.classList.remove(
            "estado-despues"
        );

        escenaFinal.classList.add(
            "estado-antes"
        );

        botonAntes.classList.add(
            "activo"
        );

        botonDespues.classList.remove(
            "activo"
        );

        estadoFinalTexto.textContent =
            "Problemática inicial";

    }
);


botonDespues.addEventListener(
    "click",
    () => {

        escenaFinal.classList.remove(
            "estado-antes"
        );

        escenaFinal.classList.add(
            "estado-despues"
        );

        botonDespues.classList.add(
            "activo"
        );

        botonAntes.classList.remove(
            "activo"
        );

        estadoFinalTexto.textContent =
            "Solución integrada";

    }
);


/* ==========================================
   COMPONENTES SOLUCIÓN FINAL
========================================== */

const opcionesFinales =
    document.querySelectorAll(
        ".final-opcion"
    );

const resultadoFinalTitulo =
    document.getElementById(
        "resultado-final-titulo"
    );

const resultadoFinalTexto =
    document.getElementById(
        "resultado-final-texto"
    );


function cambiarResultadoFinal(opcion) {

    opcionesFinales.forEach(
        (item) => {

            item.classList.remove(
                "activa"
            );

        }
    );


    opcion.classList.add(
        "activa"
    );


    const titulo =
        opcion.dataset.titulo;

    const texto =
        opcion.dataset.texto;


    resultadoFinalTitulo.style.opacity =
        "0";

    resultadoFinalTexto.style.opacity =
        "0";


    setTimeout(() => {

        resultadoFinalTitulo.textContent =
            titulo;

        resultadoFinalTexto.textContent =
            texto;

        resultadoFinalTitulo.style.opacity =
            "1";

        resultadoFinalTexto.style.opacity =
            "1";

    }, 170);

}


opcionesFinales.forEach(
    (opcion) => {

        opcion.addEventListener(
            "mouseenter",
            () => cambiarResultadoFinal(opcion)
        );

        opcion.addEventListener(
            "click",
            () => cambiarResultadoFinal(opcion)
        );

        opcion.addEventListener(
            "focus",
            () => cambiarResultadoFinal(opcion)
        );

    }
);/* ==========================================
   CONCLUSIONES INTERACTIVAS
========================================== */

const tarjetasConclusion =
    document.querySelectorAll(
        ".conclusion-card"
    );

const conclusionNumero =
    document.getElementById(
        "conclusion-panel-numero"
    );

const conclusionTitulo =
    document.getElementById(
        "conclusion-panel-titulo"
    );

const conclusionTexto =
    document.getElementById(
        "conclusion-panel-texto"
    );


function cambiarConclusion(tarjeta) {

    tarjetasConclusion.forEach(
        (item) => {

            item.classList.remove(
                "activa"
            );

        }
    );


    tarjeta.classList.add(
        "activa"
    );


    conclusionNumero.style.opacity =
        "0";

    conclusionTitulo.style.opacity =
        "0";

    conclusionTexto.style.opacity =
        "0";


    setTimeout(() => {

        conclusionNumero.textContent =
            tarjeta.dataset.numero;

        conclusionTitulo.textContent =
            tarjeta.dataset.titulo;

        conclusionTexto.textContent =
            tarjeta.dataset.texto;


        conclusionNumero.style.opacity =
            "1";

        conclusionTitulo.style.opacity =
            "1";

        conclusionTexto.style.opacity =
            "1";

    }, 160);

}


tarjetasConclusion.forEach(
    (tarjeta) => {

        tarjeta.addEventListener(
            "mouseenter",
            () => cambiarConclusion(tarjeta)
        );

        tarjeta.addEventListener(
            "click",
            () => cambiarConclusion(tarjeta)
        );

    }
);





/* ==========================================
   MENÚ ACTIVO SEGÚN SCROLL
========================================== */

const seccionesPagina =
    document.querySelectorAll(
        "main section"
    );

const enlacesMenu =
    document.querySelectorAll(
        ".nav-link"
    );


const observadorMenu =
    new IntersectionObserver(

        (entradas) => {

            entradas.forEach(
                (entrada) => {

                    if (
                        entrada.isIntersecting
                    ) {

                        const id =
                            entrada.target.id;


                        enlacesMenu.forEach(
                            (enlace) => {

                                enlace.classList.remove(
                                    "activo"
                                );


                                if (
                                    enlace.getAttribute(
                                        "href"
                                    ) === `#${id}`
                                ) {

                                    enlace.classList.add(
                                        "activo"
                                    );

                                }

                            }
                        );

                    }

                }
            );

        },

        {
            threshold: 0.25
        }

    );


seccionesPagina.forEach(
    (seccion) => {

        observadorMenu.observe(
            seccion
        );

    }
);