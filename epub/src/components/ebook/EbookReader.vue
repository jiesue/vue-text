<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>
<script>
import Epub from "epubjs";
global.epub = Epub;
import { mapGetters } from "vuex";
export default {
  name: "EbookReader",
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapGetters(["getFileName"])
  },
  methods: {
    prevPage() {
      if(this.rendition){
        this.rendition.prev();
      }
    },
    nextPage() {
      if(this.rendition){
        this.rendition.next()
      }
    },
    showTileMenu() {},
    initEpub() {
      const url =
        "https://websave-1253371045.cos.ap-guangzhou.myqcloud.com/epub/" +
        this.getFileName +
        ".epub";
      this.book = new Epub(url);
      console.log(this.book);
      this.rendition = this.book.renderTo("read", {
        width: innerWidth,
        height: innerHeight,
        methods: "default"
      });
      this.rendition.display();
      this.rendition.on("touchstart", event => {
        this.touchStartX = event.changedTouches[0].clientX;
        this.touchTime = event.timeStamp;
      });
      this.rendition.on("touchend", event => {
        let offsetX = event.changedTouches[0].clientX - this.touchStartX;
        let time = event.timeStamp - this.touchTime;
        if (time < 500 && offsetX > 40) {
          this.prevPage();
        } else if (time < 500 && offsetX > -40) {
          this.nextPage();
        } else {
          this.showTileMenu();
        }
        event.preventDefault();
        event.stopPropagation();
      });
      console.log(url);
    }
  },
  mounted() {
    const baseUrl =
      "https://websave-1253371045.cos.ap-guangzhou.myqcloud.com/epub";
    let params = this.$route.params.fileName;
    params
      ? ""
      : (params = "Biomedicine|2014_Book_Self-ReportedPopulationHealthA");

    const fileName = params.split("|").join("/");
    this.$store.dispatch("setFileName", fileName).then(() => {
      this.initEpub();
    });
  }
};
</script>
<style lang="sass" scoped>

</style>

