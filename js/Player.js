function GameObject(x,y,w,h,color)
{
    // set up player's starting point
    /// set up x
    if(x == undefined)
        {
        this.x = canvas.width/2;
        }
    else
        {
        this.x = x;
        }
    /// set up y
    if(y == undefined)
        {
        this.y = canvas.height/2;
        }
    else
        {
        this.y = y;
        }
    ///// set up width
    if(w == undefined)
        {
        this.width = canvas.width/2;
        }
    else
        {
        this.width = w;
        }
    ////// set up height
    if(h == undefined)
        {
        this.height = canvas.height/2;
        }
    else
        {
        this.height = h;
        }
    /////// set up color
    if(color == undefined)
        {
        this.color = "#ff0000";
        }
    else
        {
        this.color = color;
        }
    //////// 
    this.left = function()
    {
        return this.x - this.width/2
    }
    this.right = function()
    {
        return this.x + this.width/2
    }
    this.top = function()
    {
        return this.y - this.width/2
    }
    this.bottom = function()
    {
        return this.y + this.width/2
    }

    this.prevX = this.x;
    this.prevY = this.y;


    // this sets up the player's dimesion
   
    this.vx = 0;
    this.vy = 0;

    this.drawRect = function()
    {
        context.save();
            context.fillStyle = this.color
            context.translate(this.x,this.y);
            context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
        context.restore();
    }

      this.drawCircle = function()
    {
        context.save();
            context.fillStyle = this.color;
            context.beginPath();
            context.translate(this.x,this.y);
            context.arc(0,0,this.width/2,0,360 * Math.PI/180,true);
            context.closePath();
            context.fill();


        context.restore();
    }


    this.move = function()
    {
        this.x += this.vx
        this.y += this.vy
    }

    this.collisionCheck = function(obj)
    {
        if (
            this.left() < obj.right() &&
            this.right() > obj.left() &&
            this.top() < obj.bottom() &&
            this.bottom() > obj.top()
        )
        {
            return true;
        }
        return false;
    }

}