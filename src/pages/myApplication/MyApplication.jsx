import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth/UseAuth';

const MyApplication = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/job-Application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email]);

    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete?");
        if (!confirm) return;

        const res = await fetch(`http://localhost:5000/job-Application/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        if (data.deletedCount > 0) {
            alert("Deleted!");
            setJobs(jobs.filter(job => job._id !== id));
        }
    };

    const handleUpdate = async () => {
        const res = await fetch(`http://localhost:5000/job-Application/${editData._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editData)
        });

        const data = await res.json();
        if (data.modifiedCount > 0) {
            alert("Updated successfully!");
            const updatedJobs = jobs.map(job =>
                job._id === editData._id ? { ...job, ...editData } : job
            );
            setJobs(updatedJobs);
            setEditData(null);
        }
    };

    return (
        <div>
            <h2 className="text-3xl mb-4">My Applications: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job => (
                                <tr key={job._id}>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={job.company_logo} alt="company" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{job.title}</div>
                                    </td>
                                    <td>{job.company}</td>
                                    <td>{job.location}</td>
                                    <td className="space-x-2">
                                        <button
                                            className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600"
                                            onClick={() => setEditData(job)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
                                            onClick={() => handleDelete(job._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* Edit Section */}
            {
                editData && (
                    <div className="mt-6 p-4 bg-teal-500 rounded shadow text-white">
                        <h3 className="text-xl font-semibold mb-4">Edit Application</h3>
                        <input
                            type="text"
                            value={editData.location}
                            onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                            className="input input-bordered w-full mb-2"
                            placeholder="Location"
                        />
                        <input
                            type="text"
                            value={editData.linkedIn}
                            onChange={(e) => setEditData({ ...editData, linkedIn: e.target.value })}
                            className="input input-bordered w-full mb-2"
                            placeholder="LinkedIn"
                        />
                        <input
                            type="text"
                            value={editData.github}
                            onChange={(e) => setEditData({ ...editData, github: e.target.value })}
                            className="input input-bordered w-full mb-2"
                            placeholder="GitHub"
                        />
                        <div className="space-x-2 mt-2">
                            <button className="btn btn-primary" onClick={handleUpdate}>Save</button>
                            <button className="btn" onClick={() => setEditData(null)}>Cancel</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyApplication;
