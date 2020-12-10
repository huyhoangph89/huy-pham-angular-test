# Zip Web Fonts

### This contains all of the zip icons and fonts  

Any changes made to master will automatically update the npm package

## One time setup to use private npm registry:

```
npm login --registry=https://www.myget.org/F/zip-private-feed/npm/ --scope=@zip

Username: 1Password - under "NPM Private Registry"
Password: 1Password - under "NPM Private Registry"
Email: Your zip email
```

# Installation:

Install the package with:
```
npm install @zip/web.styles
```

Import Sass variables using:
```
@import '~@zip/web.styles/variables';
```

Import base rule set using:
```
@import '~@zip/web.styles/base';
```