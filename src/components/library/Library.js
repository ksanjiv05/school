import React from 'react';
// import { Autocomplete, TextInput } from 'evergreen-ui';
import BooksCard from './BooksCard';

const data = {
  bookdata: [
    {
      imgUrl: 'https://picsum.photos/536/354',
      Author: 'Ratan',
      publication: 'durgasoft',
      edition: '1st',
      year: '2017',
      title: 'The Java',
      pdfUrl: 'http://localhost:3001/uploads/test2.pdf',
    },
    {
      imgUrl: 'https://picsum.photos/536/354',
      Author: 'sanjiv',
      publication: 'mc grew',
      edition: '3rd',
      year: '2019',
      title: 'The React',
      pdfUrl: 'http://localhost:3001/uploads/sample2.pdf',
    },
  ],
};
const Library = () => {
  return (
    <div className="library">
      <div className="library-header">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" />
          <div className="input-group-btn">
            <button className="btn btn-default" type="submit">
              <i className="glyphicon glyphicon-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="library-header library-content flex-container">
        <BooksCard data={data.bookdata[1]} />
        <BooksCard data={data.bookdata[0]} />
        <BooksCard data={data.bookdata[0]} />
        <BooksCard data={data.bookdata[0]} />
        <BooksCard data={data.bookdata[0]} />
        <BooksCard data={data.bookdata[0]} />
      </div>
      <div className="library-header library-content flex-container">
        <BooksCard data={data.bookdata[1]} />
        <BooksCard data={data.bookdata[0]} />
        <BooksCard data={data.bookdata[0]} />
        <BooksCard data={data.bookdata[0]} />
      </div>
    </div>
  );
};
export default Library;
