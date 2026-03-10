import React from "react";
import "./StudentCard.css";
function Student(props){     
    return(
        <div style={{display:"flex",justifyContent:"Center",marginTop:"30px"}}>
            <div className="card">
                <h2>Student Information</h2>
                <div>
                    Student Name: {props.s_name}<br></br>
                    Student Age: {props.s_age}<br></br>
                    Course : {props.s_course}<br></br>
                    Semester: {props.s_semester}<br></br>

                    <button onClick={()=>alert('This is for the student information')}>
                        Okay
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Student;
