<template>
    <div w-full p-1.25rem flex justify-between>
        <div class="defeautButton px-0.8125rem py-0.5rem pointer">Today</div>
        <div flex items-center>
            <span class="text-#9CB2CD">Worked this week : </span>
            189 hours
            <div
                class="pl-0.875rem ml-0.625rem pr-0.375rem h-2.25rem rounded-1.875rem bg-#538FFF flex items-center pointer"
            >
                <div text-white mr-0.5rem>Submit time</div>
                <div class="p-0.375rem rounded text-center bg-#4A83EE">
                    <i class="iconfont icon-xiangyou1"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>

<style scoped>
.icon-xiangyou1 {
    color: #fff;
    font-size: .875rem;
}
.defeautButton {
    padding: .5rem .875rem;
    font-size: .875rem;
    border-radius: .625rem;
    border: .0481rem solid #dee2ec;
    background: #fff;
}
</style>
