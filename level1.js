class Level1
{
    constructor()
    {
        color = '#FF00FF';
        this.speed = -20;

        this.crystal = loadImage('crystal.png');

        this.plt1 = loadImage('platform-1.png');
        this.plt2 = loadImage('platform-2.png');
        this.plt3 = loadImage('platform-3.png');
        this.plt6 = loadImage('platform-6.png');
        
        this.spk1 = loadImage('spike-1.png');   
        this.spk3 = loadImage('spike-3.png');   

        this.prt1 = createSprite(500, height * 4.4/5)
        this.prt1.addImage(this.plt3);
        this.prt1.velocityX = this.speed;
        this.prt1.scale = 0.25;

        this.prt2 = createSprite(width + 500, height * 3.5/5)
        this.prt2.addImage(this.plt3);
        this.prt2.velocityX = this.speed;
        this.prt2.scale = 0.25;

        this.prt3 = createSprite(width + 2000, height * 3/5)
        this.prt3.addImage(this.plt6);
        this.prt3.velocityX = this.speed;
        this.prt3.scale = 0.25;

        this.prt4 = createSprite(width + 4000, height * 2.5/5)
        this.prt4.addImage(this.plt6);
        this.prt4.velocityX = this.speed;
        this.prt4.scale = 0.25;

        this.prt5 = createSprite(width + 5700, height * 4.5/5)
        this.prt5.addImage(this.plt1);
        this.prt5.velocityX = this.speed;
        this.prt5.scale = 0.25;

        this.prt6 = createSprite(width + 7500, height * 4.5/5)
        this.prt6.addImage(this.plt6);
        this.prt6.velocityX = this.speed;
        this.prt6.scale = 0.25;

        ground.destroy();
    }

    display()
    {
    
    }
}