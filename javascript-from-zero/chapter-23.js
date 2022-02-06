function chapter23() {
  console.log('chapter-23');

  const funnyGuy = {
    firstName: 'Conan',
    lastName: "O'Brien",

    getName() {
      return `Name is: ${this.firstName} ${this.lastName}`;
    },
  };

  const theDude = {
    firstName: 'Jeffrey',
    jastName: 'Lebowski',

    getName() {
      return `Name is: ${this.firstName} ${this.lastName}`;
    },
  };

  const detective = {
    firstName: 'Adrian',
    lestName: 'Monk',

    getName() {
      return `Name is: ${this.firstName} ${this.lastName}`;
    },
  };
  const jsonObject = {
    response: {
      version: '0.1',
      termsofServise:
      'http://www.wunderground.com/weather/api/d/terms.html',
      features: {
        conditions: 1,
      },
    },

    current_observation: {
      image: {
        url: 'http://icons.wxug.com/graphics/wu2/logo_130x80.png',
        title: 'Weather Underground',
        link: 'http://www.wunderground.com',
      },
      display_location: {
        full: 'Seattle, WA',
        city: 'Seatle',
        state: 'WA',
        state_name: 'Washington',
        country: 'US',
        country_iso3166: 'US',
        zip: '98101',
        magic: '1',
        wmo: '99999',
        latitude: '47.61167908',
        langitude: '-122.33325958',
        elevation: '63.00000000',
      },

      observation_location: {
        full: 'Herrera, Inc., Seattle, Washington',
        sity: 'Herrera, Inc., Seattle',
        state: 'Washington',
        country: 'US',
        country_iso3166: 'US',
        latitude: '47.616558',
        longtitude: '-122.341240',
        elevation: '121 ft',
      },
      estimated: {},
      station_id: 'KWASEATT187',
      observation_time: 'Last Updated on August 28, 9:28 PM PDT',
      observation_time_rfc822: 'Fri, 28 Aug 2015 21:28:12 -0700',
      observation_epoch: '1440822492',
      local_time_rfc822: 'Fri, 28 Aug 2015 21:28:45 -0700',
      local_epoch: '1440822525',
      local_tz_short: 'PDT',
      local_tz_long: 'America/Los_Angeles',
      local_tz_offset: '-0700',
      weather: 'Overcast',
      temperature_string: '68.0 F (20.0 C)',
      temp_f: 68.0,
      temp_c: 20.0,
      relative_humidity: '71%',
      wind_string: 'Calm',
      wind_dir: 'NNW',
      wind_degrees: 331,
      wind_mph: 0.0,
      wind_gust_mph: '10.0',
      wind_kph: 0,
      wind_gust_kph: '16.1',
      pressure_mb: '1008',
      pressure_in: '29.78',
      pressure_trend: '-',
      dewpoint_string: '58 F (15 C)',
      dewpoint_f: 58,
      dewpoint_c: 15,
      heat_index_string: 'NA',
      heat_index_f: 'NA',
      heat_index_c: 'NA',
      windchill_string: 'NA',
      windchill_f: 'NA',
      windchill_c: 'NA',
      feelslike_string: '68.0',
      feelslike_f: 'NA',
      feelslike_c: 'NA',
      visibility_mi: '10.0',
      visibility_km: '16.1',
      solarradiation: '__',
      UV: '0',
      precip_1hr_string: '0.00 in ( 0 mm)',
      precip_1hr_in: '0.00',
      precip_1hr_metric: ' 0',
      precip_today_string: '0.00 in (0 mm)',
      precip_today_in: '0.00',
      precip_today_metric: '0',
      icon: 'cloudy',
      icon_url: 'http://icons.wxug.com/i/c/k/nt_cloudy.gif',
      nowcast: '',
    },
  };

  const exampleJSON = {
    firstName: 'Kirupa',
    lastName: 'Chinnathambi',
    special: {
      admin: true,
      userID: 203,
    },
    devices: [
      {
        type: 'laptop',
        mobel: 'Macbook Pro',
      },
      {
        type: 'phone',
        mobel: 'iphone XS',
      },
    ],
  };
  exampleJSON.firstName;
  exampleJSON.lastName;

  // function processRequest(e) {
  //   if (xhr.readyState == 4 && xhr.status == 200) {
  //     const response = JSON.parse(xhr.responseText);
  //     selectInitialState(response.region);
  //   }
  // }
}
export default chapter23;
