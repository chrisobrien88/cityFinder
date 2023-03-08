export interface IMarkerType {
    lat: number,
    lng: number
  }

export interface ICity {
    name: string,
    position: IMarkerType
}