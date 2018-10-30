import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Category from './Category';
import api from '../../helpers/api';

class CategoryContainer extends Component {
  componentDidMount() {
    api.getCategoryById(this.props.match.params.id)
  }
  render() {
    console.log(this.props); //pour connaitre les différentes propriétés disponible 
    return (
      <Category
      categoryName={this.props.match.params.id}
      />
    );
  }
}

export default withRouter(CategoryContainer);