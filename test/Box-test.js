const chai = require('chai');
const expect = chai.expect;
const Box = require('../src/Box');
// console.log(Box)
describe("Box", function(){
    it("should have height and width default at 100" ,  function(){
        let box = new Box()
        expect(box.height).to.equal(100)
        expect(box.width).to.equal(100)
    })
    it("should allow input for height and width" ,  function(){
        const height = 20
        const width = 50
        let box = new Box(height,width)
        expect(box.height).to.equal(height)
        expect(box.width).to.equal(width)
    })
    // it("should calculate area of the box." ,  function(){
    //     let box = new Box(87,100)
    //     expect(box.area()).to.equal(8700)
        
    // })
    // it("should increase width of the box by 90." ,  function(){
    //     let box = new Box(87,100)
    //     box.increaseWidth(90, "width")
    //     expect(box.width).to.equal(190)
        
    // })
    it("should increase height of the box by 900." ,  function(){
        let box = new Box(87,100)
        box.increase(900,"height")
        expect(box.height).to.equal(987)
        
    })
  
})