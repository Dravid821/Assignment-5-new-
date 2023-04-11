import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "../asset/scss/carddetail.scss";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';
const Carddetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(data);
  console.log(data.images);
//Product detail page Api Fetching
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
  //Productdetail Page map data
  return (
    <>
      <div>
        {data.title ? (
          <section>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-">
                  <div className="card text-black">
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
                    {/* <ImageSlider images={data.images} className="img-fluid" /> */}
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
