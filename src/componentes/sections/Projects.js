import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import Card2 from '../elements/Card2'
import lpdnc from '../../image/projects/lpdnc.svg'
import portfolio from '../../image/projects/portfolio.svg'


function Projects() {
    return (
        <div className={styles.projects} id='Projects'>
            <h1> Projetos </h1>
            <Card
                img={lpdnc}
                title="Landing Page - DNC"
                tech=" HTML, CSS, JS"
                description="Desenvolvimento de uma Landing Page para o lançamento da formação em Tecnologia. "
                repo="https://github.com/kauhan/projeto-LandingPage"
                site="https://stately-dieffenbachia-a2093f.netlify.app"
            />

            <Card2
                img={portfolio}
                title="Portfólio"
                tech=" HTML, CSS,"
                description="Desenvolvimento de um portfólio usando apenas HTTML e CSS. "
                repo="https://github.com/kauhan/portfolio-base-com-HTML-e-CSS/tree/master"
                site="https://rainbow-bunny-1220d9.netlify.app"
            />

            <ButtonB text='Acesse meu repositório' link='https://github.com/kauhan?tab=repositories' />
        </div>
    )
}

export default Projects