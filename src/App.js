import Login from "./Login"
import Register from "./Register"
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './Home'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lgin" element={<Login />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App