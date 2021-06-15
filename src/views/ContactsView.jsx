import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import style from '../components/Container/Container.module.css'

const ContactsView = () => (
  <div className={style.container}>
    <h2>Phonebook</h2>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </div>
);
export default ContactsView;
