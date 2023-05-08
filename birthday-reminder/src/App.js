import logo from './logo.svg';
import './App.css';
import birthdayData from './birthdayData';
import BirthdayList from './BirthdayList';
import { useState } from 'react';

function App() {
  let [list,setList]=useState(birthdayData)
  return (
    <section className="App">
      <h2>{list.length} Birthdays Today</h2>
      <BirthdayList list={list}/>
      <button onClick={()=>setList([])}>Clear All</button>
    </section>
  );
}

export default App;
