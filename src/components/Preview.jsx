import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFileDownload, FaHistory } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Edit from './Edit';
import jsPDF from 'jspdf';
import { addHistoryAPI } from '../services/allAPI';
import html2canvas from 'html2canvas';

function Preview({ userInput, finish, resumeId, setUserInput }) {

  const [downloadstatus, setDownloadStatus] = React.useState(false)

  const downloadCV = async () => {
    try {
      const input = document.getElementById("result")
      const canvas = await html2canvas(input, { scale: 1 })
      const imgURL = canvas.toDataURL('image/png')

      const pdf = new jsPDF()
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()

      pdf.addImage(imgURL, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save('resume.pdf')

      const localTime = new Date()
      const timestamp = `${localTime.toLocaleDateString()}, ${localTime.toLocaleTimeString()}`

      try {
        const result = await addHistoryAPI({ ...userInput, imgURL, timestamp })
        if (result.status >= 200 && result.status < 300) {
          setDownloadStatus(true)
        }
      } catch (err) {
        console.log(err);
      }

    } catch (err) {
      console.log("pdf generation failed", err);
    }
  }

  return (
    <>
      {
        userInput.personalData.FullName !== "" &&
        <div style={{ marginTop: '70px' }}>

          {
            finish &&
            <Stack direction={'row'} sx={{ justifyContent: 'flex-end' }}>
              
              {/* download */}
              <button onClick={downloadCV} className='btn fs-3 text-primary'>
                <FaFileDownload />
              </button>

              {
                downloadstatus &&
                <>
                  {/* edit */}
                  <Edit resumeId={resumeId} setUpdateduserinput={setUserInput} />

                  {/* history */}
                  <Link to={'/history'} className='btn fs-3 text-primary'>
                    <FaHistory />
                  </Link>
                </>
              }

              {/* back */}
              <Link to={'/form'} className='btn fs-5 text-primary'>Back</Link>

            </Stack>
          }

          <Box component="section">
            <Paper elevation={3} sx={{ p: 3 }} id="result">

              {/* PERSONAL */}
              <h3>{userInput.personalData.FullName}</h3>
              <h6>{userInput.personalData.jobTitle}</h6>

              <p>
                <span>{userInput.personalData.location}</span> |{" "}
                <span>{userInput.personalData.Email}</span> |{" "}
                <span>{userInput.personalData.PhoneNumber}</span>
              </p>

              <p>
                {userInput.personalData.GitHubLink && (
                  <a href={userInput.personalData.GitHubLink} target='_blank'>GitHub</a>
                )}{" "}
                {userInput.personalData.LinkedinProfileLink && (
                  <a href={userInput.personalData.LinkedinProfileLink} target='_blank'>LinkedIn</a>
                )}{" "}
                {userInput.personalData.Portfoliolink && (
                  <a href={userInput.personalData.Portfoliolink} target='_blank'>Portfolio</a>
                )}
              </p>

              {/* SUMMARY */}
              <Divider sx={{ fontSize: '23px' }}>SUMMARY</Divider>
              <p className='fs-5 text-start'>{userInput.summary}</p>

              {/* EDUCATION */}
              <Divider sx={{ fontSize: '23px' }}>EDUCATION</Divider>
              <h6 className='fs-5 text-start'>{userInput.education.course}</h6>

              <p>
                <span>{userInput.education.college}</span> |{" "}
                <span>{userInput.education.University}</span> |{" "}
                <span>{userInput.education.Year}</span>
              </p>

              {/* EXPERIENCE */}
              <Divider sx={{ fontSize: '23px' }}>PROFESSIONAL EXPERIENCE</Divider>
              <h6 className='fs-5 text-start'>{userInput.experience.jobRole}</h6>

              <p>
                <span>{userInput.experience.company}</span> |{" "}
                <span>{userInput.experience.joblocation}</span> |{" "}
                <span>{userInput.experience.duration}</span>
              </p>

              {/* SKILLS */}
              <Divider sx={{ fontSize: '23px', marginBottom: '20px' }}>SKILLS</Divider>

              <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: '10px' }}>
                {
                  userInput.skills.length > 0 &&
                  userInput.skills.map((skill, index) => (
                    <Button key={index} variant="contained">{skill}</Button>
                  ))
                }
              </Stack>

            </Paper>
          </Box>
        </div>
      }
    </>
  )
}

export default Preview
