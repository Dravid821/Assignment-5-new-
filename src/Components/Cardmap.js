import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import StarIcon from "@mui/icons-material/Star";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import carddata from "../redux/Actions/actions";
import { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import "../asset/scss/cardmap.scss";
export default function Cardmap() {
  const items = useSelector((state) => state.datareducer.user);
  const [active, setActive] = useState(0);
  const totalPages = Math.ceil(100 / 8); // Total number of pages
  const prevPage = active > 1 ? active - 1 : null; // Previous page number
  const nextPage = active < totalPages ? active + 1 : null; // Next page number
  console.log("items", items);
  const dispatch = useDispatch();

  const handleChangePage = (number) => {
    setActive(number);
    dispatch(carddata((number - 1) * 8));
  };
  //Add Pagination Funcnality
  let pagesitem = [];
  if (prevPage) {
    pagesitem.push(
      <Pagination.Prev key="prev" onClick={() => handleChangePage(prevPage)} />
    );
  }
  let startPage = Math.max(1, active - 2); // Start page number
  let endPage = Math.min(totalPages, startPage + 3); // End page number
  for (let number = startPage; number <= endPage; number++) {
    pagesitem.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleChangePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  if (nextPage) {
    pagesitem.push(
      <Pagination.Next key="next" onClick={() => handleChangePage(nextPage)} />
    );
  }
  // Pagination page change Function pass in useffects.
  useEffect(() => {
    handleChangePage(1);
  }, [dispatch]);
  //Product Data Map
  return (
    //  <h1>{items[0].title}</h1>
    <>
      <div className="container-fluid">
        <div className="row  mt-3">
          {items.products ? (
            items.products.map((item) => {
              return (
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 d-flex justify-content-center">
                  <MDBCard key={item.id} className="card">
                    <div className="d-flex justify-content-between p-3">
                      <p className="lead mb-0">Combo Offer</p>
                      <div
                        className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <p className="text-white mb-0 small">
                          {item.discountPercentage}%
                        </p>
                      </div>
                    </div>
                    <MDBCardImage
                      src={item.thumbnail}
                      className="shade img"
                      height={500}
                    />
                    <MDBCardBody>
                      <div className="d-flex justify-content-center">
                        <p className="small mb-0 text-danger">
                          <p>{item.brand}</p>
                        </p>
                      </div>
                      <div className="d-flex justify-content-center ">
                        <span className="mb-0">{item.title}</span>
                      </div>

                      <div className="d-flex justify-content-center pt-3">
                        <span>
                          <span class="badge bg-success">
                            <div>
                              {item.rating}
                              <StarIcon fontSize="small" />
                            </div>
                          </span>
                        </span>
                      </div>
                      <div className="d-flex justify-content-center pt-3">
                        <h5 className="text-dark mb-0">Price:${item.price}</h5>
                      </div>
                      <div class="d-flex justify-content-center pt-4">
                        <button type="button" class="btn btn-dark ">
                          <NavLink
                            to={`/product/${item.id}`}
                            className="slink text-white"
                          >
                            View More
                          </NavLink>
                        </button>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              );
            })
          ) : (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          <br />
          <div className="d-flex justify-content-center">
            <Pagination className="pagination-line pagination_container page">
              {pagesitem}
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
}
