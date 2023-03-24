import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from 'reactstrap';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  CardImg,
} from "reactstrap";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import carddata, { setPage } from "../Services/Actionns/actions";
import { useEffect } from "react";
export default function Cardmap() {
  const items = useSelector((state) => state.datareducer.user.products);
  const currentPage = useSelector(state => state.datareducer.currentPage);
  const itemsPerPage = useSelector(state => state.datareducer.itemsPerPage);
  const data = useSelector(state => state.datareducer.user);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  console.log("items", items);
  const dispatch = useDispatch();

  const handleChangePage = (page) => {
    dispatch(setPage(page));
  };
  // const getData = async () => {
  //   await dispatch(fetchsuccess({ postsPerPage, currentPage }));
  // };
  useEffect(() => {
    dispatch(carddata());
    // dispatch(getData());
  }, []);
  return (
    //  <h1>{items[0].title}</h1>
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-between mt-3">
          {items
            ? items.map((item) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3">
                    <MDBCard key={item.id}>
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
                        <div className="d-flex justify-content-between">
                          <p className="small">
                            <a href="#!" className="text-muted">
                              {item.category}
                            </a>
                          </p>
                          <p className="small text-danger">
                            <s>{item.brand}</s>
                          </p>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                          <h5 className="mb-0">{item.title}</h5>
                          <h5 className="text-dark mb-0">
                            Price:${item.price}
                          </h5>
                        </div>

                        <div class="d-flex justify-content-between mb-2">
                          <p class="text-muted mb-0">
                            Available: <span class="fw-bold">{item.stock}</span>
                          </p>
                          <div class="ms-auto text-warning">
                            <h5>{item.rating}</h5>
                            <MDBIcon fas icon="star" />
                          </div>
                        </div>
                        <button type="button" class="btn btn-dark">
                          View More
                        </button>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                );
              })
            : "Data Loading"}
            <Pagination currentPage={currentPage} totalPages={totalPages} onChangePage={handleChangePage} />
        </div>
      </div>
    </>
  );
}
