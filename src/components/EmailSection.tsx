'use client';
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            email: (e.currentTarget.email as HTMLInputElement).value,
            subject: (e.currentTarget.subject as HTMLInputElement).value,
            message: (e.currentTarget.message as HTMLTextAreaElement).value,
        };

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.status === 200) {
                console.log('Message sent.');
            }
        } catch (error) {
            console.error(error);
            
        }
    };

    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="bg-radial-[at_50%_75%] from-blue-900 to-transparent
                rounded-full h-70 w-70
                z-0 blur-lg absolute
                top-1/3 -right-100
                md:top-3/4 md:-left-10
                transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2"> Let's connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I'm currently looking for new opportunities, my inbox is always open.
                    Wheter you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="socials flex flex-roe gap-2">
                    <Link href="https://github.com/marcelogam">
                        <Image width="30" height="30" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/github-svgrepo-com.svg`} alt="Github Icon"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/marcelo--gomes/">
                        <Image width="30" height="30" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/linkedin-svgrepo-com.svg`} alt="Github Icon"/>
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Seu Email</label>
                        <input 
                            name="email"
                            type="email" 
                            id="email"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="teste@gmail.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
                        <input
                            name="subject"
                            type="text" 
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Just saying hu"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
                        <textarea 
                            name="message" 
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button 
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection;