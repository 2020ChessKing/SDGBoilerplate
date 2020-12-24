var width, height, color, gamestate, x, limit;
var screen1, screen2, screen3;
var running, jumping;
var runner, playB, levels1, levels2, levels3, levels4, ground, hat;

function preload()
{
  running = loadAnimation("running1-removebg-preview (1).png", "running2-removebg-preview (1).png", "running3-removebg-preview (1).png", "running4-removebg-preview (1).png", 'running5-removebg-preview (1).png', 'running6-removebg-preview (1).png', 'running7-removebg-preview (1).png', 'running8-removebg-preview (1).png');
  // running = loadAnimation("santa-1.png", "santa-2.png");
  hat = loadImage('hat.png');

}

function setup()
 {
  width = windowWidth;
  height = windowHeight;
  color = 'white';

  createCanvas(width, height);

  runner = createSprite(width/6,height/2,100,100);
  
  runner.addAnimation("running", running);
  runner.scale = 0.5;

  screen1 = new introScreen();

  ground = createSprite(width/2, height * 6.5/8, width, 10);
  ground.visible = false;
  gamestate = 1;

  x = false;

}

function draw() {
  background(color);

    if(keyDown('space'))
    {        
      runner.velocityY = -17;
      runner.velocityY = runner.velocityY + 1.2;
      x = false;
    } 
    if(keyDown('w'))
    {        
      runner.velocityY = -17;
      runner.velocityY = runner.velocityY + 1.2;
      x = false;
    }

  if(mousePressedOver(screen1.playB))
    {
        gamestate = 2;
        screen1.playB.x = width * 2;
        screen2 = new level();
        screen2.display();
    }
  
  setTimeout(function()
  {
    if(gamestate === 2)
    {
      if(mousePressedOver(screen2.levels1))
      {
        gamestate = 3;
        console.log('happy');
        screen3 = new Level1();
        screen3.display();

        screen2.levels1.destroy();
        screen2.levels2.destroy();
        screen2.levels3.destroy();
        screen2.levels4.destroy();

      }
    }
  }, 50)

  if(gamestate === 3)
  {
    ground.y = height * 7/8;

    runner.collide(screen3.prt1);
    runner.collide(screen3.prt2);
    runner.collide(screen3.prt3);
    runner.collide(screen3.prt4);
    runner.collide(screen3.prt5);
    runner.collide(screen3.prt6);
    // runner.collide(screen3.prt7);
    // runner.collide(screen3.prt8);

    // if(runner.isTouching(ground))
    // {
    //   x = true;
    // }
    // else if(runner.isTouching(screen3.prt1))
    // {
    //   x = true;
    // }
    // else if(runner.isTouching(screen3.prt2))
    // {
    //   x = true;
    // }
    // else if(runner.isTouching(screen3.prt3))
    // {
    //   x = true;
    // }
    // else if(runner.isTouching(screen3.prt4))
    // {
    //   x = true;
    // }
    // else if(runner.isTouching(screen3.prt5))
    // {
    //   x = true;
    // }
    // else if(runner.isTouching(screen3.prt6))
    // {
    //   x = true;
    // }
    // else if(runner.isTouching(screen3.prt7))
    // {
    //   x = true;
    // }
    // else if(runner.isTouching(screen3.prt8))
    // {
    //   x = true;
    // }
    // else if(runner.isTouching(screen3.prt9))
    // {
    //   x = true;
    // }
    // else if(runner.isTouching(screen3.prt10))
    // {
    //   x = true;
    // }
    // else if(runner.isTouching(screen3.prt11))
    // {
    //   x = true;
    // }
    // else if(runner.isTouching(screen3.prt12))
    // {
    //   x = true;
    // }
    // console.log(x)



    // screen3.prt2.collide(ground);
    // screen3.prt4.collide(ground);
    // screen3.prt5.collide(ground); 
    // screen3.prt10.collide(screen3.prt8); 
    // screen3.prt12.collide(ground); 

  }

  console.log(gamestate)
  runner.collide(ground);
  // runner.velocityX = 27;
  runner.velocityY = runner.velocityY + 1;
  // text('icons made by Freepick at www.flaticon.com', width/2, height + 10);
  drawSprites();

  imageMode(CENTER);
  image(hat, runner.x - 10, runner.y - 20, 40, 37);
}