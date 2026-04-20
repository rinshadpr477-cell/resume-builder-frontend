import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div>
            {/* first section */}

            <section style={{ height: '700px', backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwd29ya2Vyc3xlbnwwfHwwfHx8MA%3D%3D')", backgroundSize: 'cover', backgroundAttachment: 'fixed' }} className='d-flex align-items-center justify-content-center'>

                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} className='border box-sahdow py-4 px-5 rounded text-center'>

                    <h1 style={{ fontFamily: 'Dancing Script' }}> Designed to get hired</h1>
                    <h4 >Stand out from the crowd and <br />land your dream job</h4>
                    <Link to={'/resume'}>
                        <button className='btn btn-primary'>Get Started</button>
                    </Link>

                </div>

            </section>

            {/* tool section */}
            <section className=''>
                <h1 className='text-center mt-5' style={{ fontFamily: 'Dancing Script' }} >Tools</h1>
                <div className='row  m-3 align-items-center '  >
                    <div className='col-md-6 ps-5'>

                        <h4>Resume</h4>
                        <p>Build and manage multiple resumes with seamless editing and updates.</p>

                        <h4>Cover Letters</h4>
                        <p>Easily write professional cover letters</p>

                        <h4>Jobs</h4>
                        <p>Automatically receive new and relevant job postings.</p>

                        <h4>Applications</h4>
                        <p>Effortlessly manage and track your job applications in an organized manner.</p>

                    </div>
                    <div className=' col-md-6  p-5'>
                        <img className="img-fluid" src="https://th.bing.com/th/id/OIP.ejS5gUJD1zt1XpSbHbPXsQHaHa?w=194&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
                    </div>
                </div>
            </section>

            <section style={{ height: '450px', backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwd29ya2VyfGVufDB8fDB8fHww')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            </section>


            {/*testimony*/}

            <section className='p-5'>
                <h1 className='text-center my-5' style={{ fontFamily: 'Dancing Script' }}>Testimony</h1>
                <div className='row m-3 align-items-center'>
                    <div className='col-md-6 ps-5'>
                        <h3>Trusted by professionals worldwide</h3>
                        <p className='mt-5'>At LiveCareer,we don't just help you create resumes - we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results <br /> <br />
                            In fact, users who used LiveCareer reported getting hired an average of 48 days faster. <br /> <br />
                            Join thousands of job-seekers who've fast-tracked their careers with a resume that truly stands out.</p>
                    </div>
                    <div className='col-md-6 p-5'>
                        <div className='row'>
                            <div className='col-3'>
                                <img src="https://tse2.mm.bing.net/th/id/OIP._Z8fVK1zPE3qsG58_yxavQHaHa?pid=Api&P=0&h=180" className='w-100' alt="" />
                            </div>
                            <div className='col-3'><img src="https://tse4.mm.bing.net/th/id/OIP.czfU8ea1Yp138bEW4lrRFwHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
                            <div className='col-3'><img src="https://tse3.mm.bing.net/th/id/OIP.vSXIH3bDfAhSe8i4tx-W4wHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
                            <div className='col-3'><img src="https://tse4.mm.bing.net/th/id/OIP.KTPL6oTUxRv8lmHaLdHLWgHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
                        </div>

                        <div className='row mt-2'>
                            <div className='col-3'>
                                <img src="https://tse3.mm.bing.net/th/id/OIP.zG442lTo6Pf6wX3zQ4WlywHaHa?pid=Api&P=0&h=180" className='w-100' alt="" />
                            </div>
                            <div className='col-3'><img src="https://tse2.mm.bing.net/th/id/OIP.gzp3Wbpv3n9_8Ilr4i0TRwHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
                            <div className='col-3'><img src="https://tse3.mm.bing.net/th/id/OIP.os7uM5TJXlUufJbHt9t7UAHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
                            <div className='col-3'><img src="https://tse1.mm.bing.net/th/id/OIP.JL2Zk3Mtama3eT65HbqyxAHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
                        </div>

                        <div className='row mt-2'>
                            <div className='col-3'>
                                <img src="https://tse2.mm.bing.net/th/id/OIP.HarE69NbmjDkDvrfkBoHUQHaHa?pid=Api&P=0&h=180" className='w-100' alt="" />
                            </div>
                            <div className='col-3'><img src="https://tse1.mm.bing.net/th/id/OIP.plQs4Z2EeFESD9rXqIzmeQHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
                            <div className='col-3'><img src="https://tse1.mm.bing.net/th/id/OIP.L9B1n8lj7aocldq2QeKEtgHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
                            <div className='col-3'><img src="https://tse1.mm.bing.net/th/id/OIP.a-60MXaJfCynn5w035WvlgHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
                        </div>

                        <div className='row mt-2'>
                            <div className='col-3'>
                                <img src="https://tse3.mm.bing.net/th/id/OIP.qI3bUPlhbdJzxBT3utnchAHaHa?pid=Api&P=0&h=180" className='w-100' alt="" />
                            </div>
                            <div className='col-3'><img src="https://tse3.mm.bing.net/th/id/OIP.RFEm0W7gArHDrxGjSvgSigHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
                            <div className='col-3'><img src="https://tse3.mm.bing.net/th/id/OIP.Q1v4cBkiE1bHiho_m9pURAHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
                            <div className='col-3'><img src="https://tse1.mm.bing.net/th/id/OIP.Jife-pDdkX2FQ7fELxxBXwHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default LandingPage