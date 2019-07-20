<template>
  <div>
    <ebook-title></ebook-title>
    <ebook-reader />
  </div>
</template>
<script>
import EbookReader from "@/components/ebook/EbookReader";
import EbookTitle from "@/components/ebook/EbookTitle";

export default {
  name: "Ebook",
  components: { EbookReader,EbookTitle }
};
</script>
<style lang="scss" scoped>

</style>

