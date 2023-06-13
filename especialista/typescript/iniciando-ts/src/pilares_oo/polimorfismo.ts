abstract class Animal {
    abstract emitirSom(): string;
}

class Gato extends Animal {
    emitirSom(): string {
        return 'Miaaaaaaau'
    }
}

class Cachorro extends Animal {
    emitirSom(): string {
        return 'AuuuuAuuuuuuuuuu'
    }
}

function exibir(animal: Animal) {
    console.log(animal.emitirSom());
    
}

let a: Animal = new Gato()
exibir(a)


export { }