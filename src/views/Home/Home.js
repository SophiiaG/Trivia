import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Home = ({ categories, isLoading }) => (
  <section>
    <h1>Homepage</h1>
    { !isLoading // if true alors afficher categories links 
      ? <div>
        {categories.map(category => (
          <Link to={`/categories/${category.id}`} key={category.id}>
          {category.title}
          </Link>
        ))}
      </div>
      : <div> Je load</div> //else j'affiche un loader 
    }
  </section>
);

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      clues_count: PropTypes.number,
    }),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Home;