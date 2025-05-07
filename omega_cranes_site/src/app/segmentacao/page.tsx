'use client';

import React, { useState } from 'react';
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";

const targetAudience = {
  roles: ["Engenheiros Industriais", "Gerentes de Manutenção", "Diretores de Operações", "Compradores Técnicos", "Gerentes de Produção"],
  sectors: ["Metalúrgico", "Automotivo", "Logística e Armazenagem", "Construção Civil", "Papel e Celulose", "Mineração", "Alimentos e Bebidas"],
  locations: [
    "São Paulo (Indaiatuba e região)",
    "Rio Grande do Sul (Montenegro, Horizontina)",
    "Goiás (Catalão)",
    "Paraná (região Caterpillar)",
    "Rio de Janeiro (Resende, Porto Real, Itatiaia)",
    "Minas Gerais (todo o estado)",
    "Santa Catarina",
    "Recife (Pernambuco)"
  ]
};

const salesFunnel = [
  {
    stage: "Topo de Funil (ToFu) - Atração e Educação",
    objective: "Gerar reconhecimento da marca e educar sobre as soluções Omega.",
    channels: ["Display (segmentação por interesse/setor)", "Vídeo (YouTube Ads)", "Search (termos mais genéricos)"],
    segmentation: "Públicos de afinidade (engenharia, indústria), Públicos personalizados (visitantes de sites concorrentes), Segmentação demográfica ampla.",
    content: "Vídeos explicativos sobre tipos de pontes rolantes, artigos sobre otimização de layout, infográficos sobre segurança.",
    kpis: ["Impressões", "Visualizações de vídeo", "Cliques (CTR)", "Tráfego do site"]
  },
  {
    stage: "Meio de Funil (MoFu) - Consideração e Engajamento",
    objective: "Engajar o público que já demonstrou interesse, posicionando a Omega como solução.",
    channels: ["Search (termos específicos, comparações)", "Display (remarketing)", "Redes Sociais (conteúdo técnico)"],
    segmentation: "Remarketing (visitantes do site, visualizadores de vídeo), Públicos no mercado (equipamentos industriais), Segmentação por cargo/setor.",
    content: "Comparativos técnicos (OCK-II vs KBK), depoimentos de clientes, estudos de caso, webinars técnicos.",
    kpis: ["Taxa de cliques (CTR)", "Tempo no site", "Taxa de rejeição", "Downloads de materiais", "Inscrições em webinars"]
  },
  {
    stage: "Fundo de Funil (BoFu) - Conversão e Decisão",
    objective: "Converter leads qualificados em oportunidades de venda.",
    channels: ["Search (termos de marca, \"comprar\", \"orçamento\")", "Remarketing (listas específicas)", "Performance Max (foco em conversão)"],
    segmentation: "Remarketing (carrinho abandonado - se aplicável, visitantes de páginas de produto), Públicos semelhantes (baseado em clientes atuais), Segmentação geográfica precisa.",
    content: "Cases de sucesso detalhados, Ofertas de visita técnica gratuita, Chamadas diretas para contato (WhatsApp, formulário), Demonstrações de produto.",
    kpis: ["Taxa de conversão (leads)", "Custo por Lead (CPL)", "Custo por Aquisição (CPA)", "Qualidade dos leads (SQLs)", "Taxa de fechamento (vendas)"]
  }
];

export default function SegmentacaoPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [showMap, setShowMap] = useState(false);

  return (
    <Layout>
      <SectionTitle 
        title="Segmentação e Funil de Vendas"
        subtitle="Alcançando o público certo em cada etapa da jornada de compra."
      />

      <section className="mb-12">
        <SectionTitle title="Público-Alvo Detalhado" subtitle="Quem queremos alcançar com nossas campanhas." className="text-left mb-4"/>
        <Card title="Perfil Ideal do Cliente Omega Cranes">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Cargos Principais:</h4>
              <ul className="list-disc list-inside text-gray-600 pl-4 text-sm space-y-1">
                {targetAudience.roles.map((role, i) => <li key={i}>{role}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Setores Industriais Foco:</h4>
              <ul className="list-disc list-inside text-gray-600 pl-4 text-sm space-y-1">
                {targetAudience.sectors.map((sector, i) => <li key={i}>{sector}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Localizações Geográficas Prioritárias:</h4>
              <ul className="list-disc list-inside text-gray-600 pl-4 text-sm space-y-1">
                {targetAudience.locations.map((location, i) => <li key={i}>{location}</li>)}
              </ul>
              <button 
                onClick={() => setShowMap(!showMap)} 
                className="mt-4 text-sm text-blue-600 hover:text-blue-800 underline"
              >
                {showMap ? "Ocultar mapa" : "Ver mapa interativo"}
              </button>
              {showMap && (
                <div className="mt-4 border border-gray-300 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14829.103079077!2d-47.22249!3d-22.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b4613f07d3a7%3A0x4ead928c70b1e690!2sIndaiatuba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1619541234567!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="300" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </Card>
      </section>

      <section>
        <SectionTitle title="Estratégia Completa de Funil de Vendas" subtitle="Abordagem integrada para nutrir leads desde o primeiro contato até a conversão."/>
        
        {/* Funnel Navigation */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-3 w-full max-w-3xl">
            {salesFunnel.map((stage, index) => (
              <button
                key={index}
                onClick={() => setActiveStage(index)}
                className={`py-3 px-4 text-center text-sm md:text-base font-medium transition-colors ${
                  activeStage === index 
                    ? 'bg-yellow-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } ${index === 0 ? 'rounded-l-lg' : ''} ${index === salesFunnel.length - 1 ? 'rounded-r-lg' : ''}`}
              >
                {stage.stage.split(' - ')[0]}
              </button>
            ))}
          </div>
        </div>
        
        {/* Active Funnel Stage */}
        <Card key={activeStage} title={salesFunnel[activeStage].stage} className="border-l-4 border-yellow-500 transition-all duration-300">
          <div className="space-y-4">
            <p><strong className="text-gray-800">Objetivo:</strong> {salesFunnel[activeStage].objective}</p>
            <div>
              <h5 className="font-medium text-gray-700 mb-1">Canais Recomendados:</h5>
              <p className="text-sm text-gray-600">{salesFunnel[activeStage].channels.join(", ")}</p>
            </div>
            <div>
              <h5 className="font-medium text-gray-700 mb-1">Segmentação:</h5>
              <p className="text-sm text-gray-600">{salesFunnel[activeStage].segmentation}</p>
            </div>
            <div>
              <h5 className="font-medium text-gray-700 mb-1">Conteúdo Sugerido:</h5>
              <p className="text-sm text-gray-600">{salesFunnel[activeStage].content}</p>
            </div>
            <div>
              <h5 className="font-medium text-gray-700 mb-1">KPIs Principais:</h5>
              <div className="flex flex-wrap gap-2">
                {salesFunnel[activeStage].kpis.map((kpi, index) => (
                  <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {kpi}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
        
        {/* Funnel Navigation Arrows */}
        <div className="flex justify-between mt-6">
          <button 
            onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
            disabled={activeStage === 0}
            className={`px-4 py-2 rounded ${activeStage === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-800'}`}
          >
            ← Estágio Anterior
          </button>
          <button 
            onClick={() => setActiveStage(prev => Math.min(salesFunnel.length - 1, prev + 1))}
            disabled={activeStage === salesFunnel.length - 1}
            className={`px-4 py-2 rounded ${activeStage === salesFunnel.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-800'}`}
          >
            Próximo Estágio →
          </button>
        </div>
      </section>

    </Layout>
  );
}
