import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewContact = () => {

    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [data, setData] = useState();

useEffect(() => {
    setData(JSON.stringify({
        agenda_slug: "Cohort-V",   
        full_name: fullname,
        email: email,
        phone: phone,
        address: address
    }) );
},[fullname, email, phone, address])

    const formHandler = () => {
        (data.full_name === "") ? alert("cannot be empty") : 

        fetch('https://assets.breatheco.de/apis/fake/contact/', {
            method: 'POST',
            body: data,
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .then(response => {
                alert('Success:', JSON.stringify(response));
                window.location='/';
            })
            .catch(error => alert('Error:', error));
    }

    return (
        <>
            <div className="container">
                <h1 className="text-center">New Contact</h1>

                <div>
                    <label htmlFor="fullname">Full Name</label>
                    <input 
                        id="fullname" 
                        type="text" 
                        className="form-control" 
                        placeholder="Full Name" 
                        value={fullname}
                        onChange={e => setFullname(e.target.value)}
                    />
                    <br/>
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        type="email" 
                        className="form-control" 
                        placeholder="Email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <br/>
                    <label htmlFor="phone">Phone</label>
                    <input 
                        id="phone" 
                        type="text" 
                        className="form-control" 
                        placeholder="Phone" 
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <br/>
                    <label htmlFor="address">Address</label>
                    <input 
                        id="address" 
                        type="text" 
                        className="form-control" 
                        placeholder="Address" 
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <br/>
                    <input type="submit" value="send" onClick={formHandler}/>
                </div>
                <br/>
                <Link to="/" >
                    <i className="fas fa-arrow-left"></i> go back to Home
                </Link>
            </div>
        </>
    );
};

export default NewContact;