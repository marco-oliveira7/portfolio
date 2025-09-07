import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import { useRef, useState, type FormEvent } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Email send successfully");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      id="contact"
      className="py-4 flex flex-col sm:h-screen h-[110vh] items-center justify-between"
    >
      <h1 className="text-2xl uppercase tracking-widest ">Contact</h1>
      <div className="w-full h-full flex flex-col sm:flex-row justify-around items-center">
        <form
          onSubmit={submitForm}
          ref={formRef}
          className="border-2 border-zinc-600 bg-[#191b1f] rounded-2xl w-6/7 sm:w-4/7 lg:w-2/7 h-10/12 sm:h-9/12 py-4 flex flex-col items-center justify-center"
        >
          <div className="h-full flex flex-col justify-end">
            <label htmlFor="name">
              <h1 className="text-sm">Name:</h1>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="user_name"
                id="name"
                type="text"
                className="mb-10 bg-[#1f1f25] shadow-zinc-800 rounded-lg py-1 px-2 outline-0 transition-all duration-75 focus:outline-2"
              />
            </label>
            <label htmlFor="email">
              <h1 className="text-sm">Email:</h1>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="user_email"
                id="email"
                type="text"
                className="mb-10 bg-[#1f1f25] shadow-zinc-800 rounded-lg py-1 px-2 outline-0 transition-all duration-75 focus:outline-2"
              />
            </label>
            <label htmlFor="message">
              <h1 className="text-sm">Message:</h1>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                id="message"
                cols={10}
                rows={3}
                className="bg-[#1f1f25] shadow-zinc-800 rounded-lg py-1 px-2 outline-0 transition-all duration-75 focus:outline-2 w-full"
              />
            </label>
          </div>
          <div className="h-8/12 flex items-center">
            <Button className="h-14 w-28 cursor-pointer">Send</Button>
          </div>
        </form>
        <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between max-[400px]:justify-center w-full sm:w-auto h-9/12">
          <div className="bg-[#13171E] rounded-2xl p-5 shadow-2xl shadow-zinc-700 max-[400px]:hidden ">
            <h1 className="mb-1 sm:mb-10 text-left sm:text-right text-lg sm:text-xl">
              Avaliable to work
            </h1>
            <p className="text-sm sm:text-base">
              Have an exciting project you
              <br /> need help with?
              <br />
              Send me an email or contact
              <br /> me via instant message!
            </p>
          </div>
          <div className="w-1/3 sm:w-full max-[400px]:w-2/3">
            <div className="rounded-xl px-3 py-1 w-full bg-[#22272e] text-right shadow-sm shadow-zinc-800">
              <a
                href="https://github.com/marco-oliveira7"
                target="_blank"
                className="tracking-widest flex justify-between items-center"
              >
                <FontAwesomeIcon size={"2x"} icon={faGithub} />
                GIT HUB
              </a>
            </div>
            <div className="mt-2 rounded-xl px-3 py-1 w-full bg-[#22272e] text-right shadow-sm shadow-zinc-800">
              <a
                href="https://www.linkedin.com/in/marcooliveira7/"
                target="_blank"
                className="tracking-widest flex justify-between items-center"
              >
                <FontAwesomeIcon size={"2x"} icon={faLinkedin} />
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
