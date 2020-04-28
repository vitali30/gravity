



let Vec2 = function(x, y){
    this.x = x;
    this.y = y;
 };
 
 Vec2.prototype.add = function(vec){
    this.x += vec.x;
    this.y += vec.y;
    return this;
 };
 
 Vec2.prototype.myScalar = function(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
 };
 
 let world = {
    gravity: new Vec2(0, -1),
    airresistance: 1,
    wind: new Vec2(0, 0),
    control: new Vec2(0, 0),
 };
 
 let object = {
    position: new Vec2(0, 20),
    speed: new Vec2(0, -1),
    update: function(){
       this.speed
          .add(world.gravity)
          .add(world.wind)
          .add(world.control)
          .myScalar(world.airresistance);
 
    return this.position.add(this.speed);
         
          
    },
 };
 
 console.log(object.position);
 console.log(object.update());
 console.log(object.update());
 console.log(object.update());
 console.log(object.update());
 console.log(object.update());
 console.log(object.update());
 console.log(object.update());
 console.log(object.update());
 console.log(object.update());