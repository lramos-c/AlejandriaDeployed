const preguntasFrecuentes = document.querySelectorAll("ul.preguntas li");

preguntasFrecuentes.forEach(item => {
    item.addEventListener("click", () => {
        cambiarContenido(item.getAttribute("data-section"));
    });
});

function cambiarContenido(section) {
    const contenido = document.getElementById("content");
    
    if (section === 'comprar') {
        contenido.innerHTML = `
            <h2>¿Cómo compro un libro en Librería de Alejandría?</h2>
            <ol>
                <li><strong>Decide qué libro deseas comprar</strong></li>
                <p>En <strong>Librería de Alejandría</strong>, contamos con una amplia selección de libros en diversos géneros, desde ficción hasta no ficción, pasando por literatura clásica y novedades editoriales. Explora nuestra tienda en línea para encontrar el título o autor que más te interese.</p>
                
                <li><strong>Selecciona el libro físico que deseas</strong></li>
                <ul>
                    <li>Solo ofrecemos libros en formato físico. Elige entre nuestras ediciones de tapa blanda o tapa dura.</li>
                    <li>Para cada título, encontrarás detalles sobre el formato, precio y una breve sinopsis para ayudarte a tomar tu decisión.</li>
                </ul>
                
                <li><strong>Revisa el precio y las promociones disponibles</strong></li>
                <ul>
                    <li>Los precios de todos nuestros libros están claramente indicados en el sitio. Si hay descuentos especiales o promociones, aparecerán en la página de cada libro.</li>
                    <li>Revisa nuestras ofertas de temporada o envíos gratis para pedidos superiores a una cierta cantidad.</li>
                </ul>
                
                <li><strong>Añade el libro a tu carrito</strong></li>
                <ul>
                    <li>Una vez que hayas elegido tu libro, selecciona el formato (si aplica) y añade el artículo a tu carrito de compras.</li>
                    <li>Si deseas comprar más libros, puedes continuar navegando y agregarlos al carrito antes de proceder al pago.</li>
                </ul>
                
                <li><strong>Procede a la compra</strong></li>
                <ul>
                    <li>Cuando tengas todo lo que deseas comprar en tu carrito, haz clic en "Finalizar compra". Aquí podrás ver un resumen de tu pedido antes de confirmar.</li>
                    <li>Introduce tu dirección de envío completa para asegurarte de que tu pedido llegue sin problemas.</li>
                </ul>
                
                <li><strong>Realiza el pago de tu pedido</strong></li>
                <ul>
                    <li>Para completar tu compra, selecciona el método de pago más conveniente para ti. Aceptamos tarjetas de crédito y débito, así como otros métodos de pago seguros.</li>
                    <li>Revisa que la información de tu pedido sea correcta antes de confirmar el pago. Una vez realizado, recibirás una confirmación de compra.</li>
                </ul>
                
                <li><strong>Recibe tu libro en casa</strong></li>
                <ul>
                    <li>Una vez procesado el pago, prepararemos tu pedido para el envío. Recibirás una notificación con los detalles de tu envío, incluida la fecha estimada de entrega.</li>
                    <li>Los plazos de entrega dependen de tu ubicación, pero generalmente los pedidos se envían dentro de [número] días hábiles.</li>
                    <li>Si el libro está disponible en stock, lo recibirás rápidamente en la dirección proporcionada.</li>
                </ul>

                <li><strong>Disfruta de tu lectura</strong></li>
                <p>Una vez que recibas tu libro, ¡es hora de disfrutarlo! Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos a través de nuestro servicio al cliente.</p>
            </ol>
        `;
    } else if (section === 'mensual') {
        contenido.innerHTML = `
                        <h2>¿Qué es la suscripción mensual?</h2>
            <p>La suscripción mensual de <strong>Librería de Alejandría</strong> es un servicio exclusivo para nuestros clientes más frecuentes. Por una tarifa mensual, podrás recibir libros seleccionados de nuestra tienda en formato físico, con envíos gratuitos y acceso a promociones especiales.</p>

            <p>¡Es la forma perfecta de mantener tu biblioteca personal siempre actualizada!</p>

            <ol>
                <li><strong>Recibe libros seleccionados cada mes</strong></li>
                <p>Cada mes, te enviaremos un libro físico seleccionado por nuestro equipo editorial. Los títulos varían entre ficción, no ficción y novedades, asegurando que siempre tengas algo interesante que leer.</p>
                
                <li><strong>Envíos gratuitos</strong></li>
                <p>Los suscriptores disfrutan de envíos gratuitos en todos sus libros. Tu pedido llegará directamente a tu hogar cada mes sin costos adicionales.</p>
                
                <li><strong>Acceso a promociones especiales</strong></li>
                <p>Los miembros de la suscripción mensual tienen acceso exclusivo a descuentos y ofertas especiales en otros productos de la tienda, además de recibir recomendaciones personalizadas.</p>
                
                <li><strong>Cancelación flexible</strong></li>
                <p>Puedes cancelar tu suscripción en cualquier momento sin cargos adicionales. La cancelación es fácil y se puede realizar a través de tu cuenta en línea.</p>
            </ol>
        `;
    } else if (section === 'envio') {
        contenido.innerHTML = `
            <h2>¿Cuánto tarda en llegar mi producto?</h2>
                <p>El tiempo de entrega depende de tu ubicación. Generalmente, los pedidos se envían dentro de los 3-5 días hábiles después de realizar la compra. Los plazos pueden variar según la disponibilidad del libro y la ubicación de envío.</p>
                <p>Recibirás una notificación por correo electrónico con el seguimiento de tu pedido para que puedas conocer el estado del envío en todo momento.</p>

        `;
    } else if (section === 'formulario') {
        contenido.innerHTML = `
                     <style>
            .registro-enlace {
                color: #5c3b5c; /* Cambia a cualquier color que prefieras */
                text-decoration: none; /* Elimina el subrayado del enlace */
            }
        </style>
             
            <h2>¿Dónde está el formulario de registro?</h2>
            <p>Para registrarte en Librería de Alejandría, solo debes dirigirte a nuestra página de <a href="/pages/HTML/newUser.html"  class="registro-enlace" >registro de usuario</a>, donde podrás completar tus datos y crear una cuenta para disfrutar de nuestras ventajas.</p>
        `;
    }
}



   