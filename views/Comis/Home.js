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
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Home() {
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
                    <th className="text-right">Оноо</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>00000001</td>
                    <td>Дажгүй</td>
                    <td>Гансүх</td>
                    <td>2022/02/27</td>
                    <td>80515520</td>
                    <td>Үгүй</td>
                    <td>ҮУПК</td>
                    <td className="text-right">400</td>
                  </tr>
                  <tr>
                    <td>00000002</td>
                    <td>Болд</td>
                    <td>Болор</td>
                    <td>2022/01/05</td>
                    <td>08080808</td>
                    <td>Тийм</td>
                    <td>32</td>
                    <td className="text-right">500</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  );
}

export default Home;
