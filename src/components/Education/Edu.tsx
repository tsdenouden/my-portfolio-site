import styles from './Education.module.css'

const Edu = ({
    title, 
    subtitle, 
    school, 
    date
}: { [k: string]: string | undefined}) => {
    return (
        <li>
            <div className={styles.container}>
                <div>
                    <p className={styles.title}>
                        {title}
                    </p>
                    <p className={styles.subtitle}>
                        {subtitle}
                    </p>
                </div>
                <p className={styles.date}>
                    {date }
                </p>
            </div>
            <p className={styles.school}>
                {school}
            </p>
            <br />
        </li>
    )
}

export default Edu