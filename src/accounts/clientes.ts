export class Cliente {
    nome: string;
    sobrenome: string;
    cpf: string;
    email: string;

    constructor(nome: string, sobrenome: string, cpf: string, email: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getSobrenome(): string {
        return this.sobrenome;
    }

    setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    getCpf(): string {
        return this.cpf;
    }

    setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }
}
