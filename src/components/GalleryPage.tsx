import { useState } from "react";
import "./gallery-page.css";

const TOTAL_IMAGES = 139;

export default function PhotoGallery() {
  const images = [
    "/photos/top.jpeg",
    ...Array.from({ length: TOTAL_IMAGES }, (_, i) => `/photos/${i + 1}.jpeg`),
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div
      // style={{
      //   height: "90vh",
      //   width: "70vw",
      //   display: "flex",
      //   flexDirection: "column",
      //   gap: 12,
      //   padding: 12,
      //   boxSizing: "border-box",
      // }}
      className="gallery-container"
    >
      {/* 大图区域：70vh */}
      <div
        // style={{
        //   height: "70vh",
        //   background: "#00000010",
        //   borderRadius: 12,
        //   overflow: "hidden",
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        // }}
        className="big-area"
      >
        <img
          src={activeImage}
          alt="active"
          // style={{
          //   maxWidth: "100%",
          //   maxHeight: "100%",
          //   objectFit: "contain",
          // }}
          className="big-area-img"
        />
      </div>

      {/* 缩略图区域：20vh（可滚动） */}
      <div
        // style={{
        //   height: "20vh",
        //   overflowY: "auto",
        //   paddingRight: 4,
        // }}
        className="small-area"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gap: 12,
          }}
        >
          {images.map((src) => (
            <div
              key={src}
              onClick={() => setActiveImage(src)}
              style={{
                height: 100,
                cursor: "pointer",
                borderRadius: 8,
                border:
                  src === activeImage ? "3px solid #1677ff" : "1px solid #ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#00000010",
                overflow: "hidden",
              }}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain", // ⭐ 不裁剪、不变形
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
