import Darkmodebutton from '../components/darkmode';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4 flex flex-col items-center justify-center w-full">
        <div className="h-16 border-b border-b-slate-200 py-4 w-full">
          <nav className="px-8 flex justify-between w-full">
            <a href="#" className="hover:text-slate-600 cursor-pointer font-Kanit font-bold text-lg">
              QA Chatbot for PDF
            </a>
            <Darkmodebutton/>
          </nav>
        </div>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
