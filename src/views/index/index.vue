<template>
    <div class="mainContainer">
        <!-- 顶部nav -->
        <div
            class="h-70px items-center navContainer bg-white fixed w-full z-10"
        >
            <!-- logo -->
            <img src="@/assets/logo.svg" />
            <!-- 选择页面 -->
            <div class="text-14px flex justify-center">
                <div>日历</div>
            </div>
            <div class="ml-auto flex items-center">
                <i class="iconfont icon-tongzhi2 text-#9CB2CD"></i>
                <div ml-34px flex items-center>
                    <div class="rounded w-46px h-46px bg-#4E8AFA"></div>
                    <div ml-10px>
                        <div>Links</div>
                        <div class="text-#9CB2CD">Administrator</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 主体内容 -->
        <div class="centerContainer">
            <div class="leftContainer h-full"><Calendar /></div>
            <div class="bg-#EFF6FF h-full w-full overflow-scroll">
                <IndexMessageNav />
                <div flex>
                    <!-- 第一行 -->
                    <div min-w-80px h-full bg-white>
                        <div
                            class="w-full h-48px flex-center defaultBorder b-l-0"
                        ></div>
                        <div
                            class="w-full h-60px defaultBorder b-b-0 b-t-0 b-l-0 flex-center text-#9CB2CD"
                            v-for="time in TIME_LIST"
                            :key="time.index"
                        >
                            {{ time.value }}
                        </div>
                    </div>
                    <div
                        min-w-150px
                        h-full
                        bg-white
                        v-for="day in DAY_TYPE_LIST"
                        :key="day.index"
                    >
                        <div
                            class="w-full h-48px flex-center defaultBorder b-l-0"
                        >
                            {{ day.value }}
                        </div>
                        <div
                            class="w-full h-30px defaultBorder b-t-0 b-l-0 flex-center text-#9CB2CD"
                            v-for="time in TIME_LIST"
                            :key="time.index"
                        ></div>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="fixed pointer bg-#4380FF text-20px flex-center w-60px h-60px z-12 rounded right-40px bottom-40px"
        >
            <i class="iconfont icon-jiahao1 text-24px text-white"></i>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { changeMonth, getNowTime } from '@/utils/changeTime'
import Calendar from '@/views/index/components/index-Calendar.vue'
import IndexMessageNav from '@/views/index/components/index-messageNav.vue'

import { DAY_TYPE_LIST, TIME_LIST } from '@/utils/constant'

// 获取当日时间
const time = new Date()
const { year, month } = getNowTime(time)
const nowMonth = ref(month)
const currentMonthArray: any = reactive([])

onMounted(() => {
    changeMonth(year, nowMonth.value, currentMonthArray)
})
</script>

<style scoped>
.navContainer {
    display: grid;
    padding: 0 30px;
    grid-template-columns: 300px auto 300px;
    box-shadow: 0px 1px 0px 0px #d7e3f1;
}
.iconfont {
    font-size: 30px;
}
.leftContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    padding: 30px 15px;
    box-shadow: inset -1px 0px 0px 0px #d7e3f1;
}

.notCurrentMonth {
    color: #d8e3f1;
}
.mainContainer {
    display: grid;
    grid-template-rows: 70px calc(100vh - 70px);
}

.centerContainer {
    display: flex;
    display: fixed;
    width: 100vw;
    margin-top: 70px;
    height: calc(100vh - 70px);
}

.dateTimeBlock {
    border: 0.7696px solid #dee2ec;
    border-left: 0;
    border-left: 0;
}
.defaultBorder {
    border: 0.7696px solid #dee2ec;
}
.b-l-0 {
    border-left: none;
}
.b-r-0 {
    border-right: none;
}
.b-t-0 {
    border-top: none;
}
.b-b-0 {
    border-bottom: none;
}
</style>
