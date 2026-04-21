const TARGET_ATTRIBUTE = "collapse-target";
const SRC_ATTRIBUTE = "collapse-src";

let sources = document.querySelectorAll(`[${SRC_ATTRIBUTE}]`).values();

for (let source of sources) {
  let name = source.getAttribute(SRC_ATTRIBUTE) ?? "default";
  source.addEventListener("click", () => {
    const targets = document
      .querySelectorAll(`[${TARGET_ATTRIBUTE}]`)
      .values()
      .filter((el) => (el.getAttribute(TARGET_ATTRIBUTE) ?? "default") == name);
    targets.forEach((target) => target.classList.toggle("hidden"));
  });
}
