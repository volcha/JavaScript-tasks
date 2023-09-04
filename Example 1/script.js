'use strict';

// В этом объекте будем настраивать приложение
const App = {
    // метод
    data() {
        return {
            counter: 0,
            title: 'Счётчик',
        };
    },
};

// 1-й способ активировать Vue
// const app = Vue.createApp(App);
// // Передаём css-селектор корневого узла
// app.mount('#app');

// 2-й способ активировать Vue
Vue.createApp(App).mount('#app');
