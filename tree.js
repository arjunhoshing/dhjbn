class Tree {
    constructor(x,y,w,h) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w
        this.height = h
        World.add(world,this.body);
        this.image = loadImage("tree.png/sprites");
    }

    display() {
        var pos = this.body.position
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width.this.height);
    }

}