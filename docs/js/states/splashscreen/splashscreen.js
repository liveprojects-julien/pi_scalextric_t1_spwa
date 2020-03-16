(function () {
    'use strict';

    angular
        .module('mainjs')
        .controller('splashscreenCtrl', splashscreenCtrl);

    splashscreenCtrl.$inject = [
        '$state',
        'mqttService',
        'brokerDetails',
        'messageService',
        'uuid',
        'aloneService'
        ];
    
    function splashscreenCtrl(
        $state,
        mqttService,
        brokerDetails,
        messageService,
        uuid,
        aloneService
    ) {
        var vm = this;
        var hash = uuid.v4();
        
        vm.update = function(){
            
            console.log(brokerDetails);

            //initialise mqtt (paho shell) and message service (mqtt service shell)
            mqttService.initialize(brokerDetails.HOST, brokerDetails.PORT);

            messageService.initialize();

            //set listeners for new message and for resubscribing too topics
            mqttService.setMessageListener(messageService.onNewMessage);
            
            mqttService.setResubscribeListener(messageService.resubscribe);

            //set mqtt options using broker details passed in from url
            var mqttOptions = {};

            if (brokerDetails.SSL) { mqttOptions.useSSL = brokerDetails.SSL; }
            if (brokerDetails.USERNAME) {
                mqttOptions.userName = brokerDetails.USERNAME;
                if(brokerDetails.PASSWORD){
                    mqttOptions.password = brokerDetails.PASSWORD;
                }
            }

            //connect to mqtt
            mqttService.connect(function (success, error) {
                if (success) {
                    console.log("mqtt connect success");
                    //initialise alone service
                    aloneService.initialize(hash);
                    $state.go('homepage');
                } else if (error) {
                    console.log(error)
                    alert(`Could Not Connect to ${brokerDetails.HOST}:${brokerDetails.PORT}`)
                }

            },mqttOptions)

        }

    }
})();
