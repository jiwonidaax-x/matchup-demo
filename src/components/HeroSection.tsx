import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - 3D Cards Visual */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main Card */}
              <div className="absolute top-0 left-0 w-80 h-96 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl transform rotate-6 animate-float">
                <div className="p-8">
                  <div className="text-2xl font-bold text-white mb-2">
                    Match Up
                  </div>
                  <div className="text-4xl font-black text-white">매치업</div>
                </div>
              </div>

              {/* Secondary Card */}
              <div className="absolute top-8 left-16 w-64 h-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl transform -rotate-3 animate-float-delayed">
                <div className="p-6">
                  <div className="flex flex-col space-y-2">
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Background Circle */}
              <div className="absolute top-20 right-8 w-32 h-32 bg-blue-400/30 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              원하던 작업물을
              <br />
              <span className="text-gradient">원하는 프리랜서</span>와
            </h1>

            <div className="space-y-4 mb-8">
              <p className="text-xl text-gray-600">
                원하는 프로젝트는 꼼꼼히 살펴보고 진행해야죠.
              </p>
              <p className="text-xl text-gray-600">
                공고를 등록해 여러 프리랜서의 명함을 받아보세요.
              </p>
              <p className="text-xl text-gray-600">
                프리랜서들의 작업을 살펴보고 결정하세요.
              </p>
            </div>

            {/* CTA Button */}
            <button className="btn-primary btn-large bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              출시 알림받기
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-12 h-12 bg-gray-300/20 backdrop-blur-sm rounded-full flex items-center justify-center">
        <span className="text-blue-600 font-bold text-lg">T</span>
      </div>

      {/* Freelancer Button - Small and Clean */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
        <Link href="/freelancer">
          <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
            프리랜서라면?
          </button>
        </Link>
      </div>
    </section>
  );
}
