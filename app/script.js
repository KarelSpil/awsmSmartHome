'use strict';

/*Класс RobotVacuumCleaner
    
    Состояние:
        _name : String
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

function RobotVacuumCleaner (name) {
    this._name             = name;
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
        } else {};
    };
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
        } else {};
        this._statusBattery += i;
    };
};

var rvc = new RobotVacuumCleaner("vacuum");

/*Класс Fan

    Поведение :
        _name : String
        _status : Boolean
        _mods : [String, String, String, .....]
        _currentMode: Number

    Состояние :
        getStatus () : void
        on () : void
        off () : void

        getCurrentMode () :  String
        nextMode () : void
        previousMode () : void */

class Fan {
    constructor(name) {
        this._name          = name;
        this._status        = false;
        this._mods          = ['Speed 1', 'Speed 2', 'Speed 3', 'Speed 4', 'Speed 5'];
        this._currentMode   = 0;
    }
    getStatus () {
        return this._status;
    }
    on () {
        this._status = true;
    }
    off () {
        this._status = false;
    }
    getCurrentMode () {
        return this._mods[this._currentMode];
    }
    nextMode () {
        if(this._currentMode >= this._mods.length - 1) {
            this._currentMode = 0;
        } else {
            this._currentMode = ++this._currentMode;
        };
    }
    previousMode () {
        if(this._currentMode == 0) {
            this._currentMode = this._mods.length - 1;
        } else {
            this._currentMode = --this._currentMode;
        };
    }
};

var fan = new Fan ('fan');

/*class Home
    state
        _address: string
        _devices: []
    behaviour
        getAddress(): string
        setAddress(string): void

        addDevice(device): void
        getDeviceByName(string): device
        getAllDevices(): [device]
        deleteDeviceByName(string): void */

class Home {
    constructor () {
        this._address = '';
        this._devices = [];
    }
    get address () {
        return this._address;
    }
    set address (value) {
        if (typeof value === 'string') {
            this._address = value;
        } else {}
    }
    addDevice (device) {
        this._devices.push(device);
    }
    getDeviceByName (string) {
        return this._devices.indexOf(string);
    }
    getAllDevices () {
        return this._devices;
    }
    // deleteDeviceByName (string) {
    //     this._devices.forEach((object){

    //     })
    // }
}

const myHome = new Home ();
