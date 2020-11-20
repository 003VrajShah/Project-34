class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            angularStiffness:1,
            length:220
        }
        this.pointB=pointB;
        this.pointx=bodyA.x;
        this.pointy=bodyA.y - 250;
        this.sling=Constrainst.create(options);
        World.add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pointB=this.sling.bodyA.positon;
            var pointB=this.pointB;
            push();
            strokeWeight(3.5);
            stroke("#fff");
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
}