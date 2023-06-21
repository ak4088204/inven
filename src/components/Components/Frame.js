import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHome,FaCube,FaCompactDisc,FaMapMarker,FaShoppingBag,FaTruck,FaRegNewspaper,FaBarcode,FaEnvira } from "react-icons/fa";
import "./frame.css"
import { redirect } from 'react-router-dom';
import { useState } from 'react';

const Frame = () => {

  
  
 
  return (
    <Container fluid > 
      <Row>
        <Col id="col" lg={2} md={3} sm={4} xs={12} className="sidebar border-right" style={{ backgroundColor: 'lightblue',borderRight: '1px solid #ddd' }}>
          <div >
          
            <h3> <i className='icon'><FaEnvira></FaEnvira></i> Inventory Management</h3>
            <hr />
            <h5>   Welcome Admin</h5>
            <hr/>
          </div>
          
          <ul >

          <li id='dash'><i><FaHome></FaHome></i>Dashboard</li>
         <li id='pro'><i><FaCube></FaCube></i>Products</li>
         <li id='inv'><i><FaCompactDisc></FaCompactDisc></i>Inventory/Alerts</li>
         <li id='loc'><i><FaMapMarker></FaMapMarker></i>Locations</li>
         <li id='sal'><i><FaShoppingBag></FaShoppingBag></i>Sales</li>
         <li id='ship'><i><FaTruck></FaTruck></i>Shipments</li>
         <li id='rep'><i><FaRegNewspaper></FaRegNewspaper></i>Reports</li>
         <li id='bar'><i><FaBarcode></FaBarcode></i>Barcode Scanner</li>
            
          </ul>
        </Col>
       
      </Row>
    </Container>
  );
}

export default Frame;
