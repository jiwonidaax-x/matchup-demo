"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  Badge,
  Card,
  Input,
  Carousel,
  Checkbox,
  Radio,
  Select,
  Textarea,
  Avatar,
  Modal,
  Tooltip,
  Progress,
  Alert,
  Tabs,
  Accordion,
  Dropdown,
  Skeleton,
  SkeletonText,
  SkeletonCard,
  Switch,
  Divider,
} from "@/components/ui";

export default function ComponentsDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [alertVisible, setAlertVisible] = useState(true);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [selectValue, setSelectValue] = useState("");
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored) {
      setTheme(stored);
    } else {
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    if (typeof document !== "undefined") {
      if (next === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  };

  const tabs = [
    {
      id: "tab1",
      label: "첫 번째 탭",
      content: <div className="p-4">첫 번째 탭의 내용입니다.</div>,
    },
    {
      id: "tab2",
      label: "두 번째 탭",
      content: <div className="p-4">두 번째 탭의 내용입니다.</div>,
    },
    {
      id: "tab3",
      label: "세 번째 탭",
      content: <div className="p-4">세 번째 탭의 내용입니다.</div>,
    },
  ];

  const accordionItems = [
    {
      id: "item1",
      title: "아코디언 아이템 1",
      content: <div>첫 번째 아코디언의 내용입니다.</div>,
    },
    {
      id: "item2",
      title: "아코디언 아이템 2",
      content: <div>두 번째 아코디언의 내용입니다.</div>,
    },
    {
      id: "item3",
      title: "아코디언 아이템 3",
      content: <div>세 번째 아코디언의 내용입니다.</div>,
    },
  ];

  const dropdownItems = [
    {
      id: "edit",
      label: "편집",
      icon: "✏️",
      onClick: () => console.log("편집 클릭"),
    },
    {
      id: "delete",
      label: "삭제",
      icon: "🗑️",
      onClick: () => console.log("삭제 클릭"),
    },
    {
      id: "share",
      label: "공유",
      icon: "📤",
      onClick: () => console.log("공유 클릭"),
    },
  ];

  return (
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            <h1
              className="text-toss-display-lg font-bold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              MatchUp UI 컴포넌트 데모
            </h1>
            <p
              className="text-toss-body-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              프로젝트에서 사용할 수 있는 다양한 재사용 가능한 컴포넌트들입니다.
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="btn-secondary ml-4 whitespace-nowrap"
          >
            {theme === "dark" ? "라이트 모드" : "다크 모드"}
          </button>
        </div>

        {/* Primary Buttons */}
        <Card title="Primary Buttons">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="small">
                Small
              </Button>
              <Button variant="primary" size="default">
                Default
              </Button>
              <Button variant="primary" size="large">
                Large
              </Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
            </div>
          </div>
        </Card>

        {/* Secondary Buttons */}
        <Card title="Secondary Buttons">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="small">
                Small
              </Button>
              <Button variant="secondary" size="default">
                Default
              </Button>
              <Button variant="secondary" size="large">
                Large
              </Button>
              <Button variant="secondary" disabled>
                Disabled
              </Button>
            </div>
          </div>
        </Card>

        {/* Ghost Buttons */}
        <Card title="Ghost Buttons">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="ghost" size="small">
                Small
              </Button>
              <Button variant="ghost" size="default">
                Default
              </Button>
              <Button variant="ghost" size="large">
                Large
              </Button>
              <Button variant="ghost" disabled>
                Disabled
              </Button>
            </div>
          </div>
        </Card>

        {/* Default Cards */}
        <Card title="Default Cards">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">기본 카드</h3>
              <p className="text-text-secondary">
                호버 효과가 적용되어 있습니다.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">특징 카드</h3>
              <p className="text-text-secondary">
                더 큰 패딩과 강조된 테두리를 가집니다.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">정적 카드</h3>
              <p className="text-text-secondary">
                인터렉티브하지 않은 정적 카드입니다.
              </p>
            </div>
          </div>
        </Card>

        {/* Image Cards */}
        <Card title="Image Cards">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
                alt="Mountain Landscape"
                className="w-full h-32 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">Mountain Landscape</h3>
              <p className="text-text-secondary">아름다운 산 풍경입니다.</p>
            </div>
            <div className="card overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop"
                alt="Forest Path"
                className="w-full h-32 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">Forest Path</h3>
              <p className="text-text-secondary">햇살이 비치는 숲길입니다.</p>
            </div>
            <div className="card overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1464822759844-d150baec0134?w=400&h=200&fit=crop"
                alt="Custom Height"
                className="w-full h-32 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">Custom Height</h3>
              <p className="text-text-secondary">
                커스텀 높이를 가진 카드입니다.
              </p>
            </div>
          </div>
        </Card>

        {/* Badges */}
        <Card title="Badges">
          <div className="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </Card>

        {/* Avatar Sizes */}
        <Card title="Avatar Sizes">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <Avatar size="sm" fallback="김철수" />
              <span className="text-xs text-text-secondary">Small</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size="md" fallback="이영희" />
              <span className="text-xs text-text-secondary">Medium</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size="lg" fallback="박민수" />
              <span className="text-xs text-text-secondary">Large</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size="xl" fallback="최지영" />
              <span className="text-xs text-text-secondary">Extra Large</span>
            </div>
          </div>
        </Card>

        {/* Avatar with Images */}
        <Card title="Avatar with Images">
          <div className="flex flex-wrap items-center gap-4">
            <Avatar
              size="lg"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              fallback="김철수"
            />
            <Avatar
              size="lg"
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
              fallback="이영희"
            />
            <Avatar
              size="lg"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              fallback="박민수"
            />
          </div>
        </Card>

        {/* Progress Variants */}
        <Card title="Progress Variants">
          <div className="space-y-4">
            <Progress value={75} showLabel />
            <Progress value={45} variant="success" showLabel />
            <Progress value={90} variant="warning" showLabel />
            <Progress value={30} variant="error" showLabel />
          </div>
        </Card>

        {/* Progress Sizes */}
        <Card title="Progress Sizes">
          <div className="space-y-4">
            <Progress value={60} size="sm" />
            <Progress value={60} size="md" />
            <Progress value={60} size="lg" />
          </div>
        </Card>

        {/* Switch Sizes */}
        <Card title="Switch Sizes">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Switch
                checked={switchChecked}
                onChange={setSwitchChecked}
                size="sm"
              />
              <span className="text-xs text-text-secondary">Small</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Switch
                checked={switchChecked}
                onChange={setSwitchChecked}
                size="md"
              />
              <span className="text-xs text-text-secondary">Medium</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Switch
                checked={switchChecked}
                onChange={setSwitchChecked}
                size="lg"
              />
              <span className="text-xs text-text-secondary">Large</span>
            </div>
          </div>
        </Card>

        {/* Switch States */}
        <Card title="Switch States">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Switch checked={true} onChange={() => {}} />
              <span className="text-xs text-text-secondary">Checked</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Switch checked={false} onChange={() => {}} />
              <span className="text-xs text-text-secondary">Unchecked</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Switch checked={false} onChange={() => {}} disabled />
              <span className="text-xs text-text-secondary">Disabled</span>
            </div>
          </div>
        </Card>

        {/* Alert Types */}
        <Card title="Alert Types">
          <div className="space-y-4">
            {alertVisible && (
              <Alert
                type="info"
                title="정보 알림"
                onClose={() => setAlertVisible(false)}
              >
                이것은 정보 알림입니다. 닫기 버튼이 있습니다.
              </Alert>
            )}
            <Alert type="success" title="성공 알림">
              작업이 성공적으로 완료되었습니다.
            </Alert>
            <Alert type="warning" title="경고 알림">
              주의가 필요한 사항이 있습니다.
            </Alert>
            <Alert type="error" title="오류 알림">
              오류가 발생했습니다.
            </Alert>
          </div>
        </Card>

        {/* Alert without Title */}
        <Card title="Alert without Title">
          <div className="space-y-4">
            <Alert type="info">제목 없이 표시되는 정보 알림입니다.</Alert>
            <Alert type="success">제목 없이 표시되는 성공 알림입니다.</Alert>
          </div>
        </Card>

        {/* Default Tabs */}
        <Card title="Default Tabs">
          <Tabs tabs={tabs} />
        </Card>

        {/* Pills Tabs */}
        <Card title="Pills Tabs">
          <Tabs tabs={tabs} variant="pills" />
        </Card>

        {/* Underline Tabs */}
        <Card title="Underline Tabs">
          <Tabs tabs={tabs} variant="underline" />
        </Card>

        {/* Basic Accordion */}
        <Card title="Basic Accordion">
          <Accordion items={accordionItems} />
        </Card>

        {/* Multiple Accordion */}
        <Card title="Multiple Accordion">
          <Accordion items={accordionItems} allowMultiple />
        </Card>

        {/* Accordion with Default Open */}
        <Card title="Accordion with Default Open">
          <Accordion items={accordionItems} defaultOpen={["item1"]} />
        </Card>

        {/* Basic Dropdown */}
        <Card title="Basic Dropdown">
          <Dropdown
            trigger={<Button variant="secondary">메뉴 열기</Button>}
            items={dropdownItems}
          />
        </Card>

        {/* Dropdown with Icons */}
        <Card title="Dropdown with Icons">
          <Dropdown
            trigger={<Button variant="ghost">⚙️ 설정</Button>}
            items={[
              {
                id: "profile",
                label: "프로필 설정",
                icon: "👤",
                onClick: () => console.log("프로필 설정"),
              },
              {
                id: "notifications",
                label: "알림 설정",
                icon: "🔔",
                onClick: () => console.log("알림 설정"),
              },
              {
                id: "theme",
                label: "테마 변경",
                icon: "🎨",
                onClick: () => console.log("테마 변경"),
              },
            ]}
          />
        </Card>

        {/* Dropdown Positions */}
        <Card title="Dropdown Positions">
          <div className="flex gap-4">
            <Dropdown
              trigger={<Button variant="secondary">Top</Button>}
              items={dropdownItems}
              placement="top"
            />
            <Dropdown
              trigger={<Button variant="secondary">Bottom</Button>}
              items={dropdownItems}
              placement="bottom"
            />
            <Dropdown
              trigger={<Button variant="secondary">Left</Button>}
              items={dropdownItems}
              placement="left"
            />
            <Dropdown
              trigger={<Button variant="secondary">Right</Button>}
              items={dropdownItems}
              placement="right"
            />
          </div>
        </Card>

        {/* Basic Modal */}
        <Card title="Basic Modal">
          <Button onClick={() => setIsModalOpen(true)}>모달 열기</Button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="모달 제목"
          >
            <p>모달 내용입니다.</p>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                취소
              </Button>
              <Button onClick={() => setIsModalOpen(false)}>확인</Button>
            </div>
          </Modal>
        </Card>

        {/* Modal Sizes */}
        <Card title="Modal Sizes">
          <div className="flex gap-4">
            <Button onClick={() => setIsModalOpen(true)}>Small Modal</Button>
            <Button onClick={() => setIsModalOpen(true)}>Medium Modal</Button>
            <Button onClick={() => setIsModalOpen(true)}>Large Modal</Button>
          </div>
        </Card>

        {/* Modal without Title */}
        <Card title="Modal without Title">
          <Button onClick={() => setIsModalOpen(true)}>제목 없는 모달</Button>
        </Card>

        {/* Tooltip Positions */}
        <Card title="Tooltip Positions">
          <div className="flex flex-wrap gap-4">
            <Tooltip content="위쪽 툴팁">
              <Button>위쪽 툴팁</Button>
            </Tooltip>
            <Tooltip content="아래쪽 툴팁" position="bottom">
              <Button>아래쪽 툴팁</Button>
            </Tooltip>
            <Tooltip content="왼쪽 툴팁" position="left">
              <Button>왼쪽 툴팁</Button>
            </Tooltip>
            <Tooltip content="오른쪽 툴팁" position="right">
              <Button>오른쪽 툴팁</Button>
            </Tooltip>
          </div>
        </Card>

        {/* Tooltip with Delay */}
        <Card title="Tooltip with Delay">
          <div className="flex flex-wrap gap-4">
            <Tooltip content="즉시 표시" delay={0}>
              <Button>즉시 표시</Button>
            </Tooltip>
            <Tooltip content="1초 후 표시" delay={1000}>
              <Button>1초 후 표시</Button>
            </Tooltip>
            <Tooltip content="2초 후 표시" delay={2000}>
              <Button>2초 후 표시</Button>
            </Tooltip>
          </div>
        </Card>

        {/* Tooltip on Different Elements */}
        <Card title="Tooltip on Different Elements">
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip content="버튼 툴팁">
              <Button>버튼</Button>
            </Tooltip>
            <Tooltip content="링크 툴팁">
              <a href="#" className="text-accent hover:underline">
                링크
              </a>
            </Tooltip>
            <Tooltip content="아이콘 툴팁">
              <span className="text-2xl cursor-pointer">ℹ️</span>
            </Tooltip>
            <Tooltip content="텍스트 툴팁">
              <span className="text-text-secondary cursor-help">도움말</span>
            </Tooltip>
          </div>
        </Card>

        {/* Skeleton Variants */}
        <Card title="Skeleton Variants">
          <div className="space-y-4">
            <Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={200} height={100} />
          </div>
        </Card>

        {/* Skeleton Text */}
        <Card title="Skeleton Text">
          <div className="space-y-4">
            <SkeletonText lines={1} />
            <SkeletonText lines={3} />
            <SkeletonText lines={5} />
          </div>
        </Card>

        {/* Skeleton Card */}
        <Card title="Skeleton Card">
          <SkeletonCard />
        </Card>

        {/* Skeleton Loading State */}
        <Card title="Skeleton Loading State">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Skeleton variant="circular" width={40} height={40} />
              <div className="flex-1">
                <Skeleton variant="text" width="60%" className="mb-2" />
                <Skeleton variant="text" width="40%" />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Skeleton variant="circular" width={40} height={40} />
              <div className="flex-1">
                <Skeleton variant="text" width="80%" className="mb-2" />
                <Skeleton variant="text" width="50%" />
              </div>
            </div>
          </div>
        </Card>

        {/* Divider Variants */}
        <Card title="Divider Variants">
          <div className="space-y-4">
            <p>위쪽 내용</p>
            <Divider />
            <p>아래쪽 내용</p>
            <Divider variant="dashed" />
            <p>점선 구분선</p>
            <Divider variant="dotted" />
            <p>점 구분선</p>
          </div>
        </Card>

        {/* Divider Sizes */}
        <Card title="Divider Sizes">
          <div className="space-y-4">
            <p>Small Divider</p>
            <Divider size="sm" />
            <p>Medium Divider</p>
            <Divider size="md" />
            <p>Large Divider</p>
            <Divider size="lg" />
          </div>
        </Card>

        {/* Vertical Divider */}
        <Card title="Vertical Divider">
          <div className="flex items-center gap-4">
            <span>왼쪽 내용</span>
            <Divider orientation="vertical" className="h-8" />
            <span>오른쪽 내용</span>
          </div>
        </Card>

        {/* Divider with Text */}
        <Card title="Divider with Text">
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Divider />
              </div>
              <div className="relative flex justify-center text-sm">
                <span
                  className="px-2 text-text-secondary"
                  style={{ backgroundColor: "var(--color-surface)" }}
                >
                  또는
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Basic Inputs */}
        <Card title="Basic Inputs">
          <div className="space-y-4">
            <Input placeholder="기본 입력" />
            <Input placeholder="비밀번호" type="password" />
            <Input placeholder="이메일" type="email" />
          </div>
        </Card>

        {/* Input with Labels */}
        <Card title="Input with Labels">
          <div className="space-y-4">
            <Input label="이름" placeholder="홍길동" />
            <Input
              label="이메일 주소"
              placeholder="example@email.com"
              type="email"
            />
            <Input label="전화번호" placeholder="010-1234-5678" />
          </div>
        </Card>

        {/* Input with Error */}
        <Card title="Input with Error">
          <div className="space-y-4">
            <Input placeholder="사용자명" error="최소 3자 이상" />
            <Input
              label="비밀번호"
              type="password"
              error="비밀번호가 일치하지 않습니다"
            />
          </div>
        </Card>

        {/* Checkbox */}
        <Card title="Checkbox">
          <div className="space-y-4">
            <Checkbox
              checked={checkboxChecked}
              onChange={setCheckboxChecked}
              label="이용약관에 동의합니다"
            />
            <Checkbox
              checked={true}
              onChange={() => {}}
              label="마케팅 정보 수신 동의"
            />
            <Checkbox
              checked={false}
              onChange={() => {}}
              label="비활성화된 체크박스"
              disabled
            />
          </div>
        </Card>

        {/* Checkbox Sizes */}
        <Card title="Checkbox Sizes">
          <div className="space-y-4">
            <Checkbox
              checked={checkboxChecked}
              onChange={setCheckboxChecked}
              label="Small Checkbox"
              size="sm"
            />
            <Checkbox
              checked={checkboxChecked}
              onChange={setCheckboxChecked}
              label="Medium Checkbox"
              size="md"
            />
            <Checkbox
              checked={checkboxChecked}
              onChange={setCheckboxChecked}
              label="Large Checkbox"
              size="lg"
            />
          </div>
        </Card>

        {/* Radio */}
        <Card title="Radio">
          <div className="space-y-4">
            <Radio
              checked={radioValue === "option1"}
              onChange={() => setRadioValue("option1")}
              label="옵션 1"
            />
            <Radio
              checked={radioValue === "option2"}
              onChange={() => setRadioValue("option2")}
              label="옵션 2"
            />
            <Radio
              checked={radioValue === "option3"}
              onChange={() => setRadioValue("option3")}
              label="옵션 3"
            />
            <Radio
              checked={false}
              onChange={() => {}}
              label="비활성화된 라디오"
              disabled
            />
          </div>
        </Card>

        {/* Radio Sizes */}
        <Card title="Radio Sizes">
          <div className="space-y-4">
            <Radio
              checked={radioValue === "small"}
              onChange={() => setRadioValue("small")}
              label="Small Radio"
              size="sm"
            />
            <Radio
              checked={radioValue === "medium"}
              onChange={() => setRadioValue("medium")}
              label="Medium Radio"
              size="md"
            />
            <Radio
              checked={radioValue === "large"}
              onChange={() => setRadioValue("large")}
              label="Large Radio"
              size="lg"
            />
          </div>
        </Card>

        {/* Select */}
        <Card title="Select">
          <div className="space-y-4">
            <Select
              options={[
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
                { value: "option4", label: "비활성화 옵션", disabled: true },
              ]}
              value={selectValue}
              onChange={setSelectValue}
              placeholder="옵션을 선택하세요"
            />
          </div>
        </Card>

        {/* Select Sizes */}
        <Card title="Select Sizes">
          <div className="space-y-4">
            <Select
              options={[
                { value: "small", label: "Small Option" },
                { value: "medium", label: "Medium Option" },
                { value: "large", label: "Large Option" },
              ]}
              value={selectValue}
              onChange={setSelectValue}
              placeholder="Small Select"
              size="sm"
            />
            <Select
              options={[
                { value: "small", label: "Small Option" },
                { value: "medium", label: "Medium Option" },
                { value: "large", label: "Large Option" },
              ]}
              value={selectValue}
              onChange={setSelectValue}
              placeholder="Medium Select"
              size="md"
            />
            <Select
              options={[
                { value: "small", label: "Small Option" },
                { value: "medium", label: "Medium Option" },
                { value: "large", label: "Large Option" },
              ]}
              value={selectValue}
              onChange={setSelectValue}
              placeholder="Large Select"
              size="lg"
            />
          </div>
        </Card>

        {/* Textarea */}
        <Card title="Textarea">
          <div className="space-y-4">
            <Textarea placeholder="메시지를 입력하세요..." rows={4} />
            <Textarea
              label="프로젝트 설명"
              placeholder="프로젝트에 대한 자세한 설명을 입력하세요..."
              rows={6}
            />
            <Textarea
              label="오류가 있는 텍스트 영역"
              placeholder="오류 메시지가 표시됩니다"
              error="최소 10자 이상 입력해주세요"
              rows={4}
            />
          </div>
        </Card>

        {/* Textarea Sizes */}
        <Card title="Textarea Sizes">
          <div className="space-y-4">
            <Textarea placeholder="Small Textarea" size="sm" rows={3} />
            <Textarea placeholder="Medium Textarea" size="md" rows={4} />
            <Textarea placeholder="Large Textarea" size="lg" rows={5} />
          </div>
        </Card>

        {/* Basic Carousel */}
        <Card title="Basic Carousel">
          <Carousel
            items={[
              <div className="p-8 bg-accent text-white text-center">
                슬라이드 1
              </div>,
              <div className="p-8 bg-success text-white text-center">
                슬라이드 2
              </div>,
              <div className="p-8 bg-warning text-white text-center">
                슬라이드 3
              </div>,
            ]}
          />
        </Card>

        {/* Manual Control Carousel */}
        <Card title="Manual Control Carousel">
          <Carousel
            items={[
              <div className="p-8 bg-primary text-white text-center">
                수동 제어 슬라이드 1
              </div>,
              <div className="p-8 bg-info text-white text-center">
                수동 제어 슬라이드 2
              </div>,
              <div className="p-8 bg-error text-white text-center">
                수동 제어 슬라이드 3
              </div>,
            ]}
          />
        </Card>

        {/* Image Carousel */}
        <Card title="Image Carousel">
          <Carousel
            items={[
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=300&fit=crop"
                  alt="Forest"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">
                    Forest Image
                  </h3>
                </div>
              </div>,
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop"
                  alt="Mountain"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">
                    Mountain Image
                  </h3>
                </div>
              </div>,
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1464822759844-d150baec0134?w=600&h=300&fit=crop"
                  alt="Ocean"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Ocean Image</h3>
                </div>
              </div>,
            ]}
          />
        </Card>
      </div>

      {/* Footer Message */}
      <div className="text-center mt-16 mb-8">
        <p className="text-text-tertiary text-lg font-medium">
          포인트는 그게 아니니까.
        </p>
      </div>
    </div>
  );
}
