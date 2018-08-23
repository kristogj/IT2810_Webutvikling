$(document).ready(() => {
    const width = 700;
    const height = 400;
    const colors = ["#d9ebf1", "#9cc2c8", "#ff373f","#283031"];
    const canvas = $("#canvas");

    // Setup size of canvas
    canvas.attr({width:width,height:height});

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
    function Circle(x,y,dx,dy,radius,color){
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

    function Rectangle(x,y,dx,dy,w,h,color){
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

    //Figure containers
    let circleArray = [];
    let rectArray = [];


    //Make all the new figures
    for(let i = 0; i < 40; i++){
        //Common values
        const dx = (Math.random() - 0.5) * 8;
        const dy = (Math.random() - 0.5) * 8;

        //Circle
        const radius = (Math.random() * 20) + 1;
        const xc = Math.random() * (width - radius * 2 ) + radius ;
        const yc = Math.random() * (height - radius * 2) + radius;

        //Rectangle
        const w = (Math.random() * 30) + 1;
        const h = w;
        const xr = Math.random() * (width  - w*2) + w;
        const yr = Math.random() * (height - h*2) +h;

        circleArray.push(new Circle(xc,yc,dx,dy,radius,getRandomColor()));
        rectArray.push(new Rectangle(xr,yr,dx,dy,w,h,getRandomColor()));
    }



    //Make sure that the figuers move around on the screen
    function animate() {
        //Calls itself recursive
        requestAnimationFrame(animate);
        //Clear the canvas, or else it would be full of new and new drawings
        c.clearRect(0,0,width,height);
        rectArray.forEach((rect) => {rect.update()});
        circleArray.forEach((circle) => {circle.update()})

    }

    function getRandomColor() {
        const index = Math.floor(Math.random()  * (colors.length+1));
        return colors[index];
    }

    //Handle fliter-values
    $(".slider")[0].oninput = function() {
        //TODO: use this value to update the dx speed of each figure in canvas..
        let v = this.value;
        $(".valtxt")[0].innerHTML = v;
    };






    //Start the animation
    animate();

});



