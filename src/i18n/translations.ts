export type Lang = "en" | "tr";

export const translations = {
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact",
            getInTouch: "Get in touch",
            available: "Available",
        },
        hero: {
            availableFor: "Available for opportunities",
            viewProjects: "View Projects",
            contactMe: "Contact me",
            scroll: "scroll",
            tagline: "Building production-grade interfaces — shipped at Amadeus, Dill (NYC), Trampax & Omreon.",
        },
        about: {
            sectionLabel: "01 — About",
            heading: "Engineering things that",
            headingAccent: "matter",
            currentlyLabel: "Currently",
            currently: [
                "4th year Computer Engineering student",
                "Exploring AI-driven UI experiences",
                "Open to frontend & full-stack roles",
            ],
            bio: [
                "I am a senior Computer Engineering student at Istanbul Kültür University (Class of 2026). As a Frontend Developer Intern at Amadeus, Trampax, Dill (New York), and Omreon Bilişim, I developed production-level systems used by real users. Utilizing Angular, React, React Native, and Vue.js, I took active roles in building reusable components, refactoring applications, and integrating AI Agents.",
                "In addition to my technical work, I serve as the Social Media Team Lead for the HUAWEI Student Developers (HSD) community, where I manage digital strategies and community engagement. I am also a graduate of the Aspire Leaders Program, an initiative founded by Harvard Business School faculty.",
                "I maintain an active and disciplined lifestyle outside of engineering; I regularly play tennis, play the violin, and enjoy painting. Having traveled to 26 countries, I combine my global perspective with a passion for photography to maintain a versatile and creative professional profile.",
            ],
        },
        projects: {
            sectionLabel: "02 — Projects",
            heading: "Things I've built",
            subheading: "A selection of projects spanning competition work, production apps, and research experiments.",
            moreOnGithub: "More projects on GitHub →",
            viewOnGithub: "View all on GitHub",
            items: [
                {
                    title: "AI Image Processing Mobile App",
                    description: "AI-powered mobile application built with image processing for autonomous detection. Developed as part of IKU Asimov Technology Student Club. Ranked Top 14 out of 4,250 teams at TEKNOFEST — Turkey's largest technology competition.",
                    highlight: "Teknofest Top 14 / 4250 Teams",
                },
                {
                    title: "AI Agent Automation Tool",
                    description: "Built AI agents using Microsoft Copilot Studio during my internship. Automated enterprise workflows with natural language interfaces, integrated with Angular frontend and REST APIs in a production environment.",
                    highlight: "Shipped at internship",
                },
                {
                    title: "Restaurant Analytics Mobile App",
                    description: "Worked on mobile applications for a New York-based restaurant automation and analytics platform with an international remote team. Refactored 50% of production mobile features, integrated Firebase for real-time sync, and built frontend services for backend integration.",
                    highlight: "50% Codebase Refactored",
                },
                {
                    title: "Travel Tech Web & Mobile Platform",
                    description: "Improved web and mobile applications for a travel technology startup (Trampax). Updated and maintained production company website used by real users, developed mobile frontend features with React Native, Vue.js and Firebase.",
                    highlight: null,
                },
                {
                    title: "Equality in STEM — Data Analysis & ML",
                    description: "Comprehensive data analysis and machine learning project exploring gender equality in STEM fields. Performed data cleaning, exploratory analysis, and built models to identify trends from real-world datasets.",
                    highlight: "Data Science Project",
                },
                {
                    title: "Tea Shop Web Application",
                    description: "Modern web application for a tea shop with user-friendly interface and responsive design. Built to showcase frontend development skills with clean UI, component-based architecture, and interactive user experience.",
                    highlight: "Frontend Project",
                },
            ],
        },
        experience: {
            sectionLabel: "03 — Experience",
            heading: "Where I've been",
            subheading: "Work, competitions, and the academic path that shaped my engineering mindset.",
            featured: "★ Featured",
            viewCert: "View Certificate →",
            items: [
                {
                    role: "Frontend Developer Intern",
                    company: "Amadeus",
                    description: "Built AI agents using Microsoft Copilot Studio. Developed 10+ reusable Angular components in TypeScript. Collaborated with engineers in an enterprise-level Agile environment and integrated frontend features with REST APIs.",
                },
                {
                    role: "Frontend Developer Intern",
                    company: "Trampax",
                    description: "Worked on web and mobile applications at a travel technology startup. Maintained production company website used by real users, developed mobile frontend features and built responsive UI components.",
                },
                {
                    role: "Core Team Member, Social Media Team Lead",
                    company: "Huawei Student Developers (HSD)",
                    description: "Leading social media strategy and managing digital presence of the HSD community. Creating content, increasing engagement, and strengthening developer community visibility.",
                },
                {
                    role: "Aspire Leaders Program Alumni",
                    company: "Aspire Institute — Harvard Business School",
                    description: "Selected for global leadership development program. Completed courses and seminars led by Harvard faculty.",
                },
                {
                    role: "Data Science Bootcamp Participant",
                    company: "W-Code",
                    description: "Completed hands-on training in data analysis and machine learning. Worked with Python, Pandas, and real-world datasets. Earned verified certificate.",
                },
                {
                    role: "Frontend Developer Intern (Remote)",
                    company: "Dill",
                    description: "Worked remotely with an international team on a NYC-based restaurant automation platform. Refactored 50% of mobile app features in production, built Firebase real-time sync integrations, and contributed frontend services for backend data handling.",
                },
                {
                    role: "Erasmus+ Exchange Program",
                    company: "University of Pardubice",
                    description: "International exchange as part of BSc Computer Engineering. Gained cross-cultural engineering experience.",
                },
                {
                    role: "Frontend Developer Intern",
                    company: "Omreon Information Technologies",
                    description: "Developed frontend components for Turkcell-related projects. Built responsive UIs with BEM methodology and Ant Design. Contributed to production web applications using React, JavaScript, and SCSS.",
                },
                {
                    role: "Software Team Member",
                    company: "IKU Asimov Technology Student Club",
                    description: "Developed AI-powered mobile application using image processing. Ranked Top 14 among 4,250 teams in TEKNOFEST Competition. Contributed to development of club website.",
                },
                {
                    role: "B.Sc. Computer Engineering",
                    company: "Istanbul Kültür University",
                    description: "Studying Computer Engineering with focus on algorithms, data structures, OOP, and frontend development. Active in Asimov Technology Club and Huawei Student Developers.",
                },
            ],
        },
        contact: {
            sectionLabel: "04 — Contact",
            heading: "Let's build something",
            headingAccent: "together.",
            subheading: "Whether you're looking for a frontend developer, want to collaborate on an AI project, or just want to talk engineering — my inbox is open.",
            emailLabel: "Email",
            namePlaceholder: "Your name",
            emailPlaceholder: "your@email.com",
            messagePlaceholder: "Tell me about your project...",
            nameLabel: "Name",
            messageLabel: "Message",
            send: "Send Message →",
            sending: "Sending...",
            successTitle: "Message sent!",
            successMsg: "Thanks for reaching out. I'll get back to you soon.",
        },
        footer: {
            builtWith: "Built with React · Vite · Tailwind · Framer Motion",
        },
        typeStrings: [
            "Frontend Developer",
            "React Native Engineer",
            "AI/ML Enthusiast",
            "Teknofest Finalist",
            "Computer Engineer",
        ],
        stats: [
            { value: "4", label: "Companies Interned", suffix: "" },
            { value: "14", label: "Teknofest Rank", suffix: "/4250" },
            { value: "26", label: "Countries Visited", suffix: "" },
            { value: "3", label: "Known Languages", suffix: "" },
        ],
        languages: {
            heading: "Languages",
            items: [
                { lang: "Turkish", level: "Native" },
                { lang: "English", level: "Advanced" },
                { lang: "German", level: "Beginner" },
            ],
        },
        typeLabels: {
            work: "Work",
            competition: "Competition",
            education: "Education",
            community: "Community",
        },
    },

    tr: {
        nav: {
            about: "Hakkımda",
            projects: "Projeler",
            experience: "Deneyim",
            contact: "İletişim",
            getInTouch: "İletişime geç",
            available: "Müsait",
        },
        hero: {
            availableFor: "İş fırsatlarına açığım",
            viewProjects: "Projeleri Gör",
            contactMe: "İletişime geç",
            scroll: "kaydır",
            tagline: "Bilgisayar mühendisliği öğrencisi olarak, kodla deneyimler tasarlıyorum.",
        },
        about: {
            sectionLabel: "01 — Hakkımda",
            heading: "Fark yaratan şeyler",
            headingAccent: "inşa ediyorum",
            currentlyLabel: "Şu an",
            currently: [
                "4. sınıf Bilgisayar Mühendisliği öğrencisi",
                "AI destekli UI deneyimleri keşfediyorum",
                "Frontend & full-stack pozisyonlara açığım",
            ],
            bio: [
                "İstanbul Kültür Üniversitesi Bilgisayar Mühendisliği son sınıf öğrencisiyim. Amadeus, Trampax, Dill (New York) ve Omreon Bilişim bünyesinde Frontend Developer Intern olarak görev alarak; Angular, React, React Native ve Vue.js teknolojileriyle gerçek kullanıcıların deneyimlediği production sistemleri geliştirdim. Bu süreçte yeniden kullanılabilir bileşenler üretme, uygulama refactoring ve AI Agent entegrasyonu konularında aktif rol üstlendim.",
                "Yazılım geliştirme faaliyetlerimin yanı sıra HUAWEI Student Developers (HSD) topluluğunda Sosyal Medya Ekip Lideri olarak görev yapıyor, dijital strateji ve topluluk yönetimi süreçlerini yürütüyorum. Akademik ve profesyonel gelişimimi desteklemek amacıyla Harvard Business School iştiraki olan Aspire Leaders programını tamamladım.",
                "Sosyal hayatımda çok yönlülüğe önem veriyor; düzenli olarak tenis oynuyor, keman çalıyor ve resim yapıyorum. Şimdiye kadar 26 ülke gezerek edindiğim vizyonu fotoğrafçılıkla birleştiriyor, aktif ve disiplinli bir öğrencilik hayatı sürdürüyorum.",
            ],
        },
        projects: {
            sectionLabel: "02 — Projeler",
            heading: "Geliştirdiklerim",
            subheading: "Yarışma projeleri, production uygulamalar ve araştırma deneylerinden bir seçki.",
            moreOnGithub: "GitHub'da daha fazla proje →",
            viewOnGithub: "GitHub'da tümünü gör",
            items: [
                {
                    title: "AI Görüntü İşleme Mobil Uygulaması",
                    description: "Otonom tespit için görüntü işleme tabanlı AI destekli mobil uygulama. IKU Asimov Teknoloji Öğrenci Kulübü bünyesinde geliştirildi. TEKNOFEST'te 4.250 takım arasından ilk 14'e girdi.",
                    highlight: "Teknofest İlk 14 / 4250 Takım",
                },
                {
                    title: "AI Agent Otomasyon Aracı",
                    description: "Stajım sırasında Microsoft Copilot Studio ile AI agent'lar geliştirdim. Doğal dil arayüzleri ile kurumsal iş akışlarını otomatize ettim, Angular frontend ve REST API'lerle entegre ettim.",
                    highlight: "Stajda Geliştirildi",
                },
                {
                    title: "Restoran Analitik Mobil Uygulaması",
                    description: "New York merkezli restoran otomasyon platformu için uluslararası uzak ekiple mobil uygulama geliştirdim. Production özelliklerinin %50'sini refactor ettim, Firebase real-time sync entegrasyonu yaptım.",
                    highlight: "%50 Kod Tabanı Refactor",
                },
                {
                    title: "Seyahat Teknolojisi Web & Mobil Platformu",
                    description: "Trampax travel technology startup'ının web ve mobil uygulamalarını iyileştirdim. Gerçek kullanıcıların kullandığı production şirket web sitesini güncelledim ve bakımını yaptım.",
                    highlight: null,
                },
                {
                    title: "STEM'de Eşitlik — Veri Analizi & ML",
                    description: "STEM alanlarında cinsiyet eşitliğini inceleyen kapsamlı veri analizi ve makine öğrenmesi projesi. Veri temizleme, keşifsel analiz yapıldı ve gerçek dünya veri setlerinden trend modelleri oluşturuldu.",
                    highlight: "Veri Bilimi Projesi",
                },
                {
                    title: "Çay Dükkanı Web Uygulaması",
                    description: "Kullanıcı dostu arayüz ve responsive tasarıma sahip modern çay dükkanı web uygulaması. Temiz UI, bileşen tabanlı mimari ve etkileşimli kullanıcı deneyimi ile frontend geliştirme becerilerini sergilemek için yapıldı.",
                    highlight: "Frontend Projesi",
                },
            ],
        },
        experience: {
            sectionLabel: "03 — Deneyim",
            heading: "Bulunduğum yerler",
            subheading: "Mühendislik bakış açımı şekillendiren iş deneyimleri, yarışmalar ve akademik yolculuk.",
            featured: "★ Öne Çıkan",
            viewCert: "Sertifikayı Görüntüle →",
            items: [
                {
                    role: "Frontend Geliştirici Stajyeri",
                    company: "Amadeus",
                    description: "Microsoft Copilot Studio ile AI agent'lar geliştirdim. TypeScript ile 10+ yeniden kullanılabilir Angular bileşeni yazdım. Kurumsal düzeyde Agile ortamda mühendislerle iş birliği yaptım ve frontend özelliklerini REST API'lerle entegre ettim.",
                },
                {
                    role: "Frontend Geliştirici Stajyeri",
                    company: "Trampax",
                    description: "Seyahat teknolojisi startup'ında web ve mobil uygulamalar üzerinde çalıştım. Gerçek kullanıcıların kullandığı production şirket web sitesini güncelledim, mobil frontend özellikleri geliştirdim ve responsive UI bileşenleri oluşturdum.",
                },
                {
                    role: "Çekirdek Ekip Üyesi, Sosyal Medya Ekip Lideri",
                    company: "Huawei Student Developers (HSD)",
                    description: "HSD topluluğunun sosyal medya stratejisini yönetiyorum ve dijital varlığını geliştiriyorum. İçerik üretiyor, etkileşimi artırıyor ve geliştirici topluluğunun görünürlüğünü güçlendiriyorum.",
                },
                {
                    role: "Aspire Leaders Program Mezunu",
                    company: "Aspire Institute — Harvard Business School",
                    description: "Küresel liderlik geliştirme programına seçildim. Harvard fakültesi tarafından yürütülen kurs ve seminerleri tamamladım.",
                },
                {
                    role: "Veri Bilimi Bootcamp Katılımcısı",
                    company: "W-Code",
                    description: "Veri analizi ve makine öğrenmesi alanında uygulamalı eğitim aldım. Python, Pandas ve gerçek dünya veri setleriyle çalıştım. Doğrulanmış sertifika kazandım.",
                },
                {
                    role: "Frontend Geliştirici Stajyeri (Uzaktan)",
                    company: "Dill",
                    description: "NYC merkezli restoran otomasyon platformunda uluslararası uzak ekiple çalıştım. Production mobil özelliklerin %50'sini refactor ettim, Firebase real-time sync entegrasyonları yaptım.",
                },
                {
                    role: "Erasmus+ Değişim Programı",
                    company: "University of Pardubice",
                    description: "Bilgisayar Mühendisliği lisans programı kapsamında Çek Cumhuriyeti'nde uluslararası değişim. Kültürlerarası mühendislik deneyimi kazandım.",
                },
                {
                    role: "Frontend Geliştirici Stajyeri",
                    company: "Omreon Information Technologies",
                    description: "Turkcell'e yönelik projelerde frontend bileşenleri geliştirdim. BEM metodolojisi ve Ant Design ile responsive arayüzler oluşturdum. React, JavaScript ve SCSS ile production web uygulamalarına katkı sağladım.",
                },
                {
                    role: "Yazılım Ekibi Üyesi",
                    company: "IKÜ Asimov Teknoloji Öğrenci Kulübü",
                    description: "Görüntü işleme kullanan AI destekli mobil uygulama geliştirdim. TEKNOFEST Yarışması'nda 4.250 takım arasından ilk 14'e girdim. Kulüp web sitesinin geliştirilmesine katkı sağladım.",
                },
                {
                    role: "Bilgisayar Mühendisliği Lisans",
                    company: "Istanbul Kültür Üniversitesi",
                    description: "Algoritmalar, veri yapıları, OOP ve frontend geliştirme odaklı Bilgisayar Mühendisliği eğitimi alıyorum. Asimov Teknoloji Kulübü ve Huawei Student Developers'da aktif üyeyim.",
                },
            ],
        },
        contact: {
            sectionLabel: "04 — İletişim",
            heading: "Birlikte bir şeyler",
            headingAccent: "inşa edelim.",
            subheading: "Frontend geliştirici arıyorsanız, bir AI projesinde iş birliği yapmak istiyorsanız ya da sadece mühendislik hakkında konuşmak istiyorsanız — gelen kutum açık.",
            emailLabel: "E-posta",
            namePlaceholder: "Adınız",
            emailPlaceholder: "mail@adresiniz.com",
            messagePlaceholder: "Projenizden bahsedin...",
            nameLabel: "Ad",
            messageLabel: "Mesaj",
            send: "Mesaj Gönder →",
            sending: "Gönderiliyor...",
            successTitle: "Mesaj gönderildi!",
            successMsg: "Ulaştığınız için teşekkürler. En kısa sürede döneceğim.",
        },
        footer: {
            builtWith: "React · Vite · Tailwind · Framer Motion ile yapıldı",
        },
        typeStrings: [
            "Frontend Geliştirici",
            "React Native Mühendisi",
            "AI/ML Meraklısı",
            "Teknofest Finalisti",
            "Bilgisayar Mühendisi",
        ],
        stats: [
            { value: "4", label: "Staj Yapılan Şirket", suffix: "" },
            { value: "14", label: "Teknofest Sıralaması", suffix: "/4250" },
            { value: "26", label: "Gezilen Ülke", suffix: "" },
            { value: "3", label: "Bilinen Dil", suffix: "" },
        ],
        languages: {
            heading: "Diller",
            items: [
                { lang: "Türkçe", level: "Ana dil" },
                { lang: "İngilizce", level: "İleri seviye" },
                { lang: "Almanca", level: "Başlangıç" },
            ],
        },
        typeLabels: {
            work: "İş",
            competition: "Yarışma",
            education: "Eğitim",
            community: "Topluluk",
        },
    },
};

export type Translations = typeof translations.en;