//@module

/* UI */
var ButtonBehavior = Behavior.template({

var glyphTexture = (screenScale == 2) ? new Texture('./assets/core-glyph-strip-60px.png', 2) : (screenScale == 1.5) ? new Texture('./assets/core-glyph-strip-60px.png', 2) : new Texture('./assets/core-glyph-strip-60px.png', 2);
var disabledEffect = new Effect();

var DynamicSkin = function(texture, disabledEffect, enabledEffect, selectedEffect, variantWidth, tiles, margins, aspect) {

var glyphSkin = new DynamicSkin(glyphTexture, disabledEffect, enabledEffect, selectedEffect);







