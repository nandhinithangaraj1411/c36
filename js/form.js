class Form{
    constructor(){
  
  }
hide(){
  greeting.hide();
  input.hide();
  button.hide();
}
display(){
  var input=createInput("Name :")
  var button=createButton("play")
  var greeting=createElement('h3');
   var title=createElement('h2')
   title.html("Car Racing Game")
   title.position(200,10)
   input.position(200,160)
   button.position(200,200)
   button.mousePressed(function(){
     
    input.hide();
    button.hide();
     
     player.name=input.value();
     playerCount=playerCount+1
     player.update();
     player.updateCount(playerCount);
     player.index=playerCount
     greeting.html("Hello"+player.name)
     greeting.position(200,160)
   })

   
   }
}