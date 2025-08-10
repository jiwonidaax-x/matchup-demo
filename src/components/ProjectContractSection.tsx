export default function ProjectContractSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-600 mb-4 animate-fade-in">
            프로젝트 계약
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-slide-up">
            머리아픈 계약, 일관된 계약서 템플릿으로 쉽게
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contract Template */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              매치업에서 제공하는 계약서 템플릿으로 일관성 있는 계약서를 쉽게
              작성하세요
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                계약서 템플릿을 수동으로 채우거나 제안서를 기반으로 자동으로
                작성할 수 있습니다.
              </p>
              <p>프로젝트 작업 범위를 명확히 작성해야 합니다.</p>
            </div>

            {/* Contract Card */}
            <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-gray-800">프로젝트 계약서</h4>
                  <p className="text-sm text-gray-600">2024년 1월 15일</p>
                </div>
                <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full animate-pulse">
                  완료
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 hover:bg-gray-100 transition-colors duration-200 rounded px-2">
                  <span className="text-gray-600">프로젝트명:</span>
                  <span className="text-gray-800">UI/UX 디자인 프로젝트</span>
                </div>
                <div className="flex justify-between py-2 hover:bg-gray-100 transition-colors duration-200 rounded px-2">
                  <span className="text-gray-600">계약금액:</span>
                  <span className="text-gray-800">2,000,000원</span>
                </div>
                <div className="flex justify-between py-2 hover:bg-gray-100 transition-colors duration-200 rounded px-2">
                  <span className="text-gray-600">계약기간:</span>
                  <span className="text-gray-800">3개월</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Escrow */}
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              머니머니해도 계약은 안전해야죠 에스크로를 이용해 안전하게
              거래하세요
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                계약 대금을 에스크로에 안전하게 예치해두었다가 작업물 확인 후
                전문가에게 지급됩니다.
              </p>
            </div>

            {/* Escrow Process */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">계약금 예치</h4>
                  <p className="text-sm text-gray-600">
                    안전한 에스크로 계좌에 예치
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">작업 진행</h4>
                  <p className="text-sm text-gray-600">프리랜서가 작업 진행</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">작업물 확인</h4>
                  <p className="text-sm text-gray-600">의뢰인이 작업물 검토</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">대금 지급</h4>
                  <p className="text-sm text-gray-600">
                    확인 후 프리랜서에게 지급
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
