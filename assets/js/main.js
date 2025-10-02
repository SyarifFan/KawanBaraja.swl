document.addEventListener("DOMContentLoaded", () => {
  // --- KONFIGURASI UTAMA ---
  const WA_ADMIN_NUMBER = "6288709650064"; // Nomor WA Admin Utama
  const PAYMENT_DETAILS = {
    dana: { name: "DANA", number: "088709650064", holder: "Syariffan" },
    bsi: {
      name: "Bank Syariah Indonesia (BSI)",
      number: "7324408295",
      holder: "Syariffan",
    },
  };

  // --- KUMPULAN DATA ---
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
      client: "Budi - Teknik",
      chats: [
        {
          from: "admin",
          text: "Halo kak, draft Bab 4 & 5 nya sudah selesai ya. Silakan dicek dulu sebelum lanjut revisi.",
        },
        {
          from: "client",
          text: "Mantap kak, cepat sekali! Saya cek dulu. Tampilannya rapi banget, langsung di-acc dosen pembimbing nih kayaknya. Recommended!",
        },
        {
          from: "admin",
          text: "Alhamdulillah, siap kak. Nanti kalau ada feedback dari dosen, kabari saja ya.",
        },
      ],
    },
    {
      client: "Anita - Sastra",
      chats: [
        {
          from: "client",
          text: "Kak, terima kasih banyak bantuannya! Pengerjaan makalahnya cepat, rapi, dan nilaiku aman. Sangat membantu!",
        },
        {
          from: "admin",
          text: "Sama-sama kak Anita! Senang bisa membantu. Sukses selalu ya kuliahnya.",
        },
      ],
    },
    {
      client: "Rian - Ekonomi",
      chats: [
        {
          from: "client",
          text: "Layanan olah datanya luar biasa. Hasil SPSS nya detail dan penjelasannya mudah dipahami. Hemat waktu banget.",
        },
        {
          from: "admin",
          text: "Terima kasih feedbacknya kak Rian. Semoga lancar penelitiannya sampai selesai.",
        },
      ],
    },
    {
      client: "Sari - Komunikasi",
      chats: [
        {
          from: "client",
          text: "Slide presentasiku jadi keren banget! Desainnya modern dan isinya ringkas tapi kena. Jadi lebih PD buat presentasi. Makasih kak!",
        },
        {
          from: "admin",
          text: "You are welcome kak Sari! Semoga presentasinya lancar dan dapat nilai maksimal ya.",
        },
      ],
    },
    {
      client: "Joko - Hukum",
      chats: [
        {
          from: "client",
          text: "Turnitin di bawah 20%? Keren! Awalnya pusing banget sama parafrase, untung ada KawanBaraja. Makasih banyak kak!",
        },
        {
          from: "admin",
          text: "Siap kak Joko! Kami selalu usahakan yang terbaik.",
        },
      ],
    },
  ];

  // --- STATE MANAGEMENT ---
  let cart = {};
  let visitorData = { name: "Klien", deadline: "" };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);

  // --- CORE FUNCTIONS ---

  async function loadPage(page, slug = null) {
    try {
      const response = await fetch(`${page}.html`);
      if (!response.ok)
        throw new Error(`Halaman tidak ditemukan: ${page}.html`);
      const content = await response.text();
      document.getElementById("page-container").innerHTML = content;

      lucide.createIcons();
      window.scrollTo({ top: 0, behavior: "smooth" });

      const event = new CustomEvent("pageLoaded", { detail: { page, slug } });
      document.dispatchEvent(event);
    } catch (error) {
      console.error("Gagal memuat halaman:", error);
      document.getElementById(
        "page-container"
      ).innerHTML = `<div class="text-center p-8"><p>Maaf, terjadi kesalahan saat memuat konten.</p></div>`;
    }
  }

  // --- EVENT LISTENERS ---

  // Listener yang diaktifkan SETELAH halaman baru dimuat
  document.addEventListener("pageLoaded", (e) => {
    const { page, slug } = e.detail;
    if (page === "beranda") initBeranda();
    if (page === "layanan") initLayanan();
    if (page === "pemesanan") initPemesanan(slug);
    if (page === "tentang") initTentang();
    if (page === "faq") initFaq();
  });

  // Listener utama pada body yang stabil untuk semua klik
  document.body.addEventListener("click", (e) => {
    const target = e.target;

    // Navigasi SPA
    const pageLink = target.closest(".page-link, .order-from-service-btn");
    if (pageLink && !pageLink.getAttribute("href")?.startsWith("http")) {
      e.preventDefault();
      const page = pageLink.dataset.page;
      const slug = pageLink.dataset.categorySlug || null;
      loadPage(page, slug);

      if (pageLink.classList.contains("page-link")) {
        document
          .querySelectorAll(".nav-link")
          .forEach((l) => l.classList.remove("active"));
        document
          .querySelectorAll(`.nav-link[data-page="${page}"]`)
          .forEach((l) => l.classList.add("active"));
        closeSidebar();
      }
    }
  });

  // --- PAGE INITIALIZERS ---

  function initBeranda() {
    const animatedTextEl = document.getElementById("animated-text");
    if (animatedTextEl) {
      const textToAnimate = `KawanBaraja siap membantumu!`;
      animatedTextEl.innerHTML = "";
      textToAnimate.split("").forEach((char, idx) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.animationDelay = `${idx * 0.05}s`;
        animatedTextEl.appendChild(span);
      });
    }
    const counters = document.querySelectorAll(".counter");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute("data-target");
            let current = 0;
            const duration = 1500;
            const increment = Math.max(1, Math.ceil(target / (duration / 16)));
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
    counters.forEach((counter) => {
      counter.textContent = "0";
      observer.observe(counter);
    });

    document
      .getElementById("beranda-content")
      .addEventListener("click", (e) => {
        if (e.target.closest(".payment-modal-trigger")) {
          showPaymentModal(
            e.target.closest(".payment-modal-trigger").dataset.pay
          );
        }
      });
  }

  function initLayanan() {
    const layananNavDesktop = document.getElementById("layanan-nav-desktop");
    const layananAccordionMobile = document.getElementById(
      "layanan-accordion-mobile"
    );
    layananNavDesktop.innerHTML = servicesData
      .map(
        (s, i) =>
          `<button data-service-slug="${
            s.slug
          }" class="layanan-nav-btn w-full flex items-center gap-4 p-4 rounded-lg text-left ${
            i === 0
              ? "bg-brand-orange-100 text-brand-orange-800 font-semibold"
              : "hover:bg-gray-100"
          }"><i data-lucide="${s.icon}" class="w-6 h-6 text-${
            s.color
          } flex-shrink-0"></i><span class="font-semibold">${
            s.category
          }</span></button>`
      )
      .join("");
    layananAccordionMobile.innerHTML = servicesData
      .map(
        (s) =>
          `<div class="bg-white rounded-lg shadow-sm"><button data-service-slug="${s.slug}" class="layanan-nav-btn w-full flex justify-between items-center gap-4 p-4 text-left"><div class="flex items-center gap-4"><i data-lucide="${s.icon}" class="w-6 h-6 text-${s.color} flex-shrink-0"></i><span class="font-semibold text-gray-800">${s.category}</span></div><i data-lucide="chevron-down" class="accordion-icon w-5 h-5 text-gray-400 transition-transform"></i></button><div class="layanan-desc-mobile px-4 text-gray-600"><div class="border-t pt-4"><p class="mb-4 leading-relaxed">${s.description}</p><button data-page="pemesanan" data-category-slug="${s.slug}" class="order-from-service-btn inline-flex items-center gap-2 bg-brand-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-brand-blue-600 text-sm"><i data-lucide="shopping-cart" class="w-4 h-4"></i> Pesan Layanan Ini</button></div></div></div>`
      )
      .join("");
    lucide.createIcons();
    updateLayananContent("harian");

    document
      .getElementById("layanan-section-container")
      .addEventListener("click", (e) => {
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
  }

  function updateLayananContent(slug) {
    const s = servicesData.find((v) => v.slug === slug);
    if (!s) return;
    document.getElementById(
      "layanan-content-desktop"
    ).innerHTML = `<div style="animation:fadeInPage .5s"><h3 class="text-2xl font-extrabold text-brand-blue-700 mb-2 font-display">${s.category}</h3><p class="text-gray-700 mb-6 leading-relaxed">${s.description}</p><div class="border-t pt-4"><button data-page="pemesanan" data-category-slug="${s.slug}" class="order-from-service-btn inline-flex items-center gap-2 bg-brand-blue-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-brand-blue-600 transition-all shadow"><i data-lucide="shopping-cart" class="w-4 h-4"></i> Pesan Layanan Ini</button></div></div>`;
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

  function initPemesanan(slug) {
    let cardHtml = servicesData
      .map(
        (s) =>
          `<button data-category-slug="${s.slug}" class="order-category-btn p-3 rounded-lg shadow-sm text-center bg-white border border-transparent"><i data-lucide="${s.icon}" class="mx-auto w-8 h-8 text-${s.color}"></i><span class="block text-xs font-semibold mt-2">${s.category}</span></button>`
      )
      .join("");
    cardHtml += `<button data-category-slug="custom" class="order-category-btn p-3 rounded-lg shadow-sm text-center bg-white border border-transparent"><i data-lucide="plus-square" class="mx-auto w-8 h-8 text-brand-orange-500"></i><span class="block text-xs font-semibold mt-2">Layanan Lainnya</span></button>`;
    document.getElementById("order-category-cards").innerHTML = cardHtml;
    lucide.createIcons();

    const pemesananContainer = document.getElementById("pemesanan-container");

    pemesananContainer.addEventListener("click", (e) => {
      const catBtn = e.target.closest(".order-category-btn");
      if (catBtn) {
        document
          .querySelectorAll(".order-category-btn")
          .forEach((b) =>
            b.classList.remove(
              "active",
              "bg-brand-orange-100",
              "border-brand-orange-500"
            )
          );
        catBtn.classList.add(
          "active",
          "bg-brand-orange-100",
          "border-brand-orange-500"
        );
        const categorySlug = catBtn.dataset.categorySlug;
        if (categorySlug === "custom") renderCustomServiceForm();
        else renderOrderItems(categorySlug);
        updateProcessIndicator(1);
      }
      const qtyBtn = e.target.closest(".qty-btn");
      if (qtyBtn) {
        const id = qtyBtn.dataset.id;
        const change = parseInt(qtyBtn.dataset.change, 10);
        const cur = cart[id] ? cart[id].quantity : 0;
        const next = Math.max(1, cur + change);
        cart[id].quantity = next;
        document.getElementById(`qty_val_${id}`).textContent = next;
        updateCartUI();
      }
      if (e.target.id === "add-custom-service-btn") {
        const input = document.getElementById("custom-service-name");
        const val = input.value.trim();
        if (!val) {
          input.focus();
          return;
        }
        const id = `custom_${Date.now()}`;
        cart[id] = { name: val, isCustom: true };
        updateCartUI();
        input.value = "";
        input.focus();
      }
    });

    pemesananContainer.addEventListener("change", (e) => {
      const t = e.target;
      if (
        t.type === "checkbox" &&
        !t.classList.contains("chapter-check") &&
        !t.id.includes("fast-track")
      ) {
        const id = t.dataset.id;
        const item = servicesData
          .flatMap((s) => s.items)
          .find((i) => i.id === id);
        const parentService = servicesData.find((s) =>
          s.items.some((i) => i.id === id)
        );
        if (t.checked) {
          const cartItem = { category: parentService.category };
          if (item.selectable) {
            cartItem.chapters = [];
            cartItem.totalChapters = 5;
            document
              .getElementById(`selection_container_${id}`)
              ?.classList.remove("hidden");
            renderChapterCheckboxes(id, 5);
          } else {
            cartItem.quantity = 1;
            const qtyEl = document.getElementById(`qty_${id}`);
            if (qtyEl) {
              qtyEl.classList.remove("hidden");
              qtyEl.classList.add("flex");
              document.getElementById(`qty_val_${id}`).textContent = "1";
            }
          }
          cart[id] = cartItem;
        } else {
          delete cart[id];
          if (item.selectable) {
            document
              .getElementById(`selection_container_${id}`)
              ?.classList.add("hidden");
          } else {
            document.getElementById(`qty_${id}`)?.classList.add("hidden");
          }
        }
        updateCartUI();
      }
      if (t.classList.contains("chapter-check")) {
        const id = t.dataset.id;
        const chapter = t.dataset.chapter;
        const boxContainer = t.closest(`#chapters_${id}`);
        if (cart[id] && cart[id].totalChapters === 5) {
          if (chapter === "4") {
            const c5 = boxContainer.querySelector('[data-chapter="5"]');
            if (c5) c5.checked = t.checked;
          }
          if (chapter === "5") {
            const c4 = boxContainer.querySelector('[data-chapter="4"]');
            if (c4) c4.checked = t.checked;
          }
        }
        if (cart[id]) {
          const sel = [];
          boxContainer
            .querySelectorAll(".chapter-check:checked")
            .forEach((cb) => sel.push(cb.dataset.chapter));
          cart[id].chapters = sel.sort((a, b) => parseInt(a) - parseInt(b));
        }
        updateCartUI();
      }
    });

    document
      .getElementById("order-form-items")
      .addEventListener("input", (e) => {
        if (e.target.classList.contains("total-chapters-input")) {
          const id = e.target.dataset.id;
          const total = parseInt(e.target.value) || 1;
          if (cart[id]) {
            cart[id].totalChapters = total;
            renderChapterCheckboxes(id, total);
            cart[id].chapters = (cart[id].chapters || []).filter(
              (c) => parseInt(c) <= total
            );
            updateCartUI();
          }
        }
      });

    document
      .getElementById("discount-request")
      .addEventListener("input", updateCartUI);
    document
      .getElementById("fast-track-checkbox")
      .addEventListener("change", updateCartUI);
    document.getElementById("cancel-all-btn").addEventListener("click", () => {
      cart = {};
      document.getElementById("discount-request").value = "";
      document.getElementById("customer-comments").value = "";
      document.getElementById("fast-track-checkbox").checked = false;
      const active = document.querySelector(".order-category-btn.active");
      if (active) {
        const categorySlug = active.dataset.categorySlug;
        if (categorySlug === "custom") renderCustomServiceForm();
        else renderOrderItems(categorySlug);
      } else {
        document.getElementById(
          "order-form-items"
        ).innerHTML = `<div id="order-placeholder" class="flex flex-col items-center justify-center h-full text-center text-gray-500"><i data-lucide="mouse-pointer-click" class="w-16 h-16 mb-4"></i><p class="font-semibold">Pilih kategori layanan di atas</p><p class="text-sm">Daftar item akan muncul di sini.</p></div>`;
        lucide.createIcons();
      }
      updateCartUI();
    });
    document
      .getElementById("checkout-btn")
      .addEventListener("click", showUserInfoModal);
    document
      .getElementById("copy-summary-btn")
      .addEventListener("click", copyOrderSummary);

    updateProcessIndicator(Object.keys(cart).length > 0 ? 2 : 1);
    updateCartUI();
    if (slug) {
      setTimeout(() => {
        document
          .querySelector(`.order-category-btn[data-category-slug="${slug}"]`)
          ?.click();
      }, 100);
    }
  }

  function initTentang() {
    const rotatingQuoteEl = document.getElementById("rotating-quote");
    if (rotatingQuoteEl) {
      rotatingQuoteEl.textContent = `"${
        quotes[Math.floor(Math.random() * quotes.length)]
      }"`;
    }
    renderTestimonials();
  }

  function initFaq() {
    const faqContainer = document.getElementById("faq-container");
    faqContainer.innerHTML = faqData
      .map(
        (item) =>
          `<div class="bg-white rounded-lg shadow-sm border border-gray-200"><button class="faq-question w-full flex justify-between items-center text-left p-4 font-semibold"><span>${item.question}</span><i data-lucide="chevron-down" class="transition-transform duration-300 w-5 h-5"></i></button><div class="faq-answer px-4"><div class="pb-4 text-gray-700">${item.answer}</div></div></div>`
      )
      .join("");
    lucide.createIcons();
    faqContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".faq-question");
      if (!btn) return;
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector("svg");
      if (!answer || !icon) return;
      const wasOpen =
        answer.style.maxHeight && answer.style.maxHeight !== "0px";
      document
        .querySelectorAll("#faq-container .faq-answer")
        .forEach((ans) => (ans.style.maxHeight = null));
      document
        .querySelectorAll("#faq-container .faq-question svg")
        .forEach((ic) => (ic.style.transform = "rotate(0deg)"));
      if (!wasOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
      }
    });
  }

  // --- PEMESANAN RENDER FUNCTIONS ---

  function renderOrderItems(slug) {
    const orderFormItemsContainer = document.getElementById("order-form-items");
    const orderPlaceholder = document.getElementById("order-placeholder");
    const s = servicesData.find((v) => v.slug === slug);
    if (!s) return;

    orderPlaceholder.style.display = "none";
    const container = document.createElement("div");
    container.className = "space-y-3";
    container.style.animation = "fadeInPage .5s";

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
          : item.note || "Nego"
      })</span></label> </div>`;
      if (!item.selectable) {
        inner += `<div id="qty_${item.id}" class="${
          cart[item.id] ? "flex" : "hidden"
        } items-center space-x-2"> <button data-id="${
          item.id
        }" data-change="-1" class="qty-btn bg-gray-200 w-7 h-7 rounded-full font-bold hover:bg-gray-300">-</button> <span id="qty_val_${
          item.id
        }" class="font-bold w-8 text-center">${
          cart[item.id] ? cart[item.id].quantity : 1
        }</span> <button data-id="${
          item.id
        }" data-change="1" class="qty-btn bg-gray-200 w-7 h-7 rounded-full font-bold hover:bg-gray-300">+</button> </div>`;
      }
      inner += `</div>`;
      wrap.innerHTML = inner;
      if (item.selectable) {
        const sel = document.createElement("div");
        sel.id = `selection_container_${item.id}`;
        sel.className = `pl-8 pt-2 space-y-2 ${cart[item.id] ? "" : "hidden"}`;
        const cartItem = cart[item.id] || {};
        const totalChapters = cartItem.totalChapters || 5;
        sel.innerHTML = `<div class="flex items-center gap-2"> <label for="total_chapters_${item.id}" class="text-sm font-semibold">Jumlah BAB:</label> <input id="total_chapters_${item.id}" data-id="${item.id}" type="number" value="${totalChapters}" min="1" class="total-chapters-input w-16 rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-brand-orange-500 focus:ring-2 focus:ring-brand-orange-200"> </div> <div id="chapters_${item.id}" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 pt-2"></div>`;
        wrap.appendChild(sel);
        if (cart[item.id]) renderChapterCheckboxes(item.id, totalChapters);
      }
      container.appendChild(wrap);
    });
    orderFormItemsContainer.innerHTML = "";
    orderFormItemsContainer.appendChild(container);
  }

  function renderCustomServiceForm() {
    const orderFormItemsContainer = document.getElementById("order-form-items");
    const orderPlaceholder = document.getElementById("order-placeholder");
    orderPlaceholder.style.display = "none";
    orderFormItemsContainer.innerHTML = `
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

  function updateProcessIndicator(step) {
    const processIndicator = document.getElementById("process-indicator");
    if (!processIndicator) return;
    const steps = [
      { icon: "list-filter", text: "Pilih Kategori" },
      { icon: "shopping-basket", text: "Atur Pesanan" },
      { icon: "send", text: "Kirim Pesanan" },
    ];
    processIndicator.innerHTML = steps
      .map(
        (s, i) => `
      <div class="flex items-center gap-2 ${
        i + 1 <= step ? "text-brand-orange-600" : "text-gray-400"
      }">
        <div class="rounded-full border-2 ${
          i + 1 <= step
            ? "border-brand-orange-500 bg-brand-orange-50"
            : "border-gray-300"
        } p-1.5">
          <i data-lucide="${s.icon}" class="w-4 h-4"></i>
        </div>
        <span class="hidden sm:inline font-semibold text-sm">${s.text}</span>
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

  // --- CART & TOTALS LOGIC ---

  function getBillableChapters(cartItem) {
    if (!cartItem || !cartItem.chapters || cartItem.chapters.length === 0) {
      return new Set();
    }
    const billable = new Set(cartItem.chapters);
    if (
      cartItem.totalChapters === 5 &&
      billable.has("4") &&
      billable.has("5")
    ) {
      billable.delete("5");
    }
    return billable;
  }

  function calculateSubtotal() {
    let subtotal = 0;
    for (const itemId in cart) {
      const c = cart[itemId];
      if (c.isCustom) continue;
      const item = servicesData
        .flatMap((s) => s.items)
        .find((i) => i.id === itemId);
      if (item) {
        if (item.selectable) {
          const billableChapters = getBillableChapters(c);
          subtotal += item.price * billableChapters.size;
        } else {
          subtotal += item.price * c.quantity;
        }
      }
    }
    return subtotal;
  }

  function updateCartUI() {
    const cartItemsList = document.getElementById("cart-items-list");
    const subtotalPriceEl = document.getElementById("subtotal-price");
    const fastTrackFeeEl = document.getElementById("fast-track-fee");
    const discountAmountEl = document.getElementById("discount-amount");
    const totalPriceEl = document.getElementById("total-price");
    const emptyCartMessage = document.getElementById("empty-cart-message");
    const checkoutBtn = document.getElementById("checkout-btn");
    const copySummaryBtn = document.getElementById("copy-summary-btn");
    const cancelAllBtn = document.getElementById("cancel-all-btn");
    const discountInput = document.getElementById("discount-request");
    const fastTrackCheckbox = document.getElementById("fast-track-checkbox");

    if (!cartItemsList) return;

    cartItemsList.innerHTML = "";
    const subtotal = calculateSubtotal();
    const isFastTrack = fastTrackCheckbox.checked;
    const fastTrackFee = isFastTrack ? subtotal * 0.15 : 0;

    const maxDiscount = Math.floor(subtotal * 0.1);
    let discount = parseInt(discountInput.value) || 0;
    if (discount > maxDiscount && maxDiscount > 0) {
      discountInput.value = maxDiscount;
      discount = maxDiscount;
    }

    const finalTotal = Math.max(0, subtotal + fastTrackFee - discount);

    let hasItems = false;
    for (const itemId of Object.keys(cart)) {
      const c = cart[itemId];
      if (c.isCustom) {
        hasItems = true;
        const el = document.createElement("div");
        el.className = "flex justify-between items-center text-sm";
        el.innerHTML = `<div><p class="font-semibold">${c.name}</p><p class="text-xs text-gray-500">Layanan Kustom</p></div><p class="font-bold text-brand-blue-500">Nego</p>`;
        cartItemsList.appendChild(el);
      } else {
        const item = servicesData
          .flatMap((s) => s.items)
          .find((i) => i.id === itemId);
        if (item) {
          const billableChapters = getBillableChapters(c);
          if (item.selectable && billableChapters.size === 0) continue;

          hasItems = true;
          const el = document.createElement("div");
          el.className = "flex justify-between items-center text-sm";
          let name = item.name;
          let priceText = "";
          let itemTotal = 0;

          if (item.selectable) {
            name += ` (BAB ${c.chapters.join(", ")})`;
            priceText = `${billableChapters.size} x ${formatCurrency(
              item.price
            )}`;
            itemTotal = item.price * billableChapters.size;
          } else {
            priceText = `${c.quantity} x ${formatCurrency(item.price)}`;
            itemTotal = item.price * c.quantity;
          }
          el.innerHTML = `<div><p class="font-semibold">${name}</p><p class="text-xs text-gray-500">${priceText}</p></div><p class="font-bold">${formatCurrency(
            itemTotal
          )}</p>`;
          cartItemsList.appendChild(el);
        }
      }
    }

    emptyCartMessage.style.display = hasItems ? "none" : "block";
    checkoutBtn.disabled = !hasItems;
    copySummaryBtn.disabled = !hasItems;
    cancelAllBtn.disabled = !hasItems;

    subtotalPriceEl.textContent = formatCurrency(subtotal);
    fastTrackFeeEl.textContent = formatCurrency(fastTrackFee);
    discountAmountEl.textContent = `- ${formatCurrency(discount)}`;
    totalPriceEl.textContent = formatCurrency(finalTotal);

    updateProcessIndicator(hasItems ? 2 : 1);
  }

  function copyOrderSummary() {
    const fastTrackCheckbox = document.getElementById("fast-track-checkbox");
    const discountInput = document.getElementById("discount-request");

    const subtotal = calculateSubtotal();
    const isFastTrack = fastTrackCheckbox.checked;
    const fastTrackFee = isFastTrack ? subtotal * 0.15 : 0;

    const maxDiscount = Math.floor(subtotal * 0.1);
    let discount = parseInt(discountInput.value) || 0;
    if (discount > maxDiscount && maxDiscount > 0) {
      discount = maxDiscount;
    }

    const finalTotal = Math.max(0, subtotal + fastTrackFee - discount);

    let summary = `*HARGA LAYANAN*\n\n`;

    for (const id in cart) {
      const c = cart[id];
      if (c.isCustom) {
        summary += `- ${c.name}: *Nego*\n`;
        continue;
      }
      const item = servicesData
        .flatMap((s) => s.items)
        .find((i) => i.id === id);
      if (item) {
        if (item.selectable) {
          const billableChapters = getBillableChapters(c);
          if (billableChapters.size > 0) {
            summary += `- ${item.name} (BAB ${c.chapters.join(
              ", "
            )}): *${formatCurrency(item.price * billableChapters.size)}*\n`;
          }
        } else {
          summary += `- ${item.name} (${c.quantity} ${
            item.unit
          }): *${formatCurrency(item.price * c.quantity)}*\n`;
        }
      }
    }

    summary += `\n--------------------------------------\n`;
    summary += `Subtotal: ${formatCurrency(subtotal)}\n`;
    if (isFastTrack)
      summary += `Biaya Fast Track: ${formatCurrency(fastTrackFee)}\n`;
    if (discount > 0) summary += `Diskon: -${formatCurrency(discount)}\n`;
    summary += `*Total Akhir: ${formatCurrency(finalTotal)}*\n`;
    summary += `--------------------------------------\n\n`;
    summary += `*Metode Pembayaran:*\n\n`;
    summary += `*${PAYMENT_DETAILS.dana.name}*\nNo: ${PAYMENT_DETAILS.dana.number}\nA/n: ${PAYMENT_DETAILS.dana.holder}\n\n`;
    summary += `*${PAYMENT_DETAILS.bsi.name}*\nNo: ${PAYMENT_DETAILS.bsi.number}\nA/n: ${PAYMENT_DETAILS.bsi.holder}\n\n`;
    summary += `Terima kasih!`;

    navigator.clipboard
      .writeText(summary)
      .then(() => {
        showToast("Rincian harga berhasil disalin!");
      })
      .catch((err) => {
        console.error("Gagal menyalin:", err);
        showToast("Gagal menyalin rincian.", true);
      });
  }

  // --- TESTIMONIALS ---
  function renderTestimonials() {
    const slider = document.getElementById("testimonial-slider");
    const dotsContainer = document.getElementById("testimonial-dots");
    if (!slider || !dotsContainer) return;

    slider.innerHTML = testimonialsData
      .map(
        (convo) => `
      <div class="testimonial-slide flex-shrink-0 w-full">
        <div class="w-full h-full flex flex-col bg-cover" style="background-image: url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg');">
          <div class="bg-[#005E54] text-white pt-10 pb-2 px-2 flex items-center gap-3 shadow-md">
              <i data-lucide="arrow-left" class="w-5 h-5"></i>
              <div class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white/50"><i data-lucide="user" class="w-6 h-6 text-white"></i></div>
              <div class="flex-1">
                  <h4 class="font-bold">${convo.client}</h4>
                  <p class="text-xs">online</p>
              </div>
              <i data-lucide="video" class="w-5 h-5"></i>
              <i data-lucide="phone" class="w-5 h-5"></i>
          </div>
          <div class="p-4 flex-1 overflow-y-auto flex flex-col space-y-3 pt-6 pb-6">
            ${convo.chats
              .map(
                (chat) => `
              <div class="flex ${
                chat.from === "admin" ? "justify-end" : "justify-start"
              }">
                <div class="max-w-[80%] p-2.5 rounded-xl shadow-sm ${
                  chat.from === "admin"
                    ? "bg-[#E2FFC7] text-gray-800 rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none"
                }">
                  <p class="text-sm">${chat.text}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
          <div class="bg-gray-100 p-2 flex items-center gap-2">
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

    dotsContainer.innerHTML = testimonialsData
      .map(
        (_, i) =>
          `<button data-slide-to="${i}" class="testimonial-dot h-2 w-2 rounded-full transition-colors ${
            i === 0 ? "bg-brand-orange-500" : "bg-gray-300"
          }"></button>`
      )
      .join("");

    const dots = dotsContainer.querySelectorAll(".testimonial-dot");
    slider.addEventListener("scroll", () => {
      const slideWidth = slider.offsetWidth;
      const activeIndex = Math.round(slider.scrollLeft / slideWidth);
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
    lucide.createIcons();
  }

  // --- MODALS & UI HELPERS ---

  function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("modal-hidden");
      modal.classList.add("modal-visible");
      document.body.style.overflow = "hidden";
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("modal-hidden");
      modal.classList.remove("modal-visible");
      document.body.style.overflow = "";
    }
  }

  function showUserInfoModal() {
    showModal("user-info-modal");
    document.getElementById("visitor-name").focus();
  }

  function showPaymentModal(kind) {
    const data = {
      dana: {
        title: "DANA",
        number: PAYMENT_DETAILS.dana.number,
        holder: PAYMENT_DETAILS.dana.holder,
        icon: "smartphone",
        color: "bg-blue-100 text-blue-600",
      },
      bsi: {
        title: "Bank Syariah Indonesia",
        number: PAYMENT_DETAILS.bsi.number,
        holder: PAYMENT_DETAILS.bsi.holder,
        icon: "banknote",
        color: "bg-green-100 text-green-700",
      },
    }[kind];
    if (!data) return;

    document.getElementById("payment-modal-subtitle").textContent = data.title;
    document.getElementById("payment-modal-number").textContent = data.number;
    document.getElementById("payment-modal-holder").textContent = data.holder;
    document.getElementById(
      "payment-modal-icon-bg"
    ).className = `p-2 rounded-lg ${data.color}`;
    document
      .getElementById("payment-modal-icon")
      .setAttribute("data-lucide", data.icon);
    lucide.createIcons();
    document.getElementById("payment-modal-copy").dataset.number = data.number;

    showModal("payment-modal");
  }

  // Event listeners untuk semua modal (dipasang sekali)
  document
    .getElementById("user-info-modal-close")
    ?.addEventListener("click", () => closeModal("user-info-modal"));
  document.getElementById("user-info-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "user-info-modal") closeModal("user-info-modal");
  });

  document
    .getElementById("payment-modal-close")
    ?.addEventListener("click", () => closeModal("payment-modal"));
  document
    .getElementById("payment-modal-close-bottom")
    ?.addEventListener("click", () => closeModal("payment-modal"));
  document.getElementById("payment-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "payment-modal") closeModal("payment-modal");
  });
  document
    .getElementById("payment-modal-copy")
    ?.addEventListener("click", function () {
      navigator.clipboard.writeText(this.dataset.number).then(() => {
        showToast("Nomor berhasil disalin!");
      });
    });

  document
    .getElementById("confirm-order-btn")
    ?.addEventListener("click", () => {
      const visitorNameInput = document.getElementById("visitor-name");
      const visitorName = visitorNameInput.value.trim();
      if (!visitorName) {
        visitorNameInput.focus();
        visitorNameInput.classList.add("border-red-500", "ring-red-500");
        return;
      }
      visitorNameInput.classList.remove("border-red-500", "ring-red-500");

      visitorData.name = visitorName;
      const deadlineValue = document
        .getElementById("visitor-deadline-value")
        .value.trim();
      const deadlineUnit = document.getElementById(
        "visitor-deadline-unit"
      ).value;
      visitorData.deadline = deadlineValue
        ? `${deadlineValue} ${deadlineUnit}`
        : "Tidak ditentukan";

      updateProcessIndicator(3);

      const subtotal = calculateSubtotal();
      const isFastTrack = document.getElementById(
        "fast-track-checkbox"
      ).checked;
      const fastTrackFee = isFastTrack ? subtotal * 0.15 : 0;
      const disc =
        parseInt(document.getElementById("discount-request").value) || 0;
      const finalTotal = Math.max(0, subtotal + fastTrackFee - disc);
      const comments = document
        .getElementById("customer-comments")
        .value.trim();

      let msg = `Halo KawanBaraja, saya *${visitorData.name}*. Saya tertarik untuk memesan layanan berikut:\n\n`;
      if (visitorData.deadline !== "Tidak ditentukan")
        msg += `*Estimasi Deadline:* ${visitorData.deadline}\n\n`;

      for (const id in cart) {
        const c = cart[id];
        if (c.isCustom) {
          msg += `- ${c.name}: *Nego*\n`;
          continue;
        }
        const item = servicesData
          .flatMap((s) => s.items)
          .find((i) => i.id === id);
        if (item) {
          if (item.selectable) {
            const billableChapters = getBillableChapters(c);
            if (billableChapters.size > 0) {
              msg += `- *${item.name}* (BAB ${c.chapters.join(
                ", "
              )} | Terhitung: ${billableChapters.size} bab): ${formatCurrency(
                item.price * billableChapters.size
              )}\n`;
            }
          } else {
            msg += `- *${item.name}* (${c.quantity} ${
              item.unit
            }): ${formatCurrency(item.price * c.quantity)}\n`;
          }
        }
      }

      msg += `\n--------------------------------------\n`;
      msg += `Subtotal: ${formatCurrency(subtotal)}\n`;
      if (isFastTrack)
        msg += `Biaya Fast Track: ${formatCurrency(fastTrackFee)}\n`;
      if (disc > 0) msg += `Diskon: -${formatCurrency(disc)}\n`;
      msg += `*Total Akhir: ${formatCurrency(finalTotal)}*\n`;

      if (comments) {
        msg += `\n*Catatan Tambahan:*\n${comments}\n`;
      }

      msg += `\n--------------------------------------\n*Metode Pembayaran:*\n\n`;
      msg += `*${PAYMENT_DETAILS.dana.name}*\nNo: ${PAYMENT_DETAILS.dana.number}\nA/n: ${PAYMENT_DETAILS.dana.holder}\n\n`;
      msg += `*${PAYMENT_DETAILS.bsi.name}*\nNo: ${PAYMENT_DETAILS.bsi.number}\nA/n: ${PAYMENT_DETAILS.bsi.holder}\n\n`;
      msg += `Mohon konfirmasi dan informasinya. Terima kasih!`;

      closeModal("user-info-modal");
      window.open(
        `https://wa.me/${WA_ADMIN_NUMBER}?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    });

  const sidebar = document.getElementById("mobile-sidebar");
  const sidebarBackdrop = document.getElementById("sidebar-backdrop");
  function openSidebar() {
    sidebar.classList.add("sidebar-open");
    sidebarBackdrop.classList.remove("hidden");
  }
  function closeSidebar() {
    sidebar.classList.remove("sidebar-open");
    sidebarBackdrop.classList.add("hidden");
  }
  document
    .getElementById("open-sidebar")
    .addEventListener("click", openSidebar);
  document
    .getElementById("close-sidebar")
    .addEventListener("click", closeSidebar);
  sidebarBackdrop.addEventListener("click", closeSidebar);

  const fabContainer = document.getElementById("fab-container");
  const fabMainBtn = document.getElementById("fab-main-btn");
  const fabIcon = document.getElementById("fab-icon");
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

  function showToast(message, isError = false) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.className = `fixed bottom-5 right-5 p-4 rounded-lg shadow-lg text-white font-semibold z-[100] transition-transform duration-300 transform translate-y-20`;
    toast.classList.add(isError ? "bg-red-500" : "bg-gray-800");
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove("translate-y-20");
    }, 100);
    setTimeout(() => {
      toast.classList.add("translate-y-20");
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // --- INISIALISASI ---
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
  loadPage("beranda").then(() => {
    document.getElementById("main-content").style.opacity = 1;
  });
  document
    .querySelector('.nav-link[data-page="beranda"]')
    ?.classList.add("active");
});
