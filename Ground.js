class GROUND{
    constructor(x,y,width,height){
        var ops = {
            isStatic : true
        }

        this.ground = Bodies.rectangle(x,y,width, height,ops);
        this.width = width;
        this.height = height;
        World.add(world,this.ground);
    }

  
    Anushka (){
        var pos = this.ground.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width, this.height);
        
    }
}