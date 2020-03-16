# pi_scalextric_t1_spwa
SPWA for Pi Scalextric by Team 1!

https://liveprojects-julien.github.io/pi_scalextric_t1_spwa/docs/index.html#!/index?brokerPort=443&brokerHost=thedigitallabsmqtt.herokuapp.com&uuid=testUUID&ssl=true

Single Page Web Application (SPWA) to control the pi scalextric

# Deployment

To pass the broker details to the SPWA can be done either 2 ways

- Via the url parameters
- Via environment variables

*For most cases you should only use the url parameters method. Using environment variables allows for quick testing* 

#### Enironment Variables

| Variable      | Description  |
| ------------- |:-------------:|
| UUID   | Pi id|
| SSL    | True to use ssl|
| BROKERHOST   | Broker Host|
| BROKERPORT   | Broker Port|
| USERNAME   | Broker Username|
| PASSWORD   | Broker Password|

#### Url Parameters

| Variable      | Description  |
| ------------- |:-------------:|
| uuid   | Pi id|
| SSL    | True to use ssl|
| brokerHost   | Broker Host|
| brokerPort   | Broker Port|
| username   | Broker Username|
| password   | Broker Password|


*Example https://liveprojects-julien.github.io/pi_scalextric_t1_spwa/docs/index.html#!/index?brokerPort=443&brokerHost=thedigitallabsmqtt.herokuapp.com&uuid=testUUID&ssl=true*

<img src="https://github.com/liveprojects-julien/pi_scalextric_t1_spwa/blob/master/QR-Code.png" width="200">

*Note your browser will wrongly assume that the SPWA is trying to load unsafe scripts, you must allow the scripts to load for the application to work* 


## Deploying Server 

### Express
To host SPWA using express.

```
 [ENV_VAR]:[VALUE] node server.js
```

---

### http-server

If using environment variables

```
[ENV_VAR]:[VALUE] node writePiConfig.js
```


```
sudo npm install http-server -g
http-server --cors
```


*To run on https read https://digitallabs.mmu.ac.uk/taming-the-urban-wild/#more-1657*

---

### WebIOPi
To serve a custom index.html file, the config file must be modified

```nano /etc/webiopi/config```

Under the HTTP section modify to match below (leave other details untouched)

```
enabled = true
doc-root = PATH_TO_INDEX.HTML_FOLDER
welcome-file = index.html
``` 

If using environment variables

```
node writePiConfig.js
```


---


This is the work of Aubrey Monk, Munashe Matadi, Hamza Khan.
Some Source code from: [Yusof Bandar](https://github.com/YusofBandar) with [DigitalLabs@MMU](https://digitallabs.mmu.ac.uk/).




