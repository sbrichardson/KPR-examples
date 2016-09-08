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
import { model } from "main";
import { ButtonBehavior } from "behavior";
import { Tuner } from "tuner";
import { VolumeDialogBox } from "volume";
import { PUBNUB } from "pubnub";

import {
	MenuOpenTransition,
	MenuCloseTransition
} from "transitions";

import {
	PUBNUB_PUBLISH_KEY,
	PUBNUB_SUBSCRIBE_KEY,
	PUBNUB_CHANNEL,
	channels
} from "credentials";

let USE_PUBNUB = ((PUBNUB_PUBLISH_KEY != "YOUR_PUB_KEY_HERE") && (PUBNUB_SUBSCRIBE_KEY != "YOUR_SUB_KEY_HERE"))? true : false;

let radioTitleStyle = new Style({ color: 'white', font: '32px Fira Sans Light', horizontal: 'center', vertical: 'middle', });

let defaultImages = [

let customEffectIndex = 0;


let Collage = Container.template($ => ({ 
	left: 0, right: 0, top: 0, bottom: 0, 
	Behavior: CollageBehavior, 
	contents: [ Content($, {}) ] 
}));


class CollagePictureBehavior extends Behavior {

class CollageTransition extends Transition {


let RadioBehaviors = new Array(6);
            if (USE_PUBNUB) {
	            this.pubnub.publish({
            }
  		if (USE_PUBNUB) {
		 }

export var Radio = Container.template($ => ({ 
	left: 0, right: 0, top: 0, bottom: 0, 
	Behavior: RadioBehaviors[0], 
	contents: [
	  			left: 0, width: 320, top: 0, height: 40, active: true, 
	  			Behavior: RadioBehaviors[2], 
	  		}),
	  			left: 0, right: 0, top: 0, height: 40, 
	  			active: true, visible: false, clip: true, 
	  			Behavior: RadioBehaviors[3],
	  			contents: [
				loop: true, 
			}),
	  			left: 0, height: 40, bottom: 0, style: nfcTokenStyle, 
	  			Behavior: RadioBehaviors[4], 
	  			string: '[...]', 
	  		}),
	  			width: 40, right: 0, height: 40, bottom: 0, active: true, 
	  			Behavior: RadioBehaviors[5], 
	  			contents: [
			}),
}));