const devices = [
    {name : "macbookpro", color : "space gray"},
    {name : "iphon12 pro max", color : "gold"},
    {name : "ipad pro 12.9", color : "space gray"},
    {name : "apple watch", color : "space gray"},
    {name : "airpod", color : "white"},
]

const gray = devices.filter((el) => el.color === "space gray")
console.log(gray)


const white = devices.find((el) => el.color === "white")
console.log(white)