export class Pokemon {
    constructor(name, abilities, experience, image) {
        this.name = name || 'no name';
        this.abilities = abilities || [];
        this.experience = experience || 10;
        this.image = image || './assets/Poke_Ball.png';
    }
}
