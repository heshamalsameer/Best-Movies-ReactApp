import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { WatchList } from "./Pages/WatchList";
import { Watched } from "./Pages/Watched";
import { Pagenotfound } from "./Pages/Pagenotfound";
import { Home } from "./Pages/Home";
import  {Context}  from './Components/contextapi/Context';
function App() {
  const theme = createTheme({
    palette : {
      primary :{
        main:'#37812d',
        light:'#48ee48',
        dark:'#0eb129'
      }
    }
  })
  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
        <Context>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watchList' element={<WatchList/>}/>
        <Route path='/watched' element={<Watched/>}/>
        <Route path='/*' element={<Pagenotfound/>}/>
        </Routes>
        </Context>
      </Router>
    </ThemeProvider>
      </>
  );
}

export default App;
