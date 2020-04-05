import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection.styles.scss";

export default function Collection({ items, title }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      {/* filters items to get only 4 and then maps over each one */}
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps}></CollectionItem>
          ))}
      </div>
    </div>
  );
}
