class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
    let ataque;
    switch(this.tipo){
        case "mago":
            ataque = "magia";
            break;
        case "guerreiro":
            ataque = "espada";
            break;
        case "monge":
            ataque = "artes marciais";
            break;
        case "ninja":
            ataque = "shuriken";
            break;
        default:
            ataque = "ataque simples";
    }
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
}
const heroi1 = new Heroi("Forsaken", 30, "mago")
const heroi2 = new Heroi("Xarola", 24, "monge")

heroi1.atacar()
heroi2.atacar()