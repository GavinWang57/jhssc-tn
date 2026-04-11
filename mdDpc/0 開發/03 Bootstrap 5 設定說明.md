# Bootstrap 5 設定說明

## 專案 Bootstrap 版本

- **Bootstrap**: v5.3.8
- **Bootstrap Icons**: v1.13.1

## 一、需要複製的檔案

從 `src/assets/scss/utils/` 資料夾中，需要複製以下檔案：

```
src/assets/scss/utils/
├── _variables.scss          # 自訂變數（覆蓋 Bootstrap 預設變數）
├── _variables-dark.scss     # 深色模式變數
├── _modal.scss             # 自訂 Modal 樣式
└── _utilities.scss         # 自訂工具類別
```

### 檔案說明

#### 1. `_variables.scss`

- **用途**: 覆蓋 Bootstrap 預設變數
- **內容**: 包含顏色系統、字型、間距等自訂變數
- **重要性**: ⭐⭐⭐ 必須檔案（用於自訂主題顏色）
- **字型設定範例**:
  ```scss
  $font-family-sans-serif:
    "Noto Sans TC",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  ```

#### 2. `_variables-dark.scss`

- **用途**: 設定深色模式的變數
- **內容**: 深色模式下的顏色、背景、邊框等樣式
- **重要性**: ⭐⭐ 選用（如需支援深色模式）

#### 3. `_modal.scss`

- **用途**: 自訂 Modal 元件樣式
- **內容**: 覆蓋 Bootstrap Modal 的預設樣式
- **重要性**: ⭐⭐ 選用（如需自訂 Modal 樣式）

#### 4. `_utilities.scss`

- **用途**: 自訂或擴充 Bootstrap 工具類別
- **內容**: 如 opacity、overflow、display 等工具類別
- **重要性**: ⭐ 選用（如需額外工具類別）

---

## 二、檔案引入位置與順序

### 主要 SCSS 入口檔案

**檔案位置**: `src/assets/scss/all.scss`

### 引入順序（重要！）

```scss
// 1. 引入 Bootstrap 函式庫（functions）- 必須最先引入
@import "../../../node_modules/bootstrap/scss/functions";

// 2. 引入自訂變數 - 在 Bootstrap 變數之前引入以覆蓋預設值
@import "./utils/variables";

// 3. 引入 Bootstrap mixins
@import "../../../node_modules/bootstrap/scss/mixins";

// 4. 引入完整的 Bootstrap
@import "../../../node_modules/bootstrap";

//  5. 引入 Bootstrap icon
@import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

// 6. 引入自訂元件樣式
@import "./utils/modal";
```

### 為什麼順序很重要？

1. **Functions 必須最先** → 提供 SCSS 函式（如 `tint-color()`、`shade-color()`）
2. **自訂 Variables 在中間** → 覆蓋 Bootstrap 預設變數
3. **Mixins 其次** → 提供 SCSS mixins
4. **Bootstrap 主檔案** → 載入所有 Bootstrap 樣式
5. **自訂樣式最後** → 覆蓋或擴充 Bootstrap 樣式

---

## 三、在 React 專案中引入

### 在 `src/main.jsx` 中引入

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/scss/all.scss"; // ← 引入主要 SCSS 檔案
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

---

## 四、完整設定步驟

### 步驟 1: 安裝依賴套件

```bash
npm install bootstrap@^5.3.8 sass
npm install bootstrap-icons  # 選用
```

### 步驟 2: 建立資料夾結構

```
src/
└── assets/
    └── scss/
        ├── all.scss          # 主要 SCSS 入口
        └── utils/
            ├── _variables.scss
            ├── _variables-dark.scss
            ├── _modal.scss
            └── _utilities.scss
```

### 步驟 3: 複製檔案

將 `_variables.scss`、`_variables-dark.scss`、`_modal.scss`、`_utilities.scss` 複製到 `src/assets/scss/utils/` 資料夾。

### 步驟 4: 設定 all.scss

按照「二、檔案引入位置與順序」的規則設定 `all.scss`。

### 步驟 5: 在 main.jsx 引入

```jsx
import "./assets/scss/all.scss";
```

---

## 五、自訂變數範例

### 修改主題色（在 \_variables.scss 中）

```scss
// 覆蓋 Bootstrap 預設主色
$primary: #007bff; // 主色
$secondary: #6c757d; // 次要色
$success: #28a745; // 成功色
$danger: #dc3545; // 危險色

// 覆蓋字型
$font-family-sans-serif:
  "Noto Sans TC",
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  Roboto,
  sans-serif;

// 覆蓋間距
$spacer: 1rem;
```

---

## 六、注意事項

1. **變數必須在引入 Bootstrap 之前定義** - 才能覆蓋預設值
2. **保持引入順序** - functions → variables → mixins → bootstrap → 自訂樣式
3. **使用 `!default` 標記** - 在 `_variables.scss` 中使用 `!default` 可避免衝突
4. **路徑參照** - 確保 `@import` 路徑正確，特別是 node_modules 的相對路徑

---

## 七、常見問題

### Q1: 為什麼要分開引入 functions 和 variables？

**A**: Bootstrap 的 functions 提供了顏色函式（如 `tint-color()`），自訂變數中可能會用到這些函式，所以必須先引入。

### Q2: 可以只引入需要的 Bootstrap 元件嗎？

**A**: 可以，不引入完整的 `@import "bootstrap"`，而是單獨引入需要的模組：

```scss
@import "../../../node_modules/bootstrap/scss/buttons";
@import "../../../node_modules/bootstrap/scss/modal";
```

### Q3: 深色模式如何啟用？

**A**: 在 HTML 元素上加入 `data-bs-theme="dark"` 屬性：

```html
<html data-bs-theme="dark"></html>
```

---

## 八、參考資源

- [Bootstrap 官方文件](https://getbootstrap.com/docs/5.3/customize/sass/)
- [Bootstrap Theming](https://getbootstrap.com/docs/5.3/
