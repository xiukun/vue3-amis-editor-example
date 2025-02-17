<template>
	<div class="u-charts-container">hello,{{ text }},{{ apiPath }}</div>
</template>
<script lang="ts">
import {
	watch,
	ref,
	onMounted,
	getCurrentInstance,
	toRefs,
	reactive,
	onBeforeMount,
} from 'vue'

export default {
	data() {
		return {
			text: '',
			apiPath: '',
		}
	},
	setup() {
		const ctx = getCurrentInstance() as any
		const data = ctx.data
		const propsState = reactive(data)
		console.log(ctx, '1data....')
		onBeforeMount(() => {
			console.log(ctx, ctx.data, data, 'ssss')
		})

		return { ...toRefs(propsState) }
	},
}
</script>
<style scoped lang="scss">
.u-charts-container {
	display: flex;
	align-items: center;
	justify-content: center;

	.u-charts {
		margin: 10px auto;
		width: 370px;
		height: 280px;
	}
}
</style>
