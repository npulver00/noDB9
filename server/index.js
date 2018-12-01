const express   = require('express'),
      bodyParser = require('body-parser'),
      app         = express(),
      PORT        = 4002,
      controller  = require("./controller/controller"),
      instruments  = require("./controller/controller");
    //   data   = require("./trivia.json")


app.use(bodyParser.json());



app.get('/api/instruments', controller.readInstruments);

app.post('/api/instruments', controller.createInstrument);

app.put('/api/instruments/:id', controller.editInstrument);

app.delete('/api/instruments/:id', controller.deleteInstrument)



app.listen (PORT, ()=> console.log(`Listening on port ${PORT}🎹`));