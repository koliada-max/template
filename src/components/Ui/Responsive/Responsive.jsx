import React from 'react';

const Responsive = () => {
  return (
    <section className="responsive">
      <div className="page-wrapper">
        <div className="responsive-grid">
          <h2 className="responsive-item responsive-item__xxxl">
            Шире чем XXL
          </h2>
          <h2 className="responsive-item responsive-item__xxl">XXL</h2>
          <h2 className="responsive-item responsive-item__xl">XL</h2>
          <h2 className="responsive-item responsive-item__lg">LG</h2>
          <h2 className="responsive-item responsive-item__md">MD</h2>
          <h2 className="responsive-item responsive-item__sm">SM</h2>
        </div>
      </div>
    </section>
  );
};

export default Responsive;
