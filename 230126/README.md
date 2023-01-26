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
usage method
1) open – 커넥션이 제대로 만들어졌을 때 발생함
2) connection - 
3) message – 데이터를 수신하였을 때 발생함
4) error – 에러가 생겼을 때 발생함
5) close – 커넥션이 종료되었을 때 발생함
**socket.js**


### Client 

```sh
express
nunjucks
```

```typescript
app.listen
(method) Application<Record<string, any>>.listen(callback?: (() => void) | undefined): Server<typeof IncomingMessage, typeof ServerResponse> (+5 overloads)
```

```javascript
<ref *1> Server {
  maxHeaderSize: undefined,
  insecureHTTPParser: undefined,
  requestTimeout: 300000,
  headersTimeout: 60000,
  keepAliveTimeout: 5000,
  connectionsCheckingInterval: 30000,
  _events: [Object: null prototype] {
    request: [Function: app] {
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      setMaxListeners: [Function: setMaxListeners],
      getMaxListeners: [Function: getMaxListeners],
      emit: [Function: emit],
      addListener: [Function: addListener],
      on: [Function: addListener],
      prependListener: [Function: prependListener],
      once: [Function: once],
      prependOnceListener: [Function: prependOnceListener],
      removeListener: [Function: removeListener],
      off: [Function: removeListener],
      removeAllListeners: [Function: removeAllListeners],
      listeners: [Function: listeners],
      rawListeners: [Function: rawListeners],
      listenerCount: [Function: listenerCount],
      eventNames: [Function: eventNames],
      init: [Function: init],
      defaultConfiguration: [Function: defaultConfiguration],
      lazyrouter: [Function: lazyrouter],
      handle: [Function: handle],
      use: [Function: use],
      route: [Function: route],
      engine: [Function: engine],
      param: [Function: param],
      set: [Function: set],
      path: [Function: path],
      enabled: [Function: enabled],
      disabled: [Function: disabled],
      enable: [Function: enable],
      disable: [Function: disable],
      acl: [Function (anonymous)],
      bind: [Function (anonymous)],
      checkout: [Function (anonymous)],
      connect: [Function (anonymous)],
      copy: [Function (anonymous)],
      delete: [Function (anonymous)],
      get: [Function (anonymous)],
      head: [Function (anonymous)],
      link: [Function (anonymous)],
      lock: [Function (anonymous)],
      'm-search': [Function (anonymous)],
      merge: [Function (anonymous)],
      mkactivity: [Function (anonymous)],
      mkcalendar: [Function (anonymous)],
      mkcol: [Function (anonymous)],
      move: [Function (anonymous)],
      notify: [Function (anonymous)],
      options: [Function (anonymous)],
      patch: [Function (anonymous)],
      post: [Function (anonymous)],
      propfind: [Function (anonymous)],
      proppatch: [Function (anonymous)],
      purge: [Function (anonymous)],
      put: [Function (anonymous)],
      rebind: [Function (anonymous)],
      report: [Function (anonymous)],
      search: [Function (anonymous)],
      source: [Function (anonymous)],
      subscribe: [Function (anonymous)],
      trace: [Function (anonymous)],
      unbind: [Function (anonymous)],
      unlink: [Function (anonymous)],
      unlock: [Function (anonymous)],
      unsubscribe: [Function (anonymous)],
      all: [Function: all],
      del: [Function (anonymous)],
      render: [Function: render],
      listen: [Function: listen],
      request: [IncomingMessage],
      response: [ServerResponse],
      cache: {},
      engines: {},
      settings: [Object],
      locals: [Object: null prototype],
      mountpath: '/',
      _router: [Function]
    },
    connection: [Function: connectionListener]
  },
  _eventsCount: 2,
  _maxListeners: undefined,
  _connections: 0,
  _handle: TCP {
    reading: false,
    onconnection: [Function: onconnection],
    [Symbol(owner_symbol)]: [Circular *1]
  },
  _usingWorkers: false,
  _workers: [],
  _unref: false,
  allowHalfOpen: true,
  pauseOnConnect: false,
  noDelay: true,
  keepAlive: false,
  keepAliveInitialDelay: 0,
  httpAllowHalfOpen: false,
  timeout: 0,
  maxHeadersCount: null,
  maxRequestsPerSocket: 0,
  _connectionKey: '6::::0',
  [Symbol(IncomingMessage)]: [Function: IncomingMessage],
  [Symbol(ServerResponse)]: [Function: ServerResponse],
  [Symbol(kCapture)]: false,
  [Symbol(async_id_symbol)]: 10,
  [Symbol(http.server.connections)]: ConnectionsList {},
  [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
    _idleTimeout: 30000,
    _idlePrev: [TimersList],
    _idleNext: [Timeout],
    _idleStart: 74,
    _onTimeout: [Function: bound checkConnections],
    _timerArgs: undefined,
    _repeat: 30000,
    _destroyed: false,
    [Symbol(refed)]: false,
    [Symbol(kHasPrimitive)]: false,
    [Symbol(asyncId)]: 9,
    [Symbol(triggerId)]: 6
  },
  [Symbol(kUniqueHeaders)]: null
}
```