const txtAnim = document. querySelector ('h1');

new Typewriter (txtAnim, {
    deleteSpeed: 50 
})
.changeDelay(50)
.typeString('L\'ISS')
.pauseFor(300)
.typeString(', <strong style="color: #c61a09" > by Nasa.</strong>')
.pauseFor(1500)
.deleteChars(8)
.typeString('<strong style="color: #c61a09">Presented by Samir.</strong>')
.start()



// const txtAnim2 = document. querySelector ('h2');

// new Typewriter (txtAnim2, {
//     // deleteSpeed: 20
// })

// .typeString('L\'ISS')

