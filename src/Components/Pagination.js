import React from "react";

const Pagination = () => {
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const data = useSelector((state) => state.user);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  return <div></div>;
};

export default Pagination;
