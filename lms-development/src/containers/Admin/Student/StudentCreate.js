import React, { useState, useEffect} from 'react';
import { Input} from '../../components'

const StudentCreate = ({setNewStudent}, NewStudent)=>{
    const [Student, setStudent]=useState(NewStudent)

    useEffect(() => {
        setNewStudent(Student);
      }, [Student])

    const setStudentObject = (key, value) => {
        setStudent({ ...Student, [key]: value });
      }
    
    return <div>
<Input name = "firstname"text="First Name" value={Student.firstname} onChange={(e) => setStudentObject(e.target.name, e.target.value)}/>
        <Input name = "lastname" value={Student.lastname} text="Last Name" onChange={(e) => setStudentObject(e.target.name, e.target.value)}/>
        <Input name = "mobile" value={Student.mobile} text ="Mobile" onChange={(e) => setStudentObject(e.target.name, e.target.value)}/>
        <Input name = "email" value={Student.email} text="email" onChange={(e) => setStudentObject(e.target.name, e.target.value)}/>
        <Input name = "address" value={Student.address} text="Address" onChange={(e) => setStudentObject(e.target.name, e.target.value)}/>
    </div>
}
export default StudentCreate;