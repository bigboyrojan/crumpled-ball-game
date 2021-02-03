class Paper  {
constructor (x,y,radius){

var choices = {
    isStatic: false,
    density: 1.2,
    restitution: 0.3,
    friction: 0.5,
   
}
this.body = Bodies.circle(x,y,radius, choices);
this.radius = radius;



World.add(world, this.body);
}
display() {
var ball = this.body.position;
ellipseMode(RADIUS);
fill(200,32,40);
ellipse(ball.x,ball.y,this.radius)

}

}