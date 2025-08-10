"use client";

import { useState } from "react";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"freelancer" | "client">(
    "freelancer"
  );

  const freelancerPlans = [
    {
      name: "Free",
      price: "무료",
      description: "개인 프리랜서를 위한 기본 플랜",
      features: [
        "월 3건 카드 제출",
        "기본 스케줄 도구",
        "15개 즐겨찾기 작업",
        "기본 지원",
      ],
      cta: "무료 시작",
      popular: false,
    },
    {
      name: "Pro",
      price: "₩39,900",
      period: "/월",
      description: "성장하는 프리랜서를 위한 프로 플랜",
      features: [
        "월 15건 카드 제출",
        "고급 스케줄 + 알림",
        "25개 즐겨찾기 작업",
        "우선 지원",
        "수수료 할인 (13%)",
      ],
      cta: "Pro 시작하기",
      popular: true,
    },
    {
      name: "Premium",
      price: "₩59,900",
      period: "/월",
      description: "전문가를 위한 프리미엄 플랜",
      features: [
        "무제한 카드 제출",
        "고급 스케줄 + 알림",
        "45개 즐겨찾기 작업",
        "24/7 우선 지원",
        "최고 수수료 할인 (12%)",
        "AI 매칭 우선순위",
      ],
      cta: "Premium 시작하기",
      popular: false,
    },
  ];

  const clientPlans = [
    {
      name: "Free",
      price: "무료",
      description: "소규모 프로젝트를 위한 기본 플랜",
      features: [
        "게시물당 최대 10명 채용",
        "월 3개 게시물",
        "15개 저장된 명함",
        "기본 지원",
      ],
      cta: "무료 시작",
      popular: false,
    },
    {
      name: "Pro",
      price: "₩49,900",
      period: "/월",
      description: "성장하는 비즈니스를 위한 프로 플랜",
      features: [
        "게시물당 최대 25명 채용",
        "월 5개 게시물",
        "35개 저장된 명함",
        "우선 지원",
        "수수료 할인 (4.5%)",
      ],
      cta: "Pro 시작하기",
      popular: true,
    },
    {
      name: "Premium",
      price: "₩69,900",
      period: "/월",
      description: "대규모 프로젝트를 위한 프리미엄 플랜",
      features: [
        "게시물당 최대 50명 채용",
        "월 10개 게시물",
        "55개 저장된 명함",
        "24/7 우선 지원",
        "최고 수수료 할인 (4%)",
        "AI 추천 + 광고 배치",
      ],
      cta: "Premium 시작하기",
      popular: false,
    },
  ];

  const currentPlans =
    activeTab === "freelancer" ? freelancerPlans : clientPlans;

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            합리적인 요금제
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            당신의 필요에 맞는 최적의 플랜을 선택하세요
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex bg-white rounded-xl p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("freelancer")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "freelancer"
                  ? "bg-teal-500 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              프리랜서
            </button>
            <button
              onClick={() => setActiveTab("client")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "client"
                  ? "bg-teal-500 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              클라이언트
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.popular
                  ? "border-teal-500 shadow-xl scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    인기
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              수수료 구조
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  프리랜서 수수료
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>~₩1M</span>
                    <span>Free: 14% | Pro: 13% | Premium: 12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>₩1M~₩5M</span>
                    <span>Free: 8.5% | Pro: 7.5% | Premium: 6.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>₩5M+</span>
                    <span>Free: 4% | Pro: 3.8% | Premium: 3.4%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  클라이언트 수수료
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>~₩5M</span>
                    <span>Free: 5% | Pro: 4.5% | Premium: 4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>₩5M~₩10M</span>
                    <span>Free: 4% | Pro: 3.5% | Premium: 3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>₩10M+</span>
                    <span>Free: 3% | Pro: 2.5% | Premium: 2%</span>
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
