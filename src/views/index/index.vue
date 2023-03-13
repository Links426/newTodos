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
            <div class="bg-#EFF6FF h-full w-full overflow-y-scroll">
                <IndexMessageNav />
                <div flex>
                    <div
                        w-full
                        h-full
                        bg-white
                        relative
                        v-for="day in needsToList"
                        :key="day.index"
                    >
                        <div
                            class="w-full h-48px flex-center defaultBorder b-l-0"
                        >
                            {{ day.value }}
                        </div>
                        <div
                            class="w-full h-30px defaultBorder b-t-0 b-l-0 flex-center text-#9CB2CD"
                            :class="time % 2 === 0 ? 'dotted' : ''"
                            v-for="time in 36"
                            :key="time"
                        ></div>

                        <div absolute top-60px p-10px w-full>
                            <div
                                v-for="event in day.events"
                                class="bg-#649aff w-full h-160px rounded-4px mb-16px pointer"
                                :class="{
                                    normal: event.grade === GRADE_TYPE.NORMAL,
                                    medium: event.grade === GRADE_TYPE.MEDIUM,
                                    important:
                                        event.grade === GRADE_TYPE.IMPORTANT,
                                }"
                            >
                                <div
                                    w-full
                                    h-24px
                                    rounded-t-4px
                                    pl-6px
                                    class="bg-#23272E op-15 text-white text-12px flex items-center"
                                >
                                    {{
                                        GRADE_TYPE_LIST.find(
                                            (i) => i.index === event.grade
                                        )?.value
                                    }}
                                </div>
                                <div pt-6px px-10px text-white>
                                    {{ event.detail }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 添加按钮 -->
        <div
            class="fixed pointer bg-#4380FF text-20px flex-center w-60px h-60px z-12 rounded right-40px bottom-40px"
            @click="addEvent"
        >
            <i class="iconfont icon-jiahao1 text-24px text-white"></i>
        </div>
        <!-- 新增内容提示框 -->
        <a-drawer
            :width="420"
            :visible="showAddDrawer"
            unmountOnClose
            mask-closable
            escToClose
            :footer="false"
            @cancel="closeDrawer"
        >
            <template #title> 添加新的提醒事项 </template>

            <div>
                <a-form
                    ref="eventRef"
                    :model="event"
                    :layout="'vertical'"
                    allow-clear
                    @submit="handleSubmitEvent"
                >
                    <a-form-item
                        label="优先级"
                        field="grade"
                        :rules="{
                            required: true,
                            message: '优先级 为 必选项',
                        }"
                    >
                        <a-select
                            v-model="event.grade"
                            placeholder="请选择事件优先级"
                        >
                            <a-option
                                v-for="grade of GRADE_TYPE_LIST"
                                :value="grade.index"
                                :label="grade.value"
                            />
                        </a-select>
                    </a-form-item>
                    <a-form-item
                        label="详情"
                        field="detail"
                        :rules="{
                            required: true,
                            message: '事件详情 为 必填项',
                        }"
                    >
                        <a-input
                            v-model="event.detail"
                            placeholder="请输入事件详情..."
                        />
                    </a-form-item>
                    <a-form-item
                        label="时间"
                        field="time"
                        :rules="{
                            required: true,
                            message: '时间 为 必选项',
                        }"
                    >
                        <a-date-picker
                            show-time
                            format="YYYY-MM-DD HH:mm"
                            v-model="event.time"
                        />
                    </a-form-item>
                    <a-form-item>
                        <a-button html-type="submit" mr-10px>添加</a-button>
                        <!-- 利用ref 解决$ref 引用报错问题(因为setup无法访问到this) -->
                        <a-button @click="eventRef.resetFields()"
                            >Reset</a-button
                        >
                    </a-form-item>
                </a-form>
            </div>
        </a-drawer>
    </div>
</template>
<script setup lang="ts">
import { changeMonth, getNowTime } from '@/utils/changeTime'
import Calendar from '@/views/index/components/index-Calendar.vue'
import IndexMessageNav from '@/views/index/components/index-messageNav.vue'

import { DAY_TYPE, GRADE_TYPE_LIST, GRADE_TYPE } from '@/utils/constant'

interface currentMonth {
    date: number
    month: number
    year: number
    day: number
}
// 获取当日时间
const time = new Date()
const { year, month } = getNowTime(time)
const nowMonth = ref<number>(month)
const currentMonthArray: currentMonth[] = reactive([])

const showAddDrawer = ref<boolean>(false)

const addEvent = () => {
    showAddDrawer.value = true
}
const closeDrawer = () => {
    showAddDrawer.value = false
}
// 事件引用，在setup中代替 $refs
const eventRef = ref()

interface eventType {
    detail: string
    time: string
    grade: string
}
const event: eventType = reactive({
    detail: '',
    time: '',
    grade: '',
})

const handleSubmitEvent = ({ values, errors }) => {
    console.log('values:', values, '\nerrors:', errors)
}
const needsToList = reactive([
    {
        index: DAY_TYPE.MONDAY,
        events: [],
        value: 'Mon',
        time: 1,
    },
    {
        index: DAY_TYPE.TUESDAY,
        events: [
            { detail: '完成ppt', time: null, grade: 2 },
            { detail: '完成代码', time: null, grade: 1 },
        ],
        value: 'Tue',
        time: 1,
    },
    {
        index: DAY_TYPE.WEDNESDAY,
        events: [
            { detail: '完成今天的代码任务', time: null, grade: 2 },
            { detail: '重构ppt', time: null, grade: 0 },
        ],
        value: 'Wed',
        time: 1,
    },
    {
        index: DAY_TYPE.THURSDAY,
        events: [{ detail: '测试事件', time: null, grade: 1 }],
        value: 'Thu',
        time: 1,
    },
    {
        index: DAY_TYPE.FRIDAY,
        events: [{ detail: '学习计算机的相关知识', time: null, grade: 2 }],
        value: 'Fri',
        time: 1,
    },
    {
        index: DAY_TYPE.SATURDAY,
        events: [{ detail: '起床吃早饭', time: null, grade: 0 }],
        value: 'Sat',
        time: 1,
    },
    {
        index: DAY_TYPE.SUNDAY,
        events: [{ detail: '睡觉', time: null, grade: 0 }],
        value: 'Sun',
        time: 1,
    },
])

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
.dotted {
    border-bottom: 1px dashed #eff6ff;
}
.small {
    background-color: #649aff;
}
.medium {
    background-color: #fec86a;
}
.important {
    background-color: #ff8683;
}
</style>
