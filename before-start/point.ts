export class Point{
    
    constructor(private x?:number, private y?: number){
      
    }

    draw(){
     console.log(' (X, Y)= ('+this.x +', '+this.y+')');
    }

    getDistance(){
      //...
    }
    
    getX(){
      return this.x;
    }

    setX(value){

     if(value<0){
       throw new Error('Value can not be less than 0');
     }

     this.x=value;

    }

}
