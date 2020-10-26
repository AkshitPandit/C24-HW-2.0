class Dustbin{
    constructor(x,y,width,height,color) {
        var options = {
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display() {
        rectMode(CENTER);
        fill(this.color);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
    }
}
