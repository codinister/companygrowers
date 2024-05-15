const Introduction = () => {
  return (
    <section className="introduction">
      <div>
        <div>
          <div>
            <h2>Introduction</h2>

            <div>
              Company Growers Limited is a marketing company located in Accra,
              Ghana. We bridge the gap between businesses and their potential
              customers using digital marketing tools and social media campaigns
              to effectively communicate values and benefits of the products and
              services of a company to prospective customers.
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url('/imgs/lady.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>

      <div>
        <div
          style={{
            backgroundImage: `url('/imgs/branding.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url('/imgs/graphics.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url('/imgs/webdesign.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url('/imgs/digital.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Introduction;
