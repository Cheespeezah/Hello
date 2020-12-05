//hemlo
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "yellow";
    width_of_line = 2;

    var width=screen.width;
    var New_Width=screen.width-50;
    newheight=screen.height-250;
    if (width<992){
    document.getElementById("myCanvas").width=New_Width;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
}
    

    canvas.addEventListener("touchstart",TouchTheSCREEN);
    
    function TouchTheSCREEN(e)
    {
        last_position_of_x=e.touches[0].clientX=canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY=canvas.offsetTop;
    }


    canvas.addEventListener("touchmove",Craetive);
    function Craetive(e)
    {

         current_position_of_touch_x = e.touches[0].clientX=canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY=canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y)
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

