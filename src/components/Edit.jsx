import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaEdit } from "react-icons/fa";
import { TextField } from '@mui/material';
import { editResumeAPI, getResumeAPI } from '../services/allAPI';
import Swal from 'sweetalert2';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto'
};

function Edit({ resumeId ,setUpdateduserinput }) {

  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userInput, setUserInput] = React.useState({});

  const getResume = async () => {
    try {
      const result = await getResumeAPI(resumeId);
      console.log(result);
      setUserInput(result?.data || {});
    }
    catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    getResume();
  }, [])

  const addSkill = (inputSkill) => {
    let skill = inputSkill.current.value
    if (skill) {
      if (userInput.skills?.includes(skill.toLowerCase())) {
        alert("skill already added")
      }
      else {
        setUserInput({ ...userInput, skills: [...(userInput.skills || []), skill.toLowerCase()] })
      }
      inputSkill.current.value = ""
    }
  }

  const removeSkill = (skill) => {
    setUserInput({ ...userInput, skills: userInput.skills.filter(sk => sk != skill) })
  }

 const updateResume = async () => {
    try {

      const result = await editResumeAPI(resumeId, userInput)
      if (result.status >= 200 && result.status < 300) {

        // ✅ FIXED (typo)
        setUpdateduserinput(result?.data)

        handleClose()
        Swal.fire({
          title: "Success!!",
          text: "Resume Updated Successfully",
          icon: "success"
        });
      }

    }
    catch (err) {
      console.log(err);

    }
  }

  return (
    <div>
      <button onClick={handleOpen} className='btn fs-3 text-primary'>
        <FaEdit />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography variant="h6">
            Edit Details
          </Typography>

          {/* ✅ FIXED: changed Typography -> Box */}
          <Box sx={{ mt: 2 }}>

            <h3>Personal Details</h3>
            <div className='d-flex flex-column gap-3 mt-4'>
              <TextField
                onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, FullName: e.target.value } })}
                label="Full Name"
                variant="standard"
                value={userInput.personalData?.FullName || ""}
              />
              <TextField
                onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, jobTitle: e.target.value } })}
                label="Job Title"
                variant="standard"
                value={userInput.personalData?.jobTitle || ""}
              />
              <TextField
                onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, location: e.target.value } })}
                label="Location"
                variant="standard"
                value={userInput.personalData?.location || ""}
              />
            </div>

            <h3>Contact Details</h3>
            <div className='d-flex flex-column gap-3 mt-4'>
              <TextField
                onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, Email: e.target.value } })}
                label="Email"
                variant="standard"
                value={userInput.personalData?.Email || ""}
              />
              <TextField
                onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, PhoneNumber: e.target.value } })}
                label="Phone Number"
                variant="standard"
                value={userInput.personalData?.PhoneNumber || ""}
              />
              <TextField
                onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, GitHubLink: e.target.value } })}
                label="GitHub Link"
                variant="standard"
                value={userInput.personalData?.GitHubLink || ""}
              />
              <TextField
                onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, LinkedinProfileLink: e.target.value } })}
                label="Linkedin Profile Link"
                variant="standard"
                value={userInput.personalData?.LinkedinProfileLink || ""}
              />
              <TextField
                onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, Portfoliolink: e.target.value } })}
                label="Portfolio link"
                variant="standard"
                value={userInput.personalData?.Portfoliolink || ""}
              />
            </div>

            <h3>Education Details</h3>
            <div className='d-flex flex-column gap-3 mt-4'>
              <TextField
                onChange={(e) => setUserInput({ ...userInput, education: { ...userInput.education, course: e.target.value } })}
                label="Course"
                variant="standard"
                value={userInput.education?.course || ""}
              />
              <TextField
                onChange={(e) => setUserInput({ ...userInput, education: { ...userInput.education, college: e.target.value } })}
                label="College"
                variant="standard"
                value={userInput.education?.college || ""}
              />
              <TextField
                onChange={(e) => setUserInput({ ...userInput, education: { ...userInput.education, University: e.target.value } })}
                label="University"
                variant="standard"
                value={userInput.education?.University || ""}
              />
              <TextField
                onChange={(e) => setUserInput({ ...userInput, education: { ...userInput.education, Year: e.target.value } })}
                label="Year Of Passout"
                variant="standard"
                value={userInput.education?.Year || ""}
              />
            </div>

            <h3>Professional Details</h3>
            <div className='d-flex flex-column gap-3 mt-4'>
              <TextField
                onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } })}
                label="Job or Internships"
                variant="standard"
                value={userInput.experience?.jobRole || ""}
              />
              <TextField
                onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })}
                label="Company"
                variant="standard"
                value={userInput.experience?.company || ""}
              />
              <TextField
                onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, joblocation: e.target.value } })}
                label="Location"
                variant="standard"
                value={userInput.experience?.joblocation || ""}
              />
              <TextField
                onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })}
                label="Duration"
                variant="standard"
                value={userInput.experience?.duration || ""}
              />
            </div>

            <h3>Skills</h3>
            <div className='mt-3 d-flex align-items-center justify-content-between'>
              <TextField
                inputRef={inputRef}
                label="Add Skill"
                variant="outlined"
                sx={{ width: '100%' }}
              />
              <Button variant="contained" className='ms-3' onClick={() => addSkill(inputRef)}>ADD</Button>
            </div>

            <h5 className='mt-3'>Added Skills:</h5>
            <div className='d-flex flex-wrap mt-3 gap-1'>
              {
                userInput.skills?.map(skill => (
                  <span key={skill} className='btn btn-primary text-light'>
                    {skill}
                    <button className='btn text-light' onClick={() => removeSkill(skill)}>x</button>
                  </span>
                ))
              }
            </div>

            <h3 className='mt-3'>Professional Summary</h3>
            <div className='mt-1 p-3 row'>
              <TextField
                onChange={(e) => setUserInput({ ...userInput, summary: e.target.value })}
                label="Write a short summary of yourself"
                variant="standard"
                value={userInput.summary || ""}
              />
            </div>

          </Box>

          <button onClick={updateResume} className='text-primary'>Update</button>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit;
