(function () {
  const data = Array.isArray(window.FOOD_DATA) ? window.FOOD_DATA : [];

  const state = {
    city: "all",
    district: "all",
    category: "all",
    query: ""
  };

  const els = {
    cardsGrid: document.getElementById("cards-grid"),
    emptyState: document.getElementById("empty-state"),
    emptyTitle: document.getElementById("empty-title"),
    emptyDesc: document.getElementById("empty-desc"),
    statTotal: document.getElementById("stat-total"),
    statCity: document.getElementById("stat-city"),
    statCounty: document.getElementById("stat-county"),
    tabButtons: document.querySelectorAll(".tab-btn"),
    districtFilter: document.getElementById("district-filter"),
    categoryFilter: document.getElementById("category-filter"),
    searchInput: document.getElementById("search-input"),
    modal: document.getElementById("detail-modal"),
    modalClose: document.getElementById("modal-close"),
    modalImg: document.getElementById("modal-img"),
    modalCityBadge: document.getElementById("modal-city-badge"),
    modalDistrictBadge: document.getElementById("modal-district-badge"),
    modalCategoryBadge: document.getElementById("modal-category-badge"),
    modalTitle: document.getElementById("modal-title"),
    modalSummary: document.getElementById("modal-summary"),
    modalDescription: document.getElementById("modal-description"),
    modalHighlightsWrap: document.getElementById("modal-highlights-wrap"),
    modalHighlights: document.getElementById("modal-highlights"),
    modalAddress: document.getElementById("modal-address"),
    modalHours: document.getElementById("modal-hours"),
    modalPhone: document.getElementById("modal-phone"),
    modalPrice: document.getElementById("modal-price"),
    modalSourceText: document.getElementById("modal-source-text"),
    modalSourceLink: document.getElementById("modal-source-link")
  };

  const DEFAULT_IMG = "assets/images/placeholder.svg";

  function updateStats() {
    const cityCount = data.filter((item) => item.city === "新竹市").length;
    const countyCount = data.filter((item) => item.city === "新竹縣").length;
    els.statTotal.textContent = data.length;
    els.statCity.textContent = cityCount;
    els.statCounty.textContent = countyCount;
  }

  function populateSelectOptions() {
    const scoped = state.city === "all" ? data : data.filter((d) => d.city === state.city);
    const districts = [...new Set(scoped.map((d) => d.district).filter(Boolean))];
    const categories = [...new Set(scoped.map((d) => d.category).filter(Boolean))];

    const prevDistrict = state.district;
    els.districtFilter.innerHTML = '<option value="all">所有鄉鎮市區</option>';
    districts.forEach((dist) => {
      const opt = document.createElement("option");
      opt.value = dist;
      opt.textContent = dist;
      els.districtFilter.appendChild(opt);
    });
    if (districts.includes(prevDistrict)) {
      els.districtFilter.value = prevDistrict;
    } else {
      state.district = "all";
    }

    const prevCategory = state.category;
    els.categoryFilter.innerHTML = '<option value="all">所有類別</option>';
    categories.forEach((cat) => {
      const opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = cat;
      els.categoryFilter.appendChild(opt);
    });
    if (categories.includes(prevCategory)) {
      els.categoryFilter.value = prevCategory;
    } else {
      state.category = "all";
    }
  }

  function getFilteredData() {
    const q = state.query.trim().toLowerCase();
    return data.filter((item) => {
      if (state.city !== "all" && item.city !== state.city) return false;
      if (state.district !== "all" && item.district !== state.district) return false;
      if (state.category !== "all" && item.category !== state.category) return false;
      if (q) {
        const haystack = [
          item.name,
          item.city,
          item.district,
          item.category,
          item.summary,
          item.description,
          item.address,
          ...(Array.isArray(item.highlights) ? item.highlights : [])
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }

  function cityBadgeClass(city) {
    return city === "新竹市" ? "badge-city-hsinchu" : "badge-county-hsinchu";
  }

  function renderCards() {
    const list = getFilteredData();
    els.cardsGrid.innerHTML = "";

    if (list.length === 0) {
      els.emptyState.classList.remove("hidden");
      if (data.length === 0) {
        els.emptyTitle.textContent = "目前尚未收錄美食資料";
        els.emptyDesc.innerHTML =
          "請將外部網站的 HTML 檔案提供給 AI 助手，系統將自動依 <code>AGENTS.md</code> 規則整理並顯示於此頁面。";
      } else {
        els.emptyTitle.textContent = "找不到符合條件的美食";
        els.emptyDesc.textContent = "請試著切換縣市分類、清除篩選條件或更換搜尋關鍵字。";
      }
      return;
    }

    els.emptyState.classList.add("hidden");

    list.forEach((item) => {
      const card = document.createElement("article");
      card.className = "food-card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `查看 ${item.name} 詳細資料`);

      const imgSrc = item.image || DEFAULT_IMG;
      card.innerHTML = `
        <div class="card-thumb">
          <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(item.name)}" onerror="this.src='${DEFAULT_IMG}'" />
          <div class="card-badges">
            <span class="badge ${cityBadgeClass(item.city)}">${escapeHtml(item.city || "未分類")}</span>
            ${item.district ? `<span class="badge badge-district">${escapeHtml(item.district)}</span>` : ""}
          </div>
        </div>
        <div class="card-body">
          <div class="card-meta-top">
            <span class="badge badge-category">${escapeHtml(item.category || "美食推薦")}</span>
            ${item.price ? `<span class="card-price">${escapeHtml(item.price)}</span>` : ""}
          </div>
          <h2 class="card-title">${escapeHtml(item.name)}</h2>
          <p class="card-summary">${escapeHtml(item.summary || item.description || "")}</p>
          <div class="card-footer">
            <span class="card-address">${escapeHtml(item.address || "點擊查看詳細地址")}</span>
            <span class="card-more">查看詳情 &rarr;</span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => openModal(item));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(item);
        }
      });

      els.cardsGrid.appendChild(card);
    });
  }

  function openModal(item) {
    els.modalImg.src = item.image || DEFAULT_IMG;
    els.modalImg.alt = item.name || "美食圖片";
    els.modalImg.onerror = function () {
      this.src = DEFAULT_IMG;
    };

    els.modalCityBadge.textContent = item.city || "未分類";
    els.modalCityBadge.className = `badge ${cityBadgeClass(item.city)}`;

    if (item.district) {
      els.modalDistrictBadge.textContent = item.district;
      els.modalDistrictBadge.classList.remove("hidden");
    } else {
      els.modalDistrictBadge.classList.add("hidden");
    }

    els.modalCategoryBadge.textContent = item.category || "美食推薦";
    els.modalTitle.textContent = item.name || "";
    els.modalSummary.textContent = item.summary || "";
    els.modalDescription.textContent = item.description || item.summary || "暫無詳細介紹。";

    if (Array.isArray(item.highlights) && item.highlights.length > 0) {
      els.modalHighlights.innerHTML = "";
      item.highlights.forEach((h) => {
        const li = document.createElement("li");
        li.textContent = h;
        els.modalHighlights.appendChild(li);
      });
      els.modalHighlightsWrap.classList.remove("hidden");
    } else {
      els.modalHighlightsWrap.classList.add("hidden");
    }

    els.modalAddress.textContent = item.address || "未提供";
    els.modalHours.textContent = item.hours || "未提供";
    els.modalPhone.textContent = item.phone || "未提供";
    els.modalPrice.textContent = item.price || "未提供";

    const src = item.source || {};
    const sourceParts = [];
    if (src.title) sourceParts.push(`來源：${src.title}`);
    if (src.addedDate) sourceParts.push(`收錄日期：${src.addedDate}`);
    els.modalSourceText.textContent = sourceParts.length > 0 ? sourceParts.join(" ｜ ") : "未註明資料來源";

    if (src.url && /^https?:\/\//i.test(src.url)) {
      els.modalSourceLink.href = src.url;
      els.modalSourceLink.classList.remove("hidden");
    } else {
      els.modalSourceLink.classList.add("hidden");
    }

    els.modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    els.modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  els.tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      els.tabButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      state.city = btn.dataset.city;
      state.district = "all";
      populateSelectOptions();
      renderCards();
    });
  });

  els.districtFilter.addEventListener("change", (e) => {
    state.district = e.target.value;
    renderCards();
  });

  els.categoryFilter.addEventListener("change", (e) => {
    state.category = e.target.value;
    renderCards();
  });

  els.searchInput.addEventListener("input", (e) => {
    state.query = e.target.value;
    renderCards();
  });

  els.modalClose.addEventListener("click", closeModal);
  els.modal.addEventListener("click", (e) => {
    if (e.target === els.modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !els.modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  updateStats();
  populateSelectOptions();
  renderCards();
})();
