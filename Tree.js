class Tree {
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            restitution: 0,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");
        World.add(world,this.body)
    }
    diplay(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}