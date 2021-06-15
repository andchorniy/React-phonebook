import React from 'react';
import { connect } from "react-redux";
import  {deleteContact}  from "../../redux/contacts/contacts-operations";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import style from './Contact.module.css'


const Contact = ({name, number, id, deleteHandler}) => {
    // const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          className={style.mainField}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography  className={style.name}>{name}</Typography>
          <Button
          className={style.btn}
          onClick={deleteHandler} id={id}
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          >
              Delete
          </Button>
        </AccordionSummary>
        <AccordionDetails >
          <Typography >
          {<a href={`tel:${number}`}>{number}</a>}
          </Typography>
        </AccordionDetails>
      </Accordion>
        </>
    );
};
const  mapDispatchToProps = dispatch => ({
    deleteHandler: (e)=> dispatch(deleteContact(e.currentTarget.id))
})

export default connect(null,mapDispatchToProps )(Contact);