'use strict';

/*Класс RobotVacuumCleaner
    
    Состояние:
        _status : Boolean
        _cleanMode : Boolean
        _statusGarbageBag : Number
        _statusBattery : Number
    
    Поведение:
        getStatus () : String
        on () : void
        off () : void

        getStatusCleanMode () : Boolean
        setStatusCleanMode (args: Boolean) : void

        getStatusGarbageBag () : Number
        addTrash (args : Number) : void
        cleanGarbageBag () : void

        getStatusBatteryCharge () : Number
        goToCharge (args : Number) : void */

function RobotVacuumCleaner () {
    this._status = false;
    this._cleanMode = false;
    this._statusGarbageBag = 0;
    this._statusBattery = 100;
};

RobotVacuumCleaner.prototype.getStatus = function () {
    if (this._status === true) {
        console.log('Robot vacuum cleaner power on and ready to get started.');
    } else {
        console.log('Robot vacuum cleaner power off.');
    }
};
RobotVacuumCleaner.prototype.powerOn = function () {
    this._status = true;
};
RobotVacuumCleaner.prototype.powerOff = function () {
    this._status = false;
};

RobotVacuumCleaner.prototype.getStatusCleanMode = function () {
    if (this._cleanMode === true) {
        console.log('Robot vacuum cleaner started cleaning.');
    } else {
        console.log('Robot vacuum cleaner does not clean at the moment.');
    }
};
RobotVacuumCleaner.prototype.setStatusCleanMode = function (bool) {
    (typeof bool =='boolean' && this._cleanMode != bool) ?
        this._cleanMode = bool : this._cleanMode = false;
};

RobotVacuumCleaner.prototype.getStatusGarbageBag = function () {
    return this._statusGarbageBag;
};
RobotVacuumCleaner.prototype.__isCorrectParam = function (value) {
    if (typeof value == 'number' && !isNaN(value)) {
        return true;
    }
    return false;
};
RobotVacuumCleaner.prototype.addTrash = function (addTrashPercent) {
    if (this.__isCorrectParam (addTrashPercent)) {
        if (this._statusGarbageBag >= 0 && this._statusGarbageBag < 100) {
            this._statusGarbageBag += addTrashPercent;
        } else {
            console.log('Garbege Bag is full, please use method cleanGarbageBag ().');
        }
    }
};
RobotVacuumCleaner.prototype.cleanGarbageBag = function () {
    this._statusGarbageBag = 0;
    console.log('I cleared my garbage bag and my status Garbage Bag = ' + this._statusGarbageBag + '.');
};

RobotVacuumCleaner.prototype.getStatusBatteryCharge = function () {
    return  this._statusBattery;
};
RobotVacuumCleaner.prototype.goToCharge = function (chargePercent) {
    if (this.__isCorrectParam (chargePercent) && chargePercent <= 20) {
	this._statusBattery = chargePercent;
	for (var i = 0; this._statusBattery <= 100; i++) {
		this._statusBattery += i;
	};
	console.log('The battery is charged to ' + this._statusBattery + '%.');
    } else if (this.__isCorrectParam (chargePercent) && this._statusBattery > 20) {
		console.log('No battery charge required.');
    }
};


var rvc = new RobotVacuumCleaner();

/*Класс Fan

    Поведение :
        _status : Boolean
        _currentMode: String
        _mods : [String, String, String, .....]

    Состояние :
        getStatus () : void
        on () : void
        off () : void

        getCurrentMode () :  String
        nextMode () : void
        previousMode () : void */
