var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var http = require("http")
var socketIo = require('socket.io');

var app = express()
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({ extended: false})
)

var path = require("path")
app.use(express.static(path.join(__dirname,'uploads')))

var Users = require("./routes/users")
app.use("/users",Users)

var Admin = require("./routes/admin")
app.use("/users",Admin)

var Skills = require("./routes/skills")
app.use("/users",Skills)

var Projects = require("./routes/projects")
app.use("/users",Projects)

var Bids = require("./routes/bids")
app.use("/users",Bids)

var DevHome = require("./routes/DevHome")
app.use("/users",DevHome)

var CliHome = require("./routes/CliHome")
app.use("/users",CliHome)

var Bid_response= require("./routes/Bid_responses")
app.use("/users",Bid_response)

var Request_developers= require("./routes/Request_developers")
app.use("/users",Request_developers)

var Request_projects= require("./routes/Request_projects")
app.use("/users",Request_projects)

var Image = require("./routes/Images")
app.use("/users",Image)

var Conf_pro = require("./routes/Confirmed_projects")
app.use("/users",Conf_pro)

var Competition = require("./routes/Competition")
app.use("/users",Competition)

const server = http.Server(app)

server.listen(port, function(){
    console.log("Server is running on port"+port)
})

const io = socketIo(server)


const req_pro_cont = require("./controllers/Request_projects")

io.on('connection', (socket)=>{
    socket.emit('hello', {
        req_pro_cont
    })

    socket.emit('hello1', {
        greeting: 'Hello uDevs1'
    })
})





