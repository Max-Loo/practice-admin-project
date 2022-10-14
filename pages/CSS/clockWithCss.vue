<template>
  <div class="relative p-4 bg-white">
    <div
      class="clock"
      :style="clockStyle"
    >
      <div class="clock-panel">
        <div
          v-for="num in 12"
          :key="num"
          :style="[ `--i:${num}` ]"
          class="num"
        >
          {{ num }}
        </div>
      </div>
      <div class="hour" />
      <div class="min" />
      <div class="sec" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'CSS 时钟',
})

const clockStyle = reactive({
  '--ds': 0,
  '--dm': 0,
  '--dh': 0,
})

function init () {
  const d = new Date()
  const h = d.getHours()
  const m = d.getMinutes()
  const s = d.getSeconds()

  clockStyle['--ds'] = s
  clockStyle['--dm'] = m + s / 60
  clockStyle['--dh'] = h + m / 60 + s / 3600
}

init()
</script>

<style scoped>
.clock {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 380px;
  font-size: 24px;
  border-radius: 20px;
  box-shadow: 2px 2px 20px rgb(0 0 0 / 10%);

  --step: 60s;
}

.clock::before {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background:
    repeating-conic-gradient(from -0.5deg, #333 0 1deg, transparent 0deg 30deg),
    repeating-conic-gradient(from -0.5deg, #ccc 0 1deg, transparent 0deg 6deg);
  mask: radial-gradient(transparent 145px, red 0);
}

.clock-panel {
  width: 250px;
  height: 250px;
  position: absolute;
}

.num {
  position: absolute;
  offset-path: path("M250 125c0 69.036-55.964 125-125 125S0 194.036 0 125 55.964 0 125 0s125 55.964 125 125z");
  offset-distance: calc(var(--i) * 10% / 1.2 - 25%);
  offset-rotate: 0deg;
}

.hour {
  position: absolute;
  width: 4px;
  height: 60px;
  background: #333;
  transform-origin: center bottom;
  transform: translateY(-50%) rotate(0);
  animation: clock calc(var(--step) * 60 * 12) infinite linear;
  animation-delay: calc(-1 * var(--step) * var(--dh) * 60);
}

.min {
  position: absolute;
  width: 4px;
  height: 90px;
  background: #333;
  transform-origin: center bottom;
  transform: translateY(-50%) rotate(0);
  animation: clock calc(var(--step) * 60) infinite linear;
  animation-delay: calc(-1 * var(--step) * var(--dm));
}

.sec {
  position: absolute;
  width: 2px;
  height: 120px;
  background: red;
  transform-origin: center bottom;
  transform: translateY(-50%) rotate(0);
  animation: clock var(--step) infinite steps(60);
  animation-delay: calc(-1 * var(--step) * var(--ds) / 60);
}

.sec::after {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  left: 50%;
  bottom: 0;
  background: #fff;
  border: 4px solid #333;
  transform: translate(-50%, 50%);
}

@keyframes clock {
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}

</style>
