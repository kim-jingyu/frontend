let email = "codecamp@gmail.com"
// undefined
let userName = email.split("@")[0]
// undefined
let companyAddress = email.split("@")[1]
// undefined
let maskingName = []
// undefined
maskingName.push(userName[0])
// 1
maskingName.push(userName[1])
// 2
maskingName.push(userName[2])
// 3
maskingName.push(userName[3])
// 4
maskingName.push("*")
// 5
maskingName.push("*")
// 6
maskingName.push("*")
// 7
maskingName.push("*")
// 8
let maskedEmail = maskingName.join("") + "@" + companyAddress
// undefined
maskedEmail
// 'code****@gmail.com'