// controls


var a = false;
var d = false;
var w = false;
var s = false;

document.addEventListener("keydown", press);
document.addEventListener("keyup", release);


function press(e)
{
    //console.log("Pressed "+ e.keycode);
    /*if(e.keyCode == 65) 
        {
            a=true;
        }
        if (e.keyCode == 68)
        {
            d=true
        } */
    //console.log("Pressed "+ e.keycode);
    if(e.keyCode == 87) 
        {
            s=true;
        }
        if (e.keyCode == 83)
        {
            w=true
        }
}
function release(e)
{
        //console.log("Pressed "+ e.keycode);
        if(e.keyCode == 65) 
        {
            a=false;
        }
        if (e.keyCode == 68)
        {
            d=false;
        }
        //console.log("Pressed "+ e.keycode);
        if(e.keyCode == 87) 
        {
            s=false;
        }
        if (e.keyCode == 83)
        {
            w=false;
        }
}


