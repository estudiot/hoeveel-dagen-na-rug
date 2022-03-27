# Nextjs / NetlifyCMS Template

# Setup steps

- Create new repo with this template
- Connect repo with Netlify
- Enable Netlify Identity
  - Go to the Netlify portal > Sites > The new site
  - Go to Site settings > Identity
  - Hit `Enable identity`
  - Update External provider to use GitHub (Default configuration)
  - Enable Git Gateway
- Optionally rename the site in Netlify
  - General > Site Settings > Rename site

## Install and running the app

Install the app

- `yarn install`
- `cp .env.example .env`

CLI commands:

- `yarn dev` or `yarn watch`: run the app in development mode: http://localhost:3000
- `yarn run start`: run the app in production mode

### How to setup Netlify Large Media

To be added

### Editor setup

For a nicer dev experience install the `ESLint`, `StyleLint` and `Prettier` extentions.

Also you can update the settings for VS-code:

```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

## Documentation strategy

- **TypeScript** Types define all types used in the application, also the content that's passed through the pages.
- Each function contains a **JSDOC** to describe the purpose of the function if it's deemed necessary by the developer.
- Each folder contains a separate **readme** to document it's purpose and possible, the relevant folders within it.

## Folder structure

To be added

## Architecture

To be added

## Import order

Given each page or component can contain a lot of dependencies, it's advisable to order the dependencies based on type. Below you can find the correct order, each should be imported with a newline between them.

- **Root dependencies**: mostly lives in the node-modules and are included in the package.json
- **Interfaces**: Lives inside the interface folder
- **Content/Context**: Lives inside the interface folder
- **Mock**: Mock data, mostly lives in the mock folder
- **Config**: Static configuration
- **Utils**: Simple utils functions
- **Components**: Lives inside the components folder, preferably included in order: Flexibles, Modules, Parts.
- **Styles**: Lives inside same folder as the corresponding component
