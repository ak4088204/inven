import Footer from './Footer';
import Frame from './Frame';
import './Shipments.css';
import Topbox from './Topbox';
function Shipments(){
    return(
        <div>
            <Frame/>
            <Topbox/>
            <span className='display-5 '>Shipments</span>
            <table class="table table-striped  w-75">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">id</th>
      <th scope="col">Quantity</th>
      <th scope='col'>Supplier</th>
      <th scope='col'>Timestamp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Asus gseries</td>
      <td>100</td>
      <td>10</td>
      <td>Laptopz Dehradun</td>
      <td>January 2 2023</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Television</td>
      <td>105</td>
      <td>8</td>
      <td>LG Chamoli</td>
      <td>May 27 2023</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Hp Laptop</td>
      <td>120</td>
      <td>5</td>
      <td>HP Gurgaon</td>
      <td>July 8 2022</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Oppo Mobiles</td>
      <td>127</td>
      <td>9</td>
      <td>Oppo Noida</td>
      <td>August 1 2023</td>
    </tr>
  </tbody>
</table>
            <Footer/>
        </div>
    );
}

export default Shipments;