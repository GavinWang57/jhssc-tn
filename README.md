# jhssc-tn

技職教育宣導網站，使用 React + Vite 建置。

## 安裝

需先安裝 [Node.js](https://nodejs.org/)，再執行：

```bash
npm install
```

## 開發

啟動本機開發伺服器（含 HMR）：

```bash
npm run dev
```

執行後於瀏覽器開啟終端機顯示的網址（預設為 `http://localhost:5173`）即可預覽網站，修改程式碼會自動即時更新。

## Build 並導出網頁檔案

打包成靜態網頁檔案：

```bash
npm run build
```

建置完成後，靜態檔案會輸出至 `dist/` 資料夾，可直接部署到任何靜態網頁主機。

打包前可先用以下指令在本機預覽 build 後的結果：

```bash
npm run preview
```

若要直接部署到 GitHub Pages（此專案的 gh-pages 分支）：

```bash
npm run deploy
```

此指令會自動執行 `build`，並將 `dist/` 內容推送到 `gh-pages` 分支。

## 網站地圖

部署網址：https://gavinwang57.github.io/jhssc-tn/

| 路徑                          | 頁面           |
| ----------------------------- | -------------- |
| `/`                            | 首頁           |
| `/news-coverage`               | 新聞露出       |
| `/skills-education`            | 技藝教育       |
| `/career-exploration-center`   | 職探中心       |
| `/job-clusters`                 | 職群介紹       |
| `/vocational-expo`              | 技職博覽會專區 |
| `/other-resources`              | 其他資源       |
| `/related-links`                | 相關連結       |

## 檔案結構

```
jhssc-tn/
├── public/              # 靜態資源，build 時原封不動複製到 dist/
├── src/
│   ├── main.jsx         # 應用程式進入點
│   ├── App.jsx          # 根元件
│   ├── AppRoutes.jsx    # 路由設定
│   ├── pages/           # 各頁面元件（首頁、職群介紹、技職教育課程等）
│   ├── components/      # 共用元件（導覽列、頁尾、首頁區塊等）
│   ├── data/            # 頁面內容資料（json / js）
│   └── assets/
│       ├── images/      # 圖片素材
│       └── scss/        # 樣式（依 layout / pages / utils 分類）
├── mdDpc/                # 開發筆記與參考資料
├── dist/                 # build 產出的靜態網頁檔案（已加入 .gitignore）
├── vite.config.js        # Vite 設定
└── package.json
```

### Pages（`src/pages/`）

| 檔案                            | 對應路徑                    | 說明                                     |
| ------------------------------- | ---------------------------- | ---------------------------------------- |
| `Home.jsx`                      | `/`                           | 首頁，主視覺 Banner 與各分類導覽卡片     |
| `NewsCoverage.jsx`               | `/news-coverage`              | 新聞露出彙整                             |
| `SkillsEducation.jsx`            | `/skills-education`           | 技藝教育課程介紹                         |
| `CareerExplorationCenter.jsx`    | `/career-exploration-center`  | 職探中心據點介紹                         |
| `JobClusters.jsx`                | `/job-clusters`                | 職群介紹，依群別分類影片與資料           |
| `VocationalExpo.jsx`             | `/vocational-expo`             | 技職博覽會專區，活動資訊、宣傳影片、花絮 |
| `OtherResources.jsx`             | `/other-resources`             | 其他職群延伸圖文資源                     |
| `RelatedLinks.jsx`               | `/related-links`               | 相關連結彙整                             |

### Components（`src/components/`）

| 檔案                     | 說明                                       |
| ------------------------ | ------------------------------------------ |
| `layout/Nav.jsx`         | 頂部導覽列，含各頁面連結與手機版漢堡選單   |
| `layout/Footer.jsx`      | 頁尾，含機關資訊、聯絡方式與版權宣告       |
| `home/Banner.jsx`        | 首頁主視覺 Banner                          |
| `home/Card.jsx`          | 可重複使用的導覽卡片（首頁分類入口）       |
| `footer/Copyright.jsx`   | 版權宣告區塊                               |
