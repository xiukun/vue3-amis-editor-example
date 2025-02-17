// 注册自定义组件（aipage-editor渲染器需要）
import { applyPureReactInVue } from 'veaury'
import 'amis/sdk/sdk.js'
import 'amis/lib/themes/default.css'
// @ts-ignore
import { registerAmisEditorPlugin, registerRendererByType } from 'vue3-amis-widget';
import { registerVue3AmisRenderer,registerVue3AmisPlugin,AnjiCrud } from 'wodetian-ui'
import { registerEditorPlugin} from "amis-editor"
import { Renderer } from "amis-core"
// @ts-ignore
// import AnjiLabel from './card/anji-label.vue';
// import AnjiLabelPlugin from './card/plugin'
import Outline1Plugin from '@/amis-plugins/demo-plugin/plugin';
import { renderAmisEditor, registerAmisRenderer, AnjiLabel } from 'wodetian-ui'
import { CRUDStore } from 'amis';
// import Outline1Plugin from "../amis-plugins/demo-plugin/plugin"


export default function renderAmisCustomPlugin() {
  registerVue3AmisRenderer()
  registerVue3AmisPlugin()
  registerRendererByType(AnjiCrud, {
    type: 'ag-crud',
    //渲染类型 renderer、formitem、options
    usage: 'renderer',
    framework: 'react',
    storeType: '11111',
    isolateScope: true,
  })
  // registerRendererByType(AnjiLabel, {
  //   type: 'anji-label',
  //   //渲染类型 renderer、formitem、options
  //   usage: 'renderer',
  //   framework: 'react'
  // })
  // renderAmisEditor()
  // registerEditorPlugin(Outline1Plugin)
  // registerAmisRenderer()

    // 注册自定义插件（amis-editor组件物料面板显示）
    // registerAmisEditorPlugin(AnjiLabelPlugin)
    
    // // 渲染组件需要
    // registerRendererByType(AnjiLabel, {
    //     type: 'anji-label',
    //     //渲染类型 renderer、formitem、options
    //     usage: 'renderer',
    //     framework: 'vue'
    // })
   
}