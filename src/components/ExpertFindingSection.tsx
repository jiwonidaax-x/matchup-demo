export default function ExpertFindingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-slide-up">
            전문가의 지원서, 견적서, 명함을 받아서 가장 프로젝트에 적합한
            전문가를 찾아보세요
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            전문가들의 지원서, 견적서, 명함을 검토하여 프로젝트에 가장 적합한
            전문가를 찾아보세요. 마음에 드는 전문가를 찾으면 프로젝트 제안을
            시작할 수 있습니다.
          </p>
        </div>

        {/* Expert Application Card */}
        <div
          className="max-w-2xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                UI/UX 디자이너
              </h3>
              <p className="text-gray-600 leading-relaxed">
                오프라인 매장에서 온라인으로 진출하는 의류 쇼핑물을 위한 UI/UX
                디자이너분을 모집합니다.
              </p>
            </div>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between items-center py-2 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 rounded px-2">
                <span className="text-gray-600">예산:</span>
                <span className="text-gray-800 font-medium">-200 만원</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 rounded px-2">
                <span className="text-gray-600">기간:</span>
                <span className="text-gray-800 font-medium">3개월~6개월</span>
              </div>
              <div className="flex justify-between items-center py-2 hover:bg-gray-50 transition-colors duration-200 rounded px-2">
                <span className="text-gray-600">조건:</span>
                <span className="text-gray-800 font-medium">경력 3년 이상</span>
              </div>
            </div>

            {/* Application Status */}
            <div className="mb-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">지원 현황</h4>
                  <p className="text-sm text-gray-600">
                    3명의 전문가가 지원했습니다
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-teal-600 animate-pulse">
                    3
                  </div>
                  <div className="text-xs text-gray-500">지원자</div>
                </div>
              </div>

              {/* Expert profiles */}
              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">김</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-800">김디자이너</h5>
                    <p className="text-xs text-gray-600">경력 5년 • 평점 4.8</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-teal-600">
                      180만원
                    </div>
                    <div className="text-xs text-gray-500">견적</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">이</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-800">이디자이너</h5>
                    <p className="text-xs text-gray-600">경력 3년 • 평점 4.6</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-teal-600">
                      200만원
                    </div>
                    <div className="text-xs text-gray-500">견적</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">박</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-800">박디자이너</h5>
                    <p className="text-xs text-gray-600">경력 7년 • 평점 4.9</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-teal-600">
                      220만원
                    </div>
                    <div className="text-xs text-gray-500">견적</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Centered Button */}
            <div className="text-center">
              <button className="btn-small bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                수정
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
