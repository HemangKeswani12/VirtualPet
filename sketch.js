//Create variables here

function preload()
{
	dogImage = loadImage("images/dogimg.png");
  dogHappyImage = loadImage("images/dogimg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  Dog = createSprite(200, 200, 50, 50);
  Dog.addImage(dogImage);

  foodStock=database.ref('Food');
  foodStock.on("value", readStock); 
}


function draw() {  

  background(46, 139, 87);

  if(keyDown("UP_ARROW")) {
    writeStock(foodS);
    dog.addImage(dogHappyImage);
  }

  drawSprites();

  textSize(30);
  text("Press the UP arrow to feed Drago milk!")

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.red('/').update({
    food:x
  })
}