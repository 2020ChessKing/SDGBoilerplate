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

        this.prt2 = createSprite(width + 2570, height * 2.2/3);
        this.prt2.addImage(this.spk3);
        this.prt2.velocityY = 0.6;
        this.prt2.velocityX = this.speed;
        this.prt2.scale = 0.3;

        this.prt3 = createSprite(width + 2800, height * 2.2/3);
        this.prt3.addImage(this.plt1);
        this.prt3.velocityX = this.speed;
        this.prt3.scale = 0.25;

        this.prt4 = createSprite(width + 3250, height * 2.2/3);
        this.prt4.addImage(this.spk3);
        this.prt4.velocityX = this.speed;
        this.prt4.velocityY = 0.3;
        this.prt4.scale = 0.3;

        this.prt5 = createSprite(width + 3050, height * 2.2/3);
        this.prt5.addImage(this.spk3);
        this.prt5.velocityX = this.speed;
        this.prt5.velocityY = 0.3;
        this.prt5.scale = 0.3;
        
        this.prt6 = createSprite(width + 3550, height * 1.9/3);
        this.prt6.addImage(this.plt1);
        this.prt6.velocityX = this.speed;
        this.prt6.scale = 0.25;

        this.prt7 = createSprite(width + 4650, height * 1.6/3);
        this.prt7.addImage(this.plt1);
        this.prt7.velocityX = this.speed - 1;
        this.prt7.scale = 0.25;

        this.prt8 = createSprite(width + 5350, height * 1.6/3);
        this.prt8.addImage(this.plt6);
        this.prt8.velocityX = this.speed - 1;
        this.prt8.scale = 0.25;

        this.prt9 = createSprite(width + 7550, height * 1.6/3);
        this.prt9.addImage(this.plt6);
        this.prt9.velocityX = this.speed - 1;
        this.prt9.scale = 0.25;

        this.prt10 = createSprite(width + 5250, height * 2/5);
        this.prt10.addImage(this.spk3);
        this.prt10.velocityX = this.speed;
        this.prt10.velocityY = 0.2;
        this.prt10.scale = 0.3;

        this.prt11 = createSprite(width + 3550, height * 2.4/3);
        this.prt11.addImage(this.crystal);
        this.prt11.velocityX = this.speed;
        this.prt11.scale = 0.15;

        this.prt12 = createSprite(width + 6050, height * 2.4/3);
        this.prt12.addImage(this.spk1);
        this.prt12.velocityX = this.speed;
        this.prt12.scale = 0.3;

    }

    display()
    {
    
    }
}