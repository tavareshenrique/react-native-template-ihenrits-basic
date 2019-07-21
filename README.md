# React Native Template ihenrits-basic

This project aims to create a model that can be used at the time of creating projects using React Native, taking into account that the process of creating the development environment requires some time delaying the development process.

## Running

    react-native init AwesomeExample --template ihenrits-basic

## What was used

- React Native;
- React Navigation;
- React Native Gesture Handler;
- Async Storage;
- Axios;
- Prop-Types;
- Styled-Components;
- Reactotron;
  - reactotron-react-native;
- EditorConfig;
- Babel;
  - babel-eslint;
  - babel-plugin-root-import;
- Eslint;
  - eslint-config-airbnb;
  - eslint-plugin-import;
  - eslint-plugin-jsx-a11y;
  - eslint-plugin-react;
  - eslint-plugin-react-native;
  - eslint-import-resolver-babel-plugin-root-import;

## Instructions

- Delete the `App.js` file that is in the root of the project.(The `"App.js"` that you will use is located in the `src` folder with the name `index.js`);
- If you want to use React DevTools add `"react-devtool": "react-devtools"` in your script in `package.json`
- A few more steps needed for Android:
  - Copy the `local.properties` file that is in the root of the project and paste it into the `android` folder.
  - Change the path of your `Sdk` folder in the `local.properties` file.
  - Go to the: `android > app > src > main > java > com > your_project_name > MainActivity.java`
  - Access: https://reactnavigation.org/docs/en/getting-started.html
  - Follow the instructions to add the required codes in `MainActivity.java`
  - All ready!

## File Structure

```
ihenrits-basic
├── src/
│   ├── config/
│   │   └── DevToolsConfig.js
│   │   └── ReactotronConfig.js
│   ├── images/
│   ├── pages/
│   │   └── Main/
│   │       └── index.js
│   │       └── styles.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── colors.js
│   │   └── index.js
│   │   └── metrics.js
│   ├── index.js
│   └── routes.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.json
├── LICENSE
├── package.json
└── README.md
```

## Changelog

* [1.0.0]()

## Contributing

* [Contributing]()

## Contributor

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars1.githubusercontent.com/u/27022914?v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Henrique Tavares</b>
        </sub>
       </a>
       <br />
       <a href="https://github.com/tavareshenrique/app-gobarber/commits?author=tavareshenrique" title="Code">@tavareshenrique</a>
    </td>
  </tr>
</table>

