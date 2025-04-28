import React from "react";

const PageFooter: React.FC = () => {
  return (
    <footer className="w-full text-white py-8 border-t-2 border-t-[#E6E6E6] max-w-6xl mx-auto flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-gray-400 text-sm py-[18px]">
          <p className="pagefooter-text">
            © Copyright {new Date().getFullYear()}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
