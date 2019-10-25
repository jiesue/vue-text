<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>
<script>
import { ebookMixin } from "../../utils/mixins";
import Epub from "epubjs";
global.epub = Epub;
export default {
  name: "EbookReader",
  mixins: [ebookMixin],
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
      }
    },
    toggleTitleAndMenu() {
      this.$store.dispatch("setMenuVisible", !this.menuVisible);
    },
    hideTitleAndMenu(){
<<<<<<< HEAD
       this.$store.dispatch("setMenuVisible", false);
       console.log('1111');
       
=======
      this.$store.dispatch("setMenuVisible", 0);
>>>>>>> 22c67160f4a90fe50752c41a519ead484507b4dd
    },
    initEpub() {
      const url =
        "https://websave-1253371045.cos.ap-guangzhou.myqcloud.com/epub/" +
        this.fileName +
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
        if (time < 500 && offsetX < -40) {
          this.nextPage();
          this.hideTitleAndMenu()
        } else if (time < 500 && offsetX > 40) {
          this.prevPage();
          this.hideTitleAndMenu();
        } else {
          this.toggleTitleAndMenu();
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

