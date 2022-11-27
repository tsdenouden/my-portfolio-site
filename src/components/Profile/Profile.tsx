import styles from './Profile.module.css'

interface Props {
    title: string;
    subtitle: string;
    img: string;
    children: any | any[]
}

const Profile = (props:Props) => {
    return (
        <section className={styles.container}>
            <div className={styles.bio}>
                <h1 className={styles.title}>
                    {props.title}
                </h1>
                <h4 className={styles.subtitle}>
                    {props.subtitle}
                </h4>
                <article className={styles.description}>
                    {props.children}
                </article>
                <div>
                    <button className={styles.fancy}>
                        <a href={"#projects"}>
                            Projects
                        </a>
                    </button>
                </div>
            </div>
            <div className={styles.profilepic}>
                <img src={props.img} draggable={false} />
            </div>
        </section>
    )
}

export default Profile