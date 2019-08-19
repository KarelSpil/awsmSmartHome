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
        return true;
    } else {
        return false;
    }
};
RobotVacuumCleaner.prototype.on = function () {
    this._status = true;
};
RobotVacuumCleaner.prototype.off = function () {
    this._status = false;
};

RobotVacuumCleaner.prototype.getStatusCleanMode = function () {
    return this._cleanMode;
};
RobotVacuumCleaner.prototype.setStatusCleanMode = function (bool) {
    if (typeof bool == 'boolean' && this._cleanMode != bool) {
        this._cleanMode = bool;
    } else {
        this._cleanMode = false;
    }
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
