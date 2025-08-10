export default function JobPostingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-600 mb-4 animate-fade-in">
            원하는 결과물을 위한 공고문
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-slide-up">
            프로젝트를 시작하기 전에
          </h2>
          <h3
            className="text-2xl font-bold text-gray-800 mb-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            어떤 작업이 필요하신가요?
          </h3>
          <h4
            className="text-3xl font-bold text-gray-800 mb-6 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            유능한 프리랜서를 모집해보세요
          </h4>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            원하는 결과물을 얻기 위해서는 유능한 프리랜서 모집부터 시작해야
            합니다. 최대 5개의 공고를 등록하여 예산, 기간, 조건을 명시한
            프리랜서를 모집해보세요.
          </p>
        </div>

        {/* Job Posting Card */}
        <div
          className="max-w-2xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                UI/UX 디자이너
              </h3>
              <p className="text-gray-600 leading-relaxed">
                오프라인 매장에서 온라인으로 진출하는 지류 쇼핑몰을 위한 UI/UX
                디자이너분을 모집합니다.
              </p>
            </div>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between items-center py-2 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200 rounded px-2">
                <span className="text-gray-600">예산:</span>
                <span className="text-gray-800 font-medium">~200만원</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200 rounded px-2">
                <span className="text-gray-600">기간:</span>
                <span className="text-gray-800 font-medium">3개월~6개월</span>
              </div>
              <div className="flex justify-between items-center py-2 hover:bg-gray-100 transition-colors duration-200 rounded px-2">
                <span className="text-gray-600">조건:</span>
                <span className="text-gray-800 font-medium">경력 3년 이상</span>
              </div>
            </div>

            {/* Status indicator */}
            <div className="mb-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">모집 중</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">지원자</div>
                  <div className="text-lg font-bold text-teal-600">5명</div>
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
