import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-[#EFEFEF] font-sans text-black overflow-x-hidden">
      
      {/* HEADER IMPACTANTE */}
      <nav className="flex justify-between items-center p-6 bg-white border-b-8 border-black sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-contain scale-125"
            >
              <source src="/assets/logo-run.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none uppercase">
            Speed <span className="text-[#D63230]">Café</span>
          </div>
        </div>

        <button className="hidden lg:block bg-[#D63230] text-white px-12 py-5 font-black italic border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all uppercase text-xl">
          Quero meu Café
        </button>
      </nav>

      {/* HERO SECTION */}
      <header className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 text-left z-10">
          <div className="inline-block bg-black text-white px-8 py-2 mb-10 italic font-black skew-x-[-12deg] text-2xl uppercase">
            Direto da Fazenda Castelhana - MG
          </div>
          <h1 className="text-8xl md:text-[10rem] font-black italic leading-[0.75] mb-10 uppercase tracking-tighter">
            O RITMO <br/>
            DO SEU <br/>
            <span className="text-[#D63230]">TREINO.</span>
          </h1>
          <p className="text-3xl md:text-4xl font-bold max-w-xl mb-14 leading-tight">
            Café Arábica Mundo Novo com notas de chocolate e castanha para alta performance.
          </p>
          <a href="#planos" className="inline-block bg-black text-white px-16 py-8 font-black italic text-3xl uppercase border-4 border-black shadow-[12px_12px_0px_0px_rgba(214,50,48,1)] hover:bg-[#D63230] hover:scale-105 transition-all">
            Ver Assinaturas
          </a>
        </div>

        <div className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
           <div className="relative z-10 border-[12px] border-black p-2 bg-white shadow-[40px_40px_0px_0px_rgba(0,0,0,1)] rotate-2 hover:rotate-0 transition-transform duration-500">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full max-w-xl h-auto"
              >
                <source src="/assets/logo-run.mp4" type="video/mp4" />
              </video>
           </div>
           
           <div className="absolute -top-20 -right-10 bg-[#D63230] text-white w-40 h-40 rounded-full border-8 border-black flex items-center justify-center font-black italic text-center animate-bounce z-20 text-lg rotate-12 shadow-2xl leading-none">
             950M DE<br/>ALTITUDE<br/>ENERGIA PURA
           </div>
        </div>
      </header>

      {/* DETALHES TÉCNICOS DO CAFÉ */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-center uppercase font-black italic">
          <div className="border-2 border-[#D63230] p-4">Variedade: Mundo Novo</div>
          <div className="border-2 border-[#D63230] p-4">Torra: Média</div>
          <div className="border-2 border-[#D63230] p-4">Intensidade: Equilibrada</div>
          <div className="border-2 border-[#D63230] p-4">Corpo: Médio</div>
        </div>
      </section>

      {/* PLANOS DE ASSINATURA - VALORES ATUALIZADOS */}
      <section id="planos" className="bg-white py-32 border-t-[10px] border-black">
        <div className="container mx-auto px-6 text-center md:text-left">
          <h2 className="text-6xl md:text-8xl font-black italic mb-20 uppercase tracking-tighter">
            Assinatura <span className="text-[#D63230]">Performance:</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* START - 250g */}
            <div className="border-[8px] border-black p-12 flex flex-col hover:shadow-[15px_15px_0px_0px_rgba(214,50,48,1)] transition-all bg-[#EFEFEF]">
              <h3 className="text-4xl font-black italic uppercase mb-4">Start</h3>
              <p className="text-[#D63230] font-black text-xl mb-8 underline">250G MENSAL</p>
              <p className="text-2xl font-bold flex-grow mb-10 leading-tight italic">
                "Combustível ideal para garantir seu foco diário e energia pré-treino."
              </p>
              <div className="text-5xl font-black mb-10">R$ 35,00</div>
              <button className="w-full bg-white border-4 border-black py-6 font-black uppercase text-2xl hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">Assinar</button>
            </div>

            {/* EVOLUTION - 500g */}
            <div className="border-[8px] border-black p-12 flex flex-col bg-[#D63230] text-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] scale-110 z-10 relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm font-black uppercase px-8 py-3 border-4 border-white italic text-center">Favorito da Comunidade</div>
              <h3 className="text-4xl font-black italic uppercase mb-4">Evolution</h3>
              <p className="text-black font-black text-xl mb-8 underline">500G MENSAL</p>
              <p className="text-2xl font-bold flex-grow mb-10 leading-tight italic">
                "Equilíbrio constante para quem mantém uma rotina de alta performance."
              </p>
              <div className="text-5xl font-black mb-10 border-b-4 border-white pb-4 tracking-tighter">R$ 68,00</div>
              <button className="w-full bg-black text-white py-6 font-black uppercase text-2xl hover:bg-white hover:text-black transition-all border-4 border-black">Assinar Agora</button>
            </div>

            {/* ENDURANCE - 1kg */}
            <div className="border-[8px] border-black p-12 flex flex-col hover:shadow-[15px_15px_0px_0px_rgba(214,50,48,1)] transition-all bg-[#EFEFEF]">
              <h3 className="text-4xl font-black italic uppercase mb-4">Endurance</h3>
              <p className="text-[#D63230] font-black text-xl mb-8 underline">1KG MENSAL</p>
              <p className="text-2xl font-bold flex-grow mb-10 leading-tight italic">
                "Para quem não para. Suprimento completo para o seu mês de atividades."
              </p>
              <div className="text-5xl font-black mb-10">R$ 135,00</div>
              <p className="text-xs font-black uppercase mb-4 text-[#D63230]">+ FRETE GRÁTIS NO PLANO PILOTO</p>
              <button className="w-full bg-white border-4 border-black py-6 font-black uppercase text-2xl hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">Assinar</button>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-24 px-10 border-t-[15px] border-[#D63230]">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">
          <div className="text-center lg:text-left">
            <div className="text-7xl font-black italic uppercase leading-none mb-4">
              Speed <span className="text-[#D63230]">Café</span>
            </div>
            <p className="text-xl font-bold uppercase tracking-[0.5em] opacity-80">
              By Castelhana Farm | 2026
            </p>
          </div>
          <div className="max-w-md text-center lg:text-right">
            <p className="italic font-black text-3xl mb-8 leading-none uppercase">
              "Deguste. Sinta. Acelere."
            </p>
            <p className="text-sm opacity-50 uppercase font-bold">
              Garantimos energia limpa e sem conservantes para a sua rotina.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App