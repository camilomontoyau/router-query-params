import { Link, Route, useParams } from "react-router-dom";
import {useState} from "react";
import querystring from "querystring"

const Home = (props) => {
  console.log({props})
  const [q, setQ] = useState('');
  const onSubmit = (event) => {
    console.log({event, q})
    event.preventDefault();
    if(q){
        props.history.push({
          pathname: '/search', 
          params: {q}, // params is not attached if you manually reload the page 
          search:`?q=${q}`})
    }
 }
  return(
    <div>
      <h2>Home</h2>
      <form onSubmit={onSubmit}>
        <input type="search" name="q" onInput={(e)=>setQ(e.target?.value)} />
        <button type="submit" >search</button>
      </form>
    </div>
  )
};

const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
);

const Search = (searchProps) => {
  console.log({searchProps})
  const params = useParams()
  const query = searchProps.location?.search?.split('?')[1]
  return(
    <div>
      <h2>Search</h2>
      <h3>these are your searchProps</h3>
      <pre>{JSON.stringify({searchProps}, null, '  ')}</pre>
      <h3>useParams hook</h3>
      <pre>{JSON.stringify({params}, null, '  ')}</pre>
      <h3>querystring library</h3>
      <pre>{JSON.stringify({querystringResult: querystring.parse(query)}, null, '  ')}</pre>
    </div>
  )
};

const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
);

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">search</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      { /* Route components are rendered if the path prop matches the current URL */}
      <Route exact path="/" component={(props=>(<Home {...props} />))} />
      <Route path="/search" component={(props=>(<Search {...props} />))} />
      <Route path="/category" ><Category /></Route>
      <Route path="/products"><Products /></Route>
    </div>
  );
}