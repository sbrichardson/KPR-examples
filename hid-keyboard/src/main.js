/*
import HID from "HID";
let SYS_KEYBOARD = require("keyboard");
let HID_KEYBOARD = new HID.Keyboard();

application.behavior = Behavior({
	onDisplayed: function(application) {
		application.skin = new Skin({ fill:"white" });
		SYS_KEYBOARD.show();
	},
	onKeyDown: function(application, key, repeat, ticks) {
			var code = key.charCodeAt(0);
				HID_KEYBOARD.sendSpecial(0x2A, 1);
				HID_KEYBOARD.sendSpecial(0x28, 1)
				HID_KEYBOARD.sendSpecial(0x2A, 1);
				if ((Event.FunctionKeyPlay <= code) && (code <= Event.FunctionKeyPower)) {
				}
				}
				HID_KEYBOARD.sendKey(key);
})
