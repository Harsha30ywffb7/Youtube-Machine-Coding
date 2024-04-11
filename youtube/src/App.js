
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import {Provider} from 'react-redux'
import appStore from './utils/appStore';
import Videocontainer from './components/Videocontainer';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Watchpage from './components/Watchpage';
/*
* Header
* sidebar
* menu
* Videocontainer
* btns container
* video


*/ 

const appRoute = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
   {
    path:'/',
    element:<Videocontainer/>
   },
   {
    path:'watch',
    element:<Watchpage/>
   }
  ]
}])
function App() {
  
  return (
    <Provider store={appStore}>
      <div className="App">
      <Header/>
      <RouterProvider router={appRoute}/>
    </div>
    </Provider>
  );
}

export default App;
