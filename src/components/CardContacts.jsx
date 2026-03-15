import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";



const CardContact = ({ contact }) => {

    const { actions } = useGlobalReducer();

    const eliminarContacto = () => {
        actions.deleteContact(contact.id);
    };

    return (
        <li className="list-group-item d-flex justify-content-center  border border-5 rounded " style={{ backgroundColor: "#f8f9fa" }}>

            <div className="d-flex align-items-center w-75">
                <div className="col-md-3 d-flex justify-content-center">
                    <img
                        className="rounded-circle"
                        src="https://picsum.photos/170/170/"
                        alt="Contact"
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                </div>

                <div className="col-sm-6 ms-4 text-start">
                
                    <p className="card-text mb-1"><i className="fa fa-user"></i> {contact.name}</p>
                    <p className="card-text mb-1"><i className="fa fa-map-marker-alt"></i> {contact.address}</p>
                    <p className="card-text mb-1"><i className="fa fa-phone"></i> {contact.phone}</p>
                    <p className="card-text mb-1"><i className="fa fa-envelope"></i> {contact.email}</p>
                </div>

                <div className="col-md-3 d-flex justify-content-end">

                    <Link to={"/editContact/" + contact.id} className="btn btn-link p-0 me-3">
                        <i className="fa fa-eraser"></i>
                    </Link>

                    <button className="btn btn-link p-0" onClick={eliminarContacto}>
                        <i className="fa fa-trash fa-lg"></i>
                    </button>

                </div>

            </div>

        </li>
    );
};

export default CardContact;