import React from "react";
import { useParams } from "react-router-dom";
export const ProductDetail = () => {
  const params = useParams();

  return (
    <main>
      <div className="component">Product {params.id} - ProductDetail</div>
    </main>
  );
};
