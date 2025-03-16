import { Item } from './Item';

export class Usuario {
    private _id: number;
    private _nome: string;
    private _email: string;
    private _telefone: string;
    private _itensEmprestados: Item[];

    constructor(id: number, nome: string, email: string, telefone: string) {
        this._id = id;
        this._nome = nome;
        this._email = '';
        this.email = email;
        this._telefone = telefone;
        this._itensEmprestados = [];
    }

    get id(): number {
        return this._id;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this._email = email;
        } else {
            throw new Error("\nALERTA:\n- Email inválido");
        }
    }

    get telefone(): string {
        return this._telefone;
    }

    set telefone(telefone: string) {
        this._telefone = telefone;
    }

    get itensEmprestados(): Item[] {
        return this._itensEmprestados;
    }

    emprestarItem(item: Item): boolean {
        if (this._itensEmprestados.length < 3) {
            this._itensEmprestados.push(item);
            console.log(`\nItem emprestado com sucesso: ${item.exibirDetalhes()}`);
            return true;
        }
        console.log('\nALERTA:\n- Limite de empréstimos atingido.');
        return false;
    }

    devolverItem(id: number): boolean {
        const index = this._itensEmprestados.findIndex(item => item.id === id);
        if (index === -1) {
            console.log('\nALERTA:\n- Item não encontrado para devolução.');
            return false;
        }

        const [itemDevolvido] = this._itensEmprestados.splice(index, 1);
        if (!itemDevolvido) {
            console.log('\nERRO:\n- Erro ao devolver o item.');
            return false;
        }

        console.log(`\nItem devolvido com sucesso: ${itemDevolvido.exibirDetalhes()}`);
        return true;
    }

    exibirItensEmprestados(): void {
        if (this._itensEmprestados.length === 0) {
            console.log(`\nALRETA:\n- ${this._nome} não possui itens emprestados.`);
        } else {
            console.log(`\n-- ITENS EMPRESTADOS POR: ${this._nome} --`);
            this._itensEmprestados.forEach(item => console.log(item.exibirDetalhes()));
        }
    }
}