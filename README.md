# pi_scalextric_t1_spwa
SPWA for Pi Scalextric by Team 1!


APP HOSTED HERE!:
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


---


This is the work of Aubrey Monk, Munashe Matadi, Hamza Khan.
Some Source code from: [Yusof Bandar](https://github.com/YusofBandar) with [DigitalLabs@MMU](https://digitallabs.mmu.ac.uk/).




