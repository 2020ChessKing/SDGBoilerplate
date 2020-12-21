class Level1
{
    constructor()
    {
        color = 'white';
        this.speed = -20;

        this.crystal = loadImage('crystal.png');

        this.plt1 = loadImage('platform-1.png');
        this.plt2 = loadImage('platform-2.png');
        this.plt3 = loadImage('platform-3.png');
        this.plt6 = loadImage('platform-6.png');

        this.spk1 = loadImage('spike-1.png');   
        this.spk3 = loadImage('spike-3.png');   

        this.prt1 = createSprite(width + 2100, height * 4/5)
        this.prt1.addImage(this.plt3);
        this.prt1.velocityX = this.speed;
        this.prt1.scale = 0.25;
    }

    display()
    {
    
    }
}