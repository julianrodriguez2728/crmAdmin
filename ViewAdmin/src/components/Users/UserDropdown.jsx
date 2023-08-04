import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const UserDropdown = ({id, name, email, Products}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const total = Products?.reduce((sum, prod) => sum + prod.price, 0);

  return (


    <div style={{backgroundColor:'black', padding:30, width:'50%', margin:'auto'}}>
    <div style={{ width:'100%', margin:'auto'}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            User:
          </Typography>
          <Typography sx={{ width: '33%', color: 'text.secondary' }}>{name}</Typography>
          <Typography sx={{ width: '33%', color: 'text.secondary' }}>ID: {id}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Email: {email}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Purchases</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {
            Products?.map((prod) => {
                return(
                        <div>
                            <p>-{prod.name}</p>
                            <p>Price: {prod.price}</p>
                        </div>
                        
                    
                )
            })
            
            }
            <p>Total: {total}</p> 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
}

export default UserDropdown;
