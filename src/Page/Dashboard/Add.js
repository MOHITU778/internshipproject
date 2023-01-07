import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ students, setStudents, setIsAdding }) {

    const [RollNo, setRollNo] = useState('');
    const [studentName, setStudentName] = useState('');
    const [checkinTime, setcheckinTime] = useState('');
    const [checkoutTime, setcheckoutTime] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!RollNo || !studentName || !checkinTime || !checkoutTime) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = students.length + 1;
        const newStudent = {
            id,
            RollNo,
            studentName,
            checkinTime,
            checkoutTime
        }
        students.push(newStudent);
        setStudents(students);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${studentName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Student</h1>
                <label htmlFor="RollNo">Roll No</label>
                <input
                    id="RollNo"
                    type="number"
                    ref={textInput}
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
                    min="01:00" 
                    max="12:00" 
                    required
                    onChange={e => setcheckoutTime(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add