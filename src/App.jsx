import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [vivo,setVivo] = useState(true)
  const [hp,setHp] = useState(100)
  const [hunger,setHunger] = useState(100)
  const [tofu,setTofu] = useState("./public/Group 1 (3).png")
  const [escolha,setEscolha]= useState("Fazer aquela coisa")
  const [membro,setMembro] = useState(0)

  useEffect(() => {

    const intervalo = setInterval(() => {

      if(hp >= 1){

      setHp((hpAtual) => hpAtual-0.0000001)
      if(hunger >= 1){

      
      setHunger((hungerAtual) => hungerAtual - membro)
      }
      setVivo(true)
      
      }

      if(hp <= 0){
        
        setVivo(false)
    
      }

      if(hunger >= 85){
        if (vivo && hp <= 99) {
          setHp((hpAtual) => hpAtual+1)
        }
      }
      
      
      if(hunger <= 30){

        if (vivo) {
          setHp((hpAtual) => hpAtual-1)
        }
        if (!vivo){
          setHp(0)
        }
}
 
if(hunger <= 0){

  if (vivo) {
    setHp((hpAtual) => hpAtual-2)
  }
  if (!vivo){
    setHp(0)
  }
}

          
      
        

      
      
    }, 500);

    console.log(hp)
    return () => clearInterval(intervalo)

  
  }, [hp])
  
  function curar() {

    if (vivo) {

      if(hunger <= 90){
        

        setHunger(hunger + 10)
      }
      if (hunger >= 90) {
  
        setHunger(100)
  
      } 
    }

    
    
  }

  function procurar() {

    if (vivo && hunger >= 50) {

      setMembro(membro + 1)
      
      setHunger(hunger - 0)

      }


    }

    
  function foguete() {

    if (vivo) {

      if(membro >= 50){

        alert("VOCÊ VENCEU!!!")
      }

      }


    }

    
    
  
  return (
    <>

    
<div className="app-container">

  <div className="div-top">

      <div className="div-bichinho">
      <img src={tofu} alt="" />
      <div className='div-estavivo' >{vivo ? <p>VIVENDO</p> : <p>MORREU</p>} </div>
      </div>

      <div className="div-atributos">
        <div className="atributos-top">

          <h1 className='app-titulo' >HP:</h1>
          <h1  className='app-titulo' >{(hp.toFixed(0))}</h1> 
          <h1 className='app-titulo' >Membros</h1>
          <h1 className='app-titulo' >{membro}</h1>

        </div>
        <div className="atributos-bottom">

          <h1 className='app-titulo' >FOME:</h1> 
          <h1  className='app-titulo' >{(hunger.toFixed(0))}</h1> 

          
        </div>

    </div>

  </div>


  <div className="div-atividades">

      
    <div className="perguntas">
    <button className='app-btn' onClick={curar}>Coletar alimento</button>
    <button className='app-btn' onClick={procurar}>Procurar por amigos</button>
    <button className='app-btn' onClick={foguete}>Construir o foguete</button>
    </div>
  </div>

</div>


{/* 
    <div className="app-container">

      <div className="div-stats">

          <h1 className='app-titulo' >Titulo</h1>

          <img src={tofu} alt="" />

          <h1 className='app-titulo' >HP:</h1>
          <h1  className='app-titulo' >{(hp.toFixed(0))}</h1> 

          <h1 className='app-titulo' >FOME:</h1> 
          <h1  className='app-titulo' >{(hunger.toFixed(0))}</h1> 
          <div className='div-estavivo' >{vivo ? <p>VIVENDO</p> : <p>MORRENDO</p>}
          </div>

      </div>

      <div className="div-atividades">

         
      </div>

    </div> */}
    </>
  )
}

export default App
