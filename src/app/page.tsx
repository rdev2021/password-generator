import PasswordGenerator from '../components/PasswordGenerator';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="w-full max-w-lg py-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Generate Secure Passwords
          </h1>
          <div className="mb-4 text-sm text-gray-700 text-center">
            All password generation happens in your browser - nothing is sent to a server.
          </div>
          <PasswordGenerator />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}