import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "../asset/scss/carddetail.scss";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
// import Carousel from "react-bootstrap/Carousel";

import ImageSlider from "./ImageSlider";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Carddetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(data);
  console.log(data.images);

  useEffect(() => {
    axios
      .get(` https://dummyjson.com/products/${id}`)
      .then((response) => {
        setData(response.data);
        console.log("data", data);
      })
      .catch((error) => {
        const msg = error.message;
        console.log("error", msg);
      });
  }, []);
  const BackToShop = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        {data.title ? (
          <section>
            <div class="container py-2">
              <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-4">
                  <div class="card text-black">
                    <ImageSlider images={data.images} className="img-fluid" />
                    <div className="card-body">
                      <div class="text-center">
                        <h1 className="card-title">{data.category}</h1>
                        <div className="d-flex justify-content-between pt-3">
                          <h5 className="text-danger mb-4">{data.brand}</h5>
                          <p className="text-success mb-4">{data.title}</p>
                        </div>
                      </div>
                      <div>
                        <div class="d-flex justify-content-between">
                          <span className="">Stock:</span>
                          <span>{data.stock}</span>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                          <span>Rating :&nbsp;</span>
                          <span className="text-warning">
                            <div>
                              {data.rating}
                              <StarIcon />
                              <StarHalfIcon />
                            </div>
                          </span>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between total font-weight-bold mt-4">
                        <span>Description :&nbsp;{data.description}</span>
                      </div>
                      <div class="d-flex justify-content-between total font-weight-bold mt-4">
                        <span>Discount :&nbsp;</span>
                        <h6>{data.discountPercentage}% off</h6>
                      </div>
                      <div class="d-flex justify-content-between total font-weight-bold mt-4">
                        <span>Price :</span>
                        <h4 className="mb-1 me-1">$13.99</h4>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <NavLink>
                        <button
                          className="btn btn-primary btn-md m-2"
                          type="button"
                        >
                          Add To Cart
                        </button>
                      </NavLink>
                      <NavLink to={`/product`}>
                        <button
                          onClick={BackToShop}
                          className="btn btn-outline-primary btn-md m-2"
                          type="button"
                        >
                          <ShoppingCartIcon />
                          Back To Shopping Page
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <>
              <div class="container">
                <div id="demo" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="card">
                        <div class="row">
                          <div class="col-md-6 text-center align-self-center">
                            {" "}
                            <ImageSlider images={data.images} />
                          </div>
                          <div class="col-md-6 info">
                            <div class="row title">
                              <div class="col-12 ">
                                <div class="text-center">
                                  <h1 className="card-title">
                                    {data.category}
                                  </h1>
                                  <div className="d-flex justify-content-between pt-3">
                                    <h5 className="text-danger mb-4">
                                      {data.brand}
                                    </h5>
                                    <p className="text-success mb-4">
                                      {data.title}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="col text-right">
                                <a href="#">
                                  <i class="fa fa-heart-o"></i>
                                </a>
                              </div>
                            </div>
                            <span id="reviews">1590 Reviews</span>
                            <div class="row price">
                              <div class="d-flex justify-content-between">
                                <span className="">Stock:</span>
                                <span>{data.stock}</span>
                              </div>
                              <div class="d-flex justify-content-between mt-3">
                                <span>Rating :&nbsp;</span>
                                <span className="text-warning">
                                  <div>
                                    {data.rating}
                                    <StarIcon />
                                    <StarHalfIcon />
                                  </div>
                                </span>
                              </div>
                              <div class="d-flex justify-content-between total font-weight-bold mt-4">
                                <span>
                                  Description :&nbsp;{data.description}
                                </span>
                              </div>
                              <div class="d-flex justify-content-between total font-weight-bold mt-4">
                                <span>Discount :&nbsp;</span>
                                <h6>{data.discountPercentage}% off</h6>
                              </div>
                              <div class="d-flex justify-content-between total font-weight-bold mt-4">
                                <span>Price :</span>
                                <h4 className="mb-1 me-1">${data.price}</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row lower">
                          <div class="col">
                            {" "}
                            <a
                              class="carousel-control-prev"
                              href="#demo"
                              data-slide="prev"
                            >
                              <i class="fa fa-arrow-left"></i>
                            </a>{" "}
                            <a
                              class="carousel-control-next"
                              href="#demo"
                              data-slide="next"
                            >
                              <i class="fa fa-arrow-right"></i>
                            </a>{" "}
                          </div>
                          <div class="col text-right align-self-center">
                            {" "}
                            <button class="btn">Add to cart</button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="card">
                        <div class="path">
                          HOME / FACE <a>/ CLEANSERS</a>{" "}
                        </div>
                        <div class="row">
                          <div class="col-md-6 text-center align-self-center">
                            {" "}
                            <img
                              class="img-fluid"
                              src="https://i.imgur.com/7a9V4yw.png"
                            />
                          </div>
                          <div class="col-md-6 info">
                            <div class="row title">
                              <div class="col">
                                <h2>Herbalism 2</h2>
                              </div>
                              <div class="col text-right">
                                <a href="#">
                                  <i class="fa fa-heart-o"></i>
                                </a>
                              </div>
                            </div>
                            <p>Natural herbal wash pro</p>{" "}
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>{" "}
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>{" "}
                            <span class="fa fa-star-half-full"></span>
                            <span id="reviews">1590 Reviews</span>
                            <div class="row price">
                              <label class="radio">
                                {" "}
                                <input
                                  type="radio"
                                  name="size2"
                                  value="small"
                                />{" "}
                                <div class="row">
                                  <big>
                                    <b>13.5 oz.</b>
                                  </big>
                                </div>{" "}
                                <div class="row">$36.95</div>{" "}
                              </label>
                              <label class="radio">
                                {" "}
                                <input
                                  type="radio"
                                  name="size2"
                                  value="large"
                                  checked
                                />{" "}
                                <div class="row">
                                  <big>
                                    <b>18.4 oz.</b>
                                  </big>
                                </div>{" "}
                                <div class="row">$61.95</div>{" "}
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="row lower">
                          <div class="col">
                            {" "}
                            <a
                              class="carousel-control-prev"
                              href="#demo"
                              data-slide="prev"
                            >
                              <i class="fa fa-arrow-left"></i>
                            </a>{" "}
                            <a
                              class="carousel-control-next"
                              href="#demo"
                              data-slide="next"
                            >
                              <i class="fa fa-arrow-right"></i>
                            </a>{" "}
                          </div>
                          <div class="col text-right align-self-center">
                            {" "}
                            <button class="btn">Add to cart</button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </> */}
          </section>
        ) : (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </div>
    </>
  );
};
export default Carddetail;
