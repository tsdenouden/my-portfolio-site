import styles from './Education.module.css'
import Edu from './Edu'

const EducationList = () => {

    const edu = [
        {
            title: 'CIE A Levels',
            school: 'LearnNow Distance Learning College',
            date: '2021-2023'
        },
        {
            title: 'CIE IGCSE',
            school: 'Britus International School of Bahrain',
            date: '2019-2021'
        }
    ]

    const certs = [
        {
            title: 'Full Stack open',
            school: 'University of Helsinki',
            date: '2022-Present'
        },
        {
            title: 'CS50x',
            school: 'Harvard University',
            date: '2022'
        },
        {
            title: 'Intermediate Machine Learning',
            school: 'Kaggle',
            date: '2022'
        },
        {
            title: 'Intro to Machine Learning',
            school: 'Kaggle',
            date: '2022'
        },
        {
            title: 'Pandas',
            subtitle: '(Python)',
            school: 'Kaggle',
            date: '2022'
        },
        {
            title: 'Python is Easy',
            subtitle: '(Python 3 fundamentals)',
            school: 'Pirple',
            date: '2022'
        },
        {
            title: 'Express Course',
            subtitle: 'Programming fundamentals course',
            school: 'Sponsored by Microsoft',
            date: '2019'
        },
    ]

    return (
        <section className={styles.education}>
            <h1>Education</h1>
            <ul>
                {edu.map((edu, index) => 
                    <li key={index}>
                        <Edu 
                            title={edu.title}
                            school={edu.school}
                            date={edu.date}
                        />
                    </li>
                )}
            </ul>
            <h2>Certificate Courses</h2>
            <ul>
                {certs.map((cert, index) => 
                    <li key={index}>
                        <Edu 
                            title={cert.title}
                            subtitle={cert.subtitle}
                            school={cert.school}
                            date={cert.date}
                        />
                    </li>
                )}
            </ul>
        </section>
    )
}

export default EducationList