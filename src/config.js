module.exports = global.config = {
  court: {
    selected: {
      type: 0,
    },
    detail: {
      name: "",
      address: "",
      description: "",
      image: "",
      type: 0,
      surface: 0,
      likeLevel: 0,
      likedPerson: 0,
      checkedIn: 0,
    },
  },
  filteredMarker: [],
  clickedMarkerId: 0,
  courtList: [
    {
      id: 1,
      courtName: "Fortuna Street-Soccer",
      courtAddress: "Cecilienallee 81-82, 40474 Düsseldorf",
      location: { lat: 51.248352, lng: 6.761963 },
      courtDescription:
        "Gummibezogenes Feld mit Banden unter der Theodor-Heuss-Brücke mit Gittertoren und Basketballkörben.",
      courtImage:
        "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sea550cef4bf4a774/image/i1376cbbf29b3e4c5/version/1565806643/image.jpg",
      courtType: 2,
      courtSurface: 3,
      courtLevelOfLiking: 3,
      courtNumberOfPersonLiked: 0,
      courtCheckedIn: 0,
    },
    {
      id: 2,
      courtName: "Straßenfußball @ Bilker Arcaden",
      courtAddress: "Friedrichstraße 133, 40217 Düsseldorf",
      location: { lat: 51.20795, lng: 6.771762 },
      courtDescription:
        "Gut versteckter, mit feinem Kies aufgeschüttete Fußballplatz hinter den Bilker Arcaden.",
      courtImage:
        "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sea550cef4bf4a774/image/ia253e03231ed0666/version/1565806685/image.jpg",
      courtType: 2,
      courtSurface: 5,
      courtLevelOfLiking: 3,
      courtNumberOfPersonLiked: 0,
      courtCheckedIn: 0,
    },
    {
      id: 3,
      courtName: "Freizeitpark Ulenberg",
      courtAddress: "Ulenbergstraße 11, 40223 Düsseldorf",
      location: { lat: 51.194441, lng: 6.774524 },
      courtDescription:
        "Mehreren Fußballplätzen, einer Torwand sowie Volleyball- und Basketballfeldern. Mit Bänken zum Zuschauen.",
      courtImage:
        "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sea550cef4bf4a774/image/i2434a14be6a6bc6f/version/1565808376/image.jpg",
      courtType: 2,
      courtSurface: 3,
      courtLevelOfLiking: 4,
      courtNumberOfPersonLiked: 0,
      courtCheckedIn: 0,
    },
    {
      id: 4,
      courtName: "Merkur Spielarena",
      courtAddress: "Am Staad 11, 40474 Düsseldorf",
      location: { lat: 51.263473, lng: 6.729509 },
      courtDescription:
        "Fußballplatz mit gepflegtem Kunstrasen und makellosen Tornetzen. Sehr voll nach Feierabend. ",
      courtImage:
        "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sea550cef4bf4a774/image/i8388ac9853d12026/version/1565807230/image.jpg",
      courtType: 2,
      courtSurface: 0,
      courtLevelOfLiking: 4,
      courtNumberOfPersonLiked: 0,
      courtCheckedIn: 0,
    },
    {
      id: 5,
      courtName: "Kolpingplatz Düsseldorf",
      courtAddress: "Kolpingplatz, 40477 Düsseldorf",
      location: { lat: 51.240414, lng: 6.778698 },
      courtDescription:
        "Öffentlicher Fußballplatz, der viel Raum zum Kicken bietet. Oft leer.",
      courtImage:
        "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sea550cef4bf4a774/image/i752be21985706f7b/version/1565808199/image.jpg",
      courtType: 2,
      courtSurface: 5,
      courtLevelOfLiking: 3,
      courtNumberOfPersonLiked: 0,
      courtCheckedIn: 0,
    },
    {
      id: 6,
      courtName: "Basketballplatz hinter Bilk Arcarden",
      courtAddress: "Friedrichstraße 145, 40217 Düsseldorf",
      location: { lat: 51.207883, lng: 6.771127 },
      courtDescription:
        "Hinter den Bilker Arcaden sind zwei eingezäunte Streetball Courts. Körbe nebeneinander Bodenbelag top, sehr einsam. ",
      courtImage:
        "https://i.ibb.co/MSRxbJt/Bildschirmfoto-2020-07-15-um-17-24-15.png",
      courtType: 0,
      courtSurface: 1,
      courtLevelOfLiking: 3,
      courtNumberOfPersonLiked: 0,
      courtCheckedIn: 0,
    },
    {
      id: 7,
      courtName: "Basketball in Derendorf",
      courtAddress: "Spichernpl., 40476 Düsseldorf",
      location: { lat: 51.247552, lng: 6.78402 },
      courtDescription:
        "Basketballplatz am Spichernplatz ideal für ein Fünf gegen Fünf. Bodenbelag insgesamt gut bespielbar. ",
      courtImage:
        "https://image.jimcdn.com/app/cms/image/transf/none/path/sea550cef4bf4a774/image/i61eae3cf0c4175ac/version/1553019117/image.jpg",
      courtType: 0,
      courtSurface: 1,
      courtLevelOfLiking: 4,
      courtNumberOfPersonLiked: 0,
      courtCheckedIn: 0,
    },
    {
      id: 8,
      courtName: "Beachvolleyball Nähe Ulenbergpark",
      courtAddress: "Ulenbergstraße 11, 40223 Düsseldorf",
      location: { lat: 51.195485, lng: 6.77488 },
      courtDescription:
        "Beachvolleyball zwischen Skatepark und Freizeitpark Ulenberg. Sandqualität gut! ",
      courtImage:
        "https://i.ibb.co/XJJxSCq/Bildschirmfoto-2020-07-15-um-17-39-12.png",
      courtType: 4,
      courtSurface: 4,
      courtLevelOfLiking: 4,
      courtNumberOfPersonLiked: 0,
      courtCheckedIn: 0,
    },
  ],
};
