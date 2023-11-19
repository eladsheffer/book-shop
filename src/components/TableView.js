import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import Buttons from './Buttons';


function TableView(props) {

      let books = props.books;
      let bookRows = books.map((book, index) => (
        <tr>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.price}</td>
          <td>
            <Buttons bookData={book} readBook={props.readBook} updateBook={props.updateBook} deleteBook={props.deleteBook} dataKey={index}></Buttons>
          </td>
        </tr>
      ));
  
      return (
        <div>
          <Table striped bordered hover size="sm" border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookRows}
            </tbody>
          </Table>
        </div>
      );
    }
  
  
  export default TableView;