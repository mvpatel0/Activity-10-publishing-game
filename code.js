var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["25d73b9a-5a06-4d0b-b331-f744a6f15ad5"],"propsByKey":{"25d73b9a-5a06-4d0b-b331-f744a6f15ad5":{"name":"golfball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Air hockey Game 2!!

//making computerpaddle,playerpaddle,Net1,net2 and ball
var computerpaddle = createSprite(200,350,90,10)
computerpaddle.shapeColor="darkblue"
var playerpaddle = createSprite(200,50,90,10)
playerpaddle.shapeColor="red"
var ball = createSprite(200,200,15,15)
var Net2 = createSprite(200,15,150,15)
Net2.shapeColor="LightGrey"
var Net1 = createSprite(200,390,150,15);
Net1.shapeColor="LightGrey"
ball.setAnimation("golfball_1");
ball.scale=0.1
var computerscore=0
var playerscore=0
var gameState ="serve";
function draw() {
  background("Green")
  
  if (gameState == "serve"){
    textSize(25)
    stroke("red");
    fill("yellow")
    text("Welcome! Press space to start",30,150)
     text("(countrol red paddle with mouse)",30,120)
    if (keyDown("space")){
       ball.velocityX=3
    ball.velocityY=4
    gameState = "play"
    }
  }
  if (gameState == "play"){
     playerpaddle.x=World.mouseX;
     if (ball.isTouching(topEdge) || computerscore == 5){
       gameState = "end"
     }
  }
  
  if(gameState == "end"){
     if (computerscore == 5 || ball.isTouching(topEdge) ){
    ball.velocityX=0
  ball.velocityY=0
  textSize(30)
  fill("maroon")
  text("You loss!!" ,160,150)
  }
  }
  
  fill("maroon")
  textSize(18)
  text(computerscore,25,225)
  text(playerscore,25,185)
  
 if (ball.isTouching(Net1)) {
    playerscore=playerscore+1
  }
   if (ball.isTouching(Net2)) {
    computerscore=computerscore+1
  } 
  
  
  
  
for (var num = 0; num < 400; num=num+20) {
     line(num,200,num+10,200)
   }
 
if (keyDown("space")) {
  
    ball.velocityX=3
    ball.velocityY=4
  }

 if (ball.isTouching(Net2)) {
     ball.x=200
    ball.y=200
    ball.velocityX=0
    ball.velocityY=0
  }
   
  if (ball.isTouching(Net1)) {
     ball.x=200
    ball.y=200
    ball.velocityX=0
    ball.velocityY=0
  }
   
  
 computerpaddle.x=ball.x
 

if (ball.isTouching(computerpaddle) || ball.isTouching(playerpaddle)) {
  playSound("assets/category_digital/coin_3.mp3", false);

 
}


drawSprites();
createEdgeSprites()
if (ball.isTouching(topEdge)) {
    ball.x=200
    ball.y=200
    ball.velocityX=0
    ball.velocityY=0
  }  
ball.bounceOff(rightEdge)
ball.bounceOff(leftEdge)
ball.bounceOff(computerpaddle)
ball.bounceOff(playerpaddle)




}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
