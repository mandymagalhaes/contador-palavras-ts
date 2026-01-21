const texto = document.getElementById('texto') as HTMLTextAreaElement;
const palavrasEl = document.getElementById('palavras') as HTMLDivElement;
const caracteresEl = document.getElementById('caracteres') as HTMLDivElement;
const linhasEl = document.getElementById('linhas') as HTMLDivElement;

texto.addEventListener('input', () => {
    const valor = texto.value;

    const palavras = valor.trim() ? valor.trim().split(/\s+/).length : 0;
    const caracteres = valor.length;
    const linhas = valor.split('\n').length;

    palavrasEl.textContent = palavras.toString();
    caracteresEl.textContent = caracteres.toString();
    linhasEl.textContent = linhas.toString();
});
