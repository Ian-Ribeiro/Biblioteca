import { Item } from "./Item";
import type { Pesquisavel } from './Pesquisavel';

export class Revista extends Item {
    edicao: number;
    periodicidade: string;

    constructor(id: number, titulo: string, ano: number, edicao: number, periodicidade: string) {
        super(id, titulo, ano);
        this.edicao = edicao;
        this.periodicidade = periodicidade;
    }

    exibirDetalhes(): string {
        return `\n- Revista: ${this.titulo} (${this.ano})\n- Edição: ${this.edicao}\n- Periodicidade: ${this.periodicidade}`;
    }

    pesquisar(termo: string): boolean {
        return (
            this.titulo.toLowerCase().includes(termo.toLowerCase()) ||
            this.periodicidade.toLowerCase().includes(termo.toLowerCase())
        );
    }
}