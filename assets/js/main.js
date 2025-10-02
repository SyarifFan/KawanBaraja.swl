document.addEventListener("DOMContentLoaded", () => {
  // --- STATE & DATA MANAGEMENT ---

  // User and Cart Data
  let visitorData = { name: "Klien", deadline: "" };
  let cart = {};
  let isFastTrack = false;
  let hasCounterAnimated = false;

  // Static Data Sets
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
      name: `Klien ${Math.floor(Math.random() * (400 - 200 + 1)) + 200}`,
      message:
        "Mantap kak, cepat sekali! Saya cek dulu. Tampilannya rapi banget, langsung di-acc dosen pembimbing nih kayaknya. Recommended!",
    },
    {
      name: "Admin",
      message:
        "Alhamdulillah, siap kak. Nanti kalau ada feedback dari dosen, kabari saja ya.",
    },
    {
      name: `Klien ${Math.floor(Math.random() * (400 - 200 + 1)) + 200}`,
      message:
        "Kak, terima kasih banyak bantuannya! Pengerjaan makalahnya cepat, rapi, dan nilaiku aman. Sangat membantu!",
    },
    {
      name: "Admin",
      message:
        "Sama-sama kak! Senang bisa membantu. Sukses selalu ya kuliahnya.",
    },
    {
      name: `Klien ${Math.floor(Math.random() * (400 - 200 + 1)) + 200}`,
      message:
        "Layanan olah datanya luar biasa. Hasil SPSS nya detail dan penjelasannya mudah dipahami. Hemat waktu banget.",
    },
    {
      name: "Admin",
      message:
        "Terima kasih feedbacknya kak. Semoga lancar penelitiannya sampai selesai.",
    },
    {
      name: `Klien ${Math.floor(Math.random() * (400 - 200 + 1)) + 200}`,
      message:
        "Slide presentasiku jadi keren banget! Desainnya modern dan isinya ringkas tapi kena. Jadi lebih PD buat presentasi. Makasih kak!",
    },
    {
      name: "Admin",
      message:
        "You are welcome kak! Semoga presentasinya lancar dan dapat nilai maksimal ya.",
    },
    {
      name: `Klien ${Math.floor(Math.random() * (400 - 200 + 1)) + 200}`,
      message:
        "Turnitin di bawah 20%? Keren! Awalnya pusing banget sama parafrase, untung ada KawanBaraja. Makasih banyak kak!",
    },
  ];

  // --- DOM REFERENCES ---
  const mainContent = document.getElementById("main-content");
  const pageContainer = document.getElementById("page-container");
  const fabContainer = document.getElementById("fab-container");
  const fabMainBtn = document.getElementById("fab-main-btn");
  const fabIcon = document.getElementById("fab-icon");
  const sidebar = document.getElementById("mobile-sidebar");
  const sidebarBackdrop = document.getElementById("sidebar-backdrop");
  const openSidebarBtn = document.getElementById("open-sidebar");
  const closeSidebarBtn = document.getElementById("close-sidebar");

  // --- UTILITY FUNCTIONS ---
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);

  // --- CORE FUNCTIONS ---

  // SPA Navigation: Loads page content from HTML files
  async function showPage(page, slug = null) {
    try {
      // If the page is already loaded, don't refetch
      const currentSection = pageContainer.querySelector(`#${page}`);
      if (currentSection) {
        // If it's the pemesanan page and a slug is passed, re-run setup
        if (page === "pemesanan" && slug) {
          if (typeof window[`setup_pemesanan`] === "function") {
            window[`setup_pemesanan`](slug);
          }
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
        closeSidebar();
        return;
      }

      const response = await fetch(`${page}.html`);
      if (!response.ok) {
        pageContainer.innerHTML = `<p class="text-center p-8">Halaman tidak ditemukan.</p>`;
        return;
      }
      const html = await response.text();

      // Hide all sections before showing the new one
      Array.from(pageContainer.children).forEach(
        (child) => (child.style.display = "none")
      );

      // Add new page content
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      const newPageElement = tempDiv.firstElementChild;
      pageContainer.appendChild(newPageElement);

      // Update active nav links
      document
        .querySelectorAll(".nav-link")
        .forEach((a) => a.classList.remove("active"));
      document
        .querySelector(`.nav-link[data-page="${page}"]`)
        ?.classList.add("active");

      // Execute page-specific setup
      if (typeof window[`setup_${page}`] === "function") {
        window[`setup_${page}`](slug);
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
      closeSidebar();
      lucide.createIcons();
    } catch (error) {
      console.error("Gagal memuat halaman:", error);
      pageContainer.innerHTML = `<p class="text-center p-8">Terjadi kesalahan saat memuat halaman.</p>`;
    }
  }

  // --- PAGE SETUP FUNCTIONS ---
  // Each function will be called after its corresponding HTML is loaded

  window.setup_beranda = function () {
    // Animated Text
    const animatedTextEl = document.getElementById("animated-text");
    const textToAnimate = `KawanBaraja siap membantumu!`;
    animatedTextEl.innerHTML = "";
    textToAnimate.split("").forEach((char, idx) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.animationDelay = `${idx * 0.05}s`;
      animatedTextEl.appendChild(span);
    });

    // Counter Animation
    if (!hasCounterAnimated) {
      const counters = document.querySelectorAll(".counter");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const counter = entry.target;
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
  };

  window.setup_layanan = function () {
    const layananNavDesktop = document.getElementById("layanan-nav-desktop");
    const layananContentDesktop = document.getElementById(
      "layanan-content-desktop"
    );
    const layananAccordionMobile = document.getElementById(
      "layanan-accordion-mobile"
    );

    layananNavDesktop.innerHTML = servicesData
      .map(
        (s, i) => `
      <button data-service-slug="${
        s.slug
      }" class="layanan-nav-btn w-full flex items-center gap-4 p-4 rounded-lg text-left ${
          i === 0
            ? "bg-brand-orange-100 text-brand-orange-800 font-semibold"
            : "hover:bg-gray-100"
        }">
        <i data-lucide="${s.icon}" class="w-6 h-6 text-${
          s.color
        } flex-shrink-0"></i>
        <span class="font-semibold">${s.category}</span>
      </button>
    `
      )
      .join("");

    layananAccordionMobile.innerHTML = servicesData
      .map(
        (s, i) => `
      <div class="bg-white rounded-lg shadow-sm">
        <button data-service-slug="${s.slug}" class="layanan-nav-btn w-full flex justify-between items-center gap-4 p-4 text-left">
          <div class="flex items-center gap-4">
            <i data-lucide="${s.icon}" class="w-6 h-6 text-${s.color} flex-shrink-0"></i>
            <span class="font-semibold text-gray-800">${s.category}</span>
          </div>
          <i data-lucide="chevron-down" class="accordion-icon w-5 h-5 text-gray-400 transition-transform"></i>
        </button>
        <div class="layanan-desc-mobile px-4 text-gray-600">
          <div class="border-t pt-4">
            <p class="mb-4 leading-relaxed">${s.description}</p>
            <button data-page="pemesanan" data-category-slug="${s.slug}" class="order-from-service-btn inline-flex items-center gap-2 bg-brand-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-brand-blue-600 text-sm">
              <i data-lucide="shopping-cart" class="w-4 h-4"></i> Pesan Layanan Ini
            </button>
          </div>
        </div>
      </div>
    `
      )
      .join("");

    function updateLayananContent(slug) {
      const s = servicesData.find((v) => v.slug === slug);
      if (!s) return;
      layananContentDesktop.innerHTML = `
        <div style="animation:fadeInPage .5s">
          <h3 class="text-2xl font-extrabold text-brand-blue-700 mb-2 font-display">${s.category}</h3>
          <p class="text-gray-700 mb-6 leading-relaxed">${s.description}</p>
          <div class="border-t pt-4">
            <button data-page="pemesanan" data-category-slug="${s.slug}" class="order-from-service-btn inline-flex items-center gap-2 bg-brand-blue-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-brand-blue-600 transition-all shadow">
              <i data-lucide="shopping-cart" class="w-4 h-4"></i> Pesan Layanan Ini
            </button>
          </div>
        </div>`;

      document
        .querySelectorAll(".layanan-nav-btn")
        .forEach((b) =>
          b.classList.remove(
            "active",
            "bg-brand-orange-100",
            "text-brand-orange-800"
          )
        );
      document
        .querySelectorAll(`.layanan-nav-btn[data-service-slug="${slug}"]`)
        .forEach((b) => {
          b.classList.add("active");
          if (!b.closest("#layanan-accordion-mobile")) {
            b.classList.add("bg-brand-orange-100", "text-brand-orange-800");
          }
        });
      lucide.createIcons();
    }

    const layananSection = document.getElementById("layanan");
    layananSection.addEventListener("click", (e) => {
      const btn = e.target.closest(".layanan-nav-btn");
      if (!btn) return;

      const slug = btn.dataset.serviceSlug;
      if (btn.closest("#layanan-accordion-mobile")) {
        const wasActive = btn.classList.contains("active");
        document
          .querySelectorAll("#layanan-accordion-mobile .layanan-nav-btn")
          .forEach((b) => b.classList.remove("active"));
        if (!wasActive) btn.classList.add("active");
      } else {
        updateLayananContent(slug);
      }
    });

    updateLayananContent("harian");
  };

  window.setup_pemesanan = function (slug) {
    const orderCategoryCardsContainer = document.getElementById(
      "order-category-cards"
    );
    const orderFormItemsContainer = document.getElementById("order-form-items");
    const processIndicator = document.getElementById("process-indicator");
    const fastTrackCheckbox = document.getElementById("fast-track-checkbox");
    const copyOrderBtn = document.getElementById("copy-order-btn");

    function updateProcessIndicator(step) {
      const steps = [
        {
          icon: "list-filter",
          text: "Pilih Kategori",
          tooltip: "Pilih jenis layanan yang Anda butuhkan.",
        },
        {
          icon: "shopping-basket",
          text: "Atur Pesanan",
          tooltip: "Tambahkan item dan atur jumlah pesanan.",
        },
        {
          icon: "send",
          text: "Kirim Pesanan",
          tooltip: "Selesaikan dan kirim rincian pesanan via WhatsApp.",
        },
      ];
      processIndicator.innerHTML = steps
        .map(
          (s, i) => `
              <div class="relative tooltip-container">
                  <div class="flex items-center gap-2 ${
                    i + 1 <= step ? "text-brand-orange-600" : "text-gray-400"
                  }">
                      <div class="rounded-full border-2 ${
                        i + 1 <= step
                          ? "border-brand-orange-500 bg-brand-orange-50"
                          : "border-gray-300"
                      } p-1.5"> <i data-lucide="${
            s.icon
          }" class="w-4 h-4"></i> </div>
                      <span class="hidden sm:inline font-semibold text-sm">${
                        s.text
                      }</span>
                  </div>
                  <span class="tooltip-text">${s.tooltip}</span>
              </div>
              ${
                i < steps.length - 1
                  ? `<div class="flex-1 h-0.5 ${
                      i + 1 < step ? "bg-brand-orange-500" : "bg-gray-300"
                    }"></div>`
                  : ""
              }
          `
        )
        .join("");
      lucide.createIcons();
    }

    function renderOrderItems(slug) {
      const s = servicesData.find((v) => v.slug === slug);
      if (!s) return;
      orderFormItemsContainer.innerHTML = `<div id="order-placeholder" style="display:none;"></div><div class="space-y-3" style="animation:fadeInPage .5s"></div>`;
      const container = orderFormItemsContainer.querySelector(".space-y-3");
      s.items.forEach((item) => {
        const wrap = document.createElement("div");
        wrap.className =
          "bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors";
        let inner = `<div class="flex items-center justify-between"> <div class="flex items-center flex-1 min-w-0"> <input type="checkbox" id="check_${
          item.id
        }" data-id="${
          item.id
        }" class="h-5 w-5 rounded border-gray-300 text-brand-orange-600 focus:ring-brand-orange-500 flex-shrink-0" ${
          cart[item.id] ? "checked" : ""
        }> <label for="check_${
          item.id
        }" class="ml-3 text-sm sm:text-base cursor-pointer font-medium">${
          item.name
        } <span class="text-xs text-gray-500">(${
          item.price > 0
            ? formatCurrency(item.price) + "/" + item.unit
            : item.note || ""
        })</span></label> </div>`;
        if (!item.selectable) {
          inner += `<div id="qty_${item.id}" class="${
            cart[item.id] ? "flex" : "hidden"
          } items-center space-x-2"> <button data-id="${
            item.id
          }" data-change="-1" class="qty-btn bg-gray-200 w-7 h-7 rounded-full font-bold hover:bg-gray-300" aria-label="Kurangi">-</button> <span id="qty_val_${
            item.id
          }" class="font-bold w-8 text-center">${
            cart[item.id] ? cart[item.id].quantity : 1
          }</span> <button data-id="${
            item.id
          }" data-change="1" class="qty-btn bg-gray-200 w-7 h-7 rounded-full font-bold hover:bg-gray-300" aria-label="Tambah">+</button> </div>`;
        }
        inner += `</div>`;
        wrap.innerHTML = inner;
        if (item.selectable) {
          const sel = document.createElement("div");
          sel.id = `selection_container_${item.id}`;
          sel.className = `pl-8 pt-2 space-y-2 ${
            cart[item.id] ? "" : "hidden"
          }`;
          const cartItem = cart[item.id] || {};
          const totalChapters = cartItem.totalChapters || 5;
          sel.innerHTML = `<div class="flex items-center gap-2"> <label for="total_chapters_${item.id}" class="text-sm font-semibold">Jumlah BAB:</label> <input id="total_chapters_${item.id}" data-id="${item.id}" type="number" value="${totalChapters}" min="1" class="total-chapters-input w-16 rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-brand-orange-500 focus:ring-2 focus:ring-brand-orange-200"> </div> <div id="chapters_${item.id}" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 pt-2"></div>`;
          wrap.appendChild(sel);
        }
        container.appendChild(wrap);
        if (item.selectable && cart[item.id])
          renderChapterCheckboxes(item.id, cart[item.id].totalChapters || 5);
      });
    }

    function renderCustomServiceForm() {
      updateProcessIndicator(1);
      orderFormItemsContainer.innerHTML = `
          <div id="order-placeholder" style="display:none;"></div>
          <div class="space-y-4" style="animation:fadeInPage .5s">
            <h4 class="font-bold text-gray-800">Buat Pesanan Kustom</h4>
            <p class="text-sm text-gray-600">Jelaskan kebutuhan Anda di bawah ini. Harga akan didiskusikan lebih lanjut melalui WhatsApp.</p>
            <div>
              <label for="custom-service-name" class="block text-sm font-semibold text-gray-700">Nama Layanan/Tugas</label>
              <input id="custom-service-name" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-orange-500 focus:ring-2 focus:ring-brand-orange-200 sm:text-sm" placeholder="Contoh: Review jurnal internasional">
            </div>
            <button id="add-custom-service-btn" class="inline-flex items-center gap-2 bg-brand-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-brand-orange-600 transition-all shadow">
              <i data-lucide="plus" class="w-4 h-4"></i> Tambahkan ke Pesanan
            </button>
          </div>`;
      lucide.createIcons();
    }

    function renderChapterCheckboxes(itemId, total) {
      const container = document.getElementById(`chapters_${itemId}`);
      if (!container) return;
      container.innerHTML = "";
      const cartItem = cart[itemId] || { chapters: [] };
      for (let i = 1; i <= total; i++) {
        const isChecked =
          cartItem.chapters && cartItem.chapters.includes(String(i));
        container.innerHTML += `<label class="inline-flex items-center text-sm"> <input type="checkbox" data-id="${itemId}" data-chapter="${i}" class="chapter-check h-4 w-4 rounded border-gray-300 text-brand-orange-600 focus:ring-brand-orange-500" ${
          isChecked ? "checked" : ""
        }> <span class="ml-1.5">BAB ${i}</span> </label>`;
      }
    }

    function calculateTotals() {
      let subtotal = 0;
      for (const itemId in cart) {
        const c = cart[itemId];
        if (c.isCustom) continue;
        const item = servicesData
          .flatMap((s) => s.items)
          .find((i) => i.id === itemId);
        if (item) {
          if (item.selectable) {
            let bill = new Set(c.chapters || []);
            if (c.chapters?.includes("4") && c.chapters?.includes("5"))
              bill.delete("5");
            subtotal += item.price * bill.size;
          } else {
            subtotal += item.price * c.quantity;
          }
        }
      }

      const maxDiscount = Math.floor(subtotal * 0.1);
      let discount =
        parseInt(document.getElementById("discount-request").value) || 0;
      if (discount > maxDiscount && maxDiscount > 0) {
        document.getElementById("discount-request").value = maxDiscount;
        discount = maxDiscount;
      }

      let totalAfterDiscount = subtotal - discount;
      let fastTrackFee = isFastTrack ? totalAfterDiscount * 0.15 : 0;
      let finalTotal = totalAfterDiscount + fastTrackFee;

      return { subtotal, discount, fastTrackFee, finalTotal };
    }

    function updateCartUI() {
      const cartItemsList = document.getElementById("cart-items-list");
      const emptyCartMessage = document.getElementById("empty-cart-message");
      const checkoutBtn = document.getElementById("checkout-btn");
      const cancelAllBtn = document.getElementById("cancel-all-btn");
      const copyOrderBtn = document.getElementById("copy-order-btn");

      cartItemsList.innerHTML = "";
      const { subtotal, discount, fastTrackFee, finalTotal } =
        calculateTotals();

      const hasItems = Object.keys(cart).some((key) => {
        const item = cart[key];
        if (item.isCustom) return true;
        if (item.selectable) return item.chapters && item.chapters.length > 0;
        return true;
      });

      Object.keys(cart).forEach((itemId) => {
        const c = cart[itemId];
        const item = c.isCustom
          ? null
          : servicesData.flatMap((s) => s.items).find((i) => i.id === itemId);
        if (c.isCustom) {
          cartItemsList.innerHTML += `<div class="flex justify-between items-center text-sm"><p class="font-semibold">${c.name}</p><p class="font-bold text-brand-blue-500">Nego</p></div>`;
        } else if (item) {
          if (item.selectable && (!c.chapters || c.chapters.length === 0))
            return;
          let name = item.name;
          let priceText = "";
          let itemTotal = 0;
          if (item.selectable) {
            const bill = new Set(c.chapters);
            if (c.totalChapters === 5 && bill.has("4") && bill.has("5"))
              bill.delete("5");
            name += ` (BAB ${c.chapters.join(", ")})`;
            priceText = `${bill.size} x ${formatCurrency(item.price)}`;
            itemTotal = item.price * bill.size;
          } else {
            priceText = `${c.quantity} x ${formatCurrency(item.price)}`;
            itemTotal = item.price * c.quantity;
          }
          cartItemsList.innerHTML += `<div class="flex justify-between items-center text-sm"><div><p class="font-semibold">${name}</p><p class="text-xs text-gray-500">${priceText}</p></div><p class="font-bold">${formatCurrency(
            itemTotal
          )}</p></div>`;
        }
      });

      document.getElementById("subtotal-price").textContent =
        formatCurrency(subtotal);
      document.getElementById(
        "discount-amount"
      ).textContent = `- ${formatCurrency(discount)}`;
      document.getElementById(
        "fast-track-fee"
      ).textContent = `+ ${formatCurrency(fastTrackFee)}`;
      document.getElementById("fast-track-row").style.display = isFastTrack
        ? "flex"
        : "none";
      document.getElementById("total-price").textContent =
        formatCurrency(finalTotal);

      if (hasItems) {
        emptyCartMessage.style.display = "none";
        checkoutBtn.disabled = false;
        cancelAllBtn.disabled = false;
        copyOrderBtn.disabled = false;
        updateProcessIndicator(2);
      } else {
        emptyCartMessage.style.display = "block";
        checkoutBtn.disabled = true;
        cancelAllBtn.disabled = true;
        copyOrderBtn.disabled = true;
        isFastTrack = false;
        fastTrackCheckbox.checked = false;
        document.getElementById("fast-track-row").style.display = "none";
        updateProcessIndicator(1);
      }
    }

    function resetCart() {
      cart = {};
      const active = document.querySelector(".order-category-btn.active");
      if (active) {
        const slug = active.dataset.categorySlug;
        if (slug === "custom") renderCustomServiceForm();
        else renderOrderItems(slug);
      }
      document.getElementById("discount-request").value = "";
      document.getElementById("customer-comments").value = "";
      fastTrackCheckbox.checked = false;
      isFastTrack = false;
      updateCartUI();
    }

    function getOrderText() {
      const { subtotal, discount, fastTrackFee, finalTotal } =
        calculateTotals();
      const comments = document
        .getElementById("customer-comments")
        .value.trim();

      let msg = `PESANAN KLIEN\n--------------------------\n`;
      let regular = "";
      let custom = "";

      Object.keys(cart).forEach((id) => {
        const c = cart[id];
        if (c.isCustom) {
          custom += `- ${c.name} (Harga Nego)\n`;
        } else {
          const item = servicesData
            .flatMap((s) => s.items)
            .find((i) => i.id === id);
          if (item) {
            if (item.selectable) {
              if ((c.chapters?.length || 0) > 0) {
                regular += `- ${item.name} (BAB ${c.chapters.join(", ")})\n`;
              }
            } else {
              regular += `- ${item.name} (Jumlah: ${c.quantity})\n`;
            }
          }
        }
      });

      if (regular) msg += `Layanan:\n${regular}\n`;
      if (custom) msg += `Layanan Kustom:\n${custom}\n`;

      msg += "--------------------------\n";
      msg += `Subtotal: ${formatCurrency(subtotal)}\n`;
      if (discount > 0) msg += `Diskon: -${formatCurrency(discount)}\n`;
      if (isFastTrack)
        msg += `Biaya Fast Track: +${formatCurrency(fastTrackFee)}\n`;
      msg += `TOTAL: ${formatCurrency(finalTotal)}\n\n`;
      if (comments) msg += `Catatan: ${comments}\n`;

      return msg;
    }

    orderCategoryCardsContainer.innerHTML =
      servicesData
        .map(
          (s) => `
        <button data-category-slug="${s.slug}" class="order-category-btn p-3 rounded-lg shadow-sm text-center bg-white border border-transparent">
          <i data-lucide="${s.icon}" class="mx-auto w-8 h-8 text-${s.color}"></i>
          <span class="block text-xs font-semibold mt-2">${s.category}</span>
        </button>
      `
        )
        .join("") +
      `
        <button data-category-slug="custom" class="order-category-btn p-3 rounded-lg shadow-sm text-center bg-white border border-transparent">
          <i data-lucide="plus-square" class="mx-auto w-8 h-8 text-brand-orange-500"></i>
          <span class="block text-xs font-semibold mt-2">Layanan Lainnya</span>
        </button>`;

    orderCategoryCardsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".order-category-btn");
      if (!btn) return;
      document
        .querySelectorAll(".order-category-btn")
        .forEach((b) =>
          b.classList.remove(
            "active",
            "bg-brand-orange-100",
            "border-brand-orange-500"
          )
        );
      btn.classList.add(
        "active",
        "bg-brand-orange-100",
        "border-brand-orange-500"
      );
      const slug = btn.dataset.categorySlug;
      if (slug === "custom") renderCustomServiceForm();
      else renderOrderItems(slug);
      updateProcessIndicator(1);
    });

    orderFormItemsContainer.addEventListener("click", (e) => {
      if (e.target.closest(".qty-btn")) {
        const btn = e.target.closest(".qty-btn");
        const id = btn.dataset.id;
        const change = parseInt(btn.dataset.change, 10);
        cart[id].quantity = Math.max(1, cart[id].quantity + change);
        updateCartUI();
        renderOrderItems(
          document.querySelector(".order-category-btn.active").dataset
            .categorySlug
        );
      }
      if (e.target.id === "add-custom-service-btn") {
        const input = document.getElementById("custom-service-name");
        if (!input.value.trim()) return;
        cart[`custom_${Date.now()}`] = {
          name: input.value.trim(),
          isCustom: true,
        };
        updateCartUI();
        input.value = "";
      }
    });

    orderFormItemsContainer.addEventListener("change", (e) => {
      const t = e.target;
      if (t.type === "checkbox" && !t.classList.contains("chapter-check")) {
        const id = t.dataset.id;
        const item = servicesData
          .flatMap((s) => s.items)
          .find((i) => i.id === id);
        if (t.checked) {
          cart[id] = {
            quantity: 1,
            chapters: item.selectable ? [] : undefined,
            totalChapters: item.selectable ? 5 : undefined,
          };
        } else {
          delete cart[id];
        }
        renderOrderItems(
          document.querySelector(".order-category-btn.active").dataset
            .categorySlug
        );
        updateCartUI();
      } else if (t.classList.contains("chapter-check")) {
        const id = t.dataset.id;
        const chapter = t.dataset.chapter;
        if (cart[id].totalChapters === 5) {
          const isChecked = t.checked;
          const container = t.closest(`#chapters_${id}`);
          if (chapter === "4")
            container.querySelector('[data-chapter="5"]').checked = isChecked;
          if (chapter === "5")
            container.querySelector('[data-chapter="4"]').checked = isChecked;
        }
        const sel = Array.from(
          t
            .closest(`#chapters_${id}`)
            .querySelectorAll(".chapter-check:checked")
        ).map((cb) => cb.dataset.chapter);
        cart[id].chapters = sel.sort((a, b) => parseInt(a) - parseInt(b));
        updateCartUI();
      }
    });

    orderFormItemsContainer.addEventListener("input", (e) => {
      if (e.target.classList.contains("total-chapters-input")) {
        const id = e.target.dataset.id;
        const total = parseInt(e.target.value) || 1;
        cart[id].totalChapters = total;
        cart[id].chapters = (cart[id].chapters || []).filter(
          (c) => parseInt(c) <= total
        );
        renderChapterCheckboxes(id, total);
        updateCartUI();
      }
    });

    document
      .getElementById("discount-request")
      .addEventListener("input", updateCartUI);
    document
      .getElementById("cancel-all-btn")
      .addEventListener("click", resetCart);

    fastTrackCheckbox.addEventListener("change", (e) => {
      isFastTrack = e.target.checked;
      updateCartUI();
    });

    copyOrderBtn.addEventListener("click", () => {
      const orderText = getOrderText();
      navigator.clipboard.writeText(orderText).then(() => {
        const icon = copyOrderBtn.querySelector("i");
        copyOrderBtn.title = "Pesanan disalin!";
        icon.setAttribute("data-lucide", "check");
        lucide.createIcons();
        setTimeout(() => {
          copyOrderBtn.title = "Salin detail pesanan";
          icon.setAttribute("data-lucide", "copy");
          lucide.createIcons();
        }, 2000);
      });
    });

    if (slug) {
      setTimeout(
        () =>
          document
            .querySelector(`.order-category-btn[data-category-slug="${slug}"]`)
            ?.click(),
        100
      );
    }
    updateCartUI();
  };

  window.setup_tentang = function () {
    const rotatingQuoteEl = document.getElementById("rotating-quote");
    if (rotatingQuoteEl) {
      rotatingQuoteEl.textContent = `"${
        quotes[Math.floor(Math.random() * quotes.length)]
      }"`;
    }

    const slider = document.getElementById("testimonial-slider");
    const dotsContainer = document.getElementById("testimonial-dots");

    let conversations = [];
    let currentConversation = [];
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
    if (currentConversation.length > 0) conversations.push(currentConversation);

    slider.innerHTML = conversations
      .map(
        (convo) => `
      <div class="testimonial-slide flex-shrink-0 w-full">
        <div class="w-full h-full flex flex-col" style="background-image: url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg'); background-size: cover;">
          <div class="bg-[#005E54] text-white pt-10 pb-2 px-2 flex items-center gap-3 shadow-md flex-shrink-0">
              <i data-lucide="arrow-left" class="w-5 h-5"></i>
              <div class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white/50"><i data-lucide="user" class="w-6 h-6 text-white"></i></div>
              <div class="flex-1"><h4 class="font-bold">Klien</h4><p class="text-xs">online</p></div>
              <i data-lucide="video" class="w-5 h-5"></i><i data-lucide="phone" class="w-5 h-5"></i>
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
                    ? "bg-[#E2FFC7] rounded-br-none"
                    : "bg-white rounded-bl-none"
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
              <i data-lucide="paperclip" class="w-6 h-6 text-gray-500"></i><i data-lucide="camera" class="w-6 h-6 text-gray-500"></i>
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

    const dots = dotsContainer.querySelectorAll(".testimonial-dot");
    slider.addEventListener("scroll", () => {
      const activeIndex = Math.round(slider.scrollLeft / slider.offsetWidth);
      dots.forEach((dot, i) =>
        dot.classList.toggle("bg-brand-orange-500", i === activeIndex)
      );
    });

    dotsContainer.addEventListener("click", (e) => {
      if (e.target.matches(".testimonial-dot")) {
        slider.scrollTo({
          left: slider.offsetWidth * e.target.dataset.slideTo,
          behavior: "smooth",
        });
      }
    });
  };

  window.setup_faq = function () {
    const faqContainer = document.getElementById("faq-container");
    faqContainer.innerHTML = faqData
      .map(
        (item) => `
      <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <button class="faq-question w-full flex justify-between items-center text-left p-4 font-semibold">
          <span>${item.question}</span>
          <i data-lucide="chevron-down" class="transition-transform duration-300"></i>
        </button>
        <div class="faq-answer px-4"><div class="pb-4 text-gray-700">${item.answer}</div></div>
      </div>`
      )
      .join("");

    faqContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".faq-question");
      if (!btn) return;
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector("i");
      const wasOpen =
        answer.style.maxHeight && answer.style.maxHeight !== "0px";

      document
        .querySelectorAll(".faq-answer")
        .forEach((ans) => (ans.style.maxHeight = null));
      document
        .querySelectorAll(".faq-question i")
        .forEach((ic) => (ic.style.transform = "rotate(0deg)"));

      if (!wasOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
      }
    });
  };

  window.setup_kontak = function () {
    // Event listeners for payment modals are handled globally
  };

  // --- GLOBAL EVENT LISTENERS & INITIALIZATION ---

  function openSidebar() {
    sidebar.classList.add("sidebar-open");
    sidebarBackdrop.classList.remove("hidden");
  }
  function closeSidebar() {
    sidebar.classList.remove("sidebar-open");
    sidebarBackdrop.classList.add("hidden");
  }
  openSidebarBtn.addEventListener("click", openSidebar);
  closeSidebarBtn.addEventListener("click", closeSidebar);
  sidebarBackdrop.addEventListener("click", closeSidebar);

  fabMainBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    fabContainer.classList.toggle("open");
    fabIcon.classList.toggle("rotate-45");
  });
  document.addEventListener("click", (e) => {
    if (!fabContainer.contains(e.target)) {
      fabContainer.classList.remove("open");
      fabIcon.classList.remove("rotate-45");
    }
  });

  document.body.addEventListener("click", (e) => {
    const pageLink = e.target.closest(".page-link, .order-from-service-btn");
    if (pageLink) {
      e.preventDefault();
      const page = pageLink.dataset.page;
      const slug = pageLink.dataset.categorySlug;
      const targetSection = document.getElementById(page);

      // Hide all sections, show the target one
      document
        .querySelectorAll("#page-container > section")
        .forEach((s) => (s.style.display = "none"));
      if (targetSection) {
        targetSection.style.display = "block";
      } else {
        // If section doesn't exist, load it
        showPage(page, slug);
      }

      // Update active nav links
      document
        .querySelectorAll(".nav-link")
        .forEach((a) => a.classList.remove("active"));
      document
        .querySelector(`.nav-link[data-page="${page}"]`)
        ?.classList.add("active");

      window.scrollTo({ top: 0, behavior: "smooth" });
      closeSidebar();
    }
  });

  const modals = {
    userInfo: {
      element: document.getElementById("user-info-modal"),
      closeBtn: document.getElementById("user-info-modal-close"),
    },
    payment: {
      element: document.getElementById("payment-modal"),
      closeBtn: document.getElementById("payment-modal-close"),
    },
  };

  function showModal(modalName) {
    if (modals[modalName]) {
      modals[modalName].element.classList.remove("modal-hidden");
      modals[modalName].element.classList.add("modal-visible");
    }
  }

  function closeModal(modalName) {
    if (modals[modalName]) {
      modals[modalName].element.classList.add("modal-hidden");
      modals[modalName].element.classList.remove("modal-visible");
    }
  }

  Object.keys(modals).forEach((key) => {
    const modal = modals[key];
    if (modal.element)
      modal.element.addEventListener("click", (e) => {
        if (e.target === modal.element) closeModal(key);
      });
    if (modal.closeBtn)
      modal.closeBtn.addEventListener("click", () => closeModal(key));
  });

  document.body.addEventListener("click", (e) => {
    if (e.target.id === "checkout-btn") showModal("userInfo");
  });

  // *** THIS IS THE CORRECTED PART ***
  document.getElementById("confirm-order-btn").addEventListener("click", () => {
    const nameInput = document.getElementById("visitor-name");
    if (!nameInput.value.trim()) {
      nameInput.focus();
      nameInput.classList.add("border-red-500", "ring-red-500");
      return;
    }
    nameInput.classList.remove("border-red-500", "ring-red-500");

    visitorData.name = nameInput.value.trim();
    const deadlineVal = document
      .getElementById("visitor-deadline-value")
      .value.trim();
    visitorData.deadline = deadlineVal
      ? `${deadlineVal} ${
          document.getElementById("visitor-deadline-unit").value
        }`
      : "Tidak ditentukan";

    const { subtotal, discount, fastTrackFee, finalTotal } = calculateTotals();
    const comments = document.getElementById("customer-comments").value.trim();

    const adminWA = "088709650064";
    const danaNumber = "088709650064";
    const bsiNumber = "7324408295";
    const accountHolder = "Syariffan";

    let msg = `Halo KawanBaraja, saya ${visitorData.name}. Saya tertarik untuk memesan layanan berikut:\n\n`;
    if (visitorData.deadline !== "Tidak ditentukan") {
      msg += `*Estimasi Deadline:* ${visitorData.deadline}\n\n`;
    }

    let regular = "";
    let custom = "";

    for (const id in cart) {
      const c = cart[id];
      if (c.isCustom) {
        custom += `- ${c.name}\n  _(Harga akan didiskusikan)_\n`;
        continue;
      }
      const item = servicesData
        .flatMap((s) => s.items)
        .find((i) => i.id === id);
      if (item) {
        if (item.selectable) {
          const n = c.chapters?.length || 0;
          if (n > 0) {
            let bill = new Set(c.chapters);
            if (c.totalChapters === 5 && bill.has("4") && bill.has("5"))
              bill.delete("5");
            const total = item.price * bill.size;
            const parentService = servicesData.find((s) =>
              s.items.some((i) => i.id === id)
            );
            regular += `*- ${item.name} (${
              parentService.category
            })* (BAB ${c.chapters.join(", ")})\n  Jumlah terhitung: ${
              bill.size
            } bab\n  Harga: ${formatCurrency(total)}\n\n`;
          }
        } else {
          const total = item.price * c.quantity;
          if (item.price === 0) {
            regular += `*- ${item.name}*\n  Harga: ${item.note}\n\n`;
          } else {
            regular += `*- ${item.name}*\n  Jumlah: ${c.quantity} ${
              item.unit
            }\n  Harga: ${formatCurrency(total)}\n\n`;
          }
        }
      }
    }

    if (regular) msg += `*Layanan Utama:*\n${regular}`;
    if (custom) {
      if (regular) msg += `--------------------------------------\n`;
      msg += `*Layanan Kustom:*\n${custom}\n`;
    }

    msg += "--------------------------------------\n";
    msg += `*Subtotal:* ${formatCurrency(subtotal)}\n`;
    if (discount > 0) msg += `*Diskon Diminta:* -${formatCurrency(discount)}\n`;
    if (isFastTrack)
      msg += `*Biaya Fast Track:* +${formatCurrency(fastTrackFee)}\n`;
    msg += `*Total Akhir:* ${formatCurrency(finalTotal)}\n\n`;

    if (comments) {
      msg +=
        "--------------------------------------\n*Catatan Tambahan:*\n" +
        comments +
        "\n\n";
    }

    msg += `--------------------------------------\n*Informasi Pembayaran:*\nSilakan lakukan pembayaran ke salah satu rekening di bawah ini:\n\n*Bank Syariah Indonesia (BSI)*\nNo. Rek: ${bsiNumber}\nA/n: ${accountHolder}\n\n*DANA*\nNo. HP: ${danaNumber}\nA/n: ${accountHolder}\n\n`;
    msg += "Mohon konfirmasi dan informasinya. Terima kasih!";

    closeModal("userInfo");
    // Correctly format WA number by removing leading '0'
    window.open(
      `https://wa.me/62${adminWA.substring(1)}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  });

  const paymentMeta = {
    dana: {
      title: "DANA",
      number: "088709650064",
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

  document.body.addEventListener("click", (e) => {
    const trigger = e.target.closest(".payment-modal-trigger");
    if (trigger) {
      const data = paymentMeta[trigger.dataset.pay];
      if (!data) return;
      document.getElementById("payment-modal-subtitle").textContent =
        data.title;
      document.getElementById("payment-modal-number").textContent = data.number;
      document.getElementById("payment-modal-holder").textContent = data.holder;
      document.getElementById(
        "payment-modal-icon-bg"
      ).className = `p-2 rounded-lg ${data.color}`;
      document
        .getElementById("payment-modal-icon")
        .setAttribute("data-lucide", data.icon);
      document.getElementById("payment-modal-copy").dataset.number =
        data.number;
      lucide.createIcons();
      showModal("payment");
    }
  });
  document
    .getElementById("payment-modal-close-bottom")
    .addEventListener("click", () => closeModal("payment"));
  document
    .getElementById("payment-modal-copy")
    .addEventListener("click", function () {
      navigator.clipboard.writeText(this.dataset.number).then(() => {
        document.getElementById("copy-button-text").textContent =
          "Berhasil Disalin!";
        setTimeout(() => {
          document.getElementById("copy-button-text").textContent =
            "Salin Nomor";
        }, 2000);
      });
    });

  // Initial Load
  async function init() {
    await showPage("beranda");
    await showPage("layanan");
    await showPage("pemesanan");
    await showPage("tentang");
    await showPage("faq");
    await showPage("kontak");

    // After all pages are loaded, show beranda by default
    document
      .querySelectorAll("#page-container > section")
      .forEach((s) => (s.style.display = "none"));
    document.getElementById("beranda").style.display = "block";
    document
      .querySelector('.nav-link[data-page="beranda"]')
      ?.classList.add("active");

    document.getElementById("current-year").textContent =
      new Date().getFullYear();
    mainContent.style.opacity = 1;
  }

  init();
});
