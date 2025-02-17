import { createApp } from 'vue'
import App from './App.vue'

import renderAmisCustomPlugin from '@/components'
// amis style 
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
// amis editor style
// 
// icon 

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import './style.css'
renderAmisCustomPlugin()

createApp(App).mount('#app')
