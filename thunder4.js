class Thunder4{
    constructor(x,y,w,h){
        this.image = loadImage("4.png")
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    display(){
        imageMode(CENTER)
        image(this.image,300,100,300,300);
    }
}