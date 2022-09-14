import React, { useEffect } from "react";

function Card({ title, subtitle, image }) {
  return (
    <div className="card">
      {image && (
        <div className="card__image">
          <img src={image} alt={title || subtitle || "image"} />
        </div>
      )}
      <div className="card__content">
        {title && <div className="card__title">{title}</div>}
        {subtitle && <div className="card__subtitle">{subtitle}</div>}
      </div>
    </div>
  );
}

export default Card;
