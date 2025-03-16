import { Item } from "./Item";
import type { Pesquisavel } from './Pesquisavel';

export class Livro extends Item {
    autor: string;
    editora: string;
    numeroPaginas: number;

    constructor(id: number, titulo: string, ano: number, autor: string, editora: string, numeroPaginas: number) {
        super(id, titulo, ano);
        this.autor = autor;
        this.editora = editora;
        this.numeroPaginas = numeroPaginas;
    }

    exibirDetalhes(): string {
        return `\n- Livro: ${this.titulo} (${this.ano})\n- Autor: ${this.autor}\n- Editora: ${this.editora}\n- Páginas: ${this.numeroPaginas}`;
    }

    pesquisar(termo: string): boolean {
        return (
            this.titulo.toLowerCase().includes(termo.toLowerCase()) ||
            this.autor.toLowerCase().includes(termo.toLowerCase()) ||
            this.editora.toLowerCase().includes(termo.toLowerCase())
        );
    }
}