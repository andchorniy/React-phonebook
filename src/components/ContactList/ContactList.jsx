import PropTypes from 'prop-types';
import style from './ContactList.module.css'
import { connect } from "react-redux";
import Contact from '../Contact'
import { Component } from 'react';
import {fetchContacts} from '../../redux/contacts/contacts-operations'
import selectors  from '../../redux/contacts/contacts-selectors'

class ContactList extends Component  {
    componentDidMount(){
        this.props.getContacts()
    }
    render(){

        return (
                <ul className={style.list}>
                {this.props.contacts.map((contact)=>{
                    return <li className={style.item} key={contact.id}>
                        <Contact name={contact.name} number={contact.number} id={contact.id} />
                        </li>
                })}
                </ul>
        );
    }
};

const mapStateToProps = (state) => ({
    contacts: selectors.getFilteredContact(state) 
  });
const mapDispatchToProps = dispatch =>({
    getContacts: ()=> dispatch(fetchContacts())
})

ContactList.propTypes={
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactList);