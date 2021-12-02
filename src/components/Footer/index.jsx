import cls from './Footer.module.css'
import { AiOutlineTwitter , AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { RiLinkedinBoxFill } from 'react-icons/ri'

const Footer = () => {
    return (
        <section className={cls.footer}>
            <div className={cls.footer_child_left}>
                <p>Get the mobile app</p>
                <a 
                    rel='noreferrer'
                    target='_blank'
                    href="https://itunes.apple.com/app/welltory-personal-nyj-analitik/id1074367771?mt=8"
                >
                    <img src="img/appleLink.png" alt="appleLink" />
                </a>
                <a 
                    rel='noreferrer'
                    target='_blank'
                    href="https://play.google.com/store/apps/details?id=com.welltory.client.android"
                >
                    <img src="img/googlePlay.png" alt="googlePlayLink" />
                </a>
            </div>
            <div className={cls.footer_child_right}>
                <div className={cls.footer_child_right_link}>
                    <a href="#">Terms of use</a>
                    <span></span>
                    <a href="#">Privacy policy</a>
                </div>

                <div className={cls.footer_child_right_contact}>
                    <a 
                        rel='noreferrer'
                        target='_blank'
                        href="https://twitter.com/welltory"
                    >
                        <AiOutlineTwitter/>
                    </a>
                    <a 
                        rel='noreferrer'
                        target='_blank'
                        href="https://www.facebook.com/welltory"
                    >
                        <BsFacebook/>
                    </a>
                    <a 
                        rel='noreferrer'
                        target='_blank'
                        href="https://www.instagram.com/welltory"
                    >
                        <AiOutlineInstagram/>
                    </a>
                    <a 
                        rel='noreferrer'
                        target='_blank'
                        href="https://www.instagram.com/welltory"
                    >
                        <RiLinkedinBoxFill/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export { Footer }