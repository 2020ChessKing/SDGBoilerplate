class level
{
    constructor()
    {
        if(gamestate !== 3)
        {
            this.level1IMG = loadImage('level1.png');
            this.level2IMG = loadImage('Level2.png');
            this.level3IMG = loadImage('Level3.png');
            this.level4IMG = loadImage('Level4.png');
            color = loadImage('IntroBackground.png');
            
            this.levels1 = createSprite(width/4, height/4);
            this.levels1.addImage(this.level1IMG);
            this.levels1.scale = width/1900;
    
            this.levels2 = createSprite(width * 3/4, height/4);
            this.levels2.addImage(this.level2IMG);
            this.levels2.scale = width/1900;
    
            this.levels3 = createSprite(width/4, height * 3/4);
            this.levels3.addImage(this.level3IMG);
            this.levels3.scale = width/1900;
    
            this.levels4 = createSprite(width *3/4, height * 3/4);
            this.levels4.addImage(this.level4IMG);
            this.levels4.scale = width/1900;
    
            this.x = 1;
        }
    }
    display()
    {
    }

}