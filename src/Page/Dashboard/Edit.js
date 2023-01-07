import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ students, selectedStudent, setStudents, setIsEditing }) {

    const id = selectedStudent.id;
    console.log("hhhhjh",selectedStudent);

    const [RollNo, setRollNo] = useState(selectedStudent.RollNo);
    const [studentName, setStudentName] = useState(selectedStudent.studentName);
    const [checkinTime, setcheckinTime] = useState(selectedStudent.checkinTime);
    const [checkoutTime, setcheckoutTime] = useState(selectedStudent.checkoutTime)
    
    const handleUpdate = e => {
        e.preventDefault();

        if (!RollNo || !studentName || !checkinTime || !checkoutTime) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const student = {
            id,
            RollNo,
            studentName,
            checkinTime,
            checkoutTime
        };

        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                students.splice(i, 1, student);
                break;
            }
        }

        setStudents(students);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated',
            text: `${student.studentName}'s data has been Updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit student</h1>
                <label htmlFor="RollNo">Roll No</label>
                <input
                    id="RollNo"
                    type="number"
                    name="RollNo"
                    value={RollNo}
                    onChange={e => setRollNo(e.target.value)}
                />
                <label htmlFor="studentName">Student Name</label>
                <input
                    id="studentName"
                    type="text"
                    name="studentName"
                    value={studentName}
                    onChange={e => setStudentName(e.target.value)}
                />

                <label htmlFor="checkinTime">Checkin Time</label>
                <input
                    id="checkinTime"
                    type="time"
                    name="checkinTime"
                    value={checkinTime}
                    onChange={e => setcheckinTime(e.target.value)}
                />

            <label htmlFor="checkoutTime">Checkout Time</label>
                <input
                    id="checkoutTime"
                    type="time"
                    name="checkoutTime"
                    value={checkoutTime}
                    onChange={e => setcheckoutTime(e.target.value)}
                />

                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit