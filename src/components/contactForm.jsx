import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';



const ContactForm = () =>{
    return(
        <>
        <form>
                            <div className="mb-4">
                                <div className="flex items-center border rounded-md p-2 bg-SeaGreen">
                                    <FaUser className="text-Azure mr-2" />
                                    <input
                                        type="text"
                                        className="bg-transparent outline-none w-full border-SeaGreen"
                                        placeholder="Full Name"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center border rounded-md p-2 bg-SeaGreen">
                                    <FaEnvelope className="text-Azure mr-2" />
                                    <input
                                        type="email"
                                        className="bg-transparent outline-none w-full border-SeaGreen"
                                        placeholder="Email Address"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-start border rounded-md p-2 bg-SeaGreen">
                                    <FaCommentDots className="text-Azure mt-2 mr-2" />
                                    <textarea
                                        className="bg-transparent outline-none w-full"
                                        placeholder="Message"
                                        rows="4"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-BleuDe text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
                            >
                                Send Message <span className="ml-2">→</span>
                            </button>

                            <p className="text-gray-500 text-[12px] font-normal mt-4">
                                *Any details shared through this form shall remain private to Bigdoor Solutions and will not be disclosed to any third party or external company.
                            </p>
                        </form>
        
        </>
    )
}

export default ContactForm;