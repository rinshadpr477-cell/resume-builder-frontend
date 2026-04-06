import React, { useState } from 'react'
import Steps from '../components/Steps'
import Preview from '../components/Preview'

function UserForm() {
    const [userInput, setUserInput] = React.useState({
        personalData: {
            FullName: "",
            jobTitle: "",
            location: "",
            Email: "",
            PhoneNumber: "",
            GitHubLink: "",
            LinkedinProfileLink: "",
            Portfoliolink: ""
        },
        education: {
            course: "",
            college: "",
            University: "",
            Year: ""
        },
        experience: {
            jobRole: "",
            company: "",
            joblocation: "",
            duration: ""
        },
        skills: [],
        summary: ""
    });
    const [finish, setFinish] = useState(false)
    const [resumeId, setResumeId] = useState("")
    console.log(resumeId);
    

    return (
        <>
            {
                finish ?
                    <div style={{ minHeight: '100vh' }} className='d-flex align-items-center justify-content-center'>
                        <Preview setUserInput={setUserInput} userInput={userInput} finish={finish} resumeId={resumeId}/>

                    </div>
                    :

                    <div className='container mt-5'>
                        <div className="row p-5">
                            <div className="col-lg-6">
                                <Steps setResumeId={setResumeId} userInput={userInput} setUserInput={setUserInput} setFinish={setFinish} />
                            </div>
                            <div className="col-lg-6">
                                <Preview userInput={userInput} />
                            </div>
                        </div>

                    </div>
            }
        </>
    )
}

export default UserForm
