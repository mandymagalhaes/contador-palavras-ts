interface Estatisticas {
    palavras: number;
    caracteres: number;
    linhas: number;
}

export class WordCounter {
    private texto: string = '';

    constructor(texto: string = '') {
        this.texto = texto;
    }

    contarPalavras(): number {
        return this.texto.trim().split(/\s+/).filter(p => p.length > 0).length;
    }

    contarCaracteres(): number {
        return this.texto.length;
    }

    contarLinhas(): number {
        return this.texto.split('\n').length;
    }

    atualizarTexto(novoTexto: string): void {
        this.texto = novoTexto;
    }

    getEstatisticas(): Estatisticas {
        return {
            palavras: this.contarPalavras(),
            caracteres: this.contarCaracteres(),
            linhas: this.contarLinhas()
        };
    }
}