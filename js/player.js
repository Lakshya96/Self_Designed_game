class Player {
    constructor(){
        this.name=null;
        this.distance=0;
        this.index=null;
    }
    getCount(){
        var refference=database.ref("playerCount");
        refference.on("value", function(data){
            playerCount=data.val();
        });
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        });
    }
    update(){
        var playerIndex="players/player"+playerCount;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static playerDetails(){
        var refference=database.ref("players");
        refference.on("value", function(data){
            allplayers=data.val();
        });
    }
}