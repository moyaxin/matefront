import {createApp} from 'vue'
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';
import App from './App.vue'
import {Card, CellGroup, Divider, Empty, Field, Form, Popup} from 'vant';
import router from "./router";
import { Notify } from 'vant';
import { Image as VanImage } from 'vant';
import { SwipeCell } from 'vant';
import { Lazyload } from 'vant';
const app = createApp(App);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Empty);
app.use(router)
app.use(Card);
app.use(Popup)
app.use(Notify);
app.use(Divider);
app.use(VanImage);
app.use(SwipeCell);
app.use(Lazyload, {
    lazyComponent: true,
  });


app.mount('#app')


