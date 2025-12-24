/*
 * @Date: 2025-12-24 21:21:57
 * @LastEditors: Newcy4 newcy44@gmail.com
 * @LastEditTime: 2025-12-24 21:22:03
 * @FilePath: /christmas-tree/src/components/ChristmasTitle.tsx
 */
import React from "react";
import "./christmas-title.css";

interface ChristmasTitleProps {
  title: string;
  subtitle?: string;
}

export const ChristmasTitle: React.FC<ChristmasTitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="christmas-title-wrapper">
      <div className="christmas-title-frame">
        <span className="decor left">🎄</span>

        <div className="title-content">
          <h1 className="christmas-title">{title}</h1>
          {subtitle && <div className="christmas-subtitle">{subtitle}</div>}
        </div>

        <span className="decor right">⭐</span>
      </div>
    </div>
  );
};
