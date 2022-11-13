const getService = (name) => {
  return strapi.plugin("content-manager").service(name);
};

const getModels = async () => {
	const collectionTypes = getService("content-types").findContentTypesByKind("collectionType");
	const singleTypes = getService("content-types").findContentTypesByKind("singleType");
	const contentTypes = [...collectionTypes, ...singleTypes];
    const { toDto } = getService("data-mapper");
    const contentTypesMappedToDto = contentTypes.map(toDto);
		// console.log('CT out', contentTypesMappedToDto);
		// return contentTypesMappedToDto;
    const filteredContentTypes = contentTypesMappedToDto.filter(
      (item) => 
        item.pluginOptions?.unicode_converter?.enabled == true
    );

    return filteredContentTypes;
};

module.exports = {
	getModels,
};
