import {
    createBrowserRouter,
    createRoutesFromChildren,
    Route,
    RouterProvider,
} from "react-router-dom";
import FormTest from "./FormTest.jsx";



function App() {
    const router = createBrowserRouter(createRoutesFromChildren(
        <Route path={"/"}>
            <Route index element={<FormTest/>}/>
        </Route>
    ))

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
