let instruments = [
  {
    id: 1,
    type: "Baby Piano",
    brand: "Steinway Spirio Model B",
    finishes: "Ebonised satin, ebonised high gloss",
    cost: "$50,000",
    imageUrl:
      "https://azure.wgp-cdn.co.uk/app-pianist/posts/Steinway-Model-B-Spirio-min-61498.jpg?&width=380&height=380&bgcolor=ffffff&mode=crop"
  },
  {
    id: 2,
    type: "Concert Grand Piano",
    brand: "Yamaha CFX",
    finishes: "Polished ebony",
    cost: "$100,000",
    imageUrl:
      "https://azure.wgp-cdn.co.uk/app-pianist/posts/Yamaha-CFX-normal-min-49640.jpg?&width=380&height=380&bgcolor=ffffff&mode=crop"
  },
  {
    id: 3,
    type: "Upright piano",
    brand: "Boston by Steinway & Sons",
    finishes: "Ebonised polish",
    cost: "$10,000",
    imageUrl:
      "https://azure.wgp-cdn.co.uk/app-pianist/posts/Boston-132-upright-min-07912.jpg?&width=380&height=380&bgcolor=ffffff&mode=crop"
  },
  {
    id: 4,
    type: "Upright piano",
    brand: "Essex by Steinway & Sons",
    finishes: "Ebonised polish, sapele mahogany polish",
    cost: "$12,000",
    imageUrl:
      "https://azure.wgp-cdn.co.uk/app-pianist/posts/Essex-EUP_123-upright-min-70900.jpg?&width=380&height=380&bgcolor=ffffff&mode=crop"
  },
  {
    id: 5,
    type: "",
    brand: "",
    finishes: "",
    cost: "",
    imageUrl: ""
  },
  {
    id: 6,
    type: "",
    brand: "",
    finishes: "",
    cost: "",
    imageUrl: ""
  },
  {
    id: 7,
    type: "",
    brand: "",
    finishes: "",
    cost: "",
    imageUrl: ""
  },
  {
    id: 8,
    type: "",
    brand: "",
    finishes: "",
    cost: "",
    imageUrl: ""
  }
];

let id = 9;

module.exports = {
  instruments,

  readInstruments: (req, res) => {
    res.status(200).json(instruments);
  },

  createInstrument: (req, res) => {
    const { brand, type, finishes, cost, imageUrl } = req.body;
    console.log(req.body);
    const makeInstrument = {
      brand,
      type,
      finishes,
      cost,
      imageUrl,
      id
    };
    instruments.push(makeInstrument);
    id++;
    res.status(200).json(instruments);
  },
  editInstrument: (req, res) => {
    const { id } = req.params;
    const { cost } = req.body;
    console.log("edit", req.body);
    console.log("113", id);
    console.log("114", cost);
    instruments.forEach(instrument => {
      console.log("edit", instrument);
      if (instrument.id === +id) {
        instrument.cost = cost;
      }
      //   console.log("editnow", instrument)
    });
    res.status(200).json(instruments);
  },
  deleteInstrument: (req, res) => {
    const { id } = req.params;
    instruments.filter((e, i) => {
      console.log("deletecontroller", e.id, id);
      if (e.id !== id) {
        instruments.splice(i, 1);
      }
    });
    res.status(200).json(instruments);
  }
};
