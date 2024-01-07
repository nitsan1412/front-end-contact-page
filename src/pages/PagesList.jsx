import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function PagesList({ filter }) {
  const dispatch = useDispatch();
  const userPages = useSelector((state) => state.user.userInfo.pages);

  return (
    <div>
      {userPages && userPages.length > 0
        ? userPages.map((page) => {
            return <div>{page.class_name}</div>;
          })
        : ""}
    </div>
  );
}
