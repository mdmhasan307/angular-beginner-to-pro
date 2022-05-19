class Point{
    
     constructor(private x?:number, private y?: number){
       
     }

     draw(){
      console.log(' (X, Y)= ('+this.x +', '+this.y+')');
     }

     getDistance(){
       //...
     }

}

let point = new Point(-4,7);
//point.x = 1;
//point.y = 3;
point.draw();