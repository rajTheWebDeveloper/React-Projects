import logo from './logo.svg';
import './App.css';
import birthdayData from './birthdayData';

function App() {
  return (
    <section className="App">
      {birthdayData.map((birthday)=>
      {
        return <article>
          <aside className='image'>
            <img src={birthday.image} alt="" />
          </aside>
          <aside className='info'>
            <h2>{birthday.name}</h2>
            <p>{birthday.age}</p>
          </aside>
        </article>
      })}
    </section>
  );
}

export default App;
