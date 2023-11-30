import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin,FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/esm/NavLink';

function Navbar(){
    return(
        <div className = {styles.navbar}>
            <ul>
                <li><NavLink href='#Presentation'> Apresentação </NavLink></li>
                <li><NavLink href='#Skills'> Habilidades </NavLink></li>
                <li><NavLink href='#Projects'> Projetos </NavLink></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/kauhan_r4fael/'> <FaInstagram size ={30}/></a></li>
                <li><a href='https://github.com/kauhan'> <FaGithub size ={30} /></a></li>
                <li><a href='https://www.linkedin.com/in/kauhan-rafael-95b1b41b9/'> <FaLinkedin size ={30} /></a></li>
            </ul>
        </div>
    )

}

export default Navbar