# vaahnuxt

> Boilerplate of NuxtJs+Buefy+Laravel Authentication

## Setup Process on local system

- Clone the repository
- Turn on GitFlow in GitKraken
- Checkout to `develop` branch
- Then checkout to specific `feature` branch or create a new branch from `GITFLOW`
- In `GitKrane > Sub Modules > vaahscss` click on icon on right when you hover and then click on `Initialize`
- Run `npm run install`
- Make sure in `nuxt.config.js` file, update `ENV=localhost` and comment other values of the variable
- Run `npm run dev` and visit `http://localhost:3000/ `



## List of commands:
- `vaah nuxt:install` : To install the vaahnuxt
- `vaah nuxt:install -f <folder>` or - `vaah nuxt:install --folder <folder>`: To install the vaahnuxt in the `<folder>`
- `vaah nuxt:update` : To update the vaahnuxt
- `vaah nuxt:update -f <folder>` or - `vaah nuxt:update --folder <folder>`: To update the vaahnuxt in the `<folder>`


## GitFlow initialisation Process

- `clone > enable gitflow > checkout to develop > create feature or checkout to feature`

---

## Errors & Solutions

### Package mismatch
If `npm run dev` generate `Package mismatch` error, then just remove `node_modules` folder and `package.lock` file. Then run:
```sh
npm install
```

Try again `npm run dev`

---

## Build Setup

``` bash
# install vaahcli
$ npm install vaah -g

# install vaahnuxt
$ vaah nuxt:install

# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
