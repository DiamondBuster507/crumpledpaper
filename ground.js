class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body)
    this.width=width
    this.height=height
    }
display(){

groundObj=new ground(width/2,670,width,20);
leftSide=new ground(1100,600,20,120);
}
}
