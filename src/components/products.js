import Table from 'react-bootstrap/Table';
import "../app.css"
import Navapp3 from './navbar3';

function Products() {
  return (<div>
    <Navapp3 />
     <h1 className='app'>This is products page</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>stock</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>pencil</td>
          <td>32</td>
          <td>5rs.</td>
        </tr>
        <tr>
          <td>2</td>
          <td>pen</td>
          <td>50</td>
          <td>10rs.</td>
        </tr>
        <tr>
          <td>3</td>
          <td>box</td>
          <td>20</td>
          <td>50rs.</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default Products;