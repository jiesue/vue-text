<template>
    <div class="popup" style="display: none">
        <div class="wrapper" @click="checkClose">
            <transition name="seleted">
                <div class="seleted" style="display: none">
                    <div class="close" onclick="closePop()"></div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        checkClose(event) {
            if (event.target === this) {
                closePop();
            }
        },
        showPop(param) {
            $(".popup .wrapper>div").hide();
            switch (param) {
                case "rule":
                    $(".popup")
                        .show()
                        .find(".rule")
                        .show();
                    break;
                default:
                    break;
            }
        },
        closePop() {
            $(".popup").hide();
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/global.scss";
.popup {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        .seleted {
            position: absolute;
            bottom: -100%;
            width: 100%;
            height: auto;
            // background: url(../images/rule.png) 0/100% 100% no-repeat;
        }
    }
}
</style>