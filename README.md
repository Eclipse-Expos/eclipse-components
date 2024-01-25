# Component Library

## Publishing the Library

1. Create an npm account for eclipse expos

2. Change the "realtristan" in package.json, package-lock.json, and .npmrc to the eclipse expos npm account username

3. Login to npm from the terminal using a github token: `npm login --registry=https://npm.pkg.github.com`

- Enter the username as your github username and the github token as the password
- You can generate a GitHub Personal Access Token here: `https://github.com/settings/tokens`

4. Publish the library `npm publish --access public`

All Tutorials can be found below:

```
1. https://dev.to/bornfightcompany/create-and-publish-your-own-react-library-3cc8
2. https://www.airplane.dev/blog/how-to-build-a-react-component-library
```
