import React, { useState , useEffect} from 'react';
import {PrimaryButton, ModalWrap, Input} from '../../../components'
import ModalWrap from '../../../components/Modal/Modal'
import StudentCreate from './StudentCreate';
import StudentList from './StudentList';


const Student = () => {
  // const [newStudent, setNewStudent] = useState({})
  const [isCreate, setIsCreate] = useState(true)
  const [lgShow, setLgShow] = useState(false)
  const [NewStudent, setNewStudent]= useState({})
  const [listOfStudent, setListOfStudent]= useState([
   {
     id:1,
    firstname:'charmi',
    lastname: 'charmi',
    mobile: 'charmi',
    email:'charmi',
    address:'charmi'
   },
   {
    id:2,
   firstname:'Gardharia',
   lastname: 'Gardharia',
   mobile: 'Gardharia',
   email:'Gardharia',
   address:'Gardharia'
  }])

  const [originallistofstudents, setorglistofstudent] = useState([
    {
      id:1,
     firstname:'charmi',
     lastname: 'charmi',
     mobile: 'charmi',
     email:'charmi',
     address:'charmi'
    },
    {
     id:2,
    firstname:'Gardharia',
    lastname: 'Gardharia',
    mobile: 'Gardharia',
    email:'Gardharia',
    address:'Gardharia'
   }])

   useEffect(() => {
    console.log("NewStudent...", NewStudent);
  }, [NewStudent])

  const createStudent = () => {
    setLgShow(!lgShow)
    setnewStudent({})
  }
  

  const submitStudent = () => {
    console.log(NewStudent);
    const sumbitCourse = () => {
      const newStudentArray = [...listOfStudent];
      newStudentArray.push(NewStudent);
  
      setListOfStudent(newStudentArray);
      // console.log(NewStudent);
    }
  }

  
    // const newCourseArray = [...listOfCourses];
    // newCourseArray.push(newCourse);
  return (
    <div>
      Student<br/><br/>
    <PrimaryButton text="Register Student"  onClick={() =>createStudent()}/>
   
    <ModalWrap title="Create New student" submitStudent={submitStudent} lgShow={lgShow} setLgShow={setLgShow}>
        <StudentCreate setNewStudent={setNewStudent} NewStudent={NewStudent}/>
        <StudentList listofStudents={listofstudents} lgShow={lgShow}/>
      </ModalWrap>
      
    </div>
    
  )
 
}

export default Student;