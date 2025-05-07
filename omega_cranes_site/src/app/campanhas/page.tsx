import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import Tabs from "@/components/Tabs";
import Card from "@/components/Card";

const campaignData = [
  {
    id: "pontes-rolantes",
    label: "Pontes Rolantes",
    objective: "Gerar leads qualificados para venda de pontes rolantes, com foco em projetos de médio e grande porte.",
    type: "Search (principal) + Display (remarketing)",
    justification: "Search capta intenção de compra; Display complementa com remarketing.",
    adGroups: [
      "Pontes Rolantes Gerais",
      "Pontes Rolantes Monoviga",
      "Pontes Rolantes Duplaviga",
      "Pontes Rolantes Monovia",
      "Pontes Rolantes Pórtico",
      "Projetos Especiais",
      "Concorrentes"
    ],
    bidding: "CPC Manual Aprimorado; Ajustes por dispositivo e localização."
  },
  {
    id: "bracos-giratorios",
    label: "Braços Giratórios",
    objective: "Gerar leads qualificados para venda de braços giratórios, com foco em aplicações específicas.",
    type: "Search (principal) + Performance Max (complementar)",
    justification: "Search capta intenção; PMax explora múltiplos canais com otimização automática.",
    adGroups: [
      "Braços Giratórios Gerais",
      "Braços Giratórios de Coluna",
      "Braços Giratórios de Parede",
      "Aplicações Específicas",
      "Concorrentes"
    ],
    bidding: "CPC Manual Aprimorado (Search); Conversões (PMax); Ajustes por localização."
  },
  {
    id: "perfil-modular",
    label: "Perfil Modular OCK-II (KBK)",
    objective: "Gerar leads qualificados para sistemas modulares, aproveitando buscas por termos KBK/KBKII.",
    type: "Search (principal) + Display (remarketing)",
    justification: "Search capta intenção, especialmente buscas por KBK; Display para remarketing.",
    adGroups: [
      "Sistema Modular Geral",
      "OCK-II Específico",
      "KBK/KBKII (Termos Concorrentes)",
      "Aplicações Específicas",
      "Concorrentes"
    ],
    bidding: "CPC Manual Aprimorado; Lances agressivos para termos KBK; Ajustes por localização."
  },
  {
    id: "talhas-omega",
    label: "Talhas Omega",
    objective: "Gerar leads qualificados para talhas Omega, destacando engenharia nacional e robustez.",
    type: "Search (principal) + Performance Max (complementar)",
    justification: "Search capta intenção; PMax explora múltiplos canais com otimização automática.",
    adGroups: [
      "Talhas Elétricas Gerais",
      "Talhas Omega Específicas",
      "Talhas por Capacidade",
      "Aplicações Específicas",
      "Concorrentes"
    ],
    bidding: "CPC Manual Aprimorado (Search); Conversões (PMax); Ajustes por localização."
  },
  {
    id: "talhas-kito",
    label: "Talhas Kito",
    objective: "Gerar leads qualificados para talhas Kito, destacando a parceria com marca internacional.",
    type: "Search (principal) + Display (remarketing)",
    justification: "Search capta intenção, especialmente buscas pela marca Kito; Display para remarketing.",
    adGroups: [
      "Talhas Kito Gerais",
      "Talhas Kito por Modelo",
      "Talhas Kito por Capacidade",
      "Distribuidor/Revenda Kito",
      "Concorrentes"
    ],
    bidding: "CPC Manual Aprimorado; Lances agressivos para termos Kito; Ajustes por localização."
  }
];

const CampaignContent = ({ campaign }) => (
  <Card title={`Campanha: ${campaign.label}`} className="bg-white">
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-gray-700">Objetivo:</h4>
        <p className="text-gray-600">{campaign.objective}</p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700">Tipo de Campanha:</h4>
        <p className="text-gray-600">{campaign.type}</p>
        <p className="text-sm text-gray-500"><em>Justificativa: {campaign.justification}</em></p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700">Estrutura de Grupos de Anúncios:</h4>
        <ul className="list-disc list-inside text-gray-600 pl-4">
          {campaign.adGroups.map((group, index) => (
            <li key={index}>{group}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700">Estratégia de Lances:</h4>
        <p className="text-gray-600">{campaign.bidding}</p>
      </div>
    </div>
  </Card>
);

export default function CampanhasPage() {
  const tabs = campaignData.map(campaign => ({
    id: campaign.id,
    label: campaign.label,
    content: <CampaignContent campaign={campaign} />
  }));

  return (
    <Layout>
      <SectionTitle 
        title="Estrutura das Campanhas"
        subtitle="Campanhas dedicadas para cada linha de produto, otimizadas para performance."
      />
      
      <div className="max-w-5xl mx-auto text-gray-700 space-y-4 mb-12">
        <p>
          A estratégia de Google Ads da Omega Cranes é organizada em campanhas específicas para cada linha de produto principal. Isso permite um controle mais granular sobre o orçamento, lances, palavras-chave e anúncios, garantindo que a mensagem certa chegue ao público certo no momento certo.
        </p>
      </div>

      <Tabs tabs={tabs} />

    </Layout>
  );
}

