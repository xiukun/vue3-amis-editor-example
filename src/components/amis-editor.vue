<script setup lang="ts" name="amisEditorVue">
import { applyPureReactInVue } from 'veaury'
import { Editor as AEditor } from 'amis-editor'
// import Outline1Plugin from '@/amis-plugins/demo-plugin/plugin'
import 'amis-editor-core/lib/style.css'

interface propsType {
	theme: string
	isPreview: boolean
	isMobile: boolean
	schema: any
	showCustomRenderersPanel?: boolean
	plugins?: any
	onChange?: any
	onSave?: any
}
withDefaults(defineProps<propsType>(), {
	theme: 'cxd',
	isPreview: false,
	isMobile: false,
	schema: null,
	showCustomRenderersPanel: true,
	plugins: null,
	onChange: () => {},
	onSave: () => {},
})
const editor = applyPureReactInVue(AEditor)
// const pluginsList = [applyPureReactInVue(Outline1Plugin)]
</script>

<template>
	<section class="anji-amis-editor">
		<editor
			:value="schema"
			className="is-fixed"
			:isMobile="isMobile"
			:preview="isPreview"
			:theme="theme"
			:onChange="onChange"
			:onSave="onSave"
			:showCustomRenderersPanel="true"
		/>
	</section>
</template>
