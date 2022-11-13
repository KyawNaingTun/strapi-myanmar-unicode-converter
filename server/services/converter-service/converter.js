const google_myanmar_tools = require("myanmar-tools"); 
module.exports = {
	convertToUnicode(fieldValue) {
		let value = fieldValue;

    const converter = new google_myanmar_tools.ZawgyiConverter();
    const detector = new google_myanmar_tools.ZawgyiDetector();
    const score = detector.getZawgyiProbability(fieldValue);
		// check probability score
    if(score > 0.8){
      value = converter.zawgyiToUnicode(fieldValue);
    }
		return value;
  },
};
