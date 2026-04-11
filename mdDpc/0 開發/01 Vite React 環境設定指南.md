# Vite React 環境設定指南

## 目錄

- [建立專案](#建立專案)
- [部署設定](#部署設定)
- [安裝套件](#安裝套件)
- [套件設定](#套件設定)
- [專案結構說明](#專案結構說明)

---

## 建立專案

### 初始化 Vite React 專案

在空資料夾中執行以下命令：

```bash
npm create vite@latest .
```

> **⚠️ 注意：**
>
> - 執行此命令前，請確保目標資料夾為空
> - 選擇 React 作為框架
> - 可選擇 JavaScript 或 TypeScript

---

## 部署設定

### 設定 GitHub Pages 部署路徑

修改 `vite.config.js`，加入 base 路徑設定：

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // 設定 GitHub Pages 部署的 base 路徑
  // 開發環境使用 '/'，生產環境使用 repository 名稱
  base: process.env.NODE_ENV === "production" ? "//jhssc-ylc/" : "/",
});
```

### 設定 package.json 部署腳本

在 `package.json` 的 `scripts` 區塊中加入 `deploy` 指令：

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

- **`npm run build`**：先建置生產版本，輸出至 `dist/` 資料夾
- **`gh-pages -d dist`**：將 `dist/` 資料夾內容推送至 GitHub Pages

---

## 安裝套件

### 方式一：分類安裝（推薦）

#### 核心功能套件

```bash
npm install react-router-dom @reduxjs/toolkit react-redux
```

- **react-router-dom**：React 路由管理
- **@reduxjs/toolkit**：Redux 狀態管理工具
- **react-redux**：React 與 Redux 整合

#### UI 與樣式套件

```bash
npm install bootstrap bootstrap-icons
```

- **bootstrap**：CSS 框架
- **bootstrap-icons**：Bootstrap 圖示庫

#### 資料處理與工具套件

```bash
npm install axios react-hook-form js-cookie
```

- **axios**：HTTP 請求函式庫
- **react-hook-form**：表單處理函式庫
- **js-cookie**：Cookie 操作工具

#### 載入動畫套件

```bash
npm install react-loader-spinner react-spinners
```

- **react-loader-spinner**：載入動畫元件
- **react-spinners**：載入動畫元件

#### 開發工具與預處理器

```bash
npm install -D sass gh-pages
```

- **sass**：CSS 預處理器
- **gh-pages**：GitHub Pages 部署工具

### 方式二：一次性安裝

```bash
npm install @reduxjs/toolkit axios bootstrap bootstrap-icons gh-pages js-cookie react-dom react-hook-form react-loader-spinner react-redux react-router-dom react-spinners sass
```

---

## 套件設定

### Axios 設定

在 `src/App.jsx` 中設定 Axios：

```javascript
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  // 使用 useEffect 進行 API 請求
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://randomuser.me/api/");
        console.log(res.data);
      } catch (error) {
        console.error("API 請求失敗：", error);
      }
    })();
  }, []);

  return <div>{/* 應用程式內容 */}</div>;
}

export default App;
```

### Sass 設定

1. **建立 Sass 主檔案**

新增檔案 `src/assets/scss/all.scss`：

```scss
// 全域樣式設定
// 可在此檔案中 import Bootstrap 或自訂樣式

// 範例：自訂 Bootstrap 變數
// $primary: #007bff;

// 引入 Bootstrap
// @import '~bootstrap/scss/bootstrap';
```

2. **在 main.jsx 中載入**

修改 `src/main.jsx`：

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/all.scss"; // 載入全域 Sass 樣式

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

---

## 專案結構說明

```
src/
├── App.jsx          # 主要應用程式元件
├── main.jsx         # 應用程式進入點
├── index.css        # 全域 CSS 樣式
└── assets/
    └── scss/
        └── all.scss     # 全域 Sass 樣式
```

### 檔案說明

- **`src/main.jsx`**：整個 React 應用程式的進入點，負責將 App 元件掛載到 DOM 上
- **`src/App.jsx`**：主要應用程式元件，包含主要的業務邏輯與頁面結構
- **`src/assets/all.scss`**：全域 Sass 樣式檔，可在此自訂樣式或覆寫 Bootstrap 變數

---

## 常用指令

```bash
# 啟動開發伺服器
npm run dev

# 建置生產版本
npm run build

# 預覽建置結果
npm run preview

# 部署到 GitHub Pages
npm run deploy
```

> **💡 提示：**
>
> - 開發時使用 `npm run dev`
> - 部署前先執行 `npm run build` 確認建置成功
> - 使用 gh-pages 部署時需在 package.json 中加入 deploy 腳本
