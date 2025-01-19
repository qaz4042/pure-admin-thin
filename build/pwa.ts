import {VitePWA} from 'vite-plugin-pwa'
export const pwa =
  VitePWA({
  registerType: 'autoUpdate',  // 自动更新 Service Worker
  manifest: {
    name: 'VuePWA',
    short_name: 'VuePWA',
    description: 'A demo of Vue 3 with PWA',
    theme_color: '#42b983',
    background_color: '#ffffff',
    display: 'standalone',  // 设置为 standalone，应用将会以独立模式运行
    id: '/',  // 启动时的 URL
    start_url: '/',  // 启动时的 URL
    icons: [
      {src: 'icons/pwa-192x192.png', sizes: '192x192', type: 'image/png'},  // 添加高分辨率图标
      {src: 'icons/pwa-512x512.png', sizes: '512x512', type: 'image/png'},  // 高分辨率图标用于设备主屏幕图标
    ],
    screenshots: [
      {
        src: "screenshots/1280_800.png",
        sizes: "1280x800",
        type: "image/png",
        form_factor: "wide"  // 横屏截图，适用于桌面
      },
      {
        src: "screenshots/640_1136.png",
        sizes: "640x1136",
        type: "image/png"
        // 默认情况下，适用于移动设备，form_factor 默认为 "portrait" 或不设置
      }],
  },
})
