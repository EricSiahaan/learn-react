import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';

import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

function App() {
  return (
    <main>
      <div className='container'>
        <h3>FAQ</h3>
        <section className='info'>
          {data.map((question) => {
            return (
              <SingleQuestion
                title=
                {question.title}
                info={question.info}
                key={question.id}
              />
            )
          })}
        </section>
      </div>
    </main>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Binarian </h1>
//       <h2>Eric HANSDEKA </h2>
//       <h3>Student Binar </h3>
//       <Hello />
//     </div>
//   );
// }

export default App;
