import React from 'react';

const MemberShipPlan = () => {
    const plans = [
        {
            id: 1,
            name: "Basic",
            price: "৳৫০০",
            features: ["৫টি বই ধার নেওয়া", "১০ দিন সময়", "ই-বুক অ্যাক্সেস নেই"],
            buttonText: "Get Basic",
            isPopular: false
        },
        {
            id: 2,
            name: "Standard",
            price: "৳১০০০",
            features: ["১৫টি বই ধার নেওয়া", "৩০ দিন সময়", "সীমিত ই-বুক অ্যাক্সেস"],
            buttonText: "Get Standard",
            isPopular: true
        },
        {
            id: 3,
            name: "Max",
            price: "৳২০০০",
            features: ["আনলিমিটেড বই", "যত খুশি সময়", "সব ই-বুক এবং অডিও বুক"],
            buttonText: "Get Max",
            isPopular: false
        }
    ];

    return (
        <div className="py-12 bg-base-200 px-4 mt-10">
            <h2 className="text-4xl font-bold text-center mb-12">Our Membership Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan) => (
                    <div 
                        key={plan.id} 
                        className={`card bg-base-100 shadow-xl border-2 ${plan.isPopular ? 'border-primary' : 'border-transparent'}`}
                    >
                        {plan.isPopular && (
                            <div className="badge badge-primary absolute top-0 right-0 m-4">Popular</div>
                        )}
                        <div className="card-body items-center text-center">
                            <h3 className="card-title text-2xl font-bold">{plan.name}</h3>
                            <div className="text-4xl font-black my-4">{plan.price}<span className="text-sm font-normal">/মাস</span></div>
                            
                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <span className="text-success">✔</span> {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="card-actions w-full">
                                <button className={`btn w-full ${plan.isPopular ? 'btn-primary' : 'btn-outline'}`}>
                                    {plan.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemberShipPlan;