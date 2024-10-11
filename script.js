    const lines = document.querySelectorAll('#content p');
    let fallenLines = [];

    function makeLineFall(line) {
        line.classList.add('falling');
        fallenLines.push(line);
    }

    function resetLines() {
        fallenLines.forEach(line => {
            line.classList.remove('falling');
        });
        fallenLines = [];
    }

    // Hacer que las l�neas caigan cada 7 segundos
    lines.forEach((line, index) => {
        setTimeout(() => {
            makeLineFall(line);
        }, (index + 1) * 7000); // Cada l�nea cae con un retraso de 7 segundos
    });

    // Funcionalidad del bot�n para restablecer las l�neas
    document.getElementById('resetButton').addEventListener('click', resetLines);