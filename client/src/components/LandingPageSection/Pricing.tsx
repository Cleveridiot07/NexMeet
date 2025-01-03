import { Button } from '../Common Components/Button'

const pricingPlans = [
  {
    name: 'Free',
    description: 'Perfect for getting started',
    price: '$0',
    features: [
      'Basic video calls',
      'Up to 30 minutes',
      '2 participants max',
    ],
  },
  {
    name: 'Pro',
    description: 'For professionals and small teams',
    price: '$19',
    features: [
      'HD video calls',
      'Unlimited duration',
      'Up to 10 participants',
      'Screen sharing',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    features: [
      'Ultra HD video calls',
      'Unlimited participants',
      'Advanced admin controls',
      'Dedicated support',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="py-24 bg-sky-950">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-400">
            Choose the plan that's right for you and start experiencing next-gen video calls today.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-2xl text-sky-700 font-bold mb-2">{plan.name}</div>
              <div className="text-gray-600 mb-4">{plan.description}</div>
              <div className="text-3xl text-sky-700 font-bold mb-4">{plan.price}</div>
              <ul className="space-y-2 text-gray-600 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
              <Button className="w-full bg-sky-900 text-gray-200 rounded-full">
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

