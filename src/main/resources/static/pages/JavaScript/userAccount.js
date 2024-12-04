function showSection(sectionId) {

    // Ocultar todas las secciones

    const sections = document.getElementsByClassName('section');

    for (let section of sections) {
        section.classList.remove('active');
    }

    // Mostrar la sección seleccionada

    document.getElementById(sectionId).classList.add('active');
}