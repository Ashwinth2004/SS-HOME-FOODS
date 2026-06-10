/* ===========================================================
   SS HOME FOODS — Site Scripts
   =========================================================== */
(function () {
  "use strict";

  /* ---------- Mobile hamburger nav ---------- */
  var burger = document.getElementById("hamburger");
  var links = document.getElementById("navLinks");
  var overlay = document.getElementById("navOverlay");

  function closeNav() {
    if (!links) return;
    links.classList.remove("open");
    burger && burger.classList.remove("open");
    overlay && overlay.classList.remove("show");
    document.body.style.overflow = "";
  }
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.classList.toggle("open", open);
      overlay && overlay.classList.toggle("show", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
    overlay && overlay.addEventListener("click", closeNav);
  }

  /* ---------- Subscription Modal ---------- */
  var modal = document.getElementById("subModal");
  function openModal() {
    if (!modal) return;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }
  // open triggers
  document.querySelectorAll("[data-open-sub]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  });
  // close triggers
  document.querySelectorAll("[data-close-sub]").forEach(function (el) {
    el.addEventListener("click", closeModal);
  });
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeModal(); closeNav(); }
  });

  // Auto-popup once per session, after 6 seconds
  if (modal && !sessionStorage.getItem("sshf_sub_seen")) {
    setTimeout(function () {
      openModal();
      sessionStorage.setItem("sshf_sub_seen", "1");
    }, 6000);
  }

  /* ---------- Reviews: seamless right-to-left marquee ---------- */
  // Duplicate the review cards once so the CSS translateX(-50%) loop is seamless.
  var marquee = document.getElementById("reviewMarquee");
  if (marquee) {
    var originals = Array.prototype.slice.call(marquee.children);
    originals.forEach(function (node) {
      var clone = node.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      marquee.appendChild(clone);
    });
  }

  /* ---------- Menu: Day Tabs ---------- */
  var dayTabs = document.querySelectorAll(".day-tab");
  if (dayTabs.length) {
    dayTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var day = tab.getAttribute("data-day");
        dayTabs.forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        document.querySelectorAll(".day-panel").forEach(function (p) {
          p.classList.toggle("active", p.getAttribute("data-day") === day);
        });
      });
    });
  }

  /* ---------- Menu: Veg / Non-veg filter ---------- */
  var dietBtns = document.querySelectorAll(".diet-toggle button");
  if (dietBtns.length) {
    dietBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.getAttribute("data-diet"); // all | veg | nonveg
        dietBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        document.querySelectorAll("[data-type]").forEach(function (item) {
          var t = item.getAttribute("data-type");
          var show = mode === "all" || t === mode;
          item.classList.toggle("diet-hide", !show);
        });
      });
    });
  }

  /* ---------- Contact form (front-end demo) ---------- */
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = document.getElementById("formOk");
      ok && ok.classList.add("show");
      form.reset();
      setTimeout(function () { ok && ok.classList.remove("show"); }, 6000);
    });
  }

  /* ---------- Footer year ---------- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
