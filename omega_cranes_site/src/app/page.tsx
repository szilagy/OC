import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Link from 'next/link';

const productLines = [
  {
    title: "Pontes Rolantes",
    description: "Soluções robustas e personalizadas para movimentação de cargas pesadas.",
    link: "/campanhas#pontes-rolantes"
  },
  {
    title: "Braços Giratórios",
    description: "Flexibilidade e ergonomia para postos de trabalho e linhas de produção.",
    link: "/campanhas#bracos-giratorios"
  },
  {
    title: "Perfil Modular OCK-II (KBK)",
    description: "Sistema modular versátil, alternativa inteligente ao KBK tradicional.",
    link: "/campanhas#perfil-modular"
  },
  {
    title: "Talhas Omega",
    description: "Engenharia nacional com foco em robustez, confiabilidade e baixo custo.",
    link: "/campanhas#talhas-omega"
  },
  {
    title: "Talhas Kito",
    description: "Tecnologia japonesa de alta performance e segurança, distribuída pela Omega.",
    link: "/campanhas#talhas-kito"
  }
];

export default function Home() {
  return (
    <Layout>
      <HeroSection 
        title="Estratégia Google Ads para Omega Cranes"
        subtitle="Um plano detalhado para gerar demanda qualificada e impulsionar vendas de equipamentos industriais de alto valor agregado."
        // Add a relevant background image URL if available
      />

      <section className="py-12">
        <SectionTitle 
          title="Visão Geral da Estratégia"
          subtitle="Abordagem completa focada em performance, segmentação precisa e comunicação técnica."
        />
        <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-4">
          <p>
            Esta estratégia foi desenvolvida para posicionar a Omega Cranes como líder no mercado de movimentação de cargas, utilizando o Google Ads para alcançar engenheiros, gerentes e decisores técnicos nos setores industriais mais relevantes.
          </p>
          <p>
            O plano abrange desde a análise competitiva até a definição de campanhas específicas por produto, palavras-chave, anúncios, segmentação, funil de vendas e orçamento, visando maximizar o retorno sobre o investimento.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-200">
        <SectionTitle 
          title="Foco nas Linhas de Produto"
          subtitle="Campanhas dedicadas para cada solução oferecida pela Omega Cranes."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productLines.map((product) => (
            <Card key={product.title} title={product.title} description={product.description}>
              <Link href={product.link} passHref>
                <Button variant="outline" size="sm" className="mt-4">
                  Ver Estratégia
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <SectionTitle 
          title="Resultados Esperados"
          subtitle="Métricas e KPIs para acompanhar o sucesso da estratégia."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Card title="Geração de Leads">
            <p className="text-3xl font-bold text-blue-600">+XX%</p>
            <p className="text-gray-600">Aumento esperado em leads qualificados no primeiro trimestre.</p>
          </Card>
          <Card title="Custo por Aquisição (CPA)">
            <p className="text-3xl font-bold text-blue-600">{'< R$ 200'}</p>
            <p className="text-gray-600">Meta de CPA para leads qualificados.</p>
          </Card>
          <Card title="Taxa de Conversão">
            <p className="text-3xl font-bold text-blue-600">{'> 2%'}</p>
            <p className="text-gray-600">Meta de taxa de conversão para campanhas de fundo de funil.</p>
          </Card>
        </div>
      </section>

      <section className="py-12 text-center">
         <SectionTitle 
          title="Próximos Passos"
          subtitle="Explore a estratégia detalhada ou entre em contato."
        />
        <Link href="/contato" passHref>
          <Button variant="primary" size="lg">
            Solicitar Mais Informações
          </Button>
        </Link>
      </section>

    </Layout>
  );
}

