

<template>
  <div></div>
</template>
<script>
export default {
  name: "Report",
  data() {
    return {
      src: process.env.VUE_APP_BASE_API + "/ares/tool/report/index",
    };
  },
  mounted: function () {
    window.open(this.src);
  },
};
</script>
