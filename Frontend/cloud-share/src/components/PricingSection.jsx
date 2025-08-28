
import React from 'react';
import { Check } from 'lucide-react';

function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "Perfect for getting started",
      features: [
        "5 file uploads",
        "Basic file sharing",
        "7-day file retention",
        "Email support"
      ],
      buttonText: "Get Started",
      buttonStyle: "border-2 border-purple-500 text-purple-500 hover:bg-purple-50",
      popular: false
    },
    {
      name: "Premium",
      price: "₹500",
      description: "For individuals with larger needs",
      features: [
        "500 file uploads",
        "Advanced file sharing",
        "30-day file retention",
        "Priority email support",
        "File analytics"
      ],
      buttonText: "Go Premium",
      buttonStyle: "bg-purple-500 text-white hover:bg-purple-600",
      popular: true
    },
    {
      name: "Ultimate",
      price: "₹2500",
      description: "For teams and businesses",
      features: [
        "5000 file uploads",
        "Team sharing capabilities",
        "Unlimited file retention",
        "24/7 priority support",
        "Advanced analytics",
        "API access"
      ],
      buttonText: "Go Ultimate",
      buttonStyle: "border-2 border-purple-500 text-purple-500 hover:bg-purple-50",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-2 border-purple-500 transform lg:scale-105'
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-6">
                  <span className="bg-purple-500 text-white px-4 py-2 text-sm font-medium rounded-full shadow-md">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;