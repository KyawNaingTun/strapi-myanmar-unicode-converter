<p align="center">
  <a href="https://github.com/KyawNaingTun/strapi-myanmar-unicode-converter">
    <img src="https://raw.githubusercontent.com/KyawNaingTun/strapi-myanmar-unicode-converter/master/screenshots/logo.png" width="100px" alt="Strapi Myanmar Unicode Converter logo" />
  </a>
</p>

<h3 align="center">Strapi Myanmar Unicode Converter</h3>
<br><br>

## Installation
To install this plugin, you need to add an NPM dependency to your Strapi application:

```sh
# Using Yarn
yarn add @kyawnaingtun/strapi-myanmar-unicode-converter

# Or using NPM
npm install@kyawnaingtun/strapi-myanmar-unicode-converter
```

enable the plugin at ```src/config/plugin.js```

```javascript
"strapi-myanmar-unicode-converter": {
    enabled: true,
}
```

Then, you'll need to build your admin panel:

```sh
# Using Yarn
yarn build

# Or using NPM
npm run build
```

## How to use?

1). First, enable in collection type 

<p align="center">
  <a href="https://github.com/KyawNaingTun/strapi-myanmar-unicode-converter">
    <img src="https://raw.githubusercontent.com/KyawNaingTun/strapi-myanmar-unicode-converter/master/screenshots/collection-enable.png" alt="Enable in collection type" />
  </a>
</p>

<br>

2). Then, enable in attribute type. Note: supported only ```Text and Rich Text```

<p align="center">
  <a href="https://github.com/KyawNaingTun/strapi-myanmar-unicode-converter">
    <img src="https://raw.githubusercontent.com/KyawNaingTun/strapi-myanmar-unicode-converter/master/screenshots/attribute-enable.png" alt="Enable in attribute type" />
  </a>
</p>

<br>