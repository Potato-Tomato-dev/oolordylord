import View_1 from "components/Admin/View_1";
import View_2 from "components/Admin/View_2";
import View_3 from "components/Admin/View_3";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Button,
  Col,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";

import { Route, Switch, useHistory } from "react-router-dom";

function AdminView() {
  let history = useHistory();

  function to_1() {
    history.push("/admin/View/view_1");
  }
  function to_2() {
    history.push("/admin/View/view_2");
  }
  function to_3() {
    history.push("/admin/View/view_3");
  }

  return (
    <>
      <div className="content">
        <Row>
          <Button onClick={to_1}>View_1</Button>
          <Button onClick={to_2}>View_2</Button>
          <Button onClick={to_3}>View_3</Button>
        </Row>
        <Switch>
          <Route path="/admin/View/view_1">
            <View_1 />
          </Route>
          <Route path="/admin/View/view_2">
            <View_2 />
          </Route>
          <Route path="/admin/View/view_3">
            <View_3 />
          </Route>
        </Switch>
      </div>
    </>
  );
}
export default AdminView;
