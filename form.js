class Form {
constructor(){

}
display(){
    var title=createElement('h2')
    title.html("car racing game")
    title.position(130,0)
    var Input=createInput("name")
    Input.position(130,160)
    var Button=createButton('play')
    Button.position(250,200)
    Button.mousePressed(function(){
    
    Input.hide()
    Button.hide()
    var name=Input.value
    playerCount+=1
    player.update(name)
    player.updateCount(playerCount)
    var greeting=createElement('h3')
    greeting.html("hello"+name)
    greeting.position(130,160)
    })

    
}
}