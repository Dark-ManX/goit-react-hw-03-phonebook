import PropTypes from 'prop-types';
import styles from './RenderContact.module.css';

const {item} = styles;

const RenderContact = ({name, number, deleteContact}) => {
    return(
        <li className={item}>{name}: {number} <button type='button' onClick={deleteContact}>Delete</button></li>
        )
};

export default RenderContact;

RenderContact.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    deleteContact: PropTypes.func,
}