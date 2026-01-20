import * as readline from 'readline';

function contarPalavras(texto: string): number {
  return texto.trim().split(/\s+/).filter(p => p.length > 0).length;
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Digite uma frase: ', (frase: string) => {
  console.log(`"${frase.trim()}" tem ${contarPalavras(frase)} palavra(s)`);
  rl.close();
});

