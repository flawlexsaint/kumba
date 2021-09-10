import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import CustomerProfile from "./pages/customer-profile";
import OrderSummary from "./pages/order-summary";

function App() {
  const [orderInformation, setOrderInformation] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://indapi.kumba.io/webdev/assignment")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOrderInformation(data);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            {<CustomerProfile orderInformation={orderInformation} />}
          </Route>
          <Route path="/order-summary/:id">
            {orderInformation && (
              <OrderSummary orderInformation={orderInformation} />
            )}
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
