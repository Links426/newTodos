<template>
    <div>
        <div mb-20px text-18px>Calendar</div>
        <div
            class="flex justify-center justify-around bg-#EFF6FF py-8px rounded-24px mb-20px"
        >
            <div>Day</div>
            <div>Week</div>
            <div>Month</div>
        </div>
        <div flex justify-between items-center mb-18px>
            <i
                class="iconfont icon-xiangzuo1 changePageButton pointer flex-center"
                @click="preMonth"
            ></i>
            <div>
                {{
                    MONTH_TYPE_LIST.find((item) => item.index === nowMonth)
                        ?.value || ''
                }}
                {{ nowYear }}
            </div>
            <i
                class="iconfont icon-xiangyou1 changePageButton pointer flex-center"
                @click="nextMonth"
            ></i>
        </div>
        <!-- 顶部日期 -->
        <div class="flex text-#9CB2CD mb-20px">
            <view
                v-for="day in DAY_TYPE_LIST"
                :key="day.index"
                class="w-34px text-center t-5s"
                >{{ day.value }}</view
            >
        </div>
        <!-- 下方日期 -->
        <div flex flex-wrap>
            <div
                v-for="(item, index) in currentMonthArray"
                :key="index"
                class="text-#d8e3f1 pointer t-5s"
                :class="item.month === nowMonth + 1 ? 'CurrentMonth' : ''"
                @click="selectDate(item)"
            >
                <view
                    class="t-5s w-34px h-34px rounded flex-center"
                    :class="
                        item.month === month + 1 && item.date === date
                            ? 'todayClass'
                            : ''
                    "
                    ><view>{{ item.date }}</view></view
                >
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { DAY_TYPE_LIST, MONTH_TYPE_LIST } from '@/utils/constant'
import { changeMonth, getNowTime } from '@/utils/changeTime'
import { onMounted, reactive, ref } from 'vue'
// 获取当日时间
const time = new Date()
const { year, month, date } = getNowTime(time)
const nowMonth = ref(month)
const nowYear = ref(year)
const currentMonthArray: any = reactive([])
onMounted(() => {
    changeMonth(nowYear.value, nowMonth.value, currentMonthArray)
})

const preMonth = () => {
    nowMonth.value--
    currentMonthArray.length = 0
    if (nowMonth.value < 0) {
        nowMonth.value = 11
        nowYear.value--
    }

    changeMonth(nowYear.value, nowMonth.value, currentMonthArray)
}
const nextMonth = () => {
    currentMonthArray.length = 0
    nowMonth.value++
    if (nowMonth.value > 11) {
        nowMonth.value = 0
        nowYear.value++
    }

    changeMonth(nowYear.value, nowMonth.value, currentMonthArray)
}

</script>

<style scoped>
.changePageButton {
    width: 28px;
    height: 28px;
    font-size: 14px;
    border-radius: 6px;
    color: #9cb2cd;
    border: .7696px solid #dee2ec;
    background: #fff;
}
.CurrentMonth {
    color: #9cb2cd;
}
.todayClass {
    background-color: #4380ff;
    border-radius: 50%;
    color: #fff;
}
</style>
