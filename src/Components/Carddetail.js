import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "../asset/scss/carddetail.scss";
import { ApiData } from "../redux/Actions/actions";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
const Carddetail = () => {
  const data = useSelector((state) => state.datareducer.user);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isNaN(id)) {
      navigate("*");
      return;
    }
    dispatch(ApiData(id));
  }, []);
  const BackToShop = () => {
    navigate("/");
  };
  //Productdetail Page map data
  return (
    <>
      <div>
        {data.title ? (
          <section>
            <div className="container">
              <div className="row pt-5">
                <div className="col-md-6 col-sm-12 ">
                  <Carousel>
                    {data.images.map((item, i) => {
                      return (
                        <Carousel.Item key={i}>
                          <img
                            className="d-block w-100 caraimg"
                            src={item}
                            alt="First slide"
                          />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </div>
                <div className="col-md-6 col-sm-12 mt-4">
                  <div className="col-md-12 col-sm-12">
                    <div className="card-body">
                      <div class="text-start">
                        <h1 className="card-title">{data.category}</h1>
                        <div className="pt-3">
                          <h5 className="text-danger mb-4">{data.brand}</h5>
                          <p className="text-success mb-4">{data.title}</p>
                        </div>
                      </div>
                      <div>
                        <div class="d-flex">
                          <span className="">Stock:</span>
                          <span>{data.stock}</span>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                          <span>
                            <span class="badge bg-success">
                              <div>
                                {data.rating}
                                <StarIcon fontSize="small" />
                              </div>
                            </span>
                          </span>
                          {/* <span>Rating :&nbsp;</span> */}
                          <span className="text-warning"></span>
                        </div>
                        <div class="d-flex  total font-weight-bold mt-4">
                          <span>Discount :&nbsp;</span>
                          <h6>{data.discountPercentage}% off</h6>
                        </div>
                        <div class="d-flex total font-weight-bold mt-4">
                          <span>Price :</span>
                          <h4 className="mb-1 me-1">${data.price}</h4>
                        </div>
                      </div>
                      <div class="d-flex  total font-weight-bold mt-4">
                        <span>Description :&nbsp;{data.description}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 ">
                    <div className="pt-5">
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
          </section>
        ) : (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden"></span>
            </Spinner>
          </div>
        )}
      </div>
    </>
  );
};
export default Carddetail;
