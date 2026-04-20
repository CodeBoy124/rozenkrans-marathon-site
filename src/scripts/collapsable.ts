const target_attribute = "collapse-target";
const src_attribute = "collapse-src";

let sources = document.querySelectorAll(`[${src_attribute}]`).values();

for (let source of sources) {
  let name = source.getAttribute(src_attribute) ?? "default";
  source.addEventListener("click", () => {
    const targets = document
      .querySelectorAll(`[${target_attribute}]`)
      .values()
      .filter((el) => (el.getAttribute(target_attribute) ?? "default") == name);
    targets.forEach((target) => target.classList.toggle("hidden"));
  });
}
