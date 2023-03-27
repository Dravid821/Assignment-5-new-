import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useParams } from "react-router-dom";
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
import { CardMedia } from "@mui/material";
// import Carousel from "react-bootstrap/Carousel";
import ImageSlider from "./ImageSlider";
import { NavLink } from "reactstrap";
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
            <div class="container py-5">
              <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-4">
                  <div class="card text-black">
                    <ImageSlider images={data.images} />
                    <div className="card-body">
                      <div class="text-center">
                        <h3 className="card-title">{data.category}</h3>
                        <h5 className="text-muted mb-4">{data.brand}</h5>
                        <p className="text-success mb-4">{data.title}</p>
                      </div>
                      <div>
                        <div class="d-flex justify-content-center mt-3">
                          <span className="text-muted">Stock:</span>
                          <span>{data.stock}</span>
                        </div>
                        <div class="d-flex justify-content-center mt-3">
                          <span>Rating :&nbsp;</span>
                          <span className="text-warning">{data.rating}</span>
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
                    <button
                      className="btn btn-primary btn-sm m-2"
                      type="button"
                    >
                      Add To Cart
                    
                    </button>
                    <NavLink to={`/`}>
                    <button
                      onClick={BackToShop}
                      className="btn btn-outline-primary btn-sm m-2"
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
          </section>
        ) : (
          <div className="text-center">Data Loading</div>
        )}
      </div>
    </>
  );
};
export default Carddetail;
