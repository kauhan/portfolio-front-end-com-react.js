import styles from './Card2.module.css'
import portfolio from '../../image/projects/portfolio.svg'
import ButtonB from './ButtonB'


function Card2({ img, title, tech, description, repo, site }) {
    return (
        <div className={styles.card2}>
            <a href={site}>
                <img src={img} />
            </a>

            <section>
                <h3> {title} </h3>
                <p><strong>Tecnologia:</strong>{tech}</p>
                <p> {description} </p>
                <ButtonB text='Acesse o Repositório' link={repo} />
            </section>

        </div>
    )
}
export default Card2