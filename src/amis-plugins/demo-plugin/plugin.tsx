import React from 'react';
import {Icon} from 'amis';
import {BuildPanelEventContext, BasePlugin, BasicPanelItem,} from 'amis-editor';
/**
 * 大纲面板
 */
export default class Outline1Plugin extends BasePlugin {
  static scene = ['layout'];
  order = -9999;

  buildEditorPanel(
    context: BuildPanelEventContext,
    panels: Array<BasicPanelItem>
  ) {
    const store = this.manager.store;
    console.log(context,'context....')
    // 多选时显示大纲面板
    if (store && context.selections.length) {
      const {changeLeftPanelOpenStatus, changeLeftPanelKey} = store;
      changeLeftPanelOpenStatus(true);
      changeLeftPanelKey('outline1');
    }
    panels.push({
      key: 'outline1',
      icon: 'png-icon outline-png', // 'fa fa-navicon',
      title: (
        <span className="editor-tab-icon" editor-tooltip="大纲1111">
          <Icon icon="editor-outline" />
        </span>
      ),
      component: Test,
      position: 'left',
      order: 4000
    });
  }
}

function Test(){
    return <>
<div>hahahahahahah</div>
    </>
}
// class Test extends React.Component {
//     render() {
//         return (<div>hahahahahahah</div>)
//     }
// }
