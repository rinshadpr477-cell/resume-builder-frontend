import * as React from 'react';
import { Box, Button, Typography, Modal, TextField, CircularProgress, Stack,Chip} from '@mui/material';
import { FaEdit } from "react-icons/fa";
import { editResumeAPI, getResumeAPI } from '../services/allAPI';
import Swal from 'sweetalert2';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', sm: 600 },
  maxHeight: '85vh',
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 3,
  overflowY: 'auto'
};

const emptyState = {
  personalData: {},
  education: {},
  experience: {},
  skills: [],
  summary: ""
};

function Edit({ resumeId, setUpdateduserinput }) {

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [skillInput, setSkillInput] = React.useState("");
  const [userInput, setUserInput] = React.useState(emptyState);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 
  const getResume = async () => {
    if (!resumeId) return;
    try {
      setLoading(true);
      const result = await getResumeAPI(resumeId);
      setUserInput(result?.data || emptyState);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to load resume", "error");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (open) getResume();
  }, [open, resumeId]);


  const updateNested = (section, field, value) => {
    setUserInput(prev => ({
      ...prev,
      [section]: {
        ...prev?.[section],
        [field]: value
      }
    }));
  };


  const addSkill = () => {
    const skill = skillInput.trim().toLowerCase();
    if (!skill) return;
    setUserInput(prev => {
      const skills = prev.skills || [];
      if (skills.includes(skill)) {
        Swal.fire("Oops", "Skill already added", "info");
        return prev;
      }
      return { ...prev, skills: [...skills, skill] };
    });
    setSkillInput("");
  };

  const removeSkill = (skill) => {
    setUserInput(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };


  const updateResume = async () => {
    try {
      setSaving(true);
      const result = await editResumeAPI(resumeId, userInput);
      if (result?.status >= 200 && result?.status < 300) {
        setUpdateduserinput(result?.data);
        Swal.fire({
          title: "Updated!",
          text: "Resume updated successfully",
          icon: "success"
        });
        handleClose();
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Update failed", "error");
    } finally {
      setSaving(false);
    }
  };

 
  return (
    <div>

      <Button onClick={handleOpen} variant="contained" color="primary" sx={{ borderRadius: 3, minWidth: 0 }}>
        <FaEdit />
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Edit Resume</Typography>
            {loading && <CircularProgress size={20} />}
          </Stack>

         
          <Typography sx={{ mt: 2 }} variant="subtitle1">
            Personal Details
          </Typography>

          <Stack spacing={2} mt={1}>
            <TextField  label="Full Name" value={userInput?.personalData?.FullName || ""}  onChange={(e) => updateNested("personalData", "FullName", e.target.value)} fullWidth />
            <TextField label="Job Title" value={userInput?.personalData?.jobTitle || ""} onChange={(e) => updateNested("personalData", "jobTitle", e.target.value)} fullWidth />
            <TextField label="Location" value={userInput?.personalData?.location || ""} onChange={(e) => updateNested("personalData", "location", e.target.value)}  fullWidth />
          </Stack>

          <Typography sx={{ mt: 3 }} variant="subtitle1">
            Contact
          </Typography>

          <Stack spacing={2} mt={1}>
            <TextField label="Email" value={userInput?.personalData?.Email || ""}onChange={(e) => updateNested("personalData", "Email", e.target.value)} fullWidth />
            <TextField   label="Phone"  value={userInput?.personalData?.PhoneNumber || ""}  onChange={(e) => updateNested("personalData", "PhoneNumber", e.target.value)} fullWidth />
          </Stack>

          
          <Typography sx={{ mt: 3 }}>Skills</Typography>

          <Stack direction="row" spacing={1} mt={1}>
            <TextField value={skillInput} onChange={(e) => setSkillInput(e.target.value)} label="Add Skill" fullWidth />
            <Button variant="contained" onClick={addSkill}>
              Add
            </Button>
          </Stack>

          <Stack direction="row" flexWrap="wrap" gap={1} mt={2}>
            {userInput.skills?.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                onDelete={() => removeSkill(skill)}
                color="primary"
              />
            ))}
          </Stack>

          {/* SUMMARY */}
          <Typography sx={{ mt: 3 }}>Summary</Typography>

          <TextField  value={userInput.summary || ""} onChange={(e) => setUserInput({ ...userInput, summary: e.target.value })} fullWidth  multiline  rows={3} sx={{ mt: 1 }} />

          <Stack direction="row" justifyContent="flex-end" mt={4} spacing={2}>
            <Button onClick={handleClose} disabled={saving}>
              Cancel
            </Button>

            <Button variant="contained"  onClick={updateResume} disabled={saving} >
              {saving ? "Saving..." : "Update"}
            </Button>
          </Stack>

        </Box>
      </Modal>
    </div>
  );
}

export default Edit;