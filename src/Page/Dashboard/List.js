import React from 'react'

function List({ students, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Roll No</th>
                        <th>Student Name</th>
                        <th>Checkin Time</th>
                        <th>Checkout Time</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((students, i) => (
                            <tr key={students.id}>
                                <td>{i + 1}</td>
                                <td>{students.RollNo}</td>
                                <td>{students.studentName}</td>
                                <td>{students.checkinTime} </td>
                                <td>{students.checkoutTime} </td>

                           
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(students.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(students.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No students</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List