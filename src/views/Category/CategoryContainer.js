import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Category from './Category';
import api from '../../helpers/api';

class CategoryContainer extends Component {
  state = {
    category: null,
  }
  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    this.setState({
      category: data,
    });
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