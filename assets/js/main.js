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

  // --- GLOBAL VARIABLES ---
  let cart = JSON.parse(localStorage.getItem("kawanBarajaCart")) || {};
  let visitorData = { name: "Klien", deadline: "" };

  // --- GLOBAL FUNCTIONS ---
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);

  // Sidebar (Mobile)
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

  // FAB (Floating Action Button)
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

  // --- PAGE-SPECIFIC LOGIC ---

  // BERANDA PAGE
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

    function animateCounters() {
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
    }
    runHomepageAnimation();
  }

  // LAYANAN PAGE
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
      // Desktop
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

      // Mobile (Accordion)
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
        if (!wasActive) {
          btn.classList.add("active");
        }
      } else {
        updateLayananContent(slug);
      }
    });

    renderLayanan();
    updateLayananContent("harian");
  }

  // PEMESANAN PAGE
  if (document.getElementById("page-pemesanan")) {
    const orderCategoryCardsContainer = document.getElementById(
      "order-category-cards"
    );
    const orderFormItemsContainer = document.getElementById("order-form-items");
    const orderPlaceholder = document.getElementById("order-placeholder");
    const cartItemsList = document.getElementById("cart-items-list");
    const subtotalPriceEl = document.getElementById("subtotal-price");
    const discountAmountEl = document.getElementById("discount-amount");
    const trackOrderFeeContainer = document.getElementById(
      "track-order-fee-container"
    );
    const trackOrderFeeEl = document.getElementById("track-order-fee");
    const totalPriceEl = document.getElementById("total-price");
    const emptyCartMessage = document.getElementById("empty-cart-message");
    const checkoutBtn = document.getElementById("checkout-btn");
    const adminCopyBtn = document.getElementById("admin-copy-btn");
    const cancelAllBtn = document.getElementById("cancel-all-btn");
    const discountInput = document.getElementById("discount-request");
    const customerCommentsEl = document.getElementById("customer-comments");
    const trackOrderCheckbox = document.getElementById("track-order-checkbox");
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

      let trackOrderFee = 0;
      if (trackOrderCheckbox.checked && subtotal > 0) {
        trackOrderFee = Math.round(subtotal * 0.1);
        trackOrderFeeEl.textContent = formatCurrency(trackOrderFee);
        trackOrderFeeContainer.classList.remove("hidden");
      } else {
        trackOrderFeeContainer.classList.add("hidden");
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
        /* ... UI update logic for each cart item ... */
      }

      emptyCartMessage.style.display = hasItems ? "none" : "block";
      checkoutBtn.disabled = !hasItems;
      adminCopyBtn.disabled = !hasItems;
      cancelAllBtn.disabled = !hasItems;
      updateProcessIndicator(hasItems ? 2 : 1);

      const finalTotal = Math.max(0, subtotal + trackOrderFee - discount);
      subtotalPriceEl.textContent = formatCurrency(subtotal);
      discountAmountEl.textContent = `- ${formatCurrency(discount)}`;
      totalPriceEl.textContent = formatCurrency(finalTotal);
    }

    function renderOrderCategoryCards() {
      /* ... Function to render service categories ... */
    }
    function renderOrderItems(slug) {
      /* ... Function to render items for a selected category ... */
    }
    function renderCustomServiceForm() {
      /* ... Function to render the custom service form ... */
    }
    function renderChapterCheckboxes(itemId, total) {
      /* ... Function to render chapter checkboxes ... */
    }
    function resetCart() {
      /* ... Function to clear the cart ... */
    }

    // --- EVENT LISTENERS FOR PEMESANAN PAGE ---
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
      // Logic for checkbox, quantity buttons, chapter selection etc.
    }

    if (discountInput) discountInput.addEventListener("input", updateCartUI);
    if (cancelAllBtn) cancelAllBtn.addEventListener("click", resetCart);
    if (trackOrderCheckbox)
      trackOrderCheckbox.addEventListener("change", updateCartUI);

    // Checkout logic
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
        /* ... Logic to generate and open WhatsApp message ... */
      });
    if (adminCopyBtn)
      adminCopyBtn.addEventListener("click", () => {
        /* ... Logic to generate and copy admin message ... */
      });

    // INITIALIZE PEMESANAN PAGE
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

  // TENTANG PAGE
  if (document.getElementById("page-tentang")) {
    /* ... Logic for testimonials and rotating quote ... */
  }

  // FAQ PAGE
  if (document.getElementById("page-faq")) {
    /* ... Logic for FAQ accordion ... */
  }

  // KONTAK PAGE
  if (document.getElementById("page-kontak")) {
    /* ... Logic for contact modal ... */
  }

  // --- GLOBAL MODAL LOGIC (Payment) ---
  const paymentModal = document.getElementById("payment-modal");
  if (paymentModal) {
    const paymentMeta = {
      /* ... payment data ... */
    };
    function showPaymentModal(kind) {
      /* ... function to show modal ... */
    }
    function closePaymentModal() {
      /* ... function to close modal ... */
    }

    document.querySelectorAll(".payment-modal-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const paymentType = trigger.dataset.pay;
        showPaymentModal(paymentType);
      });
    });
    // ... other listeners for close and copy buttons
  }

  // --- FINAL INITIALIZATION ---
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
  lucide.createIcons();
  const mainContent = document.getElementById("main-content");
  if (mainContent) mainContent.classList.add("loaded");
});
