const chalk = require('chalk');
const express = require('express');
const addMiddlewareTo = require('./middleware/decorate.middleware');
const delegateRoutesFor = require('./routers/delegate.routers');
const socket = require('socket.io');



const app = express();
const port = process.env.PORT || 8080;
const io = socket(app.listen(port, () => {
    console.log(chalk.green(`Server is listening on port ${chalk.cyan(port)}.`));
}))




addMiddlewareTo(app);
delegateRoutesFor(app);


app.get('/api/example', (req, res, next) => {
    res.status(200).send('hello')
  })




io.on('connection', socket => {
    console.log('User Connected');
    // io.emit('message dispatched', 'hello');
    // EVERYONE
    // socket.on('message sent', data => {
    //   console.log(data)
    //   io.emit('message dispatched', data.message);
    // })
  
  
    //  EVERYONE BUT ME
    // socket.on('message sent', data => {
    //   console.log(data)
    //   socket.broadcast.emit('message dispatched', data.message);
    // })
  
    
    // EVERYONE IN THE ROOM
    socket.on('join room', data => {
      console.log('Room joined', data.room)
      socket.join(data.room);
      io.to(data.room).emit('room joined');
    })
    socket.on('message sent', data => {
      io.to(data.room).emit('message dispatched', data.message);
    })
  
    socket.on('disconnect', () => {
      console.log('User Disconnected');
    })
  });
