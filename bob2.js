class Bob2{
    constructor(x,y,diameter){
        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:1.2
        }
        this.x=x
        this.y=y;
        this.diameter=diameter
        this.body=Bodies.circle(this.x,this.y,this.diameter/2,options)
        World.add(world, this.body);
    }
    display(){
        var paperpos =this.body.position;
        
        push();
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER);
        strokeWeight(1);
        stroke("white")
        fill("black");
        ellipse(0, 0, this.r, this.r);
        pop();
      }
    




}