
 class Box{
    constructor(height = 100,width = 100){
        this.height = height;
        this.width = width;
    }
    area(){
        return this.height * this.width;
    }
    increase(value,dimension){
        if(dimension == "width"){
            this.width = this.width + value
        }
        if(dimension == "height"){
            this.height = this.height + value
        }
    }
}

module.exports = Box

