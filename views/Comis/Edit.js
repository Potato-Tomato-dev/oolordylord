/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// react plugin for creating notifications over the dashboard
// reactstrap components
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
import Edit_2 from "./Edit_2";

function Edit() {
  const Students = [
    {
      A_1: "00000001",
      A_2: "Дажгүй",
      A_3: "Гансүх",
      A_4: "2022/02/27",
      A_5: "80515520",
      A_6: "Үгүй",
      A_7: "ҮУПК",
    },
    {
      A_1: "00000002",
      A_2: "Дажгү",
      A_3: "Гансх",
      A_4: "202/02/27",
      A_5: "8015520",
      A_6: "Үүй",
      A_7: "УПК",
    },
  ];

  const Selected = [
    {
      A_1: "00000001",
      A_2: "Дажгүй",
      A_3: "Гансүх",
      A_4: "2022/02/27",
      A_5: "80515520",
      A_6: "Үгүй",
      A_7: "ҮУПК",
    },
  ];

  return (
    <>
      <div className="content">
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Нийт бүртгэлүүд</CardTitle>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Бүртгэлийн дугаар</th>
                    <th>Овог</th>
                    <th>Нэр</th>
                    <th>Бүртгэсэн огноо</th>
                    <th>Утасны дугаар</th>
                    <th>Томилсон эсэх</th>
                    <th>Төгссөн сургууль</th>
                    <th className="text-right">
                      <form>
                        <InputGroup className="no-border">
                          <Input placeholder="Search..." />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <i className="nc-icon nc-zoom-split" />
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </form>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Students.map((e) => {
                    return (
                      <tr>
                        <td> {e.A_1} </td>
                        <td> {e.A_2} </td>
                        <td> {e.A_3} </td>
                        <td> {e.A_4} </td>
                        <td> {e.A_5} </td>
                        <td> {e.A_6} </td>
                        <td> {e.A_7} </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Edit_2 obj={Selected} />
      </div>
    </>
  );
}

export default Edit;
