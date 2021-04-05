var bullet,wall

var speed,weight

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 210, 50, 30);
  wall = createSprite(1500, 200, 60, height/2);

  speed=random(35,90);
  weight = random(400,1500);

  bullet.velocityX = speed;

}

function draw() {
  background("black");  

  if(wall.x - bullet.x < bullet.width/2 + wall.width/2){

     bullet.velocityX = 0;

     var deformation = 0.5*weight*speed*speed/22500

     if(deformation > 180){
       bullet.shapeColor = "red";

     }

     if(deformation < 100){
      bullet.shapeColor = "green";

    }

    if(deformation < 180 && deformation > 100){
      bullet.shapeColor = "yellow";

    }
      console.log(deformation);
 }

  drawSprites();
}