# quiz-app-vue

[DEMO](https://alisavlasova.github.io/quiz-app-vue/)

# Test Task for Frontend Vue Developer

## Introduction

This test task is designed to assess your skills and experience as a Vue.js developer. You will be required to create a simple Quiz web application that demonstrates your ability to work with Vue.js.

## Requirements

We need you to develop a web application with the following features:

- A home page that displays a list of quizzes retrieved from an API endpoint or JSON data. The list should be displayed in a visually appealing format, with each quiz item containing an image and a brief description of the quiz's topic.
- Allow users to search for quizzes by name.
- Each quiz item should be clickable, taking the user to the quiz page. The quiz page should have a clean and intuitive interface, with a progress bar showing the user how far along they are in the quiz.
- On the quiz page, each question should be displayed one at a time, with the question title and a set of checkboxes for answer options. The checkboxes should be designed to be easy to use and visually appealing.
- After completing the quiz, the user should be shown their results, with a breakdown of how many questions they answered correctly and incorrectly.

## Guidelines

- Use Vue.js to build the web application.
- Use Git for version control.
- Deploy the web application to gh-pages.
- Write clean and well-organized code.
- Write a README.md file explaining how to run the application and any other relevant information.

## Submission

When you have completed the task, please submit a link to the GitHub repository containing your code and the URL to the deployed application.

Good luck!

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

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


# Extra materials

Vue 3 is the latest version of the Vue.js framework, released in September 2020. It comes with many improvements and new features compared to its predecessor, Vue 2. In this document, we will explore the differences between Vue 2 and Vue 3, the Composition API and Options API, and the differences between Vue 3 and React.

## Vue 2 vs Vue 3

### Performance

One of the main differences between Vue 2 and Vue 3 is the performance. Vue 3 is faster and more efficient than Vue 2. This is because Vue 3 uses a new reactivity system called the "Proxy" API, which is more performant than the "Object.defineProperty" API used in Vue 2.

### Tree-Shaking

Another great advantage of Vue 3 is its better tree-shaking capabilities. With Vue 2, unused components and directives were still included in the final bundle, which resulted in a larger and less optimized bundle. In Vue 3, the compiler can analyze the code and remove any unused components and directives from the final bundle, resulting in a more streamlined and optimized codebase.

### Smaller Bundle Size

Vue 3 has a smaller bundle size compared to Vue 2. This is because Vue 3 is written in TypeScript, which allows for better tree-shaking and smaller bundle sizes. Additionally, Vue 3 introduces a new feature called "Fragment", which allows developers to group multiple elements without adding extra nodes to the DOM, thus reducing the overall size of the application.

Overall, Vue 3 is a significant upgrade over Vue 2, not only in terms of performance but also in terms of developer experience and bundle size optimization. With its improved reactivity system, better tree-shaking capabilities, and smaller bundle size, Vue 3 is a great choice for building high-performance and optimized web applications.

## Vue 3 vs React

Vue 3 and React are both popular front-end frameworks, but they have some key differences that set them apart from each other.

### Template vs JSX

One major difference is the syntax they use. Vue 3 uses a template-based syntax, which is simpler and easier to understand for beginner developers. On the other hand, React uses JSX (JavaScript XML), which is more flexible and powerful. This makes it easier to write complex components, but also makes it more difficult to learn.

### Reactivity

Another difference between Vue 3 and React is the way they handle reactivity. Vue 3 has a built-in reactivity system, which means that changes to the state are automatically reflected in the user interface. This makes it easier to write reactive components and reduces the amount of boilerplate code needed. In contrast, React relies on third-party libraries like Redux for state management, which can make it harder to manage complex state.

### Size

Vue 3 has a smaller bundle size compared to React. This is because Vue 3 is designed to be more lightweight and focused, while React has a more modular architecture. This means that Vue 3 is faster to load and can perform better on slower devices.

Here is an example of a simple component in Vue 3 and React:

Vue 3:

```
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
    count: 0,
    message: 'Hello, World!'
})

function increment() {
    state.count++
}
</script>

```

In this example, we have added a new message property to the state object, which can be used to display a greeting to the user.

React:

```
import { useState } from 'react'

function MyComponent() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello, World!')

  function increment() {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>{message}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

```

In this example, we have added a new message state using the useState hook, which can be used to display a greeting to the user.

## Composition API and Options API

Vue 3 introduces a new way of building components called the Composition API. The Composition API is designed to simplify the development process of large-scale applications. It allows developers to reuse code more easily and provides a better separation of concerns. This new API is an alternative to the Options API, which was used in Vue 2.

### Options API

The Options API is the traditional way of building components in Vue 2. In the Options API, components are defined using an options object that contains properties and methods. This object can quickly become unwieldy as the application grows larger.

Here is an example of a component defined using the Options API:

```
Vue.component('my-component', {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  template: `
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  `
})

```

### Composition API

The Composition API is a new way of building components in Vue 3. With the Composition API, components are defined using functions that return reactive data and methods. This approach makes it easier to reuse code and logically separate the functionality of the component.

Here is an example of a component defined using the Composition API:

```
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment
    }
  },
  template: `
    <div>
      <p>Count: {{ state.count }}</p>
      <button @click="increment">Increment</button>
    </div>
  `
}

```

In short, the Composition API is a more flexible and powerful way of building Vue components that allow developers to keep their code organized and reusable.