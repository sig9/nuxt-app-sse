
# firebase setup

[Nitro Firebase preset](https://nitro.unjs.io/deploy/providers/firebase.html)


# Test 1 - Test build with firebase emulator running locally 

``` sh
yarn
yarn fb:build
yarn fb:emu:start
```

``` bash
❯ curl -iN http://localhost:5000/api/sse/demo
HTTP/1.1 200 OK
x-powered-by: Express
cache-control: no-cache
connection: keep-alive
content-type: text/event-stream
date: Mon, 01 Aug 2022 03:04:05 GMT
transfer-encoding: chunked
vary: Accept-Encoding, Authorization, Cookie

id: 6114c53a-e5ed-43b6-a23e-5dfef7454cb8
data: {"date":"2022-08-01T03:04:05.264Z","eventCount":0}

id: 6114c53a-e5ed-43b6-a23e-5dfef7454cb8
data: {"date":"2022-08-01T03:04:06.274Z","eventCount":1}

id: 6114c53a-e5ed-43b6-a23e-5dfef7454cb8
data: {"date":"2022-08-01T03:04:07.280Z","eventCount":2}

id: 6114c53a-e5ed-43b6-a23e-5dfef7454cb8
data: {"date":"2022-08-01T03:04:08.286Z","eventCount":3}

id: 6114c53a-e5ed-43b6-a23e-5dfef7454cb8
data: {"date":"2022-08-01T03:04:09.295Z","eventCount":4}

id: 6114c53a-e5ed-43b6-a23e-5dfef7454cb8
data: {"date":"2022-08-01T03:04:10.303Z","eventCount":5}

id: 6114c53a-e5ed-43b6-a23e-5dfef7454cb8
data: {"date":"2022-08-01T03:04:11.317Z","eventCount":6}

id: 6114c53a-e5ed-43b6-a23e-5dfef7454cb8
data: {"date":"2022-08-01T03:04:12.328Z","eventCount":7}

id: 6114c53a-e5ed-43b6-a23e-5dfef7454cb8
data: {"date":"2022-08-01T03:04:13.336Z","eventCount":8}

id: 6114c53a-e5ed-43b6-a23e-5dfef7454cb8
data: {"date":"2022-08-01T03:04:14.345Z","eventCount":9}

id: 6114c53a-e5ed-43b6-a23e-5dfef7454cb8
data: [DONE]
```

# Test 2 - test deployed firebase project

`yarn fb:deploy` To duplicate, refer to [firebase setup](#firebase-setup), also the project id in firebase.json "site" field would need to change.

This project id deployed to a firebase project at https://testdeleteme-7a825.web.app/api/sse/demo

Curl takes 10 seconds to complete. Unlike Azure all the data is there.

The notable differences between the emulator run and the deployment run are:

 - Data is not returned to the client as it is produced, It takes 10 seconds before content arrives all at the same time.
 -  The `transfer-encoding: chunked` header is missing

The notible difference between Firebase and Azure Static Web apps:

 - neither one works correctly
 - Azure response is missing data.
 - Firebase responce has all the data.
 - Neither one actually streams the data.
 - Azure swa emulator has the same results as a deployment
 - firebase emulator streams correctly, this behavior does not match a deployment.

``` bash
❯ curl -iN https://testdeleteme-7a825.web.app/api/sse/demo
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 1045
alt-svc: h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400
Cache-Control: no-cache
Content-Type: text/event-stream
Function-Execution-Id: fr4pmrnlbbp8
Server: Google Frontend
Strict-Transport-Security: max-age=31556926; includeSubDomains; preload
X-Cloud-Trace-Context: febc1cf5efe0766b9a1e791bfae24e02;o=1
X-Country-Code: US
Accept-Ranges: bytes
Date: Mon, 01 Aug 2022 03:14:02 GMT
X-Served-By: cache-pdx12323-PDX
X-Cache: MISS
X-Cache-Hits: 0
X-Timer: S1659323632.436528,VS0,VE10149
Vary: cookie,need-authorization, x-fh-requested-host, accept-encoding

id: b4b41838-def9-476f-ada9-473d56a85462
data: {"date":"2022-08-01T03:13:52.540Z","eventCount":0}

id: b4b41838-def9-476f-ada9-473d56a85462
data: {"date":"2022-08-01T03:13:53.542Z","eventCount":1}

id: b4b41838-def9-476f-ada9-473d56a85462
data: {"date":"2022-08-01T03:13:54.545Z","eventCount":2}

id: b4b41838-def9-476f-ada9-473d56a85462
data: {"date":"2022-08-01T03:13:55.547Z","eventCount":3}

id: b4b41838-def9-476f-ada9-473d56a85462
data: {"date":"2022-08-01T03:13:56.548Z","eventCount":4}

id: b4b41838-def9-476f-ada9-473d56a85462
data: {"date":"2022-08-01T03:13:57.549Z","eventCount":5}

id: b4b41838-def9-476f-ada9-473d56a85462
data: {"date":"2022-08-01T03:13:58.551Z","eventCount":6}

id: b4b41838-def9-476f-ada9-473d56a85462
data: {"date":"2022-08-01T03:13:59.552Z","eventCount":7}

id: b4b41838-def9-476f-ada9-473d56a85462
data: {"date":"2022-08-01T03:14:00.554Z","eventCount":8}

id: b4b41838-def9-476f-ada9-473d56a85462
data: {"date":"2022-08-01T03:14:01.555Z","eventCount":9}

id: b4b41838-def9-476f-ada9-473d56a85462
data: [DONE]
```