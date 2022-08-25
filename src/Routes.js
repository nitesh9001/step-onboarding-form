import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Spinner from './Component/Spinner';
const Onboarding = lazy(()=>import('./Views/Onboarding'));
const BlankLayout = lazy(() => import('./Layouts/BlankLayout'));

const Routers = () => {
  return(
    <div>
        <Router>
            <BlankLayout>
                <Switch>
                    <Suspense fallback={<Spinner />}>
                       <Route exact to={"/"} component={Onboarding} />
                    </Suspense>
                </Switch>
            </BlankLayout>
        </Router>
    </div>
  )
}
export default Routers;