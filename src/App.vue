<template>
	<component :is='currentComponent' />
</template>

<script>
const GuideLayout = () => import('@/views/Layout/GuideLayout.vue')

export default {
  name: 'App',

  components: { GuideLayout },

  props: {},

  data: () => ({}),

  computed: {
    currentComponent() {
			return 'GuideLayout'
		}
  },

  created() {},
  
  mounted() {},
  
  methods: {},
  
  watch: {}
}
</script>

<style>

</style>