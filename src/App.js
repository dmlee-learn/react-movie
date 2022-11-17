import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Movie from "./router/Movie";
import Detail from "./router/Detail";

function App() {  
  return (
      <Router>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<div><h1>hello</h1><Link to="/movie">List</Link></div>} />
          <Route path={`/movie`} element={<Movie />} />
          <Route path={`/movie/:id`} element={<Detail />} />
        </Routes>  
      </Router>
  );
}

export default App;
