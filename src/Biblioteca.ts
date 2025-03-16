import { Item } from './Item';
import type { Pesquisavel } from './Pesquisavel';

export class Biblioteca {
    private itens: Item[] = [];

    adicionarItem(item: Item): void {
        this.itens.push(item);
        console.log(`\nItem adicionado à biblioteca: ${item.exibirDetalhes()}`);
    }

    buscarItens(termo: string): Item[] {
        const resultados = this.itens.filter(item => item.exibirDetalhes().includes(termo));
        console.log(`\nResultados da busca por "${termo}":`);
        resultados.forEach(item => console.log(item.exibirDetalhes()));
        return resultados;
    }

    exibirTodosItens(): void {
        console.log('\n-- ITENS NA BIBLIOTECA --');
        this.itens.forEach(item => console.log(item.exibirDetalhes()));
    }
}