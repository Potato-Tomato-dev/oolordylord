import React, { useState } from "react";
import Confirm_2 from "views/Comis/Confirm_2";
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

function Confirm() {
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
        <Confirm_2 obj={Selected} />
      </div>
    </>
  );
}

export default Confirm;
