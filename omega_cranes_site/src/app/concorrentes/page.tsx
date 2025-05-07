'use client';

import React from 'react';
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Table from "@/components/Table";

const concorrentes = [
  {
    nome: "Konecranes",
    posicionamento: "Líder global em equipamentos de elevação, com forte presença no Brasil. Foco em tecnologia avançada e serviços.",
    diferenciais: "Tecnologia SmartCrane, sistemas de monitoramento remoto, ampla rede de serviços global.",
    tom_comunicacao: "Profissional, técnico, com ênfase em inovação e confiabilidade. Uso de cases globais.",
    estrategia_ads: "SEO forte, presença global robusta. Site brasileiro completo. Provável uso de Google Ads para termos de marca, produtos específicos (como CXT) e remarketing. Presença no YouTube sugere possíveis campanhas de vídeo.",
    palavras_chave: ["Konecranes", "ponte rolante CXT", "manutenção ponte rolante Konecranes", "serviços Konecranes", "peças Konecranes"]
  },
  {
    nome: "Demag Cranes",
    posicionamento: "Tradicional fabricante alemão com foco em engenharia de precisão e soluções customizadas.",
    diferenciais: "Tecnologia alemã, componentes de alta durabilidade, sistemas modulares Crane Sets.",
    tom_comunicacao: "Técnico, detalhado, com ênfase em engenharia e tradição alemã.",
    estrategia_ads: "Similar à Konecranes, com forte presença online e SEO. Site detalha bem os produtos (pontes, Crane Sets). Provável uso de Google Ads para marca, modelos específicos e remarketing. Catálogos online indicam foco em material técnico.",
    palavras_chave: ["Demag", "ponte rolante Demag", "talha Demag", "crane sets Demag", "componentes Demag"]
  },
  {
    nome: "GH Cranes",
    posicionamento: "Fabricante espanhol com crescente presença no Brasil, foco em soluções personalizadas.",
    diferenciais: "Flexibilidade em projetos especiais, bom custo-benefício, suporte local.",
    tom_comunicacao: "Equilibrado entre técnico e acessível, destaque para cases de sucesso locais.",
    estrategia_ads: "Boa presença online com site em português detalhando produtos e instalações (cases). A menção a instalações no Brasil (Volvo) reforça o foco local. Podem usar Ads para destacar projetos e capacidades, além de marca e produtos.",
    palavras_chave: ["GH Cranes", "ponte rolante GH", "talha GH", "componentes guindaste GH", "fabricante ponte rolante"]
  },
  {
    nome: "ABUS (Ciriex ABUS)",
    posicionamento: "Marca alemã representada exclusivamente pela Ciriex no Brasil. Foco em qualidade e confiabilidade.",
    diferenciais: "Tecnologia alemã com suporte local, sistemas KBK, componentes padronizados.",
    tom_comunicacao: "Técnico com ênfase na qualidade alemã e no suporte local da Ciriex.",
    estrategia_ads: "Representante exclusivo no Brasil. O foco pode ser em destacar a marca ABUS e a expertise local da Ciriex. A menção em feiras (Feimec, Expomafe) sugere um mix de marketing. Ads podem ser usados para marca, produtos específicos (talhas de corrente) e termos comparativos.",
    palavras_chave: ["ABUS", "Ciriex ABUS", "ponte rolante ABUS", "talha ABUS", "sistema KBK ABUS"]
  },
  {
    nome: "Pontebras",
    posicionamento: "Fabricante nacional com foco em soluções robustas para a indústria brasileira.",
    diferenciais: "Fabricação nacional, preços competitivos, rapidez no atendimento e manutenção.",
    tom_comunicacao: "Direto, prático, com ênfase no atendimento e suporte local.",
    estrategia_ads: "Empresa nacional com site direto. A pesquisa por anúncios retornou principalmente links genéricos do Google Ads, não anúncios específicos da Pontebras. Podem ter campanhas mais locais ou focadas em termos de menor concorrência, ou depender mais de SEO e vendas diretas.",
    palavras_chave: ["Pontebras", "ponte rolante nacional", "fabricante ponte rolante Brasil", "ponte rolante preço"]
  },
  {
    nome: "Demuth",
    posicionamento: "Fabricante nacional com foco em equipamentos para setores específicos.",
    diferenciais: "Especialização em certos segmentos industriais, soluções customizadas.",
    tom_comunicacao: "Técnico, focado em aplicações específicas e setores industriais.",
    estrategia_ads: "Site focado em produtos específicos (pontes). Presença parece mais direcionada. Estratégia de Ads pode ser mais nichada ou regional.",
    palavras_chave: ["Demuth pontes", "ponte rolante Demuth", "equipamentos Demuth", "ponte rolante industrial"]
  },
  {
    nome: "Movequip",
    posicionamento: "Empresa nacional com portfólio diversificado de soluções de movimentação.",
    diferenciais: "Variedade de produtos, soluções integradas, atendimento consultivo.",
    tom_comunicacao: "Moderno, consultivo, com foco em soluções completas.",
    estrategia_ads: "Site moderno, destacando variedade de produtos (pontes, talhas, guindastes). Apareceu em buscas por 'talha elétrica', indicando bom SEO ou possíveis campanhas para esse termo. Podem usar Ads de forma mais ampla para capturar diferentes necessidades.",
    palavras_chave: ["Movequip", "talha elétrica Movequip", "ponte rolante Movequip", "sistema modular movimentação"]
  },
  {
    nome: "Jundiaí Máquinas (Truck Fort)",
    posicionamento: "Empresa regional com foco em atendimento local e manutenção.",
    diferenciais: "Proximidade, rapidez no atendimento, conhecimento do mercado local.",
    tom_comunicacao: "Direto, prático, com ênfase na localização e atendimento rápido.",
    estrategia_ads: "A busca levou a um site (Truck Fort) com foco geográfico claro ('ponte rolante em Jundiaí'). Isso sugere fortemente campanhas de Google Ads com segmentação geográfica e palavras-chave locais.",
    palavras_chave: ["ponte rolante Jundiaí", "talha elétrica Jundiaí", "manutenção ponte rolante Jundiaí", "Truck Fort"]
  }
];

const observacoesGerais = [
  "**Presença Online Forte:** A maioria dos grandes concorrentes internacionais (Konecranes, Demag, GH, ABUS) possui sites bem estruturados em português, indicando um foco no mercado brasileiro.",
  "**Foco em SEO:** Muitos concorrentes aparecem bem posicionados nos resultados orgânicos para termos relevantes (ex: 'ponte rolante', 'talha elétrica'), sugerindo um investimento em otimização para motores de busca (SEO), que pode complementar ou, em alguns casos, substituir campanhas pagas intensivas.",
  "**Dificuldade em Identificar Anúncios Diretos:** As pesquisas por termos como 'anúncio google ads [concorrente]' ou '[produto] anúncio' não retornaram links patrocinados claros dos principais concorrentes diretos nos resultados visíveis. Isso pode indicar campanhas altamente segmentadas, foco em outros canais de marketing, uso de palavras-chave muito específicas, ou presença em redes de Display ou Vídeo."
];

const conclusoes = [
  "A concorrência internacional parece focar em SEO robusto e possivelmente campanhas de marca, remarketing e produtos específicos.",
  "Concorrentes nacionais podem ter estratégias mais variadas, incluindo foco geográfico (Truck Fort/Jundiaí Máquinas) ou dependência maior de SEO e outros canais.",
  "A ausência de anúncios visíveis em buscas genéricas sugere que a Omega Cranes tem oportunidade de se destacar com campanhas bem segmentadas, especialmente para termos de meio e fundo de funil e termos comparativos (como 'alternativa KBK').",
  "Recomenda-se monitoramento contínuo dos concorrentes usando ferramentas de inteligência competitiva para identificar anúncios ativos e palavras-chave em uso."
];

const ConcorrenteCard = ({ concorrente }) => (
  <Card title={concorrente.nome} className="mb-6">
    <div className="space-y-3">
      <div>
        <h4 className="font-semibold text-gray-700">Posicionamento:</h4>
        <p className="text-gray-600 text-sm">{concorrente.posicionamento}</p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700">Diferenciais:</h4>
        <p className="text-gray-600 text-sm">{concorrente.diferenciais}</p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700">Tom de Comunicação:</h4>
        <p className="text-gray-600 text-sm">{concorrente.tom_comunicacao}</p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700">Estratégia de Google Ads (Inferida):</h4>
        <p className="text-gray-600 text-sm">{concorrente.estrategia_ads}</p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700">Palavras-chave Prováveis:</h4>
        <div className="flex flex-wrap gap-2 mt-1">
          {concorrente.palavras_chave.map((palavra, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {palavra}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Card>
);

export default function ConcorrentesPage() {
  return (
    <Layout>
      <SectionTitle 
        title="Análise de Concorrentes"
        subtitle="Entendendo o cenário competitivo no mercado de movimentação de cargas."
      />

      <div className="max-w-5xl mx-auto text-gray-700 space-y-4 mb-12">
        <p>
          Analisamos os principais players do mercado, tanto nacionais quanto multinacionais, para identificar seus pontos fortes, estratégias de comunicação e diferenciais percebidos. Esta análise é fundamental para posicionar a Omega Cranes de forma eficaz.
        </p>
        <p>
          Além da análise tradicional, incluímos uma investigação sobre as possíveis estratégias de Google Ads dos concorrentes, baseada em pesquisas e inferências a partir de sua presença online.
        </p>
      </div>

      <section className="mb-12">
        <SectionTitle title="Observações Gerais sobre Estratégias de Google Ads" subtitle="Padrões identificados no setor" className="text-left mb-4"/>
        <Card>
          <ul className="space-y-3 text-gray-600">
            {observacoesGerais.map((observacao, index) => (
              <li key={index} className="flex">
                <div className="mr-2">•</div>
                <div dangerouslySetInnerHTML={{ __html: observacao }} />
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mb-12">
        <SectionTitle title="Análise Individual dos Concorrentes" subtitle="Incluindo estratégias de Google Ads inferidas" className="text-left mb-4"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {concorrentes.slice(0, 4).map((concorrente, index) => (
            <ConcorrenteCard key={index} concorrente={concorrente} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {concorrentes.slice(4).map((concorrente, index) => (
            <ConcorrenteCard key={index} concorrente={concorrente} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Conclusões e Oportunidades" subtitle="Insights para a estratégia da Omega Cranes" className="text-left mb-4"/>
        <Card>
          <ul className="space-y-3 text-gray-600">
            {conclusoes.map((conclusao, index) => (
              <li key={index} className="flex">
                <div className="mr-2">•</div>
                <div>{conclusao}</div>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700">
            <p className="text-sm font-medium">Nota sobre a análise:</p>
            <p className="text-sm mt-1">Esta análise é baseada em inferências e informações públicas. Uma análise mais profunda exigiria ferramentas de inteligência competitiva para monitorar anúncios e palavras-chave ativas.</p>
          </div>
        </Card>
      </section>

    </Layout>
  );
}
