export default function DigitalCardSection() {
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
              프로페셔널함을 이젠 온라인에서도
            </h2>
            <p className="text-2xl font-bold text-gray-300">
              프리랜서들의 3D 명함을 만나보세요
            </p>
          </div>
        </div>

        {/* Second Feature Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Text */}
          <div>
            <div className="space-y-6 text-gray-300 text-lg">
              <p className="text-2xl font-bold text-white">
                단 2초, 상대방을 알아갈 수 있는 시간
              </p>
              <p>
                마음에 드는 프리랜서인가요? 단 2초면 상대의 명함을 가져갈 수
                있어요
              </p>
              <p>
                프리랜서가 마음에 드신나요? 명함 가져가기 버튼을 누르면 단
                2초만에 명함을 가져갈 수 있어요
              </p>
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
                    <p className="text-gray-300 mb-2">개발자</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-blue-300">웹 개발자</p>
                      <p className="text-blue-300">백엔드 개발자</p>
                    </div>
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
              <div className="absolute top-10 right-10 w-20 h-20 bg-blue-400/30 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-400/30 rounded-full blur-xl"></div>

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
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              쇼핑몰의 광고같은 상세페이지는 이제 그만
            </h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <p className="text-2xl font-bold text-white mb-4">
                프리랜서의 작업물을 이제는 QR 코드로 깔끔하게
              </p>
              <p>쇼핑몰의 상품 상세페이지는 이제 그만</p>
              <p>명함의 QR코드를 통해 프리랜서의 작업물을 살펴보세요</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
