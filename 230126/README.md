# 20230126
## Web-Socket 

Difficult to create, language.

1) Web Socket Definition

WebSocket is Protocol.
HTTP / WebSocket is different. OSI 7 Layer 7 Level. based on OSI 7 layer 4 level. 

HTTP Protocol
- HTTP Protocol only 1 request and 1 response and then disconnect by client. 
- HTTP Protocol unable to two-way connection. 

WebSocket 
- WebSocket is possible to two-way connection.
- WebSocket is interactive connection. WebSocket is connect and request, response and connection status. (ex. Chatting, Realtime Service(OnlineGame, Dashboard, Chart of caculation))
- Requirement of logical connection

Step1) HTTP Request (Client Request)
Step2) Received HTTP Request to Server. 
Step3 ) Server response to Client. (status code 101)
Step4 ) Request to Connection to Server by Client
        WebSocket Port possible to connect Port. 

        HTTP / WebSocket is Protocol. but based on HTTP protocol.
        ex) HTTP Protocol sample : http://www.google.com
        ex) WebSocket Protocol sample : ws://www.google.com

```request message
GET / HTTP / 1.1
Upgrade : websocket
Connection : Upgrade
Sec-Websocket-key : 1lknasflnelf... //Identity value
```

``` received message
HTTP / 1.1 101 Switching Protocols
Upgrade : WebSocket
Connection : Upgrade
Sec-Websocket-Accep : 1p23lnlasndfl... //Identity value
```

### Definition for WebSocket via ws module.

```sh
npm init -y
npm install 
cors
mysql2
sequelize
express
ws
```

**app.js**
**server.js**
**socket.js**
