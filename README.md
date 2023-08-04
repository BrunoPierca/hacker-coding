# hackerCodingJS

## Summary
This test project was created with Vue.js 2, Bootstrap and Vuetify. It fetches the latest coding articles from HackerNews, filters them based on if they have a story_url by default, it also provides a toggle to make all articles visible.

Each article item has a "View details" button that, when clicked, opens a modal showcasing the fine details, including a button to navigate to the story if the URL is provided.

This project is fully responsive, designed with a mobile-first approach and featuring robust and scalable data fetching logic.

I did my best to keep it simple while adding key features that optimize both performance and network resources.

Try the [live demo](https://hacker-coding.netlify.app/)

### Typescript version available in "with-typescript" branch
## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

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
```
