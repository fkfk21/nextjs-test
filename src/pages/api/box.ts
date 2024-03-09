
import { NextApiRequest, NextApiResponse } from 'next';
// import { getWebSocketServer } from '@/components/websocket';
import SocketIO from 'socket.io';


// export function getWebSocketServer() {
//   return wss;
// }


// wss.on('connection', (ws: WebSocket) => {
//   console.log('connected');
//   ws.on('message', (message: string) => {
//     console.log('received: %s', message);
//   });

//   ws.send(JSON.stringify({ message: 'something' }));
// });

// export default function SocketHandler(req: NextApiRequest, res: NextApiResponse ) {
//   const io = new SocketIO.Server(res.socket.server);

//   io.on('connection', (socket) => {
//     const clientid = socket.id;
//     console.log(`A client connected. ID: ${clientid}`);

//     // メッセージ受診時処理
//     socket.on('message', (message) => {
//       console.log(`Received: ${message}`);
//       io.emit('message', message);
//     });

//     // 切断時処理
//     socket.on('disconnect', () => {
//       console.log(`A client disconnected. ID: ${clientid}`);
//     });
//   });

  // wss.clients.forEach((client) => {
  //   console.log(client.url);
  //   if (client.readyState === WebSocket.OPEN) {
  //     client.send(JSON.stringify(req.body));
  //   }
  // }); 
  // res.status(200).json({ message: 'Socket Test' }); 
// }
