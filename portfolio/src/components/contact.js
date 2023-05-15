import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


function Contact() {
    return (
        <section
            id="contact"
            className=" bg-[#0a192fec] bg-light duration-700 pt-24 h-screen">
            <h4 className="text-slate-300 mx-14    font-bold">
                CONTACT
                <hr className="w-24 h-1 mx-auto my-6 bg-name rounded border-0"></hr>
            </h4>
            <div className="flex flex-col-reverse space-y-10 items-center justify-center mx-10 md:flex-row md:space-x-24 md:space-y-0 md:p-4">

                <div
                    data-aos="flip-right"
                    className="rounded-2xl md:w-1/3  text-slate-200 text-center shadow-[#020010]  p-4 md:m-3 m-1 shadow-2xl">
                    <p className="mb-4">Let’s work together <br/>Say Hi, and get in touch with me.</p>
                    <a href="mailto:maheshmalllareddy@gmail.com">
                        <button className="bg-name bg-dark text-light transition-all duration-300 font-bold rounded-md py-2 px-4 my-4">
                            EMAIL ME
                        </button>
                    </a>
                </div>
            </div>
            <h4 className=" pt-12 md:inline text-md md:border-l-8  md:px-4 md:py-2 p-12 font-bold text-slate-400 sm:mx-40">
                You can Email above  and contact me or you can reach out to
                me just by clicking below social media icons
            </h4>
            <div className="flex py-10 flex-row justify-center gap-8">
                <a href="https://www.linkedin.com/in/mahesh-mallareddy-bb7423236/" target="_blank" className="hover:bg-slate-200 rounded-lg">
                    <FaLinkedin size={'40'} color=" #007bb6"/>
                </a>
                <a href="https://github.com/mahesh-mallareddy" target="_blank" className="hover:bg-slate-200 rounded-lg">
                    <FaGithub size={'40'} color="#000000"/>
                </a>
                <a href="mailto:maheshmalllareddy@gmail.com" target="_blank" className="hover:bg-slate-200 rounded-lg">
                    <FaEnvelope size={'40'} color=" #dd4b39"/>
                </a>
            </div>
            <h2 className="text-slate-500 font-bold py-4 bg-name text-md  text-center">

            </h2>
        </section>
    );
}

export default Contact;