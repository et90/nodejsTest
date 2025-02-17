const ModbusRTU = require("modbus-serial");
const client = new ModbusRTU();

// open connection to a serial port
client.connectRTUBuffered("COM3", { baudRate: 9600 });
client.setID(1);

// read the values of 10 registers starting at address 0
// on device number 1. and log the values to the console.
setInterval(function() {
    client.readHoldingRegisters(0, 10, function(err, data) {
        console.log(data.data);
    });
}, 1000);