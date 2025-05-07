'use client';

import React, { useState } from 'react';
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Button from "@/components/Button";

const faqs = [
  {
    question: "Qual o objetivo principal desta estratégia de Google Ads?",
    answer: "Gerar demanda qualificada e consistente para as linhas de produtos da Omega Cranes, focando em leads com alto potencial de conversão para equipamentos de médio e grande porte."
  },
  {
    question: "Como o orçamento de R$ 3.000/mês será distribuído?",
    answer: "O orçamento será distribuído estrategicamente entre as campanhas de cada linha de produto, com maior foco em Pontes Rolantes e Perfil Modular OCK-II, ajustando conforme a performance."
  },
  {
    question: "Quais são os próximos passos após a análise desta estratégia?",
    answer: "Os próximos passos incluem a configuração das campanhas no Google Ads, implementação do acompanhamento de conversões e o lançamento gradual das campanhas, seguido por monitoramento e otimização contínuos."
  },
  {
    question: "Como a estratégia aborda os concorrentes?",
    answer: "A estratégia inclui grupos de anúncios específicos para termos de concorrentes, buscando capturar usuários que estão comparando soluções, e destaca os diferenciais da Omega nos anúncios."
  }
];

export default function ContatoPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic form submission simulation
    console.log("Form data submitted:", formData);
    setIsSubmitted(true);
    // Reset form after a delay
    setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <Layout>
      <SectionTitle 
        title="Contato e Perguntas Frequentes"
        subtitle="Entre em contato para mais informações ou tire suas dúvidas."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <Card title="Solicitar Mais Informações">
          {isSubmitted ? (
            <div className="text-center text-green-600 font-medium">
              Obrigado! Sua mensagem foi enviada com sucesso.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                ></textarea>
              </div>
              <div>
                <Button type="submit" variant="primary" className="w-full">
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          )}
        </Card>

        {/* Contact Info & FAQ Section */}
        <div className="space-y-8">
          <Card title="Informações de Contato Omega Cranes">
            <p className="text-gray-600 text-sm">Para informações sobre produtos e serviços da Omega Cranes, utilize os canais oficiais:</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><strong>Telefone:</strong> [Inserir Telefone Omega]</li>
              <li><strong>Email:</strong> [Inserir Email Omega]</li>
              <li><strong>Website:</strong> <a href="https://omegacranes.com.br/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">omegacranes.com.br</a></li>
              <li><strong>Endereço:</strong> [Inserir Endereço Omega]</li>
            </ul>
             <p className="text-xs text-gray-500 mt-4">*Este site apresenta a estratégia de marketing. Para contato comercial, use os canais oficiais da Omega Cranes.</p>
          </Card>

          <Card title="Perguntas Frequentes (FAQ)">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="text-sm">
                  <summary className="font-medium text-gray-800 cursor-pointer hover:text-yellow-600">{faq.question}</summary>
                  <p className="text-gray-600 mt-1 ml-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Card>
        </div>
      </div>

    </Layout>
  );
}

