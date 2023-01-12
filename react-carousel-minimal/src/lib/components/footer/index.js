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
   <p className='rodapetexto'> <h2 className='titulos-footer'>Missão</h2> Transformar o meio social das comunidades através de ações</p> </li>
       
       
        <li>
    <p className='rodapetexto'><h2 className='titulos-footer'>Visão</h2>Ser uma organização social de referência na co-criação de estratégias</p></li>
       
       
       
        <li>
    <p className='rodapetexto'><h2 className='titulos-footer'>Valores</h2> Acreditamos e Impulsionamos o individuo a alcançar seus sonhos e objetivos
    </p> 
    </li>
    </ul>
 
   
  




   </footer>
   
    
</div>
    )
}

export default Rodape