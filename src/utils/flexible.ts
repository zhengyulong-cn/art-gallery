import {computed} from 'vue'
import { PC_DEVICE_WIDTH } from "@/constants"
import { useWindowSize } from '@vueuse/core'

// 通过vueuse库获取响应式的窗口宽度
const { width } = useWindowSize();
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH;
})

/**
 * 动态指定rem基准值
 * 根据用户屏幕的宽度，通过计算获取赋给根html标签作为font-size的大小
 */
export const useREM = () => {
  // 定义最大的font-size
  const MAX_FONT_SIZE = 40;
  // 监听html文档被解析完成的事件
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html');
    let fontSize = window.innerWidth / 10;
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE: fontSize;
    if(html?.style) {
      html.style.fontSize = fontSize + 'px';
    }
  })
}