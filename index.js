const express = require('express')
const app = express()
const WSServer = require('express-ws')(app)

const PORT = process.env.PORT || 5000

app.ws('/', (ws, req) => {
  console.log('ПОДКЛЮЧЕНИЕ УСТАНОВЛЕНО');
  ws.send(JSON.stringify('Ты успешно подключился'))
  ws.on('message', (msg) => {
    console.log(JSON.parse(msg));
  })
})

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))