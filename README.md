<p align="center">
  <a href="https://github.com/KarelSpil/awsmSmartHome/new/master?readme=1#awsmsmarthome">
      <img alt="logo" src="https://imgshare.io/images/2019/08/26/1566845462045.png" width="150" height="150">
  </a>
  <h1 align="center">awsmSmartHome</h1>
  <p align="center">The testing project for the JS course.</p>
</p>

---
**awsmSmartHome** is a small test project for JS course, but thanks to this project I met with:

- **Object Oriented Programming**: I figured out this methodology and realized what it is based on.
- **ECMA2015**: I felt and figured out in the 6th Edition - ECMAScript 2015, I realized how much ECMA appeared in 2015.
- **JS**: I understood the simplicity and flexibility of the JavaScript language.

## Documentation

#### Drawing

All `class` have own drawing
>RobotVacuumCleaner
```
Class RobotVacuumCleaner
  State :
        _name : String
        _status : Boolean
        _cleanMode : Boolean
        _statusGarbageBag : Number
        _statusBattery : Number

  Behaviour :
        getStatus () : String
        on () : void
        off () : void
        getStatusCleanMode () : Boolean
        setStatusCleanMode (args: Boolean) : void
        getStatusGarbageBag () : Number
        addTrash (args : Number) : void
        cleanGarbageBag () : void
        getStatusBatteryCharge () : Number
        goToCharge (args : Number) : void
```
>Fan
```
Class Fan
    State :
        _name : String
        _status : Boolean
        _mods : [String, String, String, .....]
        _currentMode: Number
    Behaviour :
        getStatus () : void
        on () : void
        off () : void
        getCurrentMode () :  String
        nextMode () : void
        previousMode () : void
```
>Home
```
class Home
    State :
        _address: string
        _devices: []
    Behaviour :
        getAddress(): string
        setAddress(string): void
        addDevice(device): void
        getDeviceByName(string): device
        getAllDevices(): [device]
        deleteDeviceByName(string): void
```

#### Declared class

Each `class` in the code is already declared.
```js
//GeneralClass 
const gc = new GeneralClass('General');

//RobotVacuumCleaner
const rvc = new RobotVacuumCleaner('vacuum');

//Fan
const fan = new Fan ('fan');

//Home
const myHome = new Home ();
```
