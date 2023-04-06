import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Spinner } from "@chakra-ui/react";
import Spinner from "react-bootstrap/Spinner";
import StarIcon from "@mui/icons-material/Star";
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
import { NavLink } from "react-router-dom";
import carddata, { setPage } from "../redux/Actions/actions";
import { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
export default function Cardmap() {
  const items = useSelector((state) => state.datareducer.user);
  // const currentPage = useSelector(state => state.datareducer.currentPage);
  // const itemsPerPage = useSelector(state => state.datareducer.itemsPerPage);
  const data = useSelector((state) => state.datareducer.user);
  const [active, setActive] = useState(0);
  // const totalPages = Math.ceil(data.length / itemsPerPage);
  console.log("items", items);
  const dispatch = useDispatch();

  // const handleChangePage = (page) => {
  //   dispatch(setPage(page));
  // };
  const handleChangePage = (number) => {
    setActive(number);
    dispatch(carddata(number * 8));
  };
  // const getData = async () => {
  //   await dispatch(fetchsuccess({ postsPerPage, currentPage }));
  // };
  let pagesitem = [];
  for (let number = 0; number < 100 / 8; number++) {
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
  useEffect(() => {
    dispatch(carddata());
    handleChangePage(0);
    // dispatch(getData());
  }, [dispatch]);
  return (
    //  <h1>{items[0].title}</h1>
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-between mt-3">
          {items.products ? (
            items.products.map((item) => {
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
                          <p>{item.brand}</p>
                        </p>
                      </div>

                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">{item.title}</h5>
                        <h5 className="text-dark mb-0">Price:${item.price}</h5>
                      </div>

                      <div class="d-flex justify-content-between mb-2">
                        <p class="text-muted mb-0">
                          Available: <span class="fw-bold">{item.stock}</span>
                        </p>
                        <div class="ms-auto text-warning">
                          <h5 className="">
                            {item.rating}&nbsp;
                            <span className="">
                              <StarIcon />
                            </span>
                          </h5>
                        </div>
                      </div>
                      <button type="button" class="btn btn-dark">
                        <NavLink
                          to={`/${item.id}`}
                          className="slink text-white"
                        >
                          View More
                        </NavLink>
                      </button>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              );
            })
          ) : (
            <div className="text-center">
              {/* <Spinner
                thickness="20px"
                speed="0.90s"
                emptyColor="white.500"
                color="blue.500"
                size="xl"
              /> */}
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          <br />
          <hr />
          <div className="d-flex justify-content-center">
            <Pagination className="pagination-line pagination_container">
              {pagesitem}
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
}
