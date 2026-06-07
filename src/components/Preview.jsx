import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import { FaFileDownload, FaHistory, FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Edit from './Edit';
import jsPDF from 'jspdf';
import { addHistoryAPI } from '../services/allAPI';
import html2canvas from 'html2canvas';

function Preview({ userInput, finish, resumeId, setUserInput }) {

  const [downloadstatus, setDownloadStatus] = React.useState(false);

  const downloadCV = async () => {
    try {
      const input = document.getElementById("result");
      const canvas = await html2canvas(input, {
        scale: 2,
        useCORS: true
      });
      const imgURL = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgURL, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
      const timestamp = new Date().toLocaleString();

      const result = await addHistoryAPI({
        ...userInput,
        imgURL,
        timestamp
      });

      if (result?.status >= 200 && result?.status < 300) {
        setDownloadStatus(true);
      }
    } catch (err) {
      console.log("PDF generation failed", err);
    }
  };

  const data = userInput || {};
  if (!data?.personalData?.FullName) return null;

  return (
    <Box sx={{ mt: { xs: 10, md: 12 }, px: { xs: 2, md: 6 } }}>
      {finish && (
        <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end", mb: 2, flexWrap: "wrap" }} >
          <Button  onClick={downloadCV} variant="contained"  startIcon={<FaFileDownload />} sx={{ textTransform: "none", borderRadius: 2  }} >
            Download
          </Button>

          {downloadstatus && (
            <>
              <Edit resumeId={resumeId} setUpdateduserinput={setUserInput} />

              <Link to="/history">
                <Button variant="outlined" startIcon={<FaHistory />} sx={{ textTransform: "none", borderRadius: 2 }} >
                  History
                </Button>
              </Link>
            </>
          )}

          <Link to="/form">
            <Button variant="text" startIcon={<FaArrowLeft />} sx={{ textTransform: "none" }} >
              Back
            </Button>
          </Link>

        </Stack>
      )}
   
      <Paper id="result" elevation={6}sx={{ p: { xs: 2, md: 4 },  borderRadius: 4,  maxWidth: "900px", margin: "auto", background: "#fff" }} >
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <h2 style={{ margin: 0 }}>
            {data.personalData?.FullName}
          </h2>
          <p style={{ margin: "5px 0", color: "#555" }}>
            {data.personalData?.jobTitle}
          </p>
          <p style={{ fontSize: "14px", color: "#666" }}>
            {data.personalData?.location} | {data.personalData?.Email} | {data.personalData?.PhoneNumber}
          </p>
        </Box>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2, flexWrap: "wrap" }}>
          {data.personalData?.GitHubLink && (
            <a href={data.personalData.GitHubLink} target="_blank">GitHub</a>
          )}
          {data.personalData?.LinkedinProfileLink && (
            <a href={data.personalData.LinkedinProfileLink} target="_blank">LinkedIn</a>
          )}
          {data.personalData?.Portfoliolink && (
            <a href={data.personalData.Portfoliolink} target="_blank">Portfolio</a>
          )}
        </Stack>
        <Divider sx={{ my: 2 }}>SUMMARY</Divider>
        <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
          {data.summary}
        </p>
        <Divider sx={{ my: 2 }}>EDUCATION</Divider>
        <h4>{data.education?.course}</h4>
        <p>
          {data.education?.college} | {data.education?.University} | {data.education?.Year}
        </p>
        <Divider sx={{ my: 2 }}>EXPERIENCE</Divider>
        <h4>{data.experience?.jobRole}</h4>
        <p>
          {data.experience?.company} | {data.experience?.joblocation} | {data.experience?.duration}
        </p>
        <Divider sx={{ my: 2 }}>SKILLS</Divider>
        <Stack direction="row" spacing={1}  sx={{ flexWrap: "wrap",  gap: 1 }} >
          {data.skills?.map((skill, i) => (
            <Chip key={i}  label={skill} color="primary" variant="outlined" sx={{ mb: 1 }} />))}
        </Stack>

      </Paper>
    </Box>
  );
}

export default Preview;