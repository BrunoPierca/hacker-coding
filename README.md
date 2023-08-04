# hacker-codingTS

## Summary
This test project was created with Vue.js 2, Bootstrap and Vuetify. It fetches the latest coding articles from HackerNews, filters them based on if they have a story_url by default, it also provides a toggle to make all articles visible.

Each article item has a "View details" button that, when clicked, opens a modal showcasing the fine details, including a button to navigate to the story if the URL is provided.

This project is fully responsive, designed with a mobile-first approach and featuring robust and scalable data fetching logic.

I did my best to keep it simple while adding key features that optimize both performance and network resources.


### Javascript version available in "main" branch

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Folder structure
```ascii
src/
├─ components/
├─ helpers/
├─ services/
├─ interfaces/

```