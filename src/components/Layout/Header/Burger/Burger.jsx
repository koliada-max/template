import React from 'react';
// import PropTypes from 'prop-types';

const Burger = () => {
    return (
      <div className="nav_burger">
        <div className="burger__wrapper">
          <button className="burger">
            <span className="burger__lines">
              <span className="burger__line line-a-1"></span>
              <span className="burger__line line-a-2"></span>
              <span className="burger__line line-b-1"></span>
              <span className="burger__line line-b-2"></span>
            </span>
          </button>
        </div>
      </div>
    );
};

// Burger.propTypes = {};

export default Burger;
