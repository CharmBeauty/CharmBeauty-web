// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC7qpBOyaRqZ2H4qrsLNpC8cXUaB8z-xPY",
    authDomain: "charmbeauty-visitas.firebaseapp.com",
    databaseURL: "https://charmbeauty-visitas-default-rtdb.firebaseio.com",
    projectId: "charmbeauty-visitas",
    storageBucket: "charmbeauty-visitas.firebasestorage.app",
    messagingSenderId: "929165296030",
    appId: "1:929165296030:web:5eba0e9410fb77f20b568f",
    measurementId: "G-9CNZ32BJFZ"
};

// Inicializa Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Función para manejar el contador de visitas
function manejarContadorVisitas() {
    const contadorRef = database.ref('visitas');
    
    // Incrementar el contador cuando alguien visita la página
    contadorRef.transaction((currentValue) => {
        return (currentValue || 0) + 1;
    });
    
    // Mostrar el valor actual del contador
    contadorRef.on('value', (snapshot) => {
        const visitas = snapshot.val();
        document.getElementById('contador').textContent = visitas;
    });
}

// En la sección de datos de productos, marca los agotados:
const productos = {
    bloomshell: {
        "Base 2 en 1": {
            imagen: "img/base-2en1.jpg",
            precio: "$8",
            descripcion: "Base + corrector. Esta base de maquillaje no solo tiene una textura ligera y una cobertura natural de media a completa, sino que también se transforma en un corrector espectacular. ¡Todo en uno!",
            agotado: false
        },
        "Polvo 2 en 1": {
            imagen: "img/polvo-2en1.jpg",
            precio: "$6",
            descripcion: "Este polvo suelto y compacto completamente translúcido, es perfecto para ti; con el polvo 2 en 1 de Bloomshell, podrás llevarlo a cualquier parte en tu cosmiquera.",
            agotado: true
        },
        "Contorno": {
            imagen: "img/contorno.jpg",
            precio: "$5",
            descripcion: "Descubre nuestro contorno en barra de alta pigmentación. Su fórmula única y de larga duración te brinda un color intenso y natural en solo una pasada.",
            agotado: false
        },
        "Rubor Gelei": {
            imagen: "img/rubor-gelei.jpg",
            precio: "$3.50",
            descripcion: "Una forma moderna de ruborizar y darle color a tus labios. Aporta color dependiendo de tu pH. Se intensifica y te dará un color duradero muy glowy y natural.",
            agotado: false
        },
        "Rubor Pink": {
            imagen: "img/rubor-pink.jpg",
            precio: "$4",
            descripcion: "¡El rubor pink ultra pigmentado, es realmente excepcional! ¡Su fórmula especial se funde suavemente en la piel, brindándote un aspecto jugoso y duradero!",
            agotado: false
        },
        "Rubor Luminoso": {
            imagen: "img/rubor-luminoso.jpg",
            precio: "$4",
            descripcion: "¡El rubor luminoso con partículas micro pulverizadas y ultra pigmentado, es realmente excepcional! Su fórmula especial se funde suavemente en la piel, brindándote un aspecto jugoso y duradero.",
            agotado: false
        },
        "Bloom Definer": {
            imagen: "img/bloom-definer.jpg",
            precio: "$2",
            descripcion: "Logras unas cejas perfectas con este lápiz que te permite definir, rellenar y dar una forma natural a la ceja.",
            agotado: true
        },
        "Lash Invisible": {
            imagen: "img/lash-invisible.jpg",
            precio: "$3",
            descripcion: "Máscara de pestaña Bloom lash que nos ayuda a crear un efecto natural creando una curva ligera sin añadir color. Se aplica como un gel suave y ligero que te aportará fortaleza y contiene colágena.",
            agotado: true
        },
        "Lash Exclusive": {
            imagen: "img/lash-exclusive.jpg",
            precio: "$5",
            descripcion: "¡Pestañas voluminizadas y multiplicadas! Una fórmula cremosa y edificable con cepillo de fibra en forma de reloj de arena para espesar, alargar y rizar sin esfuerzo cualquier tipo de pestañas.",
            agotado: false
        },
        "Lápiz Blanco": {
            imagen: "img/lapiz-blanco.jpg",
            precio: "$1.50",
            descripcion: "Lápiz blanco a prueba de agua de textura suave, alta pigmentación, fijación duradera y fácil de deslizar. Se puede utilizar tanto en línea de agua como en el párpado para realizar un delineado difuminado.",
            agotado: false
        },
        "Lápiz Negro": {
            imagen: "img/lapiz-negro.jpg",
            precio: "$1.50",
            descripcion: "Lápiz negro a prueba de agua, de textura suave, alta pigmentación, fijación duradera y fácil de deslizar. Se puede utilizar tanto en línea de agua como en el párpado para realizar un delineado difuminado.",
            agotado: true
        },
        "Sombra Suelta (Cobre)": {
            imagen: "img/sombra-cobre.jpg",
            precio: "$3",
            descripcion: "Sombras perladas en polvo con una alta concentración de pigmento, fáciles de aplicar y con una textura ligeramente húmeda que es ideal para lograr un alto cubrimiento y una mejor adherencia en la piel.",
            agotado: false
        }
    },
    trendy: {
        "Base Aqua": {
            imagen: "img/base-aqua.jpg",
            precio: "$8",
            descripcion: "Base de cobertura media con formulación semi-cremosa, ideal para todo tipo de piel. A prueba de agua.",
            agotado: false
        },
        "Corrector Magic": {
            imagen: "img/corrector-magic.jpg",
            precio: "$7",
            descripcion: "Acabado mate, larga duración y a prueba de agua. Tu corrector favorito por su calidad y tamaño.",
            agotado: false
        },
        "Corrector Magic Mini": {
            imagen: "img/corrector-mini.jpg",
            precio: "$2.50",
            descripcion: "Al igual que el corrector magic, es ideal para todo tipo de piel, es de acabado mate, es de larga duración y a prueba de agua. Presentación más pequeña.",
            agotado: false
        },
        "Corrector Rebel": {
            imagen: "img/corrector-rebel.jpg",
            precio: "$3",
            descripcion: "Tiene una cobertura media-alta, es muy cremosito. Te deja un acabado mate, al cubrir las ojeras logra que la zona del contorno de los ojos se vea mucho más radiante.",
            agotado: false
        },
        "Rubor en Crema": {
            imagen: "img/rubor-crema.jpg",
            precio: "$3",
            descripcion: "Su calidad premium, su alta pigmentación y duración te sorprenderá. ¡Sólo necesitas una gotica! Acabado aterciopelado, se difuminan con facilidad.",
            agotado: false
        },
        "Rubor en Barra": {
            imagen: "img/rubor-barra.jpg",
            precio: "$3",
            descripcion: "Es un rubor en barra que puede ser utilizado como sombra de ojos y al mismo tiempo aportar color a tus labios. Su fórmula es ligera y fácil de difuminar.",
            agotado: false
        },
        "Rubor Pink": {
            imagen: "img/rubor-pink-trendy.jpg",
            precio: "$3",
            descripcion: "Incluye 3 rubores: Dos tonalidades en coral claro, oscuro y un iluminador dicromático rosa coral que deja efecto glowy en los pómulos.",
            agotado: false
        },
        "Puppy Palet": {
            imagen: "img/puppy-palet.jpg",
            precio: "$3.50",
            descripcion: "Paleta con iluminador y tres rubores en tonalidades salmón. El iluminador en tono dorado deja un efecto luminoso sobre el rostro.",
            agotado: false
        },
        "Bronzer en polvo": {
            imagen: "img/bronzer-polvo.jpg",
            precio: "$3",
            descripcion: "Bronceador en polvo compacto, tono universal que se adapta a todas las pieles. Es mate, muy suave y fácil de difuminar.",
            agotado: false
        },
        "Iluminador Donut": {
            imagen: "img/iluminador-donut.jpg",
            precio: "$2.50",
            descripcion: "Iluminador perlado con acabado natural, trae dos colores: oro rosa y champaña. Alta pigmentación y adherencia.",
            agotado: false
        },
        "Polvo Compacto": {
            imagen: "img/polvo-compacto.jpg",
            precio: "$3",
            descripcion: "Polvo compacto traslúcido perfecto para retoques. Acabado mate, controla la producción de grasa y suaviza líneas de expresión.",
            agotado: true
        },
        "Polvo Suelto": {
            imagen: "img/polvo-suelto.jpg",
            precio: "$4",
            descripcion: "Polvo traslúcido Bakery Flour que no aporta color ni cobertura. Fácil de aplicar y difuminar, perfecto para looks diarios.",
            agotado: true
        },
        "Pestañina Pastel": {
            imagen: "img/pestanina-pastel.jpg",
            precio: "$3.50",
            descripcion: "La azul alarga, la verde da volumen y grosor, la rosada brinda largor y volumen. Cepillo ovalado con cerdas finas.",
            agotado: false
        },
        "Pestañina Boom": {
            imagen: "img/pestanina-boom.jpg",
            precio: "$3.50",
            descripcion: "Tiene microfibras miniatura que se adhieren a tus pestañas naturales, logrando más volumen, abundancia y longitud.",
            agotado: false
        },
        "Pestañina Poodle": {
            imagen: "img/pestanina-poodle.jpg",
            precio: "$3.50",
            descripcion: "Cepillo en plástico que evita grumos y brinda un mayor alargamiento. Perfecto para todo tipo de pestañas.",
            agotado: false
        },
        "Sombras Chocolate": {
            imagen: "img/sombras-chocolate.jpg",
            precio: "$3",
            descripcion: "Paleta con pigmentación construible, puedes intensificar su color gradualmente para el efecto deseado.",
            agotado: false
        },
        "Sombras Meow": {
            imagen: "img/sombras-meow.jpg",
            precio: "$3.50",
            descripcion: "Incluye 3 glitters en gel prensado con destellos en forma de estrella y 3 sombras satinadas.",
            agotado: false
        },
        "Paleta de iluminadores": {
            imagen: "img/paleta-iluminadores.jpg",
            precio: "$5",
            descripcion: "Pigmentación increíble, textura ultra suave y de fácil difuminado. Efecto glowy único que perfila las zonas altas del rostro.",
            agotado: false
        },
        "Sombras Puppy": {
            imagen: "img/sombras-puppy.jpg",
            precio: "$5",
            descripcion: "12 tonos tierra entre mates y satinados. Perfectas para cualquier ocasión, suaves y fáciles de difuminar.",
            agotado: false
        },
        "Gloss Tint": {
            imagen: "img/gloss-tint.jpg",
            precio: "$3",
            descripcion: "Fórmula innovadora de textura aterciopelada y cremosa. Acabado mate sin transferencias que perdura todo el día.",
            agotado: false
        },
        "Retro Gloss": {
            imagen: "img/retro-gloss.jpg",
            precio: "$1.50",
            descripcion: "Tonos nudes, rosas y rojos con leves destellos satinados. Aportan un glow increíble y sutil.",
            agotado: false
        },
        "Smoothie Lips": {
            imagen: "img/smoothie-lips.jpg",
            precio: "$3",
            descripcion: "Brinda volumen a los labios durante 2 horas. Varios colores disponibles con aspecto 'gloss'.",
            agotado: true
        },
        "Gloss Forever": {
            imagen: "img/gloss-forever.jpg",
            precio: "$1",
            descripcion: "Textura suave con durabilidad media. Varios tonos entre rosas, rojizos y nudes.",
            agotado: false
        },
        "Mini Matte": {
            imagen: "img/mini-matte.jpg",
            precio: "$2",
            descripcion: "Labiales de efecto mate pero hidratantes. Textura muy suave y no pegajosa. Duración prolongada.",
            agotado: false
        },
        "Redvelvet Lipstick": {
            imagen: "img/redvelvet-lipstick.jpg",
            precio: "$2.50",
            descripcion: "Textura suave y ligera que no reseca los labios. Acabado mate profesional con gran suavidad.",
            agotado: false
        }
    }
};

function mostrarProductos() {
    const secciones = ['bloomshell', 'trendy'];
    
    secciones.forEach(seccion => {
        const contenedor = document.getElementById(seccion)?.querySelector('.productos-grid');
        if (!contenedor) return;
        
        contenedor.innerHTML = '';
        
        for (const [nombre, datos] of Object.entries(productos[seccion])) {
            const productoElement = document.createElement('div');
            productoElement.className = `producto ${datos.agotado ? 'agotado' : ''}`;
            
            productoElement.innerHTML = `
            <img src="${datos.imagen}" alt="${nombre}">
            <h3>${nombre}</h3>
            <p class="precio">${datos.precio}</p>
            ${datos.agotado ? '<span class="badge-agotado" style="color: #ff0000; font-weight: bold; background: transparent;">AGOTADO</span>' : ''}
        `;
            
            if (!datos.agotado) {
                productoElement.addEventListener('click', () => {
                    // Mostrar modal solo si no está agotado
                    document.getElementById('modal-imagen').src = datos.imagen;
                    document.getElementById('modal-titulo').textContent = nombre;
                    document.getElementById('modal-precio').textContent = datos.precio;
                    document.getElementById('modal-descripcion').textContent = datos.descripcion;
                    mostrarModal();
                });
            } else {
                productoElement.style.pointerEvents = 'none';
                productoElement.style.cursor = 'default';
            }
            
            contenedor.appendChild(productoElement);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el contador de visitas
    manejarContadorVisitas();

    // Mostrar productos
    mostrarProductos();

    // Variables globales
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let scrollPosition = 0;
    const body = document.body;

    // ========== FUNCIONES DEL MODAL DE PRODUCTO ==========
    function mostrarModal() {
        scrollPosition = window.pageYOffset;
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.top = `-${scrollPosition}px`;
        body.style.width = '100%';
        document.getElementById('producto-modal').style.display = 'block';
    }

    function cerrarModal() {
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        body.style.removeProperty('width');
        window.scrollTo(0, scrollPosition);
        document.getElementById('producto-modal').style.display = 'none';
    }

    // ========== FUNCIONES DEL CARRITO ==========
    function guardarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function añadirAlCarrito(nombre, precio, imagen) {
        const productoExistente = carrito.find(item => item.nombre === nombre);
        
        if (productoExistente) {
            productoExistente.cantidad += 1;
        } else {
            carrito.push({
                nombre,
                precio,
                imagen,
                cantidad: 1
            });
        }
        
        actualizarCarrito();
        mostrarNotificacion(`${nombre} añadido al carrito`);
        guardarCarrito();
    }

    function eliminarDelCarrito(index) {
        carrito.splice(index, 1);
        actualizarCarrito();
        guardarCarrito();
    }

    function modificarCantidad(index, cambio) {
        const nuevaCantidad = carrito[index].cantidad + cambio;
        
        if (nuevaCantidad < 1) {
            eliminarDelCarrito(index);
        } else {
            carrito[index].cantidad = nuevaCantidad;
            actualizarCarrito();
            guardarCarrito();
        }
    }

    // ========== FUNCIONES DEL CARRITO (ACTUALIZADAS) ==========
    function actualizarCarrito() {
        const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
        document.getElementById('cart-count').textContent = totalItems;
        
        const carritoLista = document.getElementById('carrito-lista');
        carritoLista.innerHTML = '';
        
        let total = 0;
        
        carrito.forEach((item, index) => {
            const precioNumerico = parseFloat(item.precio.replace('$', ''));
            const subtotal = precioNumerico * item.cantidad;
            total += subtotal;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'carrito-item';
            itemElement.dataset.index = index;
            itemElement.innerHTML = `
                <img src="${item.imagen}" alt="${item.nombre}">
                <div class="carrito-item-info">
                    <h4>${item.nombre}</h4>
                    <div class="carrito-item-controls">
                        <button class="btn-disminuir">-</button>
                        <span>${item.cantidad}</span>
                        <button class="btn-aumentar">+</button>
                    </div>
                    <div class="carrito-item-precio">${item.precio} c/u</div>
                    <div class="carrito-item-subtotal">$${subtotal.toFixed(2)}</div>
                </div>
                <button class="carrito-item-eliminar">
                    &times;
                </button>
            `;
            
            carritoLista.appendChild(itemElement);
        });
        
        document.getElementById('carrito-total').textContent = `$${total.toFixed(2)}`;
        
        const whatsappBtn = document.getElementById('whatsapp-carrito');
        const mensaje = generarMensajeWhatsApp();
        whatsappBtn.href = `https://wa.me/584246330398?text=${encodeURIComponent(mensaje)}`;
    }

    // ========== EVENT DELEGATION PARA LOS BOTONES ==========
    document.getElementById('carrito-lista').addEventListener('click', function(e) {
        const itemElement = e.target.closest('.carrito-item');
        if (!itemElement) return;
        
        const index = parseInt(itemElement.dataset.index);
        
        // Botón -
        if (e.target.classList.contains('btn-disminuir')) {
            modificarCantidad(index, -1);
        }
        // Botón +
        else if (e.target.classList.contains('btn-aumentar')) {
            modificarCantidad(index, 1);
        }
        // Botón ×
        else if (e.target.classList.contains('carrito-item-eliminar')) {
            eliminarDelCarrito(index);
        }
    });

    function generarMensajeWhatsApp() {
        let mensaje = "¡Hola Charmbeauty! 💄\n\nMi pedido:\n\n";
        
        carrito.forEach(item => {
            const subtotal = parseFloat(item.precio.replace('$', '')) * item.cantidad;
            mensaje += `- ${item.nombre} (${item.cantidad} x ${item.precio}) = $${subtotal.toFixed(2)}\n`;
        });
        
        const total = carrito.reduce((sum, item) => {
            return sum + (parseFloat(item.precio.replace('$', '')) * item.cantidad);
        }, 0);
        
        mensaje += `\nTotal: $${total.toFixed(2)}\n\n`;
        mensaje += "¿Podrían indicarme cómo proceder con el pago? ¡Gracias! ✨";
        
        return mensaje;
    }

    // ========== FUNCIONES DEL MODAL CARRITO ==========
    function mostrarCarrito() {
        scrollPosition = window.pageYOffset;
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.top = `-${scrollPosition}px`;
        body.style.width = '100%';
        document.getElementById('carrito-modal').style.display = 'block';
    }

    function cerrarCarrito() {
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        body.style.removeProperty('width');
        window.scrollTo(0, scrollPosition);
        document.getElementById('carrito-modal').style.display = 'none';
    }

    // ========== NOTIFICACIONES ==========
    function mostrarNotificacion(mensaje) {
        const notificacion = document.createElement('div');
        notificacion.className = 'notificacion';
        notificacion.textContent = mensaje;
        document.body.appendChild(notificacion);
        
        setTimeout(() => {
            notificacion.classList.add('mostrar');
        }, 10);
        
        setTimeout(() => {
            notificacion.classList.remove('mostrar');
            setTimeout(() => {
                document.body.removeChild(notificacion);
            }, 300);
        }, 3000);
    }

    // ========== INICIALIZACIÓN ==========
    function inicializar() {
        // Inicializar carrito
        actualizarCarrito();
        
        // Configurar eventos de productos
        document.querySelectorAll('.producto').forEach(producto => {
            producto.addEventListener('click', function() {
                const nombreProducto = this.querySelector('h3').textContent;
                const seccion = this.closest('.marca').id;
                
                if (productos[seccion] && productos[seccion][nombreProducto]) {
                    const prod = productos[seccion][nombreProducto];
                    
                    document.getElementById('modal-imagen').src = prod.imagen;
                    document.getElementById('modal-titulo').textContent = nombreProducto;
                    document.getElementById('modal-precio').textContent = prod.precio;
                    document.getElementById('modal-descripcion').textContent = prod.descripcion;
                    
                    // Configurar botón "Añadir al carrito"
                    const btnAñadir = document.getElementById('btn-añadir-carrito');
                    if (btnAñadir) {
                        btnAñadir.onclick = function() {
                            añadirAlCarrito(nombreProducto, prod.precio, prod.imagen);
                            cerrarModal();
                        };
                    }
                    
                    mostrarModal();
                }
            });
        });

        // Configurar botón del carrito
        const cartIcon = document.getElementById('cart-icon');
        if (cartIcon) {
            cartIcon.addEventListener('click', function(e) {
                e.preventDefault();
                mostrarCarrito();
            });
        }

        // Configurar eventos para cerrar modales
        document.querySelector('.cerrar-modal')?.addEventListener('click', cerrarModal);
        document.querySelector('.cerrar-carrito')?.addEventListener('click', cerrarCarrito);
        
        // Cerrar al hacer clic fuera del modal
        window.addEventListener('click', function(event) {
            if (event.target === document.getElementById('producto-modal')) {
                cerrarModal();
            }
            if (event.target === document.getElementById('carrito-modal')) {
                cerrarCarrito();
            }
        });

        // Cerrar con tecla ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                if (document.getElementById('producto-modal').style.display === 'block') {
                    cerrarModal();
                }
                if (document.getElementById('carrito-modal').style.display === 'block') {
                    cerrarCarrito();
                }
            }
        });
    }

    // Iniciar la aplicación
    inicializar();
});

// Funciones globales necesarias para los botones en el HTML
window.modificarCantidad = function(index, cambio) {
    document.dispatchEvent(new CustomEvent('modificarCantidad', {
        detail: { index, cambio }
    }));
};

window.eliminarDelCarrito = function(index) {
    document.dispatchEvent(new CustomEvent('eliminarDelCarrito', {
        detail: { index }
    }));
};

// Añade estos listeners al inicio del DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('modificarCantidad', function(e) {
        const { index, cambio } = e.detail;
        const nuevaCantidad = carrito[index].cantidad + cambio;
        
        if (nuevaCantidad < 1) {
            carrito.splice(index, 1);
        } else {
            carrito[index].cantidad = nuevaCantidad;
        }
        
        actualizarCarrito();
        guardarCarrito();
    });

    document.addEventListener('eliminarDelCarrito', function(e) {
        const { index } = e.detail;
        carrito.splice(index, 1);
        actualizarCarrito();
        guardarCarrito();
    });
});
