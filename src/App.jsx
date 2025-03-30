import iconStar from "./assets/icon-star.svg"

export function App() {
  return(
    <div className="bg-gradient-dark p-6 rounded-2xl text-white font-overpass">
      <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
        <img src={iconStar} alt="" />
      </div>
      
      <h1 className="text-2xl font-bold mb-2.5">Como foi o atendimento?</h1>

      <p className="text-sm text-light-grey mb-6">Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

      <div className="flex justify-between mb-6">
        <input type="button" value={1} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold "/>
        <input type="button" value={2} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold" />
        <input type="button" value={3} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold" />
        <input type="button" value={4} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold"/>
        <input type="button" value={5} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold" />
        </div>

        <button className="bg-orange w-full py-3 rounded-3xl uppercase text-sm tracking-1">Enviar</button>
    </div>

  )

}