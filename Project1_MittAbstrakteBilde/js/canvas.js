$(document).ready(() => {
    const width = 700;
    const height = 400;
    const colors = ["#d9ebf1", "#9cc2c8", "#ff373f","#283031"];
    const canvas = $("#canvas");

    // Setup size of canvas
    canvas.attr({width:width,height:height});

    //Used for doing changes on the canvas, will be used alot
    const c = canvas[0].getContext("2d");



    //Circle class
    function Circle(x,y,dx,dy,radius,color){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;

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

    //Figure containers
    let circleArray = [];

    //Make all the new circles
    for(let i = 0; i < 100; i++){
        const radius = (Math.random() * 20) + 1;
        const x = Math.random() * (width - radius * 2 ) + radius ;
        const y = Math.random() * (height - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * 8;
        const dy = (Math.random() - 0.5) * 8;
        circleArray.push(new Circle(x,y,dx,dy,radius,getRandomColor()));
    }

    //Make sure that the figuers move around on the screen
    function animate() {
        //Calls itself recursive
        requestAnimationFrame(animate);
        //Clear the canvas, or else it would be full of new and new drawings
        c.clearRect(0,0,width,height);
        for( let i = 0; i < circleArray.length ; i++) {
            circleArray[i].update();
        }
    }

    function getRandomColor() {
        const index = Math.floor(Math.random()  * (colors.length+1));
        return colors[index];
    }

    //Start the animation
    animate();

});



