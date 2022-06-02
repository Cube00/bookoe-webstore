import React from 'react';
import './App.css';

import {connect} from 'react-redux'

import {getBooksData} from './redux/books/books.action'

import Layout from './components/layout.component'

import HomePage from './pages/home/home.page'


class App extends React.Component {
  componentDidMount(){
    const {getBooks} = this.props;
    fetch(`https://api.itbook.store/1.0/new`)
      .then(res=> res.json())
      .then(data=> getBooks(data.books))
  }

  render(){
    return <>
      <Layout>
        <HomePage />
      </Layout>
    </>
  }
}

const mapDispatchToProps = dispatch => ({
  getBooks: (books)=> dispatch(getBooksData(books))
})

export default connect(null, mapDispatchToProps)(App);
