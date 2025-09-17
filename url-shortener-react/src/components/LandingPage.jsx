import React, { useState } from "react";
import { Link2, BarChart3, Shield, Zap, ArrowRight, Check, Globe, Users, TrendingUp } from "lucide-react";

// Card Component
const Card = ({ icon: Icon, title, desc, delay = 0 }) => {
  return (
    <div 
      className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200"
      style={{
        animation: `fadeInUp 0.8s ease-out ${delay}s both`
      }}
    >
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

// Stats Component
const StatCard = ({ number, label, delay = 0 }) => (
  <div 
    className="text-center"
    style={{
      animation: `fadeInUp 0.8s ease-out ${delay}s both`
    }}
  >
    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
      {number}
    </div>
    <div className="text-gray-600 text-sm uppercase tracking-wider">
      {label}
    </div>
  </div>
);

const LandingPage = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const dashBoardNavigateHandler = () => {
    // Navigation logic here
  };

  const features = [
    {
      icon: Link2,
      title: "Simple URL Shortening",
      desc: "Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics",
      desc: "Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      desc: "Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
    },
    {
      icon: Zap,
      title: "Fast and Reliable",
      desc: "Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative lg:px-14 sm:px-8 px-4 pt-8">
          {/* Hero Section */}
          <div className="lg:flex-row flex-col lg:py-16 pt-16 lg:gap-16 gap-12 flex justify-between items-center">
            <div className="flex-1 z-10">
              <div 
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8"
                style={{animation: 'fadeInUp 0.8s ease-out 0.2s both'}}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                New: Advanced Analytics Dashboard
              </div>
              
              <h1 
                className="font-bold text-gray-800 lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:leading-[70px] md:leading-[55px] sm:leading-[45px] leading-10 mb-6"
                style={{animation: 'fadeInUp 0.8s ease-out 0.4s both'}}
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  LinkMetrics
                </span>{" "}
                Simplifies URL Shortening For{" "}
                <span className="relative">
                  Efficient
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 -rotate-1 -z-10"></div>
                </span>{" "}
                Sharing
              </h1>
              
              <p 
                className="text-gray-600 text-lg leading-relaxed mb-8 lg:w-[90%]"
                style={{animation: 'fadeInUp 0.8s ease-out 0.6s both'}}
              >
                LinkMetrics streamlines the process of URL shortening, making sharing
                links effortless and efficient. With its user-friendly interface,
                LinkMetrics allows you to generate concise, easy-to-share URLs in
                seconds.
              </p>
              
              <div 
                className="flex sm:flex-row flex-col items-center gap-4 mb-12"
                style={{animation: 'fadeInUp 0.8s ease-out 0.8s both'}}
              >
                <button
                  onClick={dashBoardNavigateHandler}
                  onMouseEnter={() => setHoveredButton('primary')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl px-8 py-4 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center"
                >
                  Manage Links
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredButton === 'primary' ? 'translate-x-1' : ''}`} />
                </button>
                
                <button
                  onClick={dashBoardNavigateHandler}
                  onMouseEnter={() => setHoveredButton('secondary')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="group bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-blue-300 rounded-2xl px-8 py-4 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center"
                >
                  Create Short Link
                  <Link2 className={`w-5 h-5 transition-transform duration-300 ${hoveredButton === 'secondary' ? 'rotate-12' : ''}`} />
                </button>
              </div>

              {/* Stats */}
              <div 
                className="grid grid-cols-3 gap-8 py-8 border-t border-gray-200"
                style={{animation: 'fadeInUp 0.8s ease-out 1s both'}}
              >
                <StatCard number="10M+" label="Links Created" delay={1.2} />
                <StatCard number="99.9%" label="Uptime" delay={1.4} />
                <StatCard number="150+" label="Countries" delay={1.6} />
              </div>
            </div>
            
            <div className="flex-1 flex justify-center w-full relative">
              <div 
                className="relative floating"
                style={{animation: 'fadeInUp 0.8s ease-out 1s both'}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
                <img
                  className="relative sm:w-[500px] w-[400px] object-cover rounded-3xl shadow-2xl border border-white/20"
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Analytics Dashboard"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">98% Success Rate</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-semibold text-gray-700">+47% This Month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="sm:pt-20 pt-12 text-center">
            <p 
              className="text-gray-800 font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl mb-4"
              style={{animation: 'fadeInUp 0.8s ease-out 0.2s both'}}
            >
              Trusted by individuals and teams at the{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                world's best companies
              </span>
            </p>
            <p 
              className="text-gray-600 mb-12"
              style={{animation: 'fadeInUp 0.8s ease-out 0.4s both'}}
            >
              Join thousands of professionals who rely on LinkMetrics for their URL management needs
            </p>
          </div>

          {/* Features Grid */}
          <div className="pb-20 grid lg:gap-8 gap-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div 
            className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-center mb-20 relative overflow-hidden"
            style={{animation: 'fadeInUp 0.8s ease-out 0.2s both'}}
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join millions of users who trust LinkMetrics for their URL shortening needs. 
                Start creating better links today.
              </p>
              <button
                onClick={dashBoardNavigateHandler}
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;