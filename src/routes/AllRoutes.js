import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Admin,
  ProductList,
  ProductDetail,
  Contact,
  ContactSA,
  ContactUK,
  ContactUS,
  PageNotFound,
} from "../pages";
export const AllRoutes = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<ProductList />}></Route>
        <Route path="products/:id" element={<ProductDetail />}></Route>
        <Route path="contact" element={<Contact />}>
          <Route path="sa" element={<ContactSA />}></Route>
          <Route path="uk" element={<ContactUK />}></Route>
          <Route path="us" element={<ContactUS />}></Route>
        </Route>
        <Route
          path="admin"
          element={props.admin ? <Admin /> : <Navigate to="/" />}
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
};
