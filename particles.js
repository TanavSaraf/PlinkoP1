class Particle {
    constructor(x,y,radius) {
      var options = {
         
          'friction':0.0001,
          'restitution':1
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      
    
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
    
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };