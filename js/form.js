class Form{
    constructor(){
        this.input=createInput("Write Name Here");
        this.button=createButton("Play");
        this.resetButton=createButton("Reset");
        this.greeting=createElement('h3');
    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(100,10);
        
        this.input.position(100,200);
        this.button.position(100,250);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();

            playerCount=playerCount+1;
            player.update();

            player.index=playerCount;

            player.updateCount(playerCount);

            this.greeting.html("Hello "+player.name);
            this.greeting.position(100,200);
        });

        this.resetButton.position(300,200);

        this.resetButton.mousePressed(()=>{
            game.updateState(0);
            player.updateCount(0);
        });
    }
    hide1(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}