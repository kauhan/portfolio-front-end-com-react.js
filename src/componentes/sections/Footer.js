import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/kauhan_r4fael/'> <FaInstagram size={30} /></a></li>
                <li><a href='https://github.com/kauhan'> <FaGithub size={30} /></a></li>
                <li><a href='https://www.linkedin.com/in/kauhan-rafael-95b1b41b9/'> <FaLinkedin size={30} /></a></li>
            </ul>
            <p>kauhanrafael@yahoo.com</p>
            <p> Kauhan Rafael © 2023</p>



        </div>
    )
}
export default Footer