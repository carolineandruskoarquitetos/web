import Image from "next/image";

const architects = [
  {
    firstName: "JULIA",
    lastName: "RAEDER",
    imageUrl: "/images/equipe/julia-raeder-bw.jpg",
    zoom: 1.05,
  },
  {
    firstName: "BRUNA",
    lastName: "LIGESKI",
    imageUrl: "/images/equipe/bruna-ligeski.jpg",
    zoom: 1.12,
  },
  {
    firstName: "HENRIQUE",
    lastName: "DRANSFELD",
    imageUrl: "/images/equipe/henrique-dransfeld.jpg",
  },
  {
    firstName: "GABRIEL",
    lastName: "LUTZ",
    imageUrl: "/images/equipe/gabriel-lutz.jpg",
  },
];

export default function EquipePage() {
  return (
    <main className="pt-24 px-4 md:px-6 lg:px-8 xl:px-12 pb-8">
      {/* Hero Section - Stack on mobile, side-by-side on desktop */}
      <div className="flex flex-col justify-center md:flex-row gap-8 md:gap-12 mb-16">
        <div className="flex-1 space-y-4 md:space-y-6 text-stone-500 max-w-[520px]">
          <p>
            Mestre em Gestão e graduada em Arquitetura e Urbanismo pela
            Pontifícia Universidade Católica do Paraná (PUC/PR), Caroline
            Andrusko traçou um caminho autoral em quase 20 anos de atuação. São
            mais de 80.000m² projetados entre casas, apartamentos, ambientes
            corporativos, lojas, restaurantes e mostras de arquitetura.
          </p>
          <p>
            Com foco nas pessoas, se especializou em atender aos desejos de cada
            cliente de maneira personalizada, e tem projetos executados no
            Brasil e no exterior.
          </p>
          <p>
            Mais que intuição, Carol Andrusko vive a arquitetura. O contato
            contínuo com as tendências mundiais, através de feiras, viagens e
            pesquisas, aliado a um planejamento estratégico, traduzem na arte do
            projetar o equilíbrio entre a forma e a função, harmonia e
            praticidade, conforto e pertencimento, garantindo a atemporalidade
            aos espaços e resultados de bem-estar e satisfação conforme a
            necessidade de cada cliente.
          </p>
        </div>
        {/* Image container */}
        <div className="relative  h-fit flex-shrink-0 order-first md:order-last">
          <Image
            src="/images/equipe/caroline-andrusko.webp"
            alt="Profile"
            width={192 * 2}
            height={288 * 2}
            className="h-auto"
            priority
          />
        </div>
      </div>

      {/* Architects Section - Scrollable on mobile */}
      <h2 className="mb-4 md:mb-6 text-stone-400 text-lg text-center font-semibold tracking-[.3em] ">
        ARQUITETOS
      </h2>

      <div className="flex flex-wrap justify-center gap-3 gap-y-9 mb-12">
        {architects.map((architect) => (
          <div key={architect.firstName} className="w-[250px]">
            {architect.imageUrl ? (
              <div className="relative w-full h-[380px] mb-2 overflow-hidden">
                <Image
                  src={architect.imageUrl}
                  alt={architect.firstName}
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: "center",
                    scale: architect.zoom || 1,
                  }}
                />
              </div>
            ) : (
              <div className="relative w-full h-[380px] mb-2 bg-stone-100 border-2 border-brown-800"></div>
            )}
            <div className="text-start text-md font-semibold text-stone-400 leading-5 tracking-[.3em] flex flex-col">
              <span>{architect.firstName}</span>
              <span>{architect.lastName}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Images - Stack on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative aspect-[3/2]">
          <Image
            src="/images/equipe/externa.webp"
            alt="Office exterior"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/2]">
          <Image
            src="/images/equipe/interna.webp"
            alt="Office interior"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
