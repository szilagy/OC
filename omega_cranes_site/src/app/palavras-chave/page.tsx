'use client';

import React, { useState } from 'react';
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import Tabs from "@/components/Tabs";
import Card from "@/components/Card";
import Button from "@/components/Button";

// Data extracted and simplified from the strategy document
const keywordData = {
  "pontes-rolantes": {
    label: "Pontes Rolantes",
    groups: [
      {
        name: "Gerais",
        keywords: [
          ["ponte rolante", "Ampla Modificada", "8,50", "Alto"],
          ["ponte rolante industrial", "Frase", "10,00", "Médio"],
          ["equipamento movimentação carga", "Ampla Modificada", "7,50", "Médio"],
          ["ponte rolante preço", "Frase", "9,00", "Médio-Alto"],
          // ... more keywords
        ]
      },
      {
        name: "Monoviga",
        keywords: [
          ["ponte rolante monoviga", "Ampla Modificada", "9,00", "Médio"],
          ["ponte suspensa", "Ampla Modificada", "8,00", "Médio"],
          // ... more keywords
        ]
      },
       {
        name: "Duplaviga",
        keywords: [
          ["ponte rolante duplaviga", "Ampla Modificada", "10,00", "Médio"],
          ["ponte rolante pesada", "Ampla Modificada", "9,50", "Médio"],
          // ... more keywords
        ]
      },
      // ... other groups (Monovia, Pórtico, Projetos Especiais, Concorrentes)
    ]
  },
  "bracos-giratorios": {
    label: "Braços Giratórios",
    groups: [
      {
        name: "Gerais",
        keywords: [
          ["braço giratório", "Ampla Modificada", "8,00", "Médio"],
          ["guindaste giratório", "Ampla Modificada", "7,50", "Médio"],
          // ... more keywords
        ]
      },
      // ... other groups
    ]
  },
  "perfil-modular": {
    label: "Perfil Modular OCK-II (KBK)",
    groups: [
       {
        name: "KBK/KBKII (Termos Concorrentes)",
        keywords: [
          ["KBK", "Ampla Modificada", "10,00", "Médio"],
          ["KBKII", "Ampla Modificada", "10,00", "Médio-Baixo"],
          ["alternativa KBK", "Ampla Modificada", "11,00", "Baixo"],
          ["\"sistema KBK\"", "Exata", "16,00", "Médio-Baixo"],
          // ... more keywords
        ]
      },
      // ... other groups
    ]
  },
  "talhas-omega": {
    label: "Talhas Omega",
    groups: [
      {
        name: "Gerais",
        keywords: [
          ["talha elétrica", "Ampla Modificada", "8,00", "Alto"],
          ["guincho elétrico", "Ampla Modificada", "7,00", "Médio-Alto"],
          // ... more keywords
        ]
      },
      // ... other groups
    ]
  },
  "talhas-kito": {
    label: "Talhas Kito",
    groups: [
      {
        name: "Gerais",
        keywords: [
          ["talha Kito", "Ampla Modificada", "9,00", "Médio"],
          ["talha elétrica Kito", "Ampla Modificada", "8,50", "Médio-Baixo"],
          // ... more keywords
        ]
      },
      // ... other groups
    ]
  }
};

const negativeKeywordsGlobal = [
  "usada", "usadas", "segunda mão", "seminova", "seminovas", "aluguel", "alugar", 
  "locação", "locar", "como fazer", "DIY", "faça você mesmo", "manual", "manuais", 
  "pdf", "grátis", "gratuito", "gratuita", "free"
];

const KeywordGroupTable = ({ group }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [searchTerm, setSearchTerm] = useState('');

  // Sort function
  const sortedKeywords = React.useMemo(() => {
    let sortableItems = [...group.keywords];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        
        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [group.keywords, sortConfig]);

  // Filter function
  const filteredKeywords = sortedKeywords.filter(keyword => 
    keyword[0].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-gray-700 mb-3">Grupo: {group.name}</h4>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar palavra-chave..."
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => requestSort(0)}
              >
                Palavra-chave {sortConfig.key === 0 && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
              </th>
              <th className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Correspondência
              </th>
              <th 
                className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => requestSort(2)}
              >
                Lance (R$) {sortConfig.key === 2 && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
              </th>
              <th className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Volume Estimado
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredKeywords.map((keyword, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {keyword.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-3 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-500">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredKeywords.length === 0 && (
        <p className="text-center text-gray-500 py-4">Nenhuma palavra-chave encontrada com o termo "{searchTerm}"</p>
      )}
    </div>
  );
};

const KeywordContent = ({ campaign }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    {campaign.groups.map((group, index) => (
      <KeywordGroupTable key={index} group={group} />
    ))}
  </div>
);

export default function PalavrasChavePage() {
  const tabs = Object.entries(keywordData).map(([key, campaign]) => ({
    id: key,
    label: campaign.label,
    content: <KeywordContent campaign={campaign} />
  }));

  return (
    <Layout>
      <SectionTitle 
        title="Estratégia de Palavras-chave"
        subtitle="Seleção detalhada de termos para cada campanha e grupo de anúncios."
      />

      <div className="max-w-5xl mx-auto text-gray-700 space-y-4 mb-12">
        <p>
          A seleção de palavras-chave é crucial para o sucesso das campanhas de Google Ads. Utilizamos uma combinação de tipos de correspondência (ampla modificada, frase e exata) para equilibrar alcance e relevância, focando em termos que indicam intenção de compra ou pesquisa por soluções específicas no setor industrial.
        </p>
      </div>

      <Tabs tabs={tabs} />

      <section className="py-12 mt-8">
        <SectionTitle 
          title="Palavras-chave Negativas Globais"
          subtitle="Termos a serem excluídos de todas as campanhas para evitar cliques irrelevantes."
        />
        <Card title="Lista Global de Negativas" className="max-w-3xl mx-auto">
          <ul className="list-disc list-inside text-gray-600 pl-4 grid grid-cols-2 md:grid-cols-3 gap-2">
            {negativeKeywordsGlobal.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 mt-4">*Palavras-chave negativas específicas por campanha também serão aplicadas.</p>
        </Card>
      </section>

    </Layout>
  );
}
