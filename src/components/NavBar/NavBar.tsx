import styles from './NavBar.module.css'

const NavBar = ({
    name
}: {name: string}) => {

    const links: {
        name: string;
        href: string;
    }[] = [
        {
            name: "github.",     
            href: "https://github.com/tsdenouden"
        },
        {
            name: "behance.",
            href: "https://github.com/tsdenouden"
        },
        {
            name: "youtube.",
            href: "https://github.com/tsdenouden"
        },
        {
            name: "contact.",
            href: "#contact"
        }
    ]

    return (
        <div className={styles.container}>
            <nav className={styles.navBar}>
                <h3 className={styles.name}>
                    {name}
                </h3>
                <ul className={styles.links}>
                    {links.map(link => 
                        <li>
                            <a 
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.name}
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar