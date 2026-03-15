import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const EditContact = () => {

    const { store, actions } = useGlobalReducer();
    const navigate = useNavigate();
    const { id } = useParams();

    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        agenda_slug: "Jesus"
    });

    useEffect(() => {

        const foundContact = store.contacts.find(
            (c) => c.id == id
        );

        if (foundContact) {
            setContact(foundContact);
        }

    }, [store.contacts, id]);

    const handleChange = (e) => {

        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await actions.updateContact(id, contact);

        navigate("/");
    };

    return (

        <div className="container mt-5">

            <h1>Edit Contact</h1>

            <form onSubmit={handleSubmit}>

                <input
                    className="form-control mb-2"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                    placeholder="Name"
                />

                <input
                    className="form-control mb-2"
                    name="phone"
                    value={contact.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                />

                <input
                    className="form-control mb-2"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    placeholder="Email"
                />

                <input
                    className="form-control mb-2"
                    name="address"
                    value={contact.address}
                    onChange={handleChange}
                    placeholder="Address"
                />

                <button className="btn btn-primary">
                    Update Contact
                </button>
                <button className="btn btn-secondary ms-2" onClick={() => navigate("/")}>
                    Cancel
                </button>

            </form>

        </div>

    );
};

export default EditContact;