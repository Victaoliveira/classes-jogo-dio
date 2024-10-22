class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = ' magia';
        break;
      case 'guerreiro':
        ataque = ' espada';
        break;
      case 'monge':
        ataque = ' artes marciais';
        break;
      default:
        ataque = 'não atacou';
        break;
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
heroi1.atacar();

const heroi2 = new Heroi('Merlin', 150, 'mago');
heroi2.atacar();

const heroi3 = new Heroi('Aang', 20, 'monge');
heroi3.atacar();