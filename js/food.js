class Food {
    constructor() {
        var foodStock;
        var lastfed;
    }

    dog3= loadImage("Milk.png")
  
  feedsog() {
        dog.addImage(dog3);
        foodObj.updateFoodStock(foodObj.getFoodStock()-1);
        database.ref('/').update({
          food : foodObj.getFoodStock(),
          FeedTime :hour()
        });
      }

 function addFoods() {
        foods++;
        database.ref('/').update({
            food : foods
        })
      }
      if(gameState!="Hungry"){
        feed.hide();
        addFoods.hide();
        dog.remove();
      }else{ 
        feed.show();
        addFoods.show();
      }
function bedroom(){
        background(bedroom,550,500);
}

function garden() {
        background(garden,550,500);
}

function bathroom() {
        background(bathRoom,550,500);
}

function display(){
       
        varx=80 , y=100;
        imageMode(CENTER);
        image = this.dog3(720,220,70,70);
        if(this.foodStock!=0){
          for(var i =0;i<this.foodStock;i++){
            if(i%0===0){
              x = 80;
              y=y+50;
            }
            image(this.dog3,x,y,50,50);
            x=x+30;
          }
        }
      }
function update(state) {
  database.ref('/').update({
    gameState:state
  })
}
    }

  