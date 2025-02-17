<script setup lang="ts">
import { onMounted, ref } from 'vue'
import amisEditor from './components/amis-editor.vue'

import VueAmisSdk from './components/VueAmisSdk.vue'
const isPreview = ref(true)
const isMobile = ref(false)
const schema = ref({
	type: 'page',
	body: [
		{
			type: 'anji-label',
			label: 'ag-label',
			name: 'ag-label',
			text: '设计器默认值eeee',
			apiPath: '/testAdd',
		},
	],
	title: '初始化默认Schema',
	regions: ['body', 'header'],
})
function onChange(e: any) {
	schema.value = e
	console.log(e, 'onCHange....')
}
function onTogglePreview() {
	isPreview.value = !isPreview.value
}
function onSave() {
	sessionStorage.setItem('pageSchema', JSON.stringify(schema.value))
}

onMounted(() => {
	// registerEditorPlugin(Outline1Plugin)
})
</script>

<template>
	<div class="editor-demo">
		<div class="editor-header">
			<div class="editor-title">可视化编辑</div>
			<div class="editor-header-actions">
				<!-- <shortcut-key /> -->

				<button
					@click="onTogglePreview"
					class="header-action-btn margin-left-space"
				>
					{{ isPreview ? '编辑' : '预览' }}
				</button>
				<button class="header-action-btn" @click="onSave">保存</button>
				<button class="header-action-btn exit-btn" @click="onQuit">退出</button>
			</div>
		</div>
		<div v-if="!isPreview" class="editor-inner">
			<amis-editor
				id="editorName"
				theme="cxd"
				className="is-fixed"
				:isPreview="isPreview"
				:isMobile="isMobile"
				:schema="schema"
				:onChange="onChange"
			/>
		</div>
		<div v-else>
			<VueAmisSdk :amisjson="schema" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import './style/editor-layout.scss';
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
