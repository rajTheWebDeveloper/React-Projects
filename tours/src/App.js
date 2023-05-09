import logo from './logo.svg';
import './App.css';
import ToursList from './ToursList';
import {useState,useEffect} from 'react'
import Loading from './Loading';

function App() {
  const [list,setList] = useState([])
  let [loading,setLoading]=useState(true)
  let [saveTours,setSaveTours]=useState([])

  let url="https://course-api.com/react-tours-project";

  let fetchTours=async (url)=>
  {
    let res=await fetch(url);
    let data=await res.json();
    setLoading(false);
    setList(data)
    setSaveTours(data)
  }

  let filterTours=(id)=>
  {
    let filtered=list.filter((items)=>
    {
      return items.id!==id
    })
    setList(filtered)
  }
  useEffect(()=>
  {
    try
    {
      fetchTours(url)
    }
    catch(e)
    {
      console.log("There will be some error.")
    }
  },[])

  if(loading)
  {
    return <Loading/>
  }
  if(list.length===0)
  {
    return (<div className="zero">
      <h2>No Tours Left</h2>
      <button onClick={()=>setList(saveTours)}>Refresh</button>
    </div>)
  }
  return (
    <section className="App">
      <h2>Our Tours</h2>
      <ToursList list={list} filterTours={filterTours}/>
    </section>
  );
}

export default App;
