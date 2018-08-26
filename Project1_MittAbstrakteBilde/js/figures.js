const canvas = $("#canvas");

const width = 700;
const height = 400;

//Used for doing changes on the canvas, will be used alot
const c = canvas[0].getContext("2d");

//Common for every kind of shapes
function Object(x,y,dx,dy,color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = color;


}
//Circle class
export function Circle(x,y,dx,dy,radius,color){
    Object.call(this,x,y,dx,dy,color);
    this.radius = radius;

    //Make a draw function so that we can see it on the canvas
    this.draw = () => {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle = this.color;
        c.fill();
    };

    this.update = () => {

        if(this.x + this.radius > width || this.x - this.radius < 0){
            this.dx *= -1;
        }

        if(this.y + this.radius > height || this.y - this.radius < 0){
            this.dy *= -1;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }

}

export function Rectangle(x,y,dx,dy,w,h,color){
    Object.call(this,x,y,dx,dy,color);
    this.w = w;
    this.h = h;

    this.draw = () => {
        c.beginPath();
        c.rect(this.x,this.y,this.w,this.h);
        c.fillStyle = this.color;
        c.fill();
    };

    this.update = () => {

        if(this.x + this.w > width || this.x < 0){
            this.dx *= -1;
        }

        if(this.y + this.h > height || this.y < 0){
            this.dy *= -1;
        }

        this.x += this.dx;
        this.y += this.dy;


        this.draw();
    }
}



function Triangle(x,y,dx,dy,s,color) {
    Object.call(this, x, y, dx, dy, color);
    this.s = s;

    this.draw = () => {
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x, this.y + this.s);
        c.lineTo(this.x + this.s, this.y + this.s);
        c.closePath();
        c.fillStyle = this.color;
        c.fill();
    };

    this.update = () => {
        if (this.x + this.s > width || this.x < 0) {
            this.dx *= -1;
        }
        if (this.y + this.s > height || this.y < 0) {
            this.dy *= -1;
        }
        this.x += this.dx;
        this.y += this.dy;


        this.draw();
    };
}























