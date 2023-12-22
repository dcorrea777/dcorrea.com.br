import { FaGithub, FaLinkedin, FaTwitter, FaDev } from "react-icons/fa";
import { Nav } from "./styles"

const socialMedia =[{
    url: "https://github.com/dcorrea777",
    text: "Github",
    icon: <FaGithub size={50}/>,
},
{
    url: "https://www.linkedin.com/in/dcorrea777/",
    text: "Linkedin",
    icon: <FaLinkedin size={50} />,
},
{
    url: "https://twitter.com/dcorrea777",
    text: "Twitter",
    icon: <FaTwitter size={50} />,
},
{
    url: "https://dev.to/dcorrea777",
    text: "DevTo",
    icon: <FaDev size={50} />,
}];

function Menu() {
    return (
        <Nav>
            <ul>
                {socialMedia.map((social) => {
                    return (
                        <li key={social.url}>
                            <a href={social.url} className="icon brands" title={social.text}>
                            {social.icon}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </Nav>
    )
}

export default Menu
