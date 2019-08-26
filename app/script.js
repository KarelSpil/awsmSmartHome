'use strict';

class GeneralClass {
    constructor (name) {
        this._name   = name;
        this._status = false;
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
};
const gc = new GeneralClass('General');
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
class RobotVacuumCleaner extends GeneralClass {
    constructor(name) {
        super(name);
        this._cleanMode        = false;
        this._statusGarbageBag = 0;
        this._statusBattery    = 100;
    }
    getStatusCleanMode() {
        return this._cleanMode;
    }
    setStatusCleanMode(bool) {
        if (typeof bool == 'boolean' && this._cleanMode != bool) {
            this._cleanMode = bool;
        }
        else {
            this._cleanMode = false;
        }
    }
    getStatusGarbageBag() {
        return this._statusGarbageBag;
    }
    addTrash(addTrashPercent) {
        if (this.__isNumber(addTrashPercent)) {
            if (this._statusGarbageBag + addTrashPercent < 100) {
                this._statusGarbageBag += addTrashPercent;
            };
        };
    }
    __isNumber(value) {
        if (typeof value == 'number' && !isNaN(value)) {
            return true;
        }
        return false;
    }
    cleanGarbageBag() {
        this._statusGarbageBag = 0;
    }
    getStatusBatteryCharge() {
        return this._statusBattery;
    }
    goToCharge(batteryPercent) {
        for (var i = 0; this._statusBattery < 100; ++i) {
            if (this.__isNumber(batteryPercent) && batteryPercent < 100) {
                this._statusBattery = batteryPercent;
            }
            this._statusBattery += i;
        };
    }
};

const rvc = new RobotVacuumCleaner("vacuum");

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

class Fan extends GeneralClass {
    constructor(name) {
        super(name);
        this._mods          = ['Speed 1', 'Speed 2', 'Speed 3', 'Speed 4', 'Speed 5'];
        this._currentMode   = 0;
    }
    getCurrentMode () {
        return this._mods[this._currentMode];
    }
    nextMode () {
        if(this._currentMode >= this._mods.length - 1) {
            this._currentMode = 0;
        } else {
            ++this._currentMode;
        };
    }
    previousMode () {
        if(this._currentMode == 0) {
            this._currentMode = this._mods.length - 1;
        } else {
            --this._currentMode;
        };
    }
};
const fan = new Fan ('fan');

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
        }
    }
    // addDevice (device) {
    //     this._devices.push(device);
    // }
    // getDeviceByName (string) {
    //     function returnArrValue (value) {
    //         if (value.hasOwnProperty('_name') && value._name === string) {
    //             return value;
    //         } else {};
    //     };
    //     return this._devices.forEach(returnArrValue);
    // }
    // getAllDevices () {
    //     return this._devices;
    // }
    // deleteDeviceByName () {
    
    // }
}

const myHome = new Home ();
