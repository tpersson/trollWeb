export const msurvey = {
  "title": "What kind of Troll investor are you?",
  "description": "A quick survey to check which companies would make you happy if the fall.. ",
  "logo": "/img/trolls/trollLogo.png",
  "logoWidth": "200px",
  "logoHeight": "auto",
  "pages": [
    {
      "name": "Troll Survey",
      "elements": [
        {
          "type": "rating",
          "name": "FossilFuel",
          "title": "What do you think about the use of fossil fuel?",
          "isRequired": true,
          "minRateDescription": "Stop it now!",
          "maxRateDescription": "Drill, baby drill!"
        },
        {
          "type": "rating",
          "name": "Insurance",
          "title": "What is your view on insurance companies?",
          "isRequired": true,
          "rateType": "smileys",
          "minRateDescription": "Blood suckers",
          "maxRateDescription": "Help you when you need"
        },
        {
          "type": "rating",
          "name": "Pharma",
          "isRequired": true,
          "title": "In my view pharmaceutical companies are ..",
          "rateType": "smileys",
          "minRateDescription": "Parasites",
          "maxRateDescription": "Life savers"
        },
        {
          "type": "rating",
          "name": "Crypto",
          "isRequired": true,
          "title": "My opinion about crypto is the following..",
          "rateType": "smileys",
          "minRateDescription": "Useless",
          "maxRateDescription": "The future"
        },
        {
          "type": "imagepicker",
          "isRequired": true,
          "name": "Dislike",
          "title": "Who do you DISLIKE the most?",
          "choices": [
            {
              "value": "Harris",
              "imageLink": "/image/kamalaAngry.jpg"
            },
            {
              "value": "Musk",
              "imageLink": "/image/elon_smoke.webp"
            },
            {
              "value": "Trump",
              "imageLink": "/image/trumpMugg.webp"
            },
          ],
          "imageFit": "cover"
        },
      ]
    }
  ]
}