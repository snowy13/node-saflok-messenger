var global 
    message = {
    stx: "02",
    etx: "03",
    pfc: "3230",
    toStationNumber: "3031",
    fromStationNumber: "3031",
    pmsTerm: "303031",
    txID: "303031",
    saflokPass: "32353020202020",
    keyNumber: "4131303120",
    keyLevel: "31",
    encoderStation: "3031",
    encoderLED: "4646",
    numberOfKeys: "3031",
    setExpiration: function(expiryDate, expiryTime) {
        this.checkoutDate = expiryDate;
        this.checkoutTime = expiryTime;
        this.expiryDate =  expiryDate;
        this.expiryTime = expiryTime;
        return 0;
    },
    calculateLrc: function() {
        this.lrc = "56";
        return 0;
    },
    buildRequestMsg: function() {
    	return this.stx + this.pfc + 
    	       this.toStationNumber + 
    	       this.fromStationNumber + 
    	       this.pmsTerm + 
    	       this.txID +  
    	       this.saflokPass +
    	       this.keyNumber + 
    	       this.keyLevel +
    	       this.encoderStation +
    	       this.encoderLED +
    	       this.numberOfKeys +
    	       this.checkoutDate +
    	       this.checkoutTime +
    	       this.expiryDate +
    	       this.expiryTime +
    	       this.etx +
    	       this.lrc;
    }
};