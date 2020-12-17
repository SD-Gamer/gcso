var car,wall,speed,weight,deformation;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  speed = random(55,90);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height / 2);
  weight = random(400,1500);
  deformation = ((0.5 * weight * speed * speed) /22500 );
}

function draw() {
  background(255,255,255);  
  if(wall.x - car.x < (car.width + wall.width )/2) {
     car.velocityX = 0;

     if(deformation < 100) {
        car.shapeColor = "green";
      }
     if(deformation < 180 && deformation > 100 ) {
        car.shapeColor = "yellow";
     }
     if(deformation > 180) {
       car.shapeColor = "red"; 
       }
   }
  drawSprites();
}