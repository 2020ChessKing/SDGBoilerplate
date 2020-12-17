class introScreen
{
    constructor()
    {
        color = loadImage('IntroBackground.png');
        this.play = loadImage('play.png');

        this.playB = createSprite(width/2, height/2);
        this.playB.addImage('play', this.play);
        this.playB.scale = width/3000;
    }

    display()
    {
    }
}