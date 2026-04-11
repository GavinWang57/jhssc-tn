# React Helmet 使用指南

## 簡介

React Helmet 是一個用於管理 React 應用程式 HTML `<head>` 標籤的工具。它可以動態設定頁面標題、meta 標籤、Open Graph 標籤等，對 SEO 和社交媒體分享非常有幫助。

本指南使用 `react-helmet-async`（推薦版本，支援 Concurrent Mode）。

## 安裝

```bash
npm install react-helmet-async
```

## 基本設定

### 1. 在根組件包裹 HelmetProvider

在 `main.jsx` 或 `App.jsx` 中設定：

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
```

### 2. 在組件中使用 Helmet

```jsx
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>首頁 - 我的網站</title>
        <meta name="description" content="這是首頁的描述" />
      </Helmet>

      <div>
        <h1>歡迎來到首頁</h1>
      </div>
    </>
  );
}

export default HomePage;
```

## 常用功能

### 設定頁面標題

```jsx
<Helmet>
  <title>關於我們 - 公司名稱</title>
</Helmet>
```

### 設定 Meta 標籤

```jsx
<Helmet>
  <meta name="description" content="網站描述，用於 SEO" />
  <meta name="keywords" content="關鍵字1, 關鍵字2, 關鍵字3" />
  <meta name="author" content="作者名稱" />
</Helmet>
```

### 設定 Open Graph（社交媒體分享）

```jsx
<Helmet>
  <meta property="og:title" content="文章標題" />
  <meta property="og:description" content="文章描述" />
  <meta property="og:image" content="https://example.com/image.jpg" />
  <meta property="og:url" content="https://example.com/page" />
  <meta property="og:type" content="website" />
</Helmet>
```

### 設定語言和字元編碼

```jsx
<Helmet>
  <html lang="zh-TW" />
  <meta charset="UTF-8" />
</Helmet>
```

### 載入外部資源

```jsx
<Helmet>
  <link rel="stylesheet" href="https://example.com/style.css" />
  <script src="https://example.com/script.js"></script>
</Helmet>
```

## 實際應用範例

### 範例 1：部落格文章頁面

```jsx
import { Helmet } from "react-helmet-async";

function BlogPost({ post }) {
  return (
    <>
      <Helmet>
        <title>{post.title} - 我的部落格</title>
        <meta name="description" content={post.excerpt} />

        {/* Open Graph 標籤 */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.coverImage} />
      </Helmet>

      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
}

export default BlogPost;
```

### 範例 2：動態標題與預設值

```jsx
import { Helmet } from "react-helmet-async";

function ProductPage({ product }) {
  const pageTitle = product
    ? `${product.name} - 線上商店`
    : "商品載入中 - 線上商店";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        {product && (
          <>
            <meta name="description" content={product.description} />
            <meta property="og:title" content={product.name} />
            <meta property="og:image" content={product.image} />
            <meta property="og:price:amount" content={product.price} />
            <meta property="og:price:currency" content="TWD" />
          </>
        )}
      </Helmet>

      <div>
        {product ? (
          <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>價格：NT$ {product.price}</p>
          </div>
        ) : (
          <p>載入中...</p>
        )}
      </div>
    </>
  );
}

export default ProductPage;
```

### 範例 3：建立可重用的 SEO 組件

```jsx
import { Helmet } from "react-helmet-async";

function SEO({ title, description, image, url, type = "website" }) {
  const siteTitle = "我的網站";
  const fullTitle = title ? `${title} - ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}

export default SEO;

// 使用方式
function AboutPage() {
  return (
    <>
      <SEO
        title="關於我們"
        description="了解我們的故事和使命"
        image="https://example.com/about-image.jpg"
        url="https://example.com/about"
      />

      <div>
        <h1>關於我們</h1>
        <p>內容...</p>
      </div>
    </>
  );
}
```

## 配合 React Router 使用

```jsx
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </HelmetProvider>
  );
}
```

## 注意事項

1. **必須包裹 HelmetProvider**：確保在應用程式根部使用 `<HelmetProvider>`
2. **優先順序**：後面的 Helmet 會覆蓋前面的設定
3. **效能**：Helmet 只在瀏覽器環境中更新 DOM，不會影響服務端渲染
4. **SEO**：對於靜態網站生成（SSG），建議使用框架內建的 Head 管理（如 Next.js 的 `<Head>`）

## 常見問題

### Q: Helmet 和 useEffect 設定 title 有什麼差別？

**A:** Helmet 提供更完整的 head 管理，包含 meta 標籤、Open Graph 等，適合需要 SEO 的場景。useEffect 只能設定 title，適合簡單場景。

### Q: 標題沒有更新？

**A:** 檢查是否：

- 已經包裹 `<HelmetProvider>`
- 使用的是 `react-helmet-async` 而非舊版 `react-helmet`
- Helmet 組件有正確渲染

### Q: 如何設定預設的 meta 標籤？

**A:** 在根組件使用 Helmet 設定預設值：

```jsx
function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>預設標題</title>
        <meta name="description" content="預設描述" />
      </Helmet>

      <Routes>{/* 路由 */}</Routes>
    </HelmetProvider>
  );
}
```

## 相關資源

- [react-helmet-async GitHub](https://github.com/staylor/react-helmet-async)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

---

**更新日期**：2026年3月25日
