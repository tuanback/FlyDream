import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { images } from "../resources";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            brand: "FlyDream",
            home: "Home",
            about: "About",
            services: "Services",
            countries: "Countries",
            contact: "Contact",
            getStarted: "Get Started",
          },
          contact: {
            phone: "0971 199 368",
            email: "flydream.company@gmail.com",
          },
          login: {
            student: "Student Login",
            partner: "Partner Login",
          },
          hero: {
            slides: [
              {
                title: "Study in Top Universities",
                description:
                  "Access world-class education at prestigious institutions. Let us guide you through the admission process.",
                image: images.hero.slide2,
              },
              {
                title: "Your Success is Our Priority",
                description:
                  "Join thousands of successful students who achieved their dreams with our support.",
                image: images.hero.slide3,
              },
            ],
            getStarted: "Get Started",
            learnMore: "Learn More",
          },
          stats: {
            studentsPlaced: "Students Placed",
            partnerUniversities: "Partner Universities",
            countries: "Countries",
            yearsExperience: "Years Experience",
          },
          services: {
            title: "Our Services",
            description:
              "We provide comprehensive education consulting services to help you achieve your international education goals.",
            courseSelection: {
              title: "Course Selection",
              description:
                "Expert guidance in choosing the right course and university aligned with your career goals.",
            },
            visaAssistance: {
              title: "Visa Assistance",
              description:
                "Complete support for student visa applications and documentation requirements.",
            },
            testPrep: {
              title: "Test Preparation",
              description:
                "Comprehensive coaching for IELTS, TOEFL, GRE, and other required tests.",
            },
            careerGuidance: {
              title: "Career Guidance",
              description:
                "Professional counseling to help you make informed decisions about your future.",
            },
          },
          countries: {
            title: "Study Destinations",
            description:
              "Explore educational opportunities in top destinations around the world.",
            exploreUniversities: "Explore universities",
          },
          cta: {
            title: "Ready to Start Your Journey?",
            description:
              "Book a free consultation with our education experts and take the first step towards your international education goals.",
            button: "Schedule Consultation",
          },
          footer: {
            description:
              "Your trusted partner in international education consulting since 2000.",
            quickLinks: "Quick Links",
            studyDestinations: "Study Destinations",
            contactUs: "Contact Us",
            phone: "0971 199 368",
            email: "flydream.company@gmail.com",
            address:
              "B01.L07 An Vượng Villa, khu đô thị mới Dương Nội, quận Hà Đông, Hà Nội",
            rights: "All rights reserved.",
            aboutUs: "About Us",
            services: "Services",
            countries: "Countries",
            contact: "Contact",
            usa: "USA",
            uk: "UK",
            canada: "Canada",
            australia: "Australia",
          },
          successStories: {
            title: "Success Stories",
            stories: [
              {
                image: images.successStories.story1,
                name: "Vaibhavee Modi",
                institution: "Confederation College, Canada",
                testimonial:
                  "Choosing FlyDream was a game changer when I decided to study abroad. The staff and my counselor were super friendly and every step became seamless.",
              },
              {
                image: images.successStories.story2,
                name: "Sarah Thompson",
                institution: "University of Melbourne, Australia",
                testimonial:
                  "The guidance I received helped me secure a scholarship at my dream university. Their test preparation programs were excellent!",
              },
              {
                image: images.successStories.story3,
                name: "James Chen",
                institution: "University of Toronto, Canada",
                testimonial:
                  "From visa application to accommodation arrangements, FlyDream made my study abroad journey smooth and stress-free.",
              },
            ],
          },
        },
      },
      ko: {
        translation: {
          nav: {
            brand: "플라이드림",
            home: "홈",
            about: "소개",
            services: "서비스",
            countries: "국가",
            contact: "연락처",
            getStarted: "시작하기",
          },
          contact: {
            phone: "0971 199 368",
            email: "flydream.company@gmail.com",
          },
          login: {
            student: "학생 로그인",
            partner: "파트너 로그인",
          },
          hero: {
            slides: [
              {
                title: "상위 대학에서 공부하기",
                description:
                  "명문 기관에서 세계적 수준의 교육을 받으세요. 입학 과정을 안내해 드립니다.",
                image: images.hero.slide2,
              },
              {
                title: "당신의 성공이 우리의 우선입니다",
                description:
                  "우리의 지원으로 꿈을 이룬 수천 명의 성공적인 학생들과 함께하세요.",
                image: images.hero.slide3,
              },
            ],
            getStarted: "시작하기",
            learnMore: "더 알아보기",
          },
          stats: {
            studentsPlaced: "학생 배치",
            partnerUniversities: "협력 대학",
            countries: "국가",
            yearsExperience: "연간 경험",
          },
          services: {
            title: "우리의 서비스",
            description:
              "국제 교육 목표 달성을 위한 종합적인 교육 컨설팅 서비스를 제공합니다.",
            courseSelection: {
              title: "과정 선택",
              description:
                "진로 목표에 맞는 적절한 과정과 대학을 선택하는 전문 가이드",
            },
            visaAssistance: {
              title: "비자 지원",
              description: "학생 비자 신청 및 서류 요건에 대한 전체 지원",
            },
            testPrep: {
              title: "시험 준비",
              description: "IELTS, TOEFL, GRE 등 필수 시험을 위한 종합 코칭",
            },
            careerGuidance: {
              title: "진로 상담",
              description: "미래에 대한 현명한 결정을 내리도록 돕는 전문 상담",
            },
          },
          countries: {
            title: "유학 목적지",
            description: "전 세계 상위 목적지의 교육 기회를 탐색하세요.",
            exploreUniversities: "대학교 탐색하기",
          },
          cta: {
            title: "여정을 시작할 준비가 되셨나요?",
            description:
              "교육 전문가와의 무료 상담을 예약하고 국제 교육 목표를 향한 첫 걸음을 내딛으세요.",
            button: "상담 예약하기",
          },
          footer: {
            description:
              "2000년부터 함께해온 신뢰할 수 있는 국제 교육 컨설팅 파트너",
            quickLinks: "빠른 링크",
            studyDestinations: "유학 목적지",
            contactUs: "연락처",
            phone: "0971 199 368",
            email: "flydream.company@gmail.com",
            address:
              "B01.L07 An Vượng Villa, khu đô thị mới Dương Nội, quận Hà Đông, Hà Nội",
            rights: "모든 권리 보유",
            usa: "미국",
            uk: "영국",
            canada: "캐나다",
            australia: "호주",
            aboutUs: "회사 소개",
            services: "서비스",
            countries: "국가",
            contact: "연락처",
          },
          successStories: {
            title: "성공 사례",
            stories: [
              {
                image: images.successStories.story1,
                name: "배현정",
                institution: "컨페더레이션 대학, 캐나다",
                testimonial:
                  "유학을 결정했을 때 FlyDream를 선택한 것은 게임체인저였습니다. 직원들과 상담사가 매우 친절했고 모든 단계가 순조롭게 진행되었습니다.",
              },
              {
                image: images.successStories.story2,
                name: "김지원",
                institution: "멜버른 대학교, 호주",
                testimonial:
                  "받은 지도 덕분에 꿈꾸던 대학에서 장학금을 받을 수 있었습니다. 시험 준비 프로그램도 훌륭했어요!",
              },
              {
                image: images.successStories.story3,
                name: "이진호",
                institution: "토론토 대학교, 캐나다",
                testimonial:
                  "비자 신청부터 숙소 준비까지, FlyDream는 제 유학 여정을 순조롭고 스트레스 없게 만들어주었습니다.",
              },
            ],
          },
        },
      },
      vi: {
        translation: {
          nav: {
            brand: "FlyDream",
            home: "Trang chủ",
            about: "Giới thiệu",
            services: "Dịch vụ",
            countries: "Quốc gia",
            contact: "Liên hệ",
            getStarted: "Bắt đầu",
          },
          contact: {
            phone: "0971 199 368",
            email: "flydream.company@gmail.com",
          },
          login: {
            student: "Đăng nhập học sinh",
            partner: "Đăng nhập đối tác",
          },
          hero: {
            slides: [
              {
                title: "Học tại các trường đại học hàng đầu",
                description:
                  "Tiếp cận giáo dục đẳng cấp thế giới tại các tổ chức danh tiếng. Hãy để chúng tôi hướng dẫn bạn qua quá trình nhập học.",
                image: images.hero.slide1,
              },
              {
                title: "Thành công của bạn là ưu tiên của chúng tôi",
                description:
                  "Tham gia cùng hàng ngàn sinh viên thành công đã đạt được ước mơ của họ với sự hỗ trợ của chúng tôi.",
                image: images.hero.slide3,
              },
            ],
            getStarted: "Bắt đầu",
            learnMore: "Tìm hiểu thêm",
          },
          stats: {
            studentsPlaced: "Học sinh đã được nhận",
            partnerUniversities: "Trường đại học đối tác",
            countries: "Quốc gia",
            yearsExperience: "Năm kinh nghiệm",
          },
          services: {
            title: "Dịch vụ của chúng tôi",
            description:
              "Chúng tôi cung cấp dịch vụ tư vấn giáo dục toàn diện để giúp bạn đạt được mục tiêu giáo dục quốc tế.",
            courseSelection: {
              title: "Lựa chọn khóa học",
              description:
                "Hướng dẫn chuyên môn trong việc chọn khóa học và trường đại học phù hợp với mục tiêu nghề nghiệp.",
            },
            visaAssistance: {
              title: "Hỗ trợ visa",
              description:
                "Hỗ trợ đầy đủ cho đơn xin visa du học và các yêu cầu hồ sơ.",
            },
            testPrep: {
              title: "Luyện thi",
              description:
                "Đào tạo toàn diện cho IELTS, TOEFL, GRE và các bài kiểm tra cần thiết khác.",
            },
            careerGuidance: {
              title: "Tư vấn nghề nghiệp",
              description:
                "Tư vấn chuyên nghiệp giúp bạn đưa ra quyết định đúng đắn về tương lai.",
            },
          },
          countries: {
            title: "Điểm đến du học",
            description:
              "Khám phá cơ hội giáo dục tại các điểm đến hàng đầu trên thế giới.",
            exploreUniversities: "Khám phá các trường đại học",
          },
          cta: {
            title: "Bạn đã sẵn sàng bắt đầu hành trình?",
            description:
              "Đặt lịch tư vấn miễn phí với chuyên gia giáo dục và thực hiện bước đầu tiên hướng tới mục tiêu giáo dục quốc tế của bạn.",
            button: "Đặt lịch tư vấn",
          },
          footer: {
            description:
              "Đối tác tư vấn giáo dục quốc tế đáng tin cậy của bạn từ năm 2000.",
            quickLinks: "Liên kết nhanh",
            studyDestinations: "Điểm đến du học",
            contactUs: "Liên hệ",
            phone: "0971 199 368",
            email: "flydream.company@gmail.com",
            address:
              "B01.L07 An Vượng Villa, khu đô thị mới Dương Nội, quận Hà Đông, Hà Nội",
            rights: "Đã đăng ký bản quyền",
            usa: "Hoa Kỳ",
            uk: "Anh",
            canada: "Canada",
            australia: "Úc",
            aboutUs: "Giới thiệu",
            services: "Dịch vụ",
            countries: "Quốc gia",
            contact: "Liên hệ",
          },
          successStories: {
            title: "Câu chuyện thành công",
            stories: [
              {
                image: images.successStories.story1,
                name: "Nguyễn Thị Minh",
                institution: "Đại học Confederation, Canada",
                testimonial:
                  "Chọn FlyDream là bước ngoặt khi tôi quyết định du học. Nhân viên và cố vấn rất thân thiện và mọi bước đều trở nên suôn sẻ.",
              },
              {
                image: images.successStories.story2,
                name: "Trần Văn Nam",
                institution: "Đại học Melbourne, Úc",
                testimonial:
                  "Sự hướng dẫn tôi nhận được đã giúp tôi đạt học bổng tại trường đại học mơ ước. Chương trình luyện thi của họ thật xuất sắc!",
              },
              {
                image: images.successStories.story3,
                name: "Lê Hoàng Long",
                institution: "Đại học Toronto, Canada",
                testimonial:
                  "Từ đơn xin visa đến sắp xếp chỗ ở, FlyDream đã giúp hành trình du học của tôi suôn sẻ và không có áp lực.",
              },
            ],
          },
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
