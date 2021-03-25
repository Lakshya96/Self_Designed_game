class Game {
    constructor(){
        
    }
    getState(){
        var refference=database.ref("gameState");
        refference.on("value", function(data){
            gameState=data.val();
        });
    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        });
    }
    start(){
        if(gameState===0){
            console.log("test")
            
            player=new Player();
            player.getCount();
	        form=new Form();
	        form.display();
        }
        player1=createSprite(150,550,10,10);
        player1.addImage(player1Img);
        player2=createSprite(300,550,10,10);
        player2.addImage(player2Img);
        player3=createSprite(450,550,10,10);
        player3.addImage(player3Img);
        player4=createSprite(550,550,10,10);
        player4.addImage(player4Img);
        players=[player1,player2,player3,player4];
    }
    play(){
        form.hide1();
        Player.playerDetails();
        if(allplayers!=undefined){
            var bg=createSprite(width/2,height/2,20,20);
            bg.addImage(backgroundImg);
            var y=200;
            var index=0;
            var dist=0
            for(var p in allplayers){
                index=index+1;
                y=y+10;
                cars[index-1].y=dist;
                console.log(dist);
                if (p==="player"+player.index) {
                    fill("red");
                    dist=600-allplayers[p].distance;
                    ellipse(players[index-1].x,players[index-1].y,60)
                    players[index-1].shapeColor="red";
                } else {
                    fill("black");
                }
                text(allplayers[p].name+":"+allplayers[p].distance,200,y);
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=50;
            player.update();
        };
        drawSprites();
    }
}