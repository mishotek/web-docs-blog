let fs = require('fs');

const {elementTag, dir, className, filePath, appElementPath} = getComponentInfo();
const componentFileName = `${filePath}/${elementTag}.ts`
const styleFileName = `${filePath}/${elementTag}.style.ts`;

checkForFile(componentFileName, (exists) => {
  if (exists) {
    throw new Error(`File ${elementTag}.ts already exists!`);
  }

  fs.mkdirSync(dir);

  fs.writeFileSync(componentFileName, componentTemplate(elementTag, className, appElementPath), (error) => {
    throw new Error(error);
  });

  fs.writeFileSync(styleFileName, styleTemplate(), (error) => {
    throw new Error(error);
  });
});


function getComponentInfo() {
  const componentName = process.argv[2];

  if (typeof componentName !== 'string') {
    throw new Error('Please specify component name. Eg. npm run gc my-component');
  }

  const elementTag = `app-${componentName.toLowerCase()}`;
  const className = tagNameToClassName(elementTag);
  const dir = `${process.env.INIT_CWD}/${elementTag}`;
  const filePath = `${process.env.INIT_CWD}/${elementTag}`;
  const appElementPath = getAppElementPath();
  return {elementTag, dir, className, filePath, appElementPath};
}

function checkForFile(fileName, callback) {
  fs.stat(fileName, function (error, stats) {
    callback(!!stats);
  });
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function tagNameToClassName(str) {
  return str
    .split('-')
    .map(word => word ? capitalize(word) : '')
    .join('');
}

function getAppElementPath() {
  const depth = process.env.INIT_CWD
    .replace(/^.*\\app/, '')
    .split('')
    .filter(char => char === '\\')
    .length + 1;

  return '../'.repeat(depth) + 'app-element';
}

// language=TypeScript
const componentTemplate = (elementTag, className, appElementPath) => `import {customElement, html, css, property} from "lit-element";
import {AppElement} from "${appElementPath}";
import {style} from './${elementTag}.style';

@customElement('${elementTag}')
export class ${className} extends AppElement {

    static get style() {
        return style;
    }

    public render() {
        // language=HTML
        return html\`<p>${elementTag} works!</p>\`;
    }
}
`;

// language=TypeScript
const styleTemplate = () => `import {css} from "lit-element";

// Language=CSS
export const style = css\`
    
\`;
`;
