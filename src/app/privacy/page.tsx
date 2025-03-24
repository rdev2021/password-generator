import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="w-full max-w-lg py-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
          
          <div className="prose text-gray-700">
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Our Commitment to Privacy</h2>
            <p>
              At Privacy-First Password Generator, we take your privacy extremely seriously. This policy 
              outlines our practices regarding data collection and processing.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">No Data Collection</h2>
            <p>
              We do not collect, store, or transmit any of your data. Our password generator operates 
              entirely within your browser, and all processing happens locally on your device.
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>No passwords or user inputs are transmitted to any server</li>
              <li>No analytics or tracking cookies are used</li>
              <li>No user data is stored in any database</li>
              <li>No third-party services receive your information</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">How Our Password Generator Works</h2>
            <p>
              When you use our password generator:
            </p>
            <ol className="list-decimal pl-6 mt-2 mb-4">
              <li>Your browser loads our static website</li>
              <li>All password generation code runs locally in your browser using JavaScript</li>
              <li>Generated passwords never leave your device</li>
              <li>When you close the page, all data is automatically discarded</li>
            </ol>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Local Storage</h2>
            <p>
              This application does not use local storage, session storage, or cookies to save any 
              of your information.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Changes to This Policy</h2>
            <p>
              If we make changes to this privacy policy, we will update this page accordingly. Since we 
              don&apos;t collect any user data, changes to this policy will generally be related to clarifications 
              or additional details about our no-data approach.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Contact Us</h2>
            <p>
              If you have any questions or concerns about our privacy policy, please reach out through our 
              GitHub repository issues page.
            </p>
            
            <p className="mt-8 text-sm text-gray-600">
              Last updated: 24/03/2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}