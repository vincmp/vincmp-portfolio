import React from "react";

const PageFooter: React.FC = () => {
  return (
    <div className="w-full px-8">
      <footer className="w-full text-white py-8 border-t-2 border-t-[#E6E6E6]">
        <div className="text-gray-400 text-sm py-[18px]">
          <p className="pagefooter-text">
            © Copyright {new Date().getFullYear()}. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PageFooter;
