export type JssValue_t = string | null;
export type JssSheet_t = { [key: string]: JssValue_t };

export function jssToInlineCss(sheet: JssSheet_t) {
  let txt = "";
  for (let key in sheet) {
    if (sheet[key] == null) continue;
    txt += `${key}: ${sheet[key]};`;
  }
  return txt;
}
