import { Switch, Route } from "react-router-dom";

import { routes } from "./routes"



const AllRoutes = () => {

  const routesComponets = routes.map(({ path, exact, component: Component, ...rest }, key) => {

    return (
      <Route
        exact={exact}
        key={key}
        path={path}
        component={(props: any) => <Component {...props} {...rest} />}
      />
    )

  })

  return (
    <>
      <Switch>
        {routesComponets}
      </Switch>
    </>
  );
}

export default AllRoutes;