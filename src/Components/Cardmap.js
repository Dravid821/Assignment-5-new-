import React, { useState,} from "react";
import { useSelector,useDispatch, } from "react-redux";
import { Card,CardBody,CardTitle,CardText, CardImg } from "reactstrap";
import carddata from '../Services/Actionns/actions';
import { useEffect } from 'react'
export default function Cardmap() {
  const items = useSelector((state) => state.user);
  console.log("items",items);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(carddata());
  }, [dispatch]);
  return (
    items &&
    items.map((item) => {
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-4">
            <Card className="my-2">
              <CardBody>
                <div className="d-flex justify-content-between">
                  <CardTitle tag="h5" className="text-start" key={item.id}>
                    {item.title}
                  </CardTitle>
                  <CardTitle tag="h5" className=" btn btn-dark">
                    ${item.price}
                  </CardTitle>
                </div>
                <CardText className="d-flex text-muted">{item.description}</CardText>
                <button
                  className="btn btn-outline-primary d-flex justify-content-end btn1"
                >
                  Add to Cart
                </button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>;
    })
    
  );
}
