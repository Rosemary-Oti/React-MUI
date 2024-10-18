import { useState } from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material'


export const MuiCheckbox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    const [skills, setSkills] = useState<string[]>([])

    console.log({ acceptTnC })
    console.log({ skills })


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }
    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if(index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }

  return (
    <Box>
        <Box>
            <FormControlLabel 
                label='I accept the terms and conditions' 
                control={
                <Checkbox 
                size='small'
                checked={acceptTnC} 
                onChange={handleChange} />}
            />
        </Box>

        <Box>
            <Checkbox icon={<BookmarkBorderIcon />} 
            checkedIcon={<BookmarkIcon />} 
            checked={acceptTnC}
            onChange={handleChange}
            />
        </Box>

        <Box>
            <FormControl>
                <FormLabel>SKILLS</FormLabel>
                <FormGroup row>
                    <FormControlLabel 
                        label='HTML'
                        value='css'
                        control={<Checkbox checked={skills.includes('html')} onChange={handleSkillChange}/>}
                    />
                    <FormControlLabel 
                        label='CSS'
                        value='html'
                        control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange}/>}
                    />
                    <FormControlLabel 
                        label='JAVASCRIPT'
                        value='javascript'
                        control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange}/>}
                    />
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}
