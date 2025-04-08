import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth/UseAuth';
import Swal from 'sweetalert2';

const ApplyJobs = () => {
    const { id } = useParams();
    const { user } = useAuth();
    console.log(id, user);
    const navigate = useNavigate();



    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        // console.log(linkedIn, github, resume);


        const jobApplication = {

            job_id: id,
            applicant_email: user.email,
            linkedIn, github, resume

        }
        console.log(jobApplication);

        fetch('http://localhost:5000/job-Application', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // insertedId
                if (data.insertedId) {
                    Swal.fire({
                        title: "Drag me!",
                        icon: "success",
                        draggable: true
                    });
                    navigate('/myApplication')
                }
            })

    }
    return (
        <div>

            <form onSubmit={submitJobApplication} className="card-body bg-slate-300 text-center">
                <h1 className=' text-3xl text-center py-5 font-bold text-green-500'>ApplyJobs <span className='text-red-600 '> AND</span> Good LuCk</h1>
                <hr />
                <div className="form-control pt-5">
                    <label className="label">
                        <span className="label-text text-black font-bold text-xl mx-2">LinkedIn URL </span>
                    </label>
                    <input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered bg-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black font-bold text-xl mx-2">Github URL </span>
                    </label>
                    <input type="url" name='github' placeholder="Github URL" className="input input-bordered bg-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black font-bold text-xl  mx-2">Resume URL </span>
                    </label>
                    <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered bg-white" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-blue-700 px-12 ">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default ApplyJobs;