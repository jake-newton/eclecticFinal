import React from 'react';
import '../App.css';

const Services = () => {

    return (
        <section class="py-20 px-6">
            <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-gray-50 p-6 rounded-xl shadow">
                <h3 class="text-xl font-semibold mb-2">Networking Solutions</h3>
                <p>Design, configuration, and optimization of physical and virtual networks for businesses and homes.</p>
                </div>
                <div class="bg-gray-50 p-6 rounded-xl shadow">
                <h3 class="text-xl font-semibold mb-2">Server Infrastructure</h3>
                <p>Consulting and implementation of physical and virtual server environments tailored to your needs.</p>
                </div>
                <div class="bg-gray-50 p-6 rounded-xl shadow">
                <h3 class="text-xl font-semibold mb-2">Database Development</h3>
                <p>Design and optimization of SQL and NoSQL databases, with a strong background in scientific data analytics.</p>
                </div>
                <div class="bg-gray-50 p-6 rounded-xl shadow">
                <h3 class="text-xl font-semibold mb-2">Cybersecurity</h3>
                <p>Risk assessment, hardening, and secure architecture services backed by Security+ and CCNA expertise.</p>
                </div>
                <div class="bg-gray-50 p-6 rounded-xl shadow">
                <h3 class="text-xl font-semibold mb-2">Data Analytics</h3>
                <p>Advanced analysis and visualization of business or scientific datasets, including genomics and beyond.</p>
                </div>
            </div>
            </div>
        </section>
    )

}

export default Services;