type EventType = {
  title: string,
  time: string,
  id: number,
  description: string,
  imgPath?: string,
  conductor?: string,
  location: string,
  contact?: string,
  type: "event" | "class"
};

export type {
  EventType
}