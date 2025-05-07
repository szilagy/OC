const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-700 text-white p-4 mt-8">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {currentYear} Omega Cranes. Todos os direitos reservados.</p>
        <p>Estratégia de Google Ads desenvolvida por Manus AI.</p>
      </div>
    </footer>
  );
};

export default Footer;

