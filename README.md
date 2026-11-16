# 新竹美食推薦指南（Hsinchu Food Guide）

一個以靜態網頁建置的新竹美食推薦網站，將美食依照**新竹市**與**新竹縣**分類呈現。每間店家以獨立卡片顯示，點擊卡片即可開啟詳細介紹彈窗，檢視店家資訊、推薦菜色與原始資料來源。

## 主要功能

- **縣市分類與即時統計**：頂部顯示總收錄數、新竹市與新竹縣店家數量，並支援一鍵切換「全部」、「新竹市」、「新竹縣」頁籤。
- **多條件篩選與搜尋**：支援依鄉鎮市區（動態對應所選縣市）、美食類別篩選，以及店名、菜色與關鍵字即時搜尋。
- **卡片與詳細資料彈窗**：點擊任一美食卡片可展開詳細介紹、推薦亮點／必點菜色、地址、營業時間、電話、價位參考，以及來源網站標題與原始連結。
- **純前端免伺服器運行**：資料存放於 `assets/js/data.js`，直接以瀏覽器開啟 `index.html` 即可瀏覽，無需架設後端或處理本地 CORS 限制。

## 專案結構

```text
.
├── index.html                  # 網站主頁面（版面結構、篩選列與詳細資料彈窗）
├── AGENTS.md                   # AI 助手解析外部網站 HTML 與更新資料的操作規範
├── README.md                   # 專案說明文件
└── assets/
    ├── css/
    │   └── style.css           # 網站樣式表（響應式卡片網格、頁籤與彈窗樣式）
    ├── js/
    │   ├── data.js             # 美食資料集（window.FOOD_DATA 陣列）
    │   └── app.js              # 卡片渲染、篩選統計與彈窗互動邏輯
    └── images/
        └── placeholder.svg     # 預設美食圖片佔位圖
```

## 快速預覽

直接雙擊開啟專案根目錄下的 `index.html`，或於專案目錄啟動任一靜態網頁伺服器即可瀏覽：

```bash
python3 -m http.server 8000
```

接著在瀏覽器開啟 `http://localhost:8000`。

## 新增與維護美食資料

本專案透過 `AGENTS.md` 規範 AI 助手自動化整理外部網站內容：

1. 將外部美食推薦網站的 `.html` 檔案提供給 AI 助手或放入專案資料夾。
2. AI 助手會先讀取 `AGENTS.md`，從 HTML 擷取店家資訊、對應的縣市（`新竹市` 或 `新竹縣`）與鄉鎮市區，以及原始文章來源。
3. 經過重複檢查後，將資料寫入 `assets/js/data.js` 的 `window.FOOD_DATA` 陣列，重新整理 `index.html` 即可看到新卡片。

若需手動編輯 `assets/js/data.js`，每筆資料的欄位格式如下：

```js
{
  id: "unique-slug-id",
  name: "店家名稱",
  city: "新竹市", // 僅限 "新竹市" 或 "新竹縣"
  district: "東區",
  category: "在地小吃",
  summary: "卡片正面的簡短介紹",
  description: "點擊彈窗中的完整詳細介紹",
  highlights: ["推薦菜色 1", "特色亮點 2"],
  address: "完整地址",
  hours: "營業時間",
  phone: "聯絡電話",
  price: "價位參考",
  image: "assets/images/placeholder.svg",
  source: {
    title: "來源網站名稱｜文章標題",
    url: "https://example.com/original-article",
    addedDate: "2026-11-16"
  }
}
```
