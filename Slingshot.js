class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image (this.sling1,230,20,50)
        image (this.sling2,195,15,50)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke (48,22,8)

            if (pointA.x<260){
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -30, pointB.y+10);
                line(pointA.x - 20, pointA.y, pointB.x +20, pointB.y+10);
                image (this.sling3,pointA.x -25,pointA.y -10, 15,30)
            }

            else{
                strokeWeight(3);
                line(pointA.x + 20, pointA.y, pointB.x -30, pointB.y+10);
                line(pointA.x + 20, pointA.y, pointB.x +20, pointB.y+10);
                image (this.sling3,pointA.x +20,pointA.y -10, 15,30)
            }
            
           
        }
    }
    
}