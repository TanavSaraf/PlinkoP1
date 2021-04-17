class Particle {
    constructor(x,y,radius) {
      var options = {
         
          'friction':0.02
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      
    
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     ellipseMode(CENTER);
    
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };