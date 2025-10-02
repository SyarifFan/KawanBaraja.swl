document.addEventListener("DOMContentLoaded", () => {
  // --- GLOBAL VARIABLES & DATA ---
  const currentPage = document.body.id;
  let cart = JSON.parse(localStorage.getItem("kawanBarajaCart")) || {};
  let visitorData = { name: "Klien", deadline: "" };
  let hasCounterAnimated = false;

  const quotes = [
    "Pendidikan adalah senjata paling ampuh yang bisa kamu gunakan untuk mengubah dunia. - Nelson Mandela",
    "Satu-satunya sumber pengetahuan adalah pengalaman. - Albert Einstein",
    "Hiduplah seolah-olah kamu akan mati besok. Belajarlah seolah-olah kamu akan hidup selamanya. - Mahatma Gandhi",
  ];

  const faqData = [
    {
      question: "Bagaimana sistem pembayarannya?",
      answer:
        "Sistem pembayaran kami sangat fleksibel. Anda cukup membayar <strong>DP (Down Payment) sebesar 50%</strong> dari total biaya di awal pengerjaan. Sisa pelunasan dilakukan setelah kami mengirimkan bukti pratinjau (preview) dari hasil pekerjaan. Ini memberikan jaminan bahwa Anda puas dengan hasilnya sebelum membayar penuh.",
    },
    {
      question: "Apakah kerahasiaan data saya terjamin?",
      answer:
        "<strong>Tentu saja.</strong> Kami sangat menjunjung tinggi etika profesional dan privasi setiap klien. Semua data, dokumen, dan informasi pribadi yang Anda berikan akan kami jaga kerahasiaannya dan tidak akan pernah dibagikan kepada pihak ketiga manapun tanpa persetujuan Anda.",
    },
    {
      question: "Bagaimana jika ada revisi dari dosen?",
      answer:
        "Kami memahami bahwa proses bimbingan terkadang memerlukan revisi. Untuk layanan <strong>skripsi dan tesis, revisi minor pertama gratis</strong>. Revisi selanjutnya atau revisi mayor (perubahan konsep dasar) akan dikenakan biaya tambahan yang sangat terjangkau, yang akan kita diskusikan terlebih dahulu.",
    },
    {
      question: "Berapa lama waktu pengerjaan tugas?",
      answer:
        "Durasi pengerjaan sangat bervariasi, tergantung pada jenis layanan, tingkat kesulitan, dan kelengkapan materi yang diberikan. Namun, kami selalu berkomitmen untuk <strong>menyelesaikan pekerjaan sesuai dengan deadline</strong> yang telah kita sepakati bersama di awal.",
    },
  ];

  const servicesData = [
    {
      category: "Tugas Harian & Proyek",
      slug: "harian",
      icon: "notebook-pen",
      color: "brand-amber-500",
      description:
        "Kami siap membantu mengerjakan beragam tugas harian Anda, mulai dari <strong>esai singkat, makalah, hingga proyek kelompok.</strong> Layanan ini mencakup penyesuaian format sesuai standar akademik, riset pustaka dasar, dan konsultasi untuk memastikan tugas Anda selesai dengan baik dan tepat waktu.",
      items: [
        {
          id: "harian_esai",
          name: "Esai / Latihan Soal",
          price: 10000,
          unit: "soal",
        },
        {
          id: "harian_makalah",
          name: "Makalah (lengkap)",
          price: 50000,
          unit: "makalah",
        },
        {
          id: "harian_proyek_sedang",
          name: "Proyek Individu (sedang)",
          price: 100000,
          unit: "proyek",
        },
      ],
    },
    {
      category: "Presentasi & Materi Visual",
      slug: "presentasi",
      icon: "presentation",
      color: "brand-purple-500",
      description:
        "Ubah materi Anda menjadi presentasi yang profesional dan menarik. Kami membuat slide di <strong>PowerPoint atau Canva</strong> dengan desain yang bersih, alur yang jelas, dan visualisasi data yang efektif. Cocok untuk tugas presentasi, seminar, atau ringkasan materi belajar.",
      items: [
        {
          id: "presentasi_slide",
          name: "Slide (PPT/Canva)",
          price: 5000,
          unit: "slide",
        },
        {
          id: "presentasi_ringkasan_sedikit",
          name: "Ringkasan Materi (≤ 3 hlm)",
          price: 30000,
          unit: "file",
        },
        {
          id: "presentasi_ringkasan_banyak",
          name: "Ringkasan Materi (> 3 hlm)",
          price: 60000,
          unit: "file",
        },
      ],
    },
    {
      category: "Pengolahan Data & Analisis",
      slug: "data",
      icon: "database-zap",
      color: "brand-teal-500",
      description:
        "Butuh bantuan analisis data untuk penelitian? Kami ahli dalam mengolah data kuantitatif menggunakan <strong>SPSS, AMOS, SmartPLS, atau Excel</strong>. Layanan ini mencakup uji statistik, interpretasi hasil, dan penyajian data dalam bentuk tabel atau grafik yang siap pakai untuk laporan Anda.",
      items: [
        {
          id: "data_kuantitatif",
          name: "Pengolahan Data (SPSS, dll.)",
          price: 150000,
          unit: "dataset",
        },
        {
          id: "data_kualitatif",
          name: "Analisis Kualitatif",
          price: 100000,
          unit: "paket",
        },
        {
          id: "data_visualisasi",
          name: "Visualisasi Data",
          price: 100000,
          unit: "paket",
        },
      ],
    },
    {
      category: "Skripsi",
      slug: "skripsi",
      icon: "book-marked",
      color: "brand-blue-500",
      description:
        "Pendampingan intensif untuk tugas akhir Anda, mulai dari <strong>per BAB hingga paket lengkap.</strong> Kami membantu dalam perumusan masalah, tinjauan pustaka, metodologi, analisis data, hingga pembahasan. Termasuk penyesuaian gaya selingkung kampus dan manajemen sitasi.",
      items: [
        {
          id: "skripsi_per_bab",
          name: "Penulisan per BAB",
          price: 400000,
          unit: "bab",
          selectable: true,
        },
        {
          id: "skripsi_full",
          name: "Paket Full Skripsi",
          price: 1500000,
          unit: "paket",
        },
        {
          id: "skripsi_revisi",
          name: "Revisi Skripsi",
          price: 50000,
          unit: "revisi",
          note: "Revisi pertama gratis",
        },
      ],
    },
    {
      category: "Tesis",
      slug: "tesis",
      icon: "book-up-2",
      color: "brand-green-500",
      description:
        "Layanan premium untuk jenjang S2. Kami menawarkan pendampingan penulisan tesis dengan <strong>analisis yang lebih mendalam, metodologi yang kuat, dan argumen yang tajam.</strong> Fokus pada kualitas riset, kebaruan, dan konsistensi naskah sesuai standar publikasi ilmiah.",
      items: [
        {
          id: "tesis_per_bab",
          name: "Penulisan per BAB",
          price: 700000,
          unit: "bab",
          selectable: true,
        },
        {
          id: "tesis_full",
          name: "Paket Full Tesis",
          price: 2600000,
          unit: "paket",
        },
        {
          id: "tesis_revisi",
          name: "Revisi Tesis",
          price: 50000,
          unit: "revisi",
          note: "Revisi pertama gratis",
        },
      ],
    },
    {
      category: "Utilitas/Turnitin",
      slug: "utilitas",
      icon: "file-check-2",
      color: "brand-pink-500",
      description:
        "Pastikan naskah Anda bebas dari plagiarisme dan siap untuk diserahkan. Kami menyediakan layanan <strong>pengecekan kemiripan dengan Turnitin, parafrase akademik</strong> untuk menurunkan skor similarity, serta <strong>proofreading</strong> untuk memperbaiki tata bahasa dan struktur kalimat.",
      items: [
        {
          id: "util_plagiasi",
          name: "Cek Plagiasi (Turnitin)",
          price: 30000,
          unit: "file",
        },
        {
          id: "util_parafrase",
          name: "Parafrase (turunkan similarity)",
          price: 100000,
          unit: "file",
        },
        {
          id: "util_proofread",
          name: "Proofreading & Editing",
          price: 150000,
          unit: "file",
        },
      ],
    },
    {
      category: "Artikel & Jurnal",
      slug: "artikel-jurnal",
      icon: "newspaper",
      color: "brand-purple-500",
      description:
        "Layanan lengkap untuk kebutuhan publikasi ilmiah Anda. Kami membantu mulai dari penulisan artikel, penyesuaian naskah, hingga proses publikasi. Layanan ini sangat cocok untuk mahasiswa, dosen, atau peneliti yang ingin mempublikasikan karyanya di jurnal nasional atau internasional.",
      items: [
        {
          id: "artikel_buat_umum",
          name: "Buat Artikel/Jurnal",
          price: 5000,
          unit: "halaman",
          selectable: false,
        },
        {
          id: "artikel_buat_skripsi",
          name: "Buat Artikel/Jurnal Penelitian Skripsi",
          price: 10000,
          unit: "halaman",
          selectable: false,
        },
        {
          id: "artikel_publish_non_sinta",
          name: "Publish Artikel Non Sinta/OJS",
          price: 300000,
          unit: "per-artikel",
          selectable: false,
        },
        {
          id: "artikel_publish_sinta",
          name: "Publish Artikel Sinta 3,4,5, dan 6",
          price: 0,
          unit: "nego",
          note: "Disesuaikan dengan prediket sinta dan Publisher Jurnal Keilmuan",
          selectable: false,
        },
        {
          id: "artikel_submit",
          name: "Submit Artikel Non Sinta/Prediket Sinta",
          price: 50000,
          unit: "per-file",
          selectable: false,
        },
      ],
    },
  ];

  const testimonialsData = [
    {
      name: "Admin",
      message:
        "Halo kak, draft Bab 4 & 5 nya sudah selesai ya. Silakan dicek dulu sebelum lanjut revisi.",
    },
    {
      name: "Budi - Teknik",
      message:
        "Mantap kak, cepat sekali! Saya cek dulu. Tampilannya rapi banget, langsung di-acc dosen pembimbing nih kayaknya. Recommended!",
    },
    {
      name: "Admin",
      message:
        "Alhamdulillah, siap kak. Nanti kalau ada feedback dari dosen, kabari saja ya.",
    },
    {
      name: "Anita - Sastra",
      message:
        "Kak, terima kasih banyak bantuannya! Pengerjaan makalahnya cepat, rapi, dan nilaiku aman. Sangat membantu!",
    },
    {
      name: "Admin",
      message:
        "Sama-sama kak Anita! Senang bisa membantu. Sukses selalu ya kuliahnya.",
    },
    {
      name: "Rian - Ekonomi",
      message:
        "Layanan olah datanya luar biasa. Hasil SPSS nya detail dan penjelasannya mudah dipahami. Hemat waktu banget.",
    },
    {
      name: "Admin",
      message:
        "Terima kasih feedbacknya kak Rian. Semoga lancar penelitiannya sampai selesai.",
    },
    {
      name: "Sari - Komunikasi",
      message:
        "Slide presentasiku jadi keren banget! Desainnya modern dan isinya ringkas tapi kena. Jadi lebih PD buat presentasi. Makasih kak!",
    },
    {
      name: "Admin",
      message:
        "You are welcome kak Sari! Semoga presentasinya lancar dan dapat nilai maksimal ya.",
    },
    {
      name: "Joko - Hukum",
      message:
        "Turnitin di bawah 20%? Keren! Awalnya pusing banget sama parafrase, untung ada KawanBaraja. Makasih banyak kak!",
    },
  ];

  // --- UTILITY FUNCTIONS ---
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);

  // --- DOM SELECTORS (COMMON) ---
  const mainContent = document.getElementById("main-content");
  const fabContainer = document.getElementById("fab-container");
  const fabMainBtn = document.getElementById("fab-main-btn");
  const fabIcon = document.getElementById("fab-icon");
  const sidebar = document.getElementById("mobile-sidebar");
  const sidebarBackdrop = document.getElementById("sidebar-backdrop");
  const openSidebarBtn = document.getElementById("open-sidebar");
  const closeSidebarBtn = document.getElementById("close-sidebar");

  // --- GENERAL UI FUNCTIONS ---

  // FAB
  if (fabMainBtn) {
    fabMainBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      fabContainer.classList.toggle("open");
      fabIcon.classList.toggle("rotate-45");
    });
    document.addEventListener("click", (e) => {
      if (fabContainer && !fabContainer.contains(e.target)) {
        fabContainer.classList.remove("open");
        fabIcon.classList.remove("rotate-45");
      }
    });
  }

  // SIDEBAR (MOBILE)
  function openSidebar() {
    if (sidebar) {
      sidebar.classList.add("sidebar-open");
      sidebarBackdrop.classList.remove("hidden");
    }
  }
  function closeSidebar() {
    if (sidebar) {
      sidebar.classList.remove("sidebar-open");
      sidebarBackdrop.classList.add("hidden");
    }
  }
  if (openSidebarBtn) openSidebarBtn.addEventListener("click", openSidebar);
  if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", closeSidebar);
  if (sidebarBackdrop) sidebarBackdrop.addEventListener("click", closeSidebar);

  // PAYMENT MODAL
  const paymentModal = document.getElementById("payment-modal");
  if (paymentModal) {
    const paymentMeta = {
      gopay: {
        title: "GoPay",
        number: "083801343431",
        holder: "Syariffan",
        icon: "smartphone",
        color: "bg-blue-100 text-blue-600",
      },
      bsi: {
        title: "Bank Syariah Indonesia (BSI)",
        number: "7324408295",
        holder: "Syariffan",
        icon: "banknote",
        color: "bg-green-100 text-green-700",
      },
    };

    function showPaymentModal(kind) {
      const data = paymentMeta[kind];
      if (!data) return;

      document.getElementById("payment-modal-subtitle").textContent =
        data.title;
      document.getElementById("payment-modal-number").textContent = data.number;
      document.getElementById("payment-modal-holder").textContent = data.holder;
      const iconContainer = document.getElementById("payment-modal-icon-bg");
      iconContainer.className = `p-2 rounded-lg ${data.color}`;
      document
        .getElementById("payment-modal-icon")
        .setAttribute("data-lucide", data.icon);
      lucide.createIcons();
      document.getElementById("payment-modal-copy").dataset.number =
        data.number;

      paymentModal.classList.remove("modal-hidden");
      paymentModal.classList.add("modal-visible");
    }

    function closePaymentModal() {
      paymentModal.classList.add("modal-hidden");
      paymentModal.classList.remove("modal-visible");
    }

    document
      .querySelectorAll(".payment-modal-trigger")
      .forEach((btn) =>
        btn.addEventListener("click", () => showPaymentModal(btn.dataset.pay))
      );
    document
      .getElementById("payment-modal-close")
      .addEventListener("click", closePaymentModal);
    document
      .getElementById("payment-modal-close-bottom")
      .addEventListener("click", closePaymentModal);
    paymentModal.addEventListener("click", (e) => {
      if (e.target === paymentModal) closePaymentModal();
    });

    document
      .getElementById("payment-modal-copy")
      .addEventListener("click", function () {
        const numberToCopy = this.dataset.number;
        navigator.clipboard.writeText(numberToCopy).then(() => {
          const btnText = document.getElementById("copy-button-text");
          btnText.textContent = "Berhasil Disalin!";
          setTimeout(() => {
            btnText.textContent = "Salin Nomor";
          }, 2000);
        });
      });
  }

  // --- PAGE-SPECIFIC LOGIC ---

  // BERANDA PAGE
  if (document.getElementById("beranda")) {
    const animatedTextEl = document.getElementById("animated-text");

    function runHomepageAnimation() {
      if (!animatedTextEl) return;
      const textToAnimate = `KawanBaraja siap membantumu!`;
      animatedTextEl.innerHTML = "";
      textToAnimate.split("").forEach((char, idx) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.animationDelay = `${idx * 0.05}s`;
        animatedTextEl.appendChild(span);
      });
      animateCounters();
    }

    function animateCounters() {
      if (hasCounterAnimated) return;
      const counters = document.querySelectorAll(".counter");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const counter = entry.target;
              counter.textContent = "0";
              const target = +counter.getAttribute("data-target");
              let current = 0;
              const duration = 1500;
              const increment = Math.max(
                1,
                Math.ceil(target / (duration / 16))
              );

              const update = () => {
                current += increment;
                if (current >= target) {
                  counter.textContent = target.toLocaleString("id-ID");
                } else {
                  counter.textContent = current.toLocaleString("id-ID");
                  requestAnimationFrame(update);
                }
              };
              update();
              observer.unobserve(counter);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((counter) => observer.observe(counter));
      hasCounterAnimated = true;
    }

    runHomepageAnimation();
  }

  // TENTANG PAGE
  if (document.getElementById("tentang")) {
    const rotatingQuoteEl = document.getElementById("rotating-quote");
    if (rotatingQuoteEl) {
      rotatingQuoteEl.textContent = `"${
        quotes[Math.floor(Math.random() * quotes.length)]
      }"`;
    }

    function renderTestimonials() {
      const slider = document.getElementById("testimonial-slider");
      const dotsContainer = document.getElementById("testimonial-dots");
      if (!slider || !dotsContainer) return;

      let currentConversation = [];
      const conversations = [];

      testimonialsData.forEach((item) => {
        currentConversation.push(item);
        if (
          item.name !== "Admin" &&
          testimonialsData.indexOf(item) < testimonialsData.length - 1 &&
          testimonialsData[testimonialsData.indexOf(item) + 1].name === "Admin"
        ) {
          conversations.push(currentConversation);
          currentConversation = [];
        }
      });
      if (currentConversation.length > 0)
        conversations.push(currentConversation);

      slider.innerHTML = conversations
        .map(
          (convo) => `
              <div class="testimonial-slide flex-shrink-0 w-full">
                <div class="w-full h-full flex flex-col" style="background-image: url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg'); background-size: cover;">
                  <div class="bg-[#005E54] text-white pt-10 pb-2 px-2 flex items-center gap-3 shadow-md flex-shrink-0">
                      <i data-lucide="arrow-left" class="w-5 h-5"></i>
                      <div class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white/50">
                        <i data-lucide="user" class="w-6 h-6 text-white"></i>
                      </div>
                      <div class="flex-1">
                          <h4 class="font-bold">Klien</h4>
                          <p class="text-xs">online</p>
                      </div>
                      <i data-lucide="video" class="w-5 h-5"></i>
                      <i data-lucide="phone" class="w-5 h-5"></i>
                  </div>
                  <div class="p-4 flex-1 overflow-y-auto flex flex-col space-y-3 pt-6 pb-6">
                    ${convo
                      .map(
                        (chat) => `
                      <div class="flex ${
                        chat.name === "Admin" ? "justify-end" : "justify-start"
                      }">
                        <div class="max-w-[80%] p-2.5 rounded-xl shadow-sm ${
                          chat.name === "Admin"
                            ? "bg-[#E2FFC7] text-gray-800 rounded-br-none"
                            : "bg-white text-gray-800 rounded-bl-none"
                        }">
                          <p class="text-sm">${chat.message}</p>
                          ${
                            chat.name !== "Admin"
                              ? `<p class="text-xs text-left mt-1 font-bold text-brand-blue-600">${chat.name}</p>`
                              : ""
                          }
                        </div>
                      </div>
                    `
                      )
                      .join("")}
                  </div>
                  <div class="bg-gray-100 p-2 flex items-center gap-2 flex-shrink-0">
                      <i data-lucide="smile" class="w-6 h-6 text-gray-500"></i>
                      <div class="flex-1 bg-white rounded-full p-2 text-sm text-gray-400">Ketik pesan...</div>
                      <i data-lucide="paperclip" class="w-6 h-6 text-gray-500"></i>
                      <i data-lucide="camera" class="w-6 h-6 text-gray-500"></i>
                  </div>
                </div>
              </div>
            `
        )
        .join("");

      dotsContainer.innerHTML = conversations
        .map(
          (_, i) =>
            `<button data-slide-to="${i}" class="testimonial-dot h-2 w-2 rounded-full transition-colors ${
              i === 0 ? "bg-brand-orange-500" : "bg-gray-300"
            }"></button>`
        )
        .join("");

      const dots = document.querySelectorAll(".testimonial-dot");
      slider.addEventListener("scroll", () => {
        const slideWidth = slider.offsetWidth;
        const activeIndex = Math.round(slider.scrollLeft / slideWidth);
        dots.forEach((dot, i) => {
          dot.classList.toggle("bg-brand-orange-500", i === activeIndex);
          dot.classList.toggle("bg-gray-300", i !== activeIndex);
        });
      });

      dotsContainer.addEventListener("click", (e) => {
        if (e.target.matches(".testimonial-dot")) {
          const slideIndex = e.target.dataset.slideTo;
          slider.scrollTo({
            left: slider.offsetWidth * slideIndex,
            behavior: "smooth",
          });
        }
      });
    }
    renderTestimonials();
  }

  // FAQ PAGE
  if (document.getElementById("faq")) {
    const faqContainer = document.getElementById("faq-container");
    function renderFaq() {
      if (!faqContainer) return;
      faqContainer.innerHTML = faqData
        .map(
          (item) => `
              <div class="bg-white rounded-lg shadow-sm border border-gray-200">
                <button class="faq-question w-full flex justify-between items-center text-left p-4 font-semibold">
                  <span>${item.question}</span>
                  <svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-300"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <div class="faq-answer px-4"><div class="pb-4 text-gray-700">${item.answer}</div></div>
              </div>`
        )
        .join("");
    }
    renderFaq();

    faqContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".faq-question");
      if (!btn) return;
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector("svg");
      if (!answer || !icon) return;

      const wasOpen =
        answer.style.maxHeight && answer.style.maxHeight !== "0px";

      document
        .querySelectorAll(".faq-answer")
        .forEach((ans) => (ans.style.maxHeight = null));
      document
        .querySelectorAll(".faq-question svg")
        .forEach((ic) => (ic.style.transform = "rotate(0deg)"));

      if (!wasOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
      }
    });
  }

  // --- INITIALIZATION ---
  function init() {
    lucide.createIcons();
    document.getElementById("current-year").textContent =
      new Date().getFullYear();
    if (mainContent) {
      mainContent.classList.add("loaded");
    }
  }

  init();
});
