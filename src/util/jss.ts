export type JssValue = string | null;
export type JssSheet = { [key: string]: JssValue };

export function jssToInlineCss(sheet: JssSheet) {
  let txt = "";
  for (let key in sheet) {
    if (sheet[key] == null) continue;
    txt += `${key}: ${sheet[key]};`;
  }
  return txt;
}
