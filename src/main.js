import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Button from './components/button/Index.vue';
import Modal from './components/modal/Index.vue';
import Dashboard from '../src/assets/icons/Dashboard.vue';
import Confirm from "../src/assets/icons/Confirm.vue";
import Cog from "../src/assets/icons/Cog.vue";
import Arrow from  "../src/assets/icons/Arrow.vue";
import './styles/global.styl';

const app = createApp(App);

app.use(router);

app.component('Button', Button);
app.component('Modal', Modal);
app.component('dashboard', Dashboard);
app.component('confirm', Confirm);
app.component('cog', Cog);
app.component('arrow', Arrow);







app.mount('#app');
