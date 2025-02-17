<script setup lang="ts">
import { onMounted, onUnmounted, defineProps } from 'vue'

const props = defineProps({
	amisjson: {
		type: Object,
		required: true,
	},
})

let amisScoped: { unmount: () => void } | null = null

onMounted(() => {
	// @ts-ignore
	var amis = amisRequire('amis/embed')
	// @ts-ignore
	amisScoped = amis.embed('#box', props.amisjson)
})

onUnmounted(() => {
	amisScoped?.unmount()
})
</script>

<template>
	<div id="box"></div>
</template>
