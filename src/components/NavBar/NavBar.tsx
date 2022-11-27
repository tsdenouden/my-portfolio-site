import styles from './NavStyle.module.css'

interface Props {
    name: string;
}

const NavBar = ({name}: Props) => {
    
    const links: {
        name: string;
        href: string;
    }[] = [
        {
            name: "github",     
            href: "https://github.com/tsdenouden"
        },
        {
            name: "behance",
            href: "https://github.com/tsdenouden"
        },
        {
            name: "youtube",
            href: "https://github.com/tsdenouden"
        },
        {
            name: "contact",
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
                    {links.map((link, index) => 
                        <li key={index}>
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