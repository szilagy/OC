
'use client';

import React from 'react';
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Table from "@/components/Table";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const budgetAllocation = [
  { campaign: "Pontes Rolantes", percentage: 30, value: 900, focus: "Fundo/Meio de Funil (termos específicos, concorrentes)" },
  { campaign: "Perfil Modular OCK-II (KBK)", percentage: 25, value: 750, focus: "Meio de Funil (termos KBK, comparativos)" },
  { campaign: "Talhas Omega", percentage: 15, value: 450, focus: "Fundo/Meio de Funil (marca, termos específicos)" },
  { campaign: "Talhas Kito", percentage: 15, value: 450, focus: "Fundo de Funil (marca Kito, distribuidores)" },
  { campaign: "Braços Giratórios", percentage: 10, value: 300, focus: "Meio de Funil (aplicações específicas)" },
  { campaign: "Display/Vídeo (Topo/Remarketing)", percentage: 5, value: 150, focus: "Topo de Funil (reconhecimento), Meio/Fundo (remarketing)" },
];

const totalBudget = 3000;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

const timeline = [
  { phase: "Mês 1: Configuração e Lançamento", activities: [
      "Configuração completa das contas e campanhas no Google Ads.",
      "Implementação do acompanhamento de conversões (Google Tag Manager).",
      "Lançamento das campanhas de Search (Pontes, OCK-II, Talhas).",
      "Início da coleta de dados e otimizações iniciais (lances, negativas).",
      "Monitoramento intensivo de performance."
    ], kpis: ["Impressões", "Cliques", "CTR", "Configuração de Conversões OK"] },
  { phase: "Mês 2-3: Otimização e Expansão", activities: [
      "Ajuste fino de lances e orçamentos com base nos dados iniciais.",
      "Refinamento das palavras-chave (adição de negativas, teste de correspondências).",
      "Teste A/B de anúncios (headlines, descrições, CTAs).",
      "Lançamento gradual das campanhas de Display (Remarketing) e Performance Max.",
      "Análise de relatórios de termos de pesquisa."
    ], kpis: ["Taxa de Conversão", "Custo por Lead (CPL)", "Qualidade dos Leads", "Posição Média"] },
  { phase: "Mês 4-6: Escalada e Refinamento", activities: [
      "Expansão para novos grupos de anúncios ou palavras-chave com bom desempenho.",
      "Otimização de páginas de destino (landing pages) com base no comportamento do usuário.",
      "Teste de diferentes estratégias de lances automáticos (tCPA, tROAS se aplicável).",
      "Análise de desempenho por dispositivo, localização e horário.",
      "Relatórios de performance consolidados e planejamento para o próximo ciclo."
    ], kpis: ["Custo por Aquisição (CPA)", "Retorno sobre Investimento em Publicidade (ROAS - se aplicável)", "Volume de Leads Qualificados (SQL)", "Taxa de Fechamento (Vendas)"] },
];

const mainKpis = [
  { kpi: "Leads Qualificados (SQL)", description: "Número de contatos recebidos via formulário, telefone ou WhatsApp que atendem aos critérios de qualificação (setor, necessidade, etc.). Meta: Aumentar consistentemente mês a mês.", frequency: "Semanal/Mensal" },
  { kpi: "Custo por Lead Qualificado (CPLq)", description: `Investimento total em Ads dividido pelo número de SQLs gerados. Meta: Manter abaixo de R$ 250 (valor exemplo, ajustar com base na realidade).`, frequency: "Mensal" },
  { kpi: "Taxa de Conversão (Leads/Cliques)", description: "Percentual de cliques que resultaram em um lead (qualificado ou não). Meta: Acima de 1.5% para Search (Fundo/Meio).", frequency: "Semanal/Mensal" },
  { kpi: "Taxa de Cliques (CTR)", description: "Percentual de impressões que geraram cliques. Indica a relevância dos anúncios. Meta: Acima de 3% para Search (Fundo/Meio).", frequency: "Semanal" },
  { kpi: "Parcela de Impressões (Search)", description: "Percentual de vezes que seus anúncios foram exibidos em relação ao total que poderiam ter sido. Indica potencial de alcance. Meta: Monitorar e aumentar para termos estratégicos.", frequency: "Mensal" },
  { kpi: "Custo por Aquisição (CPA) - Venda", description: "Investimento total em Ads dividido pelo número de vendas originadas pelas campanhas (requer rastreamento offline ou CRM). Meta: Definir com base no ticket médio e margem.", frequency: "Trimestral" },
];

export default function OrcamentoPage() {
  const chartData = budgetAllocation.map(item => ({ name: item.campaign, value: item.percentage }));

  return (
    <Layout>
      <SectionTitle 
        title="Orçamento, Cronograma e KPIs"
        subtitle="Planejamento financeiro, fases de implementação e métricas de sucesso."
      />

      <section className="mb-12">
        <SectionTitle title="Proposta de Distribuição de Orçamento" subtitle={`Base mensal de R$ ${totalBudget.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} alocada estrategicamente.`} className="text-left mb-4"/>
        <Card title="Alocação Mensal Sugerida">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Table 
                headers={["Campanha/Foco", "%", "Valor (R$)", "Foco Funil"]}
                rows={budgetAllocation.map(item => [
                  item.campaign, 
                  `${item.percentage}%`, 
                  item.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 }), 
                  item.focus
                ])}
              />
              <p className="text-sm text-gray-500 mt-4">*Esta é uma sugestão inicial. A alocação deve ser flexível e ajustada com base na performance real das campanhas.</p>
            </div>
            <div className="h-64 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  {/* <Legend /> */}
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>
      </section>

      <section className="mb-12">
        <SectionTitle title="Cronograma Sugerido de Implementação" subtitle="Fases e atividades chave para os primeiros 6 meses." className="text-left mb-4"/>
        <div className="space-y-6">
          {timeline.map((phase, index) => (
            <Card key={index} title={phase.phase} className="border-l-4 border-blue-500">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Principais Atividades:</h5>
                <ul className="list-disc list-inside text-gray-600 pl-4 text-sm space-y-1">
                  {phase.activities.map((activity, i) => <li key={i}>{activity}</li>)}
                </ul>
              </div>
              <div className="mt-4">
                <h5 className="font-medium text-gray-700 mb-2">KPIs de Foco:</h5>
                <p className="text-sm text-gray-600">{phase.kpis.join(", ")}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Plano de Acompanhamento e KPIs Principais" subtitle="Métricas essenciais para avaliar a performance da estratégia." className="text-left mb-4"/>
        <Card title="Indicadores Chave de Performance">
           <Table 
            headers={["KPI", "Descrição e Meta Sugerida", "Frequência de Análise"]}
            rows={mainKpis.map(item => [item.kpi, item.description, item.frequency])}
          />
        </Card>
      </section>

    </Layout>
  );
}

