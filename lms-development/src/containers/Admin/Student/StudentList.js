import React, { useState } from 'react';
import StudentTable from '../../components/Table/StudentTable'

import { TableWrap } from '../../components/Table/StudentTable';

const StudentList = ({ listOfStudent,setLgShow,lgShow}) => {
  const tableHeader = ['First Name', 'Last Name', 'Mobile', 'Email', 'Address']

  return <div>
      <p>list of student</p>
    <TableWrap tableHeads={tableHeader}  tableRows={listofStudents} setLgShow={setLgShow}/>
  </div>
}

export default StudentList;