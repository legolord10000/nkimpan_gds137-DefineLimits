var canvas;
var context;
var player;
var timer;
var interval = 1000/60


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject(1,canvas.height/2,5,100,"#6200ff");
player.vx=0;
player.vy=-4;

npc1 = new GameObject(300,canvas.height/2,100,100,"#00ff00")
npc2 = new GameObject(600,canvas.height/2,100,100,"#0000ff")
npc3 = new GameObject(900,canvas.height/2,100,100,"#FF00ff")


timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0,0,canvas.width,canvas.height);
    
    if (d)
    {
        player.x += 4
    }
    if (a)
    {
        player.x -= 4
    }
    if (w)
    {
        player.y += 4
    }
    if (s)
    {
        player.y -= 4
    }

    player.move();
    if (player.x > canvas.width + player.width/2)
        {
            //player.vx=-4
            //player.color = "#ffff00"
            player.x = -player.width/2
        }
        else if (player.x < -player.width/2)
        {
            //player.vx=4
            //player.color = "#0000ff"
            player.x = canvas.width + player.width/2
        }
        if (player.y > canvas.height - player.height/2)
        {
            player.vy=-4
            //player.color = "#00ff00"
            player.y = canvas.height -player.height/2
        }
        else if (player.y < player.height/2)
        {
            player.vy=4
            //player.color = "#ff0000" 
            player.y = player.height/2
        }
        
        
       // NPC1 collision
    if (npc1.collisionCheck(player))
        {
            npc1.color = "#ffff00"
        }
    else
        {
            npc1.color = "#00ff00"
        }
    // NPC2 collision
     if (npc2.collisionCheck(player))
        {
        }
        // NPC3 collision
     if (npc3.collisionCheck(player))
        {
            //player.x = player.prevX
            //player.y = player.prevY
        }
        else
        {
            //player.prevX = player.x;
           // player.prevY = player.y;
        }

    player.drawRect();
    //npc1.drawCircle();  
    //npc2.drawCircle();  
    //npc3.drawRect();  

}

