import { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"

export const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)
    const handleChange = (isExpanded: boolean, panel : string) => {
        setExpanded(isExpanded ? panel : false)
    }
  return (
    <div>
        <Accordion expanded={ expanded === 'panel1'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}>
            <AccordionSummary
            id="panel1"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Officia nemo explicabo mollitia distinctio nihil repellendus magni corporis atque odit. 
                    Est aspernatur deleniti autem veniam architecto neque fuga omnis distinctio illo.
                </Typography>
                </AccordionDetails>
        </Accordion>

        <Accordion expanded={ expanded === 'panel2'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}>
            <AccordionSummary
            id="panel2"
            aria-controls="panel2-content"
            expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Officia nemo explicabo mollitia distinctio nihil repellendus magni corporis atque odit. 
                    Est aspernatur deleniti autem veniam architecto neque fuga omnis distinctio illo.
                </Typography>
                </AccordionDetails>
        </Accordion>

        <Accordion expanded={ expanded === 'panel3'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}>
            <AccordionSummary
            id="panel3"
            aria-controls="panel3-content"
            expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Officia nemo explicabo mollitia distinctio nihil repellendus magni corporis atque odit. 
                    Est aspernatur deleniti autem veniam architecto neque fuga omnis distinctio illo.
                </Typography>
                </AccordionDetails>
        </Accordion>
    </div>
  )
}
