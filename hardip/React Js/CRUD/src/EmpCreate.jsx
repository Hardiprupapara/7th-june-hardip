import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EmpCreate = () => {
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [active, activechange] = useState(true);
    const navigate = useNavigate();
    // const[validation,valchange]=useState(false);

    const handleonsubmit = (e) => {
        e.preventDefault();
        const empdata = { name, email, phone, active };
        console.log(empdata);

        fetch("http://localhost:8000/employe", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            // alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <>
            <div>

                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <form className="container" onSubmit={handleonsubmit}>

                            <div className="card" style={{ "textAlign": "left" }}>
                                <div className="card-title">
                                    <h2>Employee Create</h2>
                                </div>
                                <div className="card-body">

                                    <div className="row">

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>ID</label>
                                                <input value={id} onChange={e => idchange(e.target.value)} disabled="disabled" className="form-control"></input>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input value={name} onChange={e => namechange(e.target.value)} required className="form-control"></input>
                                                {/* {name.length == 0 && validation && <span className="text-danger">Enter the name</span>} */}
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type='email' value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input type='tel' value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-check">
                                                <input checked={active} onChange={e => activechange(e.target.value)} type="checkbox" className="form-check-input"></input>
                                                <label className="form-check-label">Is Active</label>

                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <button className="btn btn-success" type="submit">Save</button>
                                                <Link to="/" className="btn btn-danger">Back</Link>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default EmpCreate;