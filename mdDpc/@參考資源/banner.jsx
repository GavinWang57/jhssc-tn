import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 整理出的三個精簡副標題
const subtitles = [
  "從實作中發現潛能，在體驗中預見未來",
  "落實職探教育向下延伸，協助學子探索性向、擇其所適",
  "開啟職涯的第一扇窗：實境教學 × 多元體驗 × 專業試探",
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  // 自動輪播邏輯
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % subtitles.length);
    }, 3500); // 每 3.5 秒切換一次
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-slate-900 flex items-center px-12 text-white">
      {/* 背景圖層（可換成您的校舍背景圖並加上深色遮罩） */}
      <div
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-school-image.jpg')" }}
      />

      {/* 文字內容區 */}
      <div className="relative z-10 max-w-3xl">
        {/* 主標題：使用較粗、較大的字體層次 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider leading-tight">
          西螺國中 <br />
          <span className="text-blue-400">「職業試探與體驗示範中心」</span>
        </h1>

        {/* 自動輪換副標題區 */}
        <div className="h-10 flex items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-light text-gray-200 border-l-4 border-blue-500 pl-4 italic"
            >
              {subtitles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* 呼籲行動按鈕 (讓畫面有重心，不必塞滿文字) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-10 px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors font-medium text-lg"
        >
          了解更多中心理念
        </motion.button>
      </div>

      {/* 右側裝飾性元素（可放置您圖片右側的圓圈圖示） */}
      <div className="hidden lg:block absolute right-20 opacity-60 pointer-events-none">
        {/* 這裡可放置右側的 SVG 圓圈結構 */}
      </div>
    </div>
  );
};

export default Banner;
