const qrcode = require('qrcode-terminal')

const {Client,LocalAuth} = require('whatsapp-web.js')

const whatsapp = new Client({
    authStrategy: new LocalAuth()
})

whatsapp.on('qr',qr => {
    qrcode.generate(qr,{
        small:true
    })
})

whatsapp.on('message',async message => {
    if(message.body === "hello" || message.body === "Hello" || message.body === "HELLO" || message.body === "HI" || message.body === "hi") {
        message.reply("Thank you for contacting Arpit Sharma! Please let us know how we can help you. Say help for know more😌") 
    } 

    if(message.body === "help" || message.body === "Help" || message.body === "HELP") {
        message.reply("1: kya aap scholarship form online krana chahte hai. 2: kya aap pata lagana chahte hai ki scholarship form me konsi kagaz chahiye. Apko jo janna ho us number ko send kare")
    }
})


whatsapp.on('ready',() => {
    console.log("client is ready")
})

whatsapp.initialize()