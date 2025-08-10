export default function ProjectManagementSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <div className="inline-block px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-600 mb-4 animate-fade-in">
              프로젝트 관리
            </div>
            <div className="text-center">
              <h2
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                계약한 프로젝트 어떻게 진행되는지 체크는 필수죠
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Content */}
            <div className="animate-slide-up">
              <div
                className="space-y-6 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div>
                  <h3 className="text-lg text-gray-600 mb-2">작업 상태 확인</h3>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    프로젝트의 진행 상황을 한눈에
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    프로젝트 진행 상황을 일정 관리 페이지에서 한눈에 확인할 수
                    있습니다. 프로젝트 기간 내에 체크 포인트를 지정하여
                    프리랜서로부터 진행 상황을 확인할 수 있어요.
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div
                className="grid grid-cols-3 gap-4 mt-8 animate-slide-up"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                  <div className="text-2xl font-bold text-gray-800 transition-all duration-300 hover:text-teal-600">
                    6
                  </div>
                  <div className="text-sm text-gray-600">업로드된 프로젝트</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                  <div className="text-2xl font-bold text-gray-800 transition-all duration-300 hover:text-teal-600">
                    3
                  </div>
                  <div className="text-sm text-gray-600">매칭된 프로젝트</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                  <div className="text-2xl font-bold text-gray-800 transition-all duration-300 hover:text-teal-600">
                    1
                  </div>
                  <div className="text-sm text-gray-600">
                    마감 임박 프로젝트
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <div
                className="mt-8 bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="text-sm font-medium text-gray-700 mb-4">
                  2024년 1월
                </div>
                <div className="grid grid-cols-7 gap-1 text-xs">
                  {/* Calendar days */}
                  <div className="text-gray-400 p-2 text-center">29</div>
                  <div className="text-gray-400 p-2 text-center">30</div>
                  <div className="text-gray-400 p-2 text-center">31</div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    1
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    2
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    3
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    4
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    5
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    6
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    7
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    8
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    9
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    10
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    11
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    12
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    13
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    14
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    15
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    16
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    17
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    18
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    19
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    20
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    21
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    22
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    23
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    24
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    25
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    26
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    27
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    28
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    29
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    30
                  </div>
                  <div className="p-2 text-center hover:bg-gray-100 rounded transition-colors duration-200">
                    31
                  </div>
                </div>

                {/* Project bars */}
                <div className="mt-4 space-y-2">
                  <div className="h-2 bg-blue-200 rounded-full relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-blue-500 rounded-full animate-pulse transition-all duration-1000 ease-out"
                      style={{ width: "20%", left: "15%" }}
                    ></div>
                  </div>
                  <div className="h-2 bg-orange-200 rounded-full relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-orange-500 rounded-full animate-pulse transition-all duration-1000 ease-out"
                      style={{ width: "15%", left: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Chat Interface */}
            <div
              className="relative animate-slide-up"
              style={{ animationDelay: "1s" }}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 max-w-sm mx-auto hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Chat Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white font-bold text-sm">김</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">김프리랜서</h4>
                    <p className="text-xs text-gray-500">온라인</p>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {/* Message 1 */}
                  <div
                    className="flex items-end space-x-2 animate-fade-in"
                    style={{ animationDelay: "1.2s" }}
                  >
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">김</span>
                    </div>
                    <div className="bg-teal-500 text-white p-3 rounded-2xl rounded-bl-md max-w-xs">
                      <p className="text-sm">
                        안녕하세요! 프로젝트 진행상황 확인해주세요
                      </p>
                    </div>
                  </div>

                  {/* Message 2 */}
                  <div
                    className="flex items-end space-x-2 justify-end animate-fade-in"
                    style={{ animationDelay: "1.4s" }}
                  >
                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl rounded-br-md max-w-xs">
                      <p className="text-sm">
                        네, 확인했습니다. 잘 진행되고 있네요!
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">나</span>
                    </div>
                  </div>

                  {/* Message 3 */}
                  <div
                    className="flex items-end space-x-2 animate-fade-in"
                    style={{ animationDelay: "1.6s" }}
                  >
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">김</span>
                    </div>
                    <div className="bg-teal-500 text-white p-3 rounded-2xl rounded-bl-md max-w-xs">
                      <p className="text-sm">다음 주까지 완료 예정입니다</p>
                    </div>
                  </div>

                  {/* Message 4 */}
                  <div
                    className="flex items-end space-x-2 justify-end animate-fade-in"
                    style={{ animationDelay: "1.8s" }}
                  >
                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl rounded-br-md max-w-xs">
                      <p className="text-sm">좋습니다! 기대하고 있겠습니다</p>
                    </div>
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">나</span>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div
                    className="flex items-end space-x-2 animate-fade-in"
                    style={{ animationDelay: "2s" }}
                  >
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">김</span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="메시지를 입력하세요..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    />
                    <button className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center hover:bg-teal-600 hover:scale-110 transition-all duration-300 transform">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
