import React from "react";
import { BrowserRouter } from "react-router-dom";
import {Menu} from "./components/menu.component";
import { AppRouter } from "./appRouter";

function App(){
  return(
    <BrowserRouter>
    <Menu></Menu>
    <AppRouter></AppRouter>
    </BrowserRouter>
  )
}
export default App;