class Game{
    constructor(){
   }
getState(){
    var gameStateref=database.ref('gameState');
    gameStateref.on("value",function(data){gameState=data.val();} )
}
update(state){
    database.ref('/').update({gameState:state})
}
async start(){
    if (gameState === 0){
        player=new Player();
        var playerCountref=await database.ref('playerCount').once("value")
        if(playerCountref.exists()){
            playerCount=playerCountref.val();
            player.getCount();
        }
      
        form=new Form();
        form.display();
       
    }
}
play(){
    form.hide();
    tetxSize(28);
    text("GAME START",100,100)
    Player.getPlayerinfo();
    if(allPlayers !== undefined){
        var displayPosition=130;
        for(plr in allPlayers){
            if(plr === "player" + player.index){
             fill ("red")
            }
            else{
                fill("black")
            }
            displayPosition+=20;
            textSize(15)
            text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,displayPosition)
        }
    }
    if(keyIsDown(UP_ARROW) && player.index1== null){
       player.diatance+=50
       player.update()
    }
}
}