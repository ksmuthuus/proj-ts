import Mapper from "./Mapper";

class CustomMap {
  private map: mapboxgl.Map;

  constructor(divId: string) {
    this.map = new mapboxgl.Map({
      accessToken:
        "pk.eyJ1Ijoia3NtdXRodXVzIiwiYSI6ImNrMmQ4bGNtZjUzMXIzY210ejkya2Z2ZXEifQ.N3B_o4iiZwcYgK4LDEx1VQ",
      container: divId,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 1
    });
  }

  marker(mapper: Mapper): void {
    new mapboxgl.Marker()
      .setLngLat({
        lng: mapper.location.lng,
        lat: mapper.location.lat
      })
      .setPopup(
        new mapboxgl.Popup({ offset: 15 }) // add popups
          .setHTML(mapper.popUpcontent())
      )
      .addTo(this.map);
  }
}

export default CustomMap;
