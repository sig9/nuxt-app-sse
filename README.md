
# firebase setup

[Nitro Firebase preset](https://nitro.unjs.io/deploy/providers/firebase.html)


# Test 1 - dev server with curl

`yarn dev`

``` bash
❯ curl -iN http://localhost:3000/api/sse/demo
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
cache-control: no-cache
connection: keep-alive
content-type: text/event-stream
date: Wed, 20 Jul 2022 04:20:18 GMT
transfer-encoding: chunked

id: c75c6be0-e43d-410a-aa60-7c22e4a57c79
data: {"date":"2022-07-20T04:20:18.240Z","eventCount":0}

id: c75c6be0-e43d-410a-aa60-7c22e4a57c79
data: {"date":"2022-07-20T04:20:19.253Z","eventCount":1}

id: c75c6be0-e43d-410a-aa60-7c22e4a57c79
data: {"date":"2022-07-20T04:20:20.267Z","eventCount":2}

id: c75c6be0-e43d-410a-aa60-7c22e4a57c79
data: {"date":"2022-07-20T04:20:21.280Z","eventCount":3}

id: c75c6be0-e43d-410a-aa60-7c22e4a57c79
data: {"date":"2022-07-20T04:20:22.284Z","eventCount":4}

id: c75c6be0-e43d-410a-aa60-7c22e4a57c79
data: {"date":"2022-07-20T04:20:23.298Z","eventCount":5}

id: c75c6be0-e43d-410a-aa60-7c22e4a57c79
data: {"date":"2022-07-20T04:20:24.299Z","eventCount":6}

id: c75c6be0-e43d-410a-aa60-7c22e4a57c79
data: {"date":"2022-07-20T04:20:25.313Z","eventCount":7}

id: c75c6be0-e43d-410a-aa60-7c22e4a57c79
data: {"date":"2022-07-20T04:20:26.314Z","eventCount":8}

id: c75c6be0-e43d-410a-aa60-7c22e4a57c79
data: {"date":"2022-07-20T04:20:27.319Z","eventCount":9}

id: c75c6be0-e43d-410a-aa60-7c22e4a57c79
data: [DONE]
```

# Test 2 - build with azure preset test with curl

`yarn build:azure` (or if you are on windows `yarn build:azure:win`

Followed by
`yarn swa:build` - This runs the build with @azure/static-web-apps-cli (swa - azure static web apps service emulator) and azure-functions-core-tools (serverless framework)

Curl takes 10 seconds to complete, and it is missing all of the events except the last line.

Able to reproduce this issue after deployment to Azure Static Web Apps

``` bash
❯ curl -iN http://localhost:4280/api/sse/demo
HTTP/1.1 200 OK
connection: keep-alive
content-type: text/event-stream; charset=utf-8
date: Wed, 20 Jul 2022 04:48:43 GMT
server: Kestrel
cache-control: no-cache
transfer-encoding: chunked

data: [DONE]
```