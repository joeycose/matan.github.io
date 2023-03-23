import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white '>
      <MDBContainer className='p-4 pb-0'>
        <div className='text-center p-3'>
          <a>
            Matan Even
          </a>
        </div>
      </MDBContainer>
    </MDBFooter>
  );
}