const urlParams = new URLSearchParams(window.location.search);

const inputText = urlParams.get('text');

if (inputText) {
    document.getElementById('display-text').textContent = inputText;
} else {
    document.getElementById('display-text').textContent = 'No se proporcionó ningún texto.';
}