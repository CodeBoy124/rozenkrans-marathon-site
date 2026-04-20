/*
src: collapse-src
tar: collapse-target
*/

(() => {
  const target_attribute = "collapse-target";
  const src_attribute = "collapse-src";

  let targets = document
    .querySelectorAll(`[${target_attribute}]`)
    .values()
    .reduce(
      (group, item) => {
        const item_name = item.getAttribute(target_attribute) ?? "default";
        if (!(item_name in group)) group[item_name] = [];
        group[item_name].push(item);
        return group;
      },
      {} as { [name: string]: Element[] },
    );

  let sources = document
    .querySelectorAll(`[${src_attribute}]`)
    .values()
    .reduce(
      (group, item) => {
        const item_name = item.getAttribute(src_attribute) ?? "default";
        if (item_name in group)
          throw new Error(
            "Cannot have multiple collapse-src with the same name",
          );
        group[item_name] = item;
        return group;
      },
      {} as { [name: string]: Element },
    );

  for (let item_name in sources) {
    const found_targets = targets[item_name] ?? [];
    sources[item_name].addEventListener("click", () => {
      found_targets.forEach((target) => {
        target.classList.toggle("hidden");
      });
    });
  }
})();
