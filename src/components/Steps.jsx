import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { addResumeAPI } from '../services/allAPI';
import Swal from 'sweetalert2'



const steps = ['Basic Informations', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];

function Steps({ userInput, setUserInput, setFinish, setResumeId }) {

    const skillSuggestionArray = ['JavaScript', 'React', 'Node.js', 'Python', 'Machine Learning', 'Communication', 'Problem Solving',];
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());



    const inputRef = React.useRef()
    console.log(userInput);

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const addSkill = (inputSkill) => {
        if (inputSkill) {
            if (userInput.skills.includes(inputSkill.toLowerCase())) {
                alert("skill already added")
            }
            else {
                setUserInput({ ...userInput, skills: [...userInput.skills, inputSkill.toLowerCase()] })
            }
        }
    }

    const removeSkill = (skill) => {
        setUserInput({ ...userInput, skills: userInput.skills.filter(sk => sk != skill) })

    }

    const renderStepArrayContent = (stepcount) => {
        switch (stepcount) {
            case 0: return (
                <div>
                    <h3>Personal Details</h3>
                    <div className='d-flex flex-column gap-3 mt-4'>
                        <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, FullName: e.target.value } })} id="standard-FullName" label="Full Name" variant="standard" value={userInput.personalData.FullName} />
                        <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, jobTitle: e.target.value } })} id="standard-jobTitle" label="Job Title" variant="standard" value={userInput.personalData.jobTitle} />
                        <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, location: e.target.value } })} id="standard-location" label="Location" variant="standard" value={userInput.personalData.location} />
                    </div>
                </div>
            )

            case 1: return (
                <div>
                    <h3>Contact Details</h3>
                    <div className='d-flex flex-column gap-3 mt-4'>
                        <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, Email: e.target.value } })} id="standard-Email" label="Email" variant="standard" value={userInput.personalData.Email} />
                        <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, PhoneNumber: e.target.value } })} id="standard-PhoneNumber" label="Phone Number" variant="standard" value={userInput.personalData.PhoneNumber} />
                        <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, GitHubLink: e.target.value } })} id="standard-GitHubLink" label="GitHub Link" variant="standard" value={userInput.personalData.GitHubLink} />
                        <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, LinkedinProfileLink: e.target.value } })} id="standard-LinkedinProfileLink" label="Linkedin Profile Link" variant="standard" value={userInput.personalData.LinkedinProfileLink} />
                        <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, Portfoliolink: e.target.value } })} id="standard-Portfoliolink" label="Portfolio link" variant="standard" value={userInput.personalData.Portfoliolink} />
                    </div>
                </div>
            )

            case 2: return (
                <div>
                    <h3>Education Details</h3>
                    <div className='d-flex flex-column gap-3 mt-4'>
                        <TextField onChange={(e) => setUserInput({ ...userInput, education: { ...userInput.education, course: e.target.value } })} id="standard-course" label="Course" variant="standard" value={userInput.education.course} />
                        <TextField onChange={(e) => setUserInput({ ...userInput, education: { ...userInput.education, college: e.target.value } })} id="standard-college" label="College" variant="standard" value={userInput.education.college} />
                        <TextField onChange={(e) => setUserInput({ ...userInput, education: { ...userInput.education, University: e.target.value } })} id="standard-university" label="University" variant="standard" value={userInput.education.University} />
                        <TextField onChange={(e) => setUserInput({ ...userInput, education: { ...userInput.education, Year: e.target.value } })} id="standard-passout" label="Year Of Passout" variant="standard" value={userInput.education.Year} />
                    </div>
                </div>
            )

            case 3: return (
                <div>
                    <h3>Professional Details</h3>
                    <div className='d-flex flex-column gap-3 mt-4'>
                        <TextField onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } })} id="standard-job" label="Job or Internships" variant="standard" value={userInput.experience.jobRole} />
                        <TextField onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} id="standard-company" label="Company" variant="standard" value={userInput.experience.company} />
                        <TextField onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, joblocation: e.target.value } })} id="standard-loc" label="Location" variant="standard" value={userInput.experience.joblocation} />
                        <TextField onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} id="standard-duration" label="Duration" variant="standard" value={userInput.experience.duration} />
                    </div>
                </div>
            )

            case 4: return (
                <div>
                    <h3>Skills & Certifications</h3>
                    <div className='mt-3 d-flex align-items-center justify-content-between '>
                        <TextField inputRef={inputRef} id="standard-Job" label="Job or Internships" placeholder='add skill' variant="outlined" className='form-control' sx={{ width: '100%' }} />
                        <Button onClick={() => addSkill(inputRef.current.value)} variant="contained" className='ms-3' >Add</Button>
                    </div>
                    <h5 className='mt-3'>Suggestions:</h5>
                    <div className='d-flex flex-wrap justify-content-between align-items-center mt-3 gap'>
                        {
                            skillSuggestionArray.map(skill => (
                                <Button key={skill} onClick={() => addSkill(skill)} variant="contained" className='ms-3'>{skill}</Button>
                            ))
                        }
                    </div>
                    <h5 className='mt-3'>Added skills</h5>
                    <div className='d-flex flex-wrap justify-content-start align-items-center mt-3 gap-1'>
                        {
                            userInput.skills.length > 0 &&
                            userInput.skills.map(skill => (

                                <span key={skill} className='btn btn-primary text-light'>{skill} <button className='btn text-light' onClick={() => removeSkill(skill)} >x</button></span>

                            )
                            )
                        }

                    </div>
                </div>
            )
            case 5:
                return (
                    <div>
                        <h3>Review & Submit</h3>
                        <div className='mt-1 p-3 row'>
                            <TextField onChange={(e) => setUserInput({ ...userInput, summary: e.target.value })} id="standard-job" label="Write a short summary of yourself" variant="standard" value={userInput.summary} />
                        </div>
                    </div>
                )

            default: return null
        }
    }

    //addResume
    const handleAddResume = async () => {
        const { FullName, jobTitle, location } = userInput.personalData
        if (FullName && jobTitle && location) {
            try {
                const result = await addResumeAPI(userInput)
                console.log(result);
                if (result.status >= 200 && result.status < 300) {
                    setResumeId(result?.data?.id)
                    Swal.fire({title: 'success!',text: 'Resume Generated',icon: 'success',
                    });
                    setFinish(true)
                }
                else {
                    setFinish(false)
                    Swal.fire({title: 'Error!!',text: 'Resume Added Failed',icon: 'error',
                    });
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            alert("enter complete information")
        }
    }

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optional</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

                <Box>
                    {renderStepArrayContent(activeStep)}
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>Back</Button>
                    <Box sx={{ flex: '1 1 auto' }} />

                    {
                        activeStep === steps.length - 1 ?                   
                            <Button onClick={handleAddResume}>FINISH</Button> :
                            <Button onClick={handleNext}>NEXT</Button>
                    }
                </Box>
            </Box>
        </div>
    )
}

export default Steps;