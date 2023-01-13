import './footer.css'
import fotoRodape from '../footer/footer1.png'

function Rodape () {
    return(
<div className='rodape'>
    <footer>
        <img src={fotoRodape} alt="rodape" />
    <div className='conteudofooter'>
     </div>

    
    
    <ul className='ul-footer'>
        <li>
   <p className='rodapetexto'> <h2 className='titulos-footer'>Missão</h2> Transformar a realidade das comunidades por meio de ações culturais, esportivas e
de geração de renda, transmitindo valores coletivos e individuais aos atendidos,
bem como conscientizá-los sobre os próprios direitos e deveres na sociedade.</p> </li>
       
       
        <li>
    <p className='rodapetexto'><h2 className='titulos-footer'>Visão</h2>Ser reconhecida, no âmbito nacional e internacional, como organização de
referência na cocriação, promoção e implementação de projetos e estratégias de
transformação social.
</p></li>
       
       
       
        <li>
    <p className='rodapetexto'><h2 className='titulos-footer'>Valores</h2> Coragem: acreditamos e impulsionamos o indivíduo a sonhar, traçar metas e
alcançar objetivos.
Respeito à Diversidade: valorizamos cada indivíduo e reconhecemos a pluralidade.
Todos somos únicos, diferentes e singulares.
Transformação econômica e ambiental: trabalhamos por uma sociedade mais
humana e justa, e por um mundo melhor para todos, até às próximas gerações.
    </p> 
    </li>
    </ul>
 
   
  




   </footer>
   
    
</div>
    )
}

export default Rodape