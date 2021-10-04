import React from 'react';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import { ExpandMore } from '@material-ui/icons';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import { AccordionActions, Button, Divider } from '@material-ui/core';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    borderRadius: '30px 0px 30px 0',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: '#21CFFF',
    borderBottom: '1px solid #12738E',
    marginBottom: -1,
    color: '#666666',
    borderRadius: '30px 0px 30px 0',
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);


const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function Accordion2() {

  return (
    <div className="App">

      <Accordion>

        <AccordionSummary expandIcon={<ExpandMore />}>
          Accordion 1
        </AccordionSummary>

        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </AccordionDetails>

        <Divider />
        <AccordionActions>
          <Button size="small" onClick={() => alert('cancel')}>Cancel</Button>
          <Button size="small" color="primary" onClick={() => alert('save')}>Save</Button>
        </AccordionActions>

      </Accordion>

      <Accordion>

        <AccordionSummary expandIcon={<ExpandMore />}>
          Accordion 2
        </AccordionSummary>

        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </AccordionDetails>

      </Accordion>

      <Accordion>

        <AccordionSummary expandIcon={<ExpandMore />}>
          Accordion 3
        </AccordionSummary>

        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </AccordionDetails>

      </Accordion>

    </div>
  );
}
export default Accordion2