import cls from './Navbar.module.css'

const Navbar = () => {
    return (
        <section className={cls.navbar}>
            <div className={cls.navbar_logo}>
                <img src="/img/apple.png" alt="apple" />
                <img src="/img/welltory.png" alt="welltory" />
            </div>
        </section>
    )
}

export { Navbar }