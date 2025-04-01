import iconStar from "./assets/icon-star.svg"
import illustrationThankyou from "./assets/illustration-thank-you.svg"
import { useState } from "react"

export function App() {

  const [nota, setNota] = useState(0);
  const [submited, setSubmited] = useState(false)

  function handleTrocarNota(nota) {
    setNota(nota)

    console.log(nota)
  }

  function handleSubmit() {
    if (nota !== 0) {
      setSubmited(true)
      return
    }

    alert("Por favor, escolha uma nota!")
  }


  return (
    submited === false ? (
      <div className=" max-w-103 bg-gradient-dark p-6 rounded-2xl text-white font-overpass">
        <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
          <img src={iconStar} alt="" />
        </div>

        <h1 className="text-2xl font-bold mb-2.5">Como foi o atendimento?</h1>

        <p className="text-sm text-light-grey mb-6">Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

        <div className="flex justify-between mb-6">

          <input type="button" value={1} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white sm:w-13 sm:h-13 cursor-pointer" onClick={() => handleTrocarNota(1)} />

          <input type="button" value={2} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white sm:w-13 sm:h-13 cursor-pointer" onClick={() => handleTrocarNota(2)} />

          <input type="button" value={3} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white sm:w-13 sm:h-13 cursor-pointer" onClick={() => handleTrocarNota(3)} />

          <input type="button" value={4} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white sm:w-13 sm:h-13 cursor-pointer" onClick={() => handleTrocarNota(4)} />

          <input type="button" value={5} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white sm:w-13 sm:h-13 cursor-pointer" onClick={() => handleTrocarNota(5)} />
        </div>

        <button onClick={handleSubmit} className="bg-orange w-full py-3 rounded-3xl uppercase text-sm tracking-1 font-bold hover:bg-white hover:text-orange cursor-pointer">Enviar</button>
      </div>
    ) : (
      <div className=" max-w-103 bg-gradient-dark p-6 rounded-2xl text-white font-overpass text-center">

        <img className="mx-auto mb-6 "  src={illustrationThankyou} alt="" />

        <p className="mb-6 text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl text-sm ">Você selecionou {nota} de 5</p>

        <h1 className="text-2xl font-bold mb-2.5">Obrigada!</h1>

        <p className="text-sm text-light-grey mb-6">Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
      </div>
    )

  )

}