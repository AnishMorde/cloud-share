import React from 'react';
import { Upload, Shield, Share2, CreditCard, FileText, Clock } from 'lucide-react';

function FeatureSection() {
  const features = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Easy File Upload",
      description: "Quickly upload your files with our intuitive drag-and-drop interface."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Storage",
      description: "Your files are encrypted and stored securely in our cloud infrastructure."
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Simple Sharing",
      description: "Share files with anyone using secure links that you control."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Flexible Credits",
      description: "Pay only for what you use with our credit-based system."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "File Management",
      description: "Organize, preview, and manage your files from any device."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Transaction History",
      description: "Keep track of all your credit purchases and usage."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need for the file sharing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            CloudShare provides all the tools you need to manage your digital content
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-purple-100 text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
