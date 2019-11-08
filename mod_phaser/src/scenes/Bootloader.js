class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: "Bootloader"
        });
    }
    init() {
        console.log("Soy init");
    }
    
    preload() {
        this.load.path ="./assets/";
        this.load.image("constelacion","constelacion.png");
        this.load.image("kid","telescopio.png");
        this.load.image("planeta","tierra.jpg");
        this.load.image("nebula","nebulosa.png");
    }
    
    create() {
        this.constelacion = this.add.image(350,150,"constelacion");
        this.kid=this.add.image(100,100,"kid");
        this.planeta=this.add.image(1500,500,"planeta");
        this.nebula=this.add.sprite(100,100,"nebula");
        //Configuracion del fondo
        this.planeta.setDepth(0);
        this.planeta.x=550;
        this.planeta.y=630;
        this.planeta.setAlpha(1,0.3);
        //Configuracion de las constelaciones
        this.constelacion.setDepth(1);
        this.constelacion.y=200;
        //Configuraciones extras
        this.kid.setDepth(1);
        this.kid.x=50;
        this.kid.y=590;
        this.nebula.x=600;
        this.nebula.y=250;
        this.nebula.setScale(1,0.5);
        this.nebula.setAlpha(1,0.3);
        this.nebula.setDepth(0);
        this.nebula.setVisible(false);
        this.apoyo = 2;
    }
    
    update(time, delta) {
        var lateralIzq=600;
        var lateralDer=350;

        this.constelacion.x+= this.apoyo;

        if(this.constelacion.x >= lateralIzq){
            this.apoyo = -2;
            this.constelacion.flipX = 1;
            this.constelacion.setTint("0xFF0000");
        }
        if(this.constelacion.x <= lateralDer){
            this.apoyo = 2;
            this.constelacion.flipX = 0;
            this.constelacion.setTint("0xFF00FF");
        }
    }
}

export default Bootloader;