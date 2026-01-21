import { WordCounter } from './modules/WordCounter';

const textareaElement = document.getElementById('texto') as HTMLTextAreaElement;
const palavrasElement = document.getElementById('palavras') as HTMLElement;
const caracteresElement = document.getElementById('caracteres') as HTMLElement;
const linhasElement = document.getElementById('linhas') as HTMLElement;

const counter = new WordCounter();

function atualizarInterface() {
    const stats = counter.getEstatisticas();

    palavrasElement.textContent = stats.palavras.toString();
    caracteresElement.textContent = stats.caracteres.toString();
    linhasElement.textContent = stats.linhas.toString();
}

textareaElement.addEventListener('input', (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    counter.atualizarTexto(target.value);
    atualizarInterface();
});

// Inicializa
atualizarInterface();
