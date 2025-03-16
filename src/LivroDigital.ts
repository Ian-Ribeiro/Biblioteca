import { Livro } from './Livro';

export class LivroDigital extends Livro {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        autor: string,
        editora: string,
        numeroPaginas: number,
        public formato: string,
        public tamanhoMB: number,
        public linkDownload: string
    ) {
        super(id, titulo, ano, autor, editora, numeroPaginas);
    }

    exibirDetalhes(): string {
        return `${super.exibirDetalhes()}\n- Formato: ${this.formato}\n- Tamanho: ${this.tamanhoMB}MB\n- Link: ${this.linkDownload}`;
    }
}