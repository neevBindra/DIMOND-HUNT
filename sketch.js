var edL;
//obstacle set f1
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,s21,s22,s23,s24,s25;
var player,lift1,lift2,inv,playerI,invMark,shield,shieldImg;
var door,keys,keyI,heart2,heart3,heartGrp;
var cele1,cele2,c1I,c2I;
var rObs1,rObs1,rObs3,rObs4,rObs5,rObs6,obsGrp1,obsGrp2,obsGrp3,obsGrp4,obsGrp5,obsGrp6,obsGrp7;
var moneyImg,bd,rd,rdI,bdI,fire,fireC,fireCI,fireI,bomb,bombI,hI1,heart1,h2,doorI,monsterI,monster1,monster2;
var d1,d2,d3,d4,d5,d6,d7,d8,d9,d10;
var f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16,f17,f18,f19,f20,f21,ice,iceI;
var gameState = "wait"
var level = 0;
var life = 3;
var treasure = 0;
var jumpS,coinS,fireS;
function preload(){
  //loading images
    goldImg = loadImage("images/gold.png");
    monsterI = loadImage("images/monster.png");
    moneyImg = loadImage("images/cash.png");
    rdI = loadImage("images/redD.png");
    bdI = loadImage("images/dimond.png");
    fireCI = loadImage("images/fireCartoon.png");
    fireI = loadImage("images/fire.png");
    playerI = loadImage("images/man.png");
    hI1 = loadImage("images/heart.png");
    doorI = loadImage("images/door.png");
    keysI = loadImage("images/keys.png");
    iceI = loadImage("images/ice.png");
    shieldImg = loadImage("images/shield.png");
    c1I = loadImage("images/cele1.png")
    c2I = loadImage("images/cele2.png")
    //loading sounds
    jumpS = loadSound("sound/jump.wav");
    coinS = loadSound("sound/coin.wav");
    fireS = loadSound("sound/fireworks.wav");
}
function setup(){
    createCanvas(1100,650);
    // images for celebration
    cele1 = createSprite(454,240,50,50);
    cele1.addImage(c1I);
    cele1.visible = false;
    cele2 = createSprite(815,355,50,50);
    cele2.addImage(c2I);
    cele2.visible = false;
        //setting up groups
        heartGrp = createGroup();
        obsGrp1 = createGroup();
        obsGrp2 = createGroup();
        obsGrp3 = createGroup();
        obsGrp4 = createGroup();
        obsGrp5 = createGroup();
        obsGrp6 = createGroup();
        obsGrp7 = createGroup();
        //invMark
          invMark = createSprite(30,480,20,60);
          invMark.visible = false;
          //shield
          shield = createSprite(985,390,20,20);
          shield.addImage(shieldImg);
          shield.scale = 0.2;
          //creating door
          door = createSprite(30,115,20,50);
          door.addImage(doorI);
          door.scale = 0.2;
          //keys
          keys = createSprite(30,480,20,20);
          keys.addImage(keysI);
          keys.scale = 0.1;
          //player
          player = createSprite(1082,100,20,20);
          player.addImage(playerI);
          player.scale = 0.06;
          player.setCollider("rectangle",0,0,350,player.height)
          player.debug = false
          //bottom line
           enL = createSprite(5,525,2500,10);
          //wall for the game
          s1 = createSprite(40,45,370,30);
          s1.shapeColor = "red";
          s2 = createSprite(225,140,30,220);
          s2.shapeColor = "red";
          s3 = createSprite(295,258,170,30);
          s3.shapeColor = "red";
          s4 = createSprite(384,323,30,160);
          s4.shapeColor = "red";
          s5 = createSprite(260,455,60,150)
          s5.shapeColor = "red";
          s6 = createSprite(295,165,110,40);
          s6.shapeColor = "blue";
          s7 = createSprite(45,160,100,30);
          s7.shapeColor = "red";
          s8 = createSprite(550,270,35,35);
          s8.shapeColor = "red";
          s9 = createSprite(700,270,35,35);
          s9.shapeColor = "red";
          s10 = createSprite(945,270,310,50);
          s10.shapeColor = "red";
          s11 = createSprite(1020,160,160,40);
          s11.shapeColor = "blue";
          s12 = createSprite(963,15,270,40);
          s12.shapeColor = "blue";
          s13 = createSprite(810,55,40,200);
          s13.shapeColor = "blue";
          s14 = createSprite(485,485,55,90);
          s14.shapeColor = "red";
          s15 = createSprite(800,485,55,90);
          s15.shapeColor = "red";
          s16 = createSprite(730,365,130,30);
          s16.shapeColor = "blue";
          s17 = createSprite(80,355,200,30);
          s17.shapeColor = "red";
          s18 = createSprite(50,270,200,30);
          s18.shapeColor = "blue";
          s19 = createSprite(520,70,280,30);
          s19.shapeColor = "blue";
          s20 = createSprite(635,190,30,20);
          s20.shapeColor = "blue";
          s21 = createSprite(730,130,30,20);
          s21.shapeColor = "blue";
          s22 = createSprite(555,457,40,20);
          s22.shapeColor = "red";
          s23 = createSprite(645,485,30,20);
          s23.shapeColor = "red";
          s24 = createSprite(730,457,40,20);
          s24.shapeColor = "red";
          s25 = createSprite(990,430,120,20)
          s25.shapeColor = "red";
          //obstacle set
          f1 = createSprite(640,505,100,20);
          f1.addImage(fireI);
          f1.scale = 0.1;
          f2 = createSprite(600,505,100,20);
          f2.addImage(fireI);
          f2.scale = 0.1;
          f3 = createSprite(685,505,100,20);
          f3.addImage(fireI);
          f3.scale = 0.1;
          f4 = createSprite(580,505,100,20);
          f4.addImage(fireI);
          f4.scale = 0.1;
          f5 = createSprite(535,505,100,20);
          f5.addImage(fireI);
          f5.scale = 0.1;
          f6 = createSprite(730,505,100,20);
          f6.addImage(fireI);
          f6.scale = 0.1;
          f7 = createSprite(430,275,20,20);
          f7.addImage(fireI);
          f7.scale = 0.1;
          f8 = createSprite(480,275,90,20);
          f8.addImage(fireI);
          f8.scale = 0.1;
          f9 = createSprite(600,275,20,20);
          f9.addImage(fireI);
          f9.scale = 0.1;
         f10 = createSprite(650,275,20,20);
          f10.addImage(fireI);
          f10.scale = 0.1;
          f11 = createSprite(450,125,20,20);
          f11.addImage(fireI);
          f11.scale = 0.1;
          f12 = createSprite(495,125,20,20);
          f12.addImage(fireI);
          f12.scale = 0.1;
         f13 = createSprite(535,125,20,20);
          f13.addImage(fireI);
          f13.scale = 0.1;
          f14 = createSprite(860,505,20,20);
          f14.addImage(fireI);
          f14.scale = 0.1;
          f15 = createSprite(890,505,20,20);
          f15.addImage(fireI);
          f15.scale = 0.1;
         f16 = createSprite(930,505,20,20);
          f16.addImage(fireI);
          f16.scale = 0.1;
          f17 = createSprite(960,505,20,20);
          f17.addImage(fireI);
          f17.scale = 0.1;
          f18 = createSprite(1000,505,20,20);
          f18.addImage(fireI);
          f18.scale = 0.1;
          f19 = createSprite(1030,505,20,20);
          f19.addImage(fireI);
          f19.scale = 0.1;
          f20 = createSprite(1070,505,20,20);
          f20.addImage(fireI);
          f20.scale = 0.1;
          //monster
          monster1 = createSprite(370,495,20,20);
          monster1.addImage(monsterI);
          monster1.scale = 0.1;
          monster1.velocityX = 2
         // dimonds and other stuff to collect 
         d1 = createSprite(548,215,20,20);
         d1.addImage(rdI);
         d1.scale = 0.1;
         d2 = createSprite(700,200,20,20);
         d2.addImage(bdI);
         d2.scale = 0.2;
         d3 = createSprite(285,120,20,20);
         d3.addImage(rdI);
         d3.scale = 0.1;
         d4 = createSprite(435,35,20,20);
         d4.addImage(bdI);
         d4.scale = 0.2;
         d5 = createSprite(610,35,20,20);
         d5.addImage(rdI);
         d5.scale = 0.1;
         d6 = createSprite(610,130,20,20);
         d6.addImage(bdI);
         d6.scale = 0.2;
         d7 = createSprite(695,325,20,20);
         d7.addImage(rdI);
         d7.scale = 0.1;
         d8 = createSprite(905,325,20,20);
         d8.addImage(bdI);
         d8.scale = 0.2;
         d9 = createSprite(330,300,20,20);
         d9.addImage(rdI);
         d9.scale = 0.1;
         d10 = createSprite(265,215,20,20);
         d10.addImage(bdI);
         d10.scale = 0.2;
        // setting up heart for lives
        heart1 = createSprite(430,580,10,10)
        heart1.addImage(hI1)
        heart1.scale = 0.1
        heart3 = createSprite(80,310,20,20)
        heart3.addImage(hI1)
        heart3.scale = 0.1
}

function draw(){
  background("black");
  //collision
  player.collide(s1);
  player.collide(s2);
  player.collide(s3);
  player.collide(s4);
  player.collide(s5);
  player.collide(s6);
  player.collide(s7);
  player.collide(s8);
  player.collide(s9);
  player.collide(s10);
  player.collide(s11);
  player.collide(s12);  
  player.collide(s13);
  player.collide(s14);
  player.collide(s15);
  player.collide(s16);
  player.collide(s17);
  player.collide(s18);
  player.collide(s19);
  player.collide(s20);
  player.collide(s21);
  player.collide(s22);
  player.collide(s23);
  player.collide(s24);
  player.collide(s25);
  player.collide(enL);
  monster1.bounceOff(s14);
  monster1.bounceOff(s5);
console.log(mouseX,mouseY)
  if(gameState === "wait"){
    fill("white")
    textSize(20)
    text("Press Space Bar to Start ",555,560);
    text("Click instructions button to get instruction ",560,590);
  }
  if(keyDown("SPACE")){

    gameState = "start";
  }
  if(gameState === "start"){
    // calling the functions
     obs();
     Spawnmonster(); 
     Spawnheart();
     if(player.isTouching(heartGrp)){
      life = life+1;
      heartGrp.destroyEach();
    }
    if(player.isTouching(heart3)){
      life = life+1;
      heart3.x = 2000;
    }
    if(player.isTouching(f1)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play();
    }
    if(player.isTouching(f2)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play();
    }
    if(player.isTouching(f3)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play();
    }
    if(player.isTouching(f4)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play();
    }
    if(player.isTouching(f5)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play();
    }
    if(player.isTouching(f6)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play();
    }
    if(player.isTouching(f7)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play();
    }
    if(player.isTouching(f8)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play();
    }
    if(player.isTouching(f9)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play();
    }
    if(player.isTouching(f10)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play();
    }
    if(player.isTouching(f11)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play();
    }
    if(player.isTouching(f12)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play();
    }
    if(player.isTouching(f13)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play();
    }
    if(player.isTouching(f14)){
      player.x = 1082;
      player.y = 100;
      life = life -1;
      fireS.play();
    }
    if(player.isTouching(f15)){
      player.x = 1082;
      player.y = 100;
      life = life -1;
      fireS.play();
    }
    if(player.isTouching(f16)){
      player.x = 1082;
      player.y = 100;
      life = life -1;
      fireS.play();
    }
    if(player.isTouching(f17)){
      player.x = 1082;
      player.y = 100;
      life = life -1;
      fireS.play();
    }
    if(player.isTouching(f18)){
      player.x = 1082;
      player.y = 100;
      life = life -1;
      fireS.play();
    }
    if(player.isTouching(f19)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play();
    }
    if(player.isTouching(f20)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play();
    }
    if(player.isTouching(obsGrp1)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play()
    }
    if(player.isTouching(obsGrp2)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play()
    }
    if(player.isTouching(obsGrp3)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play()
    }
    if(player.isTouching(obsGrp4)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play()
    }
    if(player.isTouching(obsGrp5)){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play()
    }
 //movements
      if(keyDown("LEFT_ARROW")){
        player.x = player.x - 3;
      }
      if(keyDown("RIGHT_ARROW")){
        player.x = player.x + 3;
      }
      if(keyDown("UP_ARROW")){
        player.velocityY = -5;
        jumpS.play();
      }
      player.velocityY += 0.3;
      
      if(keyDown("DOWN_ARROW")){
        player.y = player.y + 5;
      }
      // increasing score
      if(player.isTouching(d1)){
      d1.x = 530;
      d1.y = 550;
     coinS.play();
      }
       if(player.isTouching(d2)){
        d2.x = 570;
        d2.y = 550;
        coinS.play();
       }
       if(player.isTouching(d3)){
        d3.x = 610;
        d3.y = 550;
        coinS.play();
       }
       if(player.isTouching(d4)){
        d4.x = 650;
        d4.y = 550;;
        coinS.play();
       }
      if(player.isTouching(d5)){
        d5.x = 690;
        d5.y = 550;
        coinS.play();
       }
        if(player.isTouching(d6)){  
        d6.x = 730;
        d6.y = 550;
        coinS.play();
       } 
       if (player.isTouching(d7)){
        d7.x = 770;
        d7.y = 550;
        coinS.play();
     }  
      if (player.isTouching(d8)){
      d8.x = 810;
      d8.y = 550;
      coinS.play();
   }
      if (player.isTouching(d9)){
      d9.x = 850;
      d9.y = 550;
      coinS.play();
  }
      if (player.isTouching(d10)){
    d10.x = 890;
    d10.y = 550;
    coinS.play();
  }
    if(player.isTouching(keys)){
      keys.visible = false
      keys.x = f1.x;
    }
    if(player.isTouching(door) && keys.x === f1.x){
      fill("green");
      textSize(50);
      text("Mission Complete",400,320);
      text("Press 'R' To Restart",420,400);
      cele1.visible = true;
      cele2.visible = true;
      gameState = "end";
    }
    if(player.isTouching(door) && keys.x !== f1.x){
      fill("red");
      textSize(30);
      text("Collect Keys First",400,320);
    }
    if(player.isTouching(shield)){
      fill("blue");
      textSize(30);
      text("Press U to use shield",400,320);
    }
    if(keyDown("U")){
       shield.x = 415;
       shield.y = 485;
    }
    if(shield.isTouching(monster1)){
      monster1.x = 2000;
      shield.x = 2000;
      monster1.velocityX = 0
    }
    if(player.isTouching(monster1) && shield.x !== monster1.x){
      player.x = 1082;
      player.y = 100;
      life = life-1;
      fireS.play()
    }

    if(player.isTouching(invMark)){
      fill("yellow");
      textSize(30);
      text("Good Work Now Open The Door",400,350);
     
    }
  }
  if(life === 0){
    gameState = "end";
    fill("green");
    textSize(30);
    text("Press 'R' To Restart",420,350);
  }
  if(keyDown("R")){
    gameState = "R";
    reset();
  }
  drawSprites();
  //texts
  fill("white");
  textSize(30);
  text("Lives : " + life,50,560);
  text("Collect these to increase life : ",5,590);
  text("Your Collection : ",280,560);
}
//reset function 
function reset(){
  gameState = "start";
  life = 3;
  player.x = 1082;
  player.y = 100;
  d1.x = 548;
  d1.y = 215;
  d2.x = 700;
  d2.y = 200;
  d3.x = 285;
  d3.y = 120;
  d4.x = 435;
  d4.y = 35;
  d5.x = 610;
  d5.y = 35;
  d6.x = 610;
  d6.y = 130
  d7.x = 695;
  d7.y = 325;
  d8.x = 905;
  d8.y = 325
  d9.x = 330;
  d9.y = 300;
  d10.x = 265
  d10.y = 215
  shield.visible = true;
  keys.visible = true;
  keys.x = 30;
  keys.y = 480;
  monster1.x = 370;
  monster1.y = 495;
  monster1.velocityX = 2
  heart3.x = 80;
  shield.x = 985;
  shield.y = 390;
  cele1.visible = false;
  cele2.visible = false;
}
function obs(){
 if (frameCount % 90 === 0){
  rObs1 = createSprite(600,520,20,20);
  rObs1.addImage(fireCI);
  rObs1.scale = 0.1;
  rObs1.velocityY = -2;
  rObs1.lifetime = 80;
  rObs2 = createSprite(688,520,20,20);
  rObs2.addImage(fireCI);
  rObs2.scale = 0.1;
  rObs2.velocityY = -2;
  rObs2.lifetime = 60;
  obsGrp1.add(rObs1,rObs2);
 }
 if(frameCount % 70 === 0){
  rObs3 = createSprite(875,520,20,20);
  rObs3.addImage(fireCI);
  rObs3.scale = 0.1;
  rObs3.velocityY = -2.3;
  rObs3.lifetime = 55;
  obsGrp2.add(rObs3);
  }
  if(frameCount % 75 === 0){
    rObs4 = createSprite(1090,400,20,20);
    rObs4.addImage(fireCI);
    rObs4.scale = 0.1;
    rObs4.velocityX = -1.5;
    rObs4.lifetime = 35;
    obsGrp3.add(rObs4);
  }
}
function Spawnmonster(){
  if(frameCount % 75 === 0){
    rObs5 = createSprite(25,385,20,20)
    rObs5.x = Math.round(random(25,165));
    rObs5.velocityY = 2;
    rObs5.addImage(monsterI);
    rObs5.scale = 0.08;
    rObs5.lifetime = 60;
    obsGrp4.add(rObs5);
  }
  if(frameCount % 70 === 0){
    rObs6 = createSprite(25,75,20,20)
    rObs6.x = Math.round(random(95,175));
    rObs6.velocityY = 2;
    rObs6.addImage(fireCI);
    rObs6.scale = 0.08;
    rObs6.lifetime = 50;
    obsGrp5.add(rObs6);
  }
}
function Spawnheart(){
  if(frameCount % 120 === 0){
    heart2 = createSprite(300,385,20,20)
    heart2.x = Math.round(random(325,735));
    heart2.y = Math.round(random(150,225));
    heart2.addImage(hI1);
    heart2.scale = 0.08;
    heart2.lifetime = 60;
    heartGrp.add(heart2);
  }
}

