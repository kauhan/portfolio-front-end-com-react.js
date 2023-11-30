import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'


function Presentation() {
    return (
        <div className={styles.Presentation} id='Presentation'>
            <h4><strong>Bem vindo ao meu portfólio</strong></h4>
            <h1>Olá, eu sou o Kauhan Rafael!</h1>
            <p>
                Seja muito bem vindo ao meu portfolio feito exclusivamente utilizando react! <br/>
                Falando um pouco sobre mim,sou amante de desenvolvimento web, estou sempre <br/>
                buscando me especializar mais e mais nessa área. Me considero uma pessoa <br/>
                bem criativa e adoro tirar ideias do papel. Se meu portfólio te chamou <br/>
                atenção,por favor, entre em contato! 
            </p>
            <ButtonA link='https://github.com/kauhan' text='Conecte-se comigo!' />


        </div>
    )
}
export default Presentation