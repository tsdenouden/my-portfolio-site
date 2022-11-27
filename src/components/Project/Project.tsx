import styles from './Project.module.css'

interface Props {
    title: string;
    subtitle?: string;
    year?: number;
    grade?: number;
    tools: string[];
    github?: string;
    itchio?: string;
    imgSrc?: string;
    children: any | any[]; 
}

const Project = (props:Props) => {
    return (
        <>
            <li className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.grade}>
                        {props.year && <p>{props.year}</p>}
                        {props.grade && <p>Grade: {props.grade}%</p>}
                    </div>
                    <div className={styles.title}>
                        <h1>{props.title}</h1>
                        {props.subtitle && <h4>{props.subtitle}</h4>}
                    </div>
                    <article className={styles.description}>
                        {props.children}
                    </article>
                    <div className={styles.tools}>
                        <p>Tools used:</p>
                        <ul>
                            {props.tools.map((tool, index) =>
                                <li className={styles.tool} key={index}>
                                    {tool}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={styles.buttons}>
                        {props.github && 
                            <a
                                href={props.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.buttonGithub}
                            >
                                Github
                            </a>
                        }
                        {props.itchio && 
                            <a
                                href={props.itchio}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.buttonItchio}
                            >
                                itch.io
                            </a>
                        }
                    </div>
                </div>
                <div>
                    {props.imgSrc &&
                        <img 
                            src={props.imgSrc}
                            className={styles.thumbnail}
                            draggable={false}
                        />
                    }
                </div>
            </li>
        </>
    )
}

export default Project