import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import {
  FaFacebook, FaInstagram, FaTwitter, FaWhatsapp,
} from 'react-icons/fa';

function MotorcycleCard({ motor }) {
  const params = useParams();
  const { catname, id, motorcycles } = motor;
  console.log(motorcycles);

  return (
    <>
      <h2 className="model-header">LATEST MODELS</h2>
      <br />
      <p className="model-header modelheader-ptag">Check out the latest models from our partners</p>

      <div className="model-name">
        <p>
          {catname}
        </p>
        <p>
          {id}
        </p>
      </div>
      {motorcycles.length
        ? motorcycles.map((el) => (
          <Link to={`/categories/${params.id}/motorcycles/${id}`} key={nanoid()}>
            <div className="card card-content">
              <div className="img-div">
                { el.image && (<img src={el.image} alt="" className="imgSize" />) }
              </div>
              <ul>
                <li className="model">
                  Motorcycle Model:
                  {' '}
                  {el.model}
                </li>
                <li className="content-id">
                  ID:
                  {' '}
                  {el.id}
                </li>
              </ul>
              <ul className="socials">
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaTwitter /></li>
                <li><FaWhatsapp /></li>
              </ul>
            </div>

          </Link>
        ))
        : null}
    </>
  );
}

MotorcycleCard.defaultProps = {
  motor: {
    catname: '',
    id: '',
    motorcycles: [],
  },
};

MotorcycleCard.propTypes = {
  motor: PropTypes.shape({
    catname: PropTypes.string,
    id: PropTypes.number,
    motorcycles: PropTypes.arrayOf(
      PropTypes.shape({
        brand: PropTypes.string,
        category_id: PropTypes.number,
        image: PropTypes.string,
        model: PropTypes.string,
        rental_price: PropTypes.number,
        year: PropTypes.string,
      }),
    ),
  }),
};

export default MotorcycleCard;