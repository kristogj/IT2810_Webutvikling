

$(document).ready(() => {

    const width = 700;
    const height = 400;
    const colors = ["#d9ebf1", "#9cc2c8", "#ff373f","#283031"];
    const canvas = $("#canvas");

    // Setup size of canvas
    canvas.attr({width:width,height:height});

    //Used for doing changes on the canvas, will be used alot
    const c = canvas[0].getContext("2d");



    //Figure containers
    let figures = [];



    //Make all the new figures
    for(let i = 0; i < 20; i++){
        //Common values
        const dx = (Math.random() - 0.5) * 8;
        const dy = (Math.random() - 0.5) * 8;

        //Circle
        const radius = (Math.random() * 20) + 1;
        const xc = Math.random() * (width - radius * 2 ) + radius ;
        const yc = Math.random() * (height - radius * 2) + radius;
        figures.push(new Circle(xc,yc,dx,dy,radius,getRandomColor()));

        //Rectangle
        const w = (Math.random() * 30) + 1;
        const h = w;
        const xr = Math.random() * (width  - w*2) + w;
        const yr = Math.random() * (height - h*2) +h;
        figures.push(new Rectangle(xr,yr,dx,dy,w,h,getRandomColor()));

        //Triangle
        const xt = Math.random() * (width  - w*2) + w;
        const yt = Math.random() * (height - h*2) +h;
        const s = (Math.random() * 30) + 5;
        figures.push(new Triangle(xt,yt,dx,dy,s,getRandomColor()));

    }



    //Make sure that the figuers move around on the screen
    function animate() {
        //Calls itself recursive
        requestAnimationFrame(animate);
        //Clear the canvas, or else it would be full of new and new drawings
        c.clearRect(0,0,width,height);
        figures.forEach((fig) => {fig.update()})

    }

    function getRandomColor() {
        const index = Math.floor(Math.random()  * (colors.length+1));
        return colors[index];
    }

    //Handle fliter-values
    $("#dx")[0].oninput = function() {
        // Iterate the figures and change their speed
        $("#dxtxt")[0].innerHTML = this.value;
        figures.forEach((fig) => {fig.increaseDx(this.value)});
    };

    //Handle fliter-values
    $("#dy")[0].oninput = function() {
        // Iterate the figures and change their speed
        $("#dytxt")[0].innerHTML = this.value;
        figures.forEach((fig) => {fig.increaseDy(this.value)});
    };



    //Start the animation
    animate();

});



