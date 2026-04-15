export enum Tag {
  READING,
  EVENT,
}

export function articleTagToString(tag: Tag): string {
  switch (tag) {
    case Tag.EVENT:
      return "Evenement";
    case Tag.READING:
      return "Lezing";
    default:
      console.warn("unknown tag type");
      return "...";
  }
}
