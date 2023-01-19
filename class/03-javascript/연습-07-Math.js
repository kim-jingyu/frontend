Math.random()
// 0.8227710710590039
Math.floor( Math.random() * 1000000 )
// 763775
const randomNumber = Math.random()
// undefined
const token = Math.floor( randomNumber * 1000000 )
// undefined
const paddedToken = String(token).padStart(6, "0")
// undefined
console.log(paddedToken)
// VM5250:1 067147
// undefined