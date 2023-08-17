import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import GeneralFields from './components/GeneralFields';
import StudyFields from './components/StudyFields';
import ExperienceFields from './components/ExperienceFields';
import { Button, Card, Paper } from '@mui/material';
import { useState } from 'react';

function App() {
  const [fieldState, setFieldState] = useState(false)
  return (
    <div className='app'>
      <Card style={{padding: "20px"}}>
        <div className='Registration'>
          <h3>Registration</h3>
          <Paper className="paper" elevation={3}>
            <h4>Personal Info</h4>
            <GeneralFields fieldState={fieldState}/>
          </Paper>
          <Paper className="paper" elevation={3}>
            <h4>Education</h4>
            <StudyFields fieldState={fieldState}/>
          </Paper>
          <Paper className='paper' elevation={3}>
            <h4>Experience</h4>
            <ExperienceFields fieldState={fieldState}/>
          </Paper>
          <div>
            <Button style={{margin: '5px'}} variant='outlined' onClick={() => setFieldState(true)}>Submit</Button>
            <Button style={{margin: '5px'}} variant='outlined' onClick={() => setFieldState(false)}>Edit</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default App
