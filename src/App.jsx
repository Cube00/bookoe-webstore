import React from 'react';
import './App.css';

import {connect} from 'react-redux';

import {getBooksData} from './redux/books/books.action';

import Layout from './components/layout.component';

import HomePage from './pages/home/home.page';
import Checkout from './pages/checkout/checkout.page';

import {Routes, Route} from 'react-router-dom';

import {BOOKS_API_KEY} from './api'

class App extends React.Component {
  componentDidMount(){
    const {getBooks} = this.props;
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${BOOKS_API_KEY}`)
      .then(res=> res.json())
      .then(data=> getBooks(data.results.books))
  }

  render(){
    return <>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path='/' element={<HomePage />} />
        </Route>

        <Route exact path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  }
}

const mapDispatchToProps = dispatch => ({
  getBooks: (books)=> dispatch(getBooksData(books))
})

export default connect(null, mapDispatchToProps)(App);
