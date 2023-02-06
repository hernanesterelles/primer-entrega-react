import './Footer.scss'
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";



export const Footer = () => {
    return (

        <footer className='footer-red'>
            <div className='footer'>
                <div>
                    <p>© COPYRIGHT 2023 | Todos los derechos reservados</p>
                </div>
                <div className='sociales'>
                    <p>Seguinos en nuestras redes</p>
                    <a href='https://www.instagram.com/' className='redes'><SiInstagram /></a>
                    <a href='https://www.facebook.com/' className='redes'><SiFacebook /></a>
                    <a href='https://twitter.com/' className='redes'><SlSocialTwitter /></a>
                </div>
            </div>

        </footer>

    )
}
export default Footer
