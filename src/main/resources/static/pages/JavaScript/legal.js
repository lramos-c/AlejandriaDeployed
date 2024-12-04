const terminosLegales = document.querySelectorAll("ul.terminos li");

terminosLegales.forEach(item => {
    item.addEventListener("click", () =>{
        cambiarContenido(item.getAttribute("data-section"));
    });
});

function cambiarContenido(section){
    const contenido = document.getElementById("content");
    
    if (section==='tyc'){
        contenido.innerHTML=`<h2>Términos y condiciones</h2>
        <ol>
            <li><strong>Aceptación de los Términos</strong></li>
            <p>Al utilizar nuestro sitio, aceptas estos Términos y Condiciones en su totalidad. Si no estás de acuerdo, no utilices nuestros servicios.</p>
            <li><strong>Uso del Sitio</strong></li>
            <ul>
                <li>El contenido de este sitio es solo para tu información y uso personal.</li>
                <li>No puedes reproducir, duplicar, copiar, vender, revender ni explotar ninguna parte del sitio sin nuestro consentimiento expreso.</li>
            </ul>
            <li><strong>Registro de Usuario</strong></li>
            <ul>
                <li>Para realizar compras, es posible que necesites registrarte y crear una cuenta.</li>
                <li>Eres responsable de mantener la confidencialidad de tu contraseña y de la información de tu cuenta.</li>
            </ul>
            <li><strong>Precios y Pagos</strong></li>
            <ul>
                <li>Todos los precios están en [moneda] y pueden cambiar sin previo aviso.</li>
                <li>Aceptamos los siguientes métodos de pago: (lista de métodos de pago).</li>
                <li>Todos los pedidos están sujetos a la disponibilidad de los productos.</li>
            </ul>
            <li><strong>Envío y Entrega</strong></li>
            <ul>
                <li>Procesamos los pedidos en un plazo de [número] días hábiles.</li>
                <li>Los tiempos de entrega pueden variar según la ubicación y el método de envío seleccionado.</li>
            </ul>
            <p>Si tienes alguna duda acerca de nuestra política de cookies, por favor, no dudes en ponerte en contacto con nosotros.</p>

                <p>Gracias por confiar en <strong>Librería de Alejandría</strong>.</p>
        
        </ol>`;
    } else if (section==='privacidad'){
        contenido.innerHTML=`<h2>Política de Privacidad de Librería De Alejandría</h2>
        <p>Respetamos y protegemos tu privacidad. Esta política de privacidad explica cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando visitas nuestro sitio web o realizas compras en línea. Al utilizar nuestros servicios, aceptas las prácticas descritas en esta política.</p>

        <ol>
            <li><strong>Información que Recopilamos</strong></li>
            <p>Recopilamos la siguiente información cuando utilizas nuestro sitio web:</p>
            <ul>
                <li><strong>Información personal</strong>: Nombre, dirección de correo electrónico, dirección de envío, número de teléfono y detalles de pago (como número de tarjeta de crédito).</li>
                <li><strong>Información de navegación</strong>: Datos relacionados con tu navegación en nuestro sitio, como la dirección IP, tipo de dispositivo, navegador, páginas visitadas, etc.</li>
            </ul>

            <li><strong>Uso de la Información</strong></li>
            <p>Usamos la información recopilada para los siguientes fines:</p>
            <ul>
                <li>Procesar y gestionar tus pedidos.</li>
                <li>Enviar confirmaciones de pedidos, actualizaciones de estado y otros mensajes relacionados con tu compra.</li>
                <li>Mejorar la experiencia del usuario en nuestro sitio web.</li>
                <li>Personalizar el contenido y las ofertas según tus preferencias.</li>
                <li>Proteger nuestra tienda en línea de fraudes y transacciones sospechosas.</li>
                <li>Enviarte información sobre nuevos productos, ofertas especiales y novedades de nuestra librería (si has optado por recibir comunicaciones).</li>
            </ul>

            <li><strong>Compartir la Información</strong></li>
            <p>No compartimos, vendemos ni alquilamos tu información personal a terceros para fines comerciales. Sin embargo, podemos compartir tu información con terceros en los siguientes casos:</p>
            <ul>
                <li><strong>Proveedores de servicios</strong>: Podemos compartir tu información con empresas de servicios externos (como plataformas de pago, empresas de envío) para procesar y enviar tus pedidos.</li>
                <li><strong>Por razones legales</strong>: Podemos compartir tu información si así lo exige la ley o si es necesario para proteger nuestros derechos, propiedades o seguridad.</li>
            </ul>

            <li><strong>Protección de la Información</strong></li>
            <p>Implementamos medidas de seguridad para proteger tu información personal contra el acceso no autorizado, la divulgación, la alteración o la destrucción. Usamos tecnología de encriptación SSL para proteger los datos de pago durante las transacciones en línea.</p>

            <li><strong>Cookies</strong></li>
            <p>Utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación en nuestro sitio web. Las cookies nos permiten recordar tus preferencias y ofrecerte contenido personalizado. Puedes configurar tu navegador para rechazar las cookies, pero ten en cuenta que algunas funciones del sitio podrían no funcionar correctamente si lo haces.</p>

            <li><strong>Derechos de los Usuarios</strong></li>
            <p>Tienes derecho a acceder, corregir, actualizar o eliminar tu información personal. Si deseas ejercer alguno de estos derechos o tienes preguntas sobre cómo manejamos tu información, puedes contactarnos a través de los canales proporcionados más abajo.</p>

            <li><strong>Conservación de los Datos</strong></li>
            <p>Conservamos tu información personal durante el tiempo necesario para cumplir con los fines establecidos en esta política, a menos que la ley nos exija o permita retenerla por más tiempo.</p>

            <li><strong>Enlaces a Sitios Externos</strong></li>
            <p>Este sitio web puede contener enlaces a otros sitios externos que no están bajo nuestro control. No somos responsables de las prácticas de privacidad de estos sitios, por lo que te recomendamos leer sus políticas de privacidad antes de proporcionarles tu información personal.</p>

            <li><strong>Cambios en la Política de Privacidad</strong></li>
            <p>Podemos actualizar nuestra política de privacidad de vez en cuando. Cualquier cambio será publicado en esta página con la fecha de revisión. Te recomendamos que revises esta página regularmente para estar informado sobre cómo protegemos tu privacidad.</p>
        </ol>

        <p><strong>¿Tienes preguntas sobre nuestra política de privacidad?</strong></p>
        <p>Si tienes preguntas o inquietudes sobre nuestra política de privacidad o sobre cómo manejamos tus datos personales, no dudes en contactarnos.</p>

        <p>Gracias por confiar en <strong>Librería de Alejandría</strong>. Tu privacidad y seguridad son nuestras prioridades.</p>
                `;
    }else if (section==='devolucion'){
        contenido.innerHTML=`<h2>Políticas de reembolsos y devoluciones.</h2>
    <p>Gracias por elegir a <strong>Librería de Alejandría</strong>. Nos importa tu satisfacción y queremos que disfrutes de cada compra. Si por alguna razón no estás completamente feliz con tu pedido, te ofrecemos un proceso claro y sencillo para devoluciones y reembolsos, bajo las siguientes condiciones:</p>

    <ol>
        <li><strong>Devoluciones:</strong></li>
        <ul>
            <li><strong>Condiciones Generales:</strong>
                <ul>
                    <li><strong>Plazo de Devolución:</strong> Aceptamos devoluciones de productos dentro de los <strong>30 días</strong> posteriores a la fecha de compra.</li>
                    <li><strong>Estado del Producto:</strong> El libro debe estar en su <strong>estado original</strong>, sin daños, marcas ni signos de uso (como subrayados o notas). No se aceptarán devoluciones si el producto ha sido abierto o usado.</li>
                    <li><strong>Comprobante de Compra:</strong> Para procesar la devolución, necesitarás presentar el <strong>recibo de compra</strong> o una prueba de la transacción (puede ser un correo de confirmación de compra o el número de pedido).</li>
                </ul>
            </li>
            
            <li><strong>Exclusiones:</strong>
                <ul>
                    <li>Libros <strong>usados</strong>, deteriorados o con daños causados por el cliente no son aceptados para devolución.</li>
                    <li>Libros especiales o personalizados (como ediciones limitadas, libros firmados, encuadernaciones personalizadas) <strong>no son reembolsables</strong>, salvo que estén defectuosos o dañados.</li>
                    <li><strong>Productos digitales</strong> (ebooks, audiolibros) no son sujetos a devolución una vez adquiridos.</li>
                </ul>
            </li>
        </ul>

        <li><strong>Procedimiento para Devoluciones:</strong></li>
        <ul>
            <li><strong>En Línea:</strong> Si realizaste tu compra en línea, por favor <strong>contacta con nuestro servicio de atención al cliente</strong> enviando un correo electrónico a <strong>[correo electrónico]</strong> o llamando al <strong>[número de teléfono]</strong> para iniciar el proceso de devolución.</li>
            <li>Te indicaremos cómo proceder con el envío de vuelta del libro. Los costos de envío de la devolución serán responsabilidad del cliente, <strong>a menos que el libro llegue dañado o defectuoso</strong>.</li>
            <li>Recuerda que el producto debe ser devuelto en su estado original para ser aceptado.</li>
        </ul>

        <li><strong>Reembolsos:</strong></li>
        <ul>
            <li><strong>Condiciones para el Reembolso:</strong> El reembolso solo será procesado si el libro es devuelto dentro del plazo establecido de 30 días y cumple con las condiciones de devolución.</li>
            <li>Los reembolsos se realizarán según el <strong>método de pago original</strong> (tarjeta de crédito, débito, etc.).</li>

            <li><strong>Tiempos de Procesamiento:</strong> Los reembolsos pueden tardar hasta <strong>14 días hábiles</strong> a partir de la recepción del producto en nuestro almacén. Recibirás un correo de confirmación cuando se haya procesado el reembolso.</li>
        </ul>

        <li><strong>Productos Defectuosos o Dañados:</strong></li>
        <ul>
            <li>Si el libro que recibiste tiene defectos de fabricación, está dañado o no corresponde al que pediste, por favor <strong>contacta con nosotros de inmediato</strong> para organizar el reemplazo o reembolso sin ningún costo adicional.</li>
            <li>Este tipo de devolución es aceptada incluso después del plazo de 30 días, si el defecto es evidente.</li>
        </ul>

        <li><strong>Excepciones y Consideraciones Especiales:</strong></li>
        <ul>
            <li><strong>Libros de texto</strong>, material educativo o libros con promociones especiales: Estos productos pueden estar sujetos a condiciones específicas de devolución. Consulta los términos en cada caso antes de realizar la compra.</li>
            <li>Si no quedas satisfecho con el contenido del libro (por ejemplo, el libro no cumple con tus expectativas), la devolución solo será aceptada si el producto está en su <strong>estado original</strong>, sin abrir ni usar.</li>
        </ul>

        <li><strong>Cambios:</strong></li>
        <ul>
            <li>Si deseas cambiar un libro por otro, puedes hacerlo bajo las condiciones de devolución dentro de los 30 días posteriores a la compra. Para ello, por favor <strong>contacta a nuestro servicio de atención al cliente</strong>.</li>
            <li>El cambio estará sujeto a la disponibilidad del nuevo producto.</li>
        </ul>
    </ol>

    <p>Nuestro equipo de atención al cliente está disponible para ayudarte.</p>
    <p>Gracias por confiar en <strong>Librería de Alejandría</strong>. ¡Que disfrutes de tu lectura!</p>
            
        `;
    }else if (section==='envios'){
        contenido.innerHTML=`<h2>Política de Envíos de Librería De Alejandría</h2>
        <p>Nos aseguramos de que tu experiencia de compra sea lo más conveniente posible. A continuación, te proporcionamos toda la información necesaria sobre nuestras políticas de envío para que puedas conocer cómo procesamos y enviamos tus pedidos.</p>

        <ol>
            <li><strong>Procesamiento de Pedidos</strong></li>
            <p>Todos los pedidos realizados en nuestro sitio web se procesan de lunes a viernes, excepto en días festivos. Una vez que realizas tu compra, recibirás un correo electrónico de confirmación con los detalles de tu pedido. Los tiempos de procesamiento pueden variar dependiendo de la disponibilidad del producto y de la carga de pedidos en ese momento.</p>

            <li><strong>Opciones de Envío</strong></li>
            <p>Ofrecemos varias opciones de envío para adaptarnos a tus necesidades. Estas son las opciones disponibles:</p>
            <ul>
                <li><strong>Envío Estándar:</strong> Este es el método más económico, y generalmente toma entre 5 y 7 días hábiles para llegar a tu dirección. El costo de este envío varía según la ubicación de entrega.</li>
                <li><strong>Envío Express:</strong> Este servicio es más rápido y garantiza la entrega en 2-3 días hábiles, dependiendo de tu ubicación. Tiene un costo adicional que se calcula durante el proceso de pago.</li>
            </ul>

            <li><strong>Costos de Envío</strong></li>
            <p>Los costos de envío se calculan en función del peso y las dimensiones del paquete, así como de la ubicación de entrega. El costo final del envío se mostrará en el proceso de pago antes de que confirmes tu pedido.</p>
        
            <li><strong>Confirmación y Seguimiento del Envío</strong></li>
            <p>Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con el número de seguimiento y un enlace para que puedas rastrear tu paquete en tiempo real.</p>

            <li><strong>Dirección de Envío</strong></li>
            <p>Es importante que proporciones una dirección de envío correcta y completa para evitar retrasos o problemas con la entrega. Si proporcionas una dirección incorrecta, no seremos responsables de los retrasos o pérdidas en el envío.</p>

            <li><strong>Retrasos en el Envío</strong></li>
            <p>Aunque trabajamos con empresas de transporte confiables, no podemos garantizar tiempos exactos de entrega, especialmente durante períodos de alta demanda, como las fiestas. Si tu pedido experimenta un retraso, por favor contáctanos para obtener más información.</p>

            <li><strong>Envíos a P.O. Boxes</strong></li>
            <p>No realizamos envíos a apartados postales (P.O. Boxes) en este momento. Te recomendamos proporcionar una dirección física para asegurar la entrega exitosa de tu pedido.</p>


            <li><strong>Problemas con el Envío</strong></li>
            <p>Si tu pedido no ha llegado dentro del tiempo estimado o tienes algún problema con el envío (como daños o pérdida), por favor contacta con nuestro equipo de atención al cliente para que podamos ayudarte a resolverlo.</p>
            
            <li><strong>Política de Devoluciones por Envío</strong></li>
            <p>Si recibes un producto dañado o incorrecto, por favor contacta con nosotros dentro de los primeros 7 días desde la recepción del paquete. Nos encargaremos de organizar un reemplazo o reembolso, dependiendo de la situación.</p>

            <li><strong>Cambios en la Política de Envíos</strong></li>
            <p>Podemos actualizar esta política de envíos de vez en cuando, por lo que te recomendamos revisar esta página periódicamente para estar al tanto de cualquier cambio en nuestras condiciones.</p>
        </ol>

        <p><strong>¿Tienes preguntas sobre el envío de tu pedido?</strong></p>
        <p>Si tienes alguna duda sobre nuestros servicios de envío o necesitas más información, no dudes en contactarnos.</p>

        <p>Gracias por elegir <strong>Libreria de Alejandría</strong>. Nos esforzamos por hacer que tu experiencia de compra sea lo más sencilla y segura posible.</p>
                `;
    }else if (section==='cookies'){
        contenido.innerHTML=`<h2>Política de Cookies de Librería de Alejandría</h2>
        <p>En <strong>Librería de Alejandría</strong> valoramos tu privacidad y nos comprometemos a protegerla. Esta política de cookies explica cómo usamos las cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web.</p>

        <ol>
            <li><strong>¿Qué son las Cookies?</strong></li>
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (computadora, tablet o móvil) cuando visitas un sitio web. Estos archivos permiten que el sitio web recuerde tus acciones y preferencias durante un periodo de tiempo, para que no tengas que volver a configurarlas cada vez que lo visites.</p>

            <li><strong>Tipos de Cookies que Utilizamos</strong></li>
            <ul>
                <li><strong>Cookies Necesarias:</strong> Estas cookies son esenciales para que puedas navegar por el sitio web y utilizar sus funciones, como acceder a áreas seguras o completar formularios. Sin ellas, algunos servicios no podrían funcionar correctamente.</li>
                <li><strong>Cookies de Preferencias:</strong> Permiten que el sitio web recuerde información sobre tu navegación, como tu idioma o región, para ofrecerte una experiencia más personalizada.</li>
                <li><strong>Cookies de Análisis:</strong> Estas cookies nos permiten recopilar información sobre el uso de nuestro sitio, como las páginas que visitas, el tiempo que pasas en ellas, y cualquier error que ocurra. Usamos esta información para mejorar el rendimiento y la funcionalidad del sitio.</li>
                <li><strong>Cookies de Publicidad:</strong> Estas cookies se utilizan para mostrar anuncios personalizados según tus intereses. También se utilizan para limitar la cantidad de veces que ves un anuncio y para medir la efectividad de nuestras campañas publicitarias.</li>
            </ul>

            <li><strong>¿Cómo Usamos las Cookies?</strong></li>
            <ul>
                <li>Usamos cookies para ofrecerte una experiencia personalizada, recordando tus preferencias y configuraciones de usuario.</li>
                <li>Utilizamos cookies de análisis para entender cómo los usuarios interactúan con nuestro sitio y cómo podemos mejorar su funcionalidad.</li>
                <li>Las cookies de publicidad nos ayudan a mostrarte anuncios relevantes y a medir el éxito de nuestras campañas de marketing.</li>
            </ul>

            <li><strong>¿Cómo Controlar las Cookies?</strong></li>
            <ul>
                <li>Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. La mayoría de los navegadores permiten bloquear o eliminar cookies, pero esto puede afectar la funcionalidad del sitio web.</li>
                <li>Si deseas desactivar las cookies, puedes hacerlo desde las opciones de privacidad de tu navegador, pero ten en cuenta que algunas funciones de nuestro sitio podrían no estar disponibles.</li>
                <li>Para obtener más información sobre cómo gestionar las cookies en diferentes navegadores, puedes visitar las secciones de ayuda de los mismos:</li>

            </ul>

            <li><strong>Cookies de Terceros</strong></li>
            <ul>
                <li>Al utilizar nuestro sitio, también podemos permitir que terceros, como proveedores de servicios de análisis y publicidad, coloquen cookies en tu dispositivo.</li>
                <li>Estos terceros pueden recopilar información sobre tus actividades en línea para mostrarte anuncios relevantes o para analizar el uso del sitio.</li>
                <li>Si deseas obtener más información sobre cómo estos terceros usan las cookies, te recomendamos revisar sus respectivas políticas de privacidad.</li>
            </ul>

            <li><strong>¿Cómo Aceptar o Rechazar las Cookies?</strong></li>
            <ul>
                <li>Al visitar nuestro sitio web, se te informará sobre el uso de cookies mediante un aviso en el banner de la parte inferior o superior del sitio. Si continúas navegando sin cambiar la configuración de cookies, se considerará que aceptas su uso.</li>
                <li>Si prefieres no aceptar las cookies, puedes optar por no continuar navegando en el sitio o desactivar las cookies desde la configuración de tu navegador.</li>
            </ul>

            <li><strong>Actualizaciones a esta Política de Cookies</strong></li>
            <ul>
                <li>Podemos actualizar esta política de cookies en cualquier momento para reflejar cambios en nuestras prácticas o por otros motivos operativos, legales o regulatorios.</li>
                <li>Cuando realicemos cambios, publicaremos una nueva versión de esta política en nuestro sitio web con una nueva fecha de revisión. Te recomendamos revisar esta página periódicamente.</li>
            </ul>
        </ol>

        <p><strong>¿Tienes preguntas o inquietudes?</strong></p>
        <p>Si tienes alguna duda acerca de nuestra política de cookies, por favor, no dudes en ponerte en contacto con nosotros.</p>

        <p>Gracias por confiar en <strong>Librería de Alejandría</strong>.</p>
        
        `;
    }else if (section==='intelectual'){
        contenido.innerHTML=`<h2>Política de Propiedad Intelectual de Librería De Alejandría</h2>
        <p>Respetamos y protegemos los derechos de propiedad intelectual, tanto nuestros como de terceros. Esta política detalla cómo gestionamos los derechos de autor, marcas registradas y otros derechos de propiedad relacionados con los contenidos disponibles en nuestro sitio web.</p>

        <ol>
            <li><strong>Derechos de Autor</strong></li>
            <p>Todo el contenido presente en este sitio web, incluidos textos, imágenes, gráficos, logotipos, iconos, videos, bases de datos y software, está protegido por derechos de autor y otros derechos de propiedad intelectual. Estos derechos son propiedad de <strong>Librería de Alejandría</strong> o de sus respectivos titulares.</p>
            <p>La reproducción, distribución, modificación, exhibición pública, y cualquier otra forma de explotación de este contenido está prohibida, excepto cuando se cuente con autorización expresa de <strong>Librería de Alejandría</strong> o del titular de los derechos.</p>

            <li><strong>Marcas Registradas</strong></li>
            <p>Las marcas y logotipos utilizados en este sitio web, incluidos <strong>Librería de Alejandría</strong> y otros signos distintivos, están protegidos por las leyes de marcas registradas. No está permitido el uso de estas marcas sin el consentimiento previo por escrito de <strong>Librería de Alejandría</strong> o del titular correspondiente.</p>

            <li><strong>Licencia de Uso</strong></li>
            <p>Al acceder a nuestro sitio web, <strong>Librería de Alejandría</strong> otorga una licencia limitada, no exclusiva, revocable y no transferible para visualizar y hacer uso de los contenidos de este sitio solo para fines personales y no comerciales. Queda expresamente prohibido copiar, distribuir, modificar o reproducir cualquier contenido sin la debida autorización.</p>

            <li><strong>Responsabilidad por el Uso No Autorizado</strong></li>
            <p>El uso no autorizado del contenido de <strong>Librería de Alejandría</strong> puede dar lugar a reclamaciones legales, incluidas demandas por violación de derechos de autor, marcas registradas y otros derechos de propiedad intelectual. Nos reservamos el derecho de tomar las acciones legales necesarias para proteger nuestros derechos y los de los titulares de los derechos de propiedad intelectual relacionados.</p>

            <li><strong>Contenido de Usuarios</strong></li>
            <p>Si los usuarios del sitio web de <strong>Librería de Alejandría</strong> cargan o publican contenido (como comentarios, reseñas o material en el foro), otorgan a <strong>Librería de Alejandría</strong> una licencia no exclusiva, mundial, libre de regalías y transferible para usar, modificar, reproducir y distribuir dicho contenido en cualquier medio.</p>
            <p>El usuario garantiza que el contenido que publica no infringe los derechos de propiedad intelectual de terceros, y se compromete a indemnizar a <strong>Librería de Alejandría</strong> por cualquier reclamación derivada del uso no autorizado de dicho contenido.</p>

            <li><strong>Notificación de Infracción</strong></li>
            <p>Si consideras que cualquier contenido en nuestro sitio web infringe tus derechos de propiedad intelectual, te invitamos a notificarnos de inmediato. Por favor, envíanos un correo electrónico a [correo@libreriadealejandria.com] con los siguientes datos:</p>
            <ul>
                <li>Una descripción detallada del contenido que se considera infractor.</li>
                <li>Una declaración en la que confirmes que eres el titular de los derechos de autor o que actúas en nombre del titular.</li>
                <li>Un enlace o dirección URL donde se encuentra el contenido infractor en nuestro sitio web.</li>
                <li>Una declaración de buena fe que indique que consideras que el uso del contenido infractor no está autorizado por el propietario de los derechos, su representante o la ley.</li>
                <li>Tu firma electrónica o física.</li>
            </ul>

            <li><strong>Enlaces a Terceros</strong></li>
            <p>En nuestro sitio web pueden existir enlaces a sitios de terceros, los cuales están sujetos a sus propias políticas de propiedad intelectual. <strong>Librería de Alejandría</strong> no se hace responsable de la exactitud, legalidad o cualquier otro aspecto relacionado con el contenido de estos sitios de terceros.</p>

            <li><strong>Modificaciones a la Política de Propiedad Intelectual</strong></li>
            <p><strong>Librería de Alejandría</strong> se reserva el derecho de modificar esta política de propiedad intelectual en cualquier momento, sin previo aviso. Cualquier cambio será publicado en esta página, y la fecha de la última actualización se indicará al final de este documento. Te recomendamos revisar esta política periódicamente.</p>
        </ol>

        <p><strong>¿Tienes preguntas sobre nuestros derechos de propiedad intelectual?</strong></p>
        <p>Si tienes alguna duda o pregunta sobre nuestros derechos de propiedad intelectual o sobre cómo puedes utilizar el contenido de <strong>Librería de Alejandría</strong>, no dudes en contactarnos.</p>

        <p>Gracias por visitar <strong>De Alejandría</strong>. Tu respeto por los derechos de propiedad intelectual es fundamental para que podamos seguir ofreciendo contenido de calidad.</p>
                `;
    }else if (section==='pagos'){
        contenido.innerHTML=`<h2>Política de Seguridad de Pagos</h2>
        <p> Nos tomamos muy en serio la seguridad de tus datos y pagos. Queremos que tengas la tranquilidad de que tu información personal y financiera está protegida en todo momento mientras realizas compras en nuestro sitio web.</p>

        <ol>
            <li><strong>Seguridad en los Pagos</strong></li>
            <p>Cuando realizas una compra en línea en <strong>Librería de Alejandría</strong>, utilizamos medidas de seguridad avanzadas para proteger la información de tu pago. Trabajamos con plataformas de pago confiables y aseguradas para garantizar que tus datos financieros estén protegidos durante todo el proceso de transacción.</p>

            <li><strong>Encriptación de Datos</strong></li>
            <p>Tus datos personales y financieros, como números de tarjeta de crédito o débito, son completamente ininteligibles para terceros.</p>
            
            <li><strong>Plataformas de Pago Seguras</strong></li>
            <ul>
                <li>Para procesar tus pagos, trabajamos con proveedores de servicios de pago que cumplen con los más altos estándares de seguridad, como <strong>Stripe</strong>, <strong>PayPal</strong> y otros sistemas de pago reconocidos.</li>
                <li>Estos proveedores están certificados por los estándares de seguridad de la industria de tarjetas de pago (PCI DSS) y protegen tu información mediante protocolos de seguridad avanzados.</li>
            </ul>

            <li><strong>Protección Contra Fraude</strong></li>
            <p>Para proteger tanto a nuestros clientes como a nuestra tienda de fraudes, implementamos medidas adicionales de seguridad. Esto incluye la verificación de la información de pago y el monitoreo continuo de transacciones sospechosas.</p>
            
            <li><strong>Autenticación de Pagos</strong></li>
            <ul>
                <li>En algunos casos, es posible que tu banco o el proveedor de pago requiera una <strong>autenticación adicional</strong> para validar la transacción (como un código de seguridad de un solo uso o verificación por SMS). Esto ayuda a prevenir fraudes y garantizar que el pago sea realizado por el titular legítimo de la tarjeta.</li>
                <li>Si no puedes completar el pago debido a una autenticación adicional, por favor contacta a tu entidad financiera para obtener asistencia.</li>
            </ul>

            <li><strong>Confidencialidad de los Datos Personales</strong></li>
            <p>Tu privacidad es nuestra prioridad. Toda la información personal y de pago que proporcionas al realizar una compra en nuestro sitio se utiliza exclusivamente para procesar tu pedido y realizar las transacciones de pago. No compartimos esta información con terceros sin tu consentimiento explícito, excepto cuando sea necesario para completar el procesamiento del pago.</p>

            <li><strong>Información de Pago y Tarjetas</strong></li>
            <p>Nos comprometemos a no almacenar los detalles completos de tu tarjeta de crédito o débito en nuestros servidores. La información de tu tarjeta se procesa a través de nuestras plataformas de pago de terceros y se almacena de forma segura según los estándares de seguridad de la industria.</p>

            <li><strong>Autorización de Pagos</strong></li>
            <p>Una vez realizado el pago, recibirás una <strong>confirmación de tu pedido</strong> por correo electrónico, junto con un recibo de transacción. Si tienes dudas sobre el estado de tu pago o el pedido, puedes contactar con nuestro servicio de atención al cliente en cualquier momento.</p>

            <li><strong>Protección contra Cargos No Reconocidos</strong></li>
            <p>Si encuentras un cargo que no reconoces en tu estado de cuenta, por favor <strong>contacta con nosotros inmediatamente</strong> para investigar el problema. Trabajaremos con el proveedor de pagos y las autoridades para resolver cualquier disputa de pago de manera eficiente y transparente.</p>

            <li><strong>Seguridad en el Acceso a la Cuenta</strong></li>
            <ul>
                <li>Es importante que mantengas segura tu información de inicio de sesión (nombre de usuario y contraseña) en nuestro sitio web. Recomendamos cambiar tu contraseña regularmente y no compartirla con nadie.</li>
                <li>Si sospechas que alguien ha obtenido acceso no autorizado a tu cuenta, por favor contacta con nosotros de inmediato para que podamos ayudarte a proteger tu cuenta.</li>
            </ul>

            <li><strong>Actualización de la Política de Seguridad de Pagos</strong></li>
            <ul>
                <li>Podemos actualizar esta política de seguridad en cualquier momento para reflejar cambios en nuestras prácticas de seguridad, tecnología o por razones legales. Cualquier cambio será publicado en esta página con la fecha de revisión.</li>
                <li>Te recomendamos revisar periódicamente esta política para estar informado sobre cómo protegemos tus pagos y datos personales.</li>
            </ul>
        </ol>

        <p><strong>¿Tienes preguntas sobre la seguridad de tus pagos?</strong></p>
        <p>Si tienes alguna pregunta o inquietud sobre la seguridad de tus pagos o de tus datos personales, no dudes en ponerte en contacto con nosotros:</p>
        <ul>
            
        <p>Gracias por confiar en <strong>Librería de Alejandría</strong>. Tu seguridad y satisfacción son nuestras principales prioridades.</p>
        `;
    }else if (section==='consumidores'){
        contenido.innerHTML=`<h2>Política de Derechos de los Consumidores de Librería De Alejandría</h2>
        <p>Nos comprometemos a cumplir con las leyes de protección al consumidor y a asegurar que nuestros clientes tengan una experiencia de compra segura y satisfactoria. Esta política describe los derechos de los consumidores que adquieren productos a través de nuestro sitio web.</p>

        <ol>
            <li><strong>Derecho a la Información</strong></li>
            <p>Como consumidor, tienes el derecho a recibir información clara y comprensible sobre los productos que compras, incluidos los detalles del precio, características, disponibilidad y las condiciones de entrega.</p>
            <p>Asegúrate de leer las descripciones de productos y las condiciones de compra antes de realizar cualquier pedido. Si tienes dudas sobre un producto, no dudes en contactar con nuestro servicio de atención al cliente.</p>

            <li><strong>Derecho a la Protección en Caso de Producto Defectuoso</strong></li>
            <p>Si recibes un producto defectuoso, dañado o que no se corresponde con lo que pediste, tienes derecho a solicitar la devolución, el reemplazo o el reembolso del mismo. El plazo para notificar productos defectuosos o erróneos es de 30 días a partir de la recepción del pedido.</p>
            <p>Para hacer uso de este derecho, contacta con nuestro equipo de atención al cliente a través de [correo electrónico] o [número de teléfono].</p>

            <li><strong>Derecho de Desistimiento</strong></li>
            <p>De acuerdo con las leyes de protección al consumidor, tienes derecho a cancelar tu pedido en un plazo de 14 días naturales desde la recepción del producto, sin necesidad de justificar tu decisión. Este derecho se aplica a productos no abiertos y no utilizados.</p>
            <p>Si deseas hacer uso de este derecho, por favor, sigue el procedimiento de devolución que te indicaremos tras contactar con nuestro servicio de atención al cliente. Los costos de envío para la devolución serán a tu cargo, salvo que el producto haya llegado defectuoso o incorrecto.</p>

            <li><strong>Condiciones para el Ejercicio del Derecho de Desistimiento</strong></li>
            <p>Para ejercer tu derecho de desistimiento, debes devolver los productos en su estado original, sin abrir ni usar. El producto debe estar en su embalaje original y con todos los accesorios incluidos. Si no se cumplen estas condiciones, no podremos procesar la devolución ni ofrecerte un reembolso.</p>

            <li><strong>Reembolsos</strong></li>
            <p>Una vez que hayamos recibido el producto devuelto y hayamos comprobado su estado, procederemos a realizar el reembolso. El reembolso se efectuará utilizando el mismo método de pago que usaste en la compra original.</p>
            <p>Los reembolsos pueden tardar hasta 14 días hábiles desde que recibimos el producto devuelto. Recibirás un correo electrónico de confirmación una vez que se haya procesado el reembolso.</p>

            <li><strong>Derechos de Garantía</strong></li>
            <p>Si el producto adquirido tiene un defecto de fabricación o presenta fallos durante un uso normal, tienes derecho a una garantía legal que cubre reparaciones, reemplazos o reembolsos según sea necesario. El plazo de la garantía varía según el tipo de producto, pero generalmente es de 2 años a partir de la fecha de compra.</p>
            <p>Para hacer uso de la garantía, contacta con nuestro servicio de atención al cliente para obtener instrucciones sobre cómo proceder.</p>

            <li><strong>Protección de Datos Personales</strong></li>
            <p>Tu privacidad es nuestra prioridad. Toda la información personal que proporciones durante el proceso de compra será utilizada exclusivamente para procesar tu pedido y gestionarlo adecuadamente. Nunca compartiremos tu información con terceros sin tu consentimiento, excepto cuando sea necesario para completar el proceso de compra (como con proveedores de servicios de pago).</p>

            <li><strong>Servicio de Atención al Cliente</strong></li>
            <p>En caso de que necesites asistencia, dudas o tengas algún reclamo, puedes ponerte en contacto con nuestro equipo de atención al cliente. Estamos disponibles para resolver cualquier inconveniente y ayudarte a disfrutar de una experiencia de compra sin problemas.</p>
            <ul>
                <li>Correo electrónico: <strong>[correo@libreriadealejandria.com]</strong></li>
                <li>Teléfono: <strong>[número de contacto]</strong></li>
            </ul>

            <li><strong>Actualización de la Política de Derechos de los Consumidores</strong></li>
            <p>Podemos actualizar esta política en cualquier momento para reflejar cambios en las leyes de protección al consumidor, en nuestras prácticas comerciales o por razones operativas. Los cambios se publicarán en esta página con la fecha de la última actualización.</p>
            <p>Te recomendamos revisar periódicamente esta política para estar al tanto de tus derechos como consumidor.</p>
        </ol>

        <p><strong>¿Tienes preguntas sobre tus derechos como consumidor?</strong></p>
        <p>Si tienes alguna duda sobre tus derechos, no dudes en ponerte en contacto con nuestro equipo de atención al cliente para obtener más información.</p>

        <p>Gracias por confiar en <strong>Librería de Alejandría</strong>. Nos importa tu satisfacción y trabajamos para ofrecerte un servicio de calidad y protección en todo momento.</p>
                `;
    }else if (section==='asuntos'){
        contenido.innerHTML=`<h2>Política de Contacto para Asuntos Legales </h2>
        <p>Cumplimiento de la ley y la protección de los derechos de nuestros clientes y colaboradores. Si tienes alguna pregunta, inquietud o necesitas presentar algún asunto legal relacionado con nuestros productos, servicios o la operativa de nuestro sitio web, te proporcionamos la siguiente información sobre cómo ponerte en contacto con nosotros.</p>

        <ol>
            <li><strong>Ámbitos de los Asuntos Legales</strong></li>
            <p>Este canal de contacto está destinado exclusivamente para resolver cuestiones legales, como:</p>
            <ul>
                <li>Problemas relacionados con la propiedad intelectual, como derechos de autor, marcas registradas y contenido de terceros.</li>
                <li>Cualquier consulta o disputa relacionada con la política de privacidad, condiciones de uso o políticas de cookies.</li>
                <li>Reclamaciones sobre la seguridad de los pagos, fraude o uso indebido de datos personales.</li>
                <li>Cuestiones legales relacionadas con la venta, distribución o entrega de productos adquiridos en nuestro sitio web.</li>
                <li>Reclamos o quejas legales conforme a las leyes de protección al consumidor.</li>
            </ul>

            <li><strong>Cómo Presentar un Asunto Legal</strong></li>
            <p>Si tienes un asunto legal que deseas discutir con nosotros, por favor sigue los siguientes pasos:</p>
            <ul>
                <li><strong>Envío de Notificación Formal:</strong> Asegúrate de enviar una notificación por escrito detallando el asunto legal que deseas tratar. Puedes hacerlo mediante correo electrónico o carta dirigida a nuestra dirección de contacto.</li>
                <li><strong>Incluir Información Específica:</strong> Proporciona toda la información relevante relacionada con el asunto legal, incluyendo:</li>
                <ul>
                    <li>Descripción detallada del problema o disputa.</li>
                    <li>Documentación relevante, como capturas de pantalla, pruebas de compra o cualquier otro dato que respalde tu reclamo.</li>
                    <li>Si corresponde, una solicitud o acción específica que deseas que tomemos (por ejemplo, resolución de disputa, eliminación de contenido, etc.).</li>
                </ul>
                <li><strong>Plazo de Respuesta:</strong> Nos comprometemos a responder a todas las consultas legales dentro de un plazo de 7 a 14 días hábiles, dependiendo de la naturaleza del asunto.</li>
            </ul>

            <li><strong>Datos de Contacto para Asuntos Legales</strong></li>
            <p>Para cualquier consulta o reclamación legal, por favor contacta con nosotros a través de los siguientes medios:</p>
            <ul>
                <li><strong>Correo electrónico:</strong> <a href="#">legal@libreriadealejandria.com</a></li>
                <li><strong>Teléfono de contacto:</strong> [Número de teléfono para consultas legales]</li>
            </ul>

            <li><strong>Notificación de Infracciones de Propiedad Intelectual</strong></li>
            <p>Si consideras que algún contenido de nuestro sitio web infringe tus derechos de propiedad intelectual (por ejemplo, derechos de autor o marcas registradas), por favor envíanos una notificación formal a través del correo electrónico mencionado anteriormente, incluyendo la siguiente información:</p>
            <ul>
                <li>Una descripción detallada de la obra protegida por derechos de autor o marca registrada que se presume ha sido infringida.</li>
                <li>La ubicación del contenido en nuestro sitio web que crees que infringe tus derechos.</li>
                <li>Tu información de contacto, incluyendo nombre completo, dirección de correo electrónico y número de teléfono.</li>
                <li>Una declaración de que tienes buena fe al creer que el uso del material no está autorizado por el propietario de los derechos, su agente o la ley.</li>
                <li>Una declaración de que la información en tu notificación es precisa y, bajo pena de perjurio, que eres el titular de los derechos o que estás autorizado para actuar en nombre del titular.</li>
            </ul>

            <li><strong>Resolución de Disputas</strong></li>
            <p>Si tienes un problema legal con <strong>Librería de Alejandría </strong>que no puede resolverse de manera informal, te alentamos a que intentes resolver la disputa mediante negociación directa. En caso de que no sea posible llegar a un acuerdo, las disputas serán resueltas conforme a las leyes aplicables en México, y las partes se someten a la jurisdicción de los tribunales competentes de dicha localidad.</p>

            <li><strong>Protección de Datos Personales y Cumplimiento con la Ley</strong></li>
            <p>Nos comprometemos a proteger tu privacidad y a cumplir con todas las leyes aplicables de protección de datos personales. Cualquier asunto relacionado con el tratamiento de tus datos personales debe ser notificado de acuerdo con nuestra <strong>Política de privacidad</strogn>.

            <li><strong>Actualización de la Política de Contacto para Asuntos Legales</strong></li>
            <p>Esta política puede ser actualizada o modificada en cualquier momento para cumplir con nuevas leyes o cambios en nuestras prácticas. Cualquier cambio será comunicado de manera adecuada en nuestro sitio web.</p>
        </ol>

        <p><strong>¿Tienes preguntas sobre un asunto legal?</strong></p>
        <p>Si tienes alguna pregunta o inquietud relacionada con un asunto legal, no dudes en ponerte en contacto con nosotros utilizando los medios proporcionados. Estamos aquí para ayudarte a resolver cualquier problema de manera justa y profesional.</p>


        <p>Gracias por confiar en <strong>Librería de Alejandría</strong>. Nos esforzamos por ofrecerte un servicio justo, transparente y conforme a la ley.</p>
            
        `;
    }
}


// Seleccionamos los elementos li dentro del "Contacto de ayuda"
const contactoItems = document.querySelectorAll(".box ul li");

// El contenedor donde se mostrará el mensaje
const messageBox = document.getElementById("message-box");

// Función para mostrar el contenido en el mensaje debajo de la lista
function mostrarMensaje(mensaje) {
    messageBox.innerHTML = mensaje; // Insertamos el mensaje en el contenedor
    messageBox.style.display = 'block'; // Mostramos el recuadro
}

// Añadimos un evento de clic para cada item de la lista
contactoItems.forEach(item => {
    item.addEventListener("click", () => {
        const infoId = item.getAttribute("data-info");

        // Mensajes para cada opción
        const mensajes = {
            "horario-info": "<p>Estamos disponibles de lunes a viernes, de 9:00 AM a 6:00 PM.</p>",
            "escritos-info": "<p>Escríbenos a: contacto@libreria.com</p>",
            "llamanos-info": "<p>Llámanos al: +34 123 456 789</p>"
        };

        // Si el valor del 'data-info' tiene un mensaje, mostramos el recuadro debajo
        if (mensajes[infoId]) {
            mostrarMensaje(mensajes[infoId]);
        }
    });
});