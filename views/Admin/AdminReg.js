import Add_1 from "components/Admin/Add_1";
import Add_2 from "components/Admin/Add_2";
import Add_3 from "components/Admin/Add_3";
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

function AdminReg() {
  let history = useHistory();

  function to_1() {
    history.push("/admin/Reg/Reg_1");
  }
  function to_2() {
    history.push("/admin/Reg/Reg_2");
  }
  function to_3() {
    history.push("/admin/Reg/Reg_3");
  }

  return (
    <>
      <div className="content">
        <Row>
          <Button onClick={to_1}>Reg_1</Button>
          <Button onClick={to_2}>Reg_2</Button>
          <Button onClick={to_3}>Reg_3</Button>
        </Row>
        <Switch>
          <Route path="/admin/Reg/Reg_1">
            <Add_1 />
          </Route>
          <Route path="/admin/Reg/Reg_2">
            <Add_2 />
          </Route>
          <Route path="/admin/Reg/Reg_3">
            <Add_3 />
          </Route>
        </Switch>
      </div>
    </>
  );
}
export default AdminReg;
