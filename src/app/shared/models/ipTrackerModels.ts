export interface ipAddress {
  ip: string
}

export interface Coords {
  lng:  number;
  lat:  number;
}

export interface DataBar {
  ip:         string;
  city:       string;
  region:     string;
  postalCode: string;
  timezone:   string;
  isp:        string
}

export interface IPTrackingData {
  ip:       string;
  location: Location;
  domains:  string[];
  as:       As;
  isp:      string;
}

export interface As {
  asn:    number;
  name:   string;
  route:  string;
  domain: string;
  type:   string;
}

export interface Location {
  country:    string;
  region:     string;
  city:       string;
  lat:        number;
  lng:        number;
  postalCode: string;
  timezone:   string;
  geonameId:  number;
}
