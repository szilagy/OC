import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import Tabs from "@/components/Tabs";
import Card from "@/components/Card";

// Data extracted and simplified from the strategy document
const adCopyData = {
  "pontes-rolantes": {
    label: "Pontes Rolantes",
    headlines: [
      "Ponte Rolante Industrial Omega",
      "Engenharia Personalizada | Omega",
      "Robustez Industrial Garantida",
      "Soluções em Pontes Rolantes",
      "Fale com um Engenheiro Agora",
      "Pontes Rolantes Sob Medida",
      "Alta Capacidade e Precisão",
      "Tecnologia em Movimentação",
      "Solicite Proposta Técnica",
      // ... more headlines
    ],
    descriptions: [
      "Desenvolvemos pontes rolantes industriais sob medida para sua necessidade. Engenharia de ponta, robustez e segurança garantidas. Fale com nossos especialistas.",
      "Aumente sua produtividade com as pontes rolantes Omega. Soluções personalizadas, da monoviga à duplaviga. Solicite uma proposta técnica detalhada hoje mesmo.",
      // ... more descriptions
    ],
    sitelinks: ["Pontes Monoviga", "Pontes Duplaviga", "Pórticos Rolantes", "Assistência Técnica", "Cases de Sucesso", "Solicite Orçamento"],
    callouts: ["Engenharia Personalizada", "Robustez Industrial", "Atendimento Especializado", "Instalação e Manutenção"],
    structured_snippets: { type: "Modelos", values: ["Ponte Rolante Monoviga", "Ponte Rolante Duplaviga", "Ponte Rolante Suspensa", "Pórtico Rolante"] },
    visuals: "Imagens de alta qualidade dos equipamentos em operação; Detalhes de componentes; Infográficos; Cases. Referência: Caterpillar."
  },
  "bracos-giratorios": {
    label: "Braços Giratórios",
    headlines: ["Braço Giratório Industrial", "Solução Ergonômica", "Guindaste de Coluna/Parede", "Otimize Seu Posto de Trabalho"],
    descriptions: ["Destaque a flexibilidade, facilidade de operação, segurança e aplicação em diferentes layouts."],
    sitelinks: ["Braço de Coluna", "Braço de Parede", "Aplicações", "Solicite Orçamento"],
    callouts: ["Flexibilidade Total", "Operação Segura", "Ergonomia Industrial"],
    structured_snippets: { type: "Tipos", values: ["Braço Giratório de Coluna", "Braço Giratório de Parede", "Braço Articulado"] },
    visuals: "Imagens e vídeos mostrando a flexibilidade e uso em postos de trabalho. Referência: Imagens focadas em ergonomia."
  },
  "perfil-modular": {
    label: "Perfil Modular OCK-II (KBK)",
    headlines: ["Sistema Modular OCK-II", "Alternativa Inteligente ao KBK", "Flexibilidade e Precisão", "Perfil Modular Omega", "Sistema KBK", "Perfil KBKII"],
    descriptions: ["Explicar modularidade, facilidade de montagem/expansão, compatibilidade e robustez como solução superior/equivalente ao KBK."],
    sitelinks: ["Vantagens OCK-II", "Comparativo KBK", "Aplicações Modulares", "Solicite Projeto"],
    callouts: ["Fácil Montagem", "Alta Flexibilidade", "Compatível e Robusto"],
    structured_snippets: { type: "Características", values: ["Modularidade", "Leveza", "Precisão", "Baixo atrito"] },
    visuals: "Vídeos curtos explicando a tecnologia; Animações 3D; Comparações visuais com KBK. Referência: Kito (precisão)."
  },
  "talhas-omega": {
    label: "Talhas Omega",
    headlines: ["Talha Elétrica Omega", "Engenharia Nacional", "Robustez e Confiabilidade", "Baixo Custo de Manutenção"],
    descriptions: ["Enfatizar fabricação nacional, qualidade dos componentes, desempenho e durabilidade."],
    sitelinks: ["Talhas de Cabo", "Talhas de Corrente", "Catálogo Técnico", "Comprar Talha"],
    callouts: ["Fabricação Nacional", "Alto Desempenho", "Manutenção Simplificada"],
    structured_snippets: { type: "Capacidades", values: ["1 Tonelada", "2 Toneladas", "5 Toneladas", "10+ Toneladas"] },
    visuals: "Imagens destacando a robustez; Vídeos institucionais da fábrica; Detalhes dos motores e componentes. Referência: John Deere (robustez)."
  },
  "talhas-kito": {
    label: "Talhas Kito",
    headlines: ["Talha Elétrica Kito", "Tecnologia Japonesa", "Distribuidor Oficial Kito", "Alta Performance e Segurança"],
    descriptions: ["Destacar parceria com Kito, qualidade internacional, precisão e segurança."],
    sitelinks: ["Modelos Kito ER2", "Modelos Kito EQ", "Encontre Revendedor", "Comprar Kito"],
    callouts: ["Tecnologia Japonesa", "Precisão Absoluta", "Segurança Certificada"],
    structured_snippets: { type: "Modelos", values: ["Kito ER2", "Kito EQ", "Kito CX", "Kito ED"] },
    visuals: "Vídeos demonstrativos da Kito; Imagens focando na precisão e tecnologia; Selos de qualidade/certificação. Referência: Kito do Brasil."
  }
};

const objections = [
  { objection: "Preço Elevado", strategy: "Destacar ROI, durabilidade, baixo custo de manutenção. Comparar com custos de parada. Headline: \"Investimento Inteligente em Produtividade\"." },
  { objection: "Compatibilidade", strategy: "Mencionar compatibilidade, engenharia personalizada. Headline: \"Integração Perfeita com Sua Fábrica\"." },
  { objection: "Prazo de Entrega", strategy: "Destacar agilidade, prazos competitivos. Headline: \"Entrega Rápida em Todo Brasil\"." },
  { objection: "Manutenção/Instalação", strategy: "Oferecer serviços completos, equipe técnica especializada. Headline: \"Suporte Técnico Completo Omega\"." },
  { objection: "Concorrência", strategy: "Destacar diferenciais únicos, posicionar como alternativa inteligente, usar depoimentos. Headline: \"Omega: A Escolha Inteligente em Movimentação\"." }
];

const AdCopyContent = ({ campaign }) => (
  <Card title={`Exemplos para: ${campaign.label}`} className="bg-white mb-6">
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Exemplos de Headlines (Títulos):</h4>
        <ul className="list-disc list-inside text-gray-600 pl-4 text-sm space-y-1">
          {campaign.headlines.slice(0, 8).map((h, i) => <li key={i}>{h}</li>)} 
          {campaign.headlines.length > 8 && <li>... e mais {campaign.headlines.length - 8} opções</li>}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Exemplos de Descrições:</h4>
        <ul className="list-disc list-inside text-gray-600 pl-4 text-sm space-y-1">
          {campaign.descriptions.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <h5 className="font-medium text-gray-700 mb-1">Sitelinks:</h5>
          <ul className="list-disc list-inside text-gray-600 pl-4">
            {campaign.sitelinks?.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-700 mb-1">Frases de Destaque:</h5>
          <ul className="list-disc list-inside text-gray-600 pl-4">
            {campaign.callouts?.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-700 mb-1">Snippets Estruturados ({campaign.structured_snippets?.type}):</h5>
          <ul className="list-disc list-inside text-gray-600 pl-4">
            {campaign.structured_snippets?.values.map((v, i) => <li key={i}>{v}</li>)}
          </ul>
        </div>
      </div>
       <div>
        <h4 className="font-semibold text-gray-700 mb-2">Sugestões Visuais:</h4>
        <p className="text-gray-600 text-sm">{campaign.visuals}</p>
      </div>
    </div>
  </Card>
);

export default function AnunciosPage() {
  const tabs = Object.entries(adCopyData).map(([key, campaign]) => ({
    id: key,
    label: campaign.label,
    content: <AdCopyContent campaign={campaign} />
  }));

  return (
    <Layout>
      <SectionTitle 
        title="Anúncios e Copys"
        subtitle="Exemplos de textos e sugestões visuais para cada campanha."
      />

      <div className="max-w-5xl mx-auto text-gray-700 space-y-4 mb-12">
        <p>
          Os anúncios são a linha de frente da comunicação no Google Ads. Desenvolvemos exemplos de headlines, descrições e extensões alinhados ao tom de comunicação técnico e confiante da Omega Cranes, focando em destacar os diferenciais e gerar cliques qualificados.
        </p>
        <Card title="Tom de Comunicação" className="bg-blue-50 border-l-4 border-blue-500">
          <ul className="list-disc list-inside text-blue-800 pl-4 text-sm space-y-1">
            <li>**Profissional e Técnico:** Linguagem precisa, termos do setor.</li>
            <li>**Foco em Soluções:** Como os equipamentos otimizam operações.</li>
            <li>**Confiança e Robustez:** Qualidade, durabilidade, engenharia.</li>
            <li>**CTAs Fortes:** Direcionados ao público técnico (engenheiros, gerentes).</li>
          </ul>
        </Card>
      </div>

      <Tabs tabs={tabs} />

      <section className="py-12 mt-8">
        <SectionTitle 
          title="Mapeamento de Objeções"
          subtitle="Estratégias para superar barreiras comuns na comunicação."
        />
        <div className="space-y-4 max-w-4xl mx-auto">
          {objections.map((item, index) => (
            <Card key={index} title={`Objeção: ${item.objection}`} className="bg-gray-50">
              <p className="text-gray-600 text-sm"><strong>Estratégia:</strong> {item.strategy}</p>
            </Card>
          ))}
        </div>
      </section>

    </Layout>
  );
}

