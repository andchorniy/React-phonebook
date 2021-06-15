import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './Filter.module.css'
import changeFilter from '../../redux/filter/filter-action'
import selector from '../../redux/contacts/contacts-selectors'
import TextField from '@material-ui/core/TextField';
const Filter = ({filter, handleChange}) => {
    return (
        <div>
            <TextField label="Find contacts by name" className={style.input}
                        variant="outlined"
                        type="text"
                        name="filter"
                        value={filter}
                        onChange={handleChange}/>
        </div>
    );
};
const mapStateToProps=(state)=>({
    filter: selector.getFilter(state)
})
const mapDispatchToProps = dispatch => ({
    handleChange: (e)=> dispatch(changeFilter(e.target.value.trim()))
})
Filter.propTypes={
    handleChange: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);