//@module
/*
  Copyright 2011-2014 Marvell Semiconductor, Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
let PinsSimulators = require("PinsSimulators");

exports.pins = {
    led: {type: "Digital", direction: "output"}
};

exports.configure = function() {
	this.pinsSimulator = shell.delegate("addSimulatorPart", {
		header : { 
			label : "Digital Light Websockets Server", 
			name : "Digital Output", 
			iconVariant : PinsSimulators.SENSOR_LED 
		},
		axes : [
			new PinsSimulators.DigitalOutputAxisDescription(
				{
					valueLabel : "LED",
					valueID : "ledValue"
				}
			),
		]
	});
}

exports.turnOn = function() {
	this.setValue(1);				
}
		
exports.turnOff = function() {
	this.setValue(0);				
}

exports.setValue = function(value) {
	this.pinsSimulator.delegate("setValue", "ledValue", value);
}

exports.close = function() {
	shell.delegate("removeSimulatorPart", this.pinsSimulator);
}