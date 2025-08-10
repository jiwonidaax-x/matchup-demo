export default function FreelancerFeaturesSection() {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container-custom">
        {/* First Feature Block */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gray-700/50 rounded-full text-sm text-gray-300 mb-4">
              3D 디지털 명함
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              마음에 드는 공고가 있나요?
            </h2>
            <p className="text-2xl font-bold text-gray-300">
              3D 디지털 명함을 보내보세요
            </p>
          </div>
        </div>

        {/* Second Feature Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Text */}
          <div>
            <div className="inline-block px-4 py-2 bg-gray-700/50 rounded-full text-sm text-gray-300 mb-6">
              나만의 디지털 명함
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              커스터마이징 가능한 3D 디지털 명함을 보내세요
            </h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>마음에 드는 공고에는</p>
              <p>마음에 드는 명함을 보내야죠</p>
              <p>3D 디지털 명함을 디자인하고 보내보세요</p>
            </div>
          </div>

          {/* Right Side - Digital Card Visual */}
          <div className="relative">
            <div className="relative w-full h-96">
              {/* Digital Business Card */}
              <div className="absolute inset-0 glass-card rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">홍길동</h4>
                    <p className="text-gray-300">개발자</p>
                  </div>
                  <div className="text-sm font-bold">MATCH UP</div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <span className="text-gray-400 w-16">Phone</span>
                    <span>010-1234-5678</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 w-16">Email</span>
                    <span>matchup@matchup.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 w-16">Instagram</span>
                    <span>@matchup</span>
                  </div>
                </div>
              </div>

              {/* Background Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-teal-400/30 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-400/30 rounded-full blur-xl"></div>

              {/* 3D Hand */}
              <div className="absolute -bottom-8 -right-8 w-24 h-32">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-200 to-amber-300 rounded-full transform rotate-45"></div>
                  <div className="absolute inset-2 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Feature Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - QR Code Visual */}
          <div className="relative">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 glass-card rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-bold mb-4">MATCH UP</div>
                  <div className="w-48 h-48 bg-white rounded-lg p-4 mx-auto">
                    <div className="w-full h-full bg-black rounded flex items-center justify-center">
                      <div className="grid grid-cols-8 gap-1">
                        {Array.from({ length: 64 }, (_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 ${
                              Math.random() > 0.5
                                ? "bg-white"
                                : "bg-transparent"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div>
            <div className="inline-block px-4 py-2 bg-gray-700/50 rounded-full text-sm text-gray-300 mb-6">
              작업물을 보여주는 시간 단 2초
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              내 작업물들을 QR코드로 단 2초만에 보여주세요
            </h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>명함만 주고 받아도 내 작업을 공유할 수 있어요</p>
              <p>개인 작업 사이트만 연결해두면 돼요</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
