// @types/leaflet.d.ts
import "leaflet";

declare module "leaflet" {
  namespace Icon {
    interface Default {
      _getIconUrl?: () => string; // Add this line
    }
  }
}
 