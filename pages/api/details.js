export default (req, res) => {
  const { id } = req.query;

  const details = {
    6: {
      id: 6,
      name: "Akita",
      life_span: "10 - 14 years",
      bred_for: "Hunting bears",
      breed_group: "Working",
      temperament: "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous",
      weight: { "imperial": "65 - 115 lbs", "metric": "29 - 52 kgs" },
      height: {
        imperial: "24 - 28 inches at the withers",
        metric: "61 - 71 cm at the withers"
      }
    },
    16: {
      id: 16,
      name: "American Staffordshire Terrier",
      life_span: "12 - 15 years",
      bred_for: "",
      breed_group: "Terrier",
      temperament: "Tenacious, Friendly, Devoted, Loyal, Attentive, Courageous",
      weight: { "imperial": "50 - 60 lbs", "metric": "23 - 27 kgs" },
      height: {
        imperial: "17 - 19 inches at the withers",
        metric: "43 - 48 cm at the withers"
      }
    },
    81: {
      id: 81,
      name: "Chow Chow",
      life_span: "12 - 15 years",
      bred_for: "Guardian, cart pulling, hunting",
      breed_group: "Non-Sporting",
      temperament: "Aloof, Loyal, Independent, Quiet",
      weight: { "imperial": "40 - 70 lbs", "metric": "18 - 32 kgs" },
      height: {
        imperial: "17 - 20 inches at the withers",
        metric: "43 - 51 cm at the withers"
      }
    },
    121: {
      id: 121,
      name: "Golden Retriever",
      life_span: "10 - 12 years",
      bred_for: "Retrieving",
      breed_group: "Sporting",
      temperament: "Intelligent, Kind, Reliable, Friendly, Trustworthy, Confident",
      weight: { "imperial": "55 - 75 lbs", "metric": "25 - 34 kgs" },
      height: {
        imperial: "21.5 - 24 inches at the withers",
        metric: "55 - 61 cm at the withers"
      }
    }
  }
  res.status(200).json(details[id])
}