import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const AddContacts = () => {

    const { actions } = useGlobalReducer();
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        agenda_slug: "Jesus"
    });

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await actions.addContact(contact);

        navigate("/"); // vuelve a home sin recargar
    };

    return (
        <div className="container mt-5">

            <h1>Add Contact</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="formGroupExampleInput1" className="form-label">Full Name</label>
                <input
                    className="form-control mb-2"
                    name="name"
                    placeholder="Name"
                    value={contact.name}
                    onChange={handleChange}
                />
                <label htmlFor="formGroupExampleInput2" className="form-label">Phone</label>
                <input
                    className="form-control mb-2"
                    name="phone"
                    placeholder="Phone"
                    value={contact.phone}
                    onChange={handleChange}
                />
                <label htmlFor="formGroupExampleInput3" className="form-label">Email</label>
                <input
                    className="form-control mb-2"
                    name="email"
                    placeholder="Email"
                    value={contact.email}
                    onChange={handleChange}
                />
                <label htmlFor="formGroupExampleInput4" className="form-label">Address</label>
                <input
                    className="form-control mb-2"
                    name="address"
                    placeholder="Address"
                    value={contact.address}
                    onChange={handleChange}
                />

                <button className="btn btn-primary">
                    Save Contact
                </button>
                <span className="ms-2" onClick={() => navigate("/")} style={{ cursor: "pointer", color: "blue" }}>
                    Volver al inicio
                </span>

            </form>

        </div>
    );
};

export default AddContacts;