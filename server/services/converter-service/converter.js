const google_myanmar_tools = require("mm-tools-client-js"); 
const { pluginId } = require('../../utils/pluginId');

module.exports = {
	convertToUnicode(fieldValue) {
		let value = fieldValue;

    const converter = new google_myanmar_tools.ZawgyiConverter();
    const detector = new google_myanmar_tools.ZawgyiDetector();
    const score = detector.getZawgyiProbability(fieldValue);
		// check probability score
    const detectorScore = strapi.plugin(pluginId).config('score');
    console.log('detectorScore =', detectorScore);

    if(score >= detectorScore){
      value = converter.zawgyiToUnicode(fieldValue);
    }
		return value;
  },
};
