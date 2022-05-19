import { LikeComponent } from './like.component';
import {Point} from './point';

let point = new Point(-4,7);
let x = point.getX();
console.log(' Initial X: '+x);
point.setX(10);
//point.x = 1;
//point.y = 3;
point.draw();

console.log('======================LikesCount=================================');
let component= new LikeComponent(10, true);
component.onClick();
console.log(`LikesCount: ${component.likesCount}, isSelected: ${component.isSelected}`)