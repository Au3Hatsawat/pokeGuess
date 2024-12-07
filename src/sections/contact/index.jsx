import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className="flex gap-7">
            <div>
                <a href="https://github.com/Au3Hatsawat" target="_blank"><FontAwesomeIcon className="text-2xl hover:scale-125 transition-all hover:text-slate-400" icon={faGithub}/></a>
            </div>
            <div>
                <a><FontAwesomeIcon className="text-2xl hover:scale-125 transition-all hover:text-slate-400" icon={faLinkedin}/></a>
            </div>
        </div>
    )
}

export default Contact;