import React from 'react';
import './App.css';

import {connect} from 'react-redux'

import {getBooksData} from './redux/books/books.action'

import Layout from './components/layout.component'

import HomePage from './pages/home/home.page'


class App extends React.Component {
  componentDidMount(){
    const {getBooks} = this.props;
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ofIRYZC4A6G1QJi9z91YLWGax7Gntm8P`)
      .then(res=> res.json())
      .then(data=> getBooks(data.results.books))
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
