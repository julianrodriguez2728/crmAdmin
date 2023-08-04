import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';

const UserDropdown = ({id, name, email, Products}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

// const currentDate = new Date();

// const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

// console.log(currentDate.toLocaleDateString('de-DE', options));


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

              const newDate = new Date(prod.updatedAt)

              const formatedDate = newDate.toLocaleString("es-ES", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              });

                return(
                  <div>
                    
                        <div>
                            <p style={{display: 'flex', justifyContent: 'center', padding: 15}}>-{prod.name}</p>
                            <div style={{display: 'flex', justifyContent:'space-between'}}>

                            <p>Date: {formatedDate} </p>
                            <p>Price: {prod.price} </p>
                            </div>
                        </div>
                        
                    <Divider />
                  </div>

                )
            })
            
            }
            <p style={{display: 'flex', justifyContent: 'flex-end', marginTop: 15}}>Total: {total}</p> 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
}

export default UserDropdown;
