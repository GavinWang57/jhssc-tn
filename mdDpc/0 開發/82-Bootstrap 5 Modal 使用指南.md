# Bootstrap 5 Modal 使用指南

Bootstrap 5 Modal 是一個強大的對話框元件，可用於顯示內容、表單、警告等。

## 1. 基本結構

### HTML 結構

```html
<!-- 觸發按鈕 -->
<button
  type="button"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  開啟 Modal
</button>

<!-- Modal -->
<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal 標題</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">Modal 內容區域</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          關閉
        </button>
        <button type="button" class="btn btn-primary">儲存變更</button>
      </div>
    </div>
  </div>
</div>
```

### 結構說明

- `.modal` - 最外層容器
- `.modal-dialog` - 對話框容器
- `.modal-content` - 內容容器
- `.modal-header` - 標題區域
- `.modal-body` - 內容區域
- `.modal-footer` - 底部按鈕區域

## 2. JavaScript 控制

### 原生 JavaScript

```javascript
// 引入 Bootstrap
import * as bootstrap from "bootstrap";

// 方法 1: 使用 data 屬性（推薦）
// 在按鈕上加上 data-bs-toggle="modal" data-bs-target="#modalId"

// 方法 2: 使用 JavaScript API
const modalElement = document.getElementById("exampleModal");
const modal = new bootstrap.Modal(modalElement);

// 開啟 modal
modal.show();

// 關閉 modal
modal.hide();

// 切換 modal
modal.toggle();

// 處理 modal（當已經開啟時不會重新開啟）
modal.handleUpdate();

// 銷毀 modal 實例
modal.dispose();
```

### 事件監聽

```javascript
const modalElement = document.getElementById("exampleModal");

// Modal 即將顯示時觸發
modalElement.addEventListener("show.bs.modal", (event) => {
  console.log("Modal 即將顯示");
});

// Modal 完全顯示後觸發
modalElement.addEventListener("shown.bs.modal", (event) => {
  console.log("Modal 已顯示");
});

// Modal 即將隱藏時觸發
modalElement.addEventListener("hide.bs.modal", (event) => {
  console.log("Modal 即將隱藏");
});

// Modal 完全隱藏後觸發
modalElement.addEventListener("hidden.bs.modal", (event) => {
  console.log("Modal 已隱藏");
});

// Modal 背景準備好時觸發
modalElement.addEventListener("hidePrevented.bs.modal", (event) => {
  console.log("Modal 隱藏被阻止");
});
```

## 3. React 中使用

### 基本範例

```jsx
import { useRef, useEffect } from "react";
import * as bootstrap from "bootstrap";

function MyComponent() {
  const modalRef = useRef(null);
  const modalInstance = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalInstance.current = new bootstrap.Modal(modalRef.current);
    }

    // 清理
    return () => {
      modalInstance.current?.dispose();
    };
  }, []);

  const handleShow = () => {
    modalInstance.current?.show();
  };

  const handleHide = () => {
    modalInstance.current?.hide();
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        開啟 Modal
      </button>

      <div className="modal fade" ref={modalRef} tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal 標題</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleHide}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Modal 內容</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleHide}
              >
                關閉
              </button>
              <button type="button" className="btn btn-primary">
                儲存變更
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
```

### 自訂 Hook

```jsx
import { useRef, useEffect, useCallback } from "react";
import * as bootstrap from "bootstrap";

function useModal() {
  const modalRef = useRef(null);
  const modalInstance = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalInstance.current = new bootstrap.Modal(modalRef.current);
    }

    return () => {
      modalInstance.current?.dispose();
    };
  }, []);

  const show = useCallback(() => {
    modalInstance.current?.show();
  }, []);

  const hide = useCallback(() => {
    modalInstance.current?.hide();
  }, []);

  const toggle = useCallback(() => {
    modalInstance.current?.toggle();
  }, []);

  return { modalRef, show, hide, toggle };
}

// 使用範例
function App() {
  const { modalRef, show, hide } = useModal();

  return (
    <>
      <button className="btn btn-primary" onClick={show}>
        開啟 Modal
      </button>

      <div className="modal fade" ref={modalRef} tabIndex={-1}>
        {/* Modal 內容 */}
      </div>
    </>
  );
}
```

## 4. 常用選項與配置

### Data 屬性

```html
<!-- 靜態背景（點擊背景不關閉） -->
<div class="modal" data-bs-backdrop="static">
  <!-- 無背景 -->
  <div class="modal" data-bs-backdrop="false">
    <!-- 禁用 ESC 關閉 -->
    <div class="modal" data-bs-keyboard="false">
      <!-- 預設開啟 -->
      <div class="modal" data-bs-show="true">
        <!-- 焦點設定 -->
        <div class="modal" data-bs-focus="false"></div>
      </div>
    </div>
  </div>
</div>
```

### JavaScript 選項

```javascript
const modal = new bootstrap.Modal(element, {
  backdrop: "static", // true | false | 'static'
  keyboard: false, // 是否支援 ESC 關閉
  focus: true, // 是否在開啟時聚焦
  show: false, // 初始化後是否立即顯示
});
```

## 5. 尺寸變化

```html
<!-- 小型 Modal -->
<div class="modal-dialog modal-sm">
  <!-- 預設尺寸 -->
  <div class="modal-dialog">
    <!-- 大型 Modal -->
    <div class="modal-dialog modal-lg">
      <!-- 超大型 Modal -->
      <div class="modal-dialog modal-xl">
        <!-- 全螢幕 Modal -->
        <div class="modal-dialog modal-fullscreen">
          <!-- 響應式全螢幕（小於指定斷點時全螢幕） -->
          <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-dialog modal-fullscreen-md-down">
              <div class="modal-dialog modal-fullscreen-lg-down">
                <div class="modal-dialog modal-fullscreen-xl-down">
                  <div class="modal-dialog modal-fullscreen-xxl-down"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## 6. 位置與滾動

### 垂直置中

```html
<div class="modal-dialog modal-dialog-centered">
  <!-- 內容 -->
</div>
```

### 可滾動內容

```html
<div class="modal-dialog modal-dialog-scrollable">
  <div class="modal-content">
    <!-- 長內容會在 modal-body 內滾動 -->
  </div>
</div>
```

## 7. 實用範例

### 確認對話框

```jsx
function ConfirmModal() {
  const { modalRef, show, hide } = useModal();

  const handleConfirm = () => {
    // 執行確認操作
    console.log("已確認");
    hide();
  };

  return (
    <>
      <button className="btn btn-danger" onClick={show}>
        刪除
      </button>

      <div className="modal fade" ref={modalRef} tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">確認刪除</h5>
              <button
                type="button"
                className="btn-close"
                onClick={hide}
              ></button>
            </div>
            <div className="modal-body">
              <p>確定要刪除此項目嗎？此操作無法復原。</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={hide}
              >
                取消
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleConfirm}
              >
                確認刪除
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
```

### 表單 Modal

```jsx
import { useState } from "react";

function FormModal() {
  const { modalRef, show, hide } = useModal();
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("提交資料:", formData);
    hide();
  };

  return (
    <>
      <button className="btn btn-primary" onClick={show}>
        新增用戶
      </button>

      <div className="modal fade" ref={modalRef} tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">新增用戶</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={hide}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">姓名</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={hide}
                >
                  取消
                </button>
                <button type="submit" className="btn btn-primary">
                  儲存
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
```

## 8. 注意事項

1. **避免巢狀 Modal** - 不建議在一個 Modal 內開啟另一個 Modal
2. **無障礙性** - 確保加上適當的 ARIA 屬性
3. **記憶體管理** - 在 React 中記得清理 Modal 實例
4. **背景滾動** - Modal 開啟時會自動禁用背景滾動
5. **Z-index** - 確保 Modal 的 z-index 高於其他元素

## 9. 相關資源

- [Bootstrap 5 Modal 官方文件](https://getbootstrap.com/docs/5.3/components/modal/)
- [Bootstrap 5 JavaScript API](https://getbootstrap.com/docs/5.3/getting-started/javascript/)

## 10. JavaScript 與 JSX 的差異

### 基本概念

- **JavaScript** - 標準的程式語言，可在任何 JS 環境中執行
- **JSX** - JavaScript XML，是 React 的語法擴充，需要經過轉譯（transpile）才能執行

### 主要差異

#### 1. 語法差異

```jsx
// JavaScript (原生 DOM 操作)
const button = document.createElement("button");
button.className = "btn btn-primary";
button.textContent = "點擊我";
button.onclick = handleClick;
document.body.appendChild(button);

// JSX (React)
const button = (
  <button className="btn btn-primary" onClick={handleClick}>
    點擊我
  </button>
);
```

#### 2. class vs className

```jsx
// JavaScript (HTML)
element.setAttribute("class", "btn btn-primary");

// JSX (React)
<button className="btn btn-primary">按鈕</button>;
```

#### 3. for vs htmlFor

```jsx
// JavaScript (HTML)
<label for="inputId">標籤</label>

// JSX (React)
<label htmlFor="inputId">標籤</label>
```

#### 4. 事件處理

```jsx
// JavaScript (小寫、字串)
<button onclick="handleClick()">點擊</button>

// JSX (駝峰式、函式參考)
<button onClick={handleClick}>點擊</button>
```

#### 5. 內聯樣式

```jsx
// JavaScript (字串)
element.style = "color: red; font-size: 16px;";

// JSX (物件)
<div style={{ color: "red", fontSize: "16px" }}>文字</div>;
```

#### 6. 布林屬性

```jsx
// JavaScript
<input type="checkbox" checked="checked">
<button disabled="disabled">按鈕</button>

// JSX
<input type="checkbox" checked={true} />
<button disabled>按鈕</button>
```

#### 7. 自閉合標籤

```jsx
// JavaScript (HTML5 可省略 /)
<img src="image.jpg">
<input type="text">

// JSX (必須加 /)
<img src="image.jpg" />
<input type="text" />
```

### Modal 範例比較

#### JavaScript 版本

```javascript
// 純 JavaScript
const modalHTML = `
  <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">標題</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">內容</div>
      </div>
    </div>
  </div>
`;

document.body.insertAdjacentHTML("beforeend", modalHTML);
const modal = new bootstrap.Modal(document.getElementById("myModal"));
modal.show();
```

#### JSX 版本

```jsx
// React JSX
function MyModal() {
  const modalRef = useRef(null);

  useEffect(() => {
    const modal = new bootstrap.Modal(modalRef.current);
    modal.show();
  }, []);

  return (
    <div className="modal fade" ref={modalRef}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">標題</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="modal-body">內容</div>
        </div>
      </div>
    </div>
  );
}
```

### 檔案副檔名

- `.js` - 一般 JavaScript 檔案
- `.jsx` - 包含 JSX 語法的 React 檔案
- `.tsx` - 包含 JSX 語法的 TypeScript React 檔案

### 何時使用哪一種？

#### 使用 JavaScript (.js)

- 純 JavaScript 邏輯
- Node.js 後端程式
- 工具函式、配置檔案
- 不需要 UI 渲染的程式碼

#### 使用 JSX (.jsx)

- React 元件
- 需要渲染 UI 的程式碼
- 結合 HTML 結構與 JavaScript 邏輯

### 注意事項

1. **JSX 不是字串** - JSX 看起來像 HTML，但它是 JavaScript 物件
2. **需要編譯** - JSX 必須經過 Babel 等工具轉譯成 JavaScript
3. **單一根元素** - JSX 必須有一個根元素，或使用 Fragment (`<>...</>`)
4. **表達式用 {}** - 在 JSX 中使用 JavaScript 表達式需要用大括號包裹

```jsx
// 錯誤：多個根元素
return (
  <div>第一個</div>
  <div>第二個</div>
);

// 正確：使用 Fragment
return (
  <>
    <div>第一個</div>
    <div>第二個</div>
  </>
);

// 正確：使用 div 包裹
return (
  <div>
    <div>第一個</div>
    <div>第二個</div>
  </div>
);
```
