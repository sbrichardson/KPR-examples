/*
  Copyright 2011-2016 Marvell Semiconductor, Inc.

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
import { channels } from "credentials";
import { Radio } from "radio";		

let Pins = require("pins");

	onComplete: function(handler, message, text) {
		let value;
		handler.invoke(message, Message.TEXT);	

/* =-====================================================================-= */
application.style = new Style({ color: 'white', font: '18px Fira Sans', horizontal: 'left', vertical: 'middle', });

		Pins.configure({
		}, success => {
			if (success) {
				Pins.repeat("/nfc/poll", 100, result => {
					var data = model.data.nfc;
									Pins.invoke("/nfc/mifare_CmdRead", {page: 4});
									Pins.invoke("/nfc/mifare_CmdWrite", {page: 4, data: bytes});
						});
						
						channels.some(function(channel, index) {
				});
			} else {
			 	trace("Failed to configure pins.\n");
			}
		});
			
		

