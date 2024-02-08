console.log('Nunca tinha programado antes, confesso que tinha um certo receio, entretanto, achei bem legal. No final das contas, o computador é tipo uma pessoa que precisa ser ensinada, sem gírias, com tudo bem explicadinho. Por conta dos auto-estudos, o tutorial ficou bem fácil. Acredito que tudo tenha funcionado perfeitamente. Obrigado professora, abraços!');
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {              
    this.load.image('mar', 'assets/fundo_azul_claro.png');
    this.load.image('logo', 'assets/logo_inteli_escuro.png');
    this.load.image('peixe', 'assets/peixes/peixe.png');
    this.load.image('alga', 'assets/alga.png');
}

function create()  {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(1);
    this.add.image(200, 275, 'alga').setScale(0.2);
    this.add.image(600, 275, 'alga').setScale(0.2);
    this.add.image(100, 400, 'alga').setScale(0.2);
    this.add.image(700, 400, 'alga').setScale(0.2);
    this.add.image(200, 525, 'alga').setScale(0.2);
    this.add.image(600, 525, 'alga').setScale(0.2);
    this.add.image(100, 150, 'alga').setScale(0.2);
    this.add.image(700, 150, 'alga').setScale(0.2);
    peixinho = this.add.image(400, 300, 'peixe');
    peixinho.setFlip(true, false);
}

function update()  {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}