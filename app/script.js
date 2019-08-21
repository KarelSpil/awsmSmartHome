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
    this._status           = false;
    this._cleanMode        = false;
    this._statusGarbageBag = 0;
    this._statusBattery    = 100;
};

RobotVacuumCleaner.prototype.getStatus = function () {
    return this._status;
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
RobotVacuumCleaner.prototype.addTrash = function (addTrashPercent) {
    if (this.__isNumber (addTrashPercent)) {
        if (this._statusGarbageBag + addTrashPercent < 100) {
            this._statusGarbageBag += addTrashPercent;
        } else {}
    }
};
RobotVacuumCleaner.prototype.__isNumber = function (value) {
    if (typeof value == 'number' && !isNaN(value)) {
        return true;
    }
    return false;
};
RobotVacuumCleaner.prototype.cleanGarbageBag = function () {
    this._statusGarbageBag = 0;
};

RobotVacuumCleaner.prototype.getStatusBatteryCharge = function () {
    return  this._statusBattery;
};
RobotVacuumCleaner.prototype.goToCharge = function (batteryPercent) {
    for (var i = 0; this._statusBattery < 100; ++i){
        if (this.__isNumber(batteryPercent) && batteryPercent < 100){
            this._statusBattery = batteryPercent;
        };
        this._statusBattery += i;
    };
};

var rvc = new RobotVacuumCleaner();

/*Класс Fan

    Поведение :
        _status : Boolean
        _mods : [String, String, String, .....]
        _currentMode: String
        __currentIndex : Number

    Состояние :
        getStatus () : void
        on () : void
        off () : void

        getCurrentMode () :  String
        nextMode () : void
        previousMode () : void */

function Fan () {
    this._status        = false;
    this._mods          = ['Speed 1', 'Speed 2', 'Speed 3', 'Speed 4', 'Speed 5'];
    this._currentMode   = 'Speed 1';
    this.__currentIndex = null;
};

Fan.prototype.getStatus = function () {
    return this._status;
};
Fan.prototype.on = function () {
    this._status = true;
};
Fan.prototype.off = function () {
    this._status = false;
};

Fan.prototype.getCurrentMode = function () {
    return this._currentMode;
};
Fan.prototype.nextMode = function () {
    this.__getIndex(this._mods, this._currentMode);
    if(this.__currentIndex >= this._mods.length - 1) {
        this._currentMode = this._mods[0];
        this.__currentIndex = null;
    } else {
        this._currentMode = this._mods[++this.__currentIndex];
    }
};
Fan.prototype.previousMode = function () {
    this.__getIndex(this._mods, this._currentMode);
    if(this.__currentIndex == 0) {
        this._currentMode = this._mods[this._mods.length - 1];
        this.__getIndex(this._mods, this._currentMode);
    } else {
        this._currentMode = this._mods[--this.__currentIndex];
    }
};
Fan.prototype.__getIndex = function (arr, currentMod) {
    this.__currentIndex = arr.indexOf(currentMod);
};

var fan = new Fan ();

