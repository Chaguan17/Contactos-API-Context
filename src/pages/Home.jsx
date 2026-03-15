import { use, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getContacts } from "../services/servicesApi.js";
import CardContact from "../components/CardContacts.jsx";
import { Link } from "react-router-dom";


export const Home = () => {

const { store, actions } = useGlobalReducer();

useEffect(() => {
    actions.getContacts();
}, []);



	return (
		
		<div className="text-center mt-5 ">
			<h1>Contactos API Context</h1>
			<div className="d-flex justify-content-end mb-4 mt-4 ">
			<Link to="/addContact" className="btn btn-primary">
				Add Contact
			</Link>

			</div>
			{store.contacts.map((contact) => (
				<CardContact key={contact.id} contact={contact} />
			))}
		</div>
	);
}; 