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

function View_2() {
  return (
    <>
      <div className="content">
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Бүртгэл 2</CardTitle>
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
export default View_2;
