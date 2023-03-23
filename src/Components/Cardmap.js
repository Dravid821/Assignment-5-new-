import React, { useState,} from "react";
import { useSelector,useDispatch, } from "react-redux";
import { Card,CardBody,CardTitle,CardTitle,CardText, CardImg } from "reactstrap";
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
          <Card
        className="card"
        style={{
          width: "20rem",
        }}
      >
        <img
          className="img-fluid"
          alt="Sample"
          src={`https://avatars.dicebear.com/v2/avataaars/${item.id}.svg?options%5Bmood%5D%5B%5D=happy`}
        />
        <CardBody className="cbd">
          <CardTitle tag="h4">
            <div className="text-start">{name}</div>
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted">
            <div className="text-start">
              <li>
                <FiMail />
                <span className="fimail">{email}</span>
              </li>
              <li>
                <FiPhoneCall />
                <span className="fimail">{phone}</span>
              </li>
              <li>
                <IoEarthOutline />
                <span className="fimail">{website}</span>
              </li>
            </div>
          </CardSubtitle>
        </CardBody>
        <CardFooter className="d-flex justify-content-around foot">
          <button
            className="btn text-danger"
            onClick={() => setlike((prevState) => !prevState)}
          >
            {like ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
          <button className="btn" onClick={handleForm}>
            <AiFillEdit />
          </button>
          <button className="btn" onClick={() => dispatch(fetchdelete(id))}>
            <AiFillDelete />
          </button>
        </CardFooter>
      </Card>
          </div>
        </div>
      </div>;
    })
    
  );
}
