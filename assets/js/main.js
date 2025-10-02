document.addEventListener("DOMContentLoaded", () => {
  // --- DATA SETS (GLOBAL) ---
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
        },
        {
          id: "artikel_buat_skripsi",
          name: "Buat Artikel/Jurnal Penelitian Skripsi",
          price: 10000,
          unit: "halaman",
        },
        {
          id: "artikel_publish_non_sinta",
          name: "Publish Artikel Non Sinta/OJS",
          price: 300000,
          unit: "per-artikel",
        },
        {
          id: "artikel_publish_sinta",
          name: "Publish Artikel Sinta 3,4,5, dan 6",
          price: 0,
          unit: "nego",
          note: "Disesuaikan dengan prediket sinta dan Publisher Jurnal Keilmuan",
        },
        {
          id: "artikel_submit",
          name: "Submit Artikel Non Sinta/Prediket Sinta",
          price: 50000,
          unit: "per-file",
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

  let cart = JSON.parse(localStorage.getItem("kawanBarajaCart")) || {};
  let visitorData = { name: "Klien", deadline: "" };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);

  const sidebar = document.getElementById("mobile-sidebar");
  const sidebarBackdrop = document.getElementById("sidebar-backdrop");
  const openSidebarBtn = document.getElementById("open-sidebar");
  const closeSidebarBtn = document.getElementById("close-sidebar");

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

  const fabContainer = document.getElementById("fab-container");
  const fabMainBtn = document.getElementById("fab-main-btn");
  const fabIcon = document.getElementById("fab-icon");
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

  if (document.getElementById("page-beranda")) {
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
    let hasCounterAnimated = false;
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

  if (document.getElementById("page-layanan")) {
    const layananNavDesktop = document.getElementById("layanan-nav-desktop");
    const layananContentDesktop = document.getElementById(
      "layanan-content-desktop"
    );
    const layananAccordionMobile = document.getElementById(
      "layanan-accordion-mobile"
    );
    function renderLayanan() {
      if (!layananNavDesktop || !layananAccordionMobile) return;
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
                    <a href="/KawanBaraja.swl/pemesanan.html?category=${s.slug}" class="order-from-service-btn inline-flex items-center gap-2 bg-brand-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-brand-blue-600 text-sm">
                      <i data-lucide="shopping-cart" class="w-4 h-4"></i> Pesan Layanan Ini
                    </a>
                  </div>
                </div>
              </div>
            `
        )
        .join("");
    }
    function updateLayananContent(slug) {
      const s = servicesData.find((v) => v.slug === slug);
      if (!s || !layananContentDesktop) return;
      layananContentDesktop.innerHTML = `
              <div style="animation:fadeInPage .5s">
                <h3 class="text-2xl font-extrabold text-brand-blue-700 mb-2 font-display">${s.category}</h3>
                <p class="text-gray-700 mb-6 leading-relaxed">${s.description}</p>
                <div class="border-t pt-4">
                  <a href="/KawanBaraja.swl/pemesanan.html?category=${s.slug}" class="order-from-service-btn inline-flex items-center gap-2 bg-brand-blue-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-brand-blue-600 transition-all shadow">
                    <i data-lucide="shopping-cart" class="w-4 h-4"></i> Pesan Layanan Ini
                  </a>
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
    document.getElementById("layanan").addEventListener("click", (e) => {
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
    renderLayanan();
    updateLayananContent("harian");
  }

  if (document.getElementById("page-pemesanan")) {
    const orderCategoryCardsContainer = document.getElementById(
      "order-category-cards"
    );
    const orderFormItemsContainer = document.getElementById("order-form-items");
    const orderPlaceholder = document.getElementById("order-placeholder");
    const cartItemsList = document.getElementById("cart-items-list");
    const subtotalPriceEl = document.getElementById("subtotal-price");
    const discountAmountEl = document.getElementById("discount-amount");
    const progressUpdateFeeContainer = document.getElementById(
      "progress-update-fee-container"
    );
    const progressUpdateFeeEl = document.getElementById("progress-update-fee");
    const fastTrackFeeContainer = document.getElementById(
      "fast-track-fee-container"
    );
    const fastTrackFeeEl = document.getElementById("fast-track-fee");
    const totalPriceEl = document.getElementById("total-price");
    const emptyCartMessage = document.getElementById("empty-cart-message");
    const checkoutBtn = document.getElementById("checkout-btn");
    const adminCopyBtn = document.getElementById("admin-copy-btn");
    const cancelAllBtn = document.getElementById("cancel-all-btn");
    const discountInput = document.getElementById("discount-request");
    const customerCommentsEl = document.getElementById("customer-comments");
    const progressUpdateCheckbox = document.getElementById(
      "progress-update-checkbox"
    );
    const fastTrackCheckbox = document.getElementById("fast-track-checkbox");
    const userInfoModal = document.getElementById("user-info-modal");
    const confirmOrderBtn = document.getElementById("confirm-order-btn");
    const closeUserInfoModalBtn = document.getElementById(
      "user-info-modal-close"
    );

    function updateProcessIndicator(step) {
      const path = document.getElementById("process-path-fg");
      const steps = document.querySelectorAll("#process-indicator .step-item");
      const totalLength = 360;
      steps.forEach((s, i) => {
        s.classList.toggle("active", i < step);
      });
      let offset = totalLength;
      if (step === 2) {
        offset = totalLength / 2;
      } else if (step >= 3) {
        offset = 0;
      }
      if (path) {
        path.style.strokeDashoffset = offset;
      }
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
            let bill = new Set(c.chapters || []);
            if (c.chapters?.includes("4") && c.chapters?.includes("5"))
              bill.delete("5");
            subtotal += item.price * bill.size;
          } else {
            subtotal += item.price * c.quantity;
          }
        }
      }
      return subtotal;
    }

    function updateCartUI() {
      localStorage.setItem("kawanBarajaCart", JSON.stringify(cart));
      if (!cartItemsList) return;
      cartItemsList.innerHTML = "";
      const subtotal = calculateSubtotal();

      let progressUpdateFee = 0;
      if (progressUpdateCheckbox.checked && subtotal > 0) {
        progressUpdateFee = Math.round(subtotal * 0.1);
        progressUpdateFeeEl.textContent = formatCurrency(progressUpdateFee);
        progressUpdateFeeContainer.classList.remove("hidden");
      } else {
        progressUpdateFeeContainer.classList.add("hidden");
      }

      let fastTrackFee = 0;
      if (fastTrackCheckbox.checked && subtotal > 0) {
        fastTrackFee = Math.round(subtotal * 0.25);
        fastTrackFeeEl.textContent = formatCurrency(fastTrackFee);
        fastTrackFeeContainer.classList.remove("hidden");
      } else {
        fastTrackFeeContainer.classList.add("hidden");
      }

      const maxDiscount = Math.floor(subtotal * 0.1);
      let discount = parseInt(discountInput.value) || 0;
      if (discount > maxDiscount && maxDiscount > 0) {
        discountInput.value = maxDiscount;
        discount = maxDiscount;
      }

      const cartKeys = Object.keys(cart);
      const hasItems = cartKeys.some((key) => {
        const item = cart[key];
        if (item.isCustom) return true;
        if (item.selectable) return item.chapters && item.chapters.length > 0;
        return true;
      });

      for (const itemId of cartKeys) {
        const c = cart[itemId];
        if (c.isCustom) {
          const el = document.createElement("div");
          el.className = "flex justify-between items-center text-sm";
          el.innerHTML = `<div><p class="font-semibold">${c.name}</p><p class="text-xs text-gray-500">Layanan Kustom</p></div><p class="font-bold text-brand-blue-500">Nego</p>`;
          cartItemsList.appendChild(el);
        } else {
          const item = servicesData
            .flatMap((s) => s.items)
            .find((i) => i.id === itemId);
          if (item) {
            if (item.selectable && (!c.chapters || c.chapters.length === 0))
              continue;
            const el = document.createElement("div");
            el.className = "flex justify-between items-center text-sm";
            let name = item.name;
            let priceText = "";
            let itemTotal = 0;
            if (item.selectable) {
              const selectedChapters = c.chapters || [];
              let bill = new Set(selectedChapters);
              if (c.totalChapters === 5 && bill.has("4") && bill.has("5")) {
                bill.delete("5");
              }
              name += ` (BAB ${selectedChapters.join(", ")})`;
              priceText = `${bill.size} x ${formatCurrency(item.price)}`;
              itemTotal = item.price * bill.size;
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
      adminCopyBtn.disabled = !hasItems;
      cancelAllBtn.disabled = !hasItems;
      updateProcessIndicator(hasItems ? 2 : 1);

      const finalTotal = Math.max(
        0,
        subtotal + progressUpdateFee + fastTrackFee - discount
      );
      subtotalPriceEl.textContent = formatCurrency(subtotal);
      discountAmountEl.textContent = `- ${formatCurrency(discount)}`;
      totalPriceEl.textContent = formatCurrency(finalTotal);
    }

    function renderOrderCategoryCards() {
      if (!orderCategoryCardsContainer) return;
      let html = servicesData
        .map(
          (s) => `
              <button data-category-slug="${s.slug}" class="order-category-btn p-3 rounded-lg shadow-sm text-center bg-white border border-transparent">
                <i data-lucide="${s.icon}" class="mx-auto w-8 h-8 text-${s.color}"></i>
                <span class="block text-xs font-semibold mt-2">${s.category}</span>
              </button>
            `
        )
        .join("");
      html += `<button data-category-slug="custom" class="order-category-btn p-3 rounded-lg shadow-sm text-center bg-white border border-transparent"><i data-lucide="plus-square" class="mx-auto w-8 h-8 text-brand-orange-500"></i><span class="block text-xs font-semibold mt-2">Layanan Lainnya</span></button>`;
      orderCategoryCardsContainer.innerHTML = html;
    }

    function renderOrderItems(slug) {
      const s = servicesData.find((v) => v.slug === slug);
      if (!s) return;
      orderPlaceholder.style.display = "none";
      orderFormItemsContainer.innerHTML = `<div class="space-y-3" style="animation:fadeInPage .5s"></div>`;
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
      lucide.createIcons();
    }

    function renderCustomServiceForm() {
      updateProcessIndicator(1);
      orderPlaceholder.style.display = "none";
      orderFormItemsContainer.innerHTML = `
              <div class="space-y-4" style="animation:fadeInPage .5s">
                <h4 class="font-bold text-gray-800">Buat Pesanan Kustom</h4>
                <p class="text-sm text-gray-600">Jelaskan kebutuhan Anda di bawah ini. Harga akan didiskusikan lebih lanjut melalui WhatsApp.</p>
                <div><label for="custom-service-name" class="block text-sm font-semibold text-gray-700">Nama Layanan/Tugas</label><input id="custom-service-name" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-orange-500 focus:ring-2 focus:ring-brand-orange-200 sm:text-sm" placeholder="Contoh: Review jurnal internasional"></div>
                <button id="add-custom-service-btn" class="inline-flex items-center gap-2 bg-brand-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-brand-orange-600 transition-all shadow"><i data-lucide="plus" class="w-4 h-4"></i> Tambahkan ke Pesanan</button>
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

    function resetCart() {
      cart = {};
      const active = document.querySelector(".order-category-btn.active");
      if (active) {
        const slug = active.dataset.categorySlug;
        if (slug === "custom") {
          renderCustomServiceForm();
        } else {
          renderOrderItems(slug);
        }
      }
      if (discountInput) discountInput.value = "";
      if (customerCommentsEl) customerCommentsEl.value = "";
      if (progressUpdateCheckbox) progressUpdateCheckbox.checked = false;
      if (fastTrackCheckbox) fastTrackCheckbox.checked = false;
      updateCartUI();
    }

    function getOrderMessage(isAdminMessage = false) {
      const subtotal = calculateSubtotal();
      const disc = parseInt(discountInput.value) || 0;
      let progressUpdateFee = 0;
      if (progressUpdateCheckbox.checked && subtotal > 0) {
        progressUpdateFee = Math.round(subtotal * 0.1);
      }
      let fastTrackFee = 0;
      if (fastTrackCheckbox.checked && subtotal > 0) {
        fastTrackFee = Math.round(subtotal * 0.25);
      }
      const finalTotal = Math.max(
        0,
        subtotal + progressUpdateFee + fastTrackFee - disc
      );
      const comments = customerCommentsEl.value.trim();

      let msg;
      if (isAdminMessage) {
        msg = `Assalamualaikum Kak,\n\nBerikut adalah rincian tagihan untuk pesanan layanan dari KawanBaraja:\n\n`;
      } else {
        msg = `Halo KawanBaraja, saya ${visitorData.name}. Saya tertarik untuk memesan layanan berikut:\n\n`;
        if (visitorData.deadline)
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
              regular += `*- ${item.name} (${
                c.category
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

      if (regular) msg += `*Layanan Dipesan:*\n${regular}`;
      if (custom) {
        if (regular) msg += `--------------------------------------\n`;
        msg += `*Layanan Kustom:*\n${custom}\n`;
      }

      msg += "--------------------------------------\n";
      msg += `*Subtotal:* ${formatCurrency(subtotal)}\n`;

      if (progressUpdateFee > 0)
        msg += `*Biaya Update Progres:* ${formatCurrency(progressUpdateFee)}\n`;
      if (fastTrackFee > 0)
        msg += `*Biaya Fast Track:* ${formatCurrency(fastTrackFee)}\n`;
      if (disc > 0) msg += `*Diskon Diminta:* -${formatCurrency(disc)}\n`;

      msg += `*Total Akhir:* ${formatCurrency(finalTotal)}\n\n`;

      if (comments)
        msg +=
          "--------------------------------------\n*Catatan Tambahan:*\n" +
          comments +
          "\n\n";

      const bsiNumber = "7324408295";
      const danaNumber = "088709650064";
      const accountHolder = "Syariffan";

      if (isAdminMessage) {
        msg +=
          "Silakan lakukan pembayaran agar pesanan dapat segera kami proses. Terima kasih atas kepercayaannya! 🙏\n\n*- Tim KawanBaraja*";
      } else {
        msg += `--------------------------------------\n*Informasi Pembayaran:*\nSilakan lakukan pembayaran ke salah satu rekening di bawah ini:\n\n*Bank Syariah Indonesia (BSI)*\nNo. Rek: ${bsiNumber}\nA/n: ${accountHolder}\n\n*DANA*\nNo. HP: ${danaNumber}\nA/n: ${accountHolder}\n\n`;
        msg += "Mohon konfirmasi dan informasinya. Terima kasih!";
      }
      return msg;
    }

    if (orderCategoryCardsContainer) {
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
    }

    if (orderFormItemsContainer) {
      orderFormItemsContainer.addEventListener("click", (e) => {
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
      orderFormItemsContainer.addEventListener("change", (e) => {
        const t = e.target;
        if (t.type === "checkbox" && !t.classList.contains("chapter-check")) {
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
              const total = cart[id]?.totalChapters || 5;
              cartItem.chapters = [];
              cartItem.totalChapters = total;
              document
                .getElementById(`selection_container_${id}`)
                ?.classList.remove("hidden");
              renderChapterCheckboxes(id, total);
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
          if (cart[id] && cart[id].totalChapters === 5) {
            const boxContainer = t.closest(`#chapters_${id}`);
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
            const boxContainer = t.closest(`#chapters_${id}`);
            boxContainer
              .querySelectorAll(".chapter-check:checked")
              .forEach((cb) => sel.push(cb.dataset.chapter));
            cart[id].chapters = sel.sort((a, b) => parseInt(a) - parseInt(b));
          }
          updateCartUI();
        }
      });
      orderFormItemsContainer.addEventListener("input", (e) => {
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
    }

    if (discountInput) {
      discountInput.addEventListener("input", updateCartUI);
      discountInput.addEventListener("blur", () => {
        let cur = parseInt(discountInput.value) || 0;
        const rounded = Math.round(cur / 1000) * 1000;
        if (discountInput.value !== "") discountInput.value = rounded;
        if (rounded === 0) discountInput.value = "";
        updateCartUI();
      });
    }
    if (cancelAllBtn) cancelAllBtn.addEventListener("click", resetCart);
    if (progressUpdateCheckbox)
      progressUpdateCheckbox.addEventListener("change", updateCartUI);
    if (fastTrackCheckbox)
      fastTrackCheckbox.addEventListener("change", updateCartUI);

    function showUserInfoModal() {
      userInfoModal.classList.remove("modal-hidden");
      userInfoModal.classList.add("modal-visible");
      document.getElementById("visitor-name").focus();
    }
    function closeUserInfoModal() {
      userInfoModal.classList.add("modal-hidden");
      userInfoModal.classList.remove("modal-visible");
    }
    if (checkoutBtn) checkoutBtn.addEventListener("click", showUserInfoModal);
    if (closeUserInfoModalBtn)
      closeUserInfoModalBtn.addEventListener("click", closeUserInfoModal);
    if (userInfoModal)
      userInfoModal.addEventListener("click", (e) => {
        if (e.target === userInfoModal) closeUserInfoModal();
      });

    if (confirmOrderBtn)
      confirmOrderBtn.addEventListener("click", () => {
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
        const msg = getOrderMessage(false);
        closeUserInfoModal();
        window.open(
          `https://wa.me/6283801343431?text=${encodeURIComponent(msg)}`,
          "_blank"
        );
      });

    if (adminCopyBtn)
      adminCopyBtn.addEventListener("click", () => {
        const msg = getOrderMessage(true);
        navigator.clipboard.writeText(msg).then(() => {
          const icon = adminCopyBtn.querySelector("i");
          icon.setAttribute("data-lucide", "check");
          lucide.createIcons();
          adminCopyBtn.classList.remove("bg-brand-blue-500");
          adminCopyBtn.classList.add("bg-brand-green-500");
          setTimeout(() => {
            icon.setAttribute("data-lucide", "clipboard-copy");
            lucide.createIcons();
            adminCopyBtn.classList.add("bg-brand-blue-500");
            adminCopyBtn.classList.remove("bg-brand-green-500");
          }, 2000);
        });
      });

    renderOrderCategoryCards();
    updateCartUI();
    const urlParams = new URLSearchParams(window.location.search);
    const categorySlug = urlParams.get("category");
    if (categorySlug) {
      const categoryButton = document.querySelector(
        `.order-category-btn[data-category-slug="${categorySlug}"]`
      );
      if (categoryButton) categoryButton.click();
    }
  }

  if (document.getElementById("page-tentang")) {
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
        .map((convo) => {
          return `
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
                          chat.name === "Admin"
                            ? "justify-end"
                            : "justify-start"
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
                        <i data-lucide="paperclip" class="w-6 h-6 text-gray-500"></i><i data-lucide="camera" class="w-6 h-6 text-gray-500"></i>
                    </div>
                  </div>
                </div>`;
        })
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

  if (document.getElementById("page-faq")) {
    const faqContainer = document.getElementById("faq-container");
    function renderFaq() {
      if (!faqContainer) return;
      faqContainer.innerHTML = faqData
        .map(
          (item) => `
              <div class="bg-white rounded-lg shadow-sm border border-gray-200">
                <button class="faq-question w-full flex justify-between items-center text-left p-4 font-semibold">
                  <span>${item.question}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-300"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <div class="faq-answer px-4"><div class="pb-4 text-gray-700">${item.answer}</div></div>
              </div>`
        )
        .join("");
    }
    faqContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".faq-question");
      if (!btn) return;
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector("svg");
      if (!answer || !icon) return;
      const wasOpen =
        answer.style.maxHeight && answer.style.maxHeight !== "0px";
      document.querySelectorAll(".faq-answer").forEach((ans) => {
        ans.style.maxHeight = null;
      });
      document.querySelectorAll(".faq-question svg").forEach((ic) => {
        ic.style.transform = "rotate(0deg)";
      });
      if (!wasOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
      }
    });
    renderFaq();
  }

  if (document.getElementById("page-kontak")) {
    const contactModal = document.getElementById("contact-modal");
    let currentContactInfo = {};
    function showContactModal(contactInfo) {
      currentContactInfo = contactInfo;
      const { type, name, icon, color } = contactInfo;
      document.getElementById("contact-modal-subtitle").textContent = name;
      const iconContainer = document.getElementById("contact-modal-icon-bg");
      iconContainer.className = `p-2 rounded-lg`;
      const iconEl = document.getElementById("contact-modal-icon");
      iconEl.setAttribute("data-lucide", icon);
      iconEl.className = `w-6 h-6 ${color}`;
      const messageTextarea = document.getElementById("contact-modal-message");
      let defaultMessage = "";
      if (type === "whatsapp") {
        defaultMessage = `Assalamualaikum Kak ${
          name.split(" ")[0]
        },\n\nSaya ingin bertanya tentang layanan KawanBaraja...`;
      } else {
        defaultMessage = `Halo Kak ${
          name.split(" ")[0]
        },\n\nSaya menemukan profil Anda dari website KawanBaraja.`;
      }
      messageTextarea.value = defaultMessage;
      contactModal.classList.remove("modal-hidden");
      contactModal.classList.add("modal-visible");
      messageTextarea.focus();
      lucide.createIcons();
    }
    function closeContactModal() {
      contactModal.classList.add("modal-hidden");
      contactModal.classList.remove("modal-visible");
    }
    document.getElementById("kontak").addEventListener("click", (e) => {
      const trigger = e.target.closest(".contact-modal-trigger");
      if (trigger) {
        e.preventDefault();
        const contactInfo = {
          type: trigger.dataset.type,
          name: trigger.dataset.name,
          id: trigger.dataset.id,
          icon: trigger.dataset.icon,
          color: trigger.dataset.color,
          url: trigger.dataset.url,
        };
        showContactModal(contactInfo);
      }
    });
    document
      .getElementById("contact-modal-send")
      .addEventListener("click", () => {
        const message = document.getElementById("contact-modal-message").value;
        let url = "";
        if (currentContactInfo.type === "whatsapp") {
          url = `https://wa.me/${
            currentContactInfo.id
          }?text=${encodeURIComponent(message)}`;
        } else {
          url = currentContactInfo.url;
        }
        if (url) window.open(url, "_blank");
        closeContactModal();
      });
    document
      .getElementById("contact-modal-close")
      .addEventListener("click", closeContactModal);
    document
      .getElementById("contact-modal-cancel")
      .addEventListener("click", closeContactModal);
    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) closeContactModal();
    });
  }

  const paymentModal = document.getElementById("payment-modal");
  if (paymentModal) {
    const paymentMeta = {
      dana: {
        title: "DANA",
        number: "088709650064",
        holder: "Syariffan",
        icon: "wallet",
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
      document.getElementById("payment-modal-copy").dataset.number =
        data.number;
      paymentModal.classList.remove("modal-hidden");
      paymentModal.classList.add("modal-visible");
      lucide.createIcons();
    }
    function closePaymentModal() {
      paymentModal.classList.add("modal-hidden");
      paymentModal.classList.remove("modal-visible");
    }

    document.querySelectorAll(".payment-modal-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const paymentType = trigger.dataset.pay;
        showPaymentModal(paymentType);
      });
    });
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

  const currentYear = document.getElementById("current-year");
  if (currentYear) currentYear.textContent = new Date().getFullYear();
  lucide.createIcons();
  const mainContent = document.getElementById("main-content");
  if (mainContent) mainContent.classList.add("loaded");
});
