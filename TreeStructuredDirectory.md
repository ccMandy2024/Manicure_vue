## 目錄結構說明

```shell
MANICURE_VUE/
├─ public
│  └─ favicon.ico
│
├─ src
│  ├─ assets
│  │  ├─ image              # 所有圖片素材
│  │  └─ icon               # icon
│  │
│  ├─ components
│  │  ├─ homePage
│  │  │  └─ Header.vue      # Header 組件
│  │  └─ other              # 共用元件（按鈕、卡片、modal...）
│  │
│  ├─ views
│  │  ├─ HomePage.vue
│  │  ├─ NailStyle.vue
│  │  ├─ StoreGuide.vue
│  │  ├─ AppointmentForm.vue
│  │  ├─ FAQ.vue
│  │  └─ Login.vue
│  │
│  ├─ router
│  │  └─ index.ts           # Vue Router 設定
│  │
│  ├─ stores                # 未來使用 Pinia 狀態管理可新增這裡
│  ├─ api                   # 放 axios 呼叫後端 API 的邏輯
│  ├─ App.vue               # 主入口
│  ├─ main.ts               # app 初始化
│  ├─ style.css             # 全域樣式（或拆成 scss modules）
│  └─ vite-env.d.ts         # Vite 的型別提示
│
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
├─ vite.config.ts
├─ package.json
├─ index.html
└─ README.md

```
