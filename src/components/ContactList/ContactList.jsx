import PropTypes from 'prop-types';
import RenderContact from '../RenderContact/RenderContact';

const ContactList = ({data, onDeleteContact}) => {

    return (

        <ul>
            {data.map(({id, name, number}) => (<RenderContact key={id} name={name} number={number} deleteContact={() => onDeleteContact(id)}/>))}
        </ul>
    )
}

export default ContactList;

ContactList.propTypes = {
    data: PropTypes.array.isRequired,
    id: PropTypes.string,
}