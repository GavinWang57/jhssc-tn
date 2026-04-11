# Bootstrap 5 客製化參數

> 基礎單位：$spacer = 16px, $font-size-base = 16px

---

## 🎨 顏色系統

<details open>
<summary><strong>主要品牌色（Primary）- 臺南藍</strong></summary>

| 變數名稱       | 色碼                             | 說明                       |
| -------------- | -------------------------------- | -------------------------- |
| `$primary-50`  | `tint-color($primary-500, 90%)`  | 極淺藍色                   |
| `$primary-100` | `tint-color($primary-500, 80%)`  | 很淺藍色                   |
| `$primary-200` | `tint-color($primary-500, 60%)`  | 淺藍色                     |
| `$primary-300` | `tint-color($primary-500, 40%)`  | 柔和藍                     |
| `$primary-400` | `tint-color($primary-500, 20%)`  | 中淺藍                     |
| `$primary-500` | `#0D417A`                        | 主要藍色（主色）⭐         |
| `$primary-600` | `shade-color($primary-500, 20%)` | 中深藍                     |
| `$primary-700` | `shade-color($primary-500, 40%)` | 深藍色                     |
| `$primary-800` | `shade-color($primary-500, 60%)` | 很深藍色                   |
| `$primary-900` | `shade-color($primary-500, 80%)` | 極深藍色                   |
| `$primary`     | `$primary-500`                   | 等同於 primary-500（主色） |

> 💡 色階使用 Bootstrap 的 `tint-color()` 和 `shade-color()` 函數自動生成，確保色彩調和一致

</details>

<details>
<summary><strong>語意色彩（Semantic Colors）</strong></summary>

| 變數名稱     | 色碼      | 說明               |
| ------------ | --------- | ------------------ |
| `$secondary` | `#EA7D1A` | 次要橘色 🧡        |
| `$success`   | `#4CAF50` | 成功綠色（自然）🌿 |
| `$info`      | `#2196F3` | 資訊青色（天空）☁️ |
| `$warning`   | `#FFC107` | 警告橘色（陽光）☀️ |
| `$danger`    | `#DC3545` | 危險紅色 ⚠️        |
| `$light`     | `#F8F9FA` | 淺色背景           |
| `$dark`      | `#212529` | 深色文字           |

</details>

<details>
<summary><strong>中性色（Neutral）</strong></summary>

| 變數名稱       | 色碼      | 說明                   |
| -------------- | --------- | ---------------------- |
| `$neutral-50`  | `#fafafa` | 極淺灰色               |
| `$neutral-100` | `#f5f5f5` | 淺灰色                 |
| `$neutral-300` | `#d4d4d4` | 邊框灰色               |
| `$neutral-500` | `#1b0c0c` | 主要中性色（次要文字） |
| `$neutral-700` | `#404040` | 深灰色                 |
| `$neutral-900` | `#171717` | 極深灰色               |
| `$neutral-950` | `#0a0a0a` | 最深灰黑色             |

</details>

---

## 📏 間距系統（Spacers）

<details open>
<summary><strong>間距變數對照表</strong></summary>

| Class | 變數值           | 實際大小 | 使用時機             |
| ----- | ---------------- | -------- | -------------------- |
| `0`   | `0`              | **0px**  | 無間距               |
| `1`   | `$spacer * .25`  | **4px**  | 極小間距             |
| `2`   | `$spacer * .5`   | **8px**  | 小間距               |
| `12`  | `$spacer * .75`  | **12px** | 微調間距             |
| `3`   | `$spacer`        | **16px** | 標準間距 ⭐          |
| `4`   | `$spacer * 1.5`  | **24px** | 中等間距             |
| `36`  | `$spacer * 2.25` | **36px** | 區塊間距             |
| `40`  | `$spacer * 2.5`  | **40px** | 大區塊間距           |
| `5`   | `$spacer * 3`    | **48px** | 特大間距             |
| `80`  | `$spacer * 5`    | **80px** | 超大間距（區域分隔） |

**使用範例：** `mt-3` (margin-top: 16px), `p-4` (padding: 24px)

</details>

---

## 📱 響應式斷點（Grid Breakpoints）

<details>
<summary><strong>螢幕尺寸斷點</strong></summary>

| 斷點  | 最小寬度 | 適用裝置             |
| ----- | -------- | -------------------- |
| `xs`  | `0px`    | 超小型裝置（預設）   |
| `sm`  | `576px`  | 小型裝置（手機橫向） |
| `md`  | `768px`  | 中型裝置（平板）     |
| `lg`  | `992px`  | 大型裝置（桌機）     |
| `xl`  | `1200px` | 超大型裝置           |
| `xxl` | `1400px` | 超超大型裝置         |

**使用範例：** `col-md-6`, `d-lg-none`

</details>

---

## 🔲 邊框系統

<details>
<summary><strong>邊框寬度（Border Widths）</strong></summary>

| Class      | 寬度值  |
| ---------- | ------- |
| `border-1` | **1px** |
| `border-2` | **2px** |
| `border-3` | **3px** |
| `border-4` | **4px** |
| `border-5` | **5px** |

</details>

<details>
<summary><strong>圓角半徑（Border Radius）</strong></summary>

| 變數名稱              | 數值      | 說明        |
| --------------------- | --------- | ----------- |
| `$border-radius-sm`   | **4px**   | 小圓角      |
| `$border-radius`      | **6px**   | 預設圓角 ⭐ |
| `$border-radius-lg`   | **8px**   | 大圓角      |
| `$border-radius-xl`   | **16px**  | 超大圓角    |
| `$border-radius-xxl`  | **32px**  | 極大圓角    |
| `$border-radius-pill` | **800px** | 膠囊形狀    |

**使用範例：** `rounded` (6px), `rounded-pill` (完全圓角)

</details>

---

## ✍️ 文字系統

<details>
<summary><strong>字體大小（Font Sizes）</strong></summary>

### 標題尺寸（Headings）

| 標籤   | 變數值                   | 實際大小 |
| ------ | ------------------------ | -------- |
| `<h1>` | `$font-size-base * 2.5`  | **40px** |
| `<h2>` | `$font-size-base * 2`    | **32px** |
| `<h3>` | `$font-size-base * 1.75` | **28px** |
| `<h4>` | `$font-size-base * 1.5`  | **24px** |
| `<h5>` | `$font-size-base * 1.25` | **20px** |
| `<h6>` | `$font-size-base`        | **16px** |

### 展示字體（Display）

| Class       | 實際大小 | 使用場景   |
| ----------- | -------- | ---------- |
| `display-1` | **80px** | 超大標題   |
| `display-2` | **72px** | 特大標題   |
| `display-3` | **64px** | 大標題     |
| `display-4` | **56px** | 中大標題   |
| `display-5` | **48px** | 中標題     |
| `display-6` | **40px** | 小展示標題 |

</details>

<details>
<summary><strong>字重（Font Weights）</strong></summary>

| 變數名稱                | 數值      | 說明    |
| ----------------------- | --------- | ------- |
| `$font-weight-lighter`  | `lighter` | 更細    |
| `$font-weight-light`    | `300`     | 細體    |
| `$font-weight-normal`   | `400`     | 正常 ⭐ |
| `$font-weight-medium`   | `500`     | 中等    |
| `$font-weight-semibold` | `600`     | 半粗體  |
| `$font-weight-bold`     | `700`     | 粗體    |
| `$font-weight-bolder`   | `bolder`  | 更粗    |

**使用範例：** `fw-normal`, `fw-bold`

</details>

<details>
<summary><strong>行高（Line Heights）</strong></summary>

| 變數名稱          | 數值   | 說明        |
| ----------------- | ------ | ----------- |
| `$line-height-sm` | `1.25` | 緊湊行距    |
| 預設              | `1.5`  | 標準行距 ⭐ |
| `$line-height-lg` | `2`    | 寬鬆行距    |

</details>

---

## 💡 快速參考

### 常用組合

```scss
// 卡片樣式
.card {
  padding: 24px; // p-4
  border-radius: 8px; // rounded-lg
  margin-bottom: 16px; // mb-3
}

// 按鈕樣式
.btn {
  padding: 12px 24px; // py-12 px-4
  border-radius: 6px; // rounded
  font-weight: 500; // fw-medium
}

// 標題間距
.section-title {
  margin-bottom: 36px; // mb-36
  font-size: 32px; // h2
}
```
